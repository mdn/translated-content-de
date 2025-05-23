---
title: Rendern einer Liste von Vue-Komponenten
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns damit befassen, wie wir einen Satz von To-Do-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, durch die wir dann loop gehen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man durch ein Array von Daten loop und sie in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-Do-Liste zu sein, müssen wir in der Lage sein, mehrere To-Do-Items zu rendern. Dazu hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die uns erlaubt, eine Schleife in unsere Vorlage einzuschließen, die das Rendern eines Template-Features für jedes Element in einem Array wiederholt. Wir werden dies verwenden, um durch ein Array von To-Do-Items zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen von Daten zum Rendern

Zuerst müssen wir ein Array von To-Do-Items erhalten. Dazu fügen wir eine `data`-Eigenschaft zum `App.vue`-Komponentenobjekt hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-Do-Items ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-Do-Items hinzuzufügen, können wir mit einigen Beispiel-To-Do-Items beginnen. Jedes To-Do-Item wird durch ein Objekt mit einer `label` und einer `done` Eigenschaft dargestellt.

Fügen Sie einige Beispiel-To-Do-Items hinzu, wie die unten angezeigten. Auf diese Weise haben Sie einige Daten, die mit `v-for` gerendert werden können.

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

Jetzt, da wir eine Liste von Items haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden wie andere Attribute auf Elemente angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, die einem [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Loop in JavaScript ähnelt — `v-for="item in items"` — wobei `items` das Array ist, welches Sie iterieren möchten, und `item` eine Referenz auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-Do-Item in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-Do-Item an eine `ToDoItem`-Komponente übergeben.

### Key-Attribut

Bevor wir das tun, gibt es noch ein weiteres Syntax-Element, das mit `v-for` verwendet wird, das `key`-Attribut. Um Vue zu helfen, die Elemente in der Liste optimiert zu rendern, versucht es, Listenelemente zu patchen, sodass sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Vue benötigt jedoch Hilfe. Um sicherzustellen, dass es die Listenelemente richtig wiederverwendet, benötigt es einen eindeutigen "Key" auf demselben Element, an dem Sie `v-for` befestigen.

Um sicherzustellen, dass Vue die `key`-Attribute genau vergleichen kann, müssen sie String- oder Zahlenwerte sein. Obwohl es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld letztendlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente getan haben, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als nächstes ein `id`-Feld zu jedem Element in Ihrem `ToDoItems`-Array hinzu und weisen Sie jedem einen Wert von `"todo-" + nanoid()` zu.

   Das `<script>`-Element in `App.vue` sollte jetzt folgendes enthalten:

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
           { id: "todo-" + nanoid(), label: "Learn Vue", done: false },
           {
             id: "todo-" + nanoid(),
             label: "Create a Vue project with the CLI",
             done: true,
           },
           { id: "todo-" + nanoid(), label: "Have fun", done: true },
           {
             id: "todo-" + nanoid(),
             label: "Create a to-do list",
             done: false,
           },
         ],
       };
     },
   };
   ```

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut zum `<li>`-Element in Ihrem `App.vue`-Template hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Dies bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie nur daran, die `v-bind`-Syntax zu verwenden. Dies ist wirklich nützlich, da wir möchten, dass unsere To-Do-Items ihre `label`-Eigenschaften als ihr Label anzeigen, nicht ein statisches Label von "Mein ToDo-Item". Außerdem möchten wir, dass ihr Checked-Status ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"` und das `:done="true"`-Attribut zu `:done="item.done"`, wie im folgenden Kontext gezeigt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie nun Ihre laufende App ansehen, werden die To-Do-Items mit ihren richtigen Namen angezeigt und wenn Sie den Quellcode inspizieren, werden Sie sehen, dass alle Eingaben eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste von To-Do-Items gerendert.](rendered-todo-items.png)

## Chance für eine kleine Umstrukturierung

Es gibt hier eine kleine Umstrukturierung, die wir vornehmen können. Anstatt die `id` für die Checkboxen innerhalb Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in eine Prop verwandeln. Auch wenn dies nicht unbedingt notwendig ist, macht es das Management einfacher, da wir ohnehin eine eindeutige `id` für jedes To-Do-Item erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente eine neue Prop hinzu — `id`.
2. Machen Sie sie erforderlich und stellen Sie sicher, dass ihr Typ ein `String` ist.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, daher müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wird Ihre App einen Fehler auslösen.

Die `<script>`-Inhalte in Ihrer `ToDoItem`-Komponente sollten jetzt folgendermaßen aussehen:

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihr `App.vue`-Template sollte nun so aussehen:

```html
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

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet jetzt, dass unsere `id` aus den Daten innerhalb `App.vue` genommen und als Prop in `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Und damit sind wir am Ende eines weiteren Artikels angekommen. Wir haben nun Beispieldaten bereitgestellt und eine Schleife, die jedes Datenteil nimmt und es innerhalb eines `ToDoItem` in unserer App rendert.

Was wir wirklich als nächstes brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die beim Senden ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Darauf werden wir im nächsten Artikel eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
