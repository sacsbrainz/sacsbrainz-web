import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { payModalState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

function PayModal() {
  const [isOpen, setIsOpen] = useRecoilState(payModalState);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <div className="flex flex-col divide-y">
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>Stripe</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>Paystack</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>PayPal</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>Flutterwave</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>Squad</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>Monnify</span>
            </div>
            <div className="flex gap-2 p-3">
              <div className=" h-7 w-7 animate-pulse rounded-full bg-gray-300" />
              <span>PayU</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PayModal;
