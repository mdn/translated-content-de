---
title: Ember-App-Struktur und Komponentisierung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel planen wir die Struktur unserer TodoMVC-Ember-App, fügen das HTML hinzu und zerlegen diese HTML-Struktur anschließend in Komponenten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind,
          und Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur dann in Komponenten unterteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. Zu diesem Zeitpunkt fügen wir etwas HTML hinzu und planen die Struktur und Semantik unserer TodoMVC-App.

Das HTML der Startseite unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits und ihr Inhalt sieht derzeit folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine von einem Ember-Addon bereitgestellte Komponente, die die standardmäßige Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir erstmals zu unserem Server unter `localhost:4200` navigiert sind.

Das wollen wir jedoch nicht. Stattdessen möchten wir, dass es die Struktur der TodoMVC-App enthält. Zunächst löschen Sie den Inhalt von `application.hbs` und ersetzen ihn durch Folgendes:

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

> [!NOTE] > [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet assistierenden Technologien ein verwendbares Label – zum Beispiel, damit ein Screenreader es vorlesen kann. Dies ist in Fällen nützlich, in denen wir ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) verwenden, ohne dass entsprechender HTML-Text vorhanden ist, der in ein Label umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun so aussehen:

![Todo-App, die im Browser gerendert wird, wobei nur das neue Eingabefeld angezeigt wird](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die `application.hbs`-Datei erneut, sodass ihr Inhalt so aussieht:

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

![Todo-App, die im Browser gerendert wird, mit neuem Eingabefeld und vorhandenen Todos, - Kinokarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später werden wir es in eine vollständig interaktive App umwandeln.

Beim Blick auf den Code neben der gerenderten Todo-App gibt es eine Reihe von Möglichkeiten, wie wir entscheiden könnten, die UI aufzuteilen, aber planen wir, das HTML in die folgenden Komponenten zu zerlegen:

![Screenshot des Codes, annotiert, um zu zeigen, welche Teile des Codes in welche Komponente gehen werden](todos-ui-component-breakdown.png)

Die Komponentengruppierungen sind wie folgt:

- Die Haupteingabe / "new-todo" (rot im Bild)
- Der enthaltene Körper der Todo-Liste + der `mark-all-complete`-Button (lila im Bild)

  - Der `mark-all-complete`-Button, explizit aus unten genannten Gründen hervorgehoben (gelb im Bild)
  - Jedes Todo ist eine individuelle Komponente (grün im Bild)

- Der Footer (blau im Bild)

Etwas Merkwürdiges zu beachten ist, dass das `mark-all-complete`-Checkbox (gelb markiert), während es sich im "main"-Abschnitt befindet, neben dem "new-todo"-Eingabefeld gerendert wird. Dies liegt daran, dass das Standard-CSS das Checkbox + Label absolut positioniert und mit negativen Werten für oben und links neben das Eingabefeld verschiebt, anstatt es im "main"-Abschnitt zu platzieren.

![Betrachtung der Todo-App durch DevTools](todos-devtools-view.png)

## Verwenden des CLI, um unsere Komponenten für uns zu erstellen

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Individuelle Todo
- Footer

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Dazu:

1. Stoppen Sie den laufenden Server, indem Sie zum Terminal gehen und <kbd>Strg</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dadurch werden einige neue Dateien generiert, wie im resultierenden Terminalausgabe gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, Reaktionen auf Benutzerinteraktion usw. hinzufügen.

> [!NOTE]
> Die Datei `header.js` (als übersprungen angezeigt) dient zur Verbindung mit einer unterstützenden Glimmer Component Class, die wir momentan nicht benötigen, da diese zur Hinzufügung von Interaktivität und Zustandsmanipulation dienen. Standardmäßig generiert `generate component` vorlagenbasierte Komponenten, weil in großen Anwendungen vorlagenbasierte Komponenten den Großteil der Komponenten ausmachen.

`header-test.js` dient dem Schreiben automatisierter Tests, um sicherzustellen, dass unsere App im Laufe der Zeit weiterhin funktioniert, während wir Upgrades durchführen, Funktionen hinzufügen, umstrukturieren usw. Tests sind außerhalb des Umfangs dieses Tutorials, obwohl im Allgemeinen Tests während der Entwicklung implementiert werden sollten, anstatt danach, da sie sonst oft vergessen werden. Wenn Sie neugierig auf Tests sind oder wissen möchten, warum Sie automatisierte Tests haben möchten, schauen Sie sich das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir mit dem Hinzufügen von Code zu den Komponenten beginnen, lassen Sie uns das Grundgerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen einzeln in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie sehen nun Folgendes in Ihrem `todomvc/app/components`-Verzeichnis:

![Das App-Komponentenverzeichnis, das die erstellten Komponentenvorlagendateien zeigt](todos-components-directory.png)

Jetzt, da wir alle unsere Komponentenstrukturdateien haben, können wir den HTML-Code jeder Komponente aus der `application.hbs`-Datei ausschneiden und in jede dieser Komponenten einfügen und dann die `application.hbs` neu schreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die Datei `header.hbs` sollte aktualisiert werden, um den folgenden Inhalt zu enthalten:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. Die Datei `todo-list.hbs` sollte mit diesem Codeabschnitt aktualisiert werden:

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
   > Das einzige Nicht-HTML in dieser neuen `todo-list.hbs` ist die `<Todo />`-Komponentenaufruf. In Ember ähnelt ein Komponentenaufruf der Deklaration eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben, und die Namen werden in {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie später bei `<TodoList />` sehen werden. Der Inhalt der `todo.hbs`-Datei unten wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie das Folgende in die `todo.hbs`-Datei ein:

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

4. Die Datei `footer.hbs` sollte aktualisiert werden, um den folgenden Inhalt zu enthalten:

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

5. Schließlich sollten die Inhalte von `application.hbs` aktualisiert werden, sodass sie die entsprechenden Komponenten aufrufen, etwa so:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem Sie diese Änderungen vorgenommen haben, führen Sie erneut `npm start` in Ihrem Terminal aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App immer noch so aussieht wie vor der Umstrukturierung.

![Todo-App, die im Browser gerendert wird, mit neuem Todo-Eingabefeld und vorhandenen Todos, beide sagen Kinokarten kaufen](todos-components-render.png)

Beachten Sie, dass die Todo-Items beide "Buy Movie Tickets" sagen – das liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text darin hartcodiert ist. Wir werden im nächsten Artikel darauf eingehen, wie verschiedene Todo-Items angezeigt werden können!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umstrukturiert! Im nächsten Artikel werden wir beginnen, uns mit der Hinzufügung von Interaktivität in unsere Ember-Anwendung zu befassen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
