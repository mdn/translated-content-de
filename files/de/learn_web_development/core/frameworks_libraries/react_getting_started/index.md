---
title: Einführung in React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel begrüßen wir React. Wir werden ein wenig über seinen Hintergrund und Anwendungsfälle erfahren, ein einfaches React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen – dabei lernen wir ein wenig, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a}>, sowie das <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Command Line</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Ein lokales React-Entwicklungsumfeld einrichten, eine Start-App erstellen und
          die Grundlagen verstehen, wie es funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie sein offizielles Motto besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um auf bestimmten Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Für den Webaufbau verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft im selben Kontext besprochen und genutzt, um dieselben Probleme wie andere echte Webentwicklungs-Frameworks zu lösen. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies geschieht durch die Verwendung von Komponenten – in sich geschlossene, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengestellt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Entwerfen der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strengen Regeln in Bezug auf Codekonventionen oder Dateiorganisation. Dies ermöglicht Teams, Konventionen festzulegen, die für sie am besten funktionieren, und React in jeder gewünschten Weise zu übernehmen. React kann einen einzelnen Button, ein paar Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App übernehmen.

Obwohl React _für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project)_ verwendet werden kann, ist es nicht so einfach, es wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue in eine Anwendung zu "integrieren" — es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwickler-Erfahrungs-Vorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den Code langsamer laufen, sodass Entwickler häufig solche Werkzeuge mit einem Build-Schritt einrichten. React hat zweifellos einen hohen Werkzeugbedarf, aber es kann erlernt werden.

Dieser Artikel wird sich auf den Anwendungsfall konzentrieren, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt die Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript kommt mit der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code parallel dazu existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Heading-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unser Heading aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einbetten? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren Zeilen Code innerhalb des gleichen Ausdrucks gehören. Sie könnten den Header-Ausdruck ebenso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch irgendwie umständlich aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck startet, nicht auf dieselbe Position wie das entsprechende Schließtag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (unter Verwendung eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Wenn Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem ist die moderne Frontend-Entwicklung fast immer mit einem Build-Prozess verbunden — Sie müssen die moderne Syntax herunterstufen, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten bereits standardmäßig Unterstützung für JSX, sodass Sie die Kompilierung nicht selbst einrichten müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich daran gewöhnt haben, können Sie damit Benutzeroberflächen schneller und intuitiver erstellen und anderen ermöglichen, Ihren Code auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert werden, aber mit Vite können Sie mehr Zeit damit verbringen, Ihre App zu erstellen, und weniger Zeit mit dem Einrichten verbringen.

> [!NOTE]
> Sie können anfangen, React-Code zu schreiben, ohne _irgendein_ lokales Setup zu machen, indem Sie den Scrimba-Kurs [First React Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> durcharbeiten.
> Fühlen Sie sich frei, es auszuprobieren, bevor Sie weitermachen.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node Version 18 oder später erforderlich, und es ist eine gute Idee, die neueste Long-Term-Support (LTS)-Version zu verwenden, wann immer Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie in diesem Tutorial-Set npm verwenden. Weitere Informationen zu npm und yarn finden Sie im [Tutorial zu Paketmanagement-Grundlagen](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das Teil des [Git-for-Windows-Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie in der [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Bedenken Sie auch, dass React und ReactDOM Apps produzieren, die nur auf einer recht modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe die folgenden Ressourcen für weitere Informationen:

- ["About npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager verfügt über einen `create`-Befehl, der es Ihnen ermöglicht, neue Projekte anhand von Vorlagen zu erstellen. Wir können ihn verwenden, um eine neue App aus Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie `cd` in den Ort eingeben, an dem sich Ihre App auf Ihrem Computer befinden soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis unter Verwendung von Vites `react`-Vorlage.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` sagt Vite, seine React-Vorlage zu verwenden.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu `cd`, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App laufen zu lassen. Hier werden wir einige Befehlszeilen-Flags zu Vites Standardvorschlag hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browsertab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS geöffnet auf localhost:3000, zeigt eine Anwendung, die mit Vites React-Vorlage erstellt wurde](default-vite.png)

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

Die **`index.html`**-Datei ist die wichtigste Datei auf der obersten Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Sie werden diese Datei während unseres Tutorials nicht bearbeiten müssen, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Präzise Seitentitel sind wichtig für die Zugänglichkeit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tools verarbeitet zu werden. Im Moment enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen werden, da es den Quellcode unserer Anwendung enthält. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis die Erweiterung `.jsx` haben. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie sagt Vite, die JSX-Syntax in JavaScript zu verwandeln, das Ihr Browser verstehen kann. Das Verzeichnis `src/assets` enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten über unser Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns erstellt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch in unserem [Leitfaden zu Paketmanagement-Grundlagen](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) über `package.json`.

### Anpassen unseres Dev-Skripts

Bevor wir fortfahren, möchten Sie möglicherweise Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open`- und `--port`-Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Änderung wird Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Sie _brauchen_ das zusätzliche `--` hier nicht, weil wir Argumente direkt an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die Datei `App.jsx` besteht aus drei Hauptteilen: Einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die Funktion `App()` in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Schauen wir uns diese Anweisungen genauer an:

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass die Erweiterung `.svg` am Ende steht. Dies sagt uns, dass diese Importe _lokal_ sind und sich auf unsere eigenen Dateien anstatt auf npm-Pakete beziehen.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass es keinen Variablennamen und keine `from`-Direktive gibt. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – es importiert keinen Wert in die JavaScript-Datei, sondern weist Vite an, die referenzierte CSS-Datei in den endgültigen Code-Ausgabe einzufügen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen folgt eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der größte Teil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal-Schreibweise (oder Upper Camel Case)-Variablennamen, wie `HelloWorld`, um klarzustellen, dass ein bestimmtes JSX-Element eine React-Komponente ist und kein reguläres HTML-Tag. Wenn Sie die `App()`-Funktion in `app()` umbenennen, würde Ihr Browser einen Fehler werfen.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in das DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich eine spezielle Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns dies zu tun, ohne willkürliche `<div>`-Elemente im Browser zu rendern. Sie sehen Fragmente in vielen React-Anwendungen.

### Die `export`-Anweisung

Es gibt eine weitere Codezeile nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App, und sie sieht zunächst so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JavaScript-Module und anderer Assets, die sie benötigt, um zu laufen.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder keine Erweiterung, wenn wir diese Bibliotheken importieren, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Seien Sie bei dieser Unterscheidung vorsichtig, während Sie diese Lektion durcharbeiten!

Anschließend importieren wir unsere `App()`-Funktion und `index.css`, die globale Styles enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die `createRoot()`-Funktion auf, die den Wurzelknoten unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()`-Methode an den `createRoot()`-Aufruf an und übergeben den JSX-Ausdruck, den wir innerhalb unseres Wurzelknotens rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, die `App()` _Funktion_ aufzurufen, die die `App` _Komponente_ innerhalb des Wurzelknotens rendert.

> [!NOTE] > `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs nach Belieben nachlesen:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Von vorne anfangen

Bevor wir anfangen, unsere App zu bauen, werden wir einige der Boilerplate-Codes löschen, die Vite für uns bereitgestellt hat.

Ändern Sie zuerst experimentell das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" anzeigt, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver angezeigt wird, der unter `http://localhost:3000` in Ihrem Browser ausgeführt wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

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

Als Nächstes werden wir unsere JavaScript-Fähigkeiten nutzen, um uns mit dem Schreiben von JSX und dem Arbeiten mit Daten in React etwas vertrauter zu machen. Wir werden darüber sprechen, wie man JSX-Elementen Attribute hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei ein `<button>` hinzuzufügen, das so aussieht:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button tut noch nichts, aber wir werden bald lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Pendants. Zum Beispiel wird das HTML-Attribut `class` in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrem Button eine `primary`-Klasse hinzufügen möchten, würden Sie dies so schreiben:

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

Speichern Sie Ihre Datei und prüfen Sie Ihren Browser. Sie sollten „Hello, React!“ angezeigt sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der `subject`-Variable lesen wollen, anstatt den wörtlichen String `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb von geschweiften Klammern in JSX einfügen; React wird es auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Folgendes ist eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {`${subject} :)`}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb von geschweiften Klammern geschrieben! Dies liegt daran, dass geschweifte Klammern einen einzelnen JavaScript-Ausdruck enthalten können und Kommentare als Teil eines JavaScript-Ausdrucks (und werden ignoriert) gültig sind. Sie können sowohl die `/* Block-Kommentarsyntax */` als auch die `// Zeilen-Kommentarsyntax` (mit einer abschließenden neuen Zeile) innerhalb von geschweiften Klammern verwenden.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute in reguläre Elemente übergeben werden, während Props in React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihre ersten Props.

Fügen Sie dem `<App />`-Komponentenaufruf einen Prop von `subject` mit einem Wert von `Clarice` hinzu. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx` lassen Sie uns die `App()`-Funktion noch einmal betrachten. Ändern Sie die Signatur der `App()`-Funktion so, dass sie `props` als Parameter akzeptiert, und loggen Sie `props` in die Konsole, sodass Sie es inspizieren können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

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

Speichern Sie Ihre Datei und prüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, eine nicht mehr definierte `subject`-Variable zu lesen. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` kommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten modernen Editoren tun das!), können Sie die eingebaute Kommentarfunktion verwenden — `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) — um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser Zeile auskommentiert. Dieses Mal sollten Sie Ihren
"Click me!"-Button alleine gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject`-Prop, das wir unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Kommentieren Sie die Zeile `<h1>Hello, {subject}!</h1>` aus und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, löschen Sie dann die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie jetzt mit "Hello, Clarice!" begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, ändert sich Ihr Text.

Für zusätzliche Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop in den `<App />`-Komponentenaufruf innerhalb von `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop innerhalb von `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React angelangt, einschließlich dessen, wie Sie es lokal installieren, eine Starter-App erstellen und die Grundlagen verstehen. Im nächsten Artikel werden wir damit beginnen, unsere erste richtige Anwendung zu entwickeln – eine Aufgabenliste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um Konflikte mit reservierten JavaScript-Wörtern zu vermeiden. Zum Beispiel wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute in Komponentenaufrufen geschrieben und werden in Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn React_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) ist der ultimative Einstieg in React 101 — der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140 interaktive Codierherausforderungen lösen und acht spaßige Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
