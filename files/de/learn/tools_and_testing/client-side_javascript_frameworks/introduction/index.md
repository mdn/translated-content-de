---
title: Einführung in clientseitige Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 41a27d6c0f8e44f1b9a3dabddd9315655b367b77
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema. Dabei werfen wir einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie Sie anfangen können, über die Auswahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen zu clientseitigen Frameworks es gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis, wie clientseitige JavaScript-Frameworks entstanden sind, welche Probleme sie lösen, welche Alternativen es gibt und wie man eines auswählt.
      </td>
    </tr>
  </tbody>
</table>

## Ein kurzer Rückblick

Als JavaScript 1996 debütierte, brachte es gelegentliche Interaktivität und Spannung in ein Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht mehr nur ein Ort zum _Lesen von Inhalten_, sondern ein Ort zum _Tun von Dingen_. Die Beliebtheit von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, denen sie begegneten, und verpackten sie in wiederverwendbare Pakete, die als **Bibliotheken** bekannt sind, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten.

Heute ist JavaScript ein wesentlicher Bestandteil des Webs, [verwendet auf 98% aller Websites](https://w3techs.com/technologies/details/cp-javascript), und das Web ist ein wesentlicher Bestandteil des modernen Lebens. Benutzer schreiben Arbeiten, verwalten ihre Budgets, streamen Musik, schauen Filme und kommunizieren mit anderen über große Entfernungen hinweg augenblicklich, mit Text-, Audio- oder Videochats. Das Web erlaubt uns Dinge zu tun, die früher nur in nativen Anwendungen auf unseren Computern möglich waren. Diese modernen, komplexen, interaktiven Websites werden oft als **Webanwendungen** bezeichnet.

Das Aufkommen moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen. Ein **Framework** ist eine Bibliothek, die Meinungen darüber äußert, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es der Software, auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind essentiell für die Gesundheit und Langlebigkeit von Software.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen. Die MDN Web Docs, auf denen Sie dies aktuell lesen, nutzen das React/ReactDOM-Framework für ihre Frontend-Oberfläche.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde erstmals im Dezember 2011 als Fortsetzung der Arbeiten am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Nutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine gewisse Beliebtheit aufgrund seiner Stabilität, der Unterstützung durch die Community und einiger cleverer Kodierungsprinzipien.

[Ember lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von dem Angular-Team bei Google und einer Community von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung desselben Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit, für Entwickler transparent, übersetzt der Compiler des Frameworks die Vorlagen in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten werden.

[Angular lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

Nachdem er an dem ursprünglichen [AngularJS](https://angularjs.org/)-Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You 2014 [Vue](https://vuejs.org/). Vue ist das jüngste der großen vier, hat aber in letzter Zeit einen Aufschwung an Popularität erlebt.

Vue erweitert wie [AngularJS](https://angularjs.org/) HTML mit seinem eigenen Code. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

[Vue lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook veröffentlicht [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es bereits intern React verwendet, um viele seiner Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen Entwicklern die Erstellung mobiler Anwendungen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen ihnen die Erstellung von Webanwendungen usw.

Da React und ReactDOM so oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durchlesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

[React lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Warum existieren Frameworks?

Wir haben bereits die Umgebung besprochen, die zur Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Die Erkundung des Warum erfordert zunächst eine Untersuchung der Herausforderungen der Softwareentwicklung.

Betrachten Sie eine gängige Art von Anwendung: Einen Aufgabenlisten-Ersteller, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks implementieren werden. Diese Anwendung sollte Benutzern ermöglichen, Dinge wie das Anzeigen einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und sie muss dies tun, während die zugrunde liegenden Daten der Anwendung zuverlässig verfolgt und aktualisiert werden. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jede unserer Ziele ist theoretisch einfach in Isolation. Wir können über die Daten iterieren, um sie zu rendern; wir können zu einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir daran denken, dass die Anwendung dem Benutzer _all dies_ durch den Browser ermöglichen muss, beginnen ein paar Risse zu zeigen. **Das eigentliche Problem ist dies: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur auf _eine_ Funktion unserer Aufgabenlisten-App konzentrieren: das Rendern einer Liste von Aufgaben.

## Die Redundanz von DOM-Änderungen

HTML-Elemente zu erstellen und sie zur richtigen Zeit im Browser zu rendern, erfordert überraschend viel Code. Angenommen, unser Zustand ist ein Array von Objekten, die so strukturiert sind:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir den Benutzern eine dieser Aufgaben? Wir möchten jede Aufgabe als Listenelement repräsentieren – ein HTML [`<li>`](/de/docs/Web/HTML/Element/li)-Element innerhalb eines ungeordneten Listenelements (eines [`<ul>`](/de/docs/Web/HTML/Element/ul)). Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere weitere Codezeilen, um die erforderlichen Eigenschaften und Kindelemente zu erstellen.

Das vorherige Snippet verweist auf eine weitere Erstellungsfunktion: `buildDeleteButtonEl()`. Es folgt einem ähnlichen Muster wie das, das wir zum Erstellen eines Listenelements verwendet haben:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button macht noch nichts, aber er wird es später, wenn wir uns entscheiden, unsere Löschen-Funktion zu implementieren. Der Code, der unsere Elemente auf der Seite rendert, könnte etwa so aussehen:

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

Jetzt haben wir fast dreißig Codezeilen, die sich _nur_ mit dem UI befassen – _nur_ um etwas im DOM zu rendern – und an keiner Stelle fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu gestalten!

Die direkte Arbeit mit dem DOM erfordert, wie in diesem Beispiel gezeigt, das Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander steckt; wie man sie auf die Seite bringt. Keiner dieser Codes behandelt tatsächlich Benutzerinteraktionen oder befasst sich mit dem Hinzufügen oder Löschen von Aufgaben. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unser UI zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten in JavaScript; sie geben Ihnen leichteren Zugang zu den Fähigkeiten von JavaScript, damit Sie für das heutige Web bauen können.

Wenn Sie die Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, UIs zu bauen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie erlauben Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework lässt das dann im DOM geschehen.

Der Vanilla-JavaScript-Ansatz zum Erstellen neuer DOM-Elemente in Wiederholung war schwer auf einen Blick zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie mit Vue unsere Liste von Aufgaben beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das ist alles. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-`-Attribute hier unbekannt sind, ist das okay; Sie werden später im Modul mehr über die Vue-spezifische Syntax lernen. Wichtig ist hier, dass dieser Code wie das UI aussieht, das er darstellt, während der Vanilla-JavaScript-Code das nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen des UI schreiben; das Framework wird das für uns auf eine optimierte, effiziente Weise erledigen. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell nachvollziehen, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist darin nicht allein: Die Verwendung eines Frameworks steigert sowohl die Effizienz im Team als auch die individuelle Effizienz.

Es ist möglich, Dinge _ähnlich_ diesem in Vanilla JavaScript zu tun. [Template-Literal-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlisten-Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und genauso viele einzigartige Elemente in einer Benutzeroberfläche rendern könnten.

## Weitere Vorteile, die Frameworks bieten

Schauen wir uns einige der anderen Vorteile an, die Frameworks bieten. Wie wir bereits angedeutet haben, sind die Vorteile von Frameworks in Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Belastung, diese Probleme selbst lösen zu müssen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Community hat, bietet das jeweilige Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Tools erleichtern es, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung sich so verhält, wie sie sollte) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, besuchen Sie unsere [Übersicht zu clientseitigem Tooling](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview).

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler dazu, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codeabschnitte, die miteinander kommunizieren können. Der gesamte Code, der mit einer bestimmten Komponente zusammenhängt, kann in einer Datei (oder in ein paar spezifischen Dateien) leben, sodass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Veränderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihre eigene Menge an Konventionen erstellen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie sich selbst überlassen sind, am Ende mit all dem Code, der zu einem Teil der Benutzeroberfläche gehört, über eine Datei verteilt arbeiten – oder in einer ganz anderen Datei.

### Routing

Das wesentliche Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von miteinander verknüpften Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neue Inhalte ab, um sie Ihnen anzuzeigen. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später auf die Seite zurückkehren oder sie mit anderen teilen, damit diese leicht dieselbe Seite finden können. Ihr Browser erinnert sich an Ihre Navigation und ermöglicht es Ihnen, vor und zurück zu navigieren. Dies nennt man **serverseitiges Routing**.

Moderne Webanwendungen holen und rendern typischerweise keine neuen HTML-Dateien — sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bekannt als **Single Page Apps** oder **SPAs**), ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird üblicherweise als _View_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Views rendert, ist es wichtig, die Routing-Funktionalität in Ihre Anwendung zu integrieren. Die Leute sind daran gewöhnt, auf bestimmte Seiten in einer Anwendung verlinken zu können, in ihrer Navigation vor und zurück zu gehen usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Webfunktionen nicht mehr funktionieren. Wenn das Routing von einer Client-Anwendung auf diese Weise gehandhabt wird, wird es treffend als **clientseitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mithilfe der nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler bedeutet, die am besten geeigneten Werkzeuge für die jeweilige Aufgabe zu verwenden. JavaScript-Frameworks erleichtern die Frontend-Anwendungsentwicklung, aber sie sind keine Wunderwaffe, die alle Probleme löst. In diesem Abschnitt geht es um einige der Dinge, die Sie bei der Verwendung von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — achten Sie darauf, dass Sie nicht nur aus Prinzip ein Framework verwenden.

### Vertrautheit mit dem Werkzeug

Genau wie Vanilla JavaScript erfordern Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genügend Zeit haben, um genügend seiner Funktionen zu lernen, damit es für Sie nützlich ist, anstatt gegen Sie zu arbeiten. Stellen Sie außerdem sicher, dass Ihre Teamkollegen sich damit ebenfalls wohlfühlen.

### Overengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit ein paar Seiten ist, und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist möglicherweise ein Framework (und all sein JavaScript) überhaupt nicht erforderlich. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), als ein Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, mehr deklarativen Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie die DOM-Interaktionen für Sie hinter den Kulissen erledigen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihr Endsoftwareprodukt größer und rechentechnisch aufwendiger macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (die Entfernung eines beliebigen Codes, der im Build-Prozess tatsächlich nicht in der App verwendet wird), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Punkt, den Sie bei der Berücksichtigung der Leistung Ihrer App im Hinterkopf behalten müssen, insbesondere auf stärker netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur eigentlichen Natur des Webs. Egal wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, können Sie das HTML und den Zweck seiner verschiedenen Tags aus den Augen verlieren und dazu führen, dass Sie ein HTML-Dokument erzeugen, das unsemantisch und nicht zugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängig ist und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Web-App zu erstellen, ist das leicht möglich. Wenn Ihre Prioritäten jedoch keine Performance und Barrierefreiheit sorgfältig schützen, verstärken Frameworks Ihre Fragilität, Ihre Aufblähung und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, die durch Frameworks verstärkt werden, haben die Struktur des Webs an vielen Stellen umgekehrt. Statt eines langlebigen, inhaltszentrierten Netzwerks von Dokumenten stellt das Web nun oft JavaScript an erster Stelle und die Benutzererfahrung an letzter.

## Barrierefreiheit im Rahmen eines framework-getriebenen Webs

Lassen Sie uns auf das aufbauen, was wir im vorherigen Abschnitt gesagt haben, und ein wenig mehr über Barrierefreiheit sprechen. Benutzeroberflächen zugänglich zu machen erfordert immer ein wenig Überlegung und Anstrengung, und Frameworks können diesen Prozess komplizieren. Sie müssen oft erweiterte Framework-APIs verwenden, um auf native Browserfunktionen wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrierefreiheitsbarrieren, die für traditionelle Websites nicht existieren. Das bedeutendste Beispiel hierfür liegt im clientseitigen Routing, wie bereits erwähnt.

Mit traditionellem (serverseitigem) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den Anfang der Seite setzen soll und Hil-technologien werden den Seitentitel ankündigen. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Mit clientseitigem Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen soll. Framework-Autoren haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat kein Framework dies perfekt gemacht.

Das Fazit ist, dass Sie Barrierefreiheit von Anfang an bei _jeder_ Webprojekt in Betracht ziehen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks nimmt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder ändert sich regelmäßig und jedes hat seine Vor- und Nachteile. Die Auswahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess und Sie sollten Ihre eigene Recherche durchführen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu untersuchen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentationen (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_, die jedes Framework bietet, sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSLs)")}} Programmiersprachen, die in speziellen Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Abwandlungen von JavaScript oder HTML, die die Entwicklung mit dem Framework erleichtern. Entschieden entwickeln ein Frameworks favorisierte DSL nicht einzusetzen bedeutet, dass Sie möglicherweise auf Funktionen verzichten, die sonst Ihre Entwicklererfahrung verbessern würden.

Sie sollten die Unterstützungsmatrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Entscheidung für ein neues Projekt treffen. Mismatched Browser-Support kann ein Hindernis für Ihre Benutzer sein; mismatched DSL-Support kann ein Hindernis für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitation                                                                                   |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind nicht-standardmäßiges HTML, daher glauben wir, dass sie erwähnenswert sind.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Kennzahl zu messen, da die Größe der Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads eines Projekts überprüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, was zu tun ist, einige Foren durchzusehen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie willkommen heißend und inklusiv sie ist und wie gut die verfügbaren Dokumentationen sind.

### Meinungen zum Web

Vertrauen Sie nicht nur auf unser Wort zu diesem Thema — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für sein Front-End zu verwenden, und eine [Anfrage zu Kommentaren (RFC) zur Einführung von Frameworks](https://phabricator.wikimedia.org/T241180) veröffentlicht. Eric Gardner, der Autor des RFC, hat sich die Zeit genommen, die Bedürfnisse des Wikimedia-Projekts und die Gründe zu erläutern, warum bestimmte Frameworks gute Entscheidungen für das Team waren. Diese RFC dient als ein großartiges Beispiel für die Art der Recherche, die Sie selbst durchführen sollten, wenn Sie vorhaben, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Rückmeldungen von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten sowohl über den Einsatz von Frameworks als auch über die Meinung der Entwickler dazu. Derzeit sind mehrere Jahre an Daten verfügbar, sodass Sie ein Gefühl für die Popularität eines Frameworks bekommen können.

Das Vue-Team hat [Vue umfassend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es kann ein gewisser Bias in diesem Vergleich vorhanden sein (den sie auch anmerken), aber es ist dennoch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive clientseitige JavaScript-Unterstützung erfordert, könnten Sie auf eine von mehreren anderen Lösungen zum Bauen des Webs zugreifen:

- Ein Content Management System
- Rendering auf der Serverseite
- Ein statischer Website-Generator

### Content Management Systeme

**Content Management Systeme** (**CMSes**) sind Tools, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne selbst direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Input von Inhaltsschreibern erfordern, die über eingeschränkte Programmierkenntnisse verfügen, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest ein gewisses Maß an Kontrolle über das endgültige Ergebnis Ihrer Website aufgeben. Wenn zum Beispiel Ihr gewähltes CMS standardmäßig keine barrierefreien Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Rendering auf der Serverseite

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es Aufgabe des _Servers_ ist, eine Single Page Application zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, das die häufigste und einfachste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering ist einfacher für das Gerät des Clients, da Sie ihm nur eine gerenderte HTML-Datei senden, aber es kann schwierig einzurichten sein im Vergleich zu einer clientseitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht miteinander verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während einige "offizielle" Lösungen vom Maintainer des Frameworks bereitgestellt werden.

### Statische Website-Generatoren

{{Glossary("SSG", "Statische Website-Generatoren")}} sind Programme, die alle Webseiten einer mehrseitigen Website dynamisch erzeugen – einschließlich aller relevanten CSS oder JavaScript –, damit sie an einer beliebigen Anzahl von Orten veröffentlicht werden können. Der Veröffentlichungs-Host könnte zum Beispiel ein GitHub Pages-Zweig, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen dieses Ansatzes, hauptsächlich, was die Leistung betrifft (das Gerät Ihres Benutzers baut die Seite nicht mehr mit JavaScript; sie ist bereits vollständig) und die Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Seiten können JavaScript dort nutzen, wo sie es benötigen, aber sie sind nicht von ihm _abhängig_. Statische Website-Generatoren erfordern wie jedes andere Werkzeug Zeit zum Erlernen, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so wenig oder so viele einzigartige Seiten haben, wie Sie möchten. Genau wie Frameworks Ihnen ermöglichen, schnell clientseitige JavaScript-Anwendungen zu schreiben, erlauben Ihnen statische Website-Generatoren eine Möglichkeit, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks, ermöglichen statische Website-Generatoren Entwicklern, Komponenten zu schreiben, die allgemeine Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzusetzen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Website-Generatoren werden diese Komponenten **Vorlagen** genannt. Webseiten, die von statischen Website-Generatoren erstellt wurden, können sogar Heimat von Framework-Anwendungen sein: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch erzeugten Website eine React-Anwendung bootet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Website-Generatoren gibt es schon ziemlich lange, und sie werden ständig optimiert und innoviert. Eine Vielzahl von Auswahlmöglichkeiten existiert, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestapeln aufbauen und besondere Merkmale bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden clientseitige Frameworks anstelle von Vorlagen, generieren aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Website-Generatoren im Allgemeinen erfahren möchten, lesen Sie Tatiana Macs [Beginner's guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Serie erklären sie, was ein statischer Website-Generator ist und wie er sich auf andere Mittel zur Veröffentlichung von Web-Inhalten bezieht.

## Zusammenfassung

Und damit sind wir am Ende unserer Einführung in Frameworks angelangt — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich Ihnen einen nützlichen Hintergrund dafür gegeben, warum Sie überhaupt Frameworks verwenden würden und wie Sie eines auswählen, und Sie dazu gebracht, mehr lernen und einsteigen zu wollen!

Unser nächster Artikel geht auf eine niedrigere Ebene und betrachtet die spezifischen Arten von Funktionen, die Frameworks in der Regel bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
