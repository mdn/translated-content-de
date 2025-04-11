---
title: Erste Schritte mit React
short-title: React Erste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel machen wir Bekanntschaft mit React. Wir entdecken ein wenig über seinen Hintergrund und seine Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und experimentieren mit einer einfachen Starter-App – und lernen dabei etwas darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und
        Verstehen der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie sein offizielles Motto besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Kreisen diskutiert und werden genutzt, um dieselben Probleme zu lösen wie andere echte Webentwicklungsframeworks. Wenn wir React als "Framework" bezeichnen, gehen wir von diesem umgangssprachlichen Verständnis aus.

React's Hauptziel ist es, die Anzahl der Fehler zu minimieren, die bei der Erstellung von Benutzeroberflächen durch Entwickler auftreten. Dies erreicht es durch die Verwendung von Komponenten – in sich geschlossene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengestellt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strikten Regeln zu Codekonventionen oder Dateiorganisation. Dadurch können Teams Konventionen festlegen, die am besten zu ihnen passen, und React auf jede gewünschte Weise verwenden. React kann eine einzelne Schaltfläche, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App handhaben.

Obwohl React für [kleine Teile einer Schnittstelle](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, lässt es sich nicht so einfach wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue in eine Anwendung "einfügen" — es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklererfahrungs-Vorteile einer React-App, wie das Schreiben von Schnittstellen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website verlangsamt den Code, daher richten Entwickler solche Tools oft mit einem Build-Schritt ein. React hat zwar einen hohen Werkzeuganforderungen, kann aber erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zur Darstellung der gesamten Benutzeroberfläche einer Anwendung mit Vite, einem modernen Frontend-Build-Tool, zu verwenden.

## Wie nutzt React JavaScript?

React nutzt Funktionen moderner JavaScript-Sprachen für viele seiner Muster. Der größte Unterschied zu JavaScript besteht in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx) Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code neben ihm existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriftskonstante ist als ein **JSX-Ausdruck** bekannt. React kann es verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in einem [`<header>`](/de/docs/Web/HTML/Reference/Elements/header) Tag einschließen? Der JSX-Ansatz erlaubt es uns, unsere Elemente ineinander zu schachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Zeilen Code innerhalb desselben Ausdrucks gehören. Sie könnten den Header-Ausdruck so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas merkwürdig aus, weil das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header) Tag, das den Ausdruck beginnt, nicht auf dieselbe Position wie sein entsprechendes schließendes Tag eingerückt ist.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn kompiliert (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und mit [`React.createElement()`](https://react.dev/reference/react/createElement) Ihre Benutzeroberfläche selbst zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community halten die Lesbarkeit von JSX für lohnenswert. Außerdem beinhaltet die moderne Frontend-Entwicklung fast immer einen Build-Prozess — man muss moderne Syntax abwärtskompatibel machen, um mit älteren Browsern kompatibel zu sein, und man möchte möglicherweise seinen Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten bereits standardmäßig JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden es einige Entwickler intuitiv. Andere sagen, dass seine gemischte Natur verwirrend ist. Sobald Sie sich damit wohlfühlen, ermöglicht es Ihnen, Benutzerschnittstellen schneller und intuitiver zu gestalten und anderen ein besseres Verständnis Ihres Codebases auf einen Blick zu geben.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um eine neue Anwendung über die Befehlszeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger mit dem Setup zu kämpfen.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 ist mindestens Node-Version 18 oder später erforderlich, und es ist eine gute Idee, die neueste Long Term Support (LTS) Version zu verwenden, wann immer Sie können. Am 24. Oktober 2023, ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Version von Node zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js Website](https://nodejs.org/en/).

Sie können den Yarn Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie npm in diesem Tutorial verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um auf Unix/macOS Terminal Parität zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [Git for Windows Toolsets](https://gitforwindows.org/) ist) oder **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Einstiegskurs für die Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für mehr Informationen über diese und über Terminal-Befehle im Allgemeinen.

Denken Sie auch daran, dass React und ReactDOM Anwendungen produzieren, die nur auf einer ziemlich modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe folgendes für mehr Informationen:

- ["Über npm" auf dem npm Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung von npx" auf dem npm Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Die Dokumentation von Vite](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm Paketmanager kommt mit einem `create` Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können es benutzen, um eine neue App aus Vites Standard-React Vorlage zu erstellen. Stellen Sie sicher, dass Sie `cd` an den Ort ausführen, an dem Ihre App auf Ihrer Maschine leben soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react` Verzeichnis mit Vites `react` Vorlage.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` weiterzugeben, und das `--template react` Argument sagt Vite, dass seine React Vorlage verwendet werden soll.

Ihr Terminal wird einige Nachrichten drucken, wenn dieser Befehl erfolgreich war. Sie sollten Texte sehen, die Sie auffordern, zu Ihrem neuen Verzeichnis zu `cd`, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Lassen Sie uns mit zwei dieser Befehle anfangen. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Befehlszeilen-Flags zu Vites Standardvorschlag hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS, geöffnet bei localhost:3000, das eine Anwendung aus Vites React Vorlage zeigt](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir brauchen, um eine React-Anwendung zu entwickeln. Seine anfängliche Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title) Element dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Korrekte Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`** Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne von Vites Build-Tools verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`** Verzeichnis ist, wo wir die meiste Zeit verbringen werden, da dort der Quellcode unserer Anwendung lebt. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist für jede Datei notwendig, die JSX enthält – sie sagt Vite, die JSX-Syntax in JavaScript zu verwandeln, die Ihr Browser verstehen kann. Das `src/assets` Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json` und `package-lock.json` Dateien enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns gefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) Tutorial.

### Anpassen unseres Entwicklungs-Skripts

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json` Datei ein wenig ändern, damit Sie nicht jeden Mal die `--open` und `--port` Flags angeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts` Objekt. Ändern Sie den `"dev"` Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Damit wird Ihre App jedes Mal in Ihrem Browser bei `http://localhost:3000` geöffnet, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Sie _brauchen_ hier keine zusätzlichen `--`, da wir direkt Argumente an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erkunden unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: sie dienen einem einzigen, offensichtlichen Zweck.

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

Die `App.jsx` Datei besteht aus drei Hauptteilen: ein paar [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisungen oben, die `App()` Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung am unteren Rand. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import` Anweisungen oben in der Datei erlauben `App.jsx`, Code zu verwenden, der an anderer Stelle definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react` Bibliothek. Hooks sind ein Weg, Reacts Funktionen innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie am Ende auf die `.svg` Erweiterung enden. Dies teilt uns mit, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />` Komponente verknüpft ist. Beachten Sie, dass es keinen Variablennamen und keine `from` Direktive gibt. Dies wird als [_Nebeneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sagt aber Vite, die referenzierte CSS-Datei zum finalen Code-Output hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()` Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App` Komponente definiert. Während der größte Teil der JavaScript-Community Präferenzen für {{Glossary("camel_case", "lower Camel Case")}} Namen wie `helloWorld` hat, verwenden React-Komponenten Pascal Case (oder Upper Camel Case) Variablennamen wie `HelloWorld`, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die Funktion `App()` in `app()` umbenennen würden, würde Ihr Browser einen Fehler auslösen.

Lassen Sie uns `App()` genauer betrachten.

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

Die `App()` Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in das DOM rendert.

Direkt unter dem `return` Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einziges JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export` Anweisung

Es gibt noch eine Zeile Code nach der `App()` Funktion:

```jsx
export default App;
```

Diese Export-Anweisung macht unsere `App()` Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, weil dies der Ort ist, an dem die `<App />` Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, alle JavaScript-Module und andere Assets zu importieren, die sie benötigt, um zu laufen.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react` und `react-dom` Bibliotheken, weil sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder keine Erweiterung, wenn wir diese Bibliotheken importieren, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json` Datei aufgelistet. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Wir importieren dann unsere `App()` Funktion und `index.css`, die globale Stile enthält, die auf unsere ganze App angewendet werden.

Wir rufen dann die Funktion `createRoot()` auf, die das Wurzelelement unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit einer ID von `root`. Schließlich ketten wir die `render()` Methode an den `createRoot()` Aufruf an, und übergeben den JSX-Ausdruck, den wir in unserem Root rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()` _Funktion_ aufzurufen, die die `App` _Komponente_ im Wurzelelement rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>` Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs näher unter die Lupe nehmen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neuer Start

Bevor wir mit dem Erstellen unserer App beginnen, löschen wir einige der Boilerplate-Codes, die Vite bereitgestellt hat.

Ändern Sie zuerst, als Experiment, das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Element in `App.jsx`, sodass es "Hello, World!" liest, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver bei `http://localhost:3000` in Ihrem Browser gerendert wird. Beachten Sie dies, während Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um ein wenig komfortabler mit dem Schreiben von JSX und dem Arbeiten mit Daten in React zu werden. Wir sprechen darüber, wie man Attribute zu JSX-Elementen hinzufügt, Kommentare schreibt, Inhalte aus Variablen und anderen Ausdrücken rendert und Daten mithilfe von Props in Komponenten einfügt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, einen `<button>` unter dem `<h1>` Element in Ihrer `App.jsx` Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit den Worten "Click me!". Die Schaltfläche tut noch nichts, aber wir werden bald über das Hinzufügen von Interaktivität zu unserer App sprechen.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class` Attribut in HTML in JSX zu `className`. Dies ist, weil `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary` Klasse zu Ihrer Schaltfläche hinzufügen möchten, würden Sie sie folgendermaßen schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht es uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unserem anderen Inhalt zu schreiben. Deklarieren wir eine Variable namens `subject` über der `App()` Funktion in Ihrer `App.jsx` Datei:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als nächstes das Wort "World" im `<h1>` Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject` Variable lesen möchten, anstatt die wörtliche Zeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als finalen Inhalt rendern. Im Folgenden eine Reihe von Beispielen mit Kommentaren darüber, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass auch Kommentare technisch JavaScript-Ausdrücke sind. Die `/* block comment syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied ist, dass Attribute in reguläre Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Eltern-Komponenten an Kinder-Komponenten übergeben werden.

Lassen wir `main.jsx` öffnen und unserer `<App />` Komponente ihren ersten Prop geben.

Fügen Sie einen Prop namens `subject` zum `<App />` Komponentenaufruf hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()` Funktion noch einmal ansehen. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert und `props` zur Konsole protokolliert, damit Sie es inspizieren können. Löschen Sie auch die `subject` Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx` Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, eine `subject` Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (was die meisten modernen Editoren tun!), können Sie dessen eingebauten Kommentieren-Shortcut verwenden — `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) — um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie Ihre "Click me!" Schaltfläche alleine gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem Prop `subject`, das wir dem `<App />` Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Lassen Sie uns diesen `subject` Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Kommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie zu `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()` Anweisung. Ihr Code sollte so aussehen:

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

Zum zusätzlichen Üben könnten Sie versuchen, einen zusätzlichen `greeting` Prop zum `<App />` Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject` Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Einblicks in React angelangt, einschließlich der lokalen Installation, der Erstellung einer Start-App und wie die Grundlagen funktionieren. Im nächsten Artikel beginnen wir mit dem Aufbau unserer ersten richtigen Anwendung – einer Aufgabenliste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können benötigte Module importieren und müssen sich am unteren Rand ihrer Dateien selbst exportieren.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX Attribute unterscheiden sich von HTML Attributen, damit sie nicht mit JavaScript reservierten Wörtern in Konflikt geraten. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute innerhalb von Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [React lernen](https://scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Lernpartner_</sup>
  - : [Scrimba's](https://scrimba.com/?via=mdn) _Learn React_ Kurs ist der ultimative React 101 — der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Programmierherausforderungen lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
