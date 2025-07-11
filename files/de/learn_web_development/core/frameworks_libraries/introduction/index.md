---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 99eeec10f81f4d5757529681d4952cf0d9fb2d57
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unsere Betrachtung der Frameworks mit einem allgemeinen Überblick über das Thema. Dabei betrachten wir eine kurze Geschichte von JavaScript und Frameworks, warum es Frameworks gibt und was sie uns bieten, wie man beginnt, über die Auswahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen es zu clientseitigen Frameworks gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Drittanbieter-Code ist und wie clientseitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie man eines auswählt.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks eingesetzt werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Entstehung von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, fügte es gelegentliche Interaktivität und Aufregung zu einem Web hinzu, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Beliebtheit von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Tools, um die Probleme zu lösen, mit denen sie konfrontiert waren, und verpackten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu formen und führte letztendlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber hat, wie Software aufgebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind entscheidend für die Gesundheit und Langlebigkeit von Software. Die Einführung moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeiten am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt aufgrund seiner Stabilität, Community-Unterstützung und einiger cleverer Kodierungsprinzipien immer noch eine beträchtliche Popularität.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Framework für Webanwendungen, das von dem Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung des gleichen Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks die Vorlagen transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel näher betrachten werden.

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen vier, hat jedoch kürzlich einen Popularitätsschub erlebt.

Vue erweitert wie [AngularJS](https://angularjs.org/) HTML mit etwas eigenem Code. Abgesehen davon basiert es hauptsächlich auf modernem, standardmäßigem JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte Facebook React bereits intern verwendet, um viele seiner Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durchlaufen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die zur Entstehung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Um das Warum zu erkunden, müssen wir zuerst die Herausforderungen der Softwareentwicklung untersuchen.

Betrachten Sie eine häufige Art von Anwendung: einen Aufgabenlisten-Generator, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks umsetzen werden. Diese Anwendung sollte es Benutzern ermöglichen, Dinge wie das Rendern einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe durchzuführen; und sie muss dies tun, während sie die Daten, die der Anwendung zugrunde liegen, zuverlässig verfolgt und aktualisiert. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch isoliert einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können ein Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können ein Identifikationsmerkmal verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer ermöglichen muss, _all diese Dinge_ über den Browser zu tun, beginnen einige Risse sichtbar zu werden. **Das eigentliche Problem ist dieses: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche aktualisieren, um sie anzupassen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Merkmal unserer Aufgabenlisten-App ansehen: das Rendern einer Aufgabenliste.

## Die Vielseitigkeit der DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser darzustellen, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Schlüsselwertspeicher, der den `taskName` (gesteuert durch die Texteingabe) und die Liste der `tasks` enthält:

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

Wie zeigen wir eine dieser Aufgaben unseren Nutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-Element [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) innerhalb eines ungeordneten Listenelements (ein [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)). Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die Eigenschaften und Kind-Elemente zu erstellen, die es benötigt.

Der vorherige Ausschnitt verweist auf eine andere Erstellfunktion: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

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

Der interessante Punkt ist, dass wir jedes Mal, wenn wir den Zustand aktualisieren, manuell `renderTodoList` aufrufen müssen, damit unser Zustand mit dem Bildschirm synchronisiert wird. Der Code, der unsere Elemente auf der Seite rendern wird, könnte ungefähr so aussehen:

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

Wir haben jetzt fast dreißig Codezeilen, die sich _nur_ der Benutzeroberfläche widmen – _nur_, um etwas im DOM zu rendern – und an keiner Stelle fügen wir Klassen hinzu, die wir später zum Stylen unserer Listenelemente verwenden könnten!

Wenn Sie neugierig sind, haben wir unten ein vollständiges laufendes Demo. Sie können auf die Schaltfläche "Play" klicken, um den Quellcode im Playground anzuzeigen.

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
const todoFormEl = document.querySelector("#todo-form");
const todoInputEl = document.querySelector("#todo-input");
const todoListEl = document.querySelector("#todo-list");

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

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert ein Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man deren Eigenschaften ändert; wie man Elemente ineinander verschachtelt; wie man sie auf die Seite bringt. Kein dieser Codes behandelt Benutzerinteraktionen oder bearbeitet das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine völlig neuen Fähigkeiten zu JavaScript; sie geben Ihnen leichteren Zugang zu den Fähigkeiten von JavaScript, damit Sie für das heutige Web bauen können.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen sollte, und das Framework sorgt im Hintergrund dafür, dass es im DOM umgesetzt wird.

Der Ansatz, neue DOM-Elemente in wiederholter Form mit Vanilla JavaScript zu erstellen, war schwer auf einen Blick zu verstehen. Im Gegensatz dazu veranschaulicht der folgende Codeblock, wie Sie mit Vue unsere Liste von Aufgaben beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieser Ausschnitt reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-`-Attribute hier noch nicht vertraut sind, ist das in Ordnung; Sie werden später im Modul die Vue-spezifische Syntax lernen. Das Wichtige hier ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen für den Aufbau der Benutzeroberfläche schreiben; das Framework wird dies für uns auf eine optimierte, effiziente Weise handhaben. Unsere einzige Rolle hier war, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist nicht allein in dieser Hinsicht: Die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch der Einzelnen.

Es ist möglich, Dinge _ähnlich_ wie dies in Vanilla JavaScript zu tun. [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) erleichtern es, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere To-Do-Listen-Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und genauso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Andere Dinge, die Frameworks uns bieten

Werfen wir einen Blick auf einige der anderen Vorteile, die Frameworks bieten. Wie wir zuvor angedeutet haben, sind die Vorteile von Frameworks in Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt die gesamte kognitive Last der Lösung dieser Probleme selbst weg.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Gemeinschaft hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge erleichtern es, Dinge wie Testen (um sicherzustellen, dass sich Ihre Anwendung wie gewünscht verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unsere [Übersicht über clientseitige Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codeabschnitte, die miteinander kommunizieren können. Der gesamte Code, der zu einer bestimmten Komponente gehört, kann in einer Datei (oder ein paar bestimmten Dateien) untergebracht werden, sodass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihr eigenes Set von Konventionen erstellen, um dies auf effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, sich selbst überlassen, dazu neigen, dass alle Codes, die sich auf einen Teil der Benutzeroberfläche beziehen, über eine Datei verstreut – oder in einer anderen Datei – untergebracht sind.

### Routing

Das wichtigste Merkmal des Webs besteht darin, dass es den Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von miteinander verlinkten Dokumenten. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, die Ihnen angezeigt werden. Während dies geschieht, ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später zur Seite zurückkehren oder sie mit anderen teilen, damit diese die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihre Navigationshistorie und ermöglicht es Ihnen, vor- und zurückzunavigieren. Dies wird als **serverseitiges Routing** bezeichnet.

Moderne Webanwendungen rufen typischerweise keine neuen HTML-Dateien ab und rendern sie – sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (als **Single-Page-Apps** oder **SPAs** bezeichnet), ohne Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Benutzer sind es gewohnt, auf bestimmte Seiten in einer Anwendung verlinken zu können, vor- und zurück in ihrer Navigationshistorie zu reisen usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfunktionen nicht vorhanden sind. Wenn das Routing von einer Clientanwendung in dieser Weise gehandhabt wird, wird es treffend als **clientseitiges Routing** bezeichnet.

Es ist _möglich_, ein Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Bestandteil des Entwicklungsprozesses machen.

## Überlegungen bei der Nutzung von Frameworks

Ein effektiver Webentwickler zu sein, bedeutet, die am besten geeigneten Werkzeuge für die jeweilige Aufgabe zu verwenden. JavaScript-Frameworks vereinfachen die Frontend-Anwendungsentwicklung, aber sie sind keine Wunderwaffe, die alle Probleme löst. Dieser Abschnitt spricht einige der Dinge an, die Sie bei der Nutzung von Frameworks beachten sollten. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, nicht einfach ein Framework zu verwenden, nur um es zu verwenden.

### Vertrautheit mit dem Werkzeug

Genau wie Vanilla JavaScript benötigen Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genügend Zeit haben, genügend seiner Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen damit ebenfalls vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist, und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist ein Framework (und sein ganzer JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen eignen sich besser für kleine Projekte als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleinere Teile einer Webseite interaktiv zu machen.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt –, indem sie die DOM-Interaktionen für Sie, hinter den Kulissen, abwickeln. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das zu übersetzen, was Sie schreiben, in DOM-Änderungen, müssen Frameworks ihren eigenen Code ausführen, der wiederum Ihr endgültiges Stück Software größer und rechentechnisch aufwendiger macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung aller Codes, die tatsächlich nicht in der App verwendet werden, während des Build-Prozesses), wird es Ihnen ermöglichen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Auge behalten müssen, wenn Sie die Leistung Ihrer App betrachten, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur wesentlichen Natur des Webs. Egal wie Sie für das Web bauen, der Endeffekt, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie die Sicht auf HTML und den Zweck seiner verschiedenen Tags verlieren, und Sie könnten ein HTML-Dokument produzieren, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne es nicht funktionieren wird.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität ist, eine komplexe Webanwendung zu erstellen, ist das einfach zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit schützen, werden Frameworks Ihre Fragilität, Ihren Ballast und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt dass ein robustes, inhaltsorientiertes Netzwerk von Dokumenten in den Mittelpunkt gestellt wird, rückt das Web heutzutage oft JavaScript in den Vordergrund und die Benutzererfahrung in den Hintergrund.

## Zugänglichkeit in einem von Frameworks getriebenen Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Zugänglichkeit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer einigen Gedanken und Anstrengungen, und Frameworks können diesen Prozess komplizieren. Oft müssen Sie erweiterte Framework-APIs verwenden, um auf native Browser-Funktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Zugänglichkeit, die bei traditionellen Websites nicht vorhanden sind. Das größte Beispiel hierfür ist das clientseitige Routing, wie bereits erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf die Oberseite der Seite setzen und Hilfstechnologien den Titel der Seite ankündigen soll. Diese Dinge geschehen jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen soll. Framework-Autoren haben immense Zeit und Arbeit investiert, um JavaScript zu schreiben, das diese Funktionen nachbildet, und dennoch hat bisher kein Framework es perfekt geschafft.

Das Fazit ist, dass Sie die Zugänglichkeit von Anfang an bei _jedem_ Webprojekt in Betracht ziehen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter großen Zugänglichkeitsproblemen leiden, wenn Sie es nicht tun.

## Wie man sich für ein Framework entscheidet

Jedes der in diesem Modul behandelten Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder ändert sich regelmäßig und hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein Team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Recherche durchführen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu erforschen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Gemeinschaft und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine schnell erfassbare Zusammenfassung der aktuellen _Browser-Unterstützung_ jedes Frameworks sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Wichtig ist, dass keines der Frameworks _erfordert_, dass ein Entwickler eine bestimmte DSL verwendet, aber sie wurden fast alle mit einer spezifischen DSL im Kopf entworfen. Wenn Sie darauf verzichten, eine bevorzugte DSL eines Frameworks einzusetzen, bedeutet das, dass Sie auf Funktionen verzichten, die sonst Ihre Entwicklererfahrung verbessern würden.

Sie sollten die Unterstützungs-Matrix und die DSLs eines Frameworks ernsthaft in Erwägung ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Unübereinstimmende Browser-Unterstützung kann ein Hindernis für Ihre Benutzer sein; unübereinstimmende DSL-Unterstützung kann ein Hindernis für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                                      |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind nicht wirklich echte DSLs, aber sie sind nicht-standardmäßiges HTML, daher glauben wir, dass es sich lohnt, sie hervorzuheben.

### Hat das Framework eine starke Gemeinschaft?

Dies ist vielleicht die schwierigste Kenngröße zu messen, da die Größe der Gemeinschaft nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads eines Projekts überprüfen, um eine Vorstellung von seiner Beliebtheit zu bekommen, aber manchmal ist das Beste, was Sie tun können, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Gemeinschaft, sondern auch darum, wie einladend und inklusive sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen über das Web

Nehmen Sie nicht nur unser Wort in dieser Angelegenheit – es gibt Diskussionen im gesamten Web. Die Wikimedia-Stiftung entschied sich kürzlich, Vue für ihr Frontend zu verwenden und postete einen [Request for Comments (RFC) zur Framework-Übernahme](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts darzulegen und zu erläutern, warum bestimmte Frameworks gute Wahlmöglichkeiten für das Team waren. Dieser RFC dient als großartiges Beispiel für die Art von Forschung, die Sie für sich selbst durchführen sollten, wenn Sie die Verwendung eines Frontend-Frameworks planen.

Die [Umfrage "State of JavaScript"](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über die Nutzung von Frameworks und die Meinung der Entwickler zu ihnen. Derzeit sind mehrere Jahre Daten verfügbar, sodass Sie ein Gefühl für die Popularität eines Frameworks bekommen können.

Das Vue-Team hat [Vue umfassend mit anderen populären Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es mag in diesem Vergleich einige voreingenommenen Meinungen geben (die sie anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive clientseitige JavaScript-Entwicklung erfordert, könnten Sie eine Reihe anderer Lösungen zum Erstellen für das Web in Betracht ziehen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein statischer Seitengenerator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Webinhalte zu erstellen, ohne direkt Code selbst schreiben zu müssen. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Beiträge von Inhaltserstellern erfordern, die begrenzte Programmierfähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Zeit zum Einrichten, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen gewissen Grad an Kontrolle über die endgültige Ausgabe Ihrer Website abgeben. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keine zugänglichen Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Architektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies steht im Gegensatz zum _clientseitigen Rendering_, das die häufigste und einfachste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Das serverseitige Rendering ist weniger belastend für das Gerät des Clients, da Sie ihnen nur eine gerenderte HTML-Datei senden, aber es kann schwieriger einzurichten sein im Vergleich zu einer clientseitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Gemeinschaft geschrieben und gepflegt, während andere "offizielle" Lösungen sind, die vom Maintainer des Frameworks bereitgestellt werden.

### Statische Seitengeneratoren

{{Glossary("SSG", "Statische Seitengeneratoren")}} sind Programme, die dynamisch alle Webseiten einer mehrseitigen Website generieren – einschließlich sämtlicher relevanter CSS- oder JavaScript-Dateien –, sodass sie an beliebig vielen Orten veröffentlicht werden können. Das veröffentlichende Host könnte ein GitHub-Pages-Branch, ein Netlify-Instance oder ein beliebiger privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, vor allem in Bezug auf die Leistung (das Gerät Ihres Benutzers baut die Seite nicht mit JavaScript; sie ist bereits komplett) und die Sicherheit (statische Seiten haben weniger Angriffspunkte). Diese Websites können JavaScript nutzen, wo immer sie es benötigen, aber sie sind nicht _abhängig_ davon. Statische Seitengeneratoren benötigen Zeit zum Lernen, genau wie jedes andere Werkzeug, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so viele oder so wenige einzigartige Seiten haben, wie Sie möchten. Genau wie Frameworks es Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, bieten statische Seitengeneratoren einen Weg, um schnell HTML-Dateien zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen statische Seitengeneratoren Entwicklern, Komponenten zu schreiben, die übliche Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzusetzen, um eine Endseite zu erstellen. Im Kontext statischer Seitengeneratoren werden diese Komponenten als **Templates** bezeichnet. Webseiten, die von statischen Seitengeneratoren erstellt werden, können sogar Framework-Anwendungen beherbergen: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie dies tun.

Statische Seitengeneratoren gibt es schon sehr lange, und sie werden ständig optimiert und innoviert. Eine Reihe von Auswahlmöglichkeiten existiert, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden clientseitige Frameworks anstelle von Templates, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Seitengeneratoren im Allgemeinen lernen möchten, schauen Sie sich Tatiana Macs [Beginner's Guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Seitengenerator ist und wie er sich auf andere Veröffentlichungsmethoden von Webinhalten bezieht.

## Zusammenfassung

Damit sind wir am Ende unserer Einführung in Frameworks angekommen – wir haben Ihnen zwar noch keinen Code beigebracht, aber hoffentlich einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden und wie Sie eines auswählen sollten, und Sie neugierig gemacht, mehr zu lernen und damit zu arbeiten!

Unser nächster Artikel geht auf eine niedrigere Ebene und betrachtet die spezifischen Arten von Funktionen, die Frameworks tendenziell bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
