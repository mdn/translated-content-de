---
title: Erstellen einer Item-Komponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Behandlung der einzelnen Elemente in der Liste und das Hinzufügen von Funktionen zum Überprüfen, Bearbeiten und Löschen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        sowie Kenntnisse des
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminals/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten lernen, einschließlich der Funktionsweise von Ereignissen zur Bearbeitung von Aktualisierungen. Hinzufügen von Funktionen zum Überprüfen, Bearbeiten und Löschen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Kommandozeile eine Komponente mit dem Namen `item` mit dem folgenden CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem angegebenen Namen.
Hier sind der Ordner- und Komponentenname `item`.
Sie finden das `item`-Verzeichnis im `app`-Ordner:

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

Wie bei der `AppComponent` besteht die `ItemComponent` aus den folgenden Dateien:

- `item.component.html` für HTML
- `item.component.ts` für Logik
- `item.component.css` für Styles
- `item.component.spec.ts` für das Testen der Komponente

Sie können einen Verweis auf die HTML- und CSS-Dateien in den Metadaten des `@Component()`-Dekorators in `item.component.ts` sehen.

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

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu geben, Elemente als erledigt zu markieren, sie zu bearbeiten oder zu löschen.

Fügen Sie das Markup zur Verwaltung der Elemente hinzu, indem Sie den Platzhalterinhalt in `item.component.html` durch Folgendes ersetzen:

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

  <!-- This section shows only if user clicks Edit button -->
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

Das erste Eingabefeld ist ein Kontrollkästchen, damit Benutzer Elemente abhaken können, wenn ein Element abgeschlossen ist. Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen weisen auf die Interpolation von Angular hin. Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen. Der nächste Abschnitt erklärt detailliert, wie Komponenten Daten teilen.

Die nächsten beiden Schaltflächen zum Bearbeiten und Löschen des aktuellen Elements befinden sich in einem `<div>`. Auf diesem `<div>` befindet sich ein `*ngIf`, eine in Angular eingebaute Direktive, die Sie verwenden können, um die Struktur des DOM dynamisch zu ändern. Dieses `*ngIf` bedeutet, dass, wenn `editable` `false` ist, dieses `<div>` im DOM ist. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` aus dem DOM.

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

Wenn ein Benutzer auf die **Edit**-Schaltfläche klickt, wird `editable` auf `true` gesetzt, was dieses `<div>` und seine Kinder aus dem DOM entfernt. Wenn stattdessen ein Benutzer **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen informiert.

Ein `*ngIf` befindet sich auch auf dem nächsten `<div>`, ist jedoch auf einen `editable`-Wert von `true` gesetzt. In diesem Fall setzt Angular, wenn `editable` `true` ist, das `<div>` und seine Kind-Elemente `<input>` und `<button>` in das DOM ein.

```html
<!-- This section shows only if user clicks Edit button -->
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

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Elements gebunden. Diese Bindung macht die `description` des Elements zum Wert des `<input>`. Wenn also die `description` `essen` ist, ist die `description` bereits im `<input>`. Auf diese Weise ist, wenn der Benutzer das Element bearbeitet, der Wert des `<input>` bereits `essen`.

Die Template-Variable `#editedItem` auf dem `<input>` bedeutet, dass Angular alles speichert, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem`. Das `keyup`-Ereignis ruft die `saveItem()`-Methode auf und übergibt den `editedItem`-Wert, wenn der Benutzer anstelle von **Save** **Enter** drückt.

Wenn ein Benutzer auf die **Cancel**-Schaltfläche klickt, wechselt `editable` zu `false`, wodurch das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden. Wenn `editable` `false` ist, setzt Angular `<div>` mit den **Edit**- und **Delete**-Schaltflächen zurück in das DOM.

Der Klick auf die **Save**-Schaltfläche ruft die `saveItem()`-Methode auf. Die `saveItem()`-Methode nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in die Zeichenkette `editedItem.value`.

## AppComponent vorbereiten

Im nächsten Abschnitt fügen Sie Code hinzu, der auf der Kommunikation zwischen der `AppComponent` und der `ItemComponent` basiert. Fügen Sie die folgende Zeile nahe dem Anfang der Datei `app.component.ts` hinzu, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie das Folgende in dieselbe Datei zur Klasse hinzufügen:

```js
remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

Die `remove()`-Methode verwendet die JavaScript-Methode `Array.splice()`, um ein Element am `indexOf` des betreffenden Elements zu entfernen. Einfach ausgedrückt bedeutet dies, dass die `splice()`-Methode das Element aus dem Array entfernt. Weitere Informationen zur `splice()`-Methode finden Sie in der [Dokumentation zu `Array.prototype.splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die Benutzeroberfläche der `ItemComponent` zu verwenden, müssen Sie der Komponente Logik wie Funktionen und Möglichkeiten zum Ein- und Ausgeben von Daten hinzufügen. Bearbeiten Sie die JavaScript-Imports in `item.component.ts` wie folgt:

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Hinzufügung von `Input`, `Output` und `EventEmitter` ermöglicht es, dass `ItemComponent` Daten mit `AppComponent` teilen kann. Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist. Sie können das `@Component` aktualisieren, um [`CommonModule`](https://angular.io/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, damit wir die `ngIf`-Direktiven verwenden können:

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
```

Weiter unten in `item.component.ts`, ersetzen Sie die generierte `ItemComponent`-Klasse durch Folgendes:

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

Die `editable`-Eigenschaft hilft, einen Abschnitt der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann. `editable` ist dieselbe Eigenschaft im HTML wie in der `*ngIf`-Anweisung, `*ngIf="editable"`. Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten. Ein `@Input()` dient als Türeingang für Daten, die in die Komponente kommen, und ein `@Output()` als Türeingang für Daten, die die Komponente verlassen. Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Deklaration der Klassen-Eigenschaft wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator sagt TypeScript, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, auch wenn TypeScript dies aus der Konstruktor-Definition nicht ableiten kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente stammen kann. Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die `saveItem()`-Methode nimmt als Argument eine `description` vom Typ `string`. Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet. Diese `description` ist dieselbe Zeichenfolge aus dem `<input>` mit der Template-Variable `#editedItem`.

Wenn der Benutzer keinen Wert eingibt, aber auf **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht. Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne etwas im HTML-`<input>` einzugeben, und die `description` würde eine leere Zeichenkette werden.

Wenn ein Benutzer Text eingibt und auf **Save** klickt, setzt `saveItem()` `editable` auf false, was dazu führt, dass das `*ngIf` in der Vorlage die Bearbeitungsfunktion entfernt und die **Edit**- und **Delete**-Schaltflächen erneut anzeigt.

Obwohl die Anwendung an diesem Punkt kompiliert werden sollte, müssen Sie die `ItemComponent` in `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Das Einfügen einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den Selektor der `ItemComponent` in die Vorlage der `AppComponent`. Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an. In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```js
@Component({
  selector: 'app-item',
  // ...
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>`, das dem Selektor entspricht, den Sie für die Komponente in `app.component.html` definiert haben, hinzu. Ersetzen Sie die aktuelle ungeordnete Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

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

Mit der doppelten geschweiften Klammer-Syntax, `\{{}}`, im `<h2>` wird die Länge des `items`-Arrays interpoliert und die Anzahl angezeigt.

Das `<span>` im `<h2>` verwendet `*ngIf` und `else`, um zu bestimmen, ob `<h2>` `item` oder `items` anzeigen soll. Wenn nur ein einziges Element in der Liste steht, wird das `<span>`, das `item` enthält, angezeigt. Andernfalls, wenn die Länge des `items`-Arrays etwas anderes als `1` ist, zeigt das `<ng-template>`, das wir mit der Syntax `#elseBlock` als `elseBlock` benannt haben, anstelle des `<span>` an. Sie können das `<ng-template>` von Angular verwenden, wenn Sie nicht möchten, dass Inhalte standardmäßig angezeigt werden. In diesem Fall, wenn die Länge des `items`-Arrays nicht `1` ist, zeigt `*ngIf` den `elseBlock` und nicht das `<span>` an.

Das `<li>` verwendet die Wiederholungs-Direktive `*ngFor` von Angular, um alle Elemente im `items`-Array zu durchlaufen. Angulars `*ngFor` wie `*ngIf`, ist eine weitere Direktive, die Ihnen hilft, die Struktur des DOM zu ändern, während Sie weniger Code schreiben. Für jedes `item` wiederholt Angular das `<li>` und alles darin, einschließlich `<app-item>`. Dies bedeutet, dass Angular für jede Anzahl von `items` im Array ebenso viele `<li>`-Elemente erstellt.

Sie können ein `*ngFor` auch auf andere Elemente verwenden, wie `<div>`, `<span>`, oder `<p>`, um nur einige zu nennen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in `ItemComponent` gebunden ist. Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen `AppComponent` und `ItemComponent`.

Nun sollten Sie in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen. Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern. Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Styles hinzu.

## Styles zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um spezifische Styles für diese Komponente hinzuzufügen. Die folgende CSS fügt grundlegende Styles, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

Fügen Sie die folgenden Styles in `item.component.css` ein.

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
  /* menu buttons flexbox styles */
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

/* Custom checkboxes
Adapted from https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Base for label styling */
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

/* checkbox aspect */
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

/* checked mark aspect */
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
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}
```

## Zusammenfassung

Sie sollten jetzt eine stilisierte Angular-To-Do-Liste-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann. Der nächste Schritt besteht darin, eine Filterung hinzuzufügen, damit Sie Elemente anzeigen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
