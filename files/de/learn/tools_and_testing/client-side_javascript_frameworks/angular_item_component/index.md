---
title: Erstellen einer Item-Komponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Komponenten bieten Ihnen eine Möglichkeit, Ihre Anwendung zu organisieren. Dieser Artikel führt Sie durch die Erstellung einer Komponente zur Handhabung der einzelnen Elemente in der Liste und das Hinzufügen von Überprüfungs-, Bearbeitungs- und Löschfunktionen. Das Angular-Ereignismodell wird hier behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse im Umgang mit dem
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/der Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über Komponenten zu lernen, einschließlich der Funktionsweise von Ereignissen zur Handhabung von Aktualisierungen. Hinzufügen von Überprüfungs-, Bearbeitungs- und Löschfunktionen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen der neuen Komponente

Erstellen Sie in der Befehlszeile eine Komponente namens `item` mit dem folgenden CLI-Befehl:

```bash
ng generate component item
```

Der Befehl `ng generate component` erstellt eine Komponente und ein Verzeichnis mit dem von Ihnen angegebenen Namen. Hier ist der Name des Verzeichnisses und der Komponente `item`. Sie finden das `item`-Verzeichnis im `app`-Ordner:

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

Das erste Eingabefeld ist ein Kontrollkästchen, damit Benutzer Elemente abhaken können, wenn ein Element abgeschlossen ist. Die doppelten geschweiften Klammern, `\{{}}`, im `<label>` für das Kontrollkästchen kennzeichnen die Interpolation von Angular. Angular verwendet `\{{item.description}}`, um die Beschreibung des aktuellen `item` aus dem `items`-Array abzurufen. Der nächste Abschnitt erklärt im Detail, wie Komponenten Daten teilen.

Die nächsten beiden Schaltflächen zum Bearbeiten und Löschen des aktuellen Elements befinden sich innerhalb eines `<div>`. An diesem `<div>` befindet sich ein `*ngIf`, eine integrierte Angular-Direktive, die Sie verwenden können, um die Struktur des DOM dynamisch zu ändern. Dieses `*ngIf` bedeutet, dass, wenn `editable` auf `false` steht, dieses `<div>` im DOM ist. Wenn `editable` auf `true` steht, entfernt Angular dieses `<div>` aus dem DOM.

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

Wenn ein Benutzer auf die **Bearbeiten**-Schaltfläche klickt, wird `editable` auf true gesetzt, wodurch dieses `<div>` und seine Kinder aus dem DOM entfernt werden. Wenn ein Benutzer stattdessen auf **Löschen** klickt, löst die `ItemComponent` ein Ereignis aus, das die `AppComponent` über das Löschen benachrichtigt.

Ein `*ngIf` befindet sich auch auf dem nächsten `<div>`, ist jedoch auf einen `editable`-Wert von `true` gesetzt. In diesem Fall, wenn `editable` auf `true` steht, fügt Angular das `<div>` und seine Kinder `<input>` und `<button>`-Elemente in das DOM ein.

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

Mit `[value]="item.description"` ist der Wert des `<input>` an die `description` des aktuellen Elements gebunden. Diese Bindung macht die `description` des Elements zum Wert des `<input>`. Wenn die `description` also beispielsweise "essen" ist, ist die `description` bereits im `<input>`. Auf diese Weise wird der Wert des `<input>` beim Bearbeiten des Elements durch den Benutzer bereits "essen" sein.

Die Template-Variable `#editedItem` auf dem `<input>` bedeutet, dass Angular alles, was ein Benutzer in dieses `<input>` eingibt, in einer Variablen namens `editedItem` speichert. Das `keyup`-Ereignis ruft die `saveItem()`-Methode auf und übergibt den `editedItem`-Wert, wenn der Benutzer sich entscheidet, Enter zu drücken, anstatt auf **Speichern** zu klicken.

Wenn ein Benutzer auf die **Abbrechen**-Schaltfläche klickt, wird `editable` auf `false` umgeschaltet, wodurch die Eingabe und die Schaltflächen zum Bearbeiten aus dem DOM entfernt werden. Wenn `editable` auf `false` steht, setzt Angular das `<div>` mit den **Bearbeiten**- und **Löschen**-Schaltflächen zurück ins DOM.

Durch Klicken auf die **Speichern**-Schaltfläche wird die `saveItem()`-Methode aufgerufen. Die `saveItem()`-Methode nimmt den Wert aus dem `#editedItem`-Element und ändert die `description` des Elements in den `editedItem.value`-String.

## Die AppComponent vorbereiten

Im nächsten Abschnitt werden Sie Code hinzufügen, der auf der Kommunikation zwischen der `AppComponent` und der `ItemComponent` basiert. Fügen Sie die folgende Zeile in der Nähe der Spitze der `app.component.ts` Datei hinzu, um das `Item` zu importieren:

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

Die `remove()`-Methode verwendet die JavaScript-Methode `Array.splice()`, um ein Element an der `indexOf` des entsprechenden Elements zu entfernen. Auf Deutsch bedeutet dies, dass die Methode `splice()` das Element aus dem Array entfernt. Für weitere Informationen zur Methode `splice()` siehe die [`Array.prototype.splice()` Dokumentation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Logik zur ItemComponent hinzufügen

Um die `ItemComponent`-Oberfläche zu verwenden, müssen Sie der Komponente Logik wie Funktionen und Möglichkeiten für ein- und ausgehende Daten hinzufügen. Bearbeiten Sie in `item.component.ts` die JavaScript-Importe wie folgt:

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

Die Ergänzung von `Input`, `Output` und `EventEmitter` ermöglicht es der `ItemComponent`, Daten mit der `AppComponent` zu teilen. Durch den Import von `Item` kann `ItemComponent` verstehen, was ein `item` ist. Sie können das `@Component` aktualisieren, um [`CommonModule`](https://angular.io/api/common/CommonModule) in `app/item/item.component.ts` zu verwenden, sodass wir die `ngIf`-Direktiven verwenden können:

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
```

Weiter unten in `item.component.ts` ersetzen Sie die generierte `ItemComponent`-Klasse durch Folgendes:

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

Die `editable`-Eigenschaft hilft, einen Abschnitt der Vorlage umzuschalten, in dem ein Benutzer ein Element bearbeiten kann. `editable` ist dieselbe Eigenschaft in der HTML-Datei wie in der `*ngIf`-Anweisung, `*ngIf="editable"`. Wenn Sie eine Eigenschaft in der Vorlage verwenden, müssen Sie sie auch in der Klasse deklarieren.

`@Input()`, `@Output()` und `EventEmitter` erleichtern die Kommunikation zwischen Ihren beiden Komponenten. Ein `@Input()` dient als Tor, durch das Daten in die Komponente gelangen können, während ein `@Output()` als Tor fungiert, durch das Daten die Komponente verlassen können, damit eine andere Komponente diese Daten empfangen kann. Ein `@Output()` muss vom Typ `EventEmitter` sein, damit eine Komponente ein Ereignis auslösen kann, wenn es Daten gibt, die mit einer anderen Komponente geteilt werden sollen.

> [!NOTE]
> Das `!` in der Eigenschaftsdeklaration der Klasse wird als [definite assignment assertion](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization) bezeichnet. Dieser Operator zeigt TypeScript an, dass das `item`-Feld immer initialisiert und nicht `undefined` ist, selbst wenn TypeScript aufgrund der Deklaration des Konstruktors nicht sicher sein kann. Wenn dieser Operator nicht in Ihrem Code enthalten ist und Sie strikte TypeScript-Kompilierungseinstellungen haben, wird die App nicht kompiliert.

Verwenden Sie `@Input()`, um anzugeben, dass der Wert einer Eigenschaft von außerhalb der Komponente kommen kann. Verwenden Sie `@Output()` in Verbindung mit `EventEmitter`, um anzugeben, dass der Wert einer Eigenschaft die Komponente verlassen kann, sodass eine andere Komponente diese Daten empfangen kann.

Die `saveItem()`-Methode nimmt als Argument eine `description` vom Typ `string`. Die `description` ist der Text, den der Benutzer in das HTML-`<input>` eingibt, wenn er ein Element in der Liste bearbeitet. Diese `description` ist derselbe String aus dem `<input>` mit der Template-Variable `#editedItem`.

Wenn der Benutzer keinen Wert eingibt, aber auf **Speichern** klickt, gibt `saveItem()` nichts zurück und aktualisiert die `description` nicht. Wenn Sie diese `if`-Anweisung nicht hätten, könnte der Benutzer auf **Speichern** klicken, ohne etwas in das HTML-`<input>` einzugeben, und die `description` würde zu einem leeren String werden.

Wenn ein Benutzer Text eingibt und speichert, setzt `saveItem()` `editable` auf false, was dazu führt, dass das `*ngIf` in der Vorlage die Bearbeitungsfunktion entfernt und die **Bearbeiten**- und **Löschen**-Schaltflächen wieder anzeigt.

Obwohl die Anwendung zu diesem Zeitpunkt kompiliert werden sollte, müssen Sie die `ItemComponent` in der `AppComponent` verwenden, damit Sie die neuen Funktionen im Browser sehen können.

## Verwenden der ItemComponent in der AppComponent

Eine Komponente innerhalb einer anderen im Kontext einer Eltern-Kind-Beziehung einzuschließen, gibt Ihnen die Flexibilität, Komponenten überall dort einzusetzen, wo Sie sie benötigen.

Die `AppComponent` dient als Hülle für die Anwendung, in der Sie andere Komponenten einfügen können.

Um die `ItemComponent` in `AppComponent` zu verwenden, setzen Sie den Selektor der `ItemComponent` in die `AppComponent`-Vorlage. Angular gibt den Selektor einer Komponente in den Metadaten des `@Component()`-Dekorators an. In diesem Beispiel haben wir den Selektor als `app-item` definiert:

```js
@Component({
  selector: 'app-item',
  // ...
```

Um den `ItemComponent`-Selektor innerhalb der `AppComponent` zu verwenden, fügen Sie das Element `<app-item>` hinzu, das dem von Ihnen für die Komponentenkategorie definierten Selektor in `app.component.html` entspricht. Ersetzen Sie die aktuelle ungeordnete Liste `<ul>` in `app.component.html` durch die folgende aktualisierte Version:

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

Die doppelten geschweiften Klammern, `\{{}}`, im `<h2>` interpolieren die Länge des `items`-Arrays und zeigen die Anzahl an.

Das `<span>` im `<h2>` verwendet ein `*ngIf` und `else`, um zu bestimmen, ob `<h2>` "Element" oder "Elemente" sagen soll. Wenn sich nur ein einziges Element in der Liste befindet, wird das `<span>`, das "Element" enthält, angezeigt. Andernfalls, wenn die Länge des `items`-Arrays etwas anderes als `1` ist, zeigt das `<ng-template>`, das wir mit der Syntax `#elseBlock` `elseBlock` genannt haben, anstelle des `<span>`. Sie können das `<ng-template>` von Angular verwenden, wenn Sie nicht möchten, dass der Inhalt standardmäßig rendern. In diesem Fall, wenn die Länge des `items`-Arrays nicht `1` ist, zeigt das `*ngIf` den `elseBlock` und nicht das `<span>`.

Das `<li>` verwendet die Wiederholungsdirektive von Angular, `*ngFor`, um über alle Elemente im `items`-Array zu iterieren. Angulars `*ngFor`, wie `*ngIf`, ist eine weitere Direktive, die Ihnen hilft, die Struktur des DOM zu ändern, während Sie weniger Code schreiben. Für jedes `item` wiederholt Angular das `<li>` und alles, was darin enthalten ist, einschließlich `<app-item>`. Das bedeutet, dass Angular für jedes Element im Array eine weitere Instanz von `<app-item>` erstellt. Für jede Anzahl von Elementen im Array würde Angular so viele `<li>`-Elemente erstellen.

Sie können ein `*ngFor` auch auf anderen Elementen verwenden, wie `<div>`, `<span>` oder `<p>`, um nur einige zu nennen.

Die `AppComponent` hat eine `remove()`-Methode zum Entfernen des Elements, die an die `remove`-Eigenschaft in der `ItemComponent` gebunden ist. Die `item`-Eigenschaft in den eckigen Klammern, `[]`, bindet den Wert von `i` zwischen der `AppComponent` und der `ItemComponent`.

Jetzt sollten Sie in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen. Wenn Sie Elemente hinzufügen oder löschen, sollte sich auch die Anzahl der Elemente ändern. Um die Liste benutzerfreundlicher zu gestalten, fügen Sie einige Stile zur `ItemComponent` hinzu.

## Stile zur ItemComponent hinzufügen

Sie können das Stilblatt einer Komponente verwenden, um spezifische Stile für diese Komponente hinzuzufügen. Die folgende CSS fügt grundlegende Stile, Flexbox für die Schaltflächen und benutzerdefinierte Kontrollkästchen hinzu.

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

Sie sollten nun eine gestylte Angular-To-Do-Listen-Anwendung haben, die Elemente hinzufügen, bearbeiten und entfernen kann. Der nächste Schritt besteht darin, das Filtern hinzuzufügen, damit Sie Elemente ansehen können, die bestimmte Kriterien erfüllen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
