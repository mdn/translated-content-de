---
title: Einstieg in React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über seinen Hintergrund und die Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren – dabei lernen wir ein wenig darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal- bzw. Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Starter-App und Verstehen der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es in seinem offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um für bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu entwickeln.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden häufig in denselben Bereichen besprochen und zur Lösung derselben Probleme verwendet wie andere echte Webentwicklungs-Frameworks. Wenn wir von React als einem "Framework" sprechen, arbeiten wir mit diesem kolloquialen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies geschieht durch die Verwendung von Komponenten – in sich geschlossene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefasst werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert viel von der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks zwingt React keine strikten Regeln zu Codekonventionen oder Dateiorganisation auf. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede gewünschte Weise anzunehmen. React kann mit einem einzelnen Button, einigen Teilen einer Benutzeroberfläche oder der gesamten Benutzeroberfläche einer App umgehen.

Während React _für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden kann_, ist es nicht so einfach, es in eine Anwendung "einzubinden" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklervorteile einer React-App, wie das Schreiben von Schnittstellen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den darauf ausgeführten Code langsam laufen, sodass Entwickler solche Tools häufig mit einem Build-Schritt einrichten. React hat zweifellos einen hohen Tool-Anforderungsgrad, aber es kann erlernt werden.

Dieser Artikel konzentriert sich darauf, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie nutzt React JavaScript?

React nutzt Funktionen der modernen JavaScript-Sprache für viele seiner Muster. Die größte Abweichung von JavaScript erfolgt durch die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code daneben leben kann. Beispielsweise:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Konstante namens heading ist als **JSX-Ausdruck** bekannt. React kann sie verwenden, um das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollen unser Heading in ein [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einwickeln, aus semantischen Gründen? Der JSX-Ansatz erlaubt es uns, unsere Elemente ineinander zu schachteln, genau wie wir es auch im HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Code-Snippet sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck ebenso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas unbequem aus, weil das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck startet, nicht an derselben Position eingerückt ist wie sein entsprechendes abschließendes Tag.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn es kompiliert wird (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Indem Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet die moderne Frontend-Entwicklung fast immer einen Build-Prozess – man muss die moderne Syntax herunterstufen, um sie mit älteren Browsern kompatibel zu machen, und man kann den Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten standardmäßig JSX-Unterstützung, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie wollen es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur verwirrend ist. Wenn Sie jedoch damit vertraut sind, ermöglicht es Ihnen, Benutzeroberflächen schneller und intuitiver zu erstellen, und anderen, Ihren Code schneller zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel des React-Teams [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopiert werden, allerdings erlaubt die Verwendung von Vite Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger mit der Einrichtung.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node Version 18 oder später erforderlich und es ist eine gute Idee, die neueste Version mit Langzeitunterstützung (LTS) zu verwenden, wann immer Sie es können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Falls nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in dieser Tutorial-Reihe davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie in den [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, damit Sie die in diesem Tutorial erwähnten Terminalbefehle verwenden können. **Gitbash** (das als Teil des [git für Windows-Toolsets](https://gitforwindows.org/) verfügbar ist) oder **[Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen zu diesen und im Allgemeinen zu Terminalbefehlen finden Sie im [Crashkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Bedenken Sie auch, dass React und ReactDOM Anwendungen erstellen, die nur in ziemlich modernen Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Weitere Informationen finden Sie unter:

- ["Über npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["npx einführen" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Dokumentation zu Vite](https://vite.dev/guide/)

### Initialisieren Ihrer App

Mit dem npm-Paketmanager können Sie mithilfe eines `create`-Befehls neue Projekte aus Vorlagen erstellen. Wir können es verwenden, um eine neue App aus der Standard-React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort navigieren, an dem Sie möchten, dass Ihre App auf Ihrem Computer gespeichert wird, und führen Sie dann folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis mit der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` sagt Vite, dass es seine React-Vorlage verwenden soll.

Ihr Terminal wird einige Nachrichten ausgeben, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu gehen, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen Sie mit zwei dieser Befehle. Führen Sie folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Befehlszeilen-Flags zu Vites Standardvorschlag hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server gestartet ist, und die Portnummer 3000 verwenden.

Führen Sie folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie ein neues Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox auf macOS, geöffnet mit localhost:3000, zeigt eine Anwendung, die mit der React-Vorlage von Vite erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir zur Entwicklung einer React-Anwendung benötigen. Die initiale Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne von den Build-Tools von Vite verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da sich dort der Quellcode für unsere Anwendung befindet. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Endung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie sagt Vite, dass die JSX-Syntax in JavaScript umgesetzt wird, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie mehr über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumentationen lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig verändern, damit Sie nicht jedes Mal die `--open`- und `--port`-Flags übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Damit wird Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Sie _brauchen_ hier nicht das zusätzliche `--`, weil wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Aussagen oben, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Aussage unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei erlauben es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Betrachten wir diese Anweisungen genauer.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den Hook `useState` aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, auf die Funktionen von React innerhalb einer Komponente zuzugreifen. Später in diesem Tutorial werden wir mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit `.svg` enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das sich auf unsere `<App />`-Komponente bezieht. Beachten Sie, dass es keine Variablennamen oder kein `from`-Schlüsselwort gibt. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, jedoch weist es Vite an, die referenzierte CSS-Datei in den endgültigen Code-Output zu inkludieren, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community Namen in {{Glossary("camel_case", "lower camel case")}} wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal-Case- (oder Upper-Camel-Case-) Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein gegebener JSX-Ausdruck eine React-Komponente und kein reguläres HTML-Tag ist. Würden Sie die `App()`-Funktion in `app()` umbenennen, würde Ihr Browser einen Fehler werfen.

Betrachten wir `App()` genauer.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich auf den DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezieller Syntaxteil: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne dabei willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Aussage

Es gibt eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module zugänglich. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, weil dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht initial so aus:

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

Wie `App.jsx` beginnt auch diese Datei damit, alle erforderlichen JS-Module und anderen Ressourcen zu importieren, die sie benötigt, um auszuführen.

Die ersten beiden Anweisungen importieren die `React`- und `ReactDOM`-Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder keine Erweiterung, wenn wir diese Bibliotheken importieren, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie diesen Kurs durchlaufen!

Im Anschluss importieren wir unsere `App()`-Funktion und `index.css`, die globale Styles enthält, die auf unsere gesamte App angewendet werden.

Anschließend rufen wir die `ReactDOM.createRoot()`-Funktion auf, die die Wurzelknoten unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich schließen wir die Kettenmethode `render()` an den Aufruf von `createRoot()` an und übergeben ihm den JSX-Ausdruck, den wir innerhalb der Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, dass die _Funktion_ `App()` aufgerufen werden soll, die die _Komponente_ `App` innerhalb des Wurzelknotens rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern dabei, potenzielle Probleme in ihrem Code zu erkennen.

Sie können sich über diese React-APIs informieren, falls Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neuanfang

Bevor wir beginnen, unsere App zu erstellen, werden wir einige der Boilerplate-Codes löschen, die Vite uns bereitgestellt hat.

Ändern Sie zuallererst das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" anzeigt, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

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

Als Nächstes verwenden wir unsere JavaScript-Fähigkeiten, um uns etwas mit dem Schreiben von JSX und der Arbeit mit Daten in React vertraut zu machen. Wir besprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, einen `<button>` unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit dem Text `Click me!`. Der Button tut noch nichts, aber wir werden bald lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Entsprechungen. Zum Beispiel wird das `class`-Attribut in HTML ins `className` in JSX übersetzt. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt JSX uns, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Deklarieren wir eine Variable namens `subject` direkt oberhalb der `App()`-Funktion:

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

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen wollen, anstatt die wörtliche Zeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den finalen Inhalt rendern. Folgendes ist eine Reihe von Beispielen, mit Kommentaren darüber, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Das liegt daran, dass auch Kommentare technisch JavaScript-Ausdrücke sind. Die Syntax `/* block comment syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen, in der Tat: `prop="value"`. Der Unterschied ist jedoch, dass Attributen in einfache Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten an Kindkomponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihr erstes Prop.

Fügen Sie der `<App />`-Komponentenaufruf ein Prop namens `subject` hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, wird es etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, sehen wir uns die `App()`-Funktion noch einmal an. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert und loggen Sie `props` zur Konsole, damit Sie es betrachten können. Löschen Sie zudem die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Das liegt daran, dass wir versuchen, auf die Variable `subject` zuzugreifen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Falls Ihr Code-Editor JSX zu parsen versteht (das machen die meisten modernen Editoren!), können Sie seine integrierte Kommentierungsverknüpfung — `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) — verwenden, um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollte der Button "Click me!" alleine gerendert werden. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, wird eine Meldung angezeigt, die folgendermaßen aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht dem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Nutzen wir dieses `subject`-Prop, um den Fehler in unserer App zu beheben. Heben Sie das Kommentieren der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie es in `<h1>Hello, {props.subject}!</h1>`, und löschen Sie die `console.log()`-Anweisung. Ihr Code sollte folgendermaßen aussehen:

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

Wenn Sie speichern, sollte die App Ihnen jetzt mit "Hello, Clarice!" Hallo sagen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, wird sich Ihr Text ändern.

Für zusätzliche Übung könnten Sie versuchen, ein weiteres `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres initialen Blicks auf React angelangt, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Grundlagen ihrer Funktionsweise. Im nächsten Artikel werden wir daran gehen, unsere erste richtige Anwendung zu erstellen – eine To-Do-Liste. Bevor wir das tun, fassen wir zusammen, was wir gelernt haben.

In React:

- Komponenten können die Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, sodass sie nicht mit JavaScript-Reservierten Wörtern in Konflikt geraten. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden genau wie Attribute in Komponentenaufrufen geschrieben und werden in die Komponenten übergeben.

## Siehe auch

- [React lernen](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN-Curriculum-Partner_</sup>
  - : Der _Learn React_-Kurs von [Scrimba](https://scrimba.com?via=mdn) ist der ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Coding-Herausforderungen lösen und acht spannende Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
