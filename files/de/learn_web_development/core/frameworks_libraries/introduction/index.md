---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unsere Betrachtung von Frameworks mit einem allgemeinen Überblick: Wir werfen einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, darauf, warum es Frameworks gibt und was sie uns bieten, wie Sie ein Framework zum Lernen auswählen können und welche Alternativen zu clientseitigen Frameworks existieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Code von Drittanbietern ist und wie clientseitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie Sie ein Framework auswählen.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks verwendet werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Entstehung von Bibliotheken und Frameworks

Als JavaScript 1996 auf den Markt kam, brachte es gelegentliche Interaktivität und Abwechslung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur zu einem Ort, an dem man _Dinge lesen_, sondern auch _Dinge tun_ konnte. Die Beliebtheit von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um ihre Probleme zu lösen, und bündelten sie zu wiederverwendbaren Paketen, sogenannten **Bibliotheken**. So konnten sie ihre Lösungen mit anderen teilen. Dieses gemeinschaftliche Ökosystem von Bibliotheken prägte die Entwicklung des Webs und brachte schließlich Frameworks hervor.

Ein **Framework** ist eine Bibliothek, die Vorgaben dazu macht, wie Software entwickelt wird. Diese Vorgaben sorgen innerhalb einer Anwendung für Vorhersehbarkeit und Einheitlichkeit. Durch Vorhersehbarkeit kann Software auf einen enormen Umfang anwachsen und dennoch wartbar bleiben. Vorhersehbarkeit und Wartbarkeit sind entscheidend für die Qualität und Langlebigkeit von Software. Das Aufkommen moderner JavaScript-Frameworks hat die Entwicklung hochdynamischer, interaktiver Anwendungen erheblich erleichtert.

JavaScript-Frameworks bilden die Grundlage für einen Großteil der beeindruckenden Software im heutigen Web – darunter viele Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks. Derzeit gelten die folgenden vier als die „großen Vier“.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 veröffentlicht und führte die Arbeit fort, die im Projekt [SproutCore](https://en.wikipedia.org/wiki/SproutCore) begonnen hatte. Es ist ein älteres Framework mit weniger Nutzern als modernere Alternativen wie React und Vue. Dank seiner Stabilität, der Unterstützung durch die Community und einiger durchdachter Programmierprinzipien ist es aber nach wie vor recht beliebt.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Framework für Webanwendungen, das vom Angular-Team bei Google sowie von einer Community aus Einzelpersonen und Unternehmen entwickelt wird. Es ist eine vollständige Neuentwicklung durch dasselbe Team, das [AngularJS](https://en.wikipedia.org/wiki/AngularJS) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Templates verwendet. Während des Build-Prozesses übersetzt der Compiler des Frameworks die Templates für Entwickler unbemerkt in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir uns im nächsten Kapitel etwas genauer ansehen.

### Vue

Nachdem Evan You am ursprünglichen Projekt [AngularJS](https://en.wikipedia.org/wiki/AngularJS) mitgearbeitet und daraus gelernt hatte, veröffentlichte er 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen Vier, hat aber in jüngerer Zeit an Beliebtheit gewonnen.

Wie Angular erweitert Vue HTML um eigene Syntax. Darüber hinaus stützt es sich hauptsächlich auf modernes Standard-JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt nutzte das Unternehmen React bereits intern, um viele seiner Probleme zu lösen. Genau genommen ist React selbst _kein_ Framework, sondern eine Bibliothek zum Rendern von UI-Komponenten. React wird zusammen mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen: React und [React Native](https://reactnative.dev/) ermöglichen Entwicklern die Erstellung mobiler Anwendungen, React und [ReactDOM](https://react.dev/reference/react-dom) die Erstellung von Webanwendungen und so weiter.

Da React und ReactDOM so häufig zusammen verwendet werden, gilt React umgangssprachlich als JavaScript-Framework. In diesem Modul verwenden wir den Begriff in diesem Sinne.

React erweitert JavaScript um eine HTML-ähnliche Syntax namens [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum gibt es Frameworks?

Wir haben die Umstände besprochen, die zur Entwicklung von Frameworks geführt haben, aber noch nicht wirklich, _warum_ Entwickler sie für nötig hielten. Um das zu verstehen, müssen wir uns zunächst die Herausforderungen der Softwareentwicklung ansehen.

Betrachten wir eine häufige Art von Anwendung: eine To-do-Liste, deren Umsetzung mit verschiedenen Frameworks wir uns in späteren Kapiteln ansehen werden. Diese Anwendung soll es Nutzern unter anderem ermöglichen, eine Aufgabenliste anzuzeigen, eine neue Aufgabe hinzuzufügen und eine Aufgabe zu löschen. Gleichzeitig muss sie die zugrunde liegenden Daten der Anwendung zuverlässig verwalten und aktualisieren. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes dieser Ziele ist für sich genommen theoretisch einfach. Wir können die Daten durchlaufen, um sie anzuzeigen, einem Objekt Daten für eine neue Aufgabe hinzufügen und anhand einer Kennung eine Aufgabe finden, bearbeiten oder löschen. Sobald wir bedenken, dass die Anwendung Nutzern _all_ dies im Browser ermöglichen muss, zeigen sich jedoch erste Schwierigkeiten. **Das eigentliche Problem ist: Jedes Mal, wenn sich der Zustand unserer Anwendung ändert, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wie schwierig das ist, können wir anhand einer _einzigen_ Funktion unserer To-do-Listen-Anwendung untersuchen: dem Anzeigen einer Aufgabenliste.

## Wie aufwendig DOM-Änderungen sind

HTML-Elemente zu erstellen und sie zum richtigen Zeitpunkt im Browser darzustellen, erfordert überraschend viel Code. Nehmen wir an, unser Zustand ist ein Key-Value-Store, der `taskName` (gesteuert durch das Texteingabefeld) und die Liste der `tasks` enthält:

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

Wie zeigen wir Nutzern eine dieser Aufgaben an? Jede Aufgabe soll als Listeneintrag dargestellt werden – als HTML-Element [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) innerhalb eines Elements für eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)). Wie erstellen wir ihn? Das könnte etwa so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen. Mehrere weitere Codezeilen erzeugen die benötigten Eigenschaften und Kindelemente.

Der vorherige Ausschnitt verweist auf eine weitere Funktion zum Erstellen eines Elements: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie die Funktion, mit der wir den Listeneintrag erstellt haben:

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

Wichtig ist hier: Jedes Mal, wenn wir den Zustand aktualisieren, müssen wir `renderTodoList` manuell aufrufen, damit der angezeigte Inhalt mit unserem Zustand übereinstimmt. Der Code, der unsere Einträge auf der Seite darstellt, könnte etwa so aussehen:

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

Wir haben nun fast dreißig Codezeilen, die _nur_ für die Benutzeroberfläche da sind – _nur_, um etwas im DOM darzustellen. Dabei haben wir noch nicht einmal Klassen hinzugefügt, mit denen wir unsere Listeneinträge später gestalten könnten!

Falls Sie neugierig sind: Unten finden Sie eine vollständig funktionsfähige Demo. Klicken Sie auf „Play“, um den Quellcode im Playground anzusehen.

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

{{EmbedLiveSample("the_verbosity_of_dom_changes", "", "400", , , , , "allow-forms")}}

Die direkte Arbeit mit dem DOM, wie in diesem Beispiel, setzt voraus, dass Sie vieles darüber wissen, wie das DOM funktioniert: wie Sie Elemente erstellen, ihre Eigenschaften ändern, Elemente ineinander verschachteln und sie auf der Seite anzeigen. Keiner dieser Codeschnipsel verarbeitet bisher Nutzerinteraktionen oder ermöglicht das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen ergänzen, müssen wir daran denken, unsere Benutzeroberfläche zum richtigen Zeitpunkt und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit erheblich zu erleichtern – sie sollen für eine bessere _Entwicklungserfahrung_ sorgen. Sie verleihen JavaScript keine völlig neuen Fähigkeiten, sondern machen dessen vorhandene Möglichkeiten leichter zugänglich, damit Sie Anwendungen für das heutige Web entwickeln können.

Weitere Informationen zu den in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen stärker _deklarativ_ zu beschreiben. Das bedeutet: Sie schreiben Code, der festlegt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework setzt dies im Hintergrund im DOM um.

Beim Ansatz mit reinem JavaScript war die wiederholte Erstellung neuer DOM-Elemente auf den ersten Blick schwer zu verstehen. Der folgende Codeblock zeigt dagegen, wie Sie mit Vue unsere Aufgabenliste beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieser Ausschnitt verkürzt fast dreißig Codezeilen auf sechs. Wenn Ihnen die geschweiften Klammern und die `v-`-Attribute hier noch nicht vertraut sind, ist das kein Problem: Die Vue-spezifische Syntax lernen Sie später in diesem Modul kennen. Entscheidend ist, dass dieser Code so aussieht wie die Benutzeroberfläche, die er darstellt – anders als der Code in reinem JavaScript.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben. Das Framework übernimmt dies für uns auf optimierte, effiziente Weise. Unsere einzige Aufgabe bestand darin, Vue zu beschreiben, wie jeder Eintrag aussehen soll. Entwickler, die mit Vue vertraut sind, können schnell erkennen, was vor sich geht, wenn sie zu unserem Projekt hinzukommen. Das gilt nicht nur für Vue: Ein Framework kann die Effizienz sowohl einzelner Entwickler als auch ganzer Teams verbessern.

_Ähnliches_ ist auch mit reinem JavaScript möglich. [Template-Literal-Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Template_literals) erleichtern es, HTML-Zeichenfolgen zu schreiben, die dem späteren Element entsprechen. Für etwas so Einfaches wie unsere To-do-Listen-Anwendung kann das nützlich sein. Für große Anwendungen, die Tausende Datensätze verwalten und ebenso viele unterschiedliche Elemente in einer Benutzeroberfläche darstellen können, ist dieser Ansatz jedoch nicht wartbar.

## Was Frameworks sonst noch bieten

Sehen wir uns einige weitere Vorteile von Frameworks an. Wie bereits angedeutet, lassen sich diese Vorteile auch mit reinem JavaScript erzielen. Mit einem Framework müssen Sie sich jedoch nicht selbst darum kümmern, all diese Probleme zu lösen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet sein jeweiliges Ökosystem Werkzeuge, die die Entwicklung erleichtern. Mit diesen Werkzeugen können Sie beispielsweise Tests hinzufügen, um sicherzustellen, dass Ihre Anwendung wie vorgesehen funktioniert, oder Linting einsetzen, um Fehler und stilistische Uneinheitlichkeiten im Code zu erkennen.

> [!NOTE]
> Wenn Sie mehr über Werkzeuge für die Webentwicklung erfahren möchten, lesen Sie unseren [Überblick über clientseitige Werkzeuge](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview).

### Aufteilung in Komponenten

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ aufzuteilen – wartbare, wiederverwendbare Codeeinheiten, die miteinander kommunizieren können. Der gesamte Code für eine bestimmte Komponente kann in einer Datei (oder einigen wenigen festgelegten Dateien) liegen. So wissen Sie als Entwickler genau, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer Anwendung mit reinem JavaScript müssten Sie eigene Konventionen festlegen, um dies effizient und skalierbar zu erreichen. Ohne solche Vorgaben könnte der Code für einen Teil der Benutzeroberfläche über eine ganze Datei verteilt sein – oder sogar in einer völlig anderen Datei liegen.

### Routing

Die wichtigste Eigenschaft des Webs ist, dass Nutzer von einer Seite zur nächsten navigieren können – schließlich ist es ein Netz miteinander verknüpfter Dokumente. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, die er Ihnen anzeigt. Dabei ändert sich die URL in der Adressleiste. Sie können diese neue URL speichern und später zur Seite zurückkehren oder sie mit anderen teilen, damit diese dieselbe Seite leicht finden. Ihr Browser merkt sich außerdem Ihren Navigationsverlauf und ermöglicht es Ihnen, vor- und zurückzugehen. Das wird **serverseitiges Routing** genannt.

Moderne Webanwendungen rufen in der Regel keine neuen HTML-Dateien ab, um sie darzustellen. Stattdessen laden sie eine einzelne HTML-Grundstruktur und aktualisieren fortlaufend das darin enthaltene DOM, ohne Nutzer zu neuen Webadressen zu führen. Solche Anwendungen heißen **Single-Page-Anwendungen** oder **SPAs**. Jede neue Pseudo-Webseite wird gewöhnlich als _Ansicht_ bezeichnet. Standardmäßig findet dabei kein Routing statt.

Wenn eine SPA komplex genug ist und genügend unterschiedliche Ansichten darstellt, ist es wichtig, Routing-Funktionen in die Anwendung aufzunehmen. Menschen sind daran gewöhnt, auf bestimmte Seiten einer Anwendung verlinken und im Navigationsverlauf vor- und zurückgehen zu können. Wenn diese üblichen Webfunktionen nicht funktionieren, beeinträchtigt das ihre Nutzererfahrung. Wird das Routing auf diese Weise von einer Clientanwendung übernommen, heißt es **clientseitiges Routing**.

Es ist _möglich_, mit den nativen Möglichkeiten von JavaScript und des Browsers einen Router zu erstellen. Für beliebte, aktiv weiterentwickelte Frameworks gibt es jedoch ergänzende Bibliotheken, die Routing zu einem intuitiveren Teil der Entwicklung machen.

## Was Sie beim Einsatz von Frameworks beachten sollten

Als guter Webentwickler verwenden Sie die Werkzeuge, die für die jeweilige Aufgabe am besten geeignet sind. JavaScript-Frameworks erleichtern die Entwicklung von Frontend-Anwendungen, sind aber kein Allheilmittel. In diesem Abschnitt geht es um einige Aspekte, die Sie beim Einsatz von Frameworks bedenken sollten. Vielleicht brauchen Sie gar kein Framework – achten Sie darauf, keines nur um seiner selbst willen einzusetzen.

### Vertrautheit mit dem Werkzeug

Wie reines JavaScript brauchen auch Frameworks Zeit zum Erlernen und haben ihre Eigenheiten. Bevor Sie sich für ein Framework in einem Projekt entscheiden, sollten Sie sicherstellen, dass Sie genügend Zeit haben, sich mit seinen Funktionen vertraut zu machen. Nur dann wird es Ihnen helfen, statt Sie zu behindern. Auch Ihre Teammitglieder sollten sich damit wohlfühlen.

### Überdimensionierung

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten kaum oder gar keine interaktiven Funktionen haben, brauchen Sie möglicherweise überhaupt kein Framework mit all seinem JavaScript. Allerdings sind Frameworks nicht alle gleich, und einige eignen sich besser für kleine Projekte als andere. In einem Artikel für das Smashing Magazine beschreibt Sarah Drasner, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), wenn es darum geht, kleine Bereiche einer Webseite interaktiv zu gestalten.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und mitunter insgesamt _weniger_ Code –, indem sie die Interaktionen mit dem DOM im Hintergrund übernehmen. Diese Abstraktion erleichtert Ihnen die Entwicklung, hat aber ihren Preis. Um Ihren Code in DOM-Änderungen umzusetzen, müssen Frameworks eigenen Code ausführen. Dadurch wird Ihre fertige Anwendung größer und benötigt mehr Rechenleistung.

Etwas zusätzlicher Code ist unvermeidlich. Mit einem Framework, das Tree-Shaking unterstützt – also das Entfernen von Code, der in der Anwendung während des Build-Prozesses nicht verwendet wird –, können Sie Ihre Anwendungen klein halten. Dennoch müssen Sie diesen Faktor berücksichtigen, wenn Sie die Leistung Ihrer Anwendung beurteilen, insbesondere auf Geräten mit begrenzter Netzwerkverbindung oder Speicherkapazität, etwa Mobiltelefonen.

Die Abstraktion durch Frameworks wirkt sich nicht nur auf Ihr JavaScript aus, sondern auch darauf, wie Sie mit den Grundlagen des Webs umgehen. Unabhängig davon, wie Sie für das Web entwickeln: Das Endergebnis, mit dem Ihre Nutzer letztlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie HTML und den Zweck seiner verschiedenen Tags aus den Augen verlieren. Das kann zu einem HTML-Dokument führen, dem es an Semantik und Barrierefreiheit mangelt. Tatsächlich lässt sich eine anfällige Anwendung schreiben, die vollständig von JavaScript abhängt und ohne JavaScript nicht funktioniert.

Frameworks sind nicht die Ursache dieser Probleme. Mit falschen Prioritäten kann jede Anwendung anfällig, aufgebläht und unzugänglich werden. Frameworks verstärken jedoch die Prioritäten, die wir als Entwickler setzen. Wenn es Ihnen vor allem darum geht, eine komplexe Webanwendung zu erstellen, erleichtern sie Ihnen das. Wenn Sie dagegen Leistung und Barrierefreiheit nicht sorgfältig berücksichtigen, verstärken Frameworks die Anfälligkeit, den Umfang und die mangelnde Zugänglichkeit Ihrer Anwendung. Moderne Entwicklungsprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs vielerorts auf den Kopf gestellt. Statt eines robusten Netzes von Dokumenten, bei dem die Inhalte im Vordergrund stehen, stellt das Web heute oft JavaScript an die erste und die Nutzererfahrung an die letzte Stelle.

## Barrierefreiheit in einem von Frameworks geprägten Web

Knüpfen wir an den vorigen Abschnitt an und sprechen etwas ausführlicher über Barrierefreiheit. Barrierefreie Benutzeroberflächen zu gestalten, erfordert immer Überlegung und Aufwand. Frameworks können diesen Prozess erschweren. Häufig müssen Sie fortgeschrittene Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA-[Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder die Fokusverwaltung zuzugreifen.

In manchen Fällen schaffen Framework-Anwendungen Barrieren, die es bei herkömmlichen Websites nicht gibt. Das deutlichste Beispiel dafür ist das bereits erwähnte clientseitige Routing.

Beim herkömmlichen, serverseitigen Routing hat die Navigation im Web vorhersehbare Folgen. Der Browser weiß, dass er den Fokus an den Anfang der Seite setzen muss, und assistive Technologien geben den Seitentitel bekannt. Dies geschieht jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten. Daher weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel bekannt geben sollte. Framework-Entwickler haben sehr viel Zeit und Arbeit darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet. Dennoch gelingt dies keinem Framework perfekt.

Daraus folgt: Sie sollten Barrierefreiheit von Anfang an bei _jedem_ Webprojekt berücksichtigen. Bedenken Sie aber, dass abstrahierte Codebasen mit Frameworks eher schwerwiegende Probleme mit der Barrierefreiheit aufweisen können, wenn Sie das nicht tun.

## Wie Sie ein Framework auswählen

Jedes der in diesem Modul besprochenen Frameworks verfolgt einen anderen Ansatz bei der Entwicklung von Webanwendungen. Alle werden regelmäßig verbessert oder verändert, und jedes hat Vor- und Nachteile. Welches Framework das richtige ist, hängt vom Team und vom Projekt ab. Recherchieren Sie daher selbst, welches Ihren Anforderungen entspricht. Die folgenden Fragen können Ihnen helfen, Ihre Möglichkeiten gezielter zu prüfen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und sind eine gute Dokumentation sowie weitere Unterstützung verfügbar?

Die Tabelle in diesem Abschnitt bietet einen schnellen Überblick über die aktuelle _Browserunterstützung_ der einzelnen Frameworks und über die **domänenspezifischen Sprachen**, mit denen sie verwendet werden können.

Allgemein sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen für bestimmte Bereiche der Softwareentwicklung. Im Zusammenhang mit Frameworks handelt es sich bei DSLs um Varianten von JavaScript oder HTML, die die Entwicklung mit dem jeweiligen Framework erleichtern. Wichtig ist: Keines der Frameworks _verlangt_ von Entwicklern die Verwendung einer bestimmten DSL. Fast alle wurden jedoch mit Blick auf eine bestimmte DSL entworfen. Wenn Sie die bevorzugte DSL eines Frameworks nicht verwenden, entgehen Ihnen Funktionen, die Ihre Arbeit sonst erleichtern würden.

Wenn Sie ein Framework für ein neues Projekt auswählen, sollten Sie seine Browserunterstützung und DSLs sorgfältig prüfen. Eine unpassende Browserunterstützung kann für Ihre Nutzer zum Hindernis werden; eine unpassende DSL-Unterstützung für Sie und Ihr Team.

| Framework | Browserunterstützung                         | Bevorzugte DSL | Unterstützte DSLs        | Quelle                                                                                     |
| --------- | -------------------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Moderne Browser                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Moderne Browser                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Moderne Browser (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Moderne Browser (IE9+ in Ember-Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> Die DSLs, die wir als „HTML-basiert“ beschrieben haben, haben keine offiziellen Namen. Genau genommen sind sie keine echten DSLs. Da es sich aber um nicht standardisiertes HTML handelt, halten wir es für sinnvoll, sie hervorzuheben.

### Hat das Framework eine starke Community?

Das ist vielleicht am schwierigsten zu beurteilen, weil sich die Größe einer Community nicht unmittelbar aus leicht zugänglichen Zahlen ablesen lässt. Die Anzahl der GitHub-Stars eines Projekts oder seine wöchentlichen npm-Downloads können Ihnen einen Eindruck von seiner Beliebtheit vermitteln. Manchmal ist es jedoch am besten, einige Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es kommt nicht nur auf die Größe der Community an, sondern auch darauf, wie offen und einladend sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen aus dem Web

Verlassen Sie sich dabei nicht nur auf unsere Einschätzung – im Web wird viel darüber diskutiert. Die Wikimedia Foundation hat sich vor Kurzem entschieden, Vue für ihr Frontend zu verwenden, und eine [Bitte um Stellungnahmen (RFC) zur Einführung eines Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, erläuterte ausführlich die Anforderungen des Wikimedia-Projekts und warum bestimmte Frameworks für das Team geeignet waren. Dieser RFC ist ein gutes Beispiel für die Art von Recherche, die Sie selbst durchführen sollten, wenn Sie den Einsatz eines Frontend-Frameworks planen.

Die [State-of-JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie deckt viele Themen rund um JavaScript ab, darunter Daten zur Nutzung von Frameworks und zur Einstellung von Entwicklern ihnen gegenüber. Mittlerweile liegen Daten aus mehreren Jahren vor, anhand derer Sie sich ein Bild von der Beliebtheit eines Frameworks machen können.

Das Vue-Team hat [Vue ausführlich mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Dieser Vergleich ist möglicherweise nicht ganz unvoreingenommen, worauf das Team selbst hinweist. Dennoch ist er eine wertvolle Informationsquelle.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, die die Webentwicklung beschleunigen, und wissen, dass Ihr Projekt kein umfangreiches clientseitiges JavaScript benötigt, kommen einige andere Lösungen für die Erstellung von Websites infrage:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein Generator für statische Websites

### Content-Management-Systeme

**Content-Management-Systeme** (**CMS**) sind Werkzeuge, mit denen Nutzer Inhalte für das Web erstellen können, ohne selbst direkt Code zu schreiben. Sie eignen sich gut für große Projekte, insbesondere wenn Personen Inhalte beisteuern sollen, die nur begrenzt programmieren können, oder wenn Entwickler Zeit sparen möchten. Allerdings erfordert ihre Einrichtung beträchtliche Zeit. Wenn Sie ein CMS verwenden, geben Sie außerdem zumindest einen Teil der Kontrolle über die endgültige Ausgabe Ihrer Website ab. Wenn das von Ihnen gewählte CMS beispielsweise nicht standardmäßig barrierefreie Inhalte erzeugt, lässt sich das oft nur schwer verbessern.

Zu den beliebten CMS gehören [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der der _Server_ eine Single-Page-Anwendung rendert. Das Gegenstück ist das _clientseitige Rendering_, die verbreitetste und einfachste Methode zur Erstellung einer JavaScript-Anwendung. Serverseitiges Rendering entlastet das Gerät des Nutzers, da nur eine bereits gerenderte HTML-Datei an dieses gesendet wird. Im Vergleich zu einer clientseitig gerenderten Anwendung kann die Einrichtung allerdings schwieriger sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Sehen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte hängen nicht zusammen!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community entwickelt und gepflegt, während andere „offizielle“ Lösungen der Betreuer des jeweiligen Frameworks sind.

### Generatoren für statische Websites

{{Glossary("SSG", "Generatoren für statische Websites")}} sind Programme, die alle Webseiten einer mehrseitigen Website – einschließlich des benötigten CSS und JavaScript – dynamisch erzeugen. Die fertigen Dateien können anschließend an beliebigen Orten veröffentlicht werden, beispielsweise über einen GitHub-Pages-Branch, eine Netlify-Instanz oder einen privaten Server Ihrer Wahl. Dieser Ansatz hat mehrere Vorteile, vor allem bei der Leistung (das Gerät Ihrer Nutzer muss die Seite nicht erst mit JavaScript aufbauen; sie ist bereits fertig) und der Sicherheit (statische Seiten bieten weniger Angriffsflächen). Solche Websites können JavaScript weiterhin dort verwenden, wo es benötigt wird, sind aber nicht davon _abhängig_. Wie bei jedem anderen Werkzeug braucht es Zeit, den Umgang mit Generatoren für statische Websites zu erlernen. Das kann Ihren Entwicklungsprozess zunächst bremsen.

Statische Websites können so wenige oder so viele unterschiedliche Seiten haben, wie Sie möchten. So wie Frameworks Ihnen helfen, schnell clientseitige JavaScript-Anwendungen zu schreiben, ermöglichen Generatoren für statische Websites die schnelle Erstellung von HTML-Dateien, die Sie sonst einzeln schreiben müssten. Wie Frameworks erlauben sie Entwicklern, Komponenten für wiederkehrende Teile von Webseiten zu schreiben und diese Komponenten zu einer fertigen Seite zusammenzusetzen. Im Zusammenhang mit Generatoren für statische Websites heißen diese Komponenten **Templates**. Webseiten, die mit solchen Generatoren erstellt wurden, können sogar Framework-Anwendungen enthalten: Wenn beispielsweise eine bestimmte Seite Ihrer statisch generierten Website beim Aufruf durch einen Nutzer eine React-Anwendung starten soll, ist das möglich.

Generatoren für statische Websites gibt es schon seit Langem. Sie werden laufend optimiert und weiterentwickelt. Zur Auswahl stehen unter anderem [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/). Sie bauen auf unterschiedlichen Technologie-Stacks auf und bieten jeweils eigene Funktionen. Andere Möglichkeiten wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/) verwenden statt Templates clientseitige Frameworks, erzeugen aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über Generatoren für statische Websites im Allgemeinen erfahren möchten, lesen Sie Tatiana Macs [Einsteigerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Reihe wird erklärt, was ein Generator für statische Websites ist und wie er sich zu anderen Möglichkeiten der Veröffentlichung von Webinhalten verhält.

## Zusammenfassung

Damit sind wir am Ende unserer Einführung in Frameworks angelangt. Wir haben Ihnen noch keinen Code beigebracht, Ihnen aber hoffentlich eine hilfreiche Grundlage dafür gegeben, warum Sie Frameworks überhaupt einsetzen und wie Sie eines auswählen können. Vielleicht haben Sie nun auch Lust bekommen, mehr zu lernen und selbst loszulegen!

Im nächsten Artikel gehen wir mehr ins Detail: Wir sehen uns an, welche konkreten Funktionen Frameworks üblicherweise bieten und warum sie so funktionieren, wie sie funktionieren.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
