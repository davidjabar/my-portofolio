<template>
  <section class="max-w-5xl mx-auto px-6 py-12">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold font-tasa mb-4">About Me</h2>
      <div class="h-1 w-20 bg-primary mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold mb-4 italic text-primary">From Engineering to Software Craftsmanship</h3>
        <p class="text-lg leading-relaxed text-justify">
          Engineering-driven <strong>Consultant</strong> specializing in <strong>Digital Transformation</strong> and <strong>Data Engineering</strong>. I bridge the gap between architectural logic and scalable code to build reliable, automated systems. Having mastered the art of transforming complex data into business solutions, I am now evolving into a <strong>Software Engineer</strong> dedicated to building the high-performance systems that empower businesses to thrive.
        </p>
      </div>
      <div class="bg-base-200 p-6 rounded-2xl shadow-inner border border-base-300">
        <h4 class="font-bold mb-3 border-b pb-2">Quick Info</h4>
        <ul class="space-y-2 text-sm">
          <li class="flex justify-between"><span>Degree:</span> <span class="font-semibold text-right">Bachelor of Engineering</span></li>
          <li class="flex justify-between"><span>Education:</span> <span class="font-semibold text-right">Bandung Institute of Technology</span></li>
          <li class="flex justify-between"><span>Focus:</span> <span class="font-semibold text-right">Data & Software</span></li>
          <li class="flex justify-between"><span>Location:</span> <span class="font-semibold text-right">Indonesia</span></li>
        </ul>
      </div>
    </div>

    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
      <Icon icon="mdi:briefcase-outline" class="text-primary" />
      Professional Journey
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      <div class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <div class="flex items-center gap-4 mb-2">
            <div class="p-3 bg-blue-100 rounded-lg text-blue-600"><Icon icon="mdi:rocket-launch" class="size-6" /></div>
            <div>
              <h4 class="font-bold text-lg">Tech Company</h4>
              <p class="text-xs opacity-60">Data Analytics</p>
            </div>
          </div>
          <p class="text-sm opacity-80 text-justify">Responsible for delivering detailed business analysis to identify growth opportunities while developing SQL-driven dashboards that provide critical performance insights and optimized solutions for sales projects.</p>
        </div>
      </div>

      <div class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <div class="flex items-center gap-4 mb-2">
            <div class="p-3 bg-green-100 rounded-lg text-green-600"><Icon icon="mdi:bank" class="size-6" /></div>
            <div>
              <h4 class="font-bold text-lg">Financial Services</h4>
              <p class="text-xs opacity-60">Business Analyst</p>
            </div>
          </div>
          <p class="text-sm opacity-80 text-justify">Responsible for delivering detailed business analysis to identify growth opportunities while developing SQL-driven dashboards that provide critical performance insights and optimized solutions for sales projects.</p>
        </div>
      </div>

      <div class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <div class="flex items-center gap-4 mb-2">
            <div class="p-3 bg-amber-100 rounded-lg text-amber-600"><Icon icon="mdi:gas-station" class="size-6" /></div>
            <div>
              <h4 class="font-bold text-lg">Oil & Gas</h4>
              <p class="text-xs opacity-60">Process Data Engineering</p>
            </div>
          </div>
          <p class="text-sm opacity-80 text-justify">Managed a project in the oil and gas sector, overseeing the planning and optimization of well operations using data analysis tools (Matlab, HRS, Petrel) to enhance resource allocation and optimize hydrocarbon production in the field.</p>
        </div>
      </div>

      <div class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <div class="flex items-center gap-4 mb-2">
            <div class="p-3 bg-purple-100 rounded-lg text-purple-600"><Icon icon="mdi:account-group" class="size-6" /></div>
            <div>
              <h4 class="font-bold text-lg">Consulting</h4>
              <p class="text-xs opacity-60">Data Engineering & Software Engineering</p>
            </div>
          </div>
          <p class="text-sm opacity-80 text-justify">Providing corporate clients with custom automation and application solutions to eliminate manual burdens and streamline time-consuming operational processes, driving digital transformation that enhances overall organizational efficiency and performance.</p>
        </div>
      </div>
    </div>

  </section>

</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>