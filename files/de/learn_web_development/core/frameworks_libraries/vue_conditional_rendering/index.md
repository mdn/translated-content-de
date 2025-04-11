---
title: "Vue bedingte Darstellung: Bearbeiten bestehender Todos"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, eine der wichtigsten Funktionalitäten hinzuzufügen, die uns noch fehlt — die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Dazu nutzen wir die bedingte Darstellung von Vue — nämlich `v-if` und `v-else` — um zwischen der vorhandenen Todo-Elementansicht und einer Bearbeitungsansicht umzuschalten, in der Sie Todo-Elementbeschriftungen aktualisieren können. Außerdem werden wir uns mit der Funktionalität zum Löschen von Todo-Elementen befassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/der Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten erstellt, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man eine bedingte Darstellung in Vue durchführt.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können beginnen, indem wir eine separate Komponente erstellen, die die Bearbeitungsfunktionalität übernimmt. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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
> Gehen Sie den obigen Code durch und lesen Sie die untenstehende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente tut, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles, was Sie bisher gelernt haben, zu festigen.

Dieser Code legt den Kern der Bearbeitungsfunktionalität fest. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unseres To-Dos.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button angeklickt wird, sendet die Komponente das neue Label über ein `item-edited`-Ereignis.
- Wenn der "Abbrechen"-Button angeklickt wird, signalisiert die Komponente dies durch Auslösen eines `edit-cancelled`-Ereignisses.

## Ändern unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir fügen auch einen `Delete`-Button hinzu, da die Löschung eng damit verbunden ist.

Aktualisieren Sie das Template Ihres `ToDoItem`, wie unten gezeigt.

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

Wir haben einen Wrapper-`<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button zeigt bei einem Klick das `ToDoItemEditForm`-Element an, sodass wir es verwenden können, um unser Todo-Element über eine Ereignishandlerfunktion namens `toggleToItemEditForm()` zu bearbeiten. Dieser Handler setzt ein `isEditing`-Flag auf true. Dazu definieren wir es zuerst innerhalb unserer `data()`-Eigenschaft.
- Der "Löschen"-Button löscht bei einem Klick das Todo-Element über eine Ereignishandlerfunktion namens `deleteToDo()`. In diesem Handler senden wir ein `item-deleted`-Ereignis an unsere übergeordnete Komponente, damit die Liste aktualisiert werden kann.

Definieren wir unsere Klick-Handler und das notwendige `isEditing`-Flag.

Fügen Sie `isEditing` unter Ihrem vorhandenen `isDone`-Datenpunkt hinzu:

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

## Bedingtes Anzeigen von Komponenten mit v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, das wir verwenden können, um anzuzeigen, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle des Kontrollkästchens anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert einen Block nur, wenn der ihr übergebene Wert wahr ist. Dies ist ähnlich wie eine `if`-Anweisung in JavaScript funktioniert. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else)-Direktiven, um das Äquivalent von JavaScript `else if` und `else`-Logik in Vue-Templates zu bieten.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if`-Blöcke das erste Geschwister eines `v-if`/`v-else-if`-Blocks sein müssen, sonst werden sie von Vue nicht erkannt. Sie können `v-if` auch an eine `<template>`-Tag anfügen, wenn Sie ein ganzes Template bedingt rendern müssen.

Schließlich können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block oder einen anderen anzuzeigen, da Vue immer nur einen dieser Blöcke auf einmal rendert. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code, der unser Todo-Element anzeigt, mit dem Bearbeitungsformular zu ersetzen.

Fügen Sie zunächst `v-if="!isEditing"` zur Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```vue
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie anschließend unterhalb dieses `<div>`-Abschlusstags die folgende Zeile hinzu:

```vue
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie in diesem Template verwenden können. Fügen Sie diese Zeile am Anfang Ihres `<script>`-Elements hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft oberhalb der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

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

![Die Todo-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons, und einem der Todos im Bearbeitungsmodus, mit einem Bearbeitungseingabefeld und Speichern- und Abbrechen-Buttons angezeigt](todo-edit-delete.png)

Es gibt jedoch derzeit keine Möglichkeit, zurückzugehen. Um das zu beheben, müssen wir einige weitere Ereignishandler zu unserer Komponente hinzufügen.

## Aus dem Bearbeitungsmodus herauskommen

Zuerst müssen wir eine `itemEdited()`-Methode zur `methods`-Eigenschaft unserer `ToDoItem`-Komponente hinzufügen. Diese Methode sollte das neue Item-Label als Argument nehmen, ein `itemEdited`-Ereignis an die übergeordnete Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie dies jetzt unter Ihren vorhandenen Methoden hinzu:

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

Als Nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode wird keine Argumente benötigen und dient nur dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen hinzu:

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

Zum Schluss in diesem Abschnitt fügen wir Ereignishandler für die von der `ToDoItemEditForm`-Komponente gesendeten Ereignisse hinzu und verknüpfen die entsprechenden Methoden mit jedem Ereignis.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf, damit er folgendermaßen aussieht:

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

Jetzt können wir zwischen Bearbeitungsformular und Kontrollkästchen umschalten. Wir haben jedoch noch nicht das `ToDoItems`-Array in `App.vue` aktualisiert. Um das zu beheben, müssen wir auf das `item-edited`-Ereignis hören und die Liste entsprechend aktualisieren. Wir möchten auch das Löschereignis behandeln, damit wir Todo-Elemente löschen können.

Fügen Sie die folgenden neuen Methoden zum Komponentenobjekt Ihrer `App.vue` hinzu, unter den bestehenden Methoden innerhalb der `methods`-Eigenschaft:

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

Als Nächstes fügen wir die Ereignislistener für die `item-deleted`- und `item-edited`-Ereignisse hinzu:

- Für `item-deleted` müssen Sie die `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die dazu verwendet wird, Ereignisdaten an Methoden zu übergeben. Bei der Verwendung von nativen HTML-Ereignissen (wie `click`) wird dadurch das native Ereignisobjekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>`-Aufruf im `App.vue`-Template, damit er so aussieht:

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

Und da haben Sie es — Sie sollten jetzt in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen!

## Beheben eines kleinen Fehlers mit dem isDone-Status

Das ist bisher großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie Folgendes:

1. Markieren (oder demarkieren) Sie eines der Todo-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Element.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abgebrochen haben — die App hat nicht nur den Zustand des Kontrollkästchens vergessen, sondern der Erledigt-Status dieses Todo-Elements ist jetzt durcheinander. Wenn Sie versuchen, es erneut zu markieren (oder zu demarkieren), ändert sich die Anzahl der erledigten Elemente in die entgegengesetzte Richtung zu dem, was Sie erwarten würden. Das liegt daran, dass `isDone` innerhalb von `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Das zu beheben ist zum Glück recht einfach — wir können das tun, indem wir unser `isDone`-Datenobjekt in eine [berechnete Eigenschaft](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties) umwandeln — ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) beibehalten, was unter anderem bedeutet, dass ihr Zustand erhalten bleibt, wenn sich das Template ändert, wie es jetzt der Fall ist.

Also, lassen Sie uns den Fix in `ToDoItem.vue` umsetzen:

1. Entfernen Sie die folgende Zeile aus unserem `data()`-Objekt:

   ```js
   export default {
     // …
     isDone: this.done,
     // …
   };
   ```

2. Fügen Sie den folgenden Block unter dem `data() {}`-Block hinzu:

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

Wenn Sie jetzt speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist — der Zustand des Kontrollkästchens bleibt jetzt erhalten, wenn Sie zwischen Todo-Element-Templates umschalten.

## Das Gewirr von Ereignissen verstehen

Einer der potenziell verwirrendsten Teile ist das Gewirr von Standard- und benutzerdefinierten Ereignissen, die wir verwendet haben, um die gesamte Interaktivität in unserer App auszulösen. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu erstellen, das darstellt, welche Ereignisse wo gesendet werden, wo sie empfangen werden und was als Ergebnis ihres Auslösens geschieht.

### App.vue

`<to-do-form>` hört auf:

- `todo-added`-Ereignis, das von der `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente ausgelöst wird, wenn das Formular abgeschickt wird.
  **Ergebnis**: `addToDo()`-Methode wird aufgerufen, um neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed`-Ereignis, das durch das Kontrollkästchen `<input>` in der `ToDoItem`-Komponente ausgelöst wird, wenn es markiert oder demarkiert wird.
  **Ergebnis**: `updateDoneStatus()`-Methode wird aufgerufen, um den Erledigt-Status des zugehörigen Todo-Elements zu aktualisieren.
- `item-deleted`-Ereignis, das durch die `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, um das zugehörige Todo-Element zu löschen.
- `item-edited`-Ereignis, das durch die `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn das `item-edited`-Ereignis, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm` ausgelöst wurde, erfolgreich empfangen wurde. Ja, das ist eine Kette von zwei verschiedenen `item-edited`-Ereignissen!
  **Ergebnis**: `editToDo()`-Methode wird aufgerufen, um das Label des zugehörigen Todo-Elements zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf das `submit`-Ereignis.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die überprüft, ob das neue Label nicht leer ist, dann das `todo-added`-Ereignis auslöst (das dann innerhalb `App.vue` empfangen wird, siehe oben), und schließlich das neue Label `<input>` leert.

### ToDoItem.vue

Das `<input>` vom Typ `checkbox` hört auf `change`-Ereignisse.
**Ergebnis**: `checkbox-changed`-Ereignis wird ausgelöst, wenn das Kontrollkästchen markiert/demarkiert wird (das dann innerhalb `App.vue` empfangen wird; siehe oben).

"Bearbeiten"-`<button>` hört auf das `click`-Ereignis.
**Ergebnis**: `toggleToItemEditForm()`-Methode wird aufgerufen, die `this.isEditing` auf `true` umschaltet, was wiederum das Bearbeitungsformular des Todo-Elements bei der erneuten Darstellung anzeigt.

"Löschen"-`<button>` hört auf das `click`-Ereignis.
**Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, die das `item-deleted`-Ereignis auslöst (das dann innerhalb `App.vue` empfangen wird; siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited`-Ereignis, das durch die `onSubmit()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn das Formular erfolgreich abgeschickt wird.
  **Ergebnis**: `itemEdited()`-Methode wird aufgerufen, die das `item-edited`-Ereignis auslöst (das dann innerhalb `App.vue` empfangen wird, siehe oben), und `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular bei der erneuten Darstellung nicht mehr angezeigt wird.
- `edit-cancelled`-Ereignis, das durch die `onCancel()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn der "Abbrechen"-Button angeklickt wird.
  **Ergebnis**: `editCancelled()`-Methode wird aufgerufen, die `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular bei der erneuten Darstellung nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf das `submit`-Ereignis.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die überprüft, ob der neue Labelwert nicht leer und nicht derselbe wie der alte ist, und wenn ja, das `item-edited`-Ereignis auslöst (das dann innerhalb `ToDoItem.vue` empfangen wird, siehe oben).

"Abbrechen"-`<button>` hört auf das `click`-Ereignis.
**Ergebnis**: `onCancel()`-Methode wird aufgerufen, die das `edit-cancelled`-Ereignis auslöst (das dann innerhalb `ToDoItem.vue` empfangen wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt Bearbeitungs- und Löschfunktionalitäten in unserer App, was ziemlich aufregend ist. Wir nähern uns dem Ende unserer Vue-Serie. Der letzte zu betrachtende Aspekt ist das Fokusmanagement, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
