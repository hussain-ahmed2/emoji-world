import Navbar from "./components/Navbar";
import EmojiDisplay from "./components/EmojiDisplay";
import Footer from "./components/Footer";
import EmojiProvider from "./components/EmojiProvider";

function App() {
   return (
    <EmojiProvider>
      <Navbar />
      <header className="bg-blue-600 text-white pt-32 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Emoji World 🌍
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Search, explore, and copy from a vast collection of emojis!
        </p>
      </header>
      <EmojiDisplay />
      <Footer />
    </EmojiProvider>
  );
}

export default App;
