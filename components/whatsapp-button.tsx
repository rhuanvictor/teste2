import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/social';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/5546999418985"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <WhatsAppIcon className="w-10 h-10 text-white" />
    </Link>
  );
};

export default WhatsAppButton;
