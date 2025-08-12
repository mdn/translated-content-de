---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen geklärt haben, werden wir nun genauer auf die Elemente eingehen, die verwendet werden, um den unterschiedlichen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

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
        Verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie verwendbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Basisformular mithilfe spezieller Formularelemente und Attribute erstellen. Die korrekte Strukturierung eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl verwendbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formell ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu gestalten.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in einem anderen Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren. Daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verbinden es über sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Gehen wir weiter und behandeln die strukturellen Elemente, die Sie in einem Formular verschachtelt finden werden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}}-Element beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des darin enthaltenen {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element als Teil der Bezeichnung jedes Steuerungselements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Zum Beispiel sprechen einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie die Bezeichnung jedes Steuerelements sprechen.

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
> Sie finden dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Bildschirmleser "Fruit juice size small" für das erste Widget, "Fruit juice size medium" für das zweite und "Fruit juice size large" für das dritte sprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radiobuttons haben, sollten Sie diese innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu gliedern. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang ist und auf einer einzigen Seite bleiben muss, verbessert das Platzieren der verschiedenen verwandten Abschnitte in unterschiedlichen Feldsätzen die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare. Es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formelle Weg, um eine Bezeichnung für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – wenn es ordnungsgemäß implementiert ist, sprechen Bildschirmleser die Bezeichnung eines Formularelements zusammen mit allen zugehörigen Anweisungen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` korrekt über sein `for`-Attribut, das das `id`-Attribut des `<input>`-Elements enthält, mit dem `<input>` verbunden ist, wird ein Bildschirmleser etwas wie "Name, edit text" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verbinden – verschachteln Sie das Formularelement innerhalb des `<label>`, wodurch es implizit verbunden wird.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen wird jedoch empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Bezeichnung und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Bildschirmleser etwas wie "Edit text blank" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie das Label anklicken oder antippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie sowohl das Label als auch die Eingabe anklicken können, um sie zu fokussieren, aber es ist besonders nützlich für Radiobuttons und Kontrollkästchen — der Treffbereich eines solchen Steuerungselements kann sehr klein sein, daher ist es hilfreich, es so einfach wie möglich zu machen, es zu aktivieren.

Zum Beispiel wird durch Klicken auf den Label-Text "I like cherry" im folgenden Beispiel der ausgewählte Status des _taste_cherry_-Kontrollkästchens umgeschaltet:

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
> Sie finden dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben könnten, damit umzugehen. Im Falle von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

Betrachten wir dieses Beispiel:

```html
<p>Required fields are followed by <span aria-label="required">*</span>.</p>

<!-- So this: -->
<!--<div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required />
  <label for="username"><span aria-label="required">*</span></label>
</div>-->

<!-- would be better done like this: -->
<!--<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required />
    <span aria-label="required">*</span>
  </label>
</div>-->

<!-- But this is probably best: -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz oben beschreibt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung aufgenommen werden, damit sehende Nutzer und Nutzer von unterstützenden Technologien wie Bildschirmlesern erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element treffen. Obwohl dies den Nutzern hilft zu verstehen, was ein Sternchen bedeutet, kann darauf nicht allein gesetzt werden. Ein Bildschirmleser spricht ein Sternchen als "_star_" aus, wenn es darauf stößt. Wenn es von einem sehenden Mauskonsumenten überflogen wird, sollte "_required_" erscheinen, was durch das `title`-Attribut erreicht wird. Ob Titel vorgelesen werden, hängt von den Einstellungen des Bildschirmlesers ab, so dass es zuverlässiger ist auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das von Bildschirmlesern immer vorgelesen wird.

Die oben genannten Varianten nehmen in ihrer Effektivität zu:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe vorgelesen — Sie bekommen einfach "edit text blank", und die tatsächlichen Labels werden separat vorgelesen. Die mehrfachen `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel ist es etwas klarer — das zusammen mit der Eingabe vorgelesene Label lautet "name star name edit text required", und die Labels werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber es ist dieses Mal etwas besser, weil das `<input>` ein Label hat, das damit verbunden ist.
- Das dritte Beispiel ist am besten — das tatsächliche Label wird zusammenhängend vorgelesen, und das mit der Eingabe vorgelesene Label ist "name required edit text".

> [!NOTE]
> Je nach Bildschirmleser können Sie leicht unterschiedliche Ergebnisse erzielen. Dies wurde mit VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne Ihre Erfahrungen hören.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die ohne Kommentierung vorhanden sind — Bildschirmleser werden definitiv verwirrt sein, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Jenseits der spezifisch für Webformulare vorgesehenen Strukturen ist es gut zu bedenken, dass Formularkennzeichnung nur HTML ist. Das bedeutet, dass Sie die gesamte Leistung von HTML nutzen können, um ein Webformular zu strukturieren.

Wie in den Beispielen zu sehen ist, ist es gängige Praxis ein Label und dessen Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}} Liste einzuschließen. Auch {{HTMLElement("p")}} und {{HTMLElement("div")}} werden häufig verwendet. Listen werden für die Strukturierung mehrerer Kontrollkästchen oder Radiobuttons empfohlen.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch üblich, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und -Abschnitte (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem aber liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der zu zugänglichen und verwendbaren Formularen führt. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Radiobuttons zu enthalten.

### Strukturierung eines Formulars

Setzen wir diese Ideen in die Praxis um und bauen wir ein etwas komplexeres Formular — ein Zahlungsformular. Dieses Formular wird eine Reihe von Kontrolltypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden in dem nächsten Artikel erfahren, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie die Beschreibungen sorgfältig, während Sie den unten stehenden Anweisungen folgen, und beginnen Sie zu verstehen, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Machen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Als Nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements einfügen. Außerdem haben wir eine Gruppe von drei Radiobuttons, von denen jeder in seinem eigenen Listenelement ({{htmlelement("li")}}) eingefügt ist. Wir haben außerdem zwei Standardtext-{{htmlelement("input")}}s und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie eine Passworteingabe zur Eingabe eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformation.
   Wir haben drei separate Steuerelemente zusammen mit ihren Labels, jedes in einem `<p>` enthalten.
   Das erste ist ein Drop-down-Menü ({{htmlelement("select")}}) zur Auswahl der Kreditkartentypen.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, zur Eingabe einer Kreditkartennummer; obwohl wir den Typ `number` verwenden könnten, wollen wir die Spinner-UI der Nummer nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, zur Eingabe des Ablaufdatums der Karte; dies beinhaltet ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das überprüft, dass das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie den folgenden Code unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Fertigstellen Sie schließlich Ihr Formular, indem Sie das abschließende {{htmlelement("form")}}-Tag hinzufügen:

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
     border: 1px solid #cccccc;
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
     border: 1px solid #999999;
   }

   input[type="checkbox"],
   input[type="radio"] {
     width: auto;
     border: none;
   }

   input:focus,
   textarea:focus {
     border-color: black;
   }

   textarea {
     vertical-align: top;
     height: 5em;
     resize: vertical;
   }

   fieldset {
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999999;
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

Wir haben der endgültigen Formularversion unten einige zusätzliche CSS-Stile angewendet. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Styles aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Jetzt haben Sie das gesamte Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel detaillierter darauf eingeht, wie man alle verschiedenen Arten von Formularelementen verwendet, die Sie zur Sammlung von Informationen von Ihren Benutzern benötigen.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
