---
title: Hauptmerkmale von Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jedes große JavaScript-Framework hat einen anderen Ansatz, um das DOM zu aktualisieren, Browserereignisse zu handhaben und eine angenehme Entwicklererfahrung zu bieten. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen, und dabei betrachten, wie Frameworks im Allgemeinen funktionieren und die Unterschiede zwischen ihnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Das Verständnis der Hauptmerkmale von Frameworks im Code.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Alle in diesem Modul besprochenen Frameworks basieren auf JavaScript und alle erlauben die Verwendung von domänenspezifischen Sprachen (DSLs), um Ihre Anwendungen zu erstellen. Insbesondere React hat die Verwendung von **JSX** für das Schreiben seiner Komponenten populär gemacht, während Ember **Handlebars** nutzt. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datensätze liest, und diese Daten können verwendet werden, um den Prozess des UI-Schreibens zu optimieren.

Angular-Anwendungen nutzen häufig intensiv **TypeScript**. TypeScript kümmert sich nicht um das Schreiben von Benutzeroberflächen, aber es ist eine domänenspezifische Sprache und weist erhebliche Unterschiede zu "Vanilla" JavaScript auf.

DSLs können von Browsern nicht direkt gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. [Die Transformation ist ein zusätzlicher Schritt im Entwicklungsprozess](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#transformation), aber die Framework-Tools enthalten im Allgemeinen die notwendigen Werkzeuge, um diesen Schritt zu handhaben, oder können angepasst werden, um diesen Schritt einzubeziehen. Während es möglich ist, Framework-Anwendungen ohne diese domänenspezifischen Sprachen zu erstellen, wird die Verwendung dieser Sprachen Ihrem Entwicklungsprozess optimieren und es erleichtern, Hilfe von den Communities rund um diese Frameworks zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), das für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team für die Verwendung in React-Anwendungen erfunden, kann aber auch für die Entwicklung anderer Anwendungen verwendet werden – wie beispielsweise in Vue-Anwendungen.

Das Folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-`<header>`-Element mit einem darin befindlichen `<h1>`-Element dar. Die geschweiften Klammern um `{subject}` veranlassen die Anwendung, den Wert der `subject`-Konstante zu lesen und in unser `<h1>` einzufügen.

In Verbindung mit React würde das JSX aus dem vorherigen Beispiel in dieses umgewandelt werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es letztlich vom Browser gerendert wird, wird das obige Snippet HTML produzieren, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Template-Sprache ist nicht spezifisch für Ember-Anwendungen, wird aber stark in Ember-Apps genutzt. Handlebars-Code ähnelt HTML, hat aber die Möglichkeit, Daten von anderswo zu ziehen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das letztlich von einer Anwendung erstellt wird.

Wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein doppeltes Paar geschweifter Klammern anstelle eines einzelnen Paares.

Angenommen, dies ist ein Handlebars-Template:

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

[TypeScript](https://www.typescriptlang.org/) ist eine _Superset_ von JavaScript, d.h. es erweitert JavaScript - alle JavaScript-Codes sind gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich für die Strenge, die es Entwicklern erlaubt, über ihren Code durchzusetzen. Zum Beispiel eine Funktion `add()`, die ganze Zahlen `a` und `b` nimmt und deren Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag trivial für jemanden sein, der mit JavaScript vertraut ist, aber es könnte dennoch klarer sein. JavaScript erlaubt uns, den `+`-Operator zu verwenden, um Zeichenfolgen miteinander zu verknüpfen, so dass diese Funktion technisch immer noch funktionieren würde, wenn `a` und `b` Zeichenfolgen wären - es könnte Ihnen einfach nicht das gewünschte Ergebnis geben. Was, wenn wir nur erlauben wollten, dass Zahlen in diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das nach jedem Parameter hier steht, sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler auslösen, und wir wären gezwungen, unseren Fehler zu beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns auslöst, aber es würde unseren Quellcode erheblich ausführlicher machen. Es ergibt wahrscheinlich mehr Sinn, solche Überprüfungen TypeScript zu überlassen.

## Komponenten schreiben

Wie im vorherigen Kapitel erwähnt, haben die meisten Frameworks irgendeine Art von Komponentenmodell. React Komponenten können mit JSX geschrieben werden, Ember Komponenten mit Handlebars, und Angular und Vue Komponenten mit einer Templatesyntax, die HTML leicht erweitert.

Unabhängig von ihren Meinungen darüber, wie Komponenten geschrieben werden sollen, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen könnten, den internen Zustand, den die Komponente verwalten soll, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann.

Die Code-Snippets im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **props** sind externe Daten, die eine Komponente benötigt, um zu rendern. Angenommen, Sie bauen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit gewürdigt wird. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel passt. Diese Komponente muss ein Porträt des Autors und eine kurze von ihm geschriebene Zeile anzeigen. Um zu wissen, welches Bild zu rendern ist und welche Zeile zu drucken ist, muss `AuthorCredit` einige Props akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` repräsentieren, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir an der Stelle, an der wir sie gerendert haben möchten (die wahrscheinlich in einer anderen Komponente liegt), Code wie diesen schreiben:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztlich das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure)-Element im Browser rendern, mit seiner Struktur, wie in der `AuthorCredit`-Komponente definiert, und seinem Inhalt, wie in den in der `AuthorCredit`-Komponentenaufruf enthaltenen Props definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Im vorherigen Kapitel haben wir über das Konzept des **Zustands** gesprochen — ein robustes Zustandsverwaltungssystem ist der Schlüssel zu einem effektiven Framework, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand bleibt in gewisser Weise bestehen, solange die Komponente in Gebrauch ist. Wie Props kann der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Als Beispiel, betrachten Sie eine Schaltfläche, die zählt, wie oft sie angeklickt wurde. Diese Komponente sollte dafür verantwortlich sein, ihren eigenen _Anzahl_-Zustand zu verfolgen und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, gegeben einen anfänglichen Datenwert, diesen Wert verfolgt, während er aktualisiert wird. Der Code wird zunächst so im Browser gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf robuste Weise in der App, ohne dass Sie Code schreiben müssen, um das selbst zu tun.

### Ereignisse

Um interaktiv zu sein, müssen Komponenten Wege haben, auf Browerereignisse zu reagieren, damit unsere Anwendungen auf unsere Benutzer reagieren können. Frameworks bieten jeweils ihre eigene Syntax für das Anhören von Browerereignissen, die sich auf die Namen der gleichwertigen nativen Browerereignisse beziehen.

In React verlangt das Anhören auf das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, um ihn Klicks zählen zu lassen:

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

Jedes Framework bietet eine Möglichkeit, die Stile für Ihre Komponenten — oder für die gesamte Anwendung — zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, geben alle Ihnen mehrere Möglichkeiten dafür. Mit der Hinzufügung einiger Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilen.

## Abhängigkeiten handhaben

Alle großen Frameworks bieten Mechanismen, um Abhängigkeiten zu handhaben — Komponenten in andere Komponenten zu nutzen, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Funktionen wird sich der genaue Mechanismus zwischen den Frameworks unterscheiden, aber das Endergebnis ist dasselbe. Komponenten tendieren dazu, Komponenten in andere Komponenten zu importieren, indem sie die Standard-[JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) verwenden, oder zumindest etwas Ähnliches.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten zusammen komponiert werden können. Genau wie Sie HTML-Tags ineinander schreiben können, um eine Website zu erstellen, können Sie Komponenten in andere Komponenten verwenden, um eine Webanwendung zu bauen. Jedes Framework erlaubt es Ihnen, Komponenten zu schreiben, die andere Komponenten nutzen (und damit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit`-React-Komponente in einer `Article`-Komponente verwendet werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

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

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen umfassen. Eine tief verschachtelte `AuthorCredit`-Komponente könnte aus irgendeinem Grund Daten aus der obersten Ebene unserer Anwendung benötigen.

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

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, so dass sie wissen, dass sie Props weitergeben sollen, aber das könnte mühsam werden, wenn es viele, viele Ebenen zwischen dem Ursprung und der Bestimmung unserer Daten gibt. Es ist auch überflüssig: `Home` und `Article` verwenden das Porträt oder die von ihm geschriebene Zeile des Autors tatsächlich nicht, aber wenn wir diese Informationen in die `AuthorCredit` bekommen wollen, müssten wir `Home` und `Article` ändern, um es zu berücksichtigen.

Das Problem, Daten durch viele Schichten von Komponenten zu übergeben, wird als Prop-Drilling bezeichnet und ist nicht ideal für große Anwendungen.

Um das Prop-Drilling zu umgehen, bieten Frameworks Funktionalitäten, die als Abhängigkeitsinjektion bekannt sind, d.h. eine Möglichkeit, bestimmte Daten direkt zu den benötigten Komponenten zu bringen, ohne sie durch zwischengeschaltete Ebenen zu leiten. Jedes Framework implementiert die Abhängigkeitsinjektion unter einem anderen Namen und auf eine andere Weise, aber der Effekt ist letztendlich derselbe.

Angular nennt diesen Prozess [dependency injection](https://angular.io/guide/dependency-injection); Vue hat [`provide()` und `inject()` Methoden für Komponenten](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand über [Dienste](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks bezeichnet der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente von dem Zeitpunkt durchläuft, an dem sie zum DOM hinzugefügt und dann vom Browser gerendert wird (oft als _Mounting_ bezeichnet), bis zu dem Zeitpunkt, an dem sie aus dem DOM entfernt wird (oft als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklus-Phasen unterschiedlich, und nicht alle geben Entwicklern Zugang zu denselben Phasen. Alle Frameworks folgen einem allgemeinen Modell: Sie erlauben Entwicklern, bestimmte Aktionen während des Mountings der Komponente, beim Rendern, beim Unmounting und in vielen Phasen dazwischen auszuführen.

Die _Render_-Phase ist die wichtigste zu verstehen, weil sie am häufigsten wiederholt wird, wenn Ihr Benutzer mit der Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, unabhängig davon, ob diese neuen Informationen eine Ergänzung zu dem sind, was im Browser ist, ein Löschen oder ein Bearbeiten von dem, was dort ist.

Dieses [Diagramm eines React-Komponenten-Lebenszyklus](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Genau wie bei Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle verfolgen die aktuelle gerenderte Version des DOMs Ihres Browsers und alle fällen leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht direkt mit dem DOM. Dieses Abstrahieren vom DOM ist komplexer und speicherintensiver als das direkte Aktualisieren des DOMs, aber ohne es könnten Frameworks Ihnen nicht erlauben, in der deklarativen Weise zu programmieren, für die sie bekannt sind.

Der **virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im Speicher von JavaScript gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOMs und vergleicht sie dann mit dem "realen" DOM — dem DOM, das tatsächlich für Ihre Benutzer gerendert wird — um zu entscheiden, was zu rendern ist. Die Anwendung erstellt ein "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet dieses Diff, um Updates auf das reale DOM anzuwenden. Sowohl React als auch Vue verwenden ein Virtuelles DOM-Modell, aber sie wenden nicht genau dieselbe Logik beim Diffen oder Rendern an.

Sie können [mehr über das Virtuelle DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM dahingehend ähnlich, dass er ein DOM-Diff erstellt, um zu entscheiden, was zu rendern ist, aber unterschiedlich, da er keine vollständige Kopie des DOM im Speicher von JavaScript erstellt. Er ignoriert die Teile des DOMs, die nicht geändert werden müssen. Angular ist das einzige bisher in diesem Modul besprochene Framework, das ein inkrementelles DOM verwendet.

Sie können [mehr über den Inkrementellen DOM im Blog von Auth0 lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtuelles DOM noch ein inkrementelles DOM; es ist ein separater Prozess, durch den Ember's Templates in eine Art von "Bytecode" transpiliert werden, der einfacher und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#routing) ein wichtiger Teil der Web-Erfahrung. Um eine kaputte Erfahrung in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, clientseitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Testabdeckung, die sicherstellt, dass Ihre Software sich weiterhin in der erwarteten Weise verhält, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks stellt Tools bereit, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in die Frameworks selbst integriert, aber die Befehlszeilenschnittstellentools, die zum Generieren von Framework-Apps verwendet werden, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem mit Möglichkeiten für Unit- und Integrationstests gleichermaßen.

[Testing Library](https://testing-library.com/) ist ein Paket von Tests-Utilities, das Tools für viele JavaScript-Umgebungen hat, einschließlich React, Vue und Angular. Die Ember-Dokumentation deckt das [Testen von Ember-Apps ab](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, geschrieben mit Hilfe von React Testing Library — er testet eine Anzahl von Dingen, wie zum Beispiel das Vorhandensein der Schaltfläche und ob die Schaltfläche den richtigen Text nach 0, 1 und 2 Klicks anzeigt:

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

An diesem Punkt sollten Sie mehr darüber wissen, welche tatsächlichen Sprachen, Funktionen und Werkzeuge Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, Sie sind begeistert, loszulegen und tatsächlich ein bisschen zu coden, und das ist genau das, was Sie als Nächstes tun werden! An dieser Stelle können Sie auswählen, welches Framework Sie zuerst lernen möchten:

- [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
