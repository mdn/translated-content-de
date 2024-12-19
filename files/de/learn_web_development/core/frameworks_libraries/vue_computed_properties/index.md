---
title: Verwendung von Vue-Berechneten Eigenschaften
slug: Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen Aufgaben anzeigt, indem wir eine Funktion von Vue namens "berechnete Eigenschaften" verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Nutzung einiger fortschrittlicherer Funktionen von Vue (wie Einzelfile-Komponenten oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Vue-berechnete Eigenschaften verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwendung von berechneten Eigenschaften

Das Ziel hier ist es, eine Zusammenfassungsanzeige unserer Aufgabenliste hinzuzufügen. Dies kann nützlich für Benutzer sein und gleichzeitig als Beschriftung für unterstützende Technologien dienen. Wenn wir 2 von 5 Aufgaben in unserer Aufgabenliste abgeschlossen haben, könnte unsere Zusammenfassung lauten "2 von 5 Aufgaben abgeschlossen". Obwohl es verlockend sein könnte, so etwas zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

würde dies bei jedem Rendering neu berechnet. Für eine kleine App wie diese spielt das wahrscheinlich keine große Rolle. Bei größeren Apps oder wenn der Ausdruck komplizierter ist, könnte das jedoch ein ernsthaftes Leistungsproblem verursachen.

Eine bessere Lösung ist die Verwendung von Vues [berechneten Eigenschaften](https://vuejs.org/guide/essentials/computed.html). Berechnete Eigenschaften funktionieren ähnlich wie Methoden, diese werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall wird dies nur dann erneut ausgeführt, wenn sich das `ToDoItems` Array ändert.

Um eine berechnete Eigenschaft zu erstellen, müssen wir der Komponentenobjekt eine `computed` Eigenschaft hinzufügen, ähnlich der `methods` Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie den folgenden Code zu Ihrem `App` Komponentenobjekt hinzu, unterhalb der `methods` Eigenschaft. Die Listenzusammenfassungsmethode wird die Anzahl der abgeschlossenen `ToDoItems` ermitteln und eine Meldung darüber zurückgeben.

```js
computed: {
  listSummary() {
    const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
    return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
  }
}
```

Jetzt können wir `\{{listSummary}}` direkt in unser Template einfügen; wir werden dies innerhalb eines `<h2>` Elements hinzufügen, direkt über unserem `<ul>`. Wir werden auch eine `id` und ein `aria-labelledby` Attribut hinzufügen, um den Inhalt des `<h2>` Elements als Beschriftung für das `<ul>` Element zuzuweisen.

Fügen Sie das beschriebene `<h2>` und aktualisieren Sie das `<ul>` in Ihrem `App` Template wie folgt:

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

Sie sollten nun die Listenzusammenfassung in Ihrer App sehen und die Gesamtanzahl der Elemente wird aktualisiert, wenn Sie weitere Aufgaben hinzufügen! Wenn Sie jedoch einige Aufgaben abhaken und abwählen, werden Sie einen Fehler aufdecken. Derzeit verfolgen wir keine "erledigt"-Daten in irgendeiner Weise, sodass sich die Anzahl der abgeschlossenen Aufgaben nicht ändert.

## Änderungen an "done" verfolgen

Wir können Ereignisse verwenden, um das Aktualisieren der Checkbox zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf einen Button-Druck verlassen, um die Änderung auszulösen, können wir einen `@change` Ereignishandler an jede Checkbox anhängen, anstatt `v-model` zu verwenden.

Aktualisieren Sie das `<input>` Element in `ToDoItem.vue`, damit es so aussieht:

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir nur signalisieren müssen, dass die Checkbox aktiviert wurde, können wir das `$emit()` inline einfügen.

Fügen Sie in `App.vue` eine neue Methode namens `updateDoneStatus()` hinzu, unterhalb Ihrer `addToDo()` Methode. Diese Methode sollte einen Parameter übernehmen: die _id_ des Aufgabenelements. Wir möchten das Element mit der entsprechenden `id` finden und seinen `done` Status auf das Gegenteil seines aktuellen Status ändern:

```js
updateDoneStatus(toDoId) {
  const toDoToUpdate = this.ToDoItems.find((item) => item.id === toDoId)
  toDoToUpdate.done = !toDoToUpdate.done
}
```

Wir wollen diese Methode immer dann ausführen, wenn ein `ToDoItem` ein `checkbox-changed` Ereignis auslöst und übergeben seine `item.id` als Parameter. Aktualisieren Sie Ihren `<to-do-item></to-do-item>` Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Jetzt sollten Sie, wenn Sie ein `ToDoItem` abhaken, sehen, wie die Zusammenfassung entsprechend aktualisiert wird!

![Unsere App, mit einem hinzugefügten Zähler für abgeschlossene Aufgaben. Es steht derzeit: 3 von 5 Aufgaben abgeschlossen](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine berechnete Eigenschaft genutzt, um eine nette kleine Funktion zu unserer App hinzuzufügen. Wir haben jedoch noch größere Aufgaben vor uns – im nächsten Artikel werden wir uns die bedingte Darstellung ansehen und wie wir sie nutzen können, um ein Bearbeitungsformular anzuzeigen, wenn wir vorhandene Aufgaben bearbeiten möchten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
