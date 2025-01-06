---
title: Einführung in client-seitige Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man beginnt, darüber nachzudenken, ein Framework zu wählen, das man lernen möchte, und welche Alternativen es zu client-seitigen Frameworks gibt.

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

## Das Aufkommen von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, fügte es dem Internet, das bis dahin aus statischen Dokumenten bestand, gelegentliche Interaktivität und Aufregung hinzu. Das Internet wurde nicht mehr nur ein Ort, um Dinge zu _lesen_, sondern um Dinge zu _tun_. Die Popularität von JavaScript nahm kontinuierlich zu. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, denen sie begegneten, und verpackten sie in wiederverwendbare Pakete, genannt **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Internets zu prägen und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Vorschläge dazu macht, wie Software erstellt wird. Diese Vorschläge ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software unerlässlich. Der Aufstieg moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochgradig dynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Internet an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen vier" als die folgenden.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeit im [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine beträchtliche Beliebtheit aufgrund seiner Stabilität, Community-Unterstützung und einiger cleverer Programmierprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungsframework, das von dem Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung von dem gleichen Team, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde am 14. September 2016 offiziell veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit, ohne dass die Entwickler dies bemerken, übersetzt der Compiler des Frameworks die Templates in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

### Vue

Nachdem er an dem ursprünglichen [AngularJS](https://angularjs.org/) Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You im Jahr 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, erfreut sich jedoch eines kürzlichen Beliebtheitsschubs.

Vue erweitert, wie [AngularJS](https://angularjs.org/), HTML um einige eigene Codes. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es bereits intern viele seiner Probleme mit React gelöst. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu entwickeln, usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durchlesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung diskutiert, die die Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Um das warum zu erforschen, muss man zuerst die Herausforderungen der Softwareentwicklung untersuchen.

Betrachten Sie eine gängige Art von Anwendung: Ein Aufgabenersteller, den wir in zukünftigen Kapiteln unter Verwendung verschiedener Frameworks umsetzen werden. Diese Anwendung sollte es Benutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies tun, während sie zuverlässig die Daten, die der Anwendung zugrunde liegen, verfolgt und aktualisiert. In der Softwareentwicklung sind diese zugrunde liegenden Daten als Zustand bekannt.

Jedes unserer Ziele ist theoretisch isoliert betrachtet einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können einem Objekt eine neue Aufgabe hinzufügen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir daran denken, dass die Anwendung es dem Benutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, beginnen einige Probleme zu erscheinen. **Das eigentliche Problem ist: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die UI entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _eine_ Funktion unserer Aufgabenlisten-App ansehen: das Rendern einer Liste von Aufgaben.

## Die Umständlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zu gegebener Zeit im Browser zu rendern, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Array von Objekten, das so strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir unseren Benutzern eine dieser Aufgaben? Wir möchten jede Aufgabe als Listenelement – ein HTML [`<li>`](/de/docs/Web/HTML/Element/li)-Element innerhalb eines ungeordneten Listenelements (eines [`<ul>`](/de/docs/Web/HTML/Element/ul)) darstellen. Wie machen wir das? Das könnte ungefähr so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die benötigten Eigenschaften und Kindelemente zu erstellen.

Das vorhergehende Snippet verweist auf eine weitere Build-Funktion: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Diese Schaltfläche macht noch nichts, aber sie wird es später, wenn wir entscheiden, unsere Löschfunktion zu implementieren. Der Code, der unsere Elemente auf der Seite rendern wird, könnte ungefähr so aussehen:

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

Wir haben jetzt fast dreißig Codezeilen, die _nur_ der UI gewidmet sind – _nur_, um etwas im DOM zu rendern – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert, viele Dinge über das DOM zu verstehen: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander einfügt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt Benutzerinteraktionen oder bezieht das Hinzufügen oder Löschen einer Aufgabe ein. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere UI zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit viel einfacher zu machen – sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie geben Ihnen einfacheren Zugang zu den Fähigkeiten von JavaScript, sodass Sie für das heutige Internet entwickeln können.

Wenn Sie die Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ausprobieren, die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen deklarativer zu schreiben. Das heißt, sie ermöglichen Ihnen, Code zu schreiben, der beschreibt, wie Ihr UI aussehen soll, und das Framework sorgt im Hintergrund dafür, dass es im DOM geschieht.

Der Ansatz, mit einfachem JavaScript neue DOM-Elemente wiederholt zu erstellen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu illustriert der folgende Codeblock, wie man Vue verwenden könnte, um unsere Liste von Aufgaben zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Codezeilen auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier Ihnen unbekannt sind, ist das in Ordnung; Sie lernen später im Modul über Vue-spezifische Syntax. Das Wichtigste hier ist, dass dieser Code wie das UI aussieht, das er darstellt, während der einfache JavaScript-Code das nicht tut.

Dank Vue mussten wir unsere eigenen Funktionen zum Erstellen der UI nicht schreiben; das Framework übernimmt das für uns in einer optimierten, effizienten Weise. Unsere einzige Rolle hier war, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die Vue kennen, können schnell verstehen, was passiert, wenn sie unserem Projekt beitreten. Vue ist dabei nicht allein: Die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch des Einzelnen.

Ähnliches ist auch mit einfachem JavaScript möglich. [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte für etwas so Einfaches wie unsere Aufgabenlisten-Anwendung nützlich sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Vorteile von Frameworks

Schauen wir uns einige der anderen Vorteile an, die von Frameworks angeboten werden. Wie wir bereits erwähnt haben, sind die Vorteile von Frameworks mit einfachem JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Last ab, diese Probleme selbst zu lösen.

### Tooling

Da jedes der Frameworks in diesem Modul über eine große, aktive Community verfügt, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge machen es einfach, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung sich so verhält, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unsere [Übersicht über client-seitige Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler dazu, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codebausteine, die miteinander kommunizieren können. Der gesamte Code, der mit einer gegebenen Komponente zusammenhängt, kann in einer Datei (oder ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen können. In einer JavaScript-App mit einfachem Vanilla-JavaScript müssten Sie Ihr eigenes Set von Konventionen erstellen, um dies auf effiziente und skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, sich selbst überlassen, am Ende über den gesamten Code hinweg verstreute Teile erstellen, die zu einem UI-Teil gehören – oder in einer ganz anderen Datei.

### Routing

Das wesentlichste Merkmal des Internets ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von verknüpften Dokumenten. Wenn Sie auf dieser Webseite einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, den er Ihnen anzeigt. Währenddessen ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkehren oder sie mit anderen teilen, damit diese die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht es Ihnen, vor- und zurückzublättern. Dies wird als **server-seitiges Routing** bezeichnet.

Moderne Webanwendungen laden typischerweise keine neuen HTML-Dateien – sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bekannt als **Single-Page-Apps** oder **SPA**), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jedes neue Pseudo-Webseiten wird in der Regel als _View_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und viele einzigartige Views rendert, ist es wichtig, die Routing-Funktionalität in Ihre Anwendung zu integrieren. Die Leute sind es gewohnt, zu spezifischen Seiten in einer Anwendung zu verlinken, in ihrem Navigationsverlauf vor- und zurückzublättern, usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen ausgefallen sind. Wenn das Routing auf diese Weise von einer Client-Anwendung gehandhabt wird, wird es treffend als **client-seitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein, bedeutet, die am besten geeigneten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks machen die Entwicklung von Front-End-Anwendungen einfach, aber sie sind kein Allheilmittel, das alle Probleme löst. Dieser Abschnitt spricht über einige der Dinge, die Sie bei der Verwendung von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, dass Sie nicht einfach ein Framework verwenden, nur weil Sie es können.

### Vertrautheit mit dem Werkzeug

Wie schlichtes JavaScript brauchen Frameworks Zeit, um gelernt zu werden, und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genügend seiner Funktionen zu erlernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen sich ebenfalls damit auskennen.

### Überzug

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist und diese Seiten wenig oder keine interaktive Funktionalität aufweisen, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Gesagt sei, dass Frameworks nicht monolithisch sind und einige besser für kleine Projekte geeignet sind als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Abschnitte einer Webseite interaktiv zu machen.

### Größerer Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal insgesamt _weniger_ Code –, indem sie die DOM-Interaktionen für Sie im Hintergrund erledigen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihre endgültige Software größer und rechnerisch aufwendiger macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung von nicht-genutztem Code während des Build-Prozesses), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Hinblick auf die Performance Ihrer App im Hinterkopf behalten sollten, besonders auf Geräten mit eingeschränkter Netzwerk-/Speicherkapazität, wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Internets. Egal, wie Sie für das Internet entwickeln, das Endergebnis, die Ebene, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Ihre gesamte Anwendung in JavaScript zu schreiben, kann dazu führen, dass Sie HTML und den Zweck seiner verschiedenen Tags aus den Augen verlieren und ein HTML-Dokument erzeugen, das un-semantic und un-zugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne dieses nicht funktioniert.

Frameworks sind nicht die Ursache unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und un-zugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Web-App zu erstellen, ist das einfach zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Performance und Zugänglichkeit schützen, werden Frameworks Ihre Fragilität, Ihre Aufblähung und Ihre Un-Zugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Internets an vielen Stellen umgekehrt. Anstelle eines robusten, inhaltszentrierten Netzwerks von Dokumenten stellt das Internet nun oft JavaScript in den Vordergrund und die Benutzererfahrung in den Hintergrund.

## Zugänglichkeit auf einem von Frameworks getriebenen Internet

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein bisschen mehr über Zugänglichkeit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer einige Gedanken und Anstrengungen, und Frameworks können diesen Prozess erschweren. Sie müssen oft fortgeschrittene Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) oder Fokusverwaltung zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Zugangsbarrieren, die bei traditionellen Websites nicht existieren. Das größte Beispiel dafür ist das client-seitige Routing, wie bereits erwähnt.

Beim traditionellen (server-seitigen) Routing hat das Navigieren im Internet vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den Anfang der Seite setzen soll, und unterstützende Technologien werden den Titel der Seite ansagen. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Mit client-seitigem Routing lädt Ihr Browser keine neuen Webseiten, so dass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ansagen sollte. Framework-Autoren haben immense Zeit und Arbeit darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat kein Framework das perfekt geschafft.

Das Fazit ist, dass Sie die Zugänglichkeit von Anfang an bei _jedem_ Webprojekt berücksichtigen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter großen Zugänglichkeitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder ändert sich regelmäßig, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Forschung betreiben, um herauszufinden, was Ihren Bedürfnissen entspricht. Dennoch haben wir einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) zur Verfügung?

Die Tabelle in diesem Abschnitt bietet eine kurze Zusammenfassung der aktuellen _Browserunterstützung_, die von jedem Framework angeboten wird, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Großen und Ganzen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in spezifischen Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Modifikationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Entscheidend ist, dass keines der Frameworks _erfordert_, dass ein Entwickler eine spezielle DSL verwendet, aber sie wurden fast alle mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, die bevorzugte DSL eines Frameworks nicht zu verwenden, werden Ihnen Features entgehen, die ansonsten Ihre Entwicklererfahrung verbessern würden.

Sie sollten ernsthaft die Unterstützungs-Matrix und DSLs eines Frameworks in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Nicht passende Browserunterstützung kann ein Hindernis für Ihre Benutzer sein; nicht passende DSL-Unterstützung kann ein Hindernis für Sie und Ihre Teamkollegen sein.

| Framework | Browserunterstützung                | Bevorzugte DSL | Unterstützte DSLs        | Zitierung                                                                                  |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> Die DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind nicht wirklich echte DSLs, aber sie sind nicht-standardisiertes HTML, also glauben wir, dass es sich lohnt, sie hervorzuheben.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können sich die Anzahl der Sterne eines Projekts auf GitHub oder die wöchentlichen npm-Downloads ansehen, um eine Vorstellung von dessen Beliebtheit zu bekommen, aber manchmal ist das Beste, was Sie tun können, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Internet

Vertrauen Sie nicht nur auf unser Wort zu diesem Thema – es gibt Diskussionen auf der ganzen Welt. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Front-End zu verwenden, und eine [Anfrage zur Kommentierung (RFC) zur Einführung eines Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts darzulegen und warum bestimmte Frameworks gute Wahlmöglichkeiten für das Team waren. Dieses RFC dient als großartiges Beispiel für die Art von Forschung, die Sie für sich selbst leisten sollten, wenn Sie planen, ein Front-End-Framework zu verwenden.

Die [Umfrage "State of JavaScript"](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie umfasst viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über sowohl die Verwendung von Frameworks als auch Entwicklermeinungen dazu. Derzeit gibt es mehrere Jahre an Daten, die es Ihnen ermöglichen, ein Gefühl für die Beliebtheit eines Frameworks zu bekommen.

Das Vue-Team hat [Vue erschöpfend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte einige Voreingenommenheiten in diesem Vergleich geben (die sie anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu client-seitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive client-seitige JavaScript-Anwendung erfordert, könnten Sie auf einige andere Lösungen für den Aufbau des Internets zurückgreifen:

- Ein Content-Management-System
- Server-seitiges Rendering
- Einen statischen Seitengenerator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die einem Benutzer erlauben, Inhalte für das Web zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Beiträge von Inhaltserstellern erfordern, die nur begrenzte Codierfähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Zeit zum Einrichten, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen Teil der Kontrolle über das endgültige Ergebnis Ihrer Webseite abtreten. Wenn Ihr gewähltes CMS beispielsweise nicht standardmäßig zugänglich ist, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Server-seitiges Rendering

**Server-seitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es Aufgabe des _Servers_ ist, eine einseitige Anwendung zu rendern. Dies ist das Gegenteil des _client-seitigen Renderings_, das die gebräuchlichste und direkteste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Das server-seitige Rendering ist auf dem Gerät des Clienten einfacher, da Sie ihnen nur eine gerenderte HTML-Datei senden, aber es kann schwierig einzurichten sein, verglichen mit einer client-seitig gerenderten Anwendung.

Alle in diesem Modul besprochenen Frameworks unterstützen sowohl das server-seitige als auch das client-seitige Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React an, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere "offizielle" Lösungen sind, die vom Maintainer des Frameworks bereitgestellt werden.

### Statische Seitengeneratoren

{{Glossary("SSG", "Statische Seitengeneratoren")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch erzeugen – einschließlich aller relevanten CSS- oder JavaScript-Dateien – sodass sie an beliebigen Orten veröffentlicht werden können. Der veröffentlichende Host könnte ein GitHub Pages Branch, eine Netlify-Instanz oder jeder private Server Ihrer Wahl sein, zum Beispiel. Diese Vorgehensweise bietet einige Vorteile, insbesondere in Bezug auf die Leistung (das Gerät Ihres Benutzers erstellt die Seite nicht mit JavaScript; sie ist bereits komplett) und Sicherheit (statische Seiten haben weniger Angriffsflächen). Diese Seiten können JavaScript dort verwenden, wo es nötig ist, sind aber nicht _darauf_ angewiesen. Statische Seitengeneratoren benötigen Zeit, um gelernt zu werden, wie jedes andere Werkzeug auch, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so wenige oder so viele einzigartige Seiten haben, wie Sie möchten. Genauso wie Frameworks Ihnen ermöglichen, schnell client-seitige JavaScript-Anwendungen zu schreiben, ermöglichen statische Seitengeneratoren eine Möglichkeit, schnell HTML-Dateien zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen statische Seitengeneratoren Entwicklern, Komponenten zu schreiben, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzufügen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Seitengeneratoren werden diese Komponenten **Templates** genannt. Von statische Seitengeneratoren erstellte Webseiten können sogar Zuhause für Framework-Anwendungen sein: Wenn Sie beispielsweise möchten, dass eine spezifische Seite Ihrer zunächst statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Seitengeneratoren gibt es schon seit langem, und sie werden ständig optimiert und weiterentwickelt. Es gibt eine Vielzahl von Auswahlmöglichkeiten, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), welche auf verschiedenen Technologiestacks aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden client-seitige Frameworks anstelle von Templates, generieren aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Seitengeneratoren im Allgemeinen erfahren möchten, schauen Sie sich Tatiana Macs [Einstiegs-Leitfaden für Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Seitengenerator ist und wie er sich zu anderen Mitteln der Veröffentlichung von Webinhalten verhält.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen bisher keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden würden und wie Sie eines auswählen, und Sie davon begeistert gemacht, mehr zu lernen und sich damit zu beschäftigen!

Unser nächster Artikel geht auf eine tiefere Ebene ein und betrachtet die spezifischen Arten von Funktionen, die Frameworks tendenziell bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
