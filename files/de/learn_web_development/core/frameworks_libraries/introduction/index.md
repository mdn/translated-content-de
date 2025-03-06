---
title: Einführung in Client-seitige Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über den Bereich, indem wir uns eine kurze Geschichte von JavaScript und Frameworks ansehen, warum Frameworks existieren und was sie uns bieten, wie man beginnt, über die Wahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen es zu Client-seitigen Frameworks gibt.

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
          <li>Was Drittanbieter-Code ist und wie Client-seitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie man eine Wahl trifft.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks verwendet werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Das Aufkommen von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, brachte es gelegentliche Interaktivität und Spannung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern auch, um _Dinge zu tun_. Die Popularität von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Herausforderungen, denen sie gegenüberstanden, zu lösen, und verpackten sie in wiederverwendbare Pakete, die als **Bibliotheken** bezeichnet werden, damit sie ihre Lösungen mit anderen teilen konnten. Dieses geteilte Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten, und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber bietet, wie Software entwickelt wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit erlaubt es, dass die Software zu einer enormen Größe skaliert werden kann und dennoch wartbar bleibt; Vorhersehbarkeit und Wartbarkeit sind wesentlich für die Gesundheit und Langlebigkeit der Software. Die Einführung moderner JavaScript-Frameworks hat es erheblich erleichtert, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks betreiben einen Großteil der beeindruckenden Software im modernen Web – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen vier" als die folgenden.

### Ember

[Ember](https://emberjs.com/) wurde ursprünglich im Dezember 2011 als Fortsetzung der Arbeiten am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine angemessene Popularität aufgrund seiner Stabilität, Gemeinschaftsunterstützung und einiger cleverer Codierungsprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungsframework, das von dem Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist ein vollständiges Neuschreiben vom selben Team, das [AngularJS](https://angularjs.org/) erstellt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks die Templates transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/) Projekt mitgearbeitet und daraus gelernt hatte, veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen vier, hat aber kürzlich einen Popularitätsschub erlebt.

Vue, ähnlich wie [AngularJS](https://angularjs.org/), erweitert HTML mit einem eigenen Code. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es React bereits intern genutzt, um viele seiner Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken zur Erstellung von Anwendungen verwendet — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React im allgemeinen Verständnis als JavaScript-Framework betrachtet. Während Sie dieses Modul durchlesen, arbeiten wir mit diesem allgemeinen Verständnis.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu entwickeln. Die Erforschung des Warum erfordert zunächst die Untersuchung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine gängige Art von Anwendung: Einen Aufgabenlisten-Ersteller, den wir in den nächsten Kapiteln unter Verwendung verschiedener Frameworks implementieren werden. Diese Anwendung sollte es Benutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und dies muss geschehen, während die darunterliegende Daten, die die Anwendung untermauert, zuverlässig verfolgt und aktualisiert werden müssen. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Status bezeichnet.

Jedes unserer Ziele ist in Isolation theoretisch einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können einem Objekt eine neue Aufgabe hinzufügen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir daran erinnern, dass die Anwendung es dem Benutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, beginnen einige Risse zu zeigen. **Das eigentliche Problem ist folgendes: Jedes Mal, wenn wir den Status unserer Anwendung ändern, müssen wir das UI entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Merkmal unserer Aufgabenlisten-App ansehen: das Rendern einer Liste von Aufgaben.

## Die Umständlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser zu rendern, erfordert überraschend viel Code. Nehmen wir an, unser Status ist ein Array von Objekten, strukturiert wie folgt:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir eine dieser Aufgaben unseren Benutzern? Wir wollen jede Aufgabe als Listenelement – ein HTML [`<li>`](/de/docs/Web/HTML/Element/li)-Element innerhalb eines ungeordneten Listenelements (ein [`<ul>`](/de/docs/Web/HTML/Element/ul)) darstellen. Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Zeilen Code, um die benötigten Eigenschaften und Kindelemente zu erstellen.

Das vorherige Snippet bezieht sich auf eine andere Build-Funktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button tut noch nichts, aber das wird er später, sobald wir beschlossen haben, unsere Löschfunktion zu implementieren. Der Code, der unsere Elemente auf der Seite rendern wird, könnte so aussehen:

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

Wir haben jetzt fast dreißig Zeilen Code, die sich _nur_ dem UI widmen – _nur_ um etwas im DOM zu rendern – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Das direkte Arbeiten mit dem DOM, wie in diesem Beispiel, erfordert ein Verständnis für viele Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander steckt; wie man sie auf die Seite bringt. Keiner dieses Codes befasst sich tatsächlich mit Benutzerinteraktionen oder dem Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unser UI zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Kräfte in JavaScript; sie geben Ihnen leichteren Zugang zu den Möglichkeiten von JavaScript, damit Sie für das heutige Web entwickeln können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihr UI aussehen soll, und das Framework sorgt dafür, dass dies im Hintergrund im DOM geschieht.

Der Vanilla-JavaScript-Ansatz, um neue DOM-Elemente in Wiederholung aufzubauen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu veranschaulicht der folgende Codeblock, wie Sie Vue verwenden könnten, um unsere Liste von Aufgaben zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier Ihnen unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax erfahren. Das Wichtigste hier ist, dass dieser Code wie das UI aussieht, das er repräsentiert, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir unsere eigenen Funktionen zum Erstellen des UI nicht selbst schreiben; das Framework übernimmt das für uns in einer optimierten, effizienten Weise. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was los ist, wenn sie unserem Projekt beitreten. Vue ist hierbei nicht allein: die Verwendung eines Frameworks verbessert sowohl die Effizienz des Teams als auch die des Einzelnen.

Es ist möglich, ähnliche Dinge in Vanilla-JavaScript zu tun. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, Zeichenfolgen von HTML zu schreiben, die dem endgültigen Element ähneln. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlistenanwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Vorteile von Frameworks

Lassen Sie uns einige der anderen Vorteile betrachten, die Frameworks bieten. Wie wir zuvor angedeutet haben, sind die Vorteile von Frameworks mit Vanilla-JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt den gesamten kognitiven Aufwand, diese Probleme selbst zu lösen.

### Tools

Da jedes der Frameworks in diesem Modul eine große, aktive Gemeinschaft hat, bietet jedes Framework-Ökosystem Tools, die die Entwicklererfahrung verbessern. Diese Tools machen es einfach, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung so funktioniert, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr Details zu Web-Tooling-Konzepten erfahren möchten, sehen Sie sich unseren [Überblick über Client-seitige Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-Anwendung müssten Sie Ihre eigene Reihe von Konventionen schaffen, um dies auf effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn man sie sich selbst überlässt, mit dem gesamten Code, der sich auf einen Teil des UI bezieht, verteilt über eine Datei — oder in einer ganz anderen Datei — enden.

### Routing

Die wichtigste Funktion des Webs ist, dass es Benutzern erlaubt, von einer Seite zur anderen zu navigieren — es ist schließlich ein Netzwerk von miteinander verbundenen Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, die Ihnen angezeigt werden. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkehren oder sie mit anderen teilen, damit sie dieselbe Seite leicht finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht es Ihnen auch, vor- und zurück zu navigieren. Dies nennt man **serverseitiges Routing**.

Moderne Webanwendungen rufen in der Regel keine neuen HTML-Dateien ab und rendern sie — sie laden eine einzige HTML-Hülle und aktualisieren kontinuierlich das DOM darin (sogenannte **Single-Page-Apps** oder **SPAs**), ohne Nutzer zu neuen Adressen im Web zu navigieren. Jede neue pseudo-Webseite wird in der Regel als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu bringen. Leute sind gewohnt, zu spezifischen Seiten in einer Anwendung verlinken zu können, vorwärts und rückwärts im Navigationsverlauf zu reisen usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen unterbrochen werden. Wenn Routing auf diese Weise von einer Client-Anwendung gehandhabt wird, nennt man es treffend **Client-seitiges Routing**.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die man bei der Verwendung von Frameworks beachten sollte

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks erleichtern die Entwicklung von Frontend-Anwendungen, aber sie sind kein Allheilmittel, das alle Probleme löst. Dieser Abschnitt spricht über einige der Dinge, die Sie bei der Verwendung von Frameworks beachten sollten. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — achten Sie darauf, dass Sie kein Framework nur um seiner selbst willen verwenden.

### Vertrautheit mit dem Werkzeug

Ebenso wie Vanilla JavaScript benötigen Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genügend seiner Funktionen zu lernen, damit es für Sie nützlich ist statt gegen Sie zu arbeiten, und stellen Sie sicher, dass auch Ihre Teamkollegen sich damit wohlfühlen.

### Übertechnisierung

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist, und diese Seiten wenig bis gar keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, sind Frameworks nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner über wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), als Werkzeug, um kleine Bereiche einer Webseite interaktiv zu machen.

### Größerer Code-Bestand und Abstraktion

Frameworks ermöglichen Ihnen, eher deklarativen Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie im Hintergrund erledigen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, der wiederum Ihr endgültiges Softwareprodukt größer und rechenintensiver im Betrieb macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung von jeglichem Code, der während des Build-Prozesses tatsächlich nicht in der App verwendet wird) ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Hinblick auf die Leistung Ihrer App berücksichtigen müssen, insbesondere auf Geräten mit eingeschränktem Netzwerk/Speicher, wie Mobiltelefone.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur Natur des Webs. Egal, wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Das Schreiben Ihrer gesamten Anwendung in JavaScript kann Sie den Blick für HTML und den Zweck seiner verschiedenen Tags verlieren lassen und dazu führen, dass Sie ein HTML-Dokument erstellen, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu erstellen, die vollständig von JavaScript abhängt und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität ist, eine komplexe Web-App zu erstellen, ist es einfach, dies zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit wahren, werden Frameworks Ihre Fragilität, Ihre Aufgeblähtheit und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt eines robusten, inhaltsorientierten Netzwerks von Dokumenten, setzt das Web jetzt oft JavaScript an die erste Stelle und die Benutzererfahrung an die letzte Stelle.

## Barrierefreiheit in einer frameworkgesteuerten Webumgebung

Lasst uns auf das Gesagte im vorherigen Abschnitt aufbauen und ein bisschen mehr über Zugänglichkeit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer etwas Nachdenken und Aufwand, und Frameworks können diesen Prozess komplizieren. Häufig müssen Sie fortgeschrittene Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die bei traditionellen Websites nicht existieren. Das größte Beispiel hierfür ist das client-seitige Routing, wie bereits erwähnt.

Mit traditionellem (serverseitigem) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den oberen Teil der Seite legen und assistive Technologien den Seitentitel ankündigen müssen. Diese Dinge geschehen jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Mit client-seitigem Routing lädt Ihr Browser keine neuen Webseiten, so dass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Arbeit darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat noch kein Framework dies perfekt geschafft.

Das Fazit ist, dass Sie die Barrierefreiheit von Anfang an in _jedes_ Webprojekt einbeziehen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul behandelten Frameworks wendet unterschiedliche Ansätze zur Entwicklung von Webanwendungen an. Jedes verbessert oder ändert sich regelmäßig, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Recherche durchführen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, haben wir ein paar Fragen identifiziert, die Sie sich stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung)?

Die Tabelle in diesem Abschnitt bietet eine schnell einsehbare Zusammenfassung der aktuellen _Browserunterstützung_, die von jedem Framework angeboten wird, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Großen und Ganzen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Entscheidend ist, dass keines der Frameworks einen Entwickler zwingt, eine spezielle DSL zu verwenden, aber sie wurden fast alle mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, die bevorzugte DSL eines Frameworks nicht zu verwenden, verpassen Sie Funktionen, die sonst Ihre Entwicklererfahrung verbessern würden.

Sie sollten ernsthaft die Unterstützungsmatrix und DSLs eines Frameworks in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Eine nicht übereinstimmende Browserunterstützung kann eine Barriere für Ihre Benutzer sein; eine nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browserunterstützung                | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                             |
| --------- | ----------------------------------- | -------------- | ------------------------ | --------------------------------------------------------------------------------- |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Doks](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Doks](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Doks](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Doks](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind wirklich keine echten DSLs, aber sie sind nicht-standard HTML, daher glauben wir, dass es sich lohnt, sie hervorzuheben.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder der wöchentlichen npm-Downloads eines Projekts prüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, was Sie tun können, ein paar Foren durchsuchen oder mit anderen Entwicklern sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Netz

Nehmen Sie nicht einfach unser Wort für diesen Punkt — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation hat sich kürzlich entschieden, Vue für ihr Frontend zu verwenden, und hat einen [Request for Comments (RFC) zur Framework-Übernahme gepostet](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, hat sich die Zeit genommen, die Bedürfnisse des Wikimedia-Projekts darzustellen und warum bestimmte Frameworks gute Wahlmöglichkeiten für das Team waren. Dieser RFC dient als großartiges Beispiel für die Art von Recherche, die Sie selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie deckt viele Themen im Zusammenhang mit JavaScript ab, einschließlich Daten sowohl über die Verwendung von Frameworks als auch über die Entwicklermeinung dazu. Derzeit gibt es mehrere Jahre an Daten, die Ihnen helfen, ein Gefühl für die Popularität eines Frameworks zu bekommen.

Das Vue-Team hat [erschöpfend Vue mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). In diesem Vergleich könnten einige Vorurteile bestehen (die sie erwähnen), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu Client-seitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive Client-seitige JavaScript-Anwendung erfordert, könnten Sie einige andere Lösungen zur Erstellung des Webs in Erwägung ziehen:

- Ein Content-Management-System
- Server-seitiges Rendering
- Ein statischer Website-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die einem Benutzer erlauben, Inhalte für das Web zu erstellen, ohne direkt selbst Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Autoren erfordern, die über begrenzte Programmierfähigkeiten verfügen, oder für Programmierer, die Zeit sparen wollen. Sie erfordern jedoch eine erhebliche Menge an Zeit zum Einrichten, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen gewissen Grad an Kontrolle über die endgültige Ausgabe Ihrer Website aufgeben. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keine barrierefreien Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Server-seitiges Rendering

**Server-seitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _Client-seitigem Rendering_, das der häufigste und einfachste Weg ist, eine JavaScript-Anwendung zu erstellen. Server-seitiges Rendering ist auf dem Gerät des Clients einfacher, da Sie nur eine gerenderte HTML-Datei an ihn senden, aber es kann schwieriger einzurichten sein im Vergleich zu einer Client-seitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen Server-seitiges ebenso wie Client-seitiges Rendering. Sehen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen sind von der Community geschrieben und gepflegt, während einige "offizielle" Lösungen von den Herausgebern des Frameworks bereitgestellt werden.

### Statische Website-Generatoren

{{Glossary("SSG", "Statische Website-Generatoren")}} sind Programme, die dynamisch alle Webseiten eines mehrseitigen Website-Projekts generieren – einschließlich aller relevanten CSS- oder JavaScript-Dateien – damit sie an mehreren Orten veröffentlicht werden können. Der Veröffentlichungsort könnte ein GitHub-Pages-Branch, eine Netlify-Instanz oder ein privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, vor allem in den Bereichen Leistung (das Gerät des Benutzers erstellt die Seite nicht mit JavaScript; sie ist bereits vollständig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Sites können immer noch JavaScript verwenden, wo es nötig ist, aber sie sind nicht _abhängig_ davon. Statische Website-Generatoren benötigen Zeit, um zu lernen, wie jedes andere Werkzeug, was eine Barriere für Ihren Entwicklungsprozess darstellen kann.

Statische Sites können so wenige oder so viele einzigartige Seiten haben, wie Sie möchten. So wie Frameworks Ihnen ermöglichen, schnell Client-seitige JavaScript-Anwendungen zu schreiben, ermöglichen statische Website-Generatoren Ihnen, HTML-Dateien schnell zu erstellen, die Sie ansonsten einzeln geschrieben hätten. Wie Frameworks erlauben statische Website-Generatoren Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzufügen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Website-Generatoren werden diese Komponenten als **Templates** bezeichnet. Webseiten, die mit statischen Website-Generatoren erstellt wurden, können sogar Heim für Framework-Anwendungen sein: Wenn Sie möchten, dass eine spezielle Seite Ihrer statisch generierten Website beim Besuch durch den Benutzer eine React-Anwendung bootet, können Sie das tun.

Statische Website-Generatoren gibt es schon seit langer Zeit, und sie sind ständig unter Optimierung und Innovation. Es gibt eine Reihe von Wahlmöglichkeiten, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden Client-seitige Frameworks anstelle von Templates, generieren aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Website-Generatoren im Allgemeinen erfahren möchten, sehen Sie sich Tatiana Macs [Anfängerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Website-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen zwar noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie überhaupt Frameworks verwenden würden und wie man eines auswählt, und haben Sie hoffentlich dazu angeregt, mehr zu lernen und loszulegen!

Unser nächster Artikel geht auf eine niedrigere Ebene und betrachtet die spezifischen Arten von Funktionen, die Frameworks in der Regel bieten, und warum sie so arbeiten, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
