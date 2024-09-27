---
title: Eine Liste von Vue-Komponenten rendern
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists
l10n:
  sourceCommit: 1acfcd124cbbe0403f1203a19cdf0e189993f1af
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie wir eine Menge von ToDo-Item-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen, sowie
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie ein Terminal mit installiertem node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erlernen, wie man durch ein Datenarray iteriert und es in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-Do-Liste zu erstellen, müssen wir in der Lage sein, mehrere To-Do-Items zu rendern. Dazu hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns ermöglicht, eine Schleife innerhalb unseres Templates einzuschließen, wobei ein Template-Feature für jedes Element in einem Array wiederholt gerendert wird. Wir werden dies verwenden, um durch ein Array von To-Do-Items zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen von Daten zum Rendern

Zuerst benötigen wir ein Array von To-Do-Items. Dazu fügen wir dem `App.vue`-Komponentenobjekt eine `data`-Eigenschaft hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von ToDo-Items ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-Do-Items hinzuzufügen, können wir mit einigen Mock-To-Do-Items beginnen. Jedes To-Do-Item wird durch ein Objekt mit einer `label`- und einer `done`-Eigenschaft dargestellt.

Fügen Sie einige Beispiel-To-Do-Items hinzu, ähnlich den unten gezeigten. Auf diese Weise haben Sie einige Daten verfügbar, um sie mit `v-for` zu rendern.

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

Nun, da wir eine Liste von Elementen haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden auf Elemente wie andere Attribute angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, ähnlich einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife in JavaScript — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` eine Referenz auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-Do-Item in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-Do-Item an eine `ToDoItem`-Komponente übergeben.

### Key-Attribut

Bevor wir das tun, gibt es ein weiteres Syntaxstück, das zusammen mit `v-for` verwendet wird: das `key`-Attribut. Um Vue dabei zu helfen, das Rendern der Elemente in der Liste zu optimieren, versucht es, Listenelemente zu patchen, damit sie nicht jedes Mal neu erstellt werden, wenn sich die Liste ändert. Allerdings braucht Vue Unterstützung. Um sicherzustellen, dass es die Listenelemente korrekt wiederverwendet, benötigt es einen eindeutigen „key“ auf demselben Element, an dem Sie `v-for` anhängen.

Damit Vue die `key`-Attribute genau vergleichen kann, müssen sie Zeichenfolgen- oder Zahlenwerte sein. Obwohl es großartig wäre, das Name-Feld zu verwenden, wird dieses Feld schließlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig wären. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente gemacht haben, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als Nächstes jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu, und weisen Sie jedem von ihnen einen Wert von `"todo-" + nanoid()` zu.

   Das `<script>`-Element in `App.vue` sollte nun folgenden Inhalt haben:

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

3. Jetzt fügen Sie die `v-for`-Direktive und das `key`-Attribut dem `<li>`-Element in Ihrem `App.vue`-Template hinzu, so:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, haben alle JavaScript-Ausdrücke zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Dies bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie daran, die `v-bind`-Syntax zu verwenden. Dies ist wirklich nützlich, da wir möchten, dass unsere ToDo-Items ihre `label`-Eigenschaften als ihre Beschriftung anzeigen, nicht eine statische Beschriftung von "My Todo Item". Darüber hinaus möchten wir, dass ihr Checked-Status ihre `done`-Eigenschaften widerspiegelt, und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"`, und das `:done="true"`-Attribut zu `:done="item.done"`, wie unten im Kontext zu sehen:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Jetzt, wenn Sie Ihre laufende App ansehen, werden die ToDo-Items mit ihren richtigen Namen angezeigt, und wenn Sie den Quellcode inspizieren, sehen Sie, dass die Eingaben alle eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste von gerenderten ToDo-Items.](rendered-todo-items.png)

## Gelegenheit für eine kleine Umstrukturierung

Es gibt eine kleine Umstrukturierung, die wir hier vornehmen können. Anstatt die `id` für die Checkboxen in Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in ein Prop umwandeln. Auch wenn dies nicht unbedingt erforderlich ist, erleichtert es uns die Verwaltung, da wir ohnehin für jeden ToDo-Eintrag eine eindeutige `id` erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente ein neues Prop hinzu — `id`.
2. Machen Sie es erforderlich und legen Sie den Typ auf `String` fest.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Da Sie `nanoid` nicht mehr verwenden, müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wirft Ihre App einen Fehler.

Der `<script>`-Inhalt in Ihrer `ToDoItem`-Komponente sollte jetzt ungefähr so aussehen:

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihr `App.vue`-Template sollte jetzt so aussehen:

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

Wenn Sie Ihre gerenderte Seite betrachten, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet jetzt, dass unsere `id` von den Daten innerhalb von `App.vue` genommen und als Prop an `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Damit kommen wir zum Ende eines weiteren Artikels. Wir haben jetzt Beispieldaten vorhanden und eine Schleife, die jedes Datenstück nimmt und es innerhalb eines `ToDoItem` in unserer App rendert.

Was wir wirklich als Nächstes brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen ToDo-Items in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das beim Einreichen der Daten ausgelöst wird, eine Methode, die beim Einreichen ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Wir werden diese im nächsten Artikel behandeln.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
