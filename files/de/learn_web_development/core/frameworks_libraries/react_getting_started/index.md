---
title: Erste Schritte mit React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir React vorstellen. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren – und dabei ein wenig darüber lernen, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und
          Verstehen der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie der offizielle Slogan besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen gerendert zu werden. Beispielsweise kann [React Native](https://reactnative.dev/) zum Erstellen mobiler Anwendungen verwendet werden.

Um für das Web zu entwickeln, verwenden Entwickler React in Kombination mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Räumen wie andere echte Web-Entwicklungs-Frameworks diskutiert und genutzt, um dieselben Probleme zu lösen. Wenn wir von React als „Framework“ sprechen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die beim Erstellen von UIs auftreten können. Dies geschieht durch die Verwendung von Komponenten – in sich geschlossene, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert viel der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen Frameworks, die in diesem Modul behandelt werden, erzwingt React keine strengen Regeln für Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten zu ihnen passen, und React in jeder gewünschten Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App handhaben.

Obwohl React _kann_ für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden, ist es nicht so einfach in eine Anwendung „einzufügen“ wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist besser zugänglich, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklerfreundlichkeit einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code darauf langsam laufen, daher richten Entwickler oft solche Tools mit einem Build-Schritt ein. React hat möglicherweise einen hohen Tooling-Bedarf, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/) zu rendern, einem modernen Front-End-Build-Tool.

## Wie verwendet React JavaScript?

React nutzt Funktionen moderner JavaScript-Versionen für viele seiner Muster. Der größte Unterschied zu JavaScript ist die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben ihm existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Heading-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unser Heading aus semantischen Gründen in einem [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag umschließen? Der JSX-Ansatz erlaubt es uns, unsere Elemente innerhalb voneinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Code-Schnipsel sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck beginnt, nicht zur selben Position wie das entsprechende schließende Tag eingerückt ist.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn es kompiliert wird (unter Verwendung eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck wie folgt aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community halten die Lesbarkeit von JSX für lohnend. Außerdem beinhaltet moderne Front-End-Entwicklung fast immer einen Build-Prozess – Sie müssen moderne Syntax herabstufen, um mit älteren Browsern kompatibel zu sein, und möglicherweise möchten Sie Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten bereits Unterstützung für JSX „out of the box“, sodass Sie die Kompilation nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden es einige Entwickler intuitiv. Andere sagen, seine gemischte Natur mache es verwirrend. Sobald Sie sich damit wohlfühlen, wird es Ihnen ermöglichen, Benutzeroberflächen schneller und intuitiver zu erstellen, und anderen helfen, Ihren Code auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um eine neue Anwendung über die Befehlszeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert werden, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger Zeit mit dem Einrichten zu verschwenden.

> [!NOTE]
> Sie können damit beginnen, React-Code zu schreiben, ohne _irgendein_ lokales Setup zu machen, indem Sie Scrimbas [First React Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> scrim durcharbeiten.
> Fühlen Sie sich frei, es auszuprobieren, bevor Sie fortfahren.

### Anforderungen

Um Vite nutzen zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens die Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, die neueste Long Term Support (LTS)-Version auszuführen, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in dieser Reihe von Tutorials davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie in den [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Gleichwertigkeit mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle nutzen zu können. **Gitbash** (das Teil des [git für Windows Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Kommandozeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen.

Außerdem sollten Sie beachten, dass React und ReactDOM Apps erzeugen, die nur in einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe Folgendes für weitere Informationen:

- ["Über npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung von npx" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Dokumentation von Vite](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus der standardmäßigen React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie `cd` zum Ort, an dem Ihre App auf Ihrem Computer gespeichert werden soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis, das die `react`-Vorlage von Vite verwendet.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument sagt Vite, dass seine React-Vorlage verwendet werden soll.

Ihr Terminal hat einige Nachrichten ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie dazu auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Lassen Sie uns mit zwei dieser Befehle beginnen. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir ein paar Kommandozeilen-Flags zur Standard-Vorschlag von Vite hinzufügen, um die App beim Start des Servers direkt in unserem Browser zu öffnen und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS geöffnet auf localhost:3000, zeigt eine Anwendung, die aus der React-Vorlage von Vite erstellt wurde](default-vite.png)

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, sollten aber den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Korrekte Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tooling verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da dort der Quellcode für unsere Anwendung gespeichert ist. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist erforderlich für jede Datei, die JSX enthält – sie sagt Vite, die JSX-Syntax in JavaScript zu übersetzen, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns erstellt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir fortfahren, möchten Sie möglicherweise Ihre `package.json`-Datei ein wenig ändern, damit Sie nicht die `--open`- und `--port`-Flags jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App jedes Mal in Ihrem Browser unter `http://localhost:3000` geöffnet, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Sie _benötigen_ kein zusätzliches `--` hier, da wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

Lassen Sie uns `src/App.jsx` öffnen, da unser Browser uns auffordert, es zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
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

Die `import`-Anweisungen am Anfang der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial ausführlicher über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` bzw. enden und dass sie die `.svg`-Erweiterung haben. Dies sagt uns, dass diese Importe _lokal_ sind, sich also auf unsere eigenen Dateien und nicht auf npm-Pakete beziehen.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass kein Variablenname und keine `from`-Direktive vorhanden sind. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, aber es sagt Vite, die referenzierte CSS-Datei in die endgültige Code-Ausgabe aufzunehmen, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Imports haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community [camelCase](/en-US/docs/Glossary/Camel_case)-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten PascalCase-Variablennamen (oder UpperCamelCase) wie `HelloWorld`, um klar zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler anzeigen.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich ins DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezielles Syntaxstück: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns dies zu tun, ohne beliebige `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Export-Anweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später ausführlicher darauf eingehen.

## Wechsel zu `main`

Öffnen Sie `src/main.jsx`, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie `App.jsx` beginnt die Datei mit dem Importieren aller JavaScript-Module und anderer Assets, die sie für den Betrieb benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den Bibliotheken `react` und `react-dom`, weil sie später in der Datei referenziert werden. Wir schreiben beim Importieren dieser Bibliotheken keinen Pfad oder keine Erweiterung, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Wir importieren dann unsere `App()`-Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die `createRoot()`-Funktion auf, die den Wurzelknoten unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit einer ID von `root`. Schließlich koppeln wir die `render()`-Methode an den `createRoot()`-Aufruf an, indem wir den JSX-Ausdruck weitergeben, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()`-Funktion aufzurufen, die die `App`-Komponente innerhalb des Wurzelknotens rendert.

> **Hinweis:** `<App />` wird in einem speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Wenn Sie möchten, können Sie diese React-APIs nachlesen:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Von vorne anfangen

Bevor wir mit dem Erstellen unserer App beginnen, löschen wir etwas von dem Boilerplate-Code, den uns Vite zur Verfügung gestellt hat.

Ändern Sie zunächst experimentell das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" liest, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der in Ihrem Browser unter `http://localhost:3000` läuft. Denken Sie daran, während Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um ein wenig mehr Komfort beim Schreiben von JSX und beim Arbeiten mit Daten in React zu gewinnen. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props an Komponenten überträgt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei einen `<button>` hinzuzufügen, in etwa so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button macht noch nichts, aber wir werden bald lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Entsprechungen. Zum Beispiel wird das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht JSX es uns, Variablen und andere JavaScript-Ausdrücke direkt neben unserem anderen Inhalt zu schreiben. Lassen Sie uns eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei deklarieren:

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

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen wollen, anstatt die wörtliche Zeichenfolge `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb geschweifter Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Im Folgenden finden Sie eine Reihe von Beispielen mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Dies liegt daran, dass geschweifte Klammern einen einzelnen JavaScript-Ausdruck enthalten können und Kommentare gültig als Teil eines JavaScript-Ausdrucks sind (und ignoriert werden). Sie können sowohl `/* Block-Kommentar-Syntax */` als auch `// Zeilen-Kommentar-Syntax` (mit einer Zeilenumbruch) innerhalb geschweifter Klammern verwenden.

### Komponenteigenschaften

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute in normale Elemente, Props jedoch in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihren ersten Prop.

Fügen Sie der `<App />`-Komponentenaufrufzeile einen Prop namens `subject` hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Gehen wir zurück zu `App.jsx` und schauen uns die `App()`-Funktion an. Ändern Sie die Signatur von `App()`, sodass sie `props` als Parameter akzeptiert und diese in die Konsole loggt, damit Sie sie überprüfen können. Löschen Sie außerdem die `subject`-Konstante; wir benötigen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    <>
      {
        // code omitted for brevity
      }
    </>
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, auf eine nicht mehr definierte `subject`-Variable zuzugreifen. Beheben Sie diesen Fehler, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten aktuellen Editoren tun das!), können Sie den integrierten Kommentierungs-Shortcut verwenden — `Ctrl + /` (unter Windows) oder `Cmd + /` (unter macOS) — um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie Ihren "Click me!"-Button allein stehend sehen, der gerendert wird. Wenn Sie die Entwicklertools Ihres Browsers öffnen, sehen Sie eine Nachricht, die ungefähr so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht dessen Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie jetzt mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und die Datei speichern, wird Ihr Text sich ändern.

Zur zusätzlichen Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop in den `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf React, einschließlich der lokalen Installation, Erstellung einer Starter-App und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen – eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge wiederholen, die wir gelernt haben.

In React:

- Komponenten können die Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit reservierten Wörtern in JavaScript in Konflikt kommen. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden genau wie Attribute in Komponentenanrufe geschrieben und an Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der [Scrimba](https://scrimba.com/?via=mdn) _Learn React_ Kurs ist das ultimative React 101 – der perfekte Startpunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
