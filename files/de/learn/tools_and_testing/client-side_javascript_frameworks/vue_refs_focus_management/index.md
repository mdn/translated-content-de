---
title: Vue refs und Lebenszyklusmethoden für die Fokusverwaltung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir sind fast fertig mit Vue. Der letzte Funktionsaspekt, den wir uns ansehen werden, ist die Fokusverwaltung, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man **Vue refs** dafür verwendet — ein fortgeschrittenes Feature, das Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOM erlaubt, oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kinderkomponente bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Wissen über den
          <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man die Fokusverwaltung mit Vue refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem der Fokusverwaltung

Zwar haben wir eine funktionierende Bearbeitungsfunktionalität, aber wir bieten keine großartige Benutzererfahrung für Nicht-Maus-Nutzer. Konkret bedeutet das, dass, wenn ein Benutzer die "Editieren"-Schaltfläche aktiviert, wir die "Editieren"-Schaltfläche aus dem DOM entfernen, aber den Fokus des Benutzers nirgendwo hinbewegen, sodass sie im Grunde verschwindet. Dies kann für Tastatur- und nicht-visuelle Nutzer verwirrend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie <kbd>Tab</kbd>. Sie sollten eine Fokusmarkierung auf dem Eingabefeld zur Hinzufügung neuer Aufgaben sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte sich zur "Hinzufügen"-Schaltfläche bewegen.

3. Drücken Sie es noch einmal, und der Fokus sollte auf dem ersten Kontrollkästchen liegen. Noch einmal drücken, und der Fokus sollte auf der ersten "Editieren"-Schaltfläche sein.
4. Aktivieren Sie die "Editieren"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber die Fokusmarkierung wird verschwunden sein.

Dieses Verhalten kann verstörend sein. Außerdem variiert das Verhalten, wenn Sie erneut <kbd>Tab</kbd> drücken, je nachdem, welchen Browser Sie verwenden. Ebenso verschwindet der Fokus, wenn Sie Ihre Bearbeitung speichern oder abbrechen, da Sie zum Nicht-Bearbeitungs-Ansicht zurückkehren.

Um den Benutzern ein besseres Erlebnis zu bieten, fügen wir Code hinzu, um den Fokus so zu steuern, dass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Editieren"-Schaltfläche setzen, wenn ein Benutzer die Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Repräsentation aller Knoten unserer App im Speicher hält. Alle Updates werden zuerst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Rutsch synchronisiert.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft aufwändiger ist als bei virtuellen Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Stattdessen, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), können Sie [Vue refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch refs verwenden, um direkt auf die interne Struktur einer Kinderkomponente zuzugreifen, jedoch sollte dies mit Vorsicht erfolgen, da es den Code schwerer verständlich machen kann.

Um einen ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem String-Identifikator als Attributwert hinzu. Es ist wichtig zu beachten, dass ein ref innerhalb einer Komponente einzigartig sein muss. Es sollten keine zwei Elemente, die gleichzeitig gerendert werden, denselben ref haben.

### Hinzufügen eines refs zu unserer App

Fügen wir also einen ref zu unserer "Editieren"-Schaltfläche in `ToDoItem.vue` hinzu. Aktualisieren Sie es wie folgt:

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

Um den Wert, der mit unserem ref verbunden ist, zuzugreifen, verwenden wir die `$refs`-Eigenschaft auf unserer Komponenteninstanz. Um den Wert des refs zu sehen, wenn wir unsere "Editieren"-Schaltfläche klicken, fügen wir eine `console.log()` zu unserer `toggleToItemEditForm()`-Methode hinzu, wie folgt:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie zum jetzigen Zeitpunkt die "Editieren"-Schaltfläche aktivieren, sollte ein HTML `<button>`-Element in Ihrer Konsole referenziert sein.

## Vue's $nextTick() Methode

Wir möchten den Fokus auf die "Editieren"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente handhaben.

Erstellen Sie der Einfachheit halber eine neue Methode, die keine Argumente annimmt, namens `focusOnEditButton()`. Innendrin weisen Sie Ihrem `ref` einer Variablen zu und rufen dann die `focus()`-Methode auf dem ref auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Fügen Sie als Nächstes einen Aufruf zu `this.focusOnEditButton()` am Ende der Methoden `itemEdited()` und `editCancelled()` hinzu:

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

Versuchen Sie, ein To-do-Element zu bearbeiten und dann zu speichern/zu stornieren, und zwar über Ihre Tastatur. Sie werden feststellen, dass der Fokus nicht gesetzt wird, sodass wir immer noch ein Problem zu lösen haben. Wenn Sie Ihre Konsole öffnen, sehen Sie eine Fehlermeldung wie _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam. Ihr Button-Ref war definiert, als Sie die "Editieren"-Schaltfläche aktiviert haben, ist es jetzt aber nicht mehr. Was ist da los?

Nun, denken Sie daran, dass wenn wir `isEditing` auf `true` ändern, wir den Abschnitt der Komponente mit der "Editieren"-Schaltfläche nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das der ref gebunden werden kann, und es wird `undefined`.

Vielleicht denken Sie jetzt "Hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf das `ref` zuzugreifen, also sollte jetzt die `v-if` die Schaltfläche anzeigen, oder?" An dieser Stelle kommt das virtuelle DOM ins Spiel. Da Vue versucht, Änderungen zu optimieren und zu stapeln, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Also wenn wir `focusOnEditButton()` aufrufen, ist die "Editieren"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir bis nach dem nächsten DOM-Update-Zyklus warten. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode nimmt eine Callback-Funktion an, die dann nach den DOM-Updates ausgeführt wird.

Da die Methode `focusOnEditButton()` nach dem Update des DOM aufgerufen werden muss, können wir den bestehenden Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Jetzt, wenn Sie die "Editieren"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus auf die "Editieren"-Schaltfläche zurückkehren. Erfolg!

## Vue Lebenszyklusmethoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn die "Editieren"-Schaltfläche geklickt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Editieren"-Schaltfläche ist, können wir den Fokus nicht einfach im Klick-Event-Handler der "Editieren"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und wieder montieren, wenn die "Editieren"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lebenszyklus** bekannt sind. Dieser Lebenszyklus spannt sich von der Zeit vor der _Erstellung_ und dem Hinzufügen der Elemente zum VDOM (_montiert_), bis zur Entfernung aus dem VDOM (_zerstört_).

Vue ermöglicht es Ihnen, Methoden in verschiedenen Phasen dieses Lebenszyklus mit **Lebenszyklusmethoden** auszuführen. Dies kann nützlich für Dinge wie das Abrufen von Daten sein, bei denen Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente rendert oder nachdem eine Eigenschaft sich ändert. Die Liste der Lebenszyklusmethoden ist unten in der Reihenfolge aufgeführt, in der sie ausgelöst werden.

1. `beforeCreate()` — Läuft bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Läuft nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente zum VDOM hinzugefügt wird. Hier erfolgt oft das Datenabrufen.
3. `beforeMount()` — Läuft nachdem Ihre Vorlage kompiliert wurde, aber bevor Ihre Komponente zum tatsächlichen DOM gerendert wird.
4. `mounted()` — Läuft nachdem Ihre Komponente zum DOM montiert wurde. Hier kann auf `refs` zugegriffen werden.
5. `beforeUpdate()` — Wird jedes Mal ausgeführt, wenn Daten in Ihrer Komponente geändert werden, aber bevor die Änderungen zum DOM gerendert werden.
6. `updated()` — Wird jedes Mal ausgeführt, wenn Daten in Ihrer Komponente geändert wurden und nachdem die Änderungen zum DOM gerendert wurden.
7. `beforeDestroy()` — Läuft bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten, die in einem speziellen `keep-alive`-Tag umwickelt sind, verwendet. Läuft, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten, die in einem speziellen `keep-alive`-Tag umwickelt sind, verwendet. Läuft, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zur Veranschaulichung, wann diese Hooks geschehen](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [Digital Ocean Community Blog taucht tiefer in die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Jetzt, da wir die Lebenszyklusmethoden durchgegangen sind, lassen Sie uns eine verwenden, um den Fokus zu triggern, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

In `ToDoItemEditForm.vue` fügen Sie `ref="labelInput"` zum `<input>`-Element hinzu, wie folgt:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als Nächstes eine `mounted()`-Eigenschaft direkt in Ihr Komponentenobjekt ein — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft platziert werden sollte, sondern auf gleicher Hierarchieebene wie `props`, `data()` und `methods`.** Lebenszyklusmethoden sind spezielle Methoden, die für sich alleine stehen, nicht nebend den benutzerdefinierten Methoden. Diese sollte keine Eingaben annehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unser `labelInput`-ref zuzugreifen.

```js
mounted() {

}
```

Innerhalb Ihrer `mounted()`-Methode, weisen Sie Ihr `labelInput`-ref einer Variablen zu und rufen dann die `focus()`-Funktion des ref auf. Sie müssen `$nextTick()` hier nicht verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Jetzt, wenn Sie die "Editieren"-Schaltfläche mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Umgang mit dem Fokus beim Löschen von To-do-Elementen

Es gibt noch einen weiteren Ort, an dem wir die Fokusverwaltung berücksichtigen müssen: Wenn ein Benutzer ein To-do löscht. Beim Klicken auf den "Editieren"-Knopf ergibt es Sinn, den Fokus auf das Eingabefeld zur Bearbeitung des Namens zu verschieben und zurück zur "Editieren"-Schaltfläche, wenn die Bearbeitung von der Bearbeitungsansicht aus abgebrochen oder gespeichert wird.

Jedoch, im Gegensatz zum Bearbeitungsformular, haben wir keinen klaren Ort, an den der Fokus verschoben werden soll, wenn ein Element gelöscht wird. Wir brauchen auch eine Möglichkeit, den Benutzern von unterstützenden Technologien Informationen bereitzustellen, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — dem `<h2>` in `App.vue` — und es ist mit unserer Liste der Aufgaben verbunden. Dies macht es zu einem vernünftigen Ort, um den Fokus zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir einen ref zu unserer Listenüberschrift hinzufügen. Wir müssen auch `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), während es standardmäßig nicht fokussierbar ist.

Innerhalb von `App.vue`, aktualisieren Sie Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Note:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein sehr mächtiges Werkzeug zur Behebung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Eine übermäßige Verwendung von `tabindex="-1"` kann Probleme für alle Arten von Benutzern verursachen, daher sollte es nur genau dort verwendet werden, wo Sie es brauchen. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den Ablauf des DOM und die Reihenfolge der Tabulatortaste unpassend machen kann und/oder nicht-interaktive Elemente zur Tabulatordreihenfolge hinzufügt. Dies kann für Benutzer verwirrend sein, besonders für diejenigen, die Bildschirmleser und andere unterstützende Technologien verwenden.

Nun, da wir ein `ref` haben und den Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()`, verwenden Sie das `listSummary`-ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, brauchen Sie sich keine Sorgen über die Verwendung von `$nextTick()` oder Lebenszyklusmethoden zu machen, um es zu fokussieren.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Jetzt, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verschoben werden. Dies sollte eine angemessene Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war's zur Fokusverwaltung und für unsere App! Glückwunsch, dass Sie sich durch alle unsere Vue-Tutorials gearbeitet haben. Im nächsten Artikel werden wir mit einigen weiteren Ressourcen um das Vue-Lernen weiterzuführen abschließen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, können Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository finden. Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
