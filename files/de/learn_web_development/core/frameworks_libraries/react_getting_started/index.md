---
title: Erste Schritte mit React
short-title: Erste Schritte mit React
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 9e69ea9db9ec62df101e83cbc07d447e1984c57e
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel begrüßen wir React. Wir erfahren ein wenig über seinen Hintergrund und seine Anwendungsfälle, richten auf unserem lokalen Computer eine grundlegende React-Toolchain ein und erstellen und erkunden eine einfache Starter-App. Dabei lernen wir auch etwas darüber, wie React funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
          Eine lokale React-Entwicklungsumgebung einrichten, eine Starter-App erstellen und
          die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie der offizielle Slogan besagt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal ausschließlich für das Web gedacht. Es wird mit anderen Bibliotheken verwendet, um für bestimmte Umgebungen zu rendern. Beispielsweise kann [React Native](https://reactnative.dev/) verwendet werden, um mobile Anwendungen zu erstellen.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden häufig in denselben Kontexten wie andere echte Webentwicklungs-Frameworks diskutiert – und zur Lösung derselben Probleme eingesetzt. Wenn wir React als „Framework“ bezeichnen, verwenden wir dieses umgangssprachliche Verständnis.

Das Hauptziel von React besteht darin, die Fehler zu minimieren, die auftreten, wenn Entwickler Benutzeroberflächen erstellen. Dies wird durch die Verwendung von Komponenten erreicht – eigenständigen, logischen Codeteilen, die einen Abschnitt der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengesetzt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React abstrahiert einen Großteil der Rendering-Arbeit, sodass Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen in diesem Modul behandelten Frameworks erzwingt React keine strikten Regeln zu Codekonventionen oder zur Dateiorganisation. Dadurch können Teams Konventionen festlegen, die für sie am besten funktionieren, und React auf jede gewünschte Weise einsetzen. React kann eine einzelne Schaltfläche, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verarbeiten.

Obwohl React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, lässt es sich nicht so einfach in eine Anwendung „einfügen“ wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Außerdem erfordern viele Vorteile einer React-App für die Entwicklererfahrung, etwa das Schreiben von Benutzeroberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website führt dazu, dass der Code darauf langsam ausgeführt wird. Daher richten Entwickler solche Werkzeuge häufig mit einem Build-Schritt ein. React hat wohl hohe Anforderungen an die Tooling-Umgebung, kann aber erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React mit Unterstützung von [Vite](https://vite.dev/), einem modernen Front-End-Build-Tool, zum Rendern der gesamten Benutzeroberfläche einer Anwendung zu verwenden.

## Wie verwendet React JavaScript?

React nutzt für viele seiner Muster Funktionen des modernen JavaScript. Die größte Abweichung von JavaScript besteht in der Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die Syntax von JavaScript, sodass HTML-ähnlicher Code direkt daneben stehen kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschriftenkonstante wird als **JSX-Ausdruck** bezeichnet. React kann sie verwenden, um dieses [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tag in unserer App zu rendern.

Angenommen, wir möchten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag einschließen. Der JSX-Ansatz erlaubt uns, unsere Elemente ineinander zu verschachteln, genau wie bei HTML:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorherigen Snippet sind nicht spezifisch für JSX und haben keine Auswirkungen auf Ihre Anwendung. Sie signalisieren Ihnen (und Ihrem Computer), dass die mehreren darin enthaltenen Codezeilen Teil desselben Ausdrucks sind. Sie könnten den `header`-Ausdruck genauso gut so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas unbeholfen aus, weil das [`<header>`](/de/docs/Web/HTML/Reference/Elements/header)-Tag, das den Ausdruck beginnt, nicht an derselben Position eingerückt ist wie das entsprechende schließende Tag.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn unser `header`-Ausdruck kompiliert wird (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), würde er so aussehen:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierungsschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Dabei verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwerer lesbar. Die Kompilierung ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community sind der Ansicht, dass sich die Lesbarkeit von JSX lohnt. Außerdem umfasst moderne Front-End-Entwicklung ohnehin fast immer einen Build-Prozess – Sie müssen moderne Syntax abwärtskompilieren, um mit älteren Browsern kompatibel zu sein, und möglicherweise möchten Sie Ihren Code {{Glossary("Minification", "minifizieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten JSX-Unterstützung bereits standardmäßig, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, sofern Sie dies nicht möchten.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich jedoch daran gewöhnt haben, können Sie damit Benutzeroberflächen schneller und intuitiver erstellen, und andere können Ihre Codebasis auf einen Blick besser verstehen.

Weitere Informationen zu JSX finden Sie im Artikel des React-Teams [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx).

## Ihre erste React-App einrichten

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir verwenden Vite, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem einige [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine HTML-Datei kopiert werden. Mit Vite können Sie jedoch mehr Zeit mit dem Erstellen Ihrer App und weniger Zeit mit der Einrichtung verbringen.

> [!NOTE]
> Sie können React-Code schreiben, ohne _irgendeine_ lokale Einrichtung vorzunehmen, indem Sie Scrimbas [First React Code](https://scrimba.com/learn-react-c0e/~03uo?via=mdn)-Scrim durcharbeiten.
> Probieren Sie sie gerne aus, bevor Sie fortfahren.

### Anforderungen

Um Vite zu verwenden, muss [Node.js](https://nodejs.org/en/) installiert sein. Seit Vite 5.0 wird mindestens Node-Version 18 oder höher benötigt. Wenn möglich, sollten Sie die neueste Long-Term-Support-Version (LTS) verwenden. Am 24. Oktober 2023 war Node 20 die neueste LTS-Version. Node enthält npm, den Node-Paketmanager.

Um Ihre Node-Version zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Falls es nicht installiert ist, sehen Sie eine Fehlermeldung. Befolgen Sie zum Installieren von Node die Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen in dieser Tutorial-Reihe davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie Software installieren, die Ihnen für die Verwendung der in diesem Tutorial erwähnten Terminalbefehle eine mit Unix/macOS vergleichbare Terminalumgebung bietet. **Git Bash** (als Teil des [git for Windows toolset](https://gitforwindows.org/)) oder das **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Beachten Sie außerdem, dass React und ReactDOM bei der Bearbeitung dieser Tutorials Apps erzeugen, die nur in einer recht modernen Auswahl von Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren.

Weitere Informationen finden Sie hier:

- [„About npm“ im npm-Blog](https://docs.npmjs.com/about-npm/)
- [„Introducing npx“ im npm-Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Ihre App initialisieren

Der npm-Paketmanager enthält einen `create`-Befehl, mit dem Sie neue Projekte aus Vorlagen erstellen können. Wir können ihn verwenden, um eine neue App aus Vites Standard-React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie mit `cd` zu dem Ort wechseln, an dem Ihre App auf Ihrem Computer liegen soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dadurch wird ein Verzeichnis namens `moz-todo-react` mit Vites `react`-Vorlage erstellt.

> [!NOTE]
> Das `--` ist erforderlich, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` weist Vite an, seine React-Vorlage zu verwenden.

Wenn dieser Befehl erfolgreich war, hat Ihr Terminal einige Meldungen ausgegeben. Sie sollten Text sehen, der Sie dazu auffordert, mit `cd` in Ihr neues Verzeichnis zu wechseln, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier fügen wir Vites Standardvorschlag einige Befehlszeilen-Flags hinzu, damit die App im Browser geöffnet wird, sobald der Server startet, und um Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server gestartet ist, sollten Sie einen neuen Browser-Tab mit Ihrer React-App sehen:

![Screenshot von Firefox unter macOS, geöffnet bei localhost:3000, mit einer Anwendung aus Vites React-Vorlage](default-vite.png)

### Anwendungsstruktur

Vite stellt uns alles bereit, was wir für die Entwicklung einer React-Anwendung benötigen. Die anfängliche Dateistruktur sieht so aus:

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

**`index.html`** ist die wichtigste Datei auf der obersten Ebene. Vite fügt Ihren Code in diese Datei ein, damit Ihr Browser ihn ausführen kann. Während unseres Tutorials müssen Sie diese Datei nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements in dieser Datei so ändern, dass er den Titel Ihrer Anwendung widerspiegelt. Präzise Seitentitel sind für die Barrierefreiheit wichtig.

Das Verzeichnis **`public`** enthält statische Dateien, die direkt an Ihren Browser ausgeliefert werden, ohne von Vites Build-Tooling verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Im Verzeichnis **`src`** verbringen wir die meiste Zeit, da sich dort der Quellcode unserer Anwendung befindet. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis mit der Erweiterung `.jsx` enden. Diese Erweiterung ist für jede Datei erforderlich, die JSX enthält – sie weist Vite an, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser verstehen kann. Das Verzeichnis `src/assets` enthält das React-Logo, das Sie im Browser gesehen haben.

Die Dateien `package.json` und `package-lock.json` enthalten Metadaten zu unserem Projekt. Diese Dateien sind nicht spezifisch für React-Anwendungen: Vite hat `package.json` für uns ausgefüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien überhaupt nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in der npm-Dokumentation über [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/configuring-npm/package-lock-json/) lesen. Wir behandeln `package.json` auch in unserem Tutorial [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

### Unser Dev-Skript anpassen

Bevor wir weitermachen, möchten Sie möglicherweise Ihre Datei `package.json` etwas ändern, damit Sie nicht jedes Mal die Flags `--open` und `--port` übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und suchen Sie das Objekt `scripts`. Ändern Sie den Schlüssel `"dev"` so, dass er wie folgt aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Damit wird Ihre App bei jeder Ausführung von `npm run dev` unter `http://localhost:3000` in Ihrem Browser geöffnet.

> [!NOTE]
> Sie benötigen hier kein zusätzliches `--`, da wir Argumente direkt an `vite` übergeben und nicht an ein vordefiniertes npm-Skript.

## Unsere erste React-Komponente erkunden – `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung rendert. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Sie erfüllen einen einzigen, eindeutigen Zweck.

Öffnen wir `src/App.jsx`, da unser Browser uns auffordert, diese Datei zu bearbeiten. Diese Datei enthält unsere erste Komponente, `<App />`:

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

Die Datei `App.jsx` besteht aus drei Hauptteilen: einigen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisungen oben, der Funktion `App()` in der Mitte und einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung unten. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import`-Anweisungen am Anfang der Datei erlauben `App.jsx`, Code zu verwenden, der an anderer Stelle definiert wurde. Schauen wir uns diese Anweisungen genauer an.

```jsx
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState`-Hook aus der Bibliothek `react`. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu verwenden. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade jeweils mit `./` und `/` beginnen und am Ende mit der Erweiterung `.svg` enden. Das zeigt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien statt auf npm-Pakete verweisen.

Die letzte Anweisung importiert das CSS, das zu unserer `<App />`-Komponente gehört. Beachten Sie, dass es weder einen Variablennamen noch eine `from`-Direktive gibt. Dies wird als [_Side-Effect-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet – er importiert keinen Wert in die JavaScript-Datei, weist Vite jedoch an, die referenzierte CSS-Datei zur endgültigen Codeausgabe hinzuzufügen, damit sie im Browser verwendet werden kann.

### Die Funktion `App()`

Nach den Importen folgt eine Funktion mit dem Namen `App()`, die die Struktur der Komponente `App` definiert. Während die meisten JavaScript-Entwickler Namen in {{Glossary("camel_case", "lower camel case")}} wie `helloWorld` bevorzugen, verwenden React-Komponenten Variablennamen in PascalCase (oder upper camel case) wie `HelloWorld`, damit deutlich wird, dass ein bestimmtes JSX-Element eine React-Komponente und kein gewöhnliches HTML-Tag ist. Wenn Sie die Funktion `App()` in `app()` umbenennen würden, würde Ihr Browser einen Fehler ausgeben.

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

Die Funktion `App()` gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich im DOM rendert.

Direkt unter dem Schlüsselwort `return` befindet sich ein besonderes Stück Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einzelnes JSX-Element zurückgeben, und Fragmente ermöglichen uns dies, ohne beliebige `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export`-Anweisung

Nach der Funktion `App()` folgt noch eine Codezeile:

```jsx
export default App;
```

Diese Export-Anweisung stellt unsere Funktion `App()` anderen Modulen zur Verfügung. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Öffnen wir `src/main.jsx`, denn dort wird die Komponente `<App />` verwendet. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfangs so aus:

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

Wie bei `App.jsx` beginnt die Datei mit dem Import aller JavaScript-Module und sonstigen Ressourcen, die sie zum Ausführen benötigt.

Die ersten beiden Anweisungen importieren `StrictMode` und `createRoot` aus den Bibliotheken `react` und `react-dom`, da sie später in der Datei referenziert werden. Beim Importieren dieser Bibliotheken schreiben wir weder einen Pfad noch eine Erweiterung, da es sich nicht um lokale Dateien handelt. Tatsächlich sind sie in unserer Datei `package.json` als Abhängigkeiten aufgeführt. Achten Sie beim Durcharbeiten dieser Lektion auf diesen Unterschied!

Anschließend importieren wir unsere Funktion `App()` und `index.css`, das globale Stile enthält, die auf unsere gesamte App angewendet werden.

Dann rufen wir die Funktion `createRoot()` auf, die den Wurzelknoten unserer Anwendung definiert. Sie erhält als Argument das DOM-Element, in dem unsere React-App gerendert werden soll. In diesem Fall ist das das DOM-Element mit der ID `root`. Abschließend verketten wir die Methode `render()` mit dem Aufruf von `createRoot()` und übergeben ihr den JSX-Ausdruck, den wir innerhalb unserer Wurzel rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, weisen wir React an, die _Funktion_ `App()` aufzurufen, die die _Komponente_ `App` innerhalb des Wurzelknotens rendert.

> [!NOTE]
> `<App />` wird innerhalb einer speziellen `<React.StrictMode>`-Komponente gerendert. Diese Komponente hilft Entwicklern dabei, potenzielle Probleme in ihrem Code zu erkennen.

Sie können bei Bedarf mehr über diese React-APIs lesen:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Neu beginnen

Bevor wir mit dem Erstellen unserer App beginnen, löschen wir einen Teil des Boilerplate-Codes, den Vite uns bereitgestellt hat.

Ändern Sie zunächst als Experiment das [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element in `App.jsx` so, dass es „Hello, World!“ enthält, und speichern Sie dann Ihre Datei. Sie werden feststellen, dass diese Änderung sofort auf dem Entwicklungsserver unter `http://localhost:3000` in Ihrem Browser gerendert wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

Den restlichen Code werden wir nicht verwenden! Ersetzen Sie den Inhalt von `App.jsx` durch Folgendes:

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

Als Nächstes verwenden wir unsere JavaScript-Kenntnisse, um uns mit dem Schreiben von JSX und der Arbeit mit Daten in React etwas vertrauter zu machen. Wir besprechen, wie Sie JSX-Elementen Attribute hinzufügen, Kommentare schreiben, Inhalte aus Variablen und anderen Ausdrücken rendern und Daten mithilfe von Props an Komponenten übergeben.

### Attribute zu JSX-Elementen hinzufügen

JSX-Elemente können wie HTML-Elemente Attribute haben. Versuchen Sie, in Ihrer Datei `App.jsx` unterhalb des `<h1>`-Elements ein `<button>` hinzuzufügen, wie hier:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie eine Schaltfläche mit den Worten `Click me!`. Die Schaltfläche tut noch nichts, aber wir werden bald lernen, wie Sie Ihrer App Interaktivität hinzufügen.

Einige Attribute unterscheiden sich von ihren HTML-Entsprechungen. Beispielsweise wird das Attribut `class` in HTML in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist und JSX eine JavaScript-Erweiterung ist. Wenn Sie Ihrer Schaltfläche eine Klasse `primary` hinzufügen möchten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalt

Im Gegensatz zu HTML ermöglicht JSX, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Deklarieren wir direkt oberhalb der Funktion `App()` in Ihrer Datei `App.jsx` eine Variable namens `subject`:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als Nächstes das Wort „World“ im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten „Hello, React!“ gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Merkmal der JSX-Syntax. Die geschweiften Klammern teilen React mit, dass wir den Wert der Variablen `subject` lesen möchten, statt die Zeichenfolge `"subject"` wörtlich zu rendern. Sie können in JSX jeden gültigen JavaScript-Ausdruck in geschweifte Klammern setzen; React wertet ihn aus und rendert das _Ergebnis_ des Ausdrucks als endgültigen Inhalt. Im Folgenden finden Sie eine Reihe von Beispielen mit Kommentaren darüber, die erklären, was jeder Ausdruck rendert:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {`${subject} :)`}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb geschweifter Klammern geschrieben! Das liegt daran, dass geschweifte Klammern einen einzelnen JavaScript-Ausdruck enthalten können und Kommentare als Teil eines JavaScript-Ausdrucks gültig sind (und ignoriert werden). Sie können sowohl die Syntax `/* Blockkommentar */` als auch die Syntax `// Zeilenkommentar` (mit anschließendem Zeilenumbruch) innerhalb geschweifter Klammern verwenden.

### Komponenten-Props

**Props** sind ein Mittel, um Daten an eine React-Komponente zu übergeben. Ihre Syntax ist tatsächlich identisch mit der von Attributen: `prop="value"`. Der Unterschied besteht darin, dass Attribute an einfache Elemente übergeben werden, Props jedoch an React-Komponenten.

In React ist der Datenfluss unidirektional: Props können nur von Elternkomponenten an Kindkomponenten übergeben werden.

Öffnen wir `main.jsx` und geben unserer `<App />`-Komponente ihren ersten Prop.

Fügen Sie dem Aufruf der Komponente `<App />` einen Prop `subject` mit dem Wert `Clarice` hinzu. Wenn Sie fertig sind, sollte es ungefähr so aussehen:

```jsx
<App subject="Clarice" />
```

Kehren wir zu `App.jsx` zurück und sehen uns die Funktion `App()` erneut an. Ändern Sie die Signatur von `App()` so, dass sie `props` als Parameter akzeptiert, und protokollieren Sie `props` in der Konsole, damit Sie es untersuchen können. Löschen Sie außerdem die Konstante `subject`; wir benötigen sie nicht mehr. Ihre Datei `App.jsx` sollte so aussehen:

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

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalt. Das liegt daran, dass wir versuchen, eine Variable `subject` zu lesen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Codeeditor JSX analysieren kann (was bei den meisten modernen Editoren der Fall ist), können Sie seine integrierte Tastenkombination zum Kommentieren verwenden – `Ctrl + /` unter Windows oder `Cmd + /` unter macOS –, um Kommentare schneller zu erstellen.

Speichern Sie die Datei, während diese Zeile auskommentiert ist. Dieses Mal sollten Sie Ihre Schaltfläche „Click me!“ allein gerendert sehen. Wenn Sie die Entwicklerkonsole Ihres Browsers öffnen, sehen Sie eine Meldung, die ungefähr so aussieht:

```plain
Object { subject: "Clarice" }
```

Die Objekteigenschaft `subject` entspricht dem Prop `subject`, den wir unserem Komponentenaufruf `<App />` hinzugefügt haben, und die Zeichenfolge `Clarice` entspricht seinem Wert. Komponenten-Props in React werden auf diese Weise immer in Objekten gesammelt.

Verwenden wir diesen Prop `subject`, um den Fehler in unserer App zu beheben. Entfernen Sie den Kommentar aus der Zeile `<h1>Hello, {subject}!</h1>` und ändern Sie sie zu `<h1>Hello, {props.subject}!</h1>`. Löschen Sie anschließend die Anweisung `console.log()`. Ihr Code sollte so aussehen:

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

Nach dem Speichern sollte die App Sie nun mit „Hello, Clarice!“ begrüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` bearbeiten und speichern, ändert sich Ihr Text.

Als zusätzliche Übung könnten Sie versuchen, dem Komponentenaufruf `<App />` in `main.jsx` einen weiteren Prop `greeting` hinzuzufügen und ihn zusammen mit dem Prop `subject` in `App.jsx` zu verwenden.

## Zusammenfassung

Damit endet unser erster Blick auf React, einschließlich der lokalen Installation, des Erstellens einer Starter-App und der grundlegenden Funktionsweise. Im nächsten Artikel beginnen wir mit der Erstellung unserer ersten richtigen Anwendung – einer Aufgabenliste. Zuvor fassen wir jedoch einige der Dinge zusammen, die wir gelernt haben.

In React:

- Komponenten können die benötigten Module importieren und müssen sich selbst am Ende ihrer Dateien exportieren.
- Komponentenfunktionen werden mit `PascalCase` benannt.
- Sie können JavaScript-Ausdrücke in JSX rendern, indem Sie sie zwischen geschweifte Klammern setzen, wie `{so}`.
- Einige JSX-Attribute unterscheiden sich von HTML-Attributen, damit sie nicht mit reservierten JavaScript-Wörtern in Konflikt geraten. Beispielsweise wird `class` in HTML in JSX zu `className`.
- Props werden wie Attribute innerhalb von Komponentenaufrufen geschrieben und an Komponenten übergeben.

## Siehe auch

- [React lernen](https://scrimba.com/learn-react-c0e?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn React_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) ist React 101 in seiner besten Form – der perfekte Einstieg für alle React-Anfänger. Lernen Sie die Grundlagen des modernen React, indem Sie über 140 interaktive Coding-Challenges lösen und acht unterhaltsame Projekte erstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
