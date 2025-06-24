---
title: Vue-Refs und Lebenszyklusmethoden für das Fokusmanagement
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Wir sind fast fertig mit Vue. Das letzte Stück Funktionalität, das wir uns ansehen müssen, ist das Fokusmanagement, oder anders ausgedrückt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man **Vue-Refs** verwendet, um dies zu handhaben — ein fortgeschrittenes Feature, das Ihnen direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOM oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kindkomponente ermöglicht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abzielt. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man das Fokusmanagement mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem des Fokusmanagements

Zwar haben wir eine funktionierende Bearbeitungsfunktionalität, aber wir bieten keine großartige Erfahrung für Benutzer ohne Maus. Insbesondere, wenn ein Benutzer den "Bearbeiten"-Button aktiviert, entfernen wir den "Bearbeiten"-Button aus dem DOM, aber wir verschieben den Fokus des Benutzers nirgendwohin, sodass er praktisch einfach verschwindet. Dies kann für Tastatur- und nicht-visuelle Benutzer verwirrend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten eine Fokuskontur auf dem Eingabefeld für das Hinzufügen neuer Aufgaben sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte sich auf den "Hinzufügen"-Button bewegen.

3. Drücken Sie nochmal, und der Fokus wird auf dem ersten Kontrollkästchen sein. Noch einmal drücken, und der Fokus sollte auf dem ersten "Bearbeiten"-Button sein.
4. Aktivieren Sie den "Bearbeiten"-Button, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber die Fokuskontur wird verschwunden sein.

Dieses Verhalten kann störend wirken. Darüber hinaus variiert, was geschieht, wenn Sie erneut <kbd>Tab</kbd> drücken, je nach verwendeter Browser. In ähnlicher Weise wird bei Speichern oder Abbrechen Ihrer Bearbeitung der Fokus erneut verschwinden, wenn Sie zurück zur Nicht-Bearbeitungssicht wechseln.

Um Benutzern eine bessere Erfahrung zu bieten, werden wir Code hinzufügen, um den Fokus zu steuern, sodass dieser auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir werden auch den Fokus wieder auf den "Bearbeiten"-Button setzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus festzulegen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Repräsentation aller Knoten in unserer App im Speicher hält. Alle Updates werden zunächst an den im Speicher befindlichen Knoten durchgeführt und dann alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Batch synchronisiert.

Da das Lesen und Schreiben tatsächlicher DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie Ihre HTML-Elemente beim Verwenden von Frameworks oft nicht direkt über native Browser-APIs bearbeiten sollten (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)), da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Stattdessen, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Setzen des Fokus), können Sie [Vue-Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie auch Refs verwenden, um direkt auf die interne Struktur einer Kindkomponente zuzugreifen. Dies sollte jedoch mit Vorsicht geschehen, da es den Code schwerer verständlich machen kann.

Um eine Ref in einer Komponente zu verwenden, fügen Sie dem Element, auf das Sie zugreifen möchten, ein `ref`-Attribut mit einem Zeichenfolgenbezeichner für den Wert des Attributs hinzu. Es ist wichtig zu beachten, dass eine Ref innerhalb einer Komponente eindeutig sein muss. Kein zwei Elemente, die gleichzeitig gerendert werden, sollten dieselbe Ref haben.

### Eine Ref zu unserer App hinzufügen

Lassen Sie uns also eine Ref an unseren "Bearbeiten"-Button in `ToDoItem.vue` anhängen. Aktualisieren Sie ihn so:

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

Um auf den mit unserer Ref verknüpften Wert zuzugreifen, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert der Ref zu sehen, wenn wir unseren "Bearbeiten"-Button klicken, fügen Sie ein `console.log()` zu unserer `toggleToItemEditForm()`-Methode hinzu, wie folgt:

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

Wenn Sie den "Bearbeiten"-Button an diesem Punkt aktivieren, sollten Sie ein HTML-`<button>`-Element in Ihrer Konsole referenziert sehen.

## Vues $nextTick()-Methode

Wir möchten den Fokus auf den "Bearbeiten"-Button setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dazu müssen wir den Fokus in den Methoden `itemEdited()` und `editCancelled()` der Komponente `ToDoItem` handhaben.

Zur Vereinfachung erstellen Sie eine neue Methode ohne Argumente namens `focusOnEditButton()`. Darin weisen Sie Ihre `ref` einer Variablen zu und rufen dann die `focus()`-Methode auf der Ref auf.

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

Fügen Sie als Nächstes einen Aufruf zu `this.focusOnEditButton()` am Ende der Methoden `itemEdited()` und `editCancelled()` hinzu:

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

Versuchen Sie, eine Aufgabe zu bearbeiten und dann zu speichern/abzubrechen über Ihre Tastatur. Sie werden bemerken, dass der Fokus nicht gesetzt wird, sodass wir immer noch ein Problem lösen müssen. Wenn Sie Ihre Konsole öffnen, wird ein Fehler angezeigt, der in etwa lautet: _"can't access property "focus", editButtonRef is undefined"_. Das scheint seltsam. Ihre Button-Ref war definiert, als Sie den "Bearbeiten"-Button aktiviert haben, jetzt jedoch nicht mehr. Was passiert hier?

Nun, denken Sie daran, dass wir, wenn wir `isEditing` auf `true` ändern, den Abschnitt der Komponente, der den "Bearbeiten"-Button enthält, nicht mehr rendern. Das bedeutet, dass es kein Element gibt, an das die Ref gebunden werden kann, daher wird sie `undefined`.

Sie denken jetzt vielleicht "Hey, setzen wir nicht `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen? Sollte daher das `v-if` nicht den Button anzeigen?" Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, zu optimieren und Änderungen in Batches durchzuführen, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Wenn wir also `focusOnEditButton()` aufrufen, wurde der "Bearbeiten"-Button noch nicht gerendert.

Stattdessen müssen wir warten, bis nach dem nächsten DOM-Update-Zyklus von Vue. Zu diesem Zweck haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Rückruffunktion, die nach den DOM-Updates ausgeführt wird.

Da die `focusOnEditButton()`-Methode nach dem DOM-Update aufgerufen werden muss, können wir den bestehenden Funktionskörper in einem `$nextTick()`-Aufruf einschließen.

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

Jetzt, wenn Sie den "Bearbeiten"-Button aktivieren und dann Ihre Änderungen über die Tastatur abbrechen oder speichern, sollte der Fokus auf den "Bearbeiten"-Button zurückkehrt werden. Erfolg!

## Vues Lebenszyklusmethoden

Als Nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn der "Bearbeiten"-Button gedrückt wird. Da unser Bearbeitungsformular jedoch in einer anderen Komponente als unser "Bearbeiten"-Button ist, können wir den Fokus nicht einfach im Klick-Event-Handler des "Bearbeiten"-Buttons setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente entfernen und neu laden, wann immer der "Bearbeiten"-Button gedrückt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, bekannt als **Lebenszyklus**. Dieser Lebenszyklus erstreckt sich vom Erstellen und Hinzufügen von Elementen zum VDOM (Einbinden) bis zur Entfernung aus dem VDOM (Verworfen).

Vue lässt Sie Methoden in verschiedenen Stadien dieses Lebenszyklus ausführen, indem **Lebenszyklusmethoden** verwendet werden. Dies kann nützlich sein für Dinge wie das Abrufen von Daten, bei denen Sie Ihre Daten möglicherweise abrufen müssen, bevor Ihre Komponente gerendert wird, oder nachdem sich eine Eigenschaft geändert hat. Die Liste der Lebenszyklusmethoden ist unten in der Reihenfolge, in der sie ausgelöst werden.

1. `beforeCreate()` — Läuft, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Läuft, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente dem VDOM hinzugefügt wird. Hier erfolgt häufig das Abrufen von Daten.
3. `beforeMount()` — Läuft, nachdem Ihre Vorlage kompiliert wurde, aber bevor Ihre Komponente zum tatsächlichen DOM gerendert wird.
4. `mounted()` — Läuft, nachdem Ihre Komponente zum DOM hinzugefügt wurde. Hier können `refs` verwendet werden.
5. `beforeUpdate()` — Läuft immer dann, wenn sich die Daten Ihrer Komponente ändern, jedoch bevor die Änderungen zum DOM gerendert werden.
6. `updated()` — Läuft immer dann, wenn sich die Daten Ihrer Komponente geändert haben und nachdem die Änderungen zum DOM gerendert wurden.
7. `beforeDestroy()` — Läuft, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Läuft, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag umhüllt sind. Läuft, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in einem speziellen `keep-alive`-Tag umhüllt sind. Läuft, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [schönes Diagramm zur Visualisierung, wann diese Hooks passieren](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel aus dem [DigitalOcean Community Blog taucht tiefer in die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Jetzt, da wir die Lebenszyklusmethoden durchgegangen sind, lassen Sie uns eine davon verwenden, um den Fokus auszulösen, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

In `ToDoItemEditForm.vue`, fügen Sie `ref="labelInput"` an das `<input>`-Element an, wie folgt:

```vue
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie als Nächstes eine `mounted()`-Eigenschaft direkt in Ihrem Komponentenobjekt hinzu — **beachten Sie, dass dies nicht innerhalb der `methods`-Eigenschaft, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods` erfolgen sollte.** Lebenszyklusmethoden sind spezielle Methoden, die für sich allein stehen, nicht neben den vom Benutzer definierten Methoden. Diese Methode sollte keine Eingaben annehmen. Beachten Sie, dass Sie hier keine Pfeilfunktionen verwenden können, da wir Zugriff auf `this` benötigen, um unsere `labelInput`-Ref zuzugreifen.

```js
export default {
  // …
  mounted() {},
  // …
};
```

Innerhalb Ihrer `mounted()`-Methode weisen Sie Ihre `labelInput`-Ref einer Variablen zu und rufen dann die `focus()`-Funktion der Ref auf. Sie müssen hier nicht `$nextTick()` verwenden, weil die Komponente bereits dem DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

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

Jetzt, wenn Sie den "Bearbeiten"-Button mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das `<input>` des Bearbeitungsformulars verschoben werden.

## Umgang mit dem Fokus beim Löschen von Aufgaben

Es gibt noch einen weiteren Bereich, in dem wir das Fokusmanagement berücksichtigen müssen: beim Löschen einer Aufgabe. Wenn Sie den "Bearbeiten"-Button drücken, macht es Sinn, den Fokus auf das Textfeld für den Namen zu verschieben und zurück zum "Bearbeiten"-Button, wenn Sie vom Bearbeitungsbildschirm abbrechen oder speichern.

Unlike beim Bearbeitungsformular haben wir jedoch keinen klaren Ort, zu dem der Fokus verschoben werden soll, wenn ein Element gelöscht wird. Wir benötigen außerdem eine Möglichkeit, um Benutzern von Hilfstechnologien die Bestätigung zu geben, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenkopfzeile — dem `<h2>` in `App.vue` — und sie ist mit unserer Liste der Aufgaben verknüpft. Dies macht es zu einem vernünftigen Ort, um den Fokus hin zu bewegen, wenn wir einen Knoten löschen.

Zuerst müssen wir eine Ref zu unserer Listenkopfzeile hinzufügen. Außerdem müssen wir einen `tabindex="-1"` hinzufügen — dies macht das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), obwohl es standardmäßig nicht fokussierbar ist.

Innerhalb von `App.vue` aktualisieren Sie Ihr `<h2>` wie folgt:

```vue
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> [!NOTE] > [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist ein wirklich mächtiges Tool zur Handhabung bestimmter Zugänglichkeitsprobleme. Es sollte jedoch mit Vorsicht verwendet werden. Das übermäßige Verwenden von `tabindex="-1"` kann allerlei Nutzerprobleme verursachen, also verwenden Sie es genau dort, wo Sie es wirklich brauchen. Sie sollten fast nie `tabindex` >= `0` verwenden, da es Probleme für Benutzer verursachen kann, da es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmend machen kann und/oder nicht-interaktive Elemente der Tab-Reihenfolge hinzufügt. Das kann verwirrend sein, insbesondere für Benutzer, die Bildschirmlesegeräte und andere Hilfstechnologien verwenden.

Jetzt, da wir eine `ref` haben und den Browsern mitgeteilt haben, dass wir den `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()` verwenden Sie die `listSummary`-Ref, um den Fokus auf den `<h2>` zu setzen. Da der `<h2>` immer in der App gerendert ist, müssen Sie sich keine Sorgen um die Verwendung von `$nextTick()` oder Lebenszyklusmethoden zum Handhaben des Fokus machen.

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

Jetzt, wenn Sie ein Element aus Ihrer Liste löschen, sollte der Fokus nach oben zur Listenkopfzeile verschoben werden. Dies sollte eine angemessene Fokuserfahrung für alle unsere Benutzer bieten.

## Zusammenfassung

Das war's also für das Fokusmanagement und für unsere App! Herzlichen Glückwunsch, dass Sie alle unsere Vue-Tutorials durchgearbeitet haben. Im nächsten Artikel werden wir die Dinge mit einigen weiteren Ressourcen abschließen, um Ihr Vue-Lernen weiter voranzutreiben.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem todo-vue-Repository. Eine laufende Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
