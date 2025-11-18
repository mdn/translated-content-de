---
title: "Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben jetzt Beispieldaten vorliegen und eine Schleife, die jedes Datenstück nimmt und in unserem App als `ToDoItem` rendert. Was wir wirklich als nächstes brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen Todo-Einträge in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, das die Daten kontrolliert. Das ist das, was wir in diesem Artikel behandeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse über das
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die
          die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die
          zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der
          fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen)
          zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen des Umgangs mit Formularen in Vue und im Zusammenhang damit mit
        Ereignissen, Modellen und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben jetzt eine App, die eine Liste von To-Do-Einträgen anzeigt. Allerdings können wir unsere Liste nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die es uns erlaubt, einen neuen To-Do-Eintrag hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor einen leeren `<template>`- und einen `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Lassen Sie uns ein HTML-Formular hinzufügen, das es Ihnen ermöglicht, ein neues Todo-Element einzugeben und in die App einzureichen. Wir brauchen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihre Vorlage wie folgt:

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

   So haben wir jetzt eine Formular-Komponente, in die wir den Titel eines neuen Todo-Elements eingeben können (das beim Rendern als Label für das entsprechende `ToDoItem` dient).

4. Laden Sie diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unterhalb der vorherigen innerhalb Ihres `<script>`-Elements hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, damit es so aussieht:

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

6. Schließlich, für diesen Abschnitt, rendern Sie Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb des `<template>` Ihrer `App` hinzufügen, etwa so:

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

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Add" klicken, sendet die Seite das Formular zurück an den Server, aber das ist nicht wirklich das, was wir wollen. Was wir eigentlich tun möchten, ist eine Methode im [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo der `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dafür müssen wir der Komponenteninstanz eine Methode hinzufügen.

## Eine Methode erstellen und sie an ein Ereignis mit v-on binden

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und das geschieht in einer `methods`-Eigenschaft unserer Komponente, die an derselben Stelle wie `data()`, `props` usw. platziert wird. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Wenn sie referenziert werden, laufen die Methoden vollständig ab, deshalb ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb der Vorlage zu verwenden. Für die Darstellung von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir werden diese verwenden, um die Übermittlungsaktion zu handhaben.

   Fügen Sie dies so hinzu:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
   };
   ```

2. Als nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die Syntax `v-on:event="method"`. Und ähnlich wie `v-bind` gibt es auch eine Kurzsyntax: `@event="method"`.

   Wir verwenden hier die Kurzsyntax für Konsistenz. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element hinzu, wie folgt:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten immer noch an den Server, wodurch ein Refresh ausgelöst wird. Da wir alle unsere Verarbeitungen auf dem Client durchführen, gibt es keinen Server, der die Rückmeldung behandelt. Wir verlieren auch den gesamten lokalen Status bei einem Seiten-Refresh. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es die Seite hinaufblubbert ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Ereignis-Modifikatoren**, die dies direkt in unserer Vorlage für uns erledigen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt angehängt, etwa so: `@event.modifier`. Hier ist eine Liste von Ereignis-Modifikatoren:
   - `.stop`: Stoppt das Ereignis vor der Weiterleitung. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von genau diesem Element gesendet wurde.
   - `{.key}`: Löst den Ereignishandler nur über den angegebenen Schlüssel aus. [MDN hat eine Liste gültiger Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrwortige Schlüssel müssen einfach in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z. B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis am Wurzelelement (äußerst umhüllendes) Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des Parameters `{ passive: true }` beim Erstellen eines Ereignislisteners in Vanilla JavaScript, das [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet.

   In diesem Fall müssen wir den Modifikator `.prevent` verwenden, um die Standard-Submit-Aktion des Browsers zu stoppen. Fügen Sie `.prevent` zu dem `@submit`-Handler in Ihrer Vorlage wie folgt hinzu:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie versuchen, das Formular jetzt zu übermitteln, werden Sie feststellen, dass sich die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, das wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Daten mit `v-model` an Eingaben binden

Als nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>`-Formularfeld zu erhalten, damit wir das neue To-Do-Element unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des Todos zu verfolgen.

1. Fügen Sie unserem `ToDoForm`-Komponentenobjekt eine `data()`-Methode hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf eine leere Zeichenkette setzen.

   Ihr Komponentenobjekt sollte jetzt ungefähr so aussehen:

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

2. Wir benötigen nun eine Möglichkeit, den Wert des `new-todo-input`-Element zu dem `label`-Feld zu verknüpfen. Vue hat eine spezielle Direktive dafür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die Daten-Eigenschaft, die Sie darauf setzen, und hält sie mit dem `<input>` synchron. `v-model` funktioniert über alle verschiedenen Eingabetypen hinweg, einschließlich Kontrollkästchen, Radios und Auswahlfelder. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es auf unserem `new-todo-input`-Feld wie unten gesehen hinzufügen. Machen Sie dies jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten mit `<input>`-Werten auch über eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich macht `v-model` dies hinter den Kulissen. Allerdings variiert die genaue Ereignis- und Attributkombination je nach Eingabetypen und benötigt mehr Code als die Nutzung der `v-model`-Abkürzung.

3. Lassen Sie uns unsere Verwendung von `v-model` testen, indem wir den Wert der übermittelten Daten in unserer `onSubmit()`-Methode protokollieren. In Komponenten werden Datenattribute über das `this`-Schlüsselwort zugegriffen. Daher greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, sodass sie wie folgt aussieht:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("Label value: ", this.label);
       },
     },
   };
   ```

4. Gehen Sie jetzt zurück zu Ihrer laufenden App, fügen Sie dem `<input>`-Feld einen Text hinzu und klicken Sie auf die Schaltfläche "Add". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Verhalten von v-model mit Modifikatoren ändern

Ähnlich zu Ereignis-Modifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall sind zwei Modifikatoren einen Blick wert. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator zu unserem `v-model`-Statement hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie vorher erwähnt, funktioniert die `v-model`-Synchronisation, indem die Variable mit Ereignissen aktualisiert wird. Für Texteingaben erfolgt diese Synchronisation über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastenanschlag synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue die Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel angemessener, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator gemeinsam zu verwenden, können wir sie verketten, z. B.: `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie z. B., einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Daten an Elternkomponenten mit benutzerdefinierten Ereignissen übergeben

Wir sind nun sehr nahe daran, neue To-Do-Einträge unserer Liste hinzuzufügen. Als nächstes müssen wir in der Lage sein, den neu erstellten To-Do-Eintrag an unsere `App`-Komponente zu übergeben. Dazu kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis senden, das die Daten übergibt, und `App` kann darauf hören. Dies funktioniert ähnlich wie native Ereignisse auf HTML-Elementen: eine Kinderkomponente kann ein Ereignis senden, das über `v-on` abgehört werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so gesendet: `this.$emit("event-name")`. Wichtig zu wissen ist, dass Ereignishandler Groß- und Kleinschreibung beachten und keine Leerzeichen enthalten können. Vue-Vorlagen werden auch in Kleinschreibung umgewandelt, was bedeutet, dass Vue-Vorlagen keine Ereignisse mit Großbuchstaben hören können.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode mit dem folgenden:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als nächstes zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Diese Methode kann vorerst einfach `To-do added` in die Konsole protokollieren.

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

3. Fügen Sie nun ein Ereignislistener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>` hinzu, das die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mithilfe der `@`-Kurzschreibweise sieht der Listener so aus: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` abschicken, sollten Sie das Konsolenprotokoll von der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben noch keine Daten zurück an die `App.vue`-Komponente. Das können wir tun, indem wir zusätzliche Argumente an die `this.$emit()`-Funktion in der `ToDoForm`-Komponente übergeben.

   In diesem Fall, wenn wir das Ereignis auslösen, möchten wir die `label`-Daten damit übergeben. Das wird gemacht, indem man die Daten, die man übergeben möchte, als weiterer Parameter in der `$emit()`-Methode einfügt: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie bei nativen JavaScript-Ereignissen, die Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Das bedeutet, dass das gesendete Ereignis genau mit dem Objekt übereinstimmt, das Sie übermitteln. In unserem Fall wird unser Ereignisobjekt nur eine Zeichenkette sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode so:

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

5. Um diese Daten in der `App.vue` tatsächlich zu erfassen, müssen wir dem `addToDo()`-Methode ein Parameter hinzufügen, das das `label` des neuen To-Do-Elements enthält.

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

Wenn Sie Ihr Formular erneut testen, sehen Sie, dass der Text, den Sie bei der Übermittlung eingegeben haben, in Ihrer Konsole protokolliert wird. Vue übergibt die Argumente nach dem Ereignisnamen in `this.$emit()` automatisch an Ihren Ereignishandler.

## Das neue To-Do in unsere Daten hinzufügen

Jetzt, da wir die Daten von `ToDoForm` in `App.vue` zur Verfügung haben, müssen wir dem `ToDoItems`-Array ein Element hinzufügen, das sie repräsentiert. Dies kann geschehen, indem man ein neues To-Do-Objekt zum Array hinzufügt, das unsere neuen Daten enthält.

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

2. Versuchen Sie, Ihr Formular wieder zu testen, und Sie sollten sehen, wie neue To-Do-Elemente am Ende der Liste angefügt werden.
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir fortfahren. Wenn Sie das Formular übermitteln, während die Eingabe leer ist, werden noch immer To-Do-Elemente ohne Text zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits vom `.trim`-Modifikator getrimmt wird, müssen wir nur auf die leere Zeichenkette testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente, und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der `label`-Wert leer ist, lassen Sie uns das `todo-added`-Ereignis nicht senden.

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

4. Versuchen Sie Ihr Formular erneut. Jetzt werden Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen können.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model zur Aktualisierung eines Eingabewerts

Es gibt eine weitere Sache, die wir in unserer `ToDoForm`-Komponente beheben müssen — nach der Übermittlung enthält das `<input>`-Feld immer noch den alten Wert. Aber das ist einfach zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wenn wir den `name`-Parameter auf eine leere Zeichenkette setzen, wird das Eingabefeld ebenfalls aktualisiert.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente zu folgendem:

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

Nun wird beim Klicken auf die Schaltfläche "Add" die "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können jetzt ToDo-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt interaktiv zu wirken, aber ein Problem ist, dass wir ihr Aussehen und Gefühl bisher komplett ignoriert haben. Im nächsten Artikel konzentrieren wir uns auf die Behebung dieses Problems, indem wir die verschiedenen Möglichkeiten untersuchen, die Vue zur Stilisierung von Komponenten bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
