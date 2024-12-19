---
title: Hauptmerkmale von Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes bedeutende JavaScript-Framework hat einen eigenen Ansatz zur Aktualisierung des DOM, zum Umgang mit Browserevents und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der „großen 4“ Frameworks untersuchen, indem er beschreibt, wie Frameworks tendenziell auf einer hohen Ebene funktionieren und welche Unterschiede es zwischen ihnen gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
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

Die meisten Frameworks erlauben Ihnen die Verwendung von domänenspezifischen Sprachen (DSLs), um Ihre Anwendungen zu erstellen. Insbesondere React hat die Nutzung von **JSX** für das Schreiben seiner Komponenten populär gemacht, während Ember **Handlebars** verwendet. Anders als HTML können diese Sprachen Datenvariablen lesen, und diese Daten können genutzt werden, um den Prozess des Schreibens Ihrer Benutzeroberfläche zu beschleunigen.

Angular-Anwendungen machen häufig starken Gebrauch von **TypeScript**. TypeScript befasst sich nicht mit dem Schreiben von Benutzeroberflächen, es ist jedoch eine domänenspezifische Sprache und weist signifikante Unterschiede zu herkömmlichem JavaScript auf.

DSLs können nicht direkt vom Browser gelesen werden; sie müssen zunächst in JavaScript oder HTML umgewandelt werden. Framework-Tools beinhalten im Allgemeinen die notwendigen Werkzeuge, um diesen Schritt zu bewältigen, oder können angepasst werden, um diesen Schritt zu integrieren. Während es möglich ist, Framework-Anwendungen ohne Verwendung dieser domänenspezifischen Sprachen zu erstellen, wird die Nutzung dieser Sprachen Ihren Entwicklungsprozess vereinfachen und es Ihnen erleichtern, Unterstützung von den Gemeinschaften um diese Frameworks herum zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), das für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team für die Nutzung in React-Anwendungen entwickelt, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden, zum Beispiel Vue-Anwendungen.

Das Folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-`<header>`-Element dar, das ein `<h1>`-Element enthält. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstante `subject` zu lesen und ihn in unser `<h1>` einzufügen.

Bei Verwendung mit React würde das JSX aus dem vorherigen Snippet so kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es letztendlich vom Browser gerendert wird, wird das obige Snippet HTML erzeugen, das folgendermaßen aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Templating-Sprache ist nicht spezifisch für Ember-Anwendungen, wird aber stark in Ember-Anwendungen genutzt. Handlebars-Code ähnelt HTML, bietet jedoch die Möglichkeit, Daten von woanders einzubeziehen. Diese Daten können genutzt werden, um das HTML, das eine Anwendung letztendlich erstellt, zu beeinflussen.

Ähnlich wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein Doppelpaar von geschweiften Klammern, anstatt nur eines.

Bei dieser Handlebars-Vorlage:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

Und diesen Daten:

```js
{
  subject: "World";
}
```

Wird Handlebars HTML folgendermaßen erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist ein _Superset_ von JavaScript, was bedeutet, dass es JavaScript erweitert — jeder JavaScript-Code ist gültiges TypeScript, aber umgekehrt nicht. TypeScript ist nützlich für die Strenge, die es Entwicklern ermöglicht, in ihrem Code durchzusetzen. Betrachten Sie zum Beispiel eine Funktion `add()`, die die Ganzzahlen `a` und `b` nimmt und ihre Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag für jemanden, der an JavaScript gewöhnt ist, trivial sein, könnte jedoch immer noch klarer sein. JavaScript erlaubt es uns, den `+`-Operator zum Verketten von Strings zu verwenden, sodass diese Funktion technisch immer noch funktioniert, wenn `a` und `b` Strings sind — sie könnte Ihnen nur nicht das Ergebnis geben, das Sie erwarten. Was wäre, wenn wir nur erlauben wollten, dass Zahlen an diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das nach jedem Parameter geschrieben wird, sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument an sie übergeben würden, würde TypeScript während der Kompilierung einen Fehler auslösen und wir müssten unseren Fehler beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns auslöst, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Überprüfungen für uns übernehmen zu lassen.

## Schreiben von Komponenten

Wie im vorherigen Abschnitt erwähnt, haben die meisten Frameworks eine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars und Angular- und Vue-Komponenten mit einer Templatesyntax, die HTML leicht erweitert.

Unabhängig von ihren Ansichten darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen könnten, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann.

Die Codeschnipsel im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **Props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder mitwirkende Autor eine Anerkennung für seine Arbeit erhält. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel passt. Diese Komponente muss ein Porträt des Autors und eine kurze Autorenzeile über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll, und welchen Text gedruckt werden soll, muss `AuthorCredit` einige Props akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` stellen dar, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir solch einen Code dort schreiben, wo wir sie gerendert haben möchten (was wahrscheinlich innerhalb einer anderen Komponente sein wird):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztendlich das folgende `<figure>`-Element im Browser rendern, mit seiner Struktur, wie sie in der `AuthorCredit`-Komponente definiert ist, und seinem Inhalt, wie er in den Props definiert ist, die im Aufruf der `AuthorCredit`-Komponente enthalten sind:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben über das Konzept des **Zustands** im vorherigen Kapitel gesprochen — ein robustes Zustandsmanagement ist der Schlüssel zu einem effektiven Framework, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand wird in gewisser Weise bestehen bleiben, solange die Komponente in Gebrauch ist. Ähnlich wie Props kann Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Betrachten Sie als Beispiel einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte dafür verantwortlich sein, ihren eigenen _count_ Zustand zu verfolgen, und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, gegeben einen anfänglichen Datenwert, diesen Wert verfolgt, während er aktualisiert wird. Der Code wird im Browser zuerst folgendermaßen gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf eine robuste Weise über die App hinweg, ohne dass Sie selbst Code schreiben müssen, der das tut.

### Ereignisse

Um interaktiv zu sein, müssen Komponenten Wege haben, um auf Browserevents zu reagieren, sodass unsere Anwendungen auf unsere Benutzer reagieren können. Jedes Framework bietet seine eigene Syntax zum Abhören von Browserevents, die auf die Namen der entsprechenden nativen Browserevents verweist.

In React erfordert das Abhören des [`click`](https://developer.mozilla.org/de/docs/Web/API/Element/click_event) Events eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Ereignishandlers auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Stile für Komponenten

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten oder für die gesamte Anwendung zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, geben sie Ihnen alle mehrere Möglichkeiten, dies zu tun. Mit der Ergänzung einiger Hilfsmodule können Sie Ihre Framework-Anwendungen in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilen.

## Umgang mit Abhängigkeiten

Alle großen Frameworks bieten Mechanismen zum Umgang mit Abhängigkeiten — der Nutzung von Komponenten in anderen Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Merkmalen wird sich der genaue Mechanismus zwischen den Frameworks unterscheiden, aber das Endergebnis ist dasselbe. Komponenten neigen dazu, Komponenten in andere Komponenten mit der Standard-[JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem zu importieren.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur besteht darin, dass Komponenten zusammengefügt werden können. Genau wie Sie HTML-Tags in einander schreiben können, um eine Website zu erstellen, können Sie Komponenten in anderen Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework erlaubt es Ihnen, Komponenten zu schreiben, die andere Komponenten nutzen (und somit darauf angewiesen sind).

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

### Dependency Injection

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen umfassen. Eine tief verschachtelte `AuthorCredit`-Komponente könnte beispielsweise aus bestimmten Gründen Daten von der allerhöchsten Ebene unserer Anwendung benötigen.

Angenommen, die Magazinseite, die wir erstellen, ist so strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` so umschreiben, dass sie wissen, wie sie Props weitergeben, aber das könnte mühsam werden, wenn es viele, viele Ebenen zwischen Ursprung und Ziel unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` nutzen das Porträt oder die Autorenzeile des Autors tatsächlich nicht, aber wenn wir diese Informationen in die `AuthorCredit`-Komponente bekommen wollen, müssen wir `Home` und `Article` anpassen, um dies zu ermöglichen.

Das Problem des Weitergebens von Daten durch viele Komponentenebenen wird Prop-Drilling genannt und ist für große Anwendungen nicht ideal.

Um Prop-Drilling zu umgehen, bieten Frameworks Funktionalitäten, die als Dependency Injection bekannt sind, die es ermöglichen, bestimmte Daten direkt an die Komponenten zu liefern, die sie benötigen, ohne sie durch zwischengeschaltete Ebenen zu leiten. Jedes Framework implementiert Dependency Injection unter einem anderen Namen und auf eine andere Weise, aber der Effekt ist letztendlich derselbe.

Angular nennt diesen Prozess [Dependency Injection](https://angular.io/guide/dependency-injection); Vue hat [`provide()` und `inject()` Komponentenmethode](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand durch [Services](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, von dem Zeitpunkt, an dem sie dem DOM hinzugefügt und vom Browser gerendert wird (oft als _Montieren_ bezeichnet) bis zu dem Zeitpunkt, an dem sie aus dem DOM entfernt wird (oft als _Demontieren_ bezeichnet). Jedes Framework nennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf dieselben Phasen. Alle Frameworks folgen demselben allgemeinen Modell: Sie ermöglichen Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _montiert_, _gerendert_, _demontiert_ wird und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie am häufigsten wiederholt wird, wenn Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es eine Ergänzung dessen, was im Browser ist, eine Löschung oder eine Bearbeitung dessen, was da ist.

Dieses [Diagramm eines React-Komponenten-Lebenszyklus](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Rendern von Elementen

Genau wie bei Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle verfolgen die aktuell gerenderte Version Ihres Browser-DOMs und jedes trifft leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicherintensiver als das Aktualisieren des DOMs von Hand, aber ohne diese Abstraktion könnten Frameworks es nicht ermöglichen, in der deklarativen Art zu programmieren, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOMs, vergleicht sie dann mit dem „echten“ DOM — dem DOM, das tatsächlich für Ihre Benutzer gerendert wird —, um zu entscheiden, was gerendert werden soll. Die Anwendung erstellt einen „Diff“, um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen und verwendet diesen Diff, um Updates auf das reale DOM anzuwenden. Sowohl React als auch Vue verwenden ein Modell des virtuellen DOM, wenngleich sie nicht die exakt gleiche Logik beim Diffting oder Rendern anwenden.

Sie können [mehr über den virtuellen DOM in der React-Dokumentation lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM ähnlich, da er einen DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, jedoch anders, da er keine vollständige Kopie des DOMs im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOMs, die nicht geändert werden müssen. Angular ist das einzige Framework, das bisher in diesem Modul besprochen wurde und einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Der **Glimmer VM** ist einzigartig für Ember. Es ist weder ein virtueller noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Embers Templates in eine Art „Bytecode“ transpiliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie im [vorherigen Kapitel erwähnt](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing), ist Routing ein wichtiger Teil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Anwendungen mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, clientseitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Testabdeckungen, die sicherstellen, dass Ihre Software weiterhin so funktioniert, wie Sie es erwarten, und Webanwendungen bilden da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Werkzeuge, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in den Frameworks selbst integriert, aber die Befehlszeilen-Tools, die zur Erstellung von Framework-Anwendungen verwendet werden, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework verfügt über umfangreiche Werkzeuge in seinem Ökosystem mit Funktionen sowohl für Unit- als auch Integrationstests.

[Testing Library](https://testing-library.com/) ist eine Suite von Testwerkzeugen, die Werkzeuge für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumentation behandelt das [Testen von Ember-Anwendungen](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, geschrieben mit Hilfe von React Testing Library — er testet eine Reihe von Dingen, wie zum Beispiel die Existenz des Buttons und ob der Button den richtigen Text nach 0, 1 und 2 Klicks anzeigt:

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

An diesem Punkt sollten Sie mehr über die tatsächlichen Sprachen, Merkmale und Werkzeuge wissen, die Sie beim Erstellen von Anwendungen mit Frameworks verwenden werden. Ich bin sicher, Sie sind begeistert, loszulegen und tatsächlich etwas zu programmieren, und genau das werden Sie als Nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
