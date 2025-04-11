---
title: Rendering a list of Vue components
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt haben wir eine voll funktionsfähige Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir eine Menge von Todo-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit Hilfe der `v-for` Direktive anzeigen werden.

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
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrundeliegenden DOM-Struktur entspricht, geschrieben. Für die Installation und Nutzung einiger fortgeschrittener Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man ein Array von Daten durchläuft und in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Rendern von Listen mit v-for

Um eine effektive To-do-Liste zu erstellen, müssen wir in der Lage sein, mehrere To-do-Items zu rendern. Dafür hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns ermöglicht, eine Schleife in unsere Vorlage einzufügen, die das Rendern eines Vorlagen-Features für jedes Element in einem Array wiederholt. Wir werden dies nutzen, um durch ein Array von To-do-Items zu iterieren und diese in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen einiger Daten zum Rendern

Zuerst müssen wir ein Array von To-do-Items erhalten. Dazu fügen wir eine `data`-Eigenschaft zum `App.vue`-Komponentenobjekt hinzu, welche ein `ToDoItems`-Feld enthält, dessen Wert ein Array von Todo-Items ist. Während wir letztendlich einen Mechanismus hinzufügen werden, um neue Todo-Items hinzuzufügen, können wir mit einigen Beispiel-Todo-Items beginnen. Jedes To-do-Item wird durch ein Objekt mit den Eigenschaften `label` und `done` dargestellt.

Fügen Sie einige Beispiel-Todo-Items hinzu, wie die unten gezeigten. Auf diese Weise haben Sie einige Daten zur Verfügung, um sie mit `v-for` zu rendern.

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

Jetzt, da wir eine Liste von Items haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden wie andere Attribute zu Elementen hinzugefügt. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, ähnlich einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife in JavaScript — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` eine Referenz auf das aktuelle Element im Array ist.

`v-for` wird an das Element angefügt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-do-Item in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-do-Item an eine `ToDoItem`-Komponente übergeben.

### Schlüsselattribut

Bevor wir dies tun, gibt es ein weiteres Syntaxstück, das bei `v-for` verwendet wird, das `key`-Attribut. Um Vue bei der Optimierung des Renderns der Elemente in der Liste zu helfen, versucht es, Listenelemente zu patchen, sodass sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Allerdings benötigt Vue dabei Unterstützung. Um sicherzustellen, dass Listenelemente angemessen wiederverwendet werden, benötigt Vue einen eindeutigen "Schlüssel" auf demselben Element, an das Sie `v-for` anheften.

Um sicherzustellen, dass Vue die `key`-Attribute korrekt vergleichen kann, müssen sie Zeichenfolgen- oder numerische Werte sein. Obwohl es großartig wäre, das `name`-Feld zu verwenden, wird dieses Feld letztendlich von Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig wären. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente getan haben, mit

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als Nächstes jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem den Wert `"todo-" + nanoid()` zu.

   Das `<script>`-Element in `App.vue` sollte nun den folgenden Inhalt haben:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   import { nanoid } from "nanoid";

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

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut zum `<li>`-Element in Ihrer `App.vue`-Vorlage hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Das bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie daran, die `v-bind`-Syntax zu verwenden. Das ist wirklich nützlich, da wir wollen, dass unsere Todo-Items ihre `label`-Eigenschaften als deren Beschriftung anzeigen, und nicht eine statische Beschriftung wie "My Todo Item". Darüber hinaus wollen wir, dass ihr Checked-Status ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut auf `:label="item.label"` und das `:done="true"`-Attribut auf `:done="item.done"`, wie im Kontext unten gezeigt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie sich nun Ihre laufende App ansehen, werden die Todo-Items mit ihren richtigen Namen angezeigt, und wenn Sie den Quellcode untersuchen, sehen Sie, dass alle Inputs eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste von gerenderten Todo-Items.](rendered-todo-items.png)

## Gelegenheit für ein kleines Refactoring

Es gibt hier eine kleine Möglichkeit für ein Refactoring. Anstatt die `id` für die Kontrollkästchen in Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in ein Prop umwandeln. Obwohl dies nicht unbedingt erforderlich ist, macht es unser Management einfacher, da wir sowieso für jedes Todo-Item eine eindeutige `id` erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente ein neues Prop — `id` — hinzu.
2. Machen Sie es erforderlich und geben Sie als Typ `String` an.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Da Sie `nanoid` nicht mehr verwenden, müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wird Ihre App einen Fehler werfen.

Der `<script>`-Inhalt Ihrer `ToDoItem`-Komponente sollte nun in etwa so aussehen:

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

Nun über in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als ein Prop an die `ToDoItem`-Komponente. Ihre `App.vue`-Vorlage sollte nun so aussehen:

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

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unser Refactoring bedeutet jetzt, dass unsere `id` aus den Daten innerhalb von `App.vue` genommen und als Prop in `ToDoItem` übergeben wird, genau wie alles andere, sodass jetzt alles logischer und konsistenter ist.

## Zusammenfassung

Das bringt uns zum Ende eines weiteren Artikels. Wir haben nun Beispieldaten eingerichtet und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert.

Was wir wirklich als nächstes benötigen, ist die Fähigkeit, unseren Benutzern zu ermöglichen, ihre eigenen Todo-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung aufgerufen wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Wir werden darauf im nächsten Artikel eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
