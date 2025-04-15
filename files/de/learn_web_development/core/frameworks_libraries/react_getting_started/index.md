---
title: Erste Schritte mit React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und erkunden — dabei lernen wir ein wenig darüber, wie React funktioniert.

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
          Einrichtung einer lokalen React-Entwicklungsumgebung, Erstellen einer Starter-App und
          Verständnis der Grundlagen, wie es funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es im offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv fürs Web. Es wird zusammen mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen wie – und zur Lösung derselben Probleme wie – andere echte Webentwicklungsframeworks diskutiert und eingesetzt. Wenn wir React als „Framework“ bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler UIs erstellen. Es tut dies durch die Verwendung von Komponenten – in sich geschlossene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengesetzt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert viel der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln bezüglich Codekonventionen oder Dateiorganisation. Dadurch können Teams Konventionen festlegen, die für sie am besten funktionieren, und React in jeder gewünschten Weise übernehmen. React kann mit einem einzigen Button umgehen, ein paar Teile einer Schnittstelle oder die gesamte Benutzeroberfläche einer App.

Obwohl React _kann_ für [kleine Teile einer Schnittstelle](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden kann, ist es nicht so einfach wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue, in eine Anwendung "einzufügen" – es ist besser geeignet, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklererfahrungs-Vorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code langsam laufen, sodass Entwickler oft ein solches Werkzeug mit einem Build-Schritt einrichten. React hat möglicherweise einen hohen Werkzeugaufwand, aber es kann gelernt werden.

In diesem Artikel konzentrieren wir uns auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt Funktionen von modernem JavaScript für viele seiner Muster. Die größte Abweichung von JavaScript erfolgt durch die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code daneben existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriftenkonstante ist als **JSX-Ausdruck** bekannt. React kann diesen verwenden, um das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einwickeln. Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu schachteln, genau wie wir es bei HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Beispiel sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal für Sie (und Ihren Computer), dass die mehreren Codezeilen Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck auch so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck startet, nicht zur gleichen Position wie sein entsprechendes schließendes Tag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Beim Kompilieren (unter Verwendung eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)) würde unser Header-Ausdruck folgendermaßen aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) selbst zu verwenden, um Ihre UI zu schreiben. Wenn Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community finden, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet die moderne Frontend-Entwicklung fast immer einen Build-Prozess – Sie müssen moderne Syntax herunterstufen, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel bieten von vornherein JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich daran gewöhnt haben, können Sie Benutzeroberflächen schneller und intuitiver erstellen und anderen einen besseren Einblick in Ihre Codebasis gewähren.

Um mehr über JSX zu erfahren, lesen Sie den Artikel "Writing Markup with JSX" des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Kommandozeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger mit der Einrichtung.

### Voraussetzungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Version 5.0 von Vite wird mindestens Node Version 18 oder höher benötigt, und es ist eine gute Idee, die neueste Langzeit-Support-Version (LTS) zu verwenden, wann immer Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node beinhaltet npm (den Node Package Manager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, wird eine Versionsnummer angezeigt. Wenn nicht, wird eine Fehlermeldung angezeigt. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesem Tutorial davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Basiswissen zur Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial genannten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [Git for Windows Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Beachten Sie auch, dass React und ReactDOM Apps produzieren, die nur in einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Weitere Informationen finden Sie unter:

- ["About npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager enthält einen `create`-Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können ihn verwenden, um eine neue App aus der standardmäßigen React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie `cd` an den Ort machen, an dem Ihre App auf Ihrem Computer leben soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis mit der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Kommandos wie `create` zu übergeben, und das Argument `--template react` teilt Vite mit, dass seine React-Vorlage verwendet werden soll.

Ihr Terminal hat einige Nachrichten ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, sich in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Lassen Sie uns mit zwei dieser Befehle beginnen. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir Vites Standardvorschlag um ein paar Kommandozeilen-Flags ergänzen, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browsertab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS, geöffnet auf localhost:3000, zeigt eine Anwendung, die aus der React-Vorlage von Vite erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite bietet uns alles, was wir benötigen, um eine React-Anwendung zu entwickeln. Seine anfängliche Verzeichnisstruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser serviert werden, ohne von Vites Build-Tooling verarbeitet zu werden. Zurzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da hier der Quellcode für unsere Anwendung lebt. Ihnen fällt vielleicht auf, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie teilt Vite mit, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite füllte `package.json` für uns aus, und npm erstellte `package-lock.json`, als wir die Abhängigkeiten der App installierten. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr über sie erfahren möchten, können Sie in der npm-Dokumentation über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) lesen. Wir sprechen auch über `package.json` in unserem [Basiswissen zur Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Entwicklungs-Skripts

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie nicht jedes Mal die `--open`- und `--port`-Flags angeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel so, dass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Anpassung wird Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Hier benötigen Sie das zusätzliche `--` nicht, da wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erkundung unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie erfüllen einen einzelnen, offensichtlichen Zweck.

Lassen Sie uns `src/App.jsx` öffnen, da unser Browser uns auffordert, es zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen am Anfang, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am Anfang der Datei ermöglichen es `App.jsx`, Code zu verwenden, der an anderer Stelle definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien und nicht auf npm-Pakete verweisen.

Die letzte Anweisung importiert das mit unserer `<App />`-Komponente verbundene CSS. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Nebeneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, aber es teilt Vite mit, die referenzierte CSS-Datei in den endgültigen Codeausgabe aufzunehmen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal case (oder upper camel case) Bezeichner, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die Funktion `App()` in `app()` umbenennen würden, würde Ihr Browser einen Fehler ausgeben.

Sehen wir uns `App()` genauer an.

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

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezielles Stück Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Export-Anweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfangs so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Importieren aller JavaScript-Module und anderen Assets, die sie zum Laufen benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, weil sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder keine Erweiterung, wenn wir diese Bibliotheken importieren, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie sich durch diese Lektion arbeiten!

Wir importieren dann unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die Funktion `createRoot()` auf, die den Wurzelknoten unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich verketten wir die Methode `render()` mit dem Aufruf von `createRoot()`, wobei wir den JSX-Ausdruck übergeben, den wir in unserem Wurzelknoten rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, die `App()`-Funktion aufzurufen, die die `App`-Komponente im Wurzelknoten rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme im Code zu erkennen.

Sie können diese React-APIs nachlesen falls Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neubeginn

Bevor wir beginnen, unsere App zu bauen, werden wir einige der Boilerplate-Codes löschen, die Vite uns zur Verfügung gestellt hat.

Ändern Sie zuerst, experimentell, das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, so dass "Hallo, Welt!" dort steht, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver unter `http://localhost:3000` im Browser dargestellt wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

Wir werden den Rest des Codes nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

Als Nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um ein wenig sicherer im Schreiben von JSX zu werden und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props in Komponenten einfügt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>`-Element unterhalb des `<h1>`-Elements in Ihre `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button tut noch nichts, aber wir werden bald darüber lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das Attribut `class` in HTML in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrer Schaltfläche eine `primary`-Klasse hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalte

Im Gegensatz zu HTML ermöglicht es uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Deklarieren wir eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der Variable `subject` lesen möchten, anstatt die Zeichenfolge `"subject"` wörtlich zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb der geschweiften Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Es folgt eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Dies liegt daran, dass auch Kommentare technisch gesehen JavaScript-Ausdrücke sind. Die `/* Block-Kommentarsyntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist mit der von Attributen identisch: `prop="value"`. Der Unterschied besteht darin, dass Attribute in einfache Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten an Kinderkomponenten weitergereicht werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihr erstes Prop.

Fügen Sie dem Aufruf der `<App />`-Komponente ein Prop `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Gehen Sie zurück zu `App.jsx` und ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert und geben Sie `props` zur Inspektion in die Konsole aus. Löschen Sie auch die const `subject`; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte wie folgt aussehen:

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
> Wenn Ihr Code-Editor JSX-Parsing versteht (die meisten modernen Editoren tun dies!), können Sie die integrierte Kommentarfunktion – `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) – verwenden, um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser Zeile als Kommentar. Dieses Mal sollten Sie Ihren "Click me!"-Button alleinstehend gerendert sehen. Wenn Sie die Entwicklertools Ihres Browsers öffnen, sehen Sie eine Meldung, die wie folgt aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem Prop `subject`, das wir dem Aufruf der `<App />`-Komponente hinzugefügt haben, und der Zeichenkettentext `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer in dieser Art von Objekten gesammelt.

Verwenden wir dieses `subject`-Prop, um den Fehler in unserer App zu beheben. Heben Sie den Kommentar bei der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie ihn in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte wie folgt aussehen:

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

Beim Speichern sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, wird sich Ihr Text ändern.

Zur weiteren Übung könnten Sie versuchen, ein zusätzliches `greeting`-Prop zur `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf React, einschließlich der lokalen Installation, dem Erstellen einer Starter-App und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen – eine Todo-Liste. Bevor wir das tun, fassen wir einige der Dinge zusammen, die wir gelernt haben.

In React:

- Komponenten können die Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen verwenden `PascalCase` für ihre Namen.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um Kollisionen mit reservierten JavaScript-Wörtern zu vermeiden. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden genauso wie Attribute innerhalb von Komponentenaufrufen geschrieben und werden in Komponenten weitergereicht.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba](https://scrimba.com/?via=mdn)s _Learn React_-Kurs ist der ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen Reacts, indem Sie über 140 interaktive Programmierherausforderungen lösen und acht spannende Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
