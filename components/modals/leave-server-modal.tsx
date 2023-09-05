"use client";

import { useModal } from "@/hooks/use-modal-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LeaveServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const [isLoading, setIsLoading] = useState(false);

  const { server } = data;
  const isModalOpen = isOpen && type === "leaveServer";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>
            Leave Server
          </DialogTitle>
          <DialogDescription className='text-center text-zinc-500'>
            Are you sure want to leave this{" "}
            <span className='font-semibold text-indigo-500'>
              {server?.name}
            </span>{" "}
            server?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className='flex items-center justify-between w-full'>
            <Button
              disabled={isLoading}
              onClick={onClose}
              variant='ghost'
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => {}}
              variant='primary'
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveServerModal;
