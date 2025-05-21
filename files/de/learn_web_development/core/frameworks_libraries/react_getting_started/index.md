---
title: Einstieg in React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel machen wir uns mit React vertraut. Wir werden ein wenig über seinen Hintergrund und Anwendungsfälle erfahren, eine einfache React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Start-App erstellen und verwenden – dabei lernen wir ein wenig darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> und der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Komandozeile</a>.
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

Wie im offiziellen Slogan gesagt wird, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um in bestimmte Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu entwickeln.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden oft in denselben Kontexten wie – und zur Lösung derselben Probleme wie – andere echte Webentwicklungsframeworks besprochen und verwendet. Wenn wir React als "Framework" bezeichnen, meinen wir es im umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die bei der Entwicklung von UIs durch Entwickler auftreten können. Dies wird durch die Verwendung von Komponenten erreicht – selbstständige, logische Codeeinheiten, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammen komponiert werden, um eine vollständige UI zu erstellen, und React nimmt Ihnen viel von der Rendering-Arbeit ab, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Anders als die anderen Frameworks, die in diesem Modul behandelt werden, erzwingt React keine strikten Regeln bezüglich Konventionen im Code oder der Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten für sie funktionieren, und React in jeder gewünschten Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App handhaben.

Obwohl React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, in eine Anwendung "einzusteigen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Vorteile für die Entwicklererfahrung einer React-App, wie das Schreiben von Schnittstellen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website lässt den darauf ausgeführten Code langsamer laufen, daher richten Entwickler eine solche Toolchain oft mit einem Build-Schritt ein. React hat zugegebenermaßen einen hohen Tooling-Bedarf, aber er kann erlernt werden.

In diesem Artikel konzentrieren wir uns auf den Anwendungsfall, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt Funktionen von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript kommt mit der Verwendung von [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code nebenbei leben kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Kopfzeilendeklaration ist als **JSX-Ausdruck** bekannt. React kann es verwenden, um das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Kopfzeile aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einbetten? Der JSX-Ansatz ermöglicht es uns, unsere Elemente wie bei HTML ineinander zu verschachteln:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keine Auswirkung auf Ihre Anwendung. Sie sind ein Signal für Sie (und Ihren Computer), dass die mehreren Codezeilen darin Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas umständlich aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck beginnt, nicht an dieselbe Position eingerückt ist wie sein entsprechendes Schlusstag.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn unser Header-Ausdruck kompiliert ist (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde er so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre UI selbst zu schreiben. Auf diese Weise verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwieriger zu lesen. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community glauben, dass die Lesbarkeit von JSX lohnend ist. Außerdem ist die moderne Frontend-Entwicklung fast immer mit einem Build-Prozess verbunden – Sie müssen die moderne Syntax auf ein Niveau herabstufen, damit sie mit älteren Browsern kompatibel ist, und Sie möchten möglicherweise Ihren Code durch {{Glossary("Minification", "Minifizierung")}} optimieren, um die Ladeleistung zu verbessern. Beliebte Tools wie Babel bringen bereits standardmäßig JSX-Unterstützung mit, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur verwirrend ist. Wenn Sie sich jedoch einmal daran gewöhnt haben, können Sie Benutzeroberflächen schneller und intuitiver entwickeln und ermöglichen es anderen, Ihren Code auf einen Blick besser zu verstehen.

Um mehr über JSX zu erfahren, lesen Sie den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Kommandozeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem Sie einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopieren, aber die Verwendung von Vite ermöglicht es Ihnen, mehr Zeit mit dem Erstellen Ihrer App und weniger Zeit mit der Einrichtung zu verbringen.

### Anforderungen

Um Vite nutzen zu können, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, die neueste Long-Term-Support-Version (LTS) zu verwenden, wann immer Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie im Terminal Folgendes aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, sehen Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie in dieser Reihe von Tutorials npm verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen über npm und Yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Gleichwertigkeit mit Terminalbefehlen auf Unix/macOS-Systemen zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. **Gitbash** (das Teil des [Git for Windows-Toolsets](https://gitforwindows.org/) ist) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Crashkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen.

Denken Sie auch daran, dass React und ReactDOM Apps produzieren, die nur in einer relativ modernen Reihe von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Siehe die folgenden Links für weitere Informationen:

- ["About npm" auf dem npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" auf dem npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Initialisieren Ihrer App

Der npm-Paketmanager wird mit einem `create`-Befehl geliefert, mit dem Sie neue Projekte von Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App von Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie mit `cd` an den Ort navigieren, an dem Ihre App auf Ihrem Computer gespeichert werden soll, und führen Sie dann Folgendes im Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dadurch wird ein `moz-todo-react`-Verzeichnis mit Vites `react`-Vorlage erstellt.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument gibt Vite an, seine React-Vorlage zu verwenden.

Ihr Terminal hat einige Meldungen gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes im Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir einige Kommandozeilenflags zur Standardvorgabe von Vite hinzu, um die App in unserem Browser zu öffnen, sobald der Server startet, und Port 3000 zu verwenden.

Führen Sie Folgendes im Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox macOS geöffnet bei localhost:3000, der eine Anwendung zeigt, die aus Vites React-Vorlage erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite gibt uns alles, was wir brauchen, um eine React-Anwendung zu entwickeln. Seine anfängliche Dateistruktur sieht folgendermaßen aus:

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

**`index.html`** ist die wichtigste Datei auf der obersten Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements anpassen, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser geliefert werden, ohne von Vites Build-Tooling verarbeitet zu werden. Zurzeit enthält es nur ein Vite-Logo.

Im **`src`**-Verzeichnis werden wir die meiste Zeit verbringen, da es den Quellcode unserer Anwendung enthält. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis die Erweiterung `.jsx` haben. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie signalisiert Vite, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns befüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie sich über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten informieren. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassen unseres Dev-Skriptes

Bevor wir weitermachen, möchten Sie möglicherweise Ihre `package.json`-Datei ein wenig ändern, damit Sie die `--open`- und `--port`-Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Einstellung öffnet sich Ihre App bei jedem Ausführen von `npm run dev` in Ihrem Browser unter `http://localhost:3000`.

> [!NOTE]
> Sie _brauchen_ hier nicht das extra `--`, weil wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer Gesamtanwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie erfüllen einen einzigen, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, die `App()`-Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Untersuchen wir diese Anweisungen näher.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` bzw. `/` beginnen und sie am Ende mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verknüpft ist. Beachten Sie, dass es keinen Variablennamen und keine `from`-Angabe gibt. Dies nennt man einen [_Seiteneffekts-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) – er importiert keinen Wert in die JavaScript-Datei, aber er signalisiert Vite, die referenzierte CSS-Datei zum endgültigen Code-Output hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während die meisten der JavaScript-Community {{Glossary("camel_case", "niedrige CamelCase")}}-Namen mögen wie `helloWorld`, verwenden React-Komponenten Pascal Case (oder Upper Camel Case) Variablennamen, wie `HelloWorld`, um klar zu machen, dass ein gegebener JSX-Ausdruck eine React-Komponente ist und nicht ein reguläres HTML-Tag. Würden Sie die `App()`-Funktion in `app()` umbenennen, würde Ihr Browser einen Fehler ausgeben.

Sehen wir uns `App()` genauer an.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich an den DOM rendert.

Direkt unter dem `return`-Schlüsselwort ist ein spezielles Stück Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`-Elemente im Browser zu rendern. Sie sehen Fragmente in vielen React-Anwendungen.

### Die `export`-Anweisung

Es gibt eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die `<App />`-Komponente verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, alle JavaScript-Module und anderen Assets zu importieren, die sie benötigt, um zu laufen.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, weil sie später in der Datei referenziert werden. Wir geben keinen Pfad oder eine Erweiterung beim Importieren dieser Bibliotheken an, da sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgeführt. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Dann importieren wir unsere `App()`-Funktion und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die `createRoot()`-Funktion auf, die das Wurzelelement unserer Anwendung definiert. Diese nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()`-Methode an den `createRoot()`-Aufruf an, dabei wird der JSX-Ausdruck übergeben, den wir innerhalb unseres Wurzelelements rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, sagen wir React, dass die Funktion `App()` _aufgerufen_ werden soll, welche die Komponente `App` _innerhalb_ des Wurzelelements rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können diese React-APIs nachlesen, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neu anfangen

Bevor wir unsere App bauen, werden wir einige der Boilerplate-Codes löschen, die Vite für uns bereitgestellt hat.

Zuerst ändern Sie als Experiment das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" lautet, und speichern Sie Ihre Datei. Sie werden bemerken, dass diese Änderung sofort auf dem Entwicklungsserver in `http://localhost:3000` in Ihrem Browser gerendert wird. Beachten Sie dies, während Sie an Ihrer App arbeiten.

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

Als Nächstes werden wir unsere JavaScript-Fähigkeiten verwenden, um uns ein bisschen mehr im Schreiben von JSX und im Arbeiten mit Daten in React zu üben. Wir sprechen darüber, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten in Komponenten mit Props übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>`-Element unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei hinzuzufügen, wie dies:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit den Worten `Click me!`. Der Button tut jetzt noch nichts, aber wir werden bald lernen, wie wir unserer App Interaktivität hinzufügen.

Einige Attribute unterscheiden sich von ihren HTML-Pendants. Zum Beispiel übersetzt sich das `class`-Attribut in HTML in `className` in JSX. Dies ist, weil `class` ein reserviertes Wort in JavaScript ist, und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrem Button eine `primary`-Klasse hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalte

Anders als HTML erlaubt es JSX uns, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Lassen Sie uns eine Variable namens `subject` direkt über der `App()`-Funktion in Ihrer `App.jsx`-Datei deklarieren:

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

Die geschwungenen Klammern um `subject` sind ein weiteres Merkmal der Syntax von JSX. Die geschwungenen Klammern sagen React, dass wir den Wert der `subject`-Variablen lesen möchten, anstatt den Literalstring `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb geschwungener Klammern in JSX platzieren; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Im Folgenden sind eine Reihe von Beispielen, mit Kommentaren darüber, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb von geschwungenen Klammern geschrieben! Dies ist, weil geschwungene Klammern einen einzelnen JavaScript-Ausdruck enthalten können, und Kommentare gültig als Teil eines JavaScript-Ausdrucks sind (und ignoriert werden). Sie können sowohl `/* Blockkommentar-Syntax */` als auch `// Zeilenkommentar-Syntax` (mit einem nachfolgenden Zeilenumbruch) innerhalb von geschwungenen Klammern verwenden.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute an einfache Elemente übergeben werden, Props aber an React-Komponenten.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten an untergeordnete Komponenten weitergegeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihren ersten Prop.

Fügen Sie der `<App />`-Komponentenaufruf ein Prop namens `subject` hinzu, mit dem Wert `Clarice`. Wenn Sie fertig sind, sollte es etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx` schauen wir uns die `App()`-Funktion erneut an. Ändern Sie die Signatur der `App()`-Funktion, sodass sie `props` als Parameter akzeptiert, und loggen Sie `props` in die Konsole, damit Sie es inspizieren können. Löschen Sie auch die `subject`-Konstante; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte so aussehen:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie werden einen leeren Hintergrund ohne Inhalt sehen. Dies liegt daran, dass wir versuchen, auf eine `subject`-Variable zuzugreifen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten modernen Editoren tun das!), können Sie dessen integrierte Kommentierungsabkürzung verwenden – `Ctrl + /` (auf Windows) oder `Cmd + /` (auf macOS) – um Kommentare schneller zu erstellen.

Speichern Sie die Datei mit dieser Zeile auskommentiert. Dieses Mal sollten Sie Ihren
"Click me!"-Button allein sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die ungefähr so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem `subject`-Prop, das wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht deren Wert. Komponenten-Props in React werden immer auf diese Weise in Objekte gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Kommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Zur zusätzlichen Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop zur `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React angekommen, einschließlich der lokalen Installation, der Erstellung einer Start-App und der Funktionsweise der Grundlagen. Im nächsten Artikel beginnen wir mit dem Bau unserer ersten richtigen Anwendung – einem Aufgabenlistenplaner. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In React:

- Komponenten können die Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien exportieren.
- Komponenten-Funktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschwungene Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, um nicht mit reservierten JavaScript-Worten in Konflikt zu geraten. Zum Beispiel, `class` in HTML wird zu `className` in JSX.
- Props werden genauso wie Attribute innerhalb von Komponentenaufrufen geschrieben und an die Komponenten übergeben.

## Siehe auch

- [Learn React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) _Learn React_ Kurs ist das ultimative React 101 – der perfekte Einstiegspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht unterhaltsame Projekte aufbauen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
