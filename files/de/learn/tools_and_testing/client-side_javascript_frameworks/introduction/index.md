---
title: Einführung in client-seitige Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über den Bereich, werfen einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie Sie beginnen können, über die Auswahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen es zu client-seitigen Frameworks gibt.

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
        Zu verstehen, wie client-seitige JavaScript-Frameworks entstanden sind, welche Probleme sie lösen, welche Alternativen es gibt und wie man ein geeignetes auswählt.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte

Als JavaScript 1996 debütierte, fügte es gelegentliche Interaktivität und Spannung zu einem Web hinzu, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur ein Ort, um _Dinge zu lesen_, sondern um _Dinge zu tun_. Die Beliebtheit von JavaScript stieg stetig. Entwickler, die mit JavaScript arbeiteten, entwickelten Werkzeuge, um die Probleme zu lösen, denen sie begegneten, und fassten sie in wiederverwendbare Pakete namens **Bibliotheken** zusammen, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten.

JavaScript ist jetzt ein wesentlicher Bestandteil des Webs, [auf 98 % aller Websites verwendet](https://w3techs.com/technologies/details/cp-javascript), und das Web ist ein wesentlicher Bestandteil des modernen Lebens. Nutzer verfassen Dokumente, verwalten ihre Budgets, streamen Musik, schauen Filme und kommunizieren sofort über große Distanzen, mit Text, Audio oder Video. Das Web ermöglicht uns Dinge, die früher nur in nativen Anwendungen möglich waren, die auf unseren Computern installiert waren. Diese modernen, komplexen und interaktiven Websites werden oft als **Webanwendungen** bezeichnet.

Die Einführung moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische und interaktive Anwendungen zu erstellen. Ein **Framework** ist eine Bibliothek, die Meinungen darüber bietet, wie Software erstellt wird. Diese Meinungen ermöglichen Vorhersagbarkeit und Homogenität in einer Anwendung; Vorhersagbarkeit ermöglicht es, dass die Software zu einer enormen Größe skaliert werden kann und dennoch wartbar bleibt; Vorhersagbarkeit und Wartbarkeit sind entscheidend für die Gesundheit und Langlebigkeit von Software.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software auf dem modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen. MDN Web Docs, auf denen Sie dies gerade lesen, verwendet das React/ReactDOM-Framework für die Benutzeroberfläche.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Nutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine beträchtliche Beliebtheit aufgrund seiner Stabilität, Community-Unterstützung und einiger cleverer Programmierungsprinzipien.

[Lernen Sie Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von Googles Angular Team und einer Gemeinschaft von Personen und Unternehmen geleitet wird. Es ist eine vollständige Neuentwicklung des gleichen Teams, das [AngularJS](https://angularjs.org/) erstellt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit, transparent für Entwickler, übersetzt der Compiler des Frameworks die Vorlagen zu optimierten JavaScript-Instruktionen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer anschauen werden.

[Lernen Sie Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/) Projekt gearbeitet und von ihm gelernt hatte, veröffentlichte Evan You 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, hat jedoch in letzter Zeit eine Beliebtheitsspitze erlebt.

Vue erweitert, wie [AngularJS](https://angularjs.org/), HTML mit einem Teil seines eigenen Codes. Ansonsten stützt es sich hauptsächlich auf modernes, standardgerechtes JavaScript.

[Lernen Sie Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte Facebook React bereits intern eingesetzt, um viele seiner Probleme zu lösen. Technisch gesehen ist React _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als ein JavaScript-Framework verstanden. Wenn Sie dieses Modul lesen, arbeiten wir mit diesem umgangssprachlichen Verständnis.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

[Lernen Sie React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die zur Schaffung von Frameworks führte, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu schaffen. Das Erkunden des Warum erfordert zunächst die Untersuchung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine Art von Anwendung, die wir in zukünftigen Kapiteln mithilfe verschiedener Frameworks implementieren werden: einen To-do-Listen-Ersteller. Diese Anwendung sollte es den Nutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies tun, während sie zuverlässig die Daten verfolgt und aktualisiert, die der Anwendung zugrunde liegen. In der Softwareentwicklung sind diese zugrunde liegenden Daten als Zustand (engl. state) bekannt.

Jedes unserer Ziele scheint in Isolation theoretisch einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können ein Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir daran denken, dass die Anwendung dem Nutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, beginnen einige Risse zu zeigen. **Das eigentliche Problem ist: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche aktualisieren, um sie anzupassen.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Merkmal unserer To-do-Listen-App ansehen: das Rendern einer Liste von Aufgaben.

## Die Umständlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser darzustellen, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Array von Objekten, das so strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir eine dieser Aufgaben unseren Nutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-`<li>`-Element in einem ungeordneten Listen-Element (einem `<ul>`). Wie erstellen wir es? Das könnte so aussehen:

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

Das vorherige Snippet verweist auf eine weitere Erstellungsmethode: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster, das wir zum Erstellen eines Listenelements verwendet haben:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button macht noch nichts, aber er wird später funktionieren, sobald wir unser Lösch-Feature implementieren. Der Code, der unsere Elemente auf der Seite rendern wird, könnte so aussehen:

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

Wir haben jetzt fast dreißig Codezeilen, die sich _nur_ der Benutzeroberfläche widmen – _nur_, um etwas im DOM zu rendern – und an keiner Stelle fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander hineinsetzt; wie man sie auf der Seite erscheinen lässt. Keiner dieses Codes behandelt Benutzerinteraktionen oder befasst sich mit dem Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zum richtigen Zeitpunkt und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie geben Ihnen jedoch einfacheren Zugang zu den Fähigkeiten von JavaScript, sodass Sie für das heutige Web entwickeln können.

Wenn Sie die Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die es den Nutzern auch erlaubt, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Möglichkeit, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework übernimmt das Ändern des DOMs im Hintergrund.

Der native JavaScript-Ansatz, neue DOM-Elemente in Wiederholungen zu erstellen, war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie mit Vue unsere Liste von Aufgaben beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Codezeilen auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier Ihnen unbekannt sind, ist das in Ordnung; Sie werden später im Modul über Vue-spezifische Syntax lernen. Das, was hier zu beachten ist, ist, dass dieser Code aussieht wie die Benutzeroberfläche, die er darstellt, während der native JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben; das Framework übernimmt das für uns auf eine optimierte, effiziente Weise. Unsere einzige Aufgabe war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell verstehen, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist darin nicht allein: Ein Framework zu verwenden, verbessert die Effizienz des Teams sowie der einzelnen Entwickler.

Es ist möglich, Dinge _ähnlich_ wie dies in nativem JavaScript zu tun. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) ermöglichen es Ihnen, HTML-Zeichenfolgen zu schreiben, die das Endelement darstellen würden. Das könnte eine nützliche Idee für etwas Einfaches wie unsere To-do-Listen-Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datenaufzeichnungen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Andere Dinge, die Frameworks bieten

Werfen wir einen Blick auf einige der anderen Vorteile, die Frameworks bieten. Wie bereits angedeutet, sind die Vorteile von Frameworks mit nativem JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt die intellektuelle Belastung, diese Probleme selbst lösen zu müssen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Gemeinschaft hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererf experience verbessern. Diese Werkzeuge machen es einfach, Dinge wie Testing (um sicherzustellen, dass Ihre Anwendung so funktioniert, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr Details zu Konzepten von Web-Tools erfahren möchten, werfen Sie einen Blick auf unser [Client-seitige Tools-Übersicht](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview).

### Aufteilung

Die meisten großen Frameworks ermutigen Entwickler dazu, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der mit einer bestimmten Komponente zusammenhängt, kann in einer Datei (oder ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wo Sie zur Änderung dieser Komponente hinsehen müssen. In einer nativen JavaScript-App müssten Sie Ihr eigenes Set von Konventionen erstellen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler, wenn sie ihrem eigenen Gerät überlassen werden, könnten am Ende mit all dem Code, der mit einem Teil der Benutzeroberfläche verbunden ist, überall in einer Datei verteilt sein — oder sogar in einer anderen Datei.

### Routing

Die grundlegendste Funktion des Webs ist, dass es den Nutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netz aus miteinander verbundenen Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, die für Sie angezeigt werden. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkehren oder sie mit anderen teilen, damit sie leicht die gleiche Seite finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht es Ihnen auch, vorwärts und rückwärts zu navigieren. Dies wird als **Server-seitiges Routing** bezeichnet.

Moderne Webanwendungen rufen typischerweise keine neuen HTML-Dateien ab und rendern sie nicht – sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bekannt als **Single-Page-Apps** oder **SPAs**), ohne die Nutzer zu neuen Adressen im Web zu navigieren. Jede neue pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Menschen sind es gewohnt, auf spezifische Seiten in einer Anwendung verlinken zu können, in ihrem Navigationsverlauf vor- und zurückzureisen usw., und ihre Erfahrung leidet, wenn diese Standard-Web-Features gebrochen sind. Wenn das Routing von einer Client-Anwendung auf diese Weise behandelt wird, wird es treffend als **Client-seitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben begleitende Bibliotheken, die Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein bedeutet, die geeignetsten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks erleichtern die Entwicklung von Front-End-Anwendungen, aber sie sind keine Wunderlösung, die alle Probleme löst. In diesem Abschnitt wird über einige der Dinge gesprochen, die Sie bei der Verwendung von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — achten Sie darauf, nicht nur aus Prinzip ein Framework zu verwenden.

### Vertrautheit mit dem Werkzeug

Wie bei nativem JavaScript erfordern Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genug seiner Funktionen zu lernen, damit es Ihnen nützend ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen sich damit ebenfalls wohlfühlen.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten wenig oder keine interaktive Funktionalität haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das heißt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal insgesamt _weniger_ Code – indem sie die DOM-Interaktionen für Sie übernehmen, im Hintergrund. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum bedeutet, dass Ihr endgültiges Softwarestück größer und rechenintensiver zu betreiben ist.

Einige zusätzlicher Code ist unvermeidlich, und ein Framework, das Baumschütteln unterstützt (Entfernung aller Codes, die während des Build-Prozesses in der App nicht tatsächlich verwendet werden), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Auge behalten müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur wahren Natur des Webs. Egal, wie Sie für das Web entwickeln, das Endergebnis, die Schicht, mit der Ihre Nutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, kann es passieren, dass Sie die HTML-Struktur und den Zweck ihrer verschiedenen Tags aus den Augen verlieren und ein HTML-Dokument erstellen, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne sie nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, überladen und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, ist das einfach zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Performance und Barrierefreiheit wahren, verstärken Frameworks Ihre Fragilität, Ihre Überladung und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt ein robustes, inhaltsorientiertes Netzwerk von Dokumenten zu sein, stellt das Web nun oft JavaScript an die erste Stelle und die Benutzererfahrung an die letzte.

## Barrierefreiheit auf einem framework-gesteuerten Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Barrierefreiheit sprechen. Benutzeroberflächen zugänglich zu machen, erfordert immer einige Gedanken und Mühe, und Frameworks können diesen Prozess verkomplizieren. Sie müssen oft erweiterte Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Regioinen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) oder Fokus-Verwaltung zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist das client-seitige Routing, wie zuvor erwähnt.

Mit traditionellem (server-seitigem) Routing hat die Navigation im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den Anfang der Seite setzen muss und unterstützende Technologien werden den Seitentitel ansagen. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Mit client-seitigem Routing lädt Ihr Browser keine neuen Webseiten, daher weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Mühe investiert, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat kein Framework dies perfekt gemacht.

Das Ergebnis ist, dass Sie Barrierefreiheit von Anfang an in _jedem_ Webprojekt berücksichtigen sollten, aber beachten Sie, dass abstrakte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie dies vernachlässigen.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes wird regelmäßig verbessert oder verändert und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Recherche betreiben, um herauszufinden, was Ihren Bedürfnissen entspricht. Das Gesagte, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet einen schnellen Überblick über die aktuelle _Browserunterstützung_, die von jedem Framework angeboten wird, sowie die **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die es einfacher machen, mit diesem Framework zu entwickeln. Entscheidend ist, dass keines der Frameworks _erfordert_, dass ein Entwickler eine bestimmte DSL verwendet, aber sie wurden fast alle mit einer bestimmten DSL im Sinn entworfen. Wenn man sich entscheidet, nicht die bevorzugte DSL eines Frameworks zu verwenden, verpasst man Funktionen, die ansonsten die Entwicklererfahrung verbessern würden.

Sie sollten die Unterstützungsmatrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Fehlende Browserunterstützung kann eine Barriere für Ihre Nutzer sein; eine nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browserunterstützung                | Bevorzugte DSL | Unterstützte DSLs        | Quelle                                                                                     |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind nicht wirklich echte DSLs, aber es handelt sich um nicht-standardisierte HTML, deshalb glauben wir, dass sie es wert sind, hervorgehoben zu werden.

### Hat das Framework eine starke Gemeinschaft?

Dies ist vielleicht die schwierigste Metrik zu messen, weil die Größe der Gemeinschaft nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads eines Projekts überprüfen, um eine Idee seiner Popularität zu bekommen, aber manchmal ist das Beste, was man tun kann, einige Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Gemeinschaft, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Web

Glauben Sie nicht nur unserem Wort in dieser Angelegenheit — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Front-End zu verwenden, und veröffentlichte eine [Request for Comments (RFC) zur Einführung von Frameworks](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor der RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts zu skizzieren und warum bestimmte Frameworks gute Entscheidungen für das Team waren. Diese RFC dient als ein großartiges Beispiel für die Art der Forschung, die Sie für sich selbst durchführen sollten, wenn Sie planen, ein Front-End-Framework zu verwenden.

Die [State of JavaScript survey](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über die Nutzung von Frameworks und das Entwicklerempfinden ihnen gegenüber. Derzeit stehen mehrere Jahre an Daten zur Verfügung, die es ermöglichen, ein Gefühl für die Beliebtheit eines Frameworks zu bekommen.

Das Vue-Team hat Vue [ausführlich mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es kann eine gewisse Voreingenommenheit in diesem Vergleich geben (die sie anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu client-seitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive client-seitige JavaScript-Funktionalität erfordern wird, könnten Sie auf einige andere Lösungen zum Erstellen des Webs zurückgreifen:

- Ein Content Management System
- Server-seitiges Rendering
- Ein statischer Site-Generator

### Content Management Systeme

**Content-Management-Systeme** (**CMSes**) sind Werkzeuge, die es einem Benutzer ermöglichen, Webinhalte zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere für Projekte, die Eingaben von Inhaltsautoren erfordern, die nur begrenzte Codierungsfähigkeiten haben, oder für Programmierer, die Zeit sparen wollen. Sie erfordern jedoch eine erhebliche Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest einige Kontrolle über die endgültige Ausgabe Ihrer Website aufgeben. Zum Beispiel: Wenn Ihr ausgewähltes CMS nicht standardmäßig zugängliche Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Server-seitiges Rendering

**Server-seitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _client-seitigem Rendering_, das die häufigste und einfachste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Server-seitiges Rendering ist einfacher auf dem Gerät des Clients, weil Sie ihnen nur eine gerenderte HTML-Datei senden, aber es kann schwierig einzurichten sein im Vergleich zu einer client-seitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks bieten sowohl server-seitiges Rendering als auch client-seitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht miteinander verbunden!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Gemeinschaft geschrieben und gepflegt, während einige offizielle Lösungen vom Entwickler des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Statische Site-Generatoren")}} sind Programme, die alle Webseiten einer multiplen Website — einschließlich relevanter CSS oder JavaScript — dynamisch generieren, so dass sie an verschiedenen Orten veröffentlicht werden können. Der veröffentlichende Host könnte eine GitHub Pages-Branch, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl sein, zum Beispiel. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, hauptsächlich in Bezug auf Performance (das Gerät Ihres Benutzers erstellt die Seite nicht mit JavaScript; sie ist bereits vollständig) und Sicherheit (statische Seiten haben weniger Angriffspunkte). Diese Seiten können weiterhin JavaScript verwenden, wenn sie es benötigen, sind aber nicht _abhängig_ davon. Statische Site-Generatoren erfordern, wie jedes andere Werkzeug, Zeit zu lernen, was eine Barriere für Ihren Entwicklungsprozess sein kann.

Statische Sites können so wenig oder so viele einzigartige Seiten haben, wie Sie wollen. So wie Frameworks Ihnen ermöglichen, schnell client-seitige JavaScript-Anwendungen zu schreiben, ermöglichen Ihnen statische Site-Generatoren, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln hätten erstellen müssen. Wie Frameworks ermöglichen statische Site-Generatoren Entwicklern, Komponenten zu schreiben, die häufige Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext statischer Site-Generatoren werden diese Komponenten **Vorlagen** genannt. Webseiten, die von statischen Site-Generatoren erstellt wurden, können sogar home zu Framework-Anwendungen sein: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch erzeugten Website eine React-Anwendung startet, sobald Ihre Nutzer sie besuchen, können Sie das tun.

Statische Site-Generatoren sind schon seit geraumer Zeit im Umlauf und werden ständig optimiert und weiterentwickelt. Eine Reihe von Optionen existiert, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und unterschiedliche Funktionen bereitstellen. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden client-seitige Frameworks anstelle von Vorlagen, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen lernen möchten, sehen Sie sich Tatiana Macs [Anfängerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund gegeben, warum Sie Frameworks überhaupt verwenden würden und wie Sie ein geeignetes auswählen können, und Sie dazu gebracht, noch mehr lernen zu wollen und sich auszutoben!

Unser nächster Artikel geht auf eine niedrigere Ebene und betrachtet die spezifischen Arten von Funktionen, die Frameworks in der Regel bieten und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
