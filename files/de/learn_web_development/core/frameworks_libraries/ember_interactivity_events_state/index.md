---
title: "Ember Interaktivität: Ereignisse, Klassen und Zustand"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt werden wir beginnen, unserer App etwas Interaktivität hinzuzufügen, indem wir die Möglichkeit bieten, neue Aufgaben hinzuzufügen und anzuzeigen. Dabei betrachten wir die Verwendung von Ereignissen in Ember, das Erstellen von Komponentenklassen, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und das Einrichten eines Dienstes, um den Datenzustand unserer App zu verfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tiefergehendes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember diese häufig verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Komponentenklassen erstellt und Ereignisse verwendet, um
        Interaktivität zu steuern, und den App-Zustand mit einem Dienst zu verfolgen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine überarbeitete, komponentisierte Version unserer To-do-App. Lassen Sie uns durchgehen, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktionsfähig zu machen.

Wenn Sie beginnen, über Interaktivität nachzudenken, ist es gut zu deklarieren, was die Ziele und Verantwortlichkeiten jeder Komponente sind. In den folgenden Abschnitten werden wir dies für jede Komponente tun und Ihnen dann zeigen, wie die Funktionalität implementiert werden kann.

## Aufgaben erstellen

Für unseren Kartenkopf / To-do-Eingabe möchten wir in der Lage sein, unsere eingetippte To-do-Aufgabe zu übermitteln, wenn wir die <kbd>Eingabe</kbd>-Taste drücken, und sie in der Aufgabenliste erscheinen zu lassen.

Wir möchten in der Lage sein, den in das Eingabefeld eingegebenen Text zu erfassen. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir unser To-do speichern und diesen Text an die To-do-Listenkomponente zum Anzeigen weitergeben können.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis über den [on-Modifikator](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers#on) erfassen, was nur Ember-Syntaxt zu [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events), falls nötig).

Fügen Sie die neue Zeile, die unten gezeigt wird, zu Ihrer `header.hbs`-Datei hinzu:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut befindet sich in doppelten geschweiften Klammern, was darauf hinweist, dass es Teil der dynamischen Templating-Syntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Typ des Ereignisses, auf das reagiert werden soll (`keydown`), und das letzte Argument ist der Ereignishandler — der Code, der als Reaktion auf das Auslösen des `keydown`-Ereignisses ausgeführt wird. Wie Sie es von der Arbeit mit [Vanilla-JavaScript-Objekten](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) erwarten, bezieht sich das Schlüsselwort `this` auf den "Kontext" oder "Scope" der Komponente. Das `this` einer Komponente wird sich von dem einer anderen Komponente unterscheiden.

Wir können definieren, was innerhalb von `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die zu Ihrer Komponente gehört. Dies ist eine Vanilla-JavaScript-Klasse und hat für Ember keine besondere Bedeutung, außer sie erweitert die `Component`-Superklasse.

Um eine Header-Klasse zu Ihrer Header-Komponente zu erstellen, geben Sie dies in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies wird die folgende leere Klassendatei erstellen — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei werden wir den Ereignishandlercode implementieren. Aktualisieren Sie den Inhalt wie folgt:

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

Der `@action`-Dekorator ist hier der einzige von Ember spezifische Code (abgesehen von der Erweiterung der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mithilfe der [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist Vanilla-JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt, dass die Funktion eine "Aktion" ist, was bedeutet, dass sie ein Funktionstyp ist, der von einem im Template aufgetretenen Ereignis aufgerufen wird. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umhüllt und aufruft, um zusätzliche Funktionalität hinzuzufügen. Zum Beispiel führt der `@tracked`-Dekorator (siehe etwas später) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich die Werte ändern. [Lesen Sie JavaScript Decorators: What They Are and When to Use Them](https://www.sitepoint.com/javascript-decorators-what-they-are/) für allgemeine Informationen zu Dekoratoren.

Zurück zu unserem Browser-Tab mit der laufenden App können wir eingeben, was wir möchten, und wenn wir <kbd>Eingabe</kbd> drücken, erhalten wir eine Alert-Nachricht, die uns genau sagt, was wir eingegeben haben.

![der anfängliche Platzhalterstatus der Hinzufügen-Funktion, die den in die Eingabesymbole eingegebenen Text anzeigt, wird Ihnen zurückgemeldet.](todos-hello-there-alert.png)

Mit der Interaktivität des Eingabekopfs aus dem Weg benötigen wir einen Ort, um Aufgaben zu speichern, damit andere Komponenten auf sie zugreifen können.

## Speicherung von Aufgaben mit einem Dienst

Ember hat ein integriertes anwendungsweites **Zustands**management, das wir verwenden können, um die Speicherung unserer Aufgaben zu verwalten und jeder unserer Komponenten den Zugriff auf Daten aus diesem anwendungsweiten Zustand zu ermöglichen. Ember nennt diese Konstrukte [Dienste](https://guides.emberjs.com/release/services/), und sie bestehen über die gesamte Lebensdauer der Seite (ein Seiten-Refresh wird sie löschen; die Daten länger zu speichern liegt außerhalb des Umfangs dieses Tutorials).

Führen Sie diesen Terminal-Befehl aus, um einen Dienst zu generieren, in dem wir unsere To-do-Listen-Daten speichern können:

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

Dies erstellt eine `todo-data.js`-Datei im `todomvc/app/services`-Verzeichnis, um unseren Dienst zu enthalten, der ursprünglich eine Importanweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zuerst wollen wir definieren, was ein To-do _ist_. Wir wissen, dass wir sowohl den Text eines To-dos als auch ob es erledigt ist, verfolgen möchten.

Fügen Sie die folgende `import`-Anweisung unterhalb der bestehenden hinzu:

```js
import { tracked } from "@glimmer/tracking";
```

Fügen Sie nun die folgende Klasse unterhalb der vorher hinzugefügten Zeile hinzu:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse repräsentiert ein To-do — sie enthält eine `@tracked text`-Eigenschaft, die den Text des To-dos enthält, und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das To-do abgeschlossen ist oder nicht. Bei der Instanziierung wird ein `Todo`-Objekt einen anfänglichen `text`-Wert haben, der dem bei der Erstellung angegebenen Text entspricht (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser verbindet sich mit dem Reaktivitätssystem und ermöglicht es Ember, das, was Sie in Ihrer App sehen, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Mehr Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Jetzt ist es an der Zeit, zum Körper des Dienstes hinzuzufügen.

Fügen Sie zuerst eine weitere `import`-Anweisung unter der vorherigen hinzu, um Aktionen im Dienst verfügbar zu machen:

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

Hier wird die `todos`-Eigenschaft im Dienst unsere Liste von Aufgaben in einem Array aufrechterhalten, und wir werden sie mit `@tracked` markieren, weil wir möchten, dass die Benutzeroberfläche aktualisiert wird, wenn der Wert von `todos` aktualisiert wird.

Und wie zuvor wird die `add()`-Funktion, die vom Template aufgerufen wird, mit dem `@action`-Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir [verbreiten unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem dazu bringt, die Benutzeroberfläche zu aktualisieren.

## Den Dienst aus unserer Kopfkomponente verwenden

Da wir nun eine Möglichkeit definiert haben, Aufgaben hinzuzufügen, können wir mit dieser Dienstleistung aus der `header.js`-Eingabekomponente interagieren, um tatsächlich damit zu beginnen, sie hinzuzufügen.

Zuerst muss der Dienst über den `@inject`-Dekorator in das Template eingefügt werden, das wir zur semantischen Klarheit in `@service` umbenennen werden. Um dies zu tun, fügen Sie die folgende `import`-Zeile in `header.js` ein, unterhalb der beiden bestehenden `import`-Zeilen:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import an Ort und Stelle können wir nun den `todo-data`-Dienst mithilfe des `@service`-Dekorators innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen. Fügen Sie die folgende Zeile direkt unter der öffnenden `export…`-Zeile hinzu:

```js
export default class HeaderComponent extends Component {
  @service("todo-data") todos;
  // …
}
```

Nun kann die Platzhalterzeile `alert(text);` mit einem Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch Folgendes:

```js
this.todos.add(text);
```

Wenn wir dies in der To-do-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), scheint es, als ob nach dem Drücken der <kbd>Eingabe</kbd>-Taste nichts passiert (obwohl die Tatsache, dass die App ohne Fehler gebaut wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser To-do hinzugefügt wurde:

![Die App wird im Ember Inspector angezeigt, um zu beweisen, dass hinzugefügte To-dos vom Dienst gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden](todos-in-ember-inspector.gif)

## Unsere Aufgaben anzeigen

Da wir nun wissen, dass wir Aufgaben erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets"-Aufgaben gegen die tatsächlich erstellten Aufgaben auszutauschen. In der `TodoList`-Komponente möchten wir die Aufgaben aus dem Dienst abrufen und eine `Todo`-Komponente für jede verfügbare Aufgabe rendern.

Um die Aufgaben vom Dienst abzurufen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Strg</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code aus, der den `todo-data`-Dienst über die `todos`-Eigenschaft für unser Template zugänglich macht. Dies macht es sowohl innerhalb der Klasse als auch im Template über `this.todos` zugänglich:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Dienst `todos` genannt wird, aber die Liste der Aufgaben auch `todos` genannt wird, sodass wir derzeit auf die Daten mit `this.todos.todos` zugreifen würden. Das ist nicht intuitiv, also fügen wir der `todos`-Eigenschaft einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) namens `all` hinzu, der alle Aufgaben repräsentieren wird.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen Sie folgendes unter der Zeile `@tracked todos = [];` hinzu:

```js
export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }
  // …
}
```

Nun können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um dies in die Tat umzusetzen, gehen Sie zu Ihrer `todo-list.hbs`-Komponente, und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Mit einem dynamischen `#each`-Block (der im Wesentlichen syntaktischer Zucker über JavaScripts [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)) ist, der eine `<Todo />`-Komponente für jedes in der vom Dienst zurückgegebenen Liste enthaltene To-do erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Möglichkeit, dies zu sehen:

- `this` — der Rendering-Kontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist ein Verweis auf den `todo-data`-Dienst, der es uns ermöglicht, direkt mit der Dienstinstanz zu interagieren.
- `all` — ein Getter auf dem `todo-data`-Dienst, der alle Aufgaben zurückgibt.

Versuchen Sie nochmal, den Server zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Nun, irgendwie. Immer wenn Sie ein neues To-do-Element eingeben, erscheint ein neues Listenelement unter dem Texteingabefeld, das leider immer "Buy Movie Tickets" sagt.

Dies liegt daran, dass das Textetikett innerhalb jedes Listenelements hartkodiert auf diesen Text eingestellt ist, wie in `todo.hbs` zu sehen ist:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — welches das To-do darstellt, das wir an diese Komponente übergeben haben, als sie in `todo-list.hbs` in der Zeile `<Todo @todo=\{{todo}} />` aufgerufen wurde:

```hbs
<label>\{{@todo.text}}</label>
```

OK, versuchen Sie es erneut. Sie sollten feststellen, dass der im `<input>` übermittelte Text nun korrekt in der Benutzeroberfläche wiedergegeben wird:

![Die App wird im Endzustand dieses Artikels angezeigt, wobei eingegebene To-do-Elemente in der Benutzeroberfläche angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das sind schon mal große Fortschritte für jetzt. Wir können nun To-do-Elemente zu unserer App hinzufügen, und der Datenzustand wird mit unserem Dienst nachverfolgt. Als nächstes werden wir uns der Funktionalität des Fußzeilen widmen, einschließlich des To-do-Zählers, und uns mit der Bedingungserstellung befassen, einschließlich der korrekten Stilierung von Aufgaben, wenn sie abgehakt wurden. Wir werden auch unseren "Erledigte löschen"-Button verkabeln.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}
