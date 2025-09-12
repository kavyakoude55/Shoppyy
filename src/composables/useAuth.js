
import { ref, onMounted } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";

const user = ref(null);
const error = ref(null);

function initAuth() {
  onMounted(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser;
    });
  });
}

async function signup(email, password) {
  const { createUserWithEmailAndPassword } = await import("firebase/auth");
  return createUserWithEmailAndPassword(auth, email, password);
}

async function login(email, password) {
  const { signInWithEmailAndPassword } = await import("firebase/auth");
  return signInWithEmailAndPassword(auth, email, password);
}

async function logout() {
  await signOut(auth);
  user.value = null;
}

export function useAuth() {
  return { user, error, signup, login, logout, initAuth };
}
