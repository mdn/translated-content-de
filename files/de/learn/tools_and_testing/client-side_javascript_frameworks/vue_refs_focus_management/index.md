---
title: Vue-Refs und Lifecycle-Methoden zur Fokusverwaltung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir sind fast mit Vue fertig. Der letzte Punkt, den wir betrachten, ist die Fokusverwaltung oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns damit befassen, **Vue-Refs** zu verwenden, um dies zu handhaben — eine erweiterte Funktion, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur eines Kindkomponenten zu haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Kenntnisse
          der <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">Terminal-/Kommandozeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten erstellt, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erlernen, wie Fokusverwaltung mit Vue-Refs gehandhabt wird.</td>
    </tr>
  </tbody>
</table>

## Das Fokusverwaltungsproblem

Obwohl wir eine funktionierende Bearbeitungsfunktion haben, bieten wir keine großartige Erfahrung für Nutzer ohne Maus. Insbesondere, wenn ein Nutzer die "Bearbeiten"-Schaltfläche aktiviert, entfernen wir die "Bearbeiten"-Schaltfläche aus dem DOM, verschieben jedoch den Fokus des Nutzers nicht, sodass dieser quasi verschwindet. Das kann für Tastatur- und nicht-visuelle Nutzer irritierend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusrahmen auf dem Eingabefeld für das Hinzufügen neuer To-Do-Elemente sehen.
2. Drücken Sie <kbd>Tab</kbd> erneut. Der Fokus sollte zur "Hinzufügen"-Schaltfläche wechseln.
3. Drücken Sie erneut, und er wird sich auf die erste Checkbox verschieben. Ein weiteres Mal und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche sein.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche durch Drücken von <kbd>Enter</kbd>. Die Checkbox wird durch unser Bearbeitungselement ersetzt, aber der Fokusrahmen ist verschwunden.

Dieses Verhalten kann irritierend sein. Darüber hinaus variiert, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, je nachdem, welchen Browser Sie verwenden. Ähnlich ist es, wenn Sie Ihre Bearbeitung speichern oder abbrechen, verschwindet der Fokus erneut, während Sie zurück zur Ansicht ohne Bearbeitung wechseln.

Um den Nutzern eine bessere Erfahrung zu bieten, werden wir Code hinzufügen, um den Fokus zu steuern, sodass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten auch den Fokus wieder auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Nutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue nutzt, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Darstellung aller Knoten unserer App im Speicher hält. Alle Aktualisierungen werden zuerst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Stapel synchronisiert.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente oft nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht synchron sind.

Stattdessen, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), können Sie [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen. Dies sollte jedoch mit Vorsicht geschehen, da es den Code schwerer verständlich und nachvollziehbar machen kann.

Um eine Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem String-Identifier für den Wert des Attributs hinzu. Es ist wichtig zu beachten, dass eine Ref innerhalb einer Komponente eindeutig sein muss. Keine zwei Elemente, die gleichzeitig gerendert werden, sollten die gleiche Ref haben.

### Hinzufügen einer Ref zu unserer App

Lassen Sie uns also eine Ref zu unserer "Bearbeiten"-Schaltfläche in `ToDoItem.vue` hinzufügen. Aktualisieren Sie es so:

```html
<button
  type="button"
  class="btn"
  ref="editButton"
  @click="toggleToItemEditForm">
  Edit
  <span class="visually-hidden">\{{label}}</span>
</button>
```

Um auf den Wert zuzugreifen, der mit unserer Ref verknüpft ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert der Ref zu sehen, wenn wir auf unsere "Bearbeiten"-Schaltfläche klicken, fügen Sie `console.log()` zu unserer `toggleToItemEditForm()`-Methode hinzu, wie folgt:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie die "Bearbeiten"-Schaltfläche zu diesem Zeitpunkt aktivieren, sollten Sie ein `<button>` Element in Ihrer Konsole referenziert sehen.

## Vue's $nextTick() Methode

Wir möchten den Fokus auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Nutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente handhaben.

Erstellen Sie der Bequemlichkeit halber eine neue Methode, die keine Argumente nimmt, mit dem Namen `focusOnEditButton()`. Weisen Sie darin Ihre `ref` einer Variablen zu und rufen Sie die `focus()`-Methode auf der Ref auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Fügen Sie als nächstes einen Aufruf von `this.focusOnEditButton()` am Ende der Methoden `itemEdited()` und `editCancelled()` hinzu:

```js
itemEdited(newItemName) {
  this.$emit("item-edited", newItemName);
  this.isEditing = false;
  this.focusOnEditButton();
},
editCancelled() {
  this.isEditing = false;
  this.focusOnEditButton();
},
```

Versuchen Sie, ein To-Do-Element zu bearbeiten und dann zu speichern/abzubrechen über Ihre Tastatur. Ihnen wird auffallen, dass der Fokus nicht gesetzt wird, also haben wir noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, wird ein Fehler angezeigt, ähnlich wie _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam. Ihre Schaltflächenref war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt nicht mehr. Was ist los?

Nun, denken Sie daran, dass wir, wenn wir `isEditing` auf `true` setzen, den Abschnitt der Komponente, der die "Bearbeiten"-Schaltfläche enthält, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das die Ref gebunden werden kann, sodass sie `undefined` wird.

Sie denken jetzt vielleicht, "hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen, sollte also nicht das `v-if` die Schaltfläche jetzt anzeigen?" Hier kommt das virtuelle DOM ins Spiel. Weil Vue versucht zu optimieren und Änderungen zu stapeln, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Also, wenn wir `focusOnEditButton()` aufrufen, wurde die "Bearbeiten"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir warten, bis nach dem nächsten DOM-Update-Zyklus von Vue. Dafür haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach den DOM-Aktualisierungen ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach der DOM-Aktualisierung aufgerufen werden muss, können wir den vorhandenen Funktionskörper innerhalb eines `$nextTick()`-Aufrufs einfügen.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Jetzt, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus wieder auf die "Bearbeiten"-Schaltfläche gesetzt werden. Erfolg!

## Vue-Lifecycle-Methoden

Als nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars setzen, wenn die "Bearbeiten"-Schaltfläche angeklickt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche ist, können wir den Fokus nicht einfach innerhalb des Klick-Ereignis-Handlers der "Bearbeiten"-Schaltfläche setzen. Stattdessen können wir nutzen, dass wir unsere `ToDoItemEditForm`-Komponente immer entfernen und neu mounten, wenn die "Bearbeiten"-Schaltfläche angeklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, bekannt als ein **Lifecycle**. Dieser Lifecycle erstreckt sich von der Zeit, bevor Elemente _erstellt_ und dem VDOM hinzugefügt wurden (_mounted_), bis sie aus dem VDOM entfernt werden (_destroyed_).

Vue ermöglicht es Ihnen, Methoden in verschiedenen Stadien dieses Lifecycles mithilfe von **Lifecycle-Methoden** auszuführen. Dies kann nützlich sein für Dinge wie Datenabfragen, bei denen Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft geändert hat. Die Liste der Lifecycle-Methoden folgt unten, in der Reihenfolge, in der sie ausgelöst werden.

1. `beforeCreate()` — Wird ausgeführt, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Wird ausgeführt, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wurde. Hier erfolgt häufig die Datenabfrage.
3. `beforeMount()` — Wird ausgeführt, nachdem Ihre Vorlage kompiliert wurde, aber bevor Ihre Komponente im tatsächlichen DOM gerendert wurde.
4. `mounted()` — Wird ausgeführt, nachdem Ihre Komponente im DOM gemountet wurde. Hier kann auf `refs` zugegriffen werden.
5. `beforeUpdate()` — Wird ausgeführt, wann immer Daten in Ihrer Komponente sich ändern, aber bevor die Änderungen im DOM gerendert werden.
6. `updated()` — Wird ausgeführt, wann immer Daten in Ihrer Komponente geändert wurden und nachdem die Änderungen im DOM gerendert wurden.
7. `beforeDestroy()` — Wird ausgeführt, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Wird ausgeführt, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm, um zu veranschaulichen, wann diese Hooks stattfinden](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog behandelt die Lifecycle-Methoden ausführlicher](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Da wir nun die Lifecycle-Methoden durchgegangen sind, lassen Sie uns eine verwenden, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente gemountet wird.

In `ToDoItemEditForm.vue` fügen Sie `ref="labelInput"` dem `<input>`-Element hinzu, wie folgt:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass diese nicht innerhalb der `methods`-Eigenschaft gesetzt werden soll, sondern auf der gleichen Hierarchie-Ebene wie `props`, `data()` und `methods`.** Lifecycle-Methoden sind spezielle Methoden, die für sich alleine stehen, nicht neben den benutzerdefinierten Methoden. Diese sollte keine Eingaben annehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unsere `labelInput`-Ref zuzugreifen.

```js
mounted() {

}
```

Innerhalb Ihrer `mounted()`-Methode weisen Sie Ihrer `labelInput`-Ref eine Variable zu und rufen dann die `focus()`-Funktion der Ref auf. Sie müssen `$nextTick()` hier nicht verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Wenn Sie nun die "Bearbeiten"-Schaltfläche mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Umgang mit dem Fokus beim Löschen von To-Do-Elementen

Es gibt noch einen Ort, an dem wir die Fokusverwaltung in Betracht ziehen müssen: wenn ein Nutzer ein To-Do löscht. Beim Klicken auf die "Bearbeiten"-Schaltfläche ist es sinnvoll, den Fokus auf das Bearbeitungs-Textfeld zu verschieben, und zurück auf die "Bearbeiten"-Schaltfläche, wenn man vom Bearbeitungsbildschirm aus abbricht oder speichert.

Im Gegensatz zum Bearbeitungsformular haben wir jedoch keinen klaren Ort, an den der Fokus verschoben werden kann, wenn ein Element gelöscht wird. Wir benötigen ebenfalls eine Möglichkeit, den Nutzern von unterstützenden Technologien Informationen bereitzustellen, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — dem `<h2>` in `App.vue` — und sie ist mit unserer Liste von To-Do-Elementen verknüpft. Dies macht es zu einem vernünftigen Ort, um den Fokus hin zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir eine Ref zu unserer Listenüberschrift hinzufügen. Wir müssen ebenfalls ein `tabindex="-1"` hinzufügen — dadurch wird das Element programmatisch fokussierbar gemacht (d.h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

In `App.vue` aktualisieren Sie Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein sehr mächtiges Werkzeug zur Bewältigung bestimmter Barrierefreiheitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Ein übermäßiger Gebrauch von `tabindex="-1"` kann Probleme für alle Arten von Nutzern verursachen, daher verwenden Sie es nur genau dort, wo Sie es wirklich benötigen. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den Flow des DOMs und die Tab-Reihenfolge nicht übereinstimmen lassen kann und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann verwirrend für Nutzer sein, besonders für diejenigen, die Bildschirmlesegeräte und andere unterstützende Technologien verwenden.

Da wir jetzt eine `ref` haben und den Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()` verwenden Sie die `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, müssen Sie sich keine Sorgen machen, `$nextTick()` oder Lifecycle-Methoden zu verwenden, um es zu fokussieren.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Wenn Sie jetzt ein Element aus Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verschoben werden. Dies sollte eine vernünftige Fokuserfahrung für all unsere Nutzer bieten.

## Zusammenfassung

Das war es also zur Fokusverwaltung und für unsere App! Herzlichen Glückwunsch, dass Sie alle unsere Vue-Tutorials durchgearbeitet haben. Im nächsten Artikel werden wir einige zusätzliche Ressourcen bereitstellen, um Ihr Vue-Lernen weiter voranzutreiben.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
