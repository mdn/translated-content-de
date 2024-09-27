---
title: Einführung in Client-seitige Frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir beginnen unseren Blick auf Frameworks mit einem allgemeinen Überblick über das Thema, einen kurzen Rückblick auf JavaScript und Frameworks, warum Frameworks existieren und was sie uns bieten, wie man beginnt, über die Auswahl eines Frameworks zum Lernen nachzudenken, und welche Alternativen es zu Client-seitigen Frameworks gibt.

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
        Zu verstehen, wie Client-seitige JavaScript-Frameworks entstanden sind, welche Probleme sie lösen, welche Alternativen es gibt und wie man sich für eines entscheidet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte

Als JavaScript 1996 debütierte, fügte es occasionele Interaktivität und Aufregung zu einem bis dahin aus statischen Dokumenten bestehenden Web hinzu. Das Web wurde nicht nur ein Ort, um Dinge zu _lesen_, sondern um Dinge zu _tun_. Die Popularität von JavaScript nahm stetig zu. Entwickler, die mit JavaScript arbeiteten, schrieben Tools zur Lösung der von ihnen gestellten Probleme und verpackten sie in wiederverwendbare Pakete, sogenannte **Bibliotheken**, um ihre Lösungen mit anderen zu teilen. Dieses gemeinsame Ökosystem an Bibliotheken formte das Wachstum des Webs mit.

Heute ist JavaScript ein wesentlicher Bestandteil des Webs, [auf 98% aller Websites verwendet](https://w3techs.com/technologies/details/cp-javascript), und das Web ist ein wesentlicher Bestandteil des modernen Lebens. Nutzer schreiben Beiträge, verwalten ihre Finanzen, streamen Musik, schauen Filme und kommunizieren mit anderen über große Entfernungen in Echtzeit, mit Text-, Audio- oder Video-Chat. Das Web ermöglicht es uns, Dinge zu tun, die früher nur in nativen Anwendungen auf unseren Computern möglich waren. Diese modernen, komplexen, interaktiven Websites werden oft als **Webanwendungen** bezeichnet.

Die Einführung moderner JavaScript-Frameworks hat es wesentlich einfacher gemacht, hochdynamische, interaktive Anwendungen zu entwickeln. Ein **Framework** ist eine Bibliothek, die Meinungen darüber bietet, wie Software entwickelt wird. Diese Meinungen erlauben Vorhersagbarkeit und Homogenität in einer Anwendung; Vorhersagbarkeit ermöglicht es der Software, zu einer enormen Größe zu skalieren und dennoch wartbar zu bleiben; Vorhersagbarkeit und Wartbarkeit sind für die Gesundheit und Langlebigkeit von Software wesentlich.

JavaScript-Frameworks versorgen viele der beeindruckenden Anwendungen im modernen Web – einschließlich vieler der Websites, die Sie wahrscheinlich täglich nutzen. MDN Web Docs, die Sie gerade lesen, verwenden das React/ReactDOM-Framework, um das Frontend anzutreiben.

## Welche Frameworks gibt es?

Es gibt viele Frameworks, aber derzeit werden die „großen Vier“ als die folgenden angesehen.

### Ember

[Ember](https://emberjs.com/) wurde ursprünglich im Dezember 2011 als Fortsetzung der Arbeiten am [SproutCore](https://en.wikipedia.org/wiki/SproutCore)-Projekt veröffentlicht. Es ist ein älteres Framework mit weniger Nutzern als modernere Alternativen wie React und Vue, genießt aber immer noch eine gewisse Beliebtheit aufgrund seiner Stabilität, Gemeinschaftsunterstützung und einiger cleverer Codierungsprinzipien.

[Beginnen Sie, Ember zu lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.dev/) ist ein Open-Source-Webanwendungs-Framework, das von dem Angular-Team bei Google und einer Gemeinschaft von Einzelpersonen und Unternehmen geleitet wird. Es ist eine vollständige Neufassung desselben Teams, das [AngularJS](https://angularjs.org/) geschaffen hat. Angular wurde offiziell am 14. September 2016 veröffentlicht.

Angular ist ein komponentenbasiertes Framework, das deklarative HTML-Vorlagen verwendet. Zur Build-Zeit, transparent für Entwickler, übersetzt der Compiler des Frameworks die Vorlagen in optimierte JavaScript-Anweisungen. Angular verwendet [TypeScript](https://www.typescriptlang.org/), eine Obermenge von JavaScript, die wir im nächsten Kapitel etwas genauer betrachten.

[Beginnen Sie, Angular zu lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

Nachdem er am ursprünglichen [AngularJS](https://angularjs.org/)-Projekt gearbeitet und daraus gelernt hatte, veröffentlichte Evan You [Vue](https://vuejs.org/) im Jahr 2014. Vue ist das jüngste der großen Vier, hat aber kürzlich an Popularität gewonnen.

Vue, wie [AngularJS](https://angularjs.org/), erweitert HTML mit einigem eigenen Code. Abgesehen davon verlässt es sich hauptsächlich auf modernes, standardmäßiges JavaScript.

[Beginnen Sie, Vue zu lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook veröffentlichte [React](https://react.dev/) im Jahr 2013. Zu diesem Zeitpunkt hatte es React bereits intern genutzt, um viele seiner Probleme zu lösen. Technisch gesehen ist React selbst _kein_ Framework; es ist eine Bibliothek zur Darstellung von UI-Komponenten. React wird in Kombination mit _anderen_ Bibliotheken verwendet, um Anwendungen zu erstellen – React und [React Native](https://reactnative.dev/) ermöglichen es Entwicklern, mobile Anwendungen zu erstellen; React und [ReactDOM](https://react.dev/reference/react-dom) ermöglichen es ihnen, Webanwendungen zu erstellen, usw.

Da React und ReactDOM so häufig zusammen verwendet werden, wird React umgangssprachlich als JavaScript-Framework verstanden. Während Sie dieses Modul durchlesen, werden wir mit diesem umgangssprachlichen Verständnis arbeiten.

React erweitert JavaScript mit einer HTML-ähnlichen Syntax, bekannt als [JSX](https://react.dev/learn/writing-markup-with-jsx).

[Beginnen Sie, React zu lernen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Warum existieren Frameworks?

Wir haben die Umgebung besprochen, die zur Schaffung von Frameworks inspiriert hat, aber nicht wirklich _warum_ Entwickler das Bedürfnis verspürten, sie zu erstellen. Um das Warum zu erforschen, muss man zunächst die Herausforderungen der Softwareentwicklung untersuchen.

Betrachten Sie eine häufige Art von Anwendung: Einen Aufgabenlisten-Ersteller, den wir in zukünftigen Kapiteln mit verschiedenen Frameworks umsetzen werden. Diese Anwendung sollte es Benutzern ermöglichen, Dinge wie das Darstellen einer Aufgabenliste, das Hinzufügen einer neuen Aufgabe und das Löschen einer Aufgabe zu tun; und es muss dies tun, während es zuverlässig die Daten verfolgt und aktualisiert, die der Anwendung zugrunde liegen. In der Softwareentwicklung werden diese zugrunde liegenden Daten als Zustand bezeichnet.

Jedes unserer Ziele ist theoretisch einfach isoliert betrachtet. Wir können über die Daten iterieren, um sie darzustellen; wir können ein Objekt hinzufügen, um eine neue Aufgabe zu erstellen; wir können einen Bezeichner verwenden, um eine Aufgabe zu finden, zu bearbeiten oder zu löschen. Wenn wir uns daran erinnern, dass die Anwendung dem Benutzer _all diese Dinge_ durch den Browser ermöglichen muss, beginnen einige Risse sichtbar zu werden. **Das eigentliche Problem ist dieses: Jedes Mal, wenn wir den Zustand unserer Anwendung ändern, müssen wir die Benutzeroberfläche entsprechend aktualisieren.**

Wir können die Schwierigkeit dieses Problems untersuchen, indem wir nur _eine_ Funktionalität unserer Aufgabenlisten-App betrachten: das Rendern einer Liste von Aufgaben.

## Die Verbosität von DOM-Änderungen

HTML-Elemente zu erstellen und sie zu einer angemessenen Zeit im Browser darzustellen, erfordert überraschend viel Code. Nehmen wir an, dass unser Zustand ein Array von Objekten ist, das folgendermaßen strukturiert ist:

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

Wie zeigen wir eine dieser Aufgaben unseren Benutzern? Wir möchten jede Aufgabe als Listenelement darstellen – ein HTML-Element [`<li>`](/de/docs/Web/HTML/Element/li) innerhalb eines ungeordneten Listenelements (ein [`<ul>`](/de/docs/Web/HTML/Element/ul)). Wie erstellen wir das? Das könnte so aussehen:

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

Hier verwenden wir die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement), um unser `<li>`-Element zu erstellen, sowie mehrere weitere Codezeilen, um die Eigenschaften und Kindelemente zu erstellen, die es benötigt.

Der vorherige Codeausschnitt verweist auf eine weitere Build-Funktion: `buildDeleteButtonEl()`. Sie folgt einem ähnlichen Muster wie das, welches wir verwendet haben, um ein Listenelement zu erstellen:

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  return button;
}
```

Dieser Button tut im Moment noch nichts, aber er wird es tun, sobald wir unsere Löschfunktion implementieren. Der Code, der unsere Listenelemente auf der Seite rendert, könnte in etwa so aussehen:

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

Wir haben jetzt fast dreißig Zeilen Code, die _nur_ der Benutzeroberfläche gewidmet sind – _nur_ um etwas im DOM darzustellen – und an keiner Stelle fügen wir Klassen hinzu, die wir später verwenden könnten, um unsere Listenelemente zu gestalten!

Direkt mit dem DOM zu arbeiten, wie in diesem Beispiel, erfordert ein Verständnis vieler Dinge darüber, wie das DOM funktioniert: wie Elemente erstellt werden; wie ihre Eigenschaften geändert werden; wie Elemente ineinander eingefügt werden; wie sie auf die Seite gebracht werden. Keiner dieser Codeausschnitte behandelt tatsächlich Benutzerinteraktionen oder das Hinzufügen oder Löschen einer Aufgabe. Wenn wir diese Funktionen hinzufügen, müssen wir daran denken, unsere Benutzeroberfläche zur richtigen Zeit und auf die richtige Weise zu aktualisieren.

JavaScript-Frameworks wurden geschaffen, um diese Art von Arbeit viel einfacher zu machen – sie existieren, um eine bessere _Entwicklererfahrung_ zu bieten. Sie bringen keine brandneuen Fähigkeiten zu JavaScript; sie geben Ihnen einfacheren Zugang zu den Fähigkeiten von JavaScript, damit Sie für das Web von heute entwickeln können.

Wenn Sie Code-Beispiele aus diesem Abschnitt in Aktion sehen möchten, können Sie sich eine [funktionierende Version der App auf CodePen ansehen](https://codepen.io/mxmason/pen/XWbPNmw), die es Benutzern auch ermöglicht, neue Aufgaben hinzuzufügen und zu löschen.

Lesen Sie mehr über die in diesem Abschnitt verwendeten JavaScript-Funktionen:

- [`Array.forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)

## Ein anderer Weg, UIs zu erstellen

Jedes JavaScript-Framework bietet eine Möglichkeit, Benutzeroberflächen auf eine _deklarativere_ Weise zu schreiben. Das heißt, sie ermöglichen es Ihnen, Code zu schreiben, der beschreibt, wie Ihre Benutzeroberfläche aussehen soll, und das Framework setzt es im Hintergrund im DOM um.

Der Vanilla-JavaScript-Ansatz zum Aufbau neuer DOM-Elemente in Wiederholung war schwer auf den ersten Blick zu verstehen. Im Gegensatz dazu illustriert der folgende Codeblock, wie Sie mit Vue unsere Liste der Aufgaben beschreiben könnten:

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

Das war's. Dieses Code-Snippet reduziert fast dreißig Zeilen Code auf sechs Zeilen. Wenn die geschweiften Klammern und `v-` Attribute hier für Sie noch unbekannt sind, ist das in Ordnung; Sie werden im Verlauf des Moduls mehr über die Vue-spezifische Syntax lernen. Das Wesentliche ist hier, dass dieser Code wie die UI aussieht, die er repräsentiert, während der Vanilla-JavaScript-Code dies nicht tut.

Dank Vue mussten wir keine eigenen Funktionen für den Aufbau der Benutzeroberfläche schreiben; das Framework wird diese Aufgabe für uns auf eine optimierte, effiziente Weise übernehmen. Unsere einzige Rolle hier war es, Vue zu beschreiben, wie jedes Element aussehen sollte. Entwickler, die mit Vue vertraut sind, können schnell herausfinden, was passiert, wenn sie unserem Projekt beitreten. Vue ist hierin nicht allein: Die Verwendung eines Frameworks verbessert die Effizienz des Teams sowie die individuelle Effizienz.

Es ist möglich, ähnliche Dinge im Vanilla JavaScript zu tun. [Template-Literal-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) machen es einfach, HTML-Strings zu schreiben, die darstellen, wie das endgültige Element aussehen würde. Das könnte eine nützliche Idee für etwas so einfach wie unsere Aufgabenlisten-Anwendung sein, aber es ist für große Anwendungen, die Tausende von Datensätzen verwalten und genauso viele einzigartige Elemente in einer Benutzeroberfläche darstellen könnten, nicht wartbar.

## Weitere Dinge, die Frameworks uns bieten

Lassen Sie uns einige der anderen Vorteile betrachten, die Frameworks bieten. Wie wir zuvor angedeutet haben, sind die Vorteile von Frameworks mit Vanilla JavaScript erreichbar, aber die Verwendung eines Frameworks nimmt die gesamte kognitive Last des selbstständigen Lösens dieser Probleme ab.

### Werkzeuge

Da jedes der Frameworks in diesem Modul über eine große, aktive Gemeinschaft verfügt, bietet das Ökosystem jedes Frameworks Werkzeuge, die die Entwicklererfahrung verbessern. Diese Werkzeuge machen es einfach, Dinge wie Tests (um sicherzustellen, dass Ihre Anwendung sich wie gewünscht verhält) oder Linting (um sicherzustellen, dass Ihr Code fehlerfrei und stilistisch konsistent ist) hinzuzufügen.

> [!NOTE]
> Wenn Sie mehr über Web-Tooling-Konzepte erfahren möchten, werfen Sie einen Blick auf unsere [Übersicht über Client-seitige Tools](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview).

### Kompartimentierung

Die meisten großen Frameworks ermutigen Entwickler, die verschiedenen Teile ihrer Benutzeroberflächen in _Komponenten_ zu abstrahieren – wartbare, wiederverwendbare Codeblöcke, die miteinander kommunizieren können. Der gesamte Code, der zu einer bestimmten Komponente gehört, kann in einer Datei (oder ein paar spezifischen Dateien) untergebracht werden, sodass Sie als Entwickler genau wissen, wo Sie Änderungen an dieser Komponente vornehmen müssen. In einer Vanilla-Javascript-App müssten Sie Ihre eigene Methode entwickeln, um dies effizient und skalierbar zu bewerkstelligen. Viele JavaScript-Entwickler könnten, sich selbst überlassen, am Ende den gesamten Code, der zu einem Teil der Benutzeroberfläche gehört, über eine Datei verstreut haben – oder in einer anderen Datei.

### Routing

Das wesentliche Merkmal des Web besteht darin, dass Benutzer von einer Seite zur anderen navigieren können – es ist schließlich ein Netzwerk von verbundenen Dokumenten. Wenn Sie auf dieser Website einem Link folgen, kommuniziert Ihr Browser mit einem Server und ruft neuen Inhalt ab, der angezeigt wird. Dabei ändert sich die URL in Ihrer Adressleiste. Sie können diese neue URL speichern und die Seite später erneut besuchen oder sie mit anderen teilen, damit diese leicht dieselbe Seite finden können. Ihr Browser merkt sich Ihren Navigationsverlauf und ermöglicht Ihnen das Vor- und Zurücknavigieren. Dies wird als **Server-seitiges Routing** bezeichnet.

Moderne Webanwendungen laden in der Regel keine neuen HTML-Dateien; sie laden eine einzige HTML-Hülle und aktualisieren kontinuierlich das DOM darin (bezeichnet als **Single Page Apps** oder **SPAs**) ohne den Benutzer zu neuen Adressen im Web zu navigieren. Jede neue pseudo-Webseite wird normalerweise als _View_ bezeichnet, und standardmäßig erfolgt kein Routing.

Wenn eine SPA komplex genug ist und genügend einzigartige Views rendert, ist es wichtig, Routing-Funktionalität in Ihre Anwendung zu integrieren. Die Benutzer sind es gewohnt, auf bestimmte Seiten in einer Anwendung verlinken zu können, in ihrem Navigationsverlauf vor- und zurückzureisen usw., und ihre Erfahrung leidet, wenn diese Standard-Webfunktionen eingeschränkt sind. Wenn Routing von einer Client-Anwendung in dieser Weise behandelt wird, wird es zutreffend als **Client-seitiges Routing** bezeichnet.

Es ist _möglich_, einen Router mit den nativen Fähigkeiten von JavaScript und dem Browser zu erstellen, aber beliebte, aktiv entwickelte Frameworks haben Begleitbibliotheken, die Routing zu einem intuitiveren Teil des Entwicklungsprozesses machen.

## Dinge, die bei der Verwendung von Frameworks zu beachten sind

Effektive Webentwicklung bedeutet, die am besten geeigneten Werkzeuge für die Aufgabe zu verwenden. JavaScript-Frameworks machen die Frontend-Anwendungsentwicklung einfach, sind jedoch keine Allheilmittel, die alle Probleme lösen. Dieser Abschnitt behandelt einige der Dinge, die Sie bei der Verwendung von Frameworks beachten sollten. Beachten Sie, dass Sie möglicherweise überhaupt kein Framework benötigen – achten Sie darauf, nicht einfach ein Framework der Einfachheit halber zu verwenden.

### Vertrautheit mit dem Werkzeug

Wie bei Vanilla-Javascript brauchen auch Frameworks Zeit zum Lernen und haben ihre Eigenarten. Bevor Sie sich entscheiden, ein Framework für ein Projekt zu verwenden, stellen Sie sicher, dass Sie genug Zeit haben, um genug von seinen Funktionen zu lernen, damit es Ihnen nützlich ist, anstatt es gegen Sie zu arbeiten, und stellen Sie sicher, dass Ihre Teamkollegen sich ebenfalls damit wohlfühlen.

### Überengineering

Wenn Ihr Webentwicklungsprojekt ein persönliches Portfolio mit wenigen Seiten ist und diese Seiten kaum oder keine interaktive Fähigkeit haben, ist ein Framework (und all sein JavaScript) möglicherweise überhaupt nicht notwendig. Das heißt, Frameworks sind nicht monolithisch, und einige eignen sich besser für kleine Projekte als andere. In einem Artikel für Smashing Magazine schreibt Sarah Drasner darüber, wie [Vue jQuery ersetzen kann](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) als Werkzeug, um kleine Teile einer Webseite interaktiv zu machen.

### Größere Codebasis und Abstraktion

Frameworks ermöglichen es Ihnen, deklarativer – und manchmal insgesamt _weniger_ Code zu schreiben – indem sie die DOM-Interaktionen für Sie im Hintergrund übernehmen. Diese Abstraktion ist großartig für Ihre Erfahrung als Entwickler, aber sie ist nicht kostenlos. Um das, was Sie schreiben, in DOM-Änderungen zu übersetzen, müssen Frameworks ihren eigenen Code ausführen, was wiederum Ihre fertige Software größer und rechnerisch teurer in der Ausführung macht.

Ein gewisser zusätzlicher Code ist unvermeidlich, und ein Framework, das Tree-Shaking (Entfernen von nicht tatsächlich im App-Bauprozess verwendetem Code) unterstützt, ermöglicht es Ihnen, Ihre Anwendungen klein zu halten, aber das ist immer noch ein Faktor, den Sie berücksichtigen müssen, wenn Sie die Leistung Ihrer App in Betracht ziehen, insbesondere auf netzwerk-/speicherbeschränkten Geräten, wie Mobiltelefone.

Die Abstraktion von Frameworks beeinflusst nicht nur Ihr JavaScript, sondern auch Ihre Beziehung zur Natur des Webs. Egal wie Sie für das Web bauen, das Endergebnis, die Schicht, mit der Ihre Benutzer letztendlich interagieren, ist HTML. Wenn Sie Ihre ganze Anwendung in JavaScript schreiben, kann es passieren, dass Sie den Überblick über HTML und den Zweck seiner verschiedenen Tags verlieren und ein HTML-Dokument produzieren, das unsemantisch und unzugänglich ist. Tatsächlich ist es möglich, eine z fragile Anwendung zu schreiben, die vollständig von JavaScript abhängt und ohne es nicht funktionieren kann.

Frameworks sind nicht die Quelle unserer Probleme. Mit den falschen Prioritäten kann jede Anwendung fragil, aufgebläht und unzugänglich sein. Frameworks jedoch verstärken unsere Prioritäten als Entwickler. Wenn Ihre Priorität darin besteht, eine komplexe Web-App zu erstellen, ist es einfach, das zu tun. Wenn jedoch Ihre Prioritäten nicht sorgfältig Leistung und Zugänglichkeit im Auge behalten, verstärken Frameworks Ihre Fragilität, Ihren Overhead und Ihre Unzugänglichkeit. Moderne Entwicklerprioritäten, verstärkt durch Frameworks, haben die Struktur des Webs an vielen Stellen umgekehrt. Anstelle eines robusten, content-first Netzwerks an Dokumenten, setzt das Web nun oft JavaScript an die erste Stelle und das Benutzererlebnis an die letzte.

## Barrierefreiheit im framework-gesteuerten Web

Lassen Sie uns auf dem aufbauen, was wir im vorherigen Abschnitt gesagt haben, und etwas mehr über Barrierefreiheit sprechen. Benutzeroberflächen zugänglich zu gestalten, erfordert immer etwas Überlegung und Anstrengung, und Frameworks können diesen Prozess komplizieren. Oft müssen Sie erweiterte Framework-APIs verwenden, um auf native Browser-Funktionen wie ARIA [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) oder Fokusmanagement zuzugreifen.

In einigen Fällen schaffen Framework-Anwendungen Barrieren für die Barrierefreiheit, die für traditionelle Websites nicht existieren. Das größte Beispiel dafür ist im Client-seitigen Routing, wie bereits erwähnt.

Mit traditionellem (Server-seitigem) Routing hat das Navigieren im Web vorhersehbare Ergebnisse. Der Browser weiß, dass er den Fokus auf den Anfang der Seite setzen soll und unterstützende Technologien den Titel der Seite ankündigen. Diese Dinge passieren jedes Mal, wenn Sie auf eine neue Seite navigieren.

Mit Client-seitigem Routing lädt Ihr Browser keine neuen Webseiten, daher weiß er nicht, dass er den Fokus automatisch anpassen oder einen neuen Seitentitel ankündigen soll. Framework-Autoren haben immense Zeit und Arbeit investiert, um JavaScript zu schreiben, das diese Funktionen nachbildet, doch kein Framework hat dies perfekt umgesetzt.

Die Quintessenz ist, dass Sie Barrierefreiheit von Anfang an bei _jedem_ Webprojekt in Betracht ziehen sollten, aber bedenken, dass abstrahierte Codebasen, die Frameworks verwenden, eher unter größeren Barrierefreiheitsproblemen leiden, wenn Sie dies nicht tun.

## Wie man ein Framework auswählt

Jedes der in diesem Modul behandelten Frameworks verfolgt unterschiedliche Ansätze zur Webanwendungsentwicklung. Jedes verbessert oder ändert sich regelmäßig und hat seine Vor- und Nachteile. Die Wahl des richtigen Frameworks ist eine team- und projektabhängige Entscheidung, und Sie sollten Ihre eigene Forschung betreiben, um herauszufinden, was Ihren Bedürfnissen entspricht. Das gesagt, haben wir einige Fragen identifiziert, die Sie stellen können, um Ihre Optionen effektiver zu recherchieren:

1. Welche Browser unterstützt das Framework?
2. Welche domänenspezifischen Sprachen verwendet das Framework?
3. Hat das Framework eine starke Community und gute Dokumentation (und andere Unterstützung) verfügbar?

Die Tabelle in diesem Abschnitt bietet eine schnelle Zusammenfassung der aktuellen _Browsersupport_ von jedem Framework sowie der **domänenspezifischen Sprachen**, mit denen es verwendet werden kann.

Im Allgemeinen sind [domänenspezifische Sprachen (DSLs)](/de/docs/Glossary/DSL/Domain_specific_language) Programmiersprachen, die in bestimmten Bereichen der Softwareentwicklung relevant sind. Im Kontext von Frameworks sind DSLs Varianten von JavaScript oder HTML, die es einfacher machen, mit diesem Framework zu entwickeln. Wesentlich ist, dass keines der Frameworks einen Entwickler _zwingt_, eine spezifische DSL zu nutzen, aber sie wurden fast alle mit einer bestimmten DSL im Sinn entworfen. Wenn man die von einem Framework bevorzugte DSL nicht verwendet, verpasst man Funktionen, die sonst die Entwicklererfahrung verbessern würden.

Sie sollten die Support-Matrix und DSLs eines Frameworks ernsthaft in Betracht ziehen, wenn Sie eine Wahl für ein neues Projekt treffen. Nicht übereinstimmende Browserunterstützung kann eine Barriere für Ihre Benutzer sein; nicht übereinstimmende DSL-Unterstützung kann eine Barriere für Sie und Ihre Teamkollegen sein.

| Framework | Browser-Unterstützung               | Bevorzugte DSL | Unterstützte DSLs        | Zitat                                                                                      |
| --------- | ----------------------------------- | -------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| Angular   | Modern                              | TypeScript     | HTML-basiert; TypeScript | [offizielle Dokumentation](https://angular.dev/guide/browser-support)                      |
| React     | Modern                              | JSX            | JSX; TypeScript          | [offizielle Dokumentation](https://react.dev/reference/react-dom/client#browser-support)   |
| Vue       | Modern (IE9+ in Vue 2)              | HTML-basiert   | HTML-basiert, JSX, Pug   | [offizielle Dokumentation](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember     | Modern (IE9+ in Ember version 2.18) | Handlebars     | Handlebars, TypeScript   | [offizielle Dokumentation](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> DSLs, die wir als "HTML-basiert" beschrieben haben, haben keine offiziellen Namen. Sie sind nicht wirklich echte DSLs, aber sie sind nicht standardisierte HTML-Varianten, weshalb wir sie hervorheben möchten.

### Hat das Framework eine starke Community?

Dies ist vielleicht die schwierigste Metrik zu messen, da die Größe einer Community nicht direkt mit leicht zugänglichen Zahlen korreliert. Sie können die Anzahl der Sterne eines Projekts auf GitHub oder die wöchentlichen npm-Downloads überprüfen, um ein Gefühl für seine Popularität zu bekommen, aber manchmal ist es am besten, ein paar Foren zu durchsuchen oder mit anderen Entwicklern zu sprechen. Es geht nicht nur um die Größe der Community, sondern auch darum, wie einladend und inklusiv sie ist und wie gut die verfügbare Dokumentation ist.

### Meinungen im Web

Verlassen Sie sich nicht nur auf unser Wort – es gibt Diskussionen im gesamten Web. Die Wikimedia Foundation hat kürzlich beschlossen, Vue für ihr Frontend zu verwenden, und eine [Anfrage nach Kommentaren (RFC) zur Framework-Adoption veröffentlicht](https://phabricator.wikimedia.org/T241180). Eric Gardner, der Autor des RFC, nahm sich die Zeit, die Bedürfnisse des Wikimedia-Projekts zu skizzieren und warum bestimmte Frameworks für das Team gute Wahlmöglichkeiten waren. Dieser RFC ist ein großartiges Beispiel für die Art von Recherche, die Sie selbst durchführen sollten, wenn Sie die Nutzung eines Frontend-Frameworks planen.

Die [Survey „State of JavaScript“](https://stateofjs.com/) ist eine hilfreiche Sammlung von Feedback von JavaScript-Entwicklern. Sie deckt viele Themen im Zusammenhang mit JavaScript ab, einschließlich Daten sowohl zur Nutzung von Frameworks als auch zur Entwicklersentiment gegenüber ihnen. Derzeit stehen mehrere Jahre an Daten zur Verfügung, die es Ihnen ermöglichen, einen Eindruck von der Popularität eines Frameworks zu gewinnen.

Das Vue-Team hat [Vue umfassend mit anderen beliebten Frameworks verglichen](https://v2.vuejs.org/v2/guide/comparison.html). Es könnte eine Voreingenommenheit in diesem Vergleich geben (die sie erwähnen), aber es ist trotzdem eine wertvolle Ressource.

## Alternativen zu Client-seitigen Frameworks

Wenn Sie nach Werkzeugen suchen, um den Webentwicklungsprozess zu beschleunigen und wissen, dass Ihr Projekt keine intensive Client-seitige JavaScript-Verarbeitung erfordert, könnten Sie auf eine Handvoll anderer Lösungen zum Bauen des Webs zugreifen:

- Ein Content-Management-System
- Server-seitige Darstellung
- Ein statischer Site-Generator

### Content-Management-Systeme

**Content-Management-Systeme** (**CMSes**) sind alle Werkzeuge, die es einem Benutzer ermöglichen, Webinhalte zu erstellen, ohne direkt Code zu schreiben. Sie sind eine gute Lösung für große Projekte, insbesondere Projekte, die Eingaben von Content-Autoren erfordern, die wenig oder keine Programmierkenntnisse haben, oder für Programmierer, die Zeit sparen möchten. Sie erfordern jedoch eine erhebliche Menge an Zeit für die Einrichtung, und die Nutzung eines CMS bedeutet, dass Sie zumindest einen Teil der Kontrolle über das Endergebnis Ihrer Website aufgeben müssen. Zum Beispiel: Wenn Ihr ausgewähltes CMS keine zugänglichen Inhalte standardmäßig erstellt, ist es oft schwierig, dies zu verbessern.

Einige beliebte CMS-Systeme sind [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/) und [Drupal](https://www.drupal.org/).

### Server-seitige Darstellung

**Server-seitige Darstellung** (**SSR**) ist eine Anwendungsarchitektur, bei der es die Aufgabe des _Servers_ ist, eine Single-Page-Anwendung darzustellen. Dies ist das Gegenteil von _Client-seitiger Darstellung_, die die häufigste und einfachste Art ist, eine JavaScript-Anwendung zu erstellen. Die server-seitige Darstellung ist für das Gerät des Clients einfacher, da Sie nur eine gerenderte HTML-Datei senden, aber es kann kompliziert einzurichten sein im Vergleich zu einer Client-seitig gerenderten Anwendung.

Alle in diesem Modul behandelten Frameworks unterstützen sowohl Server-seitige als auch Client-seitige Darstellung. Schauen Sie sich [Next.js](https://nextjs.org/) für React an, [Nuxt](https://nuxt.com/) für Vue (ja, es ist verwirrend, und nein, diese Projekte sind nicht verwandt!), [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) für Ember und [Angular Universal](https://angular.dev/guide/universal) für Angular.

> [!NOTE]
> Einige SSR-Lösungen werden von der Community geschrieben und gepflegt, während andere „offizielle“ Lösungen von den Maintainer des Frameworks bereitgestellt werden.

### Statische Site-Generatoren

[Statische Site-Generatoren](/de/docs/Glossary/SSG) sind Programme, die auf dynamische Weise alle Webseiten einer mehrseitigen Website generieren – einschließlich aller relevanter CSS- oder JavaScript-Dateien – damit sie an verschiedenen Orten veröffentlicht werden können. Der Veröffentlichungs-Host könnte ein GitHub Pages-Zweig, eine Netlify-Instanz, oder irgendein privater Server Ihrer Wahl sein, zum Beispiel. Es gibt eine Reihe von Vorteilen bei diesem Ansatz, hauptsächlich in Bezug auf Leistung (das Gerät des Benutzers wird nicht benötigt, um die Seite mit JavaScript zu erstellen, sie ist bereits fertig) und Sicherheit (statische Seiten haben weniger Angriffsvektoren). Diese Seiten können JavaScript dort verwenden, wo es notwendig ist, aber sie sind nicht _abhängig_ davon. Statische Site-Generatoren benötigen Zeit zum Lernen, wie jedes andere Werkzeug auch, was eine Barriere für Ihren Entwicklungsprozess sein kann.

Statische Seiten können so viele oder so wenige einzigartige Seiten haben, wie Sie möchten. So wie Frameworks es Ihnen ermöglichen, schnell Client-seitige JavaScript-Anwendungen zu schreiben, ermöglichen statische Site-Generatoren Ihnen, auf schnelle Weise HTML-Dateien zu erstellen, die Sie sonst einzeln geschrieben hätten. Wie Frameworks ermöglichen es statische Site-Generatoren Entwicklern, Komponenten zu erstellen, die gemeinsame Teile Ihrer Webseiten definieren, und diese Komponenten zu kombinieren, um eine endgültige Seite zu erstellen. Im Kontext von statischen Site-Generatoren werden diese Komponenten als **Vorlagen** bezeichnet. Von statischen Site-Generatoren erstellte Webseiten können sogar Heim für Framework-Anwendungen sein: Wenn Sie wollen, dass eine bestimmte Seite Ihrer statisch generierten Website eine React-Anwendung startet, wenn Ihr Benutzer sie besucht, können Sie das tun.

Statische Site-Generatoren gibt es schon seit langer Zeit und sie werden ständig optimiert und innoviert. Es gibt eine Vielzahl von Optionen, darunter [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) und [Gatsby](https://www.gatsbyjs.com/), die auf verschiedenen Technologiestacks aufbauen und unterschiedliche Funktionen bieten. Andere Optionen, wie [Docusaurus](https://docusaurus.io/) und [VitePress](https://vitepress.dev/), verwenden Client-seitige Frameworks anstelle von Vorlagen, generieren jedoch ähnlich optimierte statische Dateien.

Wenn Sie mehr über statische Site-Generatoren im Allgemeinen erfahren möchten, werfen Sie einen Blick auf Tatiana Macs [Anfängerleitfaden zu Eleventy](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). Im ersten Artikel der Serie erklären sie, was ein statischer Site-Generator ist und wie er sich auf andere Mittel der Veröffentlichung von Webinhalten bezieht.

## Zusammenfassung

Und damit kommen wir zum Ende unserer Einführung in Frameworks – wir haben Ihnen noch keinen konkreten Code beigebracht, aber hoffentlich haben wir Ihnen einen nützlichen Hintergrund darüber gegeben, warum Sie Frameworks überhaupt verwenden sollten und wie Sie eines auswählen, und Sie dazu gebracht, mehr lernen zu wollen und richtig durchzustarten!

Unser nächster Artikel geht auf eine tiefere Ebene, in dem er die spezifischen Arten von Funktionen beleuchtet, die Frameworks in der Regel anbieten, und warum sie so funktionieren, wie sie es tun.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
