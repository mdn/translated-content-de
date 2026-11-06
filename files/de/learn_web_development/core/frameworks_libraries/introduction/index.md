---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unsere Betrachtung von Frameworks mit einem allgemeinen Überblick: einer kurzen Geschichte von JavaScript und Frameworks, den Gründen für die Entstehung von Frameworks und ihrem Nutzen, Überlegungen zur Auswahl eines Frameworks zum Lernen sowie Alternativen zu clientseitigen Frameworks.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Code von Drittanbietern ist und wie clientseitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie Sie ein Framework auswählen können.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks eingesetzt werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Entstehung von Bibliotheken und Frameworks

Als JavaScript 1996 aufkam, brachte es gelegentliche Interaktivität und Abwechslung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur zu einem Ort, an dem man _Dinge lesen_, sondern auch _Dinge tun_ konnte. Die Beliebtheit von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge zur Lösung ihrer Probleme und bündelten sie zu wiederverwendbaren Paketen, sogenannten **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem aus Bibliotheken prägte die Entwicklung des Webs und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Vorgaben dazu macht, wie Software entwickelt wird. Diese Vorgaben sorgen innerhalb einer Anwendung für Vorhersehbarkeit und Einheitlichkeit. Vorhersehbarkeit ermöglicht es, Software auf einen enormen Umfang zu skalieren und dennoch wartbar zu halten. Vorhersehbarkeit und Wartbarkeit sind entscheidend für den langfristigen Zustand und die Lebensdauer von Software. Mit modernen JavaScript-Frameworks ist es wesentlich einfacher geworden, hochdynamische, interaktive Anwendungen zu entwickeln.

JavaScript-Frameworks bilden die Grundlage für viele der beeindruckenden Anwendungen im heutigen Web – darunter zahlreiche Websites, die Sie vermutlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks. Derzeit gelten jedoch die folgenden vier als die „großen Vier“.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 veröffentlicht und führte Arbeiten aus dem Projekt [SproutCore](https://en.wikipedia.org/wiki/SproutCore) fort. Es ist ein älteres Framework mit weniger Nutzern als modernere Alternativen wie React und Vue. Dank seiner Stabilität, der Unterstützung durch die Community und einiger durchdachter Programmierprinzipien ist es dennoch recht beliebt.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Framework für Webanwendungen, das vom Angular-Team bei Google sowie von einer Community aus Einzelpersonen und Unternehmen entwickelt wird. Es ist eine vollständige Neufassung von [AngularJS](https://en.wikipedia.org/wiki/AngularJS) durch dasselbe Team. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Templates verwendet. Beim Build übersetzt der Compiler des Frameworks die Templates für Entwickler transparent in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten.

### Vue

Nachdem Evan You am ursprünglichen Projekt [AngularJS](https://en.wikipedia.org/wiki/AngularJS) gearbeitet und daraus gelernt hatte, veröffentlichte er 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen Vier, hat aber in jüngerer Zeit deutlich an Beliebtheit gewonnen.

Wie Angular erweitert Vue HTML um eigenen Code. Darüber hinaus stützt es sich hauptsächlich auf modernes Standard-JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte das Unternehmen React bereits intern eingesetzt, um viele seiner Probleme zu lösen. Genau genommen ist React selbst _kein_ Framework, sondern eine Bibliothek zum Rendern von UI-Komponenten. React wird zusammen mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen: Mit React und [React Native](https://reactnative.dev/) können Entwickler mobile Anwendungen erstellen, mit React und [ReactDOM](https://react.dev/reference/react-dom) Webanwendungen und so weiter.

Da React und ReactDOM so häufig gemeinsam verwendet werden, gilt React umgangssprachlich als JavaScript-Framework. In diesem Modul verwenden wir den Begriff ebenfalls in diesem Sinn.

React erweitert JavaScript um eine HTML-ähnliche Syntax namens [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum gibt es Frameworks?

Wir haben das Umfeld besprochen, das zur Entstehung von Frameworks geführt hat, aber noch nicht wirklich, _warum_ Entwickler sie für nötig hielten. Um das zu verstehen, müssen wir zunächst die Herausforderungen der Softwareentwicklung betrachten.

Nehmen wir eine häufige Art von Anwendung: eine To-do-Liste. In späteren Kapiteln werden wir ihre Umsetzung mit verschiedenen Frameworks betrachten. Die Anwendung soll es Nutzern ermöglichen, eine Aufgabenliste anzuzeigen, neue Aufgaben hinzuzufügen und Aufgaben zu löschen. Gleichzeitig muss sie die zugrunde liegenden Daten zuverlässig verwalten und aktualisieren. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes dieser Ziele ist für sich genommen theoretisch einfach. Wir können die Daten durchlaufen, um sie darzustellen; wir können einem Objekt etwas hinzufügen, um eine neue Aufgabe anzulegen; und wir können eine Kennung verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir jedoch bedenken, dass die Anwendung Nutzern _all_ dies über den Browser ermöglichen muss, werden erste Schwierigkeiten sichtbar. **Das eigentliche Problem ist: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wie schwierig das ist, können wir anhand von nur _einer_ Funktion unserer To-do-Listen-App untersuchen: dem Anzeigen einer Aufgabenliste.

## Der Umfang von DOM-Änderungen

HTML-Elemente zu erstellen und sie zum richtigen Zeitpunkt im Browser darzustellen, erfordert überraschend viel Code. Nehmen wir an, unser Zustand besteht aus einem Schlüssel-Wert-Speicher mit `taskName` (gesteuert durch das Texteingabefeld) und der Liste `tasks`:

```js
const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!",
    },
  ],
};
```

Wie zeigen wir unseren Nutzern eine dieser Aufgaben? Jede Aufgabe soll als Listeneintrag dargestellt werden – als HTML-Element [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) innerhalb einer ungeordneten Liste (einem [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)-Element). Wie erstellen wir ihn? Das könnte etwa so aussehen:

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = name;

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen. Für seine benötigten Eigenschaften und Kindelemente sind mehrere weitere Codezeilen nötig.

Der vorherige Codeausschnitt verweist auf eine weitere Funktion zum Erstellen eines Elements: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie die Funktion, mit der wir den Listeneintrag erstellt haben:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.addEventListener("click", () => {
    state.tasks = state.tasks.filter((t) => t.id !== id);
    renderTodoList();
  });
  button.textContent = "Delete";

  return button;
}
```

Bemerkenswert ist, dass wir bei jeder Aktualisierung des Zustands `renderTodoList` manuell aufrufen müssen, damit die Anzeige mit dem Zustand synchronisiert wird. Der Code, der unsere Einträge auf der Seite darstellt, könnte etwa so aussehen:

```js hidden
const todoFormEl = document.querySelector("#todo-form");
const todoInputEl = document.querySelector("#todo-input");
const todoListEl = document.querySelector("#todo-list");
```

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.lastChild) {
    todoListEl.removeChild(todoListEl.lastChild);
  }
  todoListEl.appendChild(frag);
}
```

Damit haben wir fast dreißig Codezeilen, die _nur_ der Benutzeroberfläche dienen – _nur_ dazu, etwas im DOM darzustellen. Und dabei haben wir noch nicht einmal Klassen hinzugefügt, mit denen wir unsere Listeneinträge später gestalten könnten!

Falls Sie neugierig sind: Unten finden Sie eine vollständig lauffähige Demo. Klicken Sie auf „Play“, um den Quellcode im Playground anzusehen.

```html hidden
<h1>TodoMatic</h1>
<form id="todo-form">
  <label for="todo-input">What needs to be done?</label>
  <input type="text" id="todo-input" autocomplete="on" />
  <button type="submit">Add</button>
</form>
<ul id="todo-list"></ul>
```

```css hidden
* + * {
  margin-top: 0.4rem;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2rem;
  line-height: 1.25;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Roboto", "Helvetica", "Arial",
    sans-serif;
  color: hsl(0 0 0.13);

  width: 95%;
  max-width: 30em;
  padding-bottom: 2em;
  margin: 0 auto;
}

button,
input[type="text"] {
  font-size: 100%;
  line-height: 1.15;
  font-family: inherit;
  margin: 0;

  padding: 0.5rem;
  border: 1px solid #707070;
  border-radius: 2px;
}

* + button {
  margin-left: 0.4rem;
}

label {
  display: table;
}

ul {
  margin-top: 1.6rem;
  padding-left: 2em;
}

label + input[type="text"] {
  margin-top: 0.4rem;
}
```

```js hidden
function generateUniqueId(prefix = "prefix") {
  return `${prefix}-${Math.floor(Math.random() * Date.now())}`;
}

function createTask(name) {
  return {
    name,
    id: generateUniqueId("todo"),
  };
}

function renderInput() {
  todoInputEl.value = state.taskName;
}

todoInputEl.addEventListener("change", (e) => {
  state.taskName = e.target.value;
});
todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  state.tasks = [...state.tasks, createTask(state.taskName)];
  state.taskName = "";
  renderInput();
  renderTodoList();
});
renderInput();
renderTodoList();
```

{{EmbedLiveSample("the_verbosity_of_dom_change", "", "400", , , , , "allow-forms")}}

Die direkte Arbeit mit dem DOM wie in diesem Beispiel setzt voraus, dass Sie vieles über seine Funktionsweise wissen: wie Elemente erstellt werden, wie ihre Eigenschaften geändert werden, wie Elemente ineinander eingefügt werden und wie sie auf die Seite gelangen. Nichts von diesem Code verarbeitet bereits Nutzerinteraktionen oder kümmert sich darum, Aufgaben hinzuzufügen oder zu löschen. Wenn wir diese Funktionen ergänzen, müssen wir daran denken, die Benutzeroberfläche zum richtigen Zeitpunkt und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um solche Arbeiten erheblich zu erleichtern – sie sollen eine bessere _Entwicklungserfahrung_ bieten. Sie verleihen JavaScript keine völlig neuen Fähigkeiten, sondern machen seine vorhandenen Fähigkeiten leichter zugänglich, damit Sie Anwendungen für das heutige Web entwickeln können.

Weitere Informationen zu den in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu beschreiben. Das bedeutet, Sie schreiben Code, der festlegt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework setzt dies im Hintergrund im DOM um.

Der Ansatz, neue DOM-Elemente wiederholt mit reinem JavaScript zu erstellen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie unsere Aufgabenliste mit Vue beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieser Codeausschnitt reduziert fast dreißig Codezeilen auf sechs. Falls Ihnen die geschweiften Klammern und die `v-`-Attribute hier nicht vertraut sind, ist das kein Problem: Die Vue-spezifische Syntax lernen Sie später in diesem Modul kennen. Entscheidend ist hier, dass dieser Code der Benutzeroberfläche ähnelt, die er darstellt – anders als der Code in reinem JavaScript.

Dank Vue mussten wir keine eigenen Funktionen zum Aufbau der Benutzeroberfläche schreiben. Das Framework übernimmt dies auf optimierte, effiziente Weise. Unsere einzige Aufgabe bestand darin, Vue zu beschreiben, wie jeder Eintrag aussehen soll. Entwickler, die mit Vue vertraut sind, können sich beim Einstieg in unser Projekt schnell zurechtfinden. Das gilt nicht nur für Vue: Ein Framework kann die Effizienz sowohl einzelner Entwickler als auch ganzer Teams steigern.

_Ähnliches_ lässt sich auch mit reinem JavaScript erreichen. [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) erleichtern es, HTML-Zeichenfolgen zu schreiben, die das fertige Element darstellen. Für eine so einfache Anwendung wie unsere To-do-Liste kann das sinnvoll sein. Bei großen Anwendungen, die Tausende von Datensätzen verwalten und möglicherweise ebenso viele unterschiedliche Elemente in einer Benutzeroberfläche darstellen, ist dieser Ansatz jedoch nicht wartbar.

## Weitere Vorteile von Frameworks

Sehen wir uns einige weitere Vorteile von Frameworks an. Wie bereits angedeutet, lassen sich diese Vorteile auch mit reinem JavaScript erzielen. Ein Framework nimmt Ihnen jedoch die Denkarbeit ab, die nötig wäre, um diese Probleme selbst zu lösen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das jeweilige Ökosystem Werkzeuge, die die Entwicklung erleichtern. Mit diesen Werkzeugen lassen sich beispielsweise Tests hinzufügen (um sicherzustellen, dass sich Ihre Anwendung wie erwartet verhält) oder Linting einsetzen (um Fehlerfreiheit und einen einheitlichen Codestil zu fördern).

> [!NOTE]
> Wenn Sie mehr über Werkzeuge für die Webentwicklung erfahren möchten, lesen Sie unseren [Überblick über clientseitige Werkzeuge](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview).

### Aufteilung in Komponenten

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ aufzuteilen – wartbare, wiederverwendbare Codeeinheiten, die miteinander kommunizieren können. Der gesamte Code für eine bestimmte Komponente kann in einer Datei (oder einigen wenigen festgelegten Dateien) liegen. So wissen Sie als Entwickler genau, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer Anwendung mit reinem JavaScript müssten Sie selbst Regeln festlegen, um das effizient und skalierbar zu erreichen. Ohne solche Regeln könnte es vielen JavaScript-Entwicklern passieren, dass der Code für einen Teil der Benutzeroberfläche über eine ganze Datei verstreut ist – oder sich sogar in einer ganz anderen Datei befindet.

### Routing

Die wichtigste Eigenschaft des Webs ist, dass Nutzer von einer Seite zur nächsten navigieren können – schließlich ist es ein Netz miteinander verknüpfter Dokumente. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und lädt neue Inhalte zur Anzeige. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können die neue URL speichern und später zur Seite zurückkehren oder sie mit anderen teilen, damit diese dieselbe Seite leicht finden. Ihr Browser merkt sich außerdem Ihren Navigationsverlauf, sodass Sie vor- und zurücknavigieren können. Dies wird als **serverseitiges Routing** bezeichnet.

Moderne Webanwendungen laden und rendern üblicherweise keine neuen HTML-Dateien. Stattdessen laden sie ein einzelnes HTML-Grundgerüst und aktualisieren fortlaufend das darin enthaltene DOM, ohne Nutzer zu neuen Webadressen zu führen. Solche Anwendungen heißen **Single-Page-Apps** oder **SPAs**. Jede neue, einer Webseite ähnliche Ansicht wird gewöhnlich als _View_ bezeichnet. Standardmäßig findet dabei kein Routing statt.

Wenn eine SPA komplex genug ist und genügend unterschiedliche Views darstellt, ist eine Routing-Funktion wichtig. Nutzer sind daran gewöhnt, auf bestimmte Seiten einer Anwendung verlinken und in ihrem Navigationsverlauf vor- und zurückgehen zu können. Wenn diese üblichen Webfunktionen nicht funktionieren, leidet die Nutzererfahrung. Wird das Routing auf diese Weise von einer clientseitigen Anwendung übernommen, heißt es **clientseitiges Routing**.

Mit den nativen Fähigkeiten von JavaScript und des Browsers lässt sich durchaus ein Router erstellen. Beliebte, aktiv weiterentwickelte Frameworks bieten jedoch ergänzende Bibliotheken, die Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Was Sie beim Einsatz von Frameworks bedenken sollten

Effektive Webentwicklung bedeutet, die am besten geeigneten Werkzeuge für die jeweilige Aufgabe einzusetzen. JavaScript-Frameworks erleichtern die Entwicklung von Frontend-Anwendungen, sind aber kein Allheilmittel. In diesem Abschnitt behandeln wir einige Punkte, die Sie bei ihrer Verwendung bedenken sollten. Möglicherweise benötigen Sie überhaupt kein Framework – setzen Sie keines nur um seiner selbst willen ein.

### Vertrautheit mit dem Werkzeug

Wie reines JavaScript erfordern auch Frameworks Einarbeitungszeit und haben ihre Eigenheiten. Bevor Sie sich für ein Framework in einem Projekt entscheiden, sollten Sie sicherstellen, dass Sie genügend Zeit haben, seine Funktionen so weit kennenzulernen, dass es Ihnen nützt, statt Sie zu behindern. Auch Ihre Teammitglieder sollten sich mit dem Framework wohlfühlen.

### Überdimensionierte Lösungen

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten kaum oder gar nicht interaktiv sind, benötigen Sie möglicherweise weder ein Framework noch das damit verbundene JavaScript. Frameworks sind allerdings nicht alle gleich umfangreich; manche eignen sich besser für kleine Projekte als andere. In einem Artikel für das Smashing Magazine beschreibt Sarah Drasner, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), wenn nur kleine Teile einer Webseite interaktiv werden sollen.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und mitunter insgesamt _weniger_ Code –, indem sie die Interaktionen mit dem DOM im Hintergrund übernehmen. Diese Abstraktion verbessert die Entwicklungserfahrung, hat aber ihren Preis. Um Ihren Code in DOM-Änderungen umzusetzen, müssen Frameworks eigenen Code ausführen. Dadurch wird die fertige Anwendung größer und ihre Ausführung rechenintensiver.

Ein gewisser zusätzlicher Code ist unvermeidlich. Ein Framework, das Tree-Shaking unterstützt – also beim Build ungenutzten Code entfernt –, hilft Ihnen, Ihre Anwendungen klein zu halten. Dennoch müssen Sie diesen Faktor berücksichtigen, wenn Sie die Leistung Ihrer Anwendung beurteilen, insbesondere auf Geräten mit begrenzter Netzwerkbandbreite oder Speicherkapazität, etwa Mobiltelefonen.

Die Abstraktion durch Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihren Umgang mit den Grundlagen des Webs. Unabhängig davon, wie Sie für das Web entwickeln: Das Endergebnis, mit dem Ihre Nutzer letztlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie HTML und den Zweck seiner verschiedenen Tags aus den Augen verlieren. Das kann zu einem HTML-Dokument führen, dem Semantik und Barrierefreiheit fehlen. Es ist sogar möglich, eine anfällige Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne JavaScript nicht funktioniert.

Frameworks sind nicht die Ursache dieser Probleme. Mit falschen Prioritäten kann jede Anwendung anfällig, aufgebläht und unzugänglich werden. Frameworks verstärken allerdings unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, geht das damit leicht. Wenn Sie jedoch nicht ebenso sorgfältig auf Leistung und Barrierefreiheit achten, verstärken Frameworks auch die Anfälligkeit, den Umfang und die mangelnde Zugänglichkeit Ihrer Anwendung. Moderne Entwicklungsprioritäten, durch Frameworks verstärkt, haben die Struktur des Webs an vielen Stellen auf den Kopf gestellt. Statt eines robusten Netzwerks von Dokumenten, bei dem Inhalte im Vordergrund stehen, stellt das Web heute oft JavaScript an die erste und die Nutzererfahrung an die letzte Stelle.

## Barrierefreiheit in einem von Frameworks geprägten Web

Knüpfen wir an den vorherigen Abschnitt an und betrachten wir die Barrierefreiheit etwas genauer. Barrierefreie Benutzeroberflächen erfordern immer Überlegung und Aufwand, und Frameworks können diesen Prozess erschweren. Häufig müssen Sie fortgeschrittene Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA-[Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder die Fokusverwaltung zuzugreifen.

In manchen Fällen schaffen Framework-Anwendungen Barrieren, die bei herkömmlichen Websites nicht bestehen. Das deutlichste Beispiel dafür ist das bereits erwähnte clientseitige Routing.

Bei herkömmlichem (serverseitigem) Routing hat die Navigation im Web vorhersehbare Ergebnisse. Der Browser setzt den Fokus an den Anfang der Seite, und assistive Technologien geben den Seitentitel bekannt. Das geschieht jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten. Deshalb weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel bekannt geben sollte. Die Entwickler von Frameworks haben sehr viel Zeit und Arbeit in JavaScript investiert, das diese Funktionen nachbildet. Dennoch gelingt dies keinem Framework vollständig.

Daraus folgt, dass Sie die Barrierefreiheit von Anfang an bei _jedem_ Webprojekt berücksichtigen sollten. Bedenken Sie aber auch, dass abstrahierte Codebasen mit Frameworks eher schwerwiegende Probleme mit der Barrierefreiheit entwickeln können, wenn Sie nicht darauf achten.

## So wählen Sie ein Framework aus

Jedes der in diesem Modul behandelten Frameworks verfolgt bei der Entwicklung von Webanwendungen einen anderen Ansatz. Jedes wird regelmäßig verbessert oder verändert und hat eigene Vor- und Nachteile. Welches Framework das richtige ist, hängt vom Team und vom Projekt ab. Sie sollten selbst recherchieren, was Ihren Anforderungen entspricht. Die folgenden Fragen können Ihnen dabei helfen, Ihre Möglichkeiten gezielter zu untersuchen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Gibt es eine aktive Community, gute Dokumentation und weitere Unterstützung für das Framework?

Die Tabelle in diesem Abschnitt gibt einen schnellen Überblick über die aktuelle _Browser-Unterstützung_ der einzelnen Frameworks und die **domänenspezifischen Sprachen**, mit denen sie verwendet werden können.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die für bestimmte Bereiche der Softwareentwicklung relevant sind. Im Zusammenhang mit Frameworks handelt es sich bei DSLs um Varianten von JavaScript oder HTML, die die Entwicklung mit dem jeweiligen Framework erleichtern. Wichtig ist: Keines der Frameworks _verlangt_ von Entwicklern, eine bestimmte DSL zu verwenden. Fast alle wurden jedoch mit Blick auf eine bestimmte DSL entwickelt. Wenn Sie auf die bevorzugte DSL eines Frameworks verzichten, entgehen Ihnen Funktionen, die Ihre Entwicklung sonst erleichtern würden.

Wenn Sie ein Framework für ein neues Projekt auswählen, sollten Sie dessen Browser-Unterstützung und DSLs sorgfältig prüfen. Eine unpassende Browser-Unterstützung kann für Ihre Nutzer zum Hindernis werden; eine unpassende DSL-Unterstützung für Sie und Ihr Team.

| Framework | Browser-Unterstützung                | Bevorzugte DSL | Unterstützte DSLs        | Quelle                                                                                     |
| --------- | ------------------------------------ | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Moderne Browser                      | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Moderne Browser                      | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Moderne Browser (IE9+ in Vue 2)      | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Moderne Browser (IE9+ in Ember 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> Die DSLs, die wir als „HTML-basiert“ bezeichnen, haben keine offiziellen Namen. Streng genommen sind sie keine echten DSLs. Da es sich jedoch um nicht standardisiertes HTML handelt, halten wir es für sinnvoll, sie hervorzuheben.

### Hat das Framework eine starke Community?

Das ist möglicherweise am schwierigsten zu beurteilen, da sich die Stärke einer Community nicht unmittelbar an leicht verfügbaren Zahlen ablesen lässt. Die Anzahl der GitHub-Sterne oder die wöchentlichen npm-Downloads eines Projekts können einen Eindruck von seiner Beliebtheit vermitteln. Manchmal hilft es aber am meisten, in einigen Foren zu suchen oder mit anderen Entwicklern zu sprechen. Entscheidend ist nicht nur die Größe der Community, sondern auch, wie offen und einladend sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen aus dem Web

Verlassen Sie sich dabei nicht allein auf unsere Einschätzung – im Web gibt es zahlreiche Diskussionen. Die Wikimedia Foundation hat sich kürzlich entschieden, Vue für ihr Frontend zu verwenden, und dazu eine [Bitte um Stellungnahmen (RFC) zur Einführung eines Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, erläutert darin die Anforderungen des Wikimedia-Projekts und warum bestimmte Frameworks für das Team geeignet waren. Dieser RFC ist ein gutes Beispiel dafür, welche Recherchen Sie selbst anstellen sollten, wenn Sie den Einsatz eines Frontend-Frameworks planen.

Die [State-of-JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie behandelt viele Themen rund um JavaScript, darunter die Nutzung von Frameworks und die Einstellung der Entwickler zu ihnen. Mittlerweile liegen Daten aus mehreren Jahren vor, anhand derer Sie die Beliebtheit eines Frameworks einschätzen können.

Das Vue-Team hat [Vue ausführlich mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Dieser Vergleich ist möglicherweise nicht ganz unvoreingenommen – worauf das Team selbst hinweist –, aber dennoch eine wertvolle Informationsquelle.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, die die Webentwicklung beschleunigen, und wissen, dass Ihr Projekt kein umfangreiches clientseitiges JavaScript benötigt, kommen einige andere Lösungen infrage:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein Generator für statische Websites

### Content-Management-Systeme

**Content-Management-Systeme** (**CMS**) sind Werkzeuge, mit denen Nutzer Inhalte für das Web erstellen können, ohne selbst unmittelbar Code zu schreiben. Sie eignen sich gut für große Projekte, insbesondere wenn Autoren mit begrenzten Programmierkenntnissen Inhalte beitragen sollen oder Programmierer Zeit sparen möchten. Die Einrichtung kann allerdings erheblichen Zeitaufwand erfordern. Außerdem geben Sie bei der Verwendung eines CMS zumindest einen Teil der Kontrolle über die endgültige Ausgabe Ihrer Website ab. Wenn das gewählte CMS beispielsweise standardmäßig keine barrierefreien Inhalte erzeugt, lässt sich das oft nur schwer verbessern.

Zu den beliebten CMS gehören [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es Aufgabe des _Servers_ ist, eine Single-Page-App zu rendern. Das Gegenteil ist das _clientseitige Rendering_, die häufigste und einfachste Art, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering entlastet das Gerät des Nutzers, da ihm nur eine bereits gerenderte HTML-Datei gesendet wird. Im Vergleich zu einer clientseitig gerenderten Anwendung kann die Einrichtung jedoch schwieriger sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Sehen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, die Namen sind verwirrend, und nein, die Projekte hängen nicht zusammen!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community entwickelt und gepflegt, während andere „offizielle“ Lösungen der Verantwortlichen für das jeweilige Framework sind.

### Generatoren für statische Websites

{{Glossary("SSG", "Generatoren für statische Websites")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch erzeugen – einschließlich des benötigten CSS und JavaScript –, damit sie an beliebig vielen Orten veröffentlicht werden können. Als Hosting-Plattform kommen beispielsweise ein GitHub-Pages-Branch, eine Netlify-Instanz oder ein privater Server Ihrer Wahl infrage. Dieser Ansatz hat mehrere Vorteile, vor allem bei Leistung (das Gerät des Nutzers muss die Seite nicht erst mit JavaScript aufbauen; sie ist bereits fertig) und Sicherheit (statische Seiten bieten weniger Angriffsflächen). Solche Websites können JavaScript weiterhin dort einsetzen, wo es nötig ist, sind aber nicht davon _abhängig_. Wie bei jedem anderen Werkzeug kostet es Zeit, den Umgang mit Generatoren für statische Websites zu erlernen, was Ihren Entwicklungsprozess zunächst bremsen kann.

Statische Websites können so wenige oder so viele unterschiedliche Seiten haben, wie Sie möchten. So wie Frameworks die schnelle Entwicklung clientseitiger JavaScript-Anwendungen ermöglichen, erlauben Generatoren für statische Websites die schnelle Erstellung von HTML-Dateien, die Sie sonst einzeln schreiben müssten. Ähnlich wie Frameworks ermöglichen sie Entwicklern, Komponenten für wiederkehrende Teile ihrer Webseiten zu schreiben und diese zu einer fertigen Seite zusammenzusetzen. Bei Generatoren für statische Websites heißen diese Komponenten **Templates**. Webseiten, die mit solchen Generatoren erstellt wurden, können sogar Framework-Anwendungen enthalten: Wenn beispielsweise beim Besuch einer bestimmten Seite Ihrer statisch generierten Website eine React-Anwendung gestartet werden soll, ist das möglich.

Generatoren für statische Websites gibt es schon seit Langem, und sie werden ständig optimiert und weiterentwickelt. Zur Auswahl stehen unter anderem [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/). Sie bauen auf unterschiedlichen Technologie-Stacks auf und bieten jeweils eigene Funktionen. Andere Möglichkeiten wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/) verwenden statt Templates clientseitige Frameworks, erzeugen aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über Generatoren für statische Websites im Allgemeinen erfahren möchten, lesen Sie Tatiana Macs [Leitfaden für Einsteiger zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Reihe erklärt die Autorin, was ein Generator für statische Websites ist und wie er sich zu anderen Möglichkeiten der Veröffentlichung von Webinhalten verhält.

## Zusammenfassung

Damit sind wir am Ende unserer Einführung in Frameworks angelangt. Wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich eine hilfreiche Grundlage dafür vermittelt, warum Sie Frameworks überhaupt einsetzen und wie Sie eines auswählen können – und Ihre Neugier geweckt, mehr zu lernen und selbst loszulegen!

Im nächsten Artikel gehen wir stärker ins Detail und betrachten, welche Arten von Funktionen Frameworks typischerweise bieten und warum sie so funktionieren, wie sie funktionieren.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
