---
title: Unsere React-Anwendung in Komponenten aufteilen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt ist unsere App ein Monolith. Bevor wir sie zum Laufen bringen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Methode, um unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine sinnvolle Methode aufzuzeigen, wie unsere Aufgabenlisten-App in Komponenten aufgeteilt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Unsere erste Komponente definieren

Das Definieren einer Komponente kann schwierig erscheinen, bis Sie etwas Übung darin haben, aber im Wesentlichen gilt:

- Wenn es ein offensichtliches "Stück" Ihrer App darstellt, ist es wahrscheinlich eine Komponente.
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Wenn Sie eine Komponente aus häufig vorkommenden UI-Elementen machen, können Sie Ihren Code an einer Stelle ändern und diese Änderungen überall sehen, wo diese Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am meisten wiederverwendeten, wichtigsten Teil der Benutzeroberfläche machen: einem Aufgabenlistenelement.

## Erstellen eines `<Todo />`

Bevor wir eine Komponente erstellen, sollten wir eine neue Datei dafür anlegen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn gestoppt haben, um die vorherigen Befehle auszuführen!

Lassen Sie uns eine `Todo()`-Funktion in `Todo.jsx` hinzufügen. Hier definieren wir eine Funktion und exportieren sie:

Das ist soweit in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie den ersten [`<li>`](/de/docs/Web/HTML/Element/li) aus der ungeordneten Liste und fügen Sie ihn in `Todo.jsx` ein, sodass er wie folgt aussieht:

Jetzt haben wir etwas, das wir nutzen können. Fügen Sie in `App.jsx` folgende Zeile am Anfang der Datei hinzu, um `Todo` zu importieren:

Mit dieser importierten Komponente können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihr `<ul>` sollte so aussehen:

Wenn Sie zu Ihrer App zurückkehren, werden Sie etwas Unschönes bemerken: Ihre Liste wiederholt jetzt die erste Aufgabe dreimal!

![Unsere Aufgabenlisten-App, mit sich wiederholenden Aufgaben, weil das Label in der Komponente fest codiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu tun. Als Nächstes schauen wir, wie wir unterschiedliche Komponentenausrufe dazu bringen können, einzigartigen Inhalt darzustellen.

## Ein einzigartiges `<Todo />` erstellen

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer Benutzeroberfläche wiederzuverwenden und auf einen Ort als Quelle dieser Benutzeroberfläche zu verweisen. Das Problem ist, dass wir normalerweise nicht den gesamten Inhalt jeder Komponente wiederverwenden wollen; wir wollen die meisten Teile wiederverwenden und kleine Teile ändern. Hier kommen Props ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben, die wir erledigen wollen, zu verfolgen, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen einzigartigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />`-Komponente ein `name`-Prop. Verwenden wir die Namen unserer Aufgaben, die wir zuvor hatten:

Wenn Ihr Browser aktualisiert wird, sehen Sie... exakt dasselbe wie zuvor. Wir haben unseren `<Todo />` einige Props gegeben, aber wir benutzen sie noch nicht. Gehen wir zurück zu `Todo.jsx` und beheben das.

Ändern Sie zuerst Ihre `Todo()`-Funktionsdefinition, sodass sie `props` als Parameter nimmt. Sie können `console.log()` Ihre Props verwenden, wenn Sie überprüfen möchten, ob sie korrekt an die Komponente übergeben werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie alle Vorkommen von `Eat` durch Ihr `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, daher müssen Sie es in geschweifte Klammern einschließen.

Wenn Sie alles zusammenfügen, sollte Ihre `Todo()`-Funktion so aussehen:

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch: Sie sind alle noch standardmäßig angekreuzt.

![Unsere Aufgabenliste, mit verschiedenen Beschriftungen der Aufgaben, nachdem diese als Props an die Komponenten übergeben wurden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` angekreuzt. Wieder einmal wollen wir _die meisten_ der Benutzeroberfläche, die ein `<Todo />`-Element ausmacht, wiederverwenden, aber eine Sache ändern. Das ist eine gute Aufgabe für ein weiteres Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf ein boolesches Prop namens `completed`, und lassen Sie die anderen beiden so wie sie sind.

Wie zuvor müssen wir zurück zu `Todo.jsx`, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut am `<input />`, sodass sein Wert dem `completed`-Prop entspricht. Wenn Sie fertig sind, wird das `<input />`-Element der Todo-Komponente wie folgt aussehen:

Und Ihr Browser sollte aktualisiert werden, um nur `Eat` als angekreuzt anzuzeigen:

![Unsere Aufgabenlisten-App, jetzt mit unterschiedlichen überprüften Zuständen - einige Kontrollkästchen sind angekreuzt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed`-Prop jeder `<Todo />`-Komponente ändern, wird Ihr Browser die entsprechenden gerenderten Kontrollkästchen entsprechend an- oder abkreuzen.

### Geben Sie mir etwas `id`, bitte

Wir haben immer noch _ein weiteres_ Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Das ist aus mehreren Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Global_attributes/id) müssen eindeutig sein (sie werden als eindeutige Kennungen für Dokumentfragmente, von CSS, JavaScript usw. verwendet).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Element/label) beeinträchtigt werden.

Das zweite Problem wirkt sich gerade auf unsere App aus. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, werden Sie feststellen, dass das Kontrollkästchen "Eat" umgeschaltet wird, anstatt das Kontrollkästchen "Sleep". Dies liegt daran, dass das `<label>`-Element jedes Kontrollkästchens ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem gegebenen `id`-Attribut an, was das Problem verursacht, das Sie sehen, wenn Sie auf die anderen Labels klicken.

Wir hatten eindeutige `id`-Attribute, bevor wir die `<Todo />`-Komponente erstellt haben. Lassen Sie uns sie zurückbringen, indem wir das Format `todo-i` verwenden, wobei `i` jedes Mal um eins größer wird. Aktualisieren Sie die Instanzen der `Todo`-Komponenten innerhalb von `App.jsx`, um `id`-Props hinzuzufügen, wie folgt:

> [!NOTE]
> Das `completed`-Prop kommt hier zuletzt, weil es ein boolesches Prop ohne Zuweisung ist. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Gehen Sie jetzt zurück zu `Todo.jsx` und nutzen Sie das `id`-Prop. Es muss den Wert des `id`-Attributs des `<input />`-Elements sowie den Wert des `htmlFor`-Attributs des `<label>`-Elements ersetzen:

Mit diesen Korrekturen sollte das Klicken auf die Labels neben jedem Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels an- und abkreuzen.

## Soweit, so gut?

Wir machen bisher guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript bereinigen: der Iteration. Um Iteration nutzen zu können, sollten wir zunächst unsere Aufgaben neu überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationsstücke: ihren Namen, ob sie markiert wurde, und ihre eindeutige ID. Diese Daten lassen sich gut auf ein Objekt abbilden. Da wir mehr als eine Aufgabe haben, wäre ein Array von Objekten gut geeignet, um diese Daten darzustellen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb der letzten Importzeile, aber oberhalb von `ReactDOM.createRoot()`:

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/) Plugin hat, können Sie eine Warnung zu dieser `DATA`-Konstante sehen. Diese Warnung stammt von der ESLint-Konfiguration, die von der Vite-Vorlage bereitgestellt wird, die wir verwendet haben, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` über der `DATA`-Konstante hinzufügen.

Als nächstes übergeben wir `DATA` als `tasks`-Prop an `<App />`. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf in `src/main.jsx`, sodass er wie folgt aussieht:

Das `DATA`-Array ist jetzt innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können es mit `console.log()` überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS`-Konstantennamen haben keine besondere Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern sagt: "Diese Daten werden sich nach ihrer Definition hier nicht mehr ändern".

## Rendern mit Iteration

Um unser Array aus Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript bietet uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie in `App.jsx` eine neue `const` oberhalb der `return`-Anweisung der `App()`-Funktion namens `taskList`. Lassen Sie uns damit beginnen, jede Aufgabe im `props.tasks`-Array in ihren `name` zu transformieren. Der `?.`-Operator ermöglicht uns das Durchführen des [optionalen Verkettens](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor wir versuchen, ein neues Array von Aufgabennamen zu erstellen:

Versuchen wir, alle Kinder des `<ul>` durch `taskList` zu ersetzen:

Dies bringt uns einen Teil des Weges dahin, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr zu tun: Der Browser rendert momentan jeden Aufgabennamen als reinen Text. Uns fehlt unsere HTML-Struktur – das `<li>` und seine Kontrollkästchen und Schaltflächen!

![Unsere Aufgabenlisten-App, mit den Beschriftungen der Aufgaben, die einfach in einer Zeile angezeigt werden](todo-list-unstructured-names.png)

Um das zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben – denken Sie daran, dass JSX JavaScript ist, sodass wir es neben jeder anderen, vertrauteren JavaScript-Syntax verwenden können. Probieren wir folgendes statt dem, was wir bereits haben:

Sehen Sie sich noch einmal Ihre App an; jetzt sehen unsere Aufgaben mehr wie früher aus, aber ihnen fehlt der Aufgabenname. Denken Sie daran, dass jede Aufgabe, über die wir mappen, die Eigenschaften `id`, `name` und `completed` enthält, die wir in unsere `<Todo />`-Komponente übergeben wollen. Wenn wir dieses Wissen zusammenfügen, erhalten wir Code wie diesen:

## Einzigartige Schlüssel

Jetzt, da React unsere Aufgaben aus einem Array rendert, muss es den Überblick darüber behalten, welche welche ist, um sie korrekt zu rendern. React versucht, seine eigenen Vermutungen anzustellen, um den Überblick zu behalten, aber wir können ihm helfen, indem wir einen `key`-Prop an unsere `<Todo />`-Komponenten übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie können das Wort `key` für keinen anderen Zweck verwenden.

Da Schlüssel einzigartig sein sollten, werden wir die `id` jedes Aufgabenobjekts als seinen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList`-Konstante so:

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, was Sie durch Iteration rendern.** In Ihrem Browser wird sich nichts Auffälliges ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen in Ihre Konsole loggen und Ihre App kann sich seltsam verhalten!

## Der Rest der App in Komponenten aufteilen

Jetzt, da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. Da Komponenten entweder offensichtliche Teile der Benutzeroberfläche sind, wiederverwendete Teile der Benutzeroberfläche oder beides, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide brauchen, können wir einen Teil der Dateierstellungsarbeit zusammen in einem Terminalbefehl zusammenfassen. Führen Sie diesen Befehl in Ihrem Terminal aus, achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

### Das `<Form />`

Öffnen Sie `components/Form.jsx` und tun Sie folgendes:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles, was dazwischen steht, aus `App.jsx` und fügen Sie sie in die `return`-Anweisung von `Form()` ein.

Ihre `Form.jsx`-Datei sollte so aussehen:

### Das `<FilterButton />`

Tun Sie die gleichen Dinge, die Sie getan haben, um `Form.jsx` in `FilterButton.jsx` zu erstellen, aber nennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML für die erste Schaltfläche in `<div className="filters btn-group stack-exception">` von `App.jsx` in die `return`-Anweisung.

Die Datei sollte so aussehen:

> [!NOTE]
> Es könnte Ihnen auffallen, dass wir denselben Fehler machen wie zuerst bei der `<Todo />`-Komponente, da jede Schaltfläche gleich sein wird. Das ist in Ordnung! Wir werden diese Komponente später verbessern, in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Alle unsere Komponenten importieren

Lassen Sie uns unsere neuen Komponenten verwenden. Fügen Sie einige weitere `import`-Anweisungen am oberen Rand von `App.jsx` hinzu und beziehen Sie sich auf die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie die `return`-Anweisung von `App()`, sodass sie unsere Komponenten rendert.

Wenn Sie fertig sind, wird `App.jsx` so aussehen:

Mit diesem Fortschritt sollte Ihre React-App im Wesentlichen so gerendert werden, wie sie es vorher tat, aber unter Verwendung Ihrer glänzenden neuen Komponenten.

## Zusammenfassung

Und das war's für diesen Artikel – wir sind darauf eingegangen, wie Sie Ihre App sinnvoll in Komponenten aufteilen und diese effizient rendern. Als Nächstes schauen wir uns das Handling von Events in React an und beginnen mit der Hinzufügung von Interaktivität.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
