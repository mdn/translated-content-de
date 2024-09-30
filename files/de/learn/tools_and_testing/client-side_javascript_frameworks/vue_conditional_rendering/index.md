---
title: "Vue bedingte Darstellung: Bearbeitung bestehender Todos"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, eine der größten Funktionalitäten hinzuzufügen, die uns noch fehlt – die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Dazu werden wir die Fähigkeiten von Vues bedingter Darstellung nutzen – nämlich `v-if` und `v-else` – um zwischen der Ansicht eines bestehenden Todo-Elements und einer Bearbeitungsansicht umzuschalten, in der Sie die Labels von Todo-Elementen aktualisieren können. Wir werden auch die Funktionalität zum Löschen von Todo-Elementen hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Wissen über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/die Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten erstellt, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet wird. Um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) nutzen zu können, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man in Vue bedingte Darstellung umsetzt.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir beginnen damit, eine separate Komponente zu erstellen, die die Bearbeitungsfunktionalität übernimmt. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

```html
<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Edit Name for &quot;\{{label}}&quot;</label>
      <input
        :id="id"
        type="text"
        autocomplete="off"
        v-model.lazy.trim="newLabel" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing \{{label}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for \{{label}}</span>
      </button>
    </div>
  </form>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        newLabel: this.label,
      };
    },
    methods: {
      onSubmit() {
        if (this.newLabel && this.newLabel !== this.label) {
          this.$emit("item-edited", this.newLabel);
        }
      },
      onCancel() {
        this.$emit("edit-cancelled");
      },
    },
  };
</script>
<style scoped>
  .edit-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }
  input {
    display: inline-block;
    margin-top: 0.4rem;
    width: 100%;
    min-height: 4.4rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid #565656;
  }
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  form > * {
    flex: 0 0 100%;
  }
</style>
```

> [!NOTE]
> Gehen Sie den obigen Code durch und lesen Sie die nachfolgende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente tut, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles, was Sie bisher gelernt haben, zu festigen.

Dieser Code bildet die Grundlage der Bearbeitungsfunktionalität. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unseres To-Dos.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button geklickt wird, gibt die Komponente das neue Label über ein `item-edited`-Event aus.
- Wenn der "Abbrechen"-Button geklickt wird, signalisiert die Komponente dies durch das Ausgeben eines `edit-cancelled`-Events.

## Modifikation unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` in unsere App einfügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir werden auch einen `Delete`-Button hinzufügen, da das Löschen eng damit verbunden ist.

Aktualisieren Sie das Template ihres `ToDoItem` wie unten gezeigt.

```html
<template>
  <div class="stack-small">
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')" />
      <label :for="id" class="checkbox-label">\{{label}}</label>
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="toggleToItemEditForm">
        Edit <span class="visually-hidden">\{{label}}</span>
      </button>
      <button type="button" class="btn btn__danger" @click="deleteToDo">
        Delete <span class="visually-hidden">\{{label}}</span>
      </button>
    </div>
  </div>
</template>
```

Wir haben einen Wrapper-`<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button schaltet bei einem Klick die Anzeige der `ToDoItemEditForm`-Komponente um, sodass wir sie zum Bearbeiten unseres Todo-Elements verwenden können, über eine Ereignishandlerfunktion namens `toggleToItemEditForm()`. Dieser Handler setzt ein `isEditing`-Flag auf true. Dazu müssen wir es zuerst innerhalb unserer `data()`-Eigenschaft definieren.
- Der "Löschen"-Button löscht bei einem Klick das Todo-Element über eine Ereignishandlerfunktion namens `deleteToDo()`. In diesem Handler werden wir ein `item-deleted`-Event an unsere übergeordnete Komponente ausgeben, sodass die Liste aktualisiert werden kann.

Lassen Sie uns unsere Klick-Handler und das notwendige `isEditing`-Flag definieren.

Fügen Sie `isEditing` unter Ihrem bestehenden `isDone`-Datenpunkt hinzu:

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

Fügen Sie nun Ihre Methoden innerhalb einer methods-Eigenschaft direkt unterhalb Ihrer `data()`-Eigenschaft hinzu:

```js
methods: {
    deleteToDo() {
      this.$emit('item-deleted');
    },
    toggleToItemEditForm() {
      this.isEditing = true;
    }
  }
```

## Bedingte Darstellung von Komponenten über v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, mit dem wir anzeigen können, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle der Checkbox anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert einen Block nur, wenn der Wert, der an sie übergeben wird, wahrheitsgetreu ist. Dies funktioniert ähnlich wie eine `if`-Anweisung in JavaScript. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if)- und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else)-Direktiven, um das Äquivalent der JavaScript-`else if`- und `else`-Logik innerhalb von Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else`- und `v-else-if`-Blöcke das erste Geschwister eines `v-if`/`v-else-if`-Blocks sein müssen, andernfalls wird Vue sie nicht erkennen. Sie können `v-if` auch an ein `<template>`-Tag anhängen, wenn Sie ein gesamtes Template bedingt rendern müssen.

Schließlich können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block oder einen anderen anzuzeigen, da Vue immer nur einen dieser Blöcke gleichzeitig rendern wird. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code zu ersetzen, der unser Todo-Element mit dem Bearbeitungsformular anzeigt.

Fügen Sie zuerst `v-if="!isEditing"` zum Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```html
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie als Nächstes unterhalb des abschließenden Tags dieses `<div>` die folgende Zeile hinzu:

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie innerhalb dieses Templates verwenden können. Fügen Sie diese Zeile am Anfang Ihres `<script>`-Elements hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft oberhalb der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

```js
components: {
  ToDoItemEditForm
},
```

Wenn Sie nun zu Ihrer App gehen und auf den "Bearbeiten"-Button eines Todo-Elements klicken, sollten Sie die Checkbox durch das Bearbeitungsformular ersetzt sehen.

![Die Todo-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons, sowie eines der Todos im Bearbeitungsmodus, mit einem Bearbeitungsinput und Speicher- und Abbrechen-Buttons](todo-edit-delete.png)

Derzeit gibt es jedoch keine Möglichkeit zurückzugehen. Um das zu beheben, müssen wir einige weitere Ereignishandler zu unserer Komponente hinzufügen.

## Den Bearbeitungsmodus wieder verlassen

Zuerst müssen wir unserer `ToDoItem`-Komponente eine `itemEdited()`-Methode hinzufügen, die die neue Elementbezeichnung als Argument annimmt, ein `itemEdited`-Event an die übergeordnete Komponente aussendet und `isEditing` auf `false` setzt.

Fügen Sie diese Methode jetzt hinzu, unterhalb Ihrer vorhandenen Methoden:

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

Als Nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode nimmt keine Argumente entgegen und dient lediglich dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen Methode hinzu:

```js
editCancelled() {
  this.isEditing = false;
}
```

Zuletzt in diesem Abschnitt, fügen wir Ereignishandler für die von der `ToDoItemEditForm`-Komponente ausgesendeten Events hinzu und verknüpfen die entsprechenden Methoden mit jedem Event.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf, sodass er folgendermaßen aussieht:

```html
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## Aktualisieren und Löschen von Todo-Elementen

Jetzt können wir zwischen dem Bearbeitungsformular und der Checkbox umschalten. Wir haben jedoch noch nicht die `ToDoItems`-Array in `App.vue` aktualisiert. Um das zu beheben, müssen wir auf das `item-edited`-Event hören und die Liste entsprechend aktualisieren. Wir werden auch das Lösch-Event behandeln wollen, damit wir Todo-Elemente löschen können.

Fügen Sie die folgenden neuen Methoden zum Komponentenobjekt Ihrer `App.vue` hinzu, unterhalb der bereits vorhandenen Methoden innerhalb der `methods`-Eigenschaft:

```js
deleteToDo(toDoId) {
  const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
  this.ToDoItems.splice(itemIndex, 1);
},
editToDo(toDoId, newLabel) {
  const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
  toDoToEdit.label = newLabel;
}
```

Als Nächstes fügen wir die Ereignislistener für die `item-deleted`- und `item-edited`-Events hinzu:

- Für `item-deleted` müssen Sie die `item.id`-Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Ereignisdaten an Methoden zu übergeben. Bei der Verwendung von nativen HTML-Ereignissen (wie `click`) wird dadurch das native Ereignisobjekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>`-Aufruf innerhalb des Templates der `App.vue`, sodass er so aussieht:

```html
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)"
  @item-deleted="deleteToDo(item.id)"
  @item-edited="editToDo(item.id, $event)">
</to-do-item>
```

Und da haben Sie es — Sie sollten nun in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen!

## Beheben eines kleinen Fehlers mit dem isDone-Status

Das ist bisher großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie dies:

1. Markieren (oder demarkieren) Sie eine der Todo-Checkboxen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Element.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand der Checkbox, nachdem Sie abbrechen — die App hat nicht nur den Stand der Checkbox vergessen, sondern der Erledigt-Status dieses Todo-Elements ist jetzt durcheinander. Wenn Sie versuchen, sie erneut zu markieren (oder zu demarkieren), ändert sich die Anzahl der Erledigten auf umgekehrte Weise im Vergleich zu dem, was Sie erwarten würden. Dies liegt daran, dass `isDone` im `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Dieses Problem zu beheben ist zum Glück recht einfach – wir können das tun, indem wir unser `isDone`-Datenitem in eine [berechnete Eigenschaft](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties) umwandeln – ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was unter anderem bedeutet, dass ihr Zustand gespeichert wird, wenn das Template gewechselt wird, wie es unsere Anwendung jetzt tut.

Also, lassen Sie uns den Fix in `ToDoItem.vue` implementieren:

1. Entfernen Sie die folgende Zeile aus Ihrer `data()`-Eigenschaft:

   ```js
   isDone: this.done,
   ```

2. Fügen Sie den folgenden Block unter dem `data() { }`-Block hinzu:

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

Wenn Sie nun speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist – der Zustand der Checkbox wird jetzt beibehalten, wenn Sie zwischen Todo-Element-Templates wechseln.

## Das Verwirrspiel der Events verstehen

Einer der potenziell verwirrendsten Teile ist das Verwirrspiel aus Standard- und benutzerdefinierten Events, das wir verwendet haben, um alle interaktiven Funktionen in unserer App zu steuern. Um das besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu schreiben, welches die ausgesendeten Events und ihre Listener darstellt, und was passiert, wenn sie ausgelöst werden.

### App.vue

`<to-do-form>` hört auf:

- `todo-added`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente ausgesendet wird, wenn das Formular abgeschickt wird.
  **Ergebnis**: `addToDo()`-Methode wird aufgerufen, um ein neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed`-Event, das von der Checkbox-`<input>` innerhalb der `ToDoItem`-Komponente ausgesendet wird, wenn es markiert oder demarkiert wird.
  **Ergebnis**: `updateDoneStatus()`-Methode wird aufgerufen, um den Erledigt-Status des zugehörigen Todo-Elements zu aktualisieren.
- `item-deleted`-Event, das von der `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente ausgesendet wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, um das zugehörige Todo-Element zu löschen.
- `item-edited`-Event, das von der `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente ausgesendet wird, wenn das `item-edited`-Event von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm` erfolgreich empfangen wurde. Ja, das ist eine Kette von zwei verschiedenen `item-edited`-Events!
  **Ergebnis**: `editToDo()`-Methode wird aufgerufen, um das Label des zugehörigen Todo-Elements zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die prüft, ob das neue Label nicht leer ist, und dann das `todo-added`-Event (das dann innerhalb von `App.vue` gehört wird, siehe oben) aussendet, und schließlich das neue Label `<input>` zurücksetzt.

### ToDoItem.vue

Das `<input>` vom `type="checkbox"` hört auf `change`-Events.
**Ergebnis**: `checkbox-changed`-Event wird ausgesendet, wenn die Checkbox markiert/demarkiert wird (was dann innerhalb von `App.vue` gehört wird, siehe oben).

"Bearbeiten"-`<button>` hört auf `click`-Event.
**Ergebnis**: Die `toggleToItemEditForm()`-Methode wird aufgerufen, die `this.isEditing` auf `true` umschaltet, was dazu führt, dass das Bearbeitungsformular des Todo-Elements beim erneuten Rendern angezeigt wird.

"Löschen"-`<button>` hört auf `click`-Event.
**Ergebnis**: Die `deleteToDo()`-Methode wird aufgerufen, die das `item-deleted`-Event aussendet (was dann innerhalb von `App.vue` gehört wird, siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgesendet wird, wenn das Formular erfolgreich abgeschickt wird.
  **Ergebnis**: `itemEdited()`-Methode wird aufgerufen, die das `item-edited`-Event aussendet (was dann innerhalb von `App.vue` gehört wird, siehe oben), und `this.isEditing` auf `false` zurücksetzt, sodass das Bearbeitungsformular beim erneuten Rendern nicht mehr angezeigt wird.
- `edit-cancelled`-Event, das von der `onCancel()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgesendet wird, wenn der "Abbrechen"-Button geklickt wird.
  **Ergebnis**: `editCancelled()`-Methode wird aufgerufen, die `this.isEditing` auf `false` zurücksetzt, sodass das Bearbeitungsformular beim erneuten Rendern nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die prüft, ob der neue Labelwert nicht leer und nicht mit dem alten identisch ist, und wenn ja, das `item-edited`-Event aussendet (was dann innerhalb von `ToDoItem.vue` gehört wird, siehe oben).

"Abbrechen"-`<button>` hört auf `click`-Event.
**Ergebnis**: `onCancel()`-Methode wird aufgerufen, die das `edit-cancelled`-Event aussendet (was dann innerhalb von `ToDoItem.vue` gehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt eine Bearbeitungs- und Löschfunktionalität in unserer App, was ziemlich aufregend ist. Wir nähern uns nun dem Ende unserer Vue-Serie. Das letzte Stück Funktionalität, das wir betrachten, ist das Fokusmanagement, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
