---
title: Hauptmerkmale des Frameworks
short-title: Funktionen des Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Main_features
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}

Jedes größere JavaScript-Framework hat einen anderen Ansatz, das DOM zu aktualisieren, Browserevents zu handhaben und eine angenehme Entwicklererfahrung zu bieten. Dieser Artikel wird die Hauptmerkmale der "großen vier" Frameworks untersuchen, indem er betrachtet, wie Frameworks im Großen und Ganzen funktionieren, und die Unterschiede zwischen ihnen aufzeigt.

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
      <td>Verstehen der Hauptfunktionen, die von JavaScript-Frameworks bereitgestellt werden.</td>
    </tr>
  </tbody>
</table>

## Domänenspezifische Sprachen

Die meisten Frameworks erlauben Ihnen die Nutzung von domänenspezifischen Sprachen (DSLs) zum Bau Ihrer Anwendungen. Insbesondere hat React die Verwendung von **JSX** zur Erstellung seiner Komponenten populär gemacht, während Ember **Handlebars** nutzt. Anders als HTML wissen diese Sprachen, wie sie Datenvariablen lesen können, und diese Daten können verwendet werden, um den Prozess der Erstellung Ihrer Benutzeroberfläche zu vereinfachen.

Angular-Anwendungen nutzen häufig intensiv **TypeScript**. TypeScript befasst sich nicht mit der Erstellung von Benutzeroberflächen, aber es ist eine domänenspezifische Sprache und hat signifikante Unterschiede zu einfachem JavaScript.

DSLs können vom Browser nicht direkt gelesen werden; sie müssen zuerst in JavaScript oder HTML umgewandelt werden. Framework-Tools umfassen in der Regel die erforderlichen Werkzeuge, um diesen Schritt durchzuführen, oder können angepasst werden, um diesen Schritt einzubeziehen. Während es möglich ist, Framework-Anwendungen ohne Verwendung dieser domänenspezifischen Sprachen zu erstellen, werden sie Ihnen helfen, Ihren Entwicklungsprozess zu optimieren und es einfacher machen, Unterstützung von den Communitys um diese Frameworks zu finden.

### JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx), was für JavaScript und XML steht, ist eine Erweiterung von JavaScript, die HTML-ähnliche Syntax in eine JavaScript-Umgebung bringt. Es wurde vom React-Team zur Nutzung in React-Anwendungen erfunden, kann aber auch zur Entwicklung anderer Anwendungen verwendet werden – wie beispielsweise Vue-Apps.

Das folgende zeigt ein einfaches JSX-Beispiel:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

Dieser Ausdruck repräsentiert ein HTML-Element [`<header>`](/de/docs/Web/HTML/Reference/Elements/header) mit einem Element [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) darin. Die geschweiften Klammern um `{subject}` weisen die Anwendung an, den Wert der Konstanten `subject` zu lesen und in unser `<h1>` einzufügen.

Wenn es mit React verwendet wird, würde das JSX aus dem vorherigen Ausschnitt so kompiliert werden:

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

Wenn es schließlich vom Browser gerendert wird, erzeugt der obige Ausschnitt HTML, das so aussieht:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Die [Handlebars](https://handlebarsjs.com/) Vorlagensprache ist nicht spezifisch für Ember-Anwendungen, wird aber stark in Ember-Apps verwendet. Handlebars-Code ähnelt HTML, hat jedoch die Möglichkeit, Daten von anderswo zu beziehen. Diese Daten können verwendet werden, um das HTML zu beeinflussen, das eine Anwendung letztendlich erstellt.

Wie JSX nutzt Handlebars geschweifte Klammern, um den Wert einer Variablen einzusetzen. Handlebars verwendet ein doppeltes Paar geschweifte Klammern anstelle eines einfachen Paars.

Gegeben diese Handlebars-Vorlage:

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

Wird Handlebars HTML wie folgt erstellen:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) ist eine _Obermenge_ von JavaScript, was bedeutet, dass es JavaScript erweitert – aller JavaScript-Code ist gültiges TypeScript, aber andersherum nicht. TypeScript ist nützlich für die Strenge, die es den Entwicklern erlaubt, in ihrem Code durchzusetzen. Betrachten Sie zum Beispiel eine Funktion `add()`, die ganze Zahlen `a` und `b` nimmt und ihre Summe zurückgibt.

Im JavaScript könnte diese Funktion so geschrieben werden:

```js
function add(a, b) {
  return a + b;
}
```

Dieser Code mag für jemanden, der mit JavaScript vertraut ist, trivial sein, könnte aber dennoch klarer sein. JavaScript erlaubt uns den `+`-Operator, um Zeichenfolgen zusammenzukonkatinieren, so dass diese Funktion technisch immer noch funktionieren würde, wenn `a` und `b` Zeichenfolgen wären – es könnte Ihnen einfach nicht das geben, was Sie erwarten würden. Was, wenn wir nur wollen, dass Zahlen an diese Funktion übergeben werden? TypeScript macht das möglich:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Das `: number`, das hier nach jedem Parameter geschrieben wird, sagt TypeScript, dass sowohl `a` als auch `b` Zahlen sein müssen. Wenn wir diese Funktion verwenden und `'2'` als Argument übergeben würden, würde TypeScript während der Kompilierung einen Fehler melden, und wir wären gezwungen, unseren Fehler zu beheben. Wir könnten unser eigenes JavaScript schreiben, das diese Fehler für uns meldet, aber es würde unseren Quellcode erheblich ausführlicher machen. Es macht wahrscheinlich mehr Sinn, TypeScript mit solchen Überprüfungen zu beauftragen.

## Komponenten schreiben

Wie in der vorherigen Lektion erwähnt, haben die meisten Frameworks irgendeine Art von Komponentenmodell. React-Komponenten können mit JSX geschrieben werden, Ember-Komponenten mit Handlebars, und Angular- und Vue-Komponenten mit einer Template-Syntax, die HTML leicht erweitert.

Unabhängig von ihrer Meinung darüber, wie Komponenten geschrieben werden sollten, bieten die Komponenten jedes Frameworks eine Möglichkeit, die externen Eigenschaften zu beschreiben, die sie benötigen, den internen Zustand, den die Komponente verwalten sollte, und die Ereignisse, die ein Benutzer im Markup der Komponente auslösen kann.

Die Codebeispiele im Rest dieses Abschnitts verwenden React als Beispiel und sind mit JSX geschrieben.

### Eigenschaften

Eigenschaften, oder **props**, sind externe Daten, die eine Komponente benötigt, um zu rendern. Angenommen Sie erstellen eine Website für ein Online-Magazin und müssen sicherstellen, dass jeder beitragende Autor für seine Arbeit Anerkennung erhält. Möglicherweise erstellen Sie eine `AuthorCredit`-Komponente für jeden Artikel. Diese Komponente muss ein Porträt des Autors und eine kurze Autorenzeile über ihn anzeigen. Um zu wissen, welches Bild gerendert werden soll und welche Autorenzeile gedruckt werden soll, muss `AuthorCredit` einige `props` akzeptieren.

Eine React-Darstellung dieser `AuthorCredit`-Komponente könnte etwa so aussehen:

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

`{props.src}`, `{props.alt}` und `{props.byline}` geben an, wo unsere `props` in die Komponente eingefügt werden. Um diese Komponente zu rendern, schreiben wir Code wie diesen an der Stelle, an der wir sie rendern möchten (was wahrscheinlich innerhalb einer anderen Komponente sein wird):

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Dies wird letztendlich das folgende [`<figure>`](/de/docs/Web/HTML/Reference/Elements/figure)-Element im Browser rendern, mit seiner Struktur, wie in der `AuthorCredit`-Komponente definiert, und seinem Inhalt, wie in den `props` der `AuthorCredit`-Komponentenaufruf definiert:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Zustand

Wir sprachen über das Konzept des **Zustands** im vorherigen Kapitel – ein robustes Zustandsverwaltungssystem ist entscheidend für ein effektives Framework, und jede Komponente kann Daten haben, deren Zustand kontrolliert werden muss. Dieser Zustand wird in irgendeiner Weise bestehen bleiben, solange die Komponente in Gebrauch ist. Wie `props` kann Zustand verwendet werden, um zu beeinflussen, wie eine Komponente gerendert wird.

Als Beispiel betrachten Sie einen Knopf, der zählt, wie oft er geklickt wurde. Diese Komponente sollte verantwortlich sein für die Nachverfolgung ihres eigenen _Zähl_-Zustands und könnte so geschrieben werden:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://react.dev/reference/react/useState) ist ein **[React Hook](https://react.dev/reference/react)**, der, basierend auf einem initialen Datenwert, diesen Wert verfolgt, während er aktualisiert wird. Der Code wird anfänglich im Browser so gerendert:

```html
<button>Clicked 0 times</button>
```

Der `useState()`-Aufruf verfolgt den `count`-Wert auf eine robuste Weise in der gesamten App, ohne dass Sie Code schreiben müssen, um das selbst zu tun.

### Ereignisse

Um interaktiv zu sein, benötigen Komponenten Möglichkeiten, auf Browserevents zu reagieren, sodass unsere Anwendungen auf unsere Benutzer reagieren können. Jedes Framework bietet seine eigene Syntax, um auf Browserevents zu hören, welche den Namen des entsprechenden nativen Browserevents referenzieren.

In React erfordert das Lauschen auf das [`click`](/de/docs/Web/API/Element/click_event)-Event eine spezielle Eigenschaft `onClick`. Lassen Sie uns unseren `CounterButton`-Code von oben aktualisieren, damit er Klicks zählen kann:

```jsx
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

In dieser Version verwenden wir zusätzliche `useState()`-Funktionalität, um eine spezielle `setCount()`-Funktion zu erstellen, die wir aufrufen können, um den Wert von `count` zu aktualisieren. Diese Funktion rufen wir im `onClick`-Event-Handler auf, um `count` auf seinen aktuellen Wert plus eins zu setzen.

## Komponenten stylen

Jedes Framework bietet eine Möglichkeit, Stile für Ihre Komponenten – oder für die Anwendung als Ganzes – zu definieren. Obwohl der Ansatz jedes Frameworks zum Definieren der Stile einer Komponente leicht unterschiedlich ist, geben alle Ihnen mehrere Möglichkeiten, dies zu tun. Mit der Hinzufügung einiger Hilfsmodule können Sie Ihre Framework-Apps in [Sass](https://sass-lang.com/) oder [Less](https://lesscss.org/) stylen oder Ihre CSS-Stylesheets mit [PostCSS](https://postcss.org/) transpillieren.

## Abhängigkeiten verwalten

Alle größeren Frameworks bieten Mechanismen zur Verwaltung von Abhängigkeiten – der Nutzung von Komponenten innerhalb anderer Komponenten, manchmal mit mehreren Hierarchieebenen. Wie bei anderen Funktionen wird der genaue Mechanismus zwischen den Frameworks unterschiedlich sein, aber das Endergebnis ist das gleiche. Komponenten neigen dazu, Komponenten in andere Komponenten mit der standardmäßigen [JavaScript-Modul-Syntax](/de/docs/Web/JavaScript/Guide/Modules) oder zumindest etwas Ähnlichem zu importieren.

### Komponenten in Komponenten

Ein wesentlicher Vorteil der komponentenbasierten UI-Architektur ist, dass Komponenten zusammengebaut werden können. Genau wie Sie HTML-Tags ineinander schreiben können, um eine Website zu erstellen, können Sie Komponenten innerhalb anderer Komponenten verwenden, um eine Webanwendung zu erstellen. Jedes Framework erlaubt Ihnen, Komponenten zu schreiben, die andere Komponenten nutzen (und somit von ihnen abhängen).

Zum Beispiel könnte unsere `AuthorCredit` React-Komponente innerhalb einer `Article`-Komponente genutzt werden. Das bedeutet, dass `Article` `AuthorCredit` importieren müsste.

```js
import AuthorCredit from "./components/AuthorCredit";
```

Sobald das erledigt ist, könnte `AuthorCredit` innerhalb der `Article`-Komponente wie folgt verwendet werden:

```jsx
<Article>
  <AuthorCredit />
</Article>
```

### Dependency Injection

Reale Anwendungen können häufig Komponentenhierarchien mit mehreren Verschachtelungsebenen beinhalten. Eine `AuthorCredit`-Komponente, die viele Ebenen tief verschachtelt ist, könnte aus irgendeinem Grund Daten von der Wurzelebene unserer Anwendung benötigen.

Nehmen wir an, die Magazin-Website, die wir erstellen, ist so strukturiert:

```jsx
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

Unsere `App`-Komponente hat Daten, die unsere `AuthorCredit`-Komponente benötigt. Wir könnten `Home` und `Article` umschreiben, damit sie wissen, `props` weiterzugeben, aber das könnte mühsam werden, wenn es viele, viele Ebenen zwischen dem Ursprung und dem Ziel unserer Daten gibt. Es ist auch übertrieben: `Home` und `Article` machen tatsächlich keinen Gebrauch von dem Porträt oder der Autorenzeile des Autors, aber wenn wir wollen, dass diese Information in der `AuthorCredit` landet, müssen wir `Home` und `Article` ändern, um dies zu ermöglichen.

Das Problem, Daten durch viele Schichten von Komponenten zu übergeben, wird als "prop drilling" bezeichnet, und es ist nicht ideal für große Anwendungen.

Um das "prop drilling" zu umgehen, bieten Frameworks Funktionalitäten, die als Dependency Injection bekannt sind – eine Möglichkeit, bestimmte Daten direkt an die Komponenten zu bringen, die sie benötigen, ohne sie durch dazwischenliegende Ebenen zu schleusen. Jedes Framework implementiert Dependency Injection unter einem anderen Namen und auf unterschiedliche Weise, aber der Effekt ist letztendlich derselbe.

Angular nennt diesen Prozess [Dependency Injection](https://angular.dev/guide/di/dependency-injection); Vue hat [`provide()` und `inject()`-Methoden für Komponenten](https://v2.vuejs.org/v2/api/#provide-inject); React hat eine [Context API](https://react.dev/learn/passing-data-deeply-with-context); Ember teilt den Zustand über [Dienste](https://guides.emberjs.com/release/services/).

### Lebenszyklus

Im Kontext eines Frameworks ist der **Lebenszyklus** einer Komponente eine Sammlung von Phasen, durch die eine Komponente von dem Moment an geht, an dem sie dem DOM angehängt und dann vom Browser gerendert wird (häufig als _Mounting_ bezeichnet), bis sie aus dem DOM entfernt wird (häufig als _Unmounting_ bezeichnet). Jedes Framework benennt diese Lebenszyklusphasen unterschiedlich, und nicht alle bieten den Entwicklern Zugriff auf die gleichen Phasen. Alle Frameworks folgen demselben allgemeinen Modell: Sie erlauben Entwicklern, bestimmte Aktionen auszuführen, wenn die Komponente _mountet_, wenn sie _rendert_, wenn sie _unmountet_ und in vielen Phasen dazwischen.

Die _Render_-Phase ist die wichtigste zu verstehen, weil sie am häufigsten ausgeführt wird, wenn Ihr Benutzer mit Ihrer Anwendung interagiert. Sie wird jedes Mal ausgeführt, wenn der Browser etwas Neues rendern muss, egal ob diese neue Information eine Ergänzung zu dem ist, was im Browser ist, eine Löschung oder eine Bearbeitung dessen, was dort ist.

Dieses [Diagramm des Lebenszyklus einer React-Komponente](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) bietet einen allgemeinen Überblick über das Konzept.

## Elemente rendern

Ähnlich wie bei Lebenszyklen verfolgen Frameworks unterschiedliche, aber ähnliche Ansätze, wie sie Ihre Anwendungen rendern. Alle verfolgen die derzeit gerenderte Version des DOM im Browser, und jedes trifft leicht unterschiedliche Entscheidungen darüber, wie das DOM sich ändern sollte, wenn Komponenten in Ihrer Anwendung neu gerendert werden. Da Frameworks diese Entscheidungen für Sie treffen, interagieren Sie typischerweise nicht selbst mit dem DOM. Diese Abstraktion vom DOM ist komplexer und speicheraufwändiger als das direkte Aktualisieren des DOM, aber ohne sie könnten Frameworks Sie nicht auf die deklarative Weise programmieren lassen, für die sie bekannt sind.

Der **Virtuelle DOM** ist ein Ansatz, bei dem Informationen über das DOM des Browsers im Speicherspeicher von JavaScript gespeichert werden. Ihre Anwendung aktualisiert diese Kopie des DOM, vergleicht sie dann mit dem "echten" DOM – dem DOM, das tatsächlich für Ihre Benutzer gerendert wird – um zu entscheiden, was zu rendern ist. Die Anwendung erstellt ein "Diff", um die Unterschiede zwischen dem aktualisierten virtuellen DOM und dem derzeit gerenderten DOM zu vergleichen, und verwendet dieses Diff, um Updates auf das reale DOM anzuwenden. Sowohl React als auch Vue nutzen ein virtuelles DOM-Modell, aber sie wenden beim Diffing oder Rendern nicht genau die gleiche Logik an.

Sie können [mehr über den virtuellen DOM in den React-Dokumenten lesen](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

Der **inkremente DOM** ist ähnlich wie der virtuelle DOM, indem er ein DOM-Diff erstellt, um zu entscheiden, was gerendert werden soll, unterscheidet sich jedoch dadurch, dass er keine vollständige Kopie des DOM im JavaScript-Speicher erstellt. Er ignoriert die Teile des DOM, die nicht geändert werden müssen. Angular ist das einzige Framework, das bislang in diesem Modul besprochen wurde, das einen inkrementellen DOM verwendet.

Sie können [mehr über den inkrementellen DOM auf dem Auth0-Blog lesen](https://auth0.com/blog/incremental-dom/).

Die **Glimmer VM** ist einzigartig für Ember. Sie ist weder ein virtueller DOM noch ein inkrementeller DOM; es ist ein separater Prozess, durch den Embers Templates in eine Art "byte code" transpilliert werden, der leichter und schneller zu lesen ist als JavaScript.

## Routing

Wie [im vorherigen Kapitel erwähnt, ist Routing](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing) ein wichtiger Teil der Web-Erfahrung. Um ein gebrochenes Erlebnis in ausreichend komplexen Apps mit vielen Ansichten zu vermeiden, bietet jedes der in diesem Modul behandelten Frameworks eine Bibliothek (oder mehr als eine Bibliothek), die Entwicklern hilft, client-seitiges Routing in ihren Anwendungen zu implementieren.

## Testen

Alle Anwendungen profitieren von Testabdeckungen, die sicherstellen, dass Ihre Software weiterhin so funktioniert, wie Sie es erwarten, und Webanwendungen sind da keine Ausnahme. Das Ökosystem jedes Frameworks bietet Werkzeuge, die das Schreiben von Tests erleichtern. Testwerkzeuge sind nicht in die Frameworks selbst eingebaut, aber die Befehlszeilen-Werkzeuge, die verwendet werden, um Framework-Apps zu generieren, geben Ihnen Zugriff auf die entsprechenden Testwerkzeuge.

Jedes Framework hat umfangreiche Werkzeuge in seinem Ökosystem, mit Fähigkeiten für Unit- und Integrationstests gleichermaßen.

[Testing Library](https://testing-library.com/) ist eine Suite von Testwerkzeugen, die Werkzeuge für viele JavaScript-Umgebungen bietet, einschließlich React, Vue und Angular. Die Ember-Dokumentation behandelt das [Testen von Ember-Apps](https://guides.emberjs.com/release/testing/).

Hier ist ein kurzer Test für unseren `CounterButton`, geschrieben mit Hilfe der React Testing Library - er testet eine Reihe von Dingen, wie zum Beispiel die Existenz des Buttons, und ob der Button den richtigen Text nach 0, 1 und 2 Klick-Mal anzeigt:

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

An diesem Punkt sollten Sie eine bessere Vorstellung von den tatsächlichen Sprachen, Funktionen und Werkzeugen haben, die Sie verwenden werden, wenn Sie Anwendungen mit Frameworks erstellen. Ich bin sicher, dass Sie begeistert sind, loszulegen und tatsächlich etwas zu programmieren, und genau das werden Sie als nächstes tun!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Introduction","Learn_web_development/Core/Frameworks_libraries/React_getting_started", "Learn_web_development/Core/Frameworks_libraries")}}
