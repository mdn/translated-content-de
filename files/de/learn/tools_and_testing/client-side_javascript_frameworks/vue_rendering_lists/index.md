---
title: Rendering einer Liste von Vue-Komponenten
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists
l10n:
  sourceCommit: 1acfcd124cbbe0403f1203a19cdf0e189993f1af
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt haben wir eine vollständig funktionierende Komponente; wir sind jetzt bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In diesem Artikel werden wir uns damit befassen, eine Reihe von Todo-Daten zu unserer `App.vue`-Komponente hinzuzufügen, durch die wir dann mit der `v-for`-Direktive iterieren und sie innerhalb von `ToDoItem`-Komponenten anzeigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Grundlagen der <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet wird. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie zum Beispiel Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
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

## Listenrendering mit v-for

Um eine effektive To-Do-Liste zu erstellen, müssen wir in der Lage sein, mehrere To-Do-Elemente zu rendern. Hierfür bietet Vue eine spezielle Direktive an, [`v-for`](https://vuejs.org/api/built-in-directives.html#v-for). Dies ist eine eingebaute Vue-Direktive, die es uns erlaubt, eine Schleife in unsere Vorlage einzufügen und das Rendern eines Vorlagenelements für jedes Element in einem Array zu wiederholen. Wir werden dies nutzen, um durch ein Array von To-Do-Elementen zu iterieren und sie in unserer App in separaten `ToDoItem`-Komponenten anzuzeigen.

### Hinzufügen von Daten zum Rendern

Zuerst brauchen wir ein Array von To-Do-Elementen. Um dies zu erreichen, fügen wir eine `data`-Eigenschaft zum `App.vue`-Komponentenobjekt hinzu, die ein `ToDoItems`-Feld enthält, dessen Wert ein Array von To-Do-Elementen ist. Während wir letztlich einen Mechanismus hinzufügen werden, um neue To-Do-Elemente hinzuzufügen, können wir mit einigen Beispiel-To-Do-Elementen beginnen. Jedes To-Do-Element wird durch ein Objekt mit einer `label`- und einer `done`-Eigenschaft dargestellt.

Fügen Sie ein paar Beispiel-To-Do-Elemente hinzu, ähnlich wie die unten gezeigten. So haben Sie einige Daten zur Verfügung, um sie mit `v-for` zu rendern.

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

Nun, da wir eine Liste von Elementen haben, können wir die `v-for`-Direktive verwenden, um sie anzuzeigen. Direktiven werden wie andere Attribute auf Elemente angewendet. Im Fall von `v-for` verwenden Sie eine spezielle Syntax, die einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife in JavaScript ähnelt — `v-for="item in items"` — wobei `items` das Array ist, über das Sie iterieren möchten, und `item` ein Verweis auf das aktuelle Element im Array ist.

`v-for` wird an das Element angehängt, das Sie wiederholen möchten, und rendert dieses Element und dessen Kinder. In diesem Fall möchten wir ein `<li>`-Element für jedes To-Do-Element in unserem `ToDoItems`-Array anzeigen. Dann möchten wir die Daten von jedem To-Do-Element an eine `ToDoItem`-Komponente übergeben.

### Key-Attribut

Bevor wir das tun, gibt es noch ein anderes Stück Syntax, das man im Zusammenhang mit `v-for` kennen sollte - das `key`-Attribut. Um Vue zu helfen, das Rendern der Elemente in der Liste zu optimieren, versucht es, Listenelemente zu patchen, sodass sie bei jeder Änderung der Liste nicht neu erstellt werden. Allerdings benötigt Vue dabei Unterstützung. Um sicherzustellen, dass Listenelemente korrekt wiederverwendet werden, muss dasselbe Element, an das Sie `v-for` angehängt haben, ein eindeutiges "key" besitzen.

Um sicherzustellen, dass Vue die `key`-Attribute korrekt vergleichen kann, müssen diese Zeichenfolgen- oder Zahlenwerte sein. Auch wenn es großartig wäre, das Namensfeld zu verwenden, wird dieses Feld letztlich durch Benutzereingaben gesteuert, was bedeutet, dass wir nicht garantieren können, dass die Namen eindeutig sind. Wir können jedoch `nanoid()` verwenden, wie wir es im vorherigen Artikel gemacht haben.

1. Importieren Sie `nanoid` in Ihre `App`-Komponente auf dieselbe Weise, wie Sie es mit Ihrer `ToDoItem`-Komponente getan haben, indem Sie

   ```js
   import { nanoid } from "nanoid";
   ```

2. Fügen Sie als nächstes ein `id`-Feld zu jedem Element in Ihrem `ToDoItems`-Array hinzu und weisen Sie jedem den Wert `"todo-" + nanoid()` zu.

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

3. Fügen Sie nun die `v-for`-Direktive und das `key`-Attribut dem `<li>`-Element in Ihrer `App.vue`-Vorlage hinzu, wie folgt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item label="My ToDo Item" :done="true"></to-do-item>
     </li>
   </ul>
   ```

   Wenn Sie diese Änderung vornehmen, hat jeder JavaScript-Ausdruck zwischen den `<li>`-Tags Zugriff auf den `item`-Wert zusätzlich zu den anderen Attributen der Komponente. Das bedeutet, dass wir die Felder unserer Item-Objekte an unsere `ToDoItem`-Komponente übergeben können — denken Sie daran, die `v-bind`-Syntax zu verwenden. Das ist wirklich nützlich, denn wir möchten, dass unsere To-Do-Elemente ihre `label`-Eigenschaften als ihre Bezeichnung anzeigen, nicht eine statische Bezeichnung wie "My Todo Item". Außerdem möchten wir, dass ihr angekreuzter Status ihre `done`-Eigenschaften widerspiegelt und nicht immer auf `done="true"` gesetzt ist.

4. Aktualisieren Sie das `label="My ToDo Item"`-Attribut zu `:label="item.label"` und das `:done="true"`-Attribut zu `:done="item.done"`, wie unten im Kontext gezeigt:

   ```html
   <ul>
     <li v-for="item in ToDoItems" :key="item.id">
       <to-do-item :label="item.label" :done="item.done"></to-do-item>
     </li>
   </ul>
   ```

Wenn Sie nun Ihre laufende App ansehen, werden die To-Do-Elemente mit ihren richtigen Namen angezeigt, und wenn Sie den Quellcode inspizieren, werden Sie sehen, dass die Eingaben alle einzigartige `id`s haben, die aus dem Objekt in der `App`-Komponente stammen.

![Die App mit einer Liste von gerenderten To-Do-Elementen.](rendered-todo-items.png)

## Möglichkeit für eine kleine Umstrukturierung

Es gibt hier einen kleinen Punkt, den wir umstrukturieren können. Anstatt die `id` für die Kontrollkästchen in Ihrer `ToDoItem`-Komponente zu generieren, können wir die `id` in ein Prop umwandeln. Auch wenn das nicht unbedingt notwendig ist, macht es uns die Verwaltung einfacher, da wir ohnehin für jedes To-Do-Element eine einzigartige `id` erstellen müssen.

1. Fügen Sie ein neues Prop zu Ihrer `ToDoItem`-Komponente hinzu — `id`.
2. Machen Sie es erforderlich und setzen Sie den Typ auf `String`.
3. Um Namenskollisionen zu verhindern, entfernen Sie das `id`-Feld aus Ihrem `data`-Attribut.
4. Sie verwenden `nanoid` nicht mehr, deshalb müssen Sie die Zeile `import { nanoid } from 'nanoid';` entfernen, andernfalls wirft Ihre App einen Fehler.

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

Nun, in Ihrer `App.vue`-Komponente, übergeben Sie `item.id` als Prop an die `ToDoItem`-Komponente. Ihr `App.vue`-Vorlage sollte nun so aussehen:

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

Wenn Sie Ihre gerenderte Seite ansehen, sollte sie gleich aussehen, aber unsere Umstrukturierung bedeutet jetzt, dass unsere `id` aus den Daten innerhalb von `App.vue` entnommen und als Prop in `ToDoItem` übergeben wird, genau wie alles andere, sodass die Dinge jetzt logischer und konsistenter sind.

## Zusammenfassung

Und damit kommen wir zum Ende eines weiteren Artikels. Wir haben jetzt Beispieldaten vorliegen und eine Schleife, die jedes Datenstück nimmt und es innerhalb eines `ToDoItem` in unserer App rendert.

Was wir wirklich als Nächstes brauchen, ist die Fähigkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Elemente in die App einzugeben, und dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Dazu kommen wir im nächsten Artikel.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
