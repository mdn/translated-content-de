---
title: Einstieg in React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über dessen Hintergrund und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren — wobei wir ein wenig darüber lernen, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und Verstehen der Grundlagen, wie es funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie der offizielle Slogan sagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv fürs Web. Es wird zusammen mit anderen Bibliotheken verwendet, um auf bestimmten Umgebungen darzustellen. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Zusammenhängen diskutiert und zur Lösung derselben Probleme verwendet wie andere echte Webentwicklungs-Frameworks. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die bei der Erstellung von Benutzeroberflächen durch Entwickler auftreten. Es erreicht dies durch die Verwendung von Komponenten – in sich geschlossene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln bezüglich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten für sie funktionieren, und React auf beliebige Weise zu übernehmen. React kann mit einem einzelnen Button, einigen Teilen einer Oberfläche oder der gesamten Benutzeroberfläche einer App umgehen.

Während React für [kleine Teile einer Oberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach in eine Anwendung "einzubinden" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele Vorteile der Entwicklererfahrung einer React-App, wie das Schreiben von Oberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Kompilers wie Babel zu einer Website lässt den auf ihr laufenden Code langsamer laufen, daher richten Entwickler häufig solche Werkzeuge mit einem Build-Schritt ein. React hat ohne Zweifel einen hohen Werkzeuganwendungsbedarf, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, darzustellen.

## Wie verwendet React JavaScript?

React nutzt Features moderner JavaScript-Versionen für viele seiner Muster. Die größte Abweichung von JavaScript liegt in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, damit HTML-ähnlicher Code nebenher existieren kann. Ein Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschrift-Konstante ist als **JSX-Ausdruck** bekannt. React kann ihn verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App darzustellen.

Angenommen, wir wollten unsere Überschrift in einem [`<header>`](/de/docs/Web/HTML/Element/header)-Tag für semantische Zwecke umschließen? Der JSX-Ansatz erlaubt uns, unsere Elemente innerhalb voneinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Codeabschnitt sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehrere Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den header-Ausdruck ebenso auf diese Weise schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Allerdings sieht dies etwas ungeschickt aus, da der [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, der den Ausdruck beginnt, nicht auf die gleiche Position eingerückt ist wie sein entsprechendes Schlusstag.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Nach der Kompilierung (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)) würde unser header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Wenn Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwicklergemeinschaften in React denken, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem umfasst moderne Front-End-Entwicklung sowieso fast immer einen Build-Prozess – Sie müssen moderne Syntax herabstufen, um mit älteren Browsern kompatibel zu sein, und möchten möglicherweise Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel unterstützen JSX bereits von Haus aus, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, empfinden einige Entwickler es als intuitiv. Andere sagen, dass seine Mischform es verwirrend macht. Sobald Sie sich damit wohlfühlen, wird es Ihnen jedoch ermöglicht, Benutzeroberflächen schneller und intuitiver zu erstellen, und anderen den besseren Einblick in Ihren Code zu ermöglichen.

Um mehr über JSX zu erfahren, sehen Sie sich den Artikel der React-Entwickler über das [Schreiben von Markup mit JSX](https://react.dev/learn/writing-markup-with-jsx) an.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden verwenden Vite, um eine neue Anwendung über die Kommandozeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopiert werden, aber mit Vite sparen Sie sich mehr Zeit für den Aufbau Ihrer App und weniger für die Einrichtung.

### Anforderungen

Um Vite verwenden zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 ist mindestens Node-Version 18 oder später erforderlich, und es ist eine gute Idee, immer die neueste Langzeit-Support-Version (LTS) zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node beinhaltet npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, befolgen Sie die Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager alternativ zu npm verwenden, aber wir nehmen an, dass Sie npm in dieser Anleitung verwenden. Weitere Informationen zu npm und Yarn finden Sie unter [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Ihnen Parität mit der Unix/macOS-Terminal zu geben, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [Git für Windows-Tools](https://gitforwindows.org/) ist) oder **[Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen zu diesen und zu Terminalbefehlen im Allgemeinen finden Sie unter [Crashkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Denken Sie auch daran, dass React und ReactDOM Apps erstellen, die nur auf einem relativ modernen Satz von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Anleitungen durcharbeiten.

Weitere Informationen finden Sie unter:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung in npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager enthält einen `create`-Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können es verwenden, um eine neue App aus der Vite-Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort navigieren (`cd`), an dem Sie möchten, dass Ihre App auf Ihrem Rechner lebt, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis unter Verwendung der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` weist Vite an, seine React-Vorlage zu verwenden.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, zu Ihrem neuen Verzeichnis zu navigieren (`cd`), die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige Kommandozeilen-Flags zu Vites Standardvorschlag hinzu, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox macOS, der zu localhost:3000 geöffnet ist und eine mit der React-Vorlage von Vite erstellte Anwendung zeigt](default-vite.png)

### Anwendungsstruktur

Vite liefert uns alles, was wir benötigen, um eine React-Anwendung zu entwickeln. Seine anfängliche Dateistruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigeste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, sodass Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Element/title)-Element dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Zugänglichkeit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt zu Ihrem Browser geliefert werden, ohne von Vites Build-Werkzeugen verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da sich dort der Quellcode für unsere Anwendung befindet. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie signalisiert Vite, die JSX-Syntax in JavaScript zu übersetzen, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis umfasst das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat die `package.json` für uns gefüllt, und npm hat die `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien gar nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in den npm-Dokumentationen über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Entwickler-Skripts

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, sodass Sie nicht jedes Mal die `--open`- und `--port`-Flags übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Eintrag, sodass er folgendermaßen aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Einrichtung wird Ihre App bei jedem Ausführen von `npm run dev` in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Sie benötigen hier _nicht_ das zusätzliche `--`, da wir direkt Argumente an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Erforschen unseres ersten React-Komponenten — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung darstellt. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie dienen einem einzigen offensichtlichen Zweck.

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

### Importanweisungen

Die `import`-Anweisungen oben in der Datei erlauben `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, React-Funktionen innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies zeigt an, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen und nicht auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente zusammenhängt. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Seiteneffekte-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet — es importiert keinen Wert in die JavaScript-Datei, teilt Vite aber mit, die referenzierte CSS-Datei zum endgültigen Codeoutput hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Imports haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während ein Großteil der JavaScript-Gemeinschaft {{Glossary("camel_case", "lower Camel Case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case)-Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein bestimmtes JSX-Element eine React-Komponente und kein normales HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler werfen.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich im DOM darstellt.

Direkt unter dem `return`-Schlüsselwort steht eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einziges JSX-Element zurückgeben, und Fragmente erlauben uns, das zu tun, ohne dass willkürliche `<div>`s im Browser gerendert werden. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion anderen Modulen verfügbar. Wir werden später mehr darüber sprechen.

## Wechseln zu `main`

Öffnen wir `src/main.jsx`, da dort die `<App />` Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht initial so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JavaScript-Module und anderen Assets, die es benötigt, um ausgeführt zu werden.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den Bibliotheken `react` und `react-dom`, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder Erweiterung, wenn wir diese Bibliotheken importieren, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Seien Sie vorsichtig mit diesem Unterschied, während Sie diese Lektion durcharbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `createRoot()`-Funktion auf, die das Wurzelelement unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element an, in dem wir möchten, dass unsere React-App gerendert wird. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()`-Methode an den `createRoot()`-Aufruf, indem wir den JSX-Ausdruck übergeben, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()` _Funktion_ aufzurufen, die die `App` _Komponente_ innerhalb des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können sich über diese React-APIs weiter informieren, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neu anfangen

Bevor wir mit dem Aufbau unserer App beginnen, werden wir einige der vom Vite bereitgestellten Vorlagen löschen.

Ändern Sie zunächst als Experiment das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" anzeigt, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver angezeigt wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

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

## Übung mit JSX

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um etwas vertrauter darin zu werden, JSX zu schreiben und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attributen zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props in Komponenten überträgt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>`-Element unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, etwa so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit den Worten `Click me!`. Die Schaltfläche tut noch nichts, aber wir werden bald lernen, wie wir Interaktivität zu unserer App hinzufügen.

Einige Attribute sind anders als ihre HTML-Gegenstücke. Beispielsweise wird das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrer Schaltfläche eine `primary`-Klasse hinzufügen wollten, würden Sie sie so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben anderen Inhalten zu schreiben. Erklären wir eine Variable namens `subject` direkt oberhalb der `App()`-Funktion in Ihrer `App.jsx`-Datei:

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

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der Variablen `subject` lesen wollen, anstatt den wörtlichen String `"subject"` zu rendern. In JSX können Sie jeden gültigen JavaScript-Ausdruck zwischen geschweifte Klammern setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Folgend finden Sie eine Reihe von Beispielen mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Dies liegt daran, dass Kommentare technisch gesehen ebenfalls JavaScript-Ausdrücke sind. Die `/* block comment syntax */` ist erforderlich, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen, tatsächlich: `prop="value"`. Der Unterschied besteht darin, dass während Attribute in einfache Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten zu untergeordneten Komponenten übertragen werden.

Lassen Sie uns `main.jsx` öffnen und unserer `<App />` Komponente ihr erstes Prop geben.

Fügen Sie der `<App />`-Komponente einen Prop namens `subject` hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, sollte es so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()`-Funktion erneut betrachten. Ändern Sie die Signatur der `App()`, sodass sie `props` als Parameter akzeptiert, und loggen Sie `props` in die Konsole, damit Sie es inspizieren können. Löschen Sie auch die `subject`-Konstante, die brauchen wir nicht mehr. Ihre `App.jsx`-Datei sollte nun so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Dies liegt daran, dass wir versuchen, eine nicht mehr definierte Variable `subject` zu lesen. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie JSX zu parsen ist (die meisten modernen Editoren tun das!), können Sie dessen eingebauten Kommentier-Shortcut verwenden — `Strg + /` (auf Windows) oder `Cmd + /` (auf macOS) — um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser Zeile ausgeblendet. Dieses Mal sollten Sie Ihren "Click me!"-Button allein sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Lassen Sie uns dieses `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte nun so aussehen:

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

Wenn Sie speichern, sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, wird sich Ihr Text ändern.

Für zusätzliche Übung könnten Sie versuchen, ein weiteres `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf React, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel beginnen wir mit dem Aufbau unserer ersten richtigen Anwendung — einer ToDo-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können benötigte Module importieren und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit JavaScript-Reserviertwörtern kollidieren. Zum Beispiel wird `class` in HTML zu `className` in JSX übersetzt.
- Props werden genau wie Attribute innerhalb von Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [Lernen Sie React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN-Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn React_-Kurs ist der ultimative React 101 — der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen moderner React, indem Sie über 140 interaktive Programmierherausforderungen lösen und acht spannende Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
