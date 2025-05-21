---
title: "Ember Interaktivität: Events, Klassen und Zustand"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt werden wir beginnen, einige interaktive Elemente zu unserer App hinzuzufügen, um die Möglichkeit zu bieten, neue Todo-Elemente hinzuzufügen und anzuzeigen. Dabei werden wir darauf eingehen, wie Events in Ember verwendet werden, Komponentenklassen zur Aufnahme von JavaScript-Code zur Steuerung interaktiver Funktionen erstellt werden und wie ein Service eingerichtet wird, um den Datenzustand unserer App im Auge zu behalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          vertraut sind und Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird sehr vorteilhaft sein, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Komponentenklassen erstellt und Events zur Steuerung der
        Interaktivität verwendet sowie den App-Zustand mit einem Service nachverfolgt.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine überarbeitete, komponentenbasierte Version unserer Todo-App. Lassen Sie uns durchgehen, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktionsfähig zu machen.

Wenn Sie beginnen, über Interaktivität nachzudenken, ist es gut, zu deklarieren, welche Ziele und Verantwortlichkeiten jede Komponente hat. In den untenstehenden Abschnitten werden wir dies für jede Komponente tun und Sie dann durch die Implementierung der Funktionalität führen.

## Erstellen von Todos

Für unsere Karteikopf-/Todo-Eingabe möchten wir in der Lage sein, unsere eingegebene Todo-Aufgabe abzuschicken, wenn wir die <kbd>Enter</kbd>-Taste drücken, und sie soll in der Todo-Liste erscheinen.

Wir möchten den in das Eingabefeld eingegebenen Text erfassen. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir unser Todo speichern und diesen Text an die Todo-Listen-Komponente zur Anzeige weitergeben können.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event) Event über den [on modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, der einfach syntaktischer Zucker von Ember für [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Events](/de/docs/Learn_web_development/Core/Scripting/Events), falls benötigt).

Fügen Sie die neue Zeile, wie unten gezeigt, zu Ihrer `header.hbs` Datei hinzu:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut steht innerhalb von doppelten geschweiften Klammern, was anzeigt, dass es Teil der dynamischen Templetensyntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Eventtyp, auf den reagiert werden soll (`keydown`), und das letzte Argument ist der Event-Handler — der Code, der als Reaktion auf das Auslösen des `keydown`-Events ausgeführt wird. Wie Sie es vielleicht von der Arbeit mit [JavaScript-Objekten](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) kennen, bezieht sich das Schlüsselwort `this` auf den "Kontext" oder den "Bereich" der Komponente. Das `this` einer Komponente wird sich von dem `this` einer anderen Komponente unterscheiden.

Wir können definieren, was innerhalb von `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die zu Ihrer Komponente passt. Dies ist eine normale JavaScript-Klasse und hat keine besondere Bedeutung für Ember, abgesehen davon, dass _von der_ `Component`-Superklasse _geerbt_ wird.

Um eine Header-Klasse für Ihre Header-Komponente zu erstellen, geben Sie dies in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies wird die folgende leere Klassendatei erstellen — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei werden wir den Code des Event-Handlers implementieren. Aktualisieren Sie den Inhalt wie folgt:

```js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class HeaderComponent extends Component {
  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    let hasValue = Boolean(text);

    if (key === "Enter" && hasValue) {
      alert(text);

      target.value = "";
    }
  }
}
```

Der `@action`-Dekorator ist hier der einzige Ember-spezifische Code (abgesehen vom Erben von der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mit [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist normales JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator gibt an, dass die Funktion eine "Aktion" ist, was bedeutet, dass es sich um eine Art Funktion handelt, die von einem Event im Template aus aufgerufen wird. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Wesentlichen eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umschließt und aufruft und dabei zusätzliche Funktionalität bietet. Das `@tracked`-Dekorator (wie etwas später zu sehen) führt zum Beispiel den Code aus, auf den es angewendet wird, verfolgt ihn jedoch zusätzlich und aktualisiert die App automatisch, wenn sich Werte ändern. [Lesen Sie JavaScript Decorators: What They Are and When to Use Them](https://www.sitepoint.com/javascript-decorators-what-they-are/) für allgemeinere Informationen zu Dekoratoren.

Kehren wir zu unserem Browsertab zurück, in dem die App ausgeführt wird. Wir können jetzt alles eingeben, und wenn wir <kbd>Enter</kbd> drücken, wird uns eine Meldung angezeigt, die uns genau sagt, was wir eingegeben haben.

![Der anfängliche Platzhalterzustand der Add-Funktion zeigt den in die Eingabeelemente eingegebenen Text an, der Ihnen als Meldung zurückgegeben wird.](todos-hello-there-alert.png)

Mit der Interaktivität der Header-Eingabe aus dem Weg brauchen wir einen Ort, an dem die Todos gespeichert werden, damit andere Komponenten darauf zugreifen können.

## Speichern von Todos mit einem Service

Ember hat eine eingebaute anwendungsweite **Zustands**verwaltung, die wir nutzen können, um die Speicherung unserer Todos zu verwalten und es jeder unserer Komponenten zu ermöglichen, Daten aus diesem anwendungsweiten Zustand zu beziehen. Ember nennt diese Konstrukte [Services](https://guides.emberjs.com/release/services/), und sie bestehen während der gesamten Laufzeit der Seite (ein Seiten-Refresh wird sie löschen; die Daten längerfristig zu speichern geht über den Rahmen dieses Tutorials hinaus).

Führen Sie diesen Terminalbefehl aus, um einen Service zu generieren, in dem wir unsere Todo-Listendaten speichern:

```bash
ember generate service todo-data
```

Dies sollte Ihnen eine Terminalausgabe wie folgt geben:

```plain
installing service
  create app/services/todo-data.js
installing service-test
  create tests/unit/services/todo-data-test.js
```

Dies erstellt eine `todo-data.js` Datei im Verzeichnis `todomvc/app/services`, die unseren Service enthält, zunächst mit einer Import-Anweisung und einer leeren Klasse:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zuerst möchten wir definieren, _was ein Todo ist_. Wir wissen, dass wir sowohl den Text eines Todos als auch den Status, ob es abgeschlossen ist oder nicht, nachverfolgen wollen.

Fügen Sie die folgende `import`-Anweisung unter der bestehenden ein:

```js
import { tracked } from "@glimmer/tracking";
```

Fügen Sie nun die folgende Klasse unter der von Ihnen zuvor eingefügten Zeile hinzu:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse repräsentiert ein Todo — sie enthält eine `@tracked text` Eigenschaft, die den Text des Todos enthält, und eine `@tracked isCompleted` Eigenschaft, die angibt, ob das Todo abgeschlossen wurde oder nicht. Beim Erstellen wird ein `Todo`-Objekt einen anfänglichen `text`-Wert haben, der dem Text entspricht, der ihm bei der Erstellung gegeben wurde (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser verbindet sich mit dem Reaktivitätssystem und ermöglicht es Ember, automatisch zu aktualisieren, was Sie in Ihrer App sehen, wenn sich die verfolgten Eigenschaften ändern. [Weitere Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Nun ist es an der Zeit, den Servicekörper zu ergänzen.

Zuerst fügen Sie eine weitere `import`-Anweisung unter der vorherigen ein, um Aktionen innerhalb des Services verfügbar zu machen:

```js
import { action } from "@ember/object";
```

Aktualisieren Sie den bestehenden `export default class TodoDataService extends Service { }` Block wie folgt:

```js
export default class TodoDataService extends Service {
  @tracked todos = [];

  @action
  add(text) {
    let newTodo = new Todo(text);

    this.todos = [...this.todos, newTodo];
  }
}
```

Hier wird die `todos` Eigenschaft im Service unsere Liste von Todos in einem Array pflegen, und wir markieren sie mit `@tracked`, weil wir möchten, dass die UI aktualisiert wird, wenn der Wert von `todos` aktualisiert wird.

Und wie zuvor wird die `add()`-Funktion, die aus dem Template aufgerufen wird, mit dem `@action`-Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir [verbreiten unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem auslöst, die UI zu aktualisieren.

## Den Service in unserer Header-Komponente nutzen

Da wir nun eine Methode definiert haben, um Todos hinzuzufügen, können wir mit diesem Service von der `header.js`-Eingabekomponente aus interagieren, um tatsächlich damit zu beginnen, sie hinzuzufügen.

Zuerst muss der Service über den `@inject`-Dekorator in das Template eingefügt werden, den wir zur begrifflichen Klarheit in `@service` umbenennen. Fügen Sie dazu die folgende `import`-Zeile in `header.js` unter den beiden bestehenden `import`-Zeilen hinzu:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import können wir nun den `todo-data`-Service innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen, indem wir den `@service`-Dekorator verwenden. Fügen Sie die folgende Zeile direkt unter der öffnenden `export…`-Zeile hinzu:

```js
export default class HeaderComponent extends Component {
  @service("todo-data") todos;
  // …
}
```

Die Platzhalterzeile `alert(text);` kann nun durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie ihn durch Folgendes:

```js
this.todos.add(text);
```

Wenn wir dies in der Todo-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), sieht es so aus, als würde nichts passieren, nachdem Sie die <kbd>Enter</kbd>-Taste drücken (obwohl die Tatsache, dass die App ohne Fehler erstellt wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser Todo hinzugefügt wurde:

![Die App wird im Ember Inspector gezeigt, um zu beweisen, dass hinzugefügte Todos vom Service gespeichert werden, auch wenn sie noch nicht in der UI angezeigt werden](todos-in-ember-inspector.gif)

## Unsere Todos anzeigen

Da wir nun wissen, dass wir Todos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets" Todos gegen die auszutauschen, die wir tatsächlich erstellen. In der `TodoList`-Komponente möchten wir die Todos aus dem Service abrufen und eine `Todo`-Komponente für jedes verfügbare Todo rendern.

Um die Todos aus dem Service abzurufen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentensklasse, die diese Funktionalität enthält. Drücken Sie <kbd>Ctrl</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentensklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit folgendem Code aus, der den `todo-data`-Service über die `todos`-Eigenschaft für unser Template zugänglich macht. Dies macht ihn sowohl innerhalb der Klasse als auch im Template über `this.todos` zugänglich:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hierbei ist, dass unser Service `todos` genannt wird, aber die Liste der Todos ebenfalls `todos` genannt wird, sodass wir derzeit auf die Daten über `this.todos.todos` zugreifen würden. Dies ist nicht intuitiv, also fügen wir einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) zum `todos`-Service hinzu, der `all` genannt wird und alle Todos repräsentiert.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen Sie Folgendes unter der `@tracked todos = [];`-Zeile hinzu:

```js
export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }
  // …
}
```

Nun können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um dies in Aktion zu setzen, gehen Sie zu Ihrer `todo-list.hbs` Komponente und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Durch einen dynamischen `#each`-Block (was im Wesentlichen syntaktischer Zucker über JavaScripts [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ist), der eine `<Todo />`-Komponente für jedes verfügbare Todo in der Liste der vom Service zurückgegebenen Todos erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Möglichkeit, dies zu betrachten:

- `this` — der Darstellungs-Kontext/Klasseninstanz der Komponente.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz auf den `todo-data`-Service, die es uns ermöglicht, direkt mit der Serviceinstanz zu interagieren.
- `all` — ein Getter auf dem `todo-data`-Service, der alle Todos zurückgibt.

Versuchen Sie, den Server erneut zu starten, und navigieren Sie zu unserer App, und Sie werden feststellen, dass sie funktioniert! Nun, fast. Jedes Mal, wenn Sie ein neues Todo-Element eingeben, erscheint ein neues Listenelement unterhalb des Texteingabefelds, aber leider steht dort immer "Buy Movie Tickets".

Dies liegt daran, dass das Textlabel innerhalb jedes Listenelements auf diesen Text festkodiert ist, wie in `todo.hbs` zu sehen ist:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — das wird das Todo darstellen, das wir in dieser Komponente übergeben haben, als es in `todo-list.hbs` aufgerufen wurde, in der Zeile `<Todo @todo=\{{todo}} />`:

```hbs
<label>\{{@todo.text}}</label>
```

OK, versuchen Sie es erneut. Sie sollten feststellen, dass der im `<input>` übermittelten Text jetzt korrekt in der UI angezeigt wird:

![Die App wird in ihrem endgültigen Zustand dieser Artikelreihe gezeigt, mit eingegebenen Todo-Elementen, die in der UI angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist ein großer Fortschritt für den Moment. Wir können jetzt Todo-Elemente zu unserer App hinzufügen, und der Zustand der Daten wird mit unserem Service nachverfolgt. Als Nächstes fahren wir fort, die Funktionalität unseres Footers zu aktivieren, einschließlich des Todo-Zählers, und betrachten bedingtes Rendern, einschließlich der richtigen Gestaltung von Todos, wenn sie überprüft wurden. Wir werden auch unseren "Clear completed"-Button einbinden.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}
