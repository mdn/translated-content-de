---
title: Struktur und Komponentisierung einer Ember-App
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Die Inhalte werden im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

In diesem Artikel werden wir uns direkt mit der Planung der Struktur unserer TodoMVC Ember-App befassen, das HTML dafür hinzufügen und dann die HTML-Struktur in Komponenten aufteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          >verfügen.
        </p>
        <p>
          Ein tieferes Verständnis von modernen JavaScript-Funktionen (wie Klassen, Module usw.) ist äußerst vorteilhaft, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie eine Ember-App strukturiert wird und wie diese Struktur in Komponenten zerlegt wird.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu, um die Struktur und Semantik unserer TodoMVC-App zu planen.

Das HTML der Startseite unserer Anwendung ist in `app/templates/application.hbs` definiert. Dies existiert bereits und sieht momentan folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine Komponente, die von einem Ember-Addon bereitgestellt wird und die standardmäßige Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir das erste Mal zu unserem Server unter `localhost:4200` navigierten.

Das wollen wir jedoch nicht. Stattdessen wollen wir, dass es die Struktur der TodoMVC-App enthält. Löschen Sie zunächst den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

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

> [!NOTE]
> [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet assistiven Technologien ein Label zur Nutzung — beispielsweise damit ein Screenreader es vorlesen kann. Das ist nützlich in solchen Fällen, in denen ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) verwendet wird, ohne dass entsprechender HTML-Text vorhanden ist, der als Label genutzt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu aufbauen und den Browser aktualisieren. Die gerenderte Ausgabe sollte jetzt folgendermaßen aussehen:

![Todo-App im Browser gerendert, nur das neue todo-Eingabefeld wird angezeigt](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML aussehen zu lassen wie eine voll funktionsfähige To-Do-Liste. Aktualisieren Sie die Datei `application.hbs` erneut, sodass der Inhalt so aussieht:

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
            title="Remove this todo"
            aria-label="Remove this todo"></button>
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
            title="Remove this todo"
            aria-label="Remove this todo"></button>
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

Die gerenderte Ausgabe sollte jetzt folgendermaßen aussehen:

![Todo-App im Browser gerendert, mit neuem Todo-Eingabefeld und vorhandenen Todos, - Kinokarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Das sieht ziemlich komplett aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später werden wir ihn in eine vollständig interaktive App verwandeln.

Beim Betrachten des Codes neben der gerenderten Todo-App gibt es mehrere Möglichkeiten, wie wir entscheiden könnten, die Benutzeroberfläche aufzuteilen, aber lassen Sie uns planen, das HTML in die folgenden Komponenten aufzuteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente gehen](todos-ui-component-breakdown.png)

Die Komponentengruppierungen sind wie folgt:

- Die Haupteingabe / "new-todo" (rot im Bild)
- Der umschließende Hauptteil der To-Do-Liste + der `mark-all-complete`-Button (lila im Bild)
  - Der `mark-all-complete` Button, explizit hervorgehoben aus den unten genannten Gründen (gelb im Bild)
  - Jedes Todo ist eine einzelne Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Eine seltsame Anmerkung ist, dass das `mark-all-complete` Kontrollkästchen (gelb markiert), obwohl es sich im „Main“-Abschnitt befindet, neben der „new-todo“-Eingabe gerendert wird. Dies liegt daran, dass das Standard-CSS das Kontrollkästchen und das Label mit negativen Top- und Left-Werten absolut positioniert, um es neben das Eingabefeld zu verschieben, anstatt es in den „Main“-Abschnitt einzubinden.

![Die Todo-App im Devtools-Ansicht betrachtet](todos-devtools-view.png)

## Verwenden der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App zu repräsentieren, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Individuelles Todo
- Fußzeile

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Gehen Sie folgendermaßen vor:

1. Stoppen Sie den laufenden Server, indem Sie im Terminal <kbd>Strg</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Diese Befehle erstellen einige neue Dateien, wie im resultierenden Terminalausgang gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Template-Datei, in die wir die HTML-Struktur nur für diese Komponente aufnehmen. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, Benutzerinteraktionen usw. hinzufügen.

> [!NOTE]
> Die Datei `header.js` (als übersprungen angezeigt) dient der Verbindung mit einer unterstützenden Glimmer Component Class, die wir derzeit nicht benötigen, da sie für das Hinzufügen von Interaktivität und das Manipulieren von Zuständen gedacht sind. Standardmäßig generiert `generate component` nur Template-Komponenten, da in großen Anwendungen Template-only-Komponenten den Großteil der Komponenten ausmachen.

`header-test.js` ist für das Schreiben automatisierter Tests gedacht, um sicherzustellen, dass unsere App auch weiterhin funktioniert, während wir Updates, neue Funktionen, Refaktorisierungen usw. vornehmen. Testen liegt außerhalb des Umfangs dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten, nicht danach, da sie sonst oft vergessen werden. Wenn Sie an Tests interessiert sind oder wissen möchten, warum Sie automatisierte Tests haben sollten, lesen Sie das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/).

Bevor wir mit dem Hinzufügen von Komponenten-Code beginnen, lassen Sie uns das Gerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie werden jetzt Folgendes in Ihrem Verzeichnis `todomvc/app/components` sehen:

![Das App-Komponenten-Verzeichnis, das die von uns erstellten Komponenten-Template-Dateien zeigt](todos-components-directory.png)

Jetzt, da wir alle unsere Komponentenstruktur-Dateien haben, können wir das HTML für jede Komponente aus der `application.hbs` Datei herausschneiden und in jede dieser Komponenten einfügen und dann die `application.hbs` umschreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die Datei `header.hbs` sollte aktualisiert werden, um das Folgende zu enthalten:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. `todo-list.hbs` sollte so aktualisiert werden, dass dieser Codeblock enthalten ist:

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
   > Das einzige Nicht-HTML-Element in diesem neuen `todo-list.hbs` ist der `<Todo />` Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie das Deklarieren eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben, und die Namen werden in {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie später bei `<TodoList />` sehen werden. Der Inhalt der untenstehenden Datei `todo.hbs` wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie das Folgende in die Datei `todo.hbs` ein:

   ```html
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
         title="Remove this todo"
         aria-label="Remove this todo"></button>
     </div>

     <input autofocus class="edit" value="Todo Text" />
   </li>
   ```

4. `footer.hbs` sollte so aktualisiert werden, dass es Folgendes enthält:

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

5. Schließlich sollte der Inhalt von `application.hbs` so aktualisiert werden, dass sie die entsprechenden Komponenten aufrufen:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Mit diesen Änderungen führen Sie erneut `npm start` in Ihrem Terminal aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App immer noch so aussieht wie vor der Refaktorisierung.

![Todo-App im Browser gerendert, mit neuem Todo-Eingabefeld und vorhandenen Todos, die beide "Kinokarten kaufen" sagen](todos-components-render.png)

Beachten Sie, wie die Todo-Elemente beide „Buy Movie Tickets“ sagen – das liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text in ihr fest codiert ist. Im nächsten Artikel werden wir uns damit befassen, wie verschiedene Todo-Items angezeigt werden!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umgestaltet! Im nächsten Artikel werden wir beginnen, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
