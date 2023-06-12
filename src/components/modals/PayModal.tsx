import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { payModalState } from "@/recoil/atom";
import { useRecoilState } from "recoil";
import Image from "next/image";

import StripeLogo from "@/images/stripe.png";
import PaystackLogo from "@/images/paystack.png";
import PaypalLogo from "@/images/paypal.png";
import FlutterwaveLogo from "@/images/flutterwave.png";
import SquadLogo from "@/images/squad.png";
import MonnnifyLogo from "@/images/monnify.png";
import PayuLogo from "@/images/payu.png";

function PayModal() {
  const [isOpen, setIsOpen] = useRecoilState(payModalState);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <div className="mt-5 text-center text-lg font-bold">
            Pick a payment processor
          </div>
          <div className="flex flex-col divide-y text-lg">
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={StripeLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>Stripe</span>
            </div>
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={PaystackLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>Paystack</span>
            </div>
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={PaypalLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>PayPal</span>
            </div>
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={FlutterwaveLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>Flutterwave</span>
            </div>
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={SquadLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>Squad</span>
            </div>
            <div className="flex gap-4 p-5">
              <Image
                alt=""
                src={MonnnifyLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>Monnify</span>
            </div>
            <div className="di5ide-x flex gap-4 p-4">
              <Image
                alt=""
                src={PayuLogo}
                className="h-7 w-7 rounded-full object-cover"
                height={100}
                width={100}
              />
              <span>PayU</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PayModal;
