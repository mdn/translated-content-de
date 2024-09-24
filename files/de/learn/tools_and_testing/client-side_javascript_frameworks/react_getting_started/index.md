---
title: Erste Schritte mit React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel sagen wir Hallo zu React. Wir werden ein wenig über seine Herkunft und Anwendungsfälle erfahren, eine grundlegende React-Toolchain auf unserem lokalen Computer einrichten und eine einfache Starter-App erstellen und ausprobieren — dabei lernen wir ein wenig über die Funktionsweise von React.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          React verwendet eine HTML-in-JavaScript-Syntax namens JSX (JavaScript und
          XML). Vertrautheit mit sowohl HTML als auch JavaScript wird Ihnen helfen,
          JSX zu erlernen und besser zu identifizieren, ob Fehler in Ihrer Anwendung
          mit JavaScript oder dem spezifischeren Bereich von React zu tun haben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Eine lokale React-Entwicklungsumgebung einrichten, eine Start-App erstellen
          und die Grundlagen der Funktionsweise verstehen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Hallo React

Wie es in seinem offiziellen Slogan heißt, ist [React](https://react.dev/) eine Bibliothek zum Erstellen von Benutzeroberflächen. React ist kein Framework – es ist nicht einmal exklusiv für das Web. Es wird mit anderen Bibliotheken verwendet, um für bestimmte Umgebungen zu rendern. Zum Beispiel kann [React Native](https://reactnative.dev/) zum Erstellen von mobilen Anwendungen verwendet werden.

Um für das Web zu entwickeln, verwenden Entwickler React zusammen mit [ReactDOM](https://react.dev/reference/react-dom). React und ReactDOM werden häufig in denselben Bereichen wie andere echte Webentwicklungs-Frameworks diskutiert und verwendet, um dieselben Probleme zu lösen. Wenn wir React als "Framework" bezeichnen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

Das Hauptziel von React ist es, die Fehler zu minimieren, die beim Erstellen von Benutzeroberflächen auftreten können. Das wird durch die Verwendung von Komponenten erreicht – selbstständige, logische Codeabschnitte, die einen Teil der Benutzeroberfläche beschreiben. Diese Komponenten können zusammengesetzt werden, um eine vollständige Benutzeroberfläche zu erstellen, und React übernimmt einen Großteil der Renderarbeit, damit Sie sich auf das Design der Benutzeroberfläche konzentrieren können.

## Anwendungsfälle

Im Gegensatz zu den anderen Frameworks, die in diesem Modul behandelt werden, erzwingt React keine strengen Regeln bezüglich Codekonventionen oder Dateiorganisation. Dies ermöglicht es Teams, Konventionen festzulegen, die am besten zu ihnen passen, und React auf jede gewünschte Weise zu übernehmen. React kann einen einzelnen Button, einige Teile einer Benutzeroberfläche oder die gesamte Benutzeroberfläche einer App verarbeiten.

Obwohl React für [kleine Teile einer Benutzeroberfläche](https://react.dev/learn/add-react-to-an-existing-project) verwendet werden _kann_, ist es nicht so einfach, es in eine Anwendung "einzubinden" wie eine Bibliothek wie jQuery oder sogar ein Framework wie Vue – es ist zugänglicher, wenn Sie Ihre gesamte App mit React erstellen.

Darüber hinaus erfordern viele der Entwicklererfahrungen Vorteile einer React-App, wie das Schreiben von Oberflächen mit JSX, einen Kompilierungsprozess. Das Hinzufügen eines Compilers wie Babel zu einer Website verlangsamt den Code, sodass Entwickler meist ein solches Tooling mit einem Erstellschritt einrichten. React hat zwar einen gewaltigen Tooling-Bedarf, kann aber erlernt werden.

Dieser Artikel konzentriert sich auf den Anwendungsfall, React zur Darstellung der gesamten Benutzeroberfläche einer Anwendung mit Unterstützung von [Vite](https://vite.dev/), einem modernen Frontend-Build-Tool, zu verwenden.

## Wie verwendet React JavaScript?

React nutzt die Funktionen von modernem JavaScript für viele seiner Muster. Sein größter Unterschied zu JavaScript kommt durch die Verwendung der [JSX](https://react.dev/learn/writing-markup-with-jsx)-Syntax. JSX erweitert die JavaScript-Syntax, sodass HTML-ähnlicher Code daneben stehen kann. Zum Beispiel:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Diese Überschrift-Konstante wird als **JSX-Ausdruck** bezeichnet. React kann es verwenden, um das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Tag in unserer App zu rendern.

Angenommen, wir wollten unsere Überschrift aus semantischen Gründen in ein [`<header>`](/de/docs/Web/HTML/Element/header) Tag einwickeln? Der JSX-Ansatz ermöglicht es uns, unsere Elemente ineinander zu verschachteln, genau wie wir es mit HTML tun:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> Die Klammern im vorhergehenden Code-Snippet sind nicht einzigartig für JSX und haben keinen Einfluss auf Ihre Anwendung. Sie sind ein Signal an Sie (und Ihren Computer), dass die mehreren Codezeilen im Innern Teil desselben Ausdrucks sind. Sie könnten den Header-Ausdruck auch so schreiben:
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> Dies sieht jedoch etwas umständlich aus, weil das [`<header>`](/de/docs/Web/HTML/Element/header) Tag, das den Ausdruck einleitet, nicht auf dieselbe Position wie das entsprechende Schlusstag eingerückt ist.

Natürlich kann Ihr Browser JSX nicht ohne Hilfe lesen. Wenn der Header-Ausdruck kompiliert wird (mit einem Tool wie [Babel](https://babeljs.io/) oder [Parcel](https://parceljs.org/)), sieht er so aus:

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es ist _möglich_, den Kompilierschritt zu überspringen und [`React.createElement()`](https://react.dev/reference/react/createElement) zu verwenden, um Ihre Benutzeroberfläche selbst zu schreiben. Wenn Sie dies tun, verlieren Sie jedoch den deklarativen Vorteil von JSX, und Ihr Code wird schwieriger zu lesen. Die Kompilation ist ein zusätzlicher Schritt im Entwicklungsprozess, aber viele Entwickler in der React-Community denken, dass die Lesbarkeit von JSX lohnenswert ist. Außerdem beinhaltet die moderne Frontend-Entwicklung ohnehin fast immer einen Erstellprozess — Sie müssen moderne Syntax auf ein älteres Niveau senken, um mit älteren Browsern kompatibel zu sein, und Sie möchten möglicherweise Ihren Code {{Glossary("Minification", "minimieren")}}, um die Ladeleistung zu optimieren. Beliebte Tools wie Babel bieten bereits standardmäßig Unterstützung für JSX, sodass Sie die Kompilierung nicht selbst konfigurieren müssen, es sei denn, Sie möchten es.

Da JSX eine Mischung aus HTML und JavaScript ist, finden einige Entwickler es intuitiv. Andere sagen, dass seine gemischte Natur es verwirrend macht. Sobald Sie sich damit wohl fühlen, ermöglicht Ihnen JSX, Benutzeroberflächen schneller und intuitiver zu erstellen und es anderen zu ermöglichen, Ihren Code auf den ersten Blick besser zu verstehen.

Um mehr über JSX zu erfahren, schauen Sie sich den Artikel [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) des React-Teams an.

## Einrichtung Ihrer ersten React-App

Es gibt viele Möglichkeiten, eine neue React-Anwendung zu erstellen. Wir werden Vite verwenden, um über die Befehlszeile eine neue Anwendung zu erstellen.

Es ist möglich, [React zu einem bestehenden Projekt hinzuzufügen](https://react.dev/learn/add-react-to-an-existing-project), indem Sie einige [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente in eine HTML-Datei kopieren, aber Vite zu verwenden, erlaubt es Ihnen, mehr Zeit mit dem Erstellen Ihrer App zu verbringen und weniger Zeit mit der Einrichtung.

### Anforderungen

Um Vite zu nutzen, müssen Sie [Node.js](https://nodejs.org/en/) installiert haben. Seit Vite 5.0 ist mindestens Node Version 18 oder später erforderlich, und es ist eine gute Idee, die neueste Long Term Support (LTS) Version zu verwenden, wenn Sie können. Ab dem 24. Oktober 2023 ist Node 20 die neueste LTS-Version. Node beinhaltet npm (den Node-Paketmanager).

Um Ihre Version von Node zu überprüfen, führen Sie Folgendes in Ihrem Terminal aus:

```bash
node -v
```

Wenn Node installiert ist, sehen Sie eine Versionsnummer. Wenn nicht, erhalten Sie eine Fehlermeldung. Um Node zu installieren, folgen Sie den Anweisungen auf der [Node.js-Website](https://nodejs.org/en/).

Sie können den Yarn-Paketmanager als Alternative zu npm verwenden, aber wir gehen davon aus, dass Sie npm in diesen Tutorials verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Ihnen eine Gleichwertigkeit mit dem Unix/macOS-Terminal zu bieten, um die in diesem Tutorial genannten Terminalbefehle zu verwenden. **Gitbash** (das als Teil des [git für Windows Toolsets](https://gitforwindows.org/) kommt) oder **[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about)** (**WSL**) sind beide geeignet. Siehe [Befehlszeilen-Schnellkurs](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) für weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen.

Bedenken Sie auch, dass React und ReactDOM Apps produzieren, die nur auf einer einigermaßen modernen Auswahl an Browsern wie Firefox, Microsoft Edge, Safari oder Chrome funktionieren, wenn Sie diese Tutorials durchgehen.

Weitere Informationen finden Sie unter:

- ["Über npm" im npm Blog](https://docs.npmjs.com/about-npm/)
- ["npx einführen" im npm Blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vites Dokumentation](https://vite.dev/guide/)

### Initialisierung Ihrer App

Der npm-Paketmanager enthält einen `create`-Befehl, der es Ihnen ermöglicht, neue Projekte aus Vorlagen zu erstellen. Wir können ihn benutzen, um eine neue App aus Vites standardmäßiger React-Vorlage zu erstellen. Stellen Sie sicher, dass Sie zu dem Ort `cd`-en, an dem Ihre App auf Ihrem Rechner leben soll, und führen Sie dann Folgendes in Ihrem Terminal aus:

```bash
npm create vite@latest moz-todo-react -- --template react
```

Dies erstellt ein `moz-todo-react` Verzeichnis mit der `react`-Vorlage von Vite.

> [!NOTE]
> Das `--` ist notwendig, um Argumente an npm-Befehle wie `create` zu übergeben, und das Argument `--template react` sagt Vite, dass es seine React-Vorlage verwenden soll.

Ihr Terminal hat einige Meldungen ausgegeben, wenn dieser Befehl erfolgreich war. Sie sollten einen Text sehen, der Sie auffordert, in das neue Verzeichnis zu `cd`-en, die Abhängigkeiten der App zu installieren und die App lokal auszuführen. Beginnen wir mit zwei dieser Befehle. Führen Sie Folgendes in Ihrem Terminal aus:

```bash
cd moz-todo-react && npm install
```

Sobald der Prozess abgeschlossen ist, müssen wir einen lokalen Entwicklungsserver starten, um unsere App auszuführen. Hier werden wir einige Befehlszeilenflags zu Vites Standardvorschlag hinzufügen, um die App in unserem Browser zu öffnen, sobald der Server startet, und den Port 3000 zu verwenden.

Führen Sie Folgendes in Ihrem Terminal aus:

```bash
npm run dev -- --open --port 3000
```

Sobald der Server startet, sollten Sie einen neuen Browser-Tab sehen, der Ihre React-App enthält:

![Screenshot von Firefox MacOS geöffnet zu localhost:3000, zeigt eine Anwendung, die aus Vites React-Vorlage erstellt wurde](default-vite.png)

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

**`index.html`** ist die wichtigste Datei auf oberster Ebene. Vite injiziert Ihren Code in diese Datei, damit Ihr Browser ihn ausführen kann. Sie müssen diese Datei während unseres Tutorials nicht bearbeiten, aber Sie sollten den Text innerhalb des [`<title>`](/de/docs/Web/HTML/Element/title) Elements in dieser Datei ändern, um den Titel Ihrer Anwendung widerzuspiegeln. Genaue Seitentitel sind wichtig für Barrierefreiheit.

Das **`public`** Verzeichnis enthält statische Dateien, die direkt an Ihren Browser gesendet werden, ohne von Vites Build-Tooling verarbeitet zu werden. Derzeit enthält es nur ein Vite-Logo.

Das **`src`** Verzeichnis ist, wo wir die meiste Zeit verbringen werden, da es den Quellcode für unsere Anwendung enthält. Sie werden feststellen, dass einige JavaScript-Dateien in diesem Verzeichnis die Erweiterung `.jsx` haben. Diese Erweiterung ist notwendig für jede Datei, die JSX enthält — sie teilt Vite mit, die JSX-Syntax in JavaScript umzuwandeln, das Ihr Browser verstehen kann. Das `src/assets` Verzeichnis enthält das React-Logo, das Sie im Browser gesehen haben.

Die `package.json` und `package-lock.json` Dateien enthalten Metadaten über unser Projekt. Diese Dateien sind für React-Anwendungen nicht einzigartig: Vite hat `package.json` für uns befüllt, und npm hat `package-lock.json` erstellt, als wir die Abhängigkeiten der App installiert haben. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie über [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) und [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/) in den npm-Dokumenten lesen. Wir sprechen auch über `package.json` in unserem Tutorial [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

### Anpassen unseres Entwicklungsskripts

Bevor wir fortfahren, möchten Sie vielleicht Ihre `package.json` Datei ein wenig ändern, damit Sie die `--open` und `--port` Flags nicht jedes Mal übergeben müssen, wenn Sie `npm run dev` ausführen. Öffnen Sie `package.json` in Ihrem Texteditor und finden Sie das `scripts` Objekt. Ändern Sie den `"dev"` Schlüssel, sodass er so aussieht:

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

Mit dieser Einstellung wird Ihre App jedes Mal, wenn Sie `npm run dev` ausführen, in Ihrem Browser unter `http://localhost:3000` geöffnet.

> [!NOTE]
> Sie _brauchen_ das zusätzliche `--` hier nicht, weil wir Argumente direkt an `vite` übergeben, anstatt an ein vordefiniertes npm-Skript.

## Erforschen unserer ersten React-Komponente — `<App />`

In React ist eine **Komponente** ein wiederverwendbares Modul, das einen Teil unserer gesamten Anwendung darstellt. Komponenten können groß oder klein sein, aber sie sind normalerweise klar definiert: sie erfüllen einen einzelnen, offensichtlichen Zweck.

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

Die `App.jsx` Datei besteht aus drei Hauptteilen: einige [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisungen oben, die `App()` Funktion in der Mitte und eine [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung am Ende. Die meisten React-Komponenten folgen diesem Muster.

### Import-Anweisungen

Die `import` Anweisungen am oberen Rand der Datei ermöglichen es `App.jsx`, Code zu verwenden, der anderswo definiert wurde. Lassen Sie uns diese Anweisungen genauer ansehen.

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

Die erste Anweisung importiert den `useState` Hook aus der `react` Bibliothek. Hooks sind eine Möglichkeit, die Funktionen von React innerhalb einer Komponente zu nutzen. Wir werden später in diesem Tutorial mehr über Hooks sprechen.

Danach importieren wir `reactLogo` und `viteLogo`. Beachten Sie, dass ihre Importpfade mit `./` bzw. `/` beginnen und dass sie am Ende die `.svg` Erweiterung haben. Dies sagt uns, dass diese Importe _lokal_ sind und auf unsere eigenen Dateien statt auf npm-Pakete verweisen.

Die letzte Anweisung importiert das CSS, das mit unserer `<App />` Komponente zusammenhängt. Beachten Sie, dass kein Variablenname und keine `from` Direktive vorhanden sind. Dies wird als [_Seiteneffekt-Import_](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) bezeichnet — es importiert keinen Wert in die JavaScript-Datei, aber es teilt Vite mit, die referenzierte CSS-Datei in die endgültige Codeausgabe aufzunehmen, damit sie im Browser verwendet werden kann.

### Die `App()` Funktion

Nach den Importen haben wir eine Funktion namens `App()`, die die Struktur der `App` Komponente definiert. Während der Großteil der JavaScript-Community {{Glossary("camel_case", "lower camel case")}} Namen wie `helloWorld` bevorzugt, verwenden React-Komponenten Pascal-Case (oder Upper Camel Case) Variablennamen wie `HelloWorld`, um es klar zu machen, dass ein gegebenes JSX-Element eine React-Komponente und kein reguläres HTML-Tag ist. Wenn Sie die `App()` Funktion in `app()` umbenennen würden, würde Ihr Browser einen Fehler auslösen.

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

Die `App()` Funktion gibt einen JSX-Ausdruck zurück. Dieser Ausdruck definiert, was Ihr Browser letztendlich im DOM rendert.

Direkt unter dem `return` Schlüsselwort befindet sich ein spezielles Stück Syntax: `<>`. Dies ist ein [Fragment](https://react.dev/reference/react/Fragment). React-Komponenten müssen ein einziges JSX-Element zurückgeben, und Fragmente ermöglichen es uns, dies zu tun, ohne willkürliche `<div>`s im Browser zu rendern. Sie werden Fragmente in vielen React-Anwendungen sehen.

### Die `export` Anweisung

Es gibt noch eine weitere Codezeile nach der `App()` Funktion:

```jsx
export default App;
```

Diese Exportanweisung macht unsere `App()` Funktion für andere Module verfügbar. Wir werden später mehr darüber sprechen.

## Weiter zu `main`

Lassen Sie uns `src/main.jsx` öffnen, da dort die `<App />` Komponente verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

Wie bei `App.jsx` beginnt die Datei damit, alle JS-Module und andere Assets zu importieren, die sie zum Ausführen benötigt.

Die ersten beiden Anweisungen importieren die `React` und `ReactDOM` Bibliotheken, da sie später in der Datei referenziert werden. Wir schreiben keinen Pfad oder Erweiterung, wenn wir diese Bibliotheken importieren, weil sie keine lokalen Dateien sind. Tatsächlich sind sie als Abhängigkeiten in unserer `package.json` Datei aufgelistet. Achten Sie auf diesen Unterschied, während Sie diese Lektion durcharbeiten!

Wir importieren dann unsere `App()` Funktion und `index.css`, die globale Styles enthält, die auf unsere gesamte App angewendet werden.

Wir rufen dann die `ReactDOM.createRoot()` Funktion auf, die den Wurzelknoten unserer Anwendung definiert. Dies nimmt als Argument das DOM-Element, in dem wir unsere React-App rendern möchten. In diesem Fall ist das das DOM-Element mit der ID `root`. Schließlich hängen wir die `render()` Methode an den `createRoot()` Aufruf an, indem wir den JSX-Ausdruck übergeben, den wir innerhalb unseres Wurzelknotens rendern möchten. Indem wir `<App />` als diesen JSX-Ausdruck schreiben, teilen wir React mit, die `App()` _Funktion_ aufzurufen, die die `App` _Komponente_ innerhalb des Wurzelknotens rendert.

> **Hinweis:** `<App />` wird innerhalb einer speziellen `<React.StrictMode>` Komponente gerendert. Diese Komponente hilft Entwicklern, potenzielle Probleme in ihrem Code zu erkennen.

Sie können sich über diese React APIs informieren, wenn Sie möchten:

- [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://react.dev/reference/react/StrictMode)

## Frisch anfangen

Bevor wir anfangen, unsere App zu bauen, werden wir einige der Boilerplate-Codes löschen, die uns Vite zur Verfügung gestellt hat.

Ändern Sie zunächst testweise das [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Element in `App.jsx`, sodass es "Hallo, Welt!" lautet, und speichern Sie Ihre Datei. Sie werden feststellen, dass diese Änderung sofort im Entwicklungsserver unter `http://localhost:3000` in Ihrem Browser gerendert wird. Behalten Sie dies im Hinterkopf, während Sie an Ihrer App arbeiten.

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

## Üben mit JSX

Als Nächstes verwenden wir unsere JavaScript-Fähigkeiten, um uns ein wenig wohler dabei zu fühlen, JSX zu schreiben und mit Daten in React zu arbeiten. Wir werden darüber sprechen, wie man Attribute zu JSX-Elementen hinzufügt, wie man Kommentare schreibt, wie man Inhalte aus Variablen und anderen Ausdrücken rendert und wie man Daten mit Props in Komponenten übergibt.

### Hinzufügen von Attributen zu JSX-Elementen

JSX-Elemente können genauso wie HTML-Elemente Attribute haben. Versuchen Sie, ein `<button>`-Element unter dem `<h1>`-Element in Ihrer `App.jsx` Datei hinzuzufügen, so:

```jsx
<button type="button">Click me!</button>
```

Wenn Sie Ihre Datei speichern, sehen Sie einen Button mit der Aufschrift `Click me!`. Der Button macht noch nichts, aber wir werden bald lernen, wie man unserer App Interaktivität hinzufügt.

Einige Attribute unterscheiden sich von ihren HTML-Gegenstücken. Zum Beispiel wird das Attribut `class` in HTML in JSX zu `className`. Dies liegt daran, dass `class` ein reserviertes Wort in JavaScript ist, und JSX ist eine JavaScript-Erweiterung. Wenn Sie Ihrem Button eine `primary` Klasse hinzufügen wollten, würden Sie es so schreiben:

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### JavaScript-Ausdrücke als Inhalte

Im Gegensatz zu HTML erlaubt JSX es uns, Variablen und andere JavaScript-Ausdrücke direkt neben unseren anderen Inhalten zu schreiben. Deklarieren Sie oberhalb der `App()` Funktion eine Variable namens `subject`:

```jsx
const subject = "React";
function App() {
  // code omitted for brevity
}
```

Ersetzen Sie als Nächstes das Wort "Welt" im `<h1>`-Element durch `{subject}`:

```jsx
<h1>Hello, {subject}!</h1>
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sollten "Hallo, React!" gerendert sehen.

Die geschweiften Klammern um `subject` sind ein weiteres Feature der JSX-Syntax. Die geschweiften Klammern sagen React, dass wir den Wert der `subject`-Variable lesen möchten, anstatt die wörtliche Zeichenkette `"subject"` zu rendern. Sie können jeden gültigen JavaScript-Ausdruck innerhalb von geschweiften Klammern in JSX einfügen; React wird ihn auswerten und das _Ergebnis_ des Ausdrucks als den endgültigen Inhalt rendern. Im Folgenden finden Sie eine Reihe von Beispielen mit Kommentaren darüber, die erklären, was jeder Ausdruck rendern wird:

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

Sogar Kommentare in JSX werden innerhalb von geschweiften Klammern geschrieben! Dies liegt daran, dass auch Kommentare technisch JavaScript-Ausdrücke sind. Die Syntax des `/* block comment syntax */` ist notwendig, damit Ihr Programm weiß, wo der Kommentar beginnt und endet.

### Komponenten-Props

**Props** sind ein Mittel, um Daten in eine React-Komponente einzuschleusen. Ihre Syntax ist identisch mit der von Attributen, tatsächlich: `prop="value"`. Der Unterschied besteht darin, dass Attribute in normale Elemente eingefügt werden, während Props in React-Komponenten eingefügt werden.

In React ist der Datenfluss unidirektional: Props können nur von übergeordneten Komponenten zu untergeordneten Komponenten weitergereicht werden.

Lassen Sie uns `main.jsx` öffnen und unserer `<App />` Komponente ihre ersten Props geben.

Fügen Sie dem `<App />` Komponentensatz ein Prop namens `subject` hinzu, mit einem Wert von `Clarice`. Wenn Sie fertig sind, sollte es in etwa so aussehen:

```jsx
<App subject="Clarice" />
```

Zurück in `App.jsx`, lassen Sie uns die `App()` Funktion erneut betrachten. Ändern Sie die Signatur von `App()`, sodass sie `props` als Parameter akzeptiert und protokollieren Sie `props` in der Konsole, damit Sie sie inspectieren können. Löschen Sie auch die `subject` Konstanten; wir brauchen sie nicht mehr. Ihre `App.jsx` Datei sollte wie folgt aussehen:

```jsx
function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}
```

Speichern Sie Ihre Datei und überprüfen Sie Ihren Browser. Sie sehen einen leeren Hintergrund ohne Inhalte. Dies liegt daran, dass wir versuchen, auf eine `subject`-Variable zuzugreifen, die nicht mehr definiert ist. Beheben Sie dies, indem Sie die Zeile `<h1>Hello {subject}!</h1>` auskommentieren.

> [!NOTE]
> Wenn Ihr Code-Editor versteht, wie man JSX parst (die meisten modernen Editoren tun das!), können Sie seine eingebaute Kommentarfunktion nutzen — `Ctrl + /` (unter Windows) oder `Cmd + /` (unter macOS) — um schneller Kommentare zu erstellen.

Speichern Sie die Datei mit dieser auskommentierten Zeile. Dieses Mal sollten Sie Ihren "Click me!"-Button alleine gerendert sehen. Wenn Sie die Entwicklertools Ihres Browsers öffnen, wird Folgendes angezeigt:

```plain
Object { subject: "Clarice" }
```

Die Objekt-Eigenschaft `subject` entspricht dem `subject` Prop, das wir unserem `<App />` Komponentensatz hinzugefügt haben, und die Zeichenkette `Clarice` entspricht dessen Wert. Komponenten-Props in React werden immer auf diese Weise in Objekten gesammelt.

Lassen Sie uns dieses `subject` Prop verwenden, um den Fehler in unserer App zu beheben. Heben Sie die Auskommentierung der Zeile `<h1>Hello, {subject}!</h1>` auf und ändern Sie sie in `<h1>Hello, {props.subject}!</h1>`, dann löschen Sie die `console.log()` Anweisung. Ihr Code sollte so aussehen:

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

Wenn Sie speichern, sollte die App Sie jetzt mit "Hello, Clarice!" grüßen. Wenn Sie zu `main.jsx` zurückkehren, den Wert von `subject` ändern und speichern, ändert sich Ihr Text.

Für zusätzliche Übung könnten Sie versuchen, ein zusätzliches `greeting` Prop zum `<App />` Komponentensatz innerhalb `main.jsx` hinzuzufügen und es zusammen mit dem `subje
