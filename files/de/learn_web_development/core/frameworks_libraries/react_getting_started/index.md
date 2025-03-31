---
title: Einstieg in React
short-title: Erster Schritt mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir einen ersten Blick auf React werfen. Wir werden ein wenig über den Hintergrund und die Anwendungsfälle erfahren, ein einfaches React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und ausprobieren – dabei lernen wir ein bisschen darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Ein lokales React-Entwicklungsumfeld einrichten, eine Start-App erstellen und die Grundlagen verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie das offizielle Schlagwort besagt, ist [React](https://react.dev/) eine Bibliothek zur Erstellung von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web. Es wird mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Für den Webaufbau verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Kontexten diskutiert und genutzt, um dieselben Probleme wie andere echte Webentwicklungsframeworks zu lösen. Wenn wir React als "Framework" bezeichnen, sprechen wir von diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die bei der Entwicklung von Benutzeroberflächen auftreten können. Dies wird durch die Verwendung von Komponenten erreicht — selbstständige, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert viel der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln in Bezug auf Konventionen im Code oder die Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten für sie funktionieren, und React auf beliebige Weise zu übernehmen. React kann einen einzelnen Knopf, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verarbeiten.

Während React _für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project)_ verwendet werden kann, ist es nicht so einfach, es "in" eine Anwendung zu integrieren wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwickler-Erlebnisvorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code auf dieser langsam laufen, daher richten Entwickler solche Werkzeuge oft mit einem Build-Schritt ein. React hat sicherlich eine hohe Anforderung an Werkzeuge, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit der Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Bauwerkzeug, zu rendern.

## Wie verwendet React JavaScript?

React nutzt Funktionen von modernem JavaScript für viele seiner Muster. Die größte Abweichung von JavaScript kommt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx) Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code neben ihm existieren kann. Beispielsweise:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriften-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einwickeln? Der JSX-Ansatz erlaubt uns, unsere Elemente ineinander zu verschachteln, so wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Codebeispiel sind nicht einzigartig für JSX und haben keine Auswirkung auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen darin zum selben Ausdruck gehören. Sie könnten den Header-Ausdruck ebenso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck beginnt, nicht an der gleichen Position eingerückt ist wie das dazugehörige abschließende Tag.

Natürlich kann Ihr Browser JSX nicht ohne Unterstützung lesen. Wenn es kompiliert wird (zum Beispiel mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck wie folgt aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dadurch verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community finden, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet die moderne Front-End-Entwicklung fast immer einen Build-Prozess – Sie müssen modernen Syntax abwärtskompatibel machen, um ihn mit älteren Browsern kompatibel zu machen, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel bieten bereits von Hause aus Unterstützung für JSX, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten dies.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich damit vertraut gemacht haben, ermöglicht es Ihnen jedoch, Benutzeroberflächen schneller und intuitiver zu erstellen und es anderen, Ihren Code auf den ersten Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel des React-Teams [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Einrichtung Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um eine neue Anwendung über die Befehlszeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei eingefügt werden, aber mit Vite können Sie mehr Zeit darauf verwenden, Ihre App zu bauen, und weniger Zeit mit der Einrichtung verbringen.

### Anforderungen

Um Vite verwenden zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node Version 18 oder höher erforderlich, und es ist ratsam, die neueste Long Term Support (LTS)-Version zu verwenden, wann immer Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie npm in dieser Tutorial-Serie verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit einem Unix/macOS-Terminal zu erhalten, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. **Gitbash** (die zum [Git for Windows-Toolset](https://gitforwindows.org/) gehört) oder das **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) eignen sich beide. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Berücksichtigen Sie außerdem, dass React und ReactDOM Apps produzieren, die nur auf einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Weitere Informationen finden Sie in folgenden Quellen:

- ["Über npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["npx vorstellen" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### App initialisieren

Der npm-Paketmanager kommt mit einem `create`-Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können ihn verwenden, um eine neue App aus Vites standardmäßiger React-Vorlage zu erstellen. Vergewissern Sie sich, dass Sie `cd` zu dem Ort auf Ihrem Computer, an dem Ihre App leben soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis mit Vites `react`-Vorlage.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Kommandos wie `create` zu übergeben, und das Argument `--template react` sagt Vite, seine React-Vorlage zu verwenden.

Ihr Terminal hat einige Nachrichten ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie dazu auffordert, in Ihr neues Verzeichnis zu `cd`, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige Befehlszeilen-Flags zu Vites Standardvorschlag hinzu, um die App in unserem Browser zu öffnen, sobald der Server startet, und verwenden den Port 3000.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie ein neues Browser-Tab sehen, das Ihre React-App enthält:

![Screenshot von Firefox macOS geöffnet auf localhost:3000, zeigt eine Anwendung aus Vites React-Vorlage](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir brauchen, um eine React-Anwendung zu entwickeln. Die anfängliche Dateistruktur sieht folgendermaßen aus:

```plain
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

**`index.html`** ist die wichtigste Datei der obersten Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, sollten aber den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Akurate Seitentitel sind wichtig für die Zugänglichkeit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser ausgeliefert werden, ohne von Vites Build-Tooling verarbeitet zu werden. Momentan enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da dort der Quellcode für unsere Anwendung lebt. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie teilt Vite mit, dass die JSX-Syntax in JavaScript umgewandelt werden muss, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das in dem Browser angezeigte React-Logo.

Die Datein package.json und package-lock.json enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat package.json für uns gefüllt, und npm hat package-lock.json für uns erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in der npm-Dokumentation über [package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [package-lock.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) lesen. Wir sprechen auch über package.json in unserer [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Anleitung.

### Anpassen unseres Dev-Skripts

Bevor wir fortfahren, möchten Sie möglicherweise Ihre package.json-Datei ein wenig ändern, sodass Sie die `--open` und `--port` Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie package.json in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"` Schlüssel, sodass er wie folgt aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, unter `http://localhost:3000` in Ihrem Browser geöffnet.

> [!NOTE]
> Sie _brauchen_ hier keine zusätzlichen `--`, da wir Argumente direkt an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Unseren ersten React-Komponenten erkunden — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie dienen einem einzigen, offensichtlichen Zweck.

Öffnen wir `src/App.jsx`, da unser Browser uns auffordert, es zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react` Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und sich auf unsere eigenen Dateien statt auf npm-Pakete beziehen.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass es keinen Variablennamen und keine `from`-Anweisung gibt. Dies ist ein [_Side-Effekt Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) — er importiert keinen Wert in die JavaScript-Datei, sondern sagt Vite, dass die referenzierte CSS-Datei zum endgültigen Code-Output hinzugefügt werden soll, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Imports haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}} Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case) Variablennamen, wie `HelloWorld`, um klar zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler auswerfen.

Schauen wir uns die `App()`-Funktion genauer an.

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser schließlich in den DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JavaScript-Module und anderer Assets, die sie benötigt, um ausgeführt zu werden.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react` und `react-dom` Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder eine Erweiterung, wenn wir diese Bibliotheken importieren, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgelistet. Achten Sie auf diesen Unterschied, während Sie durch diese Lektion arbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die Funktion `createRoot()` auf, die das Wurzelelement unserer Anwendung definiert. Diese Funktion nimmt als Argument das DOM-Element, in das wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich wird die Methode `render()` an den Aufruf von `createRoot()` angehängt, wobei der JSX-Ausdruck übergeben wird, den wir in unserem Wurzelelement rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die Funktion `App()` aufzurufen, die die _Komponente_ `App` innerhalb des Wurzelelements rendert.

> **Achtung:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme im Code zu erkennen.

Sie können diese React-APIs nachlesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neu anfangen

Bevor wir mit dem Bau unserer App beginnen, werden wir einige der Standardcodes, die Vite für uns bereitgestellt hat, löschen.

Ändern Sie zunächst als Experiment das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hallo, Welt!" anzeigt, und speichern Sie dann Ihre Datei. Ihnen fällt wahrscheinlich auf, dass diese Änderung sofort auf dem Entwicklungsserver angezeigt wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Merken Sie sich dies, während Sie an Ihrer App arbeiten.

Den Rest des Codes werden wir nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch das folgende:

```jsx
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
    </>
  );
}

export default App;
```

## Übung mit JSX

Als nächstes werden wir unsere JavaScript-Kenntnisse einsetzen, um etwas vertrauter mit dem Schreiben von JSX und dem Arbeiten mit Daten in React zu werden. Wir werden darüber sprechen, wie man Attributen zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert, und wie man Daten mit Props in Komponenten übergibt.

### Attributen zu JSX-Elementen hinzufügen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei einen `<button>` hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit den Worten `Click me!`. Die Schaltfläche tut noch nichts, aber wir werden bald lernen, wie wir unserer App Interaktivität hinzufügen.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class`-Attribut in HTML zu `className` in JSX. Das liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine Erweiterung von JavaScript ist. Wenn Sie eine `primary`-Klasse zu Ihrer Schaltfläche hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht es JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Erklär wir eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie dann das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern signalisieren React, dass wir den Wert der Variablen `subject` lesen möchten, anstatt den Zeichenfolgenliteral `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wertet ihn aus und rendert das _Ergebnis_ des Ausdrucks als endgültigen Inhalt. Im Folgenden finden Sie eine Reihe von Beispielen mit Kommentaren darüber, was jeder Ausdruck rendert:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Das liegt daran, dass Kommentare technisch gesehen auch JavaScript-Ausdrücke sind. Die `/* Block-Kommentar-Syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente einzufügen. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass während Attribute in einfache Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Eltern-Komponenten an Kinder-Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihre ersten Props.

Fügen Sie der `<App />`-Komponente einen Prop von `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, schauen wir uns noch einmal die `App()`-Funktion an. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert, und protokollieren Sie `props` in der Konsole, damit Sie es überprüfen können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Das liegt daran, dass wir versuchen, eine nicht mehr definierte Variable `subject` zu lesen. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (was die meisten modernen Editoren tun!), können Sie dessen integrierten Kommentar-Shortcut verwenden — `Ctrl + /` (unter Windows) oder `Cmd + /` (unter macOS) — um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit der auskommentierten Zeile. Dieses Mal sollte nur Ihr "Click me!"-Button gerendert werden. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenfolge `Clarice` entspricht dessen Wert. Komponenten-Props in React werden immer in dieser Art von Objekten gesammelt.

Lassen Sie uns dieses `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

```jsx
function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}
```

Wenn Sie speichern, sollte die App Sie jetzt mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, wird Ihr Text sich ändern.

Für zusätzliche Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop zum `<App />`-Komponentenaufruf innerhalb `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop innerhalb `App.jsx` zu verwenden.

## Zusammenfassung

Damit beenden wir unseren ersten Blick auf React, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Grundlagen, wie sie funktioniert. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen – eine Aufgabenliste. Bevor wir dies tun, lassen Sie uns einige der Dinge, die wir gelernt haben, rekapitulieren.

In React:

- Komponenten können benötigte Module importieren und müssen sich am Ende ihrer Dateien exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um Konflikte mit JavaScript-Reservierten Wörtern zu vermeiden. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute innerhalb von Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) _Learn React_ Kurs ist der ultimative React 101 – der perfekte Startpunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React durch das Lösen von über 140 interaktiven Codierherausforderungen und dem Bauen von acht unterhaltsamen Projekten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
