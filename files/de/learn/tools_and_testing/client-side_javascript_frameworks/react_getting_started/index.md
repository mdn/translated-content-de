---
title: Erste Schritte mit React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel begrüßen wir React. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen – und dabei ein wenig darüber lernen, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a>, und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Grundkenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/der Befehlszeile</a>.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax namens JSX (JavaScript und XML). Vertrautheit sowohl mit HTML als auch mit JavaScript wird Ihnen helfen, JSX zu erlernen und besser zu erkennen, ob Fehler in Ihrer Anwendung mit JavaScript oder mit dem spezifischeren Bereich von React zusammenhängen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und Verständnis der Grundlagen ihrer Funktionsweise.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie sein offizieller Slogan besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um in bestimmten Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in den gleichen Bereichen besprochen und genutzt, um die gleichen Probleme zu lösen wie andere echte Webentwicklungs-Frameworks. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies geschieht durch die Verwendung von Komponenten – selbst enthaltene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strikten Regeln bezüglich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React auf jede gewünschte Weise zu übernehmen. React kann mit einem einzelnen Button umgehen, ein paar Teilen einer Benutzeroberfläche oder der gesamten Benutzeroberfläche einer App.

Während React _für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendbar_ ist, ist es nicht so einfach, in eine Anwendung "fallen zu lassen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App damit aufbauen.

Darüber hinaus erfordern viele der Entwicklerkomfort-Vorteile einer React-App, wie das Schreiben von Oberflächen mit JSX, einen Kompilierungsprozess. Durch das Hinzufügen eines Compilers wie Babel zu einer Website läuft der Code darauf langsam, sodass Entwickler oft solche Werkzeuge mit einem Build-Schritt einrichten. React hat vermeintlich einen hohen Tooling-Bedarf, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit der Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie nutzt React JavaScript?

React verwendet Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript kommt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben ihr existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriftenkonstante ist als **JSX-Ausdruck** bekannt. React kann ihn verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header)-Tag einbetten? Der JSX-Ansatz erlaubt es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im obigen Code-Snippet sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehrere Zeilen des Codes darin Teil des gleichen Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, weil das [`<header>`](/de/docs/Web/HTML/Element/header)-Tag, das den Ausdruck startet, nicht an derselben Position eingerückt ist wie sein entsprechendes schließendes Tag.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn er kompiliert wird (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet moderne Frontend-Entwicklung fast immer einen Build-Prozess – Sie müssen die moderne Syntax downgraden, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Werkzeuge wie Babel kommen bereits mit JSX-Unterstützung ausgestattet, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung ist aus HTML und JavaScript, empfinden es einige Entwickler als intuitiv. Andere sagen, dass seine hybride Natur es verwirrend macht. Sobald Sie sich jedoch damit vertraut gemacht haben, wird es Ihnen erlauben, Benutzeroberflächen schneller und intuitiver zu entwickeln und anderen ermöglichen, Ihren Code auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, sehen Sie sich den Artikel der React-Entwicklung zum [Schreiben von Markup mit JSX](https://react.dev/learn/writing-markup-with-jsx) an.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, um eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger Zeit mit der Einrichtung.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, wann immer möglich die neueste Long Term Support (LTS) Version zu verwenden. Seit dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, wird eine Versionsnummer angezeigt. Wenn nicht, erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in dieser Anleitung davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie in den [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie Software installieren, die Ihnen Parität mit Unix/macOS-Terminals gibt, um die im Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [git für Windows-Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen zu diesen und zu Terminalbefehlen im Allgemeinen finden Sie im [Befehlszeilen-Crashkurs](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Beachten Sie außerdem, dass React und ReactDOM Apps erstellen, die nur auf einer recht modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Anleitungen durcharbeiten.

Weitere Informationen finden Sie unter:

- ["Über npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung in npx" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite's Dokumentation](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager beschikt über einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus Vite's Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie `cd` zu dem Platz wechseln, an dem Sie Ihre App auf Ihrem Computer wünschen, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis unter Verwendung von Vite's`react`-Vorlage.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` weiterzugeben, und das `--template react`-Argument teilt Vite mit, seine React-Vorlage zu verwenden.

Ihr Terminal bietet einige Nachrichten, wenn dieser Befehl erfolgreich war. Sie sollten Text sehen, der Sie auffordert, `cd` zu Ihrem neuen Verzeichnis auszuführen, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Vorgang abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir der Vite-Standardempfehlung einige Befehlszeilen-Flags hinzu, um die App in unserem Browser zu öffnen, sobald der Server gestartet ist, und verwenden den Port 3000.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollte ein neuer Browser-Tab mit Ihrer React-App angezeigt werden:

![Screenshot von Firefox macOS, geöffnet auf localhost:3000, eine Anwendung, die mit Vite's React-Vorlage erstellt wurde](default-vite.png)

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Element/title)-Element ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Korrekte Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne dass sie von Vite's Build-Tools verarbeitet werden. Im Moment enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da es den Quellcode für unsere Anwendung enthält. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis die Endung `.jsx` haben. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie teilt Vite mit, die JSX-Syntax in JavaScript umzuwandeln, die Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht vollständig verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir weitermachen, möchten Sie möglicherweise Ihre `package.json` Datei etwas ändern, damit Sie die `--open` und `--port` Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"` Schlüssel, sodass es folgendermaßen aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Einstellung wird Ihre App beim Ausführen von `npm run dev` jedes Mal in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Sie _benötigen_ hier nicht die zusätzlichen `--`, da wir die Argumente direkt an `vite` übergeben, anstatt an ein vorkonfiguriertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die `App.jsx` Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisungen oben, die `App()` Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am Anfang der Datei erlauben `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react` Bibliothek. Hooks sind eine Möglichkeit, React's Funktionen innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der Dateiendung `.svg` enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien anstelle von npm-Paketen verweisen.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />` Komponente zusammenhängt. Beachten Sie, dass kein Variablenname und keine `from`-Direktive vorhanden ist. Dies wird als [_Side-Effect Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, aber es weist Vite an, die referenzierte CSS-Datei in die endgültige Codeausgabe aufzunehmen, damit sie im Browser verwendet werden kann.

### Die `App()` Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}} Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal-Case (oder Upper Camel Case) Variablennamen wie `HelloWorld`, um klarzustellen, dass ein gegebenes JSX-Element eine React-Komponente ist und kein reguläres HTML-Tag. Würden Sie die `App()`-Funktion in `app()` umbenennen, würde Ihr Browser einen Fehler ausgeben.

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

Die `App()` Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich im DOM rendert.

Direkt unter dem `return` Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dabei handelt es sich um ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragments erlauben uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragments in vielen React-Anwendungen sehen.

### Die `export` Anweisung

Es gibt noch eine weitere Codezeile nach der `App()` Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()` Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />` Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfangs so aus:

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

Wie bei `App.jsx`, beginnt die Datei mit dem Import aller JS-Module und anderen Ressourcen, die sie benötigt, um zu funktionieren.

Die ersten beiden Anweisungen importieren die `React` und `ReactDOM` Bibliotheken, da sie später in der Datei referenziert werden. Beim Import dieser Bibliotheken schreiben wir keinen Pfad oder keine Erweiterung, da sie keine lokalen Dateien sind. Tatsächlich sind sie in unserer `package.json` Datei als Abhängigkeiten aufgelistet. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Wir importieren dann unsere `App()` Funktion und `index.css`, die globale Stile enthält, die auf die gesamte App angewendet werden.

Wir rufen dann die Funktion `ReactDOM.createRoot()` auf, die das Wurzelelement unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, in das wir unsere React-App einfügen möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()` Methode an den `createRoot()` Aufruf an und übergeben den JSX-Ausdruck, den wir innerhalb der Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, dass die `App()` _Funktion_ aufgerufen wird, die die `App` _Komponente_ innerhalb der Wurzelkomponente rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>` Komponente gerendert. Diese Komponente hilft Entwicklern dabei, potenzielle Probleme in ihrem Code zu erkennen.

Sie können mehr über diese React-APIs lesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neu anfangen

Bevor wir beginnen, unsere App aufzubauen, werden wir etwas von dem Boilerplate-Code löschen, den Vite für uns bereitgestellt hat.

Ändern Sie zunächst, als Experiment, das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Element in `App.jsx`, sodass es "Hallo, Welt!" liest, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver angezeigt wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Beachten Sie dies, während Sie an Ihrer App arbeiten.

Wir werden den Rest des Codes nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch das Folgende:

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um uns etwas mehr beim Schreiben von JSX und dem Arbeiten mit Daten in React wohlzufühlen. Wir sprechen darüber, wie man JSX-Elementen Attribute hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten über Props in Komponenten übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>` unter dem `<h1>` Element in Ihrer `App.jsx` Datei hinzuzufügen, so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button macht noch nichts, aber wir lernen bald etwas über das Hinzufügen von Interaktivität zu unserer App.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class` Attribut im HTML in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX ist eine JavaScript-Erweiterung. Wenn Sie eine `primary` Klasse zu Ihrem Button hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalte

Im Gegensatz zu HTML erlaubt uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben anderen Inhalten zu schreiben. Deklarieren wir eine Variable namens `subject` direkt oberhalb der `App()` Funktion:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hallo, React!" angezeigt bekommen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der `subject`-Variable lesen möchten, anstatt den Literalstring `"subject"` zu rendern. In JSX können Sie jeden gültigen JavaScript-Ausdruck in geschweifte Klammern setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Im Folgenden ist eine Reihe von Beispielen mit Kommentaren, die über Erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Selbst Kommentare in JSX sind in geschweiften Klammern geschrieben! Dies liegt daran, dass Kommentare technisch gesehen auch JavaScript-Ausdrücke sind. Die `/* block comments syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind eine Methode zum Übergeben von Daten in eine React-Komponente. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass, während Attribute an einfache Elemente übergeben werden, Props an React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten zu untergeordneten Komponenten übertragen werden.

Öffnen wir `main.jsx` und geben unserer `<App />` Komponente ihre ersten Props.

Fügen Sie der `<App />` Komponente in `main.jsx` ein `subject` Prop mit einem Wert von `Clarice` hinzu. Nachdem Sie dies getan haben, sollte es etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Kehren wir zu `App.jsx` zurück und sehen wir uns die `App()` Funktion erneut an. Ändern Sie die Signatur von `App()`, sodass es `props` als Parameter übernimmt, und protokollieren Sie `props` in der Konsole, damit Sie es inspizieren können. Löschen Sie auch die `subject` Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx` Datei sollte so aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Dort sehen Sie einen leeren Hintergrund ohne Inhalt. Dies liegt daran, dass wir versuchen, eine `subject` Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie JSX geparst wird (das tun die meisten modernen Editoren!), können Sie dessen integrierte Kommentar-Kurzbefehl — `Ctrl + /` (unter Windows) oder `Cmd + /` (auf macOS) — verwenden, um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie Ihren "Click me!" Button alleine gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, wird eine Nachricht angezeigt, die so aussieht wie diese:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject` Prop, das wir unserem `<App />` Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer in dieser Weise in Objekte gesammelt.

Verwenden wir dieses `subject` Prop, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` wieder aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`. Löschen Sie dann die `console.log()` Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie nun mit "Hallo, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, ändert sich Ihr Text.

Für weitere Übungen könnten Sie ausprobieren, ein zusätzliches `greeting` Prop zum `<App />` Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject` Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React, einschließlich der lokalen Installation, der Erstellung einer Starter-App und wie die Grundlagen funktionieren. Im nächsten Artikel beginnen wir mit der Erstellung unserer ersten richtigen Anwendung – einer To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge, die wir gelernt haben, zusammenfassen.

In React:

- Komponenten können die Module, die sie benötigen, importieren und müssen sich selbst am Ende ihrer Dateien exportieren.
- Komponentenfunktionen sind mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie diese in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um nicht mit JavaScript-Reserviertwörtern in Konflikt zu geraten. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden genauso wie Attribute innerhalb von Komponentenaufrufen geschrieben und in Komponenten übergeben.

## Siehe auch

- [Learn React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN Curriculum Partner_</sup>
  - : Der [Scrimba's](https://scrimba.com?via=mdn) _Learn React_ Kurs ist der ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht lustige Projekte erstellen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
