---
title: Rendering a list of Vue components
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

An dieser Stelle haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, unserem App mehrere `ToDoItem`-Komponenten hinzuzufügen. In diesem Artikel schauen wir uns an, wie wir eine Menge von To-do-Element-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man durch ein Datenarray iteriert und es in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Rendern von Listen mit v-for

Um eine effektive To-do-Liste zu erstellen, müssen wir in der Lage sein, mehrere To-do-Elemente zu rendern. Dafür verfügt Vue über eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine integrierte Vue-Direktive, die es uns ermöglicht, eine Schleife innerhalb unserer Vorlage einzufügen und das Rendering eines Vorlagenmerkmals für jedes Element in einem Array zu wiederholen. Wir werden dies nutzen, um durch ein Array von To-do-Elementen zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen einiger Daten zum Rendern

Zuerst benötigen wir ein Array von To-do-Elementen. Dazu fügen wir der `App.vue`-Komponenten-Objekt eine `data`-Eigenschaft hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-do-Elementen ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-do-Elemente hinzuzufügen, können wir mit einigen Mock-To-do-Elementen beginnen. Jedes To-do-Element wird durch ein Objekt mit einer `label`- und einer `done`-Eigenschaft dargestellt.

Fügen Sie einige Beispieldaten von To-do-Elementen ein, wie die unten gezeigten. Auf diese Weise haben Sie einige Daten zur Verfügung, um sie mit `v-for` zu rendern.

```js
export default {
  name: "app",
  components: {
    ToDoItem,
  },
  data() {
    return {
      ToDoItems: [
        { label: "Learn Vue", done: false },
        { label: "Create a Vue project with the CLI", done: true },
        { label: "Have fun", done: true },
        { label: "Create a to-do list", done: false },
      ],
    };
  },
};
```

Nun, da wir eine Liste von Elementen haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden wie andere Attribute auf Elemente angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax ähnlich einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife in JavaScript — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` eine Referenz auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-do-Element in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-do-Element an eine `ToDoItem`-Komponente übergeben.

### Key-Attribut

Bevor wir das tun, gibt es ein weiteres Stück Syntax, das Sie kennen sollten und das mit `v-for` verwendet wird, das `key`-Attribut. Um Vue dabei zu helfen, das Rendern der Elemente in der Liste zu optimieren, versucht es, Listenelemente zu patchen, sodass sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Vue benötigt jedoch Unterstützung. Um sicherzustellen, dass es Listenelemente korrekt wiederverwendet, benötigt es einen eindeutigen "Schlüssel" auf demselben Element, an das Sie `v-for` anhängen.

Um sicherzustellen, dass Vue die `key`-Attribute genau vergleichen kann, müssen sie String- oder numerische Werte sein. Während es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld schließlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise wie bei Ihrer `ToDoItem`-Komponente, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem von ihnen einen Wert von `` `todo-${nanoid()}}` `` zu.

   Das `<script>`-Element in `App.vue` sollte nun folgenden Inhalt haben:

   ```js
   import { nanoid } from "nanoid";
   import ToDoItem from "./components/ToDoItem.vue";

   export default {
     name: "app",
     components: {
       ToDoItem,
     },
     data() {
       return {
         ToDoItems: [
           { id: `todo-${nanoid()}`, label: "Learn Vue", done: false },
           {
             id: `todo-${nanoid()}`,
             label: "Create a Vue project with the CLI",
             done: true,
           },
           { id: `todo-${nanoid()}`, label: "Have fun", done: true },
           {
             id: `todo-${nanoid()}`,
             label: "Create a to-do list",
             done: false,
           },
         ],
       };
     },
   };
   ```

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut dem `<li>`-Element in Ihrer `App.vue`-Vorlage hinzu, wie folgt:

   ```vue
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, haben alle JavaScript-Ausdrücke zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Das bedeutet, dass wir die Felder unserer Elementobjekte an unsere `ToDoItem`-Komponente übergeben können – denken Sie daran, die `v-bind`-Syntax zu verwenden. Das ist wirklich nützlich, da wir möchten, dass unsere To-do-Elemente ihre `label`-Eigenschaften als ihre Bezeichnung anzeigen und nicht eine statische Bezeichnung von "Mein To-do-Element". Außerdem möchten wir, dass ihr ausgewählter Status ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das Attribut `label="My ToDo Item"` zu `:label="item.label"` und das Attribut `:done="true"` zu `:done="item.done"`, wie im folgenden Zusammenhang zu sehen:

   ```vue
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie sich nun Ihre laufende App ansehen, werden die To-do-Elemente mit ihren richtigen Namen angezeigt, und wenn Sie den Quellcode inspizieren, werden Sie sehen, dass die Eingaben alle eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente entnommen wurden.

![Die App mit einer Liste von gerenderten To-do-Elementen.](rendered-todo-items.png)

## Gelegenheit zu einer leichten Umstrukturierung

Es gibt hier eine kleine Umstrukturierung, die wir vornehmen können. Anstatt die `id` für die Checkboxen innerhalb Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in ein Prop umwandeln. Zwar ist dies nicht unbedingt erforderlich, aber es macht es uns einfacher zu handhaben, da wir bereits eine eindeutige `id` für jedes To-do-Element erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente ein neues Prop hinzu — `id`.
2. Machen Sie es erforderlich und setzen Sie den Typ auf `String`.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, also müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wird Ihre App einen Fehler auslösen.

Der `<script>`-Inhalt in Ihrer `ToDoItem`-Komponente sollte nun ungefähr so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
```

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihre `App.vue`-Vorlage sollte jetzt so aussehen:

```vue
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet jetzt, dass unsere `id` aus den Daten innerhalb `App.vue` entnommen und als Prop in `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Und das bringt uns zum Ende eines weiteren Artikels. Wir haben jetzt Beispieldaten eingerichtet und eine Schleife, die jedes Datenbit nimmt und es in einem `ToDoItem` in unserer App rendert.

Was wir als Nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu ermöglichen, ihre eigenen To-do-Elemente in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Darauf werden wir im nächsten Artikel eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
