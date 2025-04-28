---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die einzelnen Elemente in der Liste zu verwalten, sowie das Hinzufügen von Funktionen zum Markieren, Bearbeiten und Löschen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über den
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich der Funktionsweise von Ereignissen zur Verwaltung von Aktualisierungen. Hinzufügen von Funktionen zum Markieren, Bearbeiten und Löschen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Kommandozeile eine Komponente mit dem Namen `item` mit dem folgenden CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem von Ihnen angegebenen Namen.
Hierbei handelt es sich um den Ordner- und Komponentennamen `item`.
Sie finden das `item`-Verzeichnis im `app`-Ordner:

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
- `item.component.css` für Stile
- `item.component.spec.ts` für Komponententests

Im `@Component()`-Dekorator-Metadaten in `item.component.ts` finden Sie einen Verweis auf die HTML- und CSS-Dateien.

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

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu bieten, Elemente als erledigt zu markieren, zu bearbeiten oder zu löschen.

Fügen Sie das Markup zum Verwalten von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` durch Folgendes ersetzen:

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

Das erste Eingabeelement ist ein Kontrollkästchen, damit Benutzer Elemente als erledigt markieren können.
Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen bedeuten Angular-Interpolation.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen.
Der nächste Abschnitt erklärt, wie Komponenten Daten im Detail austauschen.

Die nächsten beiden Buttons zum Bearbeiten und Löschen des aktuellen Elements befinden sich in einem `<div>`.
Auf diesem `<div>` befindet sich ein `@if`-Block, den Sie verwenden können, um Teile einer Vorlage basierend auf einer Bedingung zu rendern.
Dieses `@if` bedeutet, dass, wenn `editable` `false` ist, dieses `<div>` in der Vorlage gerendert wird. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` aus dem DOM.

```html
@if (!editable) {
<div class="btn-wrapper">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
}
```

Wenn ein Benutzer auf die Schaltfläche **Edit** klickt, wird `editable` auf true gesetzt, wodurch dieses `<div>` und seine Kinder aus dem DOM entfernt werden.
Wenn ein Benutzer anstelle von **Edit** auf **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen benachrichtigt.

Ein `@if` befindet sich auch auf dem nächsten `<div>`, ist jedoch auf einen `editable`-Wert von `true` gesetzt.
In diesem Fall platziert Angular das `<div>` und seine Kinder-`<input>`- und `<button>`-Elemente im DOM, wenn `editable` `true` ist.

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

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Elements gebunden.
Diese Bindung macht die `description` des Elements zum Wert des `<input>`.
Wenn die `description` also "essen" ist, ist die `description` bereits im `<input>`.
Auf diese Weise ist der Wert des `<input>` beim Bearbeiten des Elements bereits "essen".

Die Template-Variable `#editedItem` auf dem `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert.
Das `keyup`-Ereignis ruft die `saveItem()`-Methode auf und gibt den `editedItem`-Wert weiter, wenn der Benutzer sich entscheidet, die Eingabetaste zu drücken, anstatt **Save** zu klicken.

Wenn ein Benutzer auf die Schaltfläche **Cancel** klickt, wird `editable` auf `false` umgeschaltet, was die Eingabe und Buttons zum Bearbeiten aus dem DOM entfernt.
Wenn `editable` `false` ist, platziert Angular das `<div>` mit den Schaltflächen **Edit** und **Delete** wieder im DOM.

Ein Klick auf die Schaltfläche **Save** ruft die `saveItem()`-Methode auf.
Die `saveItem()`-Methode nimmt den Wert des `#editedItem`-Elements und ändert die `description` des Items zu `editedItem.value`-String.

## Bereiten Sie die AppComponent vor

Im nächsten Abschnitt fügen Sie Code hinzu, der auf die Kommunikation zwischen der `AppComponent` und der `ItemComponent` angewiesen ist.
Fügen Sie die folgende Zeile oben in der Datei `app.component.ts` hinzu, um die `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Dann konfigurieren Sie die AppComponent, indem Sie das Folgende zur Klassen-Datei hinzufügen:

```ts
export class AppComponent {
  // …
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  // …
}
```

Die Methode `remove()` verwendet die JavaScript-Methode `Array.splice()`, um ein Item an der `indexOf` des relevanten Items zu entfernen.
Auf einfach Deutsch bedeutet dies, dass die Methode `splice()` das Item aus dem Array entfernt.
Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()`-Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die `ItemComponent`-UI verwenden zu können, müssen Sie der Komponente Logik wie Funktionen und Möglichkeiten zum Ein- und Ausgeben von Daten hinzufügen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Importe wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Hinzufügung von `Input`, `Output` und `EventEmitter` ermöglicht es `ItemComponent`, Daten mit `AppComponent` auszutauschen.
Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist.
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

Weiter unten in `item.component.ts` ersetzen Sie die generierte `ItemComponent`-Klasse durch die folgende:

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

Die `editable`-Eigenschaft hilft, einen Abschnitt der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann.
`editable` ist dieselbe Eigenschaft im HTML wie in der `@if`-Anweisung, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Tür für Daten, um in die Komponente einzudringen, und ein `@Output()` fungiert als Tür, durch die Daten die Komponente verlassen können, damit eine andere Komponente diese Daten empfangen kann.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn es Daten gibt, die mit einer anderen Komponente geteilt werden sollen.

> [!NOTE]
> Das `!` in der Eigenschaftendeklaration der Klasse wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, selbst wenn TypeScript dies aus der Deklaration des Konstruktors nicht ableiten kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, damit eine andere Komponente diese Daten empfangen kann.

Die `saveItem()`-Methode nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet.
Diese `description` ist derselbe String aus dem `<input>` mit der `#editedItem`-Template-Variable.

Wenn der Benutzer keinen Wert eingibt, aber auf **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne etwas in das HTML-`<input>` einzugeben, und die `description` würde zu einem leeren String werden.

Wenn ein Benutzer Text eingibt und **Save** klickt, setzt `saveItem()` `editable` auf false, was bewirkt, dass das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und die Schaltflächen **Edit** und **Delete** erneut anzeigt.

Obwohl die Anwendung zu diesem Zeitpunkt kompiliert werden sollte, müssen Sie die `ItemComponent` in `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden Sie die ItemComponent in der AppComponent

Das Einbeziehen einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einbinden können.

Um die `ItemComponent` in der `AppComponent` zu verwenden, setzen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage.
Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an.
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

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>`, das dem Selektor entspricht, den Sie für die Komponentenklasse definiert haben, in `app.component.html` ein.
Ersetzen Sie die aktuelle unsortierte Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

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

Die doppelten geschweiften Klammernsyntax `\{{}}` im `<h2>` interpoliert die Länge des `items`-Arrays und zeigt die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und `@else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll.
Wenn sich nur ein Element in der Liste befindet, zeigt das `<span>` "item" an.
Andernfalls zeigt das `<span>` "items" an, wenn die Länge des `items`-Arrays alles andere als `1` ist.

Das `@for` - Angulardoppelstrukturanweisungsblock, der verwendet wird, um über alle Elemente im `items`-Array zu iterieren.
Angulars `@for`, ähnlich wie `@if`, ist ein weiterer Block, der Ihnen hilft, die Struktur des DOM zu ändern, während Sie weniger Code schreiben.
Für jedes `item` wiederholt Angular das `<li>` und alles innerhalb davon, einschließlich `<app-item>`.
Das bedeutet, dass Angular für jedes `item` im Array eine weitere Instanz von `<app-item>` erstellt.
Für jede Anzahl von `items` im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können andere Elemente wie `<div>`, `<span` oder `<p>` in einem `@for`-Block einfügen.

Die `AppComponent` verfügt über eine `remove()`-Methode zum Entfernen des Items, die an die `remove`-Eigenschaft in `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern `[]` bindet den Wert von `i` zwischen `AppComponent` und `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Items aus der Liste zu bearbeiten und zu löschen.
Wenn Sie Items hinzufügen oder löschen, sollte sich auch die Anzahl der Items ändern.
Um die Liste benutzerfreundlicher zu machen, fügen Sie der `ItemComponent` einige Stile hinzu.

## Stile zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um Stile hinzuzufügen, die spezifisch für diese Komponente sind.
Das folgende CSS fügt grundlegende Stile, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

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

Sie sollten nun eine gestylte Angular-To-Do-Listenanwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann.
Der nächste Schritt besteht darin, eine Filterung hinzuzufügen, damit Sie sich Elemente anzeigen lassen können, die bestimmte Kriterien erfüllen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
