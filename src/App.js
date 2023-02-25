import React from 'react'
// Урок 20
import Inline from './components/20/Inline';
import StyleSheets from "./components/20/StyleSheets";
import './components/20/appStyles.css';
import styles from './components/20/appStyles.module.css';
// Урок 21
import Form from './components/21/Form';
// Урок 23
import LifeCycleA from './components/23/LifeCycleA';
// Урок 24
import LifeCycleAA from './components/24/LifeCycleAA';
// Урок 25
import FragmentDemo from './components/25/FragmentDemo';
import Table from './components/25/Table';
// Урок 26
import ParentComp from './components/26/ParentComp';
// Урок 27
import ParentCompA from './components/27/ParentCompA';
// Урок 28
import RefsDemo from './components/28/RefsDemo';
// Урок 29
import FocusInput from './components/29/FocusInput';
// Урок 30
import FRParentInput from './components/30/FRParentInput';
// Урок 31
import PortalDemo from './components/31/PortalDemo';
// Урок 32
import Hero from './components/32/Hero';
import ErrorBoundary from './components/32/ErrorBoundary';
// Урок 33, 34, 35
import ClickCounter from './components/33/ClickCounter';
import HoverCounter from './components/33/HoverCounter';
// Урок 36, 37
import ClickCounterTwo from './components/36/ClickCounterTwo';
import HoverCounterTwo from './components/36/HoverCounterTwo';
import User from './components/36/User';
import Counter from './components/36/Counter';

function App() {
  return (
    <div className="App">
      {/* Урок 20
      <StyleSheets primary={true} />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* Урок 21
      <Form /> */}
      {/* Урок 23
      <LifeCycleA /> */}
      {/* Урок 24
      <LifeCycleAA /> */}
      {/* Урок 25
      <Table />
      <FragmentDemo /> */}
      {/* Урок 26
      <ParentComp /> */}
      {/* Урок 27
      <ParentCompA /> */}
      {/* Урок 28
      <RefsDemo /> */}
      {/* Урок 29
      <FocusInput /> */}
      {/* Урок 30
      <FRParentInput /> */}
      {/* Урок 31
      <PortalDemo /> */}
      {/* Урок 32
      <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}
      {/* Урок 33, 34, 35
      <ClickCounter name='Andrey' />
      <HoverCounter /> */}
      {/* Урок 36, 37 */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Andrey' : 'Guest'} /> */}
    </div>
  );
}

export default App;
