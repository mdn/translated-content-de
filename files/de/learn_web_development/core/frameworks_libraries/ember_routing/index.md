---
title: Routing in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_routing
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel lernen wir das **Routing** kennen, oder das URL-basierte Filtern, wie es manchmal genannt wird. Wir verwenden es, um für jede der drei Todo-Ansichten — "Alle", "Aktiv" und "Abgeschlossen" — eine eindeutige URL bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
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
      <td>Lernen, wie Routing in Ember implementiert wird.</td>
    </tr>
  </tbody>
</table>

## URL-basiertes Filtern

Ember kommt mit einem Router-System, das eng mit der Browser-URL integriert ist. In der Regel möchten Sie beim Erstellen von Webanwendungen, dass die Seite durch die URL repräsentiert wird, sodass der Benutzer bei einem Seiten-Refresh (aus welchen Gründen auch immer) nicht über den Zustand der Web-App überrascht ist — sie können direkt auf wesentliche Ansichten der App verlinken.

Momentan haben wir bereits die "Alle" Seite, da wir derzeit keine Filterung auf der Seite vornehmen, an der wir gearbeitet haben, aber wir müssen sie ein wenig neu organisieren, um eine andere Ansicht für die "Aktiven" und "Abgeschlossenen" Todos zu laden.

Eine Ember-Anwendung hat eine Standard-"application"-Route, die mit der Vorlage `app/templates/application.hbs` verknüpft ist. Da diese Anwendungsvorlage der Einstiegspunkt unserer Todo-App ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Erstellen der Routen

Lassen Sie uns mit der Erstellung von drei neuen Routen beginnen: "Index", "Active" und "Completed". Dazu müssen Sie die folgenden Befehle in Ihrem Terminal im Stammverzeichnis Ihrer App eingeben:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien erzeugt haben, sondern auch eine bestehende Datei, `app/router.js`, aktualisiert haben. Sie enthält folgenden Inhalt:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die zweiten und dritten Befehle oben ausgeführt wurden.

`router.js` fungiert als "Sitemap" für Entwickler, um schnell sehen zu können, wie die gesamte App strukturiert ist. Es teilt Ember auch mit, wie mit Ihrer Route zu interagieren ist, wie z.B. beim Laden von Daten, Umgang mit Ladefehlern oder Interpretation dynamischer Segmente der URL. Da unsere Daten statisch sind, werden wir uns nicht mit diesen erweiterten Funktionen beschäftigen, aber wir werden trotzdem sicherstellen, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, weil "Index" wie bei der URL-Navigation und dem JavaScript-Modul-Loading ein spezielles Wort ist, das die Standardroute zum Rendern oder Laden kennzeichnet.

Um unsere alte Methode zum Rendern der TodoList-App anzupassen, müssen wir zunächst die TodoList-Komponentenaufruf in der Anwendungsvorlage durch einen `\{{outlet}}`-Aufruf ersetzen, was bedeutet "jede Subroute wird hier an dieser Stelle gerendert".

Gehen Sie zur Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

Durch

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`-, `completed.hbs`- und `active.hbs`-Vorlagen (ebenfalls im Vorlagenverzeichnis zu finden) vorerst einfach den TodoList-Komponentenaufruf einfügen.

Ersetzen Sie in jedem Fall

```hbs
\{{outlet}}
```

durch

```hbs
<TodoList />
```

An diesem Punkt, wenn Sie die App erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

sehen Sie genau dasselbe. An jeder URL rendert die Vorlage, die dem spezifischen Pfad entspricht ("Active", "Completed" oder "Index"), die `<TodoList />`-Komponente. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. So haben wir unsere Routen eingerichtet. Großartig!

Aber jetzt brauchen wir eine Möglichkeit, zwischen diesen Routen zu unterscheiden, damit sie das anzeigen, was sie anzeigen sollen.

Zuerst kehren Sie noch einmal zu unserer `todo-data.js`-Datei zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist einer, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie den folgenden Getter unter den vorhandenen Gettern hinzu:

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

Nun müssen wir Modelle zu unseren Routen-JavaScript-Dateien hinzufügen, um leicht spezifische Datensätze zurückzugeben, die in diesen Modellen angezeigt werden sollen. `model` ist ein Lebenszyklus-Hook zum Laden von Daten. Für TodoMVC sind die Fähigkeiten von model für uns nicht so wichtig; weitere Informationen finden Sie im [Ember-Modell-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/), wenn Sie tiefer einsteigen möchten. Wir bieten auch Zugriff auf den Dienst, wie wir es für die Komponenten getan haben.

### Das Index-Routenmodell

Zunächst aktualisieren Sie `todomvc/app/routes/index.js`, damit es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/index.hbs` aktualisieren, sodass sie beim Einfügen der `<TodoList />`-Komponente dies explizit mit dem verfügbaren Modell tut, indem dessen `allTodos()`-Getter aufgerufen wird, um sicherzustellen, dass alle Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

In

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Abgeschlossen-Routenmodell

Aktualisieren Sie nun `todomvc/app/routes/completed.js`, damit es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/completed.hbs` aktualisieren, sodass sie beim Einfügen der `<TodoList />`-Komponente dies explizit mit dem verfügbaren Modell tut, indem dessen `completedTodos()`-Getter aufgerufen wird, um sicherzustellen, dass nur die abgeschlossenen Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

In

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Aktiv-Routenmodell

Und schließlich, für die Routen, lassen Sie uns unsere Aktiv-Route in Ordnung bringen. Beginnen Sie mit der Aktualisierung von `todomvc/app/routes/active.js`, damit es wie folgt aussieht:

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

Wir können nun die Datei `todomvc/app/templates/active.hbs` aktualisieren, sodass sie beim Einfügen der `<TodoList />`-Komponente dies explizit mit dem verfügbaren Modell tut, indem dessen `activeTodos()`-Getter aufgerufen wird, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

In

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Modell-Hooks für die Route ein Objekt mit einem Getter anstelle eines statischen Objekts zurückgeben, oder einfach nur die statische Liste der Todos (zum Beispiel `this.todos.completed`). Der Grund dafür ist, dass wir möchten, dass die Vorlage einen dynamischen Bezug auf die Todo-Liste hat, und wenn wir die Liste direkt zurückgeben würden, würden die Daten nie neu berechnet, was zu dem Eindruck führen würde, dass die Navigation fehlgeschlagen ist oder nicht richtig filtert. Indem wir einen Getter im Rückgabeobjekt der Modell-Daten definieren, werden die Todos erneut abgerufen, sodass unsere Änderungen an der Todo-Liste in der angezeigten Liste dargestellt werden.

## Die Footer-Links aktivieren

Unsere Routing-Funktionalität ist nun vollständig, aber wir können nicht von unserer App darauf zugreifen. Lassen Sie uns die Footer-Links aktivieren, damit sie beim Klicken auf die gewünschten Routen führen.

Gehen Sie zurück zu `todomvc/app/components/footer.hbs` und finden Sie das folgende Markup:

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

`<LinkTo>` ist eine eingebaute Ember-Komponente, die alle Statusänderungen beim Navigieren zwischen Routen verwaltet und eine "aktive" Klasse auf jedem Link setzt, der mit der URL übereinstimmt, falls der Wunsch besteht, ihn anders als inaktive Links zu stylen.

## Die Todo-Anzeige innerhalb von TodoList aktualisieren

Eine kleine letzte Sache, die wir beheben müssen, ist, dass wir bisher innerhalb von `todomvc/app/components/todo-list.hbs` den `todo-data`-Dienst direkt zugegriffen und alle Todos durchgegangen sind, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt möchten, dass unsere TodoList-Komponente eine gefilterte Liste zeigt, sollten wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste der Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte nun voll funktionsfähige Links im Footer haben, die die Routen "Index"/Standard, "Active" und "Completed" anzeigen.

![Die Todo-Listen-App, die das Routing für alle, aktive und abgeschlossene Todos zeigt.](todos-navigation.gif)

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, mit der ursprünglichen [TodoMVC-App](https://todomvc.com/) auf Augenhöhe ist, wie das Bearbeiten, Löschen und Speichern von Todos über Seiten-Reloads hinweg.

Um unsere fertige Ember-Implementierung zu sehen, schauen Sie sich das fertige App-Verzeichnis im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) an oder sehen Sie sich die hier veröffentlichte [Live-Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) an. Studieren Sie den Code, um mehr über Ember zu erfahren, und überprüfen Sie auch den nächsten Artikel, der Links zu weiteren Ressourcen und Ratschläge zur Fehlerbehebung bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}
