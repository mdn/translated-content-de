---
title: Hauptmerkmale von Frameworks
short-title: Merkmale von Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes bedeutende JavaScript-Framework hat einen anderen Ansatz zum Aktualisieren des DOM, zum Umgang mit Browser-Ereignissen und zur Bereitstellung eines angenehmen Entwicklererlebnisses. Dieser Artikel wird die Hauptmerkmale der "großen 4" Frameworks untersuchen, indem er sich ansieht, wie Frameworks auf hoher Ebene funktionieren und welche Unterschiede zwischen ihnen bestehen.

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

Die meisten Frameworks erlauben es Ihnen, domänenspezifische Sprachen (DSLs) zu verwenden, um Ihre Anwendungen aufzubauen. Insbesondere hat React die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** nutzt. Im Gegensatz zu HTML wissen diese Sprachen, wie man Datensätze liest, und diese Daten können verwendet werden, um den Prozess der UI-Erstellung zu vereinfachen.

Angular-Anwendungen machen häufig intensiven Gebrauch von **TypeScript**. TypeScript ist nicht darauf ausgelegt, Benutzeroberflächen zu schreiben, aber es ist eine domänenspezifische Sprache und hat signifikante Unterschiede zu reinem JavaScript.

DSLs können nicht direkt vom Browser gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Tools beinhalten in der Regel die erforderlichen Werkzeuge, um diesen Schritt zu bewältigen, oder können angepasst werden, um diesen Schritt einzuschließen. Während es möglich ist, Framework-Anwendungen ohne diese domänenspezifischen Sprachen zu erstellen, wird deren Nutzung Ihren Entwicklungsprozess vereinfachen und es Ihnen erleichtern, Hilfe aus den Gemeinschaften um diese Frameworks zu erhalten.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), was für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde von dem React-Team zur Verwendung in React-Anwendungen erfunden, kann aber genutzt werden, um andere Anwendungen zu entwickeln — wie beispielsweise Vue-Anwendungen.

Das Folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck stellt ein HTML-<`header`>-Element mit einem <`h1`>-Element darin dar. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstanten `subject` zu lesen und ihn in unser <`h1`> einzufügen.

Wenn es mit React verwendet wird, würde das JSX aus dem vorherigen Codeausschnitt in Folgendes kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn dieser Code letztendlich vom Browser gerendert wird, produziert der obige Codeausschnitt HTML, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/) Template-Sprache ist nicht spezifisch für Ember-Anwendungen, wird aber stark in Ember-Apps verwendet. Handlebars-Code ähnelt HTML, bietet aber die Möglichkeit, Daten von anderswo heranzuziehen. Diese Daten können genutzt werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich erstellt.

Wie JSX verwendet Handlebars geschweifte Klammern, um den Wert einer Variablen einzufügen. Handlebars verwendet ein Paar doppelter geschweifter Klammern anstelle eines einzelnen Paares.

Angenommen, wir haben diese Handlebars-Vorlage:

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

Handlebars wird HTML wie folgt erzeugen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist eine _Obermenge_ von JavaScript, was bedeutet, dass es JavaScript erweitert — aller JavaScript-Code ist gültiges TypeScript, jedoch nicht umgekehrt. TypeScript ist nützlich wegen der Strenge, die es Entwicklern ermöglicht, in ihrem Code durchzusetzen. Zum Beispiel betrachten Sie eine Funktion `add()`, die Ganzzahlen `a` und `b` entgegennimmt und ihre Summe zurückgibt.

In JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code könnte trivial für jemanden sein, der JavaScript gewohnt ist, aber er könnte dennoch klarer sein. JavaScript lässt zu, dass wir den `+` Operator nutzen, um Strings zu verketten, so würde diese Funktion technisch gesehen immer noch funktionieren, wenn `a` und `b` Strings wären — es könnte Ihnen jedoch nicht das Ergebnis geben, das Sie erwartet haben. Was, wenn wir nur erlauben wollten, dass Zahlen an diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number` nach jedem Parameter hier sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden würden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler ausgeben und wir müssten unseren Fehler beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns erzeugt, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript solche Überprüfungen für uns erledigen zu lassen.

## Komponenten schreiben

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks eine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars und Angular- und Vue-Komponenten mit einer Template-Syntax, die HTML leicht erweitert.

Unabhängig von ihren Meinungen darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen könnten, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Nutzer auf dem Markup der Komponente auslösen kann.

Die Codeausschnitte im restlichen Abschnitt verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften, oder **props**, sind externe Daten, die eine Komponente benötigt, um gerendert zu werden. Angenommen, Sie bauen eine Website für ein Online-Magazin und Sie müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit Anerkennung erhält. Sie könnten eine `AuthorCredit`-Komponente erstellen, die zu jedem Artikel gehört. Diese Komponente muss ein Porträt des Autors und eine kurze Notiz über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll und welche Notiz gedruckt werden soll, muss `AuthorCredit` einige Requisiten akzeptieren.

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

`{props.src}`, `{props.alt}` und `{props.byline}` repräsentieren, wo unsere Requisiten in die Komponente eingefügt werden. Um diese Komponente zu rendern, würden wir an der Stelle, an der wir sie gerendert haben möchten (was wahrscheinlich innerhalb einer anderen Komponente sein wird), Code wie diesen schreiben:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztlich das folgende <`figure`>-Element im Browser rendern, mit seiner Struktur, wie in der `AuthorCredit`-Komponente definiert, und seinem Inhalt, wie in den Requisiten, die in dem Aufruf der `AuthorCredit`-Komponente enthalten sind, definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir sprachen im vorherigen Kapitel über das Konzept des **Zustands** — ein robustes Zustands-Management-Mechanismus ist für ein effektives Framework wesentlich, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand wird in gewisser Weise bestehen bleiben, solange die Komponente in Gebrauch ist. Wie Requisiten kann der Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Nehmen wir als Beispiel einen Button, der zählt, wie oft er geklickt wurde. Diese Komponente sollte verantwortlich sein für die Verfolgung ihres eigenen _count_ Zustands und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React-Hook](https://react.dev/reference/react)**, der, wenn ihm ein anfänglicher Datenwert gegeben wird, diesen Wert verfolgt, wenn er aktualisiert wird. Der Code wird zunächst so im Browser gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf hält den `count`-Wert auf eine robuste Weise über die App hinweg fest, ohne dass Sie dafür Code schreiben müssen.

### Ereignisse

Um interaktiv zu sein, müssen Komponenten Wege haben, auf Browser-Ereignisse zu reagieren, damit unsere Anwendungen auf unsere Nutzer reagieren können. Jedes Framework stellt seine eigene Syntax zum Lauschen von Browser-Ereignissen bereit, die sich auf die Namen der gleichwertigen nativen Browser-Ereignisse beziehen.

In React erfordert das Lauschen des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses ein besonderes Attribut, `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, um ihn das Zählen von Klicks zu ermöglichen:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche Funktionen von `useState()`, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Wir rufen diese Funktion innerhalb des `onClick`-Ereignishandlers auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Komponenten stylen

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten — oder für die Anwendung als Ganzes — zu definieren. Obwohl der Ansatz jedes Frameworks zur Definition der Stile einer Komponente leicht unterschiedlich ist, bieten alle von ihnen mehrere Möglichkeiten dazu. Mit der Ergänzung durch einige Hilfsmodule können Sie Ihre Framework-Anwendungen in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) gestalten oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpilen.

## Abhängigkeiten handhaben

Alle großen Frameworks bieten Mechanismen zum Umgang mit Abhängigkeiten — wobei Komponenten in anderen Komponenten verwendet werden, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Merkmalen unterscheidet sich der genaue Mechanismus zwischen den Frameworks, aber das Endergebnis ist dasselbe. Komponenten neigen dazu, andere Komponenten mit der standardmäßigen [JavaScript-Modul-Syntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem in andere Komponenten zu importieren.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten zusammen komponiert werden können. Genau wie Sie HTML-Tags ineinander schreiben können, um eine Webseite zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework erlaubt Ihnen, Komponenten zu schreiben, die andere Komponenten benutzen (und somit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit`-React-Komponente innerhalb einer `Article`-Komponente verwendet werden. Das bedeutet, dass `Article` benötigt, `AuthorCredit` zu importieren.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Sobald das erledigt ist, könnte `AuthorCredit` innerhalb der `Article`-Komponente so genutzt werden:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Abhängigkeitsinjektion

Reale Anwendungen können oft Komponentenstrukturen mit mehreren Verschachtelungsebenen umfassen. Eine tief verschachtelte `AuthorCredit`-Komponente könnte aus irgendeinem Grund Daten von der Wurzelebene unserer Anwendung benötigen.

Angenommen, die Struktur der Magazin-Website, die wir erstellen, sieht so aus:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` so umschreiben, dass sie wissen, dass sie Requisiten weiterzugeben haben, aber das könnte mühsam werden, wenn es viele, viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch überflüssig: `Home` und `Article` verwenden eigentlich nicht das Porträt oder die Notiz des Autors, aber wenn wir diese Informationen in die `AuthorCredit` bekommen wollen, müssen wir `Home` und `Article` ändern, um es zu ermöglichen.

Das Problem, Daten durch viele Komponentenebenen zu übergeben, wird als prop drilling bezeichnet, und es ist bei großen Anwendungen nicht ideal.

Um prop drilling zu umgehen, bieten Frameworks Funktionalität namens Abhängigkeitsinjektion, die eine Möglichkeit ist, bestimmte Daten direkt an die Komponenten zu bringen, die sie benötigen, ohne sie durch dazwischenliegende Ebenen zu schleusen. Jedes Framework implementiert die Abhängigkeitsinjektion unter einem anderen Namen und auf unterschiedliche Weise, aber der Effekt ist letztendlich derselbe.

Angular nennt diesen Prozess [Abhängigkeitsinjektion](https://angular.dev/guide/di/dependency-injection); Vue hat [`provide()` und `inject()` Methoden für Komponenten](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand über [Services](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, die eine Komponente durchläuft, von dem Zeitpunkt, an dem sie dem DOM hinzugefügt und dann vom Browser gerendert wird (häufig als _Montage_ bezeichnet), bis zu dem Zeitpunkt, an dem sie aus dem DOM entfernt wird (häufig als _Demontage_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle bieten Entwicklern Zugang zu denselben Phasen. Alle Frameworks folgen dem gleichen allgemeinen Modell: Sie ermöglichen Entwicklern bestimmte Aktionen, wenn die Komponente _montiert_, _gerendert_, _demontiert_ wird und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, da sie am häufigsten wiederholt wird, wenn Ihr Nutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, unabhängig davon, ob diese neuen Informationen eine Ergänzung zu dem sind, was sich im Browser befindet, eine Löschung oder eine Bearbeitung dessen, was da ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Wie bei Lebenszyklen nehmen Frameworks ähnlich unterschiedliche Ansätze, wie sie Ihre Anwendungen rendern. Alle von ihnen verfolgen die aktuelle gerenderte Version Ihres Browser-DOM und treffen jeweils leicht unterschiedliche Entscheidungen darüber, wie sich das DOM ändern sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie normalerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicherintensiver als das selbstständige Aktualisieren des DOM, aber ohne sie könnten Frameworks nicht ermöglichen, dass Sie auf die deklarative Weise programmieren, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM Ihres Browsers im JavaScript-Speicher gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM, vergleicht sie dann mit dem "echten" DOM — dem DOM, das tatsächlich für Ihre Benutzer gerendert wird —, um zu entscheiden, was gerendert werden muss. Die Anwendung erstellt einen "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem aktuell gerenderten DOM zu vergleichen, und verwendet diesen Diff, um Updates auf das reale DOM anzuwenden. Sowohl React als auch Vue verwenden ein virtuelles DOM-Modell, aber sie wenden nicht die exakt gleiche Logik beim Diffen oder Rendern an.

Sie können [In den React-Dokumenten mehr über das virtuelle DOM lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **Inkrementelle DOM** ist dem virtuellen DOM ähnlich, in dem es einen DOM-Diff erstellt, um zu entscheiden, was gerendert werden muss, unterscheidet sich jedoch insofern, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige bisher in diesem Modul besprochene Framework, das einen inkrementellen DOM verwendet.

Sie können [auf dem Auth0-Blog mehr über den inkrementellen DOM lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtuelles DOM noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Embers Vorlagen in eine Art "Bytecode" transpiliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Teil des Web-Erlebnisses. Um ein beschädigtes Erlebnis in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine), die Entwicklern hilft, Client-seitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Testabdeckungen, die sicherstellen, dass Ihre Software sich weiterhin so verhält, wie Sie es erwarten, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Werkzeuge, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in die Frameworks selbst integriert, aber die Befehlszeilenschnittstellen-Werkzeuge, die verwendet werden, um Framework-Apps zu generieren, geben Ihnen Zugang zu den entsprechenden Testwerkzeugen.

Jedes Framework hat umfangreiche Werkzeuge in seinem Ökosystem, mit Fähigkeiten sowohl für Unit- als auch für Integrationstests.

[Testing Library](https://testing-library.com/) ist eine Suite von Test-Utilities, die Werkzeuge für viele JavaScript-Umgebungen hat, einschließlich React, Vue und Angular. Die Ember-Dokumentationen decken das [Testen von Ember-Anwendungen ab](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton` mit Hilfe von React Testing Library geschrieben — er testet eine Anzahl von Dingen, wie zum Beispiel die Existenz des Buttons und ob der Button den korrekten Text anzeigt, nachdem er 0, 1 und 2-mal angeklickt wurde:

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

An diesem Punkt sollten Sie mehr über die eigentlichen Sprachen, Merkmale und Tools wissen, die Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, Sie sind begeistert, loszulegen und tatsächlich mit dem Codieren zu beginnen, und genau das werden Sie als Nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
