import Layout from './components/input';
import './App.css';
import Output from './components/output';
function App() {
return <div >
    <div className="main"><h1>Code Editor</h1></div>

    <div class="document">
    <div class="Layout">
    <Layout />
    </div>
    
   
    <div class="vl"></div>
    
    <div class="Output">
    <Output /> 
    </div>



    </div>
    

    
    
</div>
}

export default App;
