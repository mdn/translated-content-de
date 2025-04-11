---
title: Einstieg in React
short-title: React Einstieg
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir React kennenlernen. Wir werden ein wenig über seine Hintergründe und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und erkunden - dabei lernen wir ein wenig, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Eine lokale React-Entwicklungsumgebung einrichten, eine Start-App erstellen und die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie der offizielle Slogan sagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um auf bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen diskutiert wie – und genutzt, um dieselben Probleme zu lösen wie – andere echte Webentwicklungs-Frameworks. Wenn wir React als "Framework" bezeichnen, handeln wir im Sinne dieses umgangssprachlichen Verständnisses.

Das Hauptziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler UIs erstellen. Dies geschieht durch die Verwendung von Komponenten – in sich geschlossene, logische Teile von Code, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige UI zu erstellen, und React übernimmt einen Großteil der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen Frameworks, die in diesem Modul behandelt werden, erzwingt React keine strengen Regeln in Bezug auf Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten für sie funktionieren, und React in beliebiger Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verwalten.

Während React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, eine Anwendung einzufügen wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Vorteile des Entwicklererlebnisses einer React-App, wie das Schreiben von Oberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code darauf langsam ausführen, daher richten Entwickler oft solche Tools mit einem Build-Schritt ein. React hat möglicherweise hohe Anforderungen an Tools, aber es kann gelernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt die Funktionen des modernen JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript liegt in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben ihm existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Konstante für die Überschrift ist als **JSX-Ausdruck** bekannt. React kann es verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einfügen? Der JSX-Ansatz erlaubt uns, unsere Elemente innerhalb voneinander zu schachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Ausschnitt sind nicht einzigartig für JSX und haben keinen Effekt auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Allerdings sieht das etwas umständlich aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck beginnt, nicht an der gleichen Position eingerückt ist wie sein entsprechendes Endtag.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn er kompiliert wird (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Wenn Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer zu lesen. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX sich lohnt. Außerdem beinhaltet moderne Front-End-Entwicklung fast immer einen Build-Prozess – Sie müssen modernen Syntax herunterstufen, damit er mit älteren Browsern kompatibel ist, und möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel unterstützen JSX bereits standardmäßig, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie damit vertraut sind, können Sie jedoch Benutzeroberflächen schneller und intuitiver erstellen und anderen ermöglichen, Ihre Codebasis auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, sehen Sie sich den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams an.

## Ihre erste React-App einrichten

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um eine neue Anwendung über die Kommandozeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite erlaubt es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger mit der Einrichtung.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 wird mindestens Node Version 18 oder später benötigt, und es ist eine gute Idee, bei der neuesten langfristigen Support-Version (LTS) zu bleiben, wenn Sie können. Stand 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node umfasst npm (den Node-Paketmanager).

Um Ihre Version von Node zu überprüfen, geben Sie Folgendes in Ihr Terminal ein:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesen Tutorials davon aus, dass Sie npm verwenden. Weitere Informationen über npm und Yarn finden Sie im Abschnitt [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit der Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [git for Windows-Werkzeugs](https://gitforwindows.org/) ist) oder **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im Abschnitt [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Bitte beachten Sie auch, dass React und ReactDOM Apps erstellen, die nur mit einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Weitere Informationen finden Sie unter:

- ["About npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie in den Ordner navigieren, in dem Sie Ihre App auf Ihrem Rechner speichern möchten, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein Verzeichnis namens `moz-todo-react` unter Verwendung der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist erforderlich, um Argumente an npm-Befehle wie `create` weiterzugeben, und das Argument `--template react` teilt Vite mit, dass es seine React-Vorlage verwenden soll.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Wenn der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir ein paar Kommandozeilenflags hinzu, um den Standardvorschlag von Vite zu ändern, damit die App sofort im Browser geöffnet wird, sobald der Server startet, und um Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie eine neue Browsertab öffnen, die Ihre React-App enthält:

![Screenshot von Firefox macOS, geöffnet unter localhost:3000, die eine Anwendung basierend auf Vites React-Vorlage zeigt](default-vite.png)

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

**`index.html`** ist die wichtigste Datei auf höchster Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tooling verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da es den Quellcode unserer Anwendung enthält. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie teilt Vite mit, die JSX-Syntax in JavaScript zu verwandeln, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite füllte `package.json` für uns aus, und npm erstellte `package-lock.json`, als wir die Abhängigkeiten der App installierten. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumentationen lesen. Wir sprechen auch in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial über `package.json`.

### Unseren Entwicklungsskript anpassen

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open`- und `--port`-Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, damit er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Anpassung wird Ihre App bei jedem Ausführen von `npm run dev` in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Hier benötigen Sie _nicht_ das zusätzliche `--`, weil wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Unseren ersten React-Komponenten — `<App />` erkunden

In React ist eine **Komponente** ein Wiederverwendbarer Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind in der Regel klar definiert: sie dienen einem einzigen, offensichtlichen Zweck.

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

Die Datei `App.jsx` besteht aus drei Hauptteilen: ein paar [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen am Anfang, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am Anfang der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer betrachten.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Nachfolgend importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` bzw. `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies zeigt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass kein Variablenname und keine `from`-Direktive angegeben ist. Dies wird als [_Nebeneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es wird kein Wert in die JavaScript-Datei importiert, aber es teilt Vite mit, dass die referenzierte CSS-Datei dem endgültigen Code-Output hinzugefügt werden soll, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während die Mehrheit der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case)-Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die Funktion `App()` in `app()` umbenennen würden, würde Ihr Browser einen Fehler melden.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser schließlich in den DOM rendert.

Direkt unter dem `return`-Schlüsselwort gibt es ein besonderes Syntax-Bit: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne dass im Browser willkürliche `<div>`s gerendert werden. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Wechsel zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, alle JavaScript-Module und anderen Assets zu importieren, die sie zum Ausführen benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, da sie später in der Datei verwendet werden. Wir schreiben keinen Pfad oder keine Erweiterung beim Importieren dieser Bibliotheken, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Seien Sie vorsichtig bei dieser Unterscheidung, während Sie diese Lektion durcharbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, die globale Stile hält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `createRoot()`-Funktion auf, die den Wurzelknoten unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element an, in dem wir unsere React-App rendern wollen. In diesem Fall ist das das DOM-Element mit einer ID von `root`. Schließlich fügen wir die `render()`-Methode dem `createRoot()`-Aufruf hinzu und übergeben den JSX-Ausdruck, den wir im Wurzelknoten rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, dass die `App()`-_Funktion_ aufgerufen werden soll, die die `App`-_Komponente_ im Wurzelknoten rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern dabei, potenzielle Probleme in ihrem Code zu erkennen.

Sie können über diese React APIs lesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Frisch starten

Bevor wir mit dem Erstellen unserer App beginnen, werden wir einige der Boilerplate-Codes löschen, die Vite für uns bereitgestellt hat.

Ändern Sie zunächst testweise das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass "Hello, World!" angezeigt wird, und speichern Sie die Datei. Sie werden feststellen, dass diese Änderung sofort auf dem Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Kenntnisse nutzen, um etwas mehr Übung im Schreiben von JSX zu bekommen und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attributen zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Attributen zu JSX-Elementen hinzufügen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, einen `<button>` unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, wie dies:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit der Aufschrift `Click me!`. Die Schaltfläche tut noch nichts, aber wir werden bald lernen, wie wir Interaktivität zu unserer App hinzufügen.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel übersetzt sich das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung darstellt. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt JSX es uns, Variablen und andere JavaScript-Ausdrücke direkt neben dem restlichen Inhalt zu schreiben. Deklarieren Sie eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als nächstes das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der `subject`-Variablen lesen möchten, anstatt den literalen String `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern innerhalb JSX einfügen; React wertet ihn aus und rendert das _Ergebnis_ des Ausdrucks als endgültigen Inhalt. Folgendes ist eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb von geschweiften Klammern geschrieben! Das liegt daran, dass auch Kommentare technisch JavaScript-Ausdrücke sind. Die `/* Blockkommentar-Syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass während Attribute in einfache Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten an Kindkomponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihre ersten Props.

Fügen Sie der `<App />`-Komponentenaufruf einen Prop namens `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es in etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück zu `App.jsx`, betrachten wir die `App()`-Funktion erneut. Ändern Sie die Signatur von `App()`, sodass sie `props` als Parameter akzeptiert und `props` in der Konsole protokolliert, damit Sie es inspizieren können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

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
> Wenn Ihr Code-Editor JSX versteht (die meisten modernen Editoren tun es!), können Sie dessen integrierte Kommentarfunktion verwenden – `Strg + /` (auf Windows) oder `Cmd + /` (auf macOS) –, um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser Zeile auskommentiert. Diesmal sollten Sie Ihre
"Click me!"-Schaltfläche alleine sehen. Wenn Sie die Entwicklertools in Ihrem Browser öffnen, sehen Sie eine Nachricht, die folgendermaßen aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir dem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentiere die "<h1>Hello, {subject}!</h1>"-Zeile aus und ändere sie zu "<h1>Hello, {props.subject}!</h1>", und löschen Sie dann die `console.log()`-Anweisung. Ihr Code sollte folgendermaßen aussehen:

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

Wenn Sie speichern, sollte die App Ihnen jetzt "Hello, Clarice!" anzeigen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, wird Ihr Text sich ändern.

Für zusätzliche Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf React, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu bauen — eine Aufgabenliste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können die benötigten Module importieren und müssen am Ende ihrer Dateien exportiert werden.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweiften Klammern setzen, wie `{so}`.
- Einige JSX-Attribute sind anders als HTML-Attribute, um Konflikte mit JavaScript reservierten Wörtern zu vermeiden. Zum Beispiel übersetzt sich `class` in HTML zu `className` in JSX.
- Props werden genauso wie Attribute in Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN-Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) _Learn React_ Kurs ist das ultimative React 101 — der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
