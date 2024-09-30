---
title: Anfang unserer Angular-To-Do-Liste-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt sind wir bereit, damit zu beginnen, unsere To-Do-Listen-Anwendung mit Angular zu erstellen. Die fertiggestellte Anwendung wird eine Liste von To-Do-Einträgen anzeigen und Funktionen zum Bearbeiten, Löschen und Hinzufügen beinhalten. In diesem Artikel werden Sie die Struktur Ihrer Anwendung kennenlernen und bis zur Anzeige einer grundlegenden Liste von To-Do-Einträgen arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        sowie Wissen über die
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegende App-Struktur zu erstellen, diese zur Anzeige einer Liste von To-Do-Einträgen zu bringen und grundlegende Angular-Konzepte wie Komponentenstruktur, Datenaustausch zwischen Komponenten und das Erstellen von Inhalten in Schleifen zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Die Struktur der To-Do-Anwendung

Wie jede Webanwendung hat auch eine Angular-Anwendung eine `index.html` als Einstiegspunkt. Die `index.html` ist tatsächlich das oberste HTML-Template der App:

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

Innerhalb des `<body>`-Tags verwendet Angular ein spezielles Element — `<app-root>` — um Ihre Hauptkomponente einzufügen, die wiederum andere von Ihnen erstellte Komponenten beinhaltet. In der Regel müssen Sie die `index.html` nicht anrühren und konzentrieren Ihre Arbeit hauptsächlich auf spezialisierte Bereiche Ihrer Anwendung, die als Komponenten bezeichnet werden.

### Organisieren Sie Ihre Anwendung mit Komponenten

Komponenten sind ein zentrales Bauelement von Angular-Anwendungen. Diese To-Do-Anwendung hat zwei Komponenten — eine Komponente als Grundlage für Ihre Anwendung und eine Komponente für die Handhabung von To-Do-Einträgen.

Jede Komponente besteht aus einer TypeScript-Klasse, HTML und CSS. TypeScript wird in JavaScript transpiliert oder umgewandelt, was bedeutet, dass Ihre Anwendung letztendlich in reinem JavaScript endet, aber Sie den Vorteil haben, TypeScript's erweiterte Funktionen und optimierte Syntax zu nutzen.

### Dynamische Änderungen der UI mit \*ngIf und \*ngFor

Dieses Tutorial behandelt auch zwei wichtige Angular-Direktiven zur dynamischen Änderung der Struktur des DOM. Eine Direktive ist wie ein Befehl, den Sie in Ihrem HTML verwenden können, um Änderungen in Ihrer Anwendung zu bewirken.

Die erste Direktive, die in diesem Tutorial behandelt wird, ist Angulars Iterator `*ngFor`. `*ngFor` kann dynamisch DOM-Elemente basierend auf Einträgen in einem Array erstellen.

Die zweite Direktive, die Sie in diesem Tutorial lernen, ist `*ngIf`. Mit `*ngIf` können Sie Elemente basierend auf einer Bedingung zum DOM hinzufügen oder daraus entfernen. Zum Beispiel, wenn Benutzer einen Eintrag in der To-Do-Liste bearbeiten möchten, können Sie ihnen die Möglichkeit geben, den Eintrag zu bearbeiten. Wenn sie keinen Eintrag bearbeiten möchten, können Sie die Bearbeitungsoberfläche entfernen.

### Austausch von Daten zwischen Komponenten

In dieser To-Do-Anwendung konfigurieren Sie Ihre Komponenten für den Datenaustausch. Um neue Einträge zur To-Do-Liste hinzuzufügen, muss die Hauptkomponente den neuen Eintrag an die zweite Komponente senden. Diese zweite Komponente verwaltet die Einträge und kümmert sich um das Bearbeiten, Markieren als erledigt und das Löschen einzelner Einträge.

Sie erreichen den Austausch von Daten zwischen Angular-Komponenten mit speziellen Dekoratoren, die `@Input()` und `@Output()` genannt werden. Mit diesen Dekoratoren können Sie festlegen, dass bestimmte Eigenschaften Daten in eine Komponente hinein oder aus einer Komponente heraus zulassen. Um `@Output()` zu verwenden, lösen Sie ein Ereignis in einer Komponente aus, damit die andere Komponente weiß, dass Daten verfügbar sind.

## Definieren Sie Item

Erstellen Sie im `app`-Verzeichnis eine neue Datei namens `item.ts` mit folgendem Inhalt:

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

Sie werden diese Datei nicht verwenden, bis [später](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component#add_logic_to_itemcomponent), aber es ist ein guter Zeitpunkt, Ihr Wissen darüber, was ein `item` ist, zu kennen und zu notieren. Das `Item`-Interface erstellt ein `item`-Objektmodell, sodass Ihre Anwendung versteht, was ein `item` ist. Für diese To-Do-Liste ist ein `item` ein Objekt, das eine Beschreibung hat und als erledigt markiert werden kann.

## Fügen Sie Logik zur AppComponent hinzu

Nun, da Sie wissen, was ein `item` ist, können Sie Ihrer Anwendung einige Einträge geben, indem Sie sie der App hinzufügen. Ersetzen Sie in `app.component.ts` den Inhalt mit folgendem:

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

Die ersten beiden Zeilen sind JavaScript-Imports. In diesem Fall importieren sie Angular-Bibliotheken. Der Dekorator `@Component()` gibt Metadaten zur `AppComponent` an. Hier ist mehr Information über die Metadaten, die wir verwenden:

- [`standalone`](https://angular.io/api/core/Component#standalone): Beschreibt, ob die Komponente ein [NgModule](https://angular.io/guide/ngmodules#the-basic-ngmodule) benötigt oder nicht. Ihre App verwaltet direkt die Template-Abhängigkeiten (Komponenten, Direktiven usw.) durch Importe, wenn es eine eigenständige ist.
- [`selector`](https://angular.io/api/core/Directive#selector): Gibt Ihnen den CSS-Selektor, den Sie in einem Template verwenden, um diese Komponente zu platzieren. Hier ist es `'app-root'`. Im `index.html`, innerhalb des `body`-Tags, hat das Angular CLI `<app-root></app-root>` hinzugefügt, als es Ihre Anwendung erzeugt hat. Sie verwenden alle Komponenten-Selektoren auf dieselbe Weise, indem Sie sie zu anderen Komponenten-HTML-Templates hinzufügen.
- [`templateUrl`](https://angular.io/api/core/Component#templateurl): Gibt die HTML-Datei an, die mit dieser Komponente verknüpft wird. Hier ist es `'./app.component.html'`.
- [`styleUrls`](https://angular.io/api/core/Component#styleurls): Gibt den Ort und den Namen der Datei für Ihre Stile an, die speziell für diese Komponente gelten. Hier ist es `'./app.component.css'`.
- [`imports`](https://angular.io/api/core/Component#imports): Ermöglicht es Ihnen, die Abhängigkeiten der Komponente anzugeben, die innerhalb ihres Templates verwendet werden können.

Die Eigenschaft `filter` hat den Typ `union`, was bedeutet, dass `filter` den Wert `all`, `active` oder `done` haben könnte. Mit dem `union`-Typ, wenn Sie einen Tippfehler im zugewiesenen Wert zur `filter`-Eigenschaft machen, lässt Sie TypeScript wissen, damit Sie den Fehler frühzeitig erkennen können. Dieser Leitfaden zeigt Ihnen, wie Sie das Filtern in einem späteren Schritt hinzufügen können, aber Sie können auch einen Filter verwenden, um die Standardliste aller Einträge anzuzeigen.

Das Array `allItems` enthält die To-Do-Einträge und ob sie erledigt sind. Der erste Eintrag, `eat`, hat einen `done`-Wert von true.

Der Getter, `get items()`, ruft die Einträge aus dem `allItems`-Array ab, wenn der `filter` gleich `all` ist. Andernfalls gibt `get items()` die erledigten oder ausstehenden Einträge zurück, abhängig davon, wie der Benutzer die Ansicht filtert. Der Getter bestimmt auch den Namen des Arrays als `items`, welches Sie im nächsten Abschnitt verwenden werden.

## HTML zum AppComponent-Template hinzufügen

Um die Liste der Einträge im Browser zu sehen, ersetzen Sie die Inhalte von `app.component.html` mit folgendem HTML:

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

Das `<li>` enthält ein `*ngFor`, eine integrierte Angular-Direktive, die über die Einträge im `items`-Array iteriert. Für jedes Element erstellt `*ngFor` ein neues `<li>`. Die doppelten geschweiften Klammern, die `item.description` enthalten, weisen Angular an, jedes `<li>` mit dem Text der Beschreibung jedes Elements zu füllen.

Im Browser sollten Sie die Liste der Einträge wie folgt sehen:

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Einträge zur Liste hinzufügen

Eine To-Do-Liste braucht eine Möglichkeit, Einträge hinzuzufügen, also lassen Sie uns anfangen. Fügen Sie in `app.component.ts` die folgende Methode zur Klasse nach dem `allItems`-Array hinzu:

```ts
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}
```

Die `addItem()`-Methode nimmt einen Eintrag, den der Benutzer bereitstellt, und fügt ihn dem Array hinzu, wenn der Benutzer auf die Schaltfläche **Add** klickt. Die `addItem()`-Methode verwendet die Array-Methode `unshift()`, um einen neuen Eintrag am Anfang des Arrays und damit an der Spitze der Liste hinzuzufügen. Sie könnten alternativ `push()` verwenden, was den neuen Eintrag ans Ende des Arrays und damit an das Ende der Liste hinzufügen würde.

Um die `addItem()`-Methode zu verwenden, bearbeiten Sie das HTML im `AppComponent`-Template. Ersetzen Sie in `app.component.html` das `<h2>` mit folgendem:

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

Wenn der Benutzer einen neuen Eintrag in das `<input>`-Feld eingibt und die **Enter**-Taste drückt, fügt die `addItem()`-Methode den Wert dem `allItems`-Array hinzu. Das Drücken der **Enter**-Taste setzt auch den Wert von `<input>` auf einen leeren String zurück. Die Template-Variable `#newItem` wird verwendet, um den Wert des `<input>`-Elements im Template zuzugreifen. Anstatt die **Enter**-Taste zu drücken, kann der Benutzer auch die **Add**-Schaltfläche klicken, die dieselbe `addItem()`-Methode aufruft.

## Zusammenfassung

Bis jetzt sollten Sie Ihre grundlegende Liste von To-Dos in Ihrem Browser sehen. Das ist ein großer Fortschritt! Natürlich haben wir noch viel mehr zu tun. Im nächsten Artikel werden wir uns mit dem Hinzufügen einiger Styles zu unserer Anwendung beschäftigen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
