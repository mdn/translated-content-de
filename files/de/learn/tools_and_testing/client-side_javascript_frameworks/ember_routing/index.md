---
title: Routing in Ember
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel lernen wir etwas über **Routing**, oder URL-basiertes Filtern, wie es manchmal genannt wird. Wir werden es nutzen, um eine eindeutige URL für jede der drei Todo-Ansichten — "Alle", "Aktive" und "Abgeschlossene" — bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen vertraut sind und
          über Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst hilfreich sein, da Ember diese intensiv nutzt.
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

Ember verfügt über ein Routingsystem, das eng mit der Browser-URL integriert ist. Typischerweise möchten Sie beim Schreiben von Webanwendungen, dass die Seite durch die URL repräsentiert wird, damit der Benutzer, falls (aus irgendeinem Grund) die Seite aktualisiert werden muss, nicht von dem Zustand der Webanwendung überrascht wird — sie können direkt zu bedeutenden Ansichten der App verlinken.

Im Moment haben wir bereits die "Alle"-Seite, da wir derzeit kein Filtern auf der Seite vornehmen, an der wir arbeiten, aber wir müssen sie ein wenig umorganisieren, um eine andere Ansicht für die "Aktiven" und "Abgeschlossenen" Todos zu handhaben.

Eine Ember-Anwendung hat eine Standard-"Anwendung"-Route, die mit der `app/templates/application.hbs`-Vorlage verknüpft ist. Da diese Anwendungs-Vorlage der Einstiegspunkt für unsere Todo-App ist, müssen wir einige Änderungen vornehmen, um das Routing zu ermöglichen.

## Erstellen der Routen

Beginnen wir mit dem Erstellen von drei neuen Routen: "Index", "Active" und "Completed". Dazu müssen Sie die folgenden Befehle in Ihr Terminal eingeben, innerhalb des Stammverzeichnisses Ihrer App:

```bash
ember generate route index
ember generate route completed
ember generate route active
```

Die zweiten und dritten Befehle sollten nicht nur neue Dateien generiert, sondern auch eine vorhandene Datei, `app/router.js`, aktualisiert haben. Sie enthält den folgenden Inhalt:

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

Die hervorgehobenen Zeilen wurden hinzugefügt, als die 2. und 3. Befehle ausgeführt wurden.

`router.js` funktioniert als "Sitemap" für Entwickler, um schnell zu sehen, wie die gesamte App strukturiert ist. Es zeigt Ember auch, wie mit Ihrer Route interagiert werden soll, z.B. beim Laden beliebiger Daten, beim Umgang mit Fehlern beim Laden dieser Daten oder beim Interpretieren dynamischer Segmente der URL. Da unsere Daten statisch sind, gelangen wir nicht zu diesen besonderen Funktionen, aber wir werden sicherstellen, dass die Route die minimal erforderlichen Daten bereitstellt, um eine Seite anzuzeigen.

Das Erstellen der "Index"-Route hat keine Routendefinitionszeile zu `router.js` hinzugefügt, da "Index" wie bei der URL-Navigation und dem Laden von JavaScript-Modulen ein spezielles Wort ist, das die Standardroute angibt, die gerendert, geladen usw. werden soll.

Um unsere alte Methode zum Rendern der TodoList-App anzupassen, müssen wir zunächst die TodoList-Komponentenaufrufung aus der Anwendungsvorlage mit einem `\{{outlet}}`-Aufruf ersetzen, was bedeutet, dass "jede Unterroute hier anstelle gerendert wird".

Gehen Sie zur Datei `todomvc/app/templates/application.hbs` und ersetzen Sie

```hbs
<TodoList />
```

durch

```hbs
\{{outlet}}
```

Als nächstes können wir in unseren `index.hbs`-, `completed.hbs`- und `active.hbs`-Vorlagen (ebenfalls im Vorlagenverzeichnis zu finden) vorerst einfach die TodoList-Komponentenaufrufung eingeben.

Ersetzen Sie in jedem Fall

```hbs
\{{outlet}}
```

mit

```hbs
<TodoList />
```

An diesem Punkt, wenn Sie die App erneut ausprobieren und eine der drei Routen besuchen, werden Sie genau das Gleiche sehen.

`localhost:4200 localhost:4200/active localhost:4200/completed`

An jeder URL wird die Vorlage, die dem spezifischen Pfad ("Active", "Completed" oder "Index") entspricht, die `<TodoList />`-Komponente rendern. Der Ort auf der Seite, an dem `<TodoList />` gerendert wird, wird durch das `\{{ outlet }}` innerhalb der übergeordneten Route bestimmt, die in diesem Fall `application.hbs` ist. So haben wir unsere Routen eingerichtet. Großartig!

Aber jetzt brauchen wir einen Weg, um zwischen jeder dieser Routen zu unterscheiden, damit sie das anzeigen, was sie anzeigen sollen.

Zuerst kehren Sie einmal mehr zu unserer Datei `todo-data.js` zurück. Sie enthält bereits einen Getter, der alle Todos zurückgibt, und einen Getter, der unvollständige Todos zurückgibt. Der Getter, den wir vermissen, ist einer, der nur die abgeschlossenen Todos zurückgibt. Fügen Sie den folgenden unter den vorhandenen Gettern hinzu:

```js
get completed() {
  return this.todos.filter((todo) => todo.isCompleted);
}
```

## Modelle

Nun müssen wir Modelle zu unseren JavaScript-Dateien für die Route hinzufügen, um es uns zu erleichtern, bestimmte Datensätze in diesen Modellen anzuzeigen. `model` ist ein Datenlade-Lifecycle-Hook. Für TodoMVC sind die Fähigkeiten des Modells für uns nicht so wichtig; Sie können im [Ember-Modell-Leitfaden](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) mehr Informationen finden, wenn Sie tiefer eintauchen möchten. Wir bieten auch Zugriff auf den Dienst, wie wir es für die Komponenten getan haben.

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

Wir können jetzt die Datei `todomvc/app/templates/index.hbs` aktualisieren, sodass bei der Einbindung der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell erfolgt, indem ihr `allTodos()`-Getter aufgerufen wird, um sicherzustellen, dass alle Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.allTodos }} />
```

### Das Modell der abgeschlossenen Route

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

Wir können jetzt die Datei `todomvc/app/templates/completed.hbs` aktualisieren, sodass bei der Einbindung der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell erfolgt, indem ihr `completedTodos()`-Getter aufgerufen wird, um sicherzustellen, dass nur die abgeschlossenen Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.completedTodos }} />
```

### Das Modell der aktiven Route

Zuletzt für die Routen klären wir unsere aktive Route. Beginnen Sie, indem Sie `todomvc/app/routes/active.js` aktualisieren, sodass es wie folgt aussieht:

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

Wir können jetzt die Datei `todomvc/app/templates/active.hbs` aktualisieren, sodass bei der Einbindung der `<TodoList />`-Komponente diese explizit mit dem verfügbaren Modell erfolgt, indem ihr `activeTodos()`-Getter aufgerufen wird, um sicherzustellen, dass nur die aktiven (unvollständigen) Todos angezeigt werden.

Ändern Sie in dieser Datei

```hbs
<TodoList />
```

zu

```hbs-nolint
<TodoList @todos=\{{ @model.activeTodos }} />
```

Beachten Sie, dass wir in jedem der Routenmodell-Hooks ein Objekt mit einem Getter anstelle eines statischen Objekts oder nur der statischen Liste von Todos (zum Beispiel `this.todos.completed`) zurückgeben. Der Grund dafür ist, dass wir möchten, dass die Vorlage eine dynamische Referenz zur Todo-Liste hat, und wenn wir die Liste direkt zurückgeben würden, würde sich die Daten nie neu berechnen, was dazu führen würde, dass die Navigierungen nicht zu funktionieren scheinen / das Filtern nicht tatsächlich erfolgt. Indem wir einen Getter im Rückgabeobjekt der Modelldaten definieren, werden die Todos neu abgerufen, sodass unsere Änderungen an der Todo-Liste in der gerenderten Liste angezeigt werden.

## Die Links im Footer zum Arbeiten bringen

Unsere Routenfunktionalität ist also nun vollständig vorhanden, aber wir können nicht von unserer App darauf zugreifen. Lassen Sie uns die Links im Footer aktivieren, damit das Klicken auf sie zu den gewünschten Routen führt.

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

`<LinkTo>` ist eine eingebettete Ember-Komponente, die alle Statusänderungen beim Navigieren durch Routen handhabt und eine "aktive" Klasse auf jeden Link setzt, der der URL entspricht, falls es gewünscht wird, ihn anders als inaktive Links zu gestalten.

## Aktualisieren der Todos-Anzeige innerhalb von TodoList

Eine kleine letzte Sache, die wir anpassen müssen, ist, dass wir vorher in `todomvc/app/components/todo-list.hbs` den `todo-data`-Dienst direkt aufgerufen und über alle Todos iteriert haben, wie hier gezeigt:

```hbs
\{{#each this.todos.all as |todo| }}
```

Da wir jetzt möchten, dass unsere TodoList-Komponente eine gefilterte Liste anzeigt, möchten wir ein Argument an die TodoList-Komponente übergeben, das die "aktuelle Liste von Todos" darstellt, wie hier gezeigt:

```hbs
\{{#each @todos as |todo| }}
```

Und das war's für dieses Tutorial! Ihre App sollte jetzt voll funktionsfähige Links im Footer haben, die die "Index"/Standard-, "Active"- und "Completed"-Routen anzeigen.

![Die Todo-App-Liste, die zeigt, dass das Routing für alle, aktive und abgeschlossene Todos funktioniert.](todos-navigation.gif)

## Zusammenfassung

Herzlichen Glückwunsch! Sie haben dieses Tutorial erfolgreich abgeschlossen!

Es gibt noch viel mehr zu implementieren, bevor das, was wir hier behandelt haben, mit der ursprünglichen [TodoMVC-App](https://todomvc.com/) gleichwertig ist, wie z.B. das Bearbeiten, Löschen und Persistieren von Todos über Seitenladungen hinweg.

Um unsere fertige Ember-Implementierung zu sehen, schauen Sie sich den fertiggestellten App-Ordner im Repository für [den Code dieses Tutorials](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) an oder sehen Sie sich hier die [live bereitgestellte Version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) an. Studieren Sie den Code, um mehr über Ember zu erfahren, und sehen Sie sich auch den nächsten Artikel an, der Links zu weiteren Ressourcen und etwas Fehlerbehebung bietet.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
