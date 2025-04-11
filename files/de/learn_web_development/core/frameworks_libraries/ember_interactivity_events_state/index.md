---
title: "Ember-Interaktivität: Ereignisse, Klassen und Status"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt beginnen wir, etwas Interaktivität in unsere App einzubauen, um die Möglichkeit zu schaffen, neue To-Do-Items hinzuzufügen und anzuzeigen. Dabei werden wir uns ansehen, wie man Ereignisse in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und einen Service einrichtet, um den Datenstatus unserer App zu verfolgen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal / Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember sie intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Komponentenklassen erstellt, Ereignisse zur Steuerung
        der Interaktivität verwendet und den App-Status mit einem Service nachverfolgt.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Jetzt haben wir eine umstrukturierte, komponentenbasierte Version unserer To-Do-App. Lassen Sie uns durchgehen, wie wir die Interaktivität hinzufügen können, die wir benötigen, um die App funktional zu machen.

Wenn man anfängt, über Interaktivität nachzudenken, ist es gut, die Ziele und Verantwortlichkeiten jedes Komponenten zu deklarieren. In den unten stehenden Abschnitten werden wir dies für jede Komponente tun und Ihnen dann erklären, wie die Funktionalität implementiert werden kann.

## Erstellen von To-Dos

Für unseren card-header / To-Do-Eingabe wollen wir in der Lage sein, unsere eingegebene To-Do-Aufgabe zu übermitteln, wenn wir die <kbd>Enter</kbd>-Taste drücken und sie in der To-Do-Liste erscheint.

Wir wollen den Text erfassen können, der in das Eingabefeld eingegeben wird. Dies tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir unser To-Do speichern und diesen Text an die To-Do-Listenkomponente übergeben können, um ihn anzuzeigen.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis über den [on Modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, der im Grunde ein syntaktischer Zucker von Ember um [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) bei Bedarf).

Fügen Sie die unten gezeigte neue Zeile in Ihre `header.hbs` Datei ein:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut befindet sich in doppelten geschweiften Klammern, was darauf hinweist, dass es Teil der dynamischen Template-Syntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Ereignistyp, auf den reagiert werden soll (`keydown`), und das letzte Argument ist der Ereignishandler — der Code, der als Antwort auf das Auslösen des `keydown`-Ereignisses ausgeführt wird. Wie Sie es im Umgang mit [vanilla JavaScript-Objekten](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) erwarten würden, bezieht sich das Schlüsselwort `this` auf den "Kontext" oder "Scope" der Komponente. Das `this` einer Komponente wird sich von dem `this` einer anderen Komponente unterscheiden.

Wir können definieren, was in `this` verfügbar ist, indem wir eine Komponentenklasse generieren, um Ihre Komponente zu begleiten. Dies ist eine Vanilla-JavaScript-Klasse und hat keine spezielle Bedeutung für Ember, außer dass sie von der `Component`-Superklasse _erbt_.

Um eine Header-Klasse zur Begleitung Ihrer Header-Komponente zu erstellen, tippen Sie das in Ihr Terminal:

```bash
ember generate component-class header
```

Dies erstellt die folgende leere Klassendatei — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei implementieren wir den Code des Ereignishandlers. Aktualisieren Sie den Inhalt auf das folgende:

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

Der `@action`-Dekorator ist der einzige Ember-spezifische Code hier (abgesehen von der Erweiterung der `Component`-Superklasse und den Ember-spezifischen Elementen, die wir mit [JavaScript-Modul-Syntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist Vanilla JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt, dass die Funktion eine "Aktion" ist, was bedeutet, dass es sich um eine Art Funktion handelt, die aus einem Ereignis aufgerufen wird, das im Template aufgetreten ist. `@action` bindet außerdem das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften umhüllt und aufruft, während sie zusätzliche Funktionalität bietet. Zum Beispiel führt der `@tracked`-Dekorator (siehe etwas weiter unten) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich die Werte ändern. [Lesen Sie JavaScript Decorators: What They Are and When to Use Them](https://www.sitepoint.com/javascript-decorators-what-they-are/) für allgemeine Informationen zu Dekoratoren.

Zurück zu unserem Browsertab mit der laufenden App, wir können eingeben, was wir wollen, und wenn wir <kbd>Enter</kbd> drücken, werden wir mit einer Alert-Nachricht begrüßt, die uns genau sagt, was wir eingegeben haben.

![Der anfängliche Platzhalterzustand der Hinzufügungsfunktion, der zeigt, dass der eingegebene Text in den Eingabefeldern zurückgemeldet wird.](todos-hello-there-alert.png)

Mit der Interaktivität des Header-Eingabefeldes aus dem Weg geräumt, brauchen wir einen Ort, um To-Dos zu speichern, damit andere Komponenten darauf zugreifen können.

## Speichern von To-Dos mit einem Service

Ember hat ein eingebautes anwendungsweites **Status**-Management, das wir verwenden können, um die Speicherung unserer To-Dos zu verwalten und es jeder unserer Komponenten zu ermöglichen, auf Daten aus diesem anwendungsweiten Status zuzugreifen. Ember bezeichnet diese Konstrukte als [Services](https://guides.emberjs.com/release/services/), und sie existieren während der gesamten Lebensdauer der Seite (ein Seitenaktualisierung wird sie löschen; das Persistieren der Daten über diesen Zeitraum hinaus liegt außerhalb des Umfangs dieses Tutorials).

Führen Sie diesen Terminalbefehl aus, um einen Service zu generieren, in dem wir unsere To-Do-Liste speichern:

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

Dies erstellt eine `todo-data.js`-Datei im Verzeichnis `todomvc/app/services`, die unseren Service enthält, der zunächst eine Importanweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zuerst wollen wir definieren, _was ein To-Do ist_. Wir wissen, dass wir sowohl den Text eines To-Dos als auch ob es abgeschlossen ist, verfolgen möchten.

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

Diese Klasse repräsentiert ein To-Do — sie enthält eine `@tracked text`-Eigenschaft mit dem Text des To-Dos und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das To-Do abgeschlossen ist oder nicht. Wenn ein `Todo`-Objekt erstellt wird, hat es einen anfänglichen `text`-Wert, der gleich dem Text ist, der ihm bei der Erstellung gegeben wurde (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser bindet sich in das Reaktivitätssystem ein und ermöglicht es Ember, das, was Sie in Ihrer App sehen, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Mehr Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Nun ist es an der Zeit, den Body des Service hinzuzufügen.

Fügen Sie zuerst eine weitere `import`-Anweisung unter der vorherigen hinzu, um Aktionen im Service verfügbar zu machen:

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

Hier wird die `todos`-Eigenschaft im Service unsere Liste von To-Dos in einem Array aufrechterhalten, und wir werden sie mit `@tracked` markieren, denn wenn sich der Wert von `todos` ändert, möchten wir, dass die Benutzeroberfläche ebenfalls aktualisiert wird.

Und wie zuvor wird die `add()`-Funktion, die aus dem Template aufgerufen wird, mit dem `@action`-Dekorator annotiert, um sie an die Klasseninstanz zu binden. Wir verwenden den [spread-Operator auf unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem zur Aktualisierung der Benutzeroberfläche auslöst.

## Verwendung des Services von unserer Header-Komponente aus

Nun, da wir eine Möglichkeit definiert haben, To-Dos hinzuzufügen, können wir mit dieser Service-Instanz von der `header.js` Eingabekomponente aus interagieren, um tatsächlich mit dem Hinzufügen zu beginnen.

Zuerst muss der Service über den `@inject`-Dekorator in das Template eingebunden werden, den wir aus Gründen der semantischen Klarheit in `@service` umbenennen. Dazu fügen Sie die folgende `import`-Zeile zu `header.js` hinzu, direkt unter den zwei bestehenden `import`-Zeilen:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import können wir jetzt den `todo-data`-Service in der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen, indem wir den `@service`-Dekorator verwenden. Fügen Sie die folgende Zeile direkt unter der öffnenden `export…`-Zeile hinzu:

```js
@service('todo-data') todos;
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch das folgende:

```js
this.todos.add(text);
```

Wenn wir dies in der To-Do-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), wird es so aussehen, als ob nichts passiert, nachdem Sie die <kbd>Enter</kbd>-Taste gedrückt haben (obwohl die Tatsache, dass die App ohne irgendwelche Fehler erstellt wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser To-Do hinzufügt wurde:

![Die App, die im Ember Inspector angezeigt wird, um zu beweisen, dass hinzugefügte To-Dos vom Service gespeichert werden, auch wenn sie in der Benutzeroberfläche noch nicht angezeigt werden.](todos-in-ember-inspector.gif)

## Anzeigen unserer To-Dos

Jetzt, da wir wissen, dass wir To-Dos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets"-To-Dos mit den tatsächlich erstellten To-Dos auszutauschen. In der `TodoList`-Komponente möchten wir die To-Dos aus dem Service holen und eine `Todo`-Komponente für jedes verfügbare To-Do rendern.

Um die To-Dos aus dem Service zu holen, benötigt unsere `TodoList`-Komponente zuerst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Strg</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentendatei `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code, der den `todo-data`-Service über die `todos`-Eigenschaft innerhalb unserer Template-Klasse verfügbar macht. Dies macht ihn zugänglich über `this.todos` sowohl innerhalb der Klasse als auch im Template:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Service `todos` genannt wird, aber die Liste der To-Dos auch `todos` genannt wird, so dass wir derzeit auf die Daten mit `this.todos.todos` zugreifen müssten. Das ist nicht intuitiv, also fügen wir einen [getter](/de/docs/Web/JavaScript/Reference/Functions/get) zum `todos`-Service hinzu, den wir `all` nennen, und der stellt alle To-Dos dar.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen die folgende Zeile unter der Zeile `@tracked todos = [];` hinzu:

```js
get all() {
  return this.todos;
}
```

Jetzt können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um dies in die Tat umzusetzen, gehen Sie zu Ihrer `todo-list.hbs`-Komponenten und ersetzen die statischen Methodenaufrufe:

```hbs
<Todo />
<Todo />
```

Durch einen dynamischen `#each`-Block (der im Grunde syntaktischer Zucker über JavaScript's [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ist), der eine `<Todo />`-Komponente für jedes verfügbare To-Do in der vom Service zurückgegebenen Liste `all()` erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Möglichkeit, dies zu betrachten:

- `this` — der Render-Kontext / die Komponentinstanz.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz zum `todo-data`-Service, die es uns ermöglicht, direkt mit der Service-Instanz zu interagieren.
- `all` — ein Getter auf dem `todo-data`-Service, der alle To-Dos zurückgibt.

Versuchen Sie, den Server erneut zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Nun ja, so halb. Jedes Mal, wenn Sie ein neues To-Do-Item eingeben, erscheint ein neues Listenelement unter dem Texteingabefeld, aber leider steht dort immer "Buy Movie Tickets".

Das liegt daran, dass die Textbeschriftung in jedem Listenelement auf diesen Text hartcodiert ist, wie in `todo.hbs` zu sehen ist:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — das das To-Do darstellt, das wir an diese Komponente übergeben haben, als es in `todo-list.hbs` aufgerufen wurde, in der Zeile `<Todo @todo=\{{todo}} />`:

```hbs
<label>\{{@todo.text}}</label>
```

OK, versuchen Sie es noch einmal. Sie sollten feststellen, dass nun der Text, der in das `<input>` eingegeben wurde, korrekt in der Benutzeroberfläche angezeigt wird:

![Die App wird in ihrem Endzustand dieses Artikels angezeigt, mit korrekt angezeigten To-Do-Items, die in der Benutzeroberfläche wiedergegeben werden.](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

OK, das ist für jetzt ein großartiger Fortschritt. Wir können jetzt To-Do-Items zu unserer App hinzufügen und der Datenstatus wird mit unserem Service nachverfolgt. Als nächstes werden wir uns der Funktionalität unseres Footers zuwenden, einschließlich des To-Do-Zählers, und uns die bedingte Darstellung ansehen, einschließlich der korrekten Stilierung von To-Dos, wenn sie abgehakt wurden. Wir werden auch unseren Button "Clear completed" verdrahten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization","Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer", "Learn_web_development/Core/Frameworks_libraries")}}
