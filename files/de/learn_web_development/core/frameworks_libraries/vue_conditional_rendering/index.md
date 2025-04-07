---
title: "Vue Bedingte Darstellung: Bearbeiten bestehender Todos"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, eine der Hauptfunktionen hinzuzufügen, die uns noch fehlt – die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Dazu nutzen wir Vues Fähigkeiten zur bedingten Darstellung, nämlich `v-if` und `v-else`, um zwischen der Ansicht des bestehenden Todo-Elements und einer Bearbeitungsansicht, in der Sie die Bezeichnungen der Todo-Elemente aktualisieren können, zu wechseln. Außerdem schauen wir uns an, wie man Funktionalitäten zum Löschen von Todo-Elementen hinzufügt.

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
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Bedingte Darstellung in Vue zu lernen.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können damit beginnen, eine separate Komponente zur Verwaltung der Bearbeitungsfunktionalität zu erstellen. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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
> Gehen Sie den obigen Code durch und lesen Sie die unten stehende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente macht, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles zu verstärken, was Sie bisher gelernt haben.

Dieser Code richtet den Kern der Bearbeitungsfunktion ein. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unseres To-dos.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button angeklickt wird, sendet die Komponente das neue Label über ein `item-edited`-Event.
- Wenn der "Abbrechen"-Button angeklickt wird, signalisiert die Komponente dies durch Emittieren eines `edit-cancelled`-Events.

## Modifizieren unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um nachzuverfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir fügen auch einen `Löschen`-Button hinzu, da das Löschen eng damit verbunden ist.

Aktualisieren Sie das Template Ihres `ToDoItem` wie unten gezeigt.

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

Wir haben ein umhüllendes `<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button, wenn angeklickt, wird die Anzeige der `ToDoItemEditForm`-Komponente umschalten, sodass wir diese verwenden können, um unser Todo-Element über eine Event-Handler-Funktion namens `toggleToItemEditForm()` zu bearbeiten. Dieser Handler wird ein `isEditing`-Flag auf true setzen. Dazu müssen wir es zuerst in unserem `data()`-Eigenschaft definieren.
- Der "Löschen"-Button, wenn angeklickt, wird das Todo-Element über eine Event-Handler-Funktion namens `deleteToDo()` löschen. In diesem Handler werden wir ein `item-deleted`-Event zu unserer übergeordneten Komponente senden, damit die Liste aktualisiert werden kann.

Lassen Sie uns unsere Click-Handler und das benötigte `isEditing`-Flag definieren.

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

Fügen Sie nun Ihre Methoden innerhalb einer methods-Eigenschaft direkt unter Ihrer `data()`-Eigenschaft hinzu:

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

## Bedingte Anzeige von Komponenten mittels v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, das wir verwenden können, um zu kennzeichnen, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unsere `ToDoItemEditForm` anstelle des Kontrollkästchens anzuzeigen. Dazu verwenden wir eine weitere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive wird nur einen Block rendern, wenn der Wert, der ihr übergeben wurde, wahrheitsgemäß ist. Dies ist ähnlich wie bei einer `if`-Anweisung in JavaScript. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um das Äquivalent von JavaScript `else if` und `else` Logik innerhalb von Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if` Blöcke das erste Geschwister eines `v-if`/`v-else-if` Blocks sein müssen, sonst wird Vue sie nicht erkennen. Sie können `v-if` auch an einem `<template>`-Tag anhängen, wenn Sie ein ganzes Template bedingt rendern müssen.

Schließlich können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen oder einen anderen Block anzuzeigen, da Vue nur einen dieser Blöcke gleichzeitig rendern wird. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code zu ersetzen, der unser Todo-Element mit dem Bearbeitungsformular anzeigt.

Fügen Sie zuerst `v-if="!isEditing"` zum Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu:

```vue
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie als nächstes unter dem schließenden Tag dieses `<div>` die folgende Zeile hinzu:

```vue
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie innerhalb dieses Templates verwenden können. Fügen Sie diese Zeile oben in Ihrem `<script>`-Element hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft über der `props`-Eigenschaft im Komponentenobjekt hinzu:

```js
export default {
  // …
  components: {
    ToDoItemEditForm,
  },
  // …
};
```

Wenn Sie nun Ihre App öffnen und den "Bearbeiten"-Button eines Todo-Elements anklicken, sollten Sie sehen, dass das Kontrollkästchen durch das Bearbeitungsformular ersetzt wird.

![Die Todo-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons und einem der Todos im Bearbeitungsmodus, mit einem Bearbeitungs-Eingabefeld und angezeigten Speichern- und Abbrechen-Buttons](todo-edit-delete.png)

Derzeit gibt es jedoch keine Möglichkeit, zurückzugehen. Um dies zu beheben, müssen wir unserer Komponente einige zusätzliche Event-Handler hinzufügen.

## Zurück aus dem Bearbeitungsmodus

Zuerst müssen wir eine `itemEdited()`-Methode zur `methods`-Eigenschaft unserer `ToDoItem`-Komponente hinzufügen. Diese Methode sollte das neue Item-Label als Argument nehmen, ein `itemEdited`-Event zur übergeordneten Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie sie jetzt unter Ihren vorhandenen Methoden hinzu:

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

Als nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode benötigt keine Argumente und dient lediglich dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen hinzu:

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

Zuletzt für diesen Abschnitt fügen wir Event-Handler für die Events hinzu, die von der `ToDoItemEditForm`-Komponente gesendet werden, und verknüpfen die entsprechenden Methoden mit jedem Event.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf, um so auszusehen:

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

Jetzt können wir zwischen dem Bearbeitungsformular und dem Kontrollkästchen umschalten. Allerdings haben wir das Aktualisieren des `ToDoItems`-Arrays in `App.vue` noch nicht behandelt. Um das zu beheben, müssen wir auf das `item-edited`-Event hören und die Liste entsprechend aktualisieren. Wir möchten auch das Löschen-Event behandeln, damit wir Todo-Elemente löschen können.

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

Als nächstes fügen wir die Event-Listener für die `item-deleted` und `item-edited` Events hinzu:

- Für `item-deleted` müssen Sie die `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Daten zu Methoden zu übergeben. Bei nativen HTML-Events (wie `click`) wird dadurch das native Event-Objekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>`-Aufruf innerhalb des `App.vue`-Templates, um wie folgt auszusehen:

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

Und da haben Sie es - Sie sollten nun in der Lage sein, Elemente in der Liste zu bearbeiten und zu löschen!

## Behebung eines kleinen Fehlers mit dem isDone-Status

Das ist soweit großartig, aber durch das Hinzufügen der Bearbeitungsfunktion haben wir tatsächlich einen Fehler eingeführt. Versuchen Sie Folgendes:

1. Überprüfen (oder deaktivieren) Sie eines der Todo-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Element.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abgebrochen haben – nicht nur hat die App den Zustand des Kontrollkästchens vergessen, sondern der Erledigt-Status dieses Todo-Elements ist jetzt aus dem Gleichgewicht geraten. Wenn Sie versuchen, es wieder zu überprüfen (oder zu deaktivieren), ändert sich die abgeschlossene Anzahl in die entgegengesetzte Richtung von dem, was Sie erwarten würden. Dies liegt daran, dass `isDone` innerhalb von `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Die Behebung dieses Problems ist glücklicherweise recht einfach – wir können dies tun, indem wir unser `isDone`-Datenelement in eine [berechnete Eigenschaft](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties) umwandeln – ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) erhalten, was unter anderem bedeutet, dass ihr Zustand erhalten bleibt, wenn sich das Template ändert, wie es bei uns jetzt der Fall ist.

Lassen Sie uns also die Lösung in `ToDoItem.vue` implementieren:

1. Entfernen Sie die folgende Zeile innerhalb unserer `data()`-Eigenschaft:

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

Wenn Sie jetzt speichern und neu laden, werden Sie feststellen, dass das Problem behoben ist – der Zustand des Kontrollkästchens bleibt erhalten, wenn Sie zwischen den Todo-Element-Templates umschalten.

## Verständnis des Durcheinanders von Events

Eines der verwirrendsten Teile könnte das Durcheinander von Standard- und benutzerdefinierten Events sein, die wir verwendet haben, um die gesamte Interaktivität in unserer App auszulösen. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm darüber zu schreiben, welche Events wo gesendet werden, wo sie abgehört werden und was passiert, wenn sie ausgelöst werden.

### App.vue

`<to-do-form>` hört auf:

- `todo-added`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente ausgelöst wird, wenn das Formular gesendet wird.
  **Ergebnis**: `addToDo()`-Methode wird aufgerufen, um ein neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed`-Event, das vom Kontrollkästchen-`<input>` innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn es aktiviert oder deaktiviert wird.
  **Ergebnis**: `updateDoneStatus()`-Methode wird aufgerufen, um den Erledigt-Status des zugehörigen Todo-Elements zu aktualisieren.
- `item-deleted`-Event, das von der `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, um das zugehörige Todo-Element zu löschen.
- `item-edited`-Event, das von der `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn das `item-edited`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm` erfolgreich behandelt wurde. Ja, dies ist eine Kette von zwei verschiedenen `item-edited`-Events!
  **Ergebnis**: `editToDo()`-Methode wird aufgerufen, um das Label des zugehörigen Todo-Elements zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf das `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die überprüft, dass das neue Label nicht leer ist, dann das `todo-added`-Event sendet (das dann innerhalb `App.vue` abgehört wird, siehe oben) und schließlich das neue Label-`<input>` löscht.

### ToDoItem.vue

Das `<input>` vom `type="checkbox"` hört auf `change`-Events.
**Ergebnis**: `checkbox-changed`-Event wird ausgelöst, wenn das Kontrollkästchen aktiviert/deaktiviert wird (was dann in `App.vue` abgehört wird; siehe oben).

"Bearbeiten"-`<button>` hört auf `click`-Event.
**Ergebnis**: `toggleToItemEditForm()`-Methode wird aufgerufen, die `this.isEditing` auf `true` schaltet, was dazu führt, dass das Bearbeitungsformular des Todo-Elements beim Neurendering angezeigt wird.

"Löschen"-`<button>` hört auf `click`-Event.
**Ergebnis**: `deleteToDo()`-Methode wird aufgerufen, die das `item-deleted`-Event sendet (was dann in `App.vue` abgehört wird; siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited`-Event, das von der `onSubmit()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn das Formular erfolgreich gesendet wurde.
  **Ergebnis**: `itemEdited()`-Methode wird aufgerufen, die das `item-edited`-Event sendet (was dann in `App.vue` abgehört wird, siehe oben) und `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular beim Neurendering nicht mehr angezeigt wird.
- `edit-cancelled`-Event, das von der `onCancel()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn der "Abbrechen"-Button geklickt wird.
  **Ergebnis**: `editCancelled()`-Methode wird aufgerufen, die `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular beim Neurendering nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf das `submit`-Event.
**Ergebnis**: `onSubmit()`-Methode wird aufgerufen, die überprüft, ob der neue Label-Wert nicht leer ist und nicht dem alten entspricht, und wenn ja, das `item-edited`-Event sendet (was dann innerhalb `ToDoItem.vue` abgehört wird, siehe oben).

"Abbrechen"-`<button>` hört auf `click`-Event.
**Ergebnis**: `onCancel()`-Methode wird aufgerufen, die das `edit-cancelled`-Event sendet (was dann innerhalb `ToDoItem.vue` abgehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt Bearbeitungs- und Löschfunktionen in unserer App, was ziemlich spannend ist. Wir nähern uns nun dem Ende unserer Vue-Serie. Der letzte Teil der Funktionalität, den wir uns ansehen, ist das Fokussierungsmanagement, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
