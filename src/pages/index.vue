<template>
  <v-card class="pa-10">
    <h1 class="text-h1 mb-5">Sean Yager</h1>
    <p class="text-h4 mb-5">Web Developer, Storyteller, Creator, Friendly Dude</p>
    <v-tabs
      v-model="tab"
      bg-color="white"
      color="black"
      class="mb-5"
    >
      <v-tab value="home">Projects</v-tab>
      <v-tab value="resume">Resume</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="home" class="pb-10">
          <p class="text-body-1 mb-3">
            Nice to meet you! I'm Sean Yager, a web developer, a comics illustrator, a 3D artist, a poet, a storyteller, but mostly I'm a well versed, certified technology nerd.
          </p>

          <p class="text-body-1 mb-3">I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites. By night I summon up narratives writing about the realm of Amara, my storytelling setting for comics, TTRPG source material, games and more. I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures which evolved into an ever growing interest of all things internet and storytelling. I currently work as a web developer for continued.com working on their Vue site.</p>
          <p class="text-body-1">If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p>
          
          <p class="text-body-1 mb-5">
            Stay a while and browse my work, or make a selection in the navbar to filer by type!
          </p>
          <h2 class="text-h2 my-10">Projects</h2>
          <v-btn-toggle
          v-model="text"
          color="white"
          base-color="white"
          rounded="0"
          group
          class="mb-5"
        >
          <v-btn v-for="button in contentTypes" :value="button.value" :key="button.value" @click="selectedSubTab = button.value">
            {{  button.text  }}
          </v-btn>
        </v-btn-toggle>

          <v-row>
            <v-col cols="12" md="4" v-for="project in filteredProjects" :key="project.id">
              <v-card color="grey-lighten-5" elevation="5" :href="project.link" :target="isExternal(project.link) ? '_blank' : ''">
                <v-img
                  color="surface-variant"
                  height="350"
                  :src="`/projectImages/${project.imageLink}.jpg`"
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

        <v-tabs-window-item value="resume">
            <h2 class="text-h2 mb-5">Resume</h2>
            <p class="text-body-1 mb-3">If you're looking for a well rounded Web Dev who can communicate across the pipeline, look no further.</p>
            <p class="text-body-1 mb-3">I spent most of 20-Naught rounding my production skills across Full Stack Web Dev, UI/UX Design, Vue JS, Vuex, Illustration, Graphic Design, SEO, and Storytelling in order to produce quality content.</p>
            <p class="text-body-1 mb-10">Working with a team is my forte, I'm knowledgeable in mutiple fields and I use that knowledge to communicate to my clients/coworkers how we can facilitate a seamless experience for each other.</p>
            
            <p class="text-h4 mb-5">Web Developer, Comics Artist, Cryptographer, Storyteller</p>
            <v-divider class="mb-5"/>
            <h4 class="text-h4 mb-3">Work History</h4>
            <v-card
              class="pa-5 mb-5"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Continu<strong>ed</strong></h5>
              <p class="text-h5">Int. Front End Web Developer</p>
              <p class="text-h6">December 2021 - Present</p>
              <ul class="px-5 py-1 text-body-1">
                <li>work on evolving Agile teams under a Scrum manager to deliver tri-weekly features</li>
                <li>recreate legacy CMS to a modernized customizable Vue 3, Nuxt 3, & Vuetify 3 CMS</li>
                <li>integrate third party services - Kaltura, Stamped.io, VWO, GTM, and more</li>
                <li>build and maintain a customized library of Vuetify components leveraging aliasing and global configuration</li>
                <li>maintain internal documentation using Vuepress</li>
              </ul>
            </v-card>

            <v-card
              class="pa-5 mb-8"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Freelance Web Developer</h5>
              <p class="text-h5">Owner & Operator</p>
              <p class="text-h6">February 2013 - Present</p>
              <ul class="px-5 py-1 text-body-1">
                <li>cooperate with individual and business branding through art, websites, and iconography.</li>
                <li>work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.</li>
              </ul>
            </v-card>

            <h4 class="text-h4 mb-3">Skills</h4>
            <v-card
              class="pa-5 mb-8"
              color="secondary-lighten-1"
            >
              <v-row>
                <v-col cols="12" md="6">
                  <h5 class="text-h5">Programming</h5>
                  <ul class="px-5 py-1 text-body-1">
                    <li>HTML, CSS, Javascript</li>
                    <li>Vue 2 & 3</li>
                    <li>Nuxt 2 & 3</li>
                    <li>Vuetify 2 & 3</li>
                    <li>Typescript</li>
                    <li>Git</li>
                    <li>NPM</li>
                    <li>Google Firebase</li>
                    <li>Vee Validate</li>
                    <li>Cypress</li>
                    <li>Jest</li>
                    <li>Vitest</li>
                    <li>Circle CI</li>
                    <li>Sonarcloud</li>
                    <li>React JS</li>
                    <li>Apollo GQL</li>
                  </ul>
                </v-col>
                <v-col cols="12" md="6">
                  <h5 class="text-h5 mb-2">OS & Programs</h5>
                  <ul class="px-5 py-1 text-body-1">
                    <li>Mac OS</li>
                    <li>Windows OS</li>
                    <li>Visual Studio Code</li>
                    <li>Photoshop</li>
                    <li>InDesign</li>
                    <li>Blender</li>
                    <li>Procreate</li>
                    <li>Aseprite</li>
                    <li>Godot</li>
                  </ul>
                </v-col>
              </v-row>
            </v-card>

            <h4 class="text-h4 mb-3">Education</h4>

            <v-card
              class="pa-5 mb-5"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Austin Coding Academy</h5>
              <p class="text-h5">Certified Full Stack Web Development</p>
              <p class="text-h6">September 2019 - March 2020</p>
              <ul class="px-5 py-1 text-body-1">
                <li>Completed a biweekly intensive course over 7 months, I receieved a full stack certification in 2020</li>
                <li>covered HTML, CSS, Javascript, React.js, Github, Node.js, Unit Testing, SQL, and various APIs</li>
              </ul>
            </v-card>

            <v-card
              class="pa-5 mb-8"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Media Arts & Science @ IUPUI</h5>
              <p class="text-h5">Various Studies in Comupter Science</p>
              <p class="text-h6">2011 - 2015, 2018</p>
              <ul class="px-5 py-1 text-body-1">
                <li>Studied subject matters from digital media to illustration to cartooning. Each of these focuses developed my creativity and problem solving skills</li>
              </ul>
            </v-card>

            <h4 class="text-h4 mb-3">Accolades</h4>

            <v-card
              class="pa-5 mb-5"
              color="secondary-lighten-1"
            >
              <h5 class="text-h4">Excellence Award</h5>
              <p class="text-h6">July 2024</p>
              <ul class="px-5 py-1 text-body-1">
                <li>recieved an excellence award in Q3 of 2024 within Continu<strong>ed</strong></li>
              </ul>
              <p class="text-body-1 ml-1 pl-2 border-s-xl">"Sean has gone above and beyond by pairing how he goes about his work with successfully leading, mentoring, and driving results on a number of important initiatives.
                  He led research efforts and pioneered the implementation of tools (Vuetify Component Aliasing & VeeValidate Customization) that improved ease of maintenence for Athena Front End components,
                  and facilitated key synchronization of tools with the UIUX team. He consistently champions documentation Fridays, and promotes an atmosphere of collaborative, continuous learning among the Athena
                  development team. He focuses on mentoring and sharing knowledge. He handled our first late night/early morning Athena on-call incident like a pro!"</p>
            </v-card>
          </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { nanoid } from 'nanoid'
  const tab = ref(null)
  const selectedSubTab = ref('all')
  const text = ref('all')
  const contentTypes = ref([  
    { text: 'All', value: 'all' },
    { text: 'Books', value: 'books' },
    { text: 'Comics', value: 'comics' },
    { text: 'Photography', value: 'photography' },
    { text: 'Podcasts', value: 'podcasts' },
    { text: 'Web Dev', value: 'web-dev' },
  ])
  const projects = ref([
    { id: nanoid(), link: '/fate-and-forage', title: 'Fate & Forage', type: 'books', text: 'A system agnostic TTRPG resource book that details a world of gargantuan forests and low magics.', imageLink: 'fateAndForage' },
    { id: nanoid(), link: '/raconteur-game', title: 'Raconteur', type: 'books', text: 'An 8.5x11 TTRPG system to facilitate simplistic gameplay with a five stat system.', imageLink: 'racontuer' },
    { id: nanoid(), link: 'https://misuseofmana.gumroad.com/l/CsdPh', title: 'Dungeons of Amara', type: 'books', text: 'A bardic book of poetry, depicting baddies, merchants, and more; all found in dark dungeons, deep caves, and bustling towns.', imageLink: 'doaSplash' },
    { id: nanoid(), link: 'https://www.crickburrow.com/', title: 'Crickburrow Project', type: 'web-dev', text: 'Coded in Vue.js, this is an ongoing art/coding expirement meant to develop my front end skills.', imageLink: 'crickSplash' },
    { id: nanoid(), link: 'https://tapas.io/episode/793285', title: 'Misuse of Mana', type: 'comics', text: 'An ancient webcomic from long ago, discontinued for now, but boasts a world full of magic, friendship, and world threatening forces.', imageLink: 'mofmSplash' },
    { id: nanoid(), link: 'https://misuseofmana.gumroad.com/l/gXbKmf', title: 'Ire', type: 'comics', text: 'A short comic illustrating a poem about overcoming ones own inner conflict.', imageLink: 'ireSplash' },
    { id: nanoid(), link: 'https://misuseofmana.gumroad.com/l/wishmaker', title: 'Wishmaker', type: 'comics', text: 'A comic about old memories and sentimental value.', imageLink: 'wishmakerSplash' },
    { id: nanoid(), link: 'https://kingloyal.seanyager.com', title: 'Character Creator', type: 'web-dev', text: 'A character creator made with HTML canvas and Vuetify.js.', imageLink: 'charactercreator' },
    // { id: nanoid(), title: 'Psychic Psychic Cowboy', type: 'comics', text: 'Description text here.', imageLink: 'ppcSplash' },
    { id: nanoid(), link: 'https://moebiusdungeons.com/', title: 'Moebius Dungeons', type: 'web-dev', text: 'An RPG roguelike dungeon crawler game coded in Vue.js using Vuex to manage character data and Firebase as a back end.', imageLink: 'modunSplash' },
    { id: nanoid(), link: 'https://rickcrickcrick.tumblr.com/', title: 'RickCrickCrick', type: 'photography', text: `A peek into another realm, where life is a film of epic proportions and perilous adventure. Are you paying attention?`, imageLink: 'rccSplash' },
    { id: nanoid(), link: 'https://github.com/MisuseofMana', title: 'My Github', type: 'web-dev', text: 'My hobby GitHub, accessible to the public for forking, collaborating, and making connections.', imageLink: 'gitSplash' },
    // { id: nanoid(), link: '', title: 'Character Generator', type: 'web-dev', text: 'Description text here.', imageLink: 'tbaSplash' },
    { id: nanoid(), link: 'https://www.welcometoamara.com/', title: 'Welcome to Amara', type: 'podcasts', text: 'A fully produced podcast of a play by post Dungeon World campaign showcasing a fantasy realm with carefully crafted lore to uncover.', imageLink: 'wtaSplash' },
    { id: nanoid(), link: 'https://soundcloud.com/shibbone', title: 'This is Nothing', type: 'podcasts', text: `Don't worry about this. It's nothing. It's nonsense. It's uncategorizable.`, imageLink: 'nothingSplash' },
    { id: nanoid(), link: 'https://www.thestrategies.net/', title: 'The Strategies', type: 'web-dev', text: 'An informational website for an Indiana rehab client.', imageLink: 'strategiesSplash' },
  ])
  const filteredProjects = computed(() => {
    if (selectedSubTab.value === 'all') {
      return projects.value
    } 
    return projects.value.filter((item) => {
      return item.type === selectedSubTab.value
    })
  })
  const isExternal = (link) => {
    return link.includes('https')
  }
</script>
