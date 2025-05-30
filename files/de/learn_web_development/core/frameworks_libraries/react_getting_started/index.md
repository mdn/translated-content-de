---
title: Einstieg in React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel sagen wir "Hallo" zu React. Wir werden ein wenig über seinen Hintergrund und seine Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und damit spielen – dabei lernen wir ein wenig darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Eine lokale React-Entwicklungsumgebung einrichten, eine Starter-App erstellen und
          die grundlegende Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es in seinem offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird zusammen mit anderen Bibliotheken verwendet, um auf bestimmten Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu entwickeln.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden häufig in denselben Kreisen diskutiert und zur Lösung derselben Probleme verwendet wie andere echte Webentwicklungs-Frameworks. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das primäre Ziel von React ist es, die Fehler zu minimieren, die auftreten, wenn Entwickler UIs erstellen. Dies geschieht durch die Verwendung von Komponenten – eigenständigen, logischen Codeteilen, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengefügt werden, um eine vollständige UI zu erstellen, und React abstrahiert viel von der Rendering-Arbeit, sodass Sie sich auf das UI-Design konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks zwingt React keine strengen Regeln für Codekonventionen oder Dateiorganisation auf. Dadurch können Teams Konventionen festlegen, die für sie am besten funktionieren, und React in der von ihnen gewünschten Weise übernehmen. React kann einen einzigen Button, ein paar Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verwalten.

Obwohl React _für_ [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, es zu einer Anwendung "hinzuzufügen" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React entwickeln.

Darüber hinaus erfordern viele der Entwicklerlebnisvorteile einer React-App, wie das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Wenn Sie einem Website einen Compiler wie Babel hinzufügen, wird der darauf enthaltene Code langsam ausgeführt, daher richten Entwickler solche Tools oft mit einem Build-Schritt ein. React hat zwar ein höheres Tool-Anforderungsniveau, aber es kann gelernt werden.

Dieser Artikel wird sich auf den Anwendungsfall konzentrieren, React zu verwenden, um die gesamte Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu rendern.

## Wie verwendet React JavaScript?

React nutzt die Features von modernem JavaScript für viele seiner Muster. Seine größte Abweichung von JavaScript erfolgt durch die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code daneben existieren kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Heading-Konstante ist als **JSX-Ausdruck** bekannt. React kann sie verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in einem [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einbetten? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht einzigartig für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie sind ein Signal für Sie (und Ihren Computer), dass die mehrzeiligen Codes darin Teil desselben Ausdrucks sind. Sie können den Header-Ausdruck ebenso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch irgendwie ungeschickt aus, da das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck startet, nicht zur gleichen Position wie das entsprechende schließende Tag eingerückt ist.

Natürlich kann Ihr Browser JSX ohne Hilfe nicht lesen. Wenn es kompiliert wird (unter Verwendung eines Tools wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde unser Header-Ausdruck folgendermaßen aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Indem Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community finden, dass die Lesbarkeit von JSX lohnenswert ist. Und moderne Frontend-Entwicklung beinhaltet ohnehin fast immer einen Build-Prozess – Sie müssen moderne Syntax für die Kompatibilität mit älteren Browsern herunterstufen und möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel unterstützen JSX bereits out-of-the-box, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich jedoch damit wohlfühlen, können Sie Benutzeroberflächen schneller und intuitiver erstellen und andere können Ihren Codeübersicht auf einen Blick besser verstehen.

Um mehr über JSX zu erfahren, schauen Sie sich den Artikel [Markup mit JSX schreiben](https://react.dev/learn/writing-markup-with-jsx) des React-Teams an.

## Einrichten Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Kommandozeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem man einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert, aber mit Vite können Sie mehr Zeit mit dem Aufbau Ihrer App verbringen und weniger Zeit mit der Einrichtung.

> [!NOTE]
> Sie können mit dem Schreiben von React-Code beginnen, ohne _jegliche_ lokale Einrichtung vorzunehmen, indem Sie das Scrimba-Tutorial [Erster React-Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> durcharbeiten.
> Fühlen Sie sich frei, es auszuprobieren, bevor Sie fortfahren.

### Anforderungen

Um Vite zu verwenden, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Ab Vite 5.0 ist mindestens Node-Version 18 oder höher erforderlich, und es ist eine gute Idee, die neueste Langzeit-Support (LTS)-Version zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node enthält npm (den Node-Paketmanager).

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, wird eine Fehlermeldung angezeigt. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in diesen Tutorials davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und Yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um mit Unix/macOS-Terminal gleichzuziehen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. **Gitbash** (das als Teil des [Git für Windows-Tools](https://gitforwindows.org/)) oder das **[Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) eignen sich beide. Weitere Informationen hierzu und zu Terminal-Befehlen im Allgemeinen finden Sie im [Crash-Kurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Denken Sie auch daran, dass React und ReactDOM Anwendungen produzieren, die nur in einem recht modernen Set an Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durcharbeiten.

Weitere Informationen finden Sie in den folgenden Links:

- ["Über npm" im npm-Blog](https://docs.npmjs.com/about-npm/)
- ["Vorstellung von npx" im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite-Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager enthält einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus der Standard-React-Vorlage von Vite zu erstellen. Stellen Sie sicher, dass Sie `cd` in das Verzeichnis Ihrer Wahl, in dem Ihre App gespeichert werden soll, wechseln und führen Sie dann folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react`-Verzeichnis unter Verwendung der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das `--template react`-Argument sagt Vite, dass es seine React-Vorlage verwenden soll.

Ihr Terminal hat einige Nachrichten gedruckt, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie die folgenden Befehle in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Vorgang abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Kommandozeilenflags zu Vite's Standardvorschlag hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server startet, und den Port 3000 zu verwenden.

Führen Sie folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox macOS geöffnet auf localhost:3000, die eine Anwendung zeigt, die aus der React-Vorlage von Vite erstellt wurde](default-vite.png)

### Anwendungsstruktur

Vite bietet uns alles, was wir zur Entwicklung einer React-Anwendung benötigen. Seine anfängliche Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Während unseres Tutorials müssen Sie diese Datei nicht bearbeiten, aber Sie sollten den Text im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für die Barrierefreiheit.

Das **`public`**-Verzeichnis enthält statische Dateien, die direkt an Ihren Browser weitergeleitet werden, ohne von Vites Build-Tool verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`**-Verzeichnis ist der Ort, an dem wir die meiste Zeit verbringen, da dort der Quellcode unserer Anwendung gespeichert ist. Sie werden bemerken, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält – sie weist Vite an, die JSX-Syntax in JavaScript zu verwandeln, das Ihr Browser verstehen kann. Das `src/assets`-Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json`- und `package-lock.json`-Dateien enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht einzigartig für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in der npm-Dokumentation nachlesen. Wir sprechen auch über `package.json` in unserem [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)-Tutorial.

### Anpassung unseres Entwicklungs-Skriptes

Bevor wir fortfahren, möchten Sie möglicherweise Ihre `package.json`-Datei ein wenig ändern, damit Sie nicht jedes Mal, wenn Sie `npm run dev` ausführen, die Flags `--open` und `--port` angeben müssen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts`-Objekt. Ändern Sie den `"dev"`-Schlüssel so, dass er folgendermaßen aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Anpassung öffnet sich Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, im Browser unter `http://localhost:3000`.

> [!NOTE]
> Sie _brauchen_ hier kein zusätzliches `--`, da wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschung unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: Sie dienen einem klaren, offensichtlichen Zweck.

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

Die `App.jsx`-Datei besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, der `App()`-Funktion in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen oben in der Datei erlauben es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der `react`-Bibliothek. Hooks sind eine Möglichkeit, React-Funktionen innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` und `/` beginnen und dass sie mit der `.svg`-Erweiterung enden. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien verweisen, anstatt auf npm-Pakete.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />`-Komponente verbunden ist. Beachten Sie, dass kein Variablenname und keine `from`-Anweisung vorhanden ist. Dies wird als [_Seiteneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – er importiert keinen Wert in die JavaScript-Datei, aber er sagt Vite, die referenzierte CSS-Datei in die endgültige Codeausgabe aufzunehmen, damit sie im Browser verwendet werden kann.

### Die `App()`-Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App`-Komponente definiert. Während der Großteil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}}-Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal Case (oder Upper Camel Case) Variablennamen wie `HelloWorld`, um klar zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()`-Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler werfen.

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

Die `App()`-Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich in den DOM rendert.

Direkt unter dem `return`-Schlüsselwort befindet sich ein besonderes Syntax-Fragment: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente erlauben es uns, dies zu tun, ohne dass wir willkürliche `<div>`-Tags im Browser rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Es gibt eine weitere Zeile Code nach der `App()`-Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()`-Funktion anderen Modulen zugänglich. Wir werden später mehr darüber sprechen.

## Gehen wir zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />`-Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, dass alle JavaScript-Module und andere Assets importiert werden, die sie zum Ausführen benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den `react`- und `react-dom`-Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder eine Erweiterung, wenn wir diese Bibliotheken importieren, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json`-Datei aufgelistet. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Wir importieren dann unsere `App()`-Funktion und `index.css`, die globale Stile enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die `createRoot()`-Funktion auf, die das Root-Element unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element, innerhalb dessen wir unsere React-App rendern möchten. In diesem Fall ist es das DOM-Element mit einer ID von `root`. Schließlich verketten wir die `render()`-Methode mit dem `createRoot()`-Aufruf und übergeben ihr den JSX-Ausdruck, den wir im Root-Element rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, die `App()`-Funktion aufzurufen, die die `App`-Komponente im Root-Element rendert.

> **Notiz:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern dabei, potenzielle Probleme in ihrem Code zu erkennen.

Wenn Sie möchten, können Sie sich über diese React-APIs informieren:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Einen Neustart machen

Bevor wir mit dem Aufbau unserer App beginnen, löschen wir einigen Boilerplate-Code, den Vite für uns bereitgestellt hat.

Ändern Sie zuerst experimentell das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx`, sodass es "Hello, World!" anzeigt, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver gerendert wird, der unter `http://localhost:3000` in Ihrem Browser läuft. Behalten Sie dies im Kopf, wenn Sie an Ihrer App arbeiten.

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

Als Nächstes verwenden wir unsere JavaScript-Fähigkeiten, um ein wenig vertrauter mit dem Schreiben von JSX zu werden und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attributen zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalt aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props an Komponenten übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können Attribute haben, genau wie HTML-Elemente. Versuchen Sie, ein `<button>` unter dem `<h1>`-Element in Ihrer `App.jsx`-Datei hinzuzufügen, etwa so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, werden Sie einen Button mit dem Text `Click me!` sehen. Der Button macht bisher nichts, aber wir werden bald lernen, wie man Interaktivität zu unserer App hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das `class`-Attribut in HTML in JSX zu `className`. Der Grund hierfür ist, dass `class` ein reserviertes Wort in JavaScript ist und dass JSX eine JavaScript-Erweiterung ist. Wenn Sie eine `primary`-Klasse zu Ihrem Button hinzufügen wollten, würden Sie es folgendermaßen schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML erlaubt JSX uns, Variablen und andere JavaScript-Ausdrücke direkt neben unserem anderen Inhalt zu schreiben. Deklarieren wir eine Variable namens `subject` direkt oberhalb der `App()`-Funktion in Ihrer `App.jsx`-Datei:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hello, React!" angezeigt sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der Syntax von JSX. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen und nicht den Literalstring `"subject"` rendern wollen. Sie können jeden gültigen JavaScript-Ausdruck in geschweifte Klammern in JSX setzen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als endgültigen Inhalt rendern. Im Folgenden ist eine Reihe von Beispielen, mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {`${subject} :)`}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Auch Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Das liegt daran, dass geschweifte Klammern einen einzigen JavaScript-Ausdruck enthalten können und Kommentare als Teil eines JavaScript-Ausdrucks gültig sind (und ignoriert werden). Sie können sowohl `/* Block-Kommentar-Syntax */` als auch `// Zeilen-Kommentar-Syntax` (mit einem folgenden Zeilenumbruch) innerhalb geschweifter Klammern verwenden.

### Component Props

**Props** sind eine Möglichkeit, Daten an eine React-Komponente zu übergeben. Ihre Syntax ist identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht jedoch darin, dass Attribute an einfache Elemente, Props jedoch an React-Komponenten übergeben werden.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten an Kindkomponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihre ersten Props.

Fügen Sie der `<App />`-Komponentenaufruf ein Prop namens `subject` mit dem Wert `Clarice` hinzu. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()`-Funktion erneut besuchen. Ändern Sie die Signatur von `App()`, damit sie `props` als Parameter akzeptiert, und protokollieren Sie `props` in der Konsole, um sie zu inspizieren. Löschen Sie auch die Konstante `subject`; wir brauchen sie nicht mehr. Ihre `App.jsx`-Datei sollte nun so aussehen:

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
> Wenn Ihr Code-Editor in der Lage ist, JSX zu parsen (die meisten modernen Editoren können das!), können Sie seine integrierte Kommentarfunktion verwenden – `Strg + /` (auf Windows) oder `Cmd + /` (auf macOS) –, um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser Zeile, die auskommentiert ist. Dieses Mal sollten Sie nur Ihren "Click me!"-Button gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Nachricht, die so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject`-Prop, den wir zu unserem `<App />`-Komponentenaufruf hinzugefügt haben, und der String `Clarice` entspricht seinem Wert. Komponenten-Props in React werden immer auf diese Weise zu Objekten gesammelt.

Lassen Sie uns diesen `subject`-Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, und löschen Sie dann die `console.log()`-Anweisung. Ihr Code sollte so aussehen:

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

Zusätzlich zur Übung könnten Sie versuchen, einen zusätzlichen `greeting`-Prop zum `<App />`-Komponentenaufruf in `main.jsx` hinzuzufügen und ihn zusammen mit dem `subject`-Prop in `App.jsx` zu verwenden.

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf React angelangt, was das lokale Installieren, Erstellen einer Starter-App und die grundlegende Funktionsweise angeht. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu bauen – eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In React:

- Komponenten können Module importieren, die sie benötigen, und müssen sich am Ende ihrer Dateien selbst exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie in geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit JavaScript-Reserviertwörtern kollidieren. Beispielsweise wird `class` in HTML zu `className` in JSX.
- Props werden wie Attribute innerhalb von Komponentenaufrufen geschrieben und an Komponenten übergeben.

## Siehe auch

- [Lernen Sie React](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs [Learn React](https://scrimba.com/?via=mdn) von _Scrimba_ ist das ultimative React 101 – der perfekte Ausgangspunkt für jeden React-Anfänger. Lernen Sie die Grundlagen von modernem React, indem Sie über 140 interaktive Codierungsherausforderungen lösen und acht unterhaltsame Projekte bauen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
