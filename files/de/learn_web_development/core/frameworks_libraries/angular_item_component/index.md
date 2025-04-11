---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch das Erstellen einer Komponente, um die einzelnen Elemente in der Liste zu verwalten, und fügt Funktionen zum Überprüfen, Bearbeiten und Löschen hinzu. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Kenntnis der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich wie Ereignisse funktionieren, um
        Updates zu handhaben. Überprüfen, Bearbeiten und Löschen
        hinzuzufügen.
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
Sie finden das `item`-Verzeichnis innerhalb des `app`-Ordners:

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
- `item.component.spec.ts` für das Testen der Komponente

Sie können im `@Component()` Dekoratormetadaten in `item.component.ts` einen Verweis auf die HTML- und CSS-Dateien sehen.

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

## HTML zur ItemComponent hinzufügen

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu geben, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zur Verwaltung von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` durch Folgendes ersetzen:

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
Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen bezeichnen die Interpolation von Angular.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen.
Im nächsten Abschnitt wird im Detail erklärt, wie Komponenten Daten teilen.

Die nächsten beiden Schaltflächen zum Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`.
Auf diesem `<div>` befindet sich ein `@if` Block, den Sie verwenden können, um Teile einer Vorlage basierend auf einer Bedingung zu rendern.
Dieses `@if` bedeutet, dass, wenn `editable` `false` ist, dieses `<div>` in der Vorlage gerendert wird. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` aus dem DOM.

```html
@if (!editable) {
<div class="btn-wrapper">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
}
```

Wenn ein Benutzer auf die **Edit**-Schaltfläche klickt, wird `editable` true, wodurch dieses `<div>` und seine Kinder aus dem DOM entfernt werden.
Wenn ein Benutzer anstelle von **Edit** auf **Delete** klickt, löst das `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen informiert.

Ein `@if` befindet sich ebenfalls auf dem nächsten `<div>`, ist aber auf einen `editable` Wert von `true` gesetzt.
In diesem Fall, wenn `editable` `true` ist, fügt Angular das `<div>` und seine Kind-`<input>`- und `<button>`-Elemente in das DOM ein.

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
Wenn die `description` also `eat` ist, ist die `description` bereits im `<input>`.
Auf diese Weise, wenn der Benutzer das Element bearbeitet, ist der Wert des `<input>` bereits `eat`.

Die Template-Variable, `#editedItem`, auf dem `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert.
Das `keyup`-Ereignis ruft die `saveItem()`-Methode auf und übergibt den `editedItem`-Wert, wenn der Benutzer die Eingabetaste anstelle von **Save** drückt.

Wenn ein Benutzer auf die **Cancel**-Schaltfläche klickt, wird `editable` auf `false` umgeschaltet, wodurch das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden.
Wenn `editable` `false` ist, fügt Angular das `<div>` mit den **Edit**- und **Delete**-Schaltflächen wieder in das DOM ein.

Ein Klick auf die **Save**-Schaltfläche ruft die `saveItem()`-Methode auf.
Die `saveItem()`-Methode nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in den `editedItem.value`-String.

## AppComponent vorbereiten

Im nächsten Abschnitt fügen Sie Code hinzu, der auf Kommunikation zwischen der `AppComponent` und der `ItemComponent` basiert.
Fügen Sie die folgende Zeile nahe dem Anfang der `app.component.ts`-Datei hinzu, um `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie folgendes zur selben Datei-Klasse hinzufügen:

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
Einfach ausgedrückt bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt.
Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die Benutzeroberfläche der `ItemComponent` zu verwenden, müssen Sie der Komponente Logik wie Funktionen und Möglichkeiten zum Ein- und Ausgang von Daten hinzufügen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Importe wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Das Hinzufügen von `Input`, `Output` und `EventEmitter` ermöglicht es `ItemComponent`, Daten mit `AppComponent` zu teilen.
Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist.
Sie können das `@Component` aktualisieren, um [`CommonModule`](https://angular.dev/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, damit wir die `@if` Blöcke verwenden können:

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

Weiter unten in `item.component.ts` ersetzen Sie die generierte `ItemComponent` Klasse durch folgende:

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

Die `editable`-Eigenschaft hilft, einen Bereich der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann.
`editable` ist dieselbe Eigenschaft im HTML wie in der `@if`-Anweisung, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie diese auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Durchgang für Daten, die in die Komponente kommen, und ein `@Output()` agiert als Durchgang für Daten, die die Komponente verlassen, damit eine andere Komponente diese Daten empfangen kann.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Eigenschaftsdeklaration der Klasse wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert ist und nicht `undefined`, selbst wenn TypeScript dies von der Definition des Konstruktors nicht ableiten kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strenge TypeScript-Kompilierungseinstellungen haben, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die Methode `saveItem()` nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet.
Diese `description` ist derselbe String aus dem `<input>` mit der `#editedItem` Template-Variablen.

Gibt der Benutzer keinen Wert ein, sondern klickt auf **Save**, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne etwas in das HTML-`<input>` einzugeben, und die `description` würde ein leerer String werden.

Wenn ein Benutzer Text eingibt und auf Speichern klickt, setzt `saveItem()` `editable` auf false, wodurch das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und erneut die **Edit**- und **Delete**-Schaltflächen rendert.

Obwohl die Anwendung zu diesem Zeitpunkt kompiliert werden sollte, müssen Sie die `ItemComponent` in der `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Die Einbindung einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einbinden können.

Um die `ItemComponent` in der `AppComponent` zu verwenden, platzieren Sie den `ItemComponent`-Selektor in der `AppComponent`-Vorlage.
Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()` Dekorators an.
In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```ts
@Component({
  selector: "app-item",
  // ...
})
export class ItemComponent {
  // …
}
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>`, das dem von Ihnen definierten Selektor für die Komponentenklasse entspricht, `app.component.html` hinzu.
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

Ändern Sie die `imports` in `app.component.ts`, um sowohl `ItemComponent` als auch `CommonModule` einzuschließen:

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

Die doppelte geschweifte Klammer-Syntax, `\{{}}`, im `<h2>` interpoliert die Länge des `items`-Arrays und zeigt die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und `@else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen sollte.
Wenn sich nur ein einzelnes Element in der Liste befindet, zeigt das `<span>` "item" an.
Andernfalls, wenn die Länge des `items`-Arrays etwas anderes als `1` ist, zeigt das `<span>` "items" an.

Das `@for` - Angular's Kontrollflussblock, wird verwendet, um über alle Elemente im `items`-Array zu iterieren.
Angulars `@for` ähnelt `@if`, ein weiterer Block, der Ihnen hilft, die Struktur des DOM zu ändern und weniger Code zu schreiben.
Für jedes `item` wiederholt Angular das `<li>` und alles darin, einschließlich `<app-item>`.
Dies bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt.
Für jede Anzahl von Elementen im Array würde Angular diese Anzahl von `<li>`-Elementen erstellen.

Sie können andere Elemente wie `<div>`, `<span` oder `<p>` innerhalb eines `@for`-Blocks umschließen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, das an die `remove`-Eigenschaft in der `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen.
Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern.
Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Stile hinzu.

## Stile zu ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um spezifische Stile für diese Komponente hinzuzufügen.
Der folgende CSS-Code fügt grundlegende Stile, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

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

Jetzt sollten Sie eine gestylte Angular To-do-Liste-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann.
Der nächste Schritt ist, das Filtern hinzuzufügen, damit Sie Elemente anzeigen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
