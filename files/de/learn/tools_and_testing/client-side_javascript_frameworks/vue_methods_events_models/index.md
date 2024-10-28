---
title: "Hinzufügen eines neuen Todo-Formulars: Vue-Ereignisse, Methoden und Modelle"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models
l10n:
  sourceCommit: bd22a308071273b027af2092bf31edc05cedfd00
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir haben nun Beispieldaten integriert und eine Schleife, die jedes Datenstück nimmt und es innerhalb eines `ToDoItem` in unserer App rendert. Was wir als nächstes wirklich brauchen, ist die Möglichkeit für unsere Benutzer, ihre eigenen Todo-Elemente in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das beim Absenden der Daten ausgelöst wird, eine Methode, die beim Absenden ausgeführt wird, um die Daten hinzuzufügen und die Liste neu zu rendern, sowie ein Modell zur Steuerung der Daten. Dies werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandzeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer HTML-basierten
          Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet.
          Für die Installation und Nutzung einiger der fortgeschritteneren
          Funktionen von Vue (wie Einzeldateikomponenten oder Renderfunktionen),
          benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um das Arbeiten mit Formularen in Vue zu erlernen und damit verbunden
        Ereignisse, Modelle und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen eines neuen To-Do Formulars

Wir haben nun eine App, die eine Liste von Aufgaben anzeigt. Allerdings können wir unsere Liste der Elemente nicht aktualisieren, ohne unseren Code manuell zu ändern! Das wollen wir beheben. Lassen Sie uns eine neue Komponente erstellen, die es erlaubt, ein neues To-Do-Element hinzuzufügen.

1. Erstellen Sie in Ihrem Komponentenordner eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und `<script>`-Tag hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Lassen Sie uns ein HTML-Formular hinzufügen, das die Eingabe eines neuen Todo-Elements ermöglicht und es in die App einfügt. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihre Vorlage wie folgt:

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

   Wir haben jetzt also eine Formular-Komponente, in die wir den Titel eines neuen Todo-Elements eingeben können (welcher letztlich als Beschriftung für das entsprechende `ToDoItem` dient, wenn es gerendert wird).

4. Lassen Sie uns diese Komponente in unsere App laden. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen im `<script>`-Element hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm.vue";
   ```

5. Sie müssen auch die neue Komponente in Ihrer `App`-Komponente registrieren – aktualisieren Sie die `components`-Eigenschaft des Komponentenobjekts, sodass es so aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Rendern Sie abschließend für diesen Abschnitt Ihre `ToDoForm`-Komponente, indem Sie das `<to-do-form />`-Element in das `<template>` Ihrer `App` einfügen, wie folgt:

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

![Unsere Aufgabenlisten-App mit einem Texteingabefeld, um neue Todos hinzuzufügen](rendered-form-with-text-input.png)

Wenn Sie das Formular ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, wird das Formular zurück an den Server gesendet, aber genau das wollen wir eigentlich nicht. Stattdessen möchten wir, dass eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) ausgeführt wird, die das neue Todo dem in `App` definierten `ToDoItem`-Datenliste hinzufügt. Dafür müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellen einer Methode & Verknüpfen mit einem Ereignis mit v-on

Um eine Methode für die `ToDoForm`-Komponente bereitzustellen, müssen wir sie zum Komponentenobjekt hinzufügen. Dies geschieht innerhalb einer `methods`-Eigenschaft unserer Komponente, die sich an derselben Stelle befindet wie `data()`, `props` usw. Die `methods`-Eigenschaft enthält alle Methoden, die wir möglicherweise in unserer Komponente aufrufen müssen. Wenn Methoden referenziert werden, laufen sie vollständig ab, daher ist es keine gute Idee, sie zum Anzeigen von Informationen innerhalb der Vorlage zu verwenden. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir werden diese Methode verwenden, um die Absendeaktion zu behandeln.

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

2. Als nächstes müssen wir die Methode mit dem `submit`-Ereignis-Handler des `<form>`-Elements verknüpfen. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für die Attributbindung verwendet, hat Vue eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die `v-on:event="method"`-Syntax. Und ähnlich wie bei `v-bind` gibt es auch eine Kurzsyntax: `@event="method"`.

   Wir verwenden hier die Kurzsyntax der Konsistenz halber. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten immer noch an den Server, was zu einem Neuladen führt. Da wir alle unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, der die Rücksendung behandelt. Wir verlieren auch alle lokalen Zustände beim Seitenaktualisieren. Um zu verhindern, dass der Browser an den Server postet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite läuft ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die dies für uns direkt in unserer Vorlage handhaben kann.

   Modifikatoren werden am Ende eines Ereignisses mit einem Punkt wie folgt angehängt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt die Ausbreitung des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis genau von diesem Element ausgelöst wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrwortige Tasten müssen nur in {{Glossary("kebab_case", "kebab-case")}} umgewandelt werden (z. B. `page-down`).
   - `.native`: Lauscht auf ein natives Ereignis auf dem Wurzel- (äußersten) Wrapper-Element Ihrer Komponente.
   - `.once`: Lauscht auf das Ereignis, bis es einmal ausgelöst wurde und dann nicht mehr.
   - `.left`: Löst den Handler nur über das linke Maustastenereignis aus.
   - `.right`: Löst den Handler nur über das rechte Maustastenereignis aus.
   - `.middle`: Löst den Handler nur über das mittlere Maustastenereignis aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignislisteners in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standardaktion des Browsers bei der Übermittlung zu stoppen. Fügen Sie `.prevent` zu Ihrem `@submit`-Handler in Ihrer Vorlage wie folgt hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie versuchen, das Formular jetzt abzusenden, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des von uns hinzugefügten [`console.log()`](/de/docs/Web/API/console/log_static) in unserer `onSubmit()`-Methode sehen.

## Datenbindung an Eingaben mit v-model

Als nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, damit wir das neue To-Do-Element unserer `ToDoItems`-Datenliste hinzufügen können.

Das erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des To-Dos zu verfolgen.

1. Fügen Sie eine `data()`-Methode zum `ToDoForm`-Komponentenobjekt hinzu, die ein `label`-Feld zurückgibt. Wir können den Anfangswert des `label` auf einen leeren String setzen.

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

2. Nun benötigen wir eine Möglichkeit, den Wert des `new-todo-input`-Feldes an das `label`-Feld zu binden. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet sich an die Dateneigenschaft, die Sie setzen, und hält sie mit dem `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Kontrollkästchen, Radios und Auswahlfelder. Um `v-model` zu verwenden, fügen Sie ein Attribut mit der Struktur `v-model="variable"` zum `<input>` hinzu.

   In unserem Fall würden wir es zu unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Machen Sie dies jetzt:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können `<input>`-Werte auch durch eine Kombination von Ereignissen und `v-bind`-Attributen synchronisieren. Tatsächlich macht genau das `v-model` hinter den Kulissen. Die genaue Kombination von Ereignis und Attribut variiert jedoch je nach Eingabetypen und erfordert mehr Code als nur die Verwendung der `v-model`-Abkürzung.

3. Lassen Sie uns unsere Nutzung von `v-model` testen, indem wir den Wert der Daten in unserer `onSubmit()`-Methode protokollieren. In Komponenten werden Datenattribute mit dem Schlüsselwort `this` zugegriffen. Also greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode so, dass sie wie folgt aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label value: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zurück zu Ihrer laufenden App, fügen Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label value: My value
   ```

## Ändern des v-model Verhaltens mit Modifikatoren

Ähnlich wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die wir in Betracht ziehen sollten. Der erste, `.trim`, entfernt den Leerraum vor oder nach der Eingabe. Wir können den Modifikator zu unserer `v-model`-Anweisung hinzufügen, so: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Synchronisierung, indem die Variable mit Ereignissen aktualisiert wird. Für Texteingaben geschieht diese Synchronisierung mit dem [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet dies, dass Vue die Daten nach jedem Tastenanschlag synchronisiert. Der `.lazy`-Modifikator bewirkt, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Das bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular abgeschickt wird. Für unsere Zwecke ist dies viel angemessener, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator zusammen zu verwenden, können wir sie verketten, z. B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an jedem Ende einzusenden.

## Datenübergabe an Eltern mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah dran, neue To-Do-Elemente zu unserer Liste hinzuzufügen. Das nächste, was wir tun müssen, ist, das neu erstellte To-Do-Element an unsere `App`-Komponente zu übergeben. Dafür kann unsere `ToDoForm` ein benutzerdefiniertes Ereignis auslösen, das die Daten weitergibt, und `App` kann darauf achten. Dies funktioniert sehr ähnlich wie native Ereignisse auf HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, das über `v-on` überwacht werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden wie folgt ausgelöst: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitive sind und keine Leerzeichen enthalten dürfen. Vue-Vorlagen werden ebenfalls in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Vorlagen nicht auf Ereignisse hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch Folgendes:

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

3. Fügen Sie als Nächstes einen Ereignis-Listener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>`-Element hinzu, das die `addToDo()`-Methode aufruft, wenn das Ereignis ausgelöst wird. Mit der Kurzsyntax `@` würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm` absenden, sollten Sie das Konsolenprotokoll der `addToDo()`-Methode sehen. Das ist gut, aber wir geben immer noch keine Daten zurück an die `App.vue`-Komponente. Das können wir tun, indem wir zusätzliche Argumente an die `this.$emit()`-Funktion zurück in der `ToDoForm`-Komponente übergeben.

   In diesem Fall möchten wir, wenn wir das Ereignis auslösen, die `label`-Daten mit übergeben. Dies erfolgt durch das Hinzufügen der Daten, die Sie übergeben möchten, als weiteren Parameter in der `$emit()`-Methode: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie bei nativen JavaScript-Ereignissen, die Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse standardmäßig kein Ereignisobjekt enthalten. Das bedeutet, dass das ausgegebene Ereignis direkt mit dem von Ihnen übergegebenen Objekt übereinstimmt. In unserem Fall wird unser Ereignisobjekt also einfach eine Zeichenkette sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode so:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten in `App.vue` tatsächlich zu erfassen, müssen wir einen Parameter zu unserer `addToDo()`-Methode hinzufügen, der das `label` des neuen To-Do-Elements enthält.

   Gehen Sie zurück zu `App.vue` und aktualisieren Sie dies jetzt:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-do added:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, sehen Sie den von Ihnen eingegebenen Text bei der Übermittlung in Ihrer Konsole protokolliert. Vue übergibt automatisch die Argumente nach dem Ereignisnamen in `this.$emit()` an Ihren Ereignishandler.

## Hinzufügen des neuen Todos in unsere Daten

Jetzt, da wir die Daten aus dem `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element erstellen, das es der `ToDoItems`-Liste hinzufügt. Dies kann erfolgen, indem wir ein neues Todo-Objekt zur Liste hinzufügen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode so:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Testen Sie Ihr Formular erneut, und Sie sollten sehen, dass neue To-Do-Elemente am Ende der Liste angehängt werden.
3. Lassen Sie uns eine weitere Verbesserung vornehmen, bevor wir weitermachen. Wenn Sie das Formular absenden, während die Eingabe leer ist, werden Todo-Elemente ohne Text immer noch zur Liste hinzugefügt. Um dies zu beheben, können wir verhindern, dass das todo-added-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name bereits durch den `.trim`-Modifikator beschnitten wird, müssen wir nur auf den leeren String testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Labelwert leer ist, lassen Sie uns das `todo-added`-Ereignis nicht auslösen.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Testen Sie Ihr Formular erneut. Jetzt wird es nicht mehr möglich sein, leere Elemente zur Todo-Liste hinzuzufügen.

![Unsere Aufgabenlisten-App mit einem Texteingabefeld, um neue Todos hinzuzufügen](rendered-form-with-new-items.png)

## Verwenden von v-model zum Aktualisieren eines Eingabewerts

Es gibt noch eine Sache, die wir in unserer `ToDoForm`-Komponente beheben müssen — nach dem Senden enthält das `<input>` immer noch den alten Wert. Aber das ist einfach zu beheben — da wir `v-model` zum Binden der Daten an das `<input>` in `ToDoForm` verwenden, wenn wir den Namen auf einen leeren String setzen, wird die Eingabe ebenfalls aktualisiert.

Aktualisieren Sie die `onSubmit()`-Methode der `ToDoForm`-Komponente zu folgendem:

```js
onSubmit() {
  if (this.label === "") {
    return;
  }
  this.$emit('todo-added', this.label);
  this.label = "";
}
```

Nun, wenn Sie auf die Schaltfläche "Hinzufügen" klicken, wird das "new-todo-input" sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können nun Todo-Elemente zu unserem Formular hinzufügen! Unsere App beginnt nun, interaktiv zu wirken, aber ein Problem bleibt, dass wir das Erscheinungsbild völlig ignoriert haben. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu beheben, indem wir uns die verschiedenen Möglichkeiten ansehen, die Vue zur Verfügung stellt, um Komponenten zu stylen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
