/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Location } from './components/Location';
import { Amenities } from './components/Amenities';
import { MasterPlan } from './components/MasterPlan';
import { Products } from './components/Products';
import { SalesPolicy } from './components/SalesPolicy';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { StickyControls } from './components/StickyControls';
import { Popup } from './components/Popup';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans selection:bg-gold selection:text-white">
      {/* Layout Elements */}
      <Navbar />
      
      <main>
        <Hero />
        <Introduction />
        <Location />
        <Amenities />
        <MasterPlan />
        <Products />
        <SalesPolicy />
        <Gallery />
        <FAQ />
        <RegistrationForm />
      </main>

      <Footer />
      
      {/* Overlays */}
      <StickyControls />
      <Popup />
    </div>
  );
}
