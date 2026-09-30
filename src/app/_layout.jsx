import { Stack } from "expo-router";
import {NotesProvider } from "@/hooks/useNotes"

export default function Layout() {
  return (
     <NotesProvider>

    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="notee/create"
        options={{ headerShown: false }}
        />

      <Stack.Screen
        name="notee/[id]"
        options={{ headerShown: false }}
        />
    </Stack>
        </NotesProvider>
  );
}
