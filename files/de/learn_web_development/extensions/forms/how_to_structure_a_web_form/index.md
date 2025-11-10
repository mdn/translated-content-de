---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 3681b0af6ad675c0be657f6d74933f439099e76b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem die Grundlagen geklärt sind, werden wir uns nun detaillierter mit den Elementen befassen, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu geben.

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
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie nutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von grundlegenden Formularen mit speziellen Formularelementen und Attributen erstellen. Die Verwendung der korrekten Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl nutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular sowie Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele Assistenztechnologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente erkennen und spezielle Hooks implementieren, um die Nutzung zu erleichtern.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Das Verschachteln kann dazu führen, dass sich Formulare unvorhersehbar verhalten, daher ist es keine gute Idee.

Es ist immer möglich, eine Formulareingabe außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat diese Eingabe standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular, indem Sie das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut verwenden. Dies wurde eingeführt, um Ihnen die Möglichkeit zu geben, eine Eingabe explizit mit einem Formular zu verknüpfen, selbst wenn es nicht darin verschachtelt ist.

Gehen wir weiter und behandeln die Strukturelemente, die Sie in einem Formular finden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl für stilistische als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag hinzufügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des enthaltenen {{HTMLElement("fieldset")}}.

Viele Assistenztechnologien nutzen das {{HTMLElement("legend")}}-Element so, als wäre es ein Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Zum Beispiel sprechen einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie das Label jedes Steuerelements sprechen.

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

Beim Lesen des obigen Formulars sagt ein Bildschirmleser "Fruchtjuicegröße klein" für das erste Widget, "Fruchtjuicegröße mittel" für das zweite und "Fruchtjuicegröße groß" für das dritte.

Der in diesem Beispiel gezeigte Anwendungsfall ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsschaltflächen haben, sollten Sie diese innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt andere Anwendungsfälle und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Elemement auch verwendet werden, um ein Formular zu gliedern. Idealerweise sollten lange Formulare über mehrere Seiten verteilt sein, aber wenn ein Formular lang und auf einer einzigen Seite gehalten werden muss, verbessert das Platzieren der verschiedenen verwandten Abschnitte in verschiedenen Fieldsets die Nutzbarkeit.

Aufgrund seines Einflusses auf die Assistenztechnologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselkriterien zum Erstellen zugänglicher Formulare; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, sollten Sie jedes Mal, wenn Sie ein Formular erstellen, [anhören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es sich merkwürdig anhört, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie im vorherigen Artikel gesehen, ist das {{HTMLElement("label")}}-Element die formale Möglichkeit, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — bei korrekter Implementierung werden Bildschirmleser das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen vorlesen, was sowohl für sehende Benutzer als auch für Benutzer von Assistenztechnologien nützlich ist. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut mit dem `<input>`-Element verbunden ist (das die `id`-Attribut des `<input>`-Elements enthält), wird ein Bildschirmleser etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, eine Formulareingabe mit einem Label zu verknüpfen — verschachteln Sie die Formulareingabe innerhalb des `<label>`, wodurch es implizit verknüpft wird.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird jedoch empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle Assistenztechnologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn die Formulareingabe weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmleser etwas wie "Text bearbeiten leer" vorlesen, was gar nicht sehr hilfreich ist.

### Labels sind ebenfalls anklickbar!

Ein weiterer Vorteil von ordentlich eingerichteten Labels ist, dass Sie das Label anklicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie sowohl das Label als auch die Eingabe anklicken können, um es zu fokussieren, aber es ist besonders nützlich für Optionsschaltflächen und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es hilfreich, ihn so einfach wie möglich zu aktivieren.

Wenn Sie beispielsweise auf den "Ich mag Kirschgeschmack"-Text im Beispiel unten klicken, wird der ausgewählte Status des _taste_cherry_ Kontrollkästchens umgeschaltet:

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

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget anwenden, aber das ist keine gute Idee, da einige Assistenztechnologien Probleme damit haben können. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels in einem einzigen {{htmlelement("label")}}-Element verschachteln.

Betrachten wir dieses Beispiel:

```html
<p>Please complete all required (*) fields.</p>

<!-- So this: -->
<!--<div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required />
  <label for="username">*</label>
</div>-->

<!-- would be better done like this: -->
<!--<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required />
    <span>*</span>
  </label>
</div>-->

<!-- But this is probably best: -->
<div>
  <label for="username">Name *:</label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ der Verwendung enthalten sein, damit sehende Benutzer und Benutzer von Assistenztechnologien (AT) wie Bildschirmlesern verstehen, was sie bedeutet, bevor sie auf erforderliche Elemente treffen.

## Gemeinsame HTML-Strukturen, die mit Formularen verwendet werden

Neben den formularspezifischen Strukturen ist es gut zu wissen, dass Formulare mit HTML nur HTML-Markup sind. Das bedeutet, dass Sie die volle Macht von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es eine gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsschaltflächen zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch üblich, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittsunterteilung (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen angenehmen Codierstil zu finden, der zu zugänglichen, nutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in ein separates {{htmlelement("section")}}-Element eingebettet werden, mit {{htmlelement("fieldset")}}-Elementen, um Optionsschaltflächen zu enthalten.

### Eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird einige Arten von Steuerelementen enthalten, die Sie möglicherweise noch nicht verstehen. Keine Sorge, das werden Sie im nächsten Artikel kennenlernen ([Basis native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Für den Moment lesen Sie die Beschreibungen sorgfältig, während Sie den folgenden Anweisungen folgen und beginnen Sie ein Verständnis dafür zu entwickeln, welche Umwickelungselemente wir verwenden, um das Formular zu strukturieren und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Ordner auf Ihrem Computer.

2. Erstellen Sie als nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>Please complete all required (*) fields.</p>
   ```

4. Als nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements einbetten. Zudem haben wir eine Gruppe von drei Optionsschaltflächen, die wir jeweils in ein eigenes Listen-({{htmlelement("li")}})-Element setzen. Wir haben auch zwei Standardtext-{{htmlelement("input")}}s und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, und eine Passworteingabe für das Eingeben eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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
       <label for="name">Name *:</label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">Email *:</label>
       <input type="email" id="mail" name="user-mail" required />
     </p>
     <p>
       <label for="pwd">Password *:</label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformation.
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labels, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Drop-Down-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; während wir den `number`-Typ hätten verwenden können, möchten wir nicht die Nummer-Spinning-Benutzeroberfläche.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das testet, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie folgendes unter dem vorherigen Abschnitt ein:

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
       <label for="number">Card number *:</label>
       <input type="tel" id="number" name="card-number" required />
     </p>
     <p>
       <label for="expiration">Expiration date *:</label>
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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu senden. Fügen Sie dies nun unten in Ihr Formular ein:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Zum Abschluss fügen Sie Ihrem Formular das schließende {{htmlelement("form")}}-Tag hinzu:

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
     margin-top: 20px;
   }

   label {
     display: inline-block;
   }

   p label {
     width: 100%;
   }
   ```

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen an der Darstellung Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie verfügen nun über das Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln. Der nächste Artikel wirft einen genaueren Blick darauf, wie Sie alle verschiedenen Arten von Formular-Widgets verwenden können, die Sie benötigen, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
