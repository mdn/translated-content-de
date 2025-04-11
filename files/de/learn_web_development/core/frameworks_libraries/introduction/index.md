---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Überblick über Frameworks mit einer allgemeinen Einführung in das Thema, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, über die Auswahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen es zu clientseitigen Frameworks gibt.

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

## Das Aufkommen von Bibliotheken und Frameworks

Als JavaScript 1996 eingeführt wurde, brachte es gelegentliche Interaktivität und Spannung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Popularität von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, auf die sie stießen, und verpackten sie in wiederverwendbare Pakete, die als **Bibliotheken** bezeichnet werden, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber liefert, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit erlaubt es, die Software auf enorme Größe zu skalieren und dennoch wartbar zu halten; Vorhersehbarkeit und Wartbarkeit sind entscheidend für die Gesundheit und Langlebigkeit von Software. Mit dem Aufkommen moderner JavaScript-Frameworks ist es viel einfacher geworden, stark dynamische, interaktive Anwendungen zu entwickeln.

JavaScript-Frameworks befeuern einen Großteil der beeindruckenden Software im modernen Web – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen Vier" als folgende.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeit gestartet, die im [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt begann. Es ist ein älteres Framework mit weniger Nutzern als modernere Alternativen wie React und Vue, erfreut sich jedoch immer noch großer Beliebtheit aufgrund seiner Stabilität, Community-Unterstützung und einiger cleverer Kodierungsprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungsframework, das vom Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es handelt sich um eine vollständige Neufassung des gleichen Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Beim Build-Prozess übersetzt der Compiler des Frameworks die Vorlagen für Entwickler transparent in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel näher betrachten werden.

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/) Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen vier, erfreute sich jedoch kürzlich eines Anstiegs an Popularität.

Vue erweitert wie [AngularJS](https://angularjs.org/) HTML mit seinem eigenen Code. Darüber hinaus stützt es sich größtenteils auf modernes, standardisiertes JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt wurde React intern bereits zur Lösung vieler unternehmenseigener Probleme verwendet. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen ihnen, Webanwendungen zu erstellen, usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich oft als JavaScript-Framework verstanden. Während Sie dieses Modul lesen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die zur Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Das Erforschen des Warums erfordert zunächst, die Herausforderungen der Softwareentwicklung zu untersuchen.

Betrachten Sie eine übliche Art von Anwendung: Einen To-Do-Listen-Ersteller, den wir in zukünftigen Kapiteln mit einer Vielzahl von Frameworks umsetzen werden. Diese Anwendung sollte Benutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies zuverlässig tun, während sie die Daten, die der Anwendung zugrunde liegen, verfolgt und aktualisiert. In der Softwareentwicklung werden diese zugrunde liegenden Daten als State bezeichnet.

Jedes unserer Ziele ist theoretisch einfach in Isolation. Wir können über die Daten iterieren, um sie zu rendern; wir können einem Objekt eine neue Aufgabe hinzufügen; wir können einen Bezeichner verwenden, um eine Aufgabe zu suchen, zu bearbeiten oder zu löschen. Wenn wir uns jedoch daran erinnern, dass die Anwendung dem Benutzer all diese Dinge über den Browser ermöglichen muss, beginnen sich einige Risse zu zeigen. **Das eigentliche Problem ist dieses: Jedes Mal, wenn wir den State unserer Anwendung ändern, müssen wir die UI entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur _eine_ Funktion unserer To-Do-Listen-App betrachten: das Rendern einer Liste von Aufgaben.

## Die Umständlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zum richtigen Zeitpunkt im Browser zu rendern, erfordert überraschend viel Code. Nehmen wir an, unser State ist ein Array von Objekten, das folgendermaßen strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir eine dieser Aufgaben unseren Nutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML [`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Element innerhalb eines ungeordneten Listenelements (eines [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)). Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Zeilen Code, um die Eigenschaften und Kinderelemente, die es benötigt, zu erstellen.

Der vorherige Ausschnitt bezieht sich auf eine weitere Build-Funktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendeten, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button macht noch nichts, aber er wird später etwas tun, wenn wir entscheiden, unsere Löschfunktion zu implementieren. Der Code, der unsere Elemente auf der Seite rendern wird, könnte in etwa so aussehen:

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

Wir haben jetzt fast dreißig Zeilen Code, die sich _nur_ der UI widmen, _nur_ etwas im DOM rendern – und dabei fügen wir an keinem Punkt Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander setzt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere UI zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit erheblich zu erleichtern — sie existieren, um ein besseres _Entwicklererlebnis_ zu bieten. Sie bringen keine völlig neuen Fähigkeiten zu JavaScript; sie geben Ihnen leichteren Zugang zu den Fähigkeiten von JavaScript, damit Sie für das heutige Web bauen können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre UI aussehen soll, und das Framework veranlasst das im Hintergrund im DOM.

Der Vanilla-JavaScript-Ansatz zum Erstellen neuer DOM-Elemente in Wiederholung war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie möglicherweise Vue verwenden könnten, um unsere Liste von Aufgaben zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieser Ausschnitt reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-` Attribute hier unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über Vue-spezifische Syntax lernen. Der wichtige Punkt hier ist, dass dieser Code wie die von ihm dargestellte UI aussieht, während der Vanilla-JavaScript-Code das nicht tut.

Dank Vue mussten wir nicht unsere eigenen Funktionen zum Erstellen der UI schreiben; das Framework übernimmt das für uns auf optimierte, effiziente Weise. Unsere einzige Aufgabe hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell erkennen, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist dabei nicht allein: Die Verwendung eines Frameworks verbessert sowohl die Team- als auch die individuelle Effizienz.

Es ist möglich, Dinge _ähnlich_ wie dies im Vanilla JavaScript zu tun. [Template-Literal-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere To-Do-List-Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Vorteile von Frameworks

Lassen Sie uns einige der weiteren Vorteile betrachten, die Frameworks bieten. Wie bereits angedeutet, sind die Vorteile von Frameworks auch mit Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Belastung, diese Probleme selbst lösen zu müssen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das Ökosystem eines jeden Frameworks Werkzeuge, die das Entwicklererlebnis verbessern. Diese Werkzeuge erleichtern das Hinzufügen von Dingen wie Tests (um sicherzustellen, dass sich Ihre Anwendung so verhält, wie sie soll) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unseren [Überblick über clientseitiges Tooling](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihre eigene Reihe von Konventionen schaffen, um dies auf effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler, die auf sich selbst gestellt sind, könnten am Ende mit dem gesamten Code, der sich auf einen Teil der UI bezieht, verteilt in einer Datei landen – oder in einer anderen Datei überhaupt.

### Routing

Das wichtigste Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von verlinkten Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, um sie für Sie anzuzeigen. Während dies geschieht, ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkehren, oder sie mit anderen teilen, sodass sie die gleiche Seite leicht finden können. Ihr Browser speichert Ihre Navigationshistorie und ermöglicht Ihnen, vor- und zurückzunavigieren. Dies wird als **serverseitiges Routing** bezeichnet.

Moderne Webanwendungen rufen normalerweise keine neuen HTML-Dateien ab und rendern sie – sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (als **Single Page Apps** oder **SPA** bezeichnet), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig erfolgt kein Routing.

Wenn eine SPA komplex genug ist und genug einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Menschen sind es gewohnt, auf bestimmte Seiten in einer Anwendung verlinken zu können, vor- und zurück in ihrer Navigationshistorie zu reisen, usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfunktionen gebrochen sind. Wenn das Routing in dieser Weise von einer Client-Anwendung behandelt wird, wird es treffend als **clientseitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben begleitende Bibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein bedeutet, die passendsten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks machen die Frontend-Anwendungsentwicklung einfach, aber sie sind kein Wundermittel, das alle Probleme löst. In diesem Abschnitt sprechen wir über einige Dinge, die Sie bei der Verwendung von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise gar kein Framework benötigen – seien Sie sich bewusst, dass Sie nicht einfach eines verwenden, nur um eines zu nutzen.

### Vertrautheit mit dem Werkzeug

Wie reines JavaScript benötigen auch Frameworks Zeit zu erlernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genügend seiner Funktionen kennenzulernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teammitglieder damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten wenig bis gar keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für das Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebase und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie im Hintergrund behandeln. Diese Abstraktion ist großartig für Ihr Erlebnis als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, der wiederum Ihr endgültiges Stück Software größer und rechenaufwendiger zu bedienen macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernen von Code, der in der App während des Build-Prozesses tatsächlich nicht benutzt wird), wird es Ihnen erlauben, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Hinterkopf behalten müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Webs. Egal wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Das Schreiben Ihrer gesamten Anwendung in JavaScript kann dazu führen, dass Sie den Überblick über HTML und den Zweck seiner verschiedenen Tags verlieren, und dazu führen, dass Sie ein HTML-Dokument produzieren, das nicht semantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig auf JavaScript angewiesen ist und ohne dieses nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, ist das leicht möglich. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit wahren, werden Frameworks Ihre Fragilität, Ihre Blähungen und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt ein robustes, inhaltsorientiertes Netzwerk von Dokumenten zu sein, setzt das Web jetzt oft JavaScript an erste Stelle und Benutzererfahrung an letzte Stelle.

## Zugänglichkeit im von Frameworks getriebenen Web

Lassen Sie uns an das anknüpfen, was wir im vorherigen Abschnitt gesagt haben, und ein bisschen mehr über Zugänglichkeit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer ein bisschen Reflektion und Aufwand, und Frameworks können diesen Prozess erschweren. Sie müssen häufig erweiterte Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Zugänglichkeit, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist im clientseitigen Routing, wie bereits erwähnt.

Mit traditionellem (serverseitigem) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er sich am Anfang der Seite fokussieren soll, und assistive Technologien werden den Titel der Seite ankündigen. Diese Dinge passieren jedes Mal, wenn Sie auf eine neue Seite navigieren.

Mit clientseitigem Routing lädt Ihr Browser keine neuen Webseiten, also weiß er nicht, dass er den Fokus automatisch einstellen oder einen neuen Seitentitel ankündigen soll. Framework-Autoren haben immense Zeit und Arbeit investiert, um JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat kein Framework dies perfekt getan.

Fazit ist, dass Sie die Zugänglichkeit von Anfang an in _jedem_ Webprojekt berücksichtigen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter großen Zugänglichkeitsproblemen leiden werden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul behandelten Frameworks geht unterschiedlich an die Entwicklung von Webanwendungen heran. Jedes wird regelmäßig verbessert oder verändert, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigenen Nachforschungen anstellen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, haben wir einige Fragen identifiziert, die Sie sich stellen können, um Ihre Optionen effektiver zu erforschen:

1. Welche Browser unterstützt das Framework?
2. Welche domänen-spezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_ die von jedem Framework angeboten wird, sowie die **domänen-spezifischen Sprachen**, mit denen es verwendet werden kann.

Im Großen und Ganzen sind {{Glossary("DSL/Domain_specific_language", "domänen-spezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung von Bedeutung sind. Im Kontext von Frameworks sind DSLs Abwandlungen von JavaScript oder HTML, die es erleichtern, mit diesem Framework zu entwickeln. Entscheidend ist, dass keines der Frameworks eine spezielle DSL _erfordert_, aber fast alle wurden mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, nicht die bevorzugte DSL eines Frameworks zu verwenden, werden Ihnen Funktionen entgehen, die ansonsten Ihr Entwicklererlebnis verbessern würden.

Sie sollten die Unterstützungsmatrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Entscheidung für ein neues Projekt treffen. Ungleiche Browser-Unterstützung kann eine Barriere für Ihre Benutzer sein; ungleiche DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                                      |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine wirklichen DSLs, aber sie sind nicht-standardisiertes HTML, weshalb wir glauben, dass sie es wert sind, hervorgehoben zu werden.

### Hat das Framework eine starke Community?

Dies ist vielleicht die am schwersten messbare Metrik, da die Größe einer Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne eines Projekts oder die wöchentlichen npm-Downloads überprüfen, um eine Idee von seiner Popularität zu bekommen, aber manchmal ist das Beste, was man tun kann, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch um ihre Offenheit und Inklusivität und wie gut die verfügbare Dokumentation ist.

### Meinungen im Web

Verlassen Sie sich nicht nur auf unser Wort in dieser Angelegenheit — es gibt Diskussionen auf der ganzen Web. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Frontend zu verwenden, und eine [Anfrage für Kommentare (RFC) zur Framework-Adoption veröffentlicht](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts zu erläutern und warum bestimmte Frameworks gute Optionen für das Team waren. Diese RFC dient als großartiges Beispiel für die Art von Recherche, die Sie selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedbacks von JavaScript-Entwicklern. Sie deckt viele Themen im Zusammenhang mit JavaScript ab, einschließlich Daten über sowohl die Verwendung von Frameworks als auch die Entwicklermeinungen dazu. Derzeit sind mehrere Jahre Daten verfügbar, sodass Sie ein Gefühl für die Popularität eines Frameworks bekommen können.

Das Vue-Team hat [Vue erschöpfend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte einige Vorurteile in diesem Vergleich geben (die sie anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und wissen, dass Ihr Projekt keine intensive clientseitige JavaScript erfordert, könnten Sie eine der wenigen anderen Lösungen zum Erstellen des Webs in Betracht ziehen:

- Ein Content-Management-System
- Serverseitiges Rendern
- Ein statischer Site-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMS**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne direkt selber Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Beiträge von Content-Autoren erfordern, die nur begrenzte Codierungsfähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Menge an Zeit, um eingerichtet zu werden, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen Teil der Kontrolle über die endgültige Ausgabe Ihrer Website abgeben. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keinen zugänglichen Inhalt erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendern

**Serverseitiges Rendern** (**SSR**) ist eine Anwendungsarchitektur, bei der es Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendern_, was die gebräuchlichste und direkteste Weise ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendern ist für das Gerät des Clients einfacher, da Sie ihm nur eine gerenderte HTML-Datei senden, aber es kann im Vergleich zu einer clientseitig gerenderten Anwendung schwierig einzurichten sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendern. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte sind nicht miteinander verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gewartet, während einige "offizielle" Lösungen vom Maintainer des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Statische Site-Generatoren")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch generieren – einschließlich aller relevanten CSS- oder JavaScript-Dateien – damit sie an beliebigen Orten veröffentlicht werden können. Der Veröffentlichungsort könnte eine GitHub-Pages-Verzweigung sein, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl, zum Beispiel. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, hauptsächlich rund um die Leistung (das Gerät des Benutzers erstellt die Seite nicht mit JavaScript; sie ist bereits vollständig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Seiten können immer noch JavaScript dort nutzen, wo sie es brauchen, aber sie sind nicht darauf _angewiesen_. Statische Site-Generatoren benötigen Zeit, um gelernt zu werden, wie jedes andere Werkzeug auch, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so wenige oder so viele einzigartige Seiten haben, wie Sie möchten. Genauso wie Frameworks Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, bieten statische Site-Generatoren Ihnen eine Möglichkeit, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen statische Site-Generatoren Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext statischer Site-Generatoren werden diese Komponenten als **Templates** bezeichnet. Webseiten, die von statischen Site-Generatoren erstellt werden, können sogar Heimat von Framework-Anwendungen sein: Wenn Sie zum Beispiel möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Site-Generatoren gibt es bereits seit geraumer Zeit, und sie werden ständig optimiert und innoviert. Eine Reihe von Wahlmöglichkeiten existiert, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedene Technologiestacks aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden clientseitige Frameworks anstelle von Templates, generieren aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen erfahren möchten, sehen Sie sich Tatiana Mac's [Anleitung für Anfänger zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklärt sie, was ein statischer Site-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Damit beenden wir unsere Einführung in Frameworks — wir haben Ihnen bisher keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund gegeben, warum Sie Frameworks überhaupt verwenden würden und wie Sie eines auswählen können, und Sie dazu gebracht, mehr zu lernen und einzusteigen!

Unser nächster Artikel geht tiefer in die spezifischen Arten von Funktionen ein, die Frameworks in der Regel bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
