<template>
    <v-app>
        <v-app-bar color="primary" density="compact">

            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Hello World</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>

        </v-app-bar>
    </v-app>
</template>