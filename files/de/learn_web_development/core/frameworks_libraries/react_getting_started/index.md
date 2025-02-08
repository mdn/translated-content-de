---
title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren – dabei lernen wir die Funktionsweise von React kennen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Starter-App und
          Verständnis der Grundlagen ihrer Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie in der offiziellen Tagline angegeben, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web konzipiert. Es wird mit anderen Bibliotheken verwendet, um auf bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen wie – und zur Lösung der gleichen Probleme wie – andere echte Webentwicklungs-Frameworks diskutiert. Wenn wir React als „Framework“ bezeichnen, tun wir dies im umgangssprachlichen Sinne.

Das primäre Ziel von React ist es, die Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen (UIs) auftreten. Dies wird durch die Verwendung von Komponenten erreicht – eigenständige, logische Code-Teile, die einen Abschnitt der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengesetzt werden, um eine vollständige UI zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln in Bezug auf Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede gewünschte Weise zu übernehmen. React kann mit einem einzigen Button, einigen Elementen einer Benutzeroberfläche oder der gesamten Benutzeroberfläche einer App verwendet werden.

Obwohl React _für [kleinere Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project)_ verwendet werden kann, ist es nicht so einfach, React in eine Anwendung „einzufügen“ wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklererlebnis-Vorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website führt dazu, dass der Code darauf langsam ausgeführt wird. Daher richten Entwickler solche Werkzeuge oft in einem Build-Schritt ein. React hat arguably hohe Anforderungen an die Tooling, aber dies kann erlernt werden.

Dieser Artikel konzentriert sich auf die Nutzung von React, um mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, die vollständige Benutzeroberfläche einer Anwendung zu rendern.

## Wie verwendet React JavaScript?

React nutzt viele Funktionen von modernem JavaScript für seine Muster. Der größte Unterschied zu JavaScript besteht in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code mit JavaScript kombiniert werden kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Konstante für die Überschrift wird als **JSX-Ausdruck** bezeichnet. React kann sie verwenden, um diesen [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in einen [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einfügen? Der JSX-Ansatz ermöglicht es uns, unsere Elemente wie in HTML ineinander zu verschachteln:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und wirken sich nicht auf Ihre Anwendung aus. Sie sind ein Signal für Sie (und Ihren Computer), dass die mehreren Zeilen von Code darin Teil desselben Ausdrucks sind. Sie könnten denselben Header-Ausdruck beispielsweise so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da der [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, der den Ausdruck beginnt, nicht zur gleichen Position wie sein entsprechender schließender Tag eingerückt ist.

Ihr Browser kann JSX natürlich nicht ohne Hilfe lesen. Beim Kompilieren (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)) würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_ den Kompilierungsschritt zu umgehen und die Benutzeroberfläche selbst mit [`React.createElement()`](https://react.dev/reference/react/createElement) zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwieriger lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community sind der Ansicht, dass die Lesbarkeit von JSX diesen Aufwand wert ist. Außerdem beinhaltet die moderne Front-End-Entwicklung fast immer einen Build-Prozess – Sie müssen modernen Syntax vereinfachen, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel verfügen bereits standardmäßig über JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten dies.

Da JSX eine Kombination aus HTML und JavaScript ist, empfinden einige Entwickler es als intuitiv. Andere sagen, seine kombinierte Natur mache es verwirrend. Sobald Sie jedoch damit vertraut sind, können Sie Benutzeroberflächen schneller und intuitiver erstellen und anderen ermöglichen, Ihre Codebasis auf einen Blick besser zu verstehen.

Weitere Informationen zu JSX finden Sie im Artikel der React-Entwickler zu [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Kommandozeile eine neue Anwendung zu erstellen.

Es ist zwar möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem Sie einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopieren, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Aufbau Ihrer App zu verbringen und weniger Zeit mit der Einrichtung.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 ist mindestens Node Version 18 oder neuer erforderlich, und es ist ratsam, die neueste Langzeitversionsunterstützung (LTS) zu verwenden, wann immer möglich. Am 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält das npm (Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können alternativ den Yarn-Paketmanager anstelle von npm verwenden, aber in diesem Tutorial nehmen wir an, dass Sie npm verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie Software installieren, um eine Parität mit Unix/macOS-Terminals zu ermöglichen, um die in diesem Tutorial erwähnten Terminal-Befehle verwenden zu können. **Gitbash** (als Teil des [Git-for-Windows-Werkzeugsatzes](https://gitforwindows.org/)) oder **[Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu sowie zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Beachten Sie außerdem, dass React und ReactDOM Apps produzieren, die nur in einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie dieses Tutorial durcharbeiten.

Weitere Informationen finden Sie hier:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung in npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager enthält einen `create`-Befehl, mit dem neue Projekte aus Vorlagen erstellt werden können. Wir können ihn verwenden, um eine neue App aus der Standard-React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie `cd` ins gewünschte Verzeichnis, in dem Ihre App gespeichert werden soll, wechseln und führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react` Verzeichnis unter Verwendung der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist erforderlich, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` gibt an, dass Vite seine React-Vorlage verwenden soll.

Ihr Terminal hat einige Nachrichten ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, ins neue Verzeichnis zu wechseln (`cd`), die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Nachdem der Vorgang abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige zusätzliche Kommandozeilenparameter zur Standardvorschlag von Vite hinzu, um die App beim Starten des Servers automatisch im Browser zu öffnen und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS mit geöffnetem localhost:3000, Anzeige einer aus der React-Vorlage von Vite erstellten Anwendung](default-vite.png)

### Applikationsstruktur

Vite liefert uns alles, was wir benötigen, um eine React-Anwendung zu entwickeln. Die Anfangsdateistruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei im Verlauf unseres Tutorials nicht bearbeiten, sollten jedoch den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne dass sie von Vites Build-Tools verarbeitet werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da dort der Quellcode unserer Anwendung liegt. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist erforderlich für alle Dateien, die JSX enthalten – sie zeigt Vite an, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser versteht. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat für uns die Datei `package.json` befüllt, und npm hat die Datei `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in der [npm-Dokumentation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) mehr über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) erfahren. Wir behandeln `package.json` auch in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die Flags `--open` und `--port` nicht jedes Mal angeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und suchen Sie das Objekt `scripts`. Ändern Sie die `"dev"`-Schlüssel, sodass sie wie folgt aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App jedes Mal bei `http://localhost:3000` in Ihrem Browser geöffnet, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Hier benötigen Sie _kein_ zusätzliches `--`, da wir die Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erkundung unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer Gesamtanwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die Datei `App.jsx` besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen es `App.jsx`, Code zu verwenden, der an anderer Stelle definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, in einer Komponente auf React-Funktionen zuzugreifen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` beziehungsweise `/` beginnen und dass am Ende die `.svg`-Erweiterung steht. Dies zeigt an, dass diese Importe _lokal_ sind und sich auf unsere eigenen Dateien beziehen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente zusammenhängt. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sondern weist Vite an, die referenzierte CSS-Datei in den endgültigen Codeausgabe einzuschließen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal case (oder upper camel case)-Variablennamen wie `HelloWorld`, um klarzustellen, dass ein bestimmtes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Würden Sie die Funktion `App()` in `app()` umbenennen, würde Ihr Browser einen Fehler anzeigen.

Schauen wir uns `App()` genauer an.

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

Die Funktion `App()` gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in das DOM rendert.

Direkt unter dem Keyword `return` befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne dass willkürliche `<div>`-Tags im Browser gerendert werden. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Nach der `App()`-Funktion gibt es noch eine weitere Codezeile:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn hier wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfangs so aus:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Wie bei `App.jsx` beginnt die Datei mit dem Importieren aller JS-Module und anderer Assets, die zum Ausführen erforderlich sind.

Die ersten beiden Anweisungen importieren die `React`- und `ReactDOM`-Bibliotheken, da sie später in der Datei referenziert werden. Beim Importieren dieser Bibliotheken geben wir keinen Pfad oder keine Erweiterung an, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Anschließend importieren wir unsere `App()`-Funktion und `index.css`, die globale Stile enthalten, die auf unsere gesamte App angewendet werden.

Wir rufen dann die Funktion `ReactDOM.createRoot()` auf, die die Wurzelknoten unserer Anwendung definiert. Diese Funktion nimmt als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die Methode `render()` kombiniert mit dem Aufruf von `createRoot()` an und übergeben den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Mit der Schreibweise `<App />` als dieser JSX-Ausdruck weisen wir React an, die `App()`-Funktion auszuführen, welche die `App`-Komponente im Wurzelknoten rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs nachlesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Frisch starten

Bevor wir anfangen, unsere App aufzubauen, löschen wir einige der Boilerplate-Codes, die Vite uns bereitgestellt hat.

Ändern Sie zunächst testweise das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es „Hello, World!“ lautet, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver bei `http://localhost:3000` in Ihrem Browser angezeigt wird. Beachten Sie dies, während Sie an Ihrer App arbeiten.

Den restlichen Code benötigen wir nicht! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

Als Nächstes verwenden wir unsere JavaScript-Fähigkeiten, um etwas sicherer im Schreiben von JSX zu werden und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, Kommentare schreibt, Inhalte aus Variablen und anderen Ausdrücken rendert und Daten mit Props an Komponenten übergibt.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, unterhalb des `<h1>`-Elements in Ihrer Datei `App.jsx` einen `<button>` hinzuzufügen, wie hier:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit den Worten `Click me!`. Die Schaltfläche tut noch nichts, aber wir werden bald lernen, wie wir Interaktivität zu unserer App hinzufügen.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird in HTML das Attribut `class` in JSX zu `className`. Das liegt daran, dass `class` in JavaScript ein reserviertes Wort ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrer Schaltfläche eine `primary`-Klasse hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt JSX uns, Variablen und andere JavaScript-Ausdrücke direkt neben unserem anderen Inhalt zu schreiben. Deklarieren wir eine Variable namens `subject` direkt oberhalb der Funktion `App()`:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als Nächstes das Wort „World“ im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten „Hello, React!“ angezeigt sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der Variablen `subject` lesen möchten, anstatt die Literalzeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als finalen Inhalt rendern. Folgend finden Sie eine Reihe von Beispielen mit Kommentaren darüber, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass auch Kommentare technisch gesehen JavaScript-Ausdrücke sind. Die Syntax `/* block comment syntax */` ist erforderlich, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen, tatsächlich: `prop="value"`. Der Unterschied ist, dass während Attribute in reine Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben Sie unserer `<App />`-Komponente ihre ersten Prop.

Fügen Sie einen Prop `subject` mit dem Wert `Clarice` dem `<App />`-Komponentenaufruf hinzu. Wenn Sie fertig sind, sollte es etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Gehen Sie zurück zu `App.jsx` und sehen Sie sich die Funktion `App()` an. Ändern Sie die Signatur der Funktion `App()`, sodass sie `props` als Parameter akzeptiert, und loggen Sie `props` in die Konsole, damit Sie sie inspizieren können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre Datei `App.jsx` sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Das liegt daran, dass wir versuchen, eine `subject`-Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor JSX parsen kann (die meisten modernen Editoren können das!), können Sie dessen integrierte Kommentierungsabkürzung verwenden – `Strg + /` (auf Windows) oder `Cmd + /` (auf macOS) – um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie Ihren "Click me!"-Button alleine gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die in etwa so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir unserer `<App />`-Komponente hinzugefügt haben, und die Zeichenkette `Clarice` entspricht dessen Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

Lassen Sie uns diese `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Beim Speichern sollte die App Ihnen nun mit „Hello, Clarice!“ begegnen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, ändert sich der Text entsprechend.

Sie könnten zum Üben einen zusätzlichen Prop `greeting` hinzufügen, zum Aufruf der `<App />`-Komponente in `main.jsx` und ihn in `App.jsx` zusammen mit dem Prop `subject` verwenden.

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf React, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Grundlagen ihrer Funktionsweise. Im nächsten Artikel beginnen wir mit dem Aufbau unserer ersten richtigen Anwendung – einer To-Do-Liste. Bevor wir das tun, fassen wir einige der Dinge zusammen, die wir gelernt haben.

In React:

- Komponenten können benötigte Module importieren und müssen am Ende ihrer Dateien sich selbst exportieren.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um Konflikte mit reservierten Wörtern in JavaScript zu vermeiden. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden innerhalb von Komponentenaufrufen wie Attribute geschrieben und an Komponenten übergeben.

## Siehe auch

- [React lernen](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Lernpartner_</sup>
  - : Der _Intro-Kurs zu React_ von [Scrimba](https://scrimba.com?via=mdn) ist das ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React kennen, indem Sie über 140 interaktive Codieraufgaben lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
