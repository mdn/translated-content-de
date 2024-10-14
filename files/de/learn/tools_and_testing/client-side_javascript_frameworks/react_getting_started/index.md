---
title: Einstieg in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel begrüßen wir React. Wir erfahren ein wenig über den Hintergrund und die Anwendungsfälle, richten eine grundlegende React-Toolchain auf unserem lokalen Computer ein und erstellen und spielen mit einer einfachen Starter-App – dabei lernen wir ein wenig über die Funktionsweise von React.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/der Kommandozeile</a
          >.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax namens JSX (JavaScript und
          XML). Vertrautheit mit sowohl HTML als auch JavaScript wird Ihnen helfen,
          JSX zu lernen und besser zu erkennen, ob Fehler in Ihrer Anwendung mit
          JavaScript oder dem spezifischeren Bereich von React zu tun haben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Eine lokale React-Entwicklungsumgebung einzurichten, eine Startanwendung zu erstellen und die Grundlagen ihrer Funktionsweise zu verstehen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie in seinem offiziellen Slogan beschrieben, ist [React](https://react.dev/) eine Bibliothek zur Erstellung von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) für den Bau mobiler Anwendungen verwendet werden.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in den gleichen Räumen diskutiert und zur Lösung der gleichen Probleme wie andere wirkliche Webentwicklungs-Frameworks verwendet. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Anzahl der Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen auftreten. Dies geschieht durch die Verwendung von Komponenten – in sich geschlossene, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können miteinander kombiniert werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Renderarbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln in Bezug auf Code-Konventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren und React in beliebiger Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App handhaben.

Während React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden kann, ist es nicht so einfach, in eine Anwendung als Bibliothek wie jQuery oder sogar ein Framework wie Vue "einzubringen" – es ist verständlicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Vorteile, die React für Entwickler-Erfahrungen bietet, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code darauf langsam laufen, sodass Entwickler oft solche Werkzeuge mit einem Build-Schritt einrichten. React hat möglicherweise ein schweres Werkzeugerfordernis, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit der Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Bauwerkzeug, zu rendern.

## Wie verwendet React JavaScript?

React nutzt viele der Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript erfolgt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code daneben existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriftskonstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in einem [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einwickeln? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keine Auswirkung auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen im Inneren Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da sich das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck beginnt, nicht an der gleichen Position befindet wie sein entsprechendes schließendes Tag.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Indem Sie dies tun, verlieren Sie jedoch den erklärenden Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community glauben, dass die Lesbarkeit von JSX sinnvoll ist. Außerdem beinhaltet moderne Frontend-Entwicklung fast immer einen Build-Prozess – Sie müssen die moderne Syntax reduzieren, um sie mit älteren Browsern kompatibel zu machen, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladegeschwindigkeit zu optimieren. Beliebte Werkzeuge wie Babel werden bereits standardmäßig mit JSX-Unterstützung geliefert, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich damit vertraut gemacht haben, wird es Ihnen jedoch ermöglichen, Benutzeroberflächen schneller und intuitiver zu erstellen und es anderen ermöglichen, Ihren Codebestand auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, schauen Sie sich den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams an.

## Ihre erste React-App einrichten

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir verwenden Vite, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem Sie einige [`<script>`-Elemente](/de/docs/Web/HTML/Element/script) in eine HTML-Datei kopieren, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Bauen Ihrer App und weniger mit der Einrichtung zu verbringen.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 ist mindestens Node-Version 18 oder später erforderlich, und es ist eine gute Idee, die neueste Langzeitunterstützungs- (LTS-)Version zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Version von Node zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir nehmen an, dass Sie npm in diesem Tutorial verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit einem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. **Gitbash** (das als Teil des [Git for Windows Toolsets](https://gitforwindows.org/) verfügbar ist) oder der **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu und über Terminalbefehle im Allgemeinen finden Sie im [Crashkurs Kommandozeile](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Berücksichtigen Sie auch, dass React und ReactDOM Apps produzieren, die nur in recht modernen Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Siehe die folgenden Links für weitere Informationen:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung in npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, der Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können ihn verwenden, um eine neue App von Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort `cd`, an dem Sie möchten, dass Ihre App auf Ihrem Computer lebt, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dadurch wird ein `moz-todo-react`-Verzeichnis unter Verwendung von Vites `react`-Vorlage erstellt.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument sagt Vite, dass es die React-Vorlage verwenden soll.

Ihr Terminal wird einige Nachrichten ausgedruckt haben, wenn dieser Befehl erfolgreich war. Sie sollten Texte sehen, die Sie dazu auffordern, `cd` in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. In diesem Fall werden wir einige Kommandozeilenflags zu Vites Standardsuggestion hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browsertab sehen, der Ihre React-App enthält:

![Screenshot von Firefox MacOS geöffnet zu localhost:3000, zeigt eine aus Vites React-Vorlage erstellte Anwendung](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir brauchen, um eine React-Anwendung zu entwickeln. Seine anfängliche Verzeichnisstruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf der obersten Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Während unseres Tutorials müssen Sie diese Datei nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tooling verarbeitet zu werden. Zurzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist dort, wo wir die meiste Zeit verbringen werden, da hier der Quellcode unserer Anwendung gespeichert ist. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie sagt Vite, dass die JSX-Syntax in JavaScript umgewandelt wird, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns generiert, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in den npm-Dokumenten über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)-Tutorial.

### Unser Dev-Skript anpassen

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open` und `--port` Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Key, damit er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit diesem Setup öffnet sich Ihre App jedes Mal in Ihrem Browser unter `http://localhost:3000`, wenn Sie `npm run dev` ausführen.

> [!NOTE]
> Hier benötigen Sie die zusätzlichen `--` nicht, da wir Argumente direkt an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind in der Regel klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer betrachten.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Merkmale von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` bzw. `/` beginnen und dass sie mit der Erweiterung `.svg` enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das mit unserer `<App />`-Komponente verbundene CSS. Beachten Sie, dass kein Variablenname und keine `from`-Anweisung vorhanden ist. Dies wird als [_Nebeneffektimport_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – er importiert keinen Wert in die JavaScript-Datei, sagt aber Vite, die referenzierte CSS-Datei in den endgültigen Code-Output zu integrieren, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community Namen in {{Glossary("camel_case", "lower Camel Case")}} wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case) Variablennamen, wie `HelloWorld`, um es klarer zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler ausgeben.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser schließlich in das DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt noch eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App, und sie sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Importieren aller JS-Module und anderer Ressourcen, die sie benötigt, um zu funktionieren.

Die ersten beiden Anweisungen importieren die `React`- und `ReactDOM`-Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder Erweiterung, wenn wir diese Bibliotheken importieren, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie dieses Lesson durchgehen!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die Funktion `ReactDOM.createRoot()` auf, die das Wurzelelement unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID von `root`. Schließlich verknüpfen wir die Methode `render()` mit dem `createRoot()`-Aufruf, indem wir den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten, übergeben. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, dass es die Funktion `App()` aufrufen soll, die die `App`-Komponente innerhalb des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Wenn Sie mehr über diese React-APIs lesen möchten, könnten Sie folgende Links verwenden:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Einen Neuanfang machen

Bevor wir anfangen, unsere App zu bauen, werden wir einige der Boilerplate-Codes löschen, die Vite für uns bereitgestellt hat.

Ändern Sie zuerst als Experiment das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" liest, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort auf dem Entwicklungsserver, der unter `http://localhost:3000` in Ihrem Browser läuft, gerendert wird. Behalten Sie dies im Hinterkopf, wenn Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um uns ein wenig wohler beim Schreiben von JSX und bei der Arbeit mit Daten in React zu fühlen. Wir werden darüber sprechen, wie Attribute zu JSX-Elementen hinzugefügt werden, wie Kommentare geschrieben werden, wie Inhalte aus Variablen und anderen Ausdrücken gerendert werden und wie Daten mit Props in Komponenten übergeben werden.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, eine `<button>` unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button macht noch nichts, aber wir werden bald lernen, wie Interaktivität zu unserer App hinzugefügt wird.

Einige Attribute unterscheiden sich von ihren HTML-Pendants. Zum Beispiel übersetzt sich das `class` Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary` Klasse zu Ihrem Button hinzufügen wollten, würden Sie es so schreiben:

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

Als Nächstes ersetzen Sie das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" als gerenderten Text sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der Variablen `subject` lesen möchten, anstatt den literalen String `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweiften Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als finalen Inhalt rendern. Folgend finden Sie eine Reihe von Beispielen, mit Kommentaren oben, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass Kommentare auch technisch JavaScript-Ausdrücke sind. Die `/* Block-Kommentar-Syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen, in der Tat: `prop="value"`. Der Unterschied besteht darin, dass Attribute in Plain-Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an Kindkomponenten übergeben werden.

Lassen Sie uns `main.jsx` öffnen und unserer `<App />` Komponente ihren ersten Prop geben.

Fügen Sie einen Prop namens `subject` zu dem `<App />` Komponentenausdruck hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, sollte es so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()`-Funktion erneut besuchen. Ändern Sie die Signatur von `App()`, sodass sie `props` als Parameter akzeptiert, und loggen Sie `props` in die Konsole, damit Sie es inspizieren können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, auf eine Variable `subject` zuzugreifen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor in der Lage ist, JSX zu analysieren (die meisten modernen Editoren können das!), können Sie die eingebaute Kommentierungsabkürzung verwenden — `Strg + /` (auf Windows) oder `Cmd + /` (auf macOS) — um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser Zeile auskommentiert. Dieses Mal sollten Sie Ihren "Click me!"-Button allein gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

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

Wenn Sie speichern, sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, wird Ihr Text geändert.

Für zusätzliche Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop dem `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Das bringt uns zum Ende unseres ersten Blicks auf React, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Grundlagen ihrer Funktionsweise. Im nächsten Artikel werden wir anfangen, unsere erste richtige Anwendung – eine To-Do-Liste – zu erstellen. Bevor wir das tun, fassen wir einige der Dinge zusammen, die wir gelernt haben.

In React:

- Komponenten können benötigte Module importieren und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit reservierten JavaScript-Wörtern in Konflikt geraten. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden genau wie Attribute in Komponentenausdrücke geschrieben und an Komponenten übergeben.

## Siehe auch

- [React lernen](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Curriculum-Partner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _React lernen_ Kurs ist der ultimative React-101-Kurs – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie mehr als 140 interaktive Codierungsherausforderungen lösen und acht lustige Projekte erstellen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
