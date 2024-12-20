---
title: Beginn unserer Angular Aufgabenlisten-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt sind wir bereit, mit der Erstellung unserer Aufgabenlisten-Anwendung unter Verwendung von Angular zu beginnen. Die fertige Anwendung wird eine Liste von Aufgaben anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen enthalten. In diesem Artikel werden Sie die Struktur Ihrer Anwendung kennenlernen und bis zur Anzeige einer einfachen Liste von Aufgaben arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnis der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/der Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegende App-Struktur zu erstellen, eine Liste von Aufgaben anzuzeigen und grundlegende Angular-Konzepte wie die Struktur von Komponenten, das Teilen von Daten zwischen Komponenten und das Erstellen von Inhalten in Schleifen zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Aufgabenlisten-Anwendungsstruktur

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten enthält. Im Allgemeinen müssen Sie die `index.html` nicht berühren, und Sie konzentrieren sich hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die Komponenten genannt werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen. Diese Aufgabenlisten-Anwendung hat zwei Komponenten — eine Komponente als Grundlage für Ihre Anwendung und eine Komponente zur Verwaltung der Aufgaben.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS. TypeScript wird in JavaScript transpiliert oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in reinem JavaScript endet, Sie jedoch den Komfort von TypeScripts erweiterten Funktionen und optimierter Syntax nutzen können.

### Steuerungsfluss mit @if und @for Blöcken

Dieses Tutorial behandelt zwei wichtige Angular [Steuerungsflussblöcke](https://angular.dev/guide/templates/control-flow), die dem Framework mitteilen, wann und wie Ihre Vorlagen gerendert werden sollen. Der erste Block, den dieses Tutorial behandelt, ist der [`@for`](https://angular.dev/api/core/@for) Block, der durch eine Sammlung schleift und den Inhalt eines Blocks wiederholt rendert.

Der zweite Block, den Sie in diesem Tutorial kennenlernen, ist [`@if`](https://angular.dev/api/core/@if). Sie können `@if` verwenden, um Inhalte basierend auf einer Bedingung anzuzeigen. Wenn ein Benutzer beispielsweise auf eine "Bearbeiten"-Schaltfläche klickt, können Sie Elemente anzeigen, die zum Bearbeiten eines Elements verwendet werden. Wenn ein Benutzer auf "Abbrechen" klickt, können Sie die zum Bearbeiten verwendeten Elemente entfernen.

### Daten zwischen Komponenten teilen

In dieser Aufgabenlisten-Anwendung konfigurieren Sie Ihre Komponenten so, dass sie Daten teilen. Um neue Elemente zur Aufgabenliste hinzuzufügen, muss die Hauptkomponente das neue Element an die zweite Komponente senden. Diese zweite Komponente verwaltet die Elemente und kümmert sich um das Bearbeiten, als Erledigt markieren und Löschen einzelner Elemente.

Sie erreichen das Teilen von Daten zwischen Angular-Komponenten mit speziellen Dekoratoren namens `@Input()` und `@Output()`. Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften Daten in eine Komponente oder aus einer Komponente heraus lassen. Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, damit die andere Komponente weiß, dass Daten verfügbar sind.

## Definieren Sie Item

Erstellen Sie im `app` Verzeichnis eine neue Datei namens `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei erst [später](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist ein guter Zeitpunkt, Ihr Wissen darüber, was ein `item` ist, aufzuschreiben. Das `Item` Interface erstellt ein `item` Objektmodell, sodass Ihre Anwendung versteht, was ein `item` ist. Für diese Aufgabenliste ist ein `item` ein Objekt mit einer Beschreibung, das als erledigt markiert werden kann.

## Logik zu AppComponent hinzufügen

Jetzt, wo Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Elemente hinzufügen, indem Sie sie der App hinzufügen. Ersetzen Sie in `app.component.ts` den Inhalt durch Folgendes:

```js
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
      this.filter === "done" ? item.done : !item.done
    );
  }
}
```

Die ersten beiden Zeilen sind JavaScript-Importe. In diesem Fall importieren sie Angular-Bibliotheken. Der `@Component()` Dekorator spezifiziert Metadaten über die `AppComponent`. Hier ist einige zusätzliche Information über die von uns verwendeten Metadaten:

- [`standalone`](https://angular.dev/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.dev/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht. Ihre App wird Abhängigkeiten von Vorlagen (Komponenten, Direktiven, etc.) direkt über Importe verwalten, wenn sie eigenständig ist.
- [`selector`](https://angular.dev/api/core/Directive#selector): Sagt Ihnen, welcher CSS-Selektor in einer Vorlage verwendet wird, um diese Komponente zu platzieren. Hier ist es `'app-root'`. In der `index.html`, innerhalb des `body` Tags, hat die Angular CLI `<app-root></app-root>` hinzugefügt, als Ihre Anwendung generiert wurde. Verwenden Sie alle Komponentenselektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten HTML-Vorlagen hinzufügen.
- [`templateUrl`](https://angular.dev/api/core/Component#templateUrl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft werden soll. Hier ist es `'./app.component.html'`.
- [`styleUrl`](https://angular.dev/api/core/Component#styleUrl): Gibt den Speicherort und den Namen der Datei für Ihre Stile an, die speziell für diese Komponente gelten. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.dev/api/core/Component#imports): Ermöglicht die Angabe der Abhängigkeiten der Komponente, die innerhalb ihrer Vorlage verwendet werden können.

Die `filter` Eigenschaft ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte. Mit dem `union` Typ lässt Ihnen TypeScript wissen, ob Sie einen Tippfehler bei dem Wert gemacht haben, den Sie der `filter` Eigenschaft zuweisen, damit Sie den Fehler frühzeitig erkennen können. Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Elemente anzuzeigen.

Das `allItems` Array enthält die Aufgaben und ob sie erledigt sind. Das erste Element, `eat`, hat einen `done` Wert von true.

Der Getter, `get items()`, ruft die Elemente aus dem `allItems` Array ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder nicht erledigten Elemente zurück, je nachdem, wie der Benutzer die Ansicht filtert. Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## HTML zur AppComponent-Vorlage hinzufügen

Um die Liste der Elemente im Browser zu sehen, ersetzen Sie den Inhalt von `app.component.html` durch folgendes HTML:

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

Das `<li>` befindet sich in einem `@for` Block, der die Elemente im `items` Array durchläuft. Für jedes Element wird ein neues `<li>` erstellt. Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Elements zu füllen.

Das `track` Schlüsselwort im `@for` Block von Angular hilft Angular zu identifizieren, welche Elemente in einem Array geändert, hinzugefügt oder entfernt wurden. Dies erleichtert und beschleunigt es Angular, das DOM zu aktualisieren, wenn das Array modifiziert wird.

Im Browser sollten Sie die folgende Liste von Elementen sehen:

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Elemente zur Liste hinzufügen

Eine Aufgabenliste benötigt eine Möglichkeit, Elemente hinzuzufügen, also fangen wir an. Fügen Sie in `app.component.ts` die folgende Methode zu der Klasse nach dem `allItems` Array hinzu:

```ts
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}
```

Die `addItem()` Methode nimmt ein Element, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer auf die **Add** Schaltfläche klickt. Die `addItem()` Methode verwendet die Array-Methode `unshift()`, um ein neues Element an den Anfang des Arrays und damit an den Anfang der Liste hinzuzufügen. Sie könnten alternativ `push()` verwenden, das das neue Element an das Ende des Arrays und damit an das Ende der Liste hinzufügen würde.

Um die `addItem()` Methode zu verwenden, bearbeiten Sie das HTML in der `AppComponent`-Vorlage. Ersetzen Sie in `app.component.html` das `<h2>` durch Folgendes:

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

Im obigen HTML ist `#newItem` eine Vorlagenvariable. Die Vorlagenvariable verwendet in diesem Fall das `<input>` Element als ihren Wert. Auf Vorlagenvariablen kann überall in der Vorlage der Komponente verwiesen werden.

Wenn der Benutzer ein neues Element in das `<input>` Feld eingibt und die **Enter** Taste drückt, fügt die `addItem()` Methode den Wert dem `allItems` Array hinzu. Das Drücken der **Enter** Taste setzt auch den Wert von `<input>` auf eine leere Zeichenfolge zurück. Die Vorlagenvariable `#newItem` wird verwendet, um auf den Wert des `<input>` Elements in der Vorlage zuzugreifen. Anstatt die **Enter** Taste zu drücken, kann der Benutzer auch auf die **Add** Schaltfläche klicken, die die gleiche `addItem()` Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste der Aufgaben in Ihrem Browser angezeigt bekommen. Das ist großartig! Natürlich haben wir noch viel zu tun. Im nächsten Artikel werden wir uns ansehen, wie wir unserer Anwendung etwas Stil hinzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
