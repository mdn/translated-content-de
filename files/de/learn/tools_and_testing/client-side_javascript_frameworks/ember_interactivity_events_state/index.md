---
title: "Ember-Interaktivität: Events, Klassen und Status"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt werden wir beginnen, unserer App etwas Interaktivität hinzuzufügen, indem wir die Möglichkeit bereitstellen, neue To-Do-Elemente hinzuzufügen und anzuzeigen. Auf dem Weg dorthin werden wir uns ansehen, wie man Events in Ember verwendet, Komponentenklassen erstellt, um JavaScript-Code zur Steuerung interaktiver Funktionen zu enthalten, und wie man einen Dienst einrichtet, um den Datenstatus unserer App zu verfolgen.

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
            >Terminal/Kommandozeile</a
          > haben.
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
        Erlernen, wie man Komponentenklassen erstellt und Events verwendet, um
        die Interaktivität zu steuern und den App-Status mit einem Dienst zu
        verfolgen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Interaktivität

Nun haben wir eine refaktorierte, komponentenbasierte Version unserer To-Do-App. Gehen wir durch, wie wir die nötige Interaktivität hinzufügen können, um die App funktional zu machen.

Zu Beginn sollte man sich überlegen, welche Ziele und Verantwortlichkeiten jede Komponente hat. In den folgenden Abschnitten werden wir dies für jede Komponente tun und Ihnen anschließend zeigen, wie die Funktionalität implementiert werden kann.

## Erstellen von To-Dos

Für unseren Kartenkopf / To-Do-Eingabe möchten wir in der Lage sein, unsere eingegebene To-Do-Aufgabe zu senden, wenn wir die <kbd>Eingabetaste</kbd> drücken, und dass sie in der To-Do-Liste erscheint.

Wir möchten den Text erfassen können, der in das Eingabefeld eingegeben wurde. Das tun wir, damit unser JavaScript-Code weiß, was wir eingegeben haben, und wir unser To-Do speichern und diesen Text an die To-Do-Listen-Komponente weitergeben können, um ihn anzuzeigen.

Wir können das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event über den [on-Modifikator](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on) erfassen, der nur syntaktischer Zucker von Ember um [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) ist (siehe [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events), falls nötig).

Fügen Sie die folgende neue Zeile in Ihrer `header.hbs`-Datei hinzu:

```hbs
<input
  class='new-todo'
  aria-label='What needs to be done?'
  placeholder='What needs to be done?'
  autofocus
  \{{on 'keydown' this.onKeyDown}}
>
```

Dieses neue Attribut steht in doppelten geschweiften Klammern, was Ihnen signalisiert, dass es Teil der dynamischen Template-Syntax von Ember ist. Das erste Argument, das an `on` übergeben wird, ist der Typ des Events, auf das reagiert werden soll (`keydown`), und das letzte Argument ist der Event-Handler — der Code, der als Reaktion auf das `keydown`-Event ausgeführt wird. Wie Sie es vom Umgang mit [Vanille-JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) erwarten können, bezieht sich das Schlüsselwort `this` auf den "Kontext" oder "Gültigkeitsbereich" der Komponente. Das `this` einer Komponente wird sich von dem `this` einer anderen Komponente unterscheiden.

Wir können definieren, was in `this` verfügbar ist, indem wir eine Komponentenklasse generieren, die zu Ihrer Komponente gehört. Dies ist eine Vanille-JavaScript-Klasse und hat für Ember keine besondere Bedeutung, abgesehen vom _Erweitern_ der `Component`-Oberklasse.

Um eine Header-Klasse zu Ihrer Header-Komponente hinzuzufügen, geben Sie dies in Ihr Terminal ein:

```bash
ember generate component-class header
```

Dies erstellt die folgende leere Klassendatei — `todomvc/app/components/header.js`:

```js
import Component from "@glimmer/component";

export default class HeaderComponent extends Component {}
```

In dieser Datei werden wir den Event-Handler-Code implementieren. Aktualisieren Sie den Inhalt auf Folgendes:

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

Der `@action`-Dekorator ist der einzige Ember-spezifische Code hier (abgesehen vom Erweitern der `Component`-Oberklasse und den Ember-spezifischen Elementen, die wir mit der [JavaScript-Modulsyntax](/de/docs/Web/JavaScript/Guide/Modules) importieren) — der Rest der Datei ist Vanille-JavaScript und würde in jeder Anwendung funktionieren. Der `@action`-Dekorator erklärt, dass die Funktion eine "Aktion" ist, was bedeutet, dass sie von einem Event, das im Template aufgetreten ist, aufgerufen wird. `@action` bindet auch das `this` der Funktion an die Klasseninstanz.

> [!NOTE]
> Ein Dekorator ist im Grunde eine Wrapper-Funktion, die andere Funktionen oder Eigenschaften einwickelt und aufruft und auf dem Weg zusätzliche Funktionen bereitstellt. Zum Beispiel führt der `@tracked`-Dekorator (etwas später darauf eingehend) den Code aus, auf den er angewendet wird, verfolgt ihn aber zusätzlich und aktualisiert die App automatisch, wenn sich Werte ändern. Lesen Sie [JavaScript-Dekoratoren: Was sie sind und wann sie verwendet werden sollten](https://www.sitepoint.com/javascript-decorators-what-they-are/) für allgemeine Informationen zu Dekoratoren.

Zurück in unserem Browser-Tab, in dem die App läuft, können wir eingeben, was wir möchten, und wenn wir <kbd>Eingabetaste</kbd> drücken, wird uns eine Nachricht angezeigt, die uns genau sagt, was wir eingegeben haben.

![Der anfängliche Platzhalter-Zustand der Hinzufügungsfunktion, die den in die Eingabeelemente eingegebenen Text zurückmeldet.](todos-hello-there-alert.png)

Mit der Interaktivität der Header-Eingabe aus dem Weg benötigen wir einen Speicherort für To-Dos, damit andere Komponenten darauf zugreifen können.

## Speichern von To-Dos mit einem Dienst

Ember hat eine integrierte Anwendungsebene zur **Zustandsverwaltung**, die wir verwenden können, um die Speicherung unserer To-Dos zu verwalten und es jeder unserer Komponenten zu ermöglichen, auf Daten aus diesem anwendungsweiten Zustand zuzugreifen. Ember nennt diese Konstrukte [Services](https://guides.emberjs.com/release/services/), und sie bleiben für die gesamte Lebensdauer der Seite bestehen (ein Seiten-Refresh wird sie löschen; das Persistieren der Daten für längere Zeit ist über den Umfang dieses Tutorials hinaus).

Führen Sie diesen Terminalbefehl aus, um einen Dienst zu generieren, in dem wir unsere To-Do-Listen-Daten speichern:

```bash
ember generate service todo-data
```

Dies sollte Ihnen folgende Terminal-Ausgabe geben:

```plain
installing service
  create app/services/todo-data.js
installing service-test
  create tests/unit/services/todo-data-test.js
```

Dies erstellt eine `todo-data.js`-Datei im Verzeichnis `todomvc/app/services`, um unseren Dienst aufzunehmen, die zunächst eine Import-Anweisung und eine leere Klasse enthält:

```js
import Service from "@ember/service";

export default class TodoDataService extends Service {}
```

Zunächst möchten wir definieren, _was ein To-Do ist_. Wir wissen, dass wir sowohl den Text eines To-Dos als auch dessen Erledigungsstatus nachverfolgen möchten.

Fügen Sie die folgende `import`-Anweisung unter der bestehenden hinzu:

```js
import { tracked } from "@glimmer/tracking";
```

Fügen Sie nun die folgende Klasse unter der vorherigen hinzugefügten Zeile hinzu:

```js
class Todo {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
```

Diese Klasse repräsentiert ein To-Do — sie enthält eine `@tracked text`-Eigenschaft, die den Text des To-Dos enthält, und eine `@tracked isCompleted`-Eigenschaft, die angibt, ob das To-Do abgeschlossen ist oder nicht. Wenn eine `Todo`-Objekt instanziiert wird, hat es einen anfänglichen `text`-Wert, der dem Text entspricht, der ihm bei der Erstellung gegeben wurde (siehe unten), und einen `isCompleted`-Wert von `false`. Der einzige Ember-spezifische Teil dieser Klasse ist der `@tracked`-Dekorator — dieser verbindet sich mit dem Reaktivitätssystem und ermöglicht es Ember, das, was Sie in Ihrer App sehen, automatisch zu aktualisieren, wenn sich die verfolgten Eigenschaften ändern. [Weitere Informationen zu tracked finden Sie hier](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Jetzt ist es Zeit, den Rumpf des Dienstes hinzuzufügen.

Fügen Sie zuerst eine weitere `import`-Anweisung unter der vorherigen hinzu, um Aktionen innerhalb des Dienstes verfügbar zu machen:

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

Hier wird die `todos`-Eigenschaft im Dienst unsere Liste von To-Dos innerhalb eines Arrays verwalten, und wir werden sie mit `@tracked` markieren, da wir möchten, dass die Benutzeroberfläche ebenfalls aktualisiert wird, wenn sich der Wert von `todos` ändert.

Und wie zuvor wird die `add()`-Funktion, die aus dem Template aufgerufen wird, mit dem `@action`-Dekorator versehen, um sie an die Klasseninstanz zu binden. Wir [erweitern unser `todos`-Array](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um `newTodo` hinzuzufügen, was ein neues Array erstellt und das Reaktivitätssystem auslöst, um die Benutzeroberfläche zu aktualisieren.

## Verwendung des Dienstes aus unserer Header-Komponente

Da wir nun eine Möglichkeit definiert haben, To-Dos hinzuzufügen, können wir von der `header.js`-Eingabekomponente aus mit diesem Dienst interagieren, um sie tatsächlich hinzuzufügen.

Zunächst muss der Dienst über den `@inject`-Dekorator in das Template injiziert werden, den wir zur semantischen Klarheit in `@service` umbenennen. Um dies zu tun, fügen Sie folgende `import`-Zeile in `header.js` unter die beiden vorhandenen `import`-Zeilen hinzu:

```js
import { inject as service } from "@ember/service";
```

Mit diesem Import können wir nun den `todo-data`-Dienst innerhalb der `HeaderComponent`-Klasse über das `todos`-Objekt verfügbar machen, wobei wir den `@service`-Dekorator verwenden. Fügen Sie die folgende Zeile direkt unter der öffnenden `export…`-Zeile hinzu:

```js
@service('todo-data') todos;
```

Nun kann die Platzhalterzeile `alert(text);` durch einen Aufruf unserer neuen `add()`-Funktion ersetzt werden. Ersetzen Sie sie durch Folgendes:

```js
this.todos.add(text);
```

Wenn wir dies in der To-Do-App in unserem Browser ausprobieren (`npm start`, gehen Sie zu `localhost:4200`), scheint es, als würde nichts passieren, nachdem wir die <kbd>Eingabetaste</kbd> gedrückt haben (obwohl die Tatsache, dass die App ohne Fehler gebaut wird, ein gutes Zeichen ist). Mit dem [Ember Inspector](https://guides.emberjs.com/release/ember-inspector/installation/) können wir jedoch sehen, dass unser To-Do hinzugefügt wurde:

![Die App wird im Ember Inspector gezeigt, um zu beweisen, dass hinzugefügte To-Dos vom Dienst gespeichert werden, auch wenn sie noch nicht in der Benutzeroberfläche angezeigt werden](todos-in-ember-inspector.gif)

## Anzeigen unserer To-Dos

Nun, da wir wissen, dass wir To-Dos erstellen können, muss es eine Möglichkeit geben, unsere statischen "Buy Movie Tickets"-To-Dos mit den To-Dos, die wir tatsächlich erstellen, auszutauschen. In der `TodoList`-Komponente möchten wir die To-Dos aus dem Dienst abrufen und für jedes To-Do eine `Todo`-Komponente rendern.

Um die To-Dos vom Dienst abzurufen, benötigt unsere `TodoList`-Komponente zunächst eine unterstützende Komponentenklasse, um diese Funktionalität zu enthalten. Drücken Sie <kbd>Strg</kbd> + <kbd>C</kbd>, um den Entwicklungsserver zu stoppen, und geben Sie den folgenden Terminalbefehl ein:

```bash
ember generate component-class todo-list
```

Dies generiert die neue Komponentenklasse `todomvc/app/components/todo-list.js`.

Füllen Sie diese Datei mit dem folgenden Code, der den `todo-data`-Dienst über die `todos`-Eigenschaft für unser Template freilegt. Dadurch wird es sowohl innerhalb der Klasse als auch des Templates über `this.todos` zugänglich:

```js
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TodoListComponent extends Component {
  @service("todo-data") todos;
}
```

Ein Problem hier ist, dass unser Dienst `todos` genannt wird, aber die Liste der To-Dos ebenfalls `todos` heißt, sodass wir derzeit auf die Daten mit `this.todos.todos` zugreifen würden. Dies ist nicht intuitiv, also fügen wir einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) zum `todos`-Dienst namens `all` hinzu, der alle To-Dos darstellt.

Um dies zu tun, gehen Sie zurück zu Ihrer `todo-data.js`-Datei und fügen Sie folgendes unter der `@tracked todos = [];`-Zeile hinzu:

```js
get all() {
  return this.todos;
}
```

Jetzt können wir auf die Daten mit `this.todos.all` zugreifen, was viel intuitiver ist. Um dies in Aktion zu sehen, gehen Sie zu Ihrer `todo-list.hbs`-Komponente und ersetzen Sie die statischen Komponentenaufrufe:

```hbs
<Todo />
<Todo />
```

Mit einem dynamischen `#each`-Block (der im Grunde syntaktischer Zucker über JavaScript's [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ist), der eine `<Todo />`-Komponente für jedes verfügbare To-Do in der vom Dienst zurückgegebenen Liste von To-Dos erstellt:

```hbs-nolint
\{{#each this.todos.all as |todo|}}
<Todo @todo=\{{todo}} />
\{{/each}}
```

Eine andere Möglichkeit, dies zu betrachten:

- `this` — der Darstellungskontext / die Komponenteninstanz.
- `todos` — eine Eigenschaft auf `this`, die wir in der `todo-list.js`-Komponente mit `@service('todo-data') todos;` definiert haben. Dies ist eine Referenz auf den `todo-data`-Dienst und ermöglicht es uns, direkt mit der Dienstinstanz zu interagieren.
- `all` — ein Getter im `todo-data`-Dienst, der alle To-Dos zurückgibt.

Versuchen Sie, den Server erneut zu starten und zu unserer App zu navigieren, und Sie werden feststellen, dass es funktioniert! Nun ja, irgendwie. Immer wenn Sie ein neues To-Do-Element eingeben, erscheint ein neues Listenelement unter dem Texteingabefeld, aber leider steht dort immer "Buy Movie Tickets".

Dies liegt daran, dass das Textetikett in jedem Listenelement auf diesen Text fest codiert ist, wie in `todo.hbs` zu sehen:

```hbs
<label>Buy Movie Tickets</label>
```

Aktualisieren Sie diese Zeile, um das Argument `@todo` zu verwenden — welches das To-Do darstellt, das wir beim Aufruf dieser Komponente in `todo-list.hbs` übergeben haben, in der Zeile `<Todo @todo=\{{todo}} />`:

```hbs
<label>\{{@todo.text}}</label>
```

OK, probieren Sie es erneut. Sie sollten feststellen, dass der im `<input>` eingegebene Text jetzt korrekt in der Benutzeroberfläche wiedergegeben wird:

![Die App wird in ihrem endgültigen Zustand dieses Artikels gezeigt, wobei eingegebene To-Do-Elemente in der Benutzeroberfläche angezeigt werden](todos-being-appended-with-correct-text.gif)

## Zusammenfassung

Ok, das ist für den Moment ein großer Fortschritt. Wir können nun To-Do-Elemente zu unserer App hinzufügen und der Datenstatus wird mit unserem Dienst verfolgt. Als nächstes werden wir uns mit der Funktionalität unserer Fußzeile befassen, einschließlich des To-Do-Zählers, und uns die bedingte Darstellung ansehen, einschließlich des korrekten Stils von To-Dos, wenn sie markiert wurden. Wir werden auch unsere Schaltfläche "Clear completed" verkabeln.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
