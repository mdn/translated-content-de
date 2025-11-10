---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema. Dabei betrachten wir eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, über die Auswahl eines zu erlernenden Frameworks nachzudenken, und welche Alternativen es zu clientseitigen Frameworks gibt.

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

## Das Entstehen von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, brachte es gelegentliche Interaktivität und Spannung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort zum _Lesen_, sondern auch zum _Tun_. Die Beliebtheit von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, erstellten Werkzeuge, um die Probleme zu lösen, denen sie gegenüberstanden, und fassten diese in wiederverwendbare Pakete namens **Bibliotheken** zusammen, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken trug zur Entwicklung des Webs bei und ebnete schließlich den Weg für Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber äußert, wie Software aufgebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es, dass die Software zu einer enormen Größe skaliert werden kann und dennoch wartbar bleibt; Vorhersehbarkeit und Wartbarkeit sind essenziell für die Gesundheit und Langlebigkeit der Software. Die Einführung moderner JavaScript-Frameworks hat es erheblich einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen Vier" als die folgenden.

### Ember

[Ember](https://emberjs.com/) wurde im Dezember 2011 als Fortsetzung von Arbeiten veröffentlicht, die im [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt begonnen wurden. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine beträchtliche Beliebtheit aufgrund seiner Stabilität, Unterstützung durch die Community und einigen cleveren Coding-Prinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source Web-Anwendungs-Framework, das von dem Angular-Team bei Google und einer Community von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neuimplementation des selben Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks transparent für Entwickler die Vorlagen in optimierte JavaScript-Instruktionen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel näher betrachten werden.

### Vue

Nachdem Evan You am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt gearbeitet und daraus gelernt hatte, veröffentlichte er 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen Vier, hat aber kürzlich an Beliebtheit gewonnen.

Vue erweitert, wie [AngularJS](https://angularjs.org/), HTML mit etwas eigenem Code. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt arbeitete es bereits intern mit React, um viele seiner Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es, Web-Anwendungen zu erstellen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durchlesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben bereits die Umgebung diskutiert, die die Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Die Erkundung des Warums erfordert, zunächst die Herausforderungen der Softwareentwicklung zu untersuchen.

Betrachten Sie eine häufige Art von Anwendung: Ein To-Do-Listen-Ersteller, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks implementieren werden. Diese Anwendung sollte es den Benutzern ermöglichen, Dinge wie das Rendern einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und das muss sie, während sie die der Anwendung zugrunde liegenden Daten zuverlässig verfolgt und aktualisiert. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch isoliert einfach. Wir können über die Daten iterieren, um sie darzustellen; wir können einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Identifikator verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, zeigen sich einige Schwächen. **Das eigentliche Problem ist folgendes: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Feature unserer To-Do-App ansehen: das Rendern einer Aufgabenliste.

## Die Ausführlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur passenden Zeit im Browser darzustellen, erfordert eine überraschende Menge an Code. Angenommen, unser Zustand ist ein Schlüssel-Wert-Speicher, der den `taskName` (gesteuert durch das Texteingabefeld) und die Liste der `tasks` enthält:

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

Wie zeigen wir eine dieser Aufgaben unseren Benutzern? Wir möchten jede Aufgabe als Listenelement – ein HTML-`<li>`-Element innerhalb eines ungeordneten Listenelements (ein `<ul>`) darstellen. Wie lassen wir es entstehen? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die benötigten Eigenschaften und Kinderelemente zu erstellen.

Der vorherige Ausschnitt bezieht sich auf eine weitere Erstellungsfunktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

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

Der interessante Punkt dabei ist, dass wir jedes Mal, wenn wir den Zustand aktualisieren, manuell `renderTodoList` aufrufen müssen, damit unser Zustand mit dem Bildschirm synchronisiert wird. Der Code, der unsere Elemente auf der Seite rendern wird, könnte etwa so aussehen:

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

Jetzt haben wir fast dreißig Codezeilen, die sich _nur_ mit der UI beschäftigen – _nur_ um etwas im DOM zu rendern – und wir fügen an keiner Stelle Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Wenn Sie neugierig sind, haben wir unten ein vollständiges funktionsfähiges Demo. Sie können auf die Schaltfläche „Play“ klicken, um den Quellcode im Playground anzuzeigen.

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

Die direkte Arbeit mit dem DOM erfordert, wie in diesem Beispiel gezeigt, das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander einfügt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt Benutzereingriffe oder befasst sich mit dem Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere UI zur richtigen Zeit und auf die richtige Art zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit erheblich zu erleichtern — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie bieten Ihnen leichteren Zugriff auf die Fähigkeiten von JavaScript, damit Sie für das heutige Web entwickeln können.

Lesen Sie mehr über die JavaScript-Features, die in diesem Abschnitt verwendet werden:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das bedeutet, dass Sie Code schreiben können, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework sorgt im Hintergrund für die Umsetzung im DOM.

Der Ansatz mit Vanilla-JavaScript zur Erstellung neuer DOM-Elemente in Wiederholungen war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu veranschaulicht der folgende Codeblock, wie Sie mit Vue unsere Aufgabenliste beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieser Ausschnitt reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-` Attribute hier unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Das Wichtigste, was Sie hier mitnehmen sollten, ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während dies beim Vanilla-JavaScript-Code nicht der Fall ist.

Dank Vue mussten wir unsere eigenen Funktionen zum Aufbau der Benutzeroberfläche nicht schreiben; das Framework übernimmt das für uns auf eine optimierte und effiziente Weise. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen soll. Entwickler, die Vue kennen, können schnell nachvollziehen, was beim Beitritt zu unserem Projekt vor sich geht. Vue ist dabei nicht allein: Die Verwendung eines Frameworks verbessert die Effizienz des Teams sowie des Einzelnen.

Es ist möglich, ähnliche Dinge _wie diese_ in Vanilla-JavaScript zu tun. [Template literal strings](/de/docs/Web/JavaScript/Reference/Template_literals) erleichtern es, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte für etwas so Einfaches wie unsere To-Do-Listen-Anwendung eine nützliche Idee sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Vorteile von Frameworks

Schauen wir uns einige der anderen Vorteile an, die Frameworks bieten. Wie bereits angedeutet, sind die Vorteile von Frameworks mit Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Last ab, diese Probleme selbst lösen zu müssen.

### Tooling

Da jedes der in diesem Modul behandelten Frameworks eine große, aktive Community hat, bietet das Ökosystem jedes Frameworks Tools, die die Entwicklererfahrung verbessern. Diese Tools erleichtern das Hinzufügen von Dingen wie Tests (um sicherzustellen, dass Ihre Anwendung wie erwartet funktioniert) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unseren [Leitfaden zu Clientseitigem Tooling](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codeabschnitte, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder ein paar speziellen Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer Vanilla-JavaScript-App müssten Sie Ihr eigenes Satz von Konventionen erstellen, um dies auf effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie sich selbst überlassen sind, den gesamten Code, der sich auf einen Teil der Benutzeroberfläche bezieht, über eine Datei verstreut oder in einer anderen Datei haben.

### Routing

Das wichtigste Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von miteinander verknüpften Dokumenten. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, um sie Ihnen anzuzeigen. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und die Seite später erneut besuchen oder sie mit anderen teilen, damit sie dieselbe Seite leicht finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht es Ihnen, vorwärts und rückwärts zu navigieren. Dies nennt man **serverseitiges Routing**.

Moderne Webanwendungen rufen und rendern typischerweise keine neuen HTML-Dateien – sie laden ein einzelnes HTML-Shell und aktualisieren kontinuierlich das DOM darin (bekannt als **Single Page Apps** oder **SPAs**), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genug einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Die Menschen sind es gewohnt, bestimmte Seiten in einer Anwendung zu verlinken, vor und zurück in ihrem Navigationsverlauf zu reisen usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfeatures nicht funktionieren. Wenn das Routing von einer Client-Anwendung auf diese Weise gehandhabt wird, spricht man treffend von **clientseitigem Routing**.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben begleitende Bibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die beim Verwenden von Frameworks zu berücksichtigen sind

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Tools für den Job zu verwenden. JavaScript-Frameworks machen die Frontend-Anwendungsentwicklung einfach, aber sie sind keine Wunderwaffe, die alle Probleme löst. In diesem Abschnitt werden einige der Dinge besprochen, die Sie beim Verwenden von Frameworks berücksichtigen sollten. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — seien Sie sich bewusst, dass Sie am Ende kein Framework nur um seiner selbst willen verwenden.

### Vertrautheit mit dem Tool

Genau wie bei Vanilla-JavaScript benötigen auch Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie Zeit haben, genug seiner Funktionen zu lernen, damit es für Sie nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht erforderlich. Dennoch sind Frameworks nicht monolithisch, und einige von ihnen sind für kleine Projekte besser geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), als ein Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebase und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie hinter den Kulissen erledigen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, ist aber nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihre endgültige Software größer und rechnerisch anspruchsvoller macht.

Ein gewisser zusätzlicher Code ist unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung von nicht tatsächlich in der App während des Build-Prozesses verwendeten Code) wird es Ihnen ermöglichen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Hinblick auf die Leistung Ihrer App berücksichtigen müssen, insbesondere auf Geräten mit eingeschränkter Netzwerk-/Speicherkapazität, wie Mobiltelefone.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur Natur des Webs. Egal, wie Sie für das Web entwickeln, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie den Überblick über HTML und den Zweck seiner verschiedenen Tags verlieren und ein HTML-Dokument erstellen, das nicht semantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig auf JavaScript angewiesen ist und ohne diese nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, ist das einfach zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit bewahren, werden Frameworks Ihre Fragilität, Ihre Aufblähung und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt eines robusten, inhaltsorientierten Netzwerks von Dokumenten setzt das Web jetzt oft JavaScript an die erste Stelle und die Benutzererfahrung an die letzte.

## Barrierefreiheit in einem von Frameworks getriebenem Web

Bauen wir auf dem auf, was wir im vorherigen Abschnitt gesagt haben, und sprechen wir etwas mehr über Barrierefreiheit. Benutzeroberflächen zugänglich zu machen, erfordert immer nachdenkliche Überlegung und Anstrengung, und Frameworks können diesen Prozess komplizierter machen. Sie müssen oft fortschrittliche Framework-APIs verwenden, um auf native Browser-Features wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokus-Management zuzugreifen.

In manchen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die für traditionelle Websites nicht existieren. Das größte Beispiel hierfür ist das clientseitige Routing, wie bereits erwähnt.

Bei traditionellem (serverseitigem) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus an den Anfang der Seite setzen sollte, und Hilfstechnologien kündigen den Titel der Seite an. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen rekonstruiert, und dennoch hat kein Framework dies perfekt geschafft.

Das bedeutet, dass Sie Barrierefreiheit von Anfang an bei _jedem_ Webprojekt berücksichtigen sollten, aber beachten Sie, dass abstrakte Codebasen, die Frameworks verwenden, eher unter großen Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks nimmt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert sich regelmäßig oder ändert sich, und jedes hat seine Vor- und Nachteile. Die Auswahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Forschung betreiben, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, haben wir einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu erforschen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_, die von jedem Framework angeboten wird, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Großen und Ganzen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit dem Framework erleichtern. Entscheidend ist, dass keines der Frameworks _verlangt_, dass ein Entwickler eine bestimmte DSL verwendet, aber sie wurden fast alle mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, die bevorzugte DSL eines Frameworks nicht zu verwenden, bedeutet dies, dass Ihnen Funktionen entgehen, die andernfalls Ihre Entwicklererfahrung verbessern würden.

Sie sollten ernsthaft die Support-Matrix und DSLs eines Frameworks in Erwägung ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Nicht übereinstimmende Browserunterstützung kann eine Barriere für Ihre Benutzer sein; nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitation                                                                                   |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als „HTML-basiert“ beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind nicht-standardmäßiges HTML, daher glauben wir, dass sie es wert sind, hervorgehoben zu werden.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Kennzahl zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne eines Projekts oder die wöchentlichen npm-Downloads überprüfen, um eine Vorstellung von seiner Beliebtheit zu bekommen, aber manchmal ist es am besten, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbaren Dokumentationen sind.

### Meinungen im Web

Verlassen Sie sich nicht nur auf unser Wort zu diesem Thema — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation hat sich kürzlich entschieden, Vue für ihr Frontend zu verwenden, und einen [Request for Comments (RFC) zur Übernahme von Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts zu skizzieren und warum bestimmte Frameworks gute Entscheidungen für das Team waren. Diese RFC dient als großartiges Beispiel für die Art von Recherche, die Sie selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele JavaScript-bezogene Themen, einschließlich Daten über die Verwendung von Frameworks und die Einstellung von Entwicklern dazu. Derzeit sind mehrere Jahre Daten verfügbar, die es Ihnen ermöglichen, ein Gefühl für die Beliebtheit eines Frameworks zu bekommen.

Das Vue-Team hat [Vue umfassend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es kann etwas Voreingenommenheit in diesem Vergleich geben (die sie notieren), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen und wissen, dass Ihr Projekt nicht intensive clientseitige JavaScript-Funktionalität erfordert, könnten Sie auf eine Handvoll anderer Lösungen zum Erstellen des Webs zurückgreifen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein statischer Site-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind Tools, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne direkt selbst Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Inhaltsautoren erfordern, die nur begrenzte Programmierkenntnisse haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine beträchtliche Menge an Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest eine gewisse Kontrolle über das endgültige Ausgabe Ihres Website aufgeben. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keine barrierefreien Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, das der häufigste und direkteste Weg ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering ist für das Gerät des Kunden einfacher, da nur eine gerenderte HTML-Datei an ihn gesendet wird, aber es kann im Vergleich zu einer clientseitig gerenderten Anwendung schwierig einzurichten sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere „offizielle“ Lösungen sind, die vom Maintainer des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Static site generators")}} sind Programme, die dynamisch alle Webseiten einer multipage-Website generieren – einschließlich aller relevanten CSS- oder JavaScript – sodass sie an beliebig vielen Orten veröffentlicht werden können. Das veröffentlichende Host könnte ein GitHub Pages-Zweig, eine Netlify-Instanz oder ein privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, hauptsächlich in Bezug auf Leistung (das Gerät Ihres Benutzers baut die Seite nicht mit JavaScript auf; sie ist bereits vollständig) und Sicherheit (statische Seiten haben weniger Angriffsflächen). Diese Seiten können JavaScript überall dort verwenden, wo es notwendig ist, aber sie sind nicht _abhängig_ davon. Statische Site-Generatoren benötigen Zeit zum Lernen, genau wie jedes andere Werkzeug, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so wenig oder so viele einzigartige Seiten haben, wie Sie möchten. So wie Frameworks Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, erlauben es statische Site-Generatoren Ihnen, auf schnelle Weise HTML-Dateien zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen es die statischen Site-Generatoren den Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzusetzen, um eine endgültige Seite zu erstellen. Im Kontext statischer Site-Generatoren werden diese Komponenten als **Vorlagen** bezeichnet. Websiten, die von statischen Site-Generatoren erstellt wurden, können sogar Heimat von Framework-Anwendungen sein: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Site-Generatoren gibt es schon seit langer Zeit, und sie werden ständig optimiert und innoviert. Eine Reihe von Auswahlmöglichkeiten existiert, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden clientseitige Frameworks anstelle von Vorlagen, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen erfahren möchten, schauen Sie sich Tatiana Macs [Anleitung für Anfänger zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit sind wir am Ende unserer Einführung in Frameworks angelangt – wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund dafür gegeben, warum Sie in erster Linie Frameworks verwenden würden und wie man eines auswählt, und Sie dazu motiviert, mehr zu lernen und sich darin zu vertiefen!

Unser nächster Artikel geht auf eine niedrigere Ebene ein und betrachtet die spezifischen Arten von Funktionen, die Frameworks tendenziell bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
