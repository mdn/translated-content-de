---
title: Hauptmerkmale von Frameworks
short-title: Merkmale des Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes große JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOMs, zur Behandlung von Browserevents und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen und aufzeigen, wie Frameworks im Allgemeinen arbeiten und welche Unterschiede es zwischen ihnen gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Verstehen der Hauptmerkmale, die von JavaScript-Frameworks bereitgestellt werden.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Die meisten Frameworks ermöglichen es Ihnen, domänenspezifische Sprachen (DSLs) zu verwenden, um Ihre Anwendungen zu erstellen. Insbesondere React hat die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** nutzt. Im Gegensatz zu HTML können diese Sprachen Datenvariablen lesen und diese Daten können verwendet werden, um den Prozess der Erstellung Ihrer Benutzeroberfläche zu vereinfachen.

Angular-Anwendungen nutzen häufig intensiv **TypeScript**. TypeScript befasst sich nicht mit der Erstellung von Benutzeroberflächen, ist aber eine domänenspezifische Sprache und hat signifikante Unterschiede zu herkömmlichem JavaScript.

DSLs können nicht direkt vom Browser gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Tools beinhalten in der Regel die erforderlichen Werkzeuge zur Handhabung dieses Schritts oder können angepasst werden, um diesen Schritt einzuschließen. Obwohl es möglich ist, Framework-Anwendungen ohne Verwendung dieser domänenspezifischen Sprachen zu erstellen, wird deren Nutzung Ihren Entwicklungsprozess vereinfachen und es leichter machen, Hilfe von den Communities um diese Frameworks zu erhalten.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), was für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die eine HTML-ähnliche Syntax in eine JavaScript-Umgebung einführt. Es wurde vom React-Team für die Verwendung in React-Anwendungen erfunden, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden — wie zum Beispiel Vue-Anwendungen.

Das folgende Beispiel zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck repräsentiert ein HTML-Element [`<header>`](/de/docs/Web/HTML/Element/header) mit einem [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element darin. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstante `subject` zu lesen und in unser `<h1>` einzufügen.

Wenn sie mit React verwendet werden, würde das JSX aus dem vorherigen Schnipsel in Folgendes kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn der obige Schnipsel letztendlich vom Browser gerendert wird, sieht das erzeugte HTML so aus:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Templating-Sprache ist nicht spezifisch für Ember-Anwendungen, wird jedoch stark in Ember-Apps verwendet. Handlebars-Code ähnelt HTML, hat jedoch die Möglichkeit, Daten von anderswo zu ziehen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich aufbaut.

Wie JSX verwendet auch Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet jedoch ein doppeltes Paar geschweifter Klammern anstelle eines einzelnen Paares.

Bei diesem Handlebars-Template:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

Und diesen Daten:

```json
{
  "subject": "World"
}
```

Wird Handlebars HTML wie dieses erzeugen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist ein _Superset_ von JavaScript, was bedeutet, dass es JavaScript erweitert — alle JavaScript-Codes sind gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich für die Strenge, die es den Entwicklern erlaubt, in ihrem Code durchzusetzen. Nehmen wir zum Beispiel eine Funktion `add()`, die Ganzzahlen `a` und `b` annimmt und ihre Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag für jemanden, der mit JavaScript vertraut ist, trivial erscheinen, könnte aber dennoch klarer sein. JavaScript erlaubt es uns, den `+`-Operator zu verwenden, um Strings miteinander zu verketten, sodass diese Funktion technisch immer noch funktioniert, wenn `a` und `b` Strings sind — aber sie würde möglicherweise nicht das erwartete Ergebnis liefern. Was, wenn wir nur Zahlen in diese Funktion einfließen lassen möchten? TypeScript macht dies möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das hier nach jedem Parameter geschrieben wird, weist TypeScript darauf hin, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler auslösen und wir wären gezwungen, unseren Fehler zu beheben. Wir könnten unser eigenes JavaScript schreiben, um diese Fehler für uns auszulösen, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Prüfungen für uns durchführen zu lassen.

## Komponenten schreiben

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks ein Modell für Komponenten. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars und Angular- und Vue-Komponenten mit einer Templating-Syntax, die HTML leicht erweitert.

Unabhängig von ihrer Meinung darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften, die sie möglicherweise benötigen, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann, zu beschreiben.

Die Code-Schnipsel im Rest dieses Abschnitts verwenden React als Beispiel und sind in JSX geschrieben.

### Eigenschaften

Eigenschaften oder **props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder mitwirkende Autor für seine Arbeit Anerkennung erhält. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel passt. Diese Komponente muss ein Porträt des Autors und eine kurze biografische Notiz über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll und welcher Text gedruckt werden soll, muss `AuthorCredit` einige Requisiten akzeptieren.

Eine React-Darstellung dieser `AuthorCredit`-Komponente könnte ungefähr so aussehen:

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

`{props.src}`, `{props.alt}`, und `{props.byline}` repräsentieren, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir Code wie diesen an der Stelle schreiben, an der wir sie gerendert haben möchten (was wahrscheinlich innerhalb einer anderen Komponente sein wird):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztendlich das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure)-Element im Browser rendern, wobei seine Struktur in der `AuthorCredit`-Komponente definiert ist und sein Inhalt in den Props enthalten ist, die im `AuthorCredit`-Komponentenaufruf enthalten sind:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben über das Konzept des **Zustands** im vorherigen Kapitel gesprochen — ein robustes Zustandsmanagement ist der Schlüssel zu einem effektiven Framework, und jede Komponente kann Daten haben, deren Zustand gesteuert werden muss. Dieser Zustand bleibt bestehen, solange die Komponente verwendet wird. Wie Props kann der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Betrachten Sie zum Beispiel einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte für die Verfolgung ihres eigenen _Zähl_-Zustands verantwortlich sein und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React Hook](https://react.dev/reference/react)**, das, gegeben einen anfänglichen Datenwert, diesen Wert verfolgt, wenn er aktualisiert wird. Der Code wird anfänglich so im Browser gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf eine robuste Weise über die App hinweg, ohne dass Sie Code schreiben müssen, um dies selbst zu tun.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, um auf Browsereignisse zu reagieren, damit unsere Anwendungen auf unsere Benutzer reagieren können. Jedes Framework bietet seine eigene Syntax zum Abhören von Browsereignissen, die sich auf die Namen der entsprechenden nativen Browsereignisse bezieht.

In React erfordert das Abhören des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalitäten, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Ereignishandlers auf, um `count` auf den aktuellen Wert zu setzen, plus eins.

## Komponenten stylen

Jedes Framework bietet eine Möglichkeit, die Stile für Ihre Komponenten — oder für die gesamte Anwendung — zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, bieten sie alle Ihnen mehrere Möglichkeiten dazu. Mit der Hinzufügung einiger Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilieren.

## Abhängigkeiten verwalten

Alle großen Frameworks bieten Mechanismen zur Handhabung von Abhängigkeiten — dafür, Komponenten innerhalb anderer Komponenten zu verwenden, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Merkmalen unterscheidet sich der genaue Mechanismus zwischen den Frameworks, aber das Endergebnis ist das gleiche. Komponenten tendieren dazu, Komponenten in anderen Komponenten zu verwenden, wobei die standardmäßige [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnliches verwendet wird.

### Komponenten in Komponenten

Ein wichtiger Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten miteinander kombiniert werden können. Genau so, wie Sie HTML-Tags ineinander verschachteln können, um eine Website zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework ermöglicht es Ihnen, Komponenten zu schreiben, die andere Komponenten nutzen (und somit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit`-React-Komponente innerhalb einer `Article`-Komponente verwendet werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Sobald dies getan ist, könnte `AuthorCredit` innerhalb der `Article`-Komponente so verwendet werden:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Dependency Injection

Reale Anwendungen können häufig Komponentenstrukturen mit mehreren Ebenen der Verschachtelung umfassen. Eine `AuthorCredit`-Komponente, die viele Ebenen tief geschachtelt ist, könnte aus irgendeinem Grund Daten von der obersten Ebene unserer Anwendung benötigen.

Angenommen, die Magazinseite, die wir erstellen, ist wie folgt strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` so umschreiben, dass sie wissen, dass sie Requisiten weitergeben müssen, aber dies könnte mühsam werden, wenn es viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch übermäßig: `Home` und `Article` machen tatsächlich keinen Gebrauch vom Porträt oder der biografischen Notiz des Autors, aber wenn wir diese Informationen in die `AuthorCredit` bringen möchten, müssen wir `Home` und `Article` ändern, um dies zu ermöglichen.

Das Problem des Weitergebens von Daten durch viele Schichten von Komponenten wird als Prop-Durchbohren bezeichnet und ist für große Anwendungen nicht ideal.

Um das Prop-Durchbohren zu umgehen, bieten Frameworks eine Funktionalität, die als Dependency Injection bekannt ist. Dies ist eine Möglichkeit, bestimmte Daten direkt an die Komponenten zu bringen, die sie benötigen, ohne sie durch dazwischenliegende Ebenen zu übergeben. Jedes Framework implementiert die Dependency Injection unter einem anderen Namen und auf eine andere Weise, aber der Effekt ist letztendlich derselbe.

Angular nennt diesen Vorgang [Dependency Injection](https://angular.dev/guide/di/dependency-injection); Vue hat [`provide()` und `inject()`-Komponentenmethoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand durch [Services](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, beginnend mit der Zeit, in der sie dem DOM hinzugefügt und dann vom Browser gerendert wird (häufig als _Mounting_ bezeichnet), bis zu der Zeit, in der sie aus dem DOM entfernt wird (oft als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf dieselben Phasen. Alle Frameworks folgen demselben allgemeinen Modell: Sie ermöglichen es Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _mountet_, wenn sie _rendert_, wenn sie _unmountet_ und in vielen Phasen dazwischen.

Die _Rendern-Phase_ ist die entscheidendste zu verstehen, da sie am häufigsten wiederholt wird, wenn Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es eine Ergänzung zu dem, was sich im Browser befindet, ein Löschung oder eine Bearbeitung dessen, was dort ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Wie bei den Lebenszyklen nehmen die Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle verfolgen die aktuelle gerenderte Version des DOMs Ihres Browsers und jedes Framework trifft leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie in der Regel nicht selbst mit dem DOM. Diese Abstraktion weg vom DOM ist komplexer und speicherintensiver, als das DOM selbst zu aktualisieren, aber ohne sie könnten die Frameworks Ihnen nicht erlauben, auf die deklarative Weise zu programmieren, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOMs, vergleicht sie dann mit dem "echten" DOM — dem DOM, das tatsächlich für Ihre Benutzer gerendert wird — um zu entscheiden, was gerendert werden soll. Die Anwendung erstellt ein "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet dieses Diff, um Aktualisierungen am echten DOM vorzunehmen. Sowohl React als auch Vue nutzen ein virtuelles DOM-Modell, wenden jedoch nicht exakt dieselbe Logik beim Diffting oder Rendern an.

Sie können [mehr über den virtuellen DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM ähnlich, da er ein DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, aber unterschiedlich, da er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige Framework, das in diesem Modul bisher besprochen wurde und einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtueller DOM noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Embers Vorlagen in eine Art "Bytecode" transpilieren, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Bestandteil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul abgedeckten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, Client-seitige Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von einer Testabdeckung, die sicherstellt, dass Ihre Software weiterhin so funktioniert, wie Sie es erwarten, und Webanwendungen sind da keine Ausnahme. Jedes Framework-Ökosystem bietet Tools, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in die Frameworks selbst integriert, aber die Befehlszeilen-Tools, die zum Generieren von Framework-Apps verwendet werden, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem, die Funktionen für Unit- und Integrationstests bieten.

[Testing Library](https://testing-library.com/) ist eine Suite von Test-Utilities, die Tools für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumentation behandelt [das Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, geschrieben mit Hilfe von React Testing Library — er testet eine Reihe von Dingen, z.B. das Vorhandensein des Buttons und ob der Button den richtigen Text anzeigt, nachdem er 0, 1 und 2 Mal geklickt wurde:

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

Zu diesem Punkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Tools haben, die Sie bei der Erstellung von Anwendungen mit Frameworks verwenden werden. Ich bin sicher, dass Sie begeistert sind, loszulegen und tatsächlich etwas zu programmieren, und das werden Sie als Nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
