---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die einzelnen Elemente in der Liste zu verwalten und Funktionalitäten wie Prüfen, Bearbeiten und Löschen hinzuzufügen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich wie Ereignisse funktionieren, um
        Aktualisierungen zu handhaben. Funktionalitäten zum Prüfen, Bearbeiten und Löschen
        hinzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Kommandozeile eine Komponente mit dem Namen `item` mit folgendem CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem angegebenen Namen.
Hier ist der Ordner- und Komponentenname `item`.
Sie können das Verzeichnis `item` innerhalb des `app`-Ordners finden:

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

Genau wie bei der `AppComponent` besteht die `ItemComponent` aus den folgenden Dateien:

- `item.component.html` für HTML
- `item.component.ts` für Logik
- `item.component.css` für Styles
- `item.component.spec.ts` für das Testen der Komponente

Sie können einen Verweis auf die HTML- und CSS-Dateien in den `@Component()` Dekorator-Metadaten in `item.component.ts` sehen.

```ts
@Component({
  selector: "app-item",
  standalone: true,
  imports: [],
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // …
}
```

## HTML für die ItemComponent hinzufügen

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu bieten, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zur Verwaltung von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` mit dem folgenden Inhalt ersetzen:

```html
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">\{{item.description}}</label>

  @if (!editable) {
  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>
  }

  <!-- This section shows only if user clicks Edit button -->
  @if (editable) {
  <div>
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
  }
</div>
```

Das erste Eingabefeld ist ein Kontrollkästchen, damit Benutzer Elemente abhaken können, wenn ein Element abgeschlossen ist.
Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen kennzeichnen die Interpolation von Angular.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items` Array abzurufen.
Der nächste Abschnitt erklärt im Detail, wie Komponenten Daten teilen.

Die nächsten beiden Schaltflächen für das Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`.
Auf diesem `<div>` befindet sich ein `@if`-Block, den Sie verwenden können, um Teile einer Vorlage basierend auf einer Bedingung darzustellen.
Dieses `@if` bedeutet, dass wenn `editable` auf `false` steht, dieses `<div>` in der Vorlage dargestellt wird. Wenn `editable` auf `true` steht, entfernt Angular dieses `<div>` aus dem DOM.

```html
@if (!editable) {
<div class="btn-wrapper">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
}
```

Wenn ein Benutzer auf die Schaltfläche **Edit** klickt, wird `editable` auf true gesetzt, was dazu führt, dass dieses `<div>` und seine Kinder aus dem DOM entfernt werden.
Wenn ein Benutzer statt auf **Edit** auf **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen informiert.

Ein `@if` ist auch auf dem nächsten `<div>`, aber auf einen `editable` Wert von `true` gesetzt.
In diesem Fall, wenn `editable` gleich `true` ist, fügt Angular das `<div>` und seine Kind-`<input>`- und `<button>`-Elemente in das DOM ein.

```html
<!-- This section shows only if user clicks Edit button -->
@if (editable) {
<div>
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
}
```

Mit `[value]="item.description"` ist der Wert der `<input>` an die `description` des aktuellen Elements gebunden.
Diese Bindung macht die `description` des Elements zum Wert des `<input>`.
Also, wenn die `description` "essen" ist, ist die `description` bereits im `<input>`.
Auf diese Weise, wenn der Benutzer das Element bearbeitet, ist der Wert des `<input>` bereits "essen".

Die Template-Variable `#editedItem`, auf dem `<input>`, bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert.
Das `keyup`-Ereignis ruft die Methode `saveItem()` auf und übergibt den `editedItem`-Wert, wenn der Benutzer statt Enter zu drücken, auf **Save** klickt.

Wenn ein Benutzer auf die Schaltfläche **Cancel** klickt, wechselt `editable` zu `false`, was die Eingabefelder und Schaltflächen zum Bearbeiten aus dem DOM entfernt.
Wenn `editable` auf `false` steht, fügt Angular `<div>` mit den Schaltflächen **Edit** und **Delete** zurück ins DOM ein.

Ein Klick auf die Schaltfläche **Save** ruft die Methode `saveItem()` auf.
Die Methode `saveItem()` nimmt den Wert des Elements `#editedItem` und ändert die `description` des Elements in den `editedItem.value`-String.

## Vorbereiten der AppComponent

Im nächsten Abschnitt werden Sie Code hinzufügen, der von der Kommunikation zwischen der `AppComponent` und der `ItemComponent` abhängt.
Fügen Sie die folgende Zeile in der Nähe des Anfangs der Datei `app.component.ts` hinzu, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie Folgendes zur Klasse der gleichen Datei hinzufügen:

```ts
export class AppComponent {
  // …
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  // …
}
```

Die Methode `remove()` verwendet die JavaScript-Methode `Array.splice()`, um ein Element an der `indexOf` des relevanten Elements zu entfernen.
In einfachen Worten bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt.
Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die Benutzeroberfläche der `ItemComponent` zu verwenden, müssen Sie der Komponente Logik hinzufügen, wie Funktionen und Wege, um Daten hinein- und herauszugehen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Importe wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Hinzufügung von `Input`, `Output` und `EventEmitter` ermöglicht es der `ItemComponent`, Daten mit der `AppComponent` zu teilen.
Durch den Import von `Item` kann die `ItemComponent` verstehen, was ein `item` ist.
Sie können das `@Component` aktualisieren, um [`CommonModule`](https://angular.dev/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, damit wir die `@if`-Blöcke verwenden können:

```ts
@Component({
  selector: "app-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // …
}
```

Ersetzen Sie weiter unten in `item.component.ts` die generierte `ItemComponent`-Klasse durch die folgende:

```ts
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

Die Eigenschaft `editable` hilft, einen Bereich der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann.
`editable` ist die gleiche Eigenschaft im HTML wie im `@if`-Statement, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` ermöglichen die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Tür für Daten, die in die Komponente gelangen, und ein `@Output()` als Tür für Daten, die die Komponente verlassen, damit eine andere Komponente diese Daten empfangen kann.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn es Daten gibt, die mit einer anderen Komponente geteilt werden sollen.

> [!NOTE]
> Das `!` in der Deklaration der Klassen-Eigenschaft wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert wird und nicht `undefined` ist, auch wenn TypeScript es aufgrund der Definition des Konstruktors nicht erkennen kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungs-einstellungen verwenden, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die Methode `saveItem()` nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer beim Bearbeiten eines Elements in der Liste in das HTML-`<input>` eingibt.
Diese `description` ist derselbe String aus dem `<input>` mit der `#editedItem` Template-Variablen.

Wenn der Benutzer keinen Wert eingibt, aber auf **Speichern** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Speichern** klicken, ohne etwas im HTML-`<input>` einzugeben, und die `description` würde zu einem leeren String.

Wenn ein Benutzer Text eingibt und auf Speichern klickt, setzt `saveItem()` `editable` auf false, wodurch das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und die Schaltflächen **Edit** und **Delete** wieder darstellt.

Obwohl die Anwendung an dieser Stelle kompiliert werden sollte, müssen Sie die `ItemComponent` in `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Das Einbinden einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage.
Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()` Dekorators an.
In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```ts
@Component({
  selector: "app-item",
  // …
})
export class ItemComponent {
  // …
}
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem Selektor entspricht, den Sie für die Komponentenklasse zu `app.component.html` definiert haben.
Ersetzen Sie die aktuelle unsortierte Liste `<ul>` in `app.component.html` mit der folgenden aktualisierten Version:

```html
<h2>
  \{{items.length}}
  <span> @if (items.length === 1) { item } @else { items } </span>
</h2>

<ul>
  @for (item of items; track item.description) {
  <li>
    <app-item (remove)="remove(item)" [item]="item"></app-item>
  </li>
  }
</ul>
```

Ändern Sie die `imports` in `app.component.ts`, um `ItemComponent` sowie `CommonModule` einzuschließen:

```ts
@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  // …
}
```

Die Syntax der doppelten geschweiften Klammern, `\{{}}`, im `<h2>` interpoliert die Länge des `items` Arrays und zeigt die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und `@else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll.
Wenn nur ein einziges Element in der Liste vorhanden ist, zeigt das `<span>` "item".
Andernfalls zeigt das `<span>` "items", wenn die Länge des `items` Arrays nicht `1` ist.

Das `@for` - Angular's Kontrollflussblock, der verwendet wird, um über alle Elemente im `items` Array zu iterieren.
Angular's `@for` ist wie `@if`, ein weiterer Block, der Ihnen hilft, die Struktur des DOMs zu ändern, während Sie weniger Code schreiben.
Für jedes `item` wiederholt Angular das `<li>` und alles innerhalb davon, das `<app-item>` einschließt.
Dies bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt.
Für jede Anzahl von Elementen im Array würde Angular entsprechend viele `<li>`-Elemente erstellen.

Sie können andere Elemente wie `<div>`, `<span>` oder `<p>` innerhalb eines `@for`-Blocks einbinden.

Die `AppComponent` hat eine `remove()` Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in der `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen.
Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern.
Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Styles hinzu.

## Styles zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um spezifische Styles für diese Komponente hinzuzufügen.
Das folgende CSS fügt grundlegende Styles, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

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
  background-color: black;
  color: white;
  border-color: black;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: white;
  color: black;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: white;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: black;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555555;
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
[type="checkbox"]:not(:checked) + label::before,
[type="checkbox"]:checked + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #cccccc;
  background: white;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label::after,
[type="checkbox"]:checked + label::after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", "Arial";
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label::after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label::after {
  opacity: 1;
  transform: scale(1);
}

/* accessibility */
[type="checkbox"]:checked:focus + label::before,
[type="checkbox"]:not(:checked):focus + label::before {
  border: 2px dotted blue;
}
```

## Zusammenfassung

Sie sollten jetzt eine gestylte Angular-To-do-List-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann.
Der nächste Schritt besteht darin, Filter hinzuzufügen, sodass Sie Elemente ansehen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
