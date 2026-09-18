/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CloserApplicationForm {
  name: string;
  email: string;
  whatsapp: string;
  linkedinOrSocial: string;
  experienceYears: string;
  biggestDealOrResult: string;
  motivation: string;
  videoLink: string;
}

export interface CloserPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
}
