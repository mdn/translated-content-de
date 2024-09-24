---
title: "Ein neues Todo-Formular hinzufügen: Vue-Ereignisse, Methoden und Modelle"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Wir haben jetzt Beispieldaten implementiert und eine Schleife, die jedes Datenelement nimmt und es in unserer App in einem `ToDoItem` rendert. Was wir wirklich als Nächstes brauchen, ist die Möglichkeit, unseren Nutzern zu erlauben, ihre eigenen Todo-Punkte in die App einzugeben. Dafür benötigen wir ein Text-`<input>`, ein Ereignis, das ausgelöst wird, wenn die Daten übermittelt werden, eine Methode, die beim Absenden ausgelöst wird, um die Daten hinzuzufügen und die Liste neu zu rendern, und ein Modell, um die Daten zu steuern. Dies werden wir in diesem Artikel behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Formulare in Vue behandelt, und im Zusammenspiel mit Ereignissen, Modellen und Methoden.
      </td>
    </tr>
  </tbody>
</table>

## Ein neues To-Do-Formular erstellen

Wir haben nun eine App, die eine Liste von To-Do-Punkten anzeigt. Allerdings können wir unsere Liste nicht aktualisieren, ohne den Code manuell zu ändern! Lassen Sie uns das beheben. Erstellen wir eine neue Komponente, die es uns ermöglicht, einen neuen To-Do-Punkt hinzuzufügen.

1. Erstellen Sie im Ordner für Komponenten eine neue Datei namens `ToDoForm.vue`.
2. Fügen Sie wie zuvor ein leeres `<template>` und ein `<script>`-Tag hinzu:

   ```html
   <template></template>

   <script>
     export default {};
   </script>
   ```

3. Fügen wir ein HTML-Formular hinzu, mit dem Sie einen neuen Todo-Punkt eingeben und in die App einreichen können. Wir benötigen ein [`<form>`](/de/docs/Web/HTML/Element/form) mit einem [`<label>`](/de/docs/Web/HTML/Element/label), einem [`<input>`](/de/docs/Web/HTML/Element/input) und einem [`<button>`](/de/docs/Web/HTML/Element/button). Aktualisieren Sie Ihre Vorlage wie folgt:

   ```html
   <template>
     <form>
       <label for="new-todo-input"> Was muss erledigt werden? </label>
       <input
         type="text"
         id="new-todo-input"
         name="new-todo"
         autocomplete="off" />
       <button type="submit">Hinzufügen</button>
     </form>
   </template>
   ```

   Wir haben jetzt eine Formular-Komponente, in die wir den Titel eines neuen Todo-Punkts eingeben können (der schließlich zu einem Label für das entsprechende `ToDoItem` wird, wenn es gerendert wird).

4. Laden wir diese Komponente in unsere App. Gehen Sie zurück zu `App.vue` und fügen Sie die folgende `import`-Anweisung direkt unter der vorherigen, in Ihrem `<script>`-Element hinzu:

   ```js
   import ToDoForm from "./components/ToDoForm";
   ```

5. Sie müssen die neue Komponente auch in Ihrer `App`-Komponente registrieren – aktualisieren Sie die `components`-Eigenschaft des Komponenten-Objekts, damit sie wie folgt aussieht:

   ```js
   components: {
     ToDoItem, ToDoForm,
   }
   ```

6. Schließlich, für diesen Abschnitt, rendern Sie Ihre `ToDoForm`-Komponente in Ihrer App, indem Sie das `<to-do-form />`-Element in die `<template>` Ihrer `App` einfügen, wie folgt:

   ```html
   <template>
     <div id="app">
       <h1>Meine To-Do-Liste</h1>
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

Wenn Sie jetzt Ihre laufende Seite ansehen, sollten Sie das neue Formular angezeigt sehen.

![Unsere To-Do-Liste-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-text-input.png)

Wenn Sie es ausfüllen und auf die Schaltfläche "Hinzufügen" klicken, wird die Seite das Formular zurück an den Server senden, aber das ist nicht wirklich das, was wir wollen. Was wir tatsächlich tun möchten, ist eine Methode beim [`submit`-Ereignis](/de/docs/Web/API/HTMLFormElement/submit_event) auszuführen, die das neue Todo zur `ToDoItem`-Datenliste hinzufügt, die in `App` definiert ist. Dazu müssen wir eine Methode zur Komponenteninstanz hinzufügen.

## Erstellung einer Methode und Ereignisbindung mit v-on

Um eine Methode in der `ToDoForm`-Komponente verfügbar zu machen, müssen wir sie zum Komponentenobjekt hinzufügen, was innerhalb einer `methods`-Eigenschaft unserer Komponente geschieht, die an derselben Stelle wie `data()`, `props` usw. steht. Die `methods`-Eigenschaft enthält Methoden, die wir in unserer Komponente aufrufen können. Wenn Methoden referenziert werden, werden sie vollständig ausgeführt. Daher ist es keine gute Idee, sie zu nutzen, um Informationen innerhalb der Vorlage anzuzeigen. Für die Anzeige von Daten, die aus Berechnungen stammen, sollten Sie eine `computed`-Eigenschaft verwenden, die wir später noch behandeln werden.

1. In dieser Komponente müssen wir eine `onSubmit()`-Methode zu einer `methods`-Eigenschaft innerhalb des `ToDoForm`-Komponentenobjekts hinzufügen. Wir werden dies nutzen, um die Absendeaktion zu behandeln.

   Fügen Sie dies folgendermaßen hinzu:

   ```js
   export default {
     methods: {
       onSubmit() {
         console.log("form submitted");
       },
     },
   };
   ```

2. Als nächstes müssen wir die Methode an den `submit`-Ereignishandler unseres `<form>`-Elements binden. Ähnlich wie Vue die [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)-Syntax für das Binden von Attributen verwendet, verfügt Vue über eine spezielle Direktive für die Ereignisbehandlung: [`v-on`](https://vuejs.org/api/built-in-directives.html#v-on). Die `v-on`-Direktive funktioniert über die `v-on:event="method"`-Syntax. Und ähnlich wie `v-bind`, gibt es auch eine Kurzschreibweise: `@event="method"`.

   Wir werden hier die Kurzschreibweise verwenden, um konsistent zu bleiben. Fügen Sie den `submit`-Handler zu Ihrem `<form>`-Element wie folgt hinzu:

   ```html
   <form @submit="onSubmit">…</form>
   ```

3. Wenn Sie dies ausführen, sendet die App die Daten weiterhin an den Server, was zu einem Neuladen führt. Da wir all unsere Verarbeitung auf dem Client durchführen, gibt es keinen Server, der das Postback bearbeitet. Bei einem Seitenneuladen verlieren wir auch alle lokalen Zustände. Um zu verhindern, dass der Browser an den Server sendet, müssen wir die Standardaktion des Ereignisses stoppen, während es durch die Seite nach oben steigt ([`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) in Vanilla JavaScript). Vue hat eine spezielle Syntax namens **Ereignismodifikatoren**, die dies für uns direkt in unserer Vorlage handhaben kann.

   Modifikatoren werden an das Ende eines Ereignisses mit einem Punkt angehängt, wie folgt: `@event.modifier`. Hier ist eine Liste von Ereignismodifikatoren:

   - `.stop`: Stoppt das Weiterleiten des Ereignisses. Entspricht [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) in regulären JavaScript-Ereignissen.
   - `.prevent`: Verhindert das Standardverhalten des Ereignisses. Entspricht [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault).
   - `.self`: Löst den Handler nur aus, wenn das Ereignis genau von diesem Element gesendet wurde.
   - `{.key}`: Löst den Ereignishandler nur über die angegebene Taste aus. [MDN hat eine Liste gültiger Tastenwerte](/de/docs/Web/API/UI_Events/Keyboard_event_key_values); mehrteilige Tasten müssen einfach in {{Glossary("kebab_case", "kebab-case")}} konvertiert werden (z.B. `page-down`).
   - `.native`: Hört auf ein natives Ereignis auf dem Wurzel- (äußersten) Element Ihrer Komponente.
   - `.once`: Hört auf das Ereignis, bis es einmal ausgelöst wurde, und dann nicht mehr.
   - `.left`: Löst den Handler nur über das Ereignis der linken Maustaste aus.
   - `.right`: Löst den Handler nur über das Ereignis der rechten Maustaste aus.
   - `.middle`: Löst den Handler nur über das Ereignis der mittleren Maustaste aus.
   - `.passive`: Entspricht der Verwendung des `{ passive: true }`-Parameters beim Erstellen eines Ereignis-Listeners in Vanilla JavaScript mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

   In diesem Fall müssen wir den `.prevent`-Modifikator verwenden, um die Standard-Sendeaktion des Browsers zu stoppen. Fügen Sie `.prevent` zu dem `@submit`-Handler in Ihrer Vorlage wie folgt hinzu:

   ```html
   <form @submit.prevent="onSubmit">…</form>
   ```

Wenn Sie jetzt versuchen, das Formular abzusenden, werden Sie feststellen, dass die Seite nicht neu geladen wird. Wenn Sie die Konsole öffnen, können Sie die Ergebnisse des [`console.log()`](/de/docs/Web/API/console/log_static) sehen, den wir in unserer `onSubmit()`-Methode hinzugefügt haben.

## Datenbindung an Eingaben mit v-model

Als Nächstes benötigen wir eine Möglichkeit, den Wert aus dem `<input>` des Formulars zu erhalten, sodass wir den neuen To-Do-Punkt zu unserer `ToDoItems`-Datenliste hinzufügen können.

Das Erste, was wir benötigen, ist eine `data`-Eigenschaft in unserem Formular, um den Wert des Todos zu verfolgen.

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

2. Wir benötigen jetzt eine Möglichkeit, den Wert des `new-todo-input`-Feldes mit dem `label`-Feld zu verknüpfen. Vue hat dafür eine spezielle Direktive: [`v-model`](https://vuejs.org/api/built-in-directives.html#v-model). `v-model` bindet an die Daten-Eigenschaft, die Sie darauf setzen, und hält sie mit dem `<input>` synchron. `v-model` funktioniert bei allen verschiedenen Eingabetypen, einschließlich Checkboxen, Radios und Auswahlfeldern. Um `v-model` zu verwenden, fügen Sie dem `<input>` ein Attribut mit der Struktur `v-model="variable"` hinzu.

   In unserem Fall würden wir es unserem `new-todo-input`-Feld hinzufügen, wie unten gezeigt. Machen Sie dies jetzt:

   ```html
   <input
     type="text"
     id="new-todo-input"
     name="new-todo"
     autocomplete="off"
     v-model="label" />
   ```

   > [!NOTE]
   > Sie können Daten auch mit `<input>`-Werten synchronisieren, indem Sie eine Kombination von Ereignissen und `v-bind`-Attributen verwenden. Tatsächlich ist es das, was `v-model` im Hintergrund tut. Allerdings variieren die exakten Ereignis- und Attributkombinationen je nach Eingabetypen und benötigen mehr Code als nur die Verwendung der `v-model`-Abkürzung.

3. Testen wir unsere Verwendung von `v-model`, indem wir den Wert der Daten, die in unserer `onSubmit()`-Methode übermittelt werden, protokollieren. In Komponenten werden Datenattribute mit dem Schlüsselwort `this` aufgerufen. So greifen wir auf unser `label`-Feld mit `this.label` zu.

   Aktualisieren Sie Ihre `onSubmit()`-Methode, damit sie so aussieht:

   ```js
   methods: {
     onSubmit() {
       console.log('Label-Wert: ', this.label);
     }
   },
   ```

4. Gehen Sie nun zu Ihrer laufenden App zurück, fügen Sie etwas Text in das `<input>`-Feld ein und klicken Sie auf die Schaltfläche "Hinzufügen". Sie sollten den von Ihnen eingegebenen Wert in Ihrer Konsole protokolliert sehen, zum Beispiel:

   ```plain
   Label-Wert: Mein Wert
   ```

## Änderung des v-model-Verhaltens mit Modifikatoren

Ähnlich wie bei Ereignismodifikatoren können wir auch Modifikatoren hinzufügen, um das Verhalten von `v-model` zu ändern. In unserem Fall gibt es zwei, die wir in Betracht ziehen sollten. Der erste, `.trim`, entfernt Leerzeichen vor oder nach der Eingabe. Wir können den Modifikator unserer `v-model`-Anweisung hinzufügen, wie folgt: `v-model.trim="label"`.

Der zweite Modifikator, den wir in Betracht ziehen sollten, heißt `.lazy`. Dieser Modifikator ändert, wann `v-model` den Wert für Texteingaben synchronisiert. Wie bereits erwähnt, funktioniert die `v-model`-Sync durch Aktualisierung der Variable mit Ereignissen. Bei Texteingaben erfolgt diese Synchronisation über das [`input`-Ereignis](/de/docs/Web/API/Element/input_event). Oft bedeutet das, dass Vue die Daten nach jedem Tastenanschlag synchronisiert. Der `.lazy`-Modifikator sorgt dafür, dass `v-model` stattdessen das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet. Dies bedeutet, dass Vue Daten nur synchronisiert, wenn die Eingabe den Fokus verliert oder das Formular abgeschickt wird. Für unsere Zwecke ist dies viel sinnvoller, da wir nur die endgültigen Daten benötigen.

Um sowohl den `.lazy`-Modifikator als auch den `.trim`-Modifikator gemeinsam zu verwenden, können wir sie verketten, z.B. `v-model.lazy.trim="label"`.

Aktualisieren Sie Ihr `v-model`-Attribut, um `lazy` und `trim` wie oben gezeigt zu verketten, und testen Sie dann Ihre App erneut. Versuchen Sie zum Beispiel, einen Wert mit Leerzeichen an jedem Ende einzugeben.

## Datenübergabe an Elternkomponenten mit benutzerdefinierten Ereignissen

Wir sind nun sehr nah daran, neue To-Do-Punkte zu unserer Liste hinzuzufügen. Als Nächstes müssen wir in der Lage sein, den neu erstellten To-Do-Punkt an unsere `App`-Komponente zu übergeben. Dazu können wir unsere `ToDoForm` ein benutzerdefiniertes Ereignis senden lassen, das die Daten übergibt, und `App` darauf hören lassen. Dies funktioniert ganz ähnlich wie native Ereignisse auf HTML-Elementen: Eine Kindkomponente kann ein Ereignis auslösen, auf das mit `v-on` gehört werden kann.

Im `onSubmit`-Ereignishandler unserer `ToDoForm` fügen wir ein `todo-added`-Ereignis hinzu. Benutzerdefinierte Ereignisse werden so gesendet: `this.$emit("event-name")`. Es ist wichtig zu wissen, dass Ereignishandler case-sensitiv sind und keine Leerzeichen enthalten können. Vue-Vorlagen werden auch in Kleinbuchstaben umgewandelt, was bedeutet, dass Vue-Vorlagen nicht auf Ereignisse hören können, die mit Großbuchstaben benannt sind.

1. Ersetzen Sie das `console.log()` in der `onSubmit()`-Methode durch das folgende:

   ```js
   this.$emit("todo-added");
   ```

2. Gehen Sie nun zurück zu `App.vue` und fügen Sie eine `methods`-Eigenschaft zu Ihrem Komponentenobjekt hinzu, die eine `addToDo()`-Methode enthält, wie unten gezeigt. Diese Methode kann vorerst einfach `To-Do hinzugefügt` in der Konsole protokollieren.

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
           { id: "todo-" + nanoid(), label: "Vue lernen", done: false },
           {
             id: "todo-" + nanoid(),
             label: "Ein Vue-Projekt mit der CLI erstellen",
             done: true,
           },
           { id: "todo-" + nanoid(), label: "Spaß haben", done: true },
           {
             id: "todo-" + nanoid(),
             label: "Eine To-Do-Liste erstellen",
             done: false,
           },
         ],
       };
     },
     methods: {
       addToDo() {
         console.log("To-Do hinzugefügt");
       },
     },
   };
   ```

3. Fügen Sie als Nächstes einen Ereignislistener für das `todo-added`-Ereignis zum `<to-do-form></to-do-form>` hinzu, das die Methode `addToDo()` aufruft, wenn das Ereignis ausgelöst wird. Mit der `@`-Kurzschreibweise würde der Listener so aussehen: `@todo-added="addToDo"`:

   ```html
   <to-do-form @todo-added="addToDo"></to-do-form>
   ```

4. Wenn Sie Ihr `ToDoForm`-Formular übermitteln, sollten Sie die Konsolenprotokollierung der `addToDo()`-Methode sehen. Dies ist gut, aber wir übergeben noch keine Daten an die `App.vue`-Komponente. Wir können das tun, indem wir zusätzliche Argumente zur `this.$emit()`-Funktion zurück in der `ToDoForm`-Komponente übermitteln.

   In diesem Fall möchten wir beim Auslösen des Ereignisses die `label`-Daten damit übergeben. Dies geschieht, indem die Daten, die Sie übergeben möchten, als weiterer Parameter in der `$emit()`-Methode enthalten sind: `this.$emit("todo-added", this.label)`. Dies ist ähnlich wie native JavaScript-Ereignisse Daten enthalten, außer dass benutzerdefinierte Vue-Ereignisse kein Ereignisobjekt standardmäßig enthalten. Das bedeutet, dass das ausgelöste Ereignis genau mit dem Objekt übereinstimmen wird, das Sie senden. In unserem Fall wird unser Ereignisobjekt also nur ein String sein.

   Aktualisieren Sie Ihre `onSubmit()`-Methode wie folgt:

   ```js
   onSubmit() {
     this.$emit('todo-added', this.label)
   }
   ```

5. Um diese Daten tatsächlich innerhalb von `App.vue` abfangen zu können, müssen wir unserer `addToDo()`-Methode einen Parameter hinzufügen, der das `label` des neuen To-Do-Punkts enthält.

   Gehen Sie nun zurück zu `App.vue` und aktualisieren Sie dies:

   ```js
   methods: {
     addToDo(toDoLabel) {
       console.log('To-Do hinzugefügt:', toDoLabel);
     }
   }
   ```

Wenn Sie Ihr Formular erneut testen, werden Sie den Text, den Sie eingegeben haben, bei der Einreichung in Ihrer Konsole protokolliert sehen. Vue übergibt die Argumente nach dem Ereignisnamen in `this.$emit()` automatisch an Ihren Ereignishandler.

## Das neue Todo zu unseren Daten hinzufügen

Jetzt, da wir die Daten von `ToDoForm` in `App.vue` verfügbar haben, müssen wir ein Element hinzufügen, das es in das `ToDoItems`-Array repräsentiert. Dies kann durch Pushen eines neuen To-Do-Punkt-Objekts in das Array erfolgen, das unsere neuen Daten enthält.

1. Aktualisieren Sie Ihre `addToDo()`-Methode wie folgt:

   ```js
   addToDo(toDoLabel) {
     this.ToDoItems.push({id: "todo-" + nanoid(), label: toDoLabel, done: false});
   }
   ```

2. Versuchen Sie erneut, Ihr Formular zu testen, und Sie sollten sehen, wie neue To-Do-Punkte am Ende der Liste angehängt werden.
3. Lassen Sie uns vor dem Weitergehen eine weitere Verbesserung vornehmen. Wenn Sie das Formular absenden, während das Eingabefeld leer ist, werden dennoch To-Do-Punkte ohne Text zur Liste hinzugefügt. Um das zu beheben, können wir verhindern, dass das todo-added-Ereignis ausgelöst wird, wenn der Name leer ist. Da der Name von dem `.trim`-Modifikator bereits getrimmt wird, müssen wir nur auf den leeren String testen.

   Gehen Sie zurück zu Ihrer `ToDoForm`-Komponente und aktualisieren Sie die `onSubmit()`-Methode wie folgt. Wenn der Label-Wert leer ist, lassen Sie uns das `todo-added`-Ereignis nicht auslösen.

   ```js
   onSubmit() {
     if (this.label === "") {
       return;
     }
     this.$emit('todo-added', this.label);
   }
   ```

4. Versuchen Sie Ihr Formular erneut. Jetzt können Sie keine leeren Artikel mehr zur To-Do-Liste hinzufügen.

![Unsere To-Do-Liste-App gerendert mit einem Texteingabefeld zum Eingeben neuer Todos](rendered-form-with-new-items.png)

## Verwendung von v-model zum Aktualisieren eines Eingabewertes

Es gibt noch eine Sache, die in unserer `ToDoForm`-Komponente zu korrigieren ist — nach dem Absenden enthält das `<input>` weiterhin den alten Wert. Aber dies ist leicht zu beheben — da wir `v-model` verwenden, um die Daten an das `<input>` in `ToDoForm` zu binden, wird das Eingabefeld ebenfalls aktualisiert, wenn wir den Namenparameter auf einen leeren String setzen.

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

Jetzt, wenn Sie auf die Schaltfläche "Hinzufügen" klicken, wird das "new-todo-input"-Feld sich selbst leeren.

## Zusammenfassung

Ausgezeichnet. Wir können jetzt Todo-Punkte zu unserem Formular hinzufügen! Unsere App beginnt nun interaktiv zu wirken, eine Sache, die bisher völlig vernachlässigt wurde, sind jedoch das Aussehen und das Gefühl. Im nächsten Artikel werden wir uns darauf konzentrieren, dies zu verbessern und uns die verschiedenen Möglichkeiten ansehen, die Vue bietet, um Komponenten zu stylen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
