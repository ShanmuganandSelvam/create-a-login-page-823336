import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';
import LoginPage from './pages/login';

function App() {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <LoginPage />
    </CloudFrontThemeProvider>
  );
}

export default App;