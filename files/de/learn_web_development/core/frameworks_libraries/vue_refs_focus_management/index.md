---
title: Vue-Refs und Lebenszyklusmethoden für das Focus-Management
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Der letzte Funktionsaspekt, den wir uns ansehen werden, ist das Focus-Management, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie **Vue-Refs** verwendet werden, um dies zu handhaben — eine erweiterte Funktion, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs zu haben oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente.

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
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen) zu verwenden, benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man das Focus-Management mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem des Focus-Managements

Obwohl wir eine funktionierende Bearbeitungsfunktion haben, bieten wir keine gute Erfahrung für Nicht-Maus-Benutzer. Insbesondere entfernen wir, wenn ein Benutzer die "Bearbeiten"-Schaltfläche aktiviert, die "Bearbeiten"-Schaltfläche aus dem DOM, verschieben aber den Benutzerfokus nirgendwo hin, sodass es effektiv verschwindet. Dies kann für Tastatur- und Benutzer ohne visuelle Unterstützung verwirrend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusumriss auf der Eingabe für das Hinzufügen neuer To-Do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte auf die "Hinzufügen"-Taste wandern.

3. Drücken Sie es nochmal, und es wird auf das erste Kontrollkästchen sein. Noch einmal, und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche liegen.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche, indem Sie <kbd>Eingabetaste</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusumriss wird verschwunden sein.

Dieses Verhalten kann verwirrend sein. Außerdem variiert das Verhalten, wenn Sie erneut <kbd>Tab</kbd> drücken, je nachdem, welchen Browser Sie verwenden. Ebenso verschwindet der Fokus erneut, wenn Sie Ihre Bearbeitung speichern oder abbrechen, wenn Sie zur Ansicht ohne Bearbeitung zurückkehren.

Um den Benutzern ein besseres Erlebnis zu bieten, fügen wir Code hinzu, um den Fokus zu steuern, damit er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Bearbeiten"-Taste setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein bisschen mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Darstellung aller Knoten in unserer App im Speicher hält. Alle Aktualisierungen werden zuerst an den im Speicher befindlichen Knoten durchgeführt, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Batch synchronisiert.

Da das Lesen und Schreiben von tatsächlichen DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente häufig nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Stattdessen können Sie, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (z. B. bei der Fokuseinstellung), [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie Refs auch verwenden, um direkt auf die interne Struktur einer untergeordneten Komponente zuzugreifen, jedoch sollte dies mit Vorsicht geschehen, da es den Code schwerer nachvollziehbar und verständlich machen kann.

Um ein Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem String-Identifikator als Wert des Attributs hinzu. Es ist wichtig, dass ein Ref innerhalb einer Komponente eindeutig ist. Kein Refs sollte zur gleichen Zeit auf zwei Elemente rendern.

### Hinzufügen eines Refs zu unserer App

Setzen wir also ein Ref an unsere "Bearbeiten"-Schaltfläche in `ToDoItem.vue`. Aktualisieren Sie es so:

```vue
<button
  type="button"
  class="btn"
  ref="editButton"
  @click="toggleToItemEditForm">
  Edit
  <span class="visually-hidden">\{{label}}</span>
</button>
```

Um den Wert zuzugreifen, der mit unserem Ref assoziiert ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert des Refs zu sehen, wenn wir unsere "Bearbeiten"-Schaltfläche klicken, fügen Sie ein `console.log()` zu unserer `toggleToItemEditForm()`-Methode hinzu, so:

```js
export default {
  // …
  methods: {
    // …
    toggleToItemEditForm() {
      console.log(this.$refs.editButton);
      this.isEditing = true;
    },
    // …
  },
  // …
};
```

Wenn Sie an diesem Punkt die "Bearbeiten"-Schaltfläche aktivieren, sollten Sie sehen, dass ein HTML-`<button>`-Element in Ihrer Konsole referenziert wird.

## Vue's $nextTick() Methode

Wir möchten den Fokus auf die "Bearbeiten"-Taste setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den `itemEdited()`- und `editCancelled()`-Methoden der `ToDoItem`-Komponente handhaben.

Erstellen Sie der Einfachheit halber eine neue Methode, die keine Argumente entgegennimmt, genannt `focusOnEditButton()`. Weisen Sie darin Ihr `Ref` einer Variablen zu und rufen Sie die `focus()`-Methode auf dem Ref auf.

```js
export default {
  // …
  methods: {
    // …
    focusOnEditButton() {
      const editButtonRef = this.$refs.editButton;
      editButtonRef.focus();
    },
    // …
  },
  // …
};
```

Fügen Sie dann am Ende der `itemEdited()`- und `editCancelled()`-Methoden einen Aufruf zu `this.focusOnEditButton()` hinzu:

```js
export default {
  // …
  methods: {
    // …
    itemEdited(newItemName) {
      this.$emit("item-edited", newItemName);
      this.isEditing = false;
      this.focusOnEditButton();
    },
    editCancelled() {
      this.isEditing = false;
      this.focusOnEditButton();
    },
    // …
  },
  // …
};
```

Versuchen Sie, ein To-Do-Element über Ihre Tastatur zu bearbeiten und dann zu speichern/zurückzunehmen. Sie werden bemerken, dass der Fokus nicht gesetzt wird, sodass wir noch ein Problem zu lösen haben. Wenn Sie Ihre Konsole öffnen, wird ein Fehler angezeigt, der in etwa lautet: _"can't access property "focus", editButtonRef is undefined"_ erscheint. Das wirkt komisch. Ihr Button-Ref war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt nicht mehr. Was geht hier vor?

Nun, bedenken Sie, dass wir den Abschnitt der Komponente, in dem sich die "Bearbeiten"-Schaltfläche befindet, nicht mehr rendern, wenn wir `isEditing` auf `true` setzen. Das bedeutet, dass es kein Element gibt, an das das Ref gebunden werden kann, sodass es `undefined` wird.

Sie denken jetzt möglicherweise "Moment mal, wir setzen `isEditing=false`, bevor wir versuchen, auf das `Ref` zuzugreifen, also sollte das `v-if` nun die Taste anzeigen, oder?" Das ist der Punkt, an dem das virtuelle DOM ins Spiel kommt. Da Vue versucht zu optimieren und Änderungen zu organisieren, aktualisiert es das DOM nicht sofort, wenn wir `isEditing` auf `false` setzen. Daher, wenn wir `focusOnEditButton()` aufrufen, wurde die "Bearbeiten"-Taste noch nicht gerendert.

Stattdessen müssen wir warten, bis Vue den nächsten DOM-Aktualisierungszyklus durchläuft. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach dem Aktualisieren des DOMs aufgerufen werden muss, können wir den bestehenden Funktionskörper innerhalb eines `$nextTick()`-Aufrufs umschließen.

```js
export default {
  // …
  methods: {
    // …
    focusOnEditButton() {
      this.$nextTick(() => {
        const editButtonRef = this.$refs.editButton;
        editButtonRef.focus();
      });
    },
    // …
  },
  // …
};
```

Nun, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann über die Tastatur Ihre Änderungen abbrechen oder speichern, sollte der Fokus wieder auf die "Bearbeiten"-Schaltfläche zurückgehen. Erfolg!

## Vue-Lebenszyklusmethoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars legen, wenn die "Bearbeiten"-Schaltfläche angeklickt wird. Da sich unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche befindet, können wir den Fokus nicht einfach im Klick-Event-Handler der "Bearbeiten"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und erneut montieren, wann immer die "Bearbeiten"-Schaltfläche angeklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, bekannt als **Lebenszyklus**. Dieser Lebenszyklus reicht von ganz am Anfang, bevor Elemente _erstellt_ und dem VDOM hinzugefügt werden (_montiert_), bis zu dem Zeitpunkt, an dem sie aus dem VDOM entfernt werden (_zerstört_).

Vue ermöglicht es Ihnen, Methoden in verschiedenen Phasen dieses Lebenszyklus auszuführen, um sogenannte **Lebenszyklusmethoden** zu nutzen. Dies kann nützlich sein für Dinge wie Datenabruf, wenn Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft geändert hat. Die Liste der Lebenszyklusmethoden ist unten in der Reihenfolge, in der sie ausgelöst werden.

1. `beforeCreate()` — Wird ausgeführt, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Wird ausgeführt, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Dies ist oft der Punkt, an dem Datenabrufe stattfinden.
3. `beforeMount()` — Wird ausgeführt, nachdem Ihr Template kompiliert wurde, aber bevor Ihre Komponente im tatsächlichen DOM gerendert wird.
4. `mounted()` — Wird ausgeführt, nachdem Ihre Komponente im DOM montiert wurde. Hier können `Refs` zugegriffen werden.
5. `beforeUpdate()` — Wird ausgeführt, wann immer sich die Daten in Ihrer Komponente ändern, aber bevor die Änderungen im DOM gerendert werden.
6. `updated()` — Wird ausgeführt, wann immer sich die Daten in Ihrer Komponente geändert haben und nachdem die Änderungen im DOM gerendert wurden.
7. `beforeDestroy()` — Wird ausgeführt, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Wird ausgeführt, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zur Visualisierung, wann diese Hooks passieren](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog geht tiefer auf die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Da wir nun die Lebenszyklusmethoden durchgegangen sind, verwenden wir eine, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente montiert ist.

In `ToDoItemEditForm.vue`, fügen Sie `ref="labelInput"` auf das `<input>`-Element an, wie folgt:

```vue
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als Nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods` eingefügt werden sollte.** Lebenszyklusmethoden sind spezielle Methoden, die für sich stehen, nicht neben den benutzerdefinierten Methoden. Dies sollte keine Eingaben nehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können da wir Zugriff auf `this` benötigen um auf unsere `labelInput`-Ref zuzugreifen.

```js
export default {
  // …
  mounted() {},
  // …
};
```

Innerhalb Ihrer `mounted()`-Methode weisen Sie Ihre `labelInput`-Ref einer Variablen zu und rufen dann die `focus()`-Funktion der Ref auf. Sie müssen `$nextTick()` hier nicht verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
export default {
  // …
  mounted() {
    const labelInputRef = this.$refs.labelInput;
    labelInputRef.focus();
  },
  // …
};
```

Jetzt, wenn Sie die "Bearbeiten"-Schaltfläche mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das `<input>` des Bearbeitungsformulars gelegt werden.

## Umgang mit dem Fokus, wenn To-Do-Elemente gelöscht werden

Es gibt noch einen weiteren Ort, an dem wir das Focus-Management in Betracht ziehen müssen: wenn ein Benutzer ein To-Do löscht. Beim Klicken der "Bearbeiten"-Taste ergibt es Sinn, den Fokus auf das Bearbeitungsfeld zu verschieben, und zurück auf die "Bearbeiten"-Taste, wenn man den Bearbeitungsvorgang abbricht oder speichert.

Anders als beim Bearbeitungsformular haben wir jedoch keinen klaren Ort, an den der Fokus verschoben werden soll, wenn ein Element gelöscht wird. Wir brauchen außerdem eine Möglichkeit, Benutzern von unterstützenden Technologien Informationen zu geben, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift – dem `<h2>` in `App.vue` – und es ist mit unserer Liste der To-Do-Items verbunden. Dies macht es zu einem vernünftigen Ort, um den Fokus hinzubewegen, wenn wir einen Knoten löschen.

Zuerst müssen wir ein Ref zu unserer Listenüberschrift hinzufügen. Wir müssen auch `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```vue
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein sehr mächtiges Werkzeug zur Lösung bestimmter Barrierefreiheitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Übermäßiger Einsatz von `tabindex="-1"` kann Probleme für verschiedene Benutzer verursachen, weshalb es nur genau dort verwendet werden sollte, wo es benötigt wird. Man sollte fast nie `tabindex` > = `0` verwenden, da es Probleme für Benutzer verursachen kann, weil es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmen lässt und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann verwirrend für Benutzer sein, insbesondere für diejenigen, die Bildschirmleser und andere unterstützende Technologien verwenden.

Da wir nun ein `Ref` haben und Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()`, verwenden Sie das `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, müssen Sie sich keine Sorgen um die Verwendung von `$nextTick()` oder Lebenszyklusmethoden machen, um den Fokus darauf zu legen.

```js
export default {
  // …
  methods: {
    // …
    deleteToDo(toDoId) {
      const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
      this.$refs.listSummary.focus();
    },
    // …
  },
  // …
};
```

Nun, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus nach oben auf die Listenüberschrift gesetzt werden. Dies sollte eine vernünftige Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war es also mit dem Focus-Management und unserer App! Herzlichen Glückwunsch, dass Sie alle unsere Vue-Tutorials durchgearbeitet haben. Im nächsten Artikel runden wir die Dinge mit einigen weiteren Ressourcen ab, um Ihr Vue-Wissen weiter zu vertiefen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Für eine live ausgeführte Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
