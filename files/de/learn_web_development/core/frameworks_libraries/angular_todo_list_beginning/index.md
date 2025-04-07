---
title: Beginn unserer Angular-To-Do-Liste-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt sind wir bereit, unsere To-Do-Liste-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-Do-Elementen anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen enthalten. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten bis zur Anzeige einer grundlegenden Liste von To-Do-Elementen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unsere grundlegende App-Struktur zu erstellen, eine Liste von To-Do-
        Elementen anzuzeigen und grundlegende Angular-Konzepte wie die Struktur
        von Komponenten, Datenübertragung zwischen Komponenten und die
        Erstellung von Inhalten in Schleifen zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der To-Do-Anwendung

Wie jede Webanwendung hat eine Angular-Anwendung eine `index.html` als Einstiegspunkt. Die `index.html` ist tatsächlich die oberste HTML-Vorlage der App:

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten einschließt.
In der Regel müssen Sie die `index.html` nicht ändern, und Sie konzentrieren sich hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die als Komponenten bezeichnet werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentraler Baustein von Angular-Anwendungen.
Diese To-Do-Anwendung hat zwei Komponenten — eine Komponente als Grundlage für Ihre Anwendung und eine Komponente zur Handhabung der To-Do-Elemente.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS.
TypeScript wird in JavaScript kompiliert, was bedeutet, dass Ihre Anwendung letztendlich in reinem JavaScript endet, Sie jedoch den Komfort von TypeScripts erweiterten Funktionen und optimierter Syntax nutzen können.

### Kontrollfluss mit @if und @for Blöcken

Dieses Tutorial behandelt zwei wichtige Angular [Kontrollflussblöcke](https://angular.dev/guide/templates/control-flow), die dem Rahmenwerk mitteilen, wann und wie Ihre Vorlagen gerendert werden sollen.
Der erste Block, der in diesem Tutorial behandelt wird, ist der [`@for`](https://angular.dev/api/core/@for) Block, der durch eine Sammlung iteriert und den Inhalt eines Blocks wiederholt rendert.

Der zweite Block, den Sie in diesem Tutorial lernen, ist [`@if`](https://angular.dev/api/core/@if).
Sie können `@if` verwenden, um Inhalte basierend auf einer Bedingung anzuzeigen.
Zum Beispiel, wenn ein Benutzer auf eine "Bearbeiten"-Schaltfläche klickt, können Sie Elemente anzeigen, die zum Bearbeiten eines Eintrags verwendet werden.
Wenn ein Benutzer auf "Abbrechen" klickt, können Sie die zum Bearbeiten verwendeten Elemente entfernen.

### Daten zwischen Komponenten teilen

In dieser To-Do-Anwendung konfigurieren Sie Ihre Komponenten, um Daten zu teilen.
Um neue Elemente der To-Do-Liste hinzuzufügen, muss die Hauptkomponente das neue Element an die zweite Komponente senden.
Diese zweite Komponente verwaltet die Elemente und kümmert sich um das Bearbeiten, Markieren als erledigt und Löschen einzelner Elemente.

Sie teilen Daten zwischen Angular-Komponenten mit speziellen Dekoratoren namens `@Input()` und `@Output()`.
Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften den Fluss von Daten in oder aus einer Komponente zulassen.
Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, sodass die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Erstellen Sie im `app`-Verzeichnis eine neue Datei mit dem Namen `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei erst [später](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist eine gute Gelegenheit, Ihr Verständnis über das, was ein `item` ist, festzuhalten. Das `Item`-Interface erstellt ein `item`-Objektmodell, damit Ihre Anwendung versteht, was ein `item` ist. Für diese To-Do-Liste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zur AppComponent hinzufügen

Nun, da Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Elemente hinzufügen, indem Sie sie der App hinzufügen.
Ersetzen Sie in `app.component.ts` den Inhalt durch Folgendes:

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

Die ersten beiden Zeilen sind JavaScript-Importe. In diesem Fall importieren sie Angular-Bibliotheken.
Der `@Component()`-Dekorator gibt Metadaten über die `AppComponent` an.
Hier sind einige Informationen zu den Metadaten, die wir verwenden:

- [`standalone`](https://angular.dev/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.dev/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht.
  Ihre App verwaltet direkt die Abhängigkeiten von Vorlagen (Komponenten, Direktiven usw.) mithilfe von Imports, wenn sie eigenständig ist.
- [`selector`](https://angular.dev/api/core/Directive#selector): Gibt Ihnen den CSS-Selector an, den Sie in einer Vorlage verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`.
  In der `index.html`, innerhalb des `body`-Tags, hat die Angular CLI `<app-root></app-root>` beim Erstellen Ihrer Anwendung hinzugefügt.
  Sie verwenden alle Komponentenselektoren auf die gleiche Weise, indem Sie sie anderen Komponenten-HTML-Vorlagen hinzufügen.
- [`templateUrl`](https://angular.dev/api/core/Component#templateUrl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft ist.
  Hier ist es `'./app.component.html'`.
- [`styleUrl`](https://angular.dev/api/core/Component#styleUrl): Gibt den Speicherort und den Namen der Datei für Ihre Stile an, die speziell für diese Komponente gelten. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.dev/api/core/Component#imports): Ermöglicht Ihnen die Angabe der Abhängigkeiten der Komponente, die innerhalb ihrer Vorlage verwendet werden können.

Die `filter`-Eigenschaft ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte.
Mit dem `union`-Typ teilt Ihnen TypeScript mit, wenn Sie einen Tippfehler im Wert machen, den Sie der `filter`-Eigenschaft zuweisen, sodass Sie den Fehler frühzeitig erkennen können.
Dieser Leitfaden zeigt Ihnen in einem späteren Schritt, wie Sie eine Filterung hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Elemente anzuzeigen.

Das `allItems`-Array enthält die To-Do-Elemente und ob sie erledigt sind.
Das erste Element, `eat`, hat einen `done`-Wert von true.

Der Getter `get items()` ruft die Elemente aus dem `allItems`-Array ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Elemente zurück, abhängig davon, wie der Benutzer die Ansicht filtert.
Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## Fügen Sie HTML zur AppComponent-Vorlage hinzu

Um die Liste der Elemente im Browser anzuzeigen, ersetzen Sie den Inhalt von `app.component.html` durch folgendes HTML:

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

Das `<li>` befindet sich in einem `@for`-Block, der über die Elemente im `items`-Array iteriert.
Für jedes Element wird ein neues `<li>` erstellt.
Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Elements zu füllen.

Das Schlüsselwort `track` im `@for`-Block von Angular hilft Angular zu identifizieren, welche Elemente in einem Array geändert, hinzugefügt oder entfernt wurden.
Dies macht es für Angular einfacher und schneller, das DOM zu aktualisieren, wenn das Array modifiziert wird.

Im Browser sollten Sie die Liste der Elemente wie folgt sehen:

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Elemente zur Liste hinzufügen

Eine To-Do-Liste benötigt eine Möglichkeit, Elemente hinzuzufügen. Lassen Sie uns damit beginnen.
Fügen Sie in `app.component.ts` die folgende Methode zur Klasse nach dem `allItems`-Array hinzu:

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

Die `addItem()`-Methode nimmt ein Element, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer auf die **Hinzufügen**-Schaltfläche klickt.
Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um ein neues Element an den Anfang des Arrays und an den Anfang der Liste hinzuzufügen.
Alternativ könnten Sie `push()` verwenden, was das neue Element ans Ende des Arrays und an das Ende der Liste hinzufügen würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML in der `AppComponent`-Vorlage.
Ersetzen Sie in `app.component.html` das `<h2>` durch Folgendes:

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

Im obigen HTML ist `#newItem` eine Vorlagenvariable. Die Vorlagenvariable verwendet in diesem Fall das `<input>`-Element als Wert. Vorlagenvariablen können überall in der Vorlage der Komponente referenziert werden.

Wenn der Benutzer ein neues Element in das `<input>`-Feld eingibt und die **Enter**-Taste drückt, fügt die `addItem()`-Methode den Wert dem `allItems`-Array hinzu.
Durch Drücken der **Enter**-Taste wird auch der Wert von `<input>` auf eine leere Zeichenkette zurückgesetzt. Die Vorlagenvariable `#newItem` wird verwendet, um den Wert des `<input>`-Elements in der Vorlage zuzugreifen.
Anstelle der **Enter**-Taste kann der Benutzer auch die **Hinzufügen**-Schaltfläche anklicken, die die gleiche `addItem()` Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste von To-Dos in Ihrem Browser anzeigen können. Das ist ein großer Fortschritt! Natürlich haben wir noch viel mehr zu tun. Im nächsten Artikel werden wir uns ansehen, wie wir unserer Anwendung etwas Stil hinzufügen können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
