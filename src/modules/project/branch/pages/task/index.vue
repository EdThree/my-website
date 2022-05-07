<template>
  <v-app>
    <v-system-bar app
      ><span style="cursor: pointer" @click="back"
        ><v-icon>mdi-arrow-left</v-icon> <span>Project</span></span
      ></v-system-bar
    >
    <v-main app>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title> Task </v-card-title>
              <v-card-text> requirements </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>