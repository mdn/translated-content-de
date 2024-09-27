---
title: "Hinzufügen eines neuen Todo-Formulars: Vue events, methods und models"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir haben nun Beispieldaten vorliegen und eine Schleife, die jedes Datenelement nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als Nächstes wirklich benötigen, ist die Möglichkeit, unseren Nutzern zu erlauben, ihre eigenen ToDo-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das beim Absenden der Daten ausgelöst wird, eine Methode, die beim Absenden ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell, um die Daten zu steuern. Dies werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnis des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die
          die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der
          zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der
          fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen des Umgangs mit Formularen in Vue und damit verbunden von Events,
        Models und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben jetzt eine App, die eine Liste von ToDo-Elementen anzeigt. Allerdings können wir unsere Liste nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die es uns ermöglicht, ein neues ToDo-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie einen leeren `<template>`- und einen `<script>`-Tag wie zuvor hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Lassen Sie uns ein HTML-Formular hinzufügen, das Ihnen erlaubt, ein neues ToDo-Element einzugeben und in die App einzufügen. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihr Template wie folgt:

   ```html
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

   So haben wir jetzt eine Formular-Komponente, in die wir den Titel eines neuen ToDo-Elements eingeben können (das schließlich als Bezeichnung für das entsprechende `ToDoItem` gerendert wird).

4. Lassen Sie uns diese Komponente in unsere App laden. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen in Ihr `<script>`-Element ein:

   ```js
   import ToDoForm from "./components/ToDoForm";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, damit es so aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie schließlich in diesem Abschnitt Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb Ihrer `<template>` von `App` hinzufügen, wie folgt:

   ```html
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

Wenn Sie nun Ihre laufende Website ansehen, sollten Sie das neue Formular sehen, das angezeigt wird.

![Unsere ToDo-Listen-App mit einem Texteingabefeld zum Eingeben neuer ToDos gerendert](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Add" klicken, wird die Seite das Formular an den Server senden, aber das ist nicht wirklich das, was wir wollen. Was wir eigentlich tun möchten, ist eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue ToDo-Element zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dafür müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode & Binden an ein Ereignis mit v-on

Um eine Methode für die `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und das geschieht in einer `methods`-Eigenschaft unserer Komponente, die an der gleichen Stelle wie `data()`, `props` usw. platziert wird. Die `methods`-Eigenschaft enthält alle Methoden, die wir in unserer Komponente aufrufen müssen. Wenn auf Methoden verwiesen wird, werden sie vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb des Templates zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Diese verwenden wir, um die Submit-Aktion zu behandeln.

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

2. Als nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die Syntax `v-on:event="method"`. Und ähnlich wie bei `v-bind` gibt es auch eine verkürzte Syntax: `@event="method"`.

   Wir werden hier die verkürzte Syntax aus Konsistenzgründen verwenden. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten noch immer an den Server, was zu einem Neuladen führt. Da wir all unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, der das Postback verarbeitet. Wir verlieren auch den gesamten lokalen Zustand beim Neuladen der Seite. Um zu verhindern, dass der Browser Daten an den Server sendet, müssen wir die Standardaktion des Ereignisses beim Durchlaufen der Seite stoppen ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in reinem JavaScript). Vue hat eine spezielle Syntax namens **event modifiers**, die dies direkt in unserem Template für uns erledigen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt hinzugefügt, wie folgt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt die Ereignisausbreitung. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in normalen JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis genau von diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrsilbige Tasten müssen nur in [kebab-case](/de/docs/Glossary/kebab_case) umgewandelt werden (z.B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis am Root-Element (äußerstes umschließendes Element) Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde und dann nicht mehr.
   - `.left`: Löst den Handler nur über das Ereignis der linken Maustaste aus.
   - `.right`: Löst den Handler nur über das Ereignis der rechten Maustaste aus.
   - `.middle`: Löst den Handler nur über das Ereignis der mittleren Maustaste aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignislisteners in nativem JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Submit-Aktion des Browsers zu stoppen. Fügen Sie `.prevent` zu dem `@submit`-Handler in Ihrem Template wie folgt hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie nun versuchen, das Formular abzusenden, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, das wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Datenbindung an Eingaben mit v-model

Als nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue ToDo-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des ToDos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den anfänglichen Wert des `label` auf eine leere Zeichenkette setzen.

   Ihr Komponentenobjekt sollte nun in etwa so aussehen:

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

2. Wir benötigen nun eine Möglichkeit, den Wert des `new-todo-input`-Feldes an das `label`-Feld anzuhängen. Vue bietet dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet sich an die Dateneigenschaft, die Sie darauf setzen und hält sie mit dem `<input>` synchron. `v-model` funktioniert mit allen verschiedenen Eingabetypen, einschließlich Kontrollkästchen, Radios und Auswahleingaben. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld hinzufügen, wie unten zu sehen. Machen Sie dies jetzt:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten synchronisieren, indem Sie eine Kombination aus Ereignissen und `v-bind`-Attributen verwenden. Tatsächlich ist dies das, was `v-model` hinter den Kulissen tut. Die genaue Kombination aus Ereignis und Attribut variiert jedoch je nach Eingabetyp und wird mehr Code erfordern als nur die Verwendung der `v-model`-Abkürzung.

3. Lassen Sie uns die Nutzung von `v-model` testen, indem wir den Wert der in unserer `onSubmit()`-Methode übermittelten Daten protokollieren. In Komponenten werden Datenattribute mit dem `this`-Schlüsselwort zugänglich gemacht. So greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie so aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie im `<input>`-Feld einen Text hinzu und klicken Sie auf die Schaltfläche "Add". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

In ähnlicher Weise wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Beispiel gibt es zwei, die es wert sind, in Betracht gezogen zu werden. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator dem `v-model`-Statement wie folgt hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisation durch die Aktualisierung der Variablen mittels Ereignissen. Bei Texteingaben erfolgt diese Synchronisation über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet das, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der Modifikator `.lazy` bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue nur die Daten synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular abgeschickt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu nutzen, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` zu verketten, wie oben gezeigt, und testen Sie Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an beiden Enden einzugeben.

## Daten an Elternkomponenten mit benutzerdefinierten Ereignissen übergeben

Wir sind jetzt sehr nah dran, neue To-Do-Elemente zu unserer Liste hinzuzufügen. Das Nächste, was wir tun müssen, ist, das neu erstellte ToDo-Element an unsere `App`-Komponente zu übergeben. Dafür kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten übergibt, und `App` kann darauf hören. Das funktioniert sehr ähnlich wie native Ereignisse auf HTML-Elementen: eine untergeordnete Komponente kann ein Ereignis auslösen, das über `v-on` abgehört werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden wie folgt ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitive sind und keine Leerzeichen enthalten dürfen. Vue-Templates werden ebenfalls in Kleinbuchstaben konvertiert, was bedeutet, dass Vue-Templates nicht auf Ereignisse lauschen können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch Folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als nächstes zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Vorerst kann diese Methode einfach `To-do added` in der Konsole protokollieren.

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

3. Fügen Sie als nächstes einen Ereignislistener für das `todo-added`-Ereignis zur `<to-do-form></to-do-form>` hinzu, das die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Verkürzung wäre der Listener so: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` übermitteln, sollten Sie das Konsolenprotokoll von der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben noch keine Daten zurück an die `App.vue`-Komponente. Das können wir tun, indem wir weitere Argumente an die `this.$emit()`-Funktion in der `ToDoForm`-Komponente übergeben.

   In diesem Fall möchten wir, wenn wir das Ereignis auslösen, die `label`-Daten zusammen mit ihm übergeben. Dies geschieht, indem Sie die Daten, die Sie übergeben möchten, als weiteren Parameter in der `$emit()`-Methode einschließen: `this.$emit("todo-added", this.label)`. Dies ähnelt dem, wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Dies bedeutet, dass das ausgelöste Ereignis direkt dem Objekt entspricht, das Sie übermitteln. In unserem Fall wird es sich also bei unserem Ereignisobjekt nur um eine Zeichenkette handeln.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten tatsächlich in `App.vue` aufzufangen, müssen wir unserer `addToDo()`-Methode einen Parameter hinzufügen, der das `label` des neuen ToDo-Elements enthält.

   Gehen Sie jetzt zurück zu `App.vue` und aktualisieren Sie dies:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, sehen Sie, dass der von Ihnen eingegebene Text bei Übermittlung in Ihrer Konsole protokolliert wird. Vue übergibt die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignishandler.

## Hinzufügen des neuen ToDo zu unseren Daten

Nun, da wir die Daten aus `ToDoForm` in `App.vue` zur Verfügung haben, müssen wir ein Element erstellen, das es der `ToDoItems`-Array hinzufügt. Dies kann durch das Anhängen eines neuen ToDo-Objekts an das Array geschehen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Versuchen Sie, Ihr Formular erneut zu testen, und Sie sollten sehen, wie neue ToDos am Ende der Liste angehängt werden.
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir weitergehen. Wenn Sie das Formular übermitteln, während das Eingabefeld leer ist, werden trotzdem ToDo-Elemente ohne Text zur Liste hinzugefügt. Um dies zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf die leere Zeichenkette testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der `label`-Wert leer ist, geben wir das `todo-added`-Ereignis nicht aus.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Versuchen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Elemente mehr zu der ToDo-Liste hinzufügen.

![Unsere ToDo-Listen-App mit einem Texteingabefeld zum Eingeben neuer ToDos gerendert](rendered-form-with-new-items.png)

## Verwenden von v-model zum Aktualisieren eines Eingabewerts

Es gibt noch eine Sache, die wir in unserer `ToDoForm`-Komponente beheben müssen — nach dem Abschicken enthält das `<input>` noch den alten Wert. Aber das ist einfach zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, aktualisiert sich das Eingabefeld auch, wenn wir den Bezeichner-Parameter auf eine leere Zeichenfolge setzen.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente so:

```js
onSubmit() {
  if (this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

Nun wird das "new-todo-input" beim Klicken auf die Schaltfläche "Add" automatisch geleert.

## Zusammenfassung

Hervorragend. Wir können nun ToDo-Elemente zu unserer Form hinzufügen! Unsere App fühlt sich jetzt interaktiver an, aber ein Problem ist, dass wir ihr Aussehen und Gefühl bisher vollständig ignoriert haben. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu beheben und die verschiedenen Möglichkeiten betrachten, die Vue zur Gestaltung von Komponenten bietet.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
