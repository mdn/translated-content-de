---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 1ff044ac87e406eb23ae7181dd171bad87421b79
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Mit den Grundlagen aus dem Weg, betrachten wir nun die Elemente im Detail, die verwendet werden, um Struktur und Bedeutung für die verschiedenen Teile eines Formulars zu schaffen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes <a href="/de/docs/Learn_web_development/Core/Structuring_content">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, wie HTML-Formulare strukturiert werden und ihnen Semantik gegeben wird, sodass sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und Attributen erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert ein Formular formell und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele assistive Technologien und Browser-Plug-Ins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strikt verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass sich Formulare unvorhersehbar verhalten, daher ist es keine gute Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit irgendeinem Formular zu tun, es sei denn, Sie verbinden es mit einem Formular über sein [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und die Strukturelemente behandeln, die Sie in einem Formular finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl aus stilistischen als auch semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} durch ein {{HTMLElement("legend")}}-Element kennzeichnen, das direkt unterhalb des öffnenden {{HTMLElement("fieldset")}}-Tags eingefügt wird. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele assistive Technologien verwenden das {{HTMLElement("legend")}}-Element so, als wäre es Teil des Labels jedes Steuerungselements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Beispielsweise sprechen einige Bildschirmlesegeräte wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie das Label jedes Steuerelements sprechen.

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
> Sie finden dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([Siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des oben gezeigten Formulars wird ein Bildschirmleser "Fruit juice size small" für das erste Widget sprechen, "Fruit juice size medium" für das zweite und "Fruit juice size large" für das dritte.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite bleiben muss, verbessert das Setzen der verschiedenen verwandten Abschnitte in verschiedenen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf assistive Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, wenn Sie ein Formular erstellen, versuchen Sie zu [hören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Methode, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, sprechen Bildschirmlesegeräte das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt mit dem `<input>` über sein `for`-Attribut verbunden ist (welches das `id`-Attribut des `<input>`-Elements enthält), wird ein Bildschirmleser etwas wie "Name, edit text" lesen.

Es gibt eine andere Methode, ein Formularelement mit einem Label zu verbinden — das Formularelement innerhalb des `<label>` zu verschachteln und damit implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen wird jedoch best practice empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle assistiven Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder das Formularelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Bildschirmleser etwas wie "Edit text blank" lesen, was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, wo Sie sowohl auf das Label als auch auf die Eingabe klicken können, um es zu fokussieren. Es ist besonders nützlich für Optionsfelder und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, ihn so einfach wie möglich zu aktivieren.

Zum Beispiel, wenn Sie auf den Text des Labels "I like cherry" im folgenden Beispiel klicken, wird der ausgewählte Zustand des _taste_cherry_ Kontrollkästchens geändert:

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
> Sie finden dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([Siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber dies ist keine gute Idee, da einige assistive Technologien damit Probleme haben können. Im Falle von mehreren Labels sollten Sie ein Widget und seine Labels in einem einzigen {{htmlelement("label")}}-Element verschachteln.

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

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehbehinderte und benutzer von assistiven Technologien wie Bildschirmlesegeräten lernen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft, zu verstehen, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Bildschirmleser spricht ein Sternchen als "_star_", wenn es begegnet wird. Wenn es von einem sehenden Mausbenutzer überflogen wird, sollte "_required_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Bildschirmlesers ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut hinzuzufügen, das von Bildschirmlesegeräten immer vorgelesen wird.

Die oben genannten Varianten nehmen an Effektivität zu, je nachdem, welche Sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen — Sie bekommen nur "edit text blank", und die eigentlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel sind die Dinge etwas klarer — das mit der Eingabe vorgelesene Label ist "name star name edit text required", und die Labels werden immer noch separat vorgelesen. Die Dinge sind noch etwas verwirrend, aber es ist etwas besser, denn das `<input>` hat ein damit verbundenes Label.
- Das dritte Beispiel ist das beste — das eigentliche Label wird zusammen vorgelesen, und das mit der Eingabe vorgelesene Label ist "name required edit text".

> [!NOTE]
> Sie erhalten möglicherweise leicht unterschiedliche Ergebnisse, abhängig von Ihrem Bildschirmleser. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([Siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen auskommentiert — Bildschirmlesegeräte werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Abgesehen von den spezifischen Strukturen für Webformulare ist es gut, sich daran zu erinnern, dass Formular-Markup nur HTML ist. Dies bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen bequemen Codierungsstil zu finden, der zu zugänglichen und benutzbaren Formularen führt. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Optionsfelder zu enthalten.

### Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas aufwendigeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden in den nächsten Artikeln herausfinden, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie die Beschreibungen sorgfältig, während Sie die folgenden Anweisungen befolgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren und warum.

1. Beginnen Sie damit, eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer zu erstellen.

2. Erstellen Sie anschließend Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Als Nächstes fügen wir einen größeren Abschnitt mit Code in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder in einem eigenen {{htmlelement("section")}}-Element umschließen. Darüber hinaus haben wir eine Gruppe von drei Optionsfeldern, von denen wir jedes in ein eigenes Listen-({{htmlelement("li")}})-Element setzen. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, und eine Passwort-Eingabe für das Eingeben eines Passworts. Fügen Sie diesen Code Ihrem Formular hinzu:

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
   Wir haben drei separate Steuerelemente zusammen mit ihren Labels, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element des Typs `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ hätten verwenden können, wollen wir nicht die Nummernspinnenelement-Benutzeroberfläche.
   Das letzte ist ein `<input>`-Element des Typs `text`, um das Ablaufdatum der Karte einzugeben; dies beinhaltet ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie das Folgende unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher und enthält nur einen {{htmlelement("button")}}-Element des Typs `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie schließlich Ihr Formular ab, indem Sie das äußere {{htmlelement("form")}}-Schließungstag hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder besuchen Sie [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie haben jetzt alle Kenntnisse, die Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel näher darauf eingeht, wie die verschiedenen Formulartypen verwendet werden, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
