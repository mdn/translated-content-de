---
title: "Ember Interaktivität: Footer-Funktionalität, bedingtes Rendering"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den Todo-Counter aktualisieren, um die korrekte Anzahl der noch zu erledigenden Todos anzuzeigen, und die erledigten Todos (d.h. bei denen das Kontrollkästchen aktiviert wurde) korrekt zu stylen. Wir werden auch unseren "Erledigte löschen"-Button anschließen. Auf dem Weg dorthin lernen wir, wie man bedingtes Rendering in unseren Vorlagen verwendet.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember intensiv davon
          Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Weiteres Lernen über Komponentenklassen, Einstieg in das bedingte
        Rendering und Anschluss einiger Footer-Funktionalitäten.
      </td>
    </tr>
  </tbody>
</table>

## Verbindung der Funktionalität im Footer

Um den Footer zu funktionalisieren, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Einen ausstehenden Todo-Zähler.
- Filter für alle, aktive und erledigte Todos.
- Einen Button zum Löschen der erledigten Todos.

1. Da wir vom Footer-Komponenten aus auf unseren Dienst zugreifen müssen, müssen wir eine Klasse für den Footer generieren. Geben Sie dazu den folgenden Terminalbefehl ein:

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

3. Jetzt müssen wir zu unserer Datei `todo-data.js` zurückkehren und einige Funktionalitäten hinzufügen, die es uns ermöglichen, die Anzahl der unvollständigen Todos zurückzugeben (nützlich, um anzuzeigen, wie viele noch übrig sind), und die erledigten Todos aus der Liste zu löschen (was die "Erledigte löschen"-Funktionalität benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unterhalb des bestehenden `all()` Getters hinzu, um zu definieren, was die unvollständigen Todos tatsächlich sind:

   ```js
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Mit der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als nächstes die folgende Aktion unterhalb der bestehenden `add(text)` Aktion hinzu:

   ```js
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Das ist ziemlich praktisch zum Löschen der Todos — wir müssen nur das `todos` Array gleich der Liste der unvollständigen Todos setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserer `footer.hbs` Vorlage nutzen. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zuerst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Durch diese, die die unbelegte Anzahl mit der Länge des `incomplete` Arrays füllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie als nächstes dies:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Durch dies:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

Jetzt wird, wenn der Button geklickt wird, die zuvor hinzugefügte `clearCompleted()` Aktion ausgeführt.
Wenn Sie jedoch jetzt versuchen, den "Erledigte löschen" Button zu klicken, wird er scheinbar nichts tun, weil es derzeit keine Möglichkeit gibt, ein Todo zu "erledigen". Wir müssen die `todo.hbs` Vorlage mit dem Dienst verbinden, sodass das entsprechende Kontrollkästchen den Status jedes Todos ändert. Das werden wir als nächstes tun.

## Das Problem mit Todo/Todos im Plural

Das oben Genannte ist in Ordnung, aber wir haben noch ein kleines Problem zu bewältigen. Der Hinweis "todos left" sagt immer "x todos left", auch wenn nur noch ein Todo übrig ist, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil der Vorlage aktualisieren, um bedingtes Rendering einzubeziehen. In Ember können Sie Teile der Vorlage bedingt rendern, indem Sie [bedingte Inhalte](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwenden; ein einfaches Blockbeispiel sieht so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen wir also, diesen Teil von `footer.hbs` zu ersetzen:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong> todos left
```

durch das Folgende:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.incomplete.length === 1}} todo
\{{else}} todos
\{{/if}} left
```

Dies wird uns jedoch einen Fehler geben — in Ember können diese einfachen `if`-Anweisungen derzeit nur auf einen wahrheitsgemäßen/unwahrheitsgemäßen Wert testen, nicht auf einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, um das Ergebnis von `this.incomplete.length === 1` zurückzugeben, und dies dann in unserer Vorlage aufrufen.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` hinzu, direkt unterhalb der bestehenden Getter. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, da wir dies innerhalb des Dienstes tun, wo der `incomplete()` Getter direkt verfügbar ist (in der Vorlage wurden die Inhalte des Dienstes als `todos` über die Zeile `@service('todo-data') todos;` innerhalb der Footer-Klasse verfügbar gemacht, daher dort `this.todos.incomplete.length`).

```js
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zur `footer.hbs` und aktualisieren Sie den vorherigen Abschnitt der Vorlage, den wir bearbeitet haben, auf das Folgende:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie jetzt, und Sie werden sehen, dass die korrekte Pluralisierung verwendet wird, wenn Sie nur ein Todo-Element haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Todos abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Dienst zuzugreifen.

### Eine Todo-Klasse erstellen

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt, um der Todo-Komponente Zugriff auf den Dienst zu geben:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie dann noch einmal zu unserer `todo-data.js` Dienstdatei zurück und fügen Sie die folgende Aktion direkt unterhalb der vorherigen hinzu, die es uns ermöglicht, einen Abschlusszustand für jedes Todo umzuschalten:

   ```js
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Aktualisierung der Vorlage, um den abgeschlossenen Status anzuzeigen

Schließlich werden wir die `todo.hbs` Vorlage so bearbeiten, dass der Wert des Kontrollkästchens jetzt an die `isCompleted` Eigenschaft des Todos gebunden ist und dass bei einer Änderung die `toggleCompletion()` Methode des Todo-Dienstes aufgerufen wird.

1. Finden Sie in `todo.hbs` die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier einige bedingte Inhalte verwenden, um den Klassenwert bei Bedarf hinzuzufügen:

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
   > Das obige Snippet verwendet ein neues, Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [Teilapplikation](https://en.wikipedia.org/wiki/Partial_application), ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), jedoch ändert es niemals den Aufrufkontext; dies ist gleichbedeutend mit der Verwendung von `bind` mit einem `null` ersten Argument.

Versuchen Sie, den Entwicklungsserver neu zu starten und gehen Sie erneut zu `localhost:4200`, und Sie werden jetzt sehen, dass wir einen voll funktionsfähigen "todos left" Zähler und einen Löschen-Button haben:

![todos als erledigt markiert und gelöscht](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach auf der Komponente durchführen, da die Funktion vollständig eigenständig ist und nichts vom Dienst benötigt, dann ist es völlig richtig, diese Frage zu stellen! Da wir jedoch _schließlich_ alle Änderungen an der Todos-Liste im [lokalen Speicher](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren möchten (siehe die [Endversion der Anwendung](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, alle Operationen zur Veränderung des persistenten Zustands an einem Ort zu haben.

## Zusammenfassung

Das reicht für jetzt. An diesem Punkt können wir nicht nur Todos als erledigt markieren, sondern sie auch löschen. Jetzt müssen nur noch die drei Filterlinks im Footer verdrahtet werden: "Alle", "Aktiv" und "Erledigt". Das machen wir im nächsten Artikel, mit Routing.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
