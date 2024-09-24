---
title: Ember-App-Struktur und Komponentenbildung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel beginnen wir direkt mit der Planung der Struktur unserer TodoMVC Ember-App, fügen das HTML dafür ein und unterteilen diese HTML-Struktur anschließend in Komponenten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module etc.) wird äußerst vorteilhaft sein, da Ember stark von ihnen
          Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man eine Ember-App strukturiert und diese Struktur dann in Komponenten aufteilt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu und planen die Struktur und Semantik unserer TodoMVC-App.

Das HTML der Startseite unserer Anwendung wird in `app/templates/application.hbs` definiert. Diese Datei existiert bereits und ihr Inhalt sieht derzeit folgendermaßen aus:

```hbs
\{{!-- Das folgende Component zeigt Ember's standardmäßige Willkommensnachricht an. --}}
<WelcomePage />
\{{!-- Sie können dies gerne entfernen! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine Komponente, bereitgestellt von einem Ember-Addon, das die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir erstmals unseren Server auf `localhost:4200` besucht haben.

Wir wollen dies jedoch nicht. Stattdessen möchten wir, dass es die Struktur der TodoMVC-App enthält. Zu Beginn löschen Sie den Inhalt von `application.hbs` und ersetzen ihn durch Folgendes:

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

> **Hinweis:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bietet eine Bezeichnung für assistive Technologien - zum Beispiel für einen Screenreader, der den Text vorliest. Dies ist in Fällen nützlich, in denen wir ein [`<input>`](/de/docs/Web/HTML/Element/input) verwenden, das keinen entsprechenden HTML-Text hat, der in eine Bezeichnung umgewandelt werden könnte.

Wenn Sie `application.hbs` speichern, wird der vorher gestartete Entwicklungsserver die App automatisch neu erstellen und den Browser aktualisieren. Die gerenderte Ausgabe sollte nun folgendermaßen aussehen:

![Todo-App im Browser gerendert mit nur dem neuen Todo-Eingabefeld sichtbar](todos-initial-render.png)

Es erfordert nicht viel Aufwand, um unser HTML wie eine voll funktionsfähige To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die `application.hbs` erneut, sodass ihr Inhalt so aussieht:

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

Die gerenderte Ausgabe sollte jetzt wie folgt aussehen:

![Todo-App im Browser gerendert mit neuem Todo-Eingabefeld und vorhandenen Todos - Filmkarten kaufen und ins Kino gehen](todos-with-todo-items.png)

Dies sieht ziemlich komplett aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Nun müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später machen wir daraus eine voll interaktive App.

Beim Betrachten des Codes neben der gerenderten Todo-App gibt es verschiedene Möglichkeiten, wie wir die Benutzeroberfläche aufteilen könnten, aber planen wir, das HTML in folgende Komponenten aufzuteilen:

![Code-Screenshot, der zeigt, welche Teile des Codes in welche Komponente gehen werden](todos-ui-component-breakdown.png)

Die Component-Gruppierungen sind folgende:

- Die Haupt-Eingabe / "new-todo" (rot im Bild)
- Der enthaltene Körper der Todoliste + der `mark-all-complete` Button (lila im Bild)

  - Der `mark-all-complete` Button, explizit hervorgehoben aus im Folgenden angegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine individuelle Komponente (grün im Bild)

- Der Footer (blau im Bild)

Etwas Merkwürdiges zu beachten ist, dass das `mark-all-complete` Kontrollkästchen (gelb markiert), während es sich im „main“-Abschnitt befindet, neben dem „new-todo“-Eingabefeld gerendert wird. Dies liegt daran, dass das Standard-CSS die Checkbox + Label mit negativen Top- und Left-Werten absolut positioniert, um sie neben den Eingabebereich zu verschieben, anstatt sie im „main“-Abschnitt zu platzieren.

![Todo-App durch Entwicklertools angesehen](todos-devtools-view.png)

## Nutzung der CLI, um unsere Komponenten für uns zu erstellen

Um unsere App zu repräsentieren, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Footer

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Erstellen wir zuerst die Header-Komponente. Gehen Sie dazu wie folgt vor:

1. Stoppen Sie den laufenden Server, indem Sie zum Terminal gehen und <kbd>Ctrl</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Dadurch werden einige neue Dateien generiert, wie im resultierenden Terminalausgabe angezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Vorlagendatei, in die wir die HTML-Struktur nur für diese Komponente aufnehmen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, das Reagieren auf Benutzerinteraktionen usw. hinzufügen.

> [!NOTE]
> Die `header.js` Datei (als übersprungen angezeigt) ist für die Verbindung zu einer unterstützenden Glimmer Component Class, die wir momentan nicht benötigen, da sie zum Hinzufügen von Interaktivität und Zustandsmanipulation gedacht sind. Standardmäßig generiert `generate component` vorlagenbasierte Komponenten, da in großen Anwendungen vorlagenbasierte Komponenten die Mehrheit der Komponenten ausmachen.

`header-test.js` ist zum Schreiben von automatisierten Tests, um sicherzustellen, dass unsere App weiterhin funktioniert, während wir Upgrades, Funktionserweiterungen und Refaktorisierungen durchführen. Testen liegt außerhalb des Rahmens dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten und nicht danach, da sie sonst oft vergessen werden. Wenn Sie neugierig auf Tests oder darüber sind, warum Sie automatisierte Tests haben sollten, sehen Sie sich das [offizielle Ember-Tutorial zum Testen](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir anfangen, jeglichen Komponenten-Code hinzuzufügen, lassen Sie uns das Gerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie sehen nun Folgendes in Ihrem `todomvc/app/components` Verzeichnis:

![Das App-Komponenten-Verzeichnis, das die von uns erstellten Komponentenvorlagendateien zeigt](todos-components-directory.png)

Jetzt, da wir alle unsere Komponentenstrukturdateien haben, können wir den HTML-Code für jede Komponente aus der `application.hbs` Datei ausschneiden und in jede dieser Komponenten einfügen und dann `application.hbs` neu schreiben, um unsere neuen Abstraktionen widerzuspiegeln.

1. Die `header.hbs` Datei sollte aktualisiert werden, um Folgendes zu enthalten:

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
   > Das einzige Nicht-HTML in diesem neuen `todo-list.hbs` ist der `<Todo />` Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie die Deklaration eines HTML-Elements, jedoch beginnt der erste Buchstabe mit einem Großbuchstaben, und die Namen werden im {{Glossary("camel_case", "upper camel case")}} geschrieben, wie Sie es später bei `<TodoList />` sehen werden. Der Inhalt der `todo.hbs` Datei unten ersetzt `<Todo />` auf der gerenderten Seite, wenn unsere Anwendung geladen wird.

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

5. Schließlich sollten die Inhalte von `application.hbs` aktualisiert werden, sodass sie die entsprechenden Komponenten aufrufen, wie folgt:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Mit diesen Änderungen führen Sie erneut `npm start` in Ihrem Terminal aus und gehen dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App nach der Umstrukturierung immer noch so aussieht wie zuvor.

![Todo-App im Browser gerendert mit neuem Todo-Eingabefeld und vorhandenen Todos, beide sagen Filmkarten kaufen](todos-components-render.png)

Beachten Sie, wie die Todo-Items beide "Buy Movie Tickets" sagen - das liegt daran, dass die gleiche Komponente zweimal aufgerufen wird und der Todo-Text fest kodiert ist. Wir werden uns im nächsten Artikel ansehen, wie verschiedene Todo-Items angezeigt werden.

## Zusammenfassung

Großartig! Alles sieht so aus, wie es sollte. Wir haben unser HTML erfolgreich in Komponenten umstrukturiert! Im nächsten Artikel werden wir uns damit befassen, unserer Ember-Anwendung Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
