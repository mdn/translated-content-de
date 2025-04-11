---
title: Vue-Refs und Lebenszyklusmethoden für Fokusverwaltung
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Das letzte Stückchen Funktionalität, das wir uns ansehen müssen, ist die Fokusverwaltung, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie wir **Vue-Refs** dafür verwenden können — ein fortgeschrittenes Feature, das Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs oder direkten Zugang von einer Komponente zur internen DOM-Struktur einer Kindkomponente ermöglicht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Grundkenntnisse im Umgang mit dem
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die den zugrunde liegenden DOM-Strukturen zugeordnet wird. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Fokusverwaltung mit Vue-Refs umsetzt.</td>
    </tr>
  </tbody>
</table>

## Das Problem der Fokusverwaltung

Obwohl wir eine funktionierende Bearbeitungsfunktion haben, bieten wir keine großartige Erfahrung für Nicht-Maus-Nutzer. Speziell, wenn ein Nutzer den "Bearbeiten"-Button aktiviert, entfernen wir den "Bearbeiten"-Button aus dem DOM, aber der Fokus wird nicht verschoben, sodass er für den Benutzer praktisch verschwindet. Dies kann verwirrend für Tastatur- und nicht-visuelle Benutzer sein.

Um zu verstehen, was derzeit geschieht:

1. Laden Sie Ihre Seite neu und drücken Sie <kbd>Tab</kbd>. Sie sollten einen Fokusumriss auf dem Eingabefeld zum Hinzufügen neuer To-Do-Elemente sehen.

2. Drücken Sie <kbd>Tab</kbd> erneut. Der Fokus sollte auf den "Hinzufügen"-Button wechseln.

3. Drücken Sie noch einmal, und der Fokus sollte auf der ersten Checkbox sein. Noch einmal, und der Fokus sollte auf dem ersten "Bearbeiten"-Button sein.
4. Aktivieren Sie den "Bearbeiten"-Button durch Drücken von <kbd>Enter</kbd>.
   Die Checkbox wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusumriss ist verschwunden.

Dieses Verhalten kann verwirrend sein. Zudem variiert das, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, je nachdem, welchen Browser Sie verwenden. Ähnlich verhält es sich, wenn Sie Ihre Bearbeitung speichern oder abbrechen, der Fokus verschwindet erneut, wenn Sie in die Nicht-Bearbeitungsansicht zurückkehren.

Um den Benutzern ein besseres Erlebnis zu bieten, fügen wir Code hinzu, um den Fokus so zu steuern, dass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten auch den Fokus zurück auf den "Bearbeiten"-Button setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus zu setzen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM) zur Verwaltung von Elementen. Das bedeutet, dass Vue eine Darstellung aller Knoten in unserer App im Speicher behält. Alle Updates werden zunächst an den im Speicher befindlichen Knoten vorgenommen, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Batch synchronisiert.

Da das Lesen und Schreiben von tatsächlichen DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dadurch das VDOM und das reale DOM nicht mehr synchron sind.

Wenn Sie Zugriff auf die zugrunde liegenden DOM-Knoten benötigen (wie beim Setzen des Fokus), können Sie stattdessen [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen, allerdings sollte dies mit Vorsicht erfolgen, da es den Code schwerer nachvollziehbar und verständlich machen kann.

Um einen Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem String-Bezeichner für den Wert des Attributs hinzu. Es ist wichtig zu beachten, dass ein Ref innerhalb einer Komponente eindeutig sein muss. Keine zwei Elemente, die gleichzeitig gerendert werden, sollten denselben Ref haben.

### Ein Ref zu unserer App hinzufügen

Lassen Sie uns also einen Ref an unseren "Bearbeiten"-Button in `ToDoItem.vue` anhängen. Aktualisieren Sie es folgendermaßen:

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

Um auf den mit unserem Ref assoziierten Wert zuzugreifen, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert des Refs zu sehen, wenn wir auf unseren "Bearbeiten"-Button klicken, fügen Sie unserer `toggleToItemEditForm()`-Methode ein `console.log()` hinzu, so:

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

Wenn Sie den "Bearbeiten"-Button an diesem Punkt aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole sehen, auf das verwiesen wird.

## Die $nextTick()-Methode von Vue

Wir möchten den Fokus auf den "Bearbeiten"-Button setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dafür müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der `ToDoItem`-Komponente verwalten.

Erstellen Sie zur Bequemlichkeit eine neue Methode, die keine Argumente nimmt und `focusOnEditButton()` genannt wird. Weisen Sie innerhalb dieser Methode Ihrem Ref eine Variable zu und rufen Sie dann die `focus()`-Methode auf dem Ref auf.

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

Fügen Sie dann am Ende der Methoden `itemEdited()` und `editCancelled()` einen Aufruf zu `this.focusOnEditButton()` hinzu:

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

Versuchen Sie, ein To-Do-Element über Ihre Tastatur zu bearbeiten und dann zu speichern/abbrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wird, sodass wir noch ein Problem lösen müssen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler in der Art von _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam. Ihr Button-Ref war definiert, als Sie den "Bearbeiten"-Button aktiviert haben, aber jetzt ist es das nicht mehr. Was ist da los?

Nun, denken Sie daran, dass wir, wenn wir `isEditing` auf `true` ändern, den Abschnitt der Komponente, der den "Bearbeiten"-Button enthält, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das der Ref gebunden werden kann, sodass es `undefined` wird.

Sie denken vielleicht „Hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf den Ref zuzugreifen, sodass das `v-if` nun den Button anzeigen sollte?“ Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, Änderungen zu optimieren und in Batches zusammenzufassen, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Wenn wir also `focusOnEditButton()` aufrufen, wurde der "Bearbeiten"-Button noch nicht gerendert.

Stattdessen müssen wir warten, bis Vue den nächsten DOM-Update-Zyklus durchläuft. Dazu haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach dem Aktualisieren des DOM aufgerufen werden muss, können wir den bestehenden Funktionsinhalt in einem `$nextTick()`-Aufruf einwickeln.

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

Jetzt, wenn Sie den "Bearbeiten"-Button aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus zurück auf den "Bearbeiten"-Button gesetzt werden. Erfolg!

## Vue-Lebenszyklusmethoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn der "Bearbeiten"-Button angeklickt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unser "Bearbeiten"-Button ist, können wir den Fokus nicht einfach im Click-Event-Handler des "Bearbeiten"-Buttons setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente immer dann entfernen und neu montieren, wenn der "Bearbeiten"-Button angeklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, bekannt als **Lebenszyklus**. Dieser Lebenszyklus erstreckt sich von der Zeit, bevor Elemente _erstellt_ und dem VDOM hinzugefügt werden (_mounted_), bis zu deren Entfernung aus dem VDOM (_destroyed_).

Vue ermöglicht das Ausführen von Methoden in verschiedenen Phasen dieses Lebenszyklus mit **Lebenszyklusmethoden**. Dies kann nützlich sein für Dinge wie das Abrufen von Daten, bei denen Sie möglicherweise Ihre Daten erhalten müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft geändert hat. Die Liste der Lebenszyklusmethoden ist unten, in der Reihenfolge, in der sie aufgerufen werden.

1. `beforeCreate()` — Läuft, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Läuft, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Hier erfolgen oft Datenabfragen.
3. `beforeMount()` — Läuft, nachdem Ihre Vorlage kompiliert wurde, aber bevor Ihre Komponente tatsächlich zum DOM hinzugefügt wird.
4. `mounted()` — Läuft, nachdem Ihre Komponente zum DOM hinzugefügt wurde. Refs können hier zugegriffen werden.
5. `beforeUpdate()` — Läuft, wann immer sich Daten in Ihrer Komponente ändern, aber bevor die Änderungen zum DOM gerendert werden.
6. `updated()` — Läuft, wann immer sich Daten in Ihrer Komponente geändert haben und nachdem die Änderungen zum DOM gerendert wurden.
7. `beforeDestroy()` — Läuft, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Nur verwendet in Komponenten, die in einem speziellen `keep-alive`-Tag eingewickelt sind. Läuft nach der Aktivierung der Komponente.
10. `deactivated()` — Nur verwendet in Komponenten, die in einem speziellen `keep-alive`-Tag eingewickelt sind. Läuft nach der Deaktivierung der Komponente.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm, um zu visualisieren, wann diese Hooks passieren](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog behandelt die Lebenszyklusmethoden ausführlicher](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Nachdem wir die Lebenszyklusmethoden durchgegangen sind, lassen Sie uns eine verwenden, um den Fokus zu setzen, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

Fügen Sie in `ToDoItemEditForm.vue` `ref="labelInput"` zum `<input>`-Element hinzu, so:

```vue
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als Nächstes eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass diese nicht innerhalb der `methods`-Eigenschaft platziert werden sollte, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods`.** Lebenszyklusmethoden sind spezielle Methoden, die alleine stehen und nicht neben benutzerdefinierten Methoden. Diese sollte keine Eingaben akzeptieren. Beachten Sie, dass Sie hier keinen Pfeilfunktion verwenden können, da wir Zugriff auf `this` benötigen, um auf unseren `labelInput`-Ref zuzugreifen.

```js
export default {
  // …
  mounted() {},
  // …
};
```

Weisen Sie in Ihrer `mounted()`-Methode Ihrem `labelInput`-Ref eine Variable zu und rufen Sie dann die `focus()`-Funktion auf dem Ref auf. Sie müssen hier `$nextTick()` nicht verwenden, da die Komponente bereits dem DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

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

Jetzt, wenn Sie den "Bearbeiten"-Button mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das Bearbeitungs-`<input>`-Element verschoben werden.

## Umgang mit Fokus beim Löschen von To-Do-Elementen

Es gibt noch einen weiteren Ort, an dem wir die Fokusverwaltung berücksichtigen müssen: wenn ein Benutzer ein To-Do-Element löscht. Wenn auf den "Bearbeiten"-Button geklickt wird, ergibt es Sinn, den Fokus auf das Eingabefeld zur Bearbeitung des Namens zu verschieben und zurück auf den "Bearbeiten"-Button, wenn vom Bearbeitungsbildschirm aus abgebrochen oder gespeichert wird.

Im Gegensatz zum Bearbeitungsformular haben wir jedoch keinen klaren Ort, an den der Fokus verschoben werden soll, wenn ein Element gelöscht wird. Wir benötigen auch eine Möglichkeit, Benutzern von unterstützender Technologie mitzuteilen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenkopfzeile — dem `<h2>` in `App.vue` — und es ist unserer Liste von To-Do-Elementen zugeordnet. Dies macht es zu einem vernünftigen Ort, um den Fokus hin zu verschieben, wenn wir einen Knoten löschen.

Zuerst müssen wir einen Ref zu unserer Listenkopfzeile hinzufügen. Wir müssen auch ein `tabindex="-1"` zu ihm hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), wenn dies standardmäßig nicht möglich ist.

Aktualisieren Sie Ihr `<h2>` in `App.vue` folgendermaßen:

```vue
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Hinweis:** [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist ein sehr leistungsfähiges Werkzeug zur Lösung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Der übermäßige Gebrauch von `tabindex="-1"` kann Probleme für alle Arten von Benutzern verursachen, verwenden Sie es daher nur dort, wo Sie es wirklich benötigen. Sie sollten auch fast nie einen `tabindex` > = `0` verwenden, da es für Benutzer Probleme verursachen kann, da es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmen lässt und/oder nicht interaktive Elemente zur Tab-Reihenfolge hinzufügt. Dies kann für Benutzer, insbesondere für diejenigen, die Screenreader und andere Hilfstechnologien verwenden, verwirrend sein.

Jetzt, da wir einen `ref` haben und den Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()` verwenden Sie den `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, müssen Sie sich keine Gedanken über die Verwendung von `$nextTick()` oder Lebenszyklusmethoden machen, um den Fokus darauf zu setzen.

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

Nun, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus zur Listenkopfzeile verschoben werden. Dies sollte eine vernünftige Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war es mit der Fokusverwaltung und unserer App! Herzlichen Glückwunsch, dass Sie sich durch alle unsere Vue-Tutorials gearbeitet haben. Im nächsten Artikel schließen wir mit einigen weiteren Ressourcen ab, um Ihr Vue-Wissen weiter zu vertiefen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
