---
title: Beginnen Sie mit unserer Angular To-Do-Listen-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt sind wir bereit, mit der Erstellung unserer To-Do-Listen-Anwendung unter Verwendung von Angular zu beginnen. Die fertige Anwendung wird eine Liste von To-Do-Elementen anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen enthalten. In diesem Artikel werden Sie mit der Anwendungsstruktur vertraut gemacht und arbeiten darauf hin, eine grundlegende Liste von To-Do-Elementen anzuzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>,
        und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Wissen über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um unsere grundlegende App-Struktur zu erstellen, eine Liste von To-Do-Elementen anzuzeigen und grundlegende Angular-Konzepte wie die Struktur von Komponenten, das Teilen von Daten zwischen Komponenten und das Erstellen wiederholter Inhalte zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der To-Do-Anwendung

Wie jede Webanwendung hat eine Angular-Anwendung eine `index.html` als Einstiegspunkt. Die `index.html` ist tatsächlich das oberste HTML-Template der App:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten enthält. Generell müssen Sie die `index.html` nicht berühren und fokussieren Ihre Arbeit hauptsächlich in spezialisierten Bereichen Ihrer Anwendung, die Komponenten genannt werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen. Diese To-Do-Anwendung hat zwei Komponenten — eine Komponente als Grundlage für Ihre Anwendung und eine Komponente zum Verwalten von To-Do-Elementen.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS. TypeScript wird in JavaScript transpiliert oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in reinem JavaScript endet, aber Sie haben den Komfort, die erweiterten Funktionen und die optimierte Syntax von TypeScript zu nutzen.

### Steuerungsfluss mit @if- und @for-Blöcken

Dieses Tutorial behandelt zwei wichtige Angular [Steuerungsflussblöcke](https://angular.dev/guide/templates/control-flow), die dem Framework mitteilen, wann und wie Ihre Templates gerendert werden sollen. Der erste Block, den dieses Tutorial behandelt, ist der [`@for`](https://angular.dev/api/core/@for)-Block, der eine Sammlung durchläuft und den Inhalt eines Blocks wiederholt rendert.

Der zweite Block, den Sie in diesem Tutorial kennenlernen, ist [`@if`](https://angular.dev/api/core/@if). Sie können `@if` verwenden, um Inhalte basierend auf einer Bedingung anzuzeigen. Wenn ein Benutzer beispielsweise auf eine Schaltfläche „Bearbeiten“ klickt, können Sie Elemente anzeigen, die zum Bearbeiten eines Elements verwendet werden. Wenn ein Benutzer auf „Abbrechen“ klickt, können Sie die zum Bearbeiten verwendeten Elemente entfernen.

### Daten zwischen Komponenten teilen

In dieser To-Do-Anwendung konfigurieren Sie Ihre Komponenten, um Daten zu teilen. Um neue Elemente zur To-Do-Liste hinzuzufügen, muss die Hauptkomponente das neue Element an die zweite Komponente senden. Diese zweite Komponente verwaltet die Elemente und kümmert sich um das Bearbeiten, als erledigt markieren und das Löschen einzelner Elemente.

Das Teilen von Daten zwischen Angular-Komponenten erreichen Sie mit speziellen Dekoratoren, die `@Input()` und `@Output()` genannt werden. Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften erlauben, dass Daten in eine Komponente hinein oder aus einer heraus gehen. Um `@Output()` zu verwenden, müssen Sie in einer Komponente ein Ereignis auslösen, damit die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Im `app`-Verzeichnis erstellen Sie eine neue Datei namens `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Diese Datei werden Sie erst [später](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist ein guter Zeitpunkt, um zu wissen und aufzuzeichnen, was ein `item` ist. Das `Item`-Interface erstellt ein `item`-Objektmodell, damit Ihre Anwendung versteht, was ein `item` ist. Für diese To-Do-Liste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zur AppComponent hinzufügen

Da Sie nun wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Items geben, indem Sie sie der App hinzufügen. Ersetzen Sie in `app.component.ts` den Inhalt mit dem folgenden:

```ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [CommonModule],
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done,
    );
  }
}
```

Die ersten beiden Zeilen sind JavaScript-Importe. In diesem Fall importieren sie Angular-Bibliotheken. Der `@Component()`-Dekorator spezifiziert Metadaten über die `AppComponent`. Hier sind einige weitere Informationen zu den Metadaten, die wir verwenden:

- [`standalone`](https://angular.dev/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.dev/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht. Ihre App wird bei Standalone-Templates Abhängigkeiten (Komponenten, Direktiven usw.) direkt über Importe verwalten.
- [`selector`](https://angular.dev/api/core/Directive#selector): Gibt an, welcher CSS-Selektor im Template verwendet wird, um diese Komponente zu platzieren. Hier ist es `'app-root'`. Im `index.html`, innerhalb des `body`-Tags, hat das Angular CLI `<app-root></app-root>` hinzugefügt, als Ihre Anwendung generiert wurde. Sie verwenden alle Komponenten-Selektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten-HTML-Templates hinzufügen.
- [`templateUrl`](https://angular.dev/api/core/Component#templateUrl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft werden soll. Hier ist es `'./app.component.html'`.
- [`styleUrl`](https://angular.dev/api/core/Component#styleUrl): Gibt den Speicherort und den Namen der Datei für Ihre Stile an, die speziell für diese Komponente gelten. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.dev/api/core/Component#imports): Erlaubt es Ihnen, die Abhängigkeiten der Komponente zu spezifizieren, die innerhalb ihres Templates verwendet werden können.

Die `filter`-Eigenschaft ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte. Mit dem `union`-Typ weist Sie TypeScript darauf hin, falls Sie sich bei dem Wert, den Sie der `filter`-Eigenschaft zuweisen, vertippen, sodass Sie den Fehler frühzeitig beheben können. Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Items anzuzeigen.

Das `allItems`-Array enthält die To-Do-Items und den Status, ob sie erledigt sind. Das erste Element, `essen`, hat einen `done`-Wert von true.

Der Getter, `get items()`, ruft die Items aus dem `allItems`-Array ab, wenn der `filter` auf `all` gesetzt ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Items zurück, je nachdem, wie der Benutzer die Ansicht filtert. Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## HTML zum AppComponent-Template hinzufügen

Um die Liste der Items im Browser anzuzeigen, ersetzen Sie den Inhalt von `app.component.html` mit dem folgenden HTML:

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    @for(item of items; track item.description){
    <li>\{{item.description}}</li>
    }
  </ul>
</div>
```

Das `<li>` befindet sich in einem `@for`-Block, der über die Items im `items`-Array iteriert. Für jedes Item wird ein neues `<li>` erstellt. Die Doppelgeschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Items zu füllen.

Das Schlüsselwort `track` im Angular-`@for`-Block hilft Angular dabei, zu identifizieren, welche Items in einem Array geändert, hinzugefügt oder entfernt wurden. Dies erleichtert und beschleunigt Angular die Aktualisierung des DOM, wenn das Array modifiziert wird.

Im Browser sollten Sie die Liste der Items wie folgt sehen:

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Items zur Liste hinzufügen

Eine To-Do-Liste benötigt eine Möglichkeit, Items hinzuzufügen, also lassen Sie uns beginnen. Fügen Sie in `app.component.ts` die folgende Methode zur Klasse nach dem `allItems`-Array hinzu:

```ts
export class AppComponent {
  // …
  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }
  // …
}
```

Die `addItem()`-Methode nimmt ein Item, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer auf die Schaltfläche **Hinzufügen** klickt. Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um ein neues Item an den Anfang des Arrays und an den Anfang der Liste hinzuzufügen. Alternativ könnten Sie `push()` verwenden, was das neue Item an das Ende des Arrays und an das Ende der Liste hinzufügen würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML im `AppComponent`-Template. Ersetzen Sie in `app.component.html` das `<h2>` mit dem folgenden:

```html
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput" />

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

Im obigen HTML ist `#newItem` eine Template-Variable. Die Template-Variable verwendet in diesem Fall das `<input>`-Element als ihren Wert. Template-Variablen können überall im Template der Komponente referenziert werden.

Wenn der Benutzer ein neues Item im `<input>`-Feld eintippt und die **Enter**-Taste drückt, fügt die `addItem()`-Methode den Wert dem `allItems`-Array hinzu. Das Drücken der **Enter**-Taste setzt auch den Wert der `<input>` auf einen leeren String zurück. Die Template-Variable `#newItem` wird verwendet, um auf den Wert des `<input>`-Elements im Template zuzugreifen. Anstelle der **Enter**-Taste kann der Benutzer auch die Schaltfläche **Hinzufügen** klicken, die die gleiche `addItem()`-Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste von To-Dos in Ihrem Browser angezeigt haben. Das ist großartiger Fortschritt! Natürlich gibt es noch viel zu tun. Im nächsten Artikel werden wir uns mit dem Hinzufügen einiger Designs zu unserer Anwendung befassen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
