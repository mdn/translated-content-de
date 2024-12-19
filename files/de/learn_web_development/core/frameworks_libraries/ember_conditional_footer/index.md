---
title: "Ember-Interaktivität: Fußzeilenfunktionalität, bedingte Darstellung"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, die Funktionalität der Fußzeile in unserer App in Angriff zu nehmen. Hier aktualisieren wir den Zähler für die Aufgaben, um die korrekte Anzahl der noch zu erledigenden Aufgaben anzuzeigen, und wenden korrekterweise das Styling auf erledigte Aufgaben an (d.h. dort, wo das Kontrollkästchen aktiviert ist). Wir werden auch unseren "Abgeschlossene löschen"-Button einrichten. Dabei lernen wir, wie man bedingte Darstellungen in unseren Vorlagen verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und Kenntnisse
          im Umgang mit der
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Eingabeaufforderung/Terminal</a>
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module etc.) wird äußerst vorteilhaft sein, da Ember stark auf
          diese setzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unser Lernen über Komponentenklassen fortsetzen, sich mit bedingter
        Darstellung beschäftigen und einige unserer Fußzeilen-Funktionalitäten
        verknüpfen.
      </td>
    </tr>
  </tbody>
</table>

## Verbindung des Verhaltens in der Fußzeile

Um die Fußzeile funktionsfähig zu machen, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Ein Zähler für noch ausstehende Aufgaben.
- Filter für alle, aktive und erledigte Aufgaben.
- Ein Button zum Löschen erledigter Aufgaben.

1. Da wir Zugriff auf unseren Service aus der Fußzeilenkomponente benötigen, müssen wir eine Klasse für die Fußzeile generieren. Geben Sie dazu den folgenden Befehl im Terminal ein:

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

3. Jetzt müssen wir zu unserer Datei `todo-data.js` zurückkehren und einige Funktionalitäten hinzufügen, die es uns ermöglicht, die Anzahl der unvollständigen Aufgaben zurückzugeben (nützlich, um zu zeigen, wie viele noch übrig sind) und die erledigten Aufgaben aus der Liste zu entfernen (was die Funktionalität "Abgeschlossene löschen" erfordert).

   Fügen Sie in `todo-data.js` den folgenden Getter unterhalb des vorhandenen `all()` Getters hinzu, um zu definieren, was die unvollständigen Aufgaben tatsächlich sind:

   ```js
   get incomplete() {
     return this.todos.filter((todo) => !todo.isCompleted);
   }
   ```

   Mit der Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) fragen wir nach allen Aufgaben, bei denen die Eigenschaft `isCompleted` gleich `false` ist. Da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert bei einem Objekt im Array ändert.

4. Fügen Sie als nächstes die folgende Aktion unterhalb der vorhandenen `add(text)`-Aktion hinzu:

   ```js
   @action
   clearCompleted() {
     this.todos = this.incomplete;
   }
   ```

   Dies ist ziemlich praktisch zum Löschen der Aufgaben — wir müssen lediglich das `todos` Array auf die Liste der unvollständigen Aufgaben setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserer Vorlage `footer.hbs` verwenden. Gehen Sie jetzt zu dieser Datei.
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

   Mit folgendem:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

Wenn nun der Button geklickt wird, wird die zuvor hinzugefügte Aktion `clearCompleted()` ausgeführt.
Allerdings wird die Schaltfläche "Abgeschlossene löschen" derzeit scheinbar nichts tun, wenn Sie darauf klicken, da es momentan keine Möglichkeit gibt, eine Aufgabe als erledigt zu markieren. Wir müssen die Vorlage `todo.hbs` mit dem Service verknüpfen, sodass das entsprechende Aktivieren eines Kontrollkästchens den Status jeder Aufgabe ändert. Das werden wir als nächstes tun.

## Das Problem zwischen Singular und Plural bei Aufgaben

Das oben Genannte ist in Ordnung, doch wir haben ein anderes kleines Problem zu bewältigen. Der "Aufgaben verbleibend"-Indikator sagt immer "x todos left", selbst wenn nur eine Aufgabe übrig ist, was grammatikalisch falsch ist!

Um das zu beheben, müssen wir diesen Teil der Vorlage aktualisieren, um eine bedingte Darstellung einzubeziehen. In Ember können Sie mittels [Bedingtem Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) Teile der Vorlage bedingt darstellen. Ein einfaches Blockbeispiel sieht folgendermaßen aus:

```hbs
\{{#if this.thingIsTrue}} Content for the block form of "if"
\{{/if}}
```

Versuchen Sie nun, diesen Teil von `footer.hbs` zu ersetzen:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong> todos left
```

durch folgendes:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.incomplete.length === 1}} todo
\{{else}} todos
\{{/if}} left
```

Dies wird jedoch einen Fehler hervorrufen — in Ember können diese einfachen `if`-Anweisungen derzeit nur auf einen wahrhaftigen/falschhaften Wert getestet werden, nicht auf einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, um das Ergebnis von `this.incomplete.length === 1` zurückzugeben, und dann dies in unserer Vorlage aufrufen.

Fügen Sie den folgenden neuen Getter zu `todo-data.js` unmittelbar unterhalb der vorhandenen Getter hinzu. Beachten Sie, dass wir hier `this.incomplete.length` und nicht `this.todos.incomplete.length` verwenden, da wir dies innerhalb des Services tun, wo der `incomplete()` Getter direkt verfügbar ist (in der Vorlage wurde der Inhalt des Services als `todos` verfügbar gemacht über die Zeile `@service('todo-data') todos;` innerhalb der Fußzeilenklasse, weshalb es dort `this.todos.incomplete.length` ist).

```js
get todoCountIsOne() {
  return this.incomplete.length === 1;
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen von uns bearbeiteten Vorlagenteil wie folgt:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie nun, und Sie werden sehen, dass die korrekte Pluralisierung verwendet wird, wenn Sie nur einen einzigen Aufgaben-Element haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Aufgaben abschließen

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Service zuzugreifen.

### Eine Klasse für eine Aufgabe erstellen

1. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt so, dass die Aufgabenkomponente Zugriff auf den Service hat:

   ```js
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Gehen Sie als nächstes wieder zu unserer `todo-data.js` Service-Datei zurück und fügen Sie die folgende Aktion direkt unter den vorherigen hinzu, die es uns ermöglicht, den Fertigstellungszustand für jede Aufgabe umzuschalten:

   ```js
   @action
   toggleCompletion(todo) {
     todo.isCompleted = !todo.isCompleted;
   }
   ```

### Die Vorlage aktualisieren, um den abgeschlossenen Zustand anzuzeigen

Schließlich werden wir die Vorlage `todo.hbs` so bearbeiten, dass der Wert des Kontrollkästchens nun an die Eigenschaft `isCompleted` der Aufgabe gebunden ist und dass bei einer Änderung die Methode `toggleCompletion()` des Servicemoduls aufgerufen wird.

1. Finden Sie in `todo.hbs` zuerst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie mit dieser — hier sehen Sie, dass wir einen weiteren bedingten Inhalt verwendet haben, um den Klassennamen bei Bedarf hinzuzufügen:

   ```hbs-nolint
   <li class=\{{ if @todo.isCompleted 'completed' }}>
   ```

2. Finden Sie als nächstes diese Zeile:

   ```hbs-nolint
   <input
     aria-label="Toggle the completion of this todo"
     class="toggle"
     type="checkbox"
   >
   ```

   Und ersetzen Sie sie mit dieser:

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
   > Der obige Ausschnitt verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht die [Teilanwendung](https://de.wikipedia.org/wiki/Teilanwendung), die der Methode [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ähnlich ist, jedoch niemals den Aufrufkontext verändert; dies entspricht der Verwendung von `bind` mit einem `null`-ersten Argument.

Versuchen Sie den Entwicklungsserver neu zu starten und gehen Sie erneut zu `localhost:4200`, und Sie werden jetzt sehen, dass wir einen voll funktionsfähigen "Verbleibende Aufgaben"-Zähler und eine Löschtaste haben:

![Markierte und gelöschte Aufgaben](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht einfach in der Komponente vornehmen, da die Funktion völlig eigenständig ist und nichts vom Service benötigt, dann haben Sie absolut Recht, diese Frage zu stellen! Da wir jedoch _letztendlich_ alle Änderungen an der Aufgabenliste im [local storage](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren möchten (siehe die [endgültige Version der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, dass alle Zustandsänderungen an einer zentralen Stelle vorgenommen werden.

## Zusammenfassung

Das genügt für jetzt. An diesem Punkt können wir nicht nur Aufgaben als erledigt markieren, sondern sie auch löschen. Jetzt ist das Einzige, was noch in der Fußzeile angeschlossen werden muss, die drei Filterlinks: "Alle", "Aktive" und "Erledigt". Wir werden dies im nächsten Artikel mit Hilfe von Routing tun.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
