---
title: "Hinzufügen eines neuen Todo-Formulars: Vue Events, Methoden und Modelle"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir haben nun Beispieldaten bereitgestellt und eine Schleife, die jedes Datenbit nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir jetzt wirklich brauchen, ist die Möglichkeit, unseren Nutzern zu erlauben, ihre eigenen Todo-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Event, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell zur Steuerung der Daten. Genau das werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a>, und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal, in dem Node + npm installiert ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Erlernen des Umgangs mit Formularen in Vue und damit verbunden Events, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben nun eine App, die eine Liste von To-Do-Elementen anzeigt. Allerdings können wir unsere Liste von Elementen nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Lassen Sie uns eine neue Komponente erstellen, die es uns ermöglicht, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei mit dem Namen `ToDoForm.vue`.
2. Fügen Sie ein leeres `<template>` und ein `<script>`-Tag wie zuvor hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Fügen Sie ein HTML-Formular hinzu, das es Ihnen erlaubt, ein neues Todo-Element einzugeben und es in die App zu übermitteln. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihre Vorlage wie folgt:

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

   Wir haben nun eine Formularkomponente, in die wir den Titel eines neuen To-Do-Elements eingeben können (der später als Bezeichnung für das entsprechende `ToDoItem` dienen wird, wenn es gerendert wird).

4. Laden Sie diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen in Ihr `<script>`-Element ein:

   ```js
   import ToDoForm from "./components/ToDoForm";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren - aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, sodass sie so aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie abschließend in diesem Abschnitt Ihre `ToDoForm`-Komponente, indem Sie das `<to-do-form />` Element in die `<template>` Ihrer `App` einfügen:

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

Wenn Sie nun Ihre laufende Seite anzeigen, sollten Sie das neue Formular sehen.

![Unsere To-Do-Listen-App mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, sendet die Seite das Formular zurück an den Server, aber das ist nicht wirklich das, was wir wollen. Wir möchten eine Methode im [`submit`-Event](/de/docs/Web/API/HTMLFormElement/submit_event) ausführen, die das neue Todo dem im `App` definierten `ToDoItem`-Datenliste hinzufügt. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode und Binden an ein Event mit v-on

Um eine Methode für die `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und das wird innerhalb einer `methods`-Eigenschaft unserer Komponente getan, die an derselben Stelle wie `data()`, `props` usw. steht. Die `methods`-Eigenschaft hält alle Methoden, die wir in unserer Komponente aufrufen müssen. Beim Referenzieren werden Methoden vollständig ausgeführt, daher ist es keine gute Idee, sie zur Anzeige von Informationen innerhalb der Vorlage zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

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

2. Als nächstes müssen wir die Methode an den `submit`-Event-Handler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind) Syntax zum Binden von Attributen verwendet, hat Vue eine spezielle Direktive zum Event-Handhabung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert durch die Syntax `v-on:event="method"`. Und ähnlich wie `v-bind` gibt es auch eine Kurzsyntax: `@event="method"`.

   Wir werden hier die Kurzsyntax für Konsistenz verwenden. Fügen Sie den `submit`-Handler Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten weiterhin an den Server, was eine Aktualisierung verursacht. Da wir unsere gesamte Verarbeitung auf dem Client ausführen, gibt es keinen Server, der den Postback verarbeitet. Wir verlieren auch alle lokalen Zustände bei der Seitenaktualisierung. Um zu verhindern, dass der Browser die Anfrage an den Server sendet, müssen wir die Standardaktion des Events stoppen, während es durch die Seite geht ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), in Vanilla-JavaScript). Vue hat eine spezielle Syntax namens **Event-Modifikatoren**, die dies direkt in unserer Vorlage für uns erledigen kann.

   Modifikatoren werden am Ende eines Events mit einem Punkt hinzugefügt, wie folgt: `@event.modifier`. Hier ist eine Liste der Event-Modifikatoren:

   - `.stop`: Stoppt die Weitergabe des Events. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Events.
   - `.prevent`: Verhindert das Standardverhalten des Events. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Event genau von diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Event-Handler nur durch die angegebene Taste aus. [MDN hat eine Liste der gültigen Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); Tasten mit mehreren Wörtern müssen einfach in [kebab-case](/de/docs/Glossary/kebab_case) konvertiert werden (z.B. `page-down`).
   - `.native`: Lauscht auf ein natives Event auf dem Root- (äußerst umhüllenden) Element in Ihrer Komponente.
   - `.once`: Lauscht auf das Event, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das Event der linken Maustaste aus.
   - `.right`: Löst den Handler nur über das Event der rechten Maustaste aus.
   - `.middle`: Löst den Handler nur über das Event der mittleren Maustaste aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }` Parameters beim Erstellen eines Event-Listeners in Vanilla-JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent` Modifikator verwenden, um die Standardaktion des Browsers beim Absenden zu stoppen. Fügen Sie `.prevent` zum `@submit`-Handler in Ihrer Vorlage wie folgt hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie nun versuchen, das Formular abzuschicken, werden Sie feststellen, dass die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse der [`console.log()`](/de/docs/Web/API/console/log_static) sehen, die wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Datenbindung an Eingabetextfelder mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue Todo-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir brauchen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des Todo-Elements zu verfolgen.

1. Fügen Sie dem `ToDoForm`-Komponentenobjekt eine `data()`-Methode hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf eine leere Zeichenkette setzen.

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

2. Wir benötigen jetzt einen Weg, den Wert des Feldes `new-todo-input` an das `label`-Feld zu binden. Vue hat eine spezielle Direktive dafür: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet die Daten-Eigenschaft, die Sie darauf setzen, und hält sie im `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Kontrollkästchen, Radios und Auswahlfeldern. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es unserem Feld `new-todo-input` wie unten gezeigt hinzufügen. Machen Sie das nun:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten mit `<input>`-Werten auch durch eine Kombination von Events und `v-bind`-Attributen synchronisieren. Tatsächlich ist dies, was `v-model` im Hintergrund tut. Jedoch variiert die genaue Kombination aus Events und Attributen je nach Eingabetypen und erfordert mehr Code, als nur die `v-model`-Abkürzung zu verwenden.

3. Lassen Sie uns unsere Verwendung von `v-model` testen, indem wir den Wert der Daten, die in unserer `onSubmit()`-Methode übermittelt werden, ausgeben. In Komponenten werden Datenattribute mit dem Schlüsselwort `this` aufgerufen. Wir greifen also mit `this.label` auf unser `label`-Feld zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie so aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, geben Sie Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Add". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

Ähnlich wie Event-Modifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei Überlegungen. Der erste, `.trim`, wird Leerzeichen vor oder nach der Eingabe entfernen. Wir können den Modifikator zur `v-model` Anweisung hinzufügen wie folgt: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisierung durch Aktualisierung der Variablen unter Verwendung von Events. Bei Texteingaben erfolgt diese Synchronisierung über das [`input`-Event](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastenanschlag synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Event](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue die Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel sinnvoller, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator gemeinsam zu verwenden, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie beispielsweise, einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Datenweitergabe an übergeordnete Elemente mit benutzerdefinierten Events

Wir sind nun sehr nah daran, neue To-Do-Elemente zu unserer Liste hinzuzufügen. Der nächste Schritt, den wir machen müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dafür können wir unser `ToDoForm` ein benutzerdefiniertes Event auslösen lassen, das die Daten übergibt, und `App` kann darauf hören. Dies funktioniert sehr ähnlich wie native Events auf HTML-Elementen: Eine untergeordnete Komponente kann ein Event auslösen, das durch `v-on` abgehört werden kann.

Im `onSubmit`-Event-Handler unseres `ToDoForm`, fügen wir ein `todo-added`-Event hinzu. Benutzerdefinierte Events werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Event-Handler Groß- und Kleinschreibung beachten und keine Leerzeichen enthalten können. Vue-Vorlagen werden auch in Kleinbuchstaben konvertiert, was bedeutet, dass Vue-Vorlagen nicht auf Events hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch das Folgende:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als nächstes zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt mit einer `addToDo()`-Methode hinzu, wie unten gezeigt. Diese Methode kann fürs Erste nur `To-do hinzugefügt` in der Konsole ausgeben.

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

3. Fügen Sie als nächstes einen Ereignislistener für das `todo-added`-Event zur `<to-do-form></to-do-form>` hinzu, das die `addToDo()`-Methode aufruft, wenn das Event ausgelöst wird. Mit der `@`-Kurzsyntax würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Beim Übermitteln Ihres `ToDoForm` sollten Sie das Konsolenlog der `addToDo()`-Methode sehen. Dies ist gut, aber wir übergeben immer noch keine Daten zurück an die `App.vue`-Komponente. Wir können dies tun, indem wir dieser Funktion in der `this.$emit()`-Methode in der `ToDoForm`-Komponente zusätzliche Argumente übergeben.

   In diesem Fall, wenn wir das Event auslösen, möchten wir die `label`-Daten zusammen mit ihm übergeben. Dies geschieht, indem man die Daten, die man übergeben möchte, als weiteren Parameter in die `$emit()`-Methode einfügt: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie bei nativen JavaScript-Events, die Daten enthalten, aber benutzerdefinierte Vue-Events enthalten standardmäßig kein Ereignisobjekt. Das bedeutet, dass das ausgelöste Ereignis direkt dem gesendeten Objekt entspricht. In unserem Fall wird unser Ereignisobjekt einfach ein String sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten tatsächlich innerhalb von `App.vue` aufzunehmen, müssen wir unserer `addToDo()`-Methode einen Parameter hinzufügen, der das `label` des neuen To-Do-Elements enthält.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie dies jetzt:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, sehen Sie, dass der eingegebene Text bei der Übermittlung in Ihrer Konsole protokolliert wird. Vue übergibt die Argumente nach dem Ereignisnamen in `this.$emit()` automatisch an Ihren Event-Handler.

## Hinzufügen des neuen Todos zu unseren Daten

Jetzt, da wir die Daten aus `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element erstellen, das es der `ToDoItems`-Array hinzufügt. Dies kann durch das Hinzufügen eines neuen To-Do-Objekts zum Array geschehen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Testen Sie Ihr Formular erneut und Sie sollten sehen, dass neue To-Do-Elemente am Ende der Liste hinzugefügt werden.
3. Machen wir noch eine weitere Verbesserung, bevor wir weitermachen. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden trotzdem To-Do-Elemente ohne Text hinzugefügt. Um das zu beheben, können wir verhindern, dass das `todo-added`-Event ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator getrimmt wird, müssen wir nur auf die leere Zeichenfolge testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode so. Wenn der `label`-Wert leer ist, lassen Sie uns das `todo-added`-Event nicht auslösen.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Versuchen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Elemente mehr zur To-Do-Liste hinzufügen.

![Unsere To-Do-Listen-App mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model, um einen Eingabewert zu aktualisieren

Es gibt noch eine weitere Sache, die in unserer `ToDoForm`-Komponente zu beheben ist — nach dem Absenden enthält das `<input>` immer noch den alten Wert. Aber das ist leicht zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld auch aktualisiert, wenn wir den name-Parameter auf eine leere Zeichenfolge setzen.

Aktualisieren Sie die `onSubmit()`-Methode der `ToDoForm`-Komponente so:

```js
onSubmit() {
  if (this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

Jetzt, wenn Sie auf die Schaltfläche "Add" klicken, wird das "new-todo-input" sich selbst löschen.

## Zusammenfassung

Ausgezeichnet. Wir können jetzt Todo-Elemente zu unserem Formular hinzufügen! Unsere App beginnt nun, sich interaktiv anzufühlen, aber ein Problem ist, dass wir ihr Aussehen und Gefühl bisher völlig ignoriert haben. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu beheben, indem wir uns die verschiedenen Möglichkeiten ansehen, die Vue zum Stylen von Komponenten bietet.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
