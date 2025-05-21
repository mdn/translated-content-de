---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingtes Rendering"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, die Footer-Funktionalitäten in unserer App anzugehen. Hier werden wir den todo-Zähler aktualisieren, um die korrekte Anzahl an noch zu erledigenden Todos anzuzeigen, und das Styling für erledigte Todos korrekt anwenden (d.h. wenn das Kontrollkästchen markiert wurde). Wir werden auch unseren "Erledigte löschen"-Button anschließen. Dabei lernen wir, wie man bedingtes Rendering in unseren Templates verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind, und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Eingabeaufforderung</a
          > besitzen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst nützlich sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unser Lernen über Komponentenklassen fortsetzen, um bedingtes Rendering zu betrachten und einige der Footer-Funktionalitäten anzuschließen.
      </td>
    </tr>
  </tbody>
</table>

## Verbinden des Verhaltens im Footer

Um den Footer funktionstüchtig zu machen, müssen wir die folgenden drei Funktionsbereiche umsetzen:

- Einen Zähler für ausstehende Todos.
- Filter für alle, aktive und erledigte Todos.
- Einen Button, um die erledigten Todos zu löschen.

1. Da wir auf unseren Service aus der Footer-Komponente zugreifen müssen, müssen wir eine Klasse für den Footer generieren. Geben Sie dazu den folgenden Terminalbefehl ein:

   ```bash
   ember generate component-class footer
   ```

2. Gehen Sie als Nächstes zur neu erstellten Datei `todomvc/app/components/footer.js` und aktualisieren Sie diese auf den folgenden Stand:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Nun müssen wir zu unserer Datei `todo-data.js` zurückkehren und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unerledigten Todos zurückzugeben (nützlich, um zu zeigen, wie viele noch übrig sind), und die erledigten Todos aus der Liste zu löschen (was die "Erledigte löschen"-Funktion benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unter dem vorhandenen `all()`-Getter hinzu, um zu definieren, was die unerledigten Todos tatsächlich sind:

   ```ts
   export default class TodoDataService extends Service {
     // …
     get incomplete() {
       return this.todos.filter((todo) => !todo.isCompleted);
     }
     // …
   }
   ```

   Mit der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Todo-Items, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als Nächstes die folgende Aktion unter der bestehenden `add(text)`-Aktion hinzu:

   ```ts
   export default class TodoDataService extends Service {
     // …
     @action
     clearCompleted() {
       this.todos = this.incomplete;
     }
     // …
   }
   ```

   Das ist ziemlich gut, um die Todos zu löschen — wir müssen nur das `todos`-Array auf die Liste der unerledigten Todos setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserem `footer.hbs`-Template verwenden. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zuerst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Durch diese, die die Anzahl der unerledigten Todos mit der Länge des `incomplete` Arrays füllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie als Nächstes dies:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Durch dies:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

So dass jetzt, wenn der Button geklickt wird, die `clearCompleted()` Aktion, die wir zuvor hinzugefügt haben, ausgeführt wird.
Wenn Sie jedoch jetzt versuchen, den Button "Erledigte löschen" zu klicken, wird scheinbar nichts passieren, weil es derzeit keine Möglichkeit gibt, ein Todo als "erledigt" zu markieren. Wir müssen das `todo.hbs`-Template mit dem Service verbinden, sodass das Markieren des jeweiligen Kontrollkästchens den Zustand jedes Todos ändert. Das werden wir als Nächstes tun.

## Das Todo/Todos Mehrzahlproblem

Das oben Genannte ist in Ordnung, aber wir haben ein weiteres kleines Problem zu lösen. Der "todos left"-Indikator sagt immer "x todos left", auch wenn nur ein Todo übrig ist, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil des Templates aktualisieren, um ein bedingtes Rendering einzubeziehen. In Ember können Sie Teile des Templates bedingt rendern, indem Sie [bedingten Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwenden; ein einfaches Blockbeispiel sieht etwa so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen wir also, diesen Teil von `footer.hbs` zu ersetzen:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong> todos left
```

mit dem folgenden:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.incomplete.length === 1}} todo
\{{else}} todos
\{{/if}} left
```

Das wird uns jedoch einen Fehler geben — in Ember können diese einfachen if-Anweisungen derzeit nur auf einen Wahrheit/Falsch-Wert testen, nicht auf einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, um das Ergebnis von `this.incomplete.length === 1` zurückzugeben, und dann diesen in unserem Template aufrufen.

Fügen Sie den folgenden neuen Getter in `todo-data.js` direkt unter den bestehenden Gettern hinzu. Beachten Sie, dass wir hier `this.incomplete.length` und nicht `this.todos.incomplete.length` verwenden, weil wir das innerhalb des Services tun, wo der `incomplete()` Getter direkt verfügbar ist (im Template wurden die Inhalte des Services als `todos` über die Zeile `@service("todo-data") todos;` innerhalb der Footer-Klasse verfügbar gemacht, daher dort `this.todos.incomplete.length`).

```ts
export default class TodoDataService extends Service {
  // …
  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }
  // …
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorher bearbeiteten Template-Abschnitt zu folgendem:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie jetzt, und Sie werden sehen, dass die korrekte Pluralform verwendet wird, wenn Sie nur ein Todo-Item haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Erledigen von Todos

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zuzugreifen.

### Erstellen einer Todo-Klasse

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie jetzt zu der neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt, damit die Todo-Komponente Zugriff auf den Service hat:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Kehren Sie dann erneut zu unserer `todo-data.js` Service-Datei zurück und fügen Sie die folgende Aktion direkt unter den vorherigen hinzu, um den Abschlussstatus für jedes Todo umzuschalten:

   ```ts
   export default class TodoDataService extends Service {
     // …
     @action
     toggleCompletion(todo) {
       todo.isCompleted = !todo.isCompleted;
     }
     // …
   }
   ```

### Aktualisierung des Templates zur Anzeige des abgeschlossenen Status

Abschließend werden wir das `todo.hbs` Template so bearbeiten, dass der Wert des Kontrollkästchens nun an die `isCompleted` Eigenschaft des Todos gebunden ist und bei Änderung die `toggleCompletion()` Methode auf dem Todo-Service aufgerufen wird.

1. Finden Sie in `todo.hbs` zuerst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier etwas mehr bedingten Inhalt verwenden, um den Klassenwert bei Bedarf hinzuzufügen:

   ```hbs-nolint
   <li class=\{{ if @todo.isCompleted 'completed' }}>
   ```

2. Finden Sie als Nächstes die folgende Zeile:

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
   > Der obige Ausschnitt verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` erlaubt die [Teilanwendung](https://en.wikipedia.org/wiki/Partial_application), die ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, jedoch den Aufrufkontext nie ändert; dies entspricht der Verwendung von `bind` mit einem `null` als ersten Argument.

Versuchen Sie, den Entwicklungsserver neu zu starten und erneut zu `localhost:4200` zu gehen, und Sie werden jetzt sehen, dass wir einen voll funktionsfähigen "todos left"-Zähler und einen Lösch-Button haben:

![todos being marked as complete, and cleared](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach in der Komponente durchführen, da die Funktion vollständig selbstständig ist und nichts vom Service benötigt, dann haben Sie absolut Recht, diese Frage zu stellen! Da wir jedoch _letztendlich_ alle Änderungen an der Todos-Liste in [lokalen Speicher](/de/docs/Web/API/Window/localStorage) persistieren oder synchronisieren möchten (siehe die [endgültige Version der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), ist es sinnvoll, alle persistenten Statusänderungsoperationen an derselben Stelle zu haben.

## Zusammenfassung

Das reicht für jetzt. An diesem Punkt können wir nicht nur Todos als erledigt markieren, sondern sie auch löschen. Das Einzige, was noch fehlt, um den Footer zu verbinden, sind die drei Filterlinks: "Alle", "Aktive" und "Erledigte". Das werden wir in dem nächsten Artikel mit Routing tun.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
