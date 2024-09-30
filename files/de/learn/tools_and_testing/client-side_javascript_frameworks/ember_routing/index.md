---
title: Routing in Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel lernen wir über **Routing**, oder auch URL-basiertes Filtern. Wir verwenden es, um für jede der drei Todo-Ansichten — "All", "Active" und "Completed" — eine einzigartige URL bereitzustellen.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird von großem Vorteil sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Implementieren von Routing in Ember zu erlernen.</td>
    </tr>
  </tbody>
</table>

## URL-basiertes Filtern

Ember verfügt über ein Routingsystem, das eng mit der Browser-URL integriert ist. Typischerweise möchten Sie beim Schreiben von Webanwendungen, dass die Seite durch die URL repräsentiert wird, damit der Benutzer im Falle eines Seitenneuladens nicht von dem Zustand der Web-App überrascht wird. Er kann direkt zu bedeutenden Ansichten der App verlinken.

Derzeit haben wir bereits die "All"-Seite, da wir momentan keine Filterung auf der Seite durchführen, mit der wir gearbeitet haben. Wir müssen sie jedoch ein wenig umorganisieren, um eine andere Ansicht für die "Active" und "Completed" Todos zu ermöglichen.

Eine Ember-Anwendung hat eine Standard-Route "application", die an die `app/templates/application.hbs`-Vorlage gebunden ist. Da diese Anwendungsvorlage der Einstiegspunkt für unsere Todo-App ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Erstellen der Routen

Lassen Sie uns beginnen, indem wir drei neue Routen erstellen: "Index", "Active" und "Completed". Dazu müssen Sie die folgenden Befehle in Ihrem Terminal im Wurzelverzeichnis Ihrer App eingeben:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien generiert, sondern auch eine bestehende Datei, `app/router.js`, aktualisiert haben. Sie enthält den folgenden Inhalt:

```js
import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("completed");
  this.route("active");
});
```

Die hervorgehobenen Zeilen wurden hinzugefügt, als die obigen 2. und 3. Befehle ausgeführt wurden.

`router.js` fungiert als "Sitemap" für Entwickler, um schnell zu sehen, wie die gesamte App strukturiert ist. Es zeigt Ember auch, wie es mit Ihrer Route interagieren soll, z. B. beim Laden von beliebigen Daten, beim Behandeln von Fehlern beim Laden dieser Daten oder beim Interpretieren dynamischer Teile der URL. Da unsere Daten statisch sind, werden wir nicht auf diese fortgeschrittenen Funktionen eingehen, aber wir werden sicherstellen, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, da "Index", wie bei der URL-Navigation und dem Laden von JavaScript-Modulen, ein spezielles Wort ist, das die Standardroute zum Rendern, Laden usw. anzeigt.

Um unsere alte Art des Renderns der TodoList-App anzupassen, müssen wir zuerst die TodoList-Komponentenaufruf von der Anwendungsvorlage durch einen `\{{outlet}}`-Aufruf ersetzen, was bedeutet, dass "jede Teilroute hier eingefügt wird".

Gehen Sie zu der Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

Mit

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`, `completed.hbs` und `active.hbs` Vorlagen (ebenfalls im Vorlagenverzeichnis zu finden) vorerst einfach den Aufruf der TodoList-Komponente eingeben.

Ersetzen Sie in jedem Fall

```hbs
\{{outlet}}
```

mit

```hbs
<TodoList />
```

Wenn Sie die App nun erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

sehen Sie genau dasselbe. An jeder URL wird die Vorlage, die dem spezifischen Pfad entspricht ("Active", "Completed" oder "Index"), die `<TodoList />`-Komponente rendern. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. Also haben wir unsere Routen an Ort und Stelle. Großartig!

Aber jetzt brauchen wir einen Weg, um zwischen jeder dieser Routen zu unterscheiden, damit sie das zeigen, was sie anzeigen sollen.

Gehen Sie zunächst einmal zurück zu unserer `todo-data.js`-Datei. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist einer, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie den folgenden unterhalb der vorhandenen Getter hinzu:

```js
get completed() {
  return this.todos.filter((todo) => todo.isCompleted);
}
```

## Modelle

Nun müssen wir Modelle zu unseren JavaScript-Routen-Dateien hinzufügen, damit wir leicht spezifische Datensätze zur Anzeige in diesen Modellen zurückgeben können. `model` ist ein Datenlade-Lebenszyklus-Hook. Für TodoMVC sind die Fähigkeiten von model nicht so wichtig für uns; Sie können im [Ember-Modell-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) mehr Informationen finden, wenn Sie tiefer eintauchen möchten. Wir gewähren auch Zugriff auf den Service, ähnlich wie wir es für die Komponenten getan haben.

### Das Modell der Index-Route

Aktualisieren Sie zunächst `todomvc/app/routes/index.js`, sodass es wie folgt aussieht:

```js
import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service("todo-data") todos;

  model() {
    let todos = this.todos;

    return {
      get allTodos() {
        return todos.all;
      },
    };
  }
}
```

Wir können nun die Datei `todomvc/app/templates/index.hbs` aktualisieren, so dass sie bei der Einbindung der `<TodoList />`-Komponente explizit mit dem verfügbaren Modell arbeitet, indem sie dessen `allTodos()`-Getter aufruft, um sicherzustellen, dass alle Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Modell der Completed-Route

Aktualisieren Sie als Nächstes `todomvc/app/routes/completed.js`, sodass es wie folgt aussieht:

```js
import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class CompletedRoute extends Route {
  @service("todo-data") todos;

  model() {
    let todos = this.todos;

    return {
      get completedTodos() {
        return todos.completed;
      },
    };
  }
}
```

Wir können nun die Datei `todomvc/app/templates/completed.hbs` aktualisieren, so dass sie bei der Einbindung der `<TodoList />`-Komponente explizit mit dem verfügbaren Modell arbeitet, indem sie dessen `completedTodos()`-Getter aufruft, um sicherzustellen, dass nur die abgeschlossenen Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Modell der Active-Route

Schließlich kümmern wir uns um unsere Active-Route. Beginnen Sie, indem Sie `todomvc/app/routes/active.js` aktualisieren, sodass es wie folgt aussieht:

```js
import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ActiveRoute extends Route {
  @service("todo-data") todos;

  model() {
    let todos = this.todos;

    return {
      get activeTodos() {
        return todos.incomplete;
      },
    };
  }
}
```

Wir können nun die Datei `todomvc/app/templates/active.hbs` aktualisieren, so dass sie bei der Einbindung der `<TodoList />`-Komponente explizit mit dem verfügbaren Modell arbeitet, indem sie dessen `activeTodos()`-Getter aufruft, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Routemodell-Hooks ein Objekt mit einem Getter zurückgeben, anstatt eines statischen Objekts oder einfach der statischen Liste von Todos (zum Beispiel `this.todos.completed`). Der Grund dafür ist, dass wir möchten, dass die Vorlage eine dynamische Referenz zur Todo-Liste hat, und wenn wir die Liste direkt zurückgeben würden, würden die Daten nie neu berechnet, was dazu führen würde, dass die Navigationen den Anschein erwecken, zu versagen / nicht tatsächlich zu filtern. Durch das Definieren eines Getters im Rückgabeobjekt aus den Modelldaten werden die Todos erneut abgefragt, sodass unsere Änderungen an der Todo-Liste in der dargestellten Liste angezeigt werden.

## Die Funktionsfähigkeit der Footer-Links herstellen

Unser Route-Feature ist nun voll funktionsfähig, aber wir können nicht von unserer App darauf zugreifen. Lassen Sie uns die Footer-Links aktivieren, damit das Klicken auf sie zu den gewünschten Routen führt.

Gehen Sie zurück zu `todomvc/app/components/footer.hbs` und finden Sie das folgende Markup-Stück:

```hbs
<a href="#">All</a>
<a href="#">Active</a>
<a href="#">Completed</a>
```

Aktualisieren Sie es zu

```hbs
<LinkTo @route="index">All</LinkTo>
<LinkTo @route="active">Active</LinkTo>
<LinkTo @route="completed">Completed</LinkTo>
```

`<LinkTo>` ist eine eingebaute Ember-Komponente, die alle Statusänderungen bei der Navigation zwischen Routen verwaltet, sowie eine "aktive" Klasse auf jeden Link setzt, der die URL entspricht, falls man den Wunsch hat, sie anders als inaktive Links zu gestalten.

## Aktualisieren der Todo-Anzeige innerhalb von TodoList

Eine kleine letzte Sache, die wir beheben müssen, ist, dass wir zuvor in `todomvc/app/components/todo-list.hbs` den todo-data Service direkt angesprochen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt wollen, dass unsere TodoList-Komponente eine gefilterte Liste zeigt, werden wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste von Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte jetzt vollständig funktionierende Links im Footer haben, die die Routen "Index"/Standard, "Active" und "Completed" anzeigen.

![Die Todo-Listen-App, die das Routing für alle, aktive und abgeschlossene Todos zeigt.](todos-navigation.gif)

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, gleichwertig mit der ursprünglichen [TodoMVC-App](https://todomvc.com/) ist, wie z. B. das Bearbeiten, Löschen und Speichern von Todos über Seitenneuladungen hinweg.

Um unsere fertige Ember-Implementierung zu sehen, laden Sie das abschließende App-Verzeichnis im Repository mit dem [Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) herunter oder sehen Sie sich hier die [live bereitgestellte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) an. Studieren Sie den Code, um mehr über Ember zu erfahren, und sehen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und einige Tipps zur Fehlerbehebung enthält.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
