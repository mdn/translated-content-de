---
title: "Ember-Interaktivität: Ereignisse, Klassen und Status"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

An diesem Punkt fügen wir unserer App etwas Interaktivität hinzu und ermöglichen das Hinzufügen und Anzeigen neuer Todo-Elemente. Unterwegs betrachten wir die Verwendung von Ereignissen in Ember, die Erstellung von Komponentenklassen, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und die Einrichtung eines Dienstes, um den Datenstatus unserer App zu verfolgen.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember stark Gebrauch
          davon macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Komponentenklassen erstellt und Ereignisse zur Steuerung
        der Interaktivität verwendet und den App-Status mit einem Dienst verfolgt.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine refaktorisierte komponentenbasierte Version unserer Todo-App. Lassen Sie uns durchgehen, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktionsfähig zu machen.

Wenn Sie anfangen, über Interaktivität nachzudenken, ist es gut, die Ziele und Verantwortlichkeiten jeder Komponente zu deklarieren. In den unten stehenden Abschnitten werden wir dies für jede Komponente tun und Sie dann durch die Implementierung der Funktionalität führen.

## Todos erstellen

Für unsere Kartenkopfzeile / Todo-Eingabe möchten wir in der Lage sein, unsere eingegebenen Todo-Aufgaben zu übermitteln, wenn wir die <kbd>Enter</kbd>-Taste drücken, damit sie in der Todo-Liste erscheint.

Wir wollen den Text erfassen können, den wir in das Eingabefeld eingegeben haben. Wir tun dies, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir können unser Todo speichern und diesen Text an die Todolisten-Komponente zur Anzeige weitergeben.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis über den [on modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers#on) erfassen, was nur Ember-Syntaktik für [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) falls nötig).

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

Dieses neue Attribut befindet sich innerhalb von doppelten geschweiften Klammern, was Ihnen anzeigt, dass es Teil der dynamischen Templating-Syntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Typ des zu beantwortenden Ereignisses (`keydown`), und das letzte Argument ist der Ereignishandler — der Code, der als Reaktion auf das `keydown`-Ereignis ausgeführt wird. Wie Sie es von der Arbeit mit [Vanilla JavaScript Objects](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) erwarten könnten, bezieht sich das Schlüsselwort `this` auf den „Kontext“ oder den „Bereich“ der Komponente. Das `this` einer Komponente wird von dem einer anderen Komponente unterschiedlich sein.

Wir können definieren, was innerhalb von `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die zu Ihrer Komponente passt. Dies ist eine Vanilla-JavaScript-Klasse und hat für Ember keine besondere Bedeutung, außer dass sie von der `Component`-Superklasse erbt.

Um eine Header-Klasse zu erstellen, die zu Ihrer Header-Komponente passt, geben Sie Folgendes in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dadurch wird die folgende leere Klassendatei erstellt — `todomvc/app/components/header.js`:

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

Der `@action`-Dekorator ist hier der einzige Ember-spezifische Code (abgesehen von der Erweiterung der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mit der [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist Vanilla-JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt die Funktion als „Aktion“, was bedeutet, dass es sich um eine Art von Funktion handelt, die aus einem Ereignis, das im Template aufgetreten ist, aufgerufen wird. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umschließt und aufruft und dabei zusätzliche Funktionalität bietet. Beispiel: Der `@tracked`-Dekorator (siehe etwas später) führt den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich Werte ändern. [Lesen Sie JavaScript-Dekoratoren: Was sie sind und wann man sie verwendet](https://www.sitepoint.com/javascript-decorators-what-they-are/) für weitere allgemeine Informationen zu Dekoratoren.

Wenn wir wieder zu unserer Browsertab mit der laufenden App zurückkehren, können wir eingeben, was immer wir wollen, und wenn wir <kbd>Enter</kbd> drücken, erhalten wir eine Warnmeldung, die uns genau sagt, was wir eingegeben haben.

![der anfängliche Platzhalterzustand der Hinzufügen-Funktion, der den eingegebenen Text in den Eingabeelementen wiedergibt.](todos-hello-there-alert.png)

Mit der Interaktivität der Header-Eingabe aus dem Weg, benötigen wir einen Ort, um Todos zu speichern, damit andere Komponenten darauf zugreifen können.

## Speichern von Todos mit einem Dienst

Ember hat ein eingebautes anwendungsweites **State**-Management, das wir verwenden können, um die Speicherung unserer Todos zu verwalten und es jeder unserer Komponenten zu ermöglichen, auf Daten dieses anwendungsweites Status zuzugreifen. Ember nennt diese Konstrukte [Dienste](https://guides.emberjs.com/release/services/), und sie bestehen für die gesamte Lebensdauer der Seite (ein Seiten-Refresh wird sie löschen; das Speichern der Daten für längere Zeiträume liegt außerhalb des Umfangs dieses Tutorials).

Führen Sie diesen Terminalbefehl aus, um einen Dienst zu generieren, in dem wir unsere Todolisten-Daten speichern können:

```bash
ember generate service todo-data
```

Dieses sollte Ihnen im Terminal eine Ausgabe wie folgt geben:

```plain
installing service
  create app/services/todo-data.js
installing service-test
  create tests/unit/services/todo-data-test.js
```

Dies erstellt eine `todo-data.js`-Datei im Verzeichnis `todomvc/app/services`, um unseren Dienst zu enthalten, der zunächst eine `import`-Anweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zuerst möchten wir definieren, _was ein Todo ist_. Wir wissen, dass wir sowohl den Text eines Todos als auch ob es abgeschlossen ist, verfolgen möchten.

Fügen Sie die folgende `import`-Anweisung unterhalb der bestehenden hinzu:

```js
import { tracked } from "@glimmer/tracking";
```

Nun fügen Sie die folgende Klasse unterhalb der vorherigen hinzugefügten Zeile hinzu:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse repräsentiert ein Todo — sie enthält eine `@tracked text`-Eigenschaft mit dem Text des Todos und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das Todo abgeschlossen ist oder nicht. Beim Instanziieren wird ein `Todo`-Objekt einen anfänglichen `text`-Wert haben, der dem bei der Erstellung angegebenen Text entspricht (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser bindet in das Reaktivitätssystem ein und ermöglicht es Ember, das, was in Ihrer App angezeigt wird, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Mehr Informationen zu `tracked` finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Jetzt ist es Zeit, den Körper des Dienstes zu ergänzen.

Zuerst fügen Sie eine weitere `import`-Anweisung unterhalb der vorherigen hinzu, um Aktionen innerhalb des Dienstes verfügbar zu machen:

```js
import { action } from "@ember/object";
```

Aktualisieren Sie den vorhandenen `export default class TodoDataService extends Service { }` Block wie folgt:

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

Hier wird die `todos`-Eigenschaft auf dem Dienst unsere Liste von Todos in einem Array speichern, und wir markieren es mit `@tracked`, weil wir möchten, dass die Benutzeroberfläche ebenfalls aktualisiert wird, wenn sich der Wert der `todos`-Eigenschaft ändert.

Und wie zuvor, wird die `add()`-Funktion, die aus dem Template aufgerufen wird, mit dem `@action`-Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir verwenden das [Spread-Syntax-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem zur Aktualisierung der Benutzeroberfläche auslöst.

## Verwenden des Dienstes aus unserer Header-Komponente

Da wir jetzt eine Möglichkeit definiert haben, Todos hinzuzufügen, können wir mit diesem Dienst aus der `header.js`-Eingabekomponente interagieren, um tatsächlich mit dem Hinzufügen zu beginnen.

Zuerst muss der Dienst über den `@inject`-Dekorator in das Template eingefügt werden, den wir aus Gründen der semantischen Klarheit in `@service` umbenennen werden. Um dies zu tun, fügen Sie die folgende `import`-Zeile `header.js`, unterhalb der beiden vorhandenen `import`-Zeilen hinzu:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import an Ort und Stelle können wir jetzt den `todo-data`-Dienst innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen, indem wir den `@service` Dekorator verwenden. Fügen Sie die folgende Zeile direkt unterhalb der Öffnung `export…`-Zeile hinzu:

```js
export default class HeaderComponent extends Component {
  @service("todo-data") todos;
  // …
}
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch das Folgende:

```js
this.todos.add(text);
```

Wenn wir dies in der Todo-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), wird es den Anschein haben, dass nach Drücken der <kbd>Enter</kbd>-Taste nichts passiert (obwohl die Tatsache, dass die App ohne Fehler baut, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) jedoch können wir sehen, dass unser Todo hinzugefügt wurde:

![Die App im Ember Inspector gezeigt, um zu beweisen, dass hinzugefügte Todos vom Dienst gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden](todos-in-ember-inspector.gif)

## Unsere Todos anzeigen

Da wir wissen, dass wir Todos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets" Todos gegen die von uns tatsächlich erstellten Todos auszutauschen. In der `TodoList`-Komponente wollen wir die Todos aus dem Dienst abrufen und eine `Todo` Komponente für jedes verfügbare Todo rendern.

Um die Todos aus dem Dienst abzurufen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentenklasse, die diese Funktionalität enthält. Drücken Sie <kbd>Strg</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code aus, der den `todo-data` Dienst über die `todos`-Eigenschaft für unser Template zugänglich macht. Dies macht es zugänglich über `this.todos` sowohl in der Klasse als auch im Template:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Dienst `todos` genannt wird, aber die Todos-Liste ebenfalls `todos` genannt wird, daher würden wir derzeit auf die Daten mit `this.todos.todos` zugreifen. Das ist nicht intuitiv, daher werden wir einen [getter](/de/docs/Web/JavaScript/Reference/Functions/get) zum `todos`-Dienst namens `all` hinzufügen, der alle Todos repräsentiert.

Fügen Sie hierzu Folgendes im Datei `todo-data.js` unterhalb der Zeile `@tracked todos = [];` hinzu:

```js
export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }
  // …
}
```

Jetzt können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um dies in die Tat umzusetzen, gehen Sie zu Ihrer `todo-list.hbs` Komponente und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Mit einem dynamischen `#each`-Block (der im Grunde syntaktischen Zucker über JavaScripts [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ist) der eine `<Todo />`-Komponente für jedes im Dienst verfügbare Todo erstellt, welches von dem `all()`-Getter zurückgegeben wird:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Betrachtungsweise hierfür:

- `this` — der Rendering-Kontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js` Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz auf den `todo-data` Dienst, der uns ermöglicht, direkt mit der Dienstinstanz zu interagieren.
- `all` — ein Getter auf dem `todo-data` Dienst, der alle Todos zurückgibt.

Versuchen Sie erneut, den Server zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Naja, irgendwie. Wann immer Sie ein neues Todo-Element eingeben, erscheint ein neues Listenelement unter dem Texteingabefeld, aber leider steht dort immer "Buy Movie Tickets".

Das liegt daran, dass der Text in jedem Listenelement fest auf diesen Text codiert ist, wie in `todo.hbs` zu sehen:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — welches das Todo darstellt, das wir in dieser Komponente aufgerufen haben, als es in `todo-list.hbs` in der Zeile `<Todo @todo=\{{todo}} />` aufgerufen wurde:

```hbs
<label>\{{@todo.text}}</label>
```

OK, versuchen Sie es erneut. Sie sollten nun feststellen, dass der Text, der im `<input>`-Feld eingegeben wird, korrekt in der Benutzeroberfläche wiedergegeben wird:

![Die App wird in ihrem endgültigen Zustand in diesem Artikel gezeigt, mit eingegebenen Todo-Elementen, die in der Benutzeroberfläche angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist ein großer Fortschritt für jetzt. Wir können jetzt Todo-Elemente zu unserer App hinzufügen, und der Datenstatus wird mithilfe unseres Dienstes verfolgt. Als nächstes gehen wir dazu über, die Funktionalität unseres Footers zum Laufen zu bringen, einschließlich des Todo-Zählers, und betrachten das bedingte Rendering, einschließlich der korrekten Styling von Todos, wenn sie abgehakt wurden. Wir werden auch unseren "Clear completed"-Button anschließen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}
