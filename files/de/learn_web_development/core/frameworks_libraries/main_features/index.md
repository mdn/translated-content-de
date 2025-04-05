---
title: Hauptmerkmale von Frameworks
short-title: Framework features
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: 95b3a7c3d7c854feddb769922818f9d5a3abd500
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browser-Ereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. In diesem Artikel werden die Hauptmerkmale der "großen Vier" Frameworks untersucht, wie Frameworks im Allgemeinen funktionieren und die Unterschiede zwischen ihnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen der Hauptmerkmale, die von JavaScript-Frameworks bereitgestellt werden.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Die meisten Frameworks erlauben es Ihnen, domänenspezifische Sprachen (DSLs) zu verwenden, um Ihre Anwendungen zu erstellen. Insbesondere hat React die Verwendung von **JSX** für das Schreiben seiner Komponenten populär gemacht, während Ember **Handlebars** verwendet. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datenvariablen liest, und diese Daten können verwendet werden, um den Prozess des Schreibens Ihrer Benutzeroberfläche zu vereinfachen.

Angular-Anwendungen verwenden häufig intensiv **TypeScript**. TypeScript beschäftigt sich nicht mit dem Schreiben von Benutzeroberflächen, ist jedoch eine domänenspezifische Sprache und weist erhebliche Unterschiede zum normalen JavaScript auf.

DSLs können vom Browser nicht direkt gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Werkzeuge beinhalten in der Regel die erforderlichen Tools, um diesen Schritt zu bewältigen, oder können angepasst werden, um diesen Schritt einzuschließen. Während es möglich ist, Framework-Apps ohne Verwendung dieser domänenspezifischen Sprachen zu erstellen, wird die Nutzung dieser Sprachen Ihren Entwicklungsprozess optimieren und es Ihnen erleichtern, Unterstützung von den jeweiligen Communitys zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), das für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team zur Verwendung in React-Anwendungen erfunden, kann jedoch auch zur Entwicklung anderer Anwendungen verwendet werden – wie zum Beispiel Vue-Apps.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck repräsentiert ein HTML [`<header>`](/de/docs/Web/HTML/Element/header) Element mit einem [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Element darin. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstante `subject` zu lesen und in unser `<h1>` einzufügen.

Wenn es mit React verwendet wird, würde das vorherige JSX-Snippet so kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Beim letztendlichen Rendern durch den Browser wird das obige Snippet HTML produzieren, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/) Template-Sprache ist nicht speziell für Ember-Anwendungen, wird aber stark in Ember-Apps genutzt. Handlebars-Code ähnelt HTML, hat jedoch die Möglichkeit, Daten von anderswo abzurufen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich erstellt.

Ähnlich wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein doppeltes Paar von geschweiften Klammern anstelle eines einfachen Paares.

Angenommen, folgende Handlebars-Vorlage:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

Und diese Daten:

```json
{
  "subject": "World"
}
```

Handlebars wird HTML wie folgt erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist ein _Superset_ von JavaScript, das bedeutet, es erweitert JavaScript – alle JavaScript-Code ist gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich für die Strenge, die es Entwicklern ermöglicht, in ihren Code zu erzwingen. Betrachten Sie zum Beispiel eine Funktion `add()`, die ganze Zahlen `a` und `b` nimmt und ihre Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code könnte für jemanden, der mit JavaScript vertraut ist, trivial sein, könnte jedoch noch klarer sein. JavaScript erlaubt es uns, den Operator `+` zu verwenden, um Strings zusammenzukonkatinieren, sodass diese Funktion technisch immer noch funktioniert, wenn `a` und `b` Strings wären – es könnte nur nicht das Ergebnis liefern, das Sie erwarten. Was, wenn wir nur Zahlen übergeben wollten? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Die `: number` Angabe nach jedem Parameter sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler auslösen, und wir müssten unseren Fehler beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns auslöst, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Überprüfungen für uns erledigen zu lassen.

## Schreiben von Komponenten

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks ein Componenten-Modell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars, und Angular- und Vue-Komponenten mit einer Templating-Syntax, die HTML leicht erweitert.

Unabhängig von den Meinungen darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie möglicherweise benötigen, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann.

Die Codeschnipsel im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **props** sind externe Daten, die eine Komponente benötigt, um zu rendern. Angenommen, Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder mitwirkende Autor für seine Arbeit anerkannt wird. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors und eine kurze Autorennennung über ihn anzeigen. Um zu wissen, welches Bild gerendert und welcher Text gedruckt werden soll, muss `AuthorCredit` einige Eigenschaften akzeptieren.

Eine React-Darstellung dieser `AuthorCredit`-Komponente könnte so aussehen:

```jsx
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`, `{props.alt}` und `{props.byline}` repräsentieren, wo unsere Eigenschaften in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir Code wie diesen an der Stelle schreiben, an der sie gerendert werden soll (was wahrscheinlich innerhalb einer anderen Komponente liegt):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Letztendlich wird dies das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure) Element im Browser rendern, mit seiner Struktur, wie in der `AuthorCredit`-Komponente definiert, und seinem Inhalt, wie in den aufgerufenen Eigenschaften der `AuthorCredit`-Komponentenaufrufs definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben das Konzept des **Zustands** im vorherigen Kapitel besprochen – ein robuster Mechanismus zur Zustandsverwaltung ist entscheidend für ein effektives Framework, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand bleibt in gewisser Weise bestehen, solange die Komponente in Gebrauch ist. Wie Eigenschaften kann Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Nehmen Sie zum Beispiel einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte für das Tracking ihres eigenen _count_-Zustands verantwortlich sein und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, wenn ein Anfangswert gegeben ist, diesen Wert aktualisiert, während er verfolgt wird. Der Code wird anfänglich so im Browser gerendert werden:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf hält den `count`-Wert auf eine robuste Weise in der gesamten App fest, ohne dass Sie Code selbst schreiben müssen, um dies zu gewährleisten.

### Ereignisse

Um interaktiv zu sein, müssen Komponenten Möglichkeiten haben, auf Browser-Ereignisse zu reagieren, sodass unsere Anwendungen auf unsere Benutzer reagieren können. Jedes Framework bietet seine eigene Syntax zum Lauschen von Browser-Ereignissen, die die Namen der entsprechenden nativen Browser-Ereignisse referenzieren.

In React erfordert das Anhören des [`click`](/de/docs/Web/API/Element/click_event) Ereignisses eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Ereignishandlers auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Stilisierung von Komponenten

Jedes Framework bietet eine Möglichkeit, die Stile für Ihre Komponenten – oder für die Anwendung als Ganzes – zu definieren. Obwohl der Ansatz eines jeden Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, geben ihnen alle mehrere Möglichkeiten, dies zu tun. Mit der Hinzufügung einiger Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) gestalten oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilieren.

## Umgang mit Abhängigkeiten

Alle großen Frameworks bieten Mechanismen zur Verwaltung von Abhängigkeiten – die Verwendung von Komponenten innerhalb anderer Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Funktionen unterscheidet sich der genaue Mechanismus zwischen den Frameworks, aber das Endergebnis ist dasselbe. Komponenten importieren in der Regel Komponenten in andere Komponenten mit der Standard-[JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem.

### Komponenten in Komponenten

Ein entscheidender Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten zusammengefügt werden können. Genau wie Sie HTML-Tags ineinander schreiben können, um eine Website zu erstellen, können Sie Komponenten in anderen Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework erlaubt es Ihnen, Komponenten zu schreiben, die (und damit von) anderen Komponenten abhängen.

Zum Beispiel könnte unsere `AuthorCredit` React-Komponente innerhalb einer `Article`-Komponente verwendet werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Sobald das erledigt ist, könnte `AuthorCredit` innerhalb der `Article`-Komponente so verwendet werden:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Abhängigkeitsinjektion

Echte Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen beinhalten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief verschachtelt ist, könnte aus irgendeinem Grund Daten von der Root-Ebene unserer Anwendung benötigen.

Nehmen wir an, die Magazinseite, die wir erstellen, ist so strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, sodass sie wissen, dass sie Requisiten durchreichen müssen, aber das könnte mühsam werden, wenn es viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` nutzen das Porträt oder die Beschreibung des Autors nicht wirklich, aber wenn wir diese Informationen in die `AuthorCredit` bekommen möchten, müssen wir `Home` und `Article` ändern, um dies zu ermöglichen.

Das Problem der Datenübertragung durch viele Komponentenebenen wird als Prop-Drilling bezeichnet, und es ist nicht ideal für große Anwendungen.

Um Prop-Drilling zu umgehen, bieten Frameworks eine Funktionalität namens Abhängigkeitsinjektion an, die eine Möglichkeit ist, bestimmte Daten direkt zu den Komponenten zu bringen, die sie benötigen, ohne sie durch Zwischenebenen zu leiten. Jedes Framework implementiert die Abhängigkeitsinjektion unter einem anderen Namen und auf unterschiedliche Weise, aber der Effekt ist letztlich derselbe.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.dev/guide/di/dependency-injection); Vue hat [`provide()` und `inject()`-Komponentenmethoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context-API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand über [Dienste](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, von der Zeit, in der sie dem DOM hinzugefügt und dann vom Browser gerendert wird (oft als _Mounting_ bezeichnet), bis sie aus dem DOM entfernt wird (oft als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf dieselben Phasen. Alle Frameworks folgen demselben allgemeinen Modell: Sie erlauben es Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _mountet_, wenn sie _rendert_, wenn sie _unmountet_ und in vielen Phasen dazwischen.

Die _Render_-Phase ist die am besten zu verstehende, da sie am häufigsten wiederholt wird, wenn Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es eine Ergänzung zu dem, was im Browser ist, eine Löschung oder eine Bearbeitung dessen, was dort ist.

Dieses [Diagramm des Lebenszyklus eines React-Komponenten](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Rendern von Elementen

Ebenso wie bei den Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle von ihnen verfolgen die aktuelle gerenderte Version des DOM Ihres Browsers und treffen jeweils leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern soll, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicherintensiver als die Aktualisierung des DOM selbst, aber ohne diese könnten Frameworks Ihnen nicht die deklarative Programmierung ermöglichen, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM, vergleicht sie dann mit dem "echten" DOM – dem DOM, das tatsächlich für Ihre Benutzer gerendert wird – um zu entscheiden, was gerendert werden soll. Die Anwendung erstellt ein "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet dieses Diff, um das echte DOM zu aktualisieren. Sowohl React als auch Vue verwenden ein virtuelles DOM-Modell, wenden jedoch nicht exakt dieselbe Logik beim Diffen oder Rendern an.

Sie können [mehr über den Virtuellen DOM in den React-Dokumentationen lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM insofern ähnlich, als er ein DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, unterscheidet sich jedoch dadurch, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige Framework, das bisher in diesem Modul besprochen wurde und ein inkrementelles DOM verwendet.

Sie können [mehr über den Inkrementellen DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtuelles DOM noch ein inkrementelles DOM; sie ist ein separater Prozess, durch den die Ember-Templates in eine Art "Bytecode" transpiliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Teil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, clientseitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Testabdeckungen, die sicherstellen, dass Ihre Software weiterhin so funktioniert, wie Sie es erwarten, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Werkzeuge, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in den Frameworks selbst eingebaut, aber die Befehlszeilenschnittstellen-Tools, die zum Generieren von Framework-Apps verwendet werden, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem, mit Fähigkeiten sowohl für Unit-Tests als auch für Integrationstests.

[Testing Library](https://testing-library.com/) ist eine Sammlung von Testwerkzeugen, die Tools für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumentationen behandeln das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein schneller Test für unseren `CounterButton`, geschrieben mit der Hilfe von React Testing Library – er testet eine Reihe von Dingen, wie die Existenz des Buttons und ob der Button den richtigen Text anzeigt, nachdem er 0, 1 und 2 Mal geklickt wurde:

```jsx
import { fireEvent, render, screen } from "@testing-library/react";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Tools haben, die Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, Sie sind begeistert, loszulegen und tatsächlich etwas zu programmieren, und genau das werden Sie als Nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
