---
title: Hauptmerkmale des Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jedes bedeutende JavaScript-Framework hat einen anderen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserevents und zur Bereitstellung einer angenehmen Entwicklererfahrung. In diesem Artikel werden die Hauptmerkmale der „großen 4“ Frameworks untersucht, wobei auf hoher Ebene betrachtet wird, wie Frameworks typischerweise arbeiten und welche Unterschiede zwischen ihnen bestehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die wichtigsten Code-Merkmale von Frameworks verstehen.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Alle in diesem Modul besprochenen Frameworks werden von JavaScript angetrieben und ermöglichen die Nutzung von domänenspezifischen Sprachen (DSLs) zum Aufbau Ihrer Anwendungen. Insbesondere hat React die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** verwendet. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datenvariablen liest, und diese Daten können genutzt werden, um den Prozess des Schreibens Ihrer Benutzeroberfläche zu vereinfachen.

Angular-Anwendungen machen oft umfangreichen Gebrauch von **TypeScript**. TypeScript befasst sich nicht mit dem Schreiben von Benutzeroberflächen, es ist jedoch eine domänenspezifische Sprache und weist erhebliche Unterschiede zu Vanilla JavaScript auf.

DSLs können nicht direkt vom Browser gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. [Transformation ist ein zusätzlicher Schritt im Entwicklungsprozess](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#transformation), aber die Framework-Werkzeuge enthalten im Allgemeinen die erforderlichen Tools, um diesen Schritt zu bewältigen oder können angepasst werden, um diesen Schritt zu beinhalten. Während es möglich ist, Framework-Apps ohne diese domänenspezifischen Sprachen zu erstellen, wird die Nutzung dieser Sprachen Ihren Entwicklungsprozess vereinfachen und es Ihnen leichter machen, Hilfe aus den Communitys rund um diese Frameworks zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), das für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team für die Verwendung in React-Anwendungen erfunden, kann jedoch auch zur Entwicklung anderer Anwendungen - wie zum Beispiel Vue-Apps - verwendet werden.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-<[`header>`](/de/docs/Web/HTML/Element/header)-Element mit einem <[`h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element dar, das sich darin befindet. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstanten `subject` zu lesen und ihn in unser `<h1>` einzufügen.

Wenn es mit React verwendet wird, würde das JSX aus dem vorherigen Ausschnitt in das Folgende kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es letztendlich vom Browser gerendert wird, produziert der obige Ausschnitt HTML, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/) Vorlagensprache ist nicht spezifisch für Ember-Anwendungen, jedoch wird sie stark in Ember-Apps genutzt. Handlebars-Code ähnelt HTML, bietet aber die Möglichkeit, Daten von anderswo zu beziehen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich erstellt.

Wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein doppeltes Paar geschweifter Klammern anstelle eines einzelnen Paares.

Gegeben sei diese Handlebars-Vorlage:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

Und diese Daten:

```js
{
  subject: "World";
}
```

Handlebars wird HTML wie dieses erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist eine _Obermenge_ von JavaScript, was bedeutet, dass es JavaScript erweitert - aller JavaScript-Code ist gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich für die Striktheit, die es Entwicklern ermöglicht in ihrem Code durchzusetzen. Zum Beispiel nehmen wir eine Funktion `add()`, die die Ganzzahlen `a` und `b` nimmt und deren Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag trivial für jemanden sein, der JavaScript gewöhnt ist, könnte aber dennoch klarer sein. JavaScript erlaubt es uns, den `+`-Operator zu verwenden, um Zeichenfolgen zu verketten, daher würde diese Funktion technisch immer noch funktionieren, wenn `a` und `b` Zeichenfolgen wären - es könnte nur nicht das gewünschte Ergebnis liefern. Was, wenn wir nur Zahlen in diese Funktion übergeben wollen? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das nach jedem Parameter geschrieben wird, teilt TypeScript mit, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion nutzen und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler erzeugen, und wir wären gezwungen, unseren Fehler zu korrigieren. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns auslöst, aber das würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Prüfungen für uns erledigen zu lassen.

## Komponenten schreiben

Wie im vorherigen Kapitel erwähnt, haben die meisten Frameworks eine Art Komponenten-Modell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars und Angular und Vue-Komponenten mit einer Templatesyntax, die HTML leicht erweitert.

Ungeachtet ihrer Meinung darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen, den internen Zustand, den die Komponente verwalten soll, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann.

Die Codeausschnitte im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit anerkannt wird. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors anzeigen und eine kurze Autorenzeile über ihn enthalten. Um zu wissen, welches Bild gerendert werden soll und welche Autorenzeile gedruckt werden soll, muss `AuthorCredit` einige Props akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` repräsentieren, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir Code wie diesen an der Stelle schreiben, an der sie gerendert werden soll (was wahrscheinlich innerhalb einer anderen Komponente sein wird):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait von Zelda Schiff"
  byline="Zelda Schiff ist Chefredakteurin der Library Times."
/>
```

Dies wird schließlich das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure)-Element im Browser rendern, mit seiner Struktur, wie sie in der `AuthorCredit`-Komponente definiert ist, und seinem Inhalt, wie er in den Props enthalten ist, die bei dem `AuthorCredit`-Komponentenaufruf enthalten sind:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait von Zelda Schiff" />
  <figcaption>Zelda Schiff ist Chefredakteurin der Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben das Konzept des **Zustands** im vorherigen Kapitel besprochen - ein robustes Mechanismus zur Zustandsverwaltung ist entscheidend für ein effektives Framework und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand bleibt in gewisser Weise bestehen, solange die Komponente in Gebrauch ist. Wie Props kann auch der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Als Beispiel betrachten wir einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte dafür verantwortlich sein, ihren eigenen _Anzahl_-Zustand zu verfolgen und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React Hook](https://react.dev/reference/react)**, der, ausgehend von einem Anfangswert, diesen Wert verfolgt, wenn er aktualisiert wird. Der Code wird anfänglich so im Browser gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert zuverlässig in der gesamten App, ohne dass Sie selbst Code dafür schreiben müssen.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, auf Browserereignisse zu reagieren, sodass unsere Anwendungen auf unsere Benutzer reagieren können. Frameworks bieten jeweils ihre eigene Syntax an, um auf Browserereignisse zu lauschen, die die Namen der entsprechenden nativen Browserereignisse referenzieren.

In React erfordert das Hören auf das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eine spezielle Eigenschaft, `onClick`. Passen wir unseren `CounterButton`-Code von oben an, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Event-Handlers auf, um `count` auf den aktuellen Wert plus eins zu setzen.

## Komponenten gestalten

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten oder für die gesamte Anwendung zu definieren. Obwohl der Ansatz zur Definition der Stile einer Komponente in jedem Framework leicht unterschiedlich ist, bieten alle mehrere Möglichkeiten dazu. Mit der Ergänzung einiger Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stile mit [PostCSS](https://postcss.org/) transpilieren.

## Abhängigkeiten handhaben

Alle großen Frameworks bieten Mechanismen zum Umgang mit Abhängigkeiten - das Verwenden von Komponenten innerhalb anderer Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Funktionen wird sich der genaue Mechanismus zwischen den Frameworks unterscheiden, aber das Ergebnis ist dasselbe. Komponenten neigen dazu, andere Komponenten in andere Komponenten zu importieren, indem sie die Standard-[JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) verwenden oder zumindest etwas Ähnliches.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenorientierten UI-Architektur besteht darin, dass Komponenten zusammengefügt werden können. Genauso wie Sie HTML-Tags ineinander verschachteln können, um eine Website zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework ermöglicht es Ihnen, Komponenten zu schreiben, die auf andere Komponenten zurückgreifen (und somit davon abhängig sind).

Beispielsweise könnte unsere React-Komponente `AuthorCredit` innerhalb einer `Article`-Komponente genutzt werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Sobald das erledigt ist, könnte `AuthorCredit` innerhalb der `Article`-Komponente wie folgt verwendet werden:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Abhängigkeitsinjektion

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen beinhalten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief geschachtelt ist, könnte aus irgendeinem Grund Daten von der aller obersten Ebene unserer Anwendung benötigen.

Angenommen, die Magazin-Site, die wir erstellen, ist so strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, damit sie wissen, wie sie die Props weitergeben, aber das könnte lästig werden, wenn es viele, viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` machen eigentlich keinen Gebrauch vom Porträt des Autors oder der Autorenzeile, aber wenn wir diese Informationen in das `AuthorCredit` bekommen möchten, müssen wir `Home` und `Article` anpassen, um es zu ermöglichen.

Das Problem, Daten durch viele Schichten von Komponenten zu leiten, wird als Prop-Drilling bezeichnet, und es ist nicht ideal für große Anwendungen.

Um das Prop-Drilling zu umgehen, bieten Frameworks eine Funktionalität namens Abhängigkeitsinjektion an, die es ermöglicht, bestimmte Daten direkt an die Komponenten zu bringen, die sie benötigen, ohne sie durch dazwischenliegende Ebenen zu reichen. Jedes Framework implementiert die Abhängigkeitsinjektion unter einem anderen Namen und auf unterschiedliche Weise, aber das Ergebnis ist letztendlich dasselbe.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.io/guide/dependency-injection); Vue hat [`provide()` und `inject()`-Methoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Kontext-API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand über [Dienste](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, von der Zeit, in der sie dem DOM hinzugefügt wird und dann vom Browser gerendert wird (oft als _Mounting_ bezeichnet) bis zu dem Zeitpunkt, an dem sie aus dem DOM entfernt wird (oft als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf dieselben Phasen. Alle Frameworks folgen dem gleichen allgemeinen Modell: Sie ermöglichen es Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _mountet_, wenn sie _rendert_, wenn sie _unmountet_ und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie am häufigsten wiederholt wird, während der Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es eine Hinzufügung zu dem, was im Browser ist, eine Löschung oder eine Bearbeitung dessen, was dort ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Wie bei Lebenszyklen, nehmen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle verfolgen die aktuelle gerenderte Version des DOM Ihres Browsers, und jedes trifft leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern sollte, wenn die Komponenten in Ihrer Anwendung neu gerendert werden. Da die Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion weg vom DOM ist komplexer und speicherintensiver als die direkte Aktualisierung des DOM, aber ohne sie könnten Frameworks Ihnen nicht die deklarative Programmierung ermöglichen, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM und vergleicht sie dann mit dem „echten“ DOM - dem DOM, das tatsächlich für Ihre Benutzer gerendert wird - um zu entscheiden, was gerendert werden soll. Die Anwendung erstellt ein „Diff“, um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet dieses Diff, um Aktualisierungen am echten DOM anzuwenden. Sowohl React als auch Vue nutzen ein virtuelles DOM-Modell, wenden jedoch nicht exakt die gleiche Logik beim Diffting oder Rendern an.

Sie können [mehr über den virtuellen DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ähnelt dem virtuellen DOM darin, dass er ein DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, unterscheidet sich jedoch dadurch, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die sich nicht ändern müssen. Angular ist das einzige Framework, das in diesem Modul bisher besprochen wurde, das einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig in Ember. Sie ist weder ein virtueller DOM noch ein inkrementeller DOM; es ist ein separater Prozess, durch den die Vorlagen von Ember in eine Art „Bytecode“ transpiliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#routing) ein wichtiger Teil des Web-Erlebnisses. Um in ausreichend komplexen Apps mit vielen Ansichten ein zerbrochenes Erlebnis zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, clientseitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von einer Testabdeckung, die sicherstellt, dass Ihre Software weiterhin in der erwarteten Weise funktioniert, und Webanwendungen sind da keine Ausnahme. Jedes Frameworks-Ökosystem bietet Werkzeuge, die das Schreiben von Tests erleichtern. Die Testwerkzeuge sind nicht in die Frameworks selbst integriert, aber die Befehlszeilentools, die zum Erstellen von Framework-Apps verwendet werden, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Werkzeuge in seinem Ökosystem, mit Fähigkeiten für Unit- und Integrationstests gleichermaßen.

[Testing Library](https://testing-library.com/) ist eine Suite von Testwerkzeugen, die Tools für viele JavaScript-Umgebungen hat, einschließlich React, Vue und Angular. Die Ember-Dokumente behandeln das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, der mit Hilfe der React Testing Library geschrieben wurde - er testet eine Reihe von Dingen, wie die Existenz des Buttons und ob der Button den richtigen Text anzeigt, nachdem er 0, 1 und 2 Mal geklickt wurde:

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

An dieser Stelle sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Tools haben, die Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, Sie sind begeistert, endlich mit dem Programmieren zu beginnen, und genau das werden Sie jetzt tun! An diesem Punkt können Sie wählen, mit welchem Framework Sie zuerst anfangen möchten:

- [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
