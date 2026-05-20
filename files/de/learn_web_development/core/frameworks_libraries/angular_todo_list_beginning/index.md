---
title: Beginnen Sie mit unserer Angular To-Do-Liste App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Angular-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Die Inhalte werden im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun sind wir bereit, mit der Erstellung unserer To-Do-Liste-Anwendung unter Verwendung von Angular zu beginnen. Die fertige Anwendung wird eine Liste von To-Do-Elementen anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen enthalten. In diesem Artikel werden Sie Ihre Anwendungsstruktur kennenlernen und bis zur Anzeige einer einfachen Liste von To-Do-Elementen arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unsere grundlegende App-Struktur zu erstellen, sie so zu gestalten, dass sie eine Liste von To-Do-Elementen anzeigt, und grundlegende Angular-Konzepte wie die Komponentenstruktur, das Teilen von Daten zwischen Komponenten und die Erstellung von Schleifeninhalten zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der To-Do-Anwendung

Wie jede Webanwendung hat eine Angular-Anwendung ein `index.html` als Einstiegspunkt. Die `index.html` ist tatsächlich das oberste HTML-Template der App:

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere Komponenten, die Sie erstellen, enthält. Im Allgemeinen müssen Sie die `index.html` nicht anfassen und konzentrieren Ihre Arbeit hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die als Komponenten bezeichnet werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen. Diese To-Do-Anwendung verfügt über zwei Komponenten — eine Komponente als Fundament für Ihre Anwendung und eine Komponente für die Verwaltung von To-Do-Elementen.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS. TypeScript transpiliert oder konvertiert in JavaScript, was bedeutet, dass Ihre Anwendung letztendlich in einfachem JavaScript endet, aber Sie haben die Bequemlichkeit, die erweiterten Funktionen und die vereinfachte Syntax von TypeScript zu verwenden.

### Kontrollfluss mit @if und @for-Blöcken

Dieses Tutorial behandelt zwei wichtige Angular [Kontrollflussblöcke](https://angular.dev/guide/templates/control-flow), die dem Framework sagen, wann und wie Ihre Templates gerendert werden sollen. Der erste Block, den dieses Tutorial behandelt, ist der [`@for`](https://angular.dev/api/core/@for)-Block, der durch eine Sammlung iteriert und den Inhalt eines Blocks wiederholt rendert.

Der zweite Block, den Sie in diesem Tutorial kennenlernen, ist [`@if`](https://angular.dev/api/core/@if). Sie können `@if` verwenden, um Inhalte basierend auf einer Bedingung anzuzeigen. Zum Beispiel, wenn ein Benutzer auf einen "Bearbeiten"-Button klickt, können Sie Elemente anzeigen, die zum Bearbeiten eines Elements verwendet werden. Wenn ein Benutzer auf "Abbrechen" klickt, können Sie die Elemente entfernen, die für die Bearbeitung verwendet werden.

### Teilen Sie Daten zwischen Komponenten

In dieser To-Do-Anwendung konfigurieren Sie Ihre Komponenten so, dass sie Daten teilen. Um neue Elemente zur To-Do-Liste hinzuzufügen, muss die Hauptkomponente das neue Element an die zweite Komponente senden. Diese zweite Komponente verwaltet die Elemente und kümmert sich um das Bearbeiten, als erledigt markieren und das Löschen einzelner Elemente.

Sie erreichen das Teilen von Daten zwischen Angular-Komponenten mit speziellen Dekoratoren, den sogenannten `@Input()` und `@Output()`. Mit diesen Dekoratoren geben Sie an, dass bestimmte Eigenschaften erlauben, dass Daten in eine Komponente hinein- oder aus einer Komponente herausgehen. Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, sodass die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Erstellen Sie im `app`-Verzeichnis eine neue Datei mit dem Namen `item.ts` mit den folgenden Inhalten:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei erst [später](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist eine gute Gelegenheit, Ihr Wissen darüber, was ein `item` ist, kennenzulernen und festzuhalten. Das `Item`-Interface erstellt ein `item`-Objektmodell, damit Ihre Anwendung versteht, was ein `item` ist. Für diese To-Do-Liste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zur AppComponent hinzufügen

Jetzt, da Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Elemente hinzufügen, indem Sie sie zur App hinzufügen. Ersetzen Sie in `app.component.ts` den Inhalt mit dem folgenden:

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

Die ersten beiden Zeilen sind JavaScript-Importe. In diesem Fall importieren sie Angular-Bibliotheken. Der Dekorator `@Component()` gibt Metadaten über das `AppComponent` an. Hier sind einige weitere Informationen über die Metadaten, die wir verwenden:

- [`standalone`](https://angular.dev/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.dev/guide/ngmodules#the-basic-ngmodule) erfordert oder nicht. Ihre App wird Template-Abhängigkeiten (Komponenten, Direktiven usw.) direkt über Importe verwalten, wenn sie eigenständig ist.
- [`selector`](https://angular.dev/api/core/Directive#selector): Gibt den CSS-Selektor an, den Sie in einem Template verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`. In der `index.html`, innerhalb des `body`-Tags, hat das Angular CLI `<app-root></app-root>` hinzugefügt, als es Ihre Anwendung generiert hat. Sie verwenden alle Komponenten-Selektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten-HTML-Templates hinzufügen.
- [`templateUrl`](https://angular.dev/api/core/Component#templateUrl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft wird. Hier ist es `'./app.component.html'`.
- [`styleUrl`](https://angular.dev/api/core/Component#styleUrl): Gibt den Ort und den Namen der Datei für Ihre Stile an, die speziell für diese Komponente gelten. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.dev/api/core/Component#imports): Ermöglicht es Ihnen, die Abhängigkeiten der Komponente anzugeben, die innerhalb ihres Templates verwendet werden können.

Die Eigenschaft `filter` ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte. Mit dem `union`-Typ, wenn Sie einen Tippfehler im Wert machen, den Sie der Eigenschaft `filter` zuweisen, lässt Sie TypeScript wissen, damit Sie den Fehler frühzeitig beheben können. Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Elemente anzuzeigen.

Das Array `allItems` enthält die To-Do-Elemente und ob sie abgeschlossen sind. Das erste Element, `eat`, hat einen `done`-Wert von true.

Der Getter `get items()` ruft die Elemente aus dem Array `allItems` ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Elemente zurück, je nachdem, wie der Benutzer die Ansicht filtert. Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## HTML zum AppComponent-Template hinzufügen

Um die Liste der Elemente im Browser anzuzeigen, ersetzen Sie den Inhalt von `app.component.html` mit dem folgenden HTML:

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

Das `<li>` befindet sich innerhalb eines `@for`-Blocks, der über die Elemente im Array `items` iteriert. Für jedes Element wird ein neues `<li>` erstellt. Die doppelt geschweiften Klammern, die `item.description` enthalten, instruieren Angular, jedes `<li>` mit dem Text der Beschreibung jedes Elements zu befüllen.

Das Schlüsselwort `track` im `@for`-Block von Angular hilft Angular zu identifizieren, welche Elemente in einem Array geändert, hinzugefügt oder entfernt wurden. Dies erleichtert und beschleunigt für Angular das Aktualisieren des DOM, wenn das Array geändert wird.

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

Eine To-Do-Liste benötigt eine Möglichkeit, Elemente hinzuzufügen, also lassen Sie uns anfangen. Fügen Sie in `app.component.ts` die folgende Methode zur Klasse nach dem Array `allItems` hinzu:

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

Die `addItem()`-Methode nimmt ein Element, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer auf die **Hinzufügen**-Schaltfläche klickt. Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um ein neues Element am Anfang des Arrays und am oberen Rand der Liste hinzuzufügen. Alternativ könnten Sie `push()` verwenden, was das neue Element am Ende des Arrays und am unteren Rand der Liste hinzufügen würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML im Template `AppComponent`. Ersetzen Sie in `app.component.html` das `<h2>` durch folgendes:

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

Im obigen HTML ist `#newItem` eine Template-Variable. Die Template-Variable verwendet in diesem Fall das `<input>`-Element als Wert. Template-Variablen können überall im Template der Komponente referenziert werden.

Wenn der Benutzer ein neues Element im `<input>`-Feld eingibt und die **Eingabetaste** drückt, fügt die `addItem()`-Methode den Wert zum Array `allItems` hinzu. Das Drücken der **Eingabetaste** setzt auch den Wert des `<input>`-Feldes auf eine leere Zeichenkette zurück. Die Template-Variable `#newItem` wird verwendet, um auf den Wert des `<input>`-Elements im Template zuzugreifen. Anstatt die **Eingabetaste** zu drücken, kann der Benutzer auch auf die **Hinzufügen**-Schaltfläche klicken, die dieselbe `addItem()`-Methode aufruft.

## Zusammenfassung

Mittlerweile sollten Sie Ihre grundlegende Liste von To-Dos in Ihrem Browser anzeigen können. Das ist großartiger Fortschritt! Natürlich gibt es noch viel mehr zu tun. Im nächsten Artikel werden wir uns damit beschäftigen, einige Styles zu unserer Anwendung hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
