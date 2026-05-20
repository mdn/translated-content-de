---
title: Verwendung von Vue berechneten Eigenschaften
slug: Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

In diesem Artikel werden wir einen Zähler hinzufügen, der die Anzahl der abgeschlossenen Aufgaben anzeigt, indem wir eine Funktion von Vue verwenden, die als berechnete Eigenschaften bezeichnet wird. Diese funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eines ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten verfasst, die die Daten der App verwalten, und einer auf HTML basierenden Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Vue berechnete Eigenschaften verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwendung von berechneten Eigenschaften

Das Ziel hier ist es, einen Zusammenfassungszähler für unsere Aufgabenliste hinzuzufügen. Dies kann für Benutzer nützlich sein und dient auch dazu, die Liste für unterstützende Technologien zu kennzeichnen. Wenn wir 2 von 5 Aufgaben in unserer Aufgabenliste abgeschlossen haben, könnte unsere Zusammenfassung "2 von 5 Aufgaben abgeschlossen" lauten. Obwohl es verlockend sein könnte, so etwas wie dies zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

würde es bei jedem Render neu berechnet werden. Für eine kleine App wie diese spielt das wahrscheinlich keine große Rolle. Für größere Apps oder wenn der Ausdruck komplizierter ist, könnte das ein ernstes Performanceproblem darstellen.

Eine bessere Lösung ist die Verwendung von [berechneten Eigenschaften](https://vuejs.org/guide/essentials/computed.html) von Vue. Berechnete Eigenschaften funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde sie nur dann erneut ausgeführt, wenn sich das `ToDoItems` Array ändert.

Um eine berechnete Eigenschaft zu erstellen, müssen wir der Komponentenobjekt eine `computed`-Eigenschaft hinzufügen, ähnlich der `methods`-Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie den folgenden Code zu Ihrem `App`-Komponentenobjekt hinzu, unterhalb der `methods`-Eigenschaft. Die Listen-Zusammenfassungsmethode ermittelt die Anzahl der fertigen `ToDoItems` und gibt einen String zurück, der dies meldet.

```js
export default {
  // …
  computed: {
    listSummary() {
      const numberFinishedItems = this.ToDoItems.filter(
        (item) => item.done,
      ).length;
      return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`;
    },
  },
  // …
};
```

Nun können wir `\{{listSummary}}` direkt in unsere Vorlage einfügen; wir werden dies innerhalb eines `<h2>`-Elements hinzufügen, direkt über unserem `<ul>`. Wir werden auch eine `id` und ein `aria-labelledby`-Attribut hinzufügen, um den `<h2>`-Inhalt als Label für das `<ul>`-Element zuzuweisen.

Fügen Sie das beschriebene `<h2>`-Element hinzu und aktualisieren Sie das `<ul>` in Ihrer `App`-Vorlage wie folgt:

```vue
<h2 id="list-summary">\{{listSummary}}</h2>
<ul aria-labelledby="list-summary" class="stack-large">
  <li v-for="item in ToDoItems" :key="item.id">
    <to-do-item
      :label="item.label"
      :done="item.done"
      :id="item.id"></to-do-item>
  </li>
</ul>
```

Sie sollten jetzt die Listenzusammenfassung in Ihrer App sehen und die Gesamtanzahl der Aufgaben aktualisiert sich, während Sie weitere Aufgaben hinzufügen! Wenn Sie jedoch versuchen, einige Aufgaben an- und abzuwählen, wird ein Fehler offenbart. Derzeit verfolgen wir die "done"-Daten nicht in irgendeiner Weise, sodass sich die Anzahl der erledigten Aufgaben nicht ändert.

## Nachverfolgung von Änderungen an "done"

Wir können Ereignisse verwenden, um die Aktualisierung des Kontrollkästchens zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf einen Knopfdruck verlassen, um die Änderung auszulösen, können wir einen `@change`-Ereignishandler an jedes Kontrollkästchen anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>`-Element in `ToDoItem.vue`, sodass es wie folgt aussieht:

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir nur mit `emit()` inline mitteilen müssen, dass das Kontrollkästchen aktiviert wurde, können wir dies inline tun.

Fügen Sie in `App.vue` eine neue Methode namens `updateDoneStatus()` hinzu, unterhalb Ihrer `addToDo()`-Methode. Diese Methode sollte einen Parameter entgegennehmen: die _id_ des Aufgabenitems. Wir möchten das Element mit der passenden `id` finden und seinen `done`-Status auf das Gegenteil seines aktuellen Status aktualisieren:

```js
export default {
  // …
  methods: {
    // …
    updateDoneStatus(toDoId) {
      const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId);
      toDoToUpdate.done = !toDoToUpdate.done;
    },
    // …
  },
  // …
};
```

Wir möchten diese Methode ausführen, wann immer ein `ToDoItem` ein `checkbox-changed`-Ereignis auslöst, und seine `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>`-Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Wenn Sie jetzt ein `ToDoItem` abhaken, sollten Sie sehen, dass die Zusammenfassung entsprechend aktualisiert wird!

![Unsere App, mit einem hinzugefügten Aufgaben-Zähler. Sie zeigt derzeit 3 von 5 Aufgaben abgeschlossen](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine berechnete Eigenschaft verwendet, um unserer App ein schönes kleines Feature hinzuzufügen. Wir haben jedoch größere Herausforderungen vor uns – im nächsten Artikel werden wir uns das bedingte Rendering ansehen und wie wir es nutzen können, um ein Bearbeitungsformular anzuzeigen, wenn wir vorhandene Aufgaben bearbeiten möchten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
