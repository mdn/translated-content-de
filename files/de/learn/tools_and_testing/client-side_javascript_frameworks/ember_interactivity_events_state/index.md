---
title: "Ember-Interaktivität: Events, Klassen und Zustand"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt werden wir beginnen, unserer App etwas Interaktivität hinzuzufügen und die Möglichkeit bereitstellen, neue ToDo-Items hinzuzufügen und anzuzeigen. Dabei werden wir uns mit der Nutzung von Events in Ember beschäftigen, Komponentenklassen erstellen, um JavaScript-Code zur Steuerung interaktiver Funktionen zu kapseln, und einen Service einrichten, um den Datenzustand unserer App zu verfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen vertraut sind und
          über Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/der Befehlszeile</a
          >verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Komponentenklassen erstellt und Events verwendet, um die
        Interaktivität zu steuern und den Zustand der App mithilfe eines Services
        zu verfolgen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Jetzt, wo wir eine refaktorisierte, komponentenbasierte Version unserer ToDo-App haben, gehen wir durch, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktional zu machen.

Wenn man anfängt, über Interaktivität nachzudenken, ist es gut, die Ziele und Verantwortlichkeiten jeder Komponente zu definieren. In den untenstehenden Abschnitten werden wir dies für jede Komponente tun und Ihnen dann zeigen, wie die Funktionalität implementiert werden kann.

## Erstellung von ToDos

Für unsere Card-Header / Todo-Eingabe möchten wir in der Lage sein, die eingegebene Todo-Aufgabe beim Drücken der <kbd>Enter</kbd>-Taste zu übermitteln und sie in der ToDo-Liste erscheinen zu lassen.

Wir möchten den Text erfassen, der in das Eingabefeld eingegeben wurde. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir unseren Todo speichern und diesen Text an die ToDo-Listenkomponente weitergeben können, um ihn anzuzeigen.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event über den [on-Modifikator](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, der ein syntaktischer Zucker von Ember um [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (sehen Sie sich bei Bedarf die [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events) an).

Fügen Sie die neue Zeile, die unten gezeigt wird, in Ihre `header.hbs`-Datei ein:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut befindet sich innerhalb doppelter geschweifter Klammern, was Ihnen sagt, dass es Teil der dynamischen Templating-Syntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Typ des Events, auf das reagiert werden soll (`keydown`), und das letzte Argument ist der Event-Handler — der Code, der ausgeführt wird, wenn das `keydown`-Event ausgelöst wird. Wie Sie es von der Arbeit mit [Vanilla JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) erwarten würden, bezieht sich das Schlüsselwort `this` auf den "Kontext" bzw. den "Scope" der Komponente. Das `this` einer Komponente wird sich von dem `this` einer anderen Komponente unterscheiden.

Wir können definieren, was innerhalb von `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die mit Ihrer Komponente einhergeht. Dies ist eine Vanilla-JavaScript-Klasse und hat keine besondere Bedeutung für Ember, abgesehen davon, dass sie von der `Component`-Superklasse _erbt_.

Um eine Header-Klasse zu erstellen, die zu Ihrer Header-Komponente passt, geben Sie dies in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies erstellt die folgende leere Klassendatei — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei werden wir den Event-Handler-Code implementieren. Aktualisieren Sie den Inhalt auf folgendes:

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

Der `@action`-Decorator ist der einzige Ember-spezifische Code hier (abgesehen davon, von der `Component`-Superklasse zu erben, und den Ember-spezifischen Elementen, die wir mit [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist Vanilla-JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Decorator erklärt, dass die Funktion eine "Action" ist, was bedeutet, sie ist eine Art Funktion, die aufgerufen wird, wenn ein Event auftritt, das im Template definiert ist. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Decorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umwickelt und aufruft, dabei zusätzliche Funktionalitäten bereitstellt. Zum Beispiel führt der `@tracked`-Decorator (siehe etwas später) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich Werte ändern. [Lesen Sie Javascript Decorators: Was sie sind und wann man sie verwenden sollte](https://www.sitepoint.com/javascript-decorators-what-they-are/) für allgemeine Informationen über Decorator.

Zurück in unserem Browser-Tab mit der laufenden App, können wir alles eingeben, was wir wollen, und wenn wir <kbd>Enter</kbd> drücken, werden wir mit einer Alert-Nachricht begrüßt, die uns genau sagt, was wir eingegeben haben.

![Der anfängliche Platzhalterzustand der Hinzufügungsfunktion, der zeigt, dass der eingegebene Text in den Eingabeelementen zurückgemeldet wird.](todos-hello-there-alert.png)

Mit der Interaktivität der Header-Eingabe aus dem Weg, brauchen wir einen Ort, um Todos zu speichern, damit andere Komponenten darauf zugreifen können.

## Speicherung von Todos mit einem Service

Ember bietet ein integriertes anwendungsweites **Zustands**management, das wir verwenden können, um die Speicherung unserer Todos zu verwalten und es jeder unserer Komponenten zu ermöglichen, auf Daten von diesem anwendungsweiten Zustand zuzugreifen. Ember nennt diese Konstrukte [Services](https://guides.emberjs.com/release/services/) und sie leben für die gesamte Lebensdauer der Seite (ein Seiten-Refresh wird sie löschen; die Daten länger zu speichern ist außerhalb des Umfangs dieses Tutorials).

Führen Sie diesen Terminalbefehl aus, um einen Service zu generieren, in dem wir unsere ToDo-Listen-Daten speichern können:

```bash
ember generate service todo-data
```

Dies sollte Ihnen eine Terminalausgabe wie diese geben:

```plain
installing service
  create app/services/todo-data.js
installing service-test
  create tests/unit/services/todo-data-test.js
```

Dies erstellt eine `todo-data.js`-Datei im Verzeichnis `todomvc/app/services`, die unseren Service enthält und ursprünglich eine Import-Anweisung und eine leere Klasse beinhaltet:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zuerst wollen wir _definieren, was ein ToDo ist_. Wir wissen, dass wir sowohl den Text eines ToDo als auch den Status, ob es erledigt ist oder nicht, verfolgen wollen.

Fügen Sie die folgende `import`-Anweisung unter der bestehenden hinzu:

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

Diese Klasse repräsentiert ein ToDo — sie enthält eine `@tracked text`-Eigenschaft, die den Text des ToDo enthält, und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das ToDo abgeschlossen ist. Bei der Instanziierung hat ein `ToDo`-Objekt einen Initialwert `text`, der dem bei der Erstellung übergebenen Text entspricht (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Decorator — dieser hakt sich ins Reaktivitätssystem ein und ermöglicht es Ember, automatisch zu aktualisieren, was Sie in Ihrer App sehen, wenn sich die verfolgten Eigenschaften ändern. [Weitere Informationen zu `tracked` finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Jetzt ist es Zeit, den Körper des Services zu ergänzen.

Fügen Sie zuerst eine weitere `import`-Anweisung unter der vorherigen hinzu, um Aktionen innerhalb des Services verfügbar zu machen:

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

Hier wird die `todos`-Eigenschaft im Service unsere Liste der Todos, die in einem Array enthalten sind, aufrechterhalten, und wir markieren sie mit `@tracked`, weil wir möchten, dass die Benutzeroberfläche ebenfalls aktualisiert wird, wenn der Wert von `todos` aktualisiert wird.

Und genau wie zuvor wird die `add()`-Funktion, die vom Template aufgerufen wird, mit dem `@action`-Decorator annotiert, um sie an die Klasseninstanz zu binden. Wir [spreizen unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem auslöst, um die Benutzeroberfläche zu aktualisieren.

## Verwendung des Services in unserer Header-Komponente

Jetzt, da wir eine Möglichkeit definiert haben, Todos hinzuzufügen, können wir mit diesem Service aus der `header.js`-Eingabekomponente heraus interagieren, um tatsächlich mit dem Hinzufügen zu beginnen.

Zuerst muss der Service über den `@inject`-Decorator im Template injiziert werden, den wir der semantischen Klarheit halber in `@service` umbenennen. Um dies zu tun, fügen Sie die folgende `import`-Zeile zu `header.js` hinzu, unterhalb der beiden bestehenden `import`-Zeilen:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import an Ort und Stelle, können wir nun den `todo-data`-Service innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen, indem wir den `@service`-Decorator verwenden. Fügen Sie die folgende Zeile direkt unterhalb der öffnenden `export…`-Zeile hinzu:

```js
@service('todo-data') todos;
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch folgendes:

```js
this.todos.add(text);
```

Wenn wir das im ToDo-App-Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), scheint es, als würde nichts passieren, nachdem die <kbd>Enter</kbd>-Taste gedrückt wurde (obwohl die Tatsache, dass die App ohne Fehler gebaut wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser ToDo hinzugefügt wurde:

![Die App wird im Ember Inspector angezeigt, um zu beweisen, dass hinzugefügte Todos vom Service gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden](todos-in-ember-inspector.gif)

## Anzeige unserer Todos

Jetzt, wo wir wissen, dass wir Todos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets" Todos mit den tatsächlich erstellten Todos auszutauschen. In der `TodoList`-Komponente möchten wir die Todos aus dem Service abrufen und für jedes Todo eine `Todo`-Komponente rendern.

Um die Todos aus dem Service abzurufen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Ctrl</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit folgendem Code, der den `todo-data`-Service über die `todos`-Eigenschaft für unser Template zugänglich macht. Dadurch ist es sowohl innerhalb der Klasse als auch im Template über `this.todos` zugänglich:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Service `todos` genannt wird, aber die Liste der Todos ebenfalls `todos`, daher würden wir derzeit die Daten mit `this.todos.todos` abrufen. Dies ist nicht intuitiv, also fügen wir dem `todos`-Service ein [getter](/de/docs/Web/JavaScript/Reference/Functions/get) namens `all` hinzu, welches alle Todos repräsentiert.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen die folgende Zeile unterhalb der `@tracked todos = [];`-Zeile hinzu:

```js
get all() {
  return this.todos;
}
```

Jetzt können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um das in die Praxis umzusetzen, gehen Sie zu Ihrer `todo-list.hbs`-Komponente und ersetzen die statischen Komponentenzugriffe:

```hbs
<Todo />
<Todo />
```

Mit einem dynamischen `#each`-Block (der im Grunde syntaktischer Zucker über dem JavaScript-`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)) ist, der eine `<Todo />`-Komponente für jedes verfügbare Todo in der vom Service zurückgegebenen Liste von Todos erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Möglichkeit, dies zu betrachten:

- `this` — der Rendering-Kontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft von `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist ein Verweis auf den `todo-data`-Service, der uns ermöglicht, direkt mit der Service-Instanz zu interagieren.
- `all` — ein Getter auf dem `todo-data`-Service, der alle Todos zurückgibt.

Versuchen Sie, den Server erneut zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Naja, irgendwie. Wann immer Sie ein neues ToDo-Item eingeben, erscheint ein neuer Listeneintrag unter dem Texteingabefeld, aber leider heißt es immer "Buy Movie Tickets".

Das liegt daran, dass die Textbeschriftung innerhalb jedes Listeneintrags fest auf diesen Text codiert ist, wie in `todo.hbs` zu sehen:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — welches das ToDo darstellt, das wir in diese Komponente übergeben haben, als es in `todo-list.hbs` aufgerufen wurde, in der Zeile `<Todo @todo=\{{todo}} />`:

```hbs
<label>\{{@todo.text}}</label>
```

OK, probieren Sie es noch einmal. Sie sollten feststellen, dass jetzt der im `<input>` übermittelte Text korrekt in der Benutzeroberfläche angezeigt wird:

![Die App wird in ihrem endgültigen Zustand dieses Artikels angezeigt, wobei eingegebene ToDo-Items in der Benutzeroberfläche angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist ein großartiger Fortschritt für jetzt. Wir können nun ToDo-Items zu unserer App hinzufügen, und der Zustand der Daten wird mithilfe unseres Services verfolgt. Als nächstes werden wir die Funktionalität unseres Footers zum Laufen bringen, einschließlich des ToDo-Zählers, und uns mit der bedingten Rendering beschäftigen, einschließlich der korrekten Formatierung von ToDos, wenn sie überprüft wurden. Wir werden auch unseren "Clear completed"-Button verbinden.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
