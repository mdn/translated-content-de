---
title: Eine Liste von Vue-Komponenten rendern
slug: Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}

Bis zu diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir ein Set von To-Do-Artikel-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten unter Verwendung der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man durch ein Array von Daten iteriert und es in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-do-Liste zu sein, müssen wir in der Lage sein, mehrere To-do-Elemente zu rendern. Dazu hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns ermöglicht, eine Schleife innerhalb unseres Templates einzuschließen, die das Rendern eines Template-Features für jedes Element in einem Array wiederholt. Wir werden dies nutzen, um durch ein Array von To-do-Elementen zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen einiger Daten zum Rendern

Zuerst müssen wir ein Array von To-do-Elementen erhalten. Dazu fügen wir der `App.vue`-Komponentenobjekt eine `data`-Eigenschaft hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-do-Elementen ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-do-Elemente hinzuzufügen, können wir mit einigen simulierten To-do-Elementen beginnen. Jedes To-do-Element wird durch ein Objekt mit den Eigenschaften `label` und `done` dargestellt.

Fügen Sie einige Beispiel-To-do-Elemente hinzu, wie die unten gezeigten. Auf diese Weise haben Sie einige Daten zur Verfügung, die mit `v-for` gerendert werden können.

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

Jetzt, wo wir eine Liste von Elementen haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden Elementen wie andere Attribute hinzugefügt. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, die der [Schleife `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) in JavaScript ähnelt — `v-for="item in items"` — wobei `items` das Array ist, das Sie durchlaufen möchten, und `item` ein Verweis auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das wiederholt werden soll und rendert dieses Element und seine untergeordneten Elemente. In diesem Fall möchten wir für jedes To-do-Element in unserem `ToDoItems`-Array ein `<li>`-Element anzeigen. Dann möchten wir die Daten von jedem To-do-Element an eine `ToDoItem`-Komponente übergeben.

### Key-Attribut

Bevor wir das tun, gibt es noch ein weiteres Stück Syntax, das Sie kennen sollten, das mit `v-for` verwendet wird, das `key`-Attribut. Um Vue zu helfen, das Rendern der Elemente in der Liste zu optimieren, versucht es, Listenelemente zu patchen, sodass sie nicht jedes Mal neu erstellt werden müssen, wenn sich die Liste ändert. Allerdings benötigt Vue dabei Hilfe. Um sicherzustellen, dass Listenelemente korrekt wiederverwendet werden, benötigt es einen eindeutigen "key" auf demselben Element, an das `v-for` angehängt ist.

Um sicherzustellen, dass Vue die `key`-Attribute korrekt vergleichen kann, müssen sie Zeichenfolgen- oder numerische Werte sein. Während es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld schließlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir im vorherigen Artikel gezeigt haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente getan haben, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als Nächstes jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem von ihnen einen Wert von `"todo-" + nanoid()` zu.

   Das `<script>`-Element in `App.vue` sollte jetzt folgenden Inhalt haben:

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

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut dem `<li>`-Element in Ihrem `App.vue`-Template hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugang zum `item`-Wert zusätzlich zu den anderen Komponentenattributen. Das bedeutet, dass wir die Felder unserer Elementobjekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie daran, die `v-bind`-Syntax zu verwenden. Dies ist wirklich nützlich, da wir möchten, dass unsere To-do-Elemente ihre `label`-Eigenschaften als ihr Label anzeigen, nicht ein statisches Label von "My Todo Item". Darüber hinaus möchten wir, dass ihr Prüfstatus ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das Attribut `label="My ToDo Item"` zu `:label="item.label"`, und das `:done="true"`-Attribut zu `:done="item.done"`, wie im folgenden Kontext zu sehen:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie nun Ihre laufende App betrachten, wird sie die To-do-Elemente mit ihren richtigen Namen anzeigen, und wenn Sie den Quellcode inspizieren, werden Sie sehen, dass die Eingaben alle einzigartige `id`s haben, die aus dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste von gerenderten To-do-Elementen.](rendered-todo-items.png)

## Gelegenheit für eine kleine Umstrukturierung

Es gibt hier eine kleine Möglichkeit zur Umstrukturierung. Anstatt die `id` für die Kontrollkästchen innerhalb Ihrer `ToDoItem`-Komponente zu erzeugen, können wir die `id` in ein Prop umwandeln. Obwohl dies nicht unbedingt erforderlich ist, macht es uns die Verwaltung einfacher, da wir ohnehin schon eine eindeutige `id` für jedes To-do-Element erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente ein neues Prop hinzu — `id`.
2. Machen Sie es erforderlich und seinen Typen zu einer `String`.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, also müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, sonst wird Ihre App einen Fehler werfen.

Der Inhalt des `<script>` in Ihrer `ToDoItem`-Komponente sollte nun wie folgt aussehen:

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihr `App.vue`-Template sollte jetzt wie folgt aussehen:

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

Wenn Sie jetzt Ihre gerenderte Seite betrachten, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet nun, dass unsere `id` aus den Daten in `App.vue` stammt und als Prop an `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Und damit kommen wir zum Ende eines weiteren Artikels. Wir haben nun Beispiel-Daten bereitgestellt und eine Schleife, die jedes Datenelement nimmt und es in einem `ToDoItem` in unserer App rendert.

Was wir als Nächstes wirklich brauchen, ist die Fähigkeit, unseren Benutzern zu erlauben, ihre eigenen To-do-Elemente in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das bei Datenübermittlung ausgelöst wird, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell, um die Daten zu steuern. Wir werden in dem nächsten Artikel darauf eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_first_component","Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models", "Learn_web_development/Core/Frameworks_libraries")}}
