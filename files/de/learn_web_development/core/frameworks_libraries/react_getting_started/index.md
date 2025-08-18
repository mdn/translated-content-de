---
title: Einstieg in React
short-title: React- Einstieg
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 52a81d8138473b6ac4bec77d0be4261cb0b76d41
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir React kennenlernen. Wir werden ein wenig über seinen Hintergrund und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit experimentieren – und dabei ein wenig über die Funktionsweise von React lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Einrichten einer lokalen React-Entwicklungsumgebung, Erstellen einer Start-App und
          Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie das offizielle Motto besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um für bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Für den Webbereich verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Bereichen wie – und zur Lösung derselben Probleme wie – andere echte Webentwicklungs-Frameworks diskutiert und verwendet. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React besteht darin, Fehler zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies wird durch die Verwendung von Komponenten erreicht – in sich geschlossene, logische Codefragmente, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zu einer vollständigen Benutzeroberfläche zusammengesetzt werden, und React abstrahiert den Großteil der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln bezüglich Code-Konventionen oder Dateiorganisation. Dadurch können Teams Konventionen festlegen, die für sie am besten funktionieren, und React in beliebiger Weise übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verarbeiten.

Während React _für_ [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden kann, ist es nicht so einfach, es "in" eine Anwendung einzufügen wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwickler-Vorteile einer React-App, wie z. B. das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code darauf langsam laufen, daher richten Entwickler solche Tools oft mit einem Build-Schritt ein. React hat möglicherweise einen hohen Werkzeugbedarf, aber es kann erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zur Darstellung der gesamten Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, zu verwenden.

## Wie nutzt React JavaScript?

React nutzt Funktionen von modernem JavaScript für viele seiner Muster. Die größte Abweichung von JavaScript ist die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code danebenstehen kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Heading-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einbetten? Der JSX-Ansatz erlaubt es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Codeausschnitt sind nicht einzigartig für JSX und haben keine Auswirkung auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch recht umständlich aus, da das `<header>`-Tag, das den Ausdruck beginnt, nicht an derselben Position wie sein entsprechendes schließendes Tag eingerückt ist.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn es kompiliert wird (mithilfe eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) selbst zu verwenden, um Ihre Benutzeroberfläche zu schreiben. Auf diese Weise verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Das Kompilieren ist ein weiterer Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community glauben, dass die Lesbarkeit von JSX lohnenswert ist. Zudem beinhaltet moderne Front-End-Entwicklung ohnehin fast immer einen Build-Prozess – Sie müssen moderne Syntax auf ein Niveau herunterstufen, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise {{Glossary("Minification", "minifizieren")}}, um die Ladeperformance zu optimieren. Beliebte Tools wie Babel bieten die Unterstützung von JSX bereits standardmäßig an, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich daran gewöhnt haben, ermöglicht es Ihnen jedoch, Benutzeroberflächen schneller und intuitiver zu erstellen, und andere können Ihren Code einfacher auf einen Blick verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Kommandozeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei eingefügt werden, aber durch die Verwendung von Vite können Sie mehr Zeit damit verbringen, Ihre App zu erstellen, und weniger mit der Einrichtung.

> [!NOTE]
> Sie können React-Code schreiben, ohne _irgendein_ lokales Setup durchzuführen, indem Sie das Scrimba-Tutorial [First React Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> durchgehen.
> Gerne können Sie es ausprobieren, bevor Sie fortfahren.

### Anforderungen

Um Vite verwenden zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 wird mindestens Node-Version 18 oder später benötigt, und es ist eine gute Idee, die neueste Version mit langfristigem Support (LTS) zu verwenden, wenn möglich. Seit dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Version von Node zu überprüfen, führen Sie folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, wird Ihnen eine Fehlermeldung angezeigt. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesem Tutorial davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Git Bash** (das Teil des [Git für Windows-Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie in [Schnelleinführung in die Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Bedenken Sie auch, dass React und ReactDOM Apps erzeugen, die nur in einer relativ modernen Menge an Browsern, wie Firefox, Microsoft Edge, Safari oder Chrome, funktionieren, während Sie diese Tutorials durchgehen.

Weitere Informationen finden Sie unter:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Einführung von npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Dokumentation von Vite](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus der standardmäßigen React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie in das Verzeichnis wechseln (`cd`), in dem Ihre App auf Ihrem Computer gespeichert werden soll, und führen Sie dann folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis mit der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` weiterzugeben, und das Argument `--template react` sagt Vite, dass seine React-Vorlage verwendet werden soll.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln (`cd`), die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Befehlszeilen-Flags zur Standardvorschlag von Vite hinzufügen, um die App beim Starten des Servers in unserem Browser zu öffnen und Port 3000 zu verwenden.

Führen Sie folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS geöffnet bei localhost:3000, zeigt eine Anwendung, die mit der React-Vorlage von Vite erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite bietet uns alles, was wir zum Entwickeln einer React-Anwendung benötigen. Seine anfängliche Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Top-Level-Datei. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von den Build-Tools von Vite verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da hier der Quellcode unserer Anwendung lebt. Ihnen wird auffallen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Endung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie sagt Vite, dass die JSX-Syntax in JavaScript umgewandelt werden soll, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht vollständig verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in den npm-Dokumentationen weiterlesen: [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/). Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skripts

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die Flags `--open` und `--port` nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App bei jedem Ausführen von `npm run dev` in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Hier benötigen Sie keine zusätzlichen `--` da wir direkt an `vite` Argumente übergeben, anstelle eines vordefinierten npm-Skripts.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: sie dienen einem einzigen, offensichtlichen Zweck.

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

Die Datei `App.jsx` besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am unteren Rand. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am oberen Rand der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie am Ende die `.svg`-Erweiterung haben. Das sagt uns, dass es sich bei diesen Imports um _lokale_ handelt, die sich auf unsere eigenen Dateien beziehen und nicht auf npm-Pakete.

Die letzte Anweisung importiert das für unsere `<App />`-Komponente zugehörige CSS. Beachten Sie, dass kein Variablenname und keine `from`-Direktive vorhanden sind. Dies wird als [_Seiteneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sagt jedoch Vite, die referenzierte CSS-Datei zum endgültigen Codeausgabe hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Imports haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community Bezeichner schreiben bevorzugt {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld`, verwenden React-Komponenten Pascal Case (oder Upper Camel Case)-Variablennamen, wie `HelloWorld`, um klar zu machen, dass ein bestimmtes JSX-Element eine React-Komponente ist und kein reguläres HTML-Tag. Würden Sie die `App()`-Funktion in `app()` umbenennen, würde Ihr Browser einen Fehler auslösen.

Lassen Sie uns `App()` genauer ansehen.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich im DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezielles Syntaxfragment: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente erlauben uns, das zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Export-Anweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Wechsel zu `main`

Öffnen wir `src/main.jsx`, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, dass alle JavaScript-Module und anderen Assets importiert werden, die es benötigt, um zu funktionieren.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, da sie später in der Datei referenziert werden. Wenn wir diese Bibliotheken importieren, schreiben wir keinen Pfad oder keine Erweiterung, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgelistet. Seien Sie vorsichtig mit dieser Unterscheidung, während Sie durch diese Lektion arbeiten!

Danach importieren wir unsere `App()`-Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `createRoot()`-Funktion auf, die das Wurzelelement unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element, innerhalb welchem unsere React-App gerendert werden soll, in diesem Fall das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()`-Methode an den `createRoot()`-Aufruf, indem wir den JSX-Ausdruck übergeben, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()`-_Funktion_ aufzurufen, die die `App`-_Komponente_ innerhalb des Root-Elements rendert.

> [!NOTE]
> `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können sich diese React-APIs gerne genauer anschauen:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neuanfang

Bevor wir beginnen, unsere App zu erstellen, löschen wir einige der Boilerplate-Code, die Vite für uns bereitgestellt hat.

Ändern Sie zunächst testweise das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass darin "Hello, World!" steht, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser ausgeführt wird. Denken Sie daran, während Sie an Ihrer App arbeiten.

Den Rest des Codes werden wir nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch folgendes:

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

Als nächstes werden wir unsere JavaScript-Kenntnisse nutzen, um etwas vertrauter darin zu werden, JSX zu schreiben und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props in Komponenten überträgt.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können, genau wie HTML-Elemente, Attribute haben. Versuchen Sie, ein `<button>`-Element unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie ein Button mit den Worten `Click me!`. Der Button tut noch nichts, aber wir werden bald lernen, wie wir Interaktivität zu unserer App hinzufügen können.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel übersetzt sich das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie dem Button eine `primary`-Klasse hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Anders als HTML erlaubt JSX uns das Schreiben von Variablen und anderen JavaScript-Ausdrücken direkt neben unseren anderen Inhalten. Deklarieren wir eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei:

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

Speichern Sie Ihre Datei und prüfen Sie Ihren Browser. Sie sollten "Hello, React!" sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen wollen, anstatt den wörtlichen String `"subject"` zu rendern. Sie können jedem gültigen JavaScript-Ausdruck innerhalb geschweifter Klammern in JSX schreiben; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Im Folgenden finden Sie eine Reihe von Beispielen mit Kommentaren darüber, die erläutern, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {`${subject} :)`}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Dies liegt daran, dass geschweifte Klammern einen einzelnen JavaScript-Ausdruck enthalten können und Kommentare als Teil eines JavaScript-Ausdrucks gültig sind (und ignoriert werden). Sie können sowohl `/* Block-Kommentar-Syntax */` als auch `// Zeilenkommentar-Syntax` (mit einem nachfolgenden neuen Zeilenumbruch) innerhalb geschweifter Klammern verwenden.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist in der Tat identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Props in React-Komponenten übergeben werden, während Attribute gewöhnlichen Elementen übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Lassen Sie uns `main.jsx` öffnen und unserer `<App />`-Komponente ihr erstes Prop geben.

Fügen Sie der `<App />`-Komponentenaufruf eine Prop von `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, sehen wir uns die `App()`-Funktion an. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert, und protokollieren Sie `props` in der Konsole, damit Sie es inspizieren können. Löschen Sie auch das `subject`-const; wir brauchen es nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

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

Speichern Sie Ihre Datei und prüfen Sie Ihre Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, eine `subject`-Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX analysiert (die meisten modernen Editoren tun dies!), können Sie die eingebaute Kommentarabkürzung – `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) – verwenden, um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Diesmal sollten Sie Ihren "Click me!"-Button allein gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, wird eine Nachricht angezeigt, die ungefähr so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht der Prop `subject`, die wir dem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer in Formelhefte in dieser Weise gesammelt.

Lassen Sie uns diese `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie das `console.log()`. Ihr Code sollte so aussehen:

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

Um zusätzliche Übung zu erhalten, könnten Sie versuchen, eine zusätzliche `greeting`-Prop zum `<App />`-Komponentenaufruf innerhalb von `main.jsx` hinzuzufügen und diese zusammen mit der `subject`-Prop innerhalb von `App.jsx` zu verwenden.

## Zusammenfassung

Damit kommen wir zu einem ersten Blick auf React, einschließlich der lokalen Installation, dem Erstellen einer Starter-App und der Grundlagen der Funktionsweise. Im nächsten Artikel beginnen wir mit dem Bau unserer ersten richtigen Anwendung – einer ToDo-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, sodass sie nicht mit reservierten Wörter von JavaScript kollidieren. Zum Beispiel übersetzt sich `class` in HTML zu `className` in JSX.
- Props werden genau wie Attribute innerhalb von Komponente-Aufrufen geschrieben und an Komponenten übermittelt.

## Siehe auch

- [React lernen](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) _React lernen_-Kurs ist das ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140+ interaktive Codierung Herausforderungen lösen und acht lustige Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
