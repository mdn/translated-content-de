---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun die Elemente genauer betrachten, die Struktur und Bedeutung der verschiedenen Teile eines Formulars bieten.

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
        Verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie benutzerfreundlich und barrierefrei sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können mit speziellen Formularelementen und Attributen jede Art von Grundformular erstellen. Die korrekte Struktur eines HTML-Formulars zu verwenden, trägt dazu bei, dass das Formular sowohl benutzerfreundlich als auch [barrierefrei](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu gestalten.

Wir haben dieses bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist streng verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren, deshalb ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerungselement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mithilfe seines [`form`](/de/docs/Web/HTML/Element/input#form)-Attributs explizit mit einem Formular. Dies wurde eingeführt, um es Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns fortfahren und die Strukturelemente behandeln, die Sie innerhalb eines Formulars verschachtelt finden werden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck zu stilistischen und semantischen Zwecken teilen. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einschließen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Zum Beispiel werden einige Bildschirmlesegeräte wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie das Label jedes Steuerelements aussprechen.

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

Beim Lesen des obigen Formulars wird ein Bildschirmlesegerät für das erste Widget "Fruit juice size small", für das zweite "Fruit juice size medium" und für das dritte "Fruit juice size large" sagen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radio-Buttons haben, sollten Sie sie in ein {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch zur Unterteilung eines Formulars verwendet werden. Idealerweise sollten lange Formulare auf mehrere Seiten aufgeteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite bleiben muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in verschiedene Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zur Erstellung barrierefreier Formulare. Es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zuzuhören, wie ein Bildschirmlesegerät](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie barrierefreie Formulare erstellen möchten. Wenn es korrekt implementiert wird, werden Bildschirmlesegeräte das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen sprechen, und es ist auch für sehende Benutzer nützlich. Betrachten Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verknüpft ist, wird ein Bildschirmlesegerät etwas sagen wie "Name, edit text".

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen — das Formularelement innerhalb des `<label>` zu verschachteln und es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird es jedoch als Best Practice angesehen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder wenn das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmlesegerät etwas wie "Edit text blank" sagen, was nicht sehr hilfreich ist.

### Labels sind ebenfalls anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie das Label anklicken oder antippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingabefelder, bei denen Sie sowohl das Label als auch das Eingabefeld anklicken können, um es zu fokussieren. Es ist jedoch besonders nützlich für Radio-Buttons und Checkboxes — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird das Klicken auf den Label-Text "I like cherry" im Beispiel unten den ausgewählten Zustand des _taste_cherry_ Checkboxes umschalten:

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

Streng genommen können Sie mehrere Labels für ein einzelnes Widget festlegen, aber das ist keine gute Idee, da einige unterstützende Technologien Probleme damit haben können, diese zu handhaben. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels in ein einziges {{htmlelement("label")}}-Element verschachteln.

Betrachten wir dieses Beispiel:

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

Der Absatz oben legt eine Regel für benötigte Elemente fest. Die Regel muss _vor_ ihrer Verwendung beschrieben werden, damit sehende Benutzer und Benutzer unterstützender Technologien wie Bildschirmlesegeräte erfahren, was sie bedeutet, bevor sie auf ein benötigtes Element treffen. Während dies den Benutzern hilft, zu verstehen, was ein Sternchen bedeutet, kann es nicht absolut darauf vertraut werden. Ein Bildschirmlesegerät wird bei einem Sternchen "_"Stern_"_" sagen, wenn es darauf trifft. Wenn es von einem sehenden Maus-Benutzer überfahren wird, sollte "_"erforderlich*"*" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Ob Titel vorgelesen werden, hängt von den Einstellungen des Bildschirmlesegeräts ab, daher ist es zuverlässiger, zusätzlich das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das von Bildschirmlesegeräten immer gelesen wird.

Die oben genannten Varianten werden effektiver, je weiter Sie sich durch sie hindurchbewegen:

- Im ersten Beispiel wird das Label bei der Eingabe überhaupt nicht vorgelesen — man erhält lediglich "edit text blank", und die tatsächlichen Labels werden separat gelesen. Die mehrfache Verwendung von `<label>`-Elementen verwirrt das Bildschirmlesegerät.
- Im zweiten Beispiel sind die Dinge etwas klarer — das vorgelesene Label bei der Eingabe lautet "name star name edit text required", und die Labels werden immer noch separat gelesen. Die Dinge sind immer noch ein wenig verwirrend, aber es ist diesmal etwas besser, weil das `<input>` jetzt ein Label hat, das damit verknüpft ist.
- Das dritte Beispiel ist das Beste — das tatsächliche Label wird ganz zusammen gelesen, und das vorgelesene Label bei der Eingabe lautet "name required edit text".

> [!NOTE]
> Sie könnten leicht abweichende Ergebnisse erhalten, abhängig von Ihrem Bildschirmlesegerät. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden gerne auch von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 Versionen ohne Kommentar — Bildschirmlesegeräte werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen bei Formularen

Abgesehen von den spezifischen Strukturen für Webformulare ist es gut, sich daran zu erinnern, dass das Markup von Formularen einfach HTML ist. Das bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}}-Liste einzuschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Checkboxes oder Radio-Buttons zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittserstellung (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der zu zugänglichen und benutzerfreundlichen Formularen führt. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, die Radio-Buttons enthalten.

### Aktives Lernen: Eine Formularstruktur erstellen

Setzen wir diese Ideen in die Praxis um und erstellen ein etwas komplexeres Formular — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden herausfinden, wie sie funktionieren, im nächsten Artikel ([Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie jetzt die Beschreibungen sorgfältig, während Sie den folgenden Anweisungen folgen, und beginnen Sie damit, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Abschnitt des Codes in das Formular ein, unterhalb unserer vorherigen Eingabe. Hier sehen Sie, dass wir die Kontaktdatenfelder innerhalb eines separaten {{htmlelement("section")}}-Elements einfügen. Darüber hinaus haben wir eine Gruppe von drei Radio-Buttons, von denen jeder in einem eigenen Listen-({{htmlelement("li")}}) Element enthalten ist. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, und ein Passwortfeld zum Eingeben eines Passworts. Fügen Sie diesen Code in Ihr Formular ein:

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

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformationen.
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labels, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ hätten verwenden können, möchten wir die Spinner-Benutzeroberfläche für Nummern nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) wieder eingeführt.

   Geben Sie das Folgende unterhalb des vorherigen Abschnitts ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher, da er nur ein {{htmlelement("button")}}-Element vom Typ `submit` enthält, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie das äußere {{htmlelement("form")}}-Schlusstag hinzufügen:

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

Wir haben dem untenstehenden fertigen Formular einige zusätzliche CSS-Styles hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einen weiteren Test, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben jetzt das gesamte Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel detaillierter darauf eingeht, wie Sie die verschiedenen Arten von Formular-Widgets verwenden, die Sie zum Sammeln von Informationen von Ihren Benutzern verwenden möchten.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
