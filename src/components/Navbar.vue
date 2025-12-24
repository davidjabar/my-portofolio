<template>
  <div class="navbar bg-base-100 shadow px-4">
    <!-- Brand -->
    <div class="flex-1">
      <RouterLink
        to="/"
        class="text-xl font-bold hover:text-primary"
      >
        Curriculum Vitae
      </RouterLink>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-2">
      <RouterLink to="/" class="btn btn-ghost">Home</RouterLink>
      <RouterLink to="/about" class="btn btn-ghost">About</RouterLink>
      <RouterLink to="/portfolio" class="btn btn-ghost">Portfolio</RouterLink>
      <RouterLink to="/experience" class="btn btn-ghost">Experience</RouterLink>
      <RouterLink to="/awards" class="btn btn-ghost">Awards</RouterLink>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost">
        ☰
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
        <li><RouterLink to="/experience">Experience</RouterLink></li>
        <li><RouterLink to="/awards">Awards</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
