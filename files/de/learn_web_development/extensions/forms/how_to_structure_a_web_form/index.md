---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem die Grundlagen behandelt wurden, betrachten wir nun genauer die Elemente, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes <a href="/de/docs/Learn_web_development/Core/Structuring_content">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, um sie verwendbar und zugänglich zu machen.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Basisformular mit speziellen Formularelementen und Attributen erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl verwendbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formell ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um deren Nutzung zu erleichtern.

Wir haben dieses Element bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular, indem Sie dessen [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut verwenden. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verknüpfen, auch wenn es nicht darin eingebettet ist.

Lassen Sie uns weitermachen und die Strukturelemente abdecken, die Sie in einem Formular verschachtelt finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck für Styling- und semantische Zwecke teilen. Sie können ein {{HTMLElement("fieldset")}} kennzeichnen, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Steuerelements im entsprechenden {{HTMLElement("fieldset")}}-Element wäre. Zum Beispiel werden einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie das Label jedes Steuerelementes vorlesen.

Hier ist ein kleines Beispiel:

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> [!NOTE]
> Sie können dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Bildschirmleser "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte sprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt auch andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Einsetzen der verschiedenen verwandten Abschnitte in unterschiedliche Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu überstrapazieren. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmlesegerät](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es sich seltsam anhört, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um ein Label für ein HTML-Form-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — bei korrekter Implementierung werden Bildschirmleser das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen lesen, und es ist nützlich für sehende Benutzer. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` korrekt mit dem `<input>` über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) verbunden ist, wird ein Bildschirmleser etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verbinden — verschachteln Sie das Formularelement innerhalb des `<label>`s, um es implizit zuzuordnen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen gilt jedoch als Best Practice, das `for`-Attribut festzulegen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Bildschirmleser etwas wie "Text bearbeiten leer" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie das Label sowie die Eingabe anklicken können, um sie zu fokussieren, aber es ist besonders nützlich für Optionsfelder und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, ihn so einfach wie möglich zu aktivieren.

Beispielsweise wird das Klicken auf den Label-Text "Ich mag Kirsche" im folgenden Beispiel den ausgewählten Zustand des _taste_cherry_ Kontrollkästchens umschalten:

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> [!NOTE]
> Sie können dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf einem einzigen Widget platzieren, aber dies ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben können, damit umzugehen. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

Lassen Sie uns dieses Beispiel betrachten:

```html
<p>Required fields are followed by <span aria-label="required">*</span>.</p>

<!-- So this: -->
<!--div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required>
  <label for="username"><span aria-label="required">*</label>
</div-->

<!-- would be better done like this: -->
<!--div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required>
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- But this is probably best: -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz oben beschreibt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehende Benutzer und Benutzer unterstützender Technologien wie Bildschirmlesern erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies hilft, Benutzer darüber zu informieren, was ein Sternchen bedeutet, kann darauf nicht vertraut werden. Ein Bildschirmleser spricht ein Sternchen als "_Stern_" aus, wenn es darauf stößt. Wenn es von einem sehenden Mausbenutzer gehoben wird, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Bildschirmlesers ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut einzuschließen, das immer von Bildschirmlesern gelesen wird.

Die obigen Varianten nehmen an Wirksamkeit zu, während Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen — Sie erhalten nur "Text bearbeiten leer", plus die tatsächlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel sind die Dinge etwas klarer — das vorgelesene Label zusammen mit der Eingabe ist "name star name edit text required", und die Labels werden noch immer separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil das `<input>` ein Label zugeordnet hat.
- Das dritte Beispiel ist das Beste — das eigentliche Label wird ganz zusammen vorgelesen, und das Label, das mit der Eingabe vorgelesen wird, ist "name required edit text".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, abhängig von Ihrem Bildschirmleser. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne Ihre Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen ohne Kommentar — Bildschirmleser werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Gemeinsame HTML-Strukturen, die mit Formularen verwendet werden

Abgesehen von den specific auf Webformularen bezogenen Strukturen ist es gut, sich daran zu erinnern, dass Formularmarkup einfach HTML ist. Das bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Überschriften (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z. B. {{htmlelement("section")}}) zur Strukturierung komplexer Formulare zu verwenden.

Vor allem liegt es an Ihnen, einen komfortablen Programmierstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Optionsfelder zu enthalten.

### Aktives Lernen: eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas umfangreicheres Formular erstellen — ein Zahlungsformular. Dieses Formular enthält eine Reihe von Steuerelementen, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber vorerst keine Sorgen; Sie erfahren im nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)), wie sie funktionieren. Lesen Sie für den Moment die Beschreibungen sorgfältig, während Sie den unten stehenden Anweisungen folgen, und beginnen Sie, ein Gefühl dafür zu entwickeln, welche Umhüllelemente wir verwenden, um das Formular zu strukturieren und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um Benutzer darüber zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Fügen Sie als Nächstes einen größeren Abschnitt von Code in das Formular unter unserem vorherigen Eintrag ein. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements umhüllen. Außerdem haben wir eine Gruppe von drei Optionsfeldern, die wir jeweils in ein eigenes Listen-{{htmlelement("li")}}-Element setzen. Wir haben auch zwei normale Texteingaben und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie eine Passworteingabe zum Eingeben eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="A" />
             Ace
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="Q" />
             Queen
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">
         <span>Email: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="email" id="mail" name="user-mail" required />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. Der zweite `<section>`-Abschnitt unseres Formulars enthält die Zahlungsinformationen.
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labels, jedes in einem `<p>` enthalten.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zum Auswählen des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element des Typs `tel`, um eine Kreditkartennummer einzugeben; während wir den `number`-Typ hätten verwenden können, wollten wir nicht das Zahlen-Spinner-UI.
   Das letzte ist ein `<input>`-Element des Typs `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das korrekte Format anzeigt, und ein _pattern_, das überprüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie den folgenden Text unter dem vorherigen Abschnitt ein:

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="user-card">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="card-number" required />
     </p>
     <p>
       <label for="expiration">
         <span>Expiration date:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input
         type="text"
         id="expiration"
         name="expiration"
         required
         placeholder="MM/YY"
         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher und enthält nur einen {{htmlelement("button")}} des Typs `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie schließlich Ihr Formular ab, indem Sie das äußere schließende {{htmlelement("form")}}-Tag hinzufügen:

   ```html
   </form>
   ```

   ```css hidden
   h1 {
     margin-top: 0;
   }

   ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   form {
     margin: 0 auto;
     width: 400px;
     padding: 1em;
     border: 1px solid #ccc;
     border-radius: 1em;
   }

   div + div {
     margin-top: 1em;
   }

   label span {
     display: inline-block;
     text-align: right;
   }

   input,
   textarea {
     font: 1em sans-serif;
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   input[type="checkbox"],
   input[type="radio"] {
     width: auto;
     border: none;
   }

   input:focus,
   textarea:focus {
     border-color: #000;
   }

   textarea {
     vertical-align: top;
     height: 5em;
     resize: vertical;
   }

   fieldset {
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   button {
     margin: 20px 0 0 0;
   }

   label {
     display: inline-block;
   }

   p label {
     width: 100%;
   }
   ```

Wir haben dem fertigen Formular unten einige zusätzliche CSS-Stile zugewiesen. Wenn Sie Änderungen am Aussehen Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie verfügen nun über das gesamte Wissen, das Sie benötigen, um Ihre Webformulare korrekt zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln weiter behandeln, wobei der nächste Artikel sich eingehender mit der Verwendung aller verschiedenen Arten von Formularsteuerelementen befasst, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [How to build custom form controls](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
