<template>
  <section class="max-w-4xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold mb-12 font-tasa text-center">Professional Experience</h2>

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div class="timeline-middle">
          <Icon icon="mdi:check-circle" class="text-primary size-6" />
        </div>
        <div class="timeline-start md:text-end mb-10">
          <time class="font-mono italic opacity-60">2024 - Present</time>
          <div class="text-xl font-bold text-primary">KAP</div>
          <p class="font-semibold italic">Analytics Engineer / Consultant</p>
          <div class="mt-2 text-sm opacity-80">
            Providing corporate clients with custom automation and application based on their problems and needs.
          </div>
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-middle">
          <Icon icon="mdi:check-circle" class="text-primary size-6" />
        </div>
        <div class="timeline-end mb-10">
          <time class="font-mono italic opacity-60">2023 - 2024</time>
          <div class="text-xl font-bold text-primary">Marsh McLennan</div>
          <p class="font-semibold italic">Data Engineer / Consultant</p>
          <div class="mt-2 text-sm opacity-80">
            Build Dashboard and Data Warehouses to support business decision-making processes.
          </div>
        </div>
        <hr class="bg-primary" />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-middle">
          <Icon icon="mdi:check-circle" class="text-primary size-6" />
        </div>
        <div class="timeline-start md:text-end mb-10">
          <time class="font-mono italic opacity-60">2019 - 2021</time>
          <div class="text-xl font-bold text-primary">Gojek</div>
          <p class="font-semibold italic">Regional Sales Planning Analyst</p>
          <div class="mt-2 text-sm opacity-80">
            Process big data to extract insights and make strategy to support business decisions.
          </div>
        </div>
        <hr />
      </li>

      <li>
        <hr class="bg-primary" />
        <div class="timeline-middle">
          <Icon icon="mdi:check-circle" class="text-primary size-6" />
        </div>
        <div class="timeline-start md:text-end mb-10">
          <time class="font-mono italic opacity-60">2019 - 2021</time>
          <div class="text-xl font-bold text-primary">Toyota Astra Financial Services</div>
          <p class="font-semibold italic">Regional Business Analyst</p>
          <div class="mt-2 text-sm opacity-80">
            Make strategy and analyze business performance to support regional business growth.
          </div>
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div class="timeline-middle">
          <Icon icon="mdi:school" class="text-secondary size-6" />
        </div>
        <div class="timeline-end mb-10">
          <time class="font-mono italic opacity-60">Graduate</time>
          <div class="text-xl font-bold text-secondary">Engineering Background</div>
          <p class="text-sm opacity-80">
            Engineering graduate with a strong foundation in analytical thinking and problem-solving skills, complemented by hands-on experience in data analysis.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>