---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 9a02ad9baf7d02dd799fd455e03517894f4116b3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun genauer auf die Elemente eingehen, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bieten.

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
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie verwendbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und Attributen erstellen. Die richtige Struktur beim Erstellen eines HTML-Formulars wird helfen, sicherzustellen, dass das Formular sowohl verwendbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele Hilfstechnologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Tools implementieren, um sie einfacher zu verwenden.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens untersagt, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass sich Formulare unvorhersehbar verhalten, was keine gute Idee ist.

Es ist immer möglich, ein Formular-Steuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es über sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und die strukturellen Elemente abdecken, die Sie in einem Formular verschachtelt finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, aus stilistischen und semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} durch Einfügen eines {{HTMLElement("legend")}}-Elements direkt unterhalb des öffnenden {{HTMLElement("fieldset")}}-Tags kennzeichnen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des enthaltenen {{HTMLElement("fieldset")}}.

Viele Hilfstechnologien verwenden das {{HTMLElement("legend")}}-Element als Teil der Beschriftung jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Beispielsweise sprechen einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie die Beschriftung jedes Steuerelements sprechen.

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

Beim Lesen des obigen Formulars spricht ein Screenreader "Fruit juice size small" für das erste Widget, "Fruit juice size medium" für das zweite und "Fruit juice size large" für das dritte.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Reihe von Optionsfeldern haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch dazu verwendet werden, ein Formular zu gliedern. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite bleiben muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in verschiedene Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf Hilfstechnologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; jedoch liegt es an Ihnen, es nicht zu überbeanspruchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [anzuhören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um eine Beschriftung für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, sprechen Screenreader die Beschriftung eines Formularelements zusammen mit allen zugehörigen Anweisungen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, korrekt mit dem `<input>` verbunden über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält), wird ein Screenreader etwas wie "Name, edit text" aussprechen.

Es gibt eine andere Möglichkeit, ein Formular-Steuerelement mit einer Beschriftung zu verknüpfen — verschachteln Sie das Formular-Steuerelement innerhalb des `<label>`, um es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen gilt es jedoch als beste Praxis, das `for`-Attribut zu setzen, um sicherzustellen, dass alle Hilfstechnologien die Beziehung zwischen Beschriftung und Widget verstehen.

Wenn es keine Beschriftung gibt, oder wenn das Formular-Steuerelement weder implizit noch explizit mit einer Beschriftung verknüpft ist, wird ein Screenreader etwas wie "Edit text blank" aussprechen, was überhaupt nicht sehr hilfreich ist.

### Beschriftungen sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Beschriftungen ist, dass Sie auf die Beschriftung klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie auf die Beschriftung sowie auf die Eingabe klicken können, um sie zu fokussieren, aber es ist besonders nützlich für Optionsfelder und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, sodass es nützlich ist, es so einfach wie möglich zu aktivieren.

Beispielsweise wird das Klicken auf den "I like cherry"-Beschriftungstext im folgenden Beispiel den ausgewählten Status des _taste_cherry_ Kontrollkästchens umschalten:

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

### Mehrere Beschriftungen

Streng genommen können Sie mehreren Beschriftungen auf einem einzigen Widget hinzufügen, aber das ist keine gute Idee, da einige Hilfstechnologien Schwierigkeiten mit der Handhabung haben können. Im Falle mehrerer Beschriftungen sollten Sie ein Widget und seine Beschriftungen innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz am Anfang legt eine Regel für Pflichtfelder fest. Die Regel muss _vorher_ eingeschlossen werden, bevor sie verwendet wird, damit sehende Benutzer und Benutzer von Hilfstechnologien wie Screenreadern erfahren können, was sie bedeutet, bevor sie ein erforderliches Element begegnen. Obwohl dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Screenreader spricht ein Sternchen als "_Stern_" aus, wenn es angetroffen wird. Wenn es von einem sehenden Mausbenutzer angefahren wird, sollte "_required_" erscheinen, was durch das Attribut `title` erreicht wird. Das Vorlesen von Titeln hängt von den Screenreader-Einstellungen ab, daher ist es zuverlässiger, auch das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) zu verwenden, das von Screenreadern immer gelesen wird.

Die oben gezeigten Varianten werden effektiver, je weiter Sie gehen:

- Im ersten Beispiel wird die Beschriftung überhaupt nicht mit der Eingabe vorgelesen — Sie erhalten nur "edit text blank", und die tatsächlichen Beschriftungen werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer — die mit der Eingabe vorgelesene Beschriftung lautet "name star name edit text required", und die Beschriftungen werden immer noch separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist ein bisschen besser dieses Mal, weil das `<input>` mit einer Beschriftung verknüpft ist.
- Das dritte Beispiel ist das Beste — die tatsächliche Beschriftung wird im Ganzen vorgelesen, und die mit der Eingabe vorgelesene Beschriftung lautet "name required edit text".

> [!NOTE]
> Möglicherweise erhalten Sie leicht unterschiedliche Ergebnisse, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden uns freuen, von Ihren Erfahrungen zu hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)) finden. Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen auskommentiert — Screenreader werden definitiv verwirrt, wenn Sie mehrere Beschriftungen UND mehrere Eingaben mit der gleichen ID haben!

## Gemeinsame HTML-Strukturen, die mit Formularen verwendet werden

Über die spezifischen Strukturen für Webformulare hinaus ist es gut, sich daran zu erinnern, dass Formular-Markup einfach HTML ist. Das bedeutet, dass Sie die gesamte Kraft von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, eine Beschriftung und ihr Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}} Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Überschriften (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Programmierstil zu finden, der zu zugänglichen und benutzerfreundlichen Formularen führt. Jeder separate Funktionsabschnitt sollte in einem eigenen {{htmlelement("section")}}-Element enthalten sein, wobei {{htmlelement("fieldset")}}-Elemente zum Einfügen von Optionsfeldern verwendet werden.

### Aktives Lernen: eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie vielleicht noch nicht verstehen. Machen Sie sich deshalb keine Sorgen; Sie werden herausfinden, wie sie im nächsten Artikel funktionieren ([Basic native form controls](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie die Beschreibungen sorgfältig durch, während Sie den folgenden Anweisungen folgen, und beginnen Sie zu schätzen, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um Benutzer darüber zu informieren, wie Pflichtfelder markiert sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationen in einem eigenen {{htmlelement("section")}}-Element umschließen. Darüber hinaus haben wir eine Reihe von drei Optionsfeldern, von denen jedes in seinem eigenen Listenelement ({{htmlelement("li")}}) untergebracht ist. Wir haben auch zwei Standardtext-{{htmlelement("input")}}-Felder und ihre zugehörigen {{htmlelement("label")}}-Elemente, wobei jedes in einem {{htmlelement("p")}} untergebracht ist, sowie ein Passwortfeld für die Eingabe eines Passworts. Fügen Sie diesen Code in Ihr Formular ein:

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

5. Der zweite `<section>` unseres Formulars sind die Zahlungsinformationen.
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Beschriftungen, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ verwendet haben könnten, möchten wir nicht die Spinner-Benutzeroberfläche der Nummer haben.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das testet, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [The HTML5 input types](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie diesen jetzt unten in Ihr Formular ein:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich beenden Sie Ihr Formular, indem Sie das abschließende {{htmlelement("form")}}-Tag hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie das Erscheinungsbild Ihres Formulars ändern möchten, können Sie die Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einen weiteren Test, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_structure).

## Zusammenfassung

Sie haben jetzt das Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei wir im nächsten Artikel genauer darauf eingehen, alle verschiedenen Arten von Formular-Widgets zu verwenden, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
