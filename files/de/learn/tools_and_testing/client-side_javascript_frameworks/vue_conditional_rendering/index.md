---
title: "Vue konditionales Rendering: Bearbeiten bestehender Todos"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun ist es an der Zeit, eine der wichtigsten Funktionen hinzuzufügen, die uns noch fehlt – die Fähigkeit, bestehende Todo-Elemente zu bearbeiten. Dazu nutzen wir die Möglichkeiten des bedingten Renderings von Vue – nämlich `v-if` und `v-else` – um zwischen der Ansicht des bestehenden Todo-Elements und einer Bearbeitungsansicht zu wechseln, in der Sie die Bezeichnungen der Todo-Elemente aktualisieren können. Wir werden auch die Hinzufügung der Funktionalität zum Löschen von Todo-Elementen untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlzeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und zur Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Lernen, wie man bedingtes Rendering in Vue durchführt.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können beginnen, indem wir eine separate Komponente erstellen, die die Bearbeitungsfunktionalität behandelt. Erstellen Sie in Ihrem `components` Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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
> Gehen Sie den oben angezeigten Code durch und lesen Sie dann die unten stehende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente macht, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles, was Sie bisher gelernt haben, zu festigen.

Dieser Code richtet den Kern der Bearbeitungsfunktionalität ein. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unseres To-dos.

Es gibt einen "Save"-Button und einen "Cancel"-Button:

- Wenn der "Save"-Button angeklickt wird, gibt die Komponente das neue Label über ein `item-edited`-Ereignis aus.
- Wenn der "Cancel"-Button angeklickt wird, signalisiert die Komponente dies, indem sie ein `edit-cancelled`-Ereignis ausgibt.

## Modifizierung unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir werden auch einen `Delete`-Button hinzufügen, da das Löschen eng damit verbunden ist.

Aktualisieren Sie das Template von `ToDoItem` wie unten gezeigt.

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

Wir haben ein wrapper `<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Edit" und "Delete" Buttons hinzugefügt:

- Der "Edit"-Button, wenn er angeklickt wird, wird das `ToDoItemEditForm`-Komponente anzeigen, damit wir unser Todo-Element bearbeiten können, über eine Ereignisbehandlungsfunktion namens `toggleToItemEditForm()`. Dieser Handler wird eine `isEditing`-Flag auf true setzen. Dazu müssen wir ihn zuerst in unserer `data()`-Eigenschaft definieren.
- Der "Delete"-Button, wenn er angeklickt wird, löscht das Todo-Element über eine Ereignisbehandlungsfunktion namens `deleteToDo()`. In diesem Handler geben wir ein `item-deleted`-Ereignis an unsere übergeordnete Komponente aus, damit die Liste aktualisiert werden kann.

Lassen Sie uns unsere Klick-Handler und das notwendige `isEditing`-Flag definieren.

Fügen Sie `isEditing` unter Ihrem vorhandenen `isDone` Datenpunkt hinzu:

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

Fügen Sie nun Ihre Methoden innerhalb einer Methoden-Eigenschaft hinzu, direkt unter Ihrer `data()`-Eigenschaft:

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

## Komponenten bedingt über v-if und v-else anzeigen

Nun haben wir ein `isEditing`-Flag, das wir verwenden können, um zu signalisieren, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle der Checkbox anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert einen Block nur, wenn der übergebene Wert wahrheitsgemäß ist. Dies ist ähnlich wie eine `if`-Anweisung in JavaScript. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um die in JavaScript bekannten `else if` und `else` Logiken innerhalb der Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if` Blocks das erste Geschwister eines `v-if`/`v-else-if` Blocks sein müssen, andernfalls erkennt Vue sie nicht. Sie können `v-if` auch an ein `<template>`-Tag anhängen, wenn Sie ein gesamtes Template bedingt rendern müssen.

Zuletzt können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block anzuzeigen, da Vue jeweils nur einen dieser Blöcke rendert. Das werden wir in unserer App machen, da es uns erlaubt, den Code, der unser Todo-Element anzeigt, mit dem Bearbeitungsformular zu ersetzen.

Fügen Sie zuerst `v-if="!isEditing"` zum Root-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```html
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie als nächstes unter dem schließenden Tag dieses `<div>` die folgende Zeile hinzu:

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm` Komponente importieren und registrieren, damit wir sie innerhalb dieses Templates verwenden können. Fügen Sie diese Zeile oben in Ihrem `<script>`-Element hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft über der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

```js
components: {
  ToDoItemEditForm
},
```

Wenn Sie nun zu Ihrer App gehen und auf den "Edit"-Button eines Todo-Elements klicken, sollten Sie die Checkbox mit dem Bearbeitungsformular ersetzt sehen.

![Die Todo-Listen-App mit angezeigten "Edit"- und "Delete"-Buttons und eines der Todos im Bearbeitungsmodus mit einem Bearbeitungseingabefeld und Speichern- und Abbrechen-Buttons angezeigt](todo-edit-delete.png)

Es gibt jedoch derzeit keine Möglichkeit, zurückzukehren. Um dies zu beheben, müssen wir weitere Event-Handler zu unserer Komponente hinzufügen.

## Aus dem Bearbeitungsmodus zurückkehren

Zuerst müssen wir eine `itemEdited()`-Methode zu unserer `ToDoItem`-Komponente in den `methods` hinzufügen. Diese Methode sollte das neue Element-Label als Argument nehmen, ein `itemEdited`-Ereignis an die übergeordnete Komponente ausgeben und `isEditing` auf `false` setzen.

Fügen Sie es nun unter Ihren bestehenden Methoden hinzu:

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

Als nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode wird keine Argumente haben und dient nur dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen hinzu:

```js
editCancelled() {
  this.isEditing = false;
}
```

Zuletzt für diesen Abschnitt fügen wir Event-Handler für die von der `ToDoItemEditForm`-Komponente ausgegebenen Ereignisse hinzu und hängen die entsprechenden Methoden an jedes Ereignis an.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf, sodass er wie folgt aussieht:

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

Nun können wir zwischen dem Bearbeitungsformular und der Checkbox umschalten. Wir haben jedoch noch nicht die `ToDoItems`-Array in `App.vue` aktualisiert. Um dies zu beheben, müssen wir auf das `item-edited`-Ereignis hören und die Liste entsprechend aktualisieren. Wir wollen auch das Delete-Event behandeln, damit wir Todo-Elemente löschen können.

Fügen Sie die folgenden neuen Methoden zum Komponentenobjekt Ihrer `App.vue` hinzu, unterhalb der vorhandenen Methoden innerhalb der `methods`-Eigenschaft:

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

Als nächstes fügen wir die Event-Listener für die `item-deleted`- und `item-edited`-Ereignisse hinzu:

- Für `item-deleted` müssen Sie die `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Ereignisdaten an Methoden zu übergeben. Bei der Verwendung nativer HTML-Ereignisse (wie `click`) wird dadurch das native Ereignisobjekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item>`-Aufruf innerhalb des `App.vue`-Templates wie folgt:

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

Und da haben Sie es – jetzt sollten Sie in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen!

## Behebung eines kleinen Fehlers mit dem isDone-Status

Das ist bisher großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie Folgendes:

1. Markieren (oder demarkieren) Sie eine der Todo-Checkboxen.
2. Drücken Sie den "Edit"-Button für dieses Todo-Element.
3. Brechen Sie die Bearbeitung ab, indem Sie die "Cancel"-Taste drücken.

Beachten Sie den Zustand der Checkbox, nachdem Sie abgebrochen haben – nicht nur, dass die App den Zustand der Checkbox vergessen hat, sondern auch der erfüllte Status dieses Todo-Elements ist jetzt falsch. Wenn Sie versuchen, es erneut zu markieren (oder zu demarkieren), ändert sich die Anzahl der abgeschlossenen Aufgaben in die entgegengesetzte Richtung als erwartet. Dies liegt daran, dass das `isDone` innerhalb der `data`-Eigenschaft nur beim Laden der Komponente den Wert `this.done` erhält.

Die Lösung hierfür ist zum Glück recht einfach – wir können dies beheben, indem wir unsere `isDone`-Datenpunkt in eine [berechnete Eigenschaft](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties) umwandeln – ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was unter anderem bedeutet, dass ihr Zustand gespeichert bleibt, wenn sich das Template ändert, so wie es bei uns jetzt der Fall ist.

Also, let's implement the fix in `ToDoItem.vue`:

1. Entfernen Sie die folgende Zeile aus Ihrer `data()`-Eigenschaft:

   ```js
   isDone: this.done,
   ```

2. Fügen Sie den folgenden Block unterhalb des `data() { }`-Blocks hinzu:

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

Wenn Sie jetzt speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist – der Checkbox-Zustand bleibt jetzt erhalten, wenn Sie zwischen den Todo-Item-Templates wechseln.

## Den Wirrwarr von Ereignissen verstehen

Einer der potenziell verwirrendsten Teile ist der Wirrwarr von Standard- und benutzerdefinierten Ereignissen, die wir verwendet haben, um die gesamte Interaktivität in unserer App auszulösen. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu erstellen, das zeigt, welche Ereignisse wo ausgestrahlt werden, wo sie gehört werden und was als Ergebnis ihres Feuerns geschieht.

### App.vue

`<to-do-form>` hört auf:

- `todo-added`-Ereignis, das von der `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente beim Absenden des Formulars ausgegeben wird.
  **Ergebnis**: `addToDo()` Methode wird aufgerufen, um ein neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed`-Ereignis, das von der Checkbox `<input>` innerhalb der `ToDoItem`-Komponente ausgegeben wird, wenn es markiert oder demarkiert wird.
  **Ergebnis**: `updateDoneStatus()` Methode wird aufgerufen, um den Erledigungsstatus des zugehörigen Todo-Elements zu aktualisieren.
- `item-deleted`-Ereignis, das von der `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente ausgegeben wird, wenn die "Delete"-Taste gedrückt wird.
  **Ergebnis**: `deleteToDo()` Methode wird aufgerufen, um das zugehörige Todo-Element zu löschen.
- `item-edited`-Ereignis, das von der `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente ausgegeben wird, wenn das `item-edited`-Ereignis, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm` erfolgreich ausgegeben wurde, gehört wurde. Ja, das ist eine Kette von zwei verschiedenen `item-edited`-Ereignissen!
  **Ergebnis**: `editToDo()` Methode wird aufgerufen, um das Label des zugehörigen Todo-Elements zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf das `submit`-Ereignis.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die überprüft, ob das neue Label nicht leer ist, dann das `todo-added`-Ereignis ausgibt (das dann in `App.vue` gehört wird, siehe oben) und schließlich das neue Label-`<input>` löscht.

### ToDoItem.vue

Das `<input>` vom Typ "Checkbox" hört auf `change`-Ereignisse.
**Ergebnis**: `checkbox-changed` Ereignis wird ausgegeben, wenn die Checkbox markiert/demarkiert wird (das dann in `App.vue` gehört wird; siehe oben).

"Edit" `<button>` hört auf `click`-Ereignis.
**Ergebnis**: `toggleToItemEditForm()` Methode wird aufgerufen, die `this.isEditing` auf `true` umschaltet, was wiederum das Bearbeitungsformular des Todo-Items bei der Neurendering anzeigt.

"Delete" `<button>` hört auf `click`-Ereignis.
**Ergebnis**: `deleteToDo()` Methode wird aufgerufen, die das `item-deleted`-Ereignis ausgibt (das dann in `App.vue` gehört wird; siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited` Ereignis, das von der `onSubmit()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgegeben wird, wenn das Formular erfolgreich abgeschickt wurde.
  **Ergebnis**: `itemEdited()` Methode wird aufgerufen, die das `item-edited`-Ereignis ausgibt (das dann in `App.vue` gehört wird, siehe oben) und `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular nach dem Neurendering nicht mehr angezeigt wird.
- `edit-cancelled` Ereignis, das von der `onCancel()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgegeben wird, wenn der "Cancel"-Button angeklickt wird.
  **Ergebnis**: `editCancelled()` Methode wird aufgerufen, die `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular nach dem Neurendering nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf das `submit` Ereignis.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, ob der neue Labelwert nicht leer ist und nicht mit dem alten übereinstimmt, und dann das `item-edited` Ereignis ausgibt (das dann in `ToDoItem.vue` gehört wird, siehe oben).

"Cancel" `<button>` hört auf `click`-Ereignis.
**Ergebnis**: `onCancel()` Methode wird aufgerufen, die das `edit-cancelled` Ereignis ausgibt (das dann in `ToDoItem.vue` gehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt Bearbeitungs- und Löschfunktionalität in unserer App, was ziemlich spannend ist. Wir nähern uns jetzt dem Ende unserer Vue-Serie. Der letzte Teil der Funktionalität, den wir uns ansehen werden, ist das Fokusmanagement, oder anders ausgedrückt, wie wir die Tastaturbarrierefreiheit unserer App verbessern können.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
