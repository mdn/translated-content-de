---
title: Anzeige einer Liste von Vue-Komponenten
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir einen Satz von To-do-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax geschrieben, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man durch ein Array von Daten schleift und es in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-do-Liste zu sein, müssen wir mehrere To-do-Items rendern können. Dafür hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns ermöglicht, eine Schleife in unser Template einzufügen, die das Rendern eines Template-Features für jedes Element in einem Array wiederholt. Wir werden dies verwenden, um ein Array von To-do-Items zu durchlaufen und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen einiger Daten zum Rendern

Zuerst müssen wir ein Array von To-do-Items erhalten. Dazu fügen wir der `App.vue`-Komponentenobjekt eine `data`-Eigenschaft hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-do-Items ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-do-Items hinzuzufügen, können wir mit einigen Beispieldaten starten. Jedes To-do-Item wird durch ein Objekt mit einer `label`- und einer `done`-Eigenschaft dargestellt.

Fügen Sie einige Beispiel-To-do-Items hinzu, ähnlich wie die unten genannten. Auf diese Weise haben Sie einige Daten, die mit `v-for` gerendert werden können.

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

Nun, da wir eine Liste von Items haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden auf Elemente wie andere Attribute angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, die einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife in JavaScript ähnelt — `v-for="item in items"` — wobei `items` das Array ist, das Sie durchlaufen möchten, und `item` eine Referenz auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir für jedes To-do-Item in unserem `ToDoItems`-Array ein `<li>`-Element anzeigen. Dann möchten wir die Daten von jedem To-do-Item an eine `ToDoItem`-Komponente übergeben.

### Schlüsselattribut

Bevor wir das tun, gibt es ein weiteres Stück Syntax, das Sie über `v-for` wissen sollten: das `key`-Attribut. Um Vue zu helfen, die Elemente in der Liste optimal zu rendern, versucht es, Listenelemente zu patchen, damit sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Vue benötigt jedoch Hilfe. Um sicherzustellen, dass es Listenelemente angemessen wiederverwendet, benötigt Vue einen eindeutigen "Schlüssel" auf demselben Element, an das Sie `v-for` anhängen.

Um sicherzustellen, dass Vue die `key`-Attribute genau vergleichen kann, müssen sie String- oder numerische Werte sein. Obwohl es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld schließlich von Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise wie mit Ihrer `ToDoItem`-Komponente

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem den Wert `` `todo-${nanoid()}}` `` zu.

   Das `<script>`-Element in `App.vue` sollte nun den folgenden Inhalt haben:

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

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut zum `<li>`-Element in Ihrem `App.vue`-Template hinzu, wie folgt:

   ```vue
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Dies bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie einfach daran, die `v-bind`-Syntax zu verwenden. Dies ist wirklich nützlich, da wir möchten, dass unsere To-do-Items ihre `label`-Eigenschaften als ihre Bezeichnung anzeigen, nicht ein statisches Label von „My Todo Item“. Darüber hinaus möchten wir, dass ihr angekreuzter Status ihre `done`-Eigenschaften reflektiert, nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"` und das `:done="true"`-Attribut zu `:done="item.done"`, wie unten im Kontext zu sehen:

   ```vue
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Jetzt, wenn Sie Ihre laufende App betrachten, zeigt sie die To-do-Items mit ihren richtigen Namen, und wenn Sie den Quellcode inspizieren, sehen Sie, dass die Eingaben alle eindeutige `id`s haben, die von dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste gerenderter To-do-Items.](rendered-todo-items.png)

## Gelegenheit für einen leichten Refaktor

Es gibt hier eine kleine Möglichkeit zum Refaktorieren. Anstatt die `id` für die Checkboxen innerhalb Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in ein Prop umwandeln. Obwohl dies nicht unbedingt erforderlich ist, macht es uns die Verwaltung einfacher, da wir ohnehin schon eine eindeutige `id` für jedes To-do-Item erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente ein neues Prop hinzu — `id`.
2. Machen Sie es erforderlich und setzen Sie seinen Typ auf `String`.
3. Um Namenskollisionen zu verhindern, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, also müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, sonst wird Ihre App einen Fehler auslösen.

Der `<script>`-Inhalt Ihrer `ToDoItem`-Komponente sollte nun ungefähr so aussehen:

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als ein Prop an die `ToDoItem`-Komponente. Ihr `App.vue`-Template sollte nun so aussehen:

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

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unser Refaktor bedeutet nun, dass unsere `id` aus den Daten innerhalb von `App.vue` entnommen und als ein Prop in `ToDoItem` übergeben wird, genau wie alles andere, so dass die Dinge nun logischer und konsistenter sind.

## Zusammenfassung

Und damit sind wir am Ende eines weiteren Artikels. Wir haben nun Musterdaten eingefügt und eine Schleife, die jedes Datenstück nimmt und es in einer `ToDoItem` in unserer App rendert.

Was wir als Nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-do-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell, um die Daten zu kontrollieren. Zu diesen Punkten kommen wir im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
