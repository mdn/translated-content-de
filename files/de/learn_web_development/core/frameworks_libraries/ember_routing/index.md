---
title: Routing in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_routing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel erfahren Sie mehr über **Routing**, auch bekannt als URL-basiertes Filtern. Wir werden es nutzen, um für jede der drei Todo-Ansichten - "All", "Active" und "Completed" - eine eindeutige URL bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird zumindest empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind, sowie Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen, Module, etc.) wird von großem Nutzen sein, da Ember sie intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Implementieren von Routing in Ember zu lernen.</td>
    </tr>
  </tbody>
</table>

## URL-basiertes Filtern

Ember verfügt über ein Routing-System, das eng in die Browser-URL integriert ist. Typischerweise möchte man beim Schreiben von Webanwendungen, dass die Seite durch die URL repräsentiert wird, sodass, wenn die Seite (aus irgendeinem Grund) aktualisiert werden muss, der Nutzer nicht von dem Zustand der Webanwendung überrascht wird — sie können direkt zu wichtigen Ansichten der Anwendung verlinken.

Zurzeit haben wir bereits die "All"-Seite, da wir derzeit kein Filtern auf der Seite durchführen, an der wir gearbeitet haben. Wir müssen sie jedoch ein wenig umstrukturieren, um eine andere Ansicht für die "Active" und "Completed" Todos zu behandeln.

Eine Ember-Anwendung hat eine Standard-"application" Route, die an die `app/templates/application.hbs` Vorlage gebunden ist. Da diese Anwendungs-Vorlage der Einstiegspunkt für unsere Todo-Anwendung ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Erstellen der Routen

Beginnen wir damit, drei neue Routen zu erstellen: "Index", "Active" und "Completed". Dazu müssen Sie die folgenden Befehle in Ihr Terminal eingeben, innerhalb des Stammverzeichnisses Ihrer App:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien erstellt, sondern auch eine bestehende Datei `app/router.js` aktualisiert haben. Sie enthält den folgenden Inhalt:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die oben genannten zweiten und dritten Befehle ausgeführt wurden.

`router.js` fungiert als eine "Sitemap" für Entwickler, sodass sie schnell sehen können, wie die gesamte App strukturiert ist. Es weist Ember auch an, wie mit Ihrer Route zu interagieren ist, z.B. beim Laden beliebiger Daten, beim Umgang mit Fehlern beim Laden dieser Daten oder beim Interpretieren dynamischer Segmente der URL. Da unsere Daten statisch sind, werden wir keine dieser ausgefallenen Funktionen verwenden, aber wir werden dennoch sicherstellen, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, da "Index" wie bei der URL-Navigation und beim Laden von JavaScript-Modulen ein spezielles Wort ist, das die Standardroute zum Rendern und Laden angibt.

Um unsere alte Methode zum Rendern der TodoList-App anzupassen, müssen wir zunächst den Aufruf der TodoList-Komponente aus der Anwendungs-Vorlage durch einen `\{{outlet}}`-Aufruf ersetzen, was bedeutet, "jede Unterroute wird hier an dieser Stelle gerendert".

Gehen Sie zur Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

mit

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`, `completed.hbs` und `active.hbs` Vorlagen (die sich ebenfalls im Vorlagenverzeichnis befinden) vorerst den Aufruf der TodoList-Komponente einfügen.

In jedem Fall ersetzen Sie

```hbs
\{{outlet}}
```

mit

```hbs
<TodoList />
```

Wenn Sie die App jetzt erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

sehen Sie genau dasselbe. An jeder URL wird die Vorlage, die dem spezifischen Pfad entspricht ("Active", "Completed" oder "Index"), die `<TodoList />` Komponente rendern. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch den `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. Also haben wir unsere Routen eingerichtet. Großartig!

Aber nun benötigen wir eine Möglichkeit, zwischen diesen Routen zu unterscheiden, damit sie zeigen, was sie zeigen sollen.

Kehren Sie zunächst noch einmal zu unserer `todo-data.js` Datei zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist einer, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie das folgende unter den vorhandenen Gettern hinzu:

```js
get completed() {
  return this.todos.filter((todo) => todo.isCompleted);
}
```

## Models

Jetzt müssen wir Modelle zu unseren Routen-JavaScript-Dateien hinzufügen, um uns das einfache Zurückgeben spezifischer Datensätze zur Anzeige in diesen Modellen zu ermöglichen. `model` ist ein Datenlade-Lebenszyklus-Hook. Für TodoMVC sind die Fähigkeiten von model für uns nicht so wichtig; weitere Informationen finden Sie im [Ember Model-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/), wenn Sie tiefer eintauchen möchten. Wir bieten auch Zugriff auf den Service, wie wir es für die Komponenten gemacht haben.

### Das Modell der Indexroute

Zunächst aktualisieren Sie `todomvc/app/routes/index.js`, sodass es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/index.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />` Komponente dies explizit mit dem verfügbaren Model geschieht, wobei deren `allTodos()` Getter aufgerufen wird, um sicherzustellen, dass alle Todos angezeigt werden.

In dieser Datei ändern Sie

```hbs
<TodoList />
```

Zu

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Modell der Completed-Route

Aktualisieren Sie nun `todomvc/app/routes/completed.js`, sodass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/completed.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />` Komponente dies explizit mit dem verfügbaren Modell geschieht, wobei deren `completedTodos()` Getter aufgerufen wird, um sicherzustellen, dass nur die abgeschlossenen Todos angezeigt werden.

In dieser Datei ändern Sie

```hbs
<TodoList />
```

Zu

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Modell der Active-Route

Schließlich sortieren wir unsere Active-Route. Beginnen Sie damit, `todomvc/app/routes/active.js` so zu aktualisieren, dass es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/active.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />` Komponente dies explizit mit dem verfügbaren Modell geschieht, wobei deren `activeTodos()` Getter aufgerufen wird, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

In dieser Datei ändern Sie

```hbs
<TodoList />
```

Zu

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Modell-Hooks der Routen ein Objekt mit einem Getter zurückgeben, statt eines statischen Objekts oder mehr nur der statischen Liste von Todos (zum Beispiel `this.todos.completed`). Der Grund dafür ist, dass wir möchten, dass die Vorlage eine dynamische Referenz zur Todo-Liste hat, und wenn wir die Liste direkt zurückgäben, würden die Daten niemals neu berechnet, was dazu führen würde, dass die Navigationen zu fehlgeschlagenem/ nicht tatsächlich gefiltertem Verhalten führen. Indem wir einen Getter im Rückgabeobjekt der Modelldaten definieren, werden die Todos neu nachgeschlagen, sodass unsere Änderungen an der Todo-Liste in der gerenderten Liste dargestellt werden.

## Die Footer-Links zum Laufen bringen

Unser Routing funktioniert jetzt, aber wir können nicht von unserer App darauf zugreifen. Lassen Sie uns die Footer-Links aktivieren, damit ein Klick darauf zu den gewünschten Routen führt.

Gehen Sie zurück zu `todomvc/app/components/footer.hbs` und finden Sie den folgenden Markup-Teil:

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

`<LinkTo>` ist eine integrierte Ember-Komponente, die alle Statusänderungen beim Navigieren durch Routen verarbeitet und auch eine "active" Klasse auf jedem Link setzt, der mit der URL übereinstimmt, falls Sie ihn anders als inaktive Links gestalten möchten.

## Die Todo-Anzeige in TodoList aktualisieren

Eine kleine letzte Sache, die wir beheben müssen, ist, dass wir zuvor in `todomvc/app/components/todo-list.hbs` auf den todo-data Service direkt zugegriffen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir nun möchten, dass unsere TodoList-Komponente eine gefilterte Liste anzeigt, werden wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste von Todos" repräsentiert, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das ist es für dieses Tutorial! Ihre App sollte jetzt vollständig funktionierende Links im Footer haben, die die "Index"/Standard-, "Active"- und "Completed"-Routen anzeigen.

![Die Todo-Listen-App, die das funktionierende Routing für alle, aktive und abgeschlossene Todos zeigt.](todos-navigation.gif)

## Zusammenfassung

Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, mit der ursprünglichen [TodoMVC-App](https://todomvc.com/) auf Augenhöhe ist, wie z.B. das Bearbeiten, Löschen und Beibehalten von Todos beim Neuladen der Seite.

Um unsere fertige Ember-Implementierung zu sehen, schauen Sie sich den fertigen App-Ordner im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) an oder sehen Sie hier die [live bereitgestellte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/). Studieren Sie den Code, um mehr über Ember zu lernen, und schauen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und einige Tipps zur Fehlerbehebung bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}
