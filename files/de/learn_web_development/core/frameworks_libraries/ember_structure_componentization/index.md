---
title: Ember-App-Struktur und Komponentisierung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel werden wir direkt damit beginnen, die Struktur unserer TodoMVC Ember-App zu planen, das HTML dafür hinzuzufügen und dann diese HTML-Struktur in Komponenten zu zerlegen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst hilfreich sein, da Ember intensiv von diesen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur dann in Komponenten zerlegt.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der TodoMVC-App planen

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu, um die Struktur und Semantik unserer TodoMVC-App zu planen.

Das HTML der Landingpage unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits, und ihr Inhalt sieht derzeit folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine von einem Ember-Addon bereitgestellte Komponente, die die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir das erste Mal zu unserem Server unter `localhost:4200` navigierten.

Das wollen wir jedoch nicht. Stattdessen möchten wir die Struktur der TodoMVC-App darin haben. Löschen Sie dazu den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

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

> **Note:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet assistiven Technologien ein Label zum Gebrauch — beispielsweise, damit ein Bildschirmleser es vorlesen kann. Dies ist besonders nützlich, wenn ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) verwendet wird, ohne dass ein entsprechender HTML-Text existiert, der in ein Label umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu aufbauen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun so aussehen:

![todo app im Browser gerendert mit nur dem neuen todo Eingabefeld](todos-initial-render.png)

Es erfordert nicht viel Aufwand, damit unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussieht. Aktualisieren Sie die `application.hbs`-Datei erneut, sodass ihr Inhalt folgendermaßen aussieht:

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

![todo app im Browser gerendert mit neuem todo Eingabefeld und vorhandenen todos - Kinokarten kaufen und zum Film gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten zerlegen; später werden wir daraus eine vollständig interaktive App machen.

Beim Betrachten des Codes neben der gerenderten Todo-App gibt es verschiedene Möglichkeiten, wie wir die Benutzeroberfläche aufteilen könnten. Lassen Sie uns planen, das HTML in die folgenden Komponenten zu zerlegen:

![Code-Screenshot mit Anmerkungen, um zu zeigen, welche Teile des Codes in welche Komponente eingehen](todos-ui-component-breakdown.png)

Die Komponenten-Gruppierungen sind wie folgt:

- Die Haupteingabe / "new-todo" (rot im Bild)
- Der enthaltende Körper der Todo-Liste + der `mark-all-complete`-Button (lila im Bild)

  - Der `mark-all-complete button`, explizit hervorgehoben aus unten angegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine individuelle Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Eine merkwürdige Anmerkung ist, dass das `mark-all-complete`-Kontrollkästchen (gelb markiert), obwohl es sich im "main"-Bereich befindet, neben der "new-todo"-Eingabe gerendert wird. Dies liegt daran, dass das Standard-CSS die Checkbox + das Label mit negativen oberen und linken Werten absolut positioniert, um sie neben die Eingabe zu verschieben, anstatt sie im "main"-Bereich zu belassen.

![todo app im Devtools-Fenster betrachtet](todos-devtools-view.png)

## Mit der CLI unsere Komponenten für uns erstellen

Um unsere App darzustellen, wollen wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Footer

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Dazu:

1. Stoppen Sie den laufenden Server, indem Sie im Terminal <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dadurch werden einige neue Dateien generiert, wie im resultierenden Terminal-Output gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in die wir die HTML-Struktur nur für diese Komponente einfügen. Später werden wir die erforderliche dynamische Funktionalität hinzufügen, wie Datenbindungen, Reaktionen auf Benutzerinteraktion usw.

> [!NOTE]
> Die `header.js` Datei (angezeigt als übersprungen) ist zur Verbindung mit einer unterstützenden Glimmer-Komponentenklasse gedacht, die wir momentan nicht benötigen, da sie für das Hinzufügen von Interaktivität und Zustandsmanipulationen sind. Standardmäßig erzeugt `generate component` nur Komponenten-Vorlagen, da in großen Anwendungen reine Vorlagenkomponenten die Mehrheit der Komponenten ausmachen.

`header-test.js` ist für das Schreiben automatisierter Tests gedacht, um sicherzustellen, dass unsere App im Laufe der Zeit weiterhin funktioniert, wenn wir aktualisieren, Funktionen hinzufügen, umstrukturieren usw. Tests sind nicht Gegenstand dieses Tutorials, obwohl grundsätzlich Tests während der Entwicklung und nicht danach implementiert werden sollten, da sie sonst leicht vergessen werden. Wenn Sie neugierig auf Tests sind oder wissen möchten, warum Sie automatisierte Tests haben sollten, schauen Sie sich das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir mit der Hinzufügung von Komponentencode beginnen, lassen Sie uns das Grundgerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Jetzt sehen Sie Folgendes in Ihrem `todomvc/app/components`-Verzeichnis:

![Das Verzeichnis der Komponenten der App, das die von uns erstellten Komponentenvorlagendateien zeigt](todos-components-directory.png)

Nun, da wir alle unsere Komponentenstrukturdateien haben, können wir das HTML für jede Komponente aus der `application.hbs`-Datei ausschneiden und in diese Komponenten einfügen und dann die `application.hbs` umschreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die `header.hbs` Datei sollte aktualisiert werden, um Folgendes zu enthalten:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. `todo-list.hbs` sollte mit diesem Codeblock aktualisiert werden:

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
   > Das einzige nicht-HTML in dieser neuen `todo-list.hbs` ist der `<Todo />` Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie die Deklaration eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben, und die Namen sind im {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie es später bei `<TodoList />` sehen werden. Die Inhalte der `todo.hbs` Datei unten werden `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

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

4. `footer.hbs` sollte folgendermaßen aktualisiert werden:

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

5. Schließlich sollten die Inhalte von `application.hbs` aktualisiert werden, um die entsprechenden Komponenten aufzurufen, und zwar so:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem diese Änderungen vorgenommen wurden, starten Sie `npm start` in Ihrem Terminal erneut und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App weiterhin so aussieht wie vor der Umstrukturierung.

![todo app im Browser gerendert mit neuem todo Eingabefeld und vorhandenen todos, beide mit dem Text "Kinokarten kaufen"](todos-components-render.png)

Beachten Sie, wie die Todo-Items beide "Kinokarten kaufen" sagen — das liegt daran, dass dieselbe Komponente zweimal aufgerufen wird, und der Todo-Text hartcodiert ist. In dem nächsten Artikel werden wir untersuchen, wie man verschiedene Todo-Items anzeigt!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben unser HTML erfolgreich in Komponenten umstrukturiert! Im nächsten Artikel werden wir beginnen, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
