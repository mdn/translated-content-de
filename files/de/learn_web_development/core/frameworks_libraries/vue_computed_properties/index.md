---
title: Verwendung von Vue-Computed Properties
slug: Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der erledigten To-Do-Elemente anzeigt, indem wir eine Funktion von Vue namens computed properties verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie Kenntnis der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeilen</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrundeliegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Vue-Computed Properties verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwendung von Computed Properties

Das Ziel hier ist es, eine Zusammenfassungsanzahl unserer To-Do-Liste hinzuzufügen. Dies kann für Benutzer nützlich sein und dient gleichzeitig als Beschriftung für unterstützende Technologien. Wenn wir 2 von 5 Elementen in unserer To-Do-Liste fertiggestellt haben, könnte unsere Zusammenfassung so lauten: "2 fertiggestellte Elemente von 5". Auch wenn es verlockend sein mag, so etwas zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

Würde dies bei jedem Rendern neu berechnet. Für eine kleine App wie diese ist das wahrscheinlich nicht sehr wichtig. Für größere Apps oder wenn der Ausdruck komplizierter ist, könnte das jedoch ein ernstes Leistungsproblem verursachen.

Eine bessere Lösung ist die Verwendung von Vue's [computed properties](https://vuejs.org/guide/essentials/computed.html). Computed Properties funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde dies nur erneut ausgeführt, wenn sich das `ToDoItems`-Array ändert.

Um eine computed property zu erstellen, müssen wir eine `computed`-Eigenschaft zu unserem Komponentenobjekt hinzufügen, ähnlich der `methods`-Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie den folgenden Code zu Ihrem `App` Komponentenobjekt hinzu, unterhalb der `methods`-Eigenschaft. Die Listen-Zusammenfassungsmethode erhält die Anzahl der abgeschlossenen `ToDoItems` und gibt einen String zurück, der dies berichtet.

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

Nun können wir `\{{listSummary}}` direkt zu unserem Template hinzufügen; wir fügen dies innerhalb eines `<h2>`-Elements hinzu, direkt oberhalb unseres `<ul>`. Wir fügen auch eine `id` und ein `aria-labelledby`-Attribut hinzu, um die Inhalte des `<h2>` als Beschriftung für das `<ul>`-Element zuzuweisen.

Fügen Sie das beschriebene `<h2>` hinzu und aktualisieren Sie das `<ul>` innerhalb des Templates Ihrer `App` wie folgt:

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

Sie sollten nun die Listen-Zusammenfassung in Ihrer App sehen und die Gesamtanzahl der Elemente aktualisieren, wenn Sie weitere To-Do-Elemente hinzufügen! Wenn Sie jedoch versuchen, einige Elemente an- und abzuhaken, werden Sie einen Fehler aufdecken. Derzeit verfolgen wir die "done"-Daten in keiner Weise, sodass sich die Anzahl der abgeschlossenen Elemente nicht ändert.

## Verfolgung von Änderungen an "done"

Wir können Ereignisse verwenden, um die Aktualisierung des Kontrollkästchens zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf das Drücken eines Buttons verlassen, um die Änderung auszulösen, können wir stattdessen einen `@change`-Event-Handler an jedes Kontrollkästchen anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>`-Element in `ToDoItem.vue` wie folgt.

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da alles, was wir tun müssen, darin besteht, auszugeben, dass das Kontrollkästchen markiert wurde, können wir das `$emit()` inline einfügen.

Fügen Sie in `App.vue` eine neue Methode namens `updateDoneStatus()` unter Ihrer `addToDo()`-Methode hinzu. Diese Methode sollte einen Parameter annehmen: die _id_ des To-Do-Elements. Wir möchten das Element mit der übereinstimmenden `id` finden und seinen `done`-Status auf das Gegenteil seines aktuellen Status aktualisieren:

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

Wir möchten diese Methode ausführen, wann immer ein `ToDoItem` ein `checkbox-changed`-Ereignis auslöst, und dessen `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>`-Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Wenn Sie nun ein `ToDoItem` markieren, sollten Sie sehen, dass die Zusammenfassung entsprechend aktualisiert wird!

![Unsere App, mit einem hinzugefügten Zähler für abgeschlossene To-Dos. Es zeigt derzeit 3 von 5 abgeschlossenen Elementen an](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine computed property verwendet, um unserer App ein nettes kleines Feature hinzuzufügen. Wir haben jedoch noch größere Aufgaben vor uns – im nächsten Artikel werden wir uns die bedingte Darstellung ansehen und wie wir sie verwenden können, um ein Bearbeitungsformular anzuzeigen, wenn wir bestehende To-Do-Elemente bearbeiten wollen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
