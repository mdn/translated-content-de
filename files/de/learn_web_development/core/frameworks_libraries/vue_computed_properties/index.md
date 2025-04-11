---
title: Verwendung von Vue Computed Properties
slug: Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel fügen wir einen Zähler hinzu, der die Anzahl der abgeschlossenen To-Do-Elemente anzeigt, indem wir eine Funktion von Vue namens Computed Properties verwenden. Diese funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          sowie Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/der Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Vue Computed Properties verwendet.</td>
    </tr>
  </tbody>
</table>

## Verwendung von Computed Properties

Das Ziel hier ist, eine Zusammenfassungsanzahl für unsere To-Do-Liste hinzuzufügen. Dies kann für Nutzer nützlich sein und dient gleichzeitig als Etikett für unterstützende Technologien. Wenn wir 2 von 5 Elementen in unserer To-Do-Liste abgeschlossen haben, könnte unsere Zusammenfassung "2 von 5 Elemente abgeschlossen" lauten. Während es verlockend sein könnte, so etwas wie dies zu tun:

```vue
<h2>
  \{{ToDoItems.filter(item =&gt; item.done).length}} out of
  \{{ToDoItems.length}} items completed
</h2>
```

würde es bei jedem Rendern neu berechnet werden. Für eine so kleine App wie diese ist das wahrscheinlich nicht so wichtig. Bei größeren Apps oder wenn der Ausdruck komplizierter ist, könnte dies ein ernstes Performanceproblem verursachen.

Eine bessere Lösung ist die Verwendung von Vues [Computed Properties](https://vuejs.org/guide/essentials/computed.html). Computed Properties funktionieren ähnlich wie Methoden, werden jedoch nur dann erneut ausgeführt, wenn sich eine ihrer Abhängigkeiten ändert. In unserem Fall würde dies nur dann erneut ausgeführt werden, wenn sich das `ToDoItems` Array ändert.

Um eine Computed Property zu erstellen, müssen wir der Objekt-Komponente eine `computed` Eigenschaft hinzufügen, ähnlich wie die `methods` Eigenschaft, die wir zuvor verwendet haben.

## Hinzufügen eines Zusammenfassungszählers

Fügen Sie den folgenden Code zu Ihrem `App` Komponentenobjekt hinzu, unterhalb der `methods` Eigenschaft. Die Listenzusammenfassungsmethode wird die Anzahl der abgeschlossenen `ToDoItems` ermitteln und einen String zurückgeben, der dies meldet.

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

Nun können wir `\{{listSummary}}` direkt in unser Template einfügen; wir werden dies innerhalb eines `<h2>` Elements hinzufügen, direkt über unserer `<ul>`. Wir werden auch ein `id` und ein `aria-labelledby` Attribut hinzufügen, um den Inhalt des `<h2>` als Etikett für das `<ul>` Element zuzuweisen.

Fügen Sie das beschriebene `<h2>` hinzu und aktualisieren Sie die `<ul>` in Ihrem `App` Template wie folgt:

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

Sie sollten jetzt die Zusammenfassung der Liste in Ihrer App sehen und die Gesamtanzahl der Elemente aktualisiert, wenn Sie weitere To-Do-Elemente hinzufügen! Wenn Sie jedoch versuchen, einige Elemente abzuhaken und wieder abzuhaken, enthüllt sich ein Fehler. Derzeit verfolgen wir tatsächlich die "Erledigt"-Daten in keiner Weise, sodass sich die Anzahl der abgeschlossenen Elemente nicht ändert.

## Verfolgung von Änderungen zu „Erledigt“

Wir können Ereignisse verwenden, um die Aktualisierung des Kontrollkästchens zu erfassen und unsere Liste entsprechend zu verwalten.

Da wir uns nicht auf einen Tastendruck verlassen, um die Änderung auszulösen, können wir anstelle der Verwendung von `v-model` einen `@change` Ereignishandler an jedes Kontrollkästchen anhängen.

Aktualisieren Sie das `<input>` Element in `ToDoItem.vue`, um so auszusehen:

```vue
<input
  type="checkbox"
  class="checkbox"
  :id="id"
  :checked="isDone"
  @change="$emit('checkbox-changed')" />
```

Da wir lediglich signalisieren müssen, dass das Kontrollkästchen aktiviert wurde, können wir das `$emit()` inline einfügen.

In `App.vue` fügen Sie eine neue Methode namens `updateDoneStatus()` hinzu, unterhalb Ihrer `addToDo()` Methode. Diese Methode sollte einen Parameter übernehmen: die _id_ des To-Do-Elements. Wir möchten das Element mit der passenden `id` finden und dessen `erledigt` Status auf das Gegenteil seines aktuellen Status ändern:

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

Diese Methode soll immer dann ausgeführt werden, wenn ein `ToDoItem` ein `checkbox-changed` Ereignis auslöst, und dessen `item.id` als Parameter übergeben. Aktualisieren Sie Ihren `<to-do-item></to-do-item>` Aufruf wie folgt:

```vue
<to-do-item
  :label="item.label"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updateDoneStatus(item.id)">
</to-do-item>
```

Jetzt sollten Sie beim Abhaken eines `ToDoItem` sehen, dass die Zusammenfassung entsprechend aktualisiert wird!

![Unsere App, mit einem hinzugefügten Zähler für abgeschlossene To-Dos. Derzeit lautet er 3 von 5 abgeschlossenen Elementen](todo-counter.png)

## Zusammenfassung

In diesem Artikel haben wir eine Computed Property verwendet, um ein nettes kleines Feature zu unserer App hinzuzufügen. Wir haben jedoch noch größere Aufgaben zu bewältigen — im nächsten Artikel werden wir uns die bedingte Darstellung ansehen und wie wir sie verwenden können, um ein Bearbeitungsformular anzuzeigen, wenn wir bestehende To-Do-Elemente bearbeiten möchten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_styling","Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
