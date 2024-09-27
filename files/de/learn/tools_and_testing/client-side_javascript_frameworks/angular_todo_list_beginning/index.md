---
title: Beginn unserer Angular To-do-Listen-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt sind wir bereit, unsere To-do-Listen-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von To-do-Punkten anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen beinhalten. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten daran, eine grundlegende Liste von To-do-Punkten anzuzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Wissen über die
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Unsere grundlegende App-Struktur zu erstellen, diese die Anzeige einer Liste von To-do-Punkten zu ermöglichen und grundlegende Konzepte von Angular zu verstehen, wie die Komponentenstruktur, das Teilen von Daten zwischen Komponenten und das Erstellen von Inhalten in Schleifen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der To-do-Anwendung

Wie jede Webanwendung hat eine Angular-Anwendung eine `index.html` als Einstiegspunkt. Die `index.html` ist eigentlich das oberste HTML-Template der App:

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten enthält.
In der Regel müssen Sie die `index.html` nicht ändern und konzentrieren Ihre Arbeit hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die als Komponenten bezeichnet werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen.
Diese To-do-Anwendung hat zwei Komponenten — eine Komponente als Fundament Ihrer Anwendung und eine Komponente zur Verwaltung der To-do-Punkte.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS.
TypeScript wird in JavaScript kompiliert oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in einfachem JavaScript endet, Sie jedoch den Vorteil haben, die erweiterten Funktionen und die vereinfachte Syntax von TypeScript zu nutzen.

### Dynamische Änderung der Benutzeroberfläche mit \*ngIf und \*ngFor

Dieses Tutorial behandelt auch zwei wichtige Angular-Direktiven zur dynamischen Änderung der DOM-Struktur.
Eine Direktive ist wie ein Befehl, den Sie in Ihrem HTML verwenden können, um Änderungen in Ihrer Anwendung vorzunehmen.

Die erste Direktive, die in diesem Tutorial behandelt wird, ist der Iterator von Angular, `*ngFor`.
`*ngFor` kann dynamisch DOM-Elemente basierend auf Elementen in einem Array erstellen.

Die zweite Direktive, die Sie in diesem Tutorial kennenlernen, ist `*ngIf`.
Sie können `*ngIf` verwenden, um Elemente basierend auf einer Bedingung zum DOM hinzuzufügen oder daraus zu entfernen.
Zum Beispiel, wenn Benutzer einen Punkt in der To-do-Liste bearbeiten möchten, können Sie ihnen die Möglichkeit bieten, den Punkt zu bearbeiten.
Wenn sie keinen Punkt bearbeiten möchten, können Sie die Oberfläche für die Bearbeitung entfernen.

### Teilen von Daten zwischen Komponenten

In dieser To-do-Anwendung konfigurieren Sie Ihre Komponenten so, dass sie Daten teilen.
Um neue Punkte zur To-do-Liste hinzuzufügen, muss die Hauptkomponente den neuen Punkt an die zweite Komponente senden.
Diese zweite Komponente verwaltet die Punkte und kümmert sich um das Bearbeiten, das als erledigt Markieren und das Löschen einzelner Punkte.

Das Teilen von Daten zwischen Angular-Komponenten erreichen Sie mit speziellen Dekoratoren namens `@Input()` und `@Output()`.
Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften Daten in eine Komponente hinein oder aus ihr hinaus lassen.
Um `@Output()` zu verwenden, lösen Sie in einer Komponente ein Ereignis aus, damit die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Erstellen Sie im Verzeichnis `app` eine neue Datei mit dem Namen `item.ts` und folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei erst [später](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist eine gute Gelegenheit, Ihr Wissen darüber, was ein `item` ist, aufzuschreiben. Das `Item`-Interface erstellt ein `item`-Objektmodell, damit Ihre Anwendung versteht, was ein `item` ist. Für diese To-do-Liste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zur AppComponent hinzufügen

Jetzt, da Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Punkte geben, indem Sie sie zur App hinzufügen.
Ersetzen Sie in `app.component.ts` den Inhalt durch Folgendes:

```js
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

Die ersten beiden Zeilen sind JavaScript-Importe. In diesem Fall importieren sie Angular-Bibliotheken.
Der Dekorator `@Component()` gibt Metadaten über die `AppComponent` an.
Hier einige Informationen über die Metadaten, die wir verwenden:

- [`standalone`](https://angular.io/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.io/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht.
  Ihre App verwaltet direkt die Template-Abhängigkeiten (Komponenten, Direktiven, etc.) mithilfe von Importen, wenn sie eigenständig ist.
- [`selector`](https://angular.io/api/core/Directive#selector): Gibt an, welchen CSS-Selektor Sie in einem Template verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`.
  In der `index.html`, innerhalb des `body`-Tags, fügte die Angular-CLI `<app-root></app-root>` hinzu, als Ihre Anwendung generiert wurde.
  Sie verwenden alle Komponenten-Selektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten-HTML-Templates hinzufügen.
- [`templateUrl`](https://angular.io/api/core/Component#templateurl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft ist.
  Hier ist es `'./app.component.html'`.
- [`styleUrls`](https://angular.io/api/core/Component#styleurls): Bietet den Speicherort und Namen der Datei für Ihre speziell für diese Komponente geltenden Styles. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.io/api/core/Component#imports): Ermöglicht Ihnen, die Abhängigkeiten der Komponente anzugeben, die innerhalb ihres Templates verwendet werden können.

Die Eigenschaft `filter` ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben kann.
Mit dem `union`-Typ zeigt Ihnen TypeScript, wenn Sie einen Tippfehler bei dem Wert machen, den Sie der `filter`-Eigenschaft zuweisen, damit Sie den Fehler frühzeitig erkennen können.
Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Punkte anzuzeigen.

Das Array `allItems` enthält die To-do-Punkte und ob sie erledigt sind.
Der erste Punkt, `eat`, hat einen `done`-Wert von true.

Der Getter `get items()` ruft die Punkte aus dem Array `allItems` ab, wenn der `filter` auf `all` gesetzt ist. Andernfalls gibt `get items()` je nach dem, wie der Benutzer die Ansicht filtert, die erledigten oder ausstehenden Punkte zurück.
Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## HTML zum AppComponent-Template hinzufügen

Um die Liste der Punkte im Browser zu sehen, ersetzen Sie den Inhalt von `app.component.html` durch das folgende HTML:

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

Das `<li>` enthält ein `*ngFor`, eine eingebaute Angular-Direktive, die über die Punkte im `items`-Array iteriert.
Für jeden Punkt erstellt `*ngFor` ein neues `<li>`.
Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Punktes zu füllen.

Im Browser sollte die Liste der Punkte wie folgt erscheinen:

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Punkte zur Liste hinzufügen

Eine To-do-Liste benötigt eine Möglichkeit, Punkte hinzuzufügen, also lassen Sie uns loslegen.
Fügen Sie in `app.component.ts` die folgende Methode zur Klasse nach dem `allItems`-Array hinzu:

```ts
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}
```

Die `addItem()`-Methode nimmt einen vom Benutzer bereitgestellten Punkt und fügt ihn dem Array hinzu, wenn der Benutzer auf die **Add**-Schaltfläche klickt.
Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um einen neuen Punkt am Anfang des Arrays und oben in der Liste hinzuzufügen.
Alternativ könnten Sie `push()` verwenden, wodurch der neue Punkt am Ende des Arrays und am unteren Ende der Liste hinzugefügt würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML im `AppComponent`-Template.
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

Im obigen HTML ist `#newItem` eine Template-Variable. Die Template-Variable verwendet in diesem Fall das `<input>`-Element als ihren Wert. Template-Variablen können überall im Template der Komponente referenziert werden.

Wenn der Benutzer einen neuen Punkt in das `<input>`-Feld eingibt und die **Enter**-Taste drückt, fügt die `addItem()`-Methode den Wert dem `allItems`-Array hinzu.
Das Drücken der **Enter**-Taste setzt auch den Wert von `<input>` auf einen leeren String zurück. Die Template-Variable `#newItem` wird verwendet, um den Wert des `<input>`-Elements im Template zuzugreifen.
Anstatt die **Enter**-Taste zu drücken, kann der Benutzer auch die **Add**-Schaltfläche klicken, die die gleiche `addItem()`-Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste von To-dos im Browser angezeigt haben. Das ist ein großer Fortschritt! Natürlich haben wir noch viel mehr zu tun. Im nächsten Artikel werden wir uns damit befassen, unserer Anwendung etwas Stil hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
