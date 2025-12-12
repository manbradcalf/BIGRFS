import { useEffect } from "react";
import Modal from "react-modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { AppContextProvider } from "./contexts/AppContextProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { LoginButton } from "./components/LoginButton";
import { Footer } from "./components/Footer";
import { SearchContent } from "./components/SearchContent";
import { AccountDetail } from "./components/AccountDetail";
import { FAQPage } from "./components/FAQPage";
import { HelpBar } from "./components/HelpBar";
import { VideoTutorials } from "./components/VideoTutorials";
import { AboutPage } from "./components/AboutPage";

function App() {
  useEffect(() => {
    // Set the app element for react-modal (for accessibility)
    Modal.setAppElement("#root");
  }, []);


  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppContextProvider>
            <div className="App">
              {/* Login button positioned in top right corner */}
              <LoginButton />
              <header className="App-header">
                <h1>BIGRFS Demo</h1>
                <i>Plug and Play Neo4J data browser for React.</i>
                <HelpBar />
              </header>
              <div className="App-layout">
                <div className="App-body">
                  <Routes>
                    <Route path="/" element={<SearchContent />} />
                    <Route path="/account" element={<AccountDetail />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                      path="/video-tutorials"
                      element={<VideoTutorials />}
                    />
                    <Route path="*" element={<div>Page Not Found</div>} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          </AppContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
