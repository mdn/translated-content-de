---
title: Einstieg in React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel begrüßen wir React. Wir werden etwas über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Start-App erstellen und damit experimentieren — und dabei ein wenig darüber lernen, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
          Einrichtung einer lokalen React-Entwicklungsumgebung, Erstellung einer Start-App und
          Verständnis der Grundlagen ihrer Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie der offizielle Slogan besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web gedacht. Es wird zusammen mit anderen Bibliotheken verwendet, um für bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu entwickeln.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Räumen diskutiert und zur Lösung derselben Probleme eingesetzt wie andere echte Webentwicklungs-Frameworks. Wenn wir von React als einem „Framework“ sprechen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen auftreten können. Dies wird durch die Verwendung von Komponenten erreicht – eigenständige, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln hinsichtlich Codekonventionen oder Dateiorganisation. Dadurch können Teams Konventionen festlegen, die am besten zu ihnen passen, und React nach Belieben annehmen. React kann mit einem einzigen Button, einigen Teilen einer Benutzeroberfläche oder der gesamten Benutzeroberfläche einer Anwendung arbeiten.

Obwohl React für [kleinere Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach in eine Anwendung „einzufügen“ wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklervorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website führt dazu, dass der Code langsamer ausgeführt wird, sodass Entwickler normalerweise ein derartiges Tooling mit einem Build-Schritt einrichten. React hat wohl einen hohen Tooling-Bedarf, aber es ist erlernbar.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt moderne JavaScript-Funktionen für viele seiner Muster. Seine größte Abweichung von JavaScript ist die Verwendung von [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code neben JavaScript verwendet werden kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschrift-Konstante ist als **JSX-Ausdruck** bekannt. React kann ihn verwenden, um das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App darzustellen.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einfügen? Der JSX-Ansatz ermöglicht uns, unsere Elemente ineinander zu verschachteln, genauso wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal für Sie (und Ihren Computer), dass die mehreren Codezeilen im Inneren Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck startet, nicht an derselben Position eingerückt ist wie sein entsprechendes schließendes Tag.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dadurch verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community sind der Meinung, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet die moderne Frontend-Entwicklung fast immer einen Build-Prozess – man muss modernen Syntax auf niedrigere Versionen herunterstufen, um mit älteren Browsern kompatibel zu sein, und man möchte vielleicht auch seinen Code zur Optimierung der Ladeleistung {{Glossary("Minification", "minimieren")}}. Beliebte Tools wie Babel bieten bereits von Haus aus Unterstützung für JSX, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich damit wohlfühlen, ermöglicht es Ihnen, Benutzeroberflächen schneller und intuitiver zu erstellen und anderen, Ihren Code auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel der React-Teams [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Einrichtung Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger mit der Einrichtung.

> [!NOTE]
> Sie können anfangen, React-Code zu schreiben, ohne _eine_ lokale Einrichtung vorzunehmen, indem Sie sich Scrimbas [First React Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim ansehen.
> Fühlen Sie sich frei, es auszuprobieren, bevor Sie weitermachen.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node Version 18 oder neuer erforderlich, und es ist ratsam, die neueste LTS-Version (Long Term Support) zu verwenden, wann immer Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node umfasst npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes im Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Andernfalls erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Paketmanager Yarn als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie in dieser Tutorialsammlung npm verwenden. Siehe [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit dem Terminal in Unix/macOS zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. **Gitbash** (das Teil des [git für Windows-Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Crash-Kurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen hierüber und über Terminalbefehle im Allgemeinen.

Berücksichtigen Sie auch, dass React und ReactDOM Apps erstellen, die nur auf einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe die folgenden Informationen für weitere Details:

- ["Über npm" auf dem npm Blog](https://docs.npmjs.com/about-npm/)
- ["Vorstellung von npx" auf dem npm Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite's Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm Paketmanager bietet einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App mit Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort navigieren, an dem Ihre App auf Ihrem Rechner gespeichert werden soll, und führen Sie dann Folgendes im Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erzeugt ein `moz-todo-react`-Verzeichnis mit Vites `react`-Vorlage.

> [!NOTE]
> Das `--` ist erforderlich, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument teilt Vite mit, dass die React-Vorlage verwendet werden soll.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie dazu auffordert, zu Ihrem neuen Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Lassen Sie uns mit zwei dieser Befehle beginnen. Führen Sie Folgendes im Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige Befehlszeilen-Flags zu Vites Standardvorschlag hinzu, um die App in unserem Browser zu öffnen, sobald der Server startet, und den Port 3000 zu verwenden.

Führen Sie Folgendes im Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox macOS, geöffnet zu localhost:3000, mit einer Anwendung, die aus Vites React-Vorlage erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite stellt uns alles zur Verfügung, was wir zur Entwicklung einer React-Anwendung benötigen. Seine anfängliche Verzeichnisstruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die Ihrem Browser direkt ohne Aufbereitung durch Vites Build-Tooling serviert werden. Momentan enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da es den Quellcode für unsere Anwendung enthält. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist erforderlich für jede Datei, die JSX enthält – sie teilt Vite mit, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Allerdings können Sie mehr über sie erfahren, indem Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumentationen lesen. Wir sprechen auch über `package.json` in unserem [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Entwicklungsskripts

Bevor wir weitermachen, möchten Sie vielleicht Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open` und `--port`-Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel so, dass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Konfiguration öffnet sich Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, in Ihrem Browser unter `http://localhost:3000`.

> [!NOTE]
> Sie _brauchen_ hier nicht das zusätzliche `--`, da wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind jedoch in der Regel klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht hauptsächlich aus drei Teilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen am Anfang, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am Anfang der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React in einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und sich auf unsere eigenen Dateien anstatt auf npm-Pakete beziehen.

Die letzte Anweisung importiert das CSS im Zusammenhang mit unserer `<App />`-Komponente. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Nebeneffektimport_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sondern teilt Vite mit, die referenzierte CSS-Datei in die endgültige Codeausgabe aufzunehmen, sodass sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community die {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten PascalCase- (oder Upper Camel Case-) Variablennamen wie `HelloWorld`, um klar zu machen, dass es sich bei einem gegebenen JSX-Element um eine React-Komponente handelt und nicht um ein reguläres HTML-Tag. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler ausgeben.

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

Die Funktion `App()` gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in das DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein spezielles Stück Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`-Elemente im Browser darzustellen. Sie sehen Fragmente in vielen React-Anwendungen.

### Die `export`-Anweisung

Es gibt eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Wechsel zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JavaScript-Module und anderer Ressourcen, die sie benötigt, um ausgeführt zu werden.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, da sie später in der Datei referenziert werden. Wir geben keinen Pfad oder eine Erweiterung an, wenn wir diese Bibliotheken importieren, weil es sich nicht um lokale Dateien handelt. Tatsächlich sind sie in unserer `package.json`-Datei als Abhängigkeiten aufgelistet. Seien Sie vorsichtig mit diesem Unterschied, während Sie diese Lektion durcharbeiten!

Danach importieren wir unsere `App()`-Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Anschließend rufen wir die `createRoot()`-Funktion auf, die den Wurzelknoten unserer Anwendung definiert. Diese Funktion erwartet als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()`-Methode an den `createRoot()`-Aufruf an und übergeben ihr den JSX-Ausdruck, den wir innerhalb unseres Root-Elements rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, die `App()`-Funktion aufzurufen, die die `App`-Komponente innerhalb des Root-Knotens rendert.

> **Note:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft den Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs nachlesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Von vorne anfangen

Bevor wir mit dem Bau unserer App beginnen, werden wir etwas von dem Boilerplate-Code entfernen, den Vite für uns bereitgestellt hat.

Zuerst, als Experiment, ändern Sie das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, damit es "Hello, World!" lautet, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Merken Sie sich dies, während Sie an Ihrer App arbeiten.

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

Als nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um uns ein wenig wohler mit dem Schreiben von JSX und dem Arbeiten mit Daten in React zu fühlen. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props an Komponenten übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, einen `<button>` unterhalb des `<h1>`-Elements in Ihrer `App.jsx`-Datei hinzuzufügen, wie folgt:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button tut noch nichts, aber wir werden bald lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class`-Attribut in HTML zu `className` in JSX. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt uns JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Lassen Sie uns eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei deklarieren:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie nun das Wort "World" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen möchten, anstatt die wörtliche Zeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Im Folgenden sind einige Beispiele aufgeführt, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden in geschweiften Klammern geschrieben! Dies liegt daran, dass geschweifte Klammern einen einzelnen JavaScript-Ausdruck enthalten können, und Kommentare sind als Teil eines JavaScript-Ausdrucks gültig (und werden ignoriert). Sie können sowohl `/* Block-Kommentarsyntax */` als auch `// Zeilen-Kommentarsyntax` (mit einem nachfolgenden Zeilenumbruch) in geschweiften Klammern verwenden.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass während Attribute in einfache Elemente übergeben werden, Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihre ersten Props.

Fügen Sie einen Prop von `subject` zu dem `<App />`-Komponentenaufruf hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()`-Funktion erneut besuchen. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert, und protokollieren Sie `props` in der Konsole, damit Sie sie inspizieren können. Löschen Sie auch das `subject`-const, das wir nicht mehr benötigen. Ihre `App.jsx`-Datei sollte so aussehen:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Das liegt daran, dass wir versuchen, eine `subject`-Variable zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten modernen Editoren tun dies!), können Sie die integrierte Kommentierungsschaltfläche `Ctrl + /` (unter Windows) oder `Cmd + /` (unter macOS) verwenden, um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit der auskommentierten Zeile. Diesmal sollten Sie Ihren
"Click me!"-Button alleine sehen. Wenn Sie die Entwicklertools Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und die Zeichenkette `Clarice` entspricht ihrem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie zu `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie nun mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, wird sich Ihr Text ändern.

Zum zusätzlichen Üben könnten Sie versuchen, ein zusätzliches `greeting`-Prop zu dem `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und es zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Einblicks in React, einschließlich der lokalen Installation, der Erstellung einer Start-App und der Grundlagen der Funktionsweise. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu entwickeln — eine Todo-Liste. Bevor wir das tun, fassen wir jedoch einige der Dinge zusammen, die wir gelernt haben.

In React:

- Komponenten können die benötigten Module importieren und müssen sich am Ende ihrer Dateien selbst exportieren.
- Funktionsnamen in Komponenten werden in `PascalCase` geschrieben.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit JavaScript-reservierten Wörtern kollidieren. Zum Beispiel wird `class` in HTML zu `className` in JSX umgewandelt.
- Props werden genauso wie Attribute in Komponentenanrufe geschrieben und an Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn React_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) ist das ultimative React 101 — der perfekte Ausgangspunkt für jeden Anfänger in React. Lernen Sie die Grundlagen von modernem React durch die Lösung von über 140 interaktiven Codierherausforderungen und beim Erstellen von acht unterhaltsamen Projekten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
