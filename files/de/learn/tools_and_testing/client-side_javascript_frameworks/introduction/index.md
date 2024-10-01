---
title: Einführung in clientseitige Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir beginnen unseren Überblick über Frameworks mit einer allgemeinen Einführung in das Thema. Wir werfen einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten. Wir betrachten, wie man anfängt, ein Framework auszuwählen, das man lernen möchte, und welche Alternativen es zu clientseitigen Frameworks gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie clientseitige JavaScript-Frameworks entstanden sind, welche Probleme sie lösen, welche Alternativen es gibt und wie man eines auswählt.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte

Als JavaScript 1996 debütierte, brachte es gelegentliche Interaktivität und Spannung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Popularität von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, mit denen sie konfrontiert waren, und bündelten sie in wiederverwendbaren Paketen, die als **Bibliotheken** bezeichnet werden, damit sie ihre Lösungen mit anderen teilen konnten. Dieses gemeinsame Ökosystem von Bibliotheken trug zur Gestaltung des Wachstums des Webs bei.

Heute ist JavaScript ein wesentlicher Bestandteil des Webs, [das auf 98% aller Websites verwendet wird](https://w3techs.com/technologies/details/cp-javascript), und das Web ist ein wesentlicher Teil des modernen Lebens. Benutzer schreiben Texte, verwalten ihre Budgets, streamen Musik, schauen Filme und kommunizieren mit anderen über große Entfernungen hinweg sofort, sei es mit Text, Audio oder Video-Chats. Das Web ermöglicht Dinge, die früher nur in nativen Anwendungen auf unseren Computern möglich waren. Diese modernen, komplexen, interaktiven Websites werden oft als **Webanwendungen** bezeichnet.

Der Aufstieg moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische, interaktive Anwendungen zu bauen. Ein **Framework** ist eine Bibliothek, die Meinungen darüber hat, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersagbarkeit und Homogenität in einer Anwendung; Vorhersagbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersagbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software unerlässlich.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – darunter viele der Websites, die Sie wahrscheinlich täglich nutzen. Die MDN Web Docs, die Sie gerade lesen, verwenden das React/ReactDOM-Framework, um ihr Frontend zu betreiben.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen vier" als die folgenden.

### Ember

[Ember](https://emberjs.com/) wurde ursprünglich im Dezember 2011 als Fortsetzung der Arbeit gestartet, die im [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt begann. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine erhebliche Popularität aufgrund seiner Stabilität, der Unterstützung der Community und einiger cleverer Codierungsprinzipien.

[Starten Sie mit Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von dem Angular Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neuschreibung des gleichen Teams, das [AngularJS](https://angularjs.org/) gebaut hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Bauzeit, transparent für Entwickler, übersetzt der Compiler des Frameworks die Vorlagen in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

[Starten Sie mit Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

Nach der Arbeit an und den Lehren aus dem ursprünglichen [AngularJS](https://angularjs.org/) Projekt veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen vier, hat jedoch kürzlich einen Popularitätsschub erfahren.

Vue, wie [AngularJS](https://angularjs.org/), erweitert HTML mit etwas eigenem Code. Abgesehen davon stützt es sich hauptsächlich auf moderne, standardmäßige JavaScript.

[Starten Sie mit Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es intern bereits viele seiner Probleme mit React gelöst. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen, usw.

Da React und ReactDOM oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul lesen, werden wir mit dieser umgangssprachlichen Definition arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

[Starten Sie mit React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Entstehung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis fühlten, sie zu erstellen. Die Erkundung des Warums erfordert zuerst die Untersuchung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine gängige Art von Anwendung: Einen Aufgabenlisten-Ersteller, den wir in den nächsten Kapiteln mit verschiedenen Frameworks implementieren werden. Diese Anwendung sollte Benutzern ermöglichen, Dinge wie das Rendern einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies zuverlässig tun, während sie die der Anwendung zugrunde liegenden Daten verfolgt und aktualisiert. In der Softwareentwicklung sind diese zugrunde liegenden Daten als Zustand bekannt.

Jedes unserer Ziele ist theoretisch in Isolation einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können zu einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer _alle_ diese Dinge über den Browser ermöglichen muss, beginnen einige Risse zu zeigen. **Das eigentliche Problem ist dies: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche aktualisieren, um sie anzupassen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Feature unserer Aufgabenlisten-App ansehen: das Rendern einer Liste von Aufgaben.

## Die Weitschweifigkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur passenden Zeit im Browser zu rendern, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Array von Objekten, das so strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir diese Aufgaben den Benutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-`<li>`-Element innerhalb eines unsortierten Listenelements (ein `<ul>`). Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die [`document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode, um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die benötigten Eigenschaften und Kindelemente zu erzeugen.

Das vorherige Snippet verweist auf eine weitere Erstellungsfunktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button tut noch nichts, aber das wird später der Fall sein, wenn wir uns entschließen, unser Lösch-Feature zu implementieren. Der Code, der unsere Elemente auf der Seite rendern wird, könnte etwa so aussehen:

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

Wir haben jetzt fast dreißig Zeilen Code, die _nur_ für die Benutzeroberfläche gedacht sind — _nur_ um etwas im DOM zu rendern — und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Das Arbeiten direkt mit dem DOM, wie in diesem Beispiel, erfordert das Verstehen vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt, wie man ihre Eigenschaften ändert, wie man Elemente ineinander verschachtelt, wie man sie auf die Seite bringt. Keiner dieser Codes befasst sich tatsächlich mit Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Features hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden geschaffen, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um ein besseres _Entwicklererlebnis_ zu bieten. Sie bringen JavaScript keine brandneuen Fähigkeiten; sie geben Ihnen leichteren Zugang zu JavaScripts Fähigkeiten, sodass Sie für das heutige Web bauen können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionsfähige Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Ein anderer Weg, UIs zu bauen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen mehr _deklarativ_ zu schreiben. Das bedeutet, dass Sie Code schreiben können, der beschreibt, wie Ihre Benutzeroberfläche aussehen sollte, und das Framework realisiert es im DOM im Hintergrund.

Der vanilla JavaScript-Ansatz zum Erstellen neuer DOM-Elemente in der Wiederholung war schwer auf einen Blick zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie Vue verwenden könnten, um unsere Aufgabenliste zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-` Attribute hier unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Das Wichtigste dabei ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der vanilla JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben; das Framework wird das für uns auf eine optimierte, effiziente Weise erledigen. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was los ist, wenn sie unserem Projekt beitreten. Vue ist darin nicht allein: Die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch des Einzelnen.

Es ist möglich, Dinge _ähnlich_ wie dieses in vanilla JavaScript zu tun. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die dem letztendlichen Element ähneln würden. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlistenanwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datenaufzeichnungen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Andere Dinge, die Frameworks uns bieten

Schauen wir uns einige der anderen Vorteile an, die Frameworks bieten. Wie wir bereits angedeutet haben, sind die Vorteile von Frameworks in vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Last ab, diese Probleme selbst lösen zu müssen.

### Tooling

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die das Entwicklererlebnis verbessern. Diese Tools erleichtern das Hinzufügen von Funktionen wie Testing (um sicherzustellen, dass Ihre Anwendung sich korrekt verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unser [Client-seitiges Tooling-Überblick](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Code-Chunks, die miteinander kommunizieren können. Der gesamte Code, der zu einer bestimmten Komponente gehört, kann in einer Datei (oder in ein paar speziellen Dateien) gespeichert werden, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen können. In einer vanilla JavaScript-App müssten Sie Ihre eigenen Konventionen erstellen, um dies auf effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie sich selbst überlassen sind, mit dem gesamten Code für einen Teil der Benutzeroberfläche enden, der sich über eine Datei verteilt — oder sogar in einer anderen Datei befindet.

### Routing

Das wichtigste Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk miteinander verlinkter Dokumente. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, den er Ihnen anzeigen kann. Dabei ändert sich die URL in der Adressleiste. Sie können diese neue URL speichern und die Seite später erneut aufrufen oder sie mit anderen teilen, damit sie die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht es Ihnen, vor- und zurück zu navigieren. Dies wird als **Server-seitiges Routing** bezeichnet.

Moderne Webanwendungen rufen in der Regel keine neuen HTML-Dateien ab und rendern sie – sie laden eine einzelne HTML-Hülle und aktualisieren fortlaufend das DOM darin (als **Single Page Apps** oder **SPAs** bezeichnet), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird üblicherweise als _View_ bezeichnet und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genug einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu bringen. Die Menschen sind es gewohnt, zu bestimmten Seiten in einer Anwendung verlinken zu können, vorwärts und rückwärts in ihrem Navigationsverlauf zu reisen, usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfeatures nicht funktionieren. Wenn Routing auf diese Weise von einer Client-Anwendung gehandhabt wird, wird es treffend als **Client-seitiges Routing** bezeichnet.

Es ist _möglich_, einen Router zu erstellen, der die nativen Fähigkeiten von JavaScript und dem Browser nutzt, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Bestandteil des Entwicklungsprozesses machen.

## Zu berücksichtigende Aspekte bei der Verwendung von Frameworks

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Werkzeuge für die jeweilige Aufgabe zu verwenden. JavaScript-Frameworks machen die Frontend-Entwicklung einfach, aber sie sind kein Allheilmittel, das alle Probleme löst. Dieser Abschnitt spricht einige der Dinge an, die Sie bei der Verwendung von Frameworks beachten sollten. Bedenken Sie, dass Sie vielleicht gar kein Framework benötigen — achten Sie darauf, dass Sie nicht nur der Verwendung eines Frameworks wegen verwenden.

### Vertrautheit mit dem Tool

Genauso wie bei vanilla JavaScript benötigen Frameworks Zeit zum Erlernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, vergewissern Sie sich, dass Sie genug Zeit haben, um genügend seiner Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen damit auch vertraut sind.

### Übermäßige Technisierung

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist und diese Seiten wenig oder keine interaktive Fähigkeit haben, kann ein Framework (und all dessen JavaScript) möglicherweise völlig unnötig sein. Dennoch sind Frameworks nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebestand und Abstraktion

Frameworks ermöglichen es Ihnen, mehr deklarativen Code zu schreiben und manchmal _weniger_ Code insgesamt, indem sie die DOM-Interaktionen für Sie, im Hintergrund, handhaben. Diese Abstraktion ist großartig für Ihr Erlebnis als Entwickler, ist aber nicht kostenlos. Um zu übersetzen, was Sie in DOM-Änderungen schreiben, muss ein Framework seinen eigenen Code ausführen, wodurch Ihr endgültiges Softwarestück größer und rechenintensiver zu betreiben wird.

Ein gewisser zusätzlicher Code ist unvermeidlich, und ein Framework, das Baum-Schütteln unterstützt (Entfernung von Code, der nicht tatsächlich in der App während des Build-Prozesses verwendet wird), wird es Ihnen ermöglichen, Ihre Anwendungen klein zu halten, aber dies ist trotzdem ein Faktor, den Sie im Hinterkopf behalten müssen, wenn Sie die Leistung Ihrer App betrachten, insbesondere auf netzwerk- oder speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihr Verhältnis zur Natur des Webs selbst. Egal, wie Sie für das Web entwickeln, das Endergebnis, die Ebene, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Das Schreiben Ihrer gesamten Anwendung in JavaScript kann Sie den Blick für HTML und den Zweck seiner verschiedenen Tags verlieren lassen und dazu führen, dass Sie ein HTML-Dokument produzieren, das nicht semantisch und nicht barrierefrei ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität es ist, eine komplexe Web-App zu machen, ist es einfach, das zu tun. Aber wenn Ihre Prioritäten nicht sorgfältig Leistung und Barrierefreiheit schützen, werden Frameworks Ihre Fragilität, Ihr Aufblähung und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstelle eines robusten, inhaltsorientierten Netzwerks von Dokumenten stellt das Web jetzt oft JavaScript an erste Stelle und Nutzererfahrung an letzte.

## Barrierefreiheit in einem Framework-gesteuerten Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Barrierefreiheit sprechen. Benutzeroberflächen barrierefrei zu machen, erfordert immer einige Überlegungen und Anstrengungen, und Frameworks können diesen Prozess komplizieren. Sie müssen häufig erweiterte Framework-APIs verwenden, um auf native Browser-Funktionen wie ARIA [Live-Regio](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)n oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist das clientseitige Routing, wie zuvor erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersagbare Ergebnisse. Der Browser weiß, dass er den Fokus auf die Spitze der Seite setzen muss, und Hilfstechniken werden den Titel der Seite ankündigen. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Arbeit investiert, um JavaScript zu schreiben, das diese Features nachbildet, und selbst dann hat es noch kein Framework perfekt gemacht.

Das Ergebnis ist, dass Sie die Barrierefreiheit von Anfang an in _jedem_ Webprojekt berücksichtigen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, mit größerer Wahrscheinlichkeit an schweren Barrierefreiheitsproblemen leiden, wenn Sie es nicht tun.

## Wie wählt man ein Framework?

Jedes der in diesem Modul behandelten Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes wird regelmäßig verbessert oder verändert und hat seine Vor- und Nachteile. Die Auswahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigenen Nachforschungen anstellen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, haben wir einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifische Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_ jedes Frameworks und der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Allgemein sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Entscheidend ist, dass keines der Frameworks erfordert\_, dass ein Entwickler eine spezifische DSL benutzt, aber sie wurden fast alle mit einer bevorzugten DSL im Hinterkopf entwickelt. Wenn Sie sich entscheiden, nicht die bevorzugte DSL eines Frameworks zu verwenden, werden Ihnen Features fehlen, die sonst Ihr Entwicklererlebnis verbessern würden.

Sie sollten die Support-Matrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Fehlende Browserunterstützung kann ein Hindernis für Ihre Benutzer sein; fehlende DSL-Unterstützung kann ein Hindernis für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                             |
| --------- | ----------------------------------- | -------------- | ------------------------ | --------------------------------------------------------------------------------- |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Doks](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Doks](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Doks](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Doks](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind nicht-standardmäßiges HTML, daher glauben wir, dass sie es wert sind, hervorgehoben zu werden.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne eines Projekts oder die wöchentlichen npm-Downloads überprüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, was man tun kann, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Web

Vertrauen Sie nicht nur auf unser Wort in dieser Angelegenheit — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation entschied kürzlich, Vue für ihr Frontend zu nutzen und veröffentlichte ein [Request for Comments (RFC) zur Framework-Übernahme](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts zu skizzieren und warum bestimmte Frameworks für das Team gute Wahlmöglichkeiten waren. Dieses RFC dient als großartiges Beispiel für die Art der Forschung, die Sie selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele Themen rund um JavaScript, einschließlich Daten über die Nutzung von Frameworks und die Einstellung der Entwickler dazu. Derzeit sind mehrere Jahre an Daten verfügbar, die Ihnen ein Gefühl für die Popularität eines Frameworks geben.

Das Vue-Team hat [Vue umfangreich mit anderen populären Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es kann einige Vorurteile in diesem Vergleich geben (was sie anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen und wissen, dass Ihr Projekt keine intensive clientseitige JavaScript-Nutzung erfordert, könnten Sie zu einer Handvoll anderer Lösungen für den Aufbau des Webs greifen:

- Ein Content Management System
- Server-seitiges Rendering
- Ein statischer Website-Generator

### Content Management Systeme

**Content Management Systeme** (**CMSes**) sind alle Tools, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Content-Autoren erfordern, die nur begrenzte Codierfähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Zeit, um sie einzurichten, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen Teil der Kontrolle über das endgültige Ergebnis Ihrer Website aufgeben müssen. Zum Beispiel: Wenn Ihr gewähltes CMS nicht standardmäßig zugängliche Inhalte erstellt, ist es oft schwierig, das zu verbessern.

Einige beliebte CMS-Systeme sind [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Server-seitiges Rendering

**Server-seitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, der häufigsten und einfachsten Möglichkeit, eine JavaScript-Anwendung zu erstellen. Server-seitiges Rendering ist für das Gerät des Clients einfacher, da Sie ihm nur eine gerenderte HTML-Datei senden, aber es kann im Vergleich zu einer clientseitig gerenderten Anwendung schwieriger einzurichten sein.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl das serverseitige Rendering als auch das clientseitige Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue an (ja, es ist verwirrend, und nein, diese Projekte sind nicht miteinander verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere "offizielle" Lösungen sind, die vom Ersteller des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Statische Site-Generatoren")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch generieren – einschließlich aller relevanten CSS oder JavaScript – damit diese an beliebigen Orten veröffentlicht werden können. Der Veröffentlichungsanbieter könnte ein GitHub-Pages-Zweig, eine Netlify-Instanz oder jeder private Server sein, den Sie auswählen, zum Beispiel. Es gibt eine Reihe von Vorteilen dieses Ansatzes, hauptsächlich in Bezug auf Leistung (das Gerät Ihres Benutzers baut die Seite nicht mit JavaScript; sie ist bereits fertig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Sites können JavaScript dort verwenden, wo sie es benötigen, aber sie sind nicht _davon abhängig_. Statische Site-Generatoren benötigen Zeit zum Lernen, wie jedes andere Werkzeug auch, das ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Sites können so viele oder so wenige einzigartige Seiten haben, wie Sie möchten. So wie Frameworks es Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, bieten statische Site-Generatoren Ihnen eine Möglichkeit, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen es statische Site-Generatoren Entwicklern, Komponenten, die gängige Teile Ihrer Webseiten definieren, zu schreiben und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext statischer Site-Generatoren werden diese Komponenten als **Vorlagen** bezeichnet. Von statischen Site-Generatoren erstellte Webseiten können sogar Heimat für Framework-Anwendungen sein: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Site-Generatoren gibt es schon seit geraumer Zeit, und sie werden ständig optimiert und innoviert. Es gibt eine Reihe von Auswahlmöglichkeiten, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und unverwechselbare Features bieten. Andere Optionen wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/) verwenden clientseitige Frameworks anstelle von Vorlagen, aber sie generieren ähnliche optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen erfahren möchten, lesen Sie Tatiana Mac's [Einsteigerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber geliefert, warum Sie überhaupt Frameworks verwenden würden, und wie man eines auswählt und Sie dazu gebracht, mehr zu lernen und sich darauf einzulassen.

Unser nächster Artikel geht auf eine tiefergehende Ebene, indem er die spezifischen Arten von Features betrachtet, die Frameworks normalerweise bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
