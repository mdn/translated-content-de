---
title: Einführung in Client-seitige Frameworks
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über diesen Bereich, betrachten eine kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man beginnt, eine Wahl zum Erlernen eines Frameworks zu treffen, und welche Alternativen es zu Client-seitigen Frameworks gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Drittanbieter-Code ist und wie Client-seitige JavaScript-Frameworks entstanden sind.</li>
          <li>Welche Probleme Frameworks lösen, welche Alternativen es gibt und wie man eines auswählt.</li>
          <li>Der Unterschied zwischen Bibliotheken und Frameworks.</li>
          <li>Wann Frameworks verwendet werden sollten und wann nicht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Entstehung von Bibliotheken und Frameworks

Als JavaScript 1996 debütierte, fügte es der bis dahin aus statischen Dokumenten bestehenden Web-Welt gelegentliche Interaktivität und Aufregung hinzu. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Popularität von JavaScript stieg stetig. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, denen sie begegneten, und verpackten sie in wiederverwendbare Pakete, genannt **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten, und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Auffassungen darüber bietet, wie Software erstellt wird. Diese Auffassungen ermöglichen Vorhersagbarkeit und Homogenität in einer Anwendung; Vorhersagbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersagbarkeit und Wartbarkeit sind essenziell für die Gesundheit und Langlebigkeit von Software. Die Einführung moderner JavaScript-Frameworks hat es erheblich einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit gelten die "großen vier" als die folgenden.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore) Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Nutzer hat als modernere Alternativen wie React und Vue, genießt jedoch weiterhin eine beträchtliche Popularität aufgrund seiner Stabilität, Community-Unterstützung und einiger cleverer Codierungsprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von der Angular-Gruppe bei Google und einer Community von Einzelpersonen und Unternehmen geleitet wird. Es ist eine komplette Neufassung des gleichen Teams, das [AngularJS](https://angularjs.org/) geschaffen hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, welches deklarative HTML-Vorlagen verwendet. Zur Buildzeit übersetzt der Compiler des Frameworks, für Entwickler transparent, die Vorlagen in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

### Vue

Nachdem er an dem ursprünglichen [AngularJS](https://angularjs.org/) Projekt gearbeitet und davon gelernt hatte, veröffentlichte Evan You 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, hat aber kürzlich einen Popularitätsanstieg erfahren.

Vue, ähnlich wie [AngularJS](https://angularjs.org/), erweitert HTML um eigenen Code. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardisiertes JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt verwendete es React bereits, um viele seiner internen Probleme zu lösen. Technisch gesehen ist React _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken zur Erstellung von Anwendungen verwendet — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es, Webanwendungen zu erstellen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durcharbeiten, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Schaffung von Frameworks inspiriert hat, aber nicht unbedingt, _warum_ Entwickler das Bedürfnis empfanden, sie zu erstellen. Die Erforschung des Warum erfordert zunächst eine Untersuchung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine häufige Art von Anwendung: Einen To-Do-Listen-Ersteller, den wir in zukünftigen Kapiteln mit einer Vielzahl von Frameworks implementieren werden. Diese Anwendung sollte Benutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und es muss dies tun, während es zuverlässig die Daten überwacht und aktualisiert, die der Anwendung zugrunde liegen. In der Softwareentwicklung sind diese zugrunde liegenden Daten als Zustand bekannt.

Jedes unserer Ziele ist theoretisch einfach in Isolation. Wir können über die Daten iterieren, um sie zu rendern; wir können ein Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Identifier verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer erlauben muss, _all dies_ im Browser zu tun, beginnen einige Risse sichtbar zu werden. **Das eigentliche Problem ist folgendes: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend anpassen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur _eine_ Funktion unserer To-Do-Listen-App betrachten: das Rendern einer Liste von Aufgaben.

## Die Übersichtlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zum richtigen Zeitpunkt im Browser zu rendern, erfordert überraschend viel Code. Sagen wir, unser Zustand ist ein Array von Objekten, das so strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir unseren Benutzern eine dieser Aufgaben? Wir möchten jede Aufgabe als Listenelement – ein HTML [`<li>`](/de/docs/Web/HTML/Element/li)-Element innerhalb eines ungeordneten Listenelements (einem [`<ul>`](/de/docs/Web/HTML/Element/ul)) darstellen. Wie stellen wir das her? Das könnte ungefähr so aussehen:

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

Hier verwenden wir die [`document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode, um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die Eigenschaften und Kindelemente zu erstellen, die es benötigt.

Das vorhergehende Snippet verweist auf eine weitere Erzeugungsfunktion: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Diese Schaltfläche tut derzeit nichts, aber sie wird es später, sobald wir uns entscheiden, unsere Löschfunktion zu implementieren. Der Code, der unsere Elemente auf der Seite darstellen wird, könnte wie folgt aussehen:

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

Wir haben jetzt fast dreißig Zeilen Code, die sich _nur_ der UI widmen – _nur_ um etwas im DOM zu rendern – und zu keinem Zeitpunkt fügen wir Klassen hinzu, die wir später zum Stylen unserer Listenelemente verwenden könnten!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander schachtelt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt eigentlich Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen ergänzen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit erheblich zu erleichtern — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine völlig neuen Fähigkeiten zu JavaScript; sie geben Ihnen einfacher Zugang zu den Fähigkeiten von JavaScript, sodass Sie für das heutige Web bauen können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die auch Benutzern erlaubt, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die JavaScript-Funktionen, die in diesem Abschnitt verwendet werden:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie erlauben Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework stellt die DOM-Änderungen im Hintergrund her.

Der Ansatz mit Vanilla-JavaScript, neue DOM-Elemente in der Wiederholung zu erstellen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu illustriert der folgende Codeblock, wie Sie Vue verwenden könnten, um unsere Liste von Aufgaben zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieses Snippet reduziert fast dreißig Codezeilen auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-` Attribute hier unbekannt sind, ist das in Ordnung; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Das Wichtige hier ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben; das Framework übernimmt das für uns auf eine optimierte, effiziente Weise. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was passiert, wenn sie unserem Projekt beitreten. Vue ist dabei nicht allein: die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch des Einzelnen.

Ähnliches ist mit Vanilla-JavaScript möglich. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Zeichenketten zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere To-Do-Liste Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Andere Dinge, die Frameworks uns bieten

Schauen wir uns einige der anderen Vorteile an, die von Frameworks angeboten werden. Wie wir zuvor angedeutet haben, sind die Vorteile von Frameworks auch mit Vanilla-JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Belastung ab, diese Probleme selbst lösen zu müssen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge machen es einfach, Dinge wie Tests hinzuzufügen (um sicherzustellen, dass Ihre Anwendung so funktioniert, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr über Web-Tooling-Konzepte erfahren möchten, werfen Sie einen Blick auf unser [Übersicht über Client-seitige Werkzeuge](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview).

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codebrocken, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie hinschauen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihren eigenen Satz von Konventionen erstellen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie auf sich selbst gestellt wären, letztendlich den gesamten Code, der sich auf einen Teil der Benutzeroberfläche bezieht, über eine Datei verstreut haben — oder sogar in einer anderen Datei.

### Routing

Die wichtigste Funktion des Webs besteht darin, dass Benutzer von einer Seite zur nächsten navigieren können – es ist schließlich ein Netzwerk von verlinkten Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, den er Ihnen anzeigt. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später zu der Seite zurückkehren oder sie mit anderen teilen, damit sie die gleiche Seite leicht finden können. Ihr Browser erinnert sich an Ihre Navigation und ermöglicht es Ihnen, vor- und zurückzunavigieren. Dies wird als **Server-seitiges Routing** bezeichnet.

Moderne Webanwendungen rufen in der Regel keine neuen HTML-Dateien ab und rendern sie nicht — sie laden eine einzige HTML-Hülle und aktualisieren fortlaufend das DOM innerhalb dieser (genannt **Single Page Apps** oder **SPAs**) ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Website wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig erfolgt kein Routing.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in die Anwendung zu integrieren. Die Menschen sind es gewohnt, auf spezifische Seiten in einer Anwendung verlinken zu können, in ihrer Navigation vor- und zurückzugehen usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen unterbrochen sind. Wenn Routing von einer Clientanwendung auf diese Weise behandelt wird, wird es treffend **Client-seitiges Routing** genannt.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die beim Einsatz von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein, bedeutet, die am besten geeigneten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks erleichtern die Frontend-Anwendungsentwicklung, sind jedoch kein Allheilmittel, das alle Probleme löst. In diesem Abschnitt geht es um einige der Dinge, die Sie beim Einsatz von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — achten Sie darauf, dass Sie ein Framework nicht nur um seiner selbst willen verwenden.

### Vertrautheit mit dem Werkzeug

Genau wie bei Vanilla-JavaScript erfordern Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie Zeit haben, genug von seinen Funktionen zu lernen, um es für Sie nützlich zu machen, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen ebenfalls damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht erforderlich. Das heißt, Frameworks sind nicht monolithisch, und einige von ihnen eignen sich besser für kleine Projekte als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Code-Umfang und Abstraktion

Frameworks ermöglichen Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie im Hintergrund die DOM-Interaktionen für Sie verwalten. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihr endgültiges Softwareprodukt größer und rechenintensiver zu betreiben macht.

Ein wenig zusätzlicher Code ist unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung jeglichen Codes, der in der App während des Build-Prozesses nicht tatsächlich verwendet wird), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Hinterkopf behalten müssen, wenn Sie die Leistung Ihrer App, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen, betrachten.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Webs. Egal, wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Ihre gesamte Anwendung in JavaScript zu schreiben, kann dazu führen, dass Sie den Blick für HTML und den Zweck seiner verschiedenen Tags verlieren und ein HTML-Dokument produzieren, das nicht-semantisch und nicht-barrierefrei ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne dieses nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und nicht-barrierefrei sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Web-App zu erstellen, ist das einfach zu erreichen. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Barrierefreiheit bewahren, werden Frameworks Ihre Fragilität, Ihren Ballast und Ihre Unzugänglichkeit verstärken. Moderne Entwicklerprioritäten, die durch Frameworks verstärkt werden, haben die Struktur des Webs an vielen Stellen umgekehrt. Statt eines robusten, inhaltsorientierten Netzwerks von Dokumenten, stellt das Web heute oft JavaScript an die erste Stelle und die Benutzererfahrung an die letzte.

## Barrierefreiheit in einem framework-gesteuerten Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und etwas mehr über Barrierefreiheit sprechen. Benutzeroberflächen barrierefrei zu gestalten, erfordert immer einige Überlegungen und Anstrengungen, und Frameworks können diesen Prozess komplizieren. Häufig müssen Sie fortgeschrittene Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokussierungsmanagement zuzugreifen.

In manchen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist im Client-seitigen Routing, wie bereits erwähnt.

Mit traditionellem (Server-seitigem) Routing hat die Navigation im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus an den Anfang der Seite setzen soll, und Unterstützungstechnologien werden den Titel der Seite ankündigen. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Mit Client-seitigem Routing lädt Ihr Browser keine neuen Webseiten, daher weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen soll. Die Autoren von Frameworks haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat es noch kein Framework perfekt geschafft.

Die Quintessenz ist, dass Barrierefreiheit von Beginn eines _jeden_ Web-Projekts an berücksichtigt werden sollte, aber beachten Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher an größeren Barrierefreiheitsproblemen leiden, wenn Sie nicht darauf achten.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes wird regelmäßig verbessert oder geändert, und jedes hat seine Vor- und Nachteile. Die Auswahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Recherche durchführen, um herauszufinden, was Ihren Bedürfnissen entspricht. Dennoch haben wir einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentationen (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browserunterstützung_, die jedes Framework bietet, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Varianten von JavaScript oder HTML, die es einfacher machen, mit diesem Framework zu entwickeln. Wesentlich ist, dass keines der Frameworks einen Entwickler zwingt, eine bestimmte DSL zu verwenden, aber fast alle wurden mit einer speziellen DSL im Kopf entwickelt. Wenn Sie sich entscheiden, die bevorzugte DSL eines Frameworks nicht zu verwenden, verpassen Sie Funktionen, die ansonsten Ihre Entwicklererfahrung verbessern würden.

Sie sollten die Unterstützungsübersicht und die DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Entscheidung für jedes neue Projekt treffen. Nicht übereinstimmende Browserunterstützung kann eine Hürde für Ihre Benutzer sein; nicht übereinstimmende DSL-Unterstützung kann eine Hürde für Sie und Ihr Team sein.

| Framework | Browserunterstützung                | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                             |
| --------- | ----------------------------------- | -------------- | ------------------------ | --------------------------------------------------------------------------------- |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Doku](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Doku](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Doku](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Doku](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, sind aber kein standardmäßiges HTML, daher glauben wir, dass sie eine Hervorhebung wert sind.

### Hat das Framework eine starke Community?

Dies ist vielleicht der schwierigste Messwert, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können ein Projekt nach der Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads prüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbaren Dokumentationen sind.

### Meinungen zum Web

Nehmen Sie nicht nur unser Wort in dieser Angelegenheit — es gibt Diskussionen im ganzen Web. Die Wikimedia Foundation hat sich kürzlich entschieden, Vue für ihre Frontend-Entwicklung zu nutzen, und hat eine [Anfrage für Kommentare (RFC) zur Übernahme von Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor der RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts darzulegen und warum bestimmte Frameworks gute Entscheidungen für das Team waren. Diese RFC dient als großartiges Beispiel für die Art von Forschung, die Sie für sich selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über die Nutzung von Frameworks und die Meinung der Entwickler zu ihnen. Derzeit sind mehrere Jahre an Daten verfügbar, die Ihnen einen Eindruck von der Popularität eines Frameworks vermitteln.

Das Vue-Team hat [Vue umfassend mit anderen populären Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte eine gewisse Voreingenommenheit in diesem Vergleich geben (welche sie bemerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu Client-seitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive Client-seitige JavaScript benötigt, könnten Sie eine der wenigen anderen Lösungen für den Webaufbau in Betracht ziehen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein Generator für statische Webseiten

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Inhalt für das Web zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Inhaltsautoren erfordern, die begrenzte Coding-Fähigkeiten haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Einrichtungszeit, und die Nutzung eines CMS bedeutet, dass Sie zumindest ein gewisses Maß an Kontrolle über die endgültige Ausgabe Ihrer Website aufgeben. Beispielsweise: Wenn Ihr gewähltes CMS standardmäßig keine barrierefreien Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Einzel-Seiten-Anwendung zu rendern. Dies ist das Gegenteil des _Client-seitigen Renderings_, das der häufigste und einfachste Weg ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering ist einfacher für das Gerät des Clients, da Sie nur eine gerenderte HTML-Datei an sie senden, aber es kann schwieriger einzurichten sein als eine Client-seitig gerenderte Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch Client-seitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React an, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte sind nicht miteinander verbunden!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere offizielle Lösungen vom Framework-Maintainer bereitgestellt werden.

### Generatoren für statische Seiten

{{Glossary("SSG", "Generatoren für statische Seiten")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch generieren – einschließlich der relevanten CSS oder JavaScript – damit sie an einer beliebigen Anzahl von Orten veröffentlicht werden können. Der Veröffentlichungs-Host könnte ein GitHub-Pages-Zweig, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen dieses Ansatzes, die sich hauptsächlich um Leistung (das Gerät des Benutzers baut die Seite nicht mit JavaScript; sie ist bereits vollständig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren) drehen. Diese Seiten können weiterhin JavaScript verwenden, wo sie es benötigen, aber sie sind nicht _abhängig_ davon. Statische Seite-Generatoren erfordern Zeit zum Lernen, ebenso wie jedes andere Werkzeug, was eine Barriere für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so wenige oder so viele einzigartige Seiten haben, wie Sie möchten. Genauso wie Frameworks Ihnen ermöglichen, schnell Client-seitige JavaScript-Anwendungen zu schreiben, ermöglichen Ihnen statische Seite-Generatoren, schnell HTML-Dateien zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen es statische Seite-Generatoren Entwicklern, Komponenten zu schreiben, die gemeinsame Bestandteile Ihrer Webseiten definieren, und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Seite-Generatoren werden diese Komponenten **Vorlagen** genannt. Webseiten, die von statischen Seite-Generatoren erstellt wurden, können sogar Heimat für Framework-Anwendungen sein: Wenn Sie beispielsweise eine bestimmte Seite Ihrer statisch generierten Website wollen, um eine React-Anwendung zu starten, wenn Ihr Benutzer sie besucht, können Sie das.

Statische Seite-Generatoren gibt es schon eine ganze Weile und sie sind konstanten Optimierungen und Innovationen unterworfen. Eine Reihe von Optionen existiert, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestacks aufbauen und unterschiedliche Features bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden Client-seitige Frameworks anstelle von Vorlagen, erzeugen jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Seite-Generatoren im Allgemeinen erfahren möchten, schauen Sie sich den Einsteigerleitfaden zu Eleventy von Tatiana Mac an, [Beginner's guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Serie erklären sie, was ein statischer Seite-Generator ist und wie er sich auf andere Möglichkeiten der Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen bisher keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden würden und wie Sie eines auswählen, und Sie dazu inspiriert, mehr zu lernen und sich einzubringen!

Unser nächster Artikel geht auf eine niedrigere Ebene und befasst sich mit den spezifischen Arten von Funktionen, die Frameworks in der Regel bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
