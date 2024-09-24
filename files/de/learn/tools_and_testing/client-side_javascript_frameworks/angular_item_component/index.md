---
title: Erstellen einer Artikelkomponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Komponenten bieten Ihnen eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die einzelnen Artikel in der Liste zu verwalten sowie die Funktionen zum Überprüfen, Bearbeiten und Löschen hinzuzufügen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich wie Ereignisse funktionieren, um Updates zu verwalten. Funktionen zum Überprüfen, Bearbeiten und Löschen hinzuzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Kommandozeile eine Komponente mit dem Namen `item` mit folgendem CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem von Ihnen angegebenen Namen. Hier wird der Ordner- und Komponentenname `item` festgelegt. Sie finden das `item` Verzeichnis im `app` Ordner:

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

Wie bei der `AppComponent` besteht auch die `ItemComponent` aus den folgenden Dateien:

- `item.component.html` für HTML
- `item.component.ts` für Logik
- `item.component.css` für Stile
- `item.component.spec.ts` für das Testen der Komponente

Sie können einen Verweis auf die HTML- und CSS-Dateien in den Metadaten des `@Component()` Dekorators in `item.component.ts` sehen.

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
```

## HTML für die ItemComponent hinzufügen

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer die Möglichkeit zu geben, Artikel als erledigt abzuhaken, zu bearbeiten oder zu löschen.

Fügen Sie das Markup zum Verwalten von Artikeln hinzu, indem Sie den Platzhalterinhalt in `item.component.html` mit dem folgenden ersetzen:

```html
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">\{{item.description}}</label>

  <div class="btn-wrapper" *ngIf="!editable">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>

  <!-- Dieser Abschnitt wird nur angezeigt, wenn der Benutzer die Schaltfläche "Edit" klickt -->
  <div *ngIf="editable">
    <input
      class="sm-text-input"
      placeholder="edit item"
      [value]="item.description"
      #editedItem
      (keyup.enter)="saveItem(editedItem.value)" />

    <div class="btn-wrapper">
      <button class="btn" (click)="editable = !editable">Cancel</button>
      <button class="btn btn-save" (click)="saveItem(editedItem.value)">
        Save
      </button>
    </div>
  </div>
</div>
```

Die erste Eingabe ist ein Kontrollkästchen, damit Benutzer Artikel abhaken können, wenn ein Artikel abgeschlossen ist. Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen bedeuten Angular-Interpolation. Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items` Array abzurufen. Im nächsten Abschnitt wird erläutert, wie Komponenten Daten im Detail austauschen.

Die nächsten zwei Schaltflächen zum Bearbeiten und Löschen des aktuellen Artikels befinden sich in einem `<div>`. Auf diesem `<div>` befindet sich ein `*ngIf`, eine eingebaute Angular-Direktive, die Sie verwenden können, um die Struktur des DOM dynamisch zu ändern. Dieses `*ngIf` bedeutet, dass, wenn `editable` `false` ist, dieses `<div>` im DOM ist. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` aus dem DOM.

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

Wenn ein Benutzer auf die **Edit**-Schaltfläche klickt, wird `editable` auf wahr gesetzt, was dieses `<div>` und seine Kinder aus dem DOM entfernt. Wenn anstatt auf **Edit** zu klicken, ein Benutzer auf **Delete** klickt, erzeugt die `ItemComponent` ein Ereignis, das die `AppComponent` über die Löschung benachrichtigt.

Ein `*ngIf` befindet sich auch auf dem nächsten `<div>`, jedoch mit einem `editable` Wert von `true`. In diesem Fall, wenn `editable` `true` ist, fügt Angular das `<div>` und seine Kindelemente `<input>` und `<button>` in das DOM ein.

```html
<!-- Dieser Abschnitt wird nur angezeigt, wenn der Benutzer die Schaltfläche "Edit" klickt -->
<div *ngIf="editable">
  <input
    class="sm-text-input"
    placeholder="edit item"
    [value]="item.description"
    #editedItem
    (keyup.enter)="saveItem(editedItem.value)" />

  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Cancel</button>
    <button class="btn btn-save" (click)="saveItem(editedItem.value)">
      Save
    </button>
  </div>
</div>
```

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Artikels gebunden. Diese Bindung macht die `description` des Artikels zum Wert des `<input>`. Wenn die `description` also `essen` ist, steht `essen` bereits im `<input>`. Auf diese Weise, wenn der Benutzer den Artikel bearbeitet, ist der Wert des `<input>` bereits `essen`.

Die Vorlagevariable `#editedItem` im `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eintippt, in einer Variablen namens `editedItem` speichert. Das `keyup`-Ereignis ruft die `saveItem()` Methode auf und übergibt den Wert von `editedItem`, wenn der Benutzer anstelle des Klicks auf **Save** die Eingabetaste drückt.

Wenn ein Benutzer auf die **Cancel** Schaltfläche klickt, wird `editable` auf `false` umgeschaltet, wodurch das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden. Wenn `editable` `false` ist, setzt Angular das `<div>` mit den **Edit** und **Delete** Schaltflächen wieder in das DOM ein.

Das Klicken auf die **Save**-Schaltfläche ruft die `saveItem()` Methode auf. Die `saveItem()` Methode nimmt den Wert des `#editedItem` Elements und ändert die `description` des Artikels in die Zeichenkette `editedItem.value`.

## Bereiten Sie die AppComponent vor

Im nächsten Abschnitt fügen Sie Code hinzu, der auf der Kommunikation zwischen der `AppComponent` und der `ItemComponent` beruht. Fügen Sie die folgende Zeile in die Nähe des Anfangs der `app.component.ts` Datei ein, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie das Folgende zur Klasse derselben Datei hinzufügen:

```js
remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

Die `remove()` Methode verwendet die JavaScript-Methode `Array.splice()`, um ein Element am `indexOf` des betreffenden Elements zu entfernen. Auf Deutsch bedeutet dies, dass die `splice()` Methode das Element aus dem Array entfernt. Weitere Informationen zur `splice()` Methode finden Sie in der [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die Benutzeroberfläche der `ItemComponent` zu verwenden, müssen Sie der Komponente Logik wie Funktionen und Möglichkeiten zum Ein- und Ausgeben von Daten hinzufügen. Bearbeiten Sie die JavaScript-Importe in `item.component.ts` wie folgt:

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Ergänzung von `Input`, `Output` und `EventEmitter` ermöglicht es `ItemComponent`, Daten mit der `AppComponent` auszutauschen. Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist. Sie können das `@Component` aktualisieren, um das [`CommonModule`](https://angular.io/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, damit wir die `ngIf`-Direktiven nutzen können:

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
```

Weiter unten in `item.component.ts` ersetzen Sie die generierte `ItemComponent` Klasse durch die folgende:

```js
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}
```

Die `editable` Eigenschaft hilft beim Umschalten eines Abschnitts der Vorlage, in dem ein Benutzer einen Artikel bearbeiten kann. `editable` ist dieselbe Eigenschaft im HTML wie in der `*ngIf` Anweisung, `*ngIf="editable"`. Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten. Ein `@Input()` dient als "Tür" für Daten, die in die Komponente gelangen, und ein `@Output()` fungiert als "Tür" für Daten, die aus der Komponente herausgehen, damit eine andere Komponente diese Daten empfangen kann. Ein `@Output()` muss vom Typ `EventEmitter` sein, sodass eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Deklaration der Klassen-Eigenschaft wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item` Feld immer initialisiert und nicht `undefined` ist, auch wenn dies aus der Definition des Konstruktors nicht erkennbar ist. Wenn dieser Operator in Ihrem Code nicht enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen verwenden, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um festzulegen, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann. Verwenden Sie `@Output()` zusammen mit `EventEmitter`, um festzulegen, dass der Wert einer Eigenschaft die Komponente verlassen kann, damit eine andere Komponente diese Daten empfangen kann.

Die `saveItem()` Methode nimmt als Argument eine `description` vom Typ `string`. Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er einen Artikel in der Liste bearbeitet. Diese `description` ist dieselbe Zeichenkette aus dem `<input>` mit der Vorlagevariable `#editedItem`.

Wenn der Benutzer keinen Wert eingibt, aber auf **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht. Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne dass etwas im HTML-`<input>` ist, und die `description` würde eine leere Zeichenkette werden.

Wenn ein Benutzer Text eingibt und auf Speichern klickt, setzt `saveItem()` `editable` auf false, was dazu führt, dass das `*ngIf` in der Vorlage die Bearbeitungsfunktion entfernt und die **Edit**- und **Delete**-Schaltflächen erneut rendert.

Obwohl die Anwendung an diesem Punkt kompiliert werden sollte, müssen Sie die `ItemComponent` in der `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden Sie die ItemComponent in der AppComponent

Das Einbinden einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage ein. Angular legt den Selektor einer Komponente in den Metadaten des `@Component()` Dekorators fest. In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```js
@Component({
  selector: 'app-item',
  // ...
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem Selektor entspricht, den Sie für die Komponentenklasse zu `app.component.html` definiert haben. Ersetzen Sie die aktuelle ungeordnete Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

```html
<h2>
  \{{items.length}}
  <span *ngIf="items.length === 1; else elseBlock">item</span>
  <ng-template #elseBlock>items</ng-template>
</h2>

<ul>
  <li *ngFor="let i of items">
    <app-item (remove)="remove(i)" [item]="i"></app-item>
  </li>
</ul>
```

Ändern Sie die `imports` in `app.component.ts`, um `ItemComponent` sowie `CommonModule` einzuschließen:

```js
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})
```

Die doppelten geschweiften Klammersyntax, `\{{}}`, im `<h2>` interpoliert die Länge des `items` Arrays und zeigt die Nummer an.

Das `<span>` im `<h2>` verwendet ein `*ngIf` und `else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll. Wenn nur ein einzelner Artikel in der Liste ist, wird das `<span>` mit "item" angezeigt. Andernfalls, wenn die Länge des `items` Arrays etwas anderes als `1` ist, zeigt das `<ng-template>`, welches wir `elseBlock` genannt haben, mit der Syntax `#elseBlock`, statt des `<span>` an. Sie können Angulars `<ng-template>` verwenden, wenn Sie nicht möchten, dass Inhalte standardmäßig gerendert werden. In diesem Fall zeigt das `*ngIf`, wenn die Länge des `items` Arrays nicht `1` ist, den `elseBlock` an und nicht das `<span>`.

Das `<li>` verwendet Angulars Wiederholungsdirektive, `*ngFor`, um alle Artikel im `items` Array zu durchlaufen. Angulars `*ngFor`, ähnlich wie `*ngIf`, ist eine weitere Direktive, die Ihnen hilft, die Struktur des DOM zu ändern und dabei weniger Code zu schreiben. Für jeden `item` wiederholt Angular das `<li>` und alles darin enthaltene, einschließlich `<app-item>`. Dies bedeutet, dass Angular für jeden Artikel im Array eine weitere Instanz von `<app-item>` erstellt. Für jede Anzahl von Artikeln im Array würde Angular so viele `<li>` Elemente erstellen.

Sie können ein `*ngFor` auch auf anderen Elementen verwenden, wie `<div>`, `<span>`, oder `<p>`, um nur einige zu nennen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Artikels, die an die `remove`-Eigenschaft in der `ItemComponent` gebunden ist. Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Nun sollten Sie in der Lage sein, Artikel in der Liste zu bearbeiten und zu löschen. Wenn Sie Artikel hinzufügen oder löschen, sollte sich auch die Anzahl der Artikel ändern. Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Stile hinzu.

## Stile zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um stilspezifische Anpassungen für diese Komponente hinzuzufügen. Das folgende CSS fügt grundlegende Stile, eine Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

Fügen Sie die folgenden Stile in `item.component.css` ein.

```css
.item {
  padding: 0.5rem 0 0.75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  /* Flexbox-Stile für Menütasten */
  flex-basis: 49%;
}

.btn-save {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: #fff;
  color: #000;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: #fff;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: #000;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 1rem 0;
}

/* Benutzerdefinierte Kontrollkästchen
Adaptiert von https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Basis für Label-Styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* Kontrollkästchen-Aspekt */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* Geprüfter Markierungsausdruck */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
}
/* Änderungen im Geprüfter Markierungsausdruck */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* Barrierefreiheit */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}
```

## Zusammenfassung

Sie sollten jetzt eine stilisierte Angular To-do-Listen-Anwendung haben, die Artikel hinzufügen, bearbeiten und entfernen kann. Der nächste Schritt besteht darin, das Filtern hinzuzufügen, damit Sie Artikel ansehen können, die bestimmte Kriterien erfüllen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
