---
title: "Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben nun Beispieldaten bereitgestellt und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als nächstes wirklich brauchen, ist die Möglichkeit für unsere Benutzer, ihre eigenen Todo-Items in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung feuert, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Dies werden wir in diesem Artikel behandeln.

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
            >Terminal-/Kommandozeilenumgebung</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Einzelfile-Komponenten oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen des Umgangs mit Formularen in Vue und in Zusammenhang damit der Umgang mit Ereignissen, Modellen und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben nun eine App, die eine Liste von To-Do-Items anzeigt. Allerdings können wir unsere Liste von Items nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die es uns ermöglicht, ein neues To-Do-Item hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei mit dem Namen `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und ein `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Fügen wir nun ein HTML-Formular hinzu, das Ihnen das Eingeben eines neuen Todo-Items ermöglicht und es in die App überträgt. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihr Template wie folgt:

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

   Wir haben jetzt also eine Formular-Komponente, in die wir den Titel eines neuen Todo-Items eingeben können (dies wird später, wenn es gerendert wird, zu einem Label für das entsprechende `ToDoItem`).

4. Lassen Sie uns diese Komponente in unsere App laden. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen in Ihrem `<script>`-Element hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, sodass sie folgendermaßen aussieht:

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

6. Schließlich rendern Sie Ihre `ToDoForm`-Komponente innerhalb Ihrer App, indem Sie das `<to-do-form />`-Element in das `<template>` Ihrer `App` einfügen, wie folgt:

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

Wenn Sie nun Ihre laufende Seite betrachten, sollten Sie das neue Formular sehen.

![Unsere Todo-Listen-App gerendert mit einem Texteingabefeld für neue Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, wird die Seite das Formular an den Server senden, aber das ist nicht wirklich das, was wir wollen. Was wir tatsächlich tun möchten, ist eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode und Binden an ein Ereignis mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und zwar geschieht dies innerhalb einer `methods`-Eigenschaft unserer Komponente, die an derselben Stelle wie `data()`, `props` usw. steht. Die `methods`-Eigenschaft enthält alle Methoden, die wir in unserer Komponente aufrufen müssen. Beim Referenzieren werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb des Templates zu verwenden. Um Daten anzuzeigen, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, auf die wir später eingehen werden.

1. In dieser Komponente müssen wir der `methods`-Eigenschaft im `ToDoForm`-Komponentenobjekt eine `onSubmit()`-Methode hinzufügen, die wir für die Übermittlungsaktion verwenden werden.

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

2. Als nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive arbeitet über die `v-on:event="method"`-Syntax. Und ähnlich wie `v-bind`, gibt es auch eine verkürzte Syntax: `@event="method"`.

   Wir verwenden hier die verkürzte Syntax für Konsistenz. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten immer noch an den Server, was zu einem erneuten Laden der Seite führt. Da wir alle unsere Verarbeitung auf dem Client durchführen und es keinen Server gibt, der den Rückruf handhabt, verlieren wir alle lokalen Zustände bei der Seitenaktualisierung. Um zu verhindern, dass der Browser die Daten an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es die Seite hochbubbelt ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla-JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die dies direkt in unserem Template für uns erledigen kann.

   Modifikatoren werden an das Ende eines Ereignisses mit einem Punkt wie folgt angehängt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt das Ereignis von der weiteren Ausbreitung. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis exakt von diesem Element gesendet wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastaturwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrteilige Tasten müssen einfach in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z.B., `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis auf dem Root- (äußersten umhüllenden) Element Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignislisteners in Vanilla-JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Submit-Aktion des Browsers zu stoppen. Fügen Sie `.prevent` dem `@submit`-Handler in Ihrem Template wie folgt hinzu:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie das Formular jetzt versuchen zu übermitteln, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, das wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Binden von Daten an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Item zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Dos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf einen leeren String setzen.

   Ihr Komponentenobjekt sollte nun etwa so aussehen:

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

2. Wir benötigen nun eine Möglichkeit, den Wert des `new-todo-input`-Elementfelds an das `label`-Feld anzuhängen. Vue hat eine spezielle Direktive hierfür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die von Ihnen festgelegte Datenschlüssel und hält sie mit dem `<input>` synchron. `v-model` funktioniert über alle verschiedenen Eingabetypen hinweg, einschließlich Kontrollkästchen, Radios und Auswahloptionen. Um `v-model` zu verwenden, fügen Sie ein Attribut mit der Struktur `v-model="variable"` zum `<input>` hinzu.

   In unserem Fall würden wir es unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Tun Sie dies jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können auch Daten mit `<input>`-Werten durch eine Kombination aus Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich ist dies, was `v-model` im Hintergrund tut. Die genaue Ereignis- und Attributkombination variiert jedoch je nach Eingabetyp und erfordert mehr Code als nur die Verwendung der `v-model`-Abkürzung.

3. Lassen Sie uns unsere Verwendung von `v-model` testen, indem wir den Wert der im `onSubmit()`-Methode gesendeten Daten loggen. In Komponenten werden Dateneigenschaften mit dem `this`-Schlüsselwort angesprochen. Deshalb greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, sodass sie so aussieht:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("Label value: ", this.label);
       },
     },
   };
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole sehen, z.B.:

   ```plain
   Label value: My value
   ```

## Ändern des v-model Verhaltens mit Modifikatoren

Ähnlich wie Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall sind zwei von Interesse. Der erste, `.trim`, wird Leerzeichen vor und nach der Eingabe entfernen. Wir können den Modifikator wie folgt zu unserer `v-model`-Anweisung hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert das Verhalten der `v-model`-Synchronisierung für Texteingaben. Wie zuvor erwähnt, funktioniert die `v-model`-Synchronisierung durch Aktualisierung der Variablen mithilfe von Ereignissen. Bei Texteingaben erfolgt diese Synchronisation mithilfe des [`input`-Ereignisses](/de/docs/Web/API/Element/input_event). Das bedeutet häufig, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator veranlasst `v-model`, stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) zu verwenden. Dies bedeutet, dass Vue die Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular gesendet wird. Für unsere Zwecke ist dies weitaus vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verketten, z.B., `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten und testen Sie dann Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Übergeben von Daten an Elternkomponenten mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah daran, neue To-Do-Items zu unserer Liste hinzuzufügen. Der nächste Schritt besteht darin, das neu erstellte To-Do-Item an unsere `App`-Komponente zu übergeben. Dazu kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten übermittelt, und die `App` kann darauf hören. Dies funktioniert sehr ähnlich wie native Ereignisse bei HTML-Elementen: Eine untergeordnete Komponente kann ein Ereignis senden, das über `v-on` gehört werden kann.

In dem `onSubmit`-Ereignishandler unseres `ToDoForm`, lassen Sie uns ein `todo-added` Ereignis hinzufügen. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler groß- und kleinschreibungsempfindlich sind und keine Leerzeichen enthalten dürfen. Vue-Templates werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Templates nicht auf Ereignisse hören können, deren Namen Großbuchstaben enthalten.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch Folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie zurück zu `App.vue` und fügen Sie Ihrer Komponentenobjekt eine `methods`-Eigenschaft hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Vorerst kann diese Methode einfach `To-do added` in die Konsole loggen.

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

3. Fügen Sie als nächstes einen Ereignislistener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>` hinzu, der die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Kurznotation würde der Listener wie folgt aussehen: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` senden, sollten Sie das Konsolenprotokoll von der `addToDo()`-Methode sehen. Das ist gut, aber wir übermitteln immer noch keine Daten zurück an die `App.vue`-Komponente. Dies können wir tun, indem wir zusätzliche Argumente zur `this.$emit()`-Funktion in der `ToDoForm`-Komponente übergeben.

   In diesem Fall, wenn wir das Ereignis auslösen, möchten wir die `label`-Daten damit übergeben. Dies geschieht, indem die Daten, die Sie übergeben möchten, als weiterer Parameter in die `$emit()`-Methode eingefügt werden: `this.$emit("todo-added", this.label)`. Dies ähnelt dem, wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Das bedeutet, dass das ausgelöste Ereignis direkt dem Objekt entspricht, das Sie übergeben. In unserem Fall wird unser Ereignisobjekt nur eine Zeichenkette sein.

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

5. Um diese Daten tatsächlich in `App.vue` aufnehmen zu können, müssen wir einen Parameter zu unserer `addToDo()`-Methode hinzufügen, der das `label` des neuen To-Do-Items enthält.

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

Wenn Sie Ihr Formular erneut testen, werden Sie sehen, dass der eingegebene Text bei der Übermittlung in Ihrer Konsole angezeigt wird. Vue übergibt automatisch die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignis-Handler.

## Hinzufügen des neuen Todos zu unseren Daten

Da wir nun die Daten aus `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element, das es darstellt, zur `ToDoItems`-Array hinzufügen. Dies kann durch das Hinzufügen eines neuen To-Do-Objekts zur Array, das unsere neuen Daten enthält, erfolgen.

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

2. Versuchen Sie, Ihr Formular erneut zu testen, und Sie sollten sehen, dass neue To-Do-Items am Ende der Liste angehängt werden.
3. Lass uns vor dem Weitergehen eine weitere Verbesserung machen. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden Todo-Items ohne Text trotzdem zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur den leeren String testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode so. Wenn der Labelwert leer ist, werden wir das `todo-added`-Ereignis nicht auslösen.

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

4. Versuchen Sie Ihr Formular erneut. Nun können Sie keine leeren Items mehr zur To-Do-Liste hinzufügen.

![Unsere Todo-Listen-App gerendert mit einem Texteingabefeld für neue Todos](rendered-form-with-new-items.png)

## Verwenden von v-model, um den Eingabewert zu aktualisieren

Es gibt noch eine Sache, die wir in unserer `ToDoForm`-Komponente beheben müssen — nach dem Übermitteln enthält das `<input>` immer noch den alten Wert. Aber das ist einfach zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld ebenfalls aktualisiert, wenn wir den Namensparameter auf einen leeren String setzen.

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

Wenn Sie nun auf die Schaltfläche "Hinzufügen" klicken, wird die "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können nun To-Do-Items zu unserem Formular hinzufügen! Unsere App beginnt sich nun interaktiv anzufühlen, aber ein Problem ist, dass wir das Aussehen und Gefühl bisher vollständig ignoriert haben. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu beheben, indem wir uns die verschiedenen Möglichkeiten ansehen, die Vue bietet, um Komponenten zu stylen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
