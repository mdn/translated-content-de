---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingte Darstellung"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den Todo-Zähler so einstellen, dass er die korrekte Anzahl der noch zu erledigenden Todos anzeigt, und das Styling für erledigte Todos korrekt anwenden (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Erledigte löschen"-Button anschließen. Dabei werden wir lernen, wie man bedingtes Rendering in unseren Vorlagen verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die Nutzung des
          <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/der Kommandozeile</a>
          haben.
        </p>
        <p>
          Ein tiefergehendes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, etc.) ist äußerst vorteilhaft, da Ember stark davon Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unser Lernen über Komponentenklassen fortzusetzen, mit bedingtem Rendering zu beginnen und einige unserer Footer-Funktionen anzuschließen.
      </td>
    </tr>
  </tbody>
</table>

## Verbindung des Verhaltens im Footer

Um den Footer funktionsfähig zu machen, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Einen Zähler für ausstehende Todos.
- Filter für alle, aktive und erledigte Todos.
- Einen Button, um die erledigten Todos zu löschen.

1. Da wir von der Footer-Komponente aus Zugriff auf unseren Service benötigen, müssen wir eine Klasse für den Footer erstellen. Geben Sie dazu den folgenden Terminalbefehl ein:

   ```bash
   ember generate component-class footer
   ```

2. Suchen Sie als nächstes die neu erstellte Datei `todomvc/app/components/footer.js` und aktualisieren Sie sie wie folgt:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Jetzt müssen wir zurück zu unserer Datei `todo-data.js` gehen und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unerledigten Todos zurückzugeben (nützlich, um zu zeigen, wie viele noch übrig sind) und die erledigten Todos aus der Liste zu löschen (was die "Erledigte löschen"-Funktion benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unter dem bestehenden `all()` Getter hinzu, um zu definieren, was die unerledigten Todos tatsächlich sind:

   ```js
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Mit der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist. Da `isCompleted` in unserem `Todo`-Objekt als `@tracked` markiert ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als nächstes die folgende Aktion unterhalb der bestehenden `add(text)` Aktion hinzu:

   ```js
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Dies ist ziemlich praktisch, um die Todos zu löschen — wir müssen nur das `todos` Array mit der Liste der unerledigten Todos gleichsetzen.

5. Schließlich müssen wir diese neue Funktionalität in unserer `footer.hbs` Vorlage nutzen. Gehen Sie nun zu dieser Datei.
6. Ersetzen Sie zunächst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Mit dieser Zeile, die die unvollständige Anzahl mit der Länge des `incomplete` Arrays füllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie als Nächstes dies:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Mit diesem:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

So wird, wenn der Button geklickt wird, die `clearCompleted()` Aktion ausgeführt, die wir zuvor hinzugefügt haben.
Wenn Sie jetzt jedoch versuchen, den "Erledigte löschen"-Button zu klicken, wird es nichts bewirken, da es derzeit keine Möglichkeit gibt, ein Todo zu "erledigen". Wir müssen die `todo.hbs` Vorlage mit dem Service verbinden, damit das entsprechende Kontrollkästchen den Status jedes Todos ändert. Das machen wir als Nächstes.

## Das Todo/Todos-Plural-Problem

Das Obige ist gut, aber wir haben ein weiteres kleines Problem zu bewältigen. Der "Todos übrig" Indikator sagt immer "x todos übrig", selbst wenn nur ein Todo übrig ist, was schlechte Grammatik ist!

Um dies zu beheben, müssen wir diesen Teil der Vorlage aktualisieren, um bedingtes Rendering einzubeziehen. In Ember kann man Teile einer Vorlage bedingt rendern, indem man [bedingte Inhalte](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwendet; ein einfaches Blockbeispiel sieht etwa so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen wir also, diesen Teil von `footer.hbs` zu ersetzen:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong> todos left
```

mit dem Folgenden:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.incomplete.length === 1}} todo
\{{else}} todos
\{{/if}} left
```

Dies wird jedoch zu einem Fehler führen — in Ember können diese einfachen if-Anweisungen derzeit nur einen Wahrheits- oder Falschheitswert testen, nicht ein komplexeres Ausdruck wie ein Vergleich. Um dies zu beheben, müssen wir `todo-data.js` einen Getter hinzufügen, der das Ergebnis von `this.incomplete.length === 1` zurückgibt, und diesen dann in unserer Vorlage aufrufen.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` direkt unterhalb der bestehenden Getter hinzu. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, weil wir dies innerhalb des Services tun, wo der `incomplete()` Getter direkt verfügbar ist (in der Vorlage wurde der Inhalt des Services als `todos` über die Zeile `@service('todo-data') todos;` in der Footer-Klasse verfügbar gemacht, daher dort `this.todos.incomplete.length`).

```js
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen bearbeiteten Abschnitt der Vorlage zu Folgendem:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie jetzt, und Sie werden sehen, dass die richtige Pluralisierung verwendet wird, wenn nur ein Todo-Element vorhanden ist!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Todos abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zuzugreifen.

### Erstellen einer Todo-Klasse

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt so, dass die Todo-Komponente Zugriff auf den Service hat:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie anschließend erneut zu unserer `todo-data.js` Service-Datei und fügen Sie die folgende Aktion direkt unter die vorherigen hinzu, die es uns ermöglichen wird, einen Abschlusszustand für jedes Todo umzuschalten:

   ```js
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Aktualisieren der Vorlage, um den abgeschlossenen Zustand anzuzeigen

Schließlich werden wir die `todo.hbs` Vorlage bearbeiten, so dass der Wert des Kontrollkästchens jetzt an die `isCompleted` Eigenschaft des Todos gebunden ist und dass bei Änderung die `toggleCompletion()` Methode des Todo-Services aufgerufen wird.

1. Suchen Sie in `todo.hbs` die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier einige bedingte Inhalte verwenden, um den Klassenwert gegebenenfalls hinzuzufügen:

   ```hbs-nolint
   <li class=\{{ if @todo.isCompleted 'completed' }}>
   ```

2. Finden Sie als nächstes die folgende Zeile:

   ```hbs-nolint
   <input
     aria-label="Toggle the completion of this todo"
     class="toggle"
     type="checkbox"
   >
   ```

   Und ersetzen Sie sie durch diese:

   ```hbs
   <input
     class="toggle"
     type="checkbox"
     aria-label="Toggle the completion of this todo"
     checked=\{{ @todo.isCompleted }}
     \{{ on 'change' (fn this.todos.toggleCompletion @todo) }}
   >
   ```

   > [!NOTE]
   > Das obige Snippet verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [partielle Anwendung](https://en.wikipedia.org/wiki/Partial_application), was ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, jedoch niemals den Aufrufkontext ändert; dies ist äquivalent zur Verwendung von `bind` mit einem `null` Ersten Argument.

Versuchen Sie, den Entwicklungsserver neu zu starten und erneut zu `localhost:4200` zu gehen, und Sie werden nun sehen, dass wir einen voll funktionsfähigen "todos übrig"-Zähler und Löschbutton haben:

![todos being marked as complete, and cleared](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach auf der Komponente machen, da die Funktion vollständig abgeschlossen ist und nichts vom Service benötigt, dann ist diese Frage absolut berechtigt! Da wir jedoch _letztendlich_ alle Änderungen an der Todos-Liste in [local storage](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren wollen (siehe die [Endversion der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, dass alle persistenten statusverändernden Operationen am gleichen Ort sind.

## Zusammenfassung

Das reicht für jetzt. Zu diesem Zeitpunkt können wir nicht nur Todos als erledigt markieren, sondern sie auch löschen. Jetzt ist das Einzige, was noch im Footer angeschlossen werden muss, die drei Filterlinks: "Alle", "Aktive" und "Erledigte". Das machen wir im nächsten Artikel mit Routing.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
