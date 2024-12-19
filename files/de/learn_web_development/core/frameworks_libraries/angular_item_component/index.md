---
title: Erstellen einer Item-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Komponenten bieten Ihnen eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Verwaltung der einzelnen Elemente in der Liste sowie zur Hinzufügung von Prüf-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich wie Ereignisse zur Handhabung von Updates funktionieren. Funktionen zum Prüfen, Bearbeiten und Löschen hinzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie an der Befehlszeile eine Komponente mit dem Namen `item` mit folgendem CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und einen Ordner mit dem von Ihnen angegebenen Namen.
Hier lautet der Ordner- und Komponentenname `item`.
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
- `item.component.spec.ts` zum Testen der Komponente

In den Metadaten des Dekorators `@Component()` in `item.component.ts` finden Sie einen Verweis auf die HTML- und CSS-Dateien.

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

Die `ItemComponent` kann die Aufgabe übernehmen, dem Benutzer eine Möglichkeit zu bieten, Elemente als erledigt abzuhaken, sie zu bearbeiten oder zu löschen.

Fügen Sie Markup zur Verwaltung von Elementen hinzu, indem Sie den Platzhalterinhalt in `item.component.html` durch Folgendes ersetzen:

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

Das erste Eingabefeld ist ein Kontrollkästchen, mit dem Benutzer Elemente abhaken können, wenn ein Element abgeschlossen ist. Die doppelte geschweifte Klammer `\{{}}` im `<label>` des Kontrollkästchens steht für Angulars Interpolation. Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen. Im nächsten Abschnitt wird ausführlich erklärt, wie Komponenten Daten gemeinsam nutzen.

Die nächsten beiden Tasten zum Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`. Auf diesem `<div>` befindet sich ein `*ngIf`, eine integrierte Angular-Direktive, mit der Sie die Struktur des DOM dynamisch ändern können. Dieses `*ngIf` bedeutet, dass, wenn `editable` `false` ist, dieses `<div>` im DOM vorhanden ist. Wenn `editable` `true` ist, entfernt Angular dieses `<div>` aus dem DOM.

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

Wenn ein Benutzer auf die Schaltfläche **Edit** klickt, wird `editable` zu true, was dieses `<div>` und seine Kinder aus dem DOM entfernt. Wenn ein Benutzer stattdessen auf **Delete** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über die Löschung benachrichtigt.

Ein `*ngIf` befindet sich auch auf dem nächsten `<div>`, ist jedoch auf einen `editable`-Wert von `true` gesetzt. In diesem Fall, wenn `editable` `true` ist, platziert Angular das `<div>` und seine Kinder `<input>` und `<button>`-Elemente im DOM.

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

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Elements gebunden. Diese Bindung macht die `description` des Elements zum Wert des `<input>`. Wenn die `description` also `eat` ist, befindet sich die `description` bereits im `<input>`. Auf diese Weise, wenn der Benutzer das Element bearbeitet, ist der Wert des `<input>` bereits `eat`.

Die Template-Variable `#editedItem` am `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert. Das `keyup`-Ereignis ruft die `saveItem()`-Methode auf und übergibt den `editedItem`-Wert, wenn der Benutzer die Eingabetaste anstelle des Buttons **Save** drückt.

Wenn ein Benutzer auf die Schaltfläche **Cancel** klickt, wird `editable` auf `false` umgeschaltet, wodurch das Eingabefeld und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden. Wenn `editable` `false` ist, setzt Angular `<div>` mit den Schaltflächen **Edit** und **Delete** zurück ins DOM.

Durch Klicken auf die Schaltfläche **Save** wird die `saveItem()`-Methode aufgerufen. Die `saveItem()`-Methode nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in den `editedItem.value`-String.

## Die AppComponent vorbereiten

Im nächsten Abschnitt fügen Sie Code hinzu, der auf die Kommunikation zwischen `AppComponent` und `ItemComponent` angewiesen ist. Fügen Sie die folgende Zeile nahe der Spitze der `app.component.ts`-Datei ein, um das `Item` zu importieren:

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

Konfigurieren Sie dann die AppComponent, indem Sie Folgendes zur Klasse derselben Datei hinzufügen:

```js
remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

Die Methode `remove()` verwendet die JavaScript-Methode `Array.splice()`, um ein Element an der `indexOf` des relevanten Eintrags zu entfernen. Auf Deutsch bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt. Weitere Informationen zur Methode `splice()` finden Sie in der [`Array.prototype.splice()`-Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die Benutzeroberfläche der `ItemComponent` zu verwenden, müssen Sie Logik zur Komponente hinzufügen, wie Funktionen und Möglichkeiten, um Daten ein- und auszugeben. Bearbeiten Sie in `item.component.ts` die JavaScript-Imports wie folgt:

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Der Zusatz von `Input`, `Output` und `EventEmitter` ermöglicht es der `ItemComponent`, Daten mit der `AppComponent` zu teilen. Durch das Importieren von `Item` kann die `ItemComponent` verstehen, was ein `item` ist. Sie können die `@Component` aktualisieren, um [`CommonModule`](https://angular.io/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, sodass wir die `ngIf`-Direktiven nutzen können:

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
```

Ersetzen Sie weiter unten in `item.component.ts` die generierte `ItemComponent`-Klasse durch das Folgende:

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

Die Eigenschaft `editable` hilft, einen Abschnitt der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann. `editable` ist die gleiche Eigenschaft im HTML wie in der `*ngIf`-Anweisung, `*ngIf="editable"`. Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie diese auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten. Ein `@Input()` dient als Durchgang, durch den Daten in die Komponente gelangen, und ein `@Output()` fungiert als Durchgang, durch den Daten aus der Komponente gelangen können, sodass eine andere Komponente diese Daten empfangen kann. Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn Daten bereit sind, mit einer anderen Komponente geteilt zu werden.

> [!NOTE]
> Das `!` in der Deklaration der Eigenschaften der Klasse wird als [definierte Zuordnungsbehauptung](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator teilt TypeScript mit, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, auch wenn TypeScript das nicht anhand der Definition des Konstruktors feststellen kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, schlägt die Kompilierung der App fehl.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente stammen kann. Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die Methode `saveItem()` nimmt als Argument eine `description` vom Typ `string`. Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet. Diese `description` ist derselbe String aus dem `<input>` mit der Template-Variable `#editedItem`.

Wenn der Benutzer keinen Wert eingibt, aber auf **Save** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht. Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Save** klicken, ohne etwas ins HTML-`<input>` einzugeben, und die `description` würde zu einem leeren String werden.

Wenn ein Benutzer Text eingibt und speichert, setzt `saveItem()` `editable` auf false, was dazu führt, dass das `*ngIf` in der Vorlage die Bearbeitungsfunktion entfernt und die Schaltflächen **Edit** und **Delete** erneut rendert.

Obwohl die Anwendung zu diesem Zeitpunkt kompilieren sollte, müssen Sie die `ItemComponent` in `AppComponent` verwenden, um die neuen Funktionen im Browser sehen zu können.

## Verwenden der ItemComponent in der AppComponent

Das Einfügen einer Komponente in eine andere im Kontext einer Eltern-Kind-Beziehung gibt Ihnen die Flexibilität, Komponenten überall dort einzusetzen, wo Sie sie benötigen.

Die `AppComponent` dient als Shell für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den `ItemComponent`-Selektor in die `AppComponent`-Vorlage. Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an. In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```js
@Component({
  selector: 'app-item',
  // ...
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem Selektor entspricht, den Sie für die Komponentklasse in `app.component.html` definiert haben. Ersetzen Sie die aktuelle ungeordnete Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

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

Ändern Sie die `imports` in `app.component.ts`, um `ItemComponent` sowie `CommonModule` einzubeziehen:

```js
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})
```

Die Syntax der doppelten geschweiften Klammer `\{{}}` im `<h2>` interpoliert die Länge des `items`-Arrays und zeigt die Zahl an.

Das `<span>` im `<h2>` verwendet ein `*ngIf` und `else`, um zu bestimmen, ob das `<h2>` "item" oder "items" sagen soll. Wenn es nur ein einzelnes Element in der Liste gibt, wird das `<span>`, das "item" enthält, angezeigt. Andernfalls, wenn die Länge des `items`-Arrays etwas anderes als `1` ist, wird das `<ng-template>`, das wir `elseBlock` genannt haben, mit der Syntax `#elseBlock`, anstelle des `<span>` angezeigt. Sie können Angulars `<ng-template>` verwenden, wenn Sie nicht möchten, dass Inhalte standardmäßig gerendert werden. In diesem Fall, wenn die Länge des `items`-Arrays nicht `1` ist, zeigt das `*ngIf` den `elseBlock` und nicht das `<span>`.

Das `<li>` verwendet Angulars Repeater-Direktive `*ngFor`, um alle Elemente im `items`-Array zu durchlaufen. Angulars `*ngFor`, ähnlich wie `*ngIf`, ist eine weitere Direktive, die Ihnen hilft, die Struktur des DOM zu ändern, während Sie weniger Code schreiben. Für jedes `item` wiederholt Angular das `<li>` und alles, was darin enthalten ist, einschließlich `<app-item>`. Das bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt. Bei einer beliebigen Anzahl von Elementen im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können ein `*ngFor` auch auf andere Elemente anwenden, wie `<div>`, `<span>` oder `<p>`, um nur einige zu nennen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in der `ItemComponent` gebunden ist. Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Nun sollten Sie Elemente aus der Liste bearbeiten und löschen können. Wenn Sie Elemente hinzufügen oder löschen, sollte sich die Anzahl der Elemente ebenfalls ändern. Um die Liste benutzerfreundlicher zu gestalten, fügen Sie einige Stile zur `ItemComponent` hinzu.

## Stile zur ItemComponent hinzufügen

Sie können das Stylesheet einer Komponente verwenden, um spezifische Stile zu dieser Komponente hinzuzufügen. Die folgenden CSS fügen grundlegende Stile hinzu, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen.

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

Sie sollten nun eine gestylte Angular-To-Do-Listenanwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann. Der nächste Schritt ist das Hinzufügen von Filtern, damit Sie sich Elemente ansehen können, die bestimmten Kriterien entsprechen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
