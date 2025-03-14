---
title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 5a70325ee5aec52e8c498f1acd4c0d9a823ad81d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir React kennenlernen. Wir werden etwas über den Hintergrund und die Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen – und dabei ein wenig darüber lernen, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und
          Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es in seiner offiziellen Tagline heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird in Verbindung mit anderen Bibliotheken verwendet, um auf bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen diskutiert – und um dieselben Probleme wie andere echte Webentwicklungs-Frameworks zu lösen. Wenn wir von React als "Framework" sprechen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React besteht darin, die Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen auftreten können. Dies geschieht durch die Verwendung von Komponenten – eigenständige, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strikten Regeln hinsichtlich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede beliebige Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App handhaben.

Während React _für_ [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, in eine Anwendung "einzufallen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Vorteile der Entwicklererfahrung einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Die Hinzufügung eines Compilers wie Babel zu einer Website lässt den Code darauf langsam laufen, sodass Entwickler häufig eine solche Tooling mit einem Build-Schritt einrichten. React hat möglicherweise einen hohen Tooling-Bedarf, aber es kann gelernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zur Darstellung der gesamten Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, zu verwenden.

## Wie nutzt React JavaScript?

React nutzt Funktionen der modernen JavaScript-Sprache für viele seiner Muster. Der größte Unterschied zu JavaScript besteht in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben JavaScript existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Header-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann sie verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unseren Header aus semantischen Gründen in einem [`<header>`](/de/docs/Web/HTML/Element/header)-Tag umwickeln? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu schachteln, genau wie bei HTML:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Codeausschnitt sind nicht einzigartig für JSX und haben keine Auswirkung auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Allerdings sieht dies ziemlich ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck beginnt, nicht an derselben Position wie sein entsprechendes schließendes Tag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn er kompiliert wird (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), sieht unser Header-Ausdruck so aus:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und die [`React.createElement()`](https://react.dev/reference/react/createElement)-Methode zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dadurch verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community finden, dass die Lesbarkeit von JSX lohnenswert ist. Zudem ist die moderne Front-End-Entwicklung fast immer mit einem Build-Prozess verbunden – Sie müssen moderne Syntax herunterstufen, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel unterstützen JSX out-of-the-box, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten dies.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere finden, dass seine gemischte Natur verwirrend ist. Wenn Sie sich einmal daran gewöhnt haben, können Sie Benutzeroberflächen schneller und intuitiver erstellen, und andere können Ihren Code besser auf einen Blick verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem vorhandenen Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem Sie einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopieren, aber mit Vite können Sie mehr Zeit damit verbringen, Ihre App zu erstellen, und weniger Zeit mit der Einrichtung verbringen.

### Anforderungen

Um Vite nutzen zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 wird mindestens Node-Version 18 oder neuer benötigt, und es ist eine gute Idee, wann immer möglich die neueste Version mit Langzeitunterstützung (LTS) auszuführen. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Website von Node.js](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie npm in diesem Tutorial verwenden. Weitere Informationen zu npm und Yarn finden Sie im [Leitfaden zur Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um mit der Unix/macOS-Terminalseite gleichzuziehen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [Git for Windows Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im [Schnellkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Beachten Sie auch, dass React und ReactDOM Apps erstellen, die nur in einem relativ modernen Set von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Für weitere Informationen siehe:

- ["About npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager enthält ein `create`-Kommando, das es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können es verwenden, um eine neue App aus der standardmäßigen React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie in das Verzeichnis wechseln, in dem Sie Ihre App speichern möchten, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein Verzeichnis `moz-todo-react` mithilfe der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Kommandos wie `create` zu übergeben, und das Argument `--template react` teilt Vite mit, seine React-Vorlage zu verwenden.

Ihr Terminal zeigt einige Meldungen an, wenn dieses Kommando erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Nachdem der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige Befehlszeilen-Flags zur Standardeinstellung von Vite hinzu, um die App in unserem Browser zu öffnen, sobald der Server startet, und verwenden Port 3000.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browsertab mit Ihrer React-App sehen:

![Screenshot von Firefox macOS geöffnet in localhost:3000, zeigt eine Anwendung, die aus der React-Schablone von Vite erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir zur Entwicklung einer React-Anwendung benötigen. Die anfängliche Dateistruktur sieht wie folgt aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements dieser Datei ändern, um den Titel Ihrer Anwendung wiederzugeben. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne von Vites Build-Tools verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Im **`src`**-Verzeichnis werden wir die meiste Zeit verbringen, da sich hier der Quellcode unserer Anwendung befindet. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis die Endung `.jsx` haben. Diese Erweiterung ist notwendig für alle Dateien, die JSX enthalten – sie sagt Vite, dass die JSX-Syntax in verständliches JavaScript umgewandelt werden soll. Das Verzeichnis `src/assets` enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns befüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumentationen lesen. Wir sprechen auch über `package.json` in unserem [Leitfaden zur Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

### Anpassen unseres Entwicklungs-Scripts

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open` und `--port`-Flags nicht jedes Mal hinzufügen müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel so, dass er wie folgt aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Einstellung wird Ihre App jedes Mal unter `http://localhost:3000` in Ihrem Browser geöffnet, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Hier benötigen Sie das zusätzliche `--` _nicht_, da wir Argumente direkt an `vite` übergeben, statt an ein vordefiniertes npm-Skript.

## Untersuchung unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind jedoch normalerweise eindeutig definiert: Sie erfüllen einen einzelnen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am unteren Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen es `App.jsx`, Code zu verwenden, der an anderer Stelle definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial ausführlicher über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` bzw. `/` beginnen und mit der `.svg`-Erweiterung enden. Dies zeigt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien statt auf npm-Pakete verweisen.

Die letzte Anweisung importiert das mit unserer `<App />`-Komponente verbundene CSS. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sondern weist Vite an, die referenzierte CSS-Datei zum endgültigen Codeausgang hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal case (oder upper camel case) Variablennamen, um deutlich zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die Funktion `App()` in `app()` umbenennen, wird Ihr Browser einen Fehler ausgeben.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in das DOM rendert.

Gleich unterhalb des `return`-Schlüsselworts befindet sich ein besonderes Bit der Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen uns das ohne das Rendern willkürlicher `<div>`s im Browser. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter mit `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, alle JavaScript-Module und andere Assets zu importieren, die sie für den Betrieb benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den Bibliotheken `react` und `react-dom`, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder eine Erweiterung beim Importieren dieser Bibliotheken, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die Funktion `createRoot()` auf, die das Wurzelelement unserer Anwendung definiert. Diese Funktion nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die Methode `render()` an den Aufruf von `createRoot()` an und übergeben ihr den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()`- _Funktion_ aufzurufen, die die `App`- _Komponente_ innerhalb des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs nachlesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neuer Anfang

Bevor wir mit dem Erstellen unserer App beginnen, werden wir einige der Boilerplate-Codes entfernen, die Vite uns bereitgestellt hat.

Zuerst ändern wir das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx` zu "Hello, World!", dann speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort auf dem Entwicklungsserver bei `http://localhost:3000` in Ihrem Browser gerendert wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

Den Rest des Codes werden wir nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

## Praxis mit JSX

Als Nächstes werden wir unsere JavaScript-Fähigkeiten einsetzen, um uns ein wenig wohler mit dem Schreiben von JSX und dem Arbeiten mit Daten in React zu fühlen. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props in Komponenten übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>` unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Wörtern `Click me!`. Der Button tut noch nichts, aber wir werden bald darüber sprechen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class`-Attribut in HTML in `className` in JSX übersetzt. Das liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht JSX das Schreiben von Variablen und anderen JavaScript-Ausdrücken direkt neben unserem anderen Inhalt. Lassen Sie uns eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei deklarieren:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als Nächstes das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" angezeigt sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern signalisieren React, dass wir den Wert der Variablen `subject` lesen möchten, anstatt den wörtlichen String `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb von geschweiften Klammern in JSX einfügen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als Endinhalt rendern. Folgendes ist eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb von geschweiften Klammern geschrieben! Dies liegt daran, dass Kommentare ebenfalls technisch JavaScript-Ausdrücke sind. Das `/* Blockkommentar-Syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute in einfache Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente die ersten Props.

Fügen Sie einen `subject`-Prop mit dem Wert `Clarice` zum `<App />`-Komponentenaufruf hinzu. Wenn Sie fertig sind, sollte es etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, überprüfen wir die `App()`-Funktion. Ändern Sie die Signatur von `App()`, so dass sie `props` als Parameter akzeptiert und protokollieren `props` zur Konsole, damit Sie es untersuchen können. Löschen Sie auch die `subject`-Konstante; wir benötigen sie nicht mehr. Ihre `App.jsx`-Datei sollte in etwa so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Dies liegt daran, dass wir versuchen, eine `subject`-Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX analysiert (die meisten modernen Editoren tun das!), können Sie dessen integrierte Kommentierverknüpfung verwenden – `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) – um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Diesmal sollten Sie Ihren "Click me!" Button sehen, der alleine gerendert wird. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Meldung, die in etwa so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht dessen Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Verwenden wir diesen `subject`-Prop, um den Fehler in unserer App zu beheben. Entfernen Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, wird Ihr Text geändert.

Zur weiteren Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop zum `<App />`-Komponentenaufruf innerhalb von `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop innerhalb von `App.jsx` zu verwenden.

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf React, einschließlich der Installation lokal, der Erstellung einer Starter-App und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung – eine To-Do-Liste – zu erstellen. Bevor dies jedoch geschieht, fassen wir einige der gelernten Dinge zusammen.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit JavaScript-Reservierungen kollidieren. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute in Komponentenanrufe geschrieben und in Komponenten übergeben.

## Siehe auch

- [Learn React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn React_ Kurs ist der ultimative React 101 — der perfekte Startpunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
