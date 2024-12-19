---
title: Vue-Refs und Lifecycle-Methoden für das Fokusmanagement
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Der letzte Punkt, den wir uns ansehen, ist das Fokusmanagement oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir schauen uns die Verwendung von **Vue-Refs** an, um dies zu handhaben – eine erweiterte Funktion, die Ihnen direkten Zugriff auf die zugrundeliegenden DOM-Knoten unterhalb des virtuellen DOMs oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente ermöglicht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrundeliegende DOM-Struktur abbildet. Für die Installation und Verwendung einiger erweiterter Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man das Fokusmanagement mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Fokusmanagement-Problem

Obwohl wir über eine funktionierende Bearbeitungsfunktion verfügen, bieten wir keine großartige Erfahrung für Nicht-Maus-Benutzer. Konkret entfernen wir, wenn ein Benutzer die "Bearbeiten"-Schaltfläche aktiviert, die "Bearbeiten"-Schaltfläche aus dem DOM, verschieben den Fokus des Benutzers jedoch nirgends hin, sodass sie im Grunde einfach verschwindet. Dies kann für Tastatur- und nicht-visuelle Benutzer verwirrend sein.

Zum Verstehen, was momentan passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusumriss auf dem Eingabefeld zum Hinzufügen neuer To-Do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte auf die "Hinzufügen"-Schaltfläche wechseln.

3. Drücken Sie erneut, und er wird auf dem ersten Kontrollkästchen sein. Noch einmal, und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche liegen.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusumriss wird verschwunden sein.

Dieses Verhalten kann schockierend sein. Außerdem variiert, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, je nachdem, welchen Browser Sie verwenden. Ebenso verschwindet der Fokus wieder, wenn Sie Ihre Bearbeitung speichern oder abbrechen, wenn Sie zurück zur Nicht-Bearbeitungsansicht wechseln.

Um den Benutzern eine bessere Erfahrung zu bieten, fügen wir Code hinzu, um den Fokus zu steuern, sodass er auf das Bearbeitungsfeld eingestellt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Bearbeiten"-Schaltfläche legen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern arbeitet.

## Virtuelles DOM und Refs

Vue, wie einige andere Frameworks, verwendet ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Repräsentation aller Knoten in unserer App im Speicher hält. Alle Änderungen werden zuerst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, synchronisiert.

Da das Lesen und Schreiben von tatsächlichen DOM-Knoten oft teurer ist als das von virtuellen Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente oft nicht direkt über native Browser-APIs ändern sollten (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bei der Verwendung von Frameworks, da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Wenn Sie auf die zugrundeliegenden DOM-Knoten zugreifen müssen (wie beim Einstellen des Fokus), können Sie stattdessen [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer untergeordneten Komponente zuzugreifen, jedoch sollte dies mit Vorsicht geschehen, da es den Code schwerer verständlich machen kann.

Um ein Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut hinzu, mit einem Zeichenfolgenbezeichner für den Attributwert. Es ist wichtig zu beachten, dass ein Ref innerhalb einer Komponente eindeutig sein muss. Keine zwei Elemente, die gleichzeitig gerendert werden, sollten dasselbe Ref haben.

### Hinzufügen eines Refs zu unserer App

Lassen Sie uns also ein Ref an unsere "Bearbeiten"-Schaltfläche in `ToDoItem.vue` anhängen. Aktualisieren Sie es wie folgt:

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

Um auf den Wert zuzugreifen, der mit unserem Ref verknüpft ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert des Refs zu sehen, wenn wir auf unsere "Bearbeiten"-Schaltfläche klicken, fügen Sie unserem `toggleToItemEditForm()`-Methode ein `console.log()` hinzu, wie folgt:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie zu diesem Zeitpunkt die "Bearbeiten"-Schaltfläche aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole referenziert sehen.

## Vue's $nextTick() Methode

Wir möchten den Fokus auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente handhaben.

Erstellen Sie aus Bequemlichkeit eine neue Methode, die keine Argumente nimmt und `focusOnEditButton()` genannt wird. Ordnen Sie Ihr `ref` innerhalb dieser Methode einer Variablen zu und rufen Sie dann die `focus()`-Methode auf dem Ref auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Nächster Schritt: Fügen Sie am Ende der Methoden `itemEdited()` und `editCancelled()` einen Aufruf zu `this.focusOnEditButton()` hinzu:

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

Versuchen Sie, ein To-Do-Element zu bearbeiten und dann über Ihre Tastatur zu speichern/abzubrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wird, also haben wir immer noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, wird ein Fehler angezeigt, ähnlich dem _"can't access property 'focus', editButtonRef is undefined"_. Das erscheint seltsam. Ihr Button-Ref war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt ist es nicht mehr vorhanden. Was ist los?

Nun, denken Sie daran, dass wenn wir `isEditing` auf `true` ändern, wir den Abschnitt der Komponente, der die "Bearbeiten"-Schaltfläche enthält, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das das Ref gebunden werden kann, daher wird es `undefined`.

Sie könnten jetzt denken: "Hey, setzen wir `isEditing=false`, bevor wir versuchen, auf das `ref` zuzugreifen, sollte das `v-if` also jetzt nicht den Button anzeigen?" Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, die Änderungen zu optimieren und zu bündeln, wird es das DOM nicht sofort aktualisieren, wenn wir `isEditing` auf `false` setzen. Daher wird der "Bearbeiten"-Knopf noch nicht gerendert sein, wenn wir `focusOnEditButton()` aufrufen.

Stattdessen müssen wir warten, bis nach dem nächsten DOM-Update-Zyklus von Vue. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Rückruffunktion, die dann nach den DOM-Aktualisierungen ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach dem DOM-Update aufgerufen werden muss, können wir den vorhandenen Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Jetzt sollte der Fokus, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, wieder auf die "Bearbeiten"-Schaltfläche zurückkehren. Erfolg!

## Vue-Lifecycle-Methoden

Als nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn die "Bearbeiten"-Schaltfläche geklickt wird. Da sich jedoch unser Bearbeitungsformular in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche befindet, können wir den Fokus nicht einfach im Click-Event-Handler der "Bearbeiten"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und neu mounten, wann immer die "Bearbeiten"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lebenszyklus** bekannt sind. Dieser Lebenszyklus erstreckt sich von ganz bevor Elemente _erstellt_ und zum VDOM hinzugefügt werden (_mounted_), bis sie vom VDOM entfernt werden (_destroyed_).

Vue lässt Sie Methoden in verschiedenen Phasen dieses Lebenszyklus ausführen, indem es **Lebenszyklusmethoden** verwendet. Dies kann nützlich sein für Dinge wie das Abrufen von Daten, wo Sie möglicherweise Ihre Daten vor dem Rendern Ihrer Komponente oder nachdem eine Eigenschaft geändert wurde, erhalten müssen. Die Liste der Lebenszyklusmethoden folgt unten in der Reihenfolge, in der sie ausgeführt werden.

1. `beforeCreate()` — Läuft, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Läuft, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Dies ist oft, wo Daten abgerufen werden.
3. `beforeMount()` — Läuft, nachdem Ihr Template kompiliert wurde, aber bevor Ihre Komponente tatsächlich im DOM gerendert wird.
4. `mounted()` — Läuft, nachdem Ihre Komponente im DOM installiert wurde. Hier können `refs` abgerufen werden.
5. `beforeUpdate()` — Läuft, wenn sich Daten in Ihrer Komponente ändern, aber bevor die Änderungen im DOM gerendert werden.
6. `updated()` — Läuft, wenn sich Daten in Ihrer Komponente geändert haben und nachdem die Änderungen im DOM gerendert wurden.
7. `beforeDestroy()` — Läuft, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingewickelt sind. Läuft, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag eingewickelt sind. Läuft, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zum Visualisieren, wann diese Haken auftreten](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog geht tiefer auf die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Da wir die Lebenszyklusmethoden besprochen haben, lassen Sie uns eine verwenden, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente installiert wird.

In `ToDoItemEditForm.vue`, fügen Sie `ref="labelInput"` an das `<input>`-Element an, so:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt innerhalb des Komponentenobjekts hinzu – **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods` platziert werden sollte.** Lebenszyklusmethoden sind spezielle Methoden, die für sich alleine stehen und nicht neben benutzerdefinierten Methoden. Diese Methode sollte keine Eingaben erfordern. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unser `labelInput`-Ref zuzugreifen.

```js
mounted() {

}
```

Weisen Sie innerhalb Ihrer `mounted()`-Methode Ihr `labelInput`-Ref einer Variablen zu und rufen Sie dann die `focus()`-Funktion des Refs auf. Sie müssen hier kein `$nextTick()` verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Jetzt sollte der Fokus, wenn Sie die "Bearbeiten"-Schaltfläche mit Ihrer Tastatur aktivieren, sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Handhabung des Fokus beim Löschen von To-Do-Elementen

Es gibt noch einen weiteren Ort, an dem wir das Fokusmanagement berücksichtigen müssen: Wenn ein Benutzer ein To-Do löscht. Beim Klicken auf die "Bearbeiten"-Schaltfläche macht es Sinn, den Fokus auf das Bearbeitungs-Textfeld zu verschieben und beim Abbrechen oder Speichern vom Bearbeitungsbildschirm zurück auf die "Bearbeiten"-Schaltfläche.

Anders als beim Bearbeitungsformular haben wir jedoch keinen klaren Ort, an den der Fokus verschoben werden kann, wenn ein Element gelöscht wird. Wir benötigen auch eine Möglichkeit, Benutzern assistierender Technologien Informationen zu geben, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — dem `<h2>` in `App.vue` — und es ist mit unserer Liste von To-Do-Elementen verknüpft. Dies macht es zu einem vernünftigen Ort, um den Fokus zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir ein Ref zu unserer Listenüberschrift hinzufügen. Wir müssen auch ein `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), obwohl es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein sehr leistungsfähiges Werkzeug zur Lösung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Das übermäßige Verwenden von `tabindex="-1"` kann für alle Arten von Benutzern Probleme verursachen, verwenden Sie es daher genau dort, wo Sie es benötigen. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den DOM-Fluss und die Tab-Reihenfolge unerwartet ändern und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügen kann. Dies kann für Benutzer verwirrend sein, insbesondere für diejenigen, die Bildschirmlesegeräte und andere assistierende Technologien verwenden.

Da wir jetzt ein `ref` haben und den Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Verwenden Sie am Ende von `deleteToDo()` das `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` ständig in der App gerendert wird, müssen Sie sich keine Sorgen über die Verwendung von `$nextTick()` oder Lebenszyklusmethoden machen, um den Fokus darauf zu setzten.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Jetzt, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verschoben werden. Dies sollte ein vernünftiges Nutzungserlebnis für alle Benutzer bieten.

## Zusammenfassung

Das war es also mit dem Fokusmanagement und unserer App! Herzlichen Glückwunsch, dass Sie alle unsere Vue-Tutorials durchgearbeitet haben. Im nächsten Artikel werden wir die Serie mit einigen weiteren Ressourcen abschließen, um Ihre Vue-Kenntnisse weiterzuentwickeln.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes der Vue-App in unserem todo-vue-Repository. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
