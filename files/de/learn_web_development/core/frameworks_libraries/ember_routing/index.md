---
title: Routing in Ember
slug: Learn_web_development/Core/Frameworks_libraries/Ember_routing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel lernen wir über **Routing** oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir nutzen es, um eine einzigartige URL für jede der drei Todo-Ansichten bereitzustellen — "Alle", "Aktiv" und "Abgeschlossen".

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kern-
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Konsole/Command Line</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember intensiv von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Routing in Ember zu implementieren.</td>
    </tr>
  </tbody>
</table>

## URL-basiertes Filtern

Ember wird mit einem Routingsystem geliefert, das eng mit der Browser-URL integriert ist. Typischerweise möchten Sie bei der Erstellung von Webanwendungen, dass die Seite durch die URL repräsentiert wird, damit falls (aus irgendeinem Grund) die Seite aktualisiert werden muss, der Nutzer nicht vom Status der Webapplikation überrascht wird — sie können direkt auf wichtige Ansichten der App verlinken.

Momentan haben wir bereits die "Alle"-Seite, da wir derzeit kein Filtern auf der Seite haben, an der wir gearbeitet haben. Wir müssen sie jedoch etwas umorganisieren, um eine andere Ansicht für die "Aktive" und "Abgeschlossene" Todos zu handhaben.

Eine Ember-Anwendung hat eine Standard-"Anwendungs"-Route, die mit der `app/templates/application.hbs` Vorlage verbunden ist. Da diese Anwendungsvorlage der Einstiegspunkt unserer Todo-App ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Die Routen erstellen

Beginnen wir mit der Erstellung von drei neuen Routen: "Index", "Aktiv" und "Abgeschlossen". Dazu müssen Sie die folgenden Befehle in Ihrem Terminal im Stammverzeichnis Ihrer App eingeben:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien generiert haben, sondern auch eine bestehende Datei, `app/router.js`, aktualisiert haben. Sie enthält den folgenden Inhalt:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die 2. und 3. Befehle oben ausgeführt wurden.

`router.js` verhält sich wie eine "Sitemap" für Entwickler, um schnell sehen zu können, wie die gesamte App strukturiert ist. Es sagt Ember auch, wie mit Ihrer Route zu interagieren ist, z.B. beim Laden von Daten, beim Umgang mit Fehlern während des Ladens dieser Daten oder beim Interpretieren dynamischer Segmente der URL. Da unsere Daten statisch sind, werden wir auf keine dieser fortschrittlichen Funktionen eingehen, aber wir stellen dennoch sicher, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, weil "Index" wie bei der URL-Navigation und dem Laden von JavaScript-Modulen ein spezielles Wort ist, das die Standardroute zum Rendern, Laden usw. angibt.

Um unsere alte Methode zum Rendern der TodoList-App anzupassen, müssen wir zuerst den Aufruf der TodoList-Komponente aus der Anwendungs-Vorlage durch einen `\{{outlet}}`-Aufruf ersetzen, was bedeutet: "jede Unterroute wird hier platziert gerendert".

Gehen Sie zur Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

mit

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`, `completed.hbs` und `active.hbs` Vorlagen (die ebenfalls im Vorlagenverzeichnis zu finden sind) vorerst einfach den TodoList-Komponentenaufruf eingeben.

Ersetzen Sie in jedem Fall

```hbs
\{{outlet}}
```

mit

```hbs
<TodoList />
```

Zu diesem Zeitpunkt, wenn Sie die App erneut ausprobieren und eine der drei Routen besuchen

`localhost:4200 localhost:4200/active localhost:4200/completed`

sehen Sie genau dasselbe. An jeder URL rendert die Vorlage, die dem spezifischen Pfad entspricht ("Aktiv", "Abgeschlossen" oder "Index"), die `<TodoList />` Komponente. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch die `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. Also haben wir unsere Routen an Ort und Stelle. Großartig!

Aber jetzt brauchen wir einen Weg, um zwischen diesen Routen zu unterscheiden, damit sie das anzeigen, was sie sollen.

Zuerst kehren wir noch einmal zu unserer `todo-data.js` Datei zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der fehlende Getter ist einer, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie den folgenden unten zu den vorhandenen Gettern hinzu:

```js
get completed() {
  return this.todos.filter((todo) => todo.isCompleted);
}
```

## Modelle

Jetzt müssen wir unseren Routinen JavaScript-Dateien Modelle hinzufügen, um spezifische Datensätze in diesen Modellen einfach zurückzugeben. `model` ist ein Datenladelebenszyklus-Hook. Für TodoMVC sind die Fähigkeiten von `model` nicht so wichtig für uns; Sie können weitere Informationen im [Ember-Modell-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden, falls Sie tiefer einsteigen möchten. Wir bieten auch Zugriff auf den Service, wie wir es für die Komponenten getan haben.

### Das Indexroutenmodell

Aktualisieren Sie zunächst `todomvc/app/routes/index.js`, damit es wie folgt aussieht:

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

Wir können jetzt die `todomvc/app/templates/index.hbs` Datei aktualisieren, sodass sie, wenn sie die `<TodoList />` Komponente enthält, dies explizit mit dem verfügbaren Modell tut, indem sie seinen `allTodos()`-Getter aufruft, um sicherzustellen, dass alle Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

in

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das abgeschlossene Routenmodell

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

Wir können jetzt die `todomvc/app/templates/completed.hbs` Datei aktualisieren, sodass sie, wenn sie die `<TodoList />` Komponente enthält, dies explizit mit dem verfügbaren Modell tut, indem sie seinen `completedTodos()`-Getter aufruft, um sicherzustellen, dass nur die abgeschlossenen Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

in

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das aktive Routenmodell

Schließlich für die Routen, lassen Sie uns unsere aktive Route organisieren. Beginnen Sie damit, `todomvc/app/routes/active.js` zu aktualisieren, damit es wie folgt aussieht:

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

Wir können jetzt die `todomvc/app/templates/active.hbs` Datei aktualisieren, sodass sie, wenn sie die `<TodoList />` Komponente enthält, dies explizit mit dem verfügbaren Modell tut, indem sie seinen `activeTodos()`-Getter aufruft, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

in

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Routenmodell-Hooks ein Objekt mit einem Getter anstelle eines statischen Objekts zurückgeben oder mehr einfach die statische Liste der Todos (zum Beispiel, `this.todos.completed`). Der Grund dafür ist, dass wir wollen, dass die Vorlage eine dynamische Referenz zur Todo-Liste hat, und wenn wir die Liste direkt zurückgegeben hätten, würden die Daten nie neu berechnet, was dazu führen würde, dass die Navigationen fehlschlagen / nicht tatsächlich filtern. Indem wir einen Getter im Rückgabeobjekt aus den Modelldaten definiert haben, werden die Todos erneut nachgeschlagen, sodass unsere Änderungen an der Todo-Liste in der gerenderten Liste dargestellt werden.

## Die Fußzeilenlinks funktionsfähig machen

Unsere Routenfunktionalität ist jetzt vollständig implementiert, aber wir können nicht über unsere App darauf zugreifen. Lassen Sie uns die Fußzeilenlinks aktivieren, sodass beim Klicken darauf die gewünschten Routen aufgerufen werden.

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

`<LinkTo>` ist eine eingebaute Ember-Komponente, die alle Zustandsänderungen beim Navigieren durch Routen handhabt, sowie eine "aktive" Klasse auf jeden Link setzt, der mit der URL übereinstimmt, falls der Wunsch besteht, ihn anders zu gestalten als inaktive Links.

## Die Todo-Anzeige innerhalb von TodoList aktualisieren

Eine kleine letzte Sache, die wir beheben müssen, ist, dass wir zuvor innerhalb von `todomvc/app/components/todo-list.hbs` direkt auf den Todo-Daten-Service zugegriffen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt wollen, dass unsere TodoList-Komponente eine gefilterte Liste anzeigt, möchten wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste der Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte jetzt vollständig funktionierende Links in der Fußzeile haben, die die "Index"/Standard-, "Aktiv"- und "Abgeschlossen"-Routen anzeigen.

![Die Todo-Listen-App, die das Routing für alle, aktive und abgeschlossene Todos zeigt.](todos-navigation.gif)

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben dieses Tutorial abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, mit der ursprünglichen [TodoMVC-App](https://todomvc.com/) auf einer Stufe steht, wie das Bearbeiten, Löschen und das Persistieren von Todos über Seitenneuladen hinweg.

Um unsere fertige Ember-Implementierung zu sehen, schauen Sie sich den fertigen App-Ordner im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) an oder sehen Sie sich die [live veröffentlichte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) hier an. Studieren Sie den Code, um mehr über Ember zu lernen, und sehen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und einige Tipps zur Fehlerbehebung bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer","Learn_web_development/Core/Frameworks_libraries/Ember_resources", "Learn_web_development/Core/Frameworks_libraries")}}
