---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir uns nun genauer mit den Elementen befassen, die zur Strukturierung und Bedeutungszuweisung der verschiedenen Teile eines Formulars verwendet werden.

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
        Verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, sodass sie benutzbar und barrierefrei sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Basisformular mit speziellen Formularelementen und -attributen erstellen. Die richtige Struktur bei der Erstellung eines HTML-Formulars hilft zu gewährleisten, dass das Formular sowohl benutzbar als auch [barrierefrei](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu gestalten.

Wir haben dies bereits im vorherigen Artikel angesprochen.

> [!WARNING]
> Es ist strikt verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Verschachtelungen können dazu führen, dass Formulare unvorhersehbar reagieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verbinden es explizit mit einem Formular über sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verbinden, selbst wenn es nicht in diesem verschachtelt ist.

Gehen wir weiter zu den strukturellen Elementen, die Sie in einem Formular finden werden.

## Die `<fieldset>` und `<legend>` Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl aus stilistischen als auch aus semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag hinzufügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien nutzen das {{HTMLElement("legend")}}-Element als Teil der Beschriftung jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Beispielsweise werden bei einigen Screenreadern wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) der Inhalt der Legende vor der Beschriftung jedes Steuerelements ausgesprochen.

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

Beim Lesen des obigen Formulars wird ein Screenreader für das erste Widget "Fruchtsaftgröße klein", für das zweite "Fruchtsaftgröße mittel" und für das dritte "Fruchtsaftgröße groß" sprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Immer wenn Sie eine Gruppe von Radio-Buttons haben, sollten Sie diese innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt noch andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular in Abschnitte zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Platzieren der verschiedenen zusammengehörigen Abschnitte in verschiedenen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau barrierefreier Formulare; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zuzuhören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label> Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie barrierefreie Formulare erstellen möchten - wenn es richtig implementiert ist, werden Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen vorlesen, zudem ist es für sehende Benutzer nützlich. Betrachten Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über das `for`-Attribut, das das `id`-Attribut des `<input>`-Elements enthält, mit dem `<input>` verbunden ist, liest ein Screenreader etwas wie "Name, Text bearbeiten" vor.

Es gibt eine andere Möglichkeit, ein Steuerelement mit einem Label zu verbinden – indem das Steuerelement innerhalb des `<label>`-Elements verschachtelt und damit implizit verbunden wird.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen ist es jedoch als Best Practice anzusehen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Steuerelement weder implizit noch explizit mit einem Label verbunden ist, liest ein Screenreader etwas wie "Text bearbeiten leer", was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil korrekt eingerichteter Labels besteht darin, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Bedienelemente wie Texteingaben, bei denen Sie auf das Label und das Eingabefeld klicken können, um den Fokus darauf zu legen, aber es ist besonders nützlich für Radio-Buttons und Checkboxes – der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich aktivierbar zu machen.

Wenn Sie beispielsweise auf den Labeltext "I like cherry" im folgenden Beispiel klicken, wird der ausgewählte Zustand des _taste_cherry_ Checkboxes umgeschaltet:

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

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige unterstützende Technologien Probleme damit haben können. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben beschreibt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung eingefügt werden, damit sehende Benutzer und Benutzer von unterstützenden Technologien wie Screenreadern verstehen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Screenreader wird ein Sternchen als "_star_" lesen, wenn es angetroffen wird. Wenn ein sehender Benutzer mit der Maus darüberfährt, sollte "_erforderlich_" erscheinen, was mit Hilfe des `title`-Attributes erreicht wird. Das Vorlesen von Titeln hängt von den Screenreader-Einstellungen ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut einzubeziehen, das von Screenreadern immer vorgelesen wird.

Die obigen Varianten steigen in ihrer Effektivität, je weiter Sie gehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen – Sie erhalten nur "Text bearbeiten leer", und die tatsächlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel ist die Aussage klarer – das Label, das zusammen mit der Eingabe vorgelesen wird, ist "Name Stern Name Text bearbeiten erforderlich", und die Labels werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber dieses Mal ist es etwas besser, weil das `<input>` mit einem Label verbunden ist.
- Das dritte Beispiel ist am besten – das tatsächliche Label wird vollständig vorgelesen, und das Label mit der Eingabe ist "Name erforderlich Text bearbeiten".

> [!NOTE]
> Sie erhalten möglicherweise leicht unterschiedliche Ergebnisse, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden gerne auch Ihre Erfahrungen hören.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die unverändert bleiben – Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Übliche HTML-Strukturen, die mit Formularen verwendet werden

Neben den für Webformulare spezifischen Strukturen sollten Sie bedenken, dass das Formular-Markup nur HTML ist. Dies bedeutet, dass Sie die gesamte Macht von HTML nutzen können, um ein Webformular zu strukturieren.

Wie in den Beispielen zu sehen ist, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Checkboxen oder Radiobuttons zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittsunterteilung (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierstil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jede separate Funktionalität sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Radiobuttons zu enthalten.

### Aktives Lernen: Eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas umfangreicheres Formular erstellen – ein Zahlungsformular. Dieses Formular enthält eine Reihe von Steuerelementtypen, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber keine Sorgen; Sie werden in dem nächsten Artikel ([Basic native form controls](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) herausfinden, wie sie funktionieren. Folgen Sie nun den Anweisungen unten sorgfältig und beginnen Sie, zu verstehen, welche Wrapper-Elemente wir zur Strukturierung des Formulars verwenden und warum.

1. Um zu beginnen, machen Sie eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

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

4. Als Nächstes fügen wir einen größeren Abschnitt Code in das Formular unter unserem vorherigen Eintrag ein. Hier sehen Sie, dass wir die Kontaktdatenfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements umschließen. Darüber hinaus haben wir eine Gruppe von drei Radio-Buttons, die wir jeweils in einem eigenen Listenelement ({{htmlelement("li")}}) unterbringen. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} untergebracht sind, und eine Passwort-Eingabe zum Eingeben eines Passworts. Fügen Sie diesen Code in Ihr Formular ein:

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
   Wir haben drei verschiedene Steuerelemente mit ihren Labels, die jeweils in einem `<p>` untergebracht sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel` zum Eingeben einer Kreditkartennummer; während wir den `number`-Typ hätten verwenden können, wollen wir die Spinner-Benutzeroberfläche der Nummer nicht verwenden.
   Das letzte ist ein `<input>`-Element vom Typ `text` zur Eingabe des Ablaufdatums der Karte; dies enthält ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [The HTML5 input types](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut vorgestellt.

   Geben Sie den folgenden Code unter den vorherigen Abschnitt ein:

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

7. Abschließend vervollständigen Sie Ihr Formular, indem Sie das äußere {{htmlelement("form")}}-Schließungstag hinzufügen:

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einen weiteren Test, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben jetzt das gesamte Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden in den nächsten Artikeln viele der hier eingeführten Funktionen behandeln, wobei der nächste Artikel genauer auf die Verwendung aller verschiedenen Arten von Formular-Widgets eingeht, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
