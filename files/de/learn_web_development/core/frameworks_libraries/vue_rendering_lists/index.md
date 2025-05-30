---
title: Rendering a list of Vue components
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie wir eine Reihe von ToDo-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb der `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) nutzen zu können, benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man durch ein Array von Daten iteriert und es in mehreren
        Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-Do-Liste zu sein, müssen wir mehrere To-Do-Items rendern können. Dazu hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns ermöglicht, eine Schleife innerhalb unserer Vorlage einzuschließen, die das Rendern eines Vorlage-Elements für jedes Element in einem Array wiederholt. Wir werden dies verwenden, um durch ein Array von To-Do-Items zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen von Daten zum Rendern

Zuerst müssen wir ein Array von To-Do-Items erhalten. Dazu fügen wir eine `data`-Eigenschaft zum `App.vue`-Komponentenobjekt hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-Do-Items ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-Do-Items hinzuzufügen, können wir mit einigen beispielhaften To-Do-Items beginnen. Jedes To-Do-Item wird durch ein Objekt mit einer `label`- und einer `done`-Eigenschaft dargestellt.

Fügen Sie ein paar Beispiel-To-Do-Items hinzu, wie sie unten zu sehen sind. Auf diese Weise haben Sie einige Daten zum Rendern mit `v-for` verfügbar.

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

Jetzt, da wir eine Liste von Items haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden auf Elemente angewendet wie andere Attribute. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, die einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife in JavaScript ähnelt — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` ein Verweis auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-Do-Item in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-Do-Item an eine `ToDoItem`-Komponente übergeben.

### Schlüsselattribut

Bevor wir das tun, gibt es ein weiteres Syntaxelement, das mit `v-for` verwendet wird, das Schlüsselattribut. Um Vue beim Optimieren des Renderns der Elemente in der Liste zu helfen, versucht es, Listenelemente zu patchen, damit sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Allerdings braucht Vue Hilfe. Um sicherzustellen, dass es Listenelemente ordnungsgemäß wiederverwendet, benötigt es einen eindeutigen „Schlüssel“ auf demselben Element, an dem Sie `v-for` anhängen.

Um sicherzustellen, dass Vue die `key` Attribute genau vergleichen kann, müssen sie Zeichenfolgen- oder numerische Werte sein. Während es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld schließlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, so wie wir es im vorherigen Artikel gemacht haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf dieselbe Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente gemacht haben, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als nächstes jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem von ihnen einen Wert von `` `todo-${nanoid()}}` `` zu.

   Das `<script>`-Element in `App.vue` sollte jetzt den folgenden Inhalt haben:

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

3. Fügen Sie jetzt die `v-for`-Direktive und das `key`-Attribut zum `<li>`-Element in Ihrer `App.vue`-Vorlage hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Das bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie einfach daran, die `v-bind`-Syntax zu verwenden. Dies ist wirklich nützlich, da wir möchten, dass unsere To-Do-Items ihre `label`-Eigenschaften als ihr Label anzeigen, nicht als ein statisches Label von "My Todo Item". Darüber hinaus möchten wir, dass ihr Überprüfungsstatus ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"` und das `:done="true"`-Attribut zu `:done="item.done"`, wie im Kontext unten zu sehen:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie sich jetzt Ihre laufende App ansehen, zeigt sie die To-Do-Items mit ihren richtigen Namen an, und wenn Sie den Quellcode inspizieren, werden Sie sehen, dass alle Eingaben eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente übernommen wurden.

![Die App mit einer Liste gerenderter To-Do-Items.](rendered-todo-items.png)

## Gelegenheit für eine kleine Refaktorisierung

Es gibt hier eine kleine Refaktorisierung, die wir vornehmen können. Anstatt die `id` für die Kontrollkästchen innerhalb Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in eine Prop umwandeln. Obwohl dies nicht unbedingt erforderlich ist, erleichtert es uns das Management, da wir ohnehin bereits eine eindeutige `id` für jedes To-Do-Item erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente eine neue Prop — `id` — hinzu.
2. Machen Sie sie erforderlich und geben Sie ihren Typ als `String` an.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, also müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, sonst wird Ihre App einen Fehler ausgeben.

Der `<script>`-Inhalt in Ihrer `ToDoItem`-Komponente sollte jetzt so aussehen:

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihre `App.vue`-Vorlage sollte nun so aussehen:

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

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unsere Refaktorisierung bedeutet nun, dass unsere `id` aus den Daten innerhalb `App.vue` übernommen und als Prop in `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge nun logischer und konsistenter sind.

## Zusammenfassung

Damit sind wir am Ende eines weiteren Artikels angelangt. Wir haben nun Beispieldaten an Ort und Stelle und eine Schleife, die jedes Datenbit nimmt und es innerhalb eines `ToDoItem` in unserer App rendert.

Was wir als nächstes wirklich brauchen, ist die Fähigkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Auf diese werden wir im nächsten Artikel eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
