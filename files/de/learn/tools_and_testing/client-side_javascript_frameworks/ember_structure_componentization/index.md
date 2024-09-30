---
title: Ember App-Struktur und Komponentisierung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel planen wir die Struktur unserer TodoMVC-Ember-App, fügen das HTML hinzu und unterteilen diese HTML-Struktur in Komponenten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen vertraut sind und Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >
          besitzen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen, Module usw.) ist äußerst vorteilhaft, da Ember sie intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur in Komponenten unterteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu und planen die Struktur und Semantik unserer TodoMVC-App.

Das HTML der Landing-Page unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits und ihr Inhalt sieht derzeit folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine Komponente, die von einem Ember-Addon bereitgestellt wird und die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir erstmals zu unserem Server unter `localhost:4200` navigierten.

Das möchten wir jedoch nicht. Stattdessen soll es die Struktur der TodoMVC-App enthalten. Beginnen Sie damit, den Inhalt von `application.hbs` zu löschen und ihn durch Folgendes zu ersetzen:

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

> **Note:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet eine Beschriftung, die für unterstützende Technologien genutzt werden kann - zum Beispiel für einen Screenreader zum Vorlesen. Dies ist nützlich in Fällen, in denen wir ein [`<input>`](/de/docs/Web/HTML/Element/input) ohne entsprechendes HTML-Text verwenden, das in eine Beschriftung umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der Entwicklungsserver, den Sie zuvor gestartet haben, die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun so aussehen:

![todo app wird im Browser gerendert, nur das neue todo Eingabefeld wird angezeigt](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML wie eine voll funktionsfähige To-do-Listen-App aussehen zu lassen. Aktualisieren Sie die Datei `application.hbs` erneut, damit ihr Inhalt folgendermaßen aussieht:

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

![todo app im Browser gerendert mit neuem Todo-Eingabefeld und vorhandenen Todos - Kinokarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Nun müssen wir unseren HTML-Code in dynamische Komponenten unterteilen; später werden wir daraus eine voll interaktive App machen.

Wenn wir den Code neben der gerenderten Todo-App betrachten, gibt es eine Reihe von Möglichkeiten, wie wir die Benutzeroberfläche aufteilen könnten, aber lassen Sie uns den Plan verfolgen, das HTML in die folgenden Komponenten zu unterteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente eingefügt werden](todos-ui-component-breakdown.png)

Die Komponentengruppierungen sind wie folgt:

- Die Haupteingabe / "new-todo" (rot im Bild)
- Der enthaltene Körper der Todo-Liste + die `mark-all-complete` Schaltfläche (lila im Bild)

  - Die `mark-all-complete Schaltfläche`, explizit hervorgehoben aus unten angegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine einzelne Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Etwas Seltsames, das zu beachten ist, ist, dass das `mark-all-complete`-Kontrollkästchen (markiert in gelb), obwohl es sich im "Haupt"-Abschnitt befindet, neben der "new-todo"-Eingabe gerendert wird. Dies liegt daran, dass das Standard-CSS das Kontrollkästchen + Label mit negativen Top- und Left-Werten absolut positioniert, um es neben die Eingabe zu verschieben, anstatt es innerhalb des "Haupt"-Abschnitts zu platzieren.

![todo app durch Devtools betrachtet](todos-devtools-view.png)

## Verwendung der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App zu repräsentieren, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Footer

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Erstellen wir zuerst die Header-Komponente. Dazu:

1. Stoppen Sie den laufenden Server, indem Sie zum Terminal gehen und <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dadurch werden einige neue Dateien generiert, wie in der resultierenden Terminalausgabe gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später fügen wir die erforderliche dynamische Funktionalität wie Datenbindungen, Reaktionen auf Benutzerinteraktionen usw. hinzu.

> [!NOTE]
> Die `header.js`-Datei (als übersprungen angezeigt) dient zur Verbindung mit einer unterstützenden Glimmer Component Class, die wir momentan nicht benötigen, da sie für die Interaktivität und Zustandsmanipulation gedacht sind. Standardmäßig generiert `generate component` nur Template-Komponenten, da in großen Anwendungen Template-Komponenten den Großteil der Komponenten ausmachen.

`header-test.js` ist für das Schreiben automatisierter Tests gedacht, um sicherzustellen, dass unsere App im Laufe der Zeit weiterhin funktioniert, während wir Erweiterungen, Funktionen und Refaktorierungen hinzufügen. Testing liegt außerhalb des Umfangs dieses Tutorials, obwohl Testing im Allgemeinen bereits bei der Entwicklung implementiert werden sollte, anstatt nachträglich, da es sonst oft in Vergessenheit gerät. Wenn Sie sich für Testing interessieren oder wissen möchten, warum Sie automatisierte Tests haben sollten, schauen Sie sich das [offizielle Ember-Tutorial zum Testing](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir irgendeinen Komponentencode hinzufügen, erstellen wir das Gerüst für die anderen Komponenten. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Nun sehen Sie Folgendes in Ihrem `todomvc/app/components` Verzeichnis:

![Das App-Komponentenverzeichnis, das die von uns erstellten Komponentenvorlagendateien zeigt](todos-components-directory.png)

Jetzt, da wir alle unsere Komponentendateien haben, können wir das HTML für jede Komponente aus der `application.hbs` Datei ausschneiden und in jede dieser Komponenten einfügen, und dann die `application.hbs` neu schreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die `header.hbs` Datei sollte folgendermaßen aktualisiert werden:

   ```html
   <input
     class="new-todo"
     aria-label="What needs to be done?"
     placeholder="What needs to be done?"
     autofocus />
   ```

2. `todo-list.hbs` sollte mit diesem Codeausschnitt aktualisiert werden:

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
   > Das einzige nicht-HTML in diesem neuen `todo-list.hbs` ist die `<Todo />` Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie die Deklaration eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben und die Namen werden im [Upper Camel Case](/de/docs/Glossary/camel_case) geschrieben, wie Sie es später bei `<TodoList />` sehen werden. Der Inhalt der `todo.hbs` Datei unten wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie Folgendes in die `todo.hbs` Datei ein:

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

5. Schließlich sollten die Inhalte von `application.hbs` so aktualisiert werden, dass sie die entsprechenden Komponenten aufrufen:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Mit diesen Änderungen führen Sie erneut `npm start` in Ihrem Terminal aus und gehen dann zu `http://localhost:4200`, um sicherzustellen, dass die todo app immer noch genauso aussieht wie vor dem Refaktorieren.

![todo app im Browser gerendert mit neuem Todo-Eingabefeld und vorhandenen Todos, die beide "Kinokarten kaufen" sagen](todos-components-render.png)

Beachten Sie, dass die Todo-Elemente beide "Kinokarten kaufen" sagen - dies liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text hartcodiert ist. In dem nächsten Artikel werden wir uns damit beschäftigen, wie man unterschiedliche Todo-Elemente anzeigt!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben unser HTML erfolgreich in Komponenten umstrukturiert! Im nächsten Artikel werden wir beginnen, unserem Ember-Projekt Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
