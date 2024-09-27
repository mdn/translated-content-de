---
title: "Vue Bedingte Darstellung: Bearbeiten bestehender Todos"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, eine der wichtigsten Funktionen hinzuzufügen, die wir noch vermissen - die Fähigkeit, bestehende To-do-Elemente zu bearbeiten. Dazu werden wir die Möglichkeiten der bedingten Darstellung von Vue nutzen - nämlich `v-if` und `v-else` - um zwischen der bestehenden To-do Ansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Bezeichnungen der To-do Elemente aktualisieren können. Außerdem werden wir uns ansehen, wie man Funktionalität zum Löschen von To-do Elementen hinzufügt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten
          geschrieben, die die Daten der App verwalten, und einer auf HTML
          basierenden Vorlagensyntax, die der zugrunde liegenden DOM-Struktur
          zugeordnet ist. Für die Installation und die Nutzung einiger der
          fortgeschritteneren Funktionen von Vue (wie Single File Components
          oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem
          Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man in Vue bedingte Darstellung einsetzen kann.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können damit beginnen, eine separate Komponente zu erstellen, die die Bearbeitungsfunktionalität übernimmt. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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

Dieser Code legt den Kern der Bearbeitungsfunktionalität fest. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unseres To-dos.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button angeklickt wird, gibt die Komponente das neue Label über ein `item-edited`-Ereignis aus.
- Wenn der "Abbrechen"-Button angeklickt wird, signalisiert die Komponente dies, indem sie ein `edit-cancelled`-Ereignis auslöst.

## Änderungen an unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Wir müssen insbesondere eine Variable hinzufügen, um zu verfolgen, ob ein Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir werden auch einen `Löschen`-Button hinzufügen, da das Löschen eng damit verbunden ist.

Aktualisieren Sie die Vorlage Ihres `ToDoItem`-Elements wie unten gezeigt.

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

Wir haben einen Wrapper-`<div>` um die gesamte Vorlage für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten" und "Löschen" Buttons hinzugefügt:

- Der "Bearbeiten"-Button, wenn geklickt, toggelt die Anzeige der `ToDoItemEditForm`-Komponente, sodass wir sie verwenden können, um unser To-do-Element zu bearbeiten, über eine Ereignis-Handler-Funktion namens `toggleToItemEditForm()`. Dieser Handler setzt eine `isEditing`-Flag auf true. Um dies zu tun, müssen wir es zuerst in unserer `data()`-Eigenschaft definieren.
- Der "Löschen"-Button, wenn geklickt, löscht das To-do-Element über eine Ereignis-Handler-Funktion namens `deleteToDo()`. In diesem Handler geben wir ein `item-deleted`-Ereignis an unsere übergeordnete Komponente aus, damit die Liste aktualisiert werden kann.

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

Fügen Sie nun Ihre Methoden in einer Methoden-Eigenschaft, direkt unter Ihrer `data()`-Eigenschaft hinzu:

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

## Bedingt Komponenten mit v-if und v-else anzeigen

Jetzt haben wir ein `isEditing`-Flag, das wir verwenden können, um zu signalisieren, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle des Kontrollkästchens anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert nur einen Block, wenn der Wert, der ihr übergeben wird, wahrhaftig ist. Dies ist ähnlich wie eine `if`-Anweisung in JavaScript funktioniert. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um das Äquivalent von JavaScript `else if` und `else` Logik innerhalb von Vue-Vorlagen bereitzustellen.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if` Blöcke das erste Geschwister eines `v-if`/`v-else-if` Blocks sein müssen, andernfalls wird Vue sie nicht erkennen. Sie können `v-if` auch an ein `<template>` Tag anhängen, wenn Sie eine gesamte Vorlage bedingt rendern müssen.

Schließlich können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block oder einen anderen anzuzeigen, da Vue jeweils nur einen dieser Blöcke rendert. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code zu ersetzen, der unser To-do Element mit dem Bearbeitungsformular anzeigt.

Fügen Sie zunächst `v-if="!isEditing"` zum Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```html
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie als nächstes unterhalb des abschließenden Tags dieses `<div>` die folgende Zeile hinzu:

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie innerhalb dieser Vorlage verwenden können. Fügen Sie diese Zeile am Anfang Ihres `<script>`-Elements hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft oberhalb der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

```js
components: {
  ToDoItemEditForm
},
```

Jetzt, wenn Sie zu Ihrer App gehen und auf den "Bearbeiten"-Button eines To-do Elements klicken, sollten Sie sehen, dass das Kontrollkästchen durch das Bearbeitungsformular ersetzt wird.

![Die To-do-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons, und einem der To-dos im Bearbeitungsmodus, mit einem Bearbeitungs-Eingabefeld sowie Speichern- und Abbrechen-Buttons](todo-edit-delete.png)

Allerdings gibt es derzeit keine Möglichkeit, zurückzugehen. Um dies zu beheben, müssen wir weitere Ereignis-Handler zu unserer Komponente hinzufügen.

## Bearbeitungsmodus verlassen

Zuerst müssen wir eine `itemEdited()`-Methode zur `methods` Ihrer `ToDoItem`-Komponente hinzufügen. Diese Methode sollte das neue Artikel-Label als Argument nehmen, ein `itemEdited`-Ereignis an die übergeordnete Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie sie jetzt unter Ihren bestehenden Methoden hinzu:

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

Als nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode nimmt keine Argumente und dient lediglich dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen hinzu:

```js
editCancelled() {
  this.isEditing = false;
}
```

Zuletzt in diesem Abschnitt fügen wir Ereignis-Handler für die von der `ToDoItemEditForm`-Komponente ausgelösten Ereignisse hinzu und binden die entsprechenden Methoden an jedes Ereignis.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>` Aufruf, damit er folgendermaßen aussieht:

```html
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## Aktualisieren und Löschen von To-do-Elementen

Jetzt können wir zwischen dem Bearbeitungsformular und dem Kontrollkästchen wechseln. Allerdings haben wir das Aktualisieren des `ToDoItems`-Arrays in `App.vue` noch nicht behandelt. Um das zu beheben, müssen wir auf das `item-edited`-Ereignis hören und die Liste entsprechend aktualisieren. Wir wollen auch das Löschereignis behandeln, damit wir To-do-Elemente löschen können.

Fügen Sie die folgenden neuen Methoden zum Komponentenobjekt Ihrer `App.vue` hinzu, unter den bestehenden Methoden innerhalb der `methods`-Eigenschaft:

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

Als nächstes fügen wir die Ereignis-Listener für die `item-deleted`- und `item-edited`-Ereignisse hinzu:

- Für `item-deleted` müssen Sie die `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Ereignisdaten an Methoden zu übergeben. Bei Verwendung nativer HTML-Ereignisse (wie `click`) wird dadurch das native Ereignisobjekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>` Aufruf innerhalb der `App.vue`-Vorlage, sodass er so aussieht:

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

Und da haben Sie es — Sie sollten jetzt in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen!

## Beheben eines kleinen Fehlers mit dem isDone-Status

Das ist bisher großartig, aber durch das Hinzufügen der Bearbeitungsfunktionalität haben wir tatsächlich einen Fehler eingeführt. Versuchen Sie Folgendes:

1. Aktivieren (oder deaktivieren) Sie eines der To-do-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses To-do Element.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abgebrochen haben - nicht nur hat die App den Status des Kontrollkästchens vergessen, sondern der erledigte Status dieses To-do-Elements ist jetzt durcheinander. Wenn Sie versuchen, es erneut zu aktivieren (oder zu deaktivieren), ändert sich die Abschlusshäufigkeit in die entgegengesetzte Richtung als erwartet. Das liegt daran, dass `isDone` innerhalb der `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Das Beheben dieses Problems ist glücklicherweise ganz einfach - wir können dies tun, indem wir unsere `isDone`-Daten-Element in eine [computed property](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties) umwandeln – ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was unter anderem bedeutet, dass ihr Zustand gespeichert wird, wenn sich die Vorlage ändert, wie es jetzt der Fall ist.

Also, lassen Sie uns die Lösung in `ToDoItem.vue` implementieren:

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

Jetzt, wenn Sie speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist - der Zustand des Kontrollkästchens wird jetzt erhalten, wenn Sie zwischen den To-do-Elementvorlagen wechseln.

## Verständnis des Geflechts von Ereignissen

Einer der möglicherweise verwirrendsten Teile ist das Geflecht aus Standard- und benutzerdefinierten Ereignissen, mit denen wir die gesamte Interaktivität in unserer App ausgelöst haben. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu schreiben, welches Ereignisse wo ausgesendet werden, wo sie abgehört werden und was als Ergebnis ihres Auslösens passiert.

### App.vue

`<to-do-form>` hört auf:

- `todo-added` Ereignis, das durch die `onSubmit()` Methode innerhalb der `ToDoForm` Komponente ausgelöst wird, wenn das Formular abgeschickt wird.
  **Ergebnis**: `addToDo()` Methode wird aufgerufen, um ein neues To-do Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed` Ereignis, das durch das Kontrollkästchen `<input>` innerhalb der `ToDoItem` Komponente ausgelöst wird, wenn es aktiviert oder deaktiviert wird.
  **Ergebnis**: `updateDoneStatus()` Methode wird aufgerufen, um den Erledigungsstatus des zugehörigen To-do-Eintrags zu aktualisieren.
- `item-deleted` Ereignis, das durch die `deleteToDo()` Methode innerhalb der `ToDoItem` Komponente ausgelöst wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()` Methode wird aufgerufen, um den zugehörigen To-do Eintrag zu löschen.
- `item-edited` Ereignis, das durch die `itemEdited()` Methode innerhalb der `ToDoItem` Komponente ausgelöst wird, wenn das `item-edited` Ereignis durch die `onSubmit()` Methode innerhalb der `ToDoItemEditForm` erfolgreich gehört wurde. Ja, dies ist eine Kette von zwei verschiedenen `item-edited` Ereignissen!
  **Ergebnis**: `editToDo()` Methode wird aufgerufen, um das Label des zugehörigen To-do Eintrags zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf das `submit` Ereignis.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, ob das neue Label nicht leer ist, dann das `todo-added` Ereignis ausgibt (das dann in `App.vue` gehört wird, siehe oben) und schließlich das neue Label-`<input>` löscht.

### ToDoItem.vue

Das `<input>`-Element vom `type="checkbox"` hört auf `change` Ereignisse.
**Ergebnis**: `checkbox-changed` Ereignis wird ausgelöst, wenn das Kontrollkästchen aktiviert/deaktiviert wird (das dann in `App.vue` gehört wird, siehe oben).

"Bearbeiten"-`<button>` hört auf `click` Ereignis.
**Ergebnis**: `toggleToItemEditForm()` Methode wird aufgerufen, die `this.isEditing` auf `true` umschaltet, was wiederum das Bearbeitungsformular des To-do-Elements beim erneuten Rendern anzeigt.

"Löschen"-`<button>` hört auf `click` Ereignis.
**Ergebnis**: `deleteToDo()` Methode wird aufgerufen, die das `item-deleted` Ereignis auslöst (das dann in `App.vue` gehört wird, siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited` Ereignis, das durch die `onSubmit()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgelöst wird, wenn das Formular erfolgreich abgeschickt wurde.
  **Ergebnis**: `itemEdited()` Methode wird aufgerufen, die das `item-edited` Ereignis ausgibt (das dann in `App.vue` gehört wird, siehe oben) und `this.isEditing` auf `false` setzt, sodass das Bearbeitungsformular beim erneuten Rendern nicht mehr angezeigt wird.
- `edit-cancelled` Ereignis, das durch die `onCancel()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgelöst wird, wenn der "Abbrechen"-Button geklickt wird.
  **Ergebnis**: `editCancelled()` Methode wird aufgerufen, die `this.isEditing` auf `false` setzt, sodass das Bearbeitungsformular beim erneuten Rendern nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf `submit` Ereignis.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, ob der neue Labelwert nicht leer ist und nicht mit dem alten übereinstimmt, und wenn dies der Fall ist, das `item-edited` Ereignis ausgibt (das dann innerhalb `ToDoItem.vue` gehört wird, siehe oben).

"Abbrechen"-`<button>` hört auf `click` Ereignis.
**Ergebnis**: `onCancel()` Methode wird aufgerufen, die das `edit-cancelled` Ereignis ausgibt (das dann innerhalb `ToDoItem.vue` gehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel abgedeckt. Wir haben nun Bearbeitungs- und Löschfunktionalität in unserer App, was ziemlich aufregend ist. Wir nähern uns dem Ende unserer Vue-Serie. Das letzte Stück Funktionalität, das wir uns ansehen werden, ist das Fokus-Management, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
