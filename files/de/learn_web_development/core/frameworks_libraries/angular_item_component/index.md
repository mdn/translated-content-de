---
title: Erstellen einer Elementkomponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente, die einzelne Elemente in der Liste verwaltet, und das Hinzufügen von Prüf-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse des
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminals/Befehlszeile</a>
        .
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich der Funktionsweise von Ereignissen zur Verwaltung von Aktualisierungen. Prüfen, Bearbeiten und Löschen von Funktionen hinzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Befehlszeile eine Komponente namens `item` mit dem folgenden CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem Namen, den Sie angeben.
Hier lautet der Ordner- und Komponentenname `item`.
Sie finden das Verzeichnis `item` im Ordner `app`:

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

Genauso wie beim `AppComponent` besteht das `ItemComponent` aus den folgenden Dateien:

- `item.component.html` für HTML
- `item.component.ts` für Logik
- `item.component.css` für Styles
- `item.component.spec.ts` für Komponententests

Sie sehen einen Hinweis auf die HTML- und CSS-Dateien in den Metadaten des `@Component()`-Dekorators in `item.component.ts`.

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

## HTML für das ItemComponent hinzufügen

Das `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu geben, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zum Verwalten von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` mit dem folgenden ersetzen:

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

Das erste Eingabefeld ist ein Kontrollkästchen, damit Benutzer Elemente abhaken können, wenn ein Element fertig ist.
Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen zeigen die Interpolation von Angular an.
Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items` Array abzurufen.
Im nächsten Abschnitt wird ausführlich erklärt, wie Komponenten Daten gemeinsam nutzen.

Die nächsten beiden Schaltflächen zum Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`.
Auf diesem `<div>` befindet sich ein `@if`-Block, den Sie verwenden können, um Teile einer Vorlage basierend auf einer Bedingung zu rendern.
Dieses `@if` bedeutet, dass dieses `<div>` in der Vorlage gerendert wird, wenn `editable` `false` ist. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` vom DOM.

```html
@if (!editable) {
<div class="btn-wrapper">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
}
```

Wenn ein Benutzer auf die **Bearbeiten**-Schaltfläche klickt, wird `editable` wahr, wodurch dieses `<div>` und seine Kinder aus dem DOM entfernt werden.
Wenn der Benutzer stattdessen auf **Löschen** klickt, löst das `ItemComponent` ein Ereignis aus, das das `AppComponent` über die Löschung benachrichtigt.

Ein `@if` befindet sich auch auf dem nächsten `<div>`, ist jedoch auf einen `editable`-Wert von `true` gesetzt.
In diesem Fall, wenn `editable` `true` ist, fügt Angular das `<div>` und seine Kind-`<input>` und `<button>` Elemente in das DOM ein.

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
Wenn die `description` also `essen` ist, befindet sich `description` bereits im `<input>`.
So ist der Wert des `<input>` bereits `essen`, wenn der Benutzer das Element bearbeitet.

Die Vorlagevariable, `#editedItem`, auf dem `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert.
Das `keyup`-Ereignis ruft die Methode `saveItem()` auf und übergibt den `editedItem`-Wert, wenn der Benutzer die Eingabetaste anstelle des Klicks auf **Speichern** drückt.

Wenn ein Benutzer auf die **Abbrechen**-Schaltfläche klickt, wechselt `editable` zu `false`, was das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt.
Wenn `editable` `false` ist, fügt Angular `<div>` mit den **Bearbeiten**- und **Löschen**-Schaltflächen wieder in das DOM ein.

Klickt der Benutzer auf die **Speichern**-Schaltfläche, wird die Methode `saveItem()` aufgerufen.
Die Methode `saveItem()` nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in den `editedItem.value`-String.

## Bereiten Sie das AppComponent vor

Im nächsten Abschnitt fügen Sie Code hinzu, der sich auf die Kommunikation zwischen dem `AppComponent` und dem `ItemComponent` stützt.
Fügen Sie die folgende Zeile in der Nähe des oberen Randes der Datei `app.component.ts` hinzu, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann das AppComponent, indem Sie das Folgende zur gleichen Datei-Klasse hinzufügen:

```ts
export class AppComponent {
  // …
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  // …
}
```

Die `remove()`-Methode verwendet die JavaScript-Methode `Array.splice()`, um ein Element am `indexOf` des betreffenden Elements zu entfernen.
Einfach ausgedrückt bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt.
Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zum ItemComponent hinzufügen

Um das `ItemComponent`-UI zu verwenden, müssen Sie Logik zur Komponente hinzufügen, wie z. B. Funktionen und Möglichkeiten, Daten rein und raus zu bewegen.
Bearbeiten Sie in `item.component.ts` die JavaScript-Imports wie folgt:

```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Ergänzung von `Input`, `Output` und `EventEmitter` ermöglicht es dem `ItemComponent`, Daten mit `AppComponent` zu teilen.
Durch das Importieren von `Item` kann das `ItemComponent` verstehen, was ein `item` ist.
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

Weiter unten in `item.component.ts`, ersetzen Sie die generierte `ItemComponent`-Klasse durch Folgendes:

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

Die Eigenschaft `editable` hilft dabei, einen Abschnitt der Vorlage zu togglen, in dem ein Benutzer ein Element bearbeiten kann.
`editable` ist die gleiche Eigenschaft im HTML wie im `@if`-Statement, `@if(editable)`.
Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten.
Ein `@Input()` dient als Eingang für Daten in die Komponente, und ein `@Output()` fungiert als Ausgang für Daten aus der Komponente.
Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, um mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Klasseneigenschaftsdeklaration wird [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) genannt. Dieser Operator sagt TypeScript, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, selbst wenn TypeScript dies aus der Konstruktorbeschreibung nicht feststellen kann. Wenn dieser Operator in Ihrem Code nicht enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, schlägt die App-Kompilierung fehl.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente stammen kann.
Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die `saveItem()`-Methode nimmt als Argument eine `description` vom Typ `string`.
Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet.
Diese `description` ist der gleiche String aus dem `<input>` mit der `#editedItem`-Vorlagenvariable.

Wenn der Benutzer keinen Wert eingibt, aber auf **Speichern** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht.
Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Speichern** klicken, ohne dass etwas im HTML-`<input>` ist, und die `description` würde zu einem leeren String werden.

Wenn ein Benutzer Text eingibt und auf Speichern klickt, setzt `saveItem()` `editable` auf false, wodurch das `@if` in der Vorlage die Bearbeitungsfunktion entfernt und die **Bearbeiten**- und **Löschen**-Schaltflächen erneut darstellt.

Obwohl die Anwendung zu diesem Zeitpunkt kompiliert werden sollte, müssen Sie das `ItemComponent` im `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden Sie das ItemComponent im AppComponent

Das Einbinden einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort zu verwenden, wo Sie sie benötigen.

Das `AppComponent` dient als Hülle für die Anwendung, in die Sie andere Komponenten einbinden können.

Um das `ItemComponent` im `AppComponent` zu verwenden, fügen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage ein.
Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an.
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

Um den `ItemComponent`-Selektor im `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem Selektor entspricht, den Sie für die Komponentenklasse in `app.component.html` definiert haben.
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

Die doppelte geschweifte Klammer-Syntax, `\{{}}`, im `<h2>` interpoliert die Länge des `items`-Arrays und zeigt die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `@if` und `@else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll.
Wenn sich nur ein einzelnes Element in der Liste befindet, zeigt das `<span>` "item" an.
Andernfalls, wenn die Länge des `items`-Arrays etwas anderes als `1` ist, zeigt das `<span>` "items" an.

Das `@for` - Angular's Kontrollflussblock, der verwendet wird, um über alle Elemente im `items`-Array zu iterieren.
Angular's `@for`, ähnlich wie `@if`, ist ein weiterer Block, der Ihnen hilft, die Struktur des DOMs zu ändern, während Sie weniger Code schreiben.
Für jedes `item` wiederholt Angular das `<li>` und alles darin enthaltene, einschließlich `<app-item>`.
Das bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt.
Für jede Anzahl von Elementen im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können andere Elemente wie `<div>`, `<span>` oder `<p>` in einem `@for`-Block einfügen.

Das `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, das an die `remove`-Eigenschaft im `ItemComponent` gebunden ist.
Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen dem `AppComponent` und dem `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen.
Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern.
Um die Liste benutzerfreundlicher zu gestalten, fügen Sie einige Stile zum `ItemComponent` hinzu.

## Stile zum ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um spezifische Stile für diese Komponente hinzuzufügen.
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

Sie sollten jetzt eine gestylte Angular-To-Do-Listenanwendung haben, mit der Sie Elemente hinzufügen, bearbeiten und entfernen können.
Der nächste Schritt ist das Hinzufügen von Filtern, sodass Sie sich Elemente ansehen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
