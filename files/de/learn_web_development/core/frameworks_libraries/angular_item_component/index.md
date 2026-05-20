---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Angular-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, um die individuellen Elemente in der Liste zu verwalten, sowie das Hinzufügen von Kontroll-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich wie Ereignisse funktionieren, um Updates zu verwalten. Hinzufügen von Kontroll-, Bearbeitungs- und Löschfunktionen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Befehlszeile eine Komponente namens `item` mit folgendem CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem von Ihnen angegebenen Namen.
Hier sind Ordner- und Komponentenname `item`.
Sie finden das Verzeichnis `item` im Ordner `app`:

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

Genau wie bei `AppComponent` besteht `ItemComponent` aus folgenden Dateien:

- `item.component.html` für HTML
- `item.component.ts` für Logik
- `item.component.css` für Styles
- `item.component.spec.ts` für Komponententests

Im Metadaten-Dekorator `@Component()` in `item.component.ts` finden Sie Verweise auf die HTML- und CSS-Dateien.

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

## Hinzufügen von HTML für die ItemComponent

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu geben, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zum Verwalten von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` mit folgendem ersetzen:

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

Das erste Eingabeelement ist ein Kontrollkästchen, mit dem Benutzer Elemente abhaken können, wenn ein Element vollständig ist.
Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen bedeuten Angulars Interpolation.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen.
Im nächsten Abschnitt wird ausführlich erklärt, wie Komponenten Daten teilen.

Die nächsten beiden Schaltflächen für das Bearbeiten und Löschen des aktuellen Elements befinden sich in einem `<div>`.
An diesem `<div>` befindet sich ein `@if`-Block, den Sie verwenden können, um Teile einer Vorlage basierend auf einer Bedingung darzustellen.
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
Wenn der Benutzer stattdessen auf **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über die Löschung benachrichtigt.

Ein `@if` ist auch im nächsten `<div>`, jedoch auf einen `editable`-Wert von `true` gesetzt.
In diesem Fall, wenn `editable` `true` ist, fügt Angular das `<div>` und seine untergeordneten `<input>`- und `<button>`-Elemente in das DOM ein.

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

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Items gebunden.
Diese Bindung macht die `description` des Items zum Wert des `<input>`.
Wenn also die `description` "essen" ist, ist die `description` bereits im `<input>`.
Auf diese Weise ist beim Bearbeiten des Items der Wert des `<input>` bereits `essen`.

Die Template-Variable `#editedItem` auf dem `<input>` bedeutet, dass Angular speichert, was immer ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem`.
Das `keyup`-Ereignis ruft die Methode `saveItem()` auf und übergibt den `editedItem`-Wert, falls der Benutzer sich entscheidet, die Eingabetaste zu drücken, anstatt auf **Save** zu klicken.

Wenn ein Benutzer auf die Schaltfläche **Cancel** klickt, wechselt `editable` zu `false`, wodurch das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden.
Wenn `editable` `false` ist, fügt Angular `<div>` mit den Schaltflächen **Edit** und **Delete** zurück in das DOM ein.

Das Klicken auf die Schaltfläche **Save** ruft die Methode `saveItem()` auf.
Die Methode `saveItem()` übernimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Items in den `editedItem.value`-String.

## Bereiten Sie die AppComponent vor

Im nächsten Abschnitt fügen Sie Code hinzu, der auf der Kommunikation zwischen der `AppComponent` und der `ItemComponent` basiert.
Fügen Sie die folgende Zeile oben in der Datei `app.component.ts` hinzu, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie Folgendes zur gleichen Klassen-Datei hinzufügen:

```ts
export class AppComponent {
  // …
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  // …
}
```

Die Methode `remove()` verwendet die JavaScript-Methode `Array.splice()`, um ein Element am `indexOf` des relevanten Elements zu entfernen.
Einfach ausgedrückt bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt.
Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Fügen Sie Logik zur ItemComponent hinzu

Um die `ItemComponent`-Benutzeroberfläche zu nutzen, müssen Sie Logik zur Komponente hinzufügen, wie Funktionen und Wege, um Daten rein und raus zu bekommen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Importe wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Hinzufügung von `Input`, `Output` und `EventEmitter` ermöglicht es `ItemComponent`, Daten mit `AppComponent` zu teilen.
Durch den Import von `Item` kann die `ItemComponent` verstehen, was ein `item` ist.
Sie können das `@Component` so aktualisieren, dass es [`CommonModule`](https://angular.dev/api/common/CommonModule) in `app/item/item.component.ts` verwendet, sodass wir die `@if`-Blöcke nutzen können:

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

Weiter unten in `item.component.ts` ersetzen Sie die generierte `ItemComponent`-Klasse mit der folgenden:

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

Die `editable`-Eigenschaft hilft dabei, einen Abschnitt der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann.
`editable` ist die gleiche Eigenschaft im HTML wie in der `@if`-Anweisung, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Zugangspunkt für Daten, um in die Komponente zu gelangen, und ein `@Output()` agiert als Ausgangspunkt für Daten, um die Komponente zu verlassen.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Klasseneigenschaftsdeklaration wird [Definite Assignment Assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) genannt. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert ist und nicht `undefined`, selbst wenn TypeScript dies nicht anhand der Definition des Konstruktors feststellen kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, wird die App nicht kompilieren.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, damit eine andere Komponente diese Daten erhalten kann.

Die Methode `saveItem()` nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet.
Diese `description` ist der gleiche String aus dem `<input>` mit der `#editedItem`-Template-Variablen.

Wenn der Benutzer keinen Wert eingibt, aber auf **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne dass etwas im HTML-`<input>` steht, und die `description` würde zu einem leeren String werden.

Wenn ein Benutzer Text eingibt und speichert, setzt `saveItem()` `editable` auf false, was dazu führt, dass das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und die Schaltflächen **Edit** und **Delete** erneut rendert.

Obwohl die Anwendung zu diesem Zeitpunkt kompilieren sollte, müssen Sie die `ItemComponent` in der `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Das Einfügen einer Komponente in den Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Die `AppComponent` dient als Rahmen für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage.
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

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem von Ihnen für die Komponentendefinition festgelegten Selektor in `app.component.html` entspricht.
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

Die Syntax der doppelten geschweiften Klammern, `\{{}}`, innerhalb des `<h2>`, interpoliert die Länge des `items`-Arrays und zeigt die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und ein `@else`, um festzulegen, ob das `<h2>` "Element" oder "Elemente" anzeigen soll.
Wenn nur ein einziges Element in der Liste ist, zeigt das `<span>` "Element" an.
Andernfalls zeigt das `<span>` "Elemente" an, wenn die Länge des `items`-Arrays etwas anderes als `1` ist.

Das `@for` - Angulars Steuerflussblock, der verwendet wird, um über alle Elemente im `items`-Array zu iterieren.
Angulars `@for`, wie `@if`, ist ein weiterer Block, der Ihnen hilft, die Struktur des DOM zu ändern, während Sie weniger Code schreiben.
Für jedes `item` wiederholt Angular das `<li>` und alles darin, was `<app-item>` umfasst.
Dies bedeutet, dass Angular für jedes `item` im Array eine weitere Instanz von `<app-item>` erstellt.
Für eine beliebige Anzahl von Elementen im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können andere Elemente wie `<div>`, `<span>` oder `<p>` innerhalb eines `@for`-Blocks umschließen.

Die `AppComponent` hat eine `remove()` Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern, `[]`, verbindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen.
Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern.
Um die Liste benutzerfreundlicher zu gestalten, fügen Sie der `ItemComponent` einige Styles hinzu.

## Fügen Sie Styles zur ItemComponent hinzu

Sie können das Stylesheet einer Komponente verwenden, um Styles hinzuzufügen, die speziell für diese Komponente gelten.
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

Sie sollten nun eine gestylte Angular-To-Do-Listen-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann.
Der nächste Schritt besteht darin, Filter hinzuzufügen, sodass Sie sich Elemente ansehen können, die bestimmte Kriterien erfüllen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
