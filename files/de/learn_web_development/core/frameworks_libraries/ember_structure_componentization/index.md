---
title: Ember-App-Struktur und Komponentenbildung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir sofort mit der Planung der Struktur unserer TodoMVC Ember-App beginnen, das HTML dafür hinzufügen und dann diese HTML-Struktur in Komponenten aufteilen.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man eine Ember-App strukturiert und dann diese Struktur
        in Komponenten aufteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu und planen die Struktur und Semantik unserer TodoMVC-App.

Das HTML der Startseite unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits, und ihr aktueller Inhalt sieht folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine von einem Ember-Addon bereitgestellte Komponente, die die standardmäßige Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir zuerst zu unserem Server unter `localhost:4200` navigierten.

Aber das wollen wir nicht. Stattdessen soll es die Struktur der TodoMVC-App enthalten. Löschen Sie zunächst den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

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

> **Hinweis:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet eine Bezeichnung, die von unterstützenden Technologien genutzt werden kann — beispielsweise damit ein Screenreader den Text vorlesen kann. Dies ist in solchen Fällen nützlich, wo wir ein [`<input>`](/de/docs/Web/HTML/Element/input) verwenden, ohne dass korrespondierender HTML-Text vorhanden ist, der in ein Label umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte jetzt folgendermaßen aussehen:

![todo app wird im Browser gerendert, wobei nur das neue Todo-Eingabefeld sichtbar ist](todos-initial-render.png)

Es erfordert nicht viel Aufwand, um unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die Datei `application.hbs` erneut, sodass ihr Inhalt so aussieht:

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

Die gerenderte Ausgabe sollte nun wie folgt aussehen:

![todo app wird im Browser gerendert, mit neuem Todo-Eingabefeld und vorhandenen Todos, - Kinokarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später werden wir ihn in eine voll interaktive App umwandeln.

Beim Blick auf den Code neben der gerenderten Todo-App gibt es mehrere Möglichkeiten, die UI aufzuteilen, aber planen wir, das HTML in folgende Komponenten zu unterteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente gehen](todos-ui-component-breakdown.png)

Die Komponentengruppierungen sind wie folgt:

- Das Haupteingabefeld / "new-todo" (rot im Bild)
- Der umgebende Körper der To-Do-Liste + die `mark-all-complete`-Schaltfläche (lila im Bild)

  - Die explizit hervorgehobene `mark-all-complete`-Schaltfläche aus unten genannten Gründen (gelb im Bild)
  - Jedes Todo ist eine individuelle Komponente (grün im Bild)

- Der Fußbereich (blau im Bild)

Etwas Merkwürdiges zu beachten ist, dass das `mark-all-complete`-Kontrollkästchen (gelb markiert), während es sich im "main"-Abschnitt befindet, neben dem "new-todo"-Eingabefeld gerendert wird. Dies liegt daran, dass das Standard-CSS das Kontrollkästchen + Label mit negativen oberen und linken Werte absolut positioniert, um es neben das Eingabefeld zu verschieben, anstatt es im "main"-Abschnitt einzufügen.

![todo app durch Entwicklertools betrachtet](todos-devtools-view.png)

## Verwenden der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Fußbereich

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component` gefolgt vom Namen der Komponente. Erstellen wir zuerst die Header-Komponente. Dafür:

1. Stoppen Sie den laufenden Server, indem Sie im Terminal <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dies wird einige neue Dateien generieren, wie im resultierenden Terminalausgang angezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später werden wir die erforderlichen dynamischen Funktionen wie Datenbindungen, das Reagieren auf Benutzerinteraktionen usw. hinzufügen.

> [!NOTE]
> Die Datei `header.js` (als übersprungen angezeigt) ist für die Verbindung zu einer unterstützenden Glimmer-Component-Klasse, die wir momentan nicht benötigen, da sie für das Hinzufügen von Interaktivität und Zustandsmanipulation gedacht sind. Standardmäßig generiert `generate component` nur Vorlagenkomponenten, da in großen Anwendungen Vorlagenkomponenten die Mehrheit der Komponenten bilden.

`header-test.js` ist für das Schreiben automatisierter Tests, um sicherzustellen, dass unsere App weiterhin funktioniert, während wir Upgrades durchführen, Funktionen hinzufügen, refaktorisieren usw. Tests sind außerhalb des Umfangs dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten, nicht danach, da sie sonst oft vergessen werden. Wenn Sie neugierig auf Tests sind oder wissen möchten, warum Sie automatisierte Tests haben möchten, schauen Sie sich das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir mit dem Hinzufügen von Komponenten-Code beginnen, erstellen wir das Gerüst für die anderen Komponenten. Geben Sie nacheinander die folgenden Zeilen in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie werden jetzt das Folgende in Ihrem `todomvc/app/components`-Verzeichnis sehen:

![Das Komponentenverzeichnis der App, zeigt die von uns erstellten Komponenten-Vorlagendateien](todos-components-directory.png)

Jetzt, da wir alle unsere Komponentenstrukturdateien haben, können wir das HTML für jede Komponente aus der Datei `application.hbs` ausschneiden und in jede dieser Komponenten einfügen und dann die `application.hbs` neu schreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die Datei `header.hbs` sollte auf den folgenden Inhalt aktualisiert werden:

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
   > Das einzige nicht-HTML in dieser neuen `todo-list.hbs` ist der `<Todo />`-Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie das Deklarieren eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben, und die Namen werden in {{Glossary("camel_case", "upper camel case")}} geschrieben, wie Sie später bei `<TodoList />` sehen werden. Der Inhalt der Datei `todo.hbs` unten wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie dies in die Datei `todo.hbs` ein:

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

4. `footer.hbs` sollte aktualisiert werden, um den folgenden Inhalt zu enthalten:

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

5. Abschließend sollte der Inhalt von `application.hbs` so aktualisiert werden, dass er die entsprechenden Komponenten aufruft, wie folgt:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Mit diesen Änderungen führen Sie erneut `npm start` in Ihrem Terminal aus und gehen dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App noch so aussieht wie vor der Umstrukturierung.

![todo app im Browser gerendert mit neuem todo eingabefeld und bestehenden todos, beide sagen Kinokarten kaufen](todos-components-render.png)

Beachten Sie, dass die Todo-Elemente beide "Buy Movie Tickets" sagen — das liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text fest in sie eingefügt ist. Wir werden uns im nächsten Artikel ansehen, wie man unterschiedliche Todo-Items anzeigt!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umstrukturiert! Im nächsten Artikel werden wir anfangen, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
