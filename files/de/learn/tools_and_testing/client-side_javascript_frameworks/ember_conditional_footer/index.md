---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingte Darstellung"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer
l10n:
  sourceCommit: cfb8ef1a19700fbfd3b5c2d3e832036c8f5f6197
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, die Funktionalität des Footers in unserer App anzugehen. Hier werden wir den Todo-Zähler so aktualisieren, dass er die korrekte Anzahl an noch zu erledigenden Todos anzeigt und korrektes Styling für erledigte Todos anwendet (d.h. bei denen das Kontrollkästchen aktiviert wurde). Zudem kümmern wir uns um die Funktionalität des "Erledigte löschen"-Buttons. Dabei lernen wir auch, wie man in unseren Vorlagen bedingte Darstellungen verwendet.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember stark von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unsere Kenntnisse über Komponentenklassen fortsetzen, mit der bedingten Darstellung beginnen und einige Funktionen unseres Footers umsetzen.
      </td>
    </tr>
  </tbody>
</table>

## Verbinden des Verhaltens im Footer

Um den Footer zum Laufen zu bringen, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Ein Zähler für anstehende Todos.
- Filter für alle, aktive und erledigte Todos.
- Ein Button zum Löschen der erledigten Todos.

1. Da wir Zugriff auf unseren Dienst aus der Footer-Komponente benötigen, müssen wir eine Klasse für den Footer generieren. Geben Sie den folgenden Befehl im Terminal ein, um dies zu tun:

   ```bash
   ember generate component-class footer
   ```

2. Suchen Sie als Nächstes die neu erstellte Datei `todomvc/app/components/footer.js` und aktualisieren Sie sie mit dem folgenden Inhalt:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Jetzt müssen wir zu unserer Datei `todo-data.js` zurückgehen und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unvollständigen Todos zurückzugeben (nützlich, um anzuzeigen, wie viele noch übrig sind) und die erledigten Todos aus der Liste zu löschen (was die Funktionalität "Erledigte löschen" benötigt).

   Fügen Sie in `todo-data.js` folgenden Getter unter dem bestehenden `all()`-Getter hinzu, um zu definieren, was die unvollständigen Todos tatsächlich sind:

   ```js
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Mit der [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als Nächstes die folgende Aktion unter der bestehenden `add(text)`-Aktion hinzu:

   ```js
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Dies ist recht praktisch für das Löschen der Todos – wir müssen nur das `todos`-Array auf die Liste der unvollständigen Todos setzen.

5. Schließlich müssen wir diese neue Funktion in unserer `footer.hbs`-Vorlage nutzen. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zunächst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Durch diese Zeile, die die unvollständige Anzahl mit der Länge des `incomplete`-Arrays auffüllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie dann diese Zeile:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Durch diese Zeile:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

Wenn der Button nun geklickt wird, wird die vorher hinzugefügte `clearCompleted()`-Aktion ausgeführt. Wenn Sie jedoch jetzt versuchen, den "Clear Completed"-Button zu klicken, scheint er nichts zu tun, da es derzeit keine Möglichkeit gibt, ein Todo "abzuschließen". Wir müssen die `todo.hbs`-Vorlage mit dem Dienst verbinden, damit das Aktivieren des entsprechenden Kontrollkästchens den Zustand jedes Todos ändert. Darauf werden wir als nächstes eingehen.

## Das Todo/Todos-Problem im Plural

Das oben Gesagte ist in Ordnung, aber wir haben ein weiteres kleines Problem zu bewältigen. Der Indikator "todos left" zeigt immer "x todos left" an, selbst wenn nur noch ein Todo übrig ist, was schlechte Grammatik ist!

Um dies zu beheben, müssen wir diesen Teil der Vorlage aktualisieren, um eine bedingte Darstellung einzuschließen. In Ember können Sie Teile der Vorlage mit [bedingtem Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) bedingt rendern; ein einfaches Blockbeispiel sieht etwa so aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen wir also, diesen Teil von `footer.hbs` zu ersetzen:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong> todos left
```

durch Folgendes:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.incomplete.length === 1}} todo
\{{else}} todos
\{{/if}} left
```

Dies wird jedoch zu einem Fehler führen — in Ember können diese einfachen if-Anweisungen derzeit nur einen Wahrheitswert/Falschwert testen, nicht einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir `todo-data.js` um einen Getter erweitern, der das Ergebnis von `this.incomplete.length === 1` zurückgibt, und diesen dann in unserer Vorlage aufrufen.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` hinzu, direkt unter den vorhandenen Gettern. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, da wir dies innerhalb des Dienstes tun, wo der `incomplete()`-Getter direkt verfügbar ist (in der Vorlage wurde der Inhalt des Dienstes über die Zeile `@service('todo-data') todos;` innerhalb der Footer-Klasse als `todos` verfügbar gemacht, weshalb es dort `this.todos.incomplete.length` ist).

```js
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorher bearbeiteten Vorlagenteil zu folgendem:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie nun, und Sie werden die korrekte Pluralisation sehen, wenn Sie nur ein Todo-Element haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Todos abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Dienst zuzugreifen.

### Erstellen einer Todo-Klasse

1. Führen Sie den folgenden Befehl im Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt wie folgt, um der Todo-Komponente Zugriff auf den Dienst zu geben:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie dann erneut zu unserer Dienstdatei `todo-data.js` und fügen Sie die folgende Aktion direkt unter den vorherigen hinzu, die es uns ermöglicht, den Abschlusszustand für jedes Todo umzuschalten:

   ```js
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Aktualisieren der Vorlage zur Anzeige des abgeschlossenen Zustands

Schließlich werden wir die `todo.hbs`-Vorlage so bearbeiten, dass der Wert des Kontrollkästchens jetzt an die `isCompleted`-Eigenschaft des Todos gebunden ist und bei Änderung die Methode `toggleCompletion()` im Todo-Dienst aufgerufen wird.

1. Suchen Sie in `todo.hbs` zunächst diese Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese — Sie werden bemerken, dass wir hier etwas mehr bedingten Inhalt verwenden, um den Klassenwert bei Bedarf hinzuzufügen:

   ```hbs-nolint
   <li class=\{{ if @todo.isCompleted 'completed' }}>
   ```

2. Suchen Sie als Nächstes diese Zeile:

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
   > Der obige Ausschnitt verwendet ein neues ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [partielle Anwendung](https://en.wikipedia.org/wiki/Partial_application), was ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, jedoch wird der Aufrufkontext niemals geändert; dies entspricht der Verwendung von `bind` mit einem `null` als erstem Argument.

Versuchen Sie, den Entwicklungsserver neu zu starten und erneut zu `localhost:4200` zu gehen. Sie werden jetzt sehen, dass wir einen voll funktionsfähigen Zähler für "todos left" und einen Lösch-Button haben:

![todos, die als abgeschlossen markiert und gelöscht werden](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht nur in der Komponente selbst vornehmen, da die Funktion vollständig eigenständig ist und nichts vom Dienst benötigt, dann haben Sie recht, dies zu hinterfragen! Da wir _schließlich_ alle Änderungen an der Todos-Liste im [Local Storage](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren möchten (siehe die [Endversion der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), ist es sinnvoll, alle Operationen zur Änderung des persistenten Zustands an derselben Stelle zu haben.

## Zusammenfassung

Das reicht für jetzt. An diesem Punkt können wir nicht nur Todos als abgeschlossen markieren, sondern sie auch löschen. Jetzt bleibt als Einziges die Filterung im Footer mit den drei Links: "All", "Active" und "Completed" zu verbinden. Das werden wir im nächsten Artikel mit Routing tun.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
