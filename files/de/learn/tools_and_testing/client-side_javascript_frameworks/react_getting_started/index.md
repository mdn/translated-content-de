---
title: Erste Schritte mit React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über seine Hintergründe und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren — dabei lernen wir, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnis der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax namens JSX (JavaScript und
          XML). Vertrautheit mit sowohl HTML als auch JavaScript hilft Ihnen, JSX zu lernen und besser zu erkennen, ob Fehler in Ihrer Anwendung mit JavaScript oder dem spezifischen Bereich von React zusammenhängen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Eine lokale React-Entwicklungsumgebung einzurichten, eine Start-App zu erstellen und die Grundlagen zu verstehen, wie sie funktioniert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie im offiziellen Slogan beschrieben, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen gerendert zu werden. Zum Beispiel kann [React Native](https://reactnative.dev/) genutzt werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Räumen diskutiert wie — und verwendet, um dieselben Probleme zu lösen wie — andere echte Webentwicklungsframeworks. Wenn wir von React als "Framework" sprechen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Anzahl der Bugs zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies geschieht durch die Verwendung von Komponenten – eigenständigen, logischen Code-Einheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert viel von der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen Frameworks, die in diesem Modul behandelt werden, erzwingt React keine strengen Regeln zu Codekonventionen oder Datei-Organisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede beliebige Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verwalten.

Obwohl React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden kann, ist es nicht so einfach, "in eine Anwendung einzufügen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue — es ist zugänglicher, wenn Sie Ihre gesamte App mit React bauen.

Darüber hinaus erfordern viele der Entwickler-Erfahrungs-Vorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website verlangsamt den Code auf dieser, daher richten Entwickler solche Werkzeuge oft mit einem Build-Schritt ein. React hat wohl eine hohe Tool-Anforderung, aber sie kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall der Nutzung von React, um die gesamte Benutzeroberfläche einer Anwendung zu rendern, mit der Unterstützung von [Vite](https://vitejs.dev/), einem modernen Frontend-Build-Tool.

## Wie nutzt React JavaScript?

React nutzt Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript kommt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code daneben existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Kopfzeilen-Konstante ist als **JSX-Ausdruck** bekannt. React kann sie verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Kopfzeile aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einfügen? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau so, wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Code-Snippet sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Zeilen Code darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck auch so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Das sieht jedoch etwas ungeschickt aus, weil das ` <header>`-Tag, das den Ausdruck beginnt, nicht auf dieselbe Position wie sein entsprechendes schließendes Tag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn compilieren (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)) unser Header-Ausdruck würde so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwieriger zu lesen. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX es wert ist. Zudem beinhaltet die moderne Frontend-Entwicklung fast immer einen Erstellungsprozess – Sie müssen moderne Syntax abwerten, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise [minify](/de/docs/Glossary/Minification) Ihren Code, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel haben bereits von Haus aus JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur verwirrend macht. Sobald Sie sich damit wohl fühlen, wird es Ihnen ermöglichen, Benutzeroberflächen schneller und intuitiver zu erstellen, und anderen, Ihre Codebasis auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, sehen Sie sich den Artikel der React-Entwicklerteam [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) an.

## Einrichten der ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um eine neue Anwendung über die Kommandozeile zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger Zeit mit dem Setup.

### Voraussetzungen

Um Vite verwenden zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node-Version 18 oder später erforderlich, und es ist eine gute Idee, die neueste langfristige Support-Version (LTS) zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node beinhaltet npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, wird eine Versionsnummer angezeigt. Andernfalls erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie in diesen Tutorials npm verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, damit Sie die in diesem Tutorial erwähnten Terminalbefehle verwenden können. **Gitbash** (das als Teil des [Git for Windows-Werkzeugsatzes](https://gitforwindows.org/) kommt) oder **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Command line crash course](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) für weitere Informationen darüber und über Terminalbefehle im Allgemeinen.

Bedenken Sie auch, dass React und ReactDOM Apps erzeugen, die nur auf einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe folgendes für mehr Informationen:

- ["About npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite's Dokumentation](https://vitejs.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager kommt mit einem `create`-Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können ihn verwenden, um eine neue App aus Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort wechseln, an dem Ihre App auf Ihrem Rechner leben soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis mit Vites `react`-Vorlage.

> [!NOTE]
> Die `--` ist erforderlich, um Argumente an npm-Befehle wie `create` zu übergeben, und die `--template react`-Argument gibt Vite an, dass seine React-Vorlage verwendet werden soll.

Ihr Terminal wird einige Nachrichten gedruckt haben, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Kommandozeilen-Parameter zu Vites Standardeinstellung hinzufügen, um die App in unserem Browser automatisch zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox MacOS, geöffnet für localhost:3000, zeigt eine Anwendung aus der React-Vorlage von Vite](default-vite.png)

### Anwendungsstruktur

Vite bietet uns alles, was wir benötigen, um eine React-Anwendung zu entwickeln. Seine anfängliche Dateistruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigste Datei auf der obersten Ebene. Vite injiziert Ihren Code in diese Datei, sodass Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, sollten jedoch den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne von Vites Build-Werkzeug verarbeitet zu werden. Im Moment enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da der Quellcode unserer Anwendung dort lebt. Ihnen wird auffallen, dass einige JavaScript-Dateien in diesem Verzeichnis die Erweiterung `.jsx` haben. Diese Erweiterung ist für jede Datei notwendig, die JSX enthält – sie sagt Vite, die JSX-Syntax in JavaScript zu übersetzen, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns befüllt und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie sich in den npm-Dokumenten über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) informieren. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Entwicklungs-Skripts

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, sodass Sie nicht jedes Mal die `--open` und `--port`-Parameter übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass es so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Anpassung wird Ihre App bei jedem Ausführen von `npm run dev` im Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Die zusätzlichen `--` werden hier _nicht_ benötigt, weil wir Argumente direkt an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie dienen einem einzigen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei erlauben es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer betrachten.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, React-Funktionen innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der Erweiterung `.svg` enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass kein Variablenname und keine `from`-Directive vorhanden ist. Dies wird als _Nebenwirkungen-Import_ bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sagt Vite jedoch, die referenzierte CSS-Datei in das endgültige Code-Output einzubeziehen, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während die meisten der JavaScript-Community [lower camel case](/de/docs/Glossary/camel_case)-Namen wie `helloWorld` bevorzugen, verwenden React-Komponenten Pascal-Cases (oder upper camel case)-Variablennamen, wie `HelloWorld`, damit klar ist, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler werfen.

Lassen Sie uns `App()` genauer betrachten.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in den DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezielles bisschen Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies ohne das Rendern willkürlich `<div>`s im Browser zu tun. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht ursprünglich so aus:

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

Wie `App.jsx` beginnt die Datei mit dem Import aller JS-Module und anderer Ressourcen, die zum Ausführen benötigt werden.

Die ersten beiden Anweisungen importieren die `React`- und `ReactDOM`-Bibliotheken, weil sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder keine Erweiterung beim Importieren dieser Bibliotheken, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgelistet. Achten Sie auf diese Unterscheidung, während Sie diese Lektion durchlaufen!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `ReactDOM.createRoot()`-Funktion auf, die das Wurzelelement unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, in das wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich ketten wir die Methode `render()` an den `createRoot()`-Aufruf an und übergeben den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()`-Funktion aufzurufen, die die `App`-Komponente innerhalb des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code festzustellen.

Sie können sich über diese React-APIs informieren, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Unberührt anfangen

Bevor wir beginnen, unsere App zu bauen, werden wir einige der Boilerplate-Codes löschen, die Vite für uns bereitgestellt hat.

Zuerst, als Experiment, ändern Sie das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" anzeigt, und speichern Sie dann Ihre Datei. Sie werden bemerken, dass diese Änderung sofort auf dem Entwicklungsserver, der unter `http://localhost:3000` in Ihrem Browser läuft, gerendert wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

Wir werden den Rest des Codes nicht nutzen! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

## Üben mit JSX

Als nächstes werden wir unsere JavaScript-Kenntnisse nutzen, um sich etwas wohler beim Schreiben von JSX zu fühlen und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, eine `<button>`-Element unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button macht noch nichts, aber wir werden bald lernen, wie man unserer App Interaktivität hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel übersetzt sich das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine Erweiterung von JavaScript ist. Wenn Sie Ihrer Schaltfläche eine `primary`-Klasse hinzufügen möchten, schreiben Sie es so:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Lassen Sie uns eine Variable namens `subject` direkt über der `App()`-Funktion deklarieren:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der Variablen `subject` lesen möchten, anstatt die wörtliche Zeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweiften Klammern in JSX einfügen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als finalen Inhalt rendern. Im Folgenden finden Sie eine Reihe von Beispielen, mit Kommentaren darüber, welche jeden Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass Kommentare auch technisch JavaScript-Ausdrücke sind. Die `/* block comment syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen, in der Tat: `prop="value"`. Der Unterschied ist, dass während Attribute in einfache Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Eltern-Komponenten in ihre Kinder-Komponenten übergeben werden.

Lassen Sie uns `main.jsx` öffnen und unserer `<App />`-Komponente ihr erstes Prop geben.

Fügen Sie einen Prop namens `subject` zum `<App />`-Komponentenaufr uf hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()`-Funktion noch einmal betrachten. Ändern Sie die Signatur von `App()`, sodass es `props` als Parameter akzeptiert und `props` in die Konsole protokolliert, damit Sie es inspizieren können. Löschen Sie auch die `subject` const; wir brauchen es nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Das liegt daran, dass wir versuchen, eine nicht mehr definierte `subject`-Variable zu lesen. Beheben Sie dieses Problem, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor JSX verstehen kann (die meisten modernen Editoren können das!), können Sie die eingebaute Kommentierfunktion verwenden – `Strg + /` (unter Windows) oder `Cmd + /` (auf macOS) – um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit der auskommentierten Zeile. Dieses Mal sollten Sie Ihre "Click me!"-Schaltfläche alleine gerendert sehen. Wenn Sie die Entwicklertools Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht ihrem Wert. Komponenten-Props in React werden immer in dieser Weise in Objekten gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` aus, ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, und löschen Sie die `console.log()`-Anweisung. Ihr Code sollte wie folgt aussehen:

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

Wenn Sie speichern, sollte die App nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, ändert sich Ihr Text.

Für zusätzliche Übung könnten Sie versuchen, ein zusätzliches `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf React, einschließlich, wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen — eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich selbst am Ende ihrer Dateien exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit reservierten JavaScript-Wörtern kollidieren. Zum Beispiel übersetzt sich `class` in HTML zu `className` in JSX.
- Props werden genau wie Attribute in Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [Lernen Sie React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Curriculum-Partner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn React_ Kurs ist die ultimative React 101 — der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140 interaktive Codierherausforderungen lösen und acht unterhaltsame Projekte aufbauen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
