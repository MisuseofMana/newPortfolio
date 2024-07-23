<template>
  <v-card class="pa-10">
    <h1 class="text-h1 mb-3">Sean Yager</h1>
    <p class="text-h4 mb-5">Web Developer, Storyteller, Creator, Friendly Dude</p>
    <v-tabs
      v-model="tab"
      bg-color="white"
      class="mb-5"
    >
      <v-tab value="home">Home</v-tab>
      <v-tab value="projects">Projects</v-tab>
      <v-tab value="about">About</v-tab>
      <v-tab value="resume">Resume</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="home" class="pb-2">
          <h2 class="text-h2 mb-5">Home</h2>
          <p class="text-body-1 mb-3">
            Nice to meet you! I'm Sean Yager, a web developer, a comics illustrator, a 3D artist, a poet, a storyteller, but mostly I'm a well versed, certified technology nerd.
          </p>
          <p class="text-body-1 mb-5">
            Stay a while and browse my myriad projects, or tap the navbar for more!
          </p>

          <v-btn-toggle
          v-model="text"
          color="white"
          base-color="white"
          rounded="0"
          group
          class="mb-5"
        >
          <v-btn v-for="button in contentTypes" :value="button.value" :key="button.value">
            {{  button.text  }}
          </v-btn>
        </v-btn-toggle>

          <v-row>
            <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
              <v-card>
                <v-img
                  color="surface-variant"
                  height="350"
                  :src="`/projectImages/${ project.imageLink}.jpg`"
                  cover
                />
                <v-card-title>
                  <h3 class="mt-2 text-h5">{{ project.title }}</h3>
                </v-card-title>
                <v-card-subtitle>
                  <h4 class="text-body-1 mb-4">{{ project.type }}</h4>
                </v-card-subtitle>
                <v-divider/>
                <v-card-text>
                  <p class="text-body-1">{{ project.text }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="projects">
          <h2 class="text-h2 mb-5">Projects</h2>
          <p class="text-body-1">I'm always up to something, take a gander at my library of projects over the years.</p>
        </v-tabs-window-item>
        
        <v-tabs-window-item value="about">
          <h2 class="text-h2 mb-5">About</h2>
          <p class="text-body-1 mb-3">I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites. By night I summon up narratives writing about the realm of Amara, my storytelling setting for comics, TTRPG source material, games and more.</p>
          <p class="text-body-1 mb-3">I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures which evolved into an ever growing interest of all things internet and storytelling. I currently work as a web developer for continued.com working on their Vue site.</p>
          <p class="text-body-1">If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p>
        </v-tabs-window-item>

        <v-tabs-window-item value="resume">
            <h2 class="text-h2 mb-5">Resume</h2>
            <p class="text-body-1 mb-3">If you're looking for a well rounded Web Dev who can communicate across the pipeline, look no further.</p>
            <p class="text-body-1 mb-3">I spent most of 20-Naught rounding my production skills across Full Stack Web Dev, UI/UX Design, Vue JS, Vuex, Illustration, Graphic Design, SEO, and Storytelling in order to produce quality content.</p>
            <p class="text-body-1 mb-10">Working with a team is my forte, I'm knowledgeable in mutiple fields and I use that knowledge to communicate to my clients/coworkers how we can facilitate a seamless experience for each other.</p>
            
            <h3 class="text-h2 mb-3">History of a Level 31 Web Dev</h3>
            <p class="text-h4 mb-5">Web Developer, Comics Artist, Storyteller</p>
            <v-divider class="mb-5"/>
            <h4 class="text-h4 mb-3">Work History</h4>
            <v-card
              class="pa-5 mb-5"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Freelance Web Developer</h5>
              <p class="text-h5">Owner & Operator</p>
              <p class="text-h6">Feb 2013 - Present</p>
              <ul class="px-5 py-1 text-body-1">
                <li>cooperate with individual and business branding through art, websites, and iconography.</li>
                <li>work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.</li>
              </ul>
            </v-card>

            <v-card
              class="pa-5"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Freelance Web Developer</h5>
              <p class="text-h5">Owner & Operator</p>
              <p class="text-h6">Feb 2013 - Present</p>
              <ul class="px-5 py-1 text-body-1">
                <li>cooperate with individual and business branding through art, websites, and iconography.</li>
                <li>work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.</li>
              </ul>
            </v-card>
          </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'
  import { nanoid } from 'nanoid'
  const tab = ref(null)
  const text = ref('all')
  const contentTypes = ref([  
    { text: 'All', value: 'all' },
    { text: 'Web Dev', value: 'web-dev' },
    { text: 'Comics', value: 'comics' },
    { text: 'Books', value: 'books' },
    { text: 'Podcasts', value: 'podcasts' },
  ])
  const projects = ref([
    { id: nanoid(), title: 'Ire', type: 'comics', text: 'Description text here.', imageLink: 'ireSplash' },
    { id: nanoid(), title: 'Misuse of Mana', type: 'comics', text: 'Description text here.', imageLink: 'mofmSplash' },
    { id: nanoid(), title: 'Wishmaker', type: 'comics', text: 'Description text here.', imageLink: 'wishmakerSplash' },
    { id: nanoid(), title: 'Psychic Psychic Cowboy', type: 'comics', text: 'Description text here.', imageLink: 'ppcSplash' },
    { id: nanoid(), title: 'Dungeons of Amara', type: 'books', text: 'Description text here.', imageLink: 'doaSplash' },
    { id: nanoid(), title: 'Fate & Forage', type: 'books', text: 'Description text here.', imageLink: 'tbaSplash' },
    { id: nanoid(), title: 'Raconteur', type: 'books', text: 'Description text here.', imageLink: 'tbaSplash' },
    { id: nanoid(), title: 'My Github', type: 'web-dev', text: 'Description text here.', imageLink: 'gitSplash' },
    { id: nanoid(), title: 'Crickburrow Project', type: 'web-dev', text: 'Description text here.', imageLink: 'rccSplash' },
    { id: nanoid(), title: 'Moebius Dungeons', type: 'web-dev', text: 'Description text here.', imageLink: 'modunSplash' },
    { id: nanoid(), title: 'The Strategies', type: 'web-dev', text: 'Description text here.', imageLink: 'strategiesSplash' },
    { id: nanoid(), title: 'Character Generator', type: 'web-dev', text: 'Description text here.', imageLink: 'tbaSplash' },
    { id: nanoid(), title: 'Welcome to Amara', type: 'podcasts', text: 'Description text here.', imageLink: 'wtaSplash' },
    { id: nanoid(), title: 'This is Nothing', type: 'podcasts', text: 'Description text here.', imageLink: 'nothingSplash' },
  ])
</script>
