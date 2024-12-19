---
title: Ember App-Struktur und Komponentisierung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir die Struktur unserer TodoMVC Ember-App planen, das HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten zerlegen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird zumindest empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module etc.) wird äußerst nützlich sein, da Ember intensiv davon Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und dann diese Struktur in Komponenten aufteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet, dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu, um die Struktur und Semantik unserer TodoMVC-App zu planen.

Das HTML der Startseite unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits, und ihr Inhalt sieht derzeit so aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine Komponente, die von einem Ember-Addon bereitgestellt wird und die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir das erste Mal zu unserem Server unter `localhost:4200` navigiert sind.

Wir möchten jedoch etwas anderes. Stattdessen soll es die Struktur der TodoMVC-App enthalten. Löschen Sie dazu zunächst den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

```html
<section class="todoapp">
  <h1>todos</h1>
  <input
    class="new-todo"
    aria-label="What needs to be done?"
    placeholder="What needs to be done?"
    autofocus />
</section>
```

> **Hinweis:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet eine Bezeichnung für unterstützende Technologien, beispielsweise damit ein Screenreader diese vorlesen kann. Dies ist nützlich in Fällen, wo ein [`<input>`](/de/docs/Web/HTML/Element/input) ohne ein entsprechendes HTML-Label verwendet wird, welches in eine Bezeichnung umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun wie folgt aussehen:

![Todo-App im Browser gerendert, nur mit dem neuen Todo-Eingabefeld sichtbar](todos-initial-render.png)

Es erfordert nicht viel Mühe, unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die `application.hbs`-Datei erneut, sodass ihr Inhalt nun so aussieht:

```html
<section class="todoapp">
  <h1>todos</h1>
  <input
    class="new-todo"
    aria-label="What needs to be done?"
    placeholder="What needs to be done?"
    autofocus />

  <section class="main">
    <input id="mark-all-complete" class="toggle-all" type="checkbox" />
    <label for="mark-all-complete">Mark all as complete</label>

    <ul class="todo-list">
      <li>
        <div class="view">
          <input
            aria-label="Toggle the completion of this todo"
            class="toggle"
            type="checkbox" />
          <label>Buy Movie Tickets</label>
          <button
            type="button"
            class="destroy"
            title="Remove this todo"></button>
        </div>

        <input autofocus class="edit" value="Todo Text" />
      </li>

      <li>
        <div class="view">
          <input
            aria-label="Toggle the completion of this todo"
            class="toggle"
            type="checkbox" />
          <label>Go to Movie</label>
          <button
            type="button"
            class="destroy"
            title="Remove this todo"></button>
        </div>

        <input autofocus class="edit" value="Todo Text" />
      </li>
    </ul>
  </section>

  <footer class="footer">
    <span class="todo-count"> <strong>0</strong> todos left </span>

    <ul class="filters">
      <li>
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
      </li>
    </ul>

    <button type="button" class="clear-completed">Clear Completed</button>
  </footer>
</section>
```

Die gerenderte Ausgabe sollte nun wie folgt sein:

![Todo-App im Browser gerendert mit neuem Todo-Eingabefeld und bestehenden Todos, - Kinokarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Dies sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Nun müssen wir unseren HTML-Code in dynamische Komponenten zerlegen; später werden wir daraus eine vollständig interaktive App machen.

Wenn wir den Code neben der gerenderten Todo-App betrachten, gibt es mehrere Möglichkeiten, wie wir entscheiden könnten, die Benutzeroberfläche zu zerlegen, aber planen wir, das HTML in die folgenden Komponenten aufzuteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente kommen](todos-ui-component-breakdown.png)

Die Komponenten-Gruppierungen sind wie folgt:

- Das Haupteingabefeld / "new-todo" (rot im Bild)
- Der Hauptinhalt der Todo-Liste + die `mark-all-complete`-Schaltfläche (lila im Bild)

  - Die `mark-all-complete`-Schaltfläche, ausdrücklich hervorgehoben aus unten angegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine einzelne Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Etwas Seltsames zu beachten ist, dass das `mark-all-complete`-Checkbox (gelb markiert), obwohl es sich im "Haupt"-Abschnitt befindet, neben dem "new-todo"-Eingabefeld gerendert wird. Dies liegt daran, dass das Standard-CSS die Checkbox + das Label mit negativen Top- und Linkswerten absolut positioniert, um es neben das Eingabefeld zu verschieben, anstatt es in dem "Haupt"-Abschnitt zu haben.

![Todo-App durch Entwicklertools betrachtet](todos-devtools-view.png)

## Verwendung der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Fußzeile

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Beginnen wir mit der Erstellung der Header-Komponente. Um dies zu tun:

1. Stoppen Sie den laufenden Server, indem Sie zum Terminal gehen und <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dadurch werden einige neue Dateien generiert, wie im resultierenden Terminalausgang gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in die wir die HTML-Struktur nur für diese Komponente aufnehmen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, Reaktionen auf Benutzerinteraktionen etc. hinzufügen.

> [!NOTE]
> Die `header.js`-Datei (als übersprungen angezeigt) dient der Verbindung zu einer unterstützenden Glimmer-Komponentenklasse, die wir derzeit nicht benötigen, da sie zum Hinzufügen von Interaktivität und Zustandsmanipulation verwendet werden. Standardmäßig generiert `generate component` nur Vorlagenkomponenten, da in großen Anwendungen Vorlagenkomponenten den Großteil der Komponenten ausmachen.

`header-test.js` dient dem Schreiben automatisierter Tests, um sicherzustellen, dass unsere App im Laufe der Zeit weiterhin funktioniert, während wir aktualisieren, Funktionen hinzufügen, umstrukturieren usw. Tests liegen außerhalb des Umfangs dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten und nicht danach, da sie sonst oft vergessen werden. Wenn Sie neugierig auf Tests sind oder wissen möchten, warum Sie automatisierte Tests haben sollten, schauen Sie sich das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir irgendeinen Komponentencode hinzufügen, lassen Sie uns das Gerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie werden nun das Folgende in Ihrem Verzeichnis `todomvc/app/components` sehen:

![Das App-Komponentenverzeichnis, das die von uns erstellten Komponenten-Vorlagendateien zeigt](todos-components-directory.png)

Da wir nun alle unsere Komponentenstrukturdateien haben, können wir den HTML-Code für jede Komponente aus der `application.hbs`-Datei ausschneiden und in jede dieser Komponenten einfügen, und dann die `application.hbs` umschreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die `header.hbs`-Datei sollte aktualisiert werden, um Folgendes zu enthalten:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. `todo-list.hbs` sollte aktualisiert werden, um diesen Codeblock zu enthalten:

   ```html
   <section class="main">
     <input id="mark-all-complete" class="toggle-all" type="checkbox" />
     <label for="mark-all-complete">Mark all as complete</label>

     <ul class="todo-list">
       <Todo />
       <Todo />
     </ul>
   </section>
   ```

   > [!NOTE]
   > Die einzige nicht-HTML-Inhalte in diesem neuen `todo-list.hbs` ist die `<Todo />`-Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie die Deklaration eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben, und die Namen sind in {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie es später bei `<TodoList />` sehen werden. Der Inhalt der `todo.hbs`-Datei unten wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie Folgendes in die `todo.hbs`-Datei ein:

   ```html
   <li>
     <div class="view">
       <input
         aria-label="Toggle the completion of this todo"
         class="toggle"
         type="checkbox" />
       <label>Buy Movie Tickets</label>
       <button type="button" class="destroy" title="Remove this todo"></button>
     </div>

     <input autofocus class="edit" value="Todo Text" />
   </li>
   ```

4. `footer.hbs` sollte aktualisiert werden, um Folgendes enthalten:

   ```html
   <footer class="footer">
     <span class="todo-count"> <strong>0</strong> todos left </span>

     <ul class="filters">
       <li>
         <a href="#">All</a>
         <a href="#">Active</a>
         <a href="#">Completed</a>
       </li>
     </ul>

     <button type="button" class="clear-completed">Clear Completed</button>
   </footer>
   ```

5. Schließlich sollte der Inhalt von `application.hbs` aktualisiert werden, sodass die entsprechenden Komponenten aufgerufen werden, wie folgt:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem Sie diese Änderungen vorgenommen haben, führen Sie `npm start` in Ihrem Terminal erneut aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App immer noch aussieht wie vor der Umstrukturierung.

![Todo-App im Browser gerendert mit neuem Todo-Eingabefeld und bestehenden Todos, beide sagen Kinokarten kaufen](todos-components-render.png)

Beachten Sie, wie die Todo-Elemente beide "Buy Movie Tickets" sagen – dies liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text darin fest codiert ist. Im nächsten Artikel werden wir untersuchen, wie man unterschiedliche Todo-Elemente anzeigt!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umgewandelt! Im nächsten Artikel werden wir beginnen, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
