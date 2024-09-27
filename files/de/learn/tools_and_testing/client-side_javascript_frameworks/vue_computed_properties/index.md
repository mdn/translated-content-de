---
title: Verwenden von Vue computed properties
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der erledigten Aufgaben anzeigt, indem wir eine Funktion von Vue verwenden, die als computed properties bezeichnet wird. Diese funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu verwenden (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Vue computed properties verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwenden von computed properties

Das Ziel hier ist es, eine Zusammenfassungszählung unserer To-Do-Liste hinzuzufügen. Dies kann für Benutzer nützlich sein und auch dazu dienen, die Liste für unterstützende Technologie zu kennzeichnen. Wenn wir 2 von 5 Aufgaben in unserer To-Do-Liste erledigt haben, könnte unsere Zusammenfassung "2 von 5 Aufgaben erledigt" lauten. Auch wenn es verlockend sein könnte, so etwas zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

Würde dies bei jedem Rendern neu berechnet werden. Für eine kleine App wie diese macht das wahrscheinlich nicht viel aus. Für größere Apps oder wenn der Ausdruck komplizierter ist, könnte das jedoch ein ernstzunehmendes Leistungsproblem verursachen.

Eine bessere Lösung ist die Verwendung von Vues [computed properties](https://vuejs.org/guide/essentials/computed.html). Computed properties funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde dies nur dann erneut ausgeführt, wenn sich das `ToDoItems`-Array ändert.

Um eine computed property zu erstellen, müssen wir eine `computed`-Eigenschaft zu unserem Komponentenobjekt hinzufügen, ähnlich wie die `methods`-Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zähler-Summenzählers

Fügen Sie den folgenden Code Ihrem `App`-Komponentenobjekt unterhalb der `methods`-Eigenschaft hinzu. Die Listenzusammenfassungsmethode ermittelt die Anzahl der abgeschlossenen `ToDoItems` und gibt einen String zurück, der dies ausgibt.

```js
computed: {
  listSummary() {
    const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
    return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
  }
}
```

Nun können wir `\{{listSummary}}` direkt zu unserem Template hinzufügen; wir fügen dies innerhalb eines `<h2>`-Elements direkt über unserem `<ul>` hinzu. Wir fügen auch eine `id` und ein `aria-labelledby`-Attribut hinzu, um den Inhalt des `<h2>` als Beschriftung für das `<ul>`-Element festzulegen.

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

Sie sollten nun die Listenzusammenfassung in Ihrer App sehen und die Gesamtanzahl der Elemente wird aktualisiert, sobald Sie weitere Aufgaben hinzufügen! Wenn Sie jedoch einige Aufgaben markieren und entmarkieren, werden Sie einen Fehler feststellen. Derzeit verfolgen wir die "erledigt"-Daten tatsächlich nicht, daher ändert sich die Anzahl der erledigten Aufgaben nicht.

## Verfolgen von Änderungen an "erledigt"

Wir können Ereignisse nutzen, um die Aktualisierung der Checkbox zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf das Drücken eines Knopfes verlassen, um die Änderung auszulösen, können wir stattdessen einen `@change`-Ereignishandler an jede Checkbox anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>`-Element in `ToDoItem.vue` wie folgt.

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir nur aussenden müssen, dass die Checkbox aktiviert wurde, können wir `$emit()` inline einfügen.

In `App.vue` fügen Sie eine neue Methode namens `updateDoneStatus()` unterhalb Ihrer `addToDo()`-Methode hinzu. Diese Methode sollte einen Parameter haben: die ID des ToDo-Items. Wir wollen das Element mit der passenden `id` finden und seinen `done`-Status auf das Gegenteil seines aktuellen Status ändern:

```js
updateDoneStatus(toDoId) {
  const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
  toDoToUpdate.done = !toDoToUpdate.done
}
```

Wir möchten diese Methode jedes Mal ausführen, wenn ein `ToDoItem` ein `checkbox-changed`-Ereignis aussendet, und seine `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>`-Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Nun, wenn Sie ein `ToDoItem` aktivieren, sollten Sie die Zusammenfassung entsprechend aktualisiert sehen!

![Unsere App mit einem hinzugefügten Zähler für erledigte Aufgaben. Es werden aktuell 3 von 5 Aufgaben als erledigt angezeigt](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine computed property verwendet, um unserer App ein nettes kleines Feature hinzuzufügen. Wir haben jedoch größere Herausforderungen zu bewältigen — im nächsten Artikel werden wir uns mit der bedingten Darstellung befassen und wie wir sie verwenden können, um ein Bearbeitungsformular anzuzeigen, wenn wir bestehende Aufgaben bearbeiten möchten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
