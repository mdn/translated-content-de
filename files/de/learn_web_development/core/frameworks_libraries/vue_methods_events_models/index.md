---
title: "Hinzufügen eines neuen To-Do-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben nun Beispieldaten und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir als Nächstes wirklich brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Elemente in die App einzugeben. Dafür benötigen wir ein text `<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten abgesendet werden, eine Methode, die beim Absenden ausgeführt wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Dies werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernkonzepten der <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnis der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrundeliegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über die Handhabung von Formularen in Vue zu lernen und in Verbindung damit über Ereignisse, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben jetzt eine App, die eine Liste von To-Do-Elementen anzeigt. Wir können jedoch unsere Liste von Elementen nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Erstellen wir eine neue Komponente, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und ein `<script>` Tag hinzu:

   ```vue
   <template></template>

   <script>
   export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, mit dem Sie ein neues To-Do-Element eingeben und in die App einreichen können. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihre Vorlage wie folgt:

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

   So haben wir jetzt eine Formular-Komponente, in die wir den Titel eines neuen To-Do-Artikels eingeben können (dies wird, wenn es schließlich gerendert wird, zu einem Etikett für das entsprechende `ToDoItem`).

4. Laden wir diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt nach der vorherigen innerhalb Ihres `<script>` Elements hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren – aktualisieren Sie die `components` Eigenschaft des Komponentenobjekts so, dass sie folgendermaßen aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie schließlich in diesem Abschnitt Ihre `ToDoForm`-Komponente innerhalb Ihrer App, indem Sie das `<to-do-form />`-Element in das `<template>` Ihrer `App` hinzufügen, wie folgt:

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

Wenn Sie jetzt Ihre laufende Webseite anzeigen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-Do-Liste App, gerendert mit einem Texteingabefeld zum Eingeben neuer Aufgaben](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, wird das Formular an den Server zurückgesendet, aber das ist nicht wirklich das, was wir wollen. Was wir tatsächlich tun möchten, ist, eine Methode auszuführen, die beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) die neue Aufgabe zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode und Binden an ein Ereignis mit v-on

Um eine Methode für die `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie zum Komponentenobjekt hinzufügen, und dies geschieht innerhalb einer `methods`-Eigenschaft unserer Komponente, die sich im selben Bereich wie `data()`, `props` usw. befindet. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Bei Bezugnahme werden Methoden vollständig ausgeführt, sodass es keine gute Idee ist, sie zur Anzeige von Informationen innerhalb der Vorlage zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir werden es verwenden, um die Sendeaktion zu behandeln.

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

2. Als Nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>` Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind) Syntax zum Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on` Direktive funktioniert über die Syntax `v-on:event="method"`. Und ähnlich wie `v-bind`, gibt es auch eine Kurzschreibweise: `@event="method"`.

   Wir werden die Kurzschreibweise hier aus Gründen der Konsistenz verwenden. Fügen Sie den `submit`-Handler zu Ihrem `<form>` Element wie folgt hinzu:

   ```vue
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten weiterhin an den Server, was zu einer Aktualisierung führt. Da wir unsere gesamte Verarbeitung auf dem Client durchführen, gibt es keinen Server, der das Zurücksenden behandeln würde. Wir verlieren auch alle lokalen Zustandsdaten bei der Seitenaktualisierung. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite aufsteigt ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Eventmodifier**, die dies direkt in unserer Vorlage für uns erledigen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt hinzugefügt wie folgt: `@event.modifier`. Hier ist eine Liste von Eventmodifikatoren:

   - `.stop`: Stoppt die Ereignisausbreitung. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von genau diesem Element gesendet wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrteilige Tasten müssen einfach in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z.B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis des Wurzelelements (äußere Hülle) Ihres Komponenten.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }` Parameters beim Erstellen eines Ereignislisteners in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Sendeaktion des Browsers zu stoppen. Fügen Sie `.prevent` Ihrem `@submit`-Handler in Ihrer Vorlage hinzu, wie folgt:

   ```vue
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie jetzt das Formular absenden, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, die wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Datenbindung zu Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir brauchen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert der Aufgabe zu verfolgen.

1. Fügen Sie unserem `ToDoForm`-Komponentenobjekt eine `data()`-Methode hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf einen leeren String setzen.

   Ihr Komponentenobjekt sollte jetzt folgendermaßen aussehen:

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

2. Wir brauchen nun eine Möglichkeit, den Wert des `new-todo-input`-Elementfelds an das `label`-Feld zu binden. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet sich an die von Ihnen darauf gesetzte Dateneigenschaft und hält sie mit dem `<input>` synchron. `v-model` funktioniert über alle verschiedenen Eingabetypen hinweg, einschließlich Kontrollkästchen, Radios und Auswahl-Eingaben. Um `v-model` zu verwenden, fügen Sie ein Attribut mit der Struktur `v-model="variable"` dem `<input>` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld wie unten gesehen hinzufügen. Machen Sie dies jetzt:

   ```vue
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch durch eine Kombination von Ereignissen und `v-bind`-Attributen mit `<input>`-Werten synchronisieren. Tatsächlich tut `v-model` das im Hintergrund. Die genaue Ereignis- und Attributkombination variiert jedoch je nach Eingabetypen und benötigt mehr Code als nur die Verwendung der `v-model`-Abkürzung.

3. Testen wir unsere Verwendung von `v-model`, indem wir den Wert der Daten, die in unserer `onSubmit()`-Methode gesendet werden, protokollieren. In Komponenten werden Datenattribute unter Verwendung des `this` Schlüsselworts aufgerufen. So greifen wir mit `this.label` auf unser `label`-Feld zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie folgendermaßen aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie jetzt zurück zu Ihrer laufenden App, fügen Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert, der in Ihrer Konsole protokolliert wird, sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

Ähnlich wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die es sich zu überlegen lohnt. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung wie folgt hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert den Zeitpunkt, an dem `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, erfolgt die `v-model`-Synchronisierung, indem die Variable mit Ereignissen aktualisiert wird. Bei Texteingaben erfolgt diese Synchronisierung über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastenanschlag synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue die Daten nur dann synchronisieren wird, wenn die Eingabe den Fokus verliert oder das Formular abgeschickt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie z.B., einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Weitergabe von Daten an Elternkomponenten mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah daran, neue To-Do-Elemente zu unserer Liste hinzufügen zu können. Das Nächste, was wir tun müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dazu kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten überträgt, und die `App` kann es überwachen. Dies funktioniert sehr ähnlich zu nativen Ereignissen auf HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, das über `v-on` überwacht werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitive sind und keine Leerzeichen enthalten dürfen. Vue-Vorlagen werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Vorlagen nicht auf Ereignisse hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch das Folgende:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als Nächstes zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Vorerst kann diese Methode einfach `To-do added` in die Konsole protokollieren.

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

3. Fügen Sie als Nächstes einen Ereignislistener für das `todo-added`-Ereignis zu `<to-do-form></to-do-form>` hinzu, der die Methode `addToDo()` aufruft, wenn das Ereignis ausgelöst wird. Unter Verwendung der `@`-Kurzschreibweise würde der Listener folgendermaßen aussehen: `@todo-added="addToDo"`:

   ```vue
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` absenden, sollten Sie das Konsolenprotokoll der `addToDo()`-Methode sehen. Das ist gut, aber wir geben noch keine Daten zurück an die `App.vue`-Komponente. Das können wir tun, indem wir zusätzliche Argumente an die `this.$emit()`-Funktion in der `ToDoForm`-Komponente übergeben.

   In diesem Fall, wenn wir das Ereignis auslösen, möchten wir die `label`-Daten zusammen mit ihm übergeben. Dies geschieht, indem Sie die Daten, die Sie übergeben möchten, als ein weiteres Argument in der `$emit()`-Methode einschließen: `this.$emit("todo-added", this.label)`. Dies ähnelt der Art und Weise, wie native JavaScript-Ereignisse Daten enthalten, jedoch enthalten benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt. Das bedeutet, dass das ausgelöste Ereignis direkt dem Objekt entspricht, das Sie übergeben. In unserem Fall wird unser Ereignisobjekt also einfach ein String sein.

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

5. Um diese Daten tatsächlich in `App.vue` aufzunehmen, müssen wir unserer `addToDo()`-Methode einen Parameter hinzufügen, der das `label` des neuen To-Do-Elements enthält.

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

Wenn Sie Ihr Formular erneut testen, sehen Sie den Text, den Sie bei der Eingabe in Ihrer Konsole eingetragen haben. Vue übergibt automatisch die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignishandler.

## Hinzufügen des neuen To-Dos zu unseren Daten

Jetzt, da wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element, das es repräsentiert, zur `ToDoItems`-Liste hinzufügen. Dies kann geschehen, indem ein neues To-Do-Objekt zur Liste hinzugefügt wird, das unsere neuen Daten enthält.

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
3. Machen wir eine weitere Verbesserung, bevor wir fortfahren. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden To-Do-Elemente ohne Text noch zur Liste hinzugefügt. Um dies zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf den leeren String testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Labelwert leer ist, lassen Sie uns nicht das `todo-added`-Ereignis auslösen.

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

![Unsere To-Do-Liste App, gerendert mit einem Texteingabefeld zum Eingeben neuer Aufgaben](rendered-form-with-new-items.png)

## Verwendung von v-model zum Aktualisieren eines Eingabewerts

Es gibt noch etwas, das wir in unserer `ToDoForm`-Komponente beheben müssen — nach dem Absenden enthält das `<input>` noch den alten Wert. Aber das ist einfach zu beheben — da wir `v-model` verwenden, um die Daten an `<input>` in `ToDoForm` zu binden, wird das Eingabefeld aktualisiert, wenn wir den Namen auf einen leeren String setzen.

Aktualisieren Sie die `onSubmit()`-Methode der `ToDoForm`-Komponente so:

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

Nun, wenn Sie auf die Schaltfläche "Hinzufügen" klicken, wird `new-todo-input` sich selbst löschen.

## Zusammenfassung

Ausgezeichnet. Wir können nun To-Do-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt interaktiv zu wirken, aber ein Problem ist, dass wir ihr Aussehen und Verhalten bisher völlig ignoriert haben. Im nächsten Artikel konzentrieren wir uns darauf, dies zu beheben, und betrachten die verschiedenen Möglichkeiten, die Vue bietet, um Komponenten zu stylen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
