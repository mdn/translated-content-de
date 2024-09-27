---
title: Hauptmerkmale von Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jedes größere JavaScript-Framework hat einen anderen Ansatz zum Aktualisieren des DOM, zum Umgang mit Browsereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel untersucht die Hauptmerkmale der „Big 4“-Frameworks und betrachtet, wie Frameworks auf hoher Ebene tendenziell arbeiten, sowie die Unterschiede zwischen ihnen.

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
      <td>Verständnis der Hauptmerkmale der Frameworks.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Alle in diesem Modul besprochenen Frameworks werden von JavaScript angetrieben und ermöglichen es Ihnen, domänenspezifische Sprachen (DSLs) zu verwenden, um Ihre Anwendungen zu entwickeln. Besonders React hat die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** verwendet. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datenvariablen liest, und diese Daten können verwendet werden, um den Prozess der UI-Erstellung zu vereinfachen.

Angular-Anwendungen nutzen häufig umfangreich **TypeScript**. TypeScript befasst sich nicht mit der Erstellung von Benutzeroberflächen, ist aber eine domänenspezifische Sprache und weist signifikante Unterschiede zu JavaScript auf.

DSLs können nicht direkt vom Browser gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. [Transformation ist ein zusätzlicher Schritt im Entwicklungsprozess](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#transformation), aber Framework-Tools beinhalten in der Regel die erforderlichen Werkzeuge, um diesen Schritt zu bewältigen, oder können entsprechend angepasst werden. Obwohl es möglich ist, Framework-Apps ohne diese domänenspezifischen Sprachen zu erstellen, wird die Verwendung dieser Sprachen Ihren Entwicklungsprozess optimieren und es Ihnen erleichtern, Hilfe von den Communities um diese Frameworks herum zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), was für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team zur Verwendung in React-Anwendungen erfunden, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden, wie beispielsweise Vue-Apps.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-`<header>`-Element mit einem `<h1>`-Element darin dar. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der `subject`-Konstanten zu lesen und in unseren `<h1>` einzufügen.

Bei der Verwendung mit React würde das JSX aus dem vorherigen Snippet in folgendes kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es letztendlich vom Browser gerendert wird, erzeugt das obige Snippet HTML, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Templating-Sprache ist nicht spezifisch für Ember-Anwendungen, wird jedoch stark in Ember-Apps genutzt. Handlebars-Code ähnelt HTML, bietet jedoch die Möglichkeit, Daten von anderswo zu beziehen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich erstellt.

Wie JSX verwenden Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwenden ein doppeltes Paar von geschweiften Klammern anstelle eines einzelnen Paares.

Angenommen, wir haben diese Handlebars-Vorlage:

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

Handlebars würden HTML wie dieses erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist ein _Superset_ von JavaScript, was bedeutet, dass es JavaScript erweitert – alle JavaScript-Codes sind gültige TypeScript, aber nicht umgekehrt. TypeScript ist nützlich für den Grad der Strenge, den Entwickler in ihrem Code durchsetzen können. Betrachten Sie beispielsweise eine Funktion `add()`, die ganzzahlige Werte `a` und `b` annimmt und deren Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code könnte für jemanden, der an JavaScript gewöhnt ist, trivial erscheinen, könnte aber dennoch klarer sein. JavaScript erlaubt es uns, den `+`-Operator zur Verkettung von Zeichenfolgen zu verwenden, sodass diese Funktion technisch noch funktionieren würde, wenn `a` und `b` Zeichenfolgen wären – nur könnten Sie vielleicht nicht das erwartete Ergebnis erhalten. Was wäre, wenn wir nur Zahlen in diese Funktion übergeben lassen wollten? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das nach jedem Parameter geschrieben wird, teilt TypeScript mit, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler auslösen, und wir wären gezwungen, unseren Fehler zu beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler auslöst, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Prüfungen für uns übernehmen zu lassen.

## Komponenten schreiben

Wie im vorherigen Kapitel erwähnt, haben die meisten Frameworks eine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars, und Angular- und Vue-Komponenten mit einer Templating-Syntax, die HTML leicht erweitert.

Unabhängig von ihrer Meinung darüber, wie Komponenten geschrieben werden sollten, bietet die Komponente jedes Frameworks eine Möglichkeit, die externen Eigenschaften, die sie möglicherweise benötigt, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann, zu beschreiben.

Die Code-Snippets im restlichen Abschnitt verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **Props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit Anerkennung erhält. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors und eine kurze Byline über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll und welche Byline gedruckt werden soll, muss `AuthorCredit` einige Props akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` stellen dar, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir Code wie diesen an der Stelle schreiben, wo wir sie gerendert haben möchten (was wahrscheinlich innerhalb einer anderen Komponente sein wird):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztendlich das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure)-Element im Browser rendern, mit seiner Struktur wie in der `AuthorCredit`-Komponente definiert und seinem Inhalt wie in den auf der `AuthorCredit`-Komponentenaufruf enthaltenen Props definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben im vorherigen Kapitel über das Konzept des **Zustands** gesprochen – ein robuster Mechanismus zum Umgang mit dem Zustand ist entscheidend für ein effektives Framework, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand bleibt in irgendeiner Weise bestehen, solange die Komponente in Gebrauch ist. Wie Props kann der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Als Beispiel betrachten Sie eine Schaltfläche, die zählt, wie oft sie geklickt wurde. Diese Komponente sollte für die Verfolgung ihres eigenen _Zähler_-Zustands verantwortlich sein und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, sobald ein Initialwert angegeben ist, diesen Wert nachverfolgt, während er aktualisiert wird. Der Code wird zunächst so im Browser gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf robuste Weise in der gesamten App, ohne dass Sie Code schreiben müssen, um dies selbst zu tun.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, auf Browsereignisse zu reagieren, damit unsere Anwendungen auf unsere Nutzer reagieren können. Jedes Framework bietet seine eigene Syntax zum Abhören von Browsereignissen, die auf die Namen der entsprechenden nativen Browsereignisse verweisen.

In React erfordert das Hören des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion im `onClick`-Ereignishandler auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Komponenten stylen

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten zu definieren – oder für die gesamte Anwendung. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, bieten sie Ihnen alle mehrere Möglichkeiten dazu. Mit Hilfe von einigen Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpillieren.

## Umgang mit Abhängigkeiten

Alle großen Frameworks bieten Mechanismen zum Umgang mit Abhängigkeiten – wie man Komponenten in andere Komponenten einfügt, manchmal mit mehreren Hierarchiestufen. Wie bei anderen Funktionen unterscheidet sich der Mechanismus je nach Framework, aber das Endergebnis ist dasselbe. Komponenten neigen dazu, Komponenten in andere Komponenten unter Verwendung der standardmäßigen [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem zu importieren.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten miteinander komponiert werden können. Genau wie Sie HTML-Tags innerhalb anderer schreiben können, um eine Website zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework ermöglicht es Ihnen, Komponenten zu schreiben, die andere Komponenten verwenden (und daher von ihnen abhängig sind).

Zum Beispiel könnte unsere `AuthorCredit`-React-Komponente innerhalb einer `Article`-Komponente genutzt werden. Das bedeutet, dass `Article` `AuthorCredit` importieren muss.

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

In realen Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen auftreten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief verschachtelt ist, könnte aus irgendeinem Grund Daten von der Wurzelebene unserer Anwendung benötigen.

Nehmen wir an, die Magazin-Website, die wir erstellen, ist folgendermaßen strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` so umschreiben, dass sie wissen, dass sie Props nach unten durchgeben müssen, aber das kann mühsam werden, wenn es viele, viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` verwenden das Bild oder die Byline des Autors nicht wirklich, aber wenn wir diese Informationen in die `AuthorCredit` bekommen wollen, müssen wir `Home` und `Article` ändern, um es zu ermöglichen.

Das Problem, Daten durch viele Schichten von Komponenten hindurchzureichen, nennt man Prop Drilling, und es ist nicht ideal für große Anwendungen.

Um Prop Drilling zu umgehen, bieten Frameworks Funktionalitäten, die als Abhängigkeitsinjektion bekannt sind, das ist eine Möglichkeit, bestimmte Daten direkt zu den Komponenten zu bringen, die sie benötigen, ohne sie durch dazwischenliegende Ebenen zu führen. Jedes Framework implementiert Abhängigkeitsinjektion unter einem anderen Namen und auf unterschiedliche Weise, aber die Wirkung ist letztlich die gleiche.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.io/guide/dependency-injection); Vue hat [`provide()` und `inject()`-Komponentenmethoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Kontext-API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt Zustand durch [Services](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, von der Zeit, in der sie in das DOM eingefügt und dann vom Browser gerendert wird (häufig als _Mounting_ bezeichnet) bis zu der Zeit, in der sie aus dem DOM entfernt wird (häufig als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich und nicht alle geben Entwicklern Zugang zu den gleichen Phasen. Alle Frameworks folgen dem gleichen allgemeinen Modell: Sie erlauben Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _gemountet_, wenn sie _gerendert_, wenn sie _unmounted_ wird, und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie am häufigsten wiederholt wird, während Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es ein Neuzugang zu dem, was sich im Browser befindet, eine Löschung oder eine Änderung dessen, was da ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Rendern von Elementen

Wie bei den Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle von ihnen verfolgen die aktuelle gerenderte Version Ihres Browser-DOM und jede geht leicht unterschiedlich vor, wie sich das DOM ändern soll, wenn Komponenten Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplizierter und speicherintensiver als das direkte Aktualisieren des DOM, aber ohne sie könnten Frameworks Ihnen nicht die deklarative Programmierung ermöglichen, für die sie bekannt sind.

Der **virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers in JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM und vergleicht sie dann mit dem "echten" DOM – dem DOM, das tatsächlich für Ihre Benutzer gerendert wird – um zu entscheiden, was gerendert werden soll. Die Anwendung erstellt eine "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem aktuell gerenderten DOM zu vergleichen und verwendet diese Diff, um Updates am realen DOM vorzunehmen. Sowohl React als auch Vue nutzen ein virtuelles DOM-Modell, aber sie wenden nicht exakt die gleiche Logik beim Vergleichen oder Rendern an.

Sie können [mehr über den virtuellen DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **inkrementelle DOM** ähnelt dem virtuellen DOM darin, dass er eine DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll. Er unterscheidet sich jedoch darin, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige Framework, das bisher in diesem Modul besprochen wurde, das einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM auf dem Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Es ist weder ein virtueller noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Ember-Vorlagen in eine Art "Bytecode" transpiliert werden, der einfacher und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#routing) ein wichtiger Teil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehrere Bibliotheken), die Entwicklern hilft, Client-seitiges Routing in ihren Anwendungen zu implementieren.

## Tests

Alle Anwendungen profitieren von einer Testabdeckung, die sicherstellt, dass Ihre Software weiterhin das erwartete Verhalten zeigt, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Tools, die das Schreiben von Tests erleichtern. Test-Tools sind nicht direkt in die Frameworks integriert, aber die Befehlszeilentools zum Generieren von Framework-Apps geben Ihnen Zugriff auf die entsprechenden Test-Tools.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem, mit Fähigkeiten für Unit- und Integrationstests gleichermaßen.

[Testing Library](https://testing-library.com/) ist eine Suite von Test-Utilities, die Tools für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumente behandeln das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, der mit Hilfe der React Testing Library geschrieben wurde – er testet eine Reihe von Dingen, wie das Vorhandensein der Schaltfläche und ob die Schaltfläche den korrekten Text nach 0, 1 und 2 Mal Klicken anzeigt:

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

An diesem Punkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Tools haben, die Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, dass Sie begeistert sind, loszulegen und tatsächlich ein wenig zu programmieren, und genau das werden Sie als Nächstes tun! An diesem Punkt können Sie wählen, welches Framework Sie zuerst lernen möchten:

- [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
