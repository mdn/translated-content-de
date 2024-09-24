---
title: Eine Liste von Vue-Komponenten rendern
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists
l10n:
  sourceCommit: 1acfcd124cbbe0403f1203a19cdf0e189993f1af
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind nun bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns ansehen, wie wir eine Sammlung von Daten zu To-Do-Elementen zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Nutzung einiger der fortgeschritteneren Features von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man durch ein Array von Daten iteriert und es in mehreren Komponenten rendert.
      </td>
    </tr>
  </tbody>
</table>

## Listen mit v-for rendern

Um eine effektive To-Do-Liste zu erstellen, müssen wir in der Lage sein, mehrere To-Do-Elemente zu rendern. Dazu hat Vue eine spezielle Direktive, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine in Vue eingebaute Direktive, die es uns ermöglicht, eine Schleife in unser Template einzufügen, die die Darstellung eines Template-Features für jedes Element in einem Array wiederholt. Wir werden dies nutzen, um durch ein Array von To-Do-Elementen zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen von Daten zum Rendern

Zuerst müssen wir ein Array von To-Do-Elementen erhalten. Dazu fügen wir eine `data`-Eigenschaft zum `App.vue`-Komponentenobjekt hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-Do-Elementen ist. Während wir schließlich einen Mechanismus hinzufügen werden, um neue To-Do-Elemente hinzuzufügen, können wir mit einigen Mock-To-Do-Elementen beginnen. Jedes To-Do-Element wird durch ein Objekt mit den Eigenschaften `label` und `done` dargestellt.

Fügen Sie einige Beispiel-To-Do-Elemente hinzu, ähnlich denen, die unten gezeigt werden. So haben Sie einige Daten zur Verfügung, um sie mit `v-for` zu rendern.

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

Jetzt, da wir eine Liste von Elementen haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden wie andere Attribute auf Elemente angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax ähnlich einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife in JavaScript — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` ist eine Referenz auf das aktuelle Element im Array.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und seine Kinder. In diesem Fall möchten wir für jedes To-Do-Element innerhalb unseres `ToDoItems`-Arrays ein `<li>`-Element anzeigen. Dann möchten wir die Daten von jedem To-Do-Element an eine `ToDoItem`-Komponente übergeben.

### Schlüsselattribut

Bevor wir das machen, gibt es einen anderen Teil der Syntax, den Sie über `v-for` wissen sollten, das `key`-Attribut. Um Vue dabei zu helfen, das Rendern der Elemente in der Liste zu optimieren, versucht es, Listenelemente zu patchen, damit sie nicht jedes Mal neu erstellt werden müssen, wenn sich die Liste ändert. Vue braucht jedoch Hilfe. Um sicherzustellen, dass es Listenelemente korrekt wiederverwendet, benötigt es einen eindeutigen "key" auf demselben Element, an den Sie `v-for` anhängen.

Um sicherzustellen, dass Vue die `key`-Attribute genau vergleichen kann, müssen sie Zeichenketten- oder numerische Werte sein. Obwohl es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld letztendlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel getan haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf die gleiche Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente getan haben, mit

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als Nächstes jedem Element in Ihrem `ToDoItems`-Array ein `id`-Feld hinzu und weisen Sie jedem von ihnen den Wert `"todo-" + nanoid()` zu.

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

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut zum `<li>`-Element in Ihrem `App.vue`-Template hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Komponentenattributen. Dies bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie daran, die `v-bind`-Syntax zu verwenden. Das ist wirklich nützlich, da wir möchten, dass unsere To-Do-Elemente ihre `label`-Eigenschaften als Beschriftung anzeigen, nicht eine statische Beschriftung von "My Todo Item". Außerdem möchten wir, dass deren Status ihrer `done`-Eigenschaften entspricht und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"` und das `:done="true"`-Attribut zu `:done="item.done"`, wie im folgenden Kontext gezeigt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie sich nun Ihre laufende App ansehen, werden die To-Do-Elemente mit ihren richtigen Namen angezeigt, und wenn Sie den Quellcode überprüfen, sehen Sie, dass alle Eingaben eindeutige `id`s haben, die aus dem Objekt in der `App`-Komponente entnommen wurden.

![Die App mit einer Liste von gerenderten To-Do-Elementen.](rendered-todo-items.png)

## Möglichkeit zur leichten Umstrukturierung

Es gibt eine kleine Umstrukturierung, die wir hier vornehmen können. Anstatt die `id` für die Kontrollkästchen in Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in eine Prop umwandeln. Obwohl dies nicht unbedingt notwendig ist, wird es für uns einfacher zu handhaben, da wir ohnehin eine eindeutige `id` für jedes To-Do-Element erstellen müssen.

1. Fügen Sie Ihrer `ToDoItem`-Komponente eine neue Prop hinzu — `id`.
2. Machen Sie sie erforderlich und definieren Sie ihren Typ als `String`.
3. Um Namenskollisionen zu vermeiden, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Da Sie `nanoid` nicht mehr verwenden, müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wird Ihre App einen Fehler auslösen.

Der `<script>`-Inhalt in Ihrer `ToDoItem`-Komponente sollte jetzt etwa so aussehen:

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

Wenn Sie sich Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet jetzt, dass unsere `id` aus den Daten in `App.vue` entnommen und wie alles andere als Prop an `ToDoItem` übergeben wird, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Und damit sind wir am Ende eines weiteren Artikels angelangt. Wir haben nun Beispieldaten zur Verfügung und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert.

Was wir wirklich als Nächstes brauchen, ist die Möglichkeit, unseren Nutzern zu erlauben, ihre eigenen To-Do-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Darauf werden wir im nächsten Artikel eingehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
