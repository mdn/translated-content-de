---
title: "Vue Conditional Rendering: Bearbeiten bestehender Todos"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, eine der Hauptfunktionen hinzuzufügen, die uns noch fehlt: die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Dazu werden wir die Fähigkeiten zur bedingten Darstellung von Vue nutzen — nämlich `v-if` und `v-else` — um zwischen der aktuellen Ansicht des Todo-Elements und einer Bearbeitungsansicht zu wechseln, in der Sie die Bezeichnung der Todo-Elemente aktualisieren können. Wir werden auch die Funktionalität zum Löschen von Todo-Elementen hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Wissen über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Template-Syntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und Verwendung von einigen der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man bedingte Darstellungen in Vue verwendet.</td>
    </tr>
  </tbody>
</table>

## Erstellung einer Bearbeitungskomponente

Wir können damit beginnen, eine separate Komponente zu erstellen, um die Bearbeitungsfunktionalität zu handhaben. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

```vue
<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Edit Name for &quot;\{{ label }}&quot;</label>
      <input
        :id="id"
        type="text"
        autocomplete="off"
        v-model.lazy.trim="newLabel" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing \{{ label }}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for \{{ label }}</span>
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
  font-family: "Arial", sans-serif;
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
> Gehen Sie den obigen Code durch und lesen Sie dann die untenstehende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente tut, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles, was Sie bisher gelernt haben, zu festigen.

Dieser Code legt den Kern der Bearbeitungsfunktionalität fest. Wir erstellen ein Formular mit einem `<input>`-Feld zur Bearbeitung des Namens unseres Todos.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button geklickt wird, sendet die Komponente das neue Label über ein `item-edited`-Event.
- Wenn der "Abbrechen"-Button geklickt wird, signalisiert die Komponente dies durch das Emitten eines `edit-cancelled`-Events.

## Modifizierung unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir fügen auch einen `Löschen`-Button hinzu, da Löschungen eng damit verbunden sind.

Aktualisieren Sie das Template Ihrer `ToDoItem`-Komponente wie unten gezeigt.

```vue
<template>
  <div class="stack-small">
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')" />
      <label :for="id" class="checkbox-label">\{{ label }}</label>
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="toggleToItemEditForm">
        Edit <span class="visually-hidden">\{{ label }}</span>
      </button>
      <button type="button" class="btn btn__danger" @click="deleteToDo">
        Delete <span class="visually-hidden">\{{ label }}</span>
      </button>
    </div>
  </div>
</template>
```

Wir haben ein übergeordnetes `<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button wird bei einem Klick das `ToDoItemEditForm`-Template anzeigen, damit wir unser Todo-Element bearbeiten können, über eine Event-Handler-Funktion namens `toggleToItemEditForm()`. Dieser Handler wird ein `isEditing`-Flag auf `true` setzen. Dazu müssen wir es zuerst innerhalb unserer `data()`-Eigenschaft definieren.
- Der "Löschen"-Button wird bei einem Klick das Todo-Element über eine Event-Handler-Funktion namens `deleteToDo()` löschen. In diesem Handler werden wir ein `item-deleted`-Event zu unserer übergeordneten Komponente emittieren, damit die Liste aktualisiert werden kann.

Lassen Sie uns unsere Klickhandler und das notwendige `isEditing`-Flag definieren.

Fügen Sie `isEditing` unter Ihrem bestehenden `isDone`-Datenpunkt hinzu:

```js
export default {
  // …
  data() {
    return {
      isDone: this.done,
      isEditing: false,
    };
  },
  // …
};
```

Fügen Sie nun Ihre Methoden innerhalb einer Methoden-Eigenschaft direkt unter Ihrer `data()`-Eigenschaft hinzu:

```js
export default {
  // …
  methods: {
    deleteToDo() {
      this.$emit("item-deleted");
    },
    toggleToItemEditForm() {
      this.isEditing = true;
    },
  },
  // …
};
```

## Bedingte Darstellung von Komponenten mit v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, das wir nutzen können, um anzuzeigen, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle des Kontrollkästchens anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive wird einen Block nur rendern, wenn der Wert, der ihr übergeben wird, wahr ist. Dies ist ähnlich wie eine `if`-Anweisung in JavaScript. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um das Äquivalent von JavaScript `else if` und `else` Logik innerhalb von Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if` Blöcke das erste Geschwister eines `v-if`/`v-else-if` Blocks sein müssen, andernfalls wird Vue sie nicht erkennen. Sie können `v-if` auch an ein `<template>`-Tag anhängen, wenn Sie ein ganzes Template bedingt rendern müssen.

Zuletzt können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block oder einen anderen anzuzeigen, da Vue immer nur einen dieser Blöcke gleichzeitig rendern wird. Wir werden dies in unserer App tun, da es uns erlauben wird, den Code zu ersetzen, der unser Todo-Element anzeigt, mit dem Bearbeitungsformular.

Fügen Sie zunächst `v-if="!isEditing"` dem Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```vue
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie als nächstes unterhalb des schließenden Tags dieses `<div>` die folgende Zeile hinzu:

```vue
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie in diesem Template verwenden können. Fügen Sie diese Zeile oben in Ihrem `<script>`-Element hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft über der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

```js
export default {
  // …
  components: {
    ToDoItemEditForm,
  },
  // …
};
```

Wenn Sie jetzt zu Ihrer App gehen und auf den "Bearbeiten"-Button eines Todo-Elements klicken, sollten Sie sehen, dass das Kontrollkästchen durch das Bearbeitungsformular ersetzt wird.

![Die Todo-Listen-App mit angezeigten Bearbeiten- und Löschen-Buttons und eines der Todos im Bearbeitungsmodus mit einem Bearbeitungseingabefeld und Speichern- und Abbrechen-Buttons angezeigt](todo-edit-delete.png)

Allerdings gibt es momentan keinen Weg zurück. Um das zu beheben, müssen wir noch einige Event-Handler zu unserer Komponente hinzufügen.

## Aus dem Bearbeitungsmodus herauskommen

Zuerst müssen wir eine `itemEdited()`-Methode zur `methods`-Eigenschaft unserer `ToDoItem`-Komponente hinzufügen. Diese Methode sollte das neue Element-Label als Argument nehmen, ein `itemEdited`-Event an die übergeordnete Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie es jetzt, unter Ihre bestehenden Methoden hinzu:

```js
export default {
  // …
  methods: {
    // …
    itemEdited(newLabel) {
      this.$emit("item-edited", newLabel);
      this.isEditing = false;
    },
    // …
  },
  // …
};
```

Als Nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode benötigt keine Argumente und dient nur dazu, `isEditing` zurück auf `false` zu setzen. Fügen Sie diese Methode unterhalb der vorherigen hinzu:

```js
export default {
  // …
  methods: {
    // …
    editCancelled() {
      this.isEditing = false;
    },
    // …
  },
  // …
};
```

Zuletzt in diesem Abschnitt werden wir Event-Handler für die Ereignisse hinzufügen, die von der `ToDoItemEditForm`-Komponente emittiert werden, und die entsprechenden Methoden an jedes Event anhängen.

Aktualisieren Sie Ihre `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf, damit es so aussieht:

```vue
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## Aktualisieren und Löschen von Todo-Elementen

Jetzt können wir zwischen dem Bearbeitungsformular und dem Kontrollkästchen umschalten. Allerdings haben wir noch nicht das Aktualisieren des `ToDoItems`-Arrays in `App.vue` behandelt. Um das zu beheben, müssen wir auf das `item-edited`-Event hören und die Liste entsprechend aktualisieren. Wir wollen auch das Delete-Event behandeln, damit wir Todo-Elemente löschen können.

Fügen Sie die folgenden neuen Methoden zu Ihrem `App.vue`-Komponentenobjekt hinzu, unter den bestehenden Methoden innerhalb der `methods`-Eigenschaft:

```js
export default {
  // …
  methods: {
    // …
    deleteToDo(toDoId) {
      const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
    },
    editToDo(toDoId, newLabel) {
      const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
      toDoToEdit.label = newLabel;
    },
    // …
  },
  // …
};
```

Als nächstes werden wir die Event-Listener für die `item-deleted`- und `item-edited`-Events hinzufügen:

- Für `item-deleted` müssen Sie die `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Event-Daten an Methoden zu übergeben. Bei der Verwendung von nativen HTML-Events (wie `click`) wird das native Event-Objekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>`-Aufruf innerhalb des `App.vue`-Templates, damit es so aussieht:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)"
  @item-deleted="deleteToDo(item.id)"
  @item-edited="editToDo(item.id, $event)">
</to-do-item>
```

Und da haben Sie es — Sie sollten jetzt in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen!

## Behebung eines kleinen Fehlers mit dem isDone-Status

Das ist bisher großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie dies zu tun:

1. Aktivieren (oder deaktivieren) Sie eines der Todo-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Element.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abgebrochen haben — nicht nur hat die App den Zustand des Kontrollkästchens vergessen, sondern der erledigte Status dieses Todo-Elements ist jetzt durcheinander. Wenn Sie versuchen, es erneut zu aktivieren (oder zu deaktivieren), ändert sich die Anzahl der erledigten Aufgaben auf eine Weise, die Sie nicht erwarten. Dies liegt daran, dass `isDone` innerhalb von `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Die Behebung dieses Problems ist glücklicherweise ziemlich einfach — wir können dies tun, indem wir unser `isDone`-Datenitem in eine [computierte Eigenschaft](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties) umwandeln — ein weiterer Vorteil von computierten Eigenschaften ist, dass sie die [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was bedeutet (unter anderem), dass ihr Zustand gespeichert wird, wenn das Template sich ändert, wie es jetzt der Fall ist.

Lassen Sie uns also die Lösung in `ToDoItem.vue` implementieren:

1. Entfernen Sie die folgende Zeile aus der `data()`-Eigenschaft:

   ```js
   export default {
     // …
     isDone: this.done,
     // …
   };
   ```

2. Fügen Sie den folgenden Block unterhalb des `data() {}`-Blocks hinzu:

   ```js
   export default {
     // …
     computed: {
       isDone() {
         return this.done;
       },
     },
     // …
   };
   ```

Jetzt, wenn Sie speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist — der Zustand des Kontrollkästchens wird jetzt beibehalten, wenn Sie zwischen Todo-Item-Templates wechseln.

## Verstehen des Dschungels von Events

Einer der potenziell verwirrendsten Teile ist der Dschungel aus standard und benutzerdefinierten Events, die wir verwendet haben, um die gesamte Interaktivität in unserer App zu steuern. Um das besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu schreiben, was wo gesendet wird, wo es empfangen wird und was passiert, nachdem die Events ausgelöst wurden.

### App.vue

`<to-do-form>` lauscht auf:

- `todo-added`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente emittiert wird, wenn das Formular abgesendet wird.
  **Ergebnis**: `addToDo()`-Methode wird aufgerufen, um neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` lauscht auf:

- `checkbox-changed`-Event, das von dem Checkbox-`<input>` innerhalb der `ToDoItem`-Komponente emittiert wird, wenn es aktiviert oder deaktiviert wird.
  **Ergebnis**: `updateDoneStatus()`-Methode wird aufgerufen, um den Status des zugehörigen Todo-Elements zu aktualisieren.
- `item-deleted`-Event, das von der `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente emittiert wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, um das zugehörige Todo-Element zu löschen.
- `item-edited`-Event, das von der `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente emittiert wird, wenn das `item-edited`-Event von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm` erfolgreich empfangen wurde. Ja, das ist eine Kette von zwei verschiedenen `item-edited`-Events!
  **Ergebnis**: `editToDo()`-Methode wird aufgerufen, um das Label des zugehörigen Todo-Elements zu aktualisieren.

### ToDoForm.vue

`<form>` lauscht auf `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die prüft, ob das neue Label nicht leer ist, dann das `todo-added`-Event emittiert (das dann innerhalb von `App.vue` empfangen wird, siehe oben) und schließlich das neue Label-`<input>` leert.

### ToDoItem.vue

Das `<input>` vom Typ "`checkbox`" lauscht auf `change`-Events.
**Ergebnis**: `checkbox-changed`-Event wird emittiert, wenn das Kontrollkästchen aktiviert/deaktiviert wird (das dann innerhalb von `App.vue` empfangen wird, siehe oben).

Der "`Bearbeiten`"-Button lauscht auf `click`-Event.
**Ergebnis**: `toggleToItemEditForm()`-Methode wird aufgerufen, die `this.isEditing` auf `true` setzt, wodurch das Bearbeitungsformular des Todo-Elements beim Neuladen angezeigt wird.

Der "`Löschen`"-Button lauscht auf `click`-Event.
**Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, die das `item-deleted`-Event emittiert (das dann innerhalb von `App.vue` empfangen wird, siehe oben).

`<to-do-item-edit-form>` lauscht auf:

- `item-edited`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm`-Komponente emittiert wird, wenn das Formular erfolgreich abgesendet wird.
  **Ergebnis**: `itemEdited()`-Methode wird aufgerufen, die das `item-edited`-Event emittiert (das dann innerhalb von `App.vue` empfangen wird, siehe oben) und `this.isEditing` auf `false` setzt, sodass das Bearbeitungsformular beim Neuladen nicht mehr angezeigt wird.
- `edit-cancelled`-Event, das von der `onCancel()`-Methode innerhalb der `ToDoItemEditForm`-Komponente emittiert wird, wenn der "`Abbrechen`"-Button geklickt wird.
  **Ergebnis**: `editCancelled()`-Methode wird aufgerufen, die `this.isEditing` auf `false` setzt, sodass das Bearbeitungsformular beim Neuladen nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` lauscht auf `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die prüft, ob der neue Label-Wert nicht leer und nicht dasselbe wie das alte ist und, wenn ja, das `item-edited`-Event emittiert (das dann innerhalb von `ToDoItem.vue` empfangen wird, siehe oben).

Der "`Abbrechen`"-Button lauscht auf `click`-Event.
**Ergebnis**: `onCancel()`-Methode wird aufgerufen, die das `edit-cancelled`-Event emittiert (das dann innerhalb von `ToDoItem.vue` empfangen wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv und wir haben hier viel behandelt. Wir haben jetzt Bearbeitungs- und Löschfunktionen in unserer App, was ziemlich spannend ist. Wir nähern uns dem Ende unserer Vue-Serie. Das letzte Stück Funktionalität, das wir betrachten werden, ist das Fokus-Management, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
