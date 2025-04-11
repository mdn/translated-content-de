---
title: Ember-App-Struktur und Komponentisierung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel planen wir die Struktur unserer TodoMVC Ember-App, fügen das HTML hinzu und zerlegen diese HTML-Struktur dann in Komponenten.

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
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a> haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen, Module usw.) wird äußerst nützlich sein, da Ember stark darauf angewiesen ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Ember-App strukturiert und diese Struktur in Komponenten zerlegt.
      </td>
    </tr>
  </tbody>
</table>

## Planung des Layouts der TodoMVC-App

Im letzten Artikel haben wir ein neues Ember-Projekt eingerichtet und dann unsere CSS-Stile hinzugefügt und konfiguriert. An diesem Punkt fügen wir etwas HTML hinzu, um die Struktur und Semantik unserer TodoMVC-App zu planen.

Das Landing-Page-HTML unserer Anwendung ist in `app/templates/application.hbs` definiert. Diese Datei existiert bereits und ihr Inhalt sieht derzeit folgendermaßen aus:

```hbs
\{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
\{{!-- Feel free to remove this! --}}

\{{outlet}}
```

`<WelcomePage />` ist eine von einem Ember-Addon bereitgestellte Komponente, die die Standard-Willkommensseite rendert, die wir im vorherigen Artikel gesehen haben, als wir zuerst unseren Server unter `localhost:4200` aufgerufen haben.

Das wollen wir jedoch nicht. Stattdessen möchten wir, dass es die Struktur der TodoMVC-App enthält. Beginnen Sie damit, der Inhalt von `application.hbs` zu löschen und ihn mit folgendem Code zu ersetzen:

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

> **Hinweis:** [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bietet assistiven Technologien ein Label zur Nutzung — zum Beispiel damit ein Bildschirmlesegerät es vorlesen kann. Das ist nützlich in Fällen, in denen wir ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) verwenden, ohne dass entsprechender HTML-Text vorhanden ist, der als Label verwendet werden könnte.

Wenn Sie `application.hbs` speichern, wird der zuvor gestartete Entwicklungsserver die App automatisch neu bauen und den Browser aktualisieren. Die gerenderte Ausgabe sollte jetzt so aussehen:

![todo app gerendert im Browser mit nur dem neuen todo Eingabefeld angezeigt](todos-initial-render.png)

Es erfordert nicht viel Aufwand, unser HTML wie eine funktionsreiche To-Do-Listen-App aussehen zu lassen. Aktualisieren Sie die `application.hbs`-Datei erneut, sodass ihr Inhalt folgendermaßen aussieht:

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

Die gerenderte Ausgabe sollte jetzt wie folgt sein:

![todo app gerendert im Browser mit neuem todo Eingabefeld und bestehenden todos angezeigt, - Kinokarten kaufen und zum Kino gehen](todos-with-todo-items.png)

Das sieht ziemlich vollständig aus, aber denken Sie daran, dass dies nur ein statischer Prototyp ist. Jetzt müssen wir unseren HTML-Code in dynamische Komponenten aufteilen; später machen wir daraus eine vollständig interaktive App.

Beim Blick auf den Code neben der gerenderten todo App gibt es eine Reihe von Möglichkeiten, wie wir entscheiden könnten, die UI aufzuteilen, aber lassen Sie uns planen, das HTML in die folgenden Komponenten aufzuteilen:

![Code-Screenshot annotiert, um zu zeigen, welche Teile des Codes in welche Komponente gehen](todos-ui-component-breakdown.png)

Die Komponenten-Gruppierungen sind wie folgt:

- Das Haupteingabefeld / "new-todo" (rot im Bild)
- Der enthaltene Körper der Todo-Liste + der `mark-all-complete` Button (lila im Bild)

  - Der `mark-all-complete` Button, explizit hervorgehoben aus den unten gegebenen Gründen (gelb im Bild)
  - Jedes Todo ist eine einzelne Komponente (grün im Bild)

- Die Fußzeile (blau im Bild)

Eine merkwürdige Beobachtung ist, dass das `mark-all-complete` Kontrollkästchen (gelb markiert), obwohl es im "Haupt"abschnitt ist, neben dem "new-todo" Eingabefeld gerendert wird. Das liegt daran, dass das Standard-CSS das Kontrollkästchen + Label absolut positioniert mit negativen oberen und linken Werten, um es neben das Eingabefeld zu verschieben, anstatt es im "Haupt"abschnitt zu haben.

![todo app durchsucht mit Devtools](todos-devtools-view.png)

## Nutzung der CLI zum Erstellen unserer Komponenten

Um unsere App darzustellen, möchten wir 4 Komponenten erstellen:

- Header
- Liste
- Einzelnes Todo
- Fußzeile

Um eine Komponente zu erstellen, verwenden wir den Befehl `ember generate component`, gefolgt vom Namen der Komponente. Lassen Sie uns zuerst die Header-Komponente erstellen. Um dies zu tun:

1. Beenden Sie den laufenden Server, indem Sie im Terminal <kbd>Strg</kbd> + <kbd>C</kbd> drücken.
2. Geben Sie den folgenden Befehl in Ihr Terminal ein:

   ```bash
   ember generate component header
   ```

   Diese Befehle werden einige neue Dateien generieren, wie in der resultierenden Terminalausgabe gezeigt:

   ```plain
   installing component
     create app/components/header.hbs
     skip app/components/header.js
     tip to add a class, run `ember generate component-class header`
   installing component-test
     create tests/integration/components/header-test.js
   ```

`header.hbs` ist die Template-Datei, in der wir die HTML-Struktur nur für diese Komponente einfügen werden. Später werden wir die erforderliche dynamische Funktionalität wie Datenbindungen, Reaktionen auf Benutzerinteraktionen usw. hinzufügen.

> [!NOTE]
> Die `header.js` Datei (als übersprungen angezeigt) dient zur Anbindung an eine unterstützende Glimmer Component-Klasse, die wir derzeit nicht benötigen, da sie zur Interaktivität und Zustandsmanipulation verwendet werden. Standardmäßig generiert `generate component` Template-Only-Komponenten, da in großen Anwendungen template-only Komponenten die Mehrheit der Komponenten bilden.

`header-test.js` dient dem Schreiben automatisierter Tests, um sicherzustellen, dass unsere App im Laufe der Zeit weiterhin funktioniert, wenn wir Upgrades durchführen, Funktionen hinzufügen, refaktorisieren usw. Tests liegen außerhalb des Umfangs dieses Tutorials, obwohl Tests im Allgemeinen während der Entwicklung implementiert werden sollten, anstatt danach, da sie sonst dazu neigen, vergessen zu werden. Wenn Sie neugierig auf Tests sind oder warum Sie automatisierte Tests haben möchten, schauen Sie sich das [offizielle Ember-Tutorial zu Tests](https://guides.emberjs.com/release/tutorial/part-1/automated-testing/) an.

Bevor wir irgendeinen Komponentencode hinzufügen, lassen Sie uns das Grundgerüst für die anderen Komponenten erstellen. Geben Sie die folgenden Zeilen nacheinander in Ihr Terminal ein:

```bash
ember generate component todo-list
ember generate component todo
ember generate component footer
```

Sie werden nun folgendes in Ihrem `todomvc/app/components` Verzeichnis sehen:

![Das Verzeichnis der App-Komponenten, das die von uns erstellten Template-Dateien der Komponenten zeigt](todos-components-directory.png)

Jetzt, da wir alle unsere Komponenten-Strukturdateien haben, können wir das HTML für jede Komponente aus der `application.hbs` Datei ausschneiden und in jede dieser Komponenten einfügen und dann die `application.hbs` so umschreiben, dass sie unseren neuen Abstraktionen entspricht.

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
   > Das einzige Nicht-HTML in diesem neuen `todo-list.hbs` ist die `<Todo />`-Komponentenaufruf. In Ember ist ein Komponentenaufruf ähnlich wie die Deklaration eines HTML-Elements, aber der erste Buchstabe beginnt mit einem Großbuchstaben und die Namen werden in {{Glossary("camel_case", "Upper Camel Case")}} geschrieben, wie Sie später mit `<TodoList />` sehen werden. Der Inhalt der `todo.hbs` Datei unten wird `<Todo />` auf der gerenderten Seite ersetzen, wenn unsere Anwendung geladen wird.

3. Fügen Sie das Folgende in die `todo.hbs` Datei ein:

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

5. Schließlich sollten die Inhalte von `application.hbs` so aktualisiert werden, dass sie die entsprechenden Komponenten aufrufen, wie folgt:

   ```hbs
   <section class="todoapp">
     <h1>todos</h1>

     <Header />
     <TodoList />
     <Footer />
   </section>
   ```

6. Nachdem Sie diese Änderungen vorgenommen haben, führen Sie erneut `npm start` in Ihrem Terminal aus und gehen Sie dann zu `http://localhost:4200`, um sicherzustellen, dass die Todo-App immer noch so aussieht wie vor dem Refactoring.

![todo app gerendert im Browser mit neuem todo Eingabefeld und bestehenden todos angezeigt, beide sagen Kinokarten kaufen](todos-components-render.png)

Beachten Sie, wie die Todo-Items beide "Kinokarten kaufen" sagen — das liegt daran, dass dieselbe Komponente zweimal aufgerufen wird und der Todo-Text hart codiert ist. Wir werden uns im nächsten Artikel damit befassen, wie unterschiedliche Todo-Items angezeigt werden!

## Zusammenfassung

Großartig! Alles sieht aus, wie es sollte. Wir haben unser HTML erfolgreich in Komponenten refaktoriert! Im nächsten Artikel beginnen wir damit, Interaktivität zu unserer Ember-Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_getting_started","Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
