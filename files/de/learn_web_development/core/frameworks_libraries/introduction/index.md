---
title: Einführung in client-seitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Überblick über Frameworks mit einem allgemeinen Überblick über das Thema, einer kurzen Geschichte von JavaScript und Frameworks, warum es Frameworks gibt und was sie uns bieten, wie Sie beginnen können, darüber nachzudenken, ein Framework zu wählen, das Sie lernen möchten, und welche Alternativen es zu client-seitigen Frameworks gibt.

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
          <li>Was Drittanbieter-Code ist und wie client-seitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie man eines auswählt.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks verwendet werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Das Entstehen von Bibliotheken und Frameworks

Als JavaScript 1996 vorgestellt wurde, fügte es einer bis dahin aus statischen Dokumenten bestehenden Weblandschaft gelegentliche Interaktivität und Spannung hinzu. Das Web wurde nicht mehr nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Popularität von JavaScript stieg stetig. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge zur Lösung der von ihnen gestellten Probleme und packten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken trug zur Entwicklung des Webs bei und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber hat, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Einheitlichkeit in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software unerlässlich. Die Einführung moderner JavaScript-Frameworks hat es erheblich erleichtert, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit wird angenommen, dass die „großen vier“ die folgenden sind.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework mit weniger Nutzern als modernere Alternativen wie React und Vue, genießt jedoch aufgrund seiner Stabilität, der Community-Unterstützung und einiger cleverer Kodierungsprinzipien immer noch eine gewisse Beliebtheit.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von dem Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neuschreibung desselben Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Entwicklungszeit übersetzt der Compiler des Frameworks die Vorlagen transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel näher betrachten werden.

### Vue

Nachdem Evan You am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt mitgearbeitet und gelernt hatte, veröffentlichte er 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, hat jedoch kürzlich einen Popularitätsschub erlebt.

Vue erweitert wie [AngularJS](https://angularjs.org/) HTML mit einigen eigenen Codes. Abgesehen davon verlässt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte Facebook React bereits intern eingesetzt, um viele der eigenen Probleme zu lösen. Technisch gesehen ist React _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen, usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Wenn Sie dieses Modul durchlesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit einer HTML-ähnlichen Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Entstehung von Frameworks inspiriert hat, jedoch nicht wirklich, _warum_ Entwickler sie erstellt haben. Um das _Warum_ zu erkunden, müssen zunächst die Herausforderungen der Softwareentwicklung betrachtet werden.

Betrachten Sie eine häufige Art von Anwendung: einen Aufgabenlisten-Ersteller, den wir in zukünftigen Kapiteln mit einer Vielzahl von Frameworks implementieren werden. Diese Anwendung sollte Benutzern erlauben, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und das muss erfolgen, während die Anwendung die zugrunde liegenden Daten zuverlässig verfolgt und aktualisiert. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch isoliert gesehen einfach. Wir können über die Daten iterieren, um sie darzustellen; wir können einem Objekt eine neue Aufgabe hinzufügen; wir können mit einem Bezeichner eine Aufgabe finden, bearbeiten oder löschen. Wenn wir daran denken, dass die Anwendung den Benutzer all das über den Browser tun lassen muss, beginnen jedoch einige Risse zu entstehen. **Das tatsächliche Problem ist: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeiten dieses Problems untersuchen, indem wir nur _eine_ Funktion unserer Aufgabenlisten-App betrachten: das Rendern einer Liste von Aufgaben.

## Die Ausführlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser zu rendern, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Array von Objekten, das wie folgt strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir eine dieser Aufgaben unseren Benutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-`<li>`-Element in einem ungeordneten Listenelement (einem `<ul>`). Wie erstellen wir es? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und weitere Codezeilen, um die Eigenschaften und Kindelemente zu erstellen, die es benötigt.

Das vorherige Snippet verweist auf eine weitere Erstellungsfunktion: `buildDeleteButtonEl()`. Es folgt einem Muster, das dem ähnelt, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button tut noch nichts, aber das wird später, wenn wir unser Lösch-Feature implementieren, der Fall sein. Der Code, der unsere Elemente auf der Seite rendert, könnte ungefähr so aussehen:

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

Wir haben nun fast dreißig Codezeilen, die _nur_ der Benutzeroberfläche gewidmet sind – _nur_ um etwas im DOM zu rendern – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander verschachtelt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden geschaffen, um diese Art von Arbeit erheblich zu erleichtern — sie existieren, um ein besseres _Entwicklererlebnis_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie geben Ihnen einfacher Zugriff auf die Funktionen von JavaScript, damit Sie für das heutige Web bauen können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen mehr _deklarativ_ zu schreiben. Das bedeutet, dass Sie Code schreiben können, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework macht es im Hintergrund im DOM möglich.

Der Vanilla-JavaScript-Ansatz, um neue DOM-Elemente in Wiederholungen zu erstellen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie möglicherweise Vue verwenden, um unsere Aufgabenliste zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war’s. Diese Codezeilen reduzieren fast dreißig Codezeilen auf sechs. Wenn die geschweiften Klammern und `v-` Attribute hier für Sie ungewohnt sind, ist das in Ordnung; Sie werden später im Modul über Vue-spezifische Syntax lernen. Die Idee, die Sie mitnehmen sollten, ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der Vanilla-JavaScript-Code das nicht tut.

Dank Vue mussten wir nicht unsere eigenen Funktionen für den Aufbau der Benutzeroberfläche schreiben; das Framework übernimmt das für uns auf optimierte, effiziente Weise. Unsere einzige Rolle bestand darin, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell nachvollziehen, was passiert, wenn sie unserem Projekt beitreten. Vue ist nicht allein darin: Die Verwendung eines Frameworks verbessert sowohl die Team- als auch die individuelle Effizienz.

Es ist möglich, Dinge _ähnlich_ wie dies in Vanilla-JavaScript zu tun. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) erleichtern es, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlistenanwendung sein, ist jedoch für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele eindeutige Elemente in einer Benutzeroberfläche rendern könnten, nicht wartbar.

## Weitere Dinge, die Frameworks uns bieten

Lassen Sie uns einige der anderen Vorteile betrachten, die von Frameworks geboten werden. Wie bereits angedeutet, sind die Vorteile von Frameworks in Vanilla-JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt einem die gesamte kognitive Belastung ab, diese Probleme selbst zu lösen.

### Tooling

Da jedes der Frameworks in diesem Modul über eine große, aktive Community verfügt, bietet das Ökosystem jedes Frameworks Tools, die das Entwicklererlebnis verbessern. Diese Tools erleichtern das Hinzufügen von Dingen wie Tests (um sicherzustellen, dass Ihre Anwendung so funktioniert, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unsere [Übersicht über client-seitige Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler dazu, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codestücke, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder ein paar spezielle Dateien) untergebracht werden, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen können. In einer Vanilla-JavaScript-App müssten Sie Ihr eigenes Satz von Konventionen erstellen, um dies in einer effizienten, skalierbaren Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie auf sich selbst gestellt sind, enden, indem sie den gesamten auf einen Teil der Benutzeroberfläche bezogenen Code über eine Datei verteilen — oder in einer ganz anderen Datei.

### Routing

Das wesentlichste Merkmal des Webs ist, dass es Benutzern ermöglicht hat, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk verlinkter Dokumente. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, der Ihnen angezeigt wird. Während dies geschieht, ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später zur Seite zurückkehren oder sie mit anderen teilen, damit auch diese die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihre Navigation und ermöglicht es Ihnen, vorwärts und rückwärts zu navigieren. Dies wird als **Server-seitiges Routing** bezeichnet.

Moderne Webanwendungen holen und rendern typischerweise keine neuen HTML-Dateien – sie laden eine einzelne HTML-Hülle und aktualisieren ständig das DOM darin (als **Single Page Apps** oder **SPAs** bezeichnet), ohne die Benutzer zu neuen Webadressen zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routingerfunktionalität in Ihre Anwendung zu integrieren. Menschen sind es gewohnt, zu spezifischen Seiten innerhalb einer Anwendung zu verlinken, vorwärts und rückwärts in ihrem Verlauf zu navigieren usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfunktionen gestört sind. Wenn das Routing von einer Client-Anwendung auf diese Weise gehandhabt wird, wird es treffend **Client-seitiges Routing** genannt.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die beim Einsatz von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Werkzeuge für den jeweiligen Job zu verwenden. JavaScript-Frameworks erleichtern die Frontend-Anwendungsentwicklung, sind jedoch kein Allheilmittel, das alle Probleme löst. In diesem Abschnitt wird über einige Dinge gesprochen, die Sie beim Einsatz von Frameworks beachten sollten. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, dass Sie nicht einfach nur der Form halber ein Framework verwenden.

### Vertrautheit mit dem Werkzeug

Wie auch bei JavaScript selbst, benötigen Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genügend Zeit haben, um genug von den Funktionen des Frameworks zu lernen, damit es für Sie nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass auch Ihre Teamkollegen damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist und diese Seiten nur geringe oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebestand und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie im Hintergrund erledigen. Diese Abstraktion ist großartig für Ihr Erlebnis als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was Ihr endgültiges Software-Stück größer und rechnerisch anspruchsvoller macht.

Ein gewisser zusätzlicher Code ist unvermeidlich, und ein Framework, das Tree-shaking (Entfernung aller Codes, die nicht tatsächlich in der App während des Build-Prozesses verwendet werden) unterstützt, ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie berücksichtigen müssen, wenn Sie die Leistung Ihrer App betrachten, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Webs. Egal, wie Sie für das Web bauen, das Endresultat, die Ebene, die letztlich mit den Benutzern interagiert, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, kann es passieren, dass Sie den Blick für HTML und den Zweck seiner verschiedenen Tags verlieren, was dazu führen kann, dass Sie ein HTML-Dokument produzieren, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig auf JavaScript angewiesen ist und ohne JavaScript nicht funktioniert.

Frameworks sind nicht die Ursache unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung zerbrechlich, aufgebläht und unzugänglich werden. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihr Ziel darin besteht, eine komplexe Web-App zu erstellen, ist es einfach, dies zu tun. Wenn Ihre Prioritäten jedoch nicht mit Bedacht Leistung und Zugänglichkeit schützen, werden Frameworks Ihre Fragilität, Ihre Aufgeblähtheit und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Statt eines robusten, inhaltszentrierten Netzwerks von Dokumenten setzt das Web nun oft JavaScript in den Vordergrund und die Benutzererfahrung an die letzte Stelle.

## Barrierefreiheit im von Frameworks getriebenen Web

Lassen Sie uns aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Zugänglichkeit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer durchdachte Überlegung und Anstrengung, und Frameworks können diesen Prozess erschweren. Sie müssen oft erweiterte Framework-APIs einsetzen, um auf native Browserfunktionen wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder die Fokusverwaltung zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Zugänglichkeit, die für traditionelle Websites nicht existieren. Das größte Beispiel hierfür ist das client-seitige Routing, wie bereits zuvor erwähnt.

Beim traditionellen (server-seitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den Anfang der Seite setzen und unterstützende Technologien den Titel der Seite ankündigen müssen. Diese Dinge geschehen jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim client-seitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen soll. Autoren von Frameworks haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat kein Framework dies perfekt geschafft.

Das Fazit ist, dass Sie Barrierefreiheit von Anfang an in _jedem_ Webprojekt berücksichtigen sollten, beachten Sie jedoch, dass abstrahierte Codebasen, die Frameworks verwenden, eher an größeren Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework wählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder verändert sich regelmäßig, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigenen Recherchen durchführen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu erforschen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_, die von jedem Framework angeboten wird, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

{{Glossary("DSL/Domain_specific_language", "Broadly, (domain-specific languages (DSLs))")}} sind Programmiersprachen, die in spezifischen Bereichen der Softwareentwicklung relevant sind. Im Zusammenhang mit Frameworks sind DSLs Variationen auf JavaScript oder HTML, die es erleichtern, mit diesem Framework zu entwickeln. Entscheidend ist, dass keines der Frameworks _vom Entwickler fordert_, eine spezielle DSL zu verwenden, sie sind aber fast alle mit einer spezifischen DSL im Hinterkopf gestaltet worden. Das Nichtergreifen der bevorzugten DSL eines Frameworks bedeutet, dass Ihnen Funktionen entgehen, die ansonsten Ihr Entwicklererlebnis verbessert hätten.

Sie sollten die Supportmatrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie die Wahl für ein neues Projekt treffen. Nicht kompatible Browserunterstützung kann eine Barriere für Ihre Benutzer darstellen; nicht kompatible DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen darstellen.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Quelle                                                                                     |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind nicht wirklich echte DSLs, aber sie sind nicht-standardsmäßiges HTML, deshalb glauben wir, dass es sich lohnt, sie hervorzuheben.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads eines Projekts überprüfen, um eine Vorstellung von seiner Beliebtheit zu bekommen, aber manchmal ist das Beste, was Sie tun können, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Web

Nehmen Sie nicht nur unser Wort dazu – es gibt Diskussionen darüber im Web. Die Wikimedia Foundation hat sich kürzlich entschieden, Vue für ihre Frontend-Entwicklung zu verwenden, und eine [Anfrage nach Kommentaren (RFC) zur Framework-Adoption](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, hat sich die Zeit genommen, die Bedürfnisse des Wikimedia-Projekts und die Gründe zu erläutern, warum bestimmte Frameworks gute Optionen für das Team waren. Dieses RFC dient als gutes Beispiel für die Art von Recherche, die Sie durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript Survey](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten sowohl über die Nutzung von Frameworks als auch über die Entwicklerhaltung zu ihnen. Derzeit stehen mehrere Jahre an Daten zur Verfügung, mit denen Sie ein Gefühl für die Popularität eines Frameworks bekommen können.

Das Vue-Team hat [Vue umfassend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). In diesem Vergleich kann es einige Vorurteile geben (was sie auch beachten), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und wissen, dass Ihr Projekt keinen intensiven client-seitigen JavaScript erfordern wird, könnten Sie eine der folgenden Lösungen für den Webaufbau in Betracht ziehen:

- Ein Content-Management-System
- Server-seitiges Rendering
- Ein statischer Website-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Webinhalte zu erstellen, ohne direkt selbst Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Inhaltsautoren erfordern, die nur begrenzte Coding-Fähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie benötigen jedoch eine erhebliche Einrichtungszeit, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen gewissen Grad an Kontrolle über die endgültige Ausgabe Ihrer Website aufgeben. Wenn beispielsweise Ihr ausgewähltes CMS keine zugänglichen Inhalte standardmäßig erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Server-seitiges Rendering

**Server-seitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _client-seitigem Rendering_, das die häufigste und einfachste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Server-seitiges Rendering ist einfacher auf dem Gerät des Clients, weil Sie nur eine gerenderte HTML-Datei senden, aber es kann im Vergleich zu einer client-seitig gerenderten Anwendung schwieriger einzurichten sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht miteinander verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere „offizielle“ Lösungen des Framework-Erstellers sind.

### Statische Website-Generatoren

{{Glossary("SSG", "Statische Website-Generatoren")}} sind Programme, die alle Webseiten einer Multipage-Website dynamisch generieren — einschließlich aller relevanten CSS- oder JavaScript-Dateien — sodass sie an verschiedenen Orten veröffentlicht werden können. Der Veröffentlichungshost könnte beispielsweise ein GitHub-Pages-Branch, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen dieses Ansatzes, die sich größtenteils auf Leistung (das Gerät Ihres Benutzers baut die Seite nicht mit JavaScript; sie ist bereits fertig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren) beziehen. Diese Websites können immer noch JavaScript dort verwenden, wo sie es benötigen, sind aber nicht davon _abhängig_. Statische Website-Generatoren erfordern Zeit zu lernen, genau wie jedes andere Werkzeug, was eine Barriere für Ihren Entwicklungsprozess sein kann.

Statische Websites können so wenige oder so viele einzigartige Seiten haben, wie Sie möchten. Genau wie Frameworks Ihnen ermöglichen, schnell client-seitige JavaScript-Anwendungen zu schreiben, bieten statische Website-Generatoren Ihnen eine Möglichkeit, schnell HTML-Dateien zu erstellen, die Sie ansonsten einzeln geschrieben hätten. Wie Frameworks ermöglichen es statische Website-Generatoren Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzufügen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Website-Generatoren werden diese Komponenten als **Vorlagen** bezeichnet. Von statischen Website-Generatoren gebaute Webseiten können sogar die Heimat von Framework-Anwendungen sein: Wenn Sie beispielsweise möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Website-Generatoren gibt es schon seit langer Zeit, und sie sind unter ständiger Optimierung und Innovation. Es existieren eine Reihe von Auswahlmöglichkeiten, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologie-Stacks aufbauen und besondere Funktionen bieten. Andere Optionen wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/) verwenden client-seitige Frameworks anstelle von Vorlagen, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Website-Generatoren im Allgemeinen erfahren möchten, werfen Sie einen Blick auf Tatiana Macs [Einsteigertutorial zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel dieser Serie erklären sie, was ein statischer Website-Generator ist und wie er sich auf andere Arten der Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund dafür geboten, warum Sie überhaupt Frameworks verwenden würden, und wie Sie beginnen können, eines auszuwählen, sowie Sie ermutigt, mehr zu lernen und sich eingehend damit zu befassen!

Unser nächster Artikel geht auf eine niedrigere Ebene, indem er die spezifischen Arten von Funktionen betrachtet, die Frameworks bieten, und warum sie auf diese Weise funktionieren.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
