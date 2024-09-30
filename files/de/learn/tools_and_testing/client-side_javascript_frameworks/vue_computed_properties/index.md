---
title: Verwendung von Vue computed properties
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen ToDo-Elemente anzeigt, indem wir eine Funktion von Vue namens computed properties verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen) zu verwenden, benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Vue computed properties nutzt.</td>
    </tr>
  </tbody>
</table>

## Verwendung von computed properties

Das Ziel hier ist es, eine Zusammenfassungszählung unserer To-Do-Liste hinzuzufügen. Dies kann für Benutzer nützlich sein und dient auch dazu, die Liste für unterstützende Technologien zu kennzeichnen. Wenn wir 2 von 5 Elementen in unserer To-Do-Liste abgeschlossen haben, könnte unsere Zusammenfassung "2 Elemente von 5 abgeschlossen" lauten. Auch wenn es verlockend sein könnte, etwas Folgendes zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

Es würde bei jedem Renderen neu berechnet. Für eine kleine App wie diese dürfte das nicht sehr ins Gewicht fallen. Für größere Apps oder wenn der Ausdruck komplizierter ist, könnte dies jedoch ein schwerwiegendes Leistungsproblem verursachen.

Eine bessere Lösung ist die Nutzung von [computed properties](https://vuejs.org/guide/essentials/computed.html) von Vue. Computed Properties funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde dies nur dann erneut ausgeführt, wenn sich das `ToDoItems`-Array ändert.

Um eine computed property zu erstellen, müssen wir unserem Komponentenobjekt eine `computed`-Eigenschaft hinzufügen, ähnlich wie die `methods`-Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie Ihrem `App`-Komponentenobjekt, unterhalb der `methods`-Eigenschaft, den folgenden Code hinzu. Die Listenzusammenfassungsmethode ermittelt die Anzahl der abgeschlossenen `ToDoItems` und gibt einen String zurück, der dies meldet.

```js
computed: {
  listSummary() {
    const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
    return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
  }
}
```

Jetzt können wir `\{{listSummary}}` direkt in unser Template einfügen; wir fügen dies in ein `<h2>`-Element ein, direkt über unserem `<ul>`. Wir fügen auch eine `id` und ein `aria-labelledby`-Attribut hinzu, um den Inhalt des `<h2>` als Beschriftung für das `<ul>`-Element festzulegen.

Fügen Sie das beschriebene `<h2>`-Element hinzu und aktualisieren Sie das `<ul>` innerhalb Ihres `App`-Templates wie folgt:

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

Sie sollten jetzt die Listenzusammenfassung in Ihrer App sehen und die Gesamtzahl der Elemente aktualisiert sich, wenn Sie weitere ToDo-Elemente hinzufügen! Wenn Sie jedoch versuchen, einige Elemente abzuhaken und wieder abzuhaken, wird ein Fehler sichtbar. Derzeit verfolgen wir die "Done"-Daten nicht tatsächlich, sodass sich die Anzahl der abgeschlossenen Elemente nicht ändert.

## Nachverfolgen von Änderungen an "Done"

Wir können Ereignisse nutzen, um die Aktualisierung der Checkbox zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf einen Button-Druck verlassen, um die Änderung auszulösen, können wir stattdessen einen `@change`-Event-Handler an jede Checkbox anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>`-Element in `ToDoItem.vue`, um so auszusehen:

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir lediglich $emit(), dass die Checkbox markiert wurde, können wir das `$emit()` inline einschließen.

Fügen Sie in `App.vue` eine neue Methode namens `updateDoneStatus()` unterhalb Ihrer `addToDo()`-Methode hinzu. Diese Methode sollte einen Parameter entgegennehmen: die ToDo-Element _id_. Wir möchten das Element mit der passenden `id` finden und dessen `done`-Status auf das Gegenteil des aktuellen Status aktualisieren:

```js
updateDoneStatus(toDoId) {
  const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
  toDoToUpdate.done = !toDoToUpdate.done
}
```

Wir möchten diese Methode ausführen, wann immer ein `ToDoItem` ein `checkbox-changed` Ereignis aussendet, und die `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>`-Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Wenn Sie jetzt ein `ToDoItem` abhaken, sollten Sie sehen, dass die Zusammenfassung entsprechend aktualisiert wird!

![Unsere App mit einem hinzugefügten ToDo-Zähler. Aktuell liest sie 3 von 5 erledigten Elementen](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine computed property verwendet, um ein nettes kleines Feature in unsere App einzufügen. Wir haben jedoch noch größere Dinge vor — im nächsten Artikel werden wir uns die bedingte Darstellung ansehen und wie wir sie nutzen können, um ein Bearbeitungsformular anzuzeigen, wenn wir bestehende ToDo-Elemente bearbeiten möchten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
