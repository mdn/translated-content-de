---
title: Einführung in clientseitige Frameworks
short-title: Introduction
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

Wir beginnen unseren Überblick über Frameworks mit einer allgemeinen Einführung in das Thema. Wir betrachten die kurze Geschichte von JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man mit der Auswahl eines zu erlernenden Frameworks beginnt und welche Alternativen es zu clientseitigen Frameworks gibt.

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

## Die Entstehung von Bibliotheken und Frameworks

Als JavaScript 1996 erschien, brachte es gelegentliche Interaktivität und Spannung ins Web, das bis dahin aus statischen Dokumenten bestand. Das Web wurde zu einem Ort, an dem man nicht nur _Dinge lesen_, sondern _Dinge tun_ konnte. Die Popularität von JavaScript stieg stetig an. Entwickler, die mit JavaScript arbeiteten, schrieben Werkzeuge, um die Probleme zu lösen, mit denen sie konfrontiert waren, und fassten sie in wiederverwendbaren Paketen zusammen, die als **Bibliotheken** bezeichnet werden, damit sie ihre Lösungen mit anderen teilen konnten. Dieses gemeinsame Ökosystem von Bibliotheken half dabei, das Wachstum des Webs zu gestalten und führte schließlich zu Frameworks.

Ein **Framework** ist eine Bibliothek, die Meinungen darüber abgibt, wie Software gebaut wird. Diese Meinungen ermöglichen Vorhersehbarkeit und Homogenität in einer Anwendung; Vorhersehbarkeit ermöglicht es, dass die Software auf eine enorme Größe skaliert und dennoch wartbar bleibt; Vorhersehbarkeit und Wartbarkeit sind essenziell für die Gesundheit und Langlebigkeit von Software. Der Aufstieg moderner JavaScript-Frameworks hat es viel einfacher gemacht, hochdynamische, interaktive Anwendungen zu erstellen.

JavaScript-Frameworks treiben einen Großteil der beeindruckenden Software im modernen Web an – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die "großen Vier" als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde ursprünglich im Dezember 2011 als Fortsetzung der Arbeit am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework, das weniger Benutzer hat als modernere Alternativen wie React und Vue, aber es genießt immer noch eine gewisse Popularität aufgrund seiner Stabilität, Community-Unterstützung und einigen cleveren Codierungsprinzipien.

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das vom Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung des gleichen Teams, das [AngularJS](https://angularjs.org/) aufgebaut hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Templates verwendet. Zur Build-Zeit übersetzt der Compiler des Frameworks die Templates transparent für Entwickler in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, auf die wir im nächsten Kapitel etwas näher eingehen werden.

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen Vier, hat aber in letzter Zeit an Beliebtheit zugenommen.

Vue erweitert, wie [AngularJS](https://angularjs.org/), HTML mit eigenem Code. Abgesehen davon basiert es hauptsächlich auf modernem, standardisiertem JavaScript.

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es React bereits intern verwendet, um viele seiner eigenen Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zum Rendern von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen Entwicklern das Erstellen von mobilen Anwendungen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen ihnen das Erstellen von Webanwendungen, usw.

Weil React und ReactDOM so oft zusammen verwendet werden, wird React im allgemeinen Sprachgebrauch als JavaScript-Framework verstanden. Während Sie dieses Modul durchlesen, werden wir mit diesem Umgangsverständnis arbeiten.

React erweitert JavaScript mit HTML-ähnlicher Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

## Warum existieren Frameworks?

Wir haben über das Umfeld gesprochen, das die Entstehung von Frameworks inspiriert hat, aber nicht wirklich darüber, _warum_ Entwickler das Bedürfnis verspürten, sie zu erschaffen. Um das Warum zu erkunden, müssen wir zunächst die Herausforderungen der Softwareentwicklung betrachten.

Betrachten Sie eine gängige Art von Anwendung: ein To-Do-Listen-Ersteller, den wir in zukünftigen Kapiteln mit einer Vielzahl von Frameworks implementieren werden. Diese Anwendung sollte Benutzern erlauben, Dinge wie das Rendern einer Liste von Aufgaben zu tun, eine neue Aufgabe hinzuzufügen und eine Aufgabe zu löschen; und sie muss dies tun, während die darunterliegenden Daten der Anwendung zuverlässig verfolgt und aktualisiert werden. In der Softwareentwicklung sind diese darunterliegenden Daten als Zustand bekannt.

Jedes unserer Ziele ist theoretisch isoliert einfach. Wir können über die Daten iterieren, um sie zu rendern; wir können ein Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung es dem Benutzer ermöglichen muss, _all_ diese Dinge über den Browser zu tun, beginnen einige Risse an der Oberfläche zu erscheinen. **Das wirkliche Problem ist dies: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur _eine_ Funktion unserer To-Do-Listen-App betrachten: das Rendern einer Aufgabenliste.

## Die Umständlichkeit von DOM-Änderungen

HTML-Elemente zu erstellen und zum richtigen Zeitpunkt im Browser zu rendern, erfordert überraschend viel Code. Nehmen wir an, unser Zustand ist ein Array von Objekten, das so strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir unseren Benutzern eine dieser Aufgaben? Wir möchten jede Aufgabe als Listenelement – ein HTML-`<li>` in einem ungeordneten Listenelement (einem `<ul>`) darstellen. Wie machen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>` zu erstellen, und weitere Zeilen Code, um die benötigten Eigenschaften und Kindelemente zu erstellen.

Der vorherige Codeausschnitt verweist auf eine weitere Erstellungsfunktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, das wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button macht noch nichts, aber das wird sich ändern, sobald wir uns entscheiden, unsere Löschfunktion zu implementieren. Der Code, der unsere Elemente auf der Seite rendert, könnte etwa so aussehen:

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

Jetzt haben wir fast dreißig Zeilen Code, die sich _nur_ mit der Benutzeroberfläche befassen – _nur_ um etwas im DOM zu rendern – und an keiner Stelle fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu stylen!

Das direkte Arbeiten mit dem DOM, wie in diesem Beispiel, erfordert, viele Dinge über die Funktionsweise des DOMs zu verstehen: wie man Elemente erstellt; wie man ihre Eigenschaften ändert; wie man Elemente ineinander verschachtelt; wie man sie auf der Seite platziert. Keiner dieser Codes behandelt tatsächlich Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden entwickelt, um diese Art von Arbeit viel einfacher zu machen — sie existieren, um ein besseres _Entwicklererlebnis_ zu bieten. Sie bringen JavaScript keine brandneuen Fähigkeiten, sie geben Ihnen einfach leichteren Zugriff auf die Fähigkeiten von JavaScript, sodass Sie für das Web von heute entwickeln können.

Wenn Sie Codebeispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen](https://codepen.io/mxmason/pen/XWbPNmw) ansehen, die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Eine andere Art, Benutzeroberflächen zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen _deklarativer_ zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen sollte, und das Framework übernimmt im Hintergrund die Umsetzung im DOM.

Der Ansatz in Vanilla JavaScript, um neue DOM-Elemente in Wiederholungen zu erstellen, war schwer auf einen Blick zu verstehen. Im Gegensatz dazu zeigt der folgende Codeblock, wie Sie Vue verwenden könnten, um unsere Aufgabenliste zu beschreiben:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn Ihnen die geschweiften Klammern und `v-`-Attribute hier unbekannt sind, ist das in Ordnung; Sie werden die für Vue spezifische Syntax später im Modul kennenlernen. Die Erkenntnis hier ist, dass dieser Code wie die Benutzeroberfläche aussieht, die er darstellt, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen zum Erstellen der Benutzeroberfläche schreiben; das Framework erledigt das für uns auf eine optimierte, effiziente Weise. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was vor sich geht, wenn sie unserem Projekt beitreten. Vue ist dabei nicht alleine: Anwendungen mit einem Framework verbessern sowohl die Effizienz einzelner Entwickler als auch von Teams.

Es ist möglich, Dinge _ähnlich_ wie dies in Vanilla JavaScript zu tun. [Template Literal Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, Strings von HTML zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so Einfaches wie unsere To-Do-List-Anwendung sein, aber es ist nicht wartbar für große Anwendungen, die Tausende von Datensätzen verwalten und ebenso viele einzigartige Elemente in einer Benutzeroberfläche darstellen könnten.

## Andere Dinge, die Frameworks uns bieten

Werfen wir einen Blick auf einige der anderen Vorteile, die Frameworks bieten. Wie bereits angedeutet, sind die Vorteile von Frameworks in Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt die kognitive Belastung weg, diese Probleme selbst zu lösen.

### Werkzeuge

Da jedes der Frameworks in diesem Modul über eine große, aktive Community verfügt, stellt jedes Framework-Ökosystem Werkzeuge bereit, die das Entwicklererlebnis verbessern. Diese Werkzeuge machen es einfach, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung sich wie erwartet verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr Details über Web-Tooling-Konzepte erfahren möchten, schauen Sie sich unser [Client-side tooling overview](/de/docs/Learn_web_development/Extensions/Client-side_tools/Overview) an.

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren — wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der mit einer bestimmten Komponente zusammenhängt, kann in einer Datei (oder ein paar bestimmten Dateien) gespeichert werden, sodass Sie als Entwickler genau wissen, wohin Sie gehen müssen, um Änderungen an dieser Komponente vorzunehmen. In einer Vanilla-JavaScript-App müssten Sie Ihre eigene Reihe von Konventionen schaffen, um dies auf eine effiziente, skalierbare Weise zu erreichen. Viele JavaScript-Entwickler könnten, wenn sie sich selbst überlassen wären, dazu führen, dass der gesamte Code, der zu einem Teil der Benutzeroberfläche gehört, sich über eine Datei verteilt — oder in einer anderen Datei befindet.

### Routing

Das wichtigste Merkmal des Webs ist, dass es Benutzern ermöglicht, von einer Seite zur anderen zu navigieren – es ist schließlich ein Netzwerk von miteinander verbundenen Dokumenten. Wenn Sie einem Link auf dieser Website folgen, kommuniziert Ihr Browser mit einem Server und holt neue Inhalte, die Ihnen angezeigt werden. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und später zur Seite zurückkehren oder sie mit anderen teilen, damit sie die gleiche Seite leicht finden können. Ihr Browser merkt sich Ihre Navigationserfahrungen und ermöglicht Ihnen das Vor- und Zurückgehen in Ihrer Verlauf, ebenfalls. Dies wird **serverseitiges Routing** genannt.

Moderne Webanwendungen laden typischerweise keine neuen HTML-Dateien – sie laden ein einziges HTML-Shell und aktualisieren kontinuierlich das DOM darin (bekannt als **Single Page Apps** oder **SPAs**) ohne die Benutzer zu neuen Adressen im Web zu navigieren. Jede neue Pseudo-Webseite wird normalerweise als _Ansicht_ bezeichnet und standardmäßig wird kein Routing durchgeführt.

Wenn eine SPA komplex genug ist und genügend einzigartige Ansichten rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu bringen. Menschen sind es gewohnt, auf spezifische Seiten in einer Anwendung verlinken zu können, vor- und zurückzubewegen in ihrer Navigationserfahrung usw., und ihre Erfahrung leidet, wenn diese standardmäßigen Web-Funktionen gebrochen sind. Wenn das Routing von einer Client-Anwendung auf diese Weise gehandhabt wird, wird es treffend **clientseitiges Routing** genannt.

Es ist _möglich_ einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben begleitende Bibliotheken, die das Routing zu einem intuitiveren Bestandteil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Ein effektiver Webentwickler zu sein bedeutet, die am besten geeigneten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks machen die Erstellung von Front-End-Anwendungen einfach, aber sie sind keine Wunderwaffe, die alle Probleme löst. In diesem Abschnitt wird über einige der Dinge gesprochen, die Sie bei der Verwendung von Frameworks berücksichtigen sollten. Bedenken Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, dass Sie nicht einfach ein Framework verwenden, nur um eines zu verwenden.

### Vertrautheit mit dem Werkzeug

Genau wie Vanilla JavaScript benötigen auch Frameworks Zeit zum Erlernen und haben ihre Eigenheiten. Bevor Sie entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genügend seiner Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen auch damit vertraut sind.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit einigen wenigen Seiten ist und diese Seiten wenig oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das gesagt, Frameworks sind nicht monolithisch, und einige von ihnen eignen sich besser für kleine Projekte als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größerer Code-Bestand und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativeren Code zu schreiben – und manchmal _weniger_ Code insgesamt – indem sie hinter den Kulissen die DOM-Interaktionen für Sie behandeln. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihr endgültiges Softwarestück größer und rechnerisch teurer zu betreiben macht.

Einige zusätzliche Codes sind unvermeidlich, und ein Framework, das Tree-Shaking unterstützt (Entfernung von nicht tatsächlich verwendeten Code im App während des Build-Prozesses), ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber dies ist immer noch ein Faktor, den Sie im Kopf behalten müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf netzwerkspeicherbeschränkten Geräten, wie Mobiltelefonen.

Die Abstraktion von Frameworks betrifft nicht nur Ihr JavaScript, sondern auch Ihr Verhältnis zur eigentlichen Natur des Webs. Wie auch immer Sie für das Web entwickeln, das Endergebnis, die Schicht, mit der Ihre Benutzer letztlich interagieren, ist HTML. Wenn Sie Ihre gesamte Anwendung in JavaScript schreiben, könnte dies dazu führen, dass Sie den HTML und den Zweck seiner verschiedenen Tags aus den Augen verlieren, und Sie dazu führen, ein Dokument zu produzieren, dass unsemantisch und unzugänglich ist. In der Tat ist es möglich, eine fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne es nicht funktioniert.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten könnte jede Anwendung zerbrechlich, aufgebläht und unzugänglich sein. Frameworks verstärken jedoch unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Webanwendung zu erstellen, ist es einfach, das zu tun. Wenn Ihre Prioritäten jedoch nicht sorgfältig Leistung und Zugänglichkeit schützen, verstärken Frameworks Ihre Zerbrechlichkeit, Ihre Aufblähung und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Statt einem robusten, content-ersten Netzwerk von Dokumenten, stellt das Web heutzutage oft JavaScript zuerst und Benutzererfahrung zuletzt.

## Zugänglichkeit auf einem Framework-gesteuerten Web

Lassen Sie uns auf dem, was wir im vorherigen Abschnitt gesagt haben, aufbauen und ein wenig mehr über Zugänglichkeit sprechen. Die Erstellung von benutzerfreundlichen Schnittstellen erfordert immer etwas Überlegung und Aufwand, und Frameworks können diesen Prozess komplizieren. Sie müssen oft erweiterte Framework-APIs verwenden, um auf native Browser-Funktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) oder Fokusverwaltung zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Zugangsbarrieren, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür liegt im clientseitigen Routing, wie bereits erwähnt.

Beim traditionellen (serverseitigen) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den oberen Rand der Seite setzen und unterstützende Technologien den Titel der Seite ankündigen wird. Diese Dinge geschehen jedes Mal, wenn Sie zu einer neuen Seite navigieren.

Beim clientseitigen Routing lädt Ihr Browser keine neuen Webseiten, also weiß er nicht, dass er automatisch den Fokus anpassen oder einen neuen Seitentitel ankündigen sollte. Framework-Autoren haben immense Zeit und Arbeit in die Entwicklung von JavaScript investiert, das diese Funktionen nachbildet, und selbst dann hat es kein Framework perfekt gemacht.

Das Fazit ist, dass Sie Zugänglichkeit von Anfang an in jedes Webprojekt einbeziehen sollten, aber bedenken Sie, dass abstrahierte Codebasen, die Frameworks nutzen, eher unter großen Zugangsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul behandelten Frameworks geht bei der Entwicklung von Webanwendungen unterschiedlich vor. Jedes verbessert oder verändert sich regelmäßig, und jedes hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist ein team- und projektabhängiger Prozess, und Sie sollten Ihre eigene Forschung betreiben, um zu entdecken, was Ihren Anforderungen entspricht. Das gesagt, wir haben einige Fragen identifiziert, die Sie sich stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domain-spezifischen Sprachen nutzt das Framework?
3. Hat das Framework eine starke Community und gute Dokumentationen (sowie andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine übersichtliche Zusammenfassung der aktuellen _Browser-Unterstützung_, die von jedem Framework angeboten wird, sowie der **domain-spezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind {{Glossary("DSL/Domain_specific_language", "domain-spezifische Sprachen (DSLs)")}} Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Zusammenhang mit Frameworks sind DSLs Varianten von JavaScript oder HTML, die es einfacher machen, mit diesem Framework zu arbeiten. Entscheiden sich Entwickler dagegen, die bevorzugte DSL eines Frameworks zu verwenden, verzichten sie möglicherweise auf Funktionen, die ihnen ansonsten das Entwicklererlebnis verbessern würden.

Sie sollten ernsthaft die Unterstützungsmatrix und DSLs eines Frameworks in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Nicht übereinstimmende Browserunterstützung kann eine Barriere für Ihre Benutzer darstellen; nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen darstellen.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Quelle                                                                                     |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember Version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind keine echten DSLs, aber sie sind kein Standard-HTML, daher glauben wir, dass es wert ist, sie hervorzuheben.

### Hat das Framework eine starke Community?

Dies ist möglicherweise die schwierigste Kennzahl zu messen, da die Community-Größe nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der GitHub-Sterne eines Projekts oder wöchentlichen npm-Downloads überprüfen, um eine Vorstellung von seiner Popularität zu bekommen, aber manchmal ist das Beste, was man tun kann, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist, und wie gut die verfügbaren Dokumentationen sind.

### Meinungen im Web

Verlassen Sie sich nicht nur auf unser Wort zu dieser Angelegenheit — es gibt Diskussionen im gesamten Web dazu. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Frontend zu verwenden, und veröffentlichte einen [Request for Comments (RFC) zur Annahme von Frameworks](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts darzulegen und warum bestimmte Frameworks gute Wahlmöglichkeiten für das Team waren. Dieses RFC dient als großartiges Beispiel dafür, welche Art von Forschung Sie selbst betreiben sollten, wenn Sie planen, ein Frontend-Framework zu verwenden.

Die [State of JavaScript-Umfrage](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie behandelt viele Themen im Zusammenhang mit JavaScript, einschließlich Daten über sowohl die Verwendung von Frameworks als auch deren Wahrnehmung durch Entwickler. Derzeit stehen mehrere Jahre Daten zur Verfügung, die Ihnen einen Eindruck von der Popularität eines Frameworks vermitteln.

Das Vue-Team hat [Vue umfassend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte hier eine gewisse Voreingenommenheit geben (was sie bemerken), aber es ist trotzdem eine wertvolle Ressource.

## Alternativen zu clientseitigen Frameworks

Wenn Sie nach Tools suchen, um den Webentwicklungsprozess zu beschleunigen, und wissen, dass Ihr Projekt keine intensive clientseitige JavaScript erfordert, könnten Sie eines von mehreren anderen Lösungen zur Webentwicklung in Betracht ziehen:

- Ein Content-Management-System
- Serverseitiges Rendering
- Ein statischer Site-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind Werkzeuge, die es einem Benutzer ermöglichen, Inhalte für das Web zu erstellen, ohne direkt selbst Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Content-Autoren erfordern, die über eingeschränkte Programmierkenntnisse verfügen, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine bedeutende Menge an Einrichtungszeit, und die Verwendung eines CMS bedeutet, dass Sie zumindest ein gewisses Maß an Kontrolle über das Endergebnis Ihrer Website aufgeben müssen. Zum Beispiel: Wenn Ihr gewähltes CMS standardmäßig keinen barrierefreien Inhalt erstellt, ist es oft schwierig, dies zu verbessern.

Einige der gängigen CMS-Systeme sind [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://new.drupal.org/).

### Serverseitiges Rendering

**Serverseitiges Rendering** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung zu rendern. Dies ist das Gegenteil von _clientseitigem Rendering_, was die gebräuchlichste und einfachste Weise ist, um eine JavaScript-Anwendung zu erstellen. Das Server-seitige Rendering ist einfacher auf dem Gerät des Kunden, da Sie ihnen nur eine gerenderte HTML-Datei schicken, aber es kann im Vergleich mit einer clientseitig gerenderten Anwendung schwieriger einzurichten sein.

All die in diesem Modul behandelten Frameworks unterstützen sowohl serverseitiges Rendering als auch clientseitiges Rendering. Schauen Sie sich [Next.js](https://nextjs.org/) für React, [Nuxt](https://nuxt.com/) für Vue (ja, das ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember, und [Angular Universal](https://angular.dev/guide/universal) für Angular an.

> [!NOTE]
> Einige SSR-Lösungen sind von der Community geschrieben und gewartet, während einige "offizielle" Lösungen vom Ersteller des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

{{Glossary("SSG", "Statische Site-Generatoren")}} sind Programme, die dynamisch alle Webseiten einer mehrseitigen Website generieren — einschließlich der relevanten CSS- oder JavaScript-Dateien — damit sie an mehreren Stellen veröffentlicht werden können. Der Veröffentlichungs-Host könnte ein GitHub-Pages-Branch, eine Netlify-Instanz oder ein beliebiger privater Server Ihrer Wahl sein. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, vor allem hinsichtlich Leistung (das Gerät Ihres Benutzers erstellt die Seite nicht mit JavaScript, sie ist bereits fertig) und Sicherheit (statische Seiten haben weniger Angriffspunkte). Diese Seiten können dennoch JavaScript verwenden, wo sie es benötigen, aber sie sind _nicht_ davon abhängig. Statische Site-Generatoren benötigen Zeit zum Erlernen, genau wie jedes andere Werkzeug, das eine Barriere für Ihren Entwicklungsprozess sein kann.

Statische Sites können so wenige oder viele einzigartige Seiten haben, wie Sie möchten. Genau wie Frameworks Ihnen helfen, schnell clientseitige JavaScript-Anwendungen zu schreiben, geben Ihnen statische Site-Generatoren die Möglichkeit, HTML-Dateien schnell zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen es statische Site-Generatoren Entwicklern, Komponenten zu schreiben, die allgemeine Teile Ihrer Webseiten definieren, und diese Komponenten zusammenzufügen, um eine endgültige Seite zu erstellen. Im Kontext der statischen Site-Generatoren werden diese Komponenten **Templates** genannt. Webseiten, die von statischen Site-Generatoren erstellt wurden, können sogar Heimat von Framework-Anwendungen sein: Wenn Sie möchten, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn der Benutzer die Seite besucht, können Sie das tun.

Statische Site-Generatoren gibt es schon seit langem, und sie werden kontinuierlich optimiert und innoviert. Es gibt eine Reihe von Auswahlmöglichkeiten, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologie-Stacks aufbauen und einzigartige Funktionen bieten. Andere Optionen wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/) verwenden clientseitige Frameworks anstelle von Templates, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen erfahren möchten, sehen Sie sich Tatiana Macs [Beginner's guide to Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/) an. Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich von anderen Mitteln zur Veröffentlichung von Webinhalten unterscheidet.

## Zusammenfassung

Und das führt uns zum Ende unserer Einführung in Frameworks — wir haben Ihnen noch keinen Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie überhaupt Frameworks verwenden würden und wie Sie eins auswählen können, und Sie dazu angeregt, mehr zu lernen und loszulegen!

Unser nächster Artikel geht auf einer niedrigeren Ebene ein und behandelt die spezifischen Arten von Funktionen, die Frameworks normalerweise bieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
