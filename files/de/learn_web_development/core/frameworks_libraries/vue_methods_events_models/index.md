---
title: "Hinzufügen eines neuen To-Do-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben nun Beispieldaten bereitgestellt und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als Nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Das werden wir in diesem Artikel behandeln.

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
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer HTML-basierten Templatesyntax,
          die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und
          um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen),
          benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie Formulare in Vue behandelt werden, und im weiteren Sinne, Ereignisse, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben nun eine App, die eine Liste von To-Do-Elementen anzeigt. Allerdings können wir unsere Liste nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Erstellen wir eine neue Komponente, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor einen leeren `<template>`- und einen `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, das es Ihnen ermöglicht, ein neues To-Do-Element einzugeben und in die App zu übermitteln. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihr Template wie folgt:

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

   So haben wir nun eine Formular-Komponente, in die wir den Titel eines neuen To-Do-Elements eingeben können (dies wird später zu einem Label für das entsprechende `ToDoItem`, wenn es schließlich gerendert wird).

4. Laden wir diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen in Ihr `<script>`-Element ein:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponenten-Objekts, sodass sie so aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Abschließend für diesen Abschnitt, rendern Sie Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element in das `<template>` Ihrer `App` einfügen, wie folgt:

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

Jetzt sollten Sie beim Betrachten Ihrer laufenden Seite das neue Formular angezeigt sehen.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, sendet die Seite das Formular zurück an den Server, aber das ist nicht wirklich, was wir wollen. Wir möchten tatsächlich eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) ausführen, die das neue Todo zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dazu müssen wir der Komponenteninstanz eine Methode hinzufügen.

## Erstellen einer Methode und deren Bindung an ein Ereignis mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und dies geschieht in einer `methods`-Eigenschaft unserer Komponente, die an derselben Stelle wie `data()`, `props` usw. eingefügt wird. Die `methods`-Eigenschaft enthält alle Methoden, die wir in unserer Komponente aufrufen müssen. Wenn sie referenziert werden, werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen im Template zu verwenden. Zum Anzeigen von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft im `ToDoForm`-Komponentenobjekt hinzufügen. Wir werden dies verwenden, um die Übermittlungsaktion zu behandeln.

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

2. Als Nächstes müssen wir die Methode an den `submit`-Ereignishandler des `<form>`-Elements binden. Wie Vue das [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax zum Binden von Attributen verwendet, hat Vue auch eine spezielle Direktive zur Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive arbeitet über die `v-on:event="method"`-Syntax. Und ähnlich wie `v-bind` gibt es auch eine Verkürzungssyntax: `@event="method"`.

   Wir werden hier die Verkürzungssyntax verwenden, um Konsistenz zu bewahren. Fügen Sie den `submit`-Handler wie folgt zu Ihrem `<form>`-Element hinzu:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App weiterhin die Daten an den Server, was zu einer Aktualisierung der Seite führt. Da wir alle unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, um den Postback zu bearbeiten. Wir verlieren auch alle lokalen Zustände bei der Seitenaktualisierung. Um zu verhindern, dass der Browser auf den Server postet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite aufsteigt ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die das direkt in unserem Template für uns erledigen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt angehängt, wie folgt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt die Ausbreitung des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von diesem genauen Element gesendet wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenkombinationen](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrwortige Tasten müssen einfach in {{Glossary("kebab_case", "kebab-case")}} konvertiert werden (z. B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis am Root-Element (äußerst umschließendes) Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustasten-Ereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignis-Hörers in Vanilla JavaScript mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standardübermittlungsaktion des Browsers zu stoppen. Fügen Sie `.prevent` dem `@submit`-Handler in Ihrem Template wie folgt hinzu:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie jetzt versuchen, das Formular zu übermitteln, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, das wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Binden von Daten an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Do zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf eine leere Zeichenfolge setzen.

   Ihr Komponentenobjekt sollte nun ungefähr so aussehen:

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

2. Wir benötigen jetzt eine Möglichkeit, den Wert des `new-todo-input`-Elementfelds mit dem `label`-Feld zu verbinden. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet sich an die von Ihnen festgelegte Dateneigenschaft und hält sie mit dem `<input>` synchron. `v-model` funktioniert über alle verschiedenen Eingabetypen, einschließlich Kontrollkästchen, Radios und Auswahlfelder. Um `v-model` zu verwenden, fügen Sie ein Attribut mit der Struktur `v-model="variable"` zu dem `<input>` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld hinzufügen, wie unten zu sehen. Machen Sie das jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten über eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich ist dies, was `v-model` im Hintergrund tut. Die genaue Ereignis- und Attributkombination variiert jedoch je nach Eingabetyp und erfordert mehr Code als die Verwendung der `v-model`-Abkürzung.

3. Testen wir unsere Verwendung von `v-model`, indem wir den Wert der im `onSubmit()`-Method übermittelten Daten protokollieren. In Komponenten werden Dateneigenschaften mit dem Schlüsselwort `this` abgerufen. Daher greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, um so auszusehen:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie dem `<input>`-Feld etwas Text hinzu und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

In ähnlicher Weise wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die wir berücksichtigen sollten. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung wie folgt hinzufügen: `v-model.trim="label"`.

Der zweite zu berücksichtigende Modifikator ist `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisation, indem die Variable über Ereignisse aktualisiert wird. Bei Texteingaben erfolgt diese Synchronisation über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator führt dazu, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Dies bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel sinnvoller, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verketten, z. B.: `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie beispielsweise, einen Wert mit Leerzeichen an beiden Enden einzugeben.

## Übergeben von Daten an Eltern mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah dran, neue To-Do-Elemente zu unserer Liste hinzufügen zu können. Das Nächste, was wir tun müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dafür kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten übergibt, und `App` kann darauf lauschen. Dies funktioniert ähnlich wie native Ereignisse bei HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, auf das über `v-on` gehorcht werden kann.

Im Ereignishandler `onSubmit` unseres `ToDoForm`, fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden wie folgt ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler Groß- und Kleinschreibung beachten und keine Leerzeichen enthalten können. Vue-Templates werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Templates nicht auf Großbuchstaben-Ereignisse lauschen können.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch das Folgende:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als Nächstes zurück zu `App.vue` und fügen Sie Ihrem Komponentenobjekt eine `methods`-Eigenschaft hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Vorläufig kann diese Methode einfach `To-do added` in die Konsole protokollieren.

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

3. Fügen Sie als Nächstes an `<to-do-form></to-do-form>` einen Ereignis-Listener für das `todo-added`-Ereignis hinzu, der die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Abkürzung würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` übermitteln, sollten Sie das Konsolenprotokoll aus der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben noch keine Daten zurück an die `App.vue`-Komponente. Das können wir tun, indem wir im `ToDoForm`-Komponente zusätzliche Argumente zur `this.$emit()`-Funktion übergeben.

   In diesem Fall möchten wir beim Auslösen des Ereignisses die `label`-Daten übergeben. Dies wird getan, indem Sie die Daten, die Sie übergeben wollen, als weiteren Parameter in die `this.$emit()`-Methode einfügen: `this.$emit("todo-added", this.label)`. Das ist ähnlich, wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt haben. Das bedeutet, dass das ausgelöste Ereignis das Objekt direkt ohne Anpassungen erhält, die Sie übergeben. In unserem Fall wird unser Ereignisobjekt also nur eine Zeichenkette sein.

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

5. Um diese Daten tatsächlich in `App.vue` abzurufen, müssen wir unserer `addToDo()`-Methode ein Parameter hinzufügen, das das `label` des neuen To-Do-Elements enthält.

   Gehen Sie jetzt zurück zu `App.vue` und aktualisieren Sie dies:

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

Wenn Sie Ihr Formular erneut testen, sehen Sie den Text, den Sie bei der Einreichung in Ihrer Konsole eingeben. Vue übergibt automatisch die Argumente, die nach dem Ereignisnamen in `this.$emit()` kommen, an Ihren Ereignishandler.

## Hinzufügen des neuen Todos zu unseren Daten

Jetzt, wo wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element erstellen, das es zur `ToDoItems`-Array hinzufügt. Dies kann geschehen, indem wir ein neues To-Do-Elementobjekt mit unseren neuen Daten an das Array anhängen.

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

2. Testen Sie Ihr Formular erneut, und Sie sollten sehen, dass neue To-Do-Elemente am Ende der Liste angehängt werden.
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir weitermachen. Wenn Sie das Formular einreichen, während das Eingabefeld leer ist, werden To-Do-Elemente ohne Text trotzdem zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das todo-added-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf die leere Zeichenfolge testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der label-Wert leer ist, lassen wir das `todo-added`-Ereignis nicht auslösen.

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

4. Testen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model, um einen Eingabewert zu aktualisieren

Es gibt noch eine Sache, die in unserer `ToDoForm`-Komponente behoben werden muss – nach dem Absenden enthält das `<input>` immer noch den alten Wert. Aber das ist leicht zu beheben – da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld auch aktualisiert, wenn wir den Namen auf eine leere Zeichenfolge setzen.

Aktualisieren Sie Ihre `onSubmit()`-Methode der `ToDoForm`-Komponente so:

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

Nun, wenn Sie auf die Schaltfläche "Hinzufügen" klicken, wird sich die "new-todo-input" selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können jetzt To-Do-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt, sich interaktiv anzufühlen, aber ein Problem ist, dass wir deren Erscheinungsbild bisher völlig ignoriert haben. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu beheben und die verschiedenen Wege untersuchen, die Vue bereitstellt, um Komponenten zu stylen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
