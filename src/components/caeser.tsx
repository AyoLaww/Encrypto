"use client"

import { Button } from "./ui/button";
import HyperText from "./ui/hyper-text";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";

export default function CaeserCipher(){
    const [inputText, setInputText] = useState<string>('');
  const [shiftValue, setShiftValue] = useState<number>(3); // Default shift of 3
  const [encryptedOutput, setEncryptedOutput] = useState<string>('');
  const [shiftError, setShiftError] = useState<string>('');

  // Caesar Cipher encryption function
  const caesarCipher = (text: string, shift: number): string => {
    // Ensure shift is a number and within reasonable range
    const normalizedShift = shift % 26;

    return text
      .split('')
      .map(char => {
        // Check if character is a letter
        if (char.match(/[a-z]/i)) {
          // Determine the base (uppercase or lowercase)
          const base = char.toLowerCase() === char ? 97 : 65;
          
          // Perform the shift
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + normalizedShift + 26) % 26) + base
          );
        }
        // If not a letter, return the character as is
        return char;
      })
      .join('');
  };

  // Handle shift value change with validation
  const handleShiftChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Clear any previous errors
    setShiftError('');

    // Validate input
    if (value === '') {
      // Allow empty input
      setShiftValue(0);
      return;
    }

    // Parse the input
    const numValue = Number(value);

    if (isNaN(numValue)) {
      // Non-numeric input
      setShiftError('Please enter a valid number');
      return;
    }

    if (numValue < 0) {
      // Negative number
      setShiftError('Shift must be a positive number');
      setShiftValue(0);
      return;
    }

    if (numValue > 25) {
      // Number greater than 25
      setShiftError('Shift must be between 0 and 25');
      setShiftValue(25); // Cap at 25
      return;
    }

    // Valid input
    setShiftValue(numValue);
  };

  // Handle encryption when button is clicked
  const handleEncrypt = () => {
    // Additional validation before encryption
    if (shiftValue === 0 || shiftValue < 0 || shiftValue > 25) {
      setShiftError('Please enter a valid shift between 0 and 25');
      return;
    }

    const encrypted = caesarCipher(inputText, shiftValue);
    setEncryptedOutput(encrypted);
  };





    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center justify-center h-fit gap-4">
                <HyperText  
                className="text-4xl font-black text-green-400 font-roboto-mono"
                text="Ceaser"
                duration={1600}
                />
                <HyperText  
                className="text-4xl font-black text-green-400 font-roboto-mono"
                text="Cipher"
                duration={1600}
                />
            </div>
            
            <div className="flex flex-col gap-5">
                        <HyperText  
                        className="text-xl text-green-400 font-roboto-mono"
                        text="Input"
                        duration={1600}
                        />

                    <div className="flex flex-row gap-5">
                        <Input 
                        className="text-green-400 border-green-500 bg-transparent p-1 px-3 w-full font-roboto-mono focus:outline-none"
                        placeholder="Text to be encrypted" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        type="text"
                        />
                        <div className="flex flex-col w-1/4">

                        <Input 
                            className={`text-green-400 border-green-500 bg-transparent p-1 px-3 font-roboto-mono focus:outline-none ${shiftError ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Shift"
                            value={shiftValue}
                            onChange={handleShiftChange}
                        />
                        {shiftError && (
                            <p className="text-red-500 text-sm mt-1">{shiftError}</p>
                        )}
                        </div>


                        <Button 
                        className="text-black bg-green-500 hover:text-green-400 hover:border-2 hover:border-green-500 hover:bg-transparent p-1 px-3 w-1/2 font-roboto-mono active:bg-green-400 active:text-black"
                        onClick={handleEncrypt}
                        >Encrypt</Button>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5">
                    <HyperText  
                        className="text-xl text-green-400 font-roboto-mono"
                        text="Encryption"
                        duration={1600}
                        />
                    <div className="border border-green-500 w-full rounded-md p-2">
                        <p className="text-green-400 font-roboto-mono text-2xl">{encryptedOutput || 'Encrypted text will appear here'}</p>
                    </div>
                </div>
        </div>

           
        </>
    )
}