---
title: Vue-Refs und Lifecycle-Methoden für das Fokusmanagement
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir sind fast fertig mit Vue. Der letzte Punkt, den wir uns ansehen wollen, ist das Fokusmanagement, also wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns **Vue-Refs** ansehen, um dies zu handhaben — eine fortgeschrittene Funktion, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs zu haben, oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man das Fokusmanagement mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Fokusmanagement-Problem

Während wir über eine funktionale Bearbeitungsfunktion verfügen, bietet diese keine großartige Erfahrung für Benutzer ohne Maus. Konkret bedeutet dies, dass, wenn ein Benutzer die "Edit"-Schaltfläche aktiviert, wir die "Edit"-Schaltfläche aus dem DOM entfernen, aber den Fokus des Benutzers nirgendwo hin verschieben, sodass sie im Grunde genommen einfach verschwindet. Dies kann für Tastatur- und Nicht-Seh-User verwirrend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusrahmen auf dem Eingabefeld für neue To-do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte zur "Add"-Schaltfläche wechseln.

3. Drücken Sie erneut, und der Fokus wird auf das erste Kontrollkästchen sein. Noch einmal, und der Fokus sollte auf der ersten "Edit"-Schaltfläche sein.
4. Aktivieren Sie die "Edit"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusrahmen verschwindet.

Dieses Verhalten kann irritierend sein. Darüber hinaus variiert das, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, je nach Browser, den Sie verwenden. Wenn Sie Ihre Bearbeitung speichern oder abbrechen, verschwindet der Fokus ebenfalls, da Sie wieder zur Nicht-Bearbeitungsansicht wechseln.

Um den Benutzern ein besseres Erlebnis zu bieten, fügen wir Code hinzu, um den Fokus zu steuern, sodass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Edit"-Schaltfläche lenken, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Darstellung aller Knoten unserer App im Speicher behält. Alle Updates werden zuerst an den im Speicher befindlichen Knoten durchgeführt, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Batch synchronisiert.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft teurer ist als das bei virtuellen Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente oft nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Wenn Sie stattdessen auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), können Sie [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen. Dies sollte jedoch mit Vorsicht getan werden, da es den Code schwerer verständlich machen kann.

Um eine Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem eindeutigen String-Identifier als Wert des Attributs hinzu. Es ist wichtig zu beachten, dass eine Ref innerhalb einer Komponente eindeutig sein muss. Keine zwei zu derselben Zeit gerenderten Elemente sollten dieselbe Ref haben.

### Einen Ref zu unserer App hinzufügen

Also, lassen Sie uns eine Ref zu unserer "Edit"-Schaltfläche in `ToDoItem.vue` anhängen. Aktualisieren Sie sie wie folgt:

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

Um den Wert zuzugreifen, der unserer Ref zugeordnet ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert der Ref zu sehen, wenn wir unsere "Edit"-Schaltfläche klicken, fügen wir unserer Methode `toggleToItemEditForm()` ein `console.log()` hinzu, wie folgt:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie jetzt die "Edit"-Schaltfläche aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole referenziert sehen.

## Vue's $nextTick() Methode

Wir möchten den Fokus auf die "Edit"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente handhaben.

Für den Komfort erstellen wir eine neue Methode, die keine Argumente annimmt, namens `focusOnEditButton()`. Darin weisen wir unsere Ref einer Variablen zu und rufen dann die `focus()`-Methode auf der Ref auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Fügen Sie als nächstes einen Aufruf zu `this.focusOnEditButton()` am Ende der `itemEdited()`- und `editCancelled()`-Methoden hinzu:

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

Versuchen Sie, ein To-do-Element zu bearbeiten und dann zu speichern/abbrechen über Ihre Tastatur. Sie werden bemerken, dass der Fokus nicht gesetzt wird, sodass wir noch ein Problem haben, das wir lösen müssen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler angezeigt, ähnlich wie _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam zu sein. Ihre Schaltflächen-Ref war definiert, als Sie die "Edit"-Schaltfläche aktiviert haben, aber jetzt ist sie es nicht mehr. Was ist los?

Nun, denken Sie daran, dass wenn wir `isEditing` auf `true` setzen, wir den Abschnitt der Komponente, der die "Edit"-Schaltfläche beheimatet, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das die Ref gebunden werden kann, also wird es `undefined`.

Vielleicht denken Sie jetzt „Hey, wir setzen doch `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen, also sollte das `v-if` nun die Schaltfläche anzeigen?“ Dies ist, wo das virtuelle DOM ins Spiel kommt. Da Vue versucht, Änderungen zu optimieren und in Batches zu kombinieren, wird es das DOM nicht sofort aktualisieren, wenn wir `isEditing` auf `false` setzen. Also, wenn wir `focusOnEditButton()` aufrufen, ist die "Edit"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir bis nach dem nächsten DOM-Aktualisierungszyklus von Vue warten. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode nimmt eine Callback-Funktion entgegen, die dann nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach der DOM-Aktualisierung aufgerufen werden muss, können wir den bestehenden Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Jetzt sollte, wenn Sie die "Edit"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, der Fokus zur "Edit"-Schaltfläche zurückgegeben werden. Erfolg!

## Vue Lifecycle-Methoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars setzen, wenn die "Edit"-Schaltfläche geklickt wird. Da sich unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Edit"-Schaltfläche befindet, können wir den Fokus nicht einfach innerhalb des Klickereignis-Handlers der "Edit"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und wieder montieren, wann immer die "Edit"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lifecycle** bekannt sind. Dieser Lifecycle reicht von bevor die Elemente _erstellt_ und dem VDOM hinzugefügt werden (_mounted_), bis sie vom VDOM entfernt werden (_destroyed_).

Vue ermöglicht es Ihnen, Methoden in verschiedenen Stadien dieses Lifecycles auszuführen, indem Sie **Lifecycle-Methoden** verwenden. Dies kann für Dinge wie das Abrufen von Daten nützlich sein, wenn Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft ändert. Die Liste der Lifecycle-Methoden ist unten aufgeführt, in der Reihenfolge, in der sie ausgeführt werden.

1. `beforeCreate()` — Läuft bevor die Instanz Ihrer Komponente erstellt wird. Daten und Events sind noch nicht verfügbar.
2. `created()` — Läuft nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Dies ist oft, wo Datenabrufe stattfinden.
3. `beforeMount()` — Läuft nachdem Ihre Vorlage kompiliert wurde, aber bevor Ihre Komponente im tatsächlichen DOM gerendert wird.
4. `mounted()` — Läuft nachdem Ihre Komponente im DOM montiert wurde. Sie können hier auf `refs` zugreifen.
5. `beforeUpdate()` — Läuft wann immer Daten in Ihrer Komponente ändern, aber bevor die Änderungen im DOM gerendert werden.
6. `updated()` — Läuft wann immer Daten in Ihrer Komponente geändert wurden und nachdem die Änderungen im DOM gerendert wurden.
7. `beforeDestroy()` — Läuft bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Läuft nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingeschlossen sind. Läuft nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation stellt ein [schönes Diagramm zur Verfügung, um zu visualisieren, wann diese Hooks passieren](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [Digital Ocean Community Blog geht tiefer auf die Lifecycle-Methoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Jetzt, da wir die Lifecycle-Methoden durchgegangen sind, verwenden wir eine, um den Fokus auszulösen, wenn unsere `ToDoItemEditForm`-Komponente montiert ist.

In `ToDoItemEditForm.vue`, fügen Sie `ref="labelInput"` zum `<input>`-Element hinzu, wie folgt:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft hinzugefügt werden sollte, sondern auf der gleichen Hierarchieebene wie `props`, `data()` und `methods`**. Lifecycle-Methoden sind spezielle Methoden, die für sich alleine stehen, nicht neben den benutzerdefinierten Methoden. Diese sollte keine Eingaben erhalten. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unseren `labelInput`-Ref zuzugreifen.

```js
mounted() {

}
```

Innerhalb Ihrer `mounted()`-Methode weisen Sie den `labelInput`-Ref einer Variablen zu und rufen dann die `focus()`-Funktion der Ref auf. Sie müssen hier `$nextTick()` nicht verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Jetzt sollte, wenn Sie die "Edit"-Schaltfläche mit Ihrer Tastatur aktivieren, der Fokus sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Fokusmanagement beim Löschen von To-do-Elementen

Es gibt einen weiteren Punkt, den wir in Bezug auf das Fokusmanagement berücksichtigen müssen: wenn ein Benutzer ein To-do-Element löscht. Beim Klicken auf die "Edit"-Schaltfläche erscheint es sinnvoll, den Fokus auf das Textfeld zur Namenbearbeitung zu verschieben und zurück zur "Edit"-Schaltfläche zu wechseln, wenn die Bearbeitung vom Bearbeitungsbildschirm aus abgebrochen oder gespeichert wird.

Beim Bearbeitungsformular haben wir jedoch keinen klaren Ort, an dem der Fokus nach dem Löschen eines Elements hingelenkt werden soll. Wir müssen auch eine Möglichkeit für Hilfstechnologie-Nutzer bieten, die bestätigt, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — dem `<h2>` in `App.vue` — und es ist mit unserer Liste der To-do-Elemente verbunden. Dies macht es zu einem vernünftigen Ort, zu dem der Fokus verschoben werden kann, wenn wir einen Knoten löschen.

Zuerst müssen wir unserer Listenüberschrift eine Ref hinzufügen. Wir müssen dem auch ein `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d. h. es kann per JavaScript fokussiert werden), wenn es standardmäßig nicht so ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein wirklich mächtiges Werkzeug zur Handhabung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Ein übermäßiger Einsatz von `tabindex="-1"` kann für alle möglichen Benutzer Probleme verursachen, deshalb verwenden Sie es nur genau dort, wo Sie es brauchen. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, indem es den DOM-Fluss und die Tab-Reihenfolge nicht mehr übereinstimmen lässt und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann insbesondere für Benutzer verwirrend sein, die Screenreader und andere Hilfstechnologien verwenden.

Nachdem wir eine Ref haben und Browser wissen lassen haben, dass wir die `<h2>`-Element programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()`, verwenden Sie die `listSummary`-Ref, um den Fokus auf die `<h2>` zu setzen. Da die `<h2>` immer in der App gerendert wird, brauchen Sie sich keine Sorgen über die Verwendung von `$nextTick()` oder Lifecycle-Methoden machen, um es zu fokussieren.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Jetzt sollte, wenn Sie ein Element aus Ihrer Liste löschen, der Fokus zur Listenüberschrift nach oben verschoben werden. Dies sollte eine vernünftige Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war's also mit dem Fokusmanagement und unserer App! Herzlichen Glückwunsch, dass Sie sich durch alle unsere Vue-Tutorials gearbeitet haben. Im nächsten Artikel werden wir mit einigen weiteren Ressourcen abschließen, um Ihr Vue-Lernen weiter voranzutreiben.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, können Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository finden. Für eine live laufende Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
