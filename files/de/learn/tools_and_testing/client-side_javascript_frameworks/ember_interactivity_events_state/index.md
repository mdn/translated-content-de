---
title: "Ember-Interaktivität: Ereignisse, Klassen und Zustand"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt werden wir anfangen, etwas Interaktivität zu unserer App hinzuzufügen, indem wir die Möglichkeit hinzufügen, neue Todo-Elemente hinzuzufügen und anzuzeigen. Dabei werden wir uns ansehen, wie Ereignisse in Ember genutzt werden, wie man Komponentenklassen erstellt, um JavaScript-Code zur Steuerung interaktiver Funktionen einzufügen, und wie man einen Service einrichtet, um den Datenzustand unserer App zu verfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember intensiv Gebrauch
          davon macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Komponentenklassen erstellt und Ereignisse nutzt, um
        Interaktivität zu steuern, und den App-Zustand mithilfe eines Services zu
        verfolgen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine überarbeitete, komponentisierte Version unserer Todo-App. Lassen Sie uns durchgehen, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktionsfähig zu machen.

Wenn man über Interaktivität nachdenkt, ist es gut zu erklären, was die Ziele und Verantwortlichkeiten jedes Komponentenbestandteils sind. In den folgenden Abschnitten werden wir dies für jede Komponente tun und Ihnen dann zeigen, wie die Funktionalität implementiert werden kann.

## Erstellen von Todos

Für unsere card-header- / todo-Eingabe möchten wir in der Lage sein, unsere eingegebene Todo-Aufgabe zu übermitteln, wenn wir die <kbd>Enter</kbd>-Taste drücken und sie in der Todo-Liste erscheinen lassen.

Wir möchten den eingegebenen Text im Eingabefeld erfassen können. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir können unser Todo speichern und diesen Text an die Todo-Listenkomponente weitergeben, um ihn anzuzeigen.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis über den [on modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, der einfach syntaktischer Zucker von Ember über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) bei Bedarf).

Fügen Sie die folgende Zeile zu Ihrer `header.hbs`-Datei hinzu:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut befindet sich innerhalb von doppelten geschweiften Klammern, was darauf hinweist, dass es Teil der dynamischen Templatingsyntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Ereignistyp, auf den reagiert werden soll (`keydown`), und das letzte Argument ist der Ereignishandler – der Code, der als Reaktion auf das Auftreten des `keydown`-Ereignisses ausgeführt wird. Wie Sie es von der Arbeit mit [vanilla JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) erwarten können, bezieht sich das `this`-Schlüsselwort auf den "Kontext" oder den "Scope" der Komponente. `this` einer Komponente unterscheidet sich von `this` einer anderen Komponente.

Wir können definieren, was in `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die mit Ihrer Komponente einhergeht. Dies ist eine vanilla JavaScript-Klasse und hat keine besondere Bedeutung für Ember, außer dass sie von der `Component`-Superklasse _erweitert_ wird.

Um eine Header-Klasse zu Ihrer Header-Komponente hinzuzufügen, geben Sie Folgendes in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies erstellt die folgende leere Klassendatei — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

Innerhalb dieser Datei werden wir den Code für den Ereignishandler implementieren. Aktualisieren Sie den Inhalt auf Folgendes:

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

Der `@action`-Dekorator ist der einzige Ember-spezifische Code hier (abgesehen von der Erweiterung der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mit [JavaScript-Modul-Syntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist vanilla JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt, dass die Funktion eine "Aktion" ist, das heißt, sie ist eine Art Funktion, die von einem Ereignis ausgelöst wird, das im Template aufgetreten ist. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umschließt und aufruft, wobei sie zusätzlichen Nutzen bietet. Zum Beispiel führt der `@tracked`-Dekorator (siehe etwas später) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert automatisch die App, wenn sich Werte ändern. [Lesen Sie JavaScript Decorators: What They Are and When to Use Them](https://www.sitepoint.com/javascript-decorators-what-they-are/) für weitere allgemeine Informationen zu Dekoratoren.

Zurück zu unserem Browser-Tab mit der laufenden App, wir können eingeben, was wir wollen, und wenn wir <kbd>Enter</kbd> drücken, werden wir mit einer Warnmeldung begrüßt, die uns genau sagt, was wir eingegeben haben.

![Der anfängliche Platzhalterzustand der Hinzufunktion, zeigt den Text, der in die Eingabeelemente eingegeben wurde, der Ihnen zurückgemeldet wird.](todos-hello-there-alert.png)

Mit der Interaktivität der Header-Eingabe aus dem Weg benötigen wir einen Ort, um Todos zu speichern, damit andere Komponenten darauf zugreifen können.

## Speichern von Todos mit einem Service

Ember hat ein integriertes **Zustands**-Management auf Anwendungsebene, das wir nutzen können, um die Speicherung unserer Todos zu verwalten und es unseren Komponenten zu ermöglichen, Daten aus diesem Zustandsmanagement zu beziehen. Ember nennt diese Konstrukte [Services](https://guides.emberjs.com/release/services/), und sie leben für die gesamte Lebensdauer der Seite (ein Seitenneuladen wird sie löschen; die Daten länger zu speichern, liegt außerhalb des Umfangs dieses Tutorials).

Führen Sie diesen Terminal-Befehl aus, um einen Service zu generieren, in dem wir unsere Todo-Listendaten speichern können:

```bash
ember generate service todo-data
```

Dies sollte Ihnen eine Terminalausgabe geben wie folgt:

```plain
installing service
  create app/services/todo-data.js
installing service-test
  create tests/unit/services/todo-data-test.js
```

Dies erstellt eine `todo-data.js`-Datei im `todomvc/app/services`-Verzeichnis, um unseren Service zu enthalten, der anfangs eine Importanweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zunächst wollen wir definieren, _was ein Todo ist_. Wir wissen, dass wir sowohl den Text eines Todos als auch ob es abgeschlossen ist, verfolgen möchten.

Fügen Sie die folgende `import`-Anweisung unter der bestehenden hinzu:

```js
import { tracked } from "@glimmer/tracking";
```

Fügen Sie nun die folgende Klasse unter der vorherigen Zeile hinzu, die Sie hinzugefügt haben:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse stellt ein Todo dar — sie enthält eine `@tracked text`-Eigenschaft, die den Text des Todos enthält, und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das Todo abgeschlossen wurde oder nicht. Wenn eine `Todo`-Instanz erstellt wird, hat sie einen anfänglichen `text`-Wert, der dem bei ihrer Erstellung angegebenen Text entspricht (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser ist in das Reaktivitätssystem integriert und erlaubt Ember, das, was Sie in Ihrer App sehen, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Weitere Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Nun ist es an der Zeit, den Körper des Services zu ergänzen.

Fügen Sie zunächst unterhalb der vorherigen Importzeile eine weitere `import`-Anweisung hinzu, um Aktionen innerhalb des Services verfügbar zu machen:

```js
import { action } from "@ember/object";
```

Aktualisieren Sie den bestehenden `export default class TodoDataService extends Service { }`-Block wie folgt:

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

Hier wird die `todos`-Eigenschaft des Services unsere Liste von Todos in einem Array pflegen, und wir werden sie mit `@tracked` markieren, weil wir möchten, dass sich die Benutzeroberfläche ebenfalls aktualisiert, wenn sich der Wert von `todos` ändert.

Und wie zuvor wird die `add()`-Funktion, die vom Template aus aufgerufen wird, mit dem `@action`-Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir [verbreiten unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem auslöst, die Benutzeroberfläche zu aktualisieren.

## Verwenden des Services aus unserer Header-Komponente

Jetzt, da wir eine Möglichkeit definiert haben, Todos hinzuzufügen, können wir mit diesem Service von der `header.js`-Eingabekomponente aus interagieren, um sie tatsächlich hinzuzufügen.

Als Erstes muss der Service über den `@inject`-Dekorator in das Template eingefügt werden, den wir aus semantischen Gründen in `@service` umbenennen. Um dies zu tun, fügen Sie die folgende `import`-Zeile in `header.js` unterhalb der beiden bestehenden `import`-Zeilen hinzu:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import können wir nun den `todo-data`-Service innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt mit dem `@service`-Dekorator verfügbar machen. Fügen Sie die folgende Zeile direkt unter der eröffnenden `export…`-Zeile hinzu:

```js
@service('todo-data') todos;
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie ihn durch Folgendes:

```js
this.todos.add(text);
```

Wenn wir dies in der Todo-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), sieht es so aus, als ob nach dem Drücken der <kbd>Enter</kbd>-Taste nichts passiert (obwohl die Tatsache, dass die App ohne Fehler erstellt wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser Todo hinzugefügt wurde:

![Die App wird im Ember Inspector gezeigt, um zu beweisen, dass hinzugefügte Todos vom Service gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden](todos-in-ember-inspector.gif)

## Anzeigen unserer Todos

Nun, da wir wissen, dass wir Todos erstellen können, muss es einen Weg geben, unsere statischen "Buy Movie Tickets"-Todos mit den tatsächlich erstellten Todos zu tauschen. In der `TodoList`-Komponente möchten wir die Todos aus dem Service abrufen und eine `Todo`-Komponente für jedes Todo rendern.

Um die Todos aus dem Service abzurufen, benötigt unsere `TodoList`-Komponente zunächst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Strg</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminal-Befehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code, der den `todo-data`-Service über die `todos`-Eigenschaft für unser Template verfügbar macht. Dies macht ihn innerhalb sowohl der Klasse als auch des Templates über `this.todos` zugänglich:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Service `todos` genannt wird, die Liste der Todos jedoch auch `todos` genannt wird, sodass wir derzeit auf die Daten mit `this.todos.todos` zugreifen würden. Dies ist nicht intuitiv, also fügen wir dem `todos`-Service einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) namens `all` hinzu, der alle Todos darstellen wird.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen Sie Folgendes unterhalb der `@tracked todos = [];`-Zeile hinzu:

```js
get all() {
  return this.todos;
}
```

Nun können wir über `this.todos.all` auf die Daten zugreifen, was viel intuitiver ist. Um dies in Aktion zu sehen, gehen Sie zu Ihrer `todo-list.hbs`-Komponente und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Durch einen dynamischen `#each`-Block (der im Grunde syntaktischer Zucker über der JavaScript-[`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode ist), der eine `<Todo />`-Komponente für jedes verfügbare Todo in der vom Service zurückgegebenen Todos-Liste erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Ein anderes mal zur Anschauung:

- `this` — der Rendering-Kontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft von `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz zum `todo-data`-Service, die es uns ermöglicht, direkt mit der Service-Instanz zu interagieren.
- `all` — ein Getter im `todo-data`-Service, der alle Todos zurückgibt.

Versuchen Sie, den Server erneut zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Nun, mehr oder weniger. Jedes Mal, wenn Sie ein neues Todo-Element eingeben, erscheint ein neues Listenelement unter der Texteingabe, aber leider wird immer "Buy Movie Tickets" angezeigt.

Dies liegt daran, dass das Textetikett in jedem Listenelement auf diesen Text festgelegt ist, wie in `todo.hbs` zu sehen:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — welches das Todo darstellen wird, das wir in dieser Komponente beim Aufruf in `todo-list.hbs` über den Zeilen `<Todo @todo=\{{todo}} />` übergeben haben:

```hbs
<label>\{{@todo.text}}</label>
```

OK, probieren Sie es noch einmal. Sie sollten feststellen, dass nun der im `<input>`-Feld eingegebene Text korrekt in der Benutzeroberfläche widergespiegelt wird:

![Die App wird in ihrem endgültigen Zustand dieses Artikels gezeigt, mit eingegebenen Todo-Elementen, die in der Benutzeroberfläche angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist ein großer Fortschritt für den Moment. Wir können nun Todo-Elemente zu unserer App hinzufügen und der Zustand der Daten wird mit unserem Service nachverfolgt. Als Nächstes werden wir die Funktionalität unseres Footer zum Laufen bringen, einschließlich des Todo-Zählers, und uns die bedingte Darstellung ansehen, einschließlich der korrekten Gestaltung von Todos, wenn sie angekreuzt wurden. Wir werden auch unsere Schaltfläche "Erledigte löschen" anschließen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
