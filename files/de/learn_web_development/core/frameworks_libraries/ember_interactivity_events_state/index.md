---
title: "Ember-Interaktivität: Ereignisse, Klassen und Zustand"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt werden wir beginnen, etwas Interaktivität zu unserer App hinzuzufügen, indem wir die Möglichkeit bereitstellen, neue Todo-Elemente hinzuzufügen und anzuzeigen. Dabei werden wir uns damit befassen, wie man Ereignisse in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und einen Dienst einrichtet, um den Datenzustand unserer App zu verfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernkonzepten der
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Komponentenklassen erstellt und Ereignisse verwendet, um
        Interaktivität zu steuern, und den Zustand der App mithilfe eines Dienstes zu verfolgen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine umstrukturierte, komponentisierte Version unserer Todo-App. Lassen Sie uns durchgehen, wie wir die notwendige Interaktivität hinzufügen können, um die App funktionsfähig zu machen.

Wenn Sie beginnen, über Interaktivität nachzudenken, ist es gut, die Ziele und Verantwortlichkeiten jeder Komponente zu erklären. In den folgenden Abschnitten werden wir dies für jede Komponente tun und Ihnen dann zeigen, wie die Funktionalität implementiert werden kann.

## Erstellen von Todos

Für unseren `card-header` / Todo-Eingang möchten wir in der Lage sein, unsere eingetippte Todo-Aufgabe abzusenden, wenn wir die <kbd>Enter</kbd>-Taste drücken, und sie soll in der Todos-Liste erscheinen.

Wir möchten in der Lage sein, den Text zu erfassen, der in das Eingabefeld getippt wird. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingetippt haben, und wir können unser Todo speichern und diesen Text an die Todo-Listenkomponente weitergeben, um ihn anzuzeigen.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis über den [on modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, das einfach Ember-syntaktischer Zucker um [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) falls nötig).

Fügen Sie die unten gezeigte neue Zeile zu Ihrer `header.hbs`-Datei hinzu:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut befindet sich innerhalb von doppelten geschweiften Klammern, was darauf hinweist, dass es Teil von Embers dynamischer Template-Syntax ist. Das erste Argument, das an `on` übergeben wird, ist der Typ des Ereignisses, auf das reagiert werden soll (`keydown`), und das letzte Argument ist der Ereignishandler — der Code, der als Reaktion auf das `keydown`-Ereignis ausgeführt wird. Wie Sie es von der Arbeit mit [einfachen JavaScript-Objekten](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) erwarten könnten, bezieht sich das Schlüsselwort `this` auf den "Kontext" oder "Bereich" der Komponente. Das `this` einer Komponente wird sich von dem `this` einer anderen Komponente unterscheiden.

Wir können definieren, was innerhalb von `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die zu Ihrer Komponente passt. Dies ist eine einfache JavaScript-Klasse und hat keine besondere Bedeutung für Ember, außer dass sie von der `Component`-Superklasse _erweitert_ wird.

Um eine Header-Klasse für Ihre Header-Komponente zu erstellen, geben Sie dies in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies erstellt die folgende leere Klassendatei — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei implementieren wir den Ereignishandler-Code. Aktualisieren Sie den Inhalt auf das Folgende:

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

Der `@action`-Dekorator ist der einzige spezifische Ember-Code hier (abgesehen von der Erweiterung der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mit der [JavaScript-Modul-Syntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist einfaches JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt, dass die Funktion eine "Aktion" ist, was bedeutet, dass sie ein Funktions-Typ ist, der aus einem Ereignis, das im Template aufgetreten ist, aufgerufen wird. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umwickelt und aufruft, während sie zusätzliche Funktionalität bietet. Zum Beispiel führt der `@tracked`-Dekorator (siehe etwas später) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich Werte ändern. [Lesen Sie JavaScript Decorators: Was Sie sind und wann man sie verwenden sollte](https://www.sitepoint.com/javascript-decorators-what-they-are/) für weitere allgemeine Informationen zu Dekoratoren.

Kehren wir zu unserer Browser-Registerkarte mit der laufenden App zurück, können wir eingeben, was wir wollen, und wenn wir die <kbd>Enter</kbd>-Taste drücken, wird uns eine Alert-Nachricht angezeigt, die uns genau mitteilt, was wir eingegeben haben.

![Der anfängliche Platzhalterzustand der Add-Funktion, der zeigt, dass der in die Eingabeelemente eingegebene Text an Sie zurückgemeldet wird.](todos-hello-there-alert.png)

Nachdem die Interaktivität des Header-Eingabefeldes abgeschlossen ist, benötigen wir einen Platz zum Speichern von Todos, damit andere Komponenten darauf zugreifen können.

## Speicherung von Todos mit einem Dienst

Ember hat ein eingebautes anwendungsweites **Zustands**-Management, das wir verwenden können, um die Speicherung unserer Todos zu verwalten und es jeder unserer Komponenten zu ermöglichen, auf Daten aus diesem anwendungsweiten Zustand zuzugreifen. Ember nennt diese Strukturen [Services](https://guides.emberjs.com/release/services/), und sie leben während der gesamten Lebensdauer der Seite (ein Seiten-Refresh wird sie löschen; die Daten länger zu speichern, ist nicht Teil dieses Tutorials).

Führen Sie diesen Terminalbefehl aus, um einen Service zu generieren, in dem wir unsere Todo-Listen-Daten speichern können:

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

Dies erstellt eine `todo-data.js`-Datei im Verzeichnis `todomvc/app/services`, um unseren Service zu enthalten, der anfänglich eine Importanweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zunächst wollen wir definieren, _was ein Todo ist_. Wir wissen, dass wir sowohl den Text eines Todos als auch den Zustand, ob es abgeschlossen ist oder nicht, verfolgen möchten.

Fügen Sie die folgende `import`-Anweisung unter der vorhandenen hinzu:

```js
import { tracked } from "@glimmer/tracking";
```

Fügen Sie nun die folgende Klasse unter der zuvor hinzugefügten Zeile hinzu:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse stellt ein Todo dar — sie enthält eine `@tracked text`-Eigenschaft, die den Text des Todos enthält, und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das Todo abgeschlossen ist oder nicht. Bei der Instanziierung wird ein `Todo`-Objekt einen anfänglichen `text`-Wert haben, der dem bei der Erstellung angegebenen Text entspricht (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked` Dekorator — dieser wird in das Reaktivitätssystem eingebunden und ermöglicht Ember, das, was Sie in Ihrer App sehen, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Weitere Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Nun ist es an der Zeit, den Körper des Dienstes zu ergänzen.

Fügen Sie zunächst eine weitere `import`-Anweisung unter der vorherigen hinzu, um Aktionen innerhalb des Dienstes verfügbar zu machen:

```js
import { action } from "@ember/object";
```

Aktualisieren Sie den bestehenden Block `export default class TodoDataService extends Service { }` wie folgt:

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

Hierbei wird die `todos`-Eigenschaft des Dienstes unsere Liste der Todos in einem Array leicht zugänglich halten, und wir markieren sie mit `@tracked`, weil wir möchten, dass die Benutzeroberfläche aktualisiert wird, wenn sich der Wert von `todos` ändert.

Und genau wie zuvor wird die `add()`-Funktion, die vom Template aufgerufen wird, mit dem `@action` Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir [spreizen unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem dazu bringt, die Benutzeroberfläche zu aktualisieren.

## Verwendung des Dienstes in unserer Header-Komponente

Da wir nun eine Möglichkeit definiert haben, Todos hinzuzufügen, können wir mit dieser Serviceinteraktion von der `header.js`-Eingabekomponente aus tatsächlich beginnen, diese hinzuzufügen.

Zunächst muss der Dienst über den `@inject` Dekorator in das Template injiziert werden, den wir zur besseren semantischen Klarheit in `@service` umbenennen. Fügen Sie dazu die folgende `import`-Zeile zu `header.js` hinzu, unter den beiden vorhandenen `import`-Zeilen:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import können wir nun den `todo-data`-Dienst innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt unter Verwendung des `@service` Dekorators verfügbar machen. Fügen Sie die folgende Zeile direkt unterhalb der öffnenden `export…` Linie hinzu:

```js
@service('todo-data') todos;
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch das Folgende:

```js
this.todos.add(text);
```

Wenn wir dies in der Todo-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), wird es so aussehen, als ob nichts passiert, nachdem Sie die <kbd>Enter</kbd>-Taste gedrückt haben (obwohl die Tatsache, dass sich die App ohne Fehler baut, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser Todo hinzugefügt wurde:

![Die App wird im Ember-Inspektor angezeigt, um zu beweisen, dass hinzugefügte Todos vom Dienst gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden.](todos-in-ember-inspector.gif)

## Anzeige unserer Todos

Da wir nun wissen, dass wir Todos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets"-Todos mit den tatsächlich erstellten Todos auszutauschen. In der `TodoList`-Komponente möchten wir die Todos aus dem Dienst abrufen und eine `Todo`-Komponente für jedes verfügbare Todo rendern.

Um die Todos aus dem Dienst abzurufen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Ctrl</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code aus, der den `todo-data`-Dienst über die `todos`-Eigenschaft für unser Template verfügbar macht. Dies macht ihn zugänglich über `this.todos` sowohl innerhalb der Klasse als auch im Template:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Dienst `todos` genannt wird, aber die Liste der Todos auch `todos` genannt wird, sodass wir derzeit auf die Daten mit `this.todos.todos` zugreifen würden. Das ist nicht intuitiv, also fügen wir dem `todos`-Dienst einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) namens `all` hinzu, der alle Todos repräsentiert.

Dazu gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen Sie Folgendes unter der Zeile `@tracked todos = [];` hinzu:

```js
get all() {
  return this.todos;
}
```

Jetzt können wir über `this.todos.all` auf die Daten zugreifen, was viel intuitiver ist. Um dies in die Praxis umzusetzen, gehen Sie zu Ihrer `todo-list.hbs`-Komponente und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Durch einen dynamischen `#each` Block (was im Grunde syntaktischer Zucker über JavaScripts [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ist), der eine `<Todo />`-Komponente für jedes verfügbare Todo im Dienst zurückgegebenen Todo-Liste erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine weitere Sichtweise:

- `this` — der Rendering-Kontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz auf den `todo-data`-Dienst, die es uns erlaubt, direkt mit der Dienstinstanz zu interagieren.
- `all` — ein Getter im `todo-data`-Dienst, der alle Todos zurückgibt.

Versuchen Sie, den Server erneut zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Na ja, sozusagen. Immer, wenn Sie ein neues Todo-Element eingeben, erscheint ein neuer Listeneintrag unter dem Texteingabefeld, aber leider steht dort immer "Buy Movie Tickets".

Dies liegt daran, dass das Text-Label innerhalb jedes Listeneintrags auf diesen Text festgelegt ist, wie in `todo.hbs` zu sehen:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — das das Todo darstellen wird, das wir bei der Aufruf in `todo-list.hbs` an diese Komponente übergeben haben, in der Zeile `<Todo @todo=\{{todo}} />`:

```hbs
<label>\{{@todo.text}}</label>
```

OK, versuchen Sie es erneut. Sie sollten feststellen, dass der im `<input>` eingegebene Text nun korrekt in der Benutzeroberfläche angezeigt wird:

![Die App wird in ihrem Endzustand dieses Artikels gezeigt, wobei eingegebene Todo-Elemente in der Benutzeroberfläche angezeigt werden.](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist für den Moment ein großer Fortschritt. Wir können nun Todo-Elemente zu unserer App hinzufügen, und der Zustand der Daten wird mit unserem Dienst verfolgt. Als nächstes werden wir weitermachen, um die Funktionalität unseres Footers zum Laufen zu bringen, einschließlich des Todo-Zählers, und uns das bedingte Rendering ansehen, einschließlich der korrekten Stilisierung von Todos, wenn sie überprüft wurden. Wir werden auch unsere "Clear completed"-Schaltfläche anschließen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}
