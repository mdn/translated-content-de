---
title: Ember-App-Struktur und Komponentenbildung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel werden wir uns mit der Planung der Struktur unserer TodoMVC Ember-App beschäftigen, das HTML dafür hinzufügen und diese HTML-Struktur dann in Komponenten aufteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Wissen über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Befehlseingabeprompt</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember sie intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur dann in Komponenten aufteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu und planen die Struktur und Semantik unserer TodoMVC-App.

Das HTML der Startseite unserer Anwendung ist in `app/templates/application.hbs` definiert. Dies existiert bereits, und der Inhalt sieht derzeit so aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine Komponente, die von einem Ember-Addon bereitgestellt wird und die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir zuerst zu unserem Server unter `localhost:4200` navigierten.

Das wollen wir jedoch nicht. Stattdessen möchten wir, dass es die Struktur der TodoMVC-App enthält. Um zu beginnen, löschen Sie den Inhalt von `application.hbs` und ersetzen Sie ihn durch Folgendes:

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

> **Hinweis:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet eine Bezeichnung für assistive Technologien — beispielsweise, damit ein Screenreader sie vorlesen kann. Dies ist in solchen Fällen nützlich, in denen wir ein [`<input>`](/de/docs/Web/HTML/Element/input) ohne entsprechendes HTML-Text verwenden, der in eine Bezeichnung umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu aufbauen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun so aussehen:

![todo app rendered in the browser with only the new todo input field showing](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die `application.hbs`-Datei erneut, damit ihr Inhalt so aussieht:

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

Die gerenderte Ausgabe sollte nun folgendermaßen aussehen:

![todo app rendered in the browser with new todo input field and existing todos showing, - buy movie tickets and go to movie](todos-with-todo-items.png)

Dies sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später werden wir ihn in eine vollständig interaktive App verwandeln.

Wenn man den Code neben der gerenderten Todo-App betrachtet, gibt es eine Reihe von Möglichkeiten, wie wir uns entscheiden könnten, das UI aufzuteilen, aber lasst uns planen, das HTML in die folgenden Komponenten zu unterteilen:

![code screenshot annotated to show what parts of the code will go into which component](todos-ui-component-breakdown.png)

Die Gruppierungen der Komponenten sind wie folgt:

- Die Haupt-Eingabe / "new-todo" (rot im Bild)
- Der umgebende Korpus der Todo-Liste + die `mark-all-complete`-Schaltfläche (lila im Bild)

  - Die `mark-all-complete`-Schaltfläche, explizit hervorgehoben aus unten gegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine individuelle Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Etwas merkwürdiges zu beachten ist, dass das `mark-all-complete`-Checkbox-Feld (gelb markiert), während es sich im Hauptbereich befindet, neben der "new-todo"-Eingabe gerendert wird. Dies liegt daran, dass das Standard-CSS das Checkbox-Feld + Label mit negativen Top- und Left-Werten absolut positioniert, um es neben die Eingabe zu verschieben, anstatt es innerhalb des Hauptbereichs zu platzieren.

![todo app looked at through devtools](todos-devtools-view.png)

## Verwenden der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Individuelles Todo
- Fußzeile

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Gehen Sie dazu wie folgt vor:

1. Stoppen Sie den laufenden Server, indem Sie im Terminal <kbd>Strg</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Diese werden einige neue Dateien generieren, wie im resultierenden Terminal-Ausgang gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, Reaktion auf Benutzerinteraktion usw. hinzufügen.

> [!NOTE]
> Die Datei `header.js` (als übersprungen angezeigt) dient zur Verbindung mit einer unterstützenden Glimmer-Komponentenklasse, die wir derzeit nicht benötigen, da sie zur Hinzufügung von Interaktivität und Zustandsmanipulation verwendet werden. Standardmäßig generiert `generate component` nur Komponenten mit Vorlagen, da in großen Anwendungen Komponenten mit Vorlagen letztendlich die Mehrheit der Komponenten ausmachen.

`header-test.js` ist für das Schreiben automatisierter Tests gedacht, um sicherzustellen, dass unsere App im Laufe der Zeit bei Aktualisierungen, Hinzufügungen von Funktionen, Refaktorierungen usw. weiterhin funktioniert. Tests sind außerhalb des Umfangs dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten, andernfalls neigt man dazu, sie zu vergessen. Wenn Sie neugierig auf Tests sind oder warum Sie automatisierte Tests haben sollten, sehen Sie sich das [offizielle Ember-Tutorial zum Testen](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir irgendwelchen Komponenten-Code hinzufügen, lassen Sie uns das Gerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie sehen jetzt das Folgende in Ihrem `todomvc/app/components`-Verzeichnis:

![the app components directory, showing the component template files we've created](todos-components-directory.png)

Jetzt, da wir alle unsere Komponenten-Strukturdateien haben, können wir den HTML-Code für jede Komponente aus der `application.hbs`-Datei ausschneiden und in jede dieser Komponenten einfügen und dann das `application.hbs` umschreiben, um unsere neuen Abstraktionen zu reflektieren.

1. Die `header.hbs`-Datei sollte mit dem folgenden Inhalt aktualisiert werden:

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
   > Das einzige Nicht-HTML in diesem neuen `todo-list.hbs` ist der `<Todo />`-Komponentenaufruf. In Ember ähnelt ein Komponentenaufruf der Deklaration eines HTML-Elements, jedoch beginnt der erste Buchstabe mit einem Großbuchstaben und die Namen sind in [Upper Camel Case](/de/docs/Glossary/camel_case) geschrieben, wie Sie später bei `<TodoList />` sehen werden. Der Inhalt der `todo.hbs`-Datei unten ersetzt `<Todo />` auf der gerenderten Seite, wenn unsere Anwendung geladen wird.

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

4. `footer.hbs` sollte mit dem folgenden Inhalt aktualisiert werden:

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

5. Schließlich sollte der Inhalt von `application.hbs` so aktualisiert werden, dass er die entsprechenden Komponenten aufruft:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem diese Änderungen vorgenommen wurden, führen Sie erneut `npm start` in Ihrem Terminal aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App weiterhin so aussieht wie vor der Umstrukturierung.

![todo app rendered in the browser with new todo input field and existing todos showing, both saying buy movie tickets](todos-components-render.png)

Bemerken Sie, wie die To-Do-Elemente beide "Buy Movie Tickets" sagen — dies liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text fest darin codiert ist. Wir werden uns im nächsten Artikel mit dem Anzeigen verschiedener To-Do-Elemente befassen!

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben erfolgreich unser HTML in Komponenten umstrukturiert! Im nächsten Artikel beginnen wir damit, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
