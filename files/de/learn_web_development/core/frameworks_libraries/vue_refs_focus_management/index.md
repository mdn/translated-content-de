---
title: Vue-Refs und Lifecycle-Methoden für das Fokusmanagement
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Der letzte Punkt, den wir uns ansehen, ist das Fokusmanagement oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns mit **Vue-Refs** befassen, um dies zu handhaben — eine erweiterte Funktionalität, die es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente zu erhalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Einzeldateikomponenten oder Renderfunktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man das Fokusmanagement mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem des Fokusmanagements

Obwohl wir über eine funktionierende Bearbeitungsfunktionalität verfügen, bieten wir keine großartige Erfahrung für Nicht-Maus-Benutzer. Insbesondere entfernen wir, wenn ein Benutzer die "Bearbeiten"-Schaltfläche aktiviert, die "Bearbeiten"-Schaltfläche aus dem DOM, verschieben den Fokus des Benutzers aber nicht irgendwohin, sodass sie im Grunde einfach verschwindet. Dies kann für Tastatur- und Nichtsehende orientierungslos sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten eine Fokusumrandung auf dem Eingabefeld für neue To-Do-Einträge sehen.

2. Drücken Sie noch einmal <kbd>Tab</kbd>. Der Fokus sollte zur "Hinzufügen"-Schaltfläche wechseln.

3. Drücken Sie erneut, und der Fokus wird auf das erste Kontrollkästchen gesetzt. Noch einmal, und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche sein.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken. Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber die Fokusumrandung ist verschwunden.

Dieses Verhalten kann erschreckend sein. Darüber hinaus variiert das, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, je nach verwendetem Browser. Ebenso verschwindet der Fokus erneut, wenn Sie Ihre Bearbeitung speichern oder abbrechen, während Sie zur Ansicht ohne Bearbeitung zurückkehren.

Um den Benutzern ein besseres Erlebnis zu bieten, fügen wir Code hinzu, um den Fokus so zu steuern, dass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch wieder auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue, wie auch einige andere Frameworks, verwendet ein virtuelles DOM (VDOM), um Elemente zu verwalten. Dies bedeutet, dass Vue eine Repräsentation aller Knoten unserer App im Speicher hält. Alle Aktualisierungen werden zunächst an den Speicherknoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Stapel synchronisiert.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass man normalerweise nicht direkt seine HTML-Elemente über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollte, wenn man Frameworks verwendet, da dies dazu führt, dass das VDOM und das reale DOM auseinanderlaufen.

Wenn Sie jedoch auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie z.B. beim Setzen des Fokus), können Sie [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen. Dies sollte jedoch mit Vorsicht gehandhabt werden, da es den Code schwerer verständlich machen kann.

Um eine `ref` in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem eindeutigen Zeichenfolgenkennzeichen als Attributwert hinzu. Es ist wichtig zu beachten, dass eine `ref` innerhalb einer Komponente eindeutig sein muss. Keine zwei Elemente, die gleichzeitig gerendert werden, sollten dieselbe `ref` haben.

### Hinzufügen einer Ref zu unserer App

Fügen wir also eine `ref` zu unserer "Bearbeiten"-Schaltfläche in `ToDoItem.vue` hinzu. Aktualisieren Sie es folgendermaßen:

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

Um auf den Wert zuzugreifen, der mit unserer `ref` verknüpft ist, nutzen wir die `$refs`-Eigenschaft, die auf unsere Komponenteninstanz bereitgestellt wird. Um den Wert der `ref` zu sehen, wenn wir die "Bearbeiten"-Schaltfläche anklicken, fügen wir unserer Methode `toggleToItemEditForm()` einen `console.log()` hinzu, so:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

Wenn Sie die "Bearbeiten"-Schaltfläche an dieser Stelle aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole als Referenz angezeigt bekommen.

## Vue's $nextTick() Methode

Wir möchten beim Speichern oder Abbrechen einer Bearbeitung den Fokus auf die "Bearbeiten"-Schaltfläche setzen. Dazu müssen wir in den `itemEdited()` und `editCancelled()`-Methoden der `ToDoItem`-Komponente den Fokus verwalten.

Erstellen Sie der Einfachheit halber eine neue Methode, die keine Argumente erwartet, und nennen Sie sie `focusOnEditButton()`. Weisen Sie darin Ihrer `ref` eine Variable zu und rufen Sie dann die `focus()`-Methode auf der `ref` auf.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Fügen Sie als nächstes einen Aufruf zu `this.focusOnEditButton()` am Ende der `itemEdited()` und `editCancelled()`-Methoden hinzu:

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

Versuchen Sie, einen To-Do-Eintrag über Ihre Tastatur zu bearbeiten und dann zu speichern/abbrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wird, also haben wir noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler in der Art _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam. Ihr Button-`ref` war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt nicht mehr. Was ist los?

Denken Sie daran, dass wir den Abschnitt der Komponente bei Änderung von `isEditing` auf `true` nicht rendern, der die "Bearbeiten"-Schaltfläche enthält. Es gibt also kein Element, an das die `ref` gebunden werden kann, sodass sie `undefined` wird.

Vielleicht denken Sie jetzt "Moment, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen, sollte das `v-if` also nun nicht die Schaltfläche anzeigen?" Hier spielt das virtuelle DOM eine Rolle. Da Vue versucht, zu optimieren und Änderungen zu stapeln, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Wenn wir also `focusOnEditButton()` aufrufen, wurde die "Bearbeiten"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir warten, bis nach dem nächsten DOM-Update-Zyklus von Vue. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach dem Update des DOMs aufgerufen werden muss, können wir den bestehenden Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Nun, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus wieder auf die "Bearbeiten"-Schaltfläche zurückgesetzt werden. Erfolg!

## Vue-Lifecycle-Methoden

Als nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn die "Bearbeiten"-Schaltfläche geklickt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche ist, können wir den Fokus nicht einfach im Klick-Event-Handler der "Bearbeiten"-Schaltfläche setzen. Wir können jedoch die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente immer entfernen und neu einbinden, wenn die "Bearbeiten"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das also? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lebenszyklus** bekannt sind. Dieser Lebenszyklus reicht von bevor Elemente _erstellt_ und dem VDOM hinzugefügt (_mounted_) werden, bis sie aus dem VDOM entfernt (_destroyed_) werden.

Vue ermöglicht es Ihnen, Methoden zu verschiedenen Stadien dieses Lebenszyklus zu laufen. Dies kann nützlich für Dinge wie das Abrufen von Daten sein, wo Sie vielleicht Ihre Daten holen müssen, bevor Ihre Komponente gerendert wird oder nachdem sich eine Eigenschaft ändert. Die Liste der Lebenszyklusmethoden ist unten aufgeführt, in der Reihenfolge, in der sie ausgelöst werden.

1. `beforeCreate()` — Läuft, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Läuft, nachdem Ihre Komponente initialisiert, aber bevor sie dem VDOM hinzugefügt wird. Oft erfolgt hier das Datenabrufen.
3. `beforeMount()` — Läuft, nachdem Ihre Vorlage kompiliert, aber bevor Ihre Komponente tatsächlich zum DOM gerendert wird.
4. `mounted()` — Läuft, nachdem Ihre Komponente zum DOM hinzugefügt wurde. Hier können `refs` verwendet werden.
5. `beforeUpdate()` — Läuft, wann immer sich Daten in Ihrer Komponente ändern, aber noch bevor die Änderungen zum DOM gerendert werden.
6. `updated()` — Läuft, wann immer sich Daten in Ihrer Komponente geändert haben und nachdem die Änderungen zum DOM gerendert wurden.
7. `beforeDestroy()` — Läuft, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive` Tag eingebettet sind. Läuft nach der Aktivierung der Komponente.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive` Tag eingebettet sind. Läuft nach der Deaktivierung der Komponente.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm, um zu visualisieren, wann diese Hooks auftreten](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog vertieft sich weiter in die Lifecycle-Methoden](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Da wir nun die Lebenszyklusmethoden durchgegangen sind, lassen Sie uns eine verwenden, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente geladen wird.

In `ToDoItemEditForm.vue`, fügen Sie `ref="labelInput"` dem `<input>`-Element hinzu, wie folgt:

```html
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft platziert werden sollte, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods`.** Lebenszyklusmethoden sind spezielle Methoden, die auf ihrer eigenen Ebene stehen, nicht neben den vom Benutzer definierten Methoden. Diese sollte keine Eingaben entgegennehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unsere `labelInput`-Ref zuzugreifen.

```js
mounted() {

}
```

Weisen Sie innerhalb Ihrer `mounted()`-Methode Ihrer `labelInput`-Ref eine Variable zu und rufen Sie dann die `focus()`-Funktion der Ref auf. Hier müssen Sie `$nextTick()` nicht verwenden, denn die Komponente wurde bereits dem DOM hinzugefügt, wenn `mounted()` aufgerufen wird.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Nun, wenn Sie die "Bearbeiten"-Schaltfläche mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das Eingabe-`<input>` verschoben werden.

## Fokushandhabung beim Löschen von To-Do-Einträgen

Es gibt einen weiteren Punkt, an dem wir das Fokusmanagement berücksichtigen müssen: beim Löschen eines To-Dos. Beim Klicken der "Bearbeiten"-Schaltfläche ergibt es Sinn, den Fokus auf das Namenstextfeld zu verlagern und zurück auf die "Bearbeiten"-Schaltfläche, wenn Sie vom Bearbeitungsbildschirm aus abbrechen oder speichern.

Im Gegensatz zum Bearbeitungsformular haben wir jedoch kein klares Ziel, auf das der Fokus verlagert werden soll, wenn ein Element gelöscht wird. Wir benötigen auch eine Möglichkeit, Nutzern von unterstützenden Technologien Informationen zu bieten, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — das `<h2>` in `App.vue` — und sie ist mit unserer Liste von To-Do-Elementen verknüpft. Dies macht es zu einem vernünftigen Ort, um den Fokus zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir unserer Listenüberschrift eine `ref` hinzufügen. Wir müssen auch ein `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```html
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ist ein äußerst hilfreiches Werkzeug zur Lösung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Übermäßiges Verwenden von `tabindex="-1"` kann für alle Arten von Benutzerproblemen sorgen, also verwenden Sie es nur genau dort, wo Sie es brauchen. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den DOM-Fluss und die Tab-Reihenfolge aus dem Gleichgewicht bringen kann und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann für Benutzer verwirrend sein, insbesondere für diejenigen, die Bildschirmleser und andere unterstützende Technologien verwenden.

Da wir nun eine `ref` haben und Browsern mitgeteilt haben, dass wir die `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()` verwenden Sie die `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da die `<h2>` immer in der App gerendert wird, müssen Sie sich keine Sorgen machen, `$nextTick()` oder Lebenszyklusmethoden verwenden, um sie fokussieren zu können.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Nun, wenn Sie ein Element von Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verschoben werden. Dies sollte ein vernünftiges Fokuserlebnis für alle unsere Nutzer bieten.

## Zusammenfassung

Das war es dann mit dem Fokusmanagement und unserer App! Herzlichen Glückwunsch, dass Sie es durch all unsere Vue-Tutorials geschafft haben. Im nächsten Artikel runden wir das Ganze mit weiteren Ressourcen ab, um Ihr Vue-Lernen weiter zu vertiefen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispielcodes der Vue-App in unserem todo-vue-Repository. Für eine laufende Live-Version, siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
