---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, sehen wir uns nun genauer die Elemente an, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

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
        Verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Basisformular mithilfe spezieller Formularelemente und Attribute erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele Hilfstechnologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um ihre Verwendung zu erleichtern.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist streng verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Steuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mithilfe seines [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attributs mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu binden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und uns die Struktur-Elemente ansehen, die Sie in einem Formular verschachtelt finden werden.

## Die `<fieldset>` und `<legend>` Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag ein {{HTMLElement("legend")}}-Element einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele Hilfstechnologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Zum Beispiel sprechen einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie das Label jedes Steuerelements vorlesen.

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
> Sie finden dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars sagt ein Screenreader für das erste Widget "Fruit juice size small", für das zweite "Fruit juice size medium" und für das dritte "Fruit juice size large".

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radio-Buttons haben, sollten Sie sie in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu untergliedern. Idealerweise sollten lange Formulare über mehrere Seiten verteilt sein, aber wenn ein Formular lang wird und auf einer einzelnen Seite bleiben muss, verbessert das Platzieren der verschiedenen zusammenhängenden Abschnitte in verschiedenen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf Hilfstechnologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zuzuhören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Methode, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – bei korrekter Implementierung sagen Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen, was auch für sehende Nutzer nützlich ist. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt mit dem `<input>` über sein `for`-Attribut (das die `id`-Attribut des `<input>`-Elements enthält) verknüpft ist, würde ein Screenreader etwas wie "Name, edit text" lesen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen – das Formularelement innerhalb des `<label>` zu verschachteln und es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird es jedoch als bewährte Methode angesehen, das `for`-Attribut festzulegen, um sicherzustellen, dass alle Hilfstechnologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, sagt ein Screenreader etwas wie "Edit text blank", was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Labels ist, dass Sie das Label anklicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerungen wie Texteingaben, bei denen Sie das Label sowie die Eingabe anklicken können, um den Fokus darauf zu legen, aber es ist besonders nützlich für Radio-Buttons und Kontrollkästchen – der Trefferbereich einer solchen Steuerung kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird das Klicken auf den "I like cherry"-Label-Text im folgenden Beispiel den ausgewählten Zustand des _taste_cherry_ Kontrollkästchens umschalten:

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
> Sie finden dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Genau genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige Hilfstechnologien Schwierigkeiten haben können, damit umzugehen. Im Fall von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehende Benutzer und Benutzer von Hilfstechnologien wie Screenreadern verstehen können, was sie bedeutet, bevor sie einem erforderlichen Element begegnen. Während dies hilft, Benutzer darüber zu informieren, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Screenreader spricht ein Sternchen als "_star_" aus, wenn es angetroffen wird. Wenn sie von einem sehenden Mausklick überflogen werden, sollte "_required_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, welches immer von Screenreadern vorgelesen wird.

Die oben genannten Varianten nehmen an Effektivität zu, je weiter Sie sich durch die Liste arbeiten:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe gelesen – Sie hören nur "edit text blank", und die tatsächlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer – das vorgelesene Label mit der Eingabe lautet "name star name edit text required", und die Labels werden weiterhin separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil das `<input>` ein verknüpftes Label hat.
- Das dritte Beispiel ist das Beste – das tatsächliche Label wird ganz zusammen vorgelesen, und das vorgelesene Label mit der Eingabe ist "name required edit text".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, je nach Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub unter [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die kommentiert sind – Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Abgesehen von den formularspezifischen Strukturen ist es gut zu bedenken, dass das Formular-Markup einfach HTML ist. Das bedeutet, dass Sie die gesamte Kraft von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umgeben. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Checkboxen oder Radio-Buttons zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Coding-Stil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Radio-Buttons zu enthalten.

### Aktives Lernen: Eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas umfassenderes Formular erstellen – ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht ganz verstehen. Machen Sie sich darüber erstmal keine Sorgen; Sie werden in dem nächsten Artikel ([Grundlegende native Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) erfahren, wie sie funktionieren. Lesen Sie vorerst die Beschreibungen sorgfältig, während Sie den untenstehenden Anweisungen folgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Umhüllungselemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als nächstes fügen wir einen größeren Abschnitt Code in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder in einem eigenen {{htmlelement("section")}}-Element aufbewahren. Außerdem haben wir eine Gruppe von drei Radio-Buttons, von denen wir jeden in einem eigenen Listen({{htmlelement("li")}})-Element platzieren. Wir haben auch zwei standardmäßige Text-{{htmlelement("input")}}s und ihre zugeordneten {{htmlelement("label")}}-Elemente, jeweils in einem {{htmlelement("p")}} eingebettet, und ein Password-Input zum Eingeben eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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
   Wir haben drei verschiedene Steuerungselemente zusammen mit ihren Labels, jeweils in einem `<p>` eingebettet.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl der Kreditkartentyp.
   Das zweite ist ein `<input>`-Element des Typs `tel`, um eine Kreditkartennummer einzugeben; während wir den Typ `number` hätten verwenden können, wollen wir nicht die Spinner-UI der Nummer.
   Das letzte ist ein `<input>`-Element des Typs `text`, um das Ablaufdatum der Karte einzugeben; es enthält ein _placeholder_ Attribut, das das richtige Format angibt, und ein _pattern_, das testet, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie das folgende unterhalb des vorherigen Abschnitts ein:

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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher, da er nur einen {{htmlelement("button")}} des Typs `submit` enthält, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am unteren Rand Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Vervollständigen Sie schließlich Ihr Formular, indem Sie die abschließende {{htmlelement("form")}}-Schlussmarke hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einen weiteren Test, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_structure).

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel detaillierter darauf eingeht, wie Sie alle verschiedenen Arten von Formular-Widgets verwenden, die Sie zur Sammlung von Informationen von Ihren Benutzern verwenden möchten.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
