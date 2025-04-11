---
title: Vue-Referenzen und Lebenszyklusmethoden für die Fokussierung
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Der letzte Bereich, den wir uns ansehen, ist das Fokussierungsmanagement, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden **Vue-Referenzen** verwenden, um dies zu handhaben – ein fortschrittliches Feature, das Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs ermöglicht oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer untergeordneten Komponente.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax geschrieben, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortschrittlicheren Features von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie man das Fokussierungsmanagement mit Vue-Referenzen handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem des Fokussierungsmanagements

Obwohl unsere Bearbeitungsfunktionalität funktioniert, bieten wir keine großartige Erfahrung für Benutzer, die keine Maus verwenden. Insbesondere wenn ein Benutzer die "Bearbeiten"-Schaltfläche aktiviert, entfernen wir die "Bearbeiten"-Schaltfläche aus dem DOM, aber wir verschieben den Fokus des Benutzers nirgendwoanders hin, sodass sie im Grunde einfach verschwindet. Das kann für Tastatur- und sehbehinderte Benutzer verwirrend sein.

Um zu verstehen, was derzeit geschieht:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusrand beim Eingabefeld zum Hinzufügen neuer To-Do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte sich auf die "Hinzufügen"-Schaltfläche bewegen.

3. Drücken Sie ihn erneut, und es wird auf dem ersten Kontrollkästchen sein. Noch einmal, und der Fokus sollte auf der ersten "Bearbeiten"-Schaltfläche sein.
4. Aktivieren Sie die "Bearbeiten"-Schaltfläche, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusrand ist verschwunden.

Dieses Verhalten kann irritierend sein. Darüber hinaus variiert das Verhalten, wenn Sie erneut <kbd>Tab</kbd> drücken, je nach verwendetem Browser. Ebenso wird der Fokus wieder verschwinden, wenn Sie Ihre Bearbeitung speichern oder abbrechen, während Sie zurück zur Nicht-Bearbeiten-Ansicht wechseln.

Um den Benutzern eine bessere Erfahrung zu bieten, fügen wir Code hinzu, um den Fokus zu steuern, sodass er beim Anzeigen des Bearbeitungsformulars auf das Bearbeitungsfeld gesetzt wird. Außerdem möchten wir den Fokus wieder auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus festzulegen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Referenzen

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Darstellung aller Knoten unserer App im Speicher behält. Etwaige Änderungen werden zunächst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einer Stapelverarbeitung synchronisiert.

Da das Lesen und Schreiben von tatsächlichen DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Allerdings bedeutet es auch, dass Sie HTML-Elemente oft nicht direkt über native Browser-APIs bearbeiten sollten (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)), wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht synchron bleiben.

Stattdessen, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), können Sie [Vue-Referenzen](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie Referenzen auch verwenden, um direkt auf die interne Struktur einer untergeordneten Komponente zuzugreifen, jedoch sollte dies mit Vorsicht geschehen, da es den Code schwerer verständlich machen kann.

Um eine Referenz in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem Zeichenfolgenbezeichner als Wert des Attributs hinzu. Es ist wichtig zu beachten, dass eine Referenz innerhalb einer Komponente eindeutig sein muss. Keine zwei gleichzeitig gerenderten Elemente sollten dieselbe Referenz haben.

### Eine Referenz zu unserer App hinzufügen

Fügen wir also eine Referenz zur "Bearbeiten"-Schaltfläche in `ToDoItem.vue` hinzu. Aktualisieren Sie sie so:

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

Um auf den Wert zuzugreifen, der mit unserer Referenz verknüpft ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert der Referenz zu sehen, wenn wir auf unsere "Bearbeiten"-Schaltfläche klicken, fügen Sie unserer `toggleToItemEditForm()`-Methode einen `console.log()` hinzu, so:

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

Wenn Sie jetzt die "Bearbeiten"-Schaltfläche aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole referenziert sehen.

## Die $nextTick()-Methode von Vue

Wir möchten den Fokus auf die "Bearbeiten"-Schaltfläche setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente behandeln.

Zur Vereinfachung erstellen Sie eine neue Methode ohne Argumente namens `focusOnEditButton()`. Darin weisen Sie Ihre `ref` einer Variablen zu und rufen dann die `focus()`-Methode auf der Referenz auf.

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

Fügen Sie nun am Ende der Methoden `itemEdited()` und `editCancelled()` einen Aufruf zu `this.focusOnEditButton()` hinzu:

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

Versuchen Sie, über Ihre Tastatur ein To-Do-Element zu bearbeiten und dann zu speichern/abzubrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wird, also haben wir noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler, der etwa so lautet: _"can't access property "focus", editButtonRef is undefined"_. Das scheint merkwürdig zu sein. Ihre Button-Referenz war definiert, als Sie die "Bearbeiten"-Schaltfläche aktiviert haben, aber jetzt nicht mehr. Was ist los?

Denken Sie daran, dass wir, wenn wir `isEditing` auf `true` setzen, den Abschnitt der Komponente entfernen, in dem die "Bearbeiten"-Schaltfläche enthalten ist. Das bedeutet, dass kein Element vorhanden ist, das mit der Referenz verknüpft werden kann, sodass sie `undefined` wird.

Sie denken vielleicht: "Hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen? Sollte das `v-if` jetzt nicht die Schaltfläche anzeigen?" Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, Änderungen zu optimieren und zu bündeln, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Also, wenn wir `focusOnEditButton()` aufrufen, ist die "Bearbeiten"-Schaltfläche noch nicht gerendert.

Stattdessen müssen wir warten, bis Vue den nächsten DOM-Aktualisierungszyklus durchläuft. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach der DOM-Aktualisierung aufgerufen werden muss, können wir den vorhandenen Funktionskörper in einen `$nextTick()`-Aufruf einbetten.

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

Jetzt, wenn Sie die "Bearbeiten"-Schaltfläche aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus zur "Bearbeiten"-Schaltfläche zurückkehren. Erfolg!

## Vue-Lebenszyklusmethoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars bewegen, wenn die "Bearbeiten"-Schaltfläche geklickt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unsere "Bearbeiten"-Schaltfläche ist, können wir nicht einfach den Fokus innerhalb des Klick-Event-Handlers der "Bearbeiten"-Schaltfläche setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente jedes Mal entfernen und wieder einfügen, wenn die "Bearbeiten"-Schaltfläche geklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, bekannt als **Lebenszyklus**. Dieser Lebenszyklus erstreckt sich von dem Moment, bevor Elemente _erstellt_ und dem VDOM hinzugefügt (_montiert_) werden, bis sie aus dem VDOM entfernt (_zerstört_) werden.

Vue ermöglicht es Ihnen, Methoden in verschiedenen Phasen dieses Lebenszyklus mit **Lebenszyklusmethoden** auszuführen. Dies kann hilfreich sein für Dinge wie Datenabfragen, bei denen Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft verändert hat. Die Liste der Lebenszyklusmethoden ist unten in der Reihenfolge aufgeführt, in der sie ausgeführt werden.

1. `beforeCreate()` — Wird ausgeführt, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Wird ausgeführt, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Hier finden oft Datenabfragen statt.
3. `beforeMount()` — Wird ausgeführt, nachdem Ihr Template kompiliert wurde, aber bevor Ihre Komponente in das tatsächliche DOM gerendert wird.
4. `mounted()` — Wird ausgeführt, nachdem Ihre Komponente in das DOM eingefügt wurde. Hier kann auf `refs` zugegriffen werden.
5. `beforeUpdate()` — Wird ausgeführt, wann immer sich Daten in Ihrer Komponente ändern, aber bevor die Änderungen im DOM gerendert werden.
6. `updated()` — Wird ausgeführt, wann immer sich Daten in Ihrer Komponente geändert haben und nachdem die Änderungen im DOM gerendert wurden.
7. `beforeDestroy()` — Wird ausgeführt, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Wird ausgeführt, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag verpackt sind. Wird ausgeführt, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag verpackt sind. Wird ausgeführt, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zur Visualisierung, wann diese Hooks auftreten](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel vom [Community-Blog von DigitalOcean taucht tiefer in die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Jetzt, da wir die Lebenszyklusmethoden besprochen haben, verwenden wir eine, um den Fokus auszulösen, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

Hängen Sie in `ToDoItemEditForm.vue` `ref="labelInput"` an das `<input>`-Element an, so:

```vue
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als nächstes eine `mounted()`-Eigenschaft direkt in Ihrem Komponentenobjekt hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft platziert werden sollte, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods`.** Lebenszyklusmethoden sind spezielle Methoden, die für sich allein stehen und nicht zusammen mit den vom Benutzer definierten Methoden. Diese sollte keine Eingaben annehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unsere `labelInput`-Referenz zuzugreifen.

```js
export default {
  // …
  mounted() {},
  // …
};
```

Weisen Sie in Ihrer `mounted()`-Methode Ihre `labelInput`-Referenz einer Variablen zu und rufen Sie dann die `focus()`-Funktion der Referenz auf. Sie müssen hier kein `$nextTick()` verwenden, da die Komponente bereits dem DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

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

Jetzt sollte der Fokus, wenn Sie die "Bearbeiten"-Schaltfläche mit Ihrer Tastatur aktivieren, sofort auf das Bearbeitungs-`<input>`-Element verschoben werden.

## Fokushandhabung beim Löschen von To-Do-Elementen

Es gibt noch eine weitere Stelle, an der wir das Fokussierungsmanagement berücksichtigen müssen: wenn ein Benutzer ein To-Do-Element löscht. Beim Klicken auf die "Bearbeiten"-Schaltfläche macht es Sinn, den Fokus auf das Textfeld zum Bearbeiten des Namens zu verschieben und zurück auf die "Bearbeiten"-Schaltfläche, wenn man aus dem Bearbeitungsbildschirm speichert oder abbricht.

Anders als beim Bearbeitungsformular haben wir jedoch keinen eindeutigen Ort, an den der Fokus verschoben werden sollte, wenn ein Element gelöscht wird. Wir benötigen auch eine Möglichkeit, um Benutzern der unterstützenden Technologie Informationen bereitzustellen, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift – dem `<h2>` in `App.vue` – und es ist mit unserer Liste von To-Do-Elementen verbunden. Dies macht es zu einem vernünftigen Ort, um den Fokus darauf zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir eine Referenz zu unserer Listenüberschrift hinzufügen. Wir müssen ihr auch ein `tabindex="-1"` hinzufügen – dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` folgendermaßen:

```vue
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist ein sehr leistungsfähiges Werkzeug zur Handhabung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Ein Übermaß an `tabindex="-1"` kann Probleme für alle Benutzergruppen verursachen, daher sollte es nur dort verwendet werden, wo es wirklich notwendig ist. Sie sollten auch fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmen lässt und/oder nicht-interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann für Benutzer verwirrend sein, insbesondere für diejenigen, die Bildschirmleser und andere unterstützende Technologien verwenden.

Da wir nun eine `ref` haben und die Browser darüber informiert haben, dass wir die `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Verwenden Sie am Ende von `deleteToDo()` die `listSummary`-Referenz, um den Fokus auf die `<h2>` zu setzen. Da die `<h2>` immer in der App gerendert wird, müssen Sie sich keine Gedanken über die Verwendung von `$nextTick()` oder Lebenszyklusmethoden machen, um den Fokus darauf zu setzen.

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

Wenn Sie nun ein Element aus Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verlagert werden. Dies sollte eine angemessene Fokus-Darstellung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war unser Fokusmanagement und unsere App! Herzlichen Glückwunsch, dass Sie sich durch alle unsere Vue-Tutorials gearbeitet haben. Im nächsten Artikel schließen wir mit einigen weiteren Ressourcen ab, um Ihr Vue-Lernen weiter zu vertiefen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
