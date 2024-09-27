---
title: Vue refs und Lifecycle-Methoden für das Fokusmanagement
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir sind fast fertig mit Vue. Der letzte Aspekt, den wir uns ansehen werden, ist das Fokusmanagement, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man **Vue refs** verwendet, um dies zu handhaben — ein fortgeschrittenes Feature, das Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs ermöglicht oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Kommandozeileninterpreter</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die App-Daten verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet, geschrieben. Für die Installation und Nutzung einiger der fortgeschritteneren Features von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man das Fokusmanagement mit Vue refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem des Fokusmanagements

Während wir funktionierende Bearbeitungsfunktionen haben, bieten wir keine großartige Erfahrung für Benutzer ohne Maus. Insbesondere, wenn ein Benutzer die Schaltfläche "Bearbeiten" aktiviert, entfernen wir die "Bearbeiten"-Schaltfläche aus dem DOM, aber wir bewegen den Benutzerfokus nirgendwohin, also verschwindet sie im Grunde einfach. Dies kann für Tastatur- und nicht-visuelle Benutzer verwirrend sein.

Was derzeit passiert, im Überblick:

1. Laden Sie Ihre Seite neu und drücken Sie dann die <kbd>Tab</kbd>-Taste. Sie sollten einen Fokusrahmen auf dem Eingabefeld zum Hinzufügen neuer To-do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte auf die Schaltfläche "Hinzufügen" wechseln.

3. Drücken Sie noch einmal, und es wird auf dem ersten Kontrollkästchen sein. Noch einmal drücken und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche sein.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusrahmen wird verschwunden sein.

Dieses Verhalten kann verstörend sein. Außerdem variiert das Verhalten bei erneutem Drücken der <kbd>Tab</kbd>-Taste je nach verwendetem Browser. Ebenso wird der Fokus wieder verschwinden, wenn Sie Ihre Bearbeitung speichern oder abbrechen und zur Nicht-Bearbeitungsansicht zurückkehren.

Um den Benutzern eine bessere Erfahrung zu bieten, fügen wir Code hinzu, um den Fokus zu steuern, sodass dieser auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein bisschen mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und refs

Vue, wie einige andere Frameworks, verwendet ein virtuelles DOM (VDOM) zur Verwaltung von Elementen. Das bedeutet, dass Vue eine Darstellung aller Knoten in unserer App im Speicher hält. Alle Updates werden zuerst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einer Batch-Synchronisation vorgenommen.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft aufwendiger ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente in der Regel nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies zu einer Inkonsistenz zwischen VDOM und realem DOM führt.

Stattdessen können Sie, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), [Vue refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie refs auch verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen, jedoch sollte dies mit Vorsicht geschehen, da es den Code schwerer verständlich machen kann.

Um ein ref in einer Komponente zu verwenden, fügen Sie ein `ref`-Attribut zu dem Element hinzu, auf das Sie zugreifen möchten, mit einem String-Identifikator als Wert des Attributs. Es ist wichtig zu beachten, dass ein ref innerhalb einer Komponente eindeutig sein muss. Keine zwei Elemente, die gleichzeitig gerendert werden, sollten dasselbe ref haben.

### Ein Ref zu unserer App hinzufügen

Lassen Sie uns also ein ref zu unserem "Bearbeiten"-Button in `ToDoItem.vue` hinzufügen. Aktualisieren Sie es folgendermaßen:

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

Um auf den Wert, der mit unserem ref verknüpft ist, zuzugreifen, verwenden wir die `$refs`-Eigenschaft, die bei unserer Komponenteninstanz bereitgestellt wird. Um den Wert des ref zu sehen, wenn wir auf unsere "Bearbeiten"-Schaltfläche klicken, fügen Sie ein `console.log()` zu unserer Methode `toggleToItemEditForm()` hinzu, wie folgt:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie die "Bearbeiten"-Schaltfläche an diesem Punkt aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole referenziert sehen.

## Vues $nextTick()-Methode

Wir möchten den Fokus auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Um das zu tun, müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente behandeln.

Erstellen Sie der Einfachheit halber eine neue Methode, die keine Argumente nimmt, namens `focusOnEditButton()`. Darin weisen Sie Ihrem ref eine Variable zu und rufen dann die Methode `focus()` auf dem ref auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Fügen Sie als nächstes einen Aufruf zu `this.focusOnEditButton()` am Ende der Methoden `itemEdited()` und `editCancelled()` hinzu:

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

Versuchen Sie, ein To-do-Element zu bearbeiten und dann zu speichern/abzubrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wird, also haben wir noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler in der Art von _"can't access property "focus", editButtonRef is undefined"_. Das wirkt seltsam. Ihr Button-ref war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt ist es das nicht mehr. Was ist da los?

Erinnern Sie sich, dass wir, wenn wir `isEditing` auf `true` ändern, den Abschnitt der Komponente, der die "Bearbeiten"-Schaltfläche enthält, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das der ref gebunden werden kann, also wird es `undefined`.

Sie denken jetzt vielleicht "hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf den `ref` zuzugreifen, daher sollte der `v-if`-Button jetzt nicht angezeigt werden?" Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, Änderungen zu optimieren und in Batches vorzunehmen, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Also, wenn wir `focusOnEditButton()` aufrufen, wurde die "Bearbeiten"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir warten, bis Vue den nächsten DOM-Update-Zyklus durchläuft. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach dem DOM-Update ausgeführt wird.

Da die Methode `focusOnEditButton()` nach dem DOM-Update aufgerufen werden muss, können wir den vorhandenen Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Jetzt, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus zurück auf die "Bearbeiten"-Schaltfläche gesetzt werden. Erfolg!

## Vue Lifecycle-Methoden

Als nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn die "Bearbeiten"-Schaltfläche geklickt wird. Da sich unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche befindet, können wir den Fokus nicht einfach innerhalb des Klick-Ereignishandlers der "Bearbeiten"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und erneut montieren, wenn die "Bearbeiten"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lifecycle** bekannt sind. Dieser Lebenszyklus erstreckt sich von dem Moment, bevor Elemente _erstellt_ und dem VDOM hinzugefügt werden (_mounted_), bis sie aus dem VDOM entfernt werden (_destroyed_).

Vue ermöglicht es Ihnen, Methoden während verschiedener Phasen dieses Lebenszyklus mit **Lifecycle-Methoden** auszuführen. Dies kann nützlich sein für Dinge wie das Abrufen von Daten, wo Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft geändert hat. Die Liste der Lifecycle-Methoden ist unten dargestellt, in der Reihenfolge, in der sie ausgelöst werden.

1. `beforeCreate()` — Wird ausgeführt, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Wird ausgeführt, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Hier erfolgt häufig das Abrufen von Daten.
3. `beforeMount()` — Wird ausgeführt, nachdem Ihr Template kompiliert wurde, aber bevor Ihre Komponente tatsächlich dem DOM hinzugefügt wird.
4. `mounted()` — Wird ausgeführt, nachdem Ihre Komponente dem DOM hinzugefügt wurde. Refs können hier verwendet werden.
5. `beforeUpdate()` — Wird ausgeführt, wenn sich Daten in Ihrer Komponente ändern, aber noch bevor die Änderungen dem DOM hinzugefügt werden.
6. `updated()` — Wird ausgeführt, nachdem sich Daten in Ihrer Komponente geändert haben und nachdem die Änderungen dem DOM hinzugefügt wurden.
7. `beforeDestroy()` — Wird ausgeführt, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Wird ausgeführt, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingebettet sind, und wird ausgeführt, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingebettet sind, und wird ausgeführt, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zur Veranschaulichung, wann diese Hooks passieren](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [Digital Ocean Community Blog geht tiefer auf die Lebenszyklus-Methoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Da wir nun die Lifecycle-Methoden durchgegangen sind, lassen Sie uns eine verwenden, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

Fügen Sie in `ToDoItemEditForm.vue` `ref="labelInput"` zum `<input>`-Element hinzu, wie folgt:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft stehen sollte, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods`.** Lifecycle-Methoden sind spezielle Methoden, die eigenständig und nicht neben benutzerdefinierten Methoden stehen. Diese sollte keine Eingaben annehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unseren `labelInput`-ref zuzugreifen.

```js
mounted() {

}
```

Weisen Sie in Ihrer `mounted()`-Methoden, Ihrem `labelInput`-ref eine Variable zu und rufen Sie dann die `focus()`-Funktion des refs auf. Sie müssen `$nextTick()` hier nicht verwenden, da die Komponente bereits hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Nun sollte der Fokus beim Aktivieren der "Bearbeiten"-Schaltfläche über die Tastatur sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Umgang mit dem Fokus beim Löschen von To-do-Elementen

Es gibt einen weiteren Punkt, an dem wir das Fokusmanagement berücksichtigen müssen: wenn ein Benutzer ein To-do-Element löscht. Beim Klicken auf die "Bearbeiten"-Schaltfläche ist es sinnvoll, den Fokus auf das Textfeld des Namens der Bearbeitung zu verschieben und beim Abbrechen oder Speichern vom Bearbeitungsbildschirm zur "Bearbeiten"-Schaltfläche zurückzukehren.

Anders als beim Bearbeitungsformular haben wir jedoch keine klare Position, auf die der Fokus verschoben werden sollte, wenn ein Element gelöscht wird. Wir benötigen außerdem eine Möglichkeit, Benutzer von unterstützenden Technologien darüber zu informieren, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenkopfzeile — das `<h2>` in `App.vue` — und es ist mit unserer Liste von To-do-Elementen verknüpft. Dies macht es zu einem geeigneten Ort, um den Fokus darauf zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir ein ref zu unserer Listenkopfzeile hinzufügen. Wir müssen auch ein `tabindex="-1"` hinzufügen — dies macht das Element programmgesteuert fokussierbar (d. h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Bemerkung:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein wirklich leistungsfähiges Werkzeug zur Handhabung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Übermäßige Verwendung von `tabindex="-1"` kann Probleme für alle Arten von Benutzern verursachen, daher sollte es nur dort verwendet werden, wo es genau benötigt wird. Sie sollten auch fast nie `tabindex >= 0` verwenden, da dies Probleme für Benutzer verursachen kann, indem es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmen lässt und/oder nicht-interaktive Elemente der Tab-Reihenfolge hinzufügt. Dies kann Benutzer verwirren, insbesondere diejenigen, die Bildschirmleser und andere Hilfstechnologien verwenden.

Nun, da wir ein `ref` haben und die Browser wissen lassen, dass wir das `<h2>` programmgesteuert fokussieren können, müssen wir den Fokus darauf setzen. Verwenden Sie am Ende von `deleteToDo()` das `listSummary`-ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, brauchen Sie sich keine Gedanken über die Verwendung von `$nextTick()` oder Lifecycle-Methoden zur Verwaltung des Fokus darauf zu machen.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Jetzt, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus zur Listenkopfzeile verschoben werden. Dies sollte eine sinnvolle Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war's also mit dem Fokusmanagement und unserer App! Herzlichen Glückwunsch, dass Sie sich durch alle unsere Vue-Tutorials gearbeitet haben. Im nächsten Artikel runden wir das Ganze mit einigen weiteren Ressourcen ab, um Ihre Vue-Lernreise fortzusetzen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
