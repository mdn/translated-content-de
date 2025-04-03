---
title: "Hinzufügen eines neuen Todo-Formulars: Vue Events, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben jetzt Beispieldaten vorbereitet und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir wirklich als nächstes brauchen, ist die Möglichkeit, unseren Benutzern zu erlauben, ihre eigenen To-Do-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Dies werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist, geschrieben. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, wie man Formulare in Vue, und damit verknüpfte Ereignisse, Modelle und Methoden, verarbeitet.
      </td>
    </tr>
  </tbody>
</table>

## Ein neues To-Do-Formular erstellen

Wir haben jetzt eine App, die eine Liste von To-Do-Elementen anzeigt. Wir können jedoch unsere Artikelliste nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Erstellen wir eine neue Komponente, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor leere `<template>` und `<script>` Tags hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, das es Ihnen ermöglicht, ein neues To-Do-Element einzugeben und es in die App zu übermitteln. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihr Template wie folgt:

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

   Wir haben jetzt eine Formular-Komponente, in die wir den Titel eines neuen To-Do-Elements eingeben können (der später zu einem Label für das entsprechende `ToDoItem` wird, wenn es gerendert wird).

4. Laden wir diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen innerhalb Ihres `<script>`-Elements hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren – aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, sodass sie so aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie schließlich für diesen Abschnitt Ihre `ToDoForm`-Komponente innerhalb Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb Ihrer `App`-`<template>`-Struktur wie folgt hinzufügen:

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

Wenn Sie nun Ihre laufende Seite ansehen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld für neue To-Dos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Add" klicken, wird die Seite das Formular zurück an den Server senden, aber das ist eigentlich nicht das, was wir wollen. Tatsächlich möchten wir eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) ausführen, die das neue To-Do zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode & Binden an ein Ereignis mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und dies geschieht innerhalb einer `methods`-Eigenschaft unserer Komponente, die an der gleichen Stelle wie `data()`, `props` usw. platziert wird. Die `methods`-Eigenschaft hält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Wenn Methoden referenziert werden, werden sie vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb des Templates zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir verwenden diese, um die Übermittlungsaktion zu verarbeiten.

   Fügen Sie diese wie folgt hinzu:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
   };
   ```

2. Als nächstes müssen wir die Methode an den `submit`-Ereignis-Handler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, hat Vue eine spezielle Direktive für das Ereignishandling: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die Syntax `v-on:event="method"`. Und ähnlich wie `v-bind` gibt es auch eine Kurzsyntax: `@event="method"`.

   Wir verwenden hier die Kurzsyntax der Konsistenz halber. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App weiterhin die Daten an den Server, was zu einem Aktualisieren führt. Da wir alle unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, der die Rücksendung verarbeitet. Wir verlieren auch den gesamten lokalen Zustand bei Seitenaktualisierungen. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite "bubbelt" ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in reinem JavaScript). Vue hat eine spezielle Syntax namens **Event-Modifikatoren**, die dies direkt in unserem Template für uns erledigen kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt angefügt, wie so: `@event.modifier`. Hier ist eine Liste von Event-Modifikatoren:

   - `.stop`: Stoppt die Weiterleitung des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in normalen JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von genau diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignis-Handler nur über die angegebene Taste aus. [MDN hat eine Liste von gültigen Schlüsselwerten](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); Mehrwortschlüssel müssen einfach in {{Glossary("kebab_case", "kebab-case")}} konvertiert werden (z.B., `page-down`).
   - `.native`: Hört auf ein natives Ereignis auf dem Wurzel-(äußersten) Element Ihrer Komponente.
   - `.once`: Hört auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustasten-Ereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustasten-Ereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustasten-Ereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Event-Listeners in reinem JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Submit-Aktion des Browsers zu stoppen. Fügen Sie `.prevent` wie folgt zu Ihrem `@submit`-Handler in Ihrem Template hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie nun versuchen, das Formular abzusenden, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des von uns im Inneren unserer `onSubmit()`-Methode hinzugefügten [`console.log()`](/de/docs/Web/API/console/log_static) sehen.

## Daten an Eingaben mit v-model binden

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Dos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf einen leeren String setzen.

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

2. Wir benötigen jetzt eine Möglichkeit, den Wert des `new-todo-input`-Felds an das `label`-Feld zu binden. Vue hat eine spezielle Direktive dafür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die von Ihnen gesetzte Daten-Eigenschaft und hält sie synchron mit dem `<input>`. `v-model` funktioniert über alle möglichen Eingabetypen, einschließlich Kontrollkästchen, Radiobuttons und Auswahl-Inputs. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut hinzu mit der Struktur `v-model="variable"`.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Tun Sie dies jetzt:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten über eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich tut `v-model` dies im Hintergrund. Die exakte Kombination aus Ereignis und Attribut variiert jedoch je nach Eingabetypen und wird mehr Code erfordern als einfach den `v-model`-Shortcut zu nutzen.

3. Testen wir die Verwendung von `v-model`, indem wir den Wert der in unserer `onSubmit()`-Methode übermittelten Daten protokollieren. In Komponenten werden Dateneigenschaften unter Verwendung des `this`-Schlüsselworts zugegriffen. Also greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, sodass sie so aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie jetzt zurück zu Ihrer laufenden App, fügen Sie dem `<input>`-Feld etwas Text hinzu und klicken Sie auf die Schaltfläche "Add". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Verhalten von v-model mit Modifikatoren ändern

Ähnlich wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die in Betracht gezogen werden sollten. Der erste, `.trim`, entfernt Leerzeichen vor und nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung hinzufügen, wie folgt: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, arbeitet `v-model`-Synchronisierung durch das Aktualisieren der Variablen mithilfe von Ereignissen. Für Texteingaben erfolgt diese Synchronisierung über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Dies bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular abgeschickt wird. Für unsere Zwecke ist dies viel vernünftiger, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator gemeinsam zu verwenden, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie, ein Beispiel mit Leerzeichen an beiden Enden zu übermitteln.

## Daten mit benutzerdefinierten Ereignissen an übergeordnete Elemente übergeben

Wir sind jetzt sehr nah daran, neue To-Do-Elemente zu unserer Liste hinzuzufügen. Das nächste, was wir tun müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dazu können wir unseren `ToDoForm` eine benutzerdefinierte Event auslösen lassen, das die Daten übergibt, und `App` hören lassen. Das funktioniert sehr ähnlich wie native Ereignisse auf HTML-Elementen: eine untergeordnete Komponente kann ein Ereignis auslösen, das über `v-on` gehört werden kann.

Im `onSubmit`-Ereignis-Handler unseres `ToDoForm`-s fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Event-Handler groß-/kleinschreibungsempfindlich sind und keine Leerzeichen enthalten können. Vue-Templates werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Templates keine Ereignisse mit Großbuchstaben hören können.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode mit folgendem:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als nächstes zurück zu `App.vue` und fügen Sie Ihrer Komponentenhierarchie eine `methods`-Eigenschaft hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Diese Methode kann vorerst einfach `To-do added` an die Konsole loggen.

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

3. Fügen Sie als nächstes einen Event-Listener für das `todo-added`-Ereignis in `<to-do-form></to-do-form>` hinzu, das die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Unter Verwendung des `@`-Shortcuts würde der Listener folgendermaßen aussehen: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` einreichen, sollten Sie die Konsolenprotokollierung von der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben noch keine Daten zurück in die `App.vue`-Komponente. Wir können das tun, indem wir zusätzliche Argumente an die `this.$emit()`-Funktion zurück im `ToDoForm`-Komponente übergeben.

   In diesem Fall, wenn wir das Ereignis auslösen, wollen wir die `label`-Daten zusammen mit ihm übergeben. Dies geschieht, indem die Daten, die Sie übergeben möchten, als weiterer Parameter in der `$emit()`-Methode enthalten sind: `this.$emit("todo-added", this.label)`. Dies ist ähnlich zu nativen JavaScript-Ereignissen, die Daten enthalten, mit Ausnahme, dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Dies bedeutet, dass das ausgelöste Ereignis direkt mit dem Objekt übereinstimmt, das Sie übermittelt haben. In unserem Fall wird unser Ereignisobjekt nur eine Zeichenfolge sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode folgendermaßen:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten tatsächlich innerhalb von `App.vue` aufzugreifen, müssen wir einen Parameter zu unserer `addToDo()`-Methode hinzufügen, der den `label` des neuen To-Do-Elements enthält.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie dies jetzt:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, sehen Sie den Text, den Sie bei der Übermittlung eingegeben haben, in Ihrer Konsole protokolliert. Vue übergibt automatisch die Argumente nach dem Ereignisnamen im `this.$emit()` an Ihren Event-Handler.

## Hinzufügen des neuen To-Dos zu unseren Daten

Jetzt, da wir die Daten aus `ToDoForm` in `App.vue` verfügbar haben, müssen wir einen Gegenstand hinzufügen, der sie in der `ToDoItems`-Liste reflektiert. Dies kann getan werden, indem ein neues To-Do-Element zu dem Array hinzugefügt wird, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode folgendermaßen:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Testen Sie Ihr Formular erneut, und Sie sollten sehen, wie neue To-Do-Elemente am Ende der Liste angehängt werden.
3. Machen wir eine weitere Verbesserung, bevor wir weitermachen. Wenn Sie das Formular abschicken, während die Eingabe leer ist, werden To-Do-Elemente ohne Text dennoch zur Liste hinzugefügt. Um dies zu beheben, können wir verhindern, dass das `todo-added`-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf den leeren String testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode so. Wenn der Labelwert leer ist, sollten wir das `todo-added`-Ereignis nicht auslösen.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Versuchen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen.

![Unsere To-Do-Listen-App gerendert mit einem Texteingabefeld zum Hinzufügen neuer To-Dos](rendered-form-with-new-items.png)

## Verwendung von v-model zur Aktualisierung eines Eingabewerts

Es gibt noch eine Sache, die wir in unserer `ToDoForm`-Komponente beheben müssen – nach dem Absenden enthält das `<input>` immer noch den alten Wert. Aber das ist einfach zu beheben – weil wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wenn wir den Namen-Parameter auf einen leeren String setzen, wird die Eingabe auch aktualisiert.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente wie folgt:

```js
onSubmit() {
  if (this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

Nun, wenn Sie auf die Schaltfläche "Add" klicken, wird das "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können nun To-Do-Elemente zu unserem Formular hinzufügen! Unsere App beginnt sich jetzt interaktiv anzufühlen, aber ein Problem ist, dass wir ihr Aussehen und Gefühl bisher vollständig ignoriert haben. Im nächsten Artikel konzentrieren wir uns darauf, dies zu beheben und schauen uns die verschiedenen Möglichkeiten an, die Vue zur Gestaltung von Komponenten bietet.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
