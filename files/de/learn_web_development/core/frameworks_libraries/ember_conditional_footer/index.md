---
title: "Ember-Interaktivität: Footer-Funktionalität, bedingtes Rendern"
slug: Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun ist es an der Zeit, sich mit der Footer-Funktionalität in unserer App zu beschäftigen. Hier werden wir den Todo-Zähler so aktualisieren, dass die korrekte Anzahl der noch zu erledigenden Todos angezeigt wird, und korrektes Styling für erledigte Todos anwenden (d.h. wenn das Kontrollkästchen aktiviert wurde). Wir werden auch unseren "Clear completed"-Button verdrahten. Auf dem Weg dorthin lernen wir, wie man bedingtes Rendern in unseren Templates verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse im Umgang mit der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, usw.) wird äußerst hilfreich sein, da Ember stark von ihnen
          Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um unser Lernen über Komponentenklassen fortzusetzen, beginnen wir mit
        dem bedingten Rendern und verdrahten einige unserer Footer-Funktionalität.
      </td>
    </tr>
  </tbody>
</table>

## Verbindung des Verhaltens im Footer

Um den Footer zu aktivieren, müssen wir die folgenden drei Funktionsbereiche implementieren:

- Einen noch ausstehenden Todo-Zähler.
- Filter für alle, aktive und erledigte Todos.
- Einen Button, um die erledigten Todos zu löschen.

1. Da wir vom Footer-Komponente aus auf unseren Dienst zugreifen müssen, müssen wir eine Klasse für den Footer erstellen. Geben Sie den folgenden Terminalbefehl ein, um dies zu tun:

   ```bash
   ember generate component-class footer
   ```

2. Gehen Sie als nächstes zu der neu erstellten Datei `todomvc/app/components/footer.js` und aktualisieren Sie sie wie folgt:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class FooterComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Nun müssen wir zu unserer Datei `todo-data.js` zurückkehren und einige Funktionen hinzufügen, die es uns ermöglichen, die Anzahl der unvollständigen Todos zurückzugeben (nützlich, um zu zeigen, wie viele noch übrig sind) und die erledigten Todos aus der Liste zu löschen (was die Funktion "Clear completed" erfordert).

   Fügen Sie in `todo-data.js` den folgenden Getter unterhalb des bestehenden `all()` Getters hinzu, um zu definieren, was die unvollständigen Todos tatsächlich sind:

   ```ts
   export default class TodoDataService extends Service {
     // …
     get incomplete() {
       return this.todos.filter((todo) => !todo.isCompleted);
     }
     // …
   }
   ```

   Mit der [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode fragen wir nach allen Todo-Elementen, bei denen die Eigenschaft `isCompleted` gleich `false` ist, und da `isCompleted` in unserem `Todo`-Objekt `@tracked` ist, wird dieser Getter neu berechnet, wenn sich der Wert eines Objekts im Array ändert.

4. Fügen Sie als nächstes die folgende Aktion unterhalb der bestehenden `add(text)`-Aktion hinzu:

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

   Dies ist sehr praktisch zum Löschen der Todos — wir müssen nur das `todos`-Array auf die Liste der unvollständigen Todos setzen.

5. Schließlich müssen wir diese neue Funktionalität in unserem `footer.hbs`-Template nutzen. Gehen Sie jetzt zu dieser Datei.
6. Ersetzen Sie zunächst diese Zeile:

   ```hbs
   <strong>0</strong> todos left
   ```

   Mit dieser, die die Anzahl der unvollständigen Todos mit der Länge des `incomplete`-Arrays füllt:

   ```hbs
   <strong>\{{this.todos.incomplete.length}}</strong> todos left
   ```

7. Ersetzen Sie als nächstes folgendes:

   ```hbs
   <button type="button" class="clear-completed">
   ```

   Mit diesem:

   ```hbs
   <button type="button" class="clear-completed" \{{on 'click' this.todos.clearCompleted}}>
   ```

Nun wird die zuvor hinzugefügte Aktion `clearCompleted()` ausgeführt, wenn der Button geklickt wird.
Wenn Sie jetzt jedoch versuchen, auf die Schaltfläche "Clear Completed" zu klicken, scheint nichts zu passieren, da es derzeit keine Möglichkeit gibt, ein Todo als abgeschlossen zu markieren. Wir müssen das `todo.hbs`-Template an den Dienst anschließen, sodass das Aktivieren des relevanten Kontrollkästchens den Status jedes Todos ändert. Das werden wir als Nächstes tun.

## Das Singular- und Pluralproblem von todo/todos

Das Obige ist in Ordnung, aber wir haben noch ein kleines Problem. Der "todos left"-Indikator sagt immer "x todos left", auch wenn nur ein Todo übrig bleibt, was grammatikalisch falsch ist!

Um dies zu beheben, müssen wir diesen Teil des Templates so aktualisieren, dass er bedingtes Rendern enthält. In Ember können Sie Teile des Templates bedingt rendern, indem Sie [bedingten Inhalt](https://guides.emberjs.com/v3.18.0/components/conditional-content/) verwenden; ein einfaches Blockbeispiel sieht etwa so aus:

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

Dies wird uns jedoch einen Fehler geben — in Ember können diese einfachen `if`-Anweisungen derzeit nur eine true/false-Wert überprüfen, nicht einen komplexeren Ausdruck wie einen Vergleich. Um dies zu beheben, müssen wir einen Getter zu `todo-data.js` hinzufügen, der das Ergebnis von `this.incomplete.length === 1` zurückgibt, und diesen dann in unserem Template aufrufen.

Fügen Sie diesen neuen Getter zu `todo-data.js` hinzu, direkt unter den vorhandenen Gettern. Beachten Sie, dass wir hier `this.incomplete.length` benötigen, nicht `this.todos.incomplete.length`, da wir dies im Dienst machen, wo der Getter `incomplete()` direkt verfügbar ist (im Template wurden die Inhalte des Dienstes als `todos` über die Zeile `@service("todo-data") todos;` in der Footerklasse verfügbar gemacht, daher dort `this.todos.incomplete.length`).

```ts
export default class TodoDataService extends Service {
  // …
  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }
  // …
}
```

Gehen Sie dann zurück zu `footer.hbs` und aktualisieren Sie den vorherigen bearbeiteten Abschnitt des Templates wie folgt:

```hbs
<strong>\{{this.todos.incomplete.length}}</strong>
\{{#if this.todos.todoCountIsOne}}todo\{{else}}todos\{{/if}} left
```

Speichern und testen Sie nun, und Sie sehen, dass die korrekte Pluralisierung verwendet wird, wenn Sie nur ein Todo-Element haben!

Beachten Sie, dass dies die Blockform von `if` in Ember ist; Sie könnten auch die Inline-Form verwenden:

```hbs
\{{if this.todos.todoCountIsOne "todo" "todos"}}
```

## Erledigung von Todos

Wie bei den anderen Komponenten benötigen wir eine Klasse, um auf den Dienst zuzugreifen.

### Erstellen einer Todo-Klasse

1. Führen Sie den folgenden Befehl im Terminal aus:

   ```bash
   ember generate component-class todo
   ```

2. Gehen Sie nun zur neu erstellten Datei `todomvc/app/components/todo.js` und aktualisieren Sie den Inhalt, um der Todo-Komponente Zugriff auf den Dienst zu geben:

   ```ts
   import Component from "@glimmer/component";
   import { inject as service } from "@ember/service";

   export default class TodoComponent extends Component {
     @service("todo-data") todos;
   }
   ```

3. Kehren Sie dann erneut zu unserer `todo-data.js`-Dienstdatei zurück und fügen Sie die folgende Aktion direkt unterhalb der vorherigen hinzu, die es uns ermöglicht, den Abschlussstatus für jedes Todo umzuschalten:

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

Schließlich werden wir das `todo.hbs`-Template so bearbeiten, dass der Wert des Kontrollkästchens nun an die Eigenschaft `isCompleted` des Todos gebunden wird und dass bei einer Änderung die `toggleCompletion()`-Methode des Todo-Dienstes aufgerufen wird.

1. Finden Sie in `todo.hbs` zuerst die folgende Zeile:

   ```hbs
   <li>
   ```

   Und ersetzen Sie sie durch diese – Sie werden bemerken, dass wir hier einige bedingte Inhalte verwenden, um den Klassenwert bei Bedarf hinzuzufügen:

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
   > Der obige Ausschnitt verwendet ein neues Ember-spezifisches Schlüsselwort — `fn`. `fn` ermöglicht [Teilapplikationen](https://de.wikipedia.org/wiki/Partial_Application), was ähnlich wie [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, jedoch den Aufrufkontext niemals ändert; dies entspricht der Verwendung von `bind` mit einem `null`-Erstargument.

Versuchen Sie, den Entwicklungsserver neu zu starten und gehen Sie erneut zu `localhost:4200`, und Sie werden nun sehen, dass wir einen voll funktionsfähigen "todos left"-Zähler und eine Schaltfläche zum Löschen haben:

![Todos werden als erledigt markiert und gelöscht](todos-being-marked-completed-and-cleared.gif)

Wenn Sie sich fragen, warum wir das Umschalten nicht direkt in der Komponente durchführen, da die Funktion völlig eigenständig ist und nichts vom Dienst benötigt, dann ist es absolut richtig, diese Frage zu stellen! Da wir aber _irgendwann_ alle Änderungen an der Todo-Liste in [lokalem Speicher](/de/docs/Web/API/Window/localStorage) speichern oder synchronisieren wollen (siehe die [Endversion der App](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/)), macht es Sinn, dass alle Operationen, die den Zustand ändern, an einem Ort zusammengefasst sind.

## Zusammenfassung

Das reicht für jetzt. An diesem Punkt können wir nicht nur Todos als erledigt markieren, sondern sie auch löschen. Jetzt bleibt nur noch, die drei Filterlinks "All", "Active" und "Completed" im Footer zu verdrahten. Das werden wir im nächsten Artikel mit Routing tun.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
