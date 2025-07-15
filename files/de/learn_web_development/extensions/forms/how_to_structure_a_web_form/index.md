---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun die Elemente genauer betrachten, die zur Strukturierung und Bedeutungsgebung der verschiedenen Teile eines Formulars verwendet werden.

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
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, sodass sie nutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und Attributen erstellen. Die Verwendung der richtigen Strukturierung beim Erstellen eines HTML-Formulars trägt dazu bei, dass das Formular sowohl nutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um ihre Nutzung zu erleichtern.

Wir haben dieses bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelungen können dazu führen, dass sich Formulare unvorhersehbar verhalten, daher ist es keine gute Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verbinden es mit einem Formular, indem Sie dessen [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut verwenden. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns nun die strukturellen Elemente behandeln, die Sie in ein Formular verschachteln.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} kennzeichnen, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Beispielsweise sprechen einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie das Label jedes Steuerelements sprechen.

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

Beim Lesen des obigen Formulars wird ein Bildschirmleser "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte sprechen.

Das Anwendungsszenario in diesem Beispiel ist eines der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie sie in ein {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu gliedern. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang ist und auf einer einzigen Seite bleiben muss, verbessert das Verschachteln der verschiedenen verwandten Abschnitte in verschiedenen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zuzuhören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, wird ein Bildschirmleser das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen sprechen; zudem ist es auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` korrekt über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verbunden ist, wird ein Bildschirmleser so etwas wie "Name, Text bearbeiten" aussprechen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen — verschachteln Sie das Formularelement innerhalb des `<label>`, um es implizit zuzuordnen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird es jedoch als Best Practice angesehen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder wenn das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmleser so etwas wie "Text bearbeiten leer" sprechen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist für Steuerelemente wie Texteingaben nützlich, bei denen Sie sowohl auf das Label als auch auf die Eingabe klicken können, um es zu fokussieren, aber es ist besonders nützlich für Optionsfelder und Kontrollkästchen — die Trefferfläche eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird das Klicken auf den Text des "Ich mag Kirsch"-Labels im folgenden Beispiel den ausgewählten Zustand des Kontrollkästchens _taste_cherry_ umschalten:

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

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben können, sie zu verarbeiten. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels in einem einzigen {{htmlelement("label")}}-Element verschachteln.

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

Der Absatz oben erklärt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung eingefügt werden, damit sehende Benutzer und Benutzer von unterstützenden Technologien wie Bildschirmlesern erfahren, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Obwohl dies Benutzern hilft, zu verstehen, was ein Sternchen bedeutet, kann es nicht als zuverlässig betrachtet werden. Ein Bildschirmleser wird ein Sternchen als "_Stern_" aussprechen, wenn es erscheint. Wenn ein sehender Benutzer mit der Maus darüber fährt, sollte "_erforderlich_" angezeigt werden, was durch die Verwendung des `title`-Attributs erreicht wird. Die Lautstärkeeinstellungen beeinflussen, ob Titel von Bildschirmlesern vorgelesen werden, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das immer von Bildschirmlesern vorgelesen wird.

Die obigen Varianten steigen in ihrer Effektivität, während Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen — Sie erhalten nur "Text bearbeiten leer", zudem werden die tatsächlichen Labels separat vorgelesen. Die mehrfachen `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel sind die Dinge etwas klarer — zusammen mit der Eingabe wird das Label als "name star name text bearbeiten erforderlich" vorgelesen, und die Labels werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber es ist diesmal ein bisschen besser, weil das `<input>` ein damit verknüpftes Label hat.
- Das dritte Beispiel ist das beste — das eigentliche Label wird vollständig vorgelesen, und das Label zusammen mit der Eingabe lautet "name erforderlich text bearbeiten".

> [!NOTE]
> Möglicherweise erhalten Sie leicht unterschiedliche Ergebnisse, abhängig von Ihrem Bildschirmleser. Dies wurde mit VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden uns auch über Ihre Erfahrungen freuen.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen auskommentiert — Bildschirmleser werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Allgemeine HTML-Strukturen, die mit Formularen verwendet werden

Abgesehen von den für Webformulare spezifischen Strukturen ist es gut, sich daran zu erinnern, dass Formular-Markup nur HTML ist. Das bedeutet, dass Sie die volle Leistung von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es übliche Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umwickeln. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden für die Strukturierung mehrerer Kontrollkästchen oder Optionsfelder empfohlen.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch übliche Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittsstrukturen (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der zu zugänglichen, nutzbaren Formularen führt. Jeder separate Abschnitt der Funktionalität sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen zum Enthalten von Optionsfeldern.

### Struktur eines Formulars erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas aufwändigeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Keine Sorge darüber; Sie werden in dem nächsten Artikel herausfinden, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie vorerst die Beschreibungen sorgfältig, während Sie die nachstehenden Anweisungen befolgen, und beginnen Sie zu verstehen, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um Benutzer darüber zu informieren, wie Pflichtfelder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Abschnitt von Code in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktdatenfelder innerhalb eines getrennten {{htmlelement("section")}}-Elements umwickeln. Darüber hinaus haben wir eine Gruppe von drei Optionsfeldern, von denen wir jedes in einem eigenen Listenelement ({{htmlelement("li")}}) umwickeln. Wir haben auch zwei Standardtext-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie ein Passwort-Eingabefeld zum Eingeben eines Passworts. Fügen Sie diesen Code Ihrem Formular hinzu:

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

5. Der zweite `<section>` unseres Formulars betrifft die Zahlungsinformationen.
   Wir haben drei unterschiedliche Steuerelemente zusammen mit ihren Labels, jedes in einem `<p>` enthalten.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ hätten verwenden können, wollen wir die Spinner-Benutzeroberfläche der Nummer nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) neu eingeführt.

   Geben Sie das Folgende unterhalb des vorhergehenden Abschnitts ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt unten in Ihrem Formular hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie das äußere {{htmlelement("form")}}-Abschlusselement hinzufügen:

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

Wir haben unten einige zusätzliche CSS-Stile auf das fertige Formular angewendet. Wenn Sie das Erscheinungsbild Ihres Formulars ändern möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie verfügen jetzt über das Wissen, das Sie benötigen, um Ihre Webformulare richtig zu strukturieren. In den nächsten Artikeln werden wir viele der hier eingeführten Funktionen behandeln, wobei der nächste Artikel einen genaueren Blick auf die Verwendung aller verschiedenen Arten von Formularelementen wirft, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Vernünftige Formulare: Eine Checkliste zur Formular-Benutzerfreundlichkeit_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
