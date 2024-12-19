---
title: "Hinzufügen eines neuen To-do-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}

Wir haben jetzt Beispieldaten bereitgestellt und eine Schleife, die jedes Datenstück nimmt und es in einem `ToDoItem` in unserer App rendert. Was wir wirklich brauchen, ist die Fähigkeit, unseren Nutzern zu ermöglichen, ihre eigenen To-do-Elemente in die App einzugeben. Dazu benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die bei der Übermittlung ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Das werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrundeliegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Den Umgang mit Formularen in Vue zu lernen sowie damit verbunden Ereignisse, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do-Formulars

Wir haben jetzt eine App, die eine Liste von To-do-Elementen anzeigt. Wir können unsere Liste der Elemente jedoch nicht aktualisieren, ohne unseren Code manuell zu ändern! Lassen Sie uns das beheben. Erstellen Sie eine neue Komponente, die es uns ermöglicht, ein neues To-do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei mit dem Namen `ToDoForm.vue`.
2. Fügen Sie wie zuvor eine leere `<template>`- und eine `<script>`-Tag hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, mit dem Sie ein neues To-do-Element eingeben und in die App einfügen können. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihr Template wie folgt:

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

   Wir haben jetzt ein Formular, in das wir den Titel eines neuen To-do-Elements eingeben können (der zum Etikett für das entsprechende `ToDoItem` wird, wenn es schließlich gerendert wird).

4. Laden Sie diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen ein, innerhalb Ihres `<script>`-Elements:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren — aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, sodass sie wie folgt aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie abschließend in diesem Abschnitt Ihre `ToDoForm`-Komponente innerhalb Ihrer App, indem Sie das `<to-do-form />`-Element innerhalb Ihrer `App`-`<template>` hinzufügen, wie folgt:

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

Wenn Sie nun Ihre laufende Seite anzeigen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-do-Liste App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, wird die Seite das Formular zurück an den Server senden, aber das ist nicht wirklich das, was wir wollen. Was wir tatsächlich machen möchten, ist eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, das das neue To-do zu der in `App` definierten `ToDoItem`-Datenliste hinzufügt. Dazu müssen wir der Komponenteninstanz eine Methode hinzufügen.

## Erstellen einer Methode und Binden an ein Ereignis mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie dem Komponentenobjekt hinzufügen, und zwar innerhalb einer `methods`-Eigenschaft, die an derselben Stelle wie `data()`, `props` usw. platziert wird. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Beim Verweis werden Methoden vollständig ausgeführt, es ist daher keine gute Idee, sie zur Anzeige von Informationen innerhalb des Templates zu verwenden. Zum Anzeigen von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir werden diese Methode verwenden, um die Einreichungsaktion zu behandeln.

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

2. Als Nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax zum Binden von Attributen verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die `v-on:event="method"`-Syntax. Und ähnlich wie `v-bind`, gibt es auch eine Kurzschreibweise: `@event="method"`.

   Wir verwenden hier die Kurzschreibweise aus Konsistenzgründen. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten weiterhin an den Server, was einen Refresh verursacht. Da wir all unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, der das Postback behandelt. Wir verlieren auch den gesamten lokalen Zustand beim Seitenrefresh. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite hochbubbelt ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), in Vanilla JavaScript). Vue verfügt über eine spezielle Syntax namens **Ereignismodifikatoren**, die dies direkt in unserem Template für uns verarbeiten kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt angehängt, z.B.: `@event.modifier`. Hier ist eine Liste der Ereignismodifikatoren:

   - `.stop`: Stoppt das Propagieren des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis von diesem genauen Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastencodes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrteilige Tasten müssen nur in {{Glossary("kebab_case", "kebab-case")}} konvertiert werden (z.B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis am Root- (äußerstes Wrapper-) Element Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmalig ausgelöst wurde, danach nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Eventlisteners in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Sendeaktion des Browsers zu stoppen. Fügen Sie `.prevent` zu dem `@submit`-Handler in Ihrem Template wie folgt hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie das Formular jetzt absenden, werden Sie feststellen, dass die Seite nicht neu lädt. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des in unserer `onSubmit()`-Methode hinzugefügten [`console.log()`](/de/docs/Web/API/console/log_static) sehen.

## Datenbindung an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>`-Feld des Formulars zu erhalten, damit wir das neue To-do-Element zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-dos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zu unserem `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den anfänglichen Wert des `label` auf einen leeren String setzen.

   Ihr Komponentenobjekt sollte jetzt etwa so aussehen:

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

2. Nun brauchen wir eine Methode, um den Wert des `new-todo-input`-Elements an das `label`-Feld zu binden. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die Daten-Eigenschaft, die Sie darauf setzen und hält sie mit dem `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Kontrollkästchen, Radios und Auswahlfeldern. Um `v-model` zu benutzen, fügen Sie ein Attribut mit der Struktur `v-model="variable"` zum `<input>` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld wie unten gezeigt hinzufügen. Machen Sie dies jetzt:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten durch eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich macht `v-model` dies im Hintergrund. Die genaue Ereignis- und Attributkombination variiert jedoch je nach Eingabetypen und würde mehr Code erfordern als die einfache Verwendung der `v-model`-Kurzschreibweise.

3. Testen wir unsere Verwendung von `v-model`, indem wir den Wert der in unserer Methode `onSubmit()` übermittelten Daten protokollieren. In Komponenten werden Datenattribute unter Verwendung des `this`-Schlüsselworts zugegriffen. Daher greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie so aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, geben Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf den Button "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert in Ihre Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model-Verhaltens mit Modifikatoren

In ähnlicher Weise wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die es zu berücksichtigen gilt. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung wie folgt hinzufügen: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, wird `.lazy` genannt. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, erfolgt die `v-model`-Synchronisierung, indem die Variable mithilfe von Ereignissen aktualisiert wird. Bei Texteingaben erfolgt diese Synchronisation mithilfe des [`input`-Ereignisses](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastendruck synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) statt dessen verwendet. Dies bedeutet, dass Vue die Daten nur dann synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular übermittelt wird. Für unsere Zwecke ist dies viel sinnvoller, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie Ihre App erneut. Versuchen Sie beispielsweise, einen Wert mit Leerzeichen an jedem Ende zu übermitteln.

## Übergeben von Daten an übergeordnete Komponenten mit benutzerdefinierten Ereignissen

Wir sind jetzt sehr nah dran, neue To-do-Elemente zu unserer Liste hinzuzufügen. Das nächste, was wir tun müssen, ist, das neu erstellte To-do-Element an unsere `App`-Komponente zu übergeben. Dazu können wir unser `ToDoForm` ein benutzerdefiniertes Ereignis auslösen lassen, das die Daten übergibt, und `App` kann darauf hören. Dies funktioniert sehr ähnlich wie native Ereignisse bei HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, das über `v-on` abgehört werden kann.

Im `onSubmit`-Ereignishandler unseres `ToDoForm` lassen Sie uns ein `todo-added`-Ereignis hinzufügen. Benutzerdefinierte Ereignisse werden so ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitiv sind und keine Leerzeichen enthalten dürfen. Vue-Templates werden auch in Kleinbuchstaben konvertiert, was bedeutet, dass Vue-Templates nicht für Ereignisse mit Großbuchstaben zuhören können.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch Folgendes:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie als Nächstes zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Diese Methode kann vorerst einfach `To-do hinzugefügt` an die Konsole loggen.

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

3. Fügen Sie als nächstes einen Ereignislistener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>` hinzu, der die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Kurzschreibung würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` absenden, sollten Sie das Konsolenprotokoll aus der `addToDo()`-Methode sehen. Das ist gut, aber wir übergeben immer noch keine Daten zurück an die `App.vue`-Komponente. Das können wir erreichen, indem wir zusätzliche Argumente an die Methode `this.$emit()` im `ToDoForm`-Modul übergeben.

   In diesem Fall möchten wir beim Auslösen des Ereignisses die `label`-Daten mit übergeben. Dies geschieht, indem Sie die Daten, die Sie übergeben möchten, als weiteren Parameter in die `$emit()`-Methode einfügen: `this.$emit("todo-added", this.label)`. Dies ähnelt dem, wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Das bedeutet, dass das ausgelöste Ereignis direkt dem Objekt entspricht, das Sie übergeben. In unserem Fall wird unser Ereignisobjekt also nur ein String sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten tatsächlich in `App.vue` zu erfassen, müssen wir der `addToDo()`-Methode einen Parameter hinzufügen, der das `label` des neuen To-do-Elements enthält.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie dies jetzt:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, sehen Sie den von Ihnen eingegebenen Text in Ihrer Konsole protokolliert, sobald Sie es abschicken. Vue übergibt die Argumente nach dem Ereignisnamen in `this.$emit()` automatisch an Ihren Ereignishandler.

## Das neue To-do zu unseren Daten hinzufügen

Jetzt, da wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element, das diese darstellt, zum `ToDoItems`-Array hinzufügen. Dies kann erreicht werden, indem wir ein neues To-do-Element-Objekt in das Array mit unseren neuen Daten hinzufügen.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Versuchen Sie, Ihr Formular erneut zu testen, und Sie sollten sehen, dass neue To-do-Elemente am Ende der Liste angehängt werden.
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir weitermachen. Wenn Sie das Formular abschicken, während das Eingabefeld leer ist, werden To-do-Elemente ohne Text zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das `todo-added`-Ereignis bei leerem Name ausgelöst wird. Da der Name bereits vom `.trim`-Modifikator geschnitten wird, müssen wir nur auf den leeren String testen.

   Kehren Sie zu Ihrer `ToDoForm`-Komponente zurück und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Label-Wert leer ist, lassen Sie uns das `todo-added`-Ereignis nicht auslösen.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Testen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Elemente mehr zur To-do-Liste hinzufügen.

![Unsere To-do-Liste App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-new-items.png)

## Verwenden von v-model zum Aktualisieren eines Eingabewerts

Es gibt noch etwas, das in unserer `ToDoForm`-Komponente zu beheben ist — nach dem Absenden, enthält das `<input>` immer noch den alten Wert. Aber das ist einfach zu beheben — weil wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld aktualisiert, wenn wir den Namen-Parameter auf einen leeren String setzen.

Aktualisieren Sie die `onSubmit()`-Methode Ihrer `ToDoForm`-Komponente auf Folgendes:

```js
onSubmit() {
  if (this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

Jetzt, wenn Sie die Taste "Hinzufügen" klicken, wird die "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können jetzt To-do-Elemente zu unserem Formular hinzufügen! Unsere App beginnt jetzt interaktiv zu wirken, aber ein Problem ist, dass wir sein Aussehen und Gefühl bisher völlig ignoriert haben. Im nächsten Artikel konzentrieren wir uns darauf, dies zu beheben, und betrachten die verschiedenen Möglichkeiten, die Vue bereitstellt, um Komponenten zu stylen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists","Learn_web_development/Core/Frameworks_libraries/Vue_styling", "Learn_web_development/Core/Frameworks_libraries")}}
