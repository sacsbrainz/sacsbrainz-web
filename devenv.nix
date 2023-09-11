{ pkgs, config, ... }:

{
  packages = [ pkgs.openssl pkgs.prisma-engines ];
  enterShell = ''
    if [[ ! -d node_modules ]]; then
        npm install
    fi
      export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
      export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
      export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
      export PRISMA_INTROSPECTION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/introspection-engine"
      export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
  '';

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs-18_x;
  };

  # Start the frontend server
  processes.start-frontend.exec = "npx prisma generate";
  # processes.start-frontend.exec = "npm run dev";

  # See full reference at https://devenv.sh/reference/options/
}
