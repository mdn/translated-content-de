---
title: "Ember-Interaktivität: Fußzeilenfunktionalität, bedingte Darstellung"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es Zeit, die Fußzeilenfunktionalität in unserer App anzugehen. Hier werden wir den "todo"-Zähler so aktualisieren, dass er die korrekte Anzahl der noch zu erledigenden Aufgaben anzeigt und das Styling für abgeschlossene Aufgaben korrekt anwendet (d.h. wenn das Kontrollkästchen markiert wurde). Wir verbinden auch unseren "Abgeschlossene löschen"-Button. Auf dem Weg dorthin lernen wir, wie man bedingte Darstellung in unseren Templates verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kerntechnologien
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionalitäten (wie Klassen,
          Module, etc.) ist äußerst vorteilhaft, da Ember stark von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unser Lernen über Komponentenklassen fortzusetzen, mit der bedingten Darstellung zu beginnen und einige Fußzeilenfunktionen zu verbinden.
      </td>
    </tr>
  </tbody>
</table>

## Verbindung des Verhaltens in der Fußzeile

Um die Fußzeile funktional zu machen, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Einen ausstehenden Zähler für todo.
- Filter für alle, aktive und abgeschlossene Aufgaben.
- Einen Button, um die abgeschlossenen Aufgaben zu löschen.

1. Da wir Zugriff auf unseren Service von der Fußzeilenkomponente benötigen, müssen wir eine Klasse für die Fußzeile generieren. Geben Sie dazu den folgenden Terminalbefehl ein:

   ```bash
   ember generate component-class footer
   ```

2. Gehen Sie anschließend zu der neu erstellten Datei `todomvc/app/components/footer.js` und aktualisieren Sie diese wie folgt:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Nun müssen wir zu unserer `todo-data.js`-Datei zurückkehren und einige Funktionalitäten hinzufügen, die es uns ermöglichen, die Anzahl der unvollständigen Aufgaben zurückzugeben (nützlich, um anzuzeigen, wie viele noch übrig sind) und die abgeschlossenen Aufgaben aus der Liste zu entfernen (was die "Abgeschlossene löschen"-Funktionalität benötigt).

   Fügen Sie in `todo-data.js` den folgenden Getter unterhalb des bestehenden `all()`-Getters hinzu, um zu definieren, was die unvollständigen Aufgaben tatsächlich sind:

   ```ts
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Mit der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Aufgaben, bei denen die Eigenschaft `isCompleted` gleich `false` ist. Da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als Nächstes die folgende Aktion unterhalb der bestehenden `add(text)`-Aktion hinzu:

   ```ts
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Das ist sehr nützlich, um die Aufgaben zu löschen — wir müssen nur das `todos`-Array auf die Liste der unvollständigen Aufgaben setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserem `footer.hbs`-Template nutzen. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zuerst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Durch diese, die die unvollständige Anzahl mit der Länge des `incomplete`-Arrays füllt:

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

Nun, wenn der Button geklickt wird, läuft die zuvor hinzugefügte Aktion `clearCompleted()`.
Wenn Sie jedoch jetzt versuchen, den "Abgeschlossene löschen"-Button zu klicken, scheint er nichts zu tun, da es derzeit keine Möglichkeit gibt, eine Aufgabe als "abgeschlossen" zu markieren. Wir müssen das `todo.hbs`-Template mit dem Service verbinden, sodass das Markieren des entsprechenden Kontrollkästchens den Status jeder Aufgabe ändert. Das machen wir als Nächstes.

## Das Problem mit todo/todos (Singular/Plural)

Das obige funktioniert soweit, aber wir haben noch ein kleines Problem zu bewältigen. Der Indikator "todos left" sagt immer "x todos left", selbst wenn nur eine Aufgabe übrig ist, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil des Templates aktualisieren, um eine bedingte Darstellung zu integrieren. In Ember können Sie Teile des Templates bedingt rendern, indem Sie [Bedingte Inhalte](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwenden; ein einfaches Blockbeispiel sieht so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen wir also diesen Teil von `footer.hbs` zu ersetzen:

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

Dies wird jedoch zu einem Fehler führen — in Ember können diese einfachen "if"-Anweisungen derzeit nur für einen Wahr/Falsch-Wert testen, nicht für einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter in `todo-data.js` hinzufügen, um das Ergebnis von `this.incomplete.length === 1` zurückzugeben, und diesen dann in unserem Template verwenden.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` hinzu, direkt unterhalb der bestehenden Getter. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, da wir dies innerhalb des Service tun, wo der `incomplete()`-Getter direkt verfügbar ist (im Template wurde der Inhalt des Dienstes über die Zeile `@service('todo-data') todos;` innerhalb der Fußzeilenklasse als `todos` verfügbar gemacht, wodurch es dort `this.todos.incomplete.length` ist).

```ts
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen Template-Abschnitt zu Folgendem:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie nun, und Sie werden sehen, dass die korrekte Pluralisierung verwendet wird, wenn Sie nur einen Aufgabeintrag haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Aufgaben abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zuzugreifen.

### Erstellen einer todo-Klasse

1. Führen Sie den folgenden Befehl im Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie deren Inhalt wie folgt, um der todo-Komponente den Zugriff auf den Service zu ermöglichen:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie erneut zu unserer `todo-data.js`-Service-Datei und fügen Sie die folgende Aktion direkt unter den vorherigen hinzu, um einen Abschlussstatus für jede Aufgabe umschalten zu können:

   ```ts
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Aktualisieren des Templates, um den abgeschlossenen Status anzuzeigen

Abschließend werden wir das `todo.hbs`-Template so ändern, dass der Wert des Kontrollkästchens nun an die Eigenschaft `isCompleted` der Aufgabe gebunden ist und bei Änderung die Methode `toggleCompletion()` des todo-Services aufgerufen wird.

1. Finden Sie in `todo.hbs` zunächst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden feststellen, dass wir hier weitere bedingte Inhalte verwenden, um den Klassenwert gegebenenfalls hinzuzufügen:

   ```hbs-nolint
   <li class=\{{ if @todo.isCompleted 'completed' }}>
   ```

2. Suchen Sie als Nächstes die folgende Zeile:

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
   > Der obige Ausschnitt verwendet ein neues, Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [Partial Application](https://en.wikipedia.org/wiki/Partial_application), was ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, jedoch nie den Aufrufkontext ändert; dies entspricht der Verwendung von `bind` mit einem `null`-Erstargument.

Versuchen Sie, den Entwicklungsserver neu zu starten und erneut zu `localhost:4200` zu gehen, und Sie werden sehen, dass wir jetzt einen voll funktionsfähigen "todos left"-Counter und einen Löschbutton haben:

![todos werden als abgeschlossen markiert und gelöscht](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach auf der Komponente machen, da die Funktion vollständig eigenständig ist und überhaupt nichts vom Service benötigt, dann haben Sie absolut Recht, diese Frage zu stellen! Da wir _letztendlich_ alle Änderungen an der Aufgabenliste im [lokalen Speicher](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren möchten (siehe die [endgültige Version der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, dass alle persistent-zustandsverändernden Operationen an einem Ort sind.

## Zusammenfassung

Das reicht fürs Erste. An diesem Punkt können wir Aufgaben nicht nur als vollständig markieren, sondern auch löschen. Das einzige, was noch zu tun bleibt, um die Fußzeile zu verbinden, sind die drei Filterlinks: "Alle", "Aktiv" und "Abgeschlossen". Das machen wir im nächsten Artikel mithilfe von Routing.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
