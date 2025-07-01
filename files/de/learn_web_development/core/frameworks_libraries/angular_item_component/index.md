---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten Ihnen eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die einzelnen Elemente in der Liste zu verwalten und Funktionen zum Überprüfen, Bearbeiten und Löschen hinzuzufügen. Das Angular-Ereignismodell wird hier behandelt.

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
          >Terminal/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten lernen, einschließlich wie Ereignisse funktionieren, um
        Aktualisierungen zu handhaben. Überprüfungs-, Bearbeitungs- und Löschfunktionen hinzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Befehlszeile eine Komponente mit dem Namen `item` mit folgendem CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem von Ihnen angegebenen Namen.
Hier ist der Ordner- und Komponentenname `item`.
Sie finden das Verzeichnis `item` im Ordner `app`:

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
- `item.component.spec.ts` für Komponententests

Sie können einen Verweis auf die HTML- und CSS-Dateien in den Metadaten des Dekorators `@Component()` in `item.component.ts` sehen.

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

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer die Möglichkeit zu geben, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zum Verwalten von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` durch Folgendes ersetzen:

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
Die doppelt geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen bezeichnen die Interpolation von Angular.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen.
Im nächsten Abschnitt wird ausführlich erklärt, wie Komponenten Daten teilen.

Die beiden nächsten Schaltflächen zum Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`.
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

Wenn ein Benutzer auf die **Edit**-Schaltfläche klickt, wird `editable` auf true gesetzt, wodurch dieses `<div>` und seine Kinder aus dem DOM entfernt werden.
Wenn ein Benutzer anstelle von **Edit** auf **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen benachrichtigt.

Ein `@if` ist auch auf dem nächsten `<div>`, jedoch auf einen `editable`-Wert von `true` eingestellt.
In diesem Fall, wenn `editable` `true` ist, fügt Angular das `<div>`-Element und seine Kind-Elemente `<input>` und `<button>` in das DOM ein.

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
Wenn die `description` also `essen` ist, ist die `description` bereits im `<input>`.
Auf diese Weise ist der Wert des `<input>` bereits `essen`, wenn der Benutzer das Element bearbeitet.

Die Template-Variable `#editedItem` im `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert.
Das `keyup`-Ereignis ruft die Methode `saveItem()` auf und übergibt den `editedItem`-Wert, wenn der Benutzer statt Klick auf **Save** die Eingabetaste drückt.

Wenn ein Benutzer auf die **Cancel**-Schaltfläche klickt, wechselt `editable` zu `false`, wodurch die Eingabe und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden.
Wenn `editable` auf `false` steht, setzt Angular das `<div>` mit den **Edit**- und **Delete**-Schaltflächen wieder in das DOM ein.

Das Klicken auf die **Save**-Schaltfläche ruft die Methode `saveItem()` auf.
Die `saveItem()`-Methode nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in den `editedItem.value`-String.

## Bereiten Sie die AppComponent vor

Im nächsten Abschnitt fügen Sie Code hinzu, der auf die Kommunikation zwischen der `AppComponent` und der `ItemComponent` angewiesen ist.
Fügen Sie die folgende Zeile in der Nähe der Spitze der `app.component.ts`-Datei hinzu, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie das Folgende zur Klasse derselben Datei hinzufügen:

```ts
export class AppComponent {
  // …
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  // …
}
```

Die `remove()`-Methode verwendet die JavaScript-Methode `Array.splice()`, um ein Element am `indexOf` des relevanten Elements zu entfernen.
Auf einfaches Englisch bedeutet dies, dass die `splice()`-Methode das Element aus dem Array entfernt.
Weitere Informationen zur `splice()`-Methode finden Sie in der [`Array.prototype.splice()`-Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um das `ItemComponent`-UI zu verwenden, müssen Sie der Komponente Logik hinzufügen, wie z.B. Funktionen und Möglichkeiten, wie Daten ein- und ausgehen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Imports wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Ergänzung von `Input`, `Output` und `EventEmitter` ermöglicht es `ItemComponent`, Daten mit `AppComponent` zu teilen.
Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist.
Sie können das `@Component`-Dekorator zum Verwenden von [`CommonModule`](https://angular.dev/api/common/CommonModule) in `app/item/item.component.ts` aktualisieren, damit wir die `@if`-Blöcke verwenden können:

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

Die `editable`-Eigenschaft hilft, einen Abschnitt der Vorlage umzuschalten, wo ein Benutzer ein Element bearbeiten kann.
`editable` ist dieselbe Eigenschaft im HTML wie im `@if`-Statement, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie diese auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Durchgang für Daten, die in die Komponente kommen, und ein `@Output()` als Durchgang für Daten, die die Komponente verlassen.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Deklaration der Eigenschaft der Klasse wird als [definitive Zuweisungsbehauptung](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, selbst wenn TypeScript dies nicht aus der Definition des Konstruktors ableiten kann. Wenn dieser Operator in Ihrem Code nicht enthalten ist und Sie strenge TypeScript-Kompilierungseinstellungen haben, schlägt die Kompilierung der Anwendung fehl.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente stammen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, damit eine andere Komponente diese Daten empfangen kann.

Die Methode `saveItem()` nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer in das HTML `<input>` eingibt, wenn er ein Element in der Liste bearbeitet.
Diese `description` ist derselbe String vom `<input>` mit der Template-Variable `#editedItem`.

Wenn der Benutzer keinen Wert eingibt, aber **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer mit leerem HTML `<input>` auf **Save** klicken, und die `description` würde ein leerer String werden.

Wenn ein Benutzer Text eingibt und speichert, setzt `saveItem()` `editable` auf false, wodurch das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und die **Edit**- und **Delete**-Schaltflächen erneut rendert.

Obwohl die Anwendung an dieser Stelle kompiliert werden sollte, müssen Sie die `ItemComponent` in `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Das Einfügen einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Shell für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den Selektor der `ItemComponent` in die `AppComponent`-Vorlage ein.
Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an.
In diesem Beispiel ist der Selektor als `app-item` definiert:

```ts
@Component({
  selector: "app-item",
  // …
})
export class ItemComponent {
  // …
}
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem von Ihnen für die Komponentenklasse definierten Selektor in `app.component.html` entspricht.
Ersetzen Sie die aktuelle ungeordnete Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

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

Die doppelt geschweifte Syntax, `\{{}}`, im `<h2>` interpoliert die Länge des `items`-Arrays und zeigt die Zahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und `@else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll.
Wenn sich nur ein einzelnes Element in der Liste befindet, zeigt das `<span>` "item" an.
Andernfalls, wenn die Länge des `items`-Arrays nicht gleich `1` ist, zeigt das `<span>` "items" an.

Das `@for` - Angulare Steuerflussblock, der verwendet wird, um alle Elemente im `items`-Array zu durchlaufen.
Angulars `@for` ist wie `@if` ein weiterer Block, der Ihnen hilft, die Struktur des DOMs zu ändern und dabei weniger Code zu schreiben.
Für jedes `item` wiederholt Angular die `<li>` und alles darin enthaltene, einschließlich `<app-item>`.
Das bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt.
Für jede Anzahl von Elementen im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können andere Elemente wie `<div>`, `<span>` oder `<p>` innerhalb eines `@for`-Blocks umschließen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen `AppComponent` und `ItemComponent`.

Jetzt sollten Sie Elemente aus der Liste bearbeiten und löschen können.
Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern.
Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Styles hinzu.

## Styles zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um Styles hinzuzufügen, die spezifisch für diese Komponente sind.
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
[type="checkbox"]:not(:checked) + label::before,
[type="checkbox"]:checked + label::before {
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
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
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

Sie sollten nun eine gestylte Angular To-do-Listen-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann.
Der nächste Schritt besteht darin, eine Filterung hinzuzufügen, damit Sie sich Elemente ansehen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
