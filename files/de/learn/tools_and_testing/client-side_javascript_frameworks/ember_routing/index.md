---
title: Routing in Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel lernen wir über **Routing**, oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir verwenden es, um eine einzigartige URL für jede der drei Todo-Ansichten bereitzustellen — "All", "Active" und "Completed".

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
          Kenntnis über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Befehlszeileninterpreter</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis der modernen JavaScript-Funktionen (wie Klassen,
          Module usw.) wird von großem Nutzen sein, da Ember stark davon Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Implementieren von Routing in Ember lernen.</td>
    </tr>
  </tbody>
</table>

## URL-basiertes Filtern

Ember wird mit einem Routing-System geliefert, das eng mit der Browser-URL integriert ist. Typischerweise möchte man beim Erstellen von Webanwendungen, dass die Seite durch die URL repräsentiert wird, sodass der Nutzer nicht überrascht ist vom Zustand der Webanwendung, wenn die Seite (aus welchen Gründen auch immer) neu geladen werden muss — sie können direkt auf wichtige Ansichten der Anwendung verlinken.

Derzeit haben wir bereits die "All"-Seite, da wir aktuell keine Filterung auf der Seite vornehmen, mit der wir bisher gearbeitet haben. Wir müssen sie jedoch ein wenig reorganisieren, um eine andere Ansicht für die "Active" und "Completed" Todos zu behandeln.

Eine Ember-Anwendung hat eine Standard-"application"-Route, die mit der Vorlage `app/templates/application.hbs` verbunden ist. Da diese Anwendungsvorlage der Einstiegspunkt unserer Todo-App ist, müssen wir einige Änderungen vornehmen, um Routing zu ermöglichen.

## Die Routen erstellen

Lassen Sie uns damit beginnen, drei neue Routen zu erstellen: "Index", "Active" und "Completed". Dazu müssen Sie die folgenden Befehle in Ihr Terminal eingeben, im Stammverzeichnis Ihrer App:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Der zweite und dritte Befehl sollten nicht nur neue Dateien generiert, sondern auch eine bestehende Datei aktualisiert haben, `app/router.js`. Sie enthält die folgenden Inhalte:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die oberen zweiten und dritten Befehle ausgeführt wurden.

`router.js` verhält sich als "Sitemap" für Entwickler, um schnell zu sehen, wie die gesamte App strukturiert ist. Es sagt Ember auch, wie mit Ihrer Route zu interagieren ist, z.B. beim Laden von Daten oder beim Interpretieren dynamischer Segmente der URL. Da unsere Daten statisch sind, werden wir auf keine dieser ausgefallenen Features eingehen, aber wir werden trotzdem sicherstellen, dass die Route die minimal erforderlichen Daten liefert, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, weil "Index" ein spezielles Wort ist, das die Standardroute zum Rendern, Laden usw. anzeigt.

Um unsere alte Methode zum Rendern der TodoList-App anzupassen, müssen wir zuerst die TodoList-Komponentenaufruf aus der Anwendungsvorlage durch einen `\{{outlet}}`-Aufruf ersetzen, was bedeutet: "Jede Sub-Route wird hier an Stelle gerendert".

Gehen Sie zu der Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

durch

```hbs
\{{outlet}}
```

Als Nächstes können wir in unseren `index.hbs`, `completed.hbs` und `active.hbs` Vorlagen (ebenfalls im Vorlagenverzeichnis zu finden) vorerst einfach den TodoList-Komponentenaufruf eintragen.

In jedem Fall, ersetzen Sie

```hbs
\{{outlet}}
```

durch

```hbs
<TodoList />
```

Wenn Sie nun die App erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

werden Sie genau dasselbe sehen. An jeder URL rendert die Vorlage, die dem spezifischen Pfad entspricht ("Active", "Completed" oder "Index"), die `<TodoList />`-Komponente. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch das `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, welches in diesem Fall `application.hbs` ist. Wir haben also unsere Routen eingerichtet. Großartig!

Aber jetzt brauchen wir einen Weg, um zwischen diesen Routen zu differenzieren, damit sie zeigen, was sie anzeigen sollen.

Zunächst einmal kehren wir noch einmal zu unserer `todo-data.js`-Datei zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist der, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie das Folgende unter den bestehenden Gettern hinzu:

```js
get completed() {
  return this.todos.filter((todo) => todo.isCompleted);
}
```

## Modelle

Nun müssen wir Modelle zu unseren JavaScript-Dateien von Routen hinzufügen, um es einfacher zu machen, spezifische Datensätze anzuzeigen. `model` ist ein Datenladekreislauf-Hook. Für TodoMVC sind die Fähigkeiten von Modell für uns nicht so wichtig; Sie können mehr Informationen im [Ember model guide](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden, wenn Sie tiefer einsteigen möchten. Wir bieten auch Zugriff auf den Service, wie wir es für die Komponenten gemacht haben.

### Das Index-Routenmodell

Aktualisieren Sie zuerst `todomvc/app/routes/index.js`, sodass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/index.hbs` aktualisieren, sodass sie die `<TodoList />`-Komponente explizit mit dem verfügbaren Modell inkludiert, und ihren `allTodos()`-Getter aufruft, um sicherzustellen, dass alle Todos gezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Completed-Routenmodell

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

Wir können jetzt die Datei `todomvc/app/templates/completed.hbs` aktualisieren, sodass sie die `<TodoList />`-Komponente explizit mit dem verfügbaren Modell inkludiert und ihren `completedTodos()`-Getter aufruft, um sicherzustellen, dass nur die abgeschlossenen Todos gezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Active-Routenmodell

Schließlich bei den Routen, lassen Sie uns unsere Active-Route in Ordnung bringen. Beginnen Sie damit, `todomvc/app/routes/active.js` zu aktualisieren, sodass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/active.hbs` aktualisieren, sodass sie die `<TodoList />`-Komponente explizit mit dem verfügbaren Modell inkludiert und ihren `activeTodos()`-Getter aufruft, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos gezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Routenmodell-Hooks ein Objekt mit einem Getter zurückgeben, anstatt eines statischen Objekts oder einfach nur der statischen Liste von Todos (zum Beispiel `this.todos.completed`). Der Grund dafür ist, dass wir möchten, dass die Vorlage eine dynamische Referenz zur Todo-Liste hat, und wenn wir die Liste direkt zurückgeben würden, würden die Daten nie neu berechnet werden, was dazu führen würde, dass die Navigationen als nicht funktionierend erscheinen/zum Filtern nicht tatsächlich führen. Indem wir einen Getter im Rückgabeobjekt der Modelldaten definieren, werden die Todos erneut gesucht, sodass unsere Änderungen an der Todo-Liste in der gerenderten Liste dargestellt werden.

## Die Fußzeilenlinks aktivieren

Unsere Routenfunktionalität ist nun vollständig eingerichtet, aber wir können nicht auf sie von unserer App aus zugreifen. Lassen Sie uns die Fußzeilenlinks aktivieren, damit das Klicken darauf zu den gewünschten Routen führt.

Gehen Sie zu `todomvc/app/components/footer.hbs` zurück und finden Sie das folgende Markup-Stück:

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

`<LinkTo>` ist eine eingebaute Ember-Komponente, die alle Zustandsänderungen beim Navigieren zwischen Routen handhabt, sowie eine "aktive" Klasse auf jeden Link setzt, der mit der URL übereinstimmt, falls der Wunsch besteht, ihn anders als inaktive Links zu gestalten.

## Aktualisieren der Todo-Anzeige innerhalb von TodoList

Eine kleine letzte Sache, die wir beheben müssen, ist, dass wir vorher innerhalb von `todomvc/app/components/todo-list.hbs` direkt auf den todo-data-Service zugegriffen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt möchten, dass unsere TodoList-Komponente eine gefilterte Liste anzeigt, möchten wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste von Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte jetzt vollständig funktionierende Links in der Fußzeile haben, die die "Index"/Standard-, "Active"- und "Completed"-Routen anzeigen.

![Die Todo-Listen-App zeigt das Routing für alle, aktive und abgeschlossene Todos.](todos-navigation.gif)

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, gleichwertig mit der originalen [TodoMVC-App](https://todomvc.com/) ist, wie das Bearbeiten, Löschen und Speichern von Todos über Seitenaktualisierungen hinweg.

Um unsere fertige Ember-Implementierung zu sehen, schauen Sie sich den fertigen App-Ordner im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) an oder sehen Sie sich die [live bereitgestellte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) hier an. Studieren Sie den Code, um mehr über Ember zu lernen, und schauen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und einige Fehlerbehebungstipps bietet.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
