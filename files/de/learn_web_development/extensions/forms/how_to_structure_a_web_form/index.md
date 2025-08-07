---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen geklärt haben, werden wir uns nun genauer mit den Elementen befassen, die zur Strukturierung und Bedeutungszuweisung der verschiedenen Teile eines Formulars verwendet werden.

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

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Grundformular mit dedizierten Formularelementen und Attributen erstellen. Die korrekte Strukturierung eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formell ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie dieses Element verwenden und alle Inhalte darin einbetten. Viele Assistenztechnologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente erkennen und spezielle Hooks implementieren, um deren Verwendung zu erleichtern.

Dies haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular einzubetten. Das Einbetten kann dazu führen, dass Formulare unvorhersehbar reagieren, daher ist es keine gute Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieser Steuerungselement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular über sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut. Dies wurde eingeführt, damit Sie eine Steuerung explizit mit einem Formular verknüpfen können, auch wenn sie nicht innerhalb des Formulars eingebettet ist.

Lassen Sie uns fortfahren und die Strukturelemente behandeln, die Sie in einem Formular eingebettet finden werden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck für stilistische und semantische Zwecke teilen. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele Assistenztechnologien verwenden das {{HTMLElement("legend")}}-Element so, als wäre es Teil der Beschriftung jedes Steuerungselements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Beispielsweise sprechen einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie die Beschriftung jedes Steuerungselements vorlesen.

Hier ein kleines Beispiel:

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
> Sie können dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Bildschirmleser "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte vorlesen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese in ein {{HTMLElement("fieldset")}}-Element einbetten. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang ist und auf einer einzigen Seite sein muss, verbessert das Einbetten der verschiedenen verwandten Abschnitte in verschiedene Fieldsets die Benutzbarkeit.

Aufgrund seiner Einflussnahme auf die assistierende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; jedoch ist es Ihre Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um eine Beschriftung für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, wird ein Bildschirmleser die Beschriftung eines Formularelements zusammen mit allen dazugehörigen Anweisungen vorlesen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt mit dem `<input>` über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) verknüpft ist, liest ein Bildschirmleser etwas wie "Name, Bearbeiten Text".

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen — das Formularelement innerhalb des `<label>` zu verschachteln, was es implizit zuordnet.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen wird jedoch als Best Practice angesehen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle assistierenden Technologien die Beziehung zwischen Beschriftung und Widget verstehen.

Wenn es keine Beschriftung gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmleser etwas wie "Text bearbeiten leer" vorlesen, was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Beschriftungen ist, dass Sie das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist für Steuerungselemente wie Texteingaben nützlich, bei denen Sie das Label sowie das Eingabeformular klicken können, um es zu fokussieren, aber es ist besonders nützlich für Optionsfelder und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird durch Klicken auf den "Ich mag Kirsche"-Beschriftungstext im folgenden Beispiel der ausgewählte Zustand des _taste_cherry_-Kontrollkästchens umgeschaltet:

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

Streng genommen können Sie auf einem einzelnen Widget mehrere Beschriftungen anbringen, dies ist jedoch keine gute Idee, da einige Assistenztechnologien Probleme haben können, sie zu handhaben. Im Falle mehrerer Beschriftungen sollten Sie ein Widget und seine Beschriftungen innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _bevor_ sie verwendet wird enthalten sein, damit sehende Benutzer und Benutzer von Assistenztechnologien wie Bildschirmlesern lernen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies Benutzer darüber informiert, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Bildschirmleser wird ein Sternchen als "_Stern_" vorlesen, wenn es auftritt. Wenn es von einem sehenden Mausbenutzer gehovt wird, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln durch den Bildschirmleser hängt von dessen Einstellungen ab, es ist jedoch zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut einzuschließen, das von Bildschirmlesern immer vorgelesen wird.

Die oben genannten Varianten steigern die Effektivität mit jeder Stufe:

- Im ersten Beispiel wird die Beschriftung überhaupt nicht zusammen mit dem Eingabefeld vorgelesen — man erhält nur "Text leer bearbeiten", außerdem werden die eigentlichen Beschriftungen separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel sind die Dinge etwas klarer — die mit der Eingabe vorgelesene Beschriftung ist "Name Stern Name Text bearbeiten erforderlich", und die Beschriftungen werden immer noch separat vorgelesen. Die Dinge sind immer noch ein bisschen verwirrend, aber es ist etwas besser dieses Mal, weil das `<input>` eine Beschriftung damit verknüpft hat.
- Das dritte Beispiel ist das beste — die tatsächliche Beschriftung wird vollständig vorgelesen, und die mit der Eingabe vorgelesene Beschriftung ist "Name erforderlich Text bearbeiten".

> [!NOTE]
> Sie erhalten möglicherweise leicht unterschiedliche Ergebnisse, abhängig von Ihrem Bildschirmleser. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne über Ihre Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen ohne Auskommentierung — Bildschirmleser werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Abgesehen von den speziell für Webformulare spezifischen Strukturen ist es gut, sich daran zu erinnern, dass Formulare-Markup einfach HTML ist. Dies bedeutet, dass Sie die gesamte Macht von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es übliche Praxis, eine Beschriftung und ihr Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}} und {{HTMLElement("div")}}-Elemente werden auch häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Programmierstil zu finden, der zu zugänglichen und benutzbaren Formularen führt. Jeder Abschnitt mit separater Funktionalität sollte in ein separates {{htmlelement("section")}}-Element eingebettet werden, wobei {{htmlelement("fieldset")}}-Elemente verwendet werden, um Optionsfelder zu enthalten.

### Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplizierteres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Anzahl von Steuerungstypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber vorerst keine Sorgen; Sie werden herausfinden, wie sie funktionieren, im nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie die Beschreibungen sorgfältig, während Sie den folgenden Anweisungen folgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

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

4. Als Nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements einfügen. Außerdem haben wir eine Gruppe von drei Optionsfeldern, von denen jedes in einem eigenen Listenelement ({{htmlelement("li")}}) eingefügt ist. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}-Elemente und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}}-Element enthalten sind, sowie ein Passwortfeld für die Passworteingabe. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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

5. Der zweite `<section>`-Teil unseres Formulars ist die Zahlungsinformation.
   Wir haben drei verschiedene Steuerungselemente zusammen mit ihren Beschriftungen, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel` zur Eingabe einer Kreditkartennummer; obwohl wir den `number`-Typ verwenden könnten, möchten wir die Spinner-Benutzeroberfläche der Nummer nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text` zur Eingabe des Ablaufdatums der Karte; dies enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das prüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut vorgestellt.

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten abzuschicken. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie schließlich Ihr Formular ab, indem Sie das äußere {{htmlelement("form")}}-Schlusstag hinzufügen:

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

Wir haben unten einige zusätzliche CSS für das fertige Formular angewandt. Wenn Sie das Aussehen Ihres Formulars ändern möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie haben jetzt alle Kenntnisse, die Sie benötigen, um Ihre Webformulare korrekt zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel genauer darauf eingeht, wie Sie die verschiedenen Arten von Formular-Widgets verwenden können, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
