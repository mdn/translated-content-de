---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem die Grundlagen behandelt wurden, schauen wir uns nun genauer die Elemente an, die verwendet werden, um Struktur und Bedeutung in die verschiedenen Teile eines Formulars zu bringen.

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

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und -attributen erstellen. Die Verwendung der korrekten Struktur beim Erstellen eines HTML-Formulars wird dazu beitragen, dass das Formular sowohl nutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Das haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren, daher ist es keine gute Idee.

Es ist jederzeit möglich, ein Formularsteuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular über sein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement ausdrücklich einem Formular zuzuordnen, selbst wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und die Strukturelemente abdecken, die Sie in einem Formular finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für stilistische als auch semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} durch Einschließen eines {{HTMLElement("legend")}}-Elements direkt unterhalb des Öffnen-Tags des {{HTMLElement("fieldset")}}-Elements beschriften. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des innerhalb enthaltenen {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es ein Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Zum Beispiel werden einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie das Label jedes Steuerelements sprechen.

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
> Sie können dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) finden ([auch live sehen](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Screenreader "Fruchtsaftgröße klein" für das erste Widget sprechen, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radiobuttons haben, sollten Sie sie innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt weitere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt sein, aber wenn ein Formular lang wird und auf einer einzigen Seite stehen muss, verbessert das Platzieren der verschiedenen zugehörigen Abschnitte in unterschiedlichen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretieren würde. Wenn es sich seltsam anhört, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Möglichkeit, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es korrekt implementiert ist, werden Screenreader ein Formularelement-Label zusammen mit allen zugehörigen Anweisungen sprechen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem korrekt mit dem `<input>`-Element über sein `for`-Attribut (das die `id` des `<input>`-Elements enthält) assoziierten `<label>`, wird ein Screenreader etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularsteuerelement mit einem Label zu assoziieren — das Formularsteuerelement innerhalb des `<label>` zu verschachteln, wodurch es implizit zugeordnet wird.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen gilt es jedoch als Best Practice, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder wenn das Formularsteuerelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Screenreader etwas wie "Text bearbeiten leer" vorlesen, was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil ordnungsgemäß eingerichteter Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie das Label sowie die Eingabe anklicken können, um es zu fokussieren. Besonders nützlich ist dies für Radiobuttons und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so leicht wie möglich zu aktivieren.

Zum Beispiel wird durch Klicken auf den Text "Ich mag Kirsche" im folgenden Beispiel der ausgewählte Zustand des Kontrollkästchens _taste_cherry_ umgeschaltet:

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
> Sie können dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) finden ([auch live sehen](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Genau genommen können Sie einem einzelnen Widget mehrere Labels zuweisen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben können, sie zu verarbeiten. Im Fall von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben legt eine Regel für erforderliche Elemente fest. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehende Benutzer und Benutzer von unterstützenden Technologien wie Screenreadern lernen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies hilft, Benutzer darüber zu informieren, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Screenreader wird bei der Begegnung ein Sternchen als "_Stern_" vorlesen. Wenn es von einem sehenden Mausbenutzer überfahren wird, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Dass Titel vorgelesen werden, hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das von Screenreadern immer vorgelesen wird.

Die obigen Varianten nehmen in ihrer Wirksamkeit zu, wenn Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen — Sie erhalten nur "Text bearbeiten leer", außerdem werden die eigentlichen Labels separat vorgelesen. Die mehrfachen `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer — das mit der Eingabe vorgelesene Label ist "Name Stern Name Text bearbeiten erforderlich", und die Labels werden immer noch separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist dieses Mal ein bisschen besser, weil das `<input>`-Element ein zugeordnetes Label hat.
- Das dritte Beispiel ist am besten — das eigentliche Label wird komplett zusammen vorgelesen, und das mit der Eingabe vorgelesene Label ist "Name erforderlich Text bearbeiten".

> [!NOTE]
> Sie könnten leicht abweichende Ergebnisse erzielen, je nach Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden gerne auch von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([auch live sehen](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der nicht auskommentierten Versionen — Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit der gleichen ID haben!

## Häufige HTML-Strukturen, die mit Formularen verwendet werden

Über die speziell für Webformulare spezifischen Strukturen hinaus, ist es gut zu bedenken, dass Formular-Markup nur HTML ist. Das bedeutet, dass Sie die gesamte Kraft von HTML nutzen können, um ein Webformular zu strukturieren.

Wie in den Beispielen zu sehen ist, ist es übliche Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. Auch {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Radiobuttons zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, die Radiobuttons enthalten.

### Aktives Lernen: Erstellen einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas umfangreicheres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Anzahl von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Keine Sorge, Sie werden in dem nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) herausfinden, wie sie funktionieren. Für jetzt lesen Sie die Beschreibungen sorgfältig, während Sie den folgenden Anweisungen folgen, und beginnen Sie damit, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie im `<form>`-Element eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unter unserer vorherigen Eingabe. Hier sehen Sie, dass wir die Kontaktdatenfelder in ein separates {{htmlelement("section")}}-Element einbetten. Darüber hinaus haben wir eine Gruppe von drei Radiobuttons, von denen wir jeden in ein eigenes Listen-({{htmlelement("li")}})-Element einfügen. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, und ein Passwort-Input zur Eingabe eines Passworts. Fügen Sie diesen Code Ihrem Formular hinzu:

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
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labeln, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; während wir den `number`-Typ hätten verwenden können, möchten wir die Drehsteuerung für Zahlen nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies beinhaltet ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das testet, dass das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Fügen Sie Folgendes unter dem vorherigen Abschnitt ein:

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

7. Abschließend schließen Sie Ihr Formular mit dem äußeren schließenden {{htmlelement("form")}}-Tag ab:

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

Wir haben etwas zusätzliches CSS auf das fertige Formular angewendet. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare korrekt zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei sich der nächste Artikel eingehender mit der Verwendung aller verschiedenen Arten von Formular-Widgets befasst, die Sie verwenden möchten, um Informationen von Ihren Nutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

### Erweiterte Themen

- [How to build custom form controls](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
