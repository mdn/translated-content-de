---
title: Beginn unserer Angular-Listenanwendung
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Nun sind wir bereit, mit der Erstellung unserer Aufgabenlisten-Anwendung mit Angular zu beginnen. Die fertige Anwendung wird eine Liste von Aufgaben anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen beinhalten. In diesem Artikel lernen Sie die Struktur Ihrer Anwendung kennen und arbeiten darauf hin, eine einfache Liste von Aufgaben anzuzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        sowie Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Kommandozeilen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die grundlegende App-Struktur zu erstellen, sie zur Anzeige einer Liste von Aufgaben zu bringen und grundlegende Angular-Konzepte wie Komponentenstruktur, Datenaustausch zwischen Komponenten und Schleifeninhalts-Erstellung zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der Aufgabenanwendung

Wie jede Webanwendung hat eine Angular-Anwendung ein `index.html` als Einstiegspunkt. Das `index.html` ist tatsächlich die oberste HTML-Vorlage der App:

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere Komponenten umfasst, die Sie erstellen.
Im Allgemeinen müssen Sie das `index.html` nicht berühren und konzentrieren Ihre Arbeit hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die Komponenten genannt werden.

### Organisieren Ihrer Anwendung mit Komponenten

Komponenten sind ein zentrales Baustein von Angular-Anwendungen.
Diese Aufgabenanwendung hat zwei Komponenten — eine Komponente als Fundament für Ihre Anwendung und eine Komponente zum Verwalten von Aufgaben.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS.
TypeScript wird in JavaScript transpiliert, oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in einfachem JavaScript endet, Sie jedoch den Komfort der erweiterten Funktionen und vereinfachten Syntax von TypeScript nutzen können.

### Dynamisches Ändern der Benutzeroberfläche mit \*ngIf und \*ngFor

Dieses Tutorial behandelt auch zwei wichtige Angular-Direktiven zur dynamischen Veränderung der Struktur des DOM.
Eine Direktive ist wie ein Befehl, den Sie in Ihrem HTML verwenden können, um Änderungen in Ihrer Anwendung zu bewirken.

Die erste Direktive, die dieses Tutorial behandelt, ist Angulars Iterator, `*ngFor`.
`*ngFor` kann DOM-Elemente dynamisch basierend auf Elementen in einem Array erstellen.

Die zweite Direktive, die Sie in diesem Tutorial lernen, ist `*ngIf`.
Sie können `*ngIf` verwenden, um Elemente basierend auf einer Bedingung in das DOM einzufügen oder zu entfernen.
Beispielsweise, wenn Benutzer ein Element in der Aufgabenliste bearbeiten möchten, können Sie ihnen die Möglichkeit dazu bieten.
Wenn sie kein Element bearbeiten möchten, können Sie die Schnittstelle zum Bearbeiten entfernen.

### Daten zwischen Komponenten austauschen

In dieser Aufgabenanwendung konfigurieren Sie Ihre Komponenten so, dass sie Daten austauschen.
Um neue Elemente zur Aufgabenliste hinzuzufügen, muss die Hauptkomponente das neue Element an die zweite Komponente senden.
Diese zweite Komponente verwaltet die Elemente und kümmert sich um das Bearbeiten, als erledigt markieren und Löschen einzelner Elemente.

Daten zwischen Angular-Komponenten teilen Sie mithilfe spezieller Dekoratoren namens `@Input()` und `@Output()`.
Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften Daten in eine Komponente hinein oder herausgehen lassen.
Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, sodass die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Erstellen Sie im `app`-Verzeichnis eine neue Datei namens `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei [später](/de/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist eine gute Gelegenheit, Ihr Verständnis davon, was ein `item` ist, festzuhalten. Das `Item`-Interface erstellt ein `item`-Objektmodell, sodass Ihre Anwendung verstehen wird, was ein `item` ist. Für diese Aufgabenliste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zu AppComponent hinzufügen

Jetzt, da Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Elemente hinzufügen, indem Sie sie zur App hinzufügen.
Ersetzen Sie in `app.component.ts` den Inhalt durch den folgenden:

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
Der `@Component()` Dekorator gibt Metadaten über den `AppComponent` an.
Hier ist eine genauere Beschreibung der Metadaten, die wir verwenden:

- [`standalone`](https://angular.io/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.io/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht.
  Ihre App wird direkt Template-Abhängigkeiten (Komponenten, Direktiven usw.) mit Importen verwalten, wenn sie ein Standalone ist.
- [`selector`](https://angular.io/api/core/Directive#selector): Gibt Ihnen den CSS-Selektor an, den Sie in einer Vorlage verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`.
  Im `index.html` innerhalb des `body`-Tags fügte das Angular CLI `<app-root></app-root>` hinzu, als Ihre Anwendung generiert wurde.
  Sie verwenden alle Komponenten-Selektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten-HTML-Vorlagen hinzufügen.
- [`templateUrl`](https://angular.io/api/core/Component#templateurl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft ist.
  Hier ist es, `'./app.component.html'`,
- [`styleUrls`](https://angular.io/api/core/Component#styleurls): Bietet den Speicherort und Namen der Datei für Ihre Stile, die speziell auf diese Komponente angewendet werden. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.io/api/core/Component#imports): Ermöglicht es Ihnen, die Abhängigkeiten der Komponente zu spezifizieren, die innerhalb ihrer Vorlage verwendet werden können.

Die `filter`-Eigenschaft ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben kann.
Mit dem `union`-Typ, wenn Sie einen Tippfehler im Wert machen, den Sie der `filter`-Eigenschaft zuweisen, lässt Sie TypeScript wissen, sodass Sie den Fehler frühzeitig beheben können.
Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Elemente anzuzeigen.

Das `allItems`-Array enthält die Aufgaben und ob sie erledigt sind.
Das erste Element, `eat`, hat einen `done`-Wert von true.

Der Getter, `get items()`, ruft die Elemente aus dem `allItems`-Array ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Elemente zurück, abhängig davon, wie der Benutzer die Darstellung filtert.
Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden.

## HTML zur AppComponent-Vorlage hinzufügen

Um die Liste der Elemente im Browser zu sehen, ersetzen Sie den Inhalt von `app.component.html` durch das folgende HTML:

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

Das `<li>` enthält ein `*ngFor`, eine eingebaute Angular-Direktive, die über die Elemente im `items`-Array iteriert.
Für jedes Element erstellt `*ngFor` ein neues `<li>`.
Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Elements zu füllen.

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

Eine Aufgabenliste benötigt eine Möglichkeit, Elemente hinzuzufügen. Also legen wir los.
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

Die `addItem()`-Methode nimmt ein Element, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer die **Hinzufügen**-Schaltfläche klickt.
Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um ein neues Element an den Anfang des Arrays und der Liste hinzuzufügen.
Alternativ könnten Sie `push()` verwenden, was das neue Element ans Ende des Arrays und der Liste hinzufügen würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML in der `AppComponent`-Vorlage.
In `app.component.html` ersetzen Sie das `<h2>` durch folgendes:

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

Im obigen HTML ist `#newItem` eine Template-Variable. Die Template-Variable verwendet in diesem Fall das `<input>`-Element als ihren Wert. Template-Variablen können überall in der Vorlage der Komponente referenziert werden.

Wenn der Benutzer ein neues Element in das `<input>`-Feld eingibt und **Enter** drückt, fügt die `addItem()`-Methode den Wert dem `allItems`-Array hinzu.
Das Drücken der **Enter**-Taste setzt auch den Wert von `<input>` auf einen leeren String zurück. Die Template-Variable `#newItem` wird verwendet, um den Wert des `<input>`-Elements in der Vorlage zuzugreifen.
Anstelle der **Enter**-Taste kann der Benutzer auch auf die **Hinzufügen**-Schaltfläche klicken, die die gleiche `addItem()`-Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste von Aufgaben in Ihrem Browser anzeigen lassen. Das ist großartiger Fortschritt! Natürlich haben wir noch viel mehr zu tun. Im nächsten Artikel werden wir uns damit befassen, unserer Anwendung etwas Stil zu verleihen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
