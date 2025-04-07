---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingte Darstellung"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, die Footer-Funktionalität in unserer App anzugehen. Hier werden wir den Todo-Zähler aktualisieren, um die korrekte Anzahl der noch zu erledigenden Todos anzuzeigen, und das Styling für erledigte Todos korrekt anwenden (d.h. wo das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Erledigte löschen"-Button anschließen. Dabei lernen wir, wie man bedingte Darstellung in unseren Vorlagen verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen
          vertraut sind und Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Konsole/Befehlszeile</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, etc.) wird äußerst nützlich sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unser Lernen über Komponentenklassen fortzusetzen, uns mit der bedingten Darstellung zu befassen, und einige unserer Footer-Funktionalitäten anschließen.
      </td>
    </tr>
  </tbody>
</table>

## Verbinden des Verhaltens im Footer

Um den Footer zum Laufen zu bringen, müssen wir die folgenden drei funktionalen Bereiche implementieren:

- Einen Zähler für ausstehende Todos.
- Filter für alle, aktive und erledigte Todos.
- Einen Button, um die erledigten Todos zu löschen.

1. Da wir vom Footer aus Zugriff auf unseren Service benötigen, müssen wir eine Klasse für den Footer generieren. Geben Sie folgenden Konsolenbefehl ein:

   ```bash
   ember generate component-class footer
   ```

2. Gehen Sie nun zum neu erstellten `todomvc/app/components/footer.js`-Datei und aktualisieren Sie diese mit dem folgenden Inhalt:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Jetzt müssen wir zurück zu unserer `todo-data.js` Datei gehen und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unerledigten Todos zurückzugeben (nützlich, um zu zeigen, wie viele noch übrig sind) und die erledigten Todos aus der Liste zu löschen (was die Funktionalität "Erledigte löschen" benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unterhalb des vorhandenen `all()`-Getters hinzu, um zu definieren, was die unerledigten Todos tatsächlich sind:

   ```ts
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Durch die Verwendung der [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und weil `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als Nächstes die folgende Aktion unterhalb der bestehenden `add(text)`-Aktion hinzu:

   ```ts
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Das ist ziemlich praktisch zum Löschen der Todos - wir müssen lediglich das `todos`-Array auf die Liste der unerledigten Todos setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserer `footer.hbs`-Vorlage nutzen. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zunächst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Mit dieser, die die unerledigte Anzahl mit der Länge des `incomplete`-Arrays füllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie als nächstes dies:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Mit diesem:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

Nun, wenn der Button geklickt wird, wird die zuvor hinzugefügte Aktion `clearCompleted()` ausgeführt.
Wenn Sie jetzt versuchen, den "Erledigte löschen"-Button zu klicken, scheint er nichts zu tun, da es momentan keine Möglichkeit gibt, ein Todo zu "erledigen". Wir müssen die `todo.hbs`-Vorlage mit dem Service verbinden, sodass das Ankreuzen des entsprechenden Kontrollkästchens den Status jedes Todos ändert. Das machen wir als Nächstes.

## Das Todo/Todos Mehrzahlproblem

Das Obige ist in Ordnung, aber wir haben ein weiteres kleines Problem zu bewältigen. Der "todos left"-Indikator sagt immer "x todos left", selbst wenn nur ein Todo übrig ist, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil der Vorlage aktualisieren, um eine bedingte Darstellung hinzuzufügen. In Ember können Sie Teile der Vorlage bedingt rendern, indem Sie [bedingten Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwenden; ein einfaches Blockbeispiel sieht ungefähr so aus:

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

Dies wird uns jedoch einen Fehler geben — in Ember können diese einfachen if-Anweisungen derzeit nur auf einen truthy/falsy-Wert testen, nicht auf einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, um das Ergebnis von `this.incomplete.length === 1` zurückzugeben, und diesen dann in unserer Vorlage aufrufen.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` direkt unterhalb der vorhandenen Getter hinzu. Beachten Sie, dass wir hier `this.incomplete.length` und nicht `this.todos.incomplete.length` verwenden müssen, da wir dies im Service innerhalb des Dienstes machen, wo der `incomplete()` Getter direkt verfügbar ist (in der Vorlage wurden die Inhalte des Dienstes als `todos` über die Zeile `@service('todo-data') todos;` innerhalb der Footer-Klasse verfügbar gemacht, daher ist es dort `this.todos.incomplete.length`).

```ts
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen Vorlagenabschnitt, den wir bearbeitet haben, wie folgt:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie nun, und Sie werden sehen, dass die korrekte Pluralbildung verwendet wird, wenn nur ein Todo-Element vorhanden ist!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Todos abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zugreifen zu können.

### Eine Todo-Klasse erstellen

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten `todomvc/app/components/todo.js`-Datei und aktualisieren Sie den Inhalt, damit die Todo-Komponente auf den Service zugreifen kann:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie danach wieder zu unserer `todo-data.js`-Service-Datei und fügen Sie die folgende Aktion direkt unter den vorherigen Aktionen hinzu, womit wir den Abschlussstatus für jedes Todo umschalten können:

   ```ts
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Aktualisieren der Vorlage zur Anzeige des abgeschlossenen Status

Schließlich bearbeiten wir die `todo.hbs`-Vorlage, sodass der Wert des Kontrollkästchens nun an die `isCompleted`-Eigenschaft des Todos gebunden ist und bei Änderung die `toggleCompletion()`-Methode auf dem Todo-Service aufgerufen wird.

1. Finden Sie in `todo.hbs` zunächst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier einige weitere bedingte Inhalte verwenden, um gegebenenfalls die class-Werte hinzuzufügen:

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

   Und ersetzen Sie sie durch dies:

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
   > Der obige Ausschnitt verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [partielle Anwendung](https://en.wikipedia.org/wiki/Partial_application), die ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, aber niemals den Aufruf-Kontext ändert; dies entspricht der Verwendung von `bind` mit einem `null`-Erstargument.

Versuchen Sie, den Entwicklungsserver neu zu starten und erneut zu `localhost:4200` zu gehen, und Sie werden nun sehen, dass wir einen voll funktionsfähigen "todos left"-Zähler und Clear-Button haben:

![Todos werden als abgeschlossen markiert und gelöscht](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach auf der Komponente durchführen, da die Funktion vollständig eigenständig ist und nichts vom Service benötigt, dann ist es völlig richtig, diese Frage zu stellen! Da wir _letztendlich_ alle Änderungen an der Todos-Liste in [local storage](/de/docs/Web/API/Window/localStorage) persistieren oder synchronisieren wollen (siehe die [endgültige Version der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, alle persistenten Zustand-ändernden Operationen an derselben Stelle zu haben.

## Zusammenfassung

Das reicht für jetzt. An diesem Punkt können wir nicht nur Todos als abgeschlossen markieren, sondern sie auch löschen. Jetzt müssen wir nur noch die drei Filterlinks im Footer anschließen: "Alle", "Aktiv" und "Erledigt". Das werden wir im nächsten Artikel mit Hilfe von Routing machen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
