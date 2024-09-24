---
title: Einführung in clientseitige Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, werfen einen kurzen Blick auf die Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man anfängt, darüber nachzudenken, ein Framework zu wählen, um es zu lernen, und welche Alternativen es zu clientseitigen Frameworks gibt.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wie clientseitige JavaScript-Frameworks entstanden sind, welche Probleme sie lösen, welche Alternativen es gibt und wie man eines auswählt.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte

Als JavaScript 1996 debütierte, brachte es gelegentliche Interaktivität und Spannung ins Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde nicht nur zu einem Ort, um Dinge zu _lesen_, sondern um Dinge zu _tun_. Die Beliebtheit von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Tools, um die Probleme zu lösen, denen sie begegneten, und verpackten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem von Bibliotheken half, das Wachstum des Webs zu gestalten.

Inzwischen ist JavaScript ein wesentlicher Bestandteil des Webs, [wird auf 98 % aller Websites verwendet](https://w3techs.com/technologies/details/cp-javascript), und das Web ist ein wesentlicher Teil des modernen Lebens. Benutzer schreiben Berichte, verwalten ihre Budgets, streamen Musik, schauen Filme und kommunizieren mit anderen über große Entfernungen sofort, per Text-, Audio- oder Video-Chat. Das Web ermöglicht uns Dinge, die früher nur in nativen Anwendungen auf unseren Computern möglich waren. Diese modernen, komplexen, interaktiven Websites werden oft als **Webanwendungen** bezeichnet.

Mit dem Aufkommen moderner JavaScript-Frameworks ist es viel einfacher geworden, hochdynamische, interaktive Anwendungen zu erstellen. Ein **Framework** ist eine Bibliothek, die Meinungen darüber äußert, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es, die Software auf eine enorme Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersehbarkeit und Wartbarkeit sind wesentlich für die Gesundheit und Langlebigkeit von Software.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen. Die MDN Web Docs, die Sie gerade lesen, verwenden das React/ReactDOM-Framework, um ihr Frontend anzutreiben.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen Vier" als die Folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, erfreut sich aber immer noch einer gewissen Beliebtheit aufgrund seiner Stabilität, der Unterstützung durch die Community und einiger cleverer Codierungsprinzipien.

[Starten Sie mit Ember](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungsframework, das vom Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist ein vollständiger Neuentwurf des gleichen Teams, das [AngularJS](https://angularjs.org/) entwickelt hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Templates verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks die Templates in optimierte JavaScript-Anweisungen, transparent für die Entwickler. Angular verwendet [TypeScript](https://www.typescriptlang.org/), ein Superset von JavaScript, auf das wir im nächsten Kapitel näher eingehen werden.

[Starten Sie mit Angular](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

Nach der Arbeit am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen Vier, hat aber kürzlich einen Popularitätsschub erfahren.

Vue erweitert, wie [AngularJS](https://angularjs.org/), HTML um eigenen Code. Abgesehen davon stützt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

[Starten Sie mit Vue](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt wurde React bereits intern verwendet, um viele Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen — React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu bauen, usw.

Da React und ReactDOM oft zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Wenn Sie dieses Modul durcharbeiten, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

[Starten Sie mit React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die die Erstellung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis empfanden, sie zu erstellen. Um das Warum zu erkunden, muss zunächst die Herausforderungen der Softwareentwicklung betrachtet werden.

Betrachten Sie eine häufige Art von Anwendung: Einen Aufgabenlisten-Ersteller, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks implementieren werden. Diese Anwendung sollte es Benutzern ermöglichen, Dinge wie das Rendern einer Liste von Aufgaben, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu erledigen; und sie muss dies tun, während sie die Daten, die der Anwendung zugrunde liegen, zuverlässig verfolgt und aktualisiert. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch einfach isoliert. Wir können über die Daten iterieren, um sie zu rendern; wir können zu einem Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Identifikator verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung es dem Benutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, beginnen einige Risse zu zeigen. **Das eigentliche Problem ist: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir uns nur _ein_ Merkmal unserer Aufgabenlisten-App ansehen: das Rendern einer Liste von Aufgaben.

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

Wie zeigen wir unseren Benutzern eine dieser Aufgaben? Wir wollen jede Aufgabe als Listenelement darstellen – ein HTML [`<li>`](/de/docs/Web/HTML/Element/li)-Element innerhalb eines ungeordneten Listenelements (eines [`<ul>`](/de/docs/Web/HTML/Element/ul)). Wie erstellen wir es? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und mehrere Zeilen Code, um die Eigenschaften und Kindelemente zu erstellen, die es benötigt.

Der vorherige Ausschnitt bezieht sich auf eine andere Konstruktionsfunktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button tut noch nichts, aber das wird er später, wenn wir beschließen, unser Löschfeature zu implementieren. Der Code, der unsere Elemente auf der Seite rendert, könnte so aussehen:

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

Wir haben nun fast dreißig Zeilen Code, die sich _nur_ der Benutzeroberfläche widmen – _nur_ um etwas im DOM zu rendern – und wir fügen keine Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Die direkte Arbeit mit dem DOM, wie in diesem Beispiel, erfordert ein Verständnis davon, wie das DOM funktioniert: wie man Elemente erstellt; wie man deren Eigenschaften ändert; wie man Elemente ineinander setzt; wie man sie auf die Seite bekommt. Keiner dieses Codes verarbeitet tatsächlich Benutzerinteraktionen oder adressiert das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Features hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden erstellt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie geben Ihnen einen einfacheren Zugang zu den Fähigkeiten von JavaScript, damit Sie für das heutige Web bauen können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ausprobieren, die es den Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die JavaScript-Funktionen, die in diesem Abschnitt verwendet wurden:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Methode, um UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework sorgt dafür, dass es im DOM im Hintergrund passiert.

Der Vanilla-JavaScript-Ansatz zum Erstellen neuer DOM-Elemente in Wiederholung war auf den ersten Blick schwer zu verstehen. Im Gegensatz dazu illustriert der folgende Codeblock, wie Sie Vue verwenden könnten, um unsere Liste von Aufgaben zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier Ihnen fremd sind, ist das in Ordnung; Sie werden später im Modul über die vue-spezifische Syntax lernen. Das, was hier wichtig ist, dass dieser Code so aussieht wie die Benutzeroberfläche, die er darstellt, während der Vanilla-JavaScript-Code das nicht tut.

Dank Vue mussten wir keine eigenen Funktionen für den Aufbau der Benutzeroberfläche schreiben; das Framework übernimmt das für uns auf optimierte, effiziente Weise. Unsere einzige Rolle hier war, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was los ist, wenn sie unserem Projekt beitreten. Vue ist in diesem Punkt nicht allein: Die Verwendung eines Frameworks verbessert die Effizienz sowohl des Teams als auch des Einzelnen.

Ähnliche Dinge können _ähnlich_ zu diesem Ansatz in Vanilla-JavaScript erreicht werden. [Template-Literal-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere Aufgabenlistenanwendung sein, aber es ist nicht wartbar für große Anwendungen, die tausende Datensätze verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche darstellen könnten.

## Andere Dinge, die Frameworks uns bieten

Schauen wir uns einige der anderen Vorteile an, die Frameworks bieten. Wie wir bereits angedeutet haben, sind die Vorteile von Frameworks in Vanilla-JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt Ihnen die kognitive Belastung, diese Probleme selbst lösen zu müssen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul eine große, aktive Gemeinschaft hat, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge erleichtern das Hinzufügen von Dingen wie Tests (um sicherzustellen, dass Ihre Anwendung sich wie gewünscht verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist).

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren wollen, schauen Sie sich unsere [Übersicht über clientseitiges Tooling](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler dazu, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der sich auf eine bestimmte Komponente bezieht, kann in einer Datei (oder einigen spezifischen Dateien) leben, so dass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihr eigenes Set von Konventionen erstellen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler, wenn sie sich selbst überlassen sind, könnten am Ende den gesamten Code, der sich auf einen Teil der Benutzeroberfläche bezieht, über eine Datei verstreut haben - oder in einer ganz anderen Datei.

### Routing

Das wesentliche Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk aus verlinkten Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, um ihn Ihnen anzuzeigen. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und die Seite später wieder besuchen oder sie mit anderen teilen, damit diese die gleiche Seite leicht finden können. Ihr Browser speichert Ihren Navigationsverlauf und ermöglicht es Ihnen, vorwärts und rückwärts zu navigieren. Dies wird als **serverseitiges Routing** bezeichnet.

Moderne Webanwendungen rufen in der Regel keine neuen HTML-Dateien ab und rendern sie nicht — sie laden eine einzelne HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bekannt als **Single-Page-Apps** oder **SPAs**), ohne Benutzer zu neuen Adressen im Web zu navigieren. Jede neue pseudo-Webseite wird normalerweise als _View_ bezeichnet, und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genug einzigartige Views rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Menschen sind daran gewöhnt, zu bestimmten Seiten in einer Anwendung verlinken zu können, vorwärts und rückwärts in ihrem Navigationsverlauf zu reisen usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen gebrochen sind. Wenn das Routing von einer Clientanwendung auf diese Weise gehandhabt wird, wird es treffend als **clientseitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die das Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge zu beachten, wenn Sie Frameworks verwenden

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Werkzeuge für den Job zu verwenden. JavaScript-Frameworks erleichtern die Entwicklung von Front-End-Anwendungen, aber sie sind keine Allheilmittel, die alle Probleme lösen werden. In diesem Abschnitt sprechen wir über einige der Dinge, die Sie beachten sollten, wenn Sie Frameworks verwenden. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen — achten Sie darauf, dass Sie nicht nur eines verwenden, um seiner selbst willen.

### Vertrautheit mit dem Werkzeug

Genau wie Vanilla-JavaScript benötigen Frameworks Zeit zum Lernen und haben ihre Eigenheiten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genügend Zeit haben, um genug seiner Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt es gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen damit ebenfalls vertraut sind.

### Überingenieurung

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist, und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das heißt, Frameworks sind nicht monolithisch, und einige von ihnen sind besser für kleine Projekte geeignet als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Codebase und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal insgesamt _weniger_ Code –, indem sie die DOM-Interaktionen für Sie im Hintergrund übernehmen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihr Endstück Software größer und rechenintensiver zum Betrieb macht.

Ein gewisser zusätzlicher Code ist unvermeidbar, und ein Framework, das Tree-Shaking unterstützt (Entfernung von Code, der im Build-Prozess nicht tatsächlich in der App verwendet wird), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist dennoch ein Faktor, den Sie im Auge behalten müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf netzwerk-/speicherbeschränkten Geräten wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur Natur des Webs an sich. Egal, wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre ganze Anwendung in JavaScript schreiben, können Sie den Blick für HTML und den Zweck seiner verschiedenen Tags verlieren und ein HTML-Dokument erstellen, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne sie nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, ist es einfach, das zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit berücksichtigen, verstärken Frameworks Ihre Fragilität, Ihre Aufgeblähtheit und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstatt eines robusten, inhaltszentrierten Netzwerks von Dokumenten stellt das Web jetzt oft JavaScript zuerst und die Benutzererfahrung zuletzt.

## Barrierefreiheit im von Frameworks angetriebenen Web

Lassen Sie uns auf dem, was wir im vorherigen Abschnitt gesagt haben, aufbauen und etwas mehr über Barrierefreiheit sprechen. Benutzeroberflächen zugänglich zu machen erfordert immer einige Überlegungen und Anstrengungen, und Frameworks können diesen Prozess komplizieren. Sie müssen häufig erweiterte Framework-APIs verwenden, um auf native Browser-Funktionen wie ARIA [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) oder Fokusverwaltung zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren zur Barrierefreiheit, die bei traditionellen Websites nicht existieren. Das größte Beispiel dafür liegt im clientseitigen Routing, wie bereits erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus an den Anfang der Seite setzen soll und unterstützende Technologien kündigen den Titel der Seite an. Diese Dinge passieren jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, sodass er nicht weiß, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Mühe darauf verwendet, JavaScript zu schreiben, das diese Funktionen nachbildet, und selbst dann hat es kein Framework perfekt gemacht.

Das Fazit ist, dass Sie die Barrierefreiheit von Anfang an in _jedes_ Webprojekt einbeziehen sollten, aber beachten Sie, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul besprochenen Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes wird regelmäßig verbessert oder verändert, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigenen Forschungen anstellen, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu erforschen:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentationen (und andere Unterstützung) zur Verfügung?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browserunterstützung_, die von jedem Framework angeboten wird, sowie die **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domänenspezifische Sprachen (DSL)")}} program_language[Programmiersprachen, die in spezifischen Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Variationen von JavaScript oder HTML, die die Entwicklung mit diesem Framework erleichtern. Wichtig ist, dass keines der Frameworks einen Entwickler zwingt, eine bestimmte DSL zu verwenden, aber sie wurden fast alle mit einer bestimmten DSL im Hinterkopf entworfen. Wenn Sie sich entscheiden, keine bevorzugte DSL eines Frameworks zu verwenden, verpassen Sie möglicherweise Funktionen, die ansonsten Ihre Entwicklererfahrung verbessern würden.

Sie sollten ernsthaft den Unterstützungsmatrix und die DSLs eines Frameworks in Betracht ziehen, wenn Sie eine Entscheidung für ein neues Projekt treffen. Nicht übereinstimmende Browserunterstützung kann eine Barriere für Ihre Benutzer sein; nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browserunterstützung                   | Bevorzugte DSL | Unterstützte DSLs         | Zitat                                                                          |
| --------- | ------------------------------------- | -------------- | ------------------------- | ------------------------------------------------------------------------------ |
| Angular   | Modern                                | TypeScript     | HTML-basiert; TypeScript  | [offizielle Dokumente](https://angular.dev/guide/browser-support)              |
| React     | Modern                                | JSX            | JSX; TypeScript           | [offizielle Dokumente](https://react.dev/reference/react-dom/client#browser-support) |
| Vue       | Modern (IE9+ in Vue 2)                | HTML-basiert   | HTML-basiert, JSX, Pug    | [offizielle Dokumente](https://cli.vuejs.org/guide/browser-compatibility.html) |
| Ember     | Modern (IE9+ in Ember Version 2.18)   | Handlebars     | Handlebars, TypeScript    | [offizielle Dokumente](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind nicht standardmäßiges HTML, daher glauben wir, dass sie es wert sind, hervorgehoben zu werden.

### Hat das Framework eine starke Community?

Dies ist vielleicht das schwerste zu messende Kriterium, weil die Größe einer Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne oder wöchentlichen npm-Downloads eines Projekts überprüfen, um eine Vorstellung von seiner Beliebtheit zu bekommen, aber manchmal ist das Beste, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbaren Dokumentationen sind.

### Meinungen im Web

Verlassen Sie sich nicht nur auf unser Wort zu diesem Thema — es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation entschied sich kürzlich, Vue für ihr Frontend zu verwenden, und veröffentlichte eine [Anforderung für Kommentare zur Framework-Übernahme](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor der Anfrage, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts und warum bestimmte Frameworks gute Entscheidungen für das Team waren, darzulegen. Diese Anfrage dient als ein großartiges Beispiel für die Art der Forschung, die Sie für sich selbst durchführen sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über den Gebrauch von Frameworks und Entwicklermeinungen zu ihnen. Derzeit sind mehrere Jahre an Daten verfügbar, die Ihnen helfen können, ein Gefühl für die Beliebtheit eines Frameworks zu bekommen.

Das Vue-Team hat [Vue erschöpfend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es kann einige Voreingenommenheiten in diesem Vergleich geben (die sie vermerken), aber es ist immer noch eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen, und Sie wissen, dass Ihr Projekt keine intensive clientseitige JavaScript-Verarbeitung erfordert, können Sie auf eine Handvoll anderer Lösungen zurückgreifen, um das Web zu erstellen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein statischer Seitengenerator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne direkt selbst Code schreiben zu müssen. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Inhaltsautoren erfordern, die begrenzte Programmierkenntnisse haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Menge an Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest ein gewisses Maß an Kontrolle über das endgültige Ergebnis Ihrer Website aufgeben. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keine barrierefreien Inhalte erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die _Aufgabe_ des Servers ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, das die häufigste und einfachste Möglichkeit ist, eine JavaScript-Anwendung zu erstellen. Serverseitiges Rendering ist einfacher für das Gerät des Clients, da sie nur eine gerenderte HTML-Datei senden, aber es kann schwierig einzurichten sein im Vergleich zu einer clientseitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere "offizielle" Lösungen von den Entwicklern des Frameworks bereitgestellt werden.

### Statische Seitengeneratoren

[Statische Seitengeneratoren](/de/docs/Glossary/SSG) sind Programme, die dynamisch alle Webseiten einer mehrseitigen Website generieren - einschließlich aller relevanten CSS- oder JavaScript-Dateien -, so dass sie an beliebig vielen Orten veröffentlicht werden können. Der veröffentlichende Host könnte zum Beispiel ein GitHub-Pages-Branch, eine Netlify-Instanz oder ein privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, vor allem in Bezug auf Leistung (das Gerät des Benutzers erstellt die Seite nicht mit JavaScript; sie ist bereits fertig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Seiten können JavaScript verwenden, wo sie es müssen, sind aber nicht _darauf angewiesen_. Statische Seitengeneratoren benötigen Zeit zum Lernen, genau wie jedes andere Werkzeug, was ein Hindernis für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so viele oder so wenige einzigartige Seiten haben, wie Sie möchten. Genau wie Frameworks Ihnen helfen, schnell clientseitige JavaScript-Anwendungen zu schreiben, bieten statische Seitengeneratoren Ihnen einen Weg, schnell HTML-Dateien zu erstellen, die Sie ansonsten einzeln geschrieben hätten. Wie Frameworks erlauben Ihnen statische Seitengeneratoren, Komponenten zu schreiben, die gemeinsame Stücke Ihrer Webseiten definieren, und diese Komponenten zusammenzustellen, um eine endgültige Seite zu erstellen. Im Kontext von statischen Seitengeneratoren werden diese Komponenten **Templates** genannt. Webseiten, die von statischen Seitengeneratoren erstellt werden, können sogar Heim für Framework-Anwendungen sein: Wenn Sie wollen, dass eine bestimmte Seite Ihrer statisch erzeugten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Seitengeneratoren sind schon seit geraumer Zeit vorhanden, und sie stehen unter ständiger Optimierung und Innovation. Es gibt eine Reihe von Auswahlmöglichkeiten, einschließlich [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologie-Stacks aufbauen und unterschiedliche Features bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden clientseitige Frameworks anstelle von Templates, generieren aber ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Seitengeneratoren im Allgemeinen erfahren möchten, lesen Sie Tatiana Mac's [Einsteigerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Serie erklären sie, was ein statischer Seitengenerator ist und wie er sich auf andere Möglichkeiten zur Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden würden und wie Sie eines auswählen, und Sie neugierig gemacht, mehr zu lernen und sich wirklich damit zu beschäftigen!

Unser nächster Artikel geht auf eine niedrigere Ebene, in dem wir uns die spezifischen Arten von Funktionen ansehen, die Frameworks in der Regel bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
