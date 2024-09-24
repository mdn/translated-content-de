---
title: Verwendung von Vue-berechneten Eigenschaften
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der erledigten Aufgaben anzeigt, indem wir eine Funktion von Vue namens berechnete Eigenschaften verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnis des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erlernen, wie man Vue-berechnete Eigenschaften verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwendung von berechneten Eigenschaften

Das Ziel hier ist es, eine Zusammenfassungszählung unserer Aufgabenliste hinzuzufügen. Dies kann für Nutzer nützlich sein und dient auch dazu, die Liste für unterstützende Technologien zu kennzeichnen. Wenn wir 2 von 5 Elementen in unserer Aufgabenliste erledigt haben, könnte unsere Zusammenfassung "2 Elemente von 5 abgeschlossen" lauten. Obwohl es verlockend sein könnte, so etwas zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} von
  \{{ToDoItems.length}} erledigte Elemente
</h2>
```

wird dies bei jedem Rendern neu berechnet. Bei einer kleinen App wie dieser spielt das wahrscheinlich keine große Rolle. Bei größeren Apps oder wenn der Ausdruck komplizierter ist, könnte dies jedoch ein ernstes Leistungsproblem verursachen.

Eine bessere Lösung ist es, die [berechneten Eigenschaften von Vue](https://vuejs.org/guide/essentials/computed.html) zu verwenden. Berechnete Eigenschaften funktionieren ähnlich wie Methoden, werden jedoch nur erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde dies nur dann erneut ausgeführt, wenn sich das Array `ToDoItems` ändert.

Um eine berechnete Eigenschaft zu erstellen, müssen wir eine `computed` Eigenschaft zu unserem Komponentenobjekt hinzufügen, ähnlich wie die `methods` Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie den folgenden Code zu Ihrem `App`-Komponentenobjekt hinzu, unterhalb der `methods` Eigenschaft. Die Listen-Zusammenfassungsmethode ermittelt die Anzahl der fertigen `ToDoItems` und gibt einen String zurück, der dies meldet.

```js
computed: {
  listSummary() {
    const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
    return `${numberFinishedItems} von ${this.ToDoItems.length} erledigte Elemente`
  }
}
```

Nun können wir `\{{listSummary}}` direkt zu unserem Template hinzufügen; wir fügen dies innerhalb eines `<h2>`-Elementes ein, direkt über unserem `<ul>`. Wir fügen auch ein `id` und ein `aria-labelledby` Attribut hinzu, um den Inhalt des `<h2>` als Beschriftung für das `<ul>` Element zuzuweisen.

Fügen Sie das beschriebene `<h2>` hinzu und aktualisieren Sie das `<ul>` in Ihrem `App`-Template wie folgt:

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

Sie sollten nun die Zusammenfassungsliste in Ihrer App sehen und die Gesamtanzahl der Elemente aktualisiert sich, wenn Sie weitere Aufgaben hinzufügen! Wenn Sie jedoch versuchen, einige Elemente abzuhaken und wieder abzuwählen, wird ein Fehler sichtbar. Derzeit verfolgen wir die "done"-Daten in keiner Weise, sodass sich die Anzahl der erledigten Elemente nicht ändert.

## Verfolgen von Änderungen an "done"

Wir können Ereignisse verwenden, um das Aktualisieren des Kontrollkästchens zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf das Drücken einer Schaltfläche verlassen, um die Änderung auszulösen, können wir einen `@change` Ereignishandler an jedes Kontrollkästchen anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>` Element in `ToDoItem.vue`, um so auszusehen:

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir nur mitteilen müssen, dass das Kontrollkästchen aktiviert wurde, können wir `$emit()` direkt einfügen.

In `App.vue`, fügen Sie eine neue Methode namens `updateDoneStatus()` hinzu, unterhalb Ihrer `addToDo()` Methode. Diese Methode sollte einen Parameter übernehmen: die _id_ des Aufgabenitems. Wir möchten das Element mit der entsprechenden `id` finden und seinen `done` Status in das Gegenteil seines aktuellen Status ändern:

```js
updateDoneStatus(toDoId) {
  const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
  toDoToUpdate.done = !toDoToUpdate.done
}
```

Wir möchten diese Methode ausführen, wann immer ein `ToDoItem` ein `checkbox-changed`-Ereignis auslöst und dessen `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>` Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Wenn Sie nun ein `ToDoItem` abhaken, sollten Sie sehen, dass sich die Zusammenfassung entsprechend aktualisiert!

![Unsere App, mit einem hinzugefügten Zähler für erledigte Aufgaben. Derzeit lautet sie 3 von 5 erledigten Elementen](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine berechnete Eigenschaft verwendet, um unserer App ein nettes kleines Feature hinzuzufügen. Wir haben jedoch noch größere Themen vor uns – im nächsten Artikel werden wir uns die bedingte Darstellung ansehen und erforschen, wie wir sie nutzen können, um ein Bearbeitungsformular anzuzeigen, wenn wir bestehende Aufgaben bearbeiten möchten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
