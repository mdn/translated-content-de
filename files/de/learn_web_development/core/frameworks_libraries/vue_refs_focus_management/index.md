---
title: Vue-Refs und Lebenszyklusmethoden für Fokussierungsverwaltung
slug: Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Für weitere Informationen siehe [diese Diskussion](https://github.com/orgs/mdn/discussions/827).

Wir sind fast fertig mit Vue. Der letzte Funktionsaspekt, den wir betrachten werden, ist die Fokussierungsverwaltung, oder anders gesagt, wie wir die Tastaturzugänglichkeit unserer App verbessern können. Wir werden uns ansehen, wie man **Vue-Refs** verwendet, um dies zu handhaben — ein fortgeschrittenes Feature, das es Ihnen ermöglicht, direkten Zugriff auf die zugrunde liegenden DOM-Knoten unterhalb des virtuellen DOMs zu haben, oder direkten Zugriff von einer Komponente auf die interne DOM-Struktur einer Kinderkomponente.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single-File-Komponenten oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man die Fokussierungsverwaltung mit Vue-Refs handhabt.</td>
    </tr>
  </tbody>
</table>

## Das Problem der Fokussierungsverwaltung

Obwohl wir über eine funktionierende Bearbeitungsfunktionalität verfügen, bieten wir keine großartige Erfahrung für Benutzer ohne Maus. Insbesondere, wenn ein Benutzer den "Bearbeiten"-Button aktiviert, entfernen wir den "Bearbeiten"-Button aus dem DOM, aber wir verschieben den Benutzerfokus nirgendwohin, sodass er im Grunde einfach verschwindet. Dies kann für Tastatur- und Nicht-Sicht-Benutzer verwirrend sein.

Um zu verstehen, was derzeit passiert:

1. Laden Sie Ihre Seite neu und drücken Sie dann <kbd>Tab</kbd>. Sie sollten einen Fokusrahmen auf dem Eingabefeld für das Hinzufügen neuer To-Do-Elemente sehen.

2. Drücken Sie erneut <kbd>Tab</kbd>. Der Fokus sollte auf den "Hinzufügen"-Button übergehen.

3. Drücken Sie erneut, und der Fokus wird auf das erste Kontrollkästchen gelegt. Noch einmal, und der Fokus sollte auf dem ersten "Bearbeiten"-Button liegen.
4. Aktivieren Sie den "Bearbeiten"-Button, indem Sie <kbd>Enter</kbd> drücken.
   Das Kontrollkästchen wird durch unsere Bearbeitungskomponente ersetzt, aber der Fokusrahmen wird verschwunden sein.

Dieses Verhalten kann irritierend sein. Außerdem hängt das, was passiert, wenn Sie erneut <kbd>Tab</kbd> drücken, vom verwendeten Browser ab. Ebenso verschwindet der Fokus, wenn Sie Ihre Bearbeitung speichern oder abbrechen, da Sie zur Nicht-Bearbeitungsansicht zurückkehren.

Um den Benutzern eine bessere Erfahrung zu bieten, werden wir Code hinzufügen, um den Fokus zu steuern, sodass er auf das Bearbeitungsfeld gesetzt wird, wenn das Bearbeitungsformular angezeigt wird. Wir möchten den Fokus auch auf den "Bearbeiten"-Button zurücksetzen, wenn ein Benutzer seine Bearbeitung abbricht oder speichert. Um den Fokus festzulegen, müssen wir ein wenig mehr darüber verstehen, wie Vue intern funktioniert.

## Virtuelles DOM und Refs

Vue verwendet, wie einige andere Frameworks, ein virtuelles DOM (VDOM), um Elemente zu verwalten. Das bedeutet, dass Vue eine Darstellung aller Knoten unserer App im Speicher behält. Jegliche Updates werden zuerst an den im Speicher befindlichen Knoten durchgeführt, und dann werden alle Änderungen, die an den tatsächlichen Knoten auf der Seite vorgenommen werden müssen, in einem Batch synchronisiert.

Da das Lesen und Schreiben von tatsächlichen DOM-Knoten oft teurer ist als virtuelle Knoten, kann dies zu einer besseren Leistung führen. Es bedeutet jedoch auch, dass Sie normalerweise Ihre HTML-Elemente nicht direkt über native Browser-APIs (wie [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)) bearbeiten sollten, wenn Sie Frameworks verwenden, da dies dazu führt, dass das VDOM und das reale DOM nicht mehr synchron sind.

Stattdessen, wenn Sie auf die zugrunde liegenden DOM-Knoten zugreifen müssen (wie beim Festlegen des Fokus), können Sie [Vue Refs](https://vuejs.org/guide/essentials/template-refs.html) verwenden. Für benutzerdefinierte Vue-Komponenten können Sie Refs auch verwenden, um direkt auf die interne Struktur einer Kinderkomponente zuzugreifen, dies sollte jedoch mit Vorsicht geschehen, da es den Code schwerer verständlich machen kann.

Um eine Ref in einer Komponente zu verwenden, fügen Sie das `ref`-Attribut zu dem Element hinzu, auf das Sie zugreifen möchten, mit einem String-Identifikator für den Wert des Attributs. Es ist wichtig zu beachten, dass eine Ref innerhalb einer Komponente einzigartig sein muss. Keine zwei gleichzeitig gerenderten Elemente sollten dieselbe Ref haben.

### Hinzufügen einer Ref zu unserer App

Lassen Sie uns also eine Ref an unseren "Bearbeiten"-Button in `ToDoItem.vue` anhängen. Aktualisieren Sie ihn wie folgt:

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

Um auf den Wert zuzugreifen, der mit unserer Ref verknüpft ist, verwenden wir die `$refs`-Eigenschaft, die auf unserer Komponenteninstanz bereitgestellt wird. Um den Wert der Ref zu sehen, wenn wir unseren "Bearbeiten"-Button anklicken, fügen Sie einen `console.log()` zu unserer `toggleToItemEditForm()`-Methode hinzu, wie folgt:

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

Wenn Sie den "Bearbeiten"-Button zu diesem Zeitpunkt aktivieren, sollten Sie ein HTML `<button>`-Element sehen, das in Ihrer Konsole referenziert wird.

## Die $nextTick() Methode von Vue

Wir möchten den Fokus auf den "Bearbeiten"-Button setzen, wenn ein Benutzer seine Bearbeitung speichert oder abbricht. Dafür müssen wir den Fokus in den `itemEdited()`- und `editCancelled()`-Methoden der `ToDoItem`-Komponente handhaben.

Erstellen Sie der Einfachheit halber eine neue Methode, die keine Argumente nimmt, namens `focusOnEditButton()`. Darin weisen Sie Ihre `ref` einer Variablen zu und rufen dann die `focus()`-Methode auf der Ref auf.

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

Als Nächstes fügen Sie am Ende der `itemEdited()`- und `editCancelled()`-Methoden einen Aufruf von `this.focusOnEditButton()` hinzu:

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

Versuchen Sie, ein To-Do-Element zu bearbeiten und dann über Ihre Tastatur zu speichern/abbrechen. Sie werden feststellen, dass der Fokus nicht gesetzt wurde, also haben wir immer noch ein Problem zu lösen. Wenn Sie Ihre Konsole öffnen, sehen Sie einen Fehler, der in etwa lautet: _"can't access property "focus", editButtonRef is undefined"_. Das erscheint seltsam. Ihre Button-Ref war definiert, als Sie den "Bearbeiten"-Button aktiviert haben, aber jetzt nicht mehr. Was ist los?

Nun, denken Sie daran, dass wenn wir `isEditing` auf `true` setzen, wir den Abschnitt der Komponente, der den "Bearbeiten"-Button enthält, nicht mehr rendern. Das bedeutet, dass es kein Element mehr gibt, an das die Ref gebunden werden kann, also wird sie `undefined`.

Sie denken vielleicht jetzt: "Hey, wir setzen doch `isEditing=false`, bevor wir versuchen, auf die `ref` zuzugreifen, also sollte das `v-if` jetzt den Button anzeigen?" Hier kommt das virtuelle DOM ins Spiel. Da Vue versucht, Änderungen zu optimieren und zu batchen, wird das DOM nicht sofort aktualisiert, wenn wir `isEditing` auf `false` setzen. Wenn wir also `focusOnEditButton()` aufrufen, wurde der "Bearbeiten"-Button noch nicht gerendert.

Stattdessen müssen wir warten, bis nach dem nächsten DOM-Aktualisierungszyklus von Vue. Dafür haben Vue-Komponenten eine spezielle Methode namens `$nextTick()`. Diese Methode akzeptiert eine Callback-Funktion, die dann nach den DOM-Updates ausgeführt wird.

Da die Methode `focusOnEditButton()` nach der DOM-Aktualisierung aufgerufen werden muss, können wir den bestehenden Funktionskörper in einen `$nextTick()`-Aufruf einwickeln.

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

Jetzt, wenn Sie den "Bearbeiten"-Button aktivieren und dann über die Tastatur abbrechen oder speichern, sollte der Fokus auf den "Bearbeiten"-Button zurückkehren. Erfolg!

## Lebenszyklusmethoden von Vue

Als nächstes müssen wir den Fokus auf das `<input>`-Element des Bearbeitungsformulars verschieben, wenn der "Bearbeiten"-Button angeklickt wird. Da sich unser Bearbeitungsformular jedoch in einer anderen Komponente als unser "Bearbeiten"-Button befindet, können wir den Fokus nicht einfach im Klickereignishandler des "Bearbeiten"-Buttons setzen. Stattdessen können wir die Tatsache nutzen, dass wir unsere `ToDoItemEditForm`-Komponente jedes Mal entfernen und wieder montieren, wenn der "Bearbeiten"-Button angeklickt wird, um dies zu handhaben.

Wie funktioniert das? Nun, Vue-Komponenten durchlaufen eine Reihe von Ereignissen, die als **Lebenszyklus** bekannt sind. Dieser Lebenszyklus erstreckt sich von bevor Elemente erstellt und zum VDOM hinzugefügt (_mounted_) werden, bis sie aus dem VDOM entfernt (_destroyed_) werden.

Vue ermöglicht es Ihnen, Methoden in verschiedenen Stadien dieses Lebenszyklus auszuführen, indem Sie **Lebenszyklusmethoden** verwenden. Dies kann nützlich für Dinge wie Datenabruf sein, wo Sie möglicherweise Ihre Daten abrufen müssen, bevor Ihre Komponente rendert, oder nachdem sich eine Eigenschaft ändert. Die Liste der Lebenszyklusmethoden ist unten in der Reihenfolge, in der sie feuern.

1. `beforeCreate()` — Wird ausgeführt, bevor die Instanz Ihrer Komponente erstellt wird. Daten und Ereignisse sind noch nicht verfügbar.
2. `created()` — Wird ausgeführt, nachdem Ihre Komponente initialisiert wurde, aber bevor die Komponente zum VDOM hinzugefügt wird. Dies ist häufig der Ort, an dem Datenabruf erfolgt.
3. `beforeMount()` — Wird ausgeführt, nachdem Ihre Vorlage kompiliert, aber bevor Ihre Komponente zum tatsächlichen DOM gerendert wird.
4. `mounted()` — Wird ausgeführt, nachdem Ihre Komponente zum DOM montiert wurde. Hier kann auf `refs` zugegriffen werden.
5. `beforeUpdate()` — Wird ausgeführt, wenn Daten in Ihrer Komponente geändert werden, aber bevor die Änderungen zum DOM gerendert werden.
6. `updated()` — Wird ausgeführt, nachdem Daten in Ihrer Komponente geändert wurden und die Änderungen zum DOM gerendert wurden.
7. `beforeDestroy()` — Wird ausgeführt, bevor eine Komponente aus dem DOM entfernt wird.
8. `destroyed()` — Wird ausgeführt, nachdem eine Komponente aus dem DOM entfernt wurde.
9. `activated()` — Wird nur in Komponenten verwendet, die in ein spezielles `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente aktiviert wurde.
10. `deactivated()` — Wird nur in Komponenten verwendet, die in ein spezielles `keep-alive`-Tag eingeschlossen sind. Wird ausgeführt, nachdem die Komponente deaktiviert wurde.

> [!NOTE]
> Die Vue-Dokumentation bietet ein [anschauliches Diagramm zur Visualisierung der Zeitpunkte dieser Hooks](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram). Dieser Artikel im [DigitalOcean Community Blog geht tiefer auf die Lebenszyklusmethoden ein](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Jetzt, da wir die Lebenszyklusmethoden durchgegangen sind, verwenden wir eine, um den Fokus auszulösen, wenn unsere `ToDoItemEditForm`-Komponente montiert wird.

In `ToDoItemEditForm.vue` fügen Sie `ref="labelInput"` zum `<input>`-Element hinzu, wie folgt:

```vue
<input
  :id="id"
  ref="labelInput"
  type="text"
  autocomplete="off"
  v-model.lazy.trim="newName" />
```

Fügen Sie nun eine `mounted()`-Eigenschaft direkt innerhalb Ihres Komponentenobjekts hinzu — **beachten Sie, dass diese nicht in die `methods`-Eigenschaft aufgenommen werden sollte, sondern auf derselben Hierarchieebene wie `props`, `data()` und `methods` steht.** Lebenszyklusmethoden sind spezielle Methoden, die für sich allein stehen und nicht neben den benutzerdefinierten Methoden. Diese sollten keine Eingaben nehmen. Beachten Sie, dass Sie hier keine Pfeilfunktion verwenden können, da wir auf `this` zugreifen müssen, um auf unsere `labelInput`-Ref zuzugreifen.

```js
export default {
  // …
  mounted() {},
  // …
};
```

Weisen Sie innerhalb Ihrer `mounted()`-Methode Ihre `labelInput`-Ref einer Variablen zu und rufen Sie dann die `focus()`-Funktion der Ref auf. Sie müssen hier nicht `$nextTick()` verwenden, da die Komponente bereits zum DOM hinzugefügt wurde, wenn `mounted()` aufgerufen wird.

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

Wenn Sie jetzt den "Bearbeiten"-Button mit Ihrer Tastatur aktivieren, sollte der Fokus sofort auf das Bearbeitungs-`<input>` verschoben werden.

## Umgang mit Fokus beim Löschen von To-Do-Elementen

Es gibt noch einen weiteren Ort, an dem wir die Fokussierungsverwaltung berücksichtigen müssen: wenn ein Benutzer ein To-Do-Element löscht. Beim Klicken des "Bearbeiten"-Buttons macht es Sinn, den Fokus auf das Textfeld für den Namen zu verschieben und wieder auf den "Bearbeiten"-Button zurück, wenn Sie bei der Bearbeitung abbrechen oder speichern.

Im Gegensatz zum Bearbeitungsformular haben wir jedoch keinen klaren Ort, um den Fokus hin zu verschieben, wenn ein Element gelöscht wird. Wir benötigen auch eine Möglichkeit, Benutzern von unterstützenden Technologien Informationen bereitzustellen, die bestätigen, dass ein Element gelöscht wurde.

Wir verfolgen bereits die Anzahl der Elemente in unserer Listenüberschrift — dem `<h2>` in `App.vue` — und diese ist mit unserer Liste von To-Do-Elementen verknüpft. Dies macht sie zu einem vernünftigen Ort, um den Fokus hin zu bewegen, wenn wir einen Knoten löschen.

Zuerst müssen wir eine Ref zu unserer Listenüberschrift hinzufügen. Wir müssen auch ein `tabindex="-1"` hinzufügen — dadurch wird das Element programmatisch fokussierbar (d.h. es kann über JavaScript fokussiert werden), wenn es standardmäßig nicht fokussierbar ist.

Aktualisieren Sie in `App.vue` Ihr `<h2>` wie folgt:

```vue
<h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> [!NOTE]
> [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ist ein sehr leistungsfähiges Werkzeug zur Lösung bestimmter Zugänglichkeitsprobleme. Allerdings sollte es mit Vorsicht verwendet werden. Eine übermäßige Verwendung von `tabindex="-1"` kann für alle möglichen Benutzer Probleme verursachen, daher sollten Sie es nur dort einsetzen, wo es genau benötigt wird. Sie sollten auch fast nie `tabindex` > = `0` verwenden, da es Benutzern Probleme bereiten kann, da es den DOM-Fluss und die Tab-Reihenfolge nicht übereinstimmen lassen kann und/oder nicht interaktive Elemente der Tab-Reihenfolge hinzufügt. Das kann für Benutzer verwirrend sein, insbesondere für solche, die Screenreader und andere unterstützende Technologien verwenden.

Jetzt, da wir eine `ref` haben und Browsern mitgeteilt haben, dass wir das `<h2>` programmatisch fokussieren können, müssen wir den Fokus darauf setzen. Am Ende von `deleteToDo()` verwenden Sie die `listSummary`-Ref, um den Fokus auf das `<h2>` zu setzen. Da das `<h2>` immer in der App gerendert wird, müssen Sie sich keine Gedanken über die Verwendung von `$nextTick()` oder Lebenszyklusmethoden machen, um den Fokus darauf zu setzen.

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

Wenn Sie jetzt ein Element aus Ihrer Liste löschen, sollte der Fokus auf die Listenüberschrift verschoben werden. Dies sollte eine vernünftige Fokuserfahrung für all unsere Benutzer bieten.

## Zusammenfassung

Das war es also zur Fokussierungsverwaltung und zu unserer App! Herzlichen Glückwunsch, dass Sie alle unsere Vue-Tutorials durchgearbeitet haben. Im nächsten Artikel werden wir die Sache mit einigen weiteren Ressourcen abschließen, um Ihr Vue-Lernen weiterzuführen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispielcodes für die Vue-App in unserem todo-vue-Repository. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/Vue_resources", "Learn_web_development/Core/Frameworks_libraries")}}
