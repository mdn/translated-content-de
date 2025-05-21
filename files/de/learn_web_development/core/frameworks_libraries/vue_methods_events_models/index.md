---
title: "Hinzufügen eines neuen Todo-Formulars: Vue Events, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben jetzt Beispiel-Daten und eine Schleife, die jedes Datenbit nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir wirklich als Nächstes brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen Todo-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Event, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Das werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrundeliegenden DOM-Struktur entspricht. Für die Installation und Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Formulare in Vue handhabt und in diesem Zusammenhang auch Events, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben jetzt eine App, die eine Liste von To-Do-Elementen anzeigt. Allerdings können wir unsere Liste von Elementen nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Wir erstellen eine neue Komponente, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenverzeichnis eine neue Datei mit dem Namen `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und ein `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, das es Ihnen ermöglicht, ein neues Todo-Element einzugeben und es in die App zu übermitteln. Wir brauchen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihr Template wie folgt:

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

   Jetzt haben wir eine Formularkomponente, in die wir den Titel eines neuen Todo-Elements eingeben können (dies wird zu einem Label für das entsprechende `ToDoItem`, wenn es schließlich gerendert wird).

4. Laden Sie diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen in Ihrem `<script>`-Element hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen auch die neue Komponente in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, so dass es wie folgt aussieht:

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

6. Schließlich, rendern Sie Ihre `ToDoForm`-Komponente innerhalb Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb des `<template>` Ihrer `App` hinzufügen, wie folgt:

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

Wenn Sie jetzt Ihre laufende Seite ansehen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-Do-Listen-App gerendert mit einem Textfeld zur Eingabe neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf "Hinzufügen" klicken, wird die Seite das Formular an den Server zurücksenden, aber das ist eigentlich nicht das, was wir wollen. Was wir tatsächlich tun möchten, ist, eine Methode beim [`submit`-Event](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dafür müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode und Binden an ein Event mit v-on

Um eine Methode für die `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie zum Komponentenobjekt hinzufügen, was innerhalb einer `methods`-Eigenschaft unserer Komponente geschieht, die an derselben Stelle wie `data()`, `props` usw. eingesetzt wird. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Bei Verweisen werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb des Templates zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir der `ToDoForm`-Komponente ein `onSubmit()`-Methode zu einer `methods`-Eigenschaft des Komponentenobjekts hinzufügen. Diese Methode verwenden wir, um die Übermittlungsaktion zu verarbeiten.

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

2. Als Nächstes müssen wir die Methode an den `submit`-Event-Handler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die `v-on:event="method"`-Syntax. Und ähnlich wie `v-bind` gibt es auch eine Kurzschreibweise: `@event="method"`.

   Wir verwenden hier der Konsistenz halber die Kurzschreibweise. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element hinzu, wie folgt:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie das ausführen, sendet die App die Daten immer noch an den Server, was zu einem Refresh führt. Da wir alle unsere Verarbeitungen auf dem Client durchführen, gibt es keinen Server, der das Postback verarbeitet. Außerdem verlieren wir alle lokalen Zustände bei einer Seitenaktualisierung. Um zu verhindern, dass der Browser an den Server postet, müssen wir die Standardaktion des Events stoppen, während es die Seite hinauf blubbert ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Event-Modifier**, die dies direkt in unserem Template für uns handhaben kann.

   Modifier werden am Ende eines Events mit einem Punkt angehängt, zum Beispiel: `@event.modifier`. Hier ist eine Liste von Event-Modifiers:

   - `.stop`: Stopt das Propagieren des Events. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Events. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Event genau von diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Event-Handler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); Multiword-Tasten müssen in {{Glossary("kebab_case", "Kebab-Case")}} konvertiert werden (z. B. `page-down`).
   - `.native`: Hört auf ein natives Event am Root-Element Ihrer Komponente (äußeres Umhüllungselement).
   - `.once`: Hört auf das Event, bis es einmal ausgelöst wurde, dann nicht mehr.
   - `.left`: Löst den Handler nur über das Event der linken Maustaste aus.
   - `.right`: Löst den Handler nur über das Event der rechten Maustaste aus.
   - `.middle`: Löst den Handler nur über das Event der mittleren Maustaste aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }` Parameters beim Erstellen eines Event Listeners in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent` Modifier verwenden, um die Standard-Submit-Aktion des Browsers zu stoppen. Fügen Sie `.prevent` zum `@submit`-Handler in Ihrem Template hinzu, wie folgt:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie jetzt versuchen, das Formular abzusenden, werden Sie feststellen, dass die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, sehen Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static), das wir in unserer `onSubmit()` Methode hinzugefügt haben.

## Binden von Daten an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir brauchen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Dos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf einen leeren String setzen.

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

2. Jetzt benötigen wir eine Möglichkeit, den Wert des `new-todo-input`-Feldes an das `label`-Feld zu binden. Vue hat eine spezielle Direktive dafür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die Daten-Eigenschaft, die Sie darauf setzen, und hält sie mit dem `<input>` synchron. `v-model` funktioniert mit allen verschiedenen Eingabetypen, einschließlich Checkboxen, Radiobuttons und Auswahlfeldern. Um `v-model` zu verwenden, fügen Sie das Attribut mit der Struktur `v-model="variable"` dem `<input>` hinzu.

   In unserem Fall würden wir es unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Machen Sie das jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können auch Daten mit `<input>`-Werten synchronisieren, indem Sie eine Kombination aus Ereignissen und `v-bind`-Attributen verwenden. Tatsächlich macht `v-model` das im Hintergrund. Allerdings variiert die genaue Kombination aus Ereignis und Attribut je nach Eingabetypen und erfordert mehr Code als die Verwendung der `v-model`-Abkürzung.

3. Testen wir unser `v-model` aus, indem wir den Wert der Daten, die in unserer `onSubmit()`-Methode übermittelt werden, protokollieren. In Komponenten werden Datenattribute über das Schlüsselwort `this` zugegriffen. Wir greifen also auf unser `label`-Feld mit `this.label` zu.

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

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie dem `<input>`-Feld etwas Text hinzu und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den eingegebenen Wert in Ihrer Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifiers

In ähnlicher Weise wie bei den Ereignis-Modifiers können wir auch Modifiers hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die wir in Betracht ziehen sollten. Der erste, `.trim`, entfernt Leerzeichen vor und nach der Eingabe. Wir können den Modifier zu unserer `v-model`-Anweisung hinzufügen, z. B.: `v-model.trim="label"`.

Der zweite Modifier, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifier ändert den Zeitpunkt, zu dem `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisierung, indem die Variable unter Verwendung von Ereignissen aktualisiert wird. Bei Texteingaben erfolgt diese Synchronisierung über das [`input`-Event](/de/docs/Web/API/Element/input_event). Oft bedeutet das, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifier führt dazu, dass `v-model` stattdessen das [`change`-Event](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue die Daten nur synchronisiert, wenn das Eingabefeld den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifier als auch den `.trim`-Modifier zusammen zu verwenden, können wir sie verbinden, z. B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Daten an Eltern mit benutzerdefinierten Events übergeben

Wir sind jetzt sehr nahe daran, neue To-Do-Elemente zu unserer Liste hinzuzufügen. Als Nächstes müssen wir in der Lage sein, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dafür können wir unser `ToDoForm`-Event ein benutzerdefiniertes Event auslösen lassen, das die Daten übergibt, und `App` kann darauf lauschen. Dies funktioniert sehr ähnlich wie native Events bei HTML-Elementen: Eine Kindkomponente kann ein Event auslösen, das über `v-on` abgehört werden kann.

Im `onSubmit`-Event-Handler unseres `ToDoForm` fügen wir ein `todo-added`-Event hinzu. Benutzerdefinierte Events werden wie folgt ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Event-Handler case-sensitive sind und keine Leerzeichen enthalten können. Vue-Templates werden auch in Kleinbuchstaben konvertiert, was bedeutet, dass Vue-Templates nicht auf Events mit Großbuchstaben lauschen können.

1. Ersetzen Sie die `console.log()`-Anweisung in der `onSubmit()`-Methode durch Folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Für den Moment kann diese Methode einfach `To-do added` in die Konsole protokollieren.

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
           { id: "todo-" + nanoid(), label: "Learn Vue", done: false },
           {
             id: "todo-" + nanoid(),
             label: "Create a Vue project with the CLI",
             done: true,
           },
           { id: "todo-" + nanoid(), label: "Have fun", done: true },
           {
             id: "todo-" + nanoid(),
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

3. Fügen Sie dann einen Event Listener für das `todo-added`-Event zum `<to-do-form></to-do-form>` hinzu, der die `addToDo()`-Methode aufruft, wenn das Event ausgelöst wird. Unter Verwendung der `@`-Kurzschreibweise würde der Listener wie folgt aussehen: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm`-Formular absenden, sollten Sie das Konsolenprotokoll aus der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben immer noch keine Daten an die `App.vue`-Komponente. Das können wir tun, indem wir zusätzliche Argumente zur `this.$emit()`-Funktion in der `ToDoForm`-Komponente übergeben.

   In diesem Fall möchten wir beim Auslösen des Events die `label`-Daten mit übergeben. Dies geschieht, indem die Daten, die Sie übergeben möchten, als weiteres Parameter in der `$emit()`-Methode enthalten sind: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie bei nativen JavaScript-Events, außer dass benutzerdefinierte Vue-Events standardmäßig kein Event-Objekt enthalten. Dies bedeutet, dass das ausgelöste Event exakt dem Objekt entspricht, das Sie übergeben. In unserem Fall wird unser Event-Objekt einfach ein String sein.

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

5. Um diese Daten tatsächlich in `App.vue` zu nutzen, müssen wir ein Parameter zu unserer `addToDo()`-Methode hinzufügen, das das `label` des neuen To-Do-Items enthält.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie das jetzt:

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

Wenn Sie Ihr Formular erneut testen, wird der eingegebene Text bei der Übermittlung in Ihrer Konsole protokolliert. Vue übergibt automatisch die Argumente nach dem Event-Namen in `this.$emit()` an Ihren Event-Handler.

## Hinzufügen des neuen Todos zu unseren Daten

Jetzt, da wir die Daten aus `ToDoForm` in `App.vue` zur Verfügung haben, müssen wir ein Element hinzufügen, das es zur `ToDoItems`-Array repräsentiert. Dies kann durch das Pushen eines neuen To-Do-Objekts auf das Array geschehen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   export default {
     // …
     methods: {
       // …
       addToDo(toDoLabel) {
         this.ToDoItems.push({
           id: "todo-" + nanoid(),
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
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir fortfahren. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden Todo-Elemente ohne Text immer noch zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das todo-added Event ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifier getrimmt wird, müssen wir nur auf den leeren String prüfen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Labelwert leer ist, lassen Sie das `todo-added`-Event nicht auslösen.

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

4. Versuchen Sie, Ihr Formular erneut zu testen. Jetzt können Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen.

![Unsere To-Do-Listen-App gerendert mit einem Textfeld zur Eingabe neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model, um einen Eingabewert zu aktualisieren

Es gibt noch einen Punkt in unserer `ToDoForm`-Komponente zu beheben — nach dem Absenden enthält das `<input>`-Feld immer noch den alten Wert. Aber das ist leicht zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld aktualisiert, wenn wir den Namen-Parameter auf einen leeren String zurücksetzen.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente so:

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

Jetzt wird das "new-todo-input" beim Klicken auf die Schaltfläche "Hinzufügen" geleert.

## Zusammenfassung

Großartig. Jetzt können wir To-Do-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt, interaktiv zu wirken, aber ein Problem ist, dass wir das Aussehen und das Gefühl der App bisher völlig ignoriert haben. Im nächsten Artikel werden wir uns auf die Behebung dieses Problems konzentrieren und die verschiedenen Möglichkeiten untersuchen, die Vue bietet, um Komponenten zu stylen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
