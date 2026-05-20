---
title: "Vue conditional rendering: Bearbeitung bestehender Todos"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Sehen Sie sich [diese Diskussion](https://github.com/orgs/mdn/discussions/827) für weitere Informationen an.

Es ist an der Zeit, eine der Hauptfunktionen hinzuzufügen, die uns noch fehlen – die Möglichkeit, bestehende Todo-Items zu bearbeiten. Dazu nutzen wir die bedingte Rendering-Funktionalität von Vue – nämlich `v-if` und `v-else` – um zwischen der bestehenden Todo-Ansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Labels der Todo-Items aktualisieren können. Wir werden auch die Funktionalität zum Löschen von Todo-Items hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnis des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Kennenlernen des bedingten Renderings in Vue.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können beginnen, indem wir eine separate Komponente erstellen, um die Bearbeitungsfunktionalität zu handhaben. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei namens `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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
> Gehen Sie den obigen Code durch und lesen Sie die nachfolgende Beschreibung, um sicherzustellen, dass Sie alles, was die Komponente tut, verstehen, bevor Sie weitermachen. Dies ist eine nützliche Methode, um alles zu festigen, was Sie bisher gelernt haben.

Dieser Code legt den Kern der Bearbeitungsfunktionalität fest. Wir erstellen ein Formular mit einem `<input>`-Feld, um den Namen unseres To-Dos zu bearbeiten.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button geklickt wird, sendet die Komponente das neue Label über ein `item-edited`-Event.
- Wenn der "Abbrechen"-Button geklickt wird, signalisiert die Komponente dies, indem sie ein `edit-cancelled`-Event sendet.

## Modifikation unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Item bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir werden auch einen `Delete`-Button hinzufügen, da das Löschen eng damit verbunden ist.

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

Wir haben einen umschließenden `<div>` um das gesamte Template für Layoutzwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button, wenn er geklickt wird, wird das Anzeigen der `ToDoItemEditForm`-Komponente umschalten, damit wir sie verwenden können, um unser Todo-Item zu bearbeiten, über eine Event-Handler-Funktion namens `toggleToItemEditForm()`. Dieser Handler setzt ein `isEditing`-Flag auf true. Dazu müssen wir es zuerst innerhalb unserer `data()`-Eigenschaft definieren.
- Der "Löschen"-Button, wenn er geklickt wird, löscht das Todo-Item über eine Event-Handler-Funktion namens `deleteToDo()`. In diesem Handler senden wir ein `item-deleted`-Event an unsere übergeordnete Komponente, damit die Liste aktualisiert werden kann.

Lassen Sie uns unsere Klick-Handler und das notwendige `isEditing`-Flag definieren.

Fügen Sie `isEditing` unterhalb Ihres vorhandenen `isDone`-Datenpunkts hinzu:

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

## Bedingte Anzeige von Komponenten über v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, das angibt, dass das Item bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unsere `ToDoItemEditForm` anstelle des Kontrollkästchens anzuzeigen. Dazu verwenden wir eine andere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert einen Block nur, wenn der übergebene Wert wahrheitsgemäß ist. Dies ist ähnlich wie eine `if`-Anweisung in JavaScript funktioniert. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um das Äquivalent von JavaScript `else if` und `else` Logik innerhalb von Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else` und `v-else-if` Blöcke das erste Geschwister eines `v-if`/`v-else-if` Blocks sein müssen, da Vue sie sonst nicht erkennt. Sie können `v-if` auch an ein `<template>`-Tag anhängen, wenn Sie ein gesamtes Template bedingt rendern müssen.

Zuletzt können Sie ein `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um nur einen Block oder einen anderen anzuzeigen, da Vue nur einen dieser Blöcke gleichzeitig rendern wird. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code zu ersetzen, der unser Todo-Item mit dem Bearbeitungsformular anzeigt.

Fügen Sie zuerst `v-if="!isEditing"` zum Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```vue
<div class="stack-small" v-if="!isEditing"></div>
```

Fügen Sie dann unter dem schließenden Tag dieses `<div>` die folgende Zeile hinzu:

```vue
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie innerhalb dieses Templates verwenden können. Fügen Sie diese Zeile am Anfang Ihres `<script>`-Elements hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft über der `props`-Eigenschaft innerhalb des Komponenten-Objekts hinzu:

```js
export default {
  // …
  components: {
    ToDoItemEditForm,
  },
  // …
};
```

Jetzt, wenn Sie zu Ihrer App gehen und den "Bearbeiten"-Button eines Todo-Items klicken, sollten Sie sehen, dass das Kontrollkästchen durch das Bearbeitungsformular ersetzt wird.

![Die Todo-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons, und eines der Todos im Bearbeitungsmodus, mit einem Bearbeitungsinput und Speichern- und Abbrechen-Buttons angezeigt](todo-edit-delete.png)

Es gibt jedoch derzeit keine Möglichkeit, zurückzugehen. Um dies zu beheben, müssen wir unserem Komponenten einige weitere Event-Handler hinzufügen.

## Aus dem Bearbeitungsmodus herauskommen

Zuerst müssen wir eine `itemEdited()`-Methode zur `methods`-Eigenschaft unserer `ToDoItem`-Komponente hinzufügen. Diese Methode sollte das neue Item-Label als Argument nehmen, ein `itemEdited`-Event an die übergeordnete Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie es jetzt unter Ihren bestehenden Methoden hinzu:

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

Als nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode nimmt keine Argumente an und dient nur dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unterhalb der vorherigen hinzu:

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

Zuletzt in diesem Abschnitt fügen wir Event-Handler für die von der `ToDoItemEditForm`-Komponente gesendeten Events hinzu und verbinden die entsprechenden Methoden mit jedem Event.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>` Aufruf, um folgendermaßen auszusehen:

```vue
<to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>
```

## Aktualisieren und Löschen von Todo-Items

Jetzt können wir zwischen dem Bearbeitungsformular und dem Kontrollkästchen umschalten. Wir haben jedoch noch nicht das Aktualisieren des `ToDoItems`-Arrays in `App.vue` gehandhabt. Um dies zu beheben, müssen wir auf das `item-edited`-Event hören und die Liste entsprechend aktualisieren. Wir möchten auch das Lösch-Event handhaben, damit wir Todo-Items löschen können.

Fügen Sie die folgenden neuen Methoden zum Komponentenobjekt Ihrer `App.vue` hinzu, unterhalb der vorhandenen Methoden innerhalb der `methods`-Eigenschaft:

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

- Für `item-deleted` müssen Sie die `item.id` zur Methode übergeben.
- Für `item-edited` müssen Sie die `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Event-Daten an Methoden zu übergeben. Bei der Verwendung nativer HTML-Events (wie `click`) wird das native Event-Objekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>` Aufruf im `App.vue` Template, um so auszusehen:

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

Und da haben Sie es – Sie sollten jetzt in der Lage sein, Elemente aus der Liste zu bearbeiten und zu löschen!

## Beheben eines kleinen Fehlers mit isDone-Status

Das ist bisher großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie Folgendes:

1. Markieren (oder demarkieren) Sie eines der Todo-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Item.
3. Brechen Sie die Bearbeitung durch Drücken des "Abbrechen"-Buttons ab.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abbrechen – nicht nur hat die App den Zustand des Kontrollkästchens vergessen, sondern der abgeschlossen-Status dieses Todo-Items ist jetzt durcheinander. Wenn Sie versuchen, es erneut zu markieren (oder zu demarkieren), ändert sich die Anzahl der abgeschlossenen entgegen Ihren Erwartungen. Dies liegt daran, dass das `isDone` innerhalb von `data` nur beim Laden der Komponente den Wert `this.done` erhält.

Glücklicherweise ist die Behebung dieses Problems ziemlich einfach – wir können dies tun, indem wir unser `isDone`-Datenitem in eine [computed property](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties) umwandeln – ein weiterer Vorteil solcher Berechnungen ist, dass sie [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was bedeutet (unter anderem), dass ihr Zustand gespeichert wird, wenn sich das Template ändert, wie es jetzt bei uns der Fall ist.

Also lassen Sie uns die Korrektur in `ToDoItem.vue` implementieren:

1. Entfernen Sie die folgende Zeile aus unserer `data()`-Eigenschaft:

   ```js
   export default {
     // …
     isDone: this.done,
     // …
   };
   ```

2. Fügen Sie den folgenden Block unterhalb des `data() {}` Blocks hinzu:

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

Wenn Sie jetzt speichern und neu laden, werden Sie feststellen, dass das Problem behoben ist – der Kontrollkästchen-Zustand wird jetzt beibehalten, wenn Sie zwischen den Todo-Item-Templates wechseln.

## Verständnis des Gewirrs von Events

Einer der potenziell verwirrendsten Teile ist das Gewirr von Standard- und benutzerdefinierten Events, die wir verwendet haben, um alle Interaktivitäten in unserer App auszulösen. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu schreiben, das zeigt, welche Events wo ausgegeben werden, wo sie gehört werden und was als Ergebnis ihres Auslösens passiert.

### App.vue

`<to-do-form>` hört auf:

- `todo-added` Event, das von der `onSubmit()` Methode innerhalb der `ToDoForm` Komponente ausgegeben wird, wenn das Formular abgeschickt wird.
  **Ergebnis**: `addToDo()` Methode wird aufgerufen, um das neue Todo-Item zum `ToDoItems` Array hinzuzufügen.

`<to-do-item>` hört auf:

- `checkbox-changed` Event, das von der Checkbox `<input>` innerhalb der `ToDoItem` Komponente ausgegeben wird, wenn sie markiert oder demarkiert wird.
  **Ergebnis**: `updateDoneStatus()` Methode wird aufgerufen, um den erledigt-Status des zugehörigen Todo-Items zu aktualisieren.
- `item-deleted` Event, das von der `deleteToDo()` Methode innerhalb der `ToDoItem` Komponente ausgegeben wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()` Methode wird aufgerufen, um das zugehörige Todo-Item zu löschen.
- `item-edited` Event, das von der `itemEdited()` Methode innerhalb der `ToDoItem` Komponente ausgelöst wird, wenn das `item-edited` Event, das von der `onSubmit()` Methode innerhalb der `ToDoItemEditForm` Komponente erfolgreich gehört wurde. Ja, das ist eine Kette von zwei verschiedenen `item-edited` Events!
  **Ergebnis**: `editToDo()` Methode wird aufgerufen, um das Label des zugehörigen Todo-Items zu aktualisieren.

### ToDoForm.vue

`<form>` hört auf `submit` Event.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, dass das neue Label nicht leer ist, dann das `todo-added` Event auslöst (das dann in `App.vue` gehört wird, siehe oben) und schließlich das neue Label `<input>` leert.

### ToDoItem.vue

Das `<input>` vom `type="checkbox"` hört auf `change` Events.
**Ergebnis**: `checkbox-changed` Event wird ausgelöst, wenn das Kontrollkästchen markiert/demarkiert wird (das dann in `App.vue` gehört wird; siehe oben).

"Bearbeiten” `<button>` hört auf `click` Event.
**Ergebnis**: `toggleToItemEditForm()` Methode wird aufgerufen, die `this.isEditing` auf `true` umschaltet, was wiederum das Bearbeitungsformular des Todo-Items bei der Neudarstellung anzeigt.

"Löschen” `<button>` hört auf `click` Event.
**Ergebnis**: `deleteToDo()` Methode wird aufgerufen, die das `item-deleted` Event auslöst (das dann in `App.vue` gehört wird; siehe oben).

`<to-do-item-edit-form>` hört auf:

- `item-edited` Event, das von der `onSubmit()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgelöst wird, wenn das Formular erfolgreich abgeschickt wird.
  **Ergebnis**: `itemEdited()` Methode wird aufgerufen, die das `item-edited` Event auslöst (das dann in `App.vue` gehört wird, siehe oben), und setzt `this.isEditing` auf `false`, sodass das Bearbeitungsformular bei der Neudarstellung nicht mehr gezeigt wird.
- `edit-cancelled` Event, das von der `onCancel()` Methode innerhalb der `ToDoItemEditForm` Komponente ausgelöst wird, wenn der "Abbrechen"-Button geklickt wird.
  **Ergebnis**: `editCancelled()` Methode wird aufgerufen, die `this.isEditing` auf `false` setzt, sodass das Bearbeitungsformular bei der Neudarstellung nicht mehr gezeigt wird.

### ToDoItemEditForm.vue

`<form>` hört auf `submit` Event.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die prüft, ob der neue Labelwert nicht leer ist und nicht derselbe wie der alte, und wenn ja, das `item-edited` Event auslöst (das dann in `ToDoItem.vue` gehört wird, siehe oben).

"Abbrechen” `<button>` hört auf `click` Event.
**Ergebnis**: `onCancel()` Methode wird aufgerufen, die das `edit-cancelled` Event auslöst (das dann in `ToDoItem.vue` gehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt Bearbeitungs- und Löschfunktionalität in unserer App, was ziemlich aufregend ist. Wir nähern uns dem Ende unserer Vue-Serie. Der letzte Teil der Funktionalität, den wir uns ansehen werden, ist das Fokusmanagement oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
