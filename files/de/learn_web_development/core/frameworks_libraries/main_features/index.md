---
title: Framework-Hauptmerkmale
short-title: Framework features
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes der großen JavaScript-Frameworks hat einen unterschiedlichen Ansatz zur Aktualisierung des DOM, zur Handhabung von Browser-Ereignissen und zur Bereitstellung einer angenehmen Entwicklererfahrung. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen und dabei betrachten, wie Frameworks tendenziell auf hoher Ebene funktionieren und welche Unterschiede zwischen ihnen bestehen.

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
      <td>Die Hauptmerkmale verstehen, die von JavaScript-Frameworks bereitgestellt werden.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Die meisten Frameworks erlauben Ihnen, domänenspezifische Sprachen (DSLs) zu verwenden, um Ihre Anwendungen zu erstellen. Insbesondere hat React die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** nutzt. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datenvariablen liest, und diese Daten können verwendet werden, um den Prozess der Erstellung Ihrer Benutzeroberfläche zu vereinfachen.

Angular-Anwendungen nutzen häufig **TypeScript** intensiv. TypeScript befasst sich nicht mit dem Schreiben von Benutzeroberflächen, ist jedoch eine domänenspezifische Sprache und weist signifikante Unterschiede zu Vanilla JavaScript auf.

DSLs können vom Browser nicht direkt gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Tools enthalten in der Regel die erforderlichen Werkzeuge, um diesen Schritt zu bewältigen, oder können angepasst werden, um diesen Schritt einzuschließen. Während es möglich ist, Framework-Anwendungen zu erstellen, ohne diese domänenspezifischen Sprachen zu verwenden, wird deren Nutzung Ihren Entwicklungsprozess vereinfachen und es einfacher machen, Hilfe von den Gemeinschaften um diese Frameworks zu erhalten.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), das für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team für den Einsatz in React-Anwendungen erfunden, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden — wie zum Beispiel Vue-Apps.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML [`<header>`](/de/docs/Web/HTML/Element/header)-Element mit einem [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element darin dar. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstante `subject` zu lesen und ihn in unser `<h1>` einzufügen.

Wenn es mit React verwendet wird, würde das JSX aus dem vorherigen Codeabschnitt so kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es schließlich vom Browser gerendert wird, wird der obige Code HTML erzeugen, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Templatingsprache ist nicht spezifisch für Ember-Anwendungen, wird jedoch in Ember-Anwendungen stark genutzt. Handlebars-Code ähnelt HTML, bietet jedoch die Möglichkeit, Daten von anderswo zu importieren. Diese Daten können verwendet werden, um das letztendlich von einer Anwendung aufgebaute HTML zu beeinflussen.

Wie JSX verwendet auch Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein doppeltes Paar geschweifte Klammern statt eines einzelnen Paares.

Angesichts dieser Handlebars-Vorlage:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

Und dieser Daten:

```js
{
  subject: "World";
}
```

Wird Handlebars HTML wie dieses erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist eine _Erweiterung_ von JavaScript, das bedeutet, es erweitert JavaScript — all JavaScript-Code ist gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich wegen der Strenge, die Entwicklern ermöglicht wird, in ihrem Code durchzusetzen. Betrachten Sie zum Beispiel eine Funktion `add()`, die Ganzzahlen `a` und `b` nimmt und ihre Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag für jemanden, der an JavaScript gewöhnt ist, trivial sein, könnte aber dennoch klarer sein. JavaScript erlaubt uns, den `+` Operator zu verwenden, um Zeichenfolgen zusammenzufügen, sodass diese Funktion technisch immer noch funktionieren würde, wenn `a` und `b` Zeichenfolgen wären — es könnte Ihnen jedoch nicht das erwartete Ergebnis liefern. Was, wenn wir nur erlauben wollten, dass Zahlen in diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das nach jedem Parameter hier geschrieben wird, weist TypeScript an, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion nutzen und `'2'` als Argument übergeben, würde TypeScript während der Kompilierung einen Fehler auslösen, und wir wären gezwungen, unseren Fehler zu beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns auslöst, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Überprüfungen für uns erledigen zu lassen.

## Komponenten schreiben

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks eine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars, und Angular- sowie Vue-Komponenten mit einer Templatingsyntax, die HTML leicht erweitert.

Unabhängig von ihren Ansichten darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer im Markup der Komponente auslösen kann.

Die Codebeispiele im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften oder **Props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie bauen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit Anerkennung erhält. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors und eine kurze Fußzeile über ihn anzeigen. Um zu wissen, welches Bild gerendert und welche Fußzeile gedruckt werden soll, muss `AuthorCredit` einige Props akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` stellen dar, wo unsere Props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir an der Stelle, an der wir sie gerendert haben möchten (wahrscheinlich innerhalb einer anderen Komponente), einen Code wie diesen schreiben:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztlich das folgende [`<figure>`](/de/docs/Web/HTML/Element/figure)-Element im Browser rendern, mit seiner Struktur, wie sie in der `AuthorCredit`-Komponente definiert ist, und seinem Inhalt, wie er in den Props enthalten ist, die beim Aufruf der `AuthorCredit`-Komponente übergeben werden:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben im vorherigen Kapitel über das Konzept des **Zustands** gesprochen — ein robustes Zustandsmanagement ist der Schlüssel zu einem effektiven Framework, und jede Komponente kann Daten haben, deren Zustand gesteuert werden muss. Dieser Zustand bleibt in gewisser Weise persistent, solange die Komponente verwendet wird. Wie Props kann auch der Zustand genutzt werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Betrachten Sie beispielsweise einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte verantwortlich sein für das Verfolgen ihres eigenen _count_-Zustands und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, gegeben einen Anfangsdatenwert, diesen Wert verfolgt, während er aktualisiert wird. Der Code wird im Browser anfänglich folgendermaßen gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf eine robuste Weise in der Anwendung, ohne dass Sie Code dafür schreiben müssen.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, auf Browser-Ereignisse zu reagieren, damit unsere Anwendungen auf unsere Benutzer reagieren können. Jedes Framework bietet seine eigene Syntax zum Abhören von Browser-Ereignissen, die sich auf die Namen der entsprechenden nativen Browser-Ereignisse beziehen.

In React erfordert das Abhören des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses eine spezielle Eigenschaft, `onClick`. Aktualisieren wir unseren `CounterButton`-Code so, dass er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Diese Funktion wird im `onClick`-Ereignishandler aufgerufen, um `count` auf den aktuellen Wert plus eins zu setzen.

## Komponenten stylen

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten — oder für die Anwendung als Ganzes — zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente etwas unterschiedlich ist, bieten alle mehrere Möglichkeiten, dies zu tun. Mit zusätzlichen Hilfsmodule können Sie Ihr Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stile mit [PostCSS](https://postcss.org/) transpilen.

## Abhängigkeiten verwalten

Alle großen Frameworks bieten Mechanismen zur Verwaltung von Abhängigkeiten — der Verwendung von Komponenten innerhalb anderer Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Merkmalen wird der genaue Mechanismus zwischen den Frameworks unterschiedlich sein, aber das Endergebnis ist dasselbe. Komponenten neigen dazu, Komponenten mit der Standard-JavaScript-Modulsyntax oder zumindest etwas Ähnlichem in andere Komponenten zu importieren.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur besteht darin, dass Komponenten zusammengesetzt werden können. Genauso wie Sie HTML-Tags ineinander verschachteln können, um eine Website zu erstellen, können Sie auch Komponenten in andere Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework ermöglicht es Ihnen, Komponenten so zu schreiben, dass sie andere Komponenten nutzen (und somit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit` React-Komponente innerhalb einer `Article`-Komponente genutzt werden. `Article` müsste `AuthorCredit` importieren.

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

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen beinhalten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief verschachtelt ist, könnte aus irgendeinem Grund Daten vom obersten Niveau unserer Anwendung benötigen.

Angenommen, die Magazin-Website, die wir erstellen, ist wie folgt strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente verfügt über Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, damit sie wissen, dass sie Props weitergeben sollen, aber das könnte lästig werden, wenn es viele, viele Ebenen zwischen Ursprung und Ziel unserer Daten gibt. Es ist auch überflüssig: `Home` und `Article` verwenden das Porträt oder die Fußzeile des Autors tatsächlich nicht, aber wenn wir diese Informationen in die `AuthorCredit` erhalten wollen, müssen wir `Home` und `Article` anpassen.

Das Problem, Daten durch viele Ebenen von Komponenten zu übergeben, wird als Prop-Drilling bezeichnet, und es ist nicht ideal für große Anwendungen.

Um Prop-Drilling zu umgehen, bieten Frameworks eine Funktionalität namens Abhängigkeitsinjektion, die eine Möglichkeit ist, bestimmte Daten direkt an die Komponenten zu übergeben, die sie benötigen, ohne sie durch dazwischen liegende Ebenen zu führen. Jedes Framework implementiert die Abhängigkeitsinjektion unter einem anderen Namen und auf eine andere Weise, aber der Effekt ist letztlich derselbe.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.dev/guide/di/dependency-injection); Vue hat die [`provide()` und `inject()` Komponentenmethoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt Zustand durch [Services](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente von dem Zeitpunkt durchläuft, an dem sie dem DOM hinzugefügt und dann vom Browser gerendert wird (oft _Montage_ genannt), bis zu dem Zeitpunkt, an dem sie aus dem DOM entfernt wird (oft _Demontage_ genannt). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf die gleichen Phasen. Alle Frameworks folgen dem gleichen allgemeinen Modell: Sie ermöglichen es Entwicklern, bestimmte Aktionen durchzuführen, wenn die Komponente _montiert_ wird, wenn sie _gerendert_ wird, wenn sie _demontiert_ wird, und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie am häufigsten wiederholt wird, während Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es eine Ergänzung zu dem, was sich im Browser befindet, eine Löschung oder eine Bearbeitung dessen, was vorhanden ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Wie bei Lebenszyklen nehmen Frameworks einen etwas unterschiedlichen aber ähnlichen Ansatz zur Darstellung Ihrer Anwendungen. Alle von ihnen verfolgen die aktuelle gerenderte Version des DOM Ihres Browsers, und jedes trifft leicht unterschiedliche Entscheidungen darüber, wie das DOM geändert werden sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicherintensiver als das manuelle Aktualisieren des DOM, aber ohne sie könnten Frameworks Ihnen nicht ermöglichen, die deklarative Programmierung zu nutzen, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM, vergleicht sie dann mit dem "echten" DOM – dem DOM, das tatsächlich für Ihre Benutzer gerendert wird – um zu entscheiden, was gerendert werden soll. Die Anwendung baut ein "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen und nutzt dieses Diff, um Updates auf das reale DOM anzuwenden. Sowohl React als auch Vue verwenden ein virtuelles DOM-Modell, aber sie wenden nicht die exakt gleiche Logik beim Diffing oder Rendern an.

Sie können [mehr über den virtuellen DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM insofern ähnlich, als dass er ein DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, unterscheidet sich jedoch dadurch, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige bisher in diesem Modul behandelte Framework, das einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtueller DOM noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Embers Vorlagen in eine Art "Bytecode" transpiliert werden, der einfacher und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Teil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Anwendungen mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, Client-seitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Test-Abdeckung, die sicherstellt, dass Ihre Software weiterhin das erwartete Verhalten zeigt, und Web-Anwendungen sind da keine Ausnahme. Jedes Frameworks-Ökosystem bietet Werkzeuge, die das Schreiben von Tests erleichtern. Test-Tools sind nicht in den Frameworks selbst integriert, aber die Befehlszeilentools, die zur Erstellung von Framework-Anwendungen verwendet werden, geben Ihnen Zugriff auf die entsprechenden Test-Tools.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem mit Fähigkeiten für sowohl Unit- als auch Integrationstests.

[Testing Library](https://testing-library.com/) ist eine Suite von Test-Utilities, die Tools für viele JavaScript-Umgebungen, einschließlich React, Vue und Angular, hat. Die Ember-Dokumente behandeln das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein schneller Test für unseren `CounterButton`, geschrieben mit Hilfe von React Testing Library - er testet mehrere Dinge, wie die Existenz des Buttons und ob der Button den richtigen Text nach 0, 1 und 2 Mal Klicken anzeigt:

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

Zu diesem Zeitpunkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Merkmalen und Werkzeugen haben, die Sie bei der Erstellung von Anwendungen mit Frameworks verwenden werden. Ich bin sicher, Sie sind begeistert, loszulegen und tatsächlich zu programmieren - und das werden Sie als nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
