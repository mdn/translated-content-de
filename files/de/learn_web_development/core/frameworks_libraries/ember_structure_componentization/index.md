---
title: Ember-App-Struktur und Komponentenaufteilung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel gehen wir direkt dazu über, die Struktur unserer TodoMVC-Ember-App zu planen, das HTML dafür hinzuzufügen und anschließend diese HTML-Struktur in Komponenten zu unterteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens die wesentlichen Sprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> kennen und
          Kenntnisse über die Verwendung des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Eingabeaufforderung</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module, usw.) ist äußerst vorteilhaft, da Ember stark von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur
        in Komponenten aufteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu, um die Struktur und Semantik unserer TodoMVC-App zu planen.

Das HTML der Startseite unserer Anwendung wird in `app/templates/application.hbs` definiert. Diese Datei existiert bereits und ihr Inhalt sieht derzeit so aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine von einem Ember-Addon bereitgestellte Komponente, die die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir zum ersten Mal zu unserem Server unter `localhost:4200` navigierten.

Wir wollen jedoch etwas anderes. Stattdessen möchten wir, dass sie die Struktur der TodoMVC-App enthält. Löschen Sie zunächst den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

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
> [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet eine Beschriftung für unterstützende Technologie — zum Beispiel, damit ein Bildschirmleser sie vorlesen kann. Dies ist nützlich in Fällen, in denen wir ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) verwenden, ohne dass ein entsprechender HTML-Text vorhanden ist, der in eine Beschriftung umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun so aussehen:

![Todo-App im Browser gerendert, nur mit dem neuen Todo-Eingabefeld, das angezeigt wird](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die Datei `application.hbs` erneut, sodass ihr Inhalt folgendermaßen aussieht:

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

Die gerenderte Ausgabe sollte nun wie folgt aussehen:

![Todo-App im Browser gerendert, mit neuem Todo-Eingabefeld und vorhandenen Todos, - Kinokarten kaufen und zum Film gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später werden wir daraus eine voll interaktive App machen.

Betrachtet man den Code neben der gerenderten Todo-App, gibt es mehrere Möglichkeiten, wie wir entscheiden können, die Benutzeroberfläche aufzuteilen. Aber lassen Sie uns planen, das HTML in die folgenden Komponenten zu unterteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente gehen werden](todos-ui-component-breakdown.png)

Die Komponenten-Gruppierungen sind wie folgt:

- Die Haupteingabe / "new-todo" (rot im Bild)
- Der enthaltene Körper der To-Do-Liste + die `mark-all-complete` Taste (lila im Bild)
  - Die `mark-all-complete Taste`, ausdrücklich hervorgehoben aus den unten genannten Gründen (gelb im Bild)
  - Jede To-Do ist eine individuelle Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Etwas merkwürdiges ist, dass das `mark-all-complete` Kontrollkästchen (in Gelb), während es sich im "Haupt"-Abschnitt befindet, neben dem "new-todo" Eingabefeld gerendert wird. Das liegt daran, dass das Standard-CSS das Kontrollkästchen + Beschriftung mit negativen oberen und linken Werten absolut positioniert, um es neben das Eingabefeld zu verschieben, anstatt es in den "Haupt"-Abschnitt zu platzieren.

![Todo-App im Devtools betrachtet](todos-devtools-view.png)

## Verwenden der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Individuelles Todo
- Fußzeile

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Gehen Sie dazu folgendermaßen vor:

1. Stoppen Sie den laufenden Server, indem Sie zum Terminal gehen und <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dies wird einige neue Dateien generieren, wie im resultierenden Terminalausgang gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindung, Benutzerinteraktionen usw. hinzufügen.

> [!NOTE]
> Die `header.js`-Datei (als übersprungen angezeigt) ist für die Verbindung zu einer unterstützenden Glimmer Component Class, die wir aktuell nicht benötigen, da sie zur Interaktivitäts- und Zustandsmanipulation verwendet wird. Standardmäßig generiert `generate component` template-only Komponenten, da in großen Anwendungen template-only Komponenten die Mehrheit der Komponenten bilden.

`header-test.js` ist für das Schreiben automatisierter Tests, um sicherzustellen, dass unsere App im Laufe der Zeit bei Upgrades, der Hinzufügung von Funktionen, Reorganisation usw. weiterhin funktioniert. Tests sind nicht Teil dieses Tutorials, obwohl Tests in der Regel während der Entwicklung implementiert werden sollten und nicht danach, da sie sonst oft vergessen werden. Wenn Sie neugierig auf Tests sind oder wissen möchten, warum Sie automatisierte Tests haben möchten, lesen Sie das [offizielle Ember-Tutorial zum Testen](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/).

Bevor wir irgendwelchen Komponentencode hinzufügen, erstellen wir das Grundgerüst für die anderen Komponenten. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie werden jetzt Folgendes in Ihrem `todomvc/app/components` Verzeichnis sehen:

![Das App-Komponentenverzeichnis, das die von uns erstellten Komponenten-Vorlagendateien zeigt](todos-components-directory.png)

Da wir jetzt alle unsere Komponentendatei-Strukturen haben, können wir das HTML für jede Komponente aus der Datei `application.hbs` ausschneiden und in jede dieser Komponenten einfügen und dann die `application.hbs` so umschreiben, dass sie unsere neuen Abstraktionen widerspiegelt.

1. Die Datei `header.hbs` sollte aktualisiert werden, um Folgendes zu enthalten:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. `todo-list.hbs` sollte aktualisiert werden, um diesen Codeabschnitt zu enthalten:

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
   > Das einzige Nicht-HTML im neuen `todo-list.hbs` ist die `<Todo />` Komponenteninvozierung. In Ember ist eine Komponenteninvozierung ähnlich wie die Deklarierung eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben und die Namen werden im {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie später mit `<TodoList />` sehen werden. Der Inhalt der `todo.hbs`-Datei unten wird `<Todo />` auf der gerenderten Seite ersetzen, sobald unsere Anwendung geladen wird.

3. Fügen Sie Folgendes in die Datei `todo.hbs` ein:

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

4. `footer.hbs` sollte aktualisiert werden, um Folgendes zu enthalten:

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

5. Schließlich sollten die Inhalte von `application.hbs` so aktualisiert werden, dass sie die entsprechenden Komponenten aufrufen, wie folgt:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem Sie diese Änderungen vorgenommen haben, führen Sie `npm start` erneut in Ihrem Terminal aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App weiterhin wie vor dem Refactoring aussieht.

![Todo-App im Browser gerendert mit neuem Todo-Eingabefeld und angezeigten bestehenden Todos, die beide "Buy Movie Tickets" sagen](todos-components-render.png)

Beachten Sie, dass die Todo-Elemente beide "Buy Movie Tickets" sagen — dies liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text darin fest codiert ist. Wir werden im nächsten Artikel betrachten, wie man verschiedene Todo-Elemente anzeigt!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umstrukturiert! Im nächsten Artikel beginnen wir damit, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
