---
title: "Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben nun Beispieldaten vorliegen und eine Schleife, die jedes Datenstück entnimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir als Nächstes wirklich benötigen, ist die Möglichkeit, unseren Nutzern zu erlauben, ihre eigenen Todo-Elemente in die App einzugeben. Dazu benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgeführt wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Dies ist das Thema, das wir in diesem Artikel behandeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnis des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer auf HTML-basierenden Templatesyntax geschrieben, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen den Umgang mit Formularen in Vue, und damit verbunden Ereignisse, Modelle und Methoden kennen.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben nun eine App, die eine Liste von To-Do-Elementen anzeigt. Wir können unsere Liste von Elementen jedoch nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die uns erlaubt, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei mit dem Namen `ToDoForm.vue`.
2. Fügen Sie wie zuvor einen leeren `<template>`- und einen `<script>`-Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Lassen Sie uns ein HTML-Formular hinzufügen, das es Uns erlaubt, ein neues To-Do-Element einzugeben und in die App zu übermitteln. Wir brauchen ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) mit einem [`<label>`](/de/docs/Web/HTML/Reference/Elements/label), einem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) und einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button). Aktualisieren Sie Ihre Vorlage wie folgt:

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

   Wir haben jetzt eine Formularkomponente, in die wir den Titel eines neuen To-Do-Elements eingeben können (das beim Rendern zu einem Label für das entsprechende `ToDoItem` wird).

4. Lassen Sie uns diese Komponente in unserer App laden. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen im `<script>`-Element hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren – aktualisieren Sie die Eigenschaft `components` des Komponentenobjekts so, dass sie wie folgt aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Schließlich rendern Sie Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element in Ihr `<template>` der `App` einfügen, wie folgt:

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

Wenn Sie jetzt Ihre laufende Seite aufrufen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zur Eingabe neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Add" klicken, wird die Seite das Formular zurück zum Server schicken, aber das ist nicht wirklich das, was wir wollen. Was wir eigentlich tun möchten, ist eine Methode beim [`submit`-Event](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo zu der in `App` definierten `ToDoItem`-Datenliste hinzufügt. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode und Binden an ein Ereignis mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und dies geschieht innerhalb einer `methods`-Eigenschaft unserer Komponente, die sich an derselben Stelle befindet wie `data()`, `props` usw. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Bei Referenzierung werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zu nutzen, um Informationen in der Vorlage anzuzeigen. Zur Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft im `ToDoForm`-Komponentenobjekt hinzufügen. Wir verwenden diese, um die Übermittlungsaktion zu bearbeiten.

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

2. Als nächstes müssen wir die Methode an den `submit`-Ereignis-Handler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax zum Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die Syntax `v-on:event="method"`. Und ähnlich wie `v-bind` gibt es auch eine Kurzschreibweise: `@event="method"`.

   Wir verwenden hier die Kurzschreibweise für Konsistenz. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten nach wie vor an den Server, was ein Neuladen verursacht. Da wir die gesamte Verarbeitung auf dem Client durchführen, gibt es keinen Server zur Bearbeitung der Rückgabe. Bei einem Seitenaktualisierung verlieren wir auch alle lokalen Zustände. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite weitergegeben wird ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla-JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die dies für uns direkt in unserem Template behandeln kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt wie folgt angehängt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt die Weitergabe des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von genau diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignishandler nur mit der angegebenen Taste aus. [MDN hat eine Liste gültiger Schlüsselwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrwortige Schlüssel müssen in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z.B. `page-down`).
   - `.native`: Hört auf ein natives Ereignis auf dem Root (äußerst umschließenden) Element auf Ihrer Komponente.
   - `.once`: Hört auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenevent aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenevent aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenevent aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignislisteners in Vanilla-JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Sendeaktion des Browsers zu stoppen. Fügen Sie `.prevent` zu Ihrem `@submit`-Handler in Ihrem Template wie folgt hinzu:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie jetzt versuchen, das Formular zu übermitteln, werden Sie feststellen, dass die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des von uns in unserer `onSubmit()`-Methode hinzugefügten [`console.log()`](/de/docs/Web/API/console/log_static) sehen.

## Datenbindung an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir brauchen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Dos zu verfolgen.

1. Fügen Sie dem `ToDoForm`-Komponentenobjekt eine `data()`-Methode hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert von `label` auf eine leere Zeichenkette setzen.

   Ihr Komponentenobjekt sollte nun so aussehen:

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

2. Wir benötigen jetzt eine Möglichkeit, den Wert des `new-todo-input`-Elementfelds mit dem `label`-Feld zu verknüpfen. Vue hat eine spezielle Direktive dafür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet sich an die von Ihnen festgelegte Daten-Eigenschaft und hält sie mit dem `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Checkboxen, Radios und Auswahlfeldern. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Machen Sie dies jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten durch eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich macht `v-model` dies im Hintergrund. Der genaue Ereignis- und Attributkombinations-Ansatz variiert jedoch je nach Eingabetyp und erfordert mehr Code als nur die Verwendung der `v-model`-Abkürzung.

3. Testen wir unseren `v-model`-Einsatz, indem wir den Wert der in unserer `onSubmit()`-Methode übermittelten Daten protokollieren. In Komponenten werden Datenattribute mit dem Schlüsselwort `this` angesprochen. Also greifen wir mit `this.label` auf unser `label`-Feld zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie dem `<input>`-Feld etwas Text hinzu und klicken Sie auf die Schaltfläche "Add". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

Ähnlich wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu verändern. In unserem Fall gibt es zwei Modifikatoren, die es sich lohnt zu überlegen. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert den Zeitpunkt, zu dem `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisation durch Aktualisierung der Variablen mit Ereignissen. Bei Texteingaben erfolgt diese Synchronisation standardmäßig durch das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet das, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verkettet verwenden, z. B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerraum an beiden Enden einzugeben.

## Datenübergabe an Eltern mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah dran, neue To-Do-Elemente zu unserer Liste hinzufügen zu können. Der nächste Schritt besteht darin, das neu erstellte To-Do-Element an unsere `App`-Komponente weiterzugeben. Dazu kann unser `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten übergibt, und `App` kann darauf hören. Das funktioniert sehr ähnlich wie native Ereignisse bei HTML-Elementen: Eine untergeordnete Komponente kann ein Ereignis auslösen, das über `v-on` abgehört werden kann.

Im `onSubmit`-Ereignishandler unseres `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitiv sind und keine Leerzeichen enthalten dürfen. Vue-Vorlagen werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Vorlagen nicht auf Ereignisse hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch Folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie nun zurück zu `App.vue` und fügen Sie Ihrem Komponentenobjekt eine `methods`-Eigenschaft mit einer `addToDo()`-Methode hinzu, wie unten gezeigt. Für den Moment kann diese Methode einfach `To-do added` in die Konsole protokollieren.

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

3. Fügen Sie als nächstes einen Ereignislistener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>` hinzu, der die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Verwenden Sie die `@`-Kurzschreibweise, würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` einreichen, sollten Sie das Konsolenprotokoll der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben immer noch keine Daten zurück an die `App.vue`-Komponente. Wir können das tun, indem wir zusätzliche Argumente an die `this.$emit()`-Funktion im `ToDoForm`-Komponenten zurückgeben.

   In diesem Fall möchten wir beim Auslösen des Ereignisses die `label`-Daten mit übergeben. Dies geschieht, indem die Daten, die Sie übergeben möchten, als weiterer Parameter der `$emit()`-Methode hinzugefügt werden: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie native JavaScript-Ereignisse Daten enthalten, jedoch enthalten benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt. Das bedeutet, dass das ausgelöste Ereignis direkt dem übergebenen Objekt entspricht. In unserem Fall wird unser Ereignisobjekt also nur eine Zeichenkette sein.

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

5. Um diese Daten tatsächlich in `App.vue` zu erfassen, müssen wir unserer `addToDo()`-Methode ein Parameter hinzufügen, der das `label` des neuen To-Do-Elements enthält.

   Gehe zurück zu `App.vue` und aktualisieren Sie dies jetzt:

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

Wenn Sie Ihr Formular erneut testen, sehen Sie, dass der von Ihnen eingegebene Text bei der Übermittlung in Ihrer Konsole angezeigt wird. Vue übergibt automatisch die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignishandler.

## Hinzufügen des neuen To-Dos zu unseren Daten

Jetzt, da wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element hinzufügen, das es der `ToDoItems`-Array hinzufügt. Dies kann erreicht werden, indem Sie ein neues To-Do-Element-Objekt mit unseren neuen Daten an das Array anhängen.

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

2. Testen Sie Ihr Formular erneut, und Sie sollten sehen, wie neue To-Do-Elemente am Ende der Liste hinzugefügt werden.
3. Lassen Sie uns, bevor wir weitermachen, eine weitere Verbesserung vornehmen. Wenn Sie das Formular senden, während die Eingabe leer ist, werden To-Do-Elemente ohne Text dennoch zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das todo-added Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name durch den `.trim`-Modifikator bereits getrimmt wird, müssen wir nur auf die leere Zeichenkette testen.

   Gehen Sie zu Ihrer Komponente `ToDoForm` zurück und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Label-Wert leer ist, sollten wir das `todo-added`-Ereignis nicht auslösen.

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

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zur Eingabe neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model zur Aktualisierung eines Eingabewerts

Es gibt noch etwas in unserer `ToDoForm`-Komponente zu beheben – nach dem Absenden enthält das `<input>` weiterhin den alten Wert. Aber das ist einfach zu beheben – da wir `v-model` verwenden, um die Daten in `ToDoForm` an das `<input>` zu binden, wird das Eingabefeld aktualisiert, wenn wir den Namen auf eine leere Zeichenkette setzen.

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

Jetzt, wenn Sie auf die Schaltfläche "Add" klicken, wird der "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können nun Todo-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt, interaktiv zu wirken, aber ein Problem ist, dass wir bisher völlig das Aussehen und das Gefühl ignoriert haben. Im nächsten Artikel konzentrieren wir uns darauf, dies zu beheben und betrachten die verschiedenen Möglichkeiten, wie Vue das Styling von Komponenten ermöglicht.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
