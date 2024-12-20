---
title: Hauptmerkmale von Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes große JavaScript-Framework hat einen unterschiedlichen Ansatz zur Aktualisierung des DOMs, zur Handhabung von Browserevents und zur Gestaltung eines angenehmen Entwicklererlebnisses. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen, indem er betrachtet, wie Frameworks auf einer höheren Ebene tendenziell funktionieren und welche Unterschiede es zwischen ihnen gibt.

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
      <td>Verständnis der Hauptmerkmale, die von JavaScript-Frameworks bereitgestellt werden.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Die meisten Frameworks erlauben Ihnen die Verwendung von domänenspezifischen Sprachen (DSLs), um Ihre Anwendungen zu bauen. Insbesondere hat React die Verwendung von **JSX** zum Schreiben seiner Komponenten populär gemacht, während Ember **Handlebars** verwendet. Anders als HTML wissen diese Sprachen, wie Datenvariablen gelesen werden, und diese Daten können verwendet werden, um den Prozess des Schreibens Ihrer Benutzeroberfläche zu optimieren.

Angular-Anwendungen nutzen oft intensiv **TypeScript**. TypeScript befasst sich nicht mit dem Schreiben von Benutzeroberflächen, aber es ist eine domänenspezifische Sprache und unterscheidet sich erheblich von reinem JavaScript.

DSLs können vom Browser nicht direkt gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Tools beinhalten in der Regel die erforderlichen Werkzeuge, um diesen Schritt zu bearbeiten, oder können so angepasst werden, dass dieser Schritt einbezogen wird. Während es möglich ist, Framework-Anwendungen ohne die Verwendung dieser domänenspezifischen Sprachen zu erstellen, wird die Nutzung dieser den Entwicklungsprozess straffen und es einfacher machen, Hilfe von den Gemeinschaften um diese Frameworks zu erhalten.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), was für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team für den Einsatz in React-Anwendungen erfunden, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden – zum Beispiel von Vue-Anwendungen.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-<`header`>-Element mit einem <`h1`>-Element darin dar. Die geschweiften Klammern um `{subject}` sagen der Anwendung, dass sie den Wert der `subject`-Konstanten lesen und in unser `<h1>` einfügen soll.

Wenn es mit React verwendet wird, wird das JSX aus dem vorherigen Schnipsel in dieses kompiliert:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es letztendlich vom Browser gerendert wird, wird der obige Schnipsel HTML erzeugen, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/)-Templatingsprache ist nicht spezifisch für Ember-Anwendungen, wird aber intensiv in Ember-Apps genutzt. Handlebars-Code ähnelt HTML, bietet aber die Möglichkeit, Daten von anderswo zu beziehen. Diese Daten können genutzt werden, um das HTML zu beeinflussen, das eine Anwendung letztlich erstellt.

Wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein Doppelset geschweifter Klammern, statt eines Einzelsets.

Gegeben diesem Handlebars-Template:

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

Wird Handlebars HTML wie dieses erzeugen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist eine _Übermenge_ von JavaScript, was bedeutet, dass es JavaScript erweitert – alle JavaScript-Code ist gültiges TypeScript, aber nicht umgekehrt. TypeScript ist nützlich wegen der Strenge, die es Entwicklern erlaubt, in ihrem Code zu erzwingen. Betrachten Sie zum Beispiel eine Funktion `add()`, die die Ganzzahlen `a` und `b` nimmt und deren Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag trivial für jemanden sein, der mit JavaScript vertraut ist, aber er könnte immer noch klarer sein. JavaScript erlaubt uns, den `+`-Operator zu verwenden, um Zeichenfolgen zusammenzufügen, sodass diese Funktion technisch immer noch funktionieren würde, wenn `a` und `b` Zeichenfolgen wären – es könnte nur nicht das Ergebnis liefern, das Sie erwarten. Was, wenn wir nur erlauben wollten, dass Zahlen in diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das hier nach jedem Parameter geschrieben wird, sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden würden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler erzeugen und wir müssten unseren Fehler beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns erzeugt, aber es würde unseren Quellcode erheblich umfangreicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Überprüfungen für uns erledigen zu lassen.

## Schreiben von Komponenten

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks eine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars, und Angular- und Vue-Komponenten mit einer template-Syntax, die HTML leicht erweitert.

Unabhängig davon, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen, den internen Zustand, den die Komponente verwalten soll, und die Ereignisse, die ein Benutzer auf dem Markup der Komponente auslösen kann.

Die Codebeispiele im Rest dieses Abschnitts verwenden React als Beispiel und sind in JSX geschrieben.

### Eigenschaften

Eigenschaften oder **props** sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie erstellen eine Website für ein Online-Magazin, und Sie müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit gewürdigt wird. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors und eine kurze Autorenzeile über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll und welche Autorenzeile zu drucken ist, muss `AuthorCredit` einige props akzeptieren.

Eine React-Darstellung dieser `AuthorCredit`-Komponente könnte in etwa so aussehen:

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

`{props.src}`, `{props.alt}` und `{props.byline}` repräsentieren, wo unsere props in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir an der Stelle, an der sie gerendert werden soll (wahrscheinlich innerhalb einer anderen Komponente), einen solchen Code schreiben:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztlich das folgende <`figure`>-Element im Browser rendern, mit seiner Struktur, wie in der `AuthorCredit`-Komponente definiert, und seinem Inhalt, wie in den props auf dem `AuthorCredit`-Komponentenaufruf definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir haben im vorherigen Kapitel über das Konzept des **Zustands** gesprochen — ein robustes Zustandsverwaltungssystem ist entscheidend für ein effektives Framework, und jede Komponente kann Daten haben, die ihren Zustand kontrolliert haben müssen. Dieser Zustand wird in irgendeiner Weise persistiert, solange die Komponente in Gebrauch ist. Wie props kann der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Als Beispiel betrachten Sie einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte für die Verfolgung ihres eigenen _count_-Zustands verantwortlich sein und könnte in etwa so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React Hook](https://react.dev/reference/react)**, das, basierend auf einem anfänglichen Datenwert, diesen Wert verfolgt, während er aktualisiert wird. Der Code wird im Browser ursprünglich so gerendert:

```html
<button>Clicked 0 times</button>
```

Der Aufruf von `useState()` verfolgt den `count`-Wert auf robuste Weise über die App hinweg, ohne dass Sie Code schreiben müssen, um dies selbst zu tun.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, auf Browserevents zu reagieren, damit unsere Anwendungen auf unsere Benutzer reagieren können. Frameworks bieten ihre eigene Syntax zum Lauschen auf Browserevents, die sich auf die Namen der entsprechenden nativen Browserevents beziehen.

In React erfordert das Lauschen auf das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eine spezielle Eigenschaft, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Eventhandlers auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Komponentenstile festlegen

Jedes Framework bietet eine Möglichkeit, die Stile für Ihre Komponenten - oder für die gesamte Anwendung - zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, bieten alle mehrere Möglichkeiten, dies zu tun. Mit der Ergänzung einiger Hilfsmodulen können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilen.

## Abhängigkeiten handhaben

Alle großen Frameworks bieten Mechanismen zur Handhabung von Abhängigkeiten — zur Verwendung von Komponenten innerhalb anderer Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Funktionen unterscheidet sich der genaue Mechanismus zwischen den Frameworks, aber das Endergebnis ist dasselbe. Komponenten neigen dazu, Komponenten in andere Komponenten mithilfe der standardmäßigen [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem einzufügen.

### Komponenten innerhalb von Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur besteht darin, dass Komponenten zusammen komponiert werden können. So wie Sie HTML-Tags ineinander schreiben können, um eine Website zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework erlaubt es Ihnen, Komponenten zu schreiben, die andere Komponenten nutzen (und somit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit`-React-Komponente in einer `Article`-Komponente verwendet werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

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

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen beinhalten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief verschachtelt ist, könnte aus irgendeinem Grund Daten auf der Wurzelebene unserer Anwendung benötigen.

Angenommen, die Struktur der Magazinseite, die wir erstellen, sieht so aus:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, sodass sie wissen, wie sie die props weitergeben, aber das könnte mühsam werden, wenn es viele, viele Ebenen zwischen dem Ursprungs- und dem Zielort unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` verwenden das Porträt oder die Autorenzeile des Autors nicht tatsächlich, aber wenn wir diese Informationen in die `AuthorCredit` bekommen möchten, müssen wir `Home` und `Article` ändern, um dies zu ermöglichen.

Das Problem, Daten durch viele Schichten von Komponenten zu leiten, wird Prop-Drilling genannt, und es ist nicht ideal für große Anwendungen.

Um Prop-Drilling zu umgehen, bieten Frameworks eine Funktionalität, die als Abhängigkeitsinjektion bekannt ist, was eine Möglichkeit ist, bestimmte Daten direkt an die Komponenten zu übermitteln, die sie benötigen, ohne sie durch dazwischenliegende Ebenen durchzugeben. Jedes Framework implementiert Abhängigkeitsinjektion unter einem anderen Namen und auf unterschiedliche Weise, aber der Effekt ist letztlich derselbe.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.dev/guide/di/dependency-injection); Vue hat [`provide()` und `inject()`-Komponentenmethoden](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context-API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Status über [Dienste](https://guides.emberjs.com/release/services/).

### Lifecycle

Im Kontext eines Frameworks ist der **Lifecycle** einer Komponente eine Sammlung von Phasen, durch die eine Komponente von der Zeit, in der sie dem DOM hinzugefügt und dann vom Browser gerendert wird (oft _mounting_ genannt), bis zu der Zeit, in der sie vom DOM entfernt wird (oft _unmounting_ genannt), geht. Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle geben Entwicklern Zugriff auf dieselben Phasen. Alle Frameworks folgen dem gleichen allgemeinen Modell: Sie ermöglichen es Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _mountet_, wenn sie _rendert_, wenn sie _unmountet_ und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie die meisten Male ausgeführt wird, wenn Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, sei es, dass neue Informationen hinzugefügt, gelöscht oder bearbeitet werden.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Ebenso wie bei Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle überwachen die aktuelle gerenderte Version des DOMs Ihres Browsers, und jedes entscheidet etwas anders, wie sich das DOM ändern soll, während Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicherintensiver, als das DOM selbst zu aktualisieren, aber ohne sie könnten Frameworks nicht ermöglichen, auf die deklarative Weise zu programmieren, für die sie bekannt sind.

Das **Virtual DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM und vergleicht sie mit dem "echten" DOM – dem DOM, das tatsächlich für Ihre Benutzer gerendert wird – um zu entscheiden, was zu rendern ist. Die Anwendung erstellt einen "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet diesen Diff, um Aktualisierungen am realen DOM vorzunehmen. Sowohl React als auch Vue verwenden ein virtuelles DOM-Modell, wenden jedoch nicht genau die gleiche Logik beim Diffting oder Rendern an.

Sie können [mehr über das Virtual DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Das **Incremental DOM** ist dem virtuellen DOM insofern ähnlich, als es ein DOM-Diff erstellt, um zu entscheiden, was zu rendern ist, jedoch unterschiedlich, da es keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Es ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige Framework, das bisher in diesem Modul besprochen wurde und ein inkrementelles DOM verwendet.

Sie können [mehr über das Incremental DOM im Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Das **Glimmer VM** ist einzigartig für Ember. Es ist weder ein virtuelles DOM noch ein inkrementelles DOM; es ist ein separater Prozess, durch den die Ember-Templates in eine Art "Bytecode" transpiliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie im [vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Bestandteil der Web-Erfahrung. Um eine unterbrochene Erfahrung in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, clientseitiges Routing in ihren Anwendungen zu implementieren.

## Testing

Alle Anwendungen profitieren von Testberichterstattung, die sicherstellt, dass Ihre Software weiterhin so funktioniert, wie Sie es erwarten, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Tools, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in die Frameworks selbst integriert, aber die Befehlszeilenschnittstellentools, die verwendet werden, um Framework-Apps zu generieren, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Tools in seinem Ökosystem mit Fähigkeiten für sowohl Unit- als auch Integrationstests.

[Testing Library](https://testing-library.com/) ist eine Suite von Testwerkzeugen, die Tools für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumentation behandelt das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, geschrieben mit Hilfe der React Testing Library – es testet eine Anzahl von Dingen, wie das Vorhandensein des Buttons und ob der Button den richtigen Text nach 0, 1 und 2 Klicks anzeigt:

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

Zu diesem Zeitpunkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Werkzeugen haben, die Sie beim Erstellen von Anwendungen mit Frameworks verwenden werden. Ich bin sicher, dass Sie begeistert sind, loszulegen und tatsächlich etwas zu programmieren, und genau das werden Sie als Nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
