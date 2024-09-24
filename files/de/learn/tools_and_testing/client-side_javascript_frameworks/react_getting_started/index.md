---
title: Einstieg in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über dessen Hintergrund und Anwendungsfälle erfahren, ein einfaches React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren, wobei wir ein wenig über die Funktionsweise von React lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-Befehlszeile</a
          >.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax, die sogenannte JSX (JavaScript und
          XML). Vertrautheit mit sowohl HTML als auch JavaScript wird Ihnen helfen, JSX zu lernen und besser zu identifizieren, ob Fehler in Ihrer Anwendung mit JavaScript oder dem spezifischeren Bereich von React zusammenhängen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Ein lokales React-Entwicklungsumfeld einrichten, eine Startanwendung erstellen und die Grundlagen verstehen, wie es funktioniert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es in seinem offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web bestimmt. Es wird mit anderen Bibliotheken verwendet, um auf bestimmte Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen diskutiert und zur Lösung derselben Probleme wie andere echte Webentwicklungs-Frameworks genutzt. Wenn wir React als ein "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen auftreten. Es tut dies durch die Verwendung von Komponenten - in sich geschlossene, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeiten, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks, erzwingt React keine strengen Regeln bezüglich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten für sie funktionieren, und React in jeder beliebigen Weise anzunehmen. React kann einen einzigen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App bewältigen.

Obwohl React _kann_ für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden, ist es nicht so einfach in eine Anwendung zu "integrieren" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Vorteile der Entwicklererfahrung einer React-App, wie das Schreiben von Schnittstellen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website verlangsamt den Code, daher richten Entwickler oft ein solches Werkzeug mit einem Build-Schritt ein. React hat zwar einen hohen Werkzeugbedarf, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vitejs.dev/), einem modernen Front-End-Build-Tool, zu rendern.

## Wie nutzt React JavaScript?

React verwendet Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript ist die Nutzung der [JSX](https://react.dev/learn/writing-markup-with-jsx) Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben JavaScript bestehen kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese heading-Konstante ist als **JSX-Ausdruck** bekannt. React kann ihn verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header) Tag einwickeln? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Element/header) Tag, das den Ausdruck beginnt, nicht mit seinem entsprechenden Schluss-Tag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (mithilfe eines Werkzeugs wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dadurch verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX es wert ist. Außerdem beinhaltet moderne Front-End-Entwicklung fast immer einen Build-Prozess - Sie müssen modernen Syntax auf ein Niveau herunterstufen, das mit älteren Browsern kompatibel ist, und Sie möchten vielleicht Ihren Code [minifizieren](/de/docs/Glossary/Minification), um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel bieten bereits von Haus aus JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten.

Da JSX eine Mischung aus HTML und JavaScript ist, finden es einige Entwickler intuitiv. Andere sagen, dass seine Mischform verwirrend ist. Sobald Sie damit vertraut sind, wird es Ihnen jedoch ermöglichen, Benutzeroberflächen schneller und intuitiver zu erstellen und anderen einen besseren Überblick über Ihren Code zu geben.

Um mehr über JSX zu lesen, schauen Sie sich den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams an.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Element/script) Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App und weniger mit der Einrichtung zu verbringen.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, die neueste Long-Term-Support (LTS)-Version zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node Package Manager).

Um Ihre Node-Version zu überprüfen, führen Sie im Terminal Folgendes aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesem Tutorial davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und Yarn finden Sie unter [Grundlagen der Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um mit Unix/macOS-Terminal gleichzuziehen, um die im Tutorial erwähnten Terminalbefehle nutzen zu können. **Gitbash** (das Teil des [git für Windows-Toolset](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) eignen sich beide. Weitere Informationen zu diesen und zu Terminalbefehlen im Allgemeinen finden Sie unter [Crashkurs zur Befehlszeile](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Denken Sie auch daran, dass React und ReactDOM Apps erzeugen, die nur in einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Weitere Informationen finden Sie unter:

- ["About npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vitejs.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus Vites standardmäßiger React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort wechseln, an dem Sie Ihre App auf Ihrem Computer speichern möchten, und führen Sie dann im Terminal Folgendes aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dadurch wird ein `moz-todo-react` Verzeichnis unter Verwendung der `react` Vorlage von Vite erstellt.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react` Argument sagt Vite, dass es seine React-Vorlage verwenden soll.

Ihr Terminal hat einige Nachrichten ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, zum neuen Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes im Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir der Standardempfehlung von Vite einige Befehlszeilen-Flags hinzufügen, um die App sofort im Browser zu öffnen, sobald der Server startet, und den Port 3000 zu verwenden.

Führen Sie Folgendes im Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie eine neue Browser-Registerkarte mit Ihrer React-App sehen:

![Screenshot von Firefox MacOS, geöffnet zu localhost:3000, zeigt eine Anwendung, die aus Vites React-Vorlage erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite bietet uns alles, was wir benötigen, um eine React-Anwendung zu entwickeln. Seine anfängliche Dateistruktur sieht wie folgt aus:

```plain
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
└── src
    ├── App.css
    ├── App.jsx
    ├── assets
    │   └── react.svg
    ├── index.css
    └── main.jsx
```

**`index.html`** ist die wichtigste oberste Datei. Vite injiziert Ihren Code in dieses Dokument, damit Ihr Browser es ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Element/title) Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Exakte Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`** Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tooling verarbeitet zu werden. Im Moment enthält es nur ein Vite-Logo.

Das **`src`** Verzeichnis ist dort, wo wir die meiste Zeit verbringen werden, da hier der Quellcode unserer Anwendung gespeichert ist. Ihnen wird auffallen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – es teilt Vite mit, die JSX-Syntax in JavaScript zu verwandeln, das Ihr Browser verstehen kann. Das `src/assets` Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns gefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie mehr über sie erfahren möchten, können Sie sich über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumentationen informieren. Wir sprechen auch über `package.json` in unserem [Grundlagen der Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) Tutorial.

### Unser Skript für die Entwicklung anpassen

Bevor wir fortfahren, möchten Sie möglicherweise Ihre `package.json` Datei ein wenig ändern, damit Sie nicht jedes Mal die `--open` und `--port` Flags übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts` Objekt. Ändern Sie den `"dev"` Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Damit öffnet sich Ihre App jedes Mal im Browser unter `http://localhost:3000`, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Sie benötigen hier _nicht_ das zusätzliche `--`, da wir die Argumente direkt an `vite` und nicht an ein vordefiniertes npm-Skript übergeben.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie dienen einem einzigen, offensichtlichen Zweck.

Lassen Sie uns `src/App.jsx` öffnen, da uns unser Browser auffordert, es zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

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

Die `App.jsx` Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisungen oben, die `App()` Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import` Anweisungen oben in der Datei ermöglichen `App.jsx` die Nutzung von Code, der an anderer Stelle definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react` Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie am Ende mit der `.svg` Erweiterung enden. Dies sagt uns, dass es sich bei diesen Importen um _lokale_ handelt, die auf unsere eigenen Dateien verweisen und nicht auf npm-Pakete.

Die endgültige Anweisung importiert das CSS, das zu unserer `<App />` Komponente gehört. Beachten Sie, dass kein Variablenname und keine `from` Direktive vorhanden ist. Dies wird als [_Nebeneffektimport_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, aber es teilt Vite mit, die referenzierte CSS-Datei zum endgültigen Codeausgabe hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()` Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}} Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal-Case (oder Upper Camel Case) Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()` Funktion in `app()` umbenennen würden, würde Ihr Browser eine Fehlermeldung ausgeben.

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

Die `App()` Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser schließlich in das DOM rendert.

Direkt unter dem `return` Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne dass im Browser willkürliche `<div>` gerendert werden. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export` Anweisung

Nach der `App()` Funktion gibt es eine weitere Codezeile:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()` Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da hier die `<App />` Komponente verwendet wird. Diese Datei ist der Einstiegspunkt unserer App und sieht zunächst wie folgt aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JS-Module und anderer Ressourcen, die sie zum Ausführen benötigt.

Die ersten beiden Anweisungen importieren die `React` und `ReactDOM` Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder eine Erweiterung, wenn wir diese Bibliotheken importieren, da es sich dabei nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json` Datei aufgelistet. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Dann importieren wir unsere `App()` Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `ReactDOM.createRoot()` Funktion auf, die das Wurzelelement unserer Anwendung definiert. Diese Funktion nimmt als Argument das DOM-Element, in das unsere React-App gerendert werden soll, entgegen. In diesem Fall ist es das DOM-Element mit der ID `root`. Schließlich reihen wir die `render()` Methode an den `createRoot()` Aufruf an und übergeben ihr den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, die `App()` _Funktion_ aufzurufen, die die `App` _Komponente_ innerhalb des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>` Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs lesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Von vorne anfangen

Bevor wir mit dem Erstellen unserer App beginnen, werden wir einige der Boilerplate-Codes entfernen, die Vite für uns bereitgestellt hat.

Ändern Sie zuerst zu Testzwecken das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Element in `App.jsx`, sodass es "Hello, World!" lautet, und speichern Sie dann Ihre Datei. Sie werden bemerken, dass diese Änderung sofort im Entwicklungsserver unter `http://localhost:3000` in Ihrem Browser gerendert wird. Beachten Sie dies, während Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um uns etwas wohler beim Schreiben von JSX zu fühlen und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mittels Props in Komponenten überträgt.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können genauso wie HTML-Elemente Attribute haben. Versuchen Sie, ein `<button>` unter das `<h1>` Element in Ihrer `App.jsx` Datei hinzuzufügen, so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button tut noch nichts, aber wir werden bald lernen, wie wir unserer App Interaktivität hinzufügen können.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel übersetzt sich das `class` Attribut in HTML in `className` in JSX. Das liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary` Klasse zu Ihrem Button hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Erklären wir eine Variable namens `subject` direkt über die `App()` Funktion:

```jsx
const subject = "React";
function App() {
  // Code weggelassen aus Gründen der Kürze
}
```

Ersetzen Sie als Nächstes das Wort "World" im `<h1>` Element mit `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und schauen Sie in Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject` Variable lesen möchten und nicht den literalen String `"subject"` rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb von geschweiften Klammern in JSX schreiben; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Im Folgenden finden Sie eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Das liegt daran, dass Kommentare technisch ebenfalls JavaScript-Ausdrücke sind. Die `/* Blockkommentarsyntax */` ist notwendig für Ihr Programm, damit es weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch zu der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute in einfache Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten zu Kinderkomponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />` Komponente ihren ersten Prop.

Fügen Sie dem `<App />` Komponentena Aufruf einen Prop `subject` hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()` Funktion erneut ansehen. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert und loggen Sie `props` in die Konsole, damit Sie sie inspizieren können. Löschen Sie auch die `subject` Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx` Datei sollte nun so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // Code weggelassen aus Gründen der Kürze
  );
}
```

Speichern Sie Ihre Datei und schauen Sie in Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Das liegt daran, dass wir versuchen, eine `subject` Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten modernen Editoren tun das!), können Sie dessen eingebaute Kommentarfunktion – `Ctrl + /` (unter Windows) oder `Cmd + /` (unter macOS) – verwenden, um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Diesmal sollten Sie Ihren "Click me!" Button allein gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die in etwa so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject` Prop, das wir zu unserem `<App />` Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht ihrem Wert. Komponenten-Props in React werden immer in dieser Weise in Objekte gesammelt.

Lassen Sie uns diesen `subject` Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die `<h1>Hello, {subject}!</h1>` Zeile aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, löschen Sie dann die `console.log()` Anweisung. Ihr Code sollte folgendermaßen aussehen:

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

Wenn Sie speichern, sollte die App nun mit "Hello, Clarice!" begrüßen! Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, wird sich Ihr Text ändern.

Für zusätzliche Übung könnten Sie versuchen, ein zusätzliches `greeting` Prop zum `<App />` Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject` Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React angelangt, einschließlich der Installation auf lokalem Rechner, Erstellung einer Starter-App und grundlegender Arbeitsweise. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen – eine Aufgabenliste. Bevor wir das tun, lassen Sie uns einige der Dinge, die wir gelernt haben, wiederholen.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um Konflikte mit reservierten Wörtern in JavaScript zu vermeiden. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute in Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [React lernen](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Curriculumpartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn React_ Kurs ist der ultimative React 101 – der perfekte Startpunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Programmieraufgaben lösen und acht lustige Projekte erstellen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
