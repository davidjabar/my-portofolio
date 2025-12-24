<template>

  <!-- HERO SECTION -->
  <section class="pt-24 pb-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- Text -->
        <div>
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm
            <span class="text-primary">David </span>
            <span class="text-secondary">Djabar</span>
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xl"
          >
            Digital Transformation Consultant with expertise in designing automated workflow solutions to meet evolving market demands.
          </p>

          <button class="btn btn-primary btn-lg">
            <RouterLink :to="'/portfolio'">View Portfolio</RouterLink>
          </button>
        </div>

        <!-- Photo -->
        <div class="flex justify-center">
          <div class="avatar">
            <div
              class="w-40 sm:w-48 md:w-56 lg:w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4"
            >
              <img :src="myProfilePhoto" alt="profile" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SPECIALIZATION SECTION -->
  <section class="py-16 bg-base-200">
    <div class="max-w-5xl mx-auto px-6">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        My Specialization
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <div
          class="card bg-base-100 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="card-body items-center text-center">
            <Icon icon="mdi:tailwind" class="w-20 h-20 mb-4 text-primary"/>
            <h3 class="card-title">Frontend Engineer</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="card-body items-center text-center">
            <Icon icon="mdi:laravel" class="w-20 h-20 mb-4 text-primary"/>
            <h3 class="card-title">Backend Engineer</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="card-body items-center text-center">
            <Icon icon="mdi:docker" class="w-20 h-20 mb-4 text-primary"/>
            <h3 class="card-title">Data Engineer</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>


        <div class="card bg-base-100 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 lg:col-span-1 lg:col-start-2">
        <div class="card-body items-center text-center">
          <Icon icon="simple-icons:looker" class="w-20 h-20 mb-4 text-primary"/>
          <h3 class="card-title">Data Analytics</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-32 bg-base-200">
    <div class="max-w-5xl mx-auto px-6 text-center">

        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience
        </h2>

        <ul class="timeline timeline-vertical timeline-centered">

        <li>
            <div class="timeline-start">
            <span class="badge badge-primary badge-lg text-lg px-6 py-4">
                2021 - 2023
            </span>
            </div>

            <div class="timeline-middle">
            <Icon icon="mdi:briefcase" class="w-10 h-10 text-primary" />
            </div>

            <div class="timeline-end timeline-box p-8 text-left hover:shadow-lg transition">
            <h3 class="text-2xl font-bold mb-2">Data Analytics</h3>
            <p class="text-lg text-base-content/70">
                Processing big data with analytics tools to extract insights and make strategy to support business decisions.
            </p>
            </div>
            <hr />
        </li>

        <li>
            <hr />
            <div class="timeline-start">
            <span class="badge badge-primary badge-lg text-lg px-6 py-4">
                2023 - Current
            </span>
            </div>

            <div class="timeline-middle">
            <Icon icon="mdi:database" class="w-10 h-10 text-primary" />
            </div>

            <div class="timeline-end timeline-box p-8 text-left hover:shadow-lg transition">
            <h3 class="text-2xl font-bold mb-2">Data Engineer</h3>
            <p class="text-lg text-base-content/70">
                Create Data Pipelines and Data Warehouses to support data analytics activities. Also create Automation Workflow to improve business process efficiency.
            </p>
            </div>
            <hr />
        </li>

        <li>
            <hr />
            <div class="timeline-start">
            <span class="badge badge-primary badge-lg text-lg px-6 py-4">
                Present
            </span>
            </div>

            <div class="timeline-middle">
            <Icon icon="mdi:code-tags" class="w-10 h-10 text-primary" />
            </div>

            <div class="timeline-end timeline-box p-8 text-left hover:shadow-lg transition">
            <h3 class="text-2xl font-bold mb-2">Software Engineer</h3>
            <p class="text-lg text-base-content/70">
                Building scalable applications & systems that can support business needs.
            </p>
            </div>
        </li>



        </ul>

    </div>


  </section>
  <div class="mt-20 bg-base-300 rounded-3xl p-10 text-center shadow-inner border border-base-100">
  <h3 class="text-3xl font-bold font-tasa mb-2">Let's Build Something Great</h3>
  <p class="mb-8 opacity-70">Tertarik diskusi soal Data Engineering atau Software Dev? Reach me out!</p>

  <div class="flex justify-center gap-6">
    <a href="https://id.linkedin.com/in/david-djabar-immanuel-sinurat"
       target="_blank"
       rel="noopener noreferrer"
       class="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
      <div class="p-4 bg-[#0077B5] rounded-full shadow-lg group-hover:bg-[#005582] transition-colors">
        <Icon icon="simple-icons:linkedin" class="size-8 text-white" />
      </div>
      <span class="text-xs font-bold">LinkedIn</span>
    </a>

    <a href="https://github.com/davidjabar/"
       target="_blank"
       rel="noopener noreferrer"
       class="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
      <div class="p-4 bg-[#181717] rounded-full shadow-lg group-hover:bg-black transition-colors">
        <Icon icon="simple-icons:github" class="size-8 text-white" />
      </div>
      <span class="text-xs font-bold">GitHub</span>
    </a>

    <a href="mailto:david.djabar@gmail.com"
       class="group flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
      <div class="p-4 bg-primary rounded-full shadow-lg group-hover:brightness-110 transition-all">
        <Icon icon="mdi:email" class="size-8 text-white" />
      </div>
      <span class="text-xs font-bold">Email</span>
    </a>
  </div>


</div>

</template>

<script setup>
import { Icon } from '@iconify/vue'
import myProfilePhoto from '../assets/image1.jpeg'
</script>

