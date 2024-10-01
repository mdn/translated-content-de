---
title: Erste Schritte mit React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über den Hintergrund und die Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und ausprobieren – dabei lernen wir ein wenig darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a>.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax namens JSX (JavaScript und XML). Vertrautheit mit HTML und JavaScript hilft Ihnen, JSX zu lernen und besser zu erkennen, ob Fehler in Ihrer Anwendung mit JavaScript oder dem spezifischeren Bereich von React zusammenhängen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Eine lokale React-Entwicklungsumgebung einrichten, eine Start-App erstellen und die Grundlagen ihrer Funktionsweise verstehen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es im offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zur Erstellung von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um auf bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen diskutiert und zur Lösung derselben Probleme wie andere echte Web-Entwicklungsframeworks verwendet. Wenn wir React als "Framework" bezeichnen, gehen wir von diesem umgangssprachlichen Verständnis aus.

Das Hauptziel von React ist es, die Fehler zu minimieren, die bei der Erstellung von Benutzeroberflächen auftreten, indem Komponenten verwendet werden – selbstständige, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln bezüglich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede gewünschte Weise zu übernehmen. React kann mit einer einzigen Schaltfläche, einigen Teilen einer Benutzeroberfläche oder der gesamten Benutzeroberfläche einer Anwendung umgehen.

Obwohl React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, in eine Anwendung "einzutauchen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der entwicklerfreundlichen Vorteile einer React-App, wie das Schreiben von Schnittstellen mit JSX, einen Kompilierungsprozess. Die Hinzufügung eines Compilers wie Babel zu einer Website lässt den Code darauf langsamer laufen, daher richten Entwickler oft solche Werkzeuge mit einem Build-Schritt ein. React hat vermutlich hohe Werkzeuganforderungen, aber man kann es lernen.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit der Unterstützung von [Vite](https://vitejs.dev/), einem modernen Front-End-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt viele moderne JavaScript-Features für seine Muster. Die größte Abweichung von JavaScript erfolgt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code daneben existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschrift-Konstante ist als **JSX-Ausdruck** bekannt. React kann ihn verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einbetten? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Code-Schnipsel sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen innerhalb derselben Ausdruck sein sollen. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas seltsam aus, da das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck beginnt, nicht auf dieselbe Position eingerückt ist wie der entsprechende schließende Tag.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (unter Verwendung eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dadurch verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer zu lesen. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community finden, dass die Lesbarkeit von JSX es wert ist. Darüber hinaus ist die moderne Front-End-Entwicklung fast immer mit einem Build-Prozess verbunden — Sie müssen moderne Syntax auf ältere Browser herunterstufen und möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel bieten bereits eine sofort einsatzbereite Unterstützung für JSX, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden es einige Entwickler intuitiv. Andere sagen, dass die gemischte Natur verwirrend sein kann. Sobald Sie sich damit wohlfühlen, können Sie jedoch Benutzeroberflächen schneller und intuitiver erstellen und anderen ermöglichen, Ihren Code auf den ersten Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel des React-Teams [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Einrichtung Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite nutzen, um eine neue Anwendung über die Kommandozeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei eingefügt werden, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger Zeit mit der Einrichtung.

### Anforderungen

Um Vite verwenden zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens die Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, die neueste Langzeitunterstützungs-Version (LTS) zu verwenden, wenn Sie können. Stand 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Befolgen Sie die Anweisungen auf der [Node.js-Website](https://nodejs.org/en/), um Node zu installieren.

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesem Satz von Anleitungen davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie in [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. **Gitbash** (das als Teil des [Git für Windows-Toolset](https://gitforwindows.org/) geliefert wird) oder das **[Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Befehlzeilen-Schnellkurs](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Bedenken Sie auch, dass React und ReactDOM Anwendungen erstellen, die nur auf einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie durch diese Anleitungen arbeiten.

Weitere Informationen finden Sie in folgenden Artikeln:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung in npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vitejs.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager hat einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie `cd` zu dem Ort machen, an dem Ihre App auf Ihrem Rechner gespeichert werden soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein Verzeichnis `moz-todo-react` unter Verwendung der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument sagt Vite, dass es die React-Vorlage verwenden soll.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, zu Ihrem neuen Verzeichnis zu `cd`, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Kommandozeilenflags zu Vites Standardvorschlag hinzufügen, damit die App in unserem Browser geöffnet wird, sobald der Server startet und den Port 3000 verwendet.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browsertab mit Ihrer React-App sehen:

![Screenshot von Firefox MacOS, geöffnet auf localhost:3000, zeigt eine Anwendung, die aus Vites React-Vorlage erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir brauchen, um eine React-Anwendung zu entwickeln. Die anfängliche Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf der obersten Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Element/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genau beschriebene Seitentitel sind wichtig für die Zugänglichkeit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser ausgeliefert werden, ohne von Vites Build-Werkzeug verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da dort der Quellcode unserer Anwendung liegt. Ihnen wird auffallen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist für jede Datei notwendig, die JSX enthält – sie sagt Vite, dass die JSX-Syntax in JavaScript umgewandelt werden soll, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns gefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir weitermachen, möchten Sie möglicherweise Ihre `package.json`-Datei ein wenig ändern, damit Sie die Flags `--open` und `--port` nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den Schlüssel `"dev"`, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App jedes Mal unter `http://localhost:3000` in Ihrem Browser geöffnet, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Hier brauchen Sie die zusätzlichen `--` _nicht_, da wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erkundung unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer Gesamtanwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie haben einen einzigen, offensichtlichen Zweck.

Öffnen wir `src/App.jsx`, da uns unser Browser auffordert, es zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

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
        <a href="https://vitejs.dev" target="_blank">
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

Die Datei `App.jsx` besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am oberen Rand der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und sich auf unsere eigenen Dateien beziehen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies nennt man einen [_Seiteneffektimport_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) — es importiert keinen Wert in die JavaScript-Datei, aber es teilt Vite mit, die referenzierte CSS-Datei in die endgültige Codeausgabe aufzunehmen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case)-Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente und kein normales HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler auslösen.

Schauen wir uns `App()` genauer an.

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was letztendlich im DOM von Ihrem Browser gerendert wird.

Direkt unter dem Schlüsselwort `return` ist eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einziges JSX-Element zurückgeben, und Fragmente ermöglichen es uns, das zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Export-Anweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JS-Module und anderer Assets, die sie zum Laufen benötigt.

Die ersten beiden Anweisungen importieren die Bibliotheken `React` und `ReactDOM`, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder eine Erweiterung, wenn wir diese Bibliotheken importieren, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie durch diese Lektion arbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die Funktion `ReactDOM.createRoot()` auf, die die Wurzelknoten unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element an, in dem wir möchten, dass unsere React-App gerendert wird. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die Methode `render()` an den Aufruf von `createRoot()` an und übergeben den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Indem wir schreiben `<App />` als diesen JSX-Ausdruck, sagen wir React, dass es die `App()`-Funktion aufrufen soll, die die `App`-Komponente innerhalb des Wurzelknotens rendert.

> **Notiz:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können sich über diese React-APIs informieren, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Von Grund auf neu starten

Bevor wir mit dem Bau unserer App beginnen, werden wir einen Teil des Boilerplate-Codes löschen, den Vite für uns bereitgestellt hat.

Ändern Sie zuerst experimentell das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hallo, Welt!" liest, und speichern Sie Ihre Datei. Sie werden bemerken, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

Wir verwenden den restlichen Code nicht! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um etwas mehr Komfort im Schreiben von JSX zu gewinnen und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attributen zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei eine `<button>` hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit der Aufschrift `Click me!`. Die Schaltfläche macht noch nichts, aber wir werden bald lernen, wie wir Interaktivität zu unserer App hinzufügen können.

Einige Attribute sind unterschiedlich im Vergleich zu ihren HTML-Gegenstücken. Beispielsweise wird das `class`-Attribut in HTML in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX ist eine JavaScript-Erweiterung. Wenn Sie eine `primary`-Klasse zu Ihrer Schaltfläche hinzufügen wollten, würden Sie das so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht JSX das Schreiben von Variablen und anderen JavaScript-Ausdrücken direkt neben unseren anderen Inhalten. Deklarieren wir eine Variable namens `subject` direkt oberhalb der `App()`-Funktion:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie anschließend das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der Variablen `subject` lesen möchten, anstatt die Literalsytnax `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn bewerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Es folgt eine Reihe von Beispielen mit Kommentaren darüber, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Auch Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass Kommentare technisch gesehen auch JavaScript-Ausdrücke sind. Die Syntax `/* Blockkommentar-Syntax */` ist erforderlich, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied ist, dass Attribute in einfache Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihren ersten Prop.

Fügen Sie der `<App />`-Komponentenaufruf ein Prop `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, schauen wir uns die `App()`-Funktion nochmals an. Ändern Sie die Signatur von `App()`, sodass sie `props` als Parameter akzeptiert und `props` zur Inspektion in die Konsole protokolliert. Löschen Sie auch die `subject`-Konstante; wir benötigen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Dies liegt daran, dass wir versuchen, eine nicht mehr definierte `subject`-Variable zu lesen. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie er JSX analysieren kann (die meisten modernen Editoren können das!), können Sie seine eingebaute Kommentierungsverknüpfung verwenden — `Strg + /` (unter Windows) oder `Cmd + /` (unter macOS) — um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie nur Ihre "Click me!"-Schaltfläche sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject`-Prop, das wir unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, und löschen Sie die `console.log()`-Anweisung. Ihr Code sollte wie folgt aussehen:

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

Beim Speichern sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, wird Ihr Text geändert.

Zum weiteren Üben könnten Sie versuchen, das zusätzliche `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es neben dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React angelangt, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu bauen – eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können die Module importieren, die sie benötigen, und müssen sich selbst am Ende ihrer Dateien exportieren.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit reservierten JavaScript-Wörtern in Konflikt geraten. Zum Beispiel wird `class` in HTML in JSX zu `className`.
- Props werden genau wie Attribute in Komponentenaufrufe geschrieben und in Komponenten eingefügt.

## Siehe auch

- [Learn React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Kurspartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn React_-Kurs ist der ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Programmierherausforderungen lösen und acht lustige Projekte erstellen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
