---
title: "Vue: Bedingte Darstellung - Bearbeiten bestehender Todos"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, eine der Hauptfunktionen hinzuzufügen, die uns noch fehlen — die Möglichkeit, bestehende Todo-Elemente zu bearbeiten. Dazu nutzen wir Vues Fähigkeiten zur bedingten Darstellung — nämlich `v-if` und `v-else` — um zwischen der bestehenden Todo-Element-Ansicht und einer Bearbeitungsansicht zu wechseln, in der Sie die Bezeichnungen der Todo-Elemente aktualisieren können. Wir schauen uns auch an, wie wir die Funktionalität zum Löschen von Todo-Elementen hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Konsole/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur entspricht, erstellt. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie eine Konsole mit installiertem node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man bedingte Darstellungen in Vue durchführt.</td>
    </tr>
  </tbody>
</table>

## Erstellen einer Bearbeitungskomponente

Wir können beginnen, indem wir eine separate Komponente erstellen, die die Bearbeitungsfunktionalität übernimmt. Erstellen Sie in Ihrem `components`-Verzeichnis eine neue Datei mit dem Namen `ToDoItemEditForm.vue`. Kopieren Sie den folgenden Code in diese Datei:

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
> Gehen Sie den obigen Code durch und lesen Sie dann die untenstehende Beschreibung, um sicherzustellen, dass Sie alles verstehen, was die Komponente macht, bevor Sie fortfahren. Dies ist eine nützliche Methode, um alles zu festigen, was Sie bisher gelernt haben.

Dieser Code stellt den Kern der Bearbeitungsfunktionalität bereit. Wir erstellen ein Formular mit einem `<input>`-Feld zum Bearbeiten des Namens unserer Aufgaben.

Es gibt einen "Speichern"-Button und einen "Abbrechen"-Button:

- Wenn der "Speichern"-Button angeklickt wird, sendet die Komponente das neue Label durch ein `item-edited`-Event.
- Wenn der "Abbrechen"-Button angeklickt wird, signalisiert die Komponente dies durch ein `edit-cancelled`-Event.

## Modifizierung unserer ToDoItem-Komponente

Bevor wir `ToDoItemEditForm` zu unserer App hinzufügen können, müssen wir einige Änderungen an unserer `ToDoItem`-Komponente vornehmen. Insbesondere müssen wir eine Variable hinzufügen, um zu verfolgen, ob das Element bearbeitet wird, und einen Button, um diese Variable umzuschalten. Wir fügen auch einen `Löschen`-Button hinzu, da die Löschung eng damit verbunden ist.

Aktualisieren Sie das Template Ihrer `ToDoItem`-Komponente wie unten gezeigt.

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

Wir haben ein umschließendes `<div>` um das gesamte Template für Layout-Zwecke hinzugefügt.

Wir haben auch "Bearbeiten"- und "Löschen"-Buttons hinzugefügt:

- Der "Bearbeiten"-Button toggelt bei Klick die Anzeige der `ToDoItemEditForm`-Komponente, sodass wir diese zur Bearbeitung unseres Todo-Elements verwenden können, über eine Event-Handler-Funktion namens `toggleToItemEditForm()`. Dieser Handler setzt ein `isEditing`-Flag auf true. Dazu müssen wir es zuerst in unserer `data()`-Eigenschaft definieren.
- Der "Löschen"-Button löscht beim Klicken das Todo-Element über eine Event-Handler-Funktion namens `deleteToDo()`. In diesem Handler senden wir ein `item-deleted`-Event an unsere übergeordnete Komponente, damit die Liste aktualisiert werden kann.

Lassen Sie uns unsere Klick-Handler und das notwendige `isEditing`-Flag definieren.

Fügen Sie `isEditing` unter Ihrem vorhandenen `isDone`-Datenpunkt hinzu:

```js
data() {
  return {
    isDone: this.done,
    isEditing: false
  };
}
```

Jetzt fügen Sie Ihre Methoden innerhalb einer Methoden-Eigenschaft, direkt unterhalb Ihrer `data()`-Eigenschaft hinzu:

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

## Bedingte Anzeige von Komponenten über v-if und v-else

Jetzt haben wir ein `isEditing`-Flag, das wir verwenden können, um anzuzeigen, dass das Element bearbeitet wird (oder nicht). Wenn `isEditing` wahr ist, möchten wir dieses Flag verwenden, um unser `ToDoItemEditForm` anstelle der Checkbox anzuzeigen. Dazu verwenden wir eine andere Vue-Direktive: [`v-if`](https://vuejs.org/api/built-in-directives.html#v-if).

Die `v-if`-Direktive rendert nur dann einen Block, wenn der Wert, der ihr übergeben wird, wahr ist. Dies ist vergleichbar mit der Funktionsweise einer `if`-Anweisung in JavaScript. `v-if` hat auch entsprechende [`v-else-if`](https://vuejs.org/api/built-in-directives.html#v-else-if) und [`v-else`](https://vuejs.org/api/built-in-directives.html#v-else) Direktiven, um die Äquivalente der JavaScript `else if`- und `else`-Logik innerhalb von Vue-Templates bereitzustellen.

Es ist wichtig zu beachten, dass `v-else`- und `v-else-if`-Blöcke das erste Geschwister eines `v-if`/`v-else-if`-Blocks sein müssen, ansonsten erkennt Vue sie nicht. Sie können `v-if` auch an einem `<template>`-Tag anbringen, wenn Sie ein ganzes Template bedingt rendern müssen.

Letztendlich können Sie `v-if` + `v-else` an der Wurzel Ihrer Komponente verwenden, um entweder nur einen Block oder den anderen anzuzeigen, da Vue jeweils nur einen dieser Blöcke rendert. Wir werden dies in unserer App tun, da es uns ermöglicht, den Code, der unser Todo-Element anzeigt, durch das Bearbeitungsformular zu ersetzen.

Fügen Sie zuerst `v-if="!isEditing"` zum Wurzel-`<div>` in Ihrer `ToDoItem`-Komponente hinzu,

```html
<div class="stack-small" v-if="!isEditing"></div>
```

Als Nächstes fügen Sie unter dem schließenden Tag dieses `<div>` die folgende Zeile hinzu:

```html
<to-do-item-edit-form v-else :id="id" :label="label"></to-do-item-edit-form>
```

Wir müssen auch die `ToDoItemEditForm`-Komponente importieren und registrieren, damit wir sie in diesem Template verwenden können. Fügen Sie diese Zeile oben in Ihrem `<script>`-Element hinzu:

```js
import ToDoItemEditForm from "./ToDoItemEditForm";
```

Und fügen Sie eine `components`-Eigenschaft über der `props`-Eigenschaft innerhalb des Komponentenobjekts hinzu:

```js
components: {
  ToDoItemEditForm
},
```

Nun sollten Sie in Ihrer App beim Klick auf den "Bearbeiten"-Button eines Todo-Elements das Kontrollkästchen durch das Bearbeitungsformular ersetzt sehen.

![Die Todo-Listen-App, mit angezeigten Bearbeiten- und Löschen-Buttons, und einem der Todos im Bearbeitungsmodus, mit angezeigtem Eingabefeld und Speichern- und Abbrechen-Buttons](todo-edit-delete.png)

Derzeit gibt es jedoch keine Möglichkeit, zurückzugehen. Um das zu beheben, müssen wir noch einige Event-Handler zu unserer Komponente hinzufügen.

## Den Bearbeitungsmodus verlassen

Zuerst müssen wir eine `itemEdited()`-Methode zu unserer `ToDoItem`-Komponente innerhalb der `methods` hinzufügen. Diese Methode sollte das neue Element-Label als Argument nehmen, ein `itemEdited`-Event an die übergeordnete Komponente senden und `isEditing` auf `false` setzen.

Fügen Sie es jetzt unter Ihren bestehenden Methoden hinzu:

```js
itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
}
```

Als Nächstes benötigen wir eine `editCancelled()`-Methode. Diese Methode nimmt keine Argumente und dient lediglich dazu, `isEditing` wieder auf `false` zu setzen. Fügen Sie diese Methode unter der vorherigen hinzu:

```js
editCancelled() {
  this.isEditing = false;
}
```

Zuletzt in diesem Abschnitt fügen wir Event-Handler für die von der `ToDoItemEditForm`-Komponente gesendeten Events hinzu und binden die entsprechenden Methoden an jedes Event.

Aktualisieren Sie Ihren `<to-do-item-edit-form></to-do-item-edit-form>`-Aufruf folgendermaßen:

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

Jetzt können wir zwischen dem Bearbeitungsformular und dem Kontrollkästchen umschalten. Wir haben jedoch noch nicht das `ToDoItems`-Array in `App.vue` aktualisiert. Um das zu beheben, müssen wir auf das `item-edited`-Event hören und die Liste entsprechend aktualisieren. Wir möchten auch das `delete`-Event behandeln, um Todo-Elemente löschen zu können.

Fügen Sie die folgenden neuen Methoden zu Ihrem `App.vue`-Komponentenobjekt hinzu, unter den bestehenden Methoden innerhalb der `methods`-Eigenschaft:

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

Als Nächstes fügen wir die Event-Listener für die `item-deleted`- und `item-edited`-Events hinzu:

- Für `item-deleted` müssen Sie `item.id` an die Methode übergeben.
- Für `item-edited` müssen Sie `item.id` und die spezielle `$event`-Variable übergeben. Dies ist eine spezielle Vue-Variable, die verwendet wird, um Event-Daten an Methoden zu übergeben. Beim Verwenden von nativen HTML-Events (wie `click`) wird das native Ereignisobjekt an Ihre Methode übergeben.

Aktualisieren Sie den `<to-do-item></to-do-item>`-Aufruf innerhalb des `App.vue`-Templates wie folgt:

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

Und da haben Sie es — Sie sollten jetzt Items in der Liste bearbeiten und löschen können!

## Beheben eines kleinen Bugs mit dem isDone-Status

Bisher ist dies großartig, aber wir haben tatsächlich einen Fehler eingeführt, indem wir die Bearbeitungsfunktionalität hinzugefügt haben. Versuchen Sie Folgendes:

1. Markieren (oder demarkieren) Sie eines der Todo-Kontrollkästchen.
2. Drücken Sie den "Bearbeiten"-Button für dieses Todo-Item.
3. Brechen Sie die Bearbeitung ab, indem Sie den "Abbrechen"-Button drücken.

Beachten Sie den Zustand des Kontrollkästchens, nachdem Sie abgebrochen haben — die App hat nicht nur den Zustand des Kontrollkästchens vergessen, sondern der Fertig-Status dieses Todo-Items ist jetzt durcheinander. Wenn Sie versuchen, es erneut zu markieren (oder zu demarkieren), ändert sich die Anzahl der abgeschlossenen Aufgaben in die entgegengesetzte Richtung, als Sie erwarten würden. Dies liegt daran, dass `isDone` innerhalb von `data` nur beim Laden der Komponente den Wert `this.done` zugewiesen bekommt.

Zum Glück ist es ganz einfach, dies zu beheben — dies können wir tun, indem wir unser `isDone`-Datenelement in eine [berechnete Eigenschaft](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties) umwandeln — ein weiterer Vorteil von berechneten Eigenschaften ist, dass sie die [Reaktivität](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) bewahren, was unter anderem bedeutet, dass ihr Zustand gespeichert wird, wenn das Template wie unseres jetzt ändert.

Also lass uns die Korrektur in `ToDoItem.vue` umsetzen:

1. Entfernen Sie die folgende Zeile aus unserer `data()`-Eigenschaft:

   ```js
   isDone: this.done,
   ```

2. Fügen Sie den folgenden Block unterhalb des data() { } Blocks hinzu:

   ```js
   computed: {
     isDone() {
       return this.done;
     }
   },
   ```

Wenn Sie nun speichern und neu laden, werden Sie feststellen, dass das Problem gelöst ist — der Zustand des Kontrollkästchens wird jetzt beibehalten, wenn Sie zwischen den Todo-Item-Templates wechseln.

## Das Wirrwarr der Events verstehen

Einer der verwirrendsten Teile könnte das Wirrwarr der Standard- und benutzerdefinierten Events sein, die wir verwendet haben, um die gesamte Interaktivität in unserer App auszulösen. Um dies besser zu verstehen, ist es eine gute Idee, ein Flussdiagramm, eine Beschreibung oder ein Diagramm zu erstellen, welches darlegt, welche Events wo gesendet werden, wo sie abgehört werden und was als Ergebnis ihres Auslösens passiert.

### App.vue

`<to-do-form>` lauscht auf:

- `todo-added`-Event, das durch die `onSubmit()`-Methode innerhalb der `ToDoForm`-Komponente ausgelöst wird, wenn das Formular abgeschickt wird.
  **Ergebnis**: `addToDo()` Methode wird aufgerufen, um neues Todo-Element zum `ToDoItems`-Array hinzuzufügen.

`<to-do-item>` lauscht auf:

- `checkbox-changed`-Event, das durch das Kontrollkästchen `<input>` innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn es aktiviert oder deaktiviert wird.
  **Ergebnis**: `updateDoneStatus()` Methode wird aufgerufen, um den Fertig-Status des zugeordneten Todo-Items zu aktualisieren.
- `item-deleted`-Event, das durch die `deleteToDo()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn der "Löschen"-Button gedrückt wird.
  **Ergebnis**: `deleteToDo()` Methode wird aufgerufen, um das zugeordnete Todo-Item zu löschen.
- `item-edited`-Event, das durch die `itemEdited()`-Methode innerhalb der `ToDoItem`-Komponente ausgelöst wird, wenn das `item-edited`-Event der `onSubmit()`-Methode innerhalb des `ToDoItemEditForm` erfolgreich abgehört wurde. Ja, dies ist eine Kette von zwei verschiedenen `item-edited`-Events!
  **Ergebnis**: `editToDo()` Methode wird aufgerufen, um das Label des zugeordneten Todo-Items zu aktualisieren.

### ToDoForm.vue

`<form>` lauscht auf `submit`-Event.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, dass das neue Label nicht leer ist, dann das `todo-added`-Event (welches dann innerhalb von `App.vue` abgehört wird, siehe oben) auslöst und schließlich das neue Label `<input>` bereinigt.

### ToDoItem.vue

Das `<input>` mit `type="checkbox"` lauscht auf `change`-Events.
**Ergebnis**: `checkbox-changed`-Event wird ausgelöst, wenn das Kontrollkästchen aktiviert/deaktiviert wird (welches dann innerhalb von `App.vue` abgehört wird; siehe oben).

"Bearbeiten" `<button>` lauscht auf `click`-Event.
**Ergebnis**: `toggleToItemEditForm()` Methode wird aufgerufen, die `this.isEditing` auf `true` toggelt, was dazu führt, dass das Bearbeitungsformular des Todo-Items bei der erneuten Darstellung angezeigt wird.

"Löschen" `<button>` lauscht auf `click`-Event.
**Ergebnis**: `deleteToDo()` Methode wird aufgerufen, die das `item-deleted`-Event auslöst (welches dann innerhalb von `App.vue` abgehört wird; siehe oben).

`<to-do-item-edit-form>` lauscht auf:

- `item-edited`-Event, das durch die `onSubmit()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn das Formular erfolgreich abgeschickt wurde.
  **Ergebnis**: `itemEdited()` Methode wird aufgerufen, die das `item-edited`-Event auslöst (welches dann innerhalb von `App.vue` abgehört wird, siehe oben), und `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular bei erneuter Darstellung nicht mehr angezeigt wird.
- `edit-cancelled`-Event, das durch die `onCancel()`-Methode innerhalb der `ToDoItemEditForm`-Komponente ausgelöst wird, wenn der "Abbrechen"-Button geklickt wird.
  **Ergebnis**: `editCancelled()` Methode wird aufgerufen, die `this.isEditing` wieder auf `false` setzt, sodass das Bearbeitungsformular bei erneuter Darstellung nicht mehr angezeigt wird.

### ToDoItemEditForm.vue

`<form>` lauscht auf `submit`-Event.
**Ergebnis**: `onSubmit()` Methode wird aufgerufen, die überprüft, ob der neue Labelwert nicht leer ist und nicht mit dem alten übereinstimmt, und falls ja, das `item-edited`-Event auslöst (welches dann innerhalb von `ToDoItem.vue` abgehört wird, siehe oben).

"Abbrechen" `<button>` lauscht auf `click`-Event.
**Ergebnis**: `onCancel()` Methode wird aufgerufen, die das `edit-cancelled`-Event auslöst (welches dann innerhalb von `ToDoItem.vue` abgehört wird, siehe oben).

## Zusammenfassung

Dieser Artikel war ziemlich intensiv, und wir haben hier viel behandelt. Wir haben jetzt die Bearbeitungs- und Löschfunktionalität in unserer App, was ziemlich aufregend ist. Wir nähern uns dem Ende unserer Vue-Serie. Die letzte Funktionalität, die wir betrachten, ist das Fokusmanagement oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties","Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
