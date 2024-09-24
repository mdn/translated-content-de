---
title: Beginn unserer Angular-Notizlisten-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt sind wir bereit, unsere Notizlisten-Anwendung mit Angular zu erstellen. Die fertige Anwendung wird eine Liste von Notizpunkten anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen umfassen. In diesem Artikel werden Sie die Struktur Ihrer Anwendung kennenlernen und bis zur Anzeige einer grundlegenden Liste von Notizpunkten arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die grundlegende App-Struktur zu erstellen, sie so zu gestalten, dass sie eine Liste von Notizpunkten anzeigt, und grundlegende Angular-Konzepte wie Komponentenstruktur, das Teilen von Daten zwischen Komponenten und die Erstellung von Inhalten im Loop zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der Notizanwendung

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten umfasst.
Im Allgemeinen müssen Sie die `index.html` nicht berühren und konzentrieren sich hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die als Komponenten bezeichnet werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen.
Diese Notizanwendung hat zwei Komponenten — eine Komponente als Grundlage für Ihre Anwendung und eine Komponente zur Handhabung der Notizpunkte.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS.
TypeScript wird nach JavaScript transpiliert oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in reinem JavaScript endet, aber Sie haben den Komfort, die erweiterten Funktionen und die vereinfachte Syntax von TypeScript zu nutzen.

### Ändern Sie die Benutzeroberfläche dynamisch mit \*ngIf und \*ngFor

Dieses Tutorial behandelt auch zwei wichtige Angular-Direktiven zur dynamischen Änderung der DOM-Struktur.
Eine Direktive ist wie ein Befehl, den Sie in Ihrem HTML verwenden können, um Änderungen in Ihrer Anwendung zu bewirken.

Die erste Direktive, die in diesem Tutorial behandelt wird, ist Angulars Iterator, `*ngFor`.
`*ngFor` kann DOM-Elemente dynamisch basierend auf Elementen in einem Array erstellen.

Die zweite Direktive, die Sie in diesem Tutorial kennenlernen, ist `*ngIf`.
Sie können `*ngIf` verwenden, um Elemente basierend auf einer Bedingung zum DOM hinzuzufügen oder daraus zu entfernen.
Wenn Benutzer beispielsweise einen Punkt in der Notizliste bearbeiten möchten, können Sie ihnen die Möglichkeit bieten, den Punkt zu bearbeiten.
Wenn sie keinen Punkt bearbeiten möchten, können Sie die Bearbeitungsschnittstelle entfernen.

### Daten zwischen Komponenten teilen

In dieser Notizanwendung konfigurieren Sie Ihre Komponenten so, dass sie Daten teilen.
Um neue Punkte zur Notizliste hinzuzufügen, muss die Hauptkomponente den neuen Punkt an die zweite Komponente senden.
Diese zweite Komponente verwaltet die Punkte und kümmert sich um das Bearbeiten, als erledigt markieren und das Löschen einzelner Punkte.

Das Teilen von Daten zwischen Angular-Komponenten erfolgt mit speziellen Dekoratoren namens `@Input()` und `@Output()`.
Sie verwenden diese Dekoratoren, um anzugeben, dass bestimmte Eigenschaften es ermöglichen, dass Daten in eine Komponente hinein- oder aus ihr herausgehen.
Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, sodass die andere Komponente weiß, dass Daten verfügbar sind.

## Item definieren

Erstellen Sie im `app`-Verzeichnis eine neue Datei mit dem Namen `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Dieses File werden Sie nicht bis [später](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component#add_logic_to_itemcomponent) verwenden, aber es ist eine gute Gelegenheit, Ihr Wissen darüber, was ein ‘item’ ist, zu kennen und aufzuzeichnen. Die `Item`-Schnittstelle erstellt ein `item`-Objektmodell, damit Ihre Anwendung versteht, was ein ‘item’ ist. Für diese Notizliste ist ein ‘item’ ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Logik zur AppComponent hinzufügen

Jetzt, da Sie wissen, was ein ‘item’ ist, können Sie Ihrer Anwendung einige Items geben, indem Sie sie zur App hinzufügen.
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
  componentTitle = "Meine Notizliste";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "essen", done: true },
    { description: "schlafen", done: false },
    { description: "spielen", done: false },
    { description: "lachen", done: false },
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

Die ersten beiden Zeilen sind JavaScript-Imports. In diesem Fall importieren sie Angular-Bibliotheken.
Der `@Component()`-Dekorator spezifiziert Metadaten über die `AppComponent`.
Hier ist mehr Information über die verwendeten Metadaten:

- [`standalone`](https://angular.io/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.io/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht.
  Ihre App wird die Vorlagenabhängigkeiten (Komponenten, Direktiven usw.) direkt mit Imports verwalten, wenn es eine Standalone-Version ist.
- [`selector`](https://angular.io/api/core/Directive#selector): Gibt an, welchen CSS-Selektor Sie in einem Template verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`.
  In der `index.html`, innerhalb des `body`-Tags, hat das Angular CLI `<app-root></app-root>` beim Erstellen Ihrer Anwendung hinzugefügt.
  Sie verwenden alle Komponentenselektoren auf die gleiche Weise, indem Sie sie zu anderen Komponenten-HTML-Templates hinzufügen.
- [`templateUrl`](https://angular.io/api/core/Component#templateurl): Spezifiziert die HTML-Datei, die mit dieser Komponente verknüpft ist. Hier ist es `'./app.component.html'`,
- [`styleUrls`](https://angular.io/api/core/Component#styleurls): Gibt den Speicherort und den Namen der Datei für Ihre Stile an, die speziell auf diese Komponente zutreffen. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.io/api/core/Component#imports): Ermöglicht Ihnen, die Abhängigkeiten der Komponente zu spezifizieren, die innerhalb ihres Templates verwendet werden können.

Die Eigenschaft `filter` ist vom Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte.
Mit dem `union`-Typ, wenn Sie einen Tippfehler im Wert machen, den Sie der Eigenschaft `filter` zuweisen, lässt TypeScript Sie wissen, damit Sie den Fehler frühzeitig entdecken können.
Diese Anleitung zeigt Ihnen, wie Sie später ein Filter hinzufügen, aber Sie können auch einen Filter verwenden, um die Standardliste aller Punkte anzuzeigen.

Das Array `allItems` enthält die Notizpunkte und ob sie erledigt sind.
Der erste Punkt, `essen`, hat einen `done`-Wert von true.

Der Getter, `get items()`, ruft die Items aus dem `allItems`-Array ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Items zurück, je nachdem, wie der Benutzer die Ansicht filtert.
Der Getter legt auch den Namen des Arrays als `items` fest, den Sie im nächsten Abschnitt verwenden werden.

## HTML zum AppComponent-Template hinzufügen

Um die Liste der Items im Browser zu sehen, ersetzen Sie den Inhalt von `app.component.html` mit folgendem HTML:

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>Was möchten Sie heute tun?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

Das `<li>` enthält ein `*ngFor`, eine eingebaute Angular-Direktive, die über die Items im `items`-Array iteriert.
Für jedes Item erstellt `*ngFor` ein neues `<li>`.
Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Items zu füllen.

Im Browser sollten Sie die Liste der Items wie folgt sehen:

```plain
Meine Notizliste
Was möchten Sie heute tun?

* essen
* schlafen
* spielen
* lachen
```

## Items zur Liste hinzufügen

Eine Notizliste benötigt eine Möglichkeit, Items hinzuzufügen, also lassen Sie uns beginnen.
Fügen Sie in `app.component.ts` die folgende Methode nach dem Array `allItems` zur Klasse hinzu:

```ts
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}
```

Die Methode `addItem()` nimmt ein Item, das der Benutzer bereitstellt, und fügt es dem Array hinzu, wenn der Benutzer die **Hinzufügen**-Schaltfläche klickt.
Die Methode `addItem()` verwendet die Array-Methode `unshift()`, um ein neues Item an den Anfang des Arrays und an die Spitze der Liste hinzuzufügen.
Alternativ könnten Sie `push()` verwenden, was das neue Item ans Ende des Arrays und an das Ende der Liste hinzufügen würde.

Um die Methode `addItem()` zu verwenden, bearbeiten Sie das HTML im `AppComponent`-Template.
Ersetzen Sie in `app.component.html` das `<h2>` durch folgendes:

```html
<label for="addItemInput">Was möchten Sie heute tun?</label>

<input
  #newItem
  placeholder="ein Item hinzufügen"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput" />

<button class="btn-primary" (click)="addItem(newItem.value)">Hinzufügen</button>
```

Im obigen HTML ist `#newItem` eine Template-Variable. Die Template-Variable verwendet in diesem Fall das `<input>`-Element als ihren Wert. Template-Variablen können überall im Template der Komponente referenziert werden.

Wenn der Benutzer ein neues Item in das `<input>`-Feld eingibt und **Enter** drückt, fügt die Methode `addItem()` den Wert zum `allItems`-Array hinzu.
Das Drücken der **Enter**-Taste setzt auch den Wert von `<input>` auf einen leeren String zurück. Die Template-Variable `#newItem` wird verwendet, um auf den Wert des `<input>`-Elements im Template zuzugreifen.
Anstatt die **Enter**-Taste zu drücken, kann der Benutzer auch auf die **Hinzufügen**-Schaltfläche klicken, die dieselbe Methode `addItem()` aufruft.

## Zusammenfassung

Mittlerweile sollten Sie Ihre grundlegende Liste von Notizen in Ihrem Browser angezeigt haben. Das ist großer Fortschritt! Natürlich haben wir noch viel mehr zu tun. Im nächsten Artikel werden wir uns das Hinzufügen von Styling zu unserer Anwendung ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
