---
title: "Hinzufügen eines neuen Todo-Formulars: Vue-Events, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Wir haben nun Beispieldaten und eine Schleife, die jedes Datenstück nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir als nächstes wirklich brauchen, ist die Möglichkeit, unseren Nutzern das Eingeben ihrer eigenen Todo-Elemente in die App zu ermöglichen. Dazu benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Dies werden wir in diesem Artikel behandeln.

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
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax,
          die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation
          und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components
          oder Rendermethoden) benötigen Sie ein Terminal mit installierten node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen der Formularbearbeitung in Vue und damit verbunden der Ereignisse,
        Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Ein neues To-Do-Formular erstellen

Wir haben jetzt eine App, die eine Liste von To-Do-Elementen anzeigt. Allerdings können wir unsere Liste von Elementen nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und ein `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Fügen Sie ein HTML-Formular hinzu, das es ermöglicht, ein neues Todo-Element einzugeben und es in die App zu übermitteln. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihre Vorlage wie folgt:

   ```vue
   <template>
     <form>
       <label for="new-todo-input"> What needs to be done? </label>
       <input
         type="text"
         id="new-todo-input"
         name="new-todo"
         autocomplete="off" />
       <button type="submit">Add</button>
     </form>
   </template>
   ```

   Wir haben jetzt eine Formularkomponente, in die wir den Titel eines neuen Todo-Elements eingeben können (die beim Rendern zum Label des entsprechenden `ToDoItem` wird).

4. Laden Sie diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen innerhalb Ihres `<script>`-Elements hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Registrieren Sie die neue Komponente in Ihrer `App`-Komponente — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, damit es so aussieht:

   ```js
   export default {
     // …
     components: {
       ToDoItem,
       ToDoForm,
     },
     // …
   };
   ```

6. Rendern Sie abschließend für diesen Abschnitt Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb Ihres `<template>`-Elements der `App` wie folgt hinzufügen:

   ```vue
   <template>
     <div id="app">
       <h1>My To-Do List</h1>
       <to-do-form></to-do-form>
       <ul>
         <li v-for="item in ToDoItems" :key="item.id">
           <to-do-item
             :label="item.label"
             :done="item.done"
             :id="item.id"></to-do-item>
         </li>
       </ul>
     </div>
   </template>
   ```

Wenn Sie nun Ihre laufende Seite ansehen, sollten Sie das neue Formular angezeigt sehen.

![Unsere Todo-Listen-App gerendert mit einem Texteingabefeld, um neue Todos einzugeben](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Add" klicken, postet die Seite das Formular zurück an den Server, aber das ist nicht wirklich das, was wir wollen. Was wir eigentlich wollen, ist, eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo-Element zur `ToDoItem`-Datenliste in `App` hinzufügt. Dazu müssen wir der Komponenteninstanz eine Methode hinzufügen.

## Eine Methode erstellen und mit v-on an ein Ereignis binden

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und dies geschieht innerhalb einer `methods`-Eigenschaft unserer Komponente, die an der gleichen Stelle wie `data()`, `props` usw. steht. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Wenn auf sie verwiesen wird, werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb der Vorlage zu verwenden. Um Daten anzuzeigen, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zur `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir verwenden diese, um die Übermittlungsaktion zu handhaben.

   Fügen Sie dies wie folgt hinzu:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
   };
   ```

2. Als Nächstes müssen wir die Methode an den `submit`-Ereignishandler des `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert mit der `v-on:event="method"`-Syntax. Und ähnlich wie bei `v-bind` gibt es auch eine Kurzsyntax: `@event="method"`.

   Wir verwenden hier die Kurzsyntax zur Konsistenz. Fügen Sie den `submit`-Handler wie folgt zu Ihrem `<form>`-Element hinzu:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, postet die App die Daten immer noch zum Server, was einen Refresh verursacht. Da wir unsere gesamte Verarbeitung auf dem Client durchführen, gibt es keinen Server, um die Rücksendung zu verarbeiten. Wir verlieren auch den gesamten lokalen Zustand bei Seitenaktualisierung. Um zu verhindern, dass der Browser an den Server postet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite blubbert ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die dies direkt in unserer Vorlage für uns übernehmen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt angehängt, zum Beispiel: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:
   - `.stop`: Stoppt die Weitergabe des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) bei regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis genau von diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrwortige Tasten müssen einfach in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z.B., `page-down`).
   - `.native`: Lauscht auf ein natales Ereignis auf dem Root-Element (äußerstes Wrapper-Element) Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur bei einem linken Maustastenklickereignis aus.
   - `.right`: Löst den Handler nur bei einem rechten Maustastenklickereignis aus.
   - `.middle`: Löst den Handler nur bei einem mittleren Maustastenklickereignis aus.
   - `.passive`: Entspricht der Verwendung des Parameters `{ passive: true }`, wenn ein Ereignislistener in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erstellt wird.

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Einreichungsaktion des Browsers zu stoppen. Fügen Sie `.prevent` wie folgt zum `@submit`-Handler in Ihrer Vorlage hinzu:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie nun versuchen, das Formular abzusenden, werden Sie feststellen, dass die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, die wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Daten mit v-model an Eingaben binden

Als nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue Todo-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des Todos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den anfänglichen Wert des `label` auf eine leere Zeichenfolge setzen.

   Ihr Komponentenobjekt sollte jetzt in etwa so aussehen:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
     data() {
       return {
         label: "",
       };
     },
   };
   ```

2. Wir benötigen nun eine Möglichkeit, den Wert des `new-todo-input`-Felds an das `label`-Feld anzukoppeln. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die von Ihnen festgelegte Daten-Eigenschaft und hält sie mit dem `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Checkboxes, Radios und Select-Eingaben. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld wie unten gezeigt hinzufügen. Tun Sie dies jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können `<input>`-Werte auch mithilfe einer Kombination aus Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich macht `v-model` genau das im Hintergrund. Allerdings variieren die genaue Ereignis- und Attributkombination je nach Eingabetypen und erfordert mehr Code als nur die Verwendung der `v-model`-Verknüpfung.

3. Testen wir unsere Verwendung von `v-model`, indem wir den Wert der in unserer `onSubmit()`-Methode übermittelten Daten protokollieren. In Komponenten werden Datenattribute mit dem Schlüsselwort `this` aufgerufen. Also greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie so aussieht:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("Label value: ", this.label);
       },
     },
   };
   ```

4. Gehen Sie jetzt zurück zu Ihrer laufenden App, fügen Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Add". Sie sollten sehen, dass der eingegebene Wert in der Konsole protokolliert wird, zum Beispiel:

   ```plain
   Label value: My value
   ```

## V-Model-Verhalten mit Modifikatoren ändern

In ähnlicher Weise wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei Modifikatoren, die wir in Betracht ziehen sollten. Der erste, `.trim`, entfernt Leerzeichen vor und nach der Eingabe. Wir können den Modifikator der `v-model`-Anweisung wie folgt hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, ist `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, synchronisiert `v-model` Daten durch Aktualisierung der Variablen mithilfe von Ereignissen. Bei Texteingaben erfolgt diese Synchronisierung mit dem [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verkettet angeben, zum Beispiel: `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an beiden Enden einzugeben.

## Daten an Elternkomponenten mit benutzerdefinierten Ereignissen übergeben

Wir sind nun sehr nah dran, neue To-Do-Elemente zu unserer Liste hinzufügen zu können. Das nächste, was wir tun müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dazu kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten übergibt, und `App` kann darauf hören. Dies funktioniert sehr ähnlich wie native Ereignisse auf HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, das über `v-on` abgehört werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitiv sind und keine Leerzeichen enthalten können. Vue-Vorlagen werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Vorlagen nicht auf Ereignisse hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als nächstes zurück zu `App.vue` und fügen Sie Ihrer Komponenten-Objekteigenschaft eine `methods`-Eigenschaft hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Diese Methode kann vorerst einfach `To-do added` in die Konsole loggen.

   ```js
   export default {
     name: "app",
     components: {
       ToDoItem,
       ToDoForm,
     },
     data() {
       return {
         ToDoItems: [
           { id: `todo-${nanoid()}`, label: "Learn Vue", done: false },
           {
             id: `todo-${nanoid()}`,
             label: "Create a Vue project with the CLI",
             done: true,
           },
           { id: `todo-${nanoid()}`, label: "Have fun", done: true },
           {
             id: `todo-${nanoid()}`,
             label: "Create a to-do list",
             done: false,
           },
         ],
       };
     },
     methods: {
       addToDo() {
         console.log("To-do added");
       },
     },
   };
   ```

3. Fügen Sie als nächstes einen Ereignis-Listener für das `todo-added`-Ereignis zur `<to-do-form></to-do-form>` hinzu, der die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Kurzsyntax sieht der Listener so aus: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` übermitteln, sollten Sie die Konsolenprotokollierung von der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben noch keine Daten zurück an die `App.vue`-Komponente. Das können wir erreichen, indem wir zusätzliche Argumente zur `this.$emit()`-Funktion zurück in der `ToDoForm`-Komponente übergeben.

   In diesem Fall, wenn wir das Ereignis auslösen, wollen wir die `label`-Daten zusammen mit übergeben. Dies kann durch das Übergeben der Daten, die Sie übergeben möchten, als weiteren Parameter in der `$emit()`-Methode geschehen: `this.$emit("todo-added", this.label)`. Dies ähnelt der Art und Weise, wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse kein Ereignisobjekt standardmäßig enthalten. Dies bedeutet, dass das emittierte Ereignis direkt dem Objekt entspricht, das Sie übergeben. In unserem Fall wird unser Ereignisobjekt also nur eine Zeichenfolge sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   export default {
     // …
     methods: {
       // …
       onSubmit() {
         this.$emit("todo-added", this.label);
       },
       // …
     },
     // …
   };
   ```

5. Um diese Daten tatsächlich in `App.vue` abzurufen, müssen wir unserer `addToDo()`-Methode ein Parameter hinzufügen, das das `label` des neuen To-Do-Elements beinhaltet.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie dies jetzt:

   ```js
   export default {
     // …
     methods: {
       // …
       addToDo(toDoLabel) {
         console.log("To-do added:", toDoLabel);
       },
       // …
     },
     // …
   };
   ```

Wenn Sie Ihr Formular erneut testen, werden Sie sehen, dass der eingegebene Text bei der Übermittlung in Ihrer Konsole protokolliert wird. Vue übergibt automatisch die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignishandler.

## Das neue Todo zu unseren Daten hinzufügen

Da wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element, das es darstellt, dem `ToDoItems`-Array hinzufügen. Dies kann durch das Hinzufügen eines neuen To-Do-Objekts zum Array geschehen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   export default {
     // …
     methods: {
       // …
       addToDo(toDoLabel) {
         this.ToDoItems.push({
           id: `todo-${nanoid()}`,
           label: toDoLabel,
           done: false,
         });
       },
       // …
     },
     // …
   };
   ```

2. Versuchen Sie, Ihr Formular erneut zu testen, und Sie sollten sehen, dass neue To-Do-Elemente am Ende der Liste angehängt werden.
3. Lassen Sie uns noch eine weitere Verbesserung vornehmen, bevor wir fortfahren. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden To-Do-Elemente ohne Text immer noch zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf die leere Zeichenfolge testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der `label`-Wert leer ist, lassen Sie uns das `todo-added`-Ereignis nicht auslösen.

   ```js
   export default {
     // …
     methods: {
       // …
       onSubmit() {
         if (this.label === "") {
           return;
         }
         this.$emit("todo-added", this.label);
       },
       // …
     },
     // …
   };
   ```

4. Versuchen Sie erneut Ihr Formular. Jetzt können Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen.

![Unsere Todo-Listen-App gerendert mit einem Texteingabefeld, um neue Todos einzugeben](rendered-form-with-new-items.png)

## Verwendung von v-model zum Aktualisieren eines Eingabewerts

Es gibt noch eine Sache zu fixieren in unserer `ToDoForm`-Komponente — nach dem Absenden enthält das `<input>`-Feld immer noch den alten Wert. Aber dies ist leicht zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld ebenfalls aktualisiert, wenn wir den `name`-Parameter auf eine leere Zeichenfolge setzen.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente zu diesem:

```js
export default {
  // …
  methods: {
    // …
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
    // …
  },
  // …
};
```

Nun wird beim Klicken auf die Schaltfläche "Add" das "new-todo-input" selbst geleert.

## Zusammenfassung

Ausgezeichnet. Wir können nun Todo-Elemente zu unserem Formular hinzufügen! Unsere App beginnt sich nun interaktiv anzufühlen, aber ein Problem ist, dass wir das Aussehen und Feeling bisher völlig ignoriert haben. Im nächsten Artikel konzentrieren wir uns darauf, dies zu beheben und die verschiedenen Möglichkeiten anzusehen, die Vue zum Styling von Komponenten bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
