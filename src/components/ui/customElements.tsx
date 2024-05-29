import React from 'react';
import niddiaChatBot from '@/assets/niddiaChatBot.png';
import Image from 'next/image';

type CustomBotProps = {
  size: number;
  className?: string;
};

const CustomBot: React.FC<CustomBotProps> = ({ size, className = "" }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative' }} className={className}>
      <Image
        src={niddiaChatBot}
        alt="Niddia Chat BOT"
        layout="fill" // Hace que la imagen se expanda para llenar el contenedor
        objectFit="contain" 
      />
    </div>
  );
};

export default CustomBot;