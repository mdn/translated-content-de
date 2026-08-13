---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, werfen einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, darüber nachzudenken, welches Framework man lernen sollte und welche Alternativen es zu clientseitigen Frameworks gibt.

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
          <li>Wann Frameworks eingesetzt werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Das Entstehen von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, fügte es einer bis dahin aus statischen Dokumenten bestehenden Web-Welt gelegentliche Interaktivität und Spannung hinzu. Das Web wurde nicht nur ein Ort, um Dinge zu _lesen_, sondern um Dinge _zu tun_. Die Popularität von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, denen sie begegneten, und packten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, damit sie ihre Lösungen mit anderen teilen konnten. Dieses geteilte Ökosystem von Bibliotheken half, das Wachstum des Webs zu formen, und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Vorstellungen darüber bietet, wie Software aufgebaut wird. Diese Vorstellungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, zu einer enormen Größe zu skalieren und dennoch wartbar zu sein; Vorhersehbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software unerlässlich. Die Einführung moderner JavaScript-Frameworks hat es erheblich erleichtert, hochdynamische, interaktive Anwendungen zu bauen.

JavaScript-Frameworks treiben viel der beeindruckenden Software im modernen Web an – darunter viele der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen Vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine beträchtliche Beliebtheit aufgrund seiner Stabilität, der Unterstützung der Community und einiger cleverer Programmierprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungsframework, das von dem Angular-Team bei Google und von einer Community von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung des gleichen Teams, das [AngularJS](https://angularjs.org/) gebaut hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks die Vorlagen transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas detaillierter betrachten werden.

### Vue

Nach der Arbeit am und dem Lernen vom ursprünglichen [AngularJS](https://angularjs.org/)-Projekt veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen Vier, hat jedoch in letzter Zeit einen Anstieg der Popularität erfahren.

Vue erweitert, wie Angular, HTML um eigenen Code. Abgesehen davon verlässt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es React bereits intern zur Lösung vieler seiner Probleme verwendet. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen, usw.

Da React und ReactDOM oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durcharbeiten, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit einem HTML-ähnlichen Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Erstellung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Das Erkunden des "Warum" erfordert zuerst das Untersuchen der Herausforderungen in der Softwareentwicklung.

Betrachten Sie eine gängige Art von Anwendung: Einen To-Do-Listen-Ersteller, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks umsetzen werden. Diese Anwendung sollte es den Nutzern ermöglichen, Dinge wie das Anzeigen einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies tun, während sie die zugrunde liegenden Daten der Anwendung zuverlässig verfolgt und aktualisiert. In der Softwareentwicklung sind diese zugrunde liegenden Daten als Zustand bekannt.

Jedes unserer Ziele ist theoretisch isoliert einfach. Wir können über die Daten iterieren, um sie darzustellen; wir können zu einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung es dem Benutzer ermöglichen muss, _all diese Dinge_ durch den Browser zu tun, beginnen ein paar Risse sichtbar zu werden. **Das eigentliche Problem ist dieses: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche aktualisieren, um sie in Übereinstimmung zu bringen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur auf _eine_ Funktion unserer To-Do-List-App schauen: Das Rendern einer Liste von Aufgaben.

## Die Geschwätzigkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur passenden Zeit im Browser darzustellen, erfordert eine überraschend große Menge an Code. Nehmen wir an, unser Zustand ist ein Key-Value-Speicher, der den `taskName` (gesteuert durch das Texteingabefeld) und die Liste der `tasks` enthält:

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

Wie zeigen wir eine dieser Aufgaben unseren Nutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML [`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Element innerhalb eines ungeordneten Listenelements (einer [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)). Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die erforderlichen Eigenschaften und Kind-Elemente zu erstellen.

Das vorherige Snippet verweist auf eine weitere Build-Funktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

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

Der interessante Teil ist, dass wir jedes Mal, wenn wir den Zustand aktualisieren, manuell `renderTodoList` aufrufen müssen, damit unser Zustand auf dem Bildschirm synchronisiert wird. Der Code, der unsere Elemente auf der Seite darstellt, könnte so aussehen:

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

Wir haben jetzt fast dreißig Zeilen Code, die sich _nur_ auf die Benutzeroberfläche beziehen – _nur_, um etwas im DOM darzustellen – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Falls Sie neugierig sind, haben wir unten ein vollständig funktionierendes Demo. Sie können auf die Schaltfläche "Play" klicken, um den Quellcode im Playground anzuzeigen.

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

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verständnis vieler Dinge darüber, wie das DOM funktioniert: Wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander setzt; wie man sie auf die Seite bringt. Keiner dieser Code-Teile befasst sich tatsächlich mit Benutzerinteraktionen oder dem Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen JavaScript keine brandneuen Fähigkeiten, sondern geben Ihnen leichteren Zugang zu den Fähigkeiten von JavaScript, sodass Sie für das heutige Web bauen können.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, UIs zu bauen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das bedeutet, dass Sie Code schreiben können, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework sorgt im Hintergrund dafür, dass es im DOM geschieht.

Die reine JavaScript-Ansatzweise, neue DOM-Elemente wiederholend zu bauen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie man mit Vue unsere Liste von Aufgaben beschreiben könnte:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier Ihnen unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Die Hauptsache, die Sie hier mitnehmen sollten, ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er repräsentiert, während der reine JavaScript-Code dies nicht tut.

Dank Vue mussten wir unsere eigenen Funktionen zum Erstellen der Benutzeroberfläche nicht schreiben; das Framework erledigt das für uns auf eine optimierte, effiziente Weise. Unsere einzige Rolle war es hier, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell erkennen, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist nicht allein darin: Die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch des Einzelnen.

Es ist möglich, Dinge _ähnlich_ wie dies in reinem JavaScript zu tun. [Template-Literal-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die repräsentieren, wie das finale Element aussehen würde. Das könnte eine nützliche Idee bei etwas so Einfachem wie unserer To-Do-Listen-Anwendung sein, aber für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche darstellen können, ist das nicht wartbar.

## Andere Dinge, die Frameworks uns bieten

Lassen Sie uns einige der anderen Vorteile betrachten, die Frameworks bieten. Wie wir bereits angedeutet haben, sind die Vorteile von Frameworks im reinen JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt einem die kognitive Belastung, diese Probleme selbst lösen zu müssen.

### Werkzeugunterstützung

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge erleichtern das Hinzufügen von Dingen wie Testing (um sicherzustellen, dass Ihre Anwendung sich wie erwartet verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details zu Web-Tooling-Konzepten erfahren möchten, schauen Sie sich unseren [Überblick über clientseitige Werkzeuge](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Aufteilung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codestücke, die miteinander kommunizieren können. Der gesamte mit einer bestimmten Komponente verbundene Code kann in einer Datei (oder ein paar bestimmten Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer reinen JavaScript-Anwendung müssten Sie Ihre eigenen Konventionen schaffen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie sich selbst überlassen sind, dazu neigen, den gesamten Code, der sich auf einen Teil der Benutzeroberfläche bezieht, über eine Datei verteilt oder in einer anderen Datei zu haben.

### Routing

Die wesentlichste Eigenschaft des Webs ist, dass es Benutzern erlaubt, von einer Seite zu einer anderen zu navigieren – es handelt sich schließlich um ein Netzwerk miteinander verknüpfter Dokumente. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und holt neue Inhalte, die Ihnen angezeigt werden sollen. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später wieder auf die Seite zurückkehren oder sie an andere weitergeben, damit auch diese die gleiche Seite leicht finden können. Ihr Browser erinnert sich an Ihre Navigation und ermöglicht es Ihnen, vorwärts und rückwärts zu navigieren. Dies nennt man **serverseitiges Routing**.

Moderne Webanwendungen laden typischerweise keine neuen HTML-Dateien – sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bekannt als **Single-Page-Apps**, oder **SPAs**), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn ein SPA komplex genug ist und genug einzigartige Ansichten darstellt, ist es wichtig, Routing-Funktionen in Ihre Anwendung zu integrieren. Menschen sind daran gewöhnt, auf spezifische Seiten einer Anwendung verlinken zu können, vorwärts und rückwärts in ihrer Navigation zu reisen usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen nicht funktionieren. Wenn das Routing von einer Client-Anwendung auf diese Weise durchgeführt wird, wird es zutreffend als **client-seitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein, bedeutet, die am besten geeigneten Werkzeuge für die jeweilige Aufgabe zu verwenden. JavaScript-Frameworks erleichtern die Frontend-Anwendungsentwicklung, aber sie sind keine Allheilmittel, die alle Probleme lösen. Dieser Abschnitt spricht über einige der Dinge, die Sie beachten sollten, wenn Sie Frameworks verwenden. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, nicht ein Framework nur um seiner selbst willen zu verwenden.

### Vertrautheit mit dem Werkzeug

Genau wie pures JavaScript erfordern Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, genügend seiner Funktionen zu lernen, damit es für Sie nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teammitglieder damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist, und diese Seiten wenig bis keine interaktiven Fähigkeiten haben, ist eventuell ein Framework (und all sein JavaScript) überhaupt nicht nötig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für das Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), um kleine Teile einer Webseite interaktiv zu gestalten.

### Größerer Codeumfang und Abstraktion

Frameworks ermöglichen es Ihnen, mehr deklarativen Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie im Hintergrund bearbeiten. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihr finales Stück Software größer und rechnerisch teurer in der Ausführung macht.

Ein gewisser zusätzlicher Code ist unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung jedes Codes, der während des Build-Prozesses tatsächlich nicht in der App verwendet wird), wird Ihnen helfen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie berücksichtigen müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf Geräten mit beschränkter Netzwerk- oder Speicherkapazität, wie Mobiltelefonen.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Webs. Egal, wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Nutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, kann es sein, dass Sie den Überblick über HTML und den Zweck seiner verschiedenen Tags verlieren und ein HTML-Dokument produzieren, das nicht semantisch und unzugänglich ist. Tatsächlich ist es möglich, eine zerbrechliche Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung zerbrechlich, aufgebläht und unzugänglich sein. Frameworks vergrößern jedoch unsere Prioritäten als Entwickler. Wenn Ihr Ziel darin besteht, eine komplexe Web-App zu erstellen, ist es leicht, das zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig auf Leistung und Zugänglichkeit achten, verstärken Frameworks Ihre Zerbrechlichkeit, Ihr Aufblähen und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs vielerorts umgekehrt. Statt eines robusten, inhaltsorientierten Netzwerks von Dokumenten stellt das Web jetzt oft JavaScript zuerst und die Benutzererfahrung zuletzt.

## Zugänglichkeit in einer frameworkgetriebenen Weblandschaft

Bauen wir auf dem auf, was wir im vorherigen Abschnitt gesagt haben, und sprechen wir ein bisschen mehr über die Zugänglichkeit. Benutzeroberflächen zugänglich zu gestalten, erfordert immer einige Überlegungen und Anstrengungen, und Frameworks können diesen Prozess verkomplizieren. Sie müssen oft erweiterte Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Zugangsbarrieren, die für traditionelle Websites nicht existieren. Das größte Beispiel hierfür ist das clientseitige Routing, wie bereits erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den oberen Teil der Seite setzen soll und unterstützende Technologien verkünden den Titel der Seite. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er automatisch den Fokus anpassen oder einen neuen Seitentitel verkünden sollte. Framework-Autoren haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und doch hat es kein Framework perfekt geschafft.

Das Fazit ist, dass Sie die Zugänglichkeit von Anfang an in jedem Webprojekt beachten sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Zugänglichkeitsproblemen leiden, wenn Sie es nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder ändert sich regelmäßig, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigenen Recherchen durchführen, um herauszufinden, was Ihre Bedürfnisse erfüllt. Das gesagt, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützungen) zur Verfügung?

Die Tabelle in diesem Abschnitt bietet eine leicht überblickbare Zusammenfassung der aktuellen _Browserunterstützung_ für jedes Framework sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Großen und Ganzen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die es einfacher machen, mit diesem Framework zu entwickeln. Entscheidend ist, dass keines der Frameworks _verlangt_, dass ein Entwickler eine spezifische DSL verwendet, aber sie wurden fast alle mit einer spezifischen DSL im Hinterkopf entworfen. Die Entscheidung, die bevorzugte DSL eines Frameworks nicht zu verwenden, bedeutet, dass Ihnen Funktionen, die ansonsten Ihre Entwicklererfahrung verbessern würden, entgehen.

Sie sollten die Support-Matrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Wahl für jedes neue Projekt treffen. Unpassende Browser-Unterstützung kann ein Hindernis für Ihre Benutzer sein; unpassende DSL-Unterstützung kann ein Hindernis für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                             |
| --------- | ----------------------------------- | -------------- | ------------------------ | --------------------------------------------------------------------------------- |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Doku](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Doku](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Doku](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Doku](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind nicht-standardmäßiges HTML, daher halten wir es für wichtig, sie hervorzuheben.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne eines Projekts oder der wöchentlichen npm-Downloads überprüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, was man tun kann, in ein paar Foren zu suchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die vorhandene Dokumentation ist.

### Meinungen im Web

Nehmen Sie nicht nur unser Wort für diese Angelegenheit — es gibt Diskussionen im ganzen Web. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Frontend zu verwenden und einen [Request for Comments (RFC) zur Framework-Übernahme gepostet](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, hat sich Zeit genommen, um die Bedürfnisse des Wikimedia-Projekts zu umreißen und warum bestimmte Frameworks gute Wahlen für das Team waren. Dieses RFC dient als großartiges Beispiel für die Art von Forschung, die Sie selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über die Verwendung von Frameworks und die Einstellung von Entwicklern zu ihnen. Derzeit sind mehrere Jahre Daten verfügbar, die Ihnen einen Eindruck von der Beliebtheit eines Frameworks vermitteln können.

Das Vue-Team hat [ausführlich Vue mit anderen populären Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte einige Voreingenommenheit in diesem Vergleich geben (was sie anmerken), aber es ist trotzdem eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive clientseitige JavaScript-Nutzung erfordert, könnten Sie auf eine von mehreren anderen Lösungen zum Bauen des Web zugreifen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein statischer Site-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (CMSes) sind Werkzeuge, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Beiträge von Inhaltsverfassern erfordern, die nur begrenzte Programmierkenntnisse haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Menge an Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest ein gewisses Maß an Kontrolle über das endgültige Ergebnis Ihrer Website aufgeben. Zum Beispiel: Wenn Ihr gewähltes CMS nicht standardmäßig zugängliche Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige bekannte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (SSR) ist eine Anwendungsarchitektur, bei der es die _Aufgabe des Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, das der häufigste und am einfachsten umzusetzende Weg ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering ist für das Gerät des Clients einfacher, da Sie ihnen nur eine gerenderte HTML-Datei senden, aber es kann im Vergleich zu einer clientseitig gerenderten Anwendung schwierig einzurichten sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue an (ja, es ist verwirrend, und nein, diese Projekte sind nicht miteinander verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere "offizielle" Lösungen vom Maintainer des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Statische Site-Generatoren")}} sind Programme, die alle Webseiten einer Mehrseitigen-Website dynamisch generieren — einschließlich aller relevanten CSS oder JavaScript — damit sie an beliebig vielen Orten veröffentlicht werden können. Der Veröffentlichungs-Host könnte beispielsweise ein GitHub-Pages-Branch, eine Netlify-Instanz oder jeder beliebige private Server Ihrer Wahl sein. Diese Herangehensweise bietet eine Reihe von Vorteilen, hauptsächlich im Bereich Leistung (das Gerät Ihres Benutzers baut die Seite nicht mit JavaScript auf; sie ist bereits fertiggestellt) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Seiten können JavaScript nutzen, wo es benötigt wird, sind aber nicht davon _abhängig_. Statische Site-Generatoren erfordern Zeit zum Lernen, genau wie jedes andere Werkzeug, was eine Hürde für Ihren Entwicklungsprozess sein kann.

Statische Sites können so wenige oder so viele einzigartige Seiten haben, wie Sie wollen. So wie Frameworks es Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, erlauben statische Site-Generatoren Ihnen, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen statische Site-Generatoren es Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Site-Generatoren werden diese Komponenten **Vorlagen** genannt. Von statischen Site-Generatoren erstellte Webseiten können sogar Framework-Anwendungen beherbergen: wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch generierten Website beim Besuch durch einen Benutzer eine React-Anwendung startet, können Sie das tun.

Statische Site-Generatoren gibt es schon seit ziemlich langer Zeit, und sie unterliegen ständiger Optimierung und Innovation. Es existieren eine Vielzahl von Optionen, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und markante Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden Client-Frameworks anstelle von Vorlagen, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren insgesamt erfahren möchten, sehen Sie sich Tatiana Macs [Beginner's guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich zu anderen Mitteln der Veröffentlichung von Webinhalten verhält.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden würden und wie man eines auswählt, und Sie dazu angeregt, mehr zu lernen und sich einzubringen!

Unser nächster Artikel geht auf eine niedrigere Ebene ein, indem er die spezifischen Arten von Funktionen betrachtet, die Frameworks normalerweise bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
