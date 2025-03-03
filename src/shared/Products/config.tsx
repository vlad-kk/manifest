import React from 'react';
import { Paraphraser } from '../../../public/icons/Paraphraser';
import { Grammar } from '../../../public/icons/Grammar';
import { Plagiarism } from '../../../public/icons/Plagiarism';
import { Humanaizer } from '../../../public/icons/Humanaizer';
import { Detector } from '../../../public/icons/Detector';
import { Summarizer } from '../../../public/icons/Summarizer';
import { ChromeExtension } from '../../../public/icons/ChromeExtension';

interface ProductConfig {
  icon: React.ReactNode;
  name: string;
}

export const config: ProductConfig[] = [
  {
    name: 'Paraphraser',
    icon: <Paraphraser />
  },
  {
    name: 'Grammar Check',
    icon: <Grammar />
  },
  {
    name: 'Plagiarism Check',
    icon: <Plagiarism />
  },
  {
    name: 'AI Humanizer',
    icon: <Humanaizer />
  },
  {
    name: 'AI Detector',
    icon: <Detector />
  },
  {
    name: 'Summarizer',
    icon: <Summarizer />
  },
  {
    name: 'Chrome Extension',
    icon: <ChromeExtension />
  }
];
