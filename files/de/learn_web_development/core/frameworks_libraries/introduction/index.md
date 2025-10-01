---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über diesen Bereich, indem wir uns eine kurze Geschichte von JavaScript und Frameworks ansehen, warum Frameworks existieren und was sie uns bieten, wie Sie mit dem Gedanken beginnen, ein Framework zum Lernen auszuwählen, und welche Alternativen es zu clientseitigen Frameworks gibt.

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
      <td>
        <ul>
          <li>Was Drittanbieter-Code ist und wie clientseitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie man eines auswählt.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks verwendet werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Das Aufkommen von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, fügte es gelegentliche Interaktivität und Aufregung zu einem Web hinzu, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern auch, um _Dinge zu tun_. Die Beliebtheit von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Tools, um die Probleme zu lösen, mit denen sie konfrontiert waren, und packten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, damit sie ihre Lösungen mit anderen teilen konnten. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die eine Meinung darüber hat, wie Software erstellt wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software unerlässlich. Die Einführung moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich jeden Tag nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks da draußen, aber derzeit werden die "großen vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortführung der Arbeit, die im [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt begonnen wurde, veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine gewisse Beliebtheit aufgrund seiner Stabilität, der Unterstützung durch die Community und einiger cleverer Programmierprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von dem Angular-Team bei Google und einer Community aus Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung des Teams, das [AngularJS](https://angularjs.org/) gebaut hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Templates verwendet. Zur Übersetzungszeit übersetzt der Compiler des Frameworks die Templates transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

### Vue

Nach der Arbeit am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt und deren Analyse veröffentlichte Evan You 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, hat aber kürzlich einen Popularitätsanstieg erfahren.

Vue erweitert wie [AngularJS](https://angularjs.org/) HTML mit einigen eigenen Codes. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt nutzte Facebook React bereits intern zur Lösung vieler Probleme. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen Entwicklern die Erstellung mobiler Anwendungen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen ihnen die Erstellung von Webanwendungen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Wenn Sie dieses Modul lesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung, die die Erstellung von Frameworks inspirierte, diskutiert, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Die Erforschung des "Warum" erfordert zunächst die Betrachtung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine häufige Anwendungsart: Ein Aufgabenlisten-Ersteller, den wir in zukünftigen Kapiteln unter Verwendung verschiedener Frameworks implementieren werden. Diese Anwendung sollte Benutzern die Möglichkeit geben, Dinge wie das Rendern einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies tun, während die Daten, die der Anwendung zugrunde liegen, zuverlässig verfolgt und aktualisiert werden. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch einfach in Isolation. Wir können über die Daten iterieren, um sie zu rendern; wir können zu einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer die Möglichkeit geben muss, _alle_ diese Dinge durch den Browser zu tun, beginnen einige Risse zu erscheinen. **Das eigentliche Problem ist dies: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche aktualisieren, um übereinzustimmen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur _eine_ Funktion unserer Aufgabenlisten-App betrachten: das Rendern einer Liste von Aufgaben.

## Die Verbosität von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser zu rendern, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Key-Value-Speicher, der den `taskName` (kontrolliert vom Texteingabefeld) und die Liste der `tasks` enthält:

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

Wie zeigen wir eine dieser Aufgaben unseren Nutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-[`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Element innerhalb eines ungeordneten Listenelements (eines [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)). Wie machen wir das? Das könnte ungefähr so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die Eigenschaften und Kindelemente zu erstellen, die es benötigt.

Das vorherige Snippet verweist auf eine weitere Build-Funktion: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

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

Der interessante Teil, den Sie beachten sollten, ist, dass wir jedes Mal, wenn wir den Zustand aktualisieren, `renderTodoList` manuell aufrufen müssen, damit unser Zustand mit dem Bildschirm synchronisiert wird. Der Code, der unsere Elemente auf der Seite rendern wird, könnte etwa so aussehen:

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

Wir haben nun fast dreißig Codezeilen, die _nur_ der Benutzeroberfläche gewidmet sind – _nur_, um etwas im DOM zu rendern – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Wenn Sie neugierig sind, haben wir unten eine vollständige, laufende Demo. Sie können auf die Schaltfläche "Play" klicken, um den Quellcode im Playground anzusehen.

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
    "Segoe UI Emoji", "Segoe UI Symbol", Roboto, Helvetica, Arial, sans-serif;
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

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verstehen vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander setzt; wie man sie auf die Seite bringt. Keiner dieses Codes behandelt tatsächlich Benutzerinteraktionen oder befasst sich mit dem Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit viel einfacher zu machen – sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Kräfte zu JavaScript; sie geben Ihnen leichteren Zugang zu den Kräften von JavaScript, damit Sie für das Web von heute entwickeln können.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen mehr _deklarativ_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework setzt es im Hintergrund im DOM um.

Der Vanilla-JavaScript-Ansatz, um neue DOM-Elemente in Wiederholung zu erstellen, war auf den ersten Blick schwierig zu verstehen. Im Gegensatz dazu illustriert der folgende Codeblock, wie Sie möglicherweise Vue verwenden könnten, um unsere Aufgabenliste zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war es. Dieses Snippet reduziert fast dreißig Codezeilen auf sechs Zeilen. Wenn die geschweiften Klammern und `v-`-Attribute hier Ihnen unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Was Sie hier mitnehmen sollten, ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben; das Framework übernimmt dies für uns auf eine optimierte, effiziente Weise. Unsere einzige Rolle hier war, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was passiert, wenn sie unserem Projekt beitreten. Vue ist darin nicht allein: Die Verwendung eines Frameworks verbessert sowohl die Effizienz des Teams als auch des Einzelnen.

Es ist möglich, ähnliche Dinge in Vanilla JavaScript zu tun. [Template-Literal-Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Zeichenfolgen zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlistenanwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Dinge, die Frameworks uns geben

Lassen Sie uns einen Blick auf einige der anderen Vorteile werfen, die Frameworks bieten. Wie wir bereits angedeutet haben, sind die Vorteile von Frameworks in Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt die gesamte kognitive Belastung weg, diese Probleme selbst lösen zu müssen.

### Tooling

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das Ökosystem jedes Frameworks Tools, die die Entwicklererfahrung verbessern. Diese Tools erleichtern es, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung sich so verhält, wie sie sollte) oder Linting hinzuzufügen (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unseren [Überblick über clientseitige Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder einem Paar spezifischer Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer Vanilla-JavaScript-Anwendung müssten Sie Ihr eigenes Satz von Konventionen erstellen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie ihren eigenen Geräten überlassen werden, am Ende den gesamten Code, der sich auf einen Teil der Benutzeroberfläche bezieht, über eine Datei verteilt haben – oder in einer ganz anderen Datei.

### Routing

Das wesentlichste Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von verknüpften Dokumenten. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, die Ihnen angezeigt werden. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkommen oder sie mit anderen teilen, damit sie die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihre Navigation und ermöglicht es Ihnen, vor- und zurückzuspringen. Dies wird als **serverseitiges Routing** bezeichnet.

Moderne Webanwendungen rufen und rendern normalerweise keine neuen HTML-Dateien mehr – sie laden eine einzige HTML-Hülle und aktualisieren kontinuierlich das DOM darin (genannt **Single-Page-Apps** oder **SPAs**), ohne Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genug einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Die Menschen sind daran gewöhnt, spezifische Seiten in einer Anwendung verlinken zu können, in der Navigation vorwärts und rückwärts zu reisen usw., und ihre Erfahrung leidet, wenn diese Standard-Web-Funktionen gebrochen sind. Wenn Routing von einer Client-Anwendung auf diese Weise übernommen wird, wird es treffend als **clientseitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben begleitende Bibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Zu beachtende Dinge beim Verwenden von Frameworks

Ein effektiver Webentwickler zu sein, bedeutet, die geeignetsten Tools für den jeweiligen Job zu verwenden. JavaScript-Frameworks erleichtern die Front-End-Anwendungsentwicklung, aber sie sind kein Allheilmittel, das alle Probleme lösen wird. Dieser Abschnitt spricht einige der Dinge an, die Sie beachten sollten, wenn Sie Frameworks verwenden. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, dass Sie kein Framework nur um seiner selbst willen verwenden.

### Vertrautheit mit dem Tool

Genau wie Vanilla-JavaScript benötigen Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genügend Zeit haben, um genug von seinen Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass auch Ihre Teamkollegen sich damit wohlfühlen.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit nur wenigen Seiten ist und diese Seiten nur wenig oder gar keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug zum Interaktivmachen kleiner Teile einer Webseite.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativer zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie im Hintergrund erledigen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen die Frameworks ihren eigenen Code ausführen, was wiederum Ihr endgültiges Softwarestück größer und rechnerisch aufwändiger macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung von nicht im App verwendeten Codes während des Build-Prozesses), lässt Sie Ihre Anwendungen klein halten, aber dies ist immer noch ein Faktor, den Sie im Auge behalten müssen, wenn Sie über die Leistung Ihrer App nachdenken, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur wahren Natur des Webs. Unabhängig davon, wie Sie für das Web bauen, ist das Endergebnis, die Schicht, mit der Ihre Benutzer letztlich interagieren, HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie den Überblick über HTML und den Zweck seiner verschiedenen Tags verlieren, und es kann passieren, dass Sie ein HTML-Dokument erstellen, das nicht semantisch und nicht zugänglich ist. Tatsächlich ist es möglich, eine anfällige Anwendung zu schreiben, die vollständig von JavaScript abhängig ist und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Web-App zu erstellen, ist das einfach zu tun. Aber wenn Ihre Prioritäten nicht sorgfältig Leistung und Zugänglichkeit schützen, werden Frameworks Ihre Fragilität, Ihr Aufblähen und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben in vielen Bereichen die Struktur des Webs umgekehrt. Anstelle eines robusten, inhaltsorientierten Netzwerks von Dokumenten stellt das Web nun oft JavaScript in den Vordergrund und die Benutzererfahrung an die letzte Stelle.

## Barrierefreiheit in einem von Frameworks gesteuerten Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Barrierefreiheit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer etwas Nachdenken und Aufwand, und Frameworks können diesen Prozess komplizieren. Sie müssen häufig fortgeschrittene Framework-APIs verwenden, um native Browser-Funktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusmanagement zu nutzen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist das clientseitige Routing, wie bereits erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus an den Anfang der Seite setzen soll, und unterstützende Technologien kündigen den Titel der Seite an. Dies geschieht jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, daher weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Arbeit in die Entwicklung von JavaScript investiert, das diese Funktionen nachahmt, und trotzdem hat kein Framework dies perfekt getan.

Der Vorteil ist, dass Sie Barrierefreiheit von Anfang an in _jedes_ Webprojekt einbeziehen sollten, aber beachten Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie das nicht tun.

## Wie wählt man ein Framework aus

Jedes der in diesem Modul besprochenen Frameworks geht auf unterschiedliche Weise an die Webanwendungsentwicklung heran. Jedes wird regelmäßig verbessert oder geändert, und jedes hat seine Vor- und Nachteile. Das richtige Framework auszuwählen, ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Recherche machen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie sich stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung)?

Die Tabelle in diesem Abschnitt bietet eine überblickhafte Zusammenfassung der aktuellen _Browser-Kompatibilität_ jedes Frameworks sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in spezifischen Bereichen der Softwareentwicklung relevant sind. In der Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Entscheidend ist, dass keines der Frameworks _verlangt_, dass ein Entwickler eine spezifische DSL verwendet, aber fast alle wurden mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, die bevorzugte DSL eines Frameworks nicht zu verwenden, werden Ihnen Funktionen fehlen, die sonst Ihre Entwicklererfahrung verbessern würden.

Sie sollten die Unterstützungs-Matrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Auswahl für ein neues Projekt treffen. Mismatched-Browser-Unterstützung kann eine Barriere für Ihre Benutzer sein; mismatched DSL-Unterstützung kann eine Barriere für
