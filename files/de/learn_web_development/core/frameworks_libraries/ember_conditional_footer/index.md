---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingtes Rendering"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, die Funktionalität des Footers in unserer App anzugehen. Hier werden wir den Todo-Zähler so aktualisieren, dass er die korrekte Anzahl der noch zu erledigenden Todos anzeigt und korrektes Styling auf abgeschlossene Todos anwendet (d.h. wenn das Kontrollkästchen angekreuzt wurde). Außerdem verknüpfen wir unseren "Erledigte löschen" Button. Dabei lernen wir, wie man bedingtes Rendering in unseren Templates verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse im Umgang mit
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember sie intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Weiter unser Wissen über Komponentenklassen zu vertiefen, mit dem bedingten Rendern zu beginnen und einige Funktionalitäten unseres Footers zu verknüpfen.
      </td>
    </tr>
  </tbody>
</table>

## Die Funktionalität im Footer verbinden

Um den Footer zum Laufen zu bringen, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Einen Zähler für ausstehende Todos.
- Filter für alle, aktive und abgeschlossene Todos.
- Einen Button, um die abgeschlossenen Todos zu löschen.

1. Da wir vom Footer aus auf unseren Service zugreifen müssen, müssen wir eine Klasse für den Footer generieren. Geben Sie dazu den folgenden Terminal-Befehl ein:

   ```bash
   ember generate component-class footer
   ```

2. Als nächstes suchen Sie die neu erstellte Datei `todomvc/app/components/footer.js` und aktualisieren Sie sie wie folgt:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Nun müssen wir zu unserer Datei `todo-data.js` zurückkehren und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unvollständigen Todos zurückzugeben (nützlich, um anzuzeigen, wie viele noch übrig sind) und die abgeschlossenen Todos aus der Liste zu löschen (was die "Erledigte löschen"-Funktionalität benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unter dem bestehenden `all()`-Getter hinzu, um zu definieren, was die unvollständigen Todos tatsächlich sind:

   ```js
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Durch die Verwendung der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als nächstes die folgende Aktion unter der bestehenden `add(text)`-Aktion hinzu:

   ```js
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Das ist recht praktisch zum Löschen der Todos — wir müssen nur das Array `todos` auf die Liste der unvollständigen Todos setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserem `footer.hbs` Template verwenden. Gehen Sie nun zu dieser Datei.
6. Ersetzen Sie zunächst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Durch diese, die die unvollständige Anzahl mit der Länge des `incomplete`-Arrays füllt:

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

So wird jetzt beim Klicken auf den Button die zuvor hinzugefügte `clearCompleted()`-Aktion ausgeführt. Wenn Sie jedoch jetzt versuchen, den "Erledigte Löschen"-Button zu klicken, wird nichts passieren, da es derzeit keine Möglichkeit gibt, ein Todo abzuschließen. Wir müssen das Template `todo.hbs` mit dem Service verbinden, damit das Ankreuzen des entsprechenden Kontrollkästchens den Zustand jedes Todos ändert. Das machen wir als Nächstes.

## Das Problem der Singular-/Plural-Todos

Das oben Genannte ist in Ordnung, aber wir haben ein anderes kleines Problem zu bewältigen. Der "todos übrig"-Indikator sagt immer "x todos übrig", selbst wenn nur ein Todo übrig ist, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil des Templates aktualisieren, um bedingtes Rendering einzubeziehen. In Ember kann man mit [bedingtem Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) Teile des Templates bedingt rendern; ein einfaches Block-Beispiel sieht so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Lassen Sie uns versuchen, diesen Teil von `footer.hbs` zu ersetzen:

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

Dies wird jedoch einen Fehler verursachen — in Ember können diese einfachen If-Anweisungen derzeit nur auf einen wahr/falsch-Wert testen, nicht auf einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, der das Ergebnis von `this.incomplete.length === 1` zurückgibt, und dann in unserem Template darauf zugreifen.

Fügen Sie den folgenden neuen Getter in `todo-data.js` hinzu, direkt unter den vorhandenen Gettern. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, da wir dies im Inneren des Services tun, wo der `incomplete()`-Getter direkt verfügbar ist (im Template wurde der Inhalt des Services als `todos` über die Zeile `@service('todo-data') todos;` in der Footer-Klasse verfügbar gemacht, daher dort `this.todos.incomplete.length`).

```js
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen Template-Abschnitt, den wir bearbeitet haben, auf das Folgende:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern Sie nun und testen Sie, und Sie werden sehen, dass die korrekte Pluralisierung verwendet wird, wenn nur ein Todo-Element vorhanden ist!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Todos abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zuzugreifen.

### Eine Todo-Klasse erstellen

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt wie folgt, um der Todo-Komponente den Zugriff auf den Service zu ermöglichen:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie erneut zurück zu unserer Datei `todo-data.js` und fügen Sie die folgende Aktion direkt unter den vorherigen hinzu, die uns erlaubt, für jedes Todo einen Zustandswechsel zu toggeln:

   ```js
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Das Template aktualisieren, um den abgeschlossenen Zustand anzuzeigen

Schließlich werden wir das `todo.hbs` Template bearbeiten, sodass der Wert der Checkbox nun an die Eigenschaft `isCompleted` des Todos gebunden ist und beim Ändern die Methode `toggleCompletion()` des Todo-Services aufgerufen wird.

1. Finden Sie in `todo.hbs` zuerst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier etwas bedingten Inhalt verwenden, um den Klassenwert bei Bedarf hinzuzufügen:

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
   > Das obige Snippet verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [partielle Anwendung](https://en.wikipedia.org/wiki/Partial_application), die ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, aber den Aufrufkontext niemals ändert; dies ist gleichbedeutend mit der Verwendung von `bind` mit einem `null` als erstem Argument.

Versuchen Sie, den Entwicklungsserver neu zu starten und gehen Sie erneut zu `localhost:4200`, und Sie werden nun sehen, dass wir einen voll funktionsfähigen "todos übrig"-Zähler und einen Lösch-Button haben:

![todos werden als abgeschlossen markiert und gelöscht](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir den Toggle nicht einfach auf der Komponente durchführen, da die Funktion vollständig in sich geschlossen ist und nichts vom Service benötigt, dann sind Sie völlig berechtigt, diese Frage zu stellen! Da wir jedoch _letztendlich_ alle Änderungen an der Todos-Liste in den [lokalen Speicher](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren möchten (siehe die [Endversion der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, alle zustandsverändernden Operationen an einem Ort zu haben.

## Zusammenfassung

Das reicht fürs Erste. An diesem Punkt können wir nicht nur Todos als abgeschlossen markieren, sondern sie auch löschen. Jetzt bleibt nur noch, die drei Filterlinks im Footer zu verknüpfen: "Alle", "Aktive" und "Abgeschlossene". Das werden wir im nächsten Artikel mit Routing machen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
