---
title: Routing in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_routing
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

In diesem Artikel lernen wir über das **Routing**, oder wie es manchmal genannt wird, URL-basiertes Filtern. Wir verwenden es, um eine eindeutige URL für jede der drei Todo-Ansichten bereitzustellen: "Alle", "Aktiv" und "Erledigt".

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
          über Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > verfügen.
        </p>
        <p>
          Ein tiefergehendes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) ist äußerst vorteilhaft, da Ember stark auf sie angewiesen ist.
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

Ember kommt mit einem Routing-System, das eng mit der Browser-URL integriert ist. Typischerweise möchte man beim Schreiben von Webanwendungen die Seite durch die URL repräsentiert haben, damit, falls (aus welchen Gründen auch immer) die Seite aktualisiert werden muss, der Benutzer nicht vom Zustand der Web-App überrascht wird — sie können direkt zu wichtigen Ansichten der App verlinken.

Momentan haben wir bereits die "Alle"-Seite, da wir derzeit kein Filtern auf der Seite vornehmen, mit der wir gearbeitet haben, aber wir müssen sie etwas umorganisieren, um eine andere Ansicht für die "Aktiven" und "Erledigten" Todos zu behandeln.

Eine Ember-Anwendung verfügt über eine Standard-"Anwendungs"-Route, die an die `app/templates/application.hbs`-Vorlage gebunden ist. Da diese Anwendungsvorlage der Einstiegspunkt für unsere Todo-App ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Erstellen der Routen

Lassen Sie uns beginnen, indem wir drei neue Routen erstellen: "Index", "Aktiv" und "Erledigt". Dazu müssen Sie die folgenden Befehle in Ihrem Terminal im Stammverzeichnis Ihrer App eingeben:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien generiert, sondern auch eine vorhandene Datei aktualisiert haben, `app/router.js`. Sie enthält folgenden Inhalt:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die oben genannten Befehle 2 und 3 ausgeführt wurden.

`router.js` fungiert als eine "Sitemap" für Entwickler, um schnell sehen zu können, wie die gesamte App strukturiert ist. Es zeigt Ember auch, wie es mit Ihrer Route interagiert, z. B. beim Laden von beliebigen Daten, beim Behandeln von Fehlern beim Laden dieser Daten oder beim Interpretieren dynamischer URL-Segmente. Da unsere Daten statisch sind, werden wir keines dieser besonderen Features nutzen, aber wir stellen sicher, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, da "Index" wie bei der URL-Navigation und dem Laden von JavaScript-Modulen ein besonderes Wort ist, das die Standardroute zum Rendern, Laden usw. angibt.

Um unsere alte Methode der Darstellung der TodoList-App anzupassen, müssen wir zunächst die TodoList-Komponentenaufruf aus der Anwendungsvorlage durch einen `\{{outlet}}`-Aufruf ersetzen, der bedeutet „jede Unterroute wird hier geladen“.

Gehen Sie zur Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

durch

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`-, `completed.hbs`- und `active.hbs`-Vorlagen (ebenfalls im Vorlagenverzeichnis zu finden) vorerst einfach den Aufruf der TodoList-Komponente eingeben.

In jedem Fall ersetzen Sie

```hbs
\{{outlet}}
```

durch

```hbs
<TodoList />
```

Zu diesem Zeitpunkt, wenn Sie die App erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

sehen Sie genau das Gleiche. An jeder URL wird die Vorlage, die dem spezifischen Pfad ("Aktiv", "Erledigt" oder "Index") entspricht, die `<TodoList />`-Komponente rendern. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch die `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. Also haben wir unsere Routen an Ort und Stelle. Großartig!

Aber jetzt brauchen wir eine Möglichkeit, zwischen diesen Routen zu unterscheiden, damit sie das anzeigen, was sie sollen.

Zuerst kehren wir einmal mehr zu unserer Datei `todo-data.js` zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist einer, der nur die erledigten Todos zurückgibt. Fügen Sie den folgenden unter den vorhandenen Gettern hinzu:

```js
export default class TodoDataService extends Service {
  // …
  get completed() {
    return this.todos.filter((todo) => todo.isCompleted);
  }
  // …
}
```

## Modelle

Nun müssen wir Modelle zu unseren Route-JavaScript-Dateien hinzufügen, um uns so zu ermöglichen, bestimmte Datensätze einfach zurückzugeben, um diese in den Modellen anzuzeigen. `model` ist ein Datenlade-Lebenszyklus-Hook. Für TodoMVC sind die Möglichkeiten von model nicht so wichtig für uns; Sie können jedoch weitere Informationen im [Ember-Model-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden, wenn Sie tiefer einsteigen möchten. Wir stellen auch Zugriff auf den Service bereit, so wie wir es für die Komponenten taten.

### Das Index-Routenmodell

Aktualisieren Sie zunächst `todomvc/app/routes/index.js` so, dass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/index.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell, durch Aufruf ihres `allTodos()` Getters, erfolgt, um sicherzustellen, dass alle Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Erledigt-Routenmodell

Aktualisieren Sie nun `todomvc/app/routes/completed.js` so, dass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/completed.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell, durch Aufruf ihres `completedTodos()` Getters, erfolgt, um sicherzustellen, dass nur die erledigten Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Aktiv-Routenmodell

Schließlich für die Routen sortieren wir unsere active Route. Beginnen Sie mit der Aktualisierung von `todomvc/app/routes/active.js`, sodass es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/active.hbs` aktualisieren, sodass beim Einbinden der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell, durch Aufruf ihres `activeTodos()` Getters, erfolgt, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Routenmodell-Hooks ein Objekt mit einem Getter zurückgeben, anstatt ein statisches Objekt oder einfach die statische Liste der Todos (zum Beispiel `this.todos.completed`). Der Grund dafür ist, dass wir möchten, dass die Vorlage einen dynamischen Bezug zur Todo-Liste hat, und wenn wir die Liste direkt zurückgeben würden, würde die Daten nie neu berechnet werden, was dazu führen würde, dass die Navigationen nicht funktionieren / tatsächlich nicht filtern würden. Durch das Definieren eines Getters im Rückgabeobjekt der Modelldaten werden die Todos neu nachgeschlagen, sodass unsere Änderungen an der Todo-Liste in der gerenderten Liste dargestellt werden.

## Zugriff auf die Footer-Links

Unsere Routenfunktionalität ist jetzt vollständig implementiert, aber wir können sie nicht von unserer App aus erreichen. Lassen Sie uns die Footer-Links aktivieren, sodass ein Klick auf sie zu den gewünschten Routen führt.

Gehen Sie zurück zu `todomvc/app/components/footer.hbs` und suchen Sie das folgende Markup:

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

`<LinkTo>` ist eine eingebauter Ember-Komponente, die alle Zustandsänderungen beim Navigieren von Routen behandelt und eine "aktive" Klasse auf jeden Link setzt, der mit der URL übereinstimmt, falls es den Wunsch gibt, ihn anders als inaktive Links zu gestalten.

## Aktualisieren der Todo-Anzeige in TodoList

Eine kleine letzte Sache, die wir korrigieren müssen, ist dass wir vorher innerhalb von `todomvc/app/components/todo-list.hbs` direkt auf den todo-data Service zugegriffen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt möchten, dass unsere TodoList-Komponente eine gefilterte Liste anzeigt, möchten wir ein Argument zur TodoList-Komponente übergeben, das die "aktuelle Liste der Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte jetzt voll funktionsfähige Links im Footer haben, die die Routen "Index"/Standard, "Aktiv" und "Erledigt" anzeigen.

![Die Todo-Listen-App, die zeigt, dass das Routing für alle, aktive und erledigte Todos funktioniert.](todos-navigation.gif)

## Zusammenfassung

Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, mit der originalen [TodoMVC-App](https://todomvc.com/) gleichwertig ist, wie z. B. das Bearbeiten, Löschen und das Speichern von Todos über Seitenaktualisierungen hinweg.

Um unsere fertige Ember-Implementierung zu sehen, werfen Sie einen Blick in den abgeschlossenen App-Ordner im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) oder sehen Sie sich die [live bereitgestellte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) an. Studieren Sie den Code, um mehr über Ember zu lernen, und sehen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und einige Tipps zur Fehlersuche bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}
