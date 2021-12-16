import logo from './logo.svg';
import './App.css';

import ContentInfo from "./components/ContentInfo/Index";
import { ResetCSS } from "./global/global";
import MessageProvider from "./providers/provider";

function App() {
  return (
    <div className="App">

      <MessageProvider>
        <ResetCSS />
        <Layout>

          <ContentInfo></ContentInfo>

        </Layout>

      </MessageProvider>

    </div>
  );
}

export default App;
