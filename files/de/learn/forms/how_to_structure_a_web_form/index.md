---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 200866e39b81948187e35865fe0a82a4545d1a1e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun detaillierter auf die Elemente eingehen, die zur Strukturierung und Bedeutung der verschiedenen Teile eines Formulars verwendet werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn/HTML); Sie können mit speziellen Formularelementen und -attributen jede Art von grundlegendem Formular erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars trägt dazu bei, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn/Accessibility) ist.

## Das `<form>`-Element

Das {{HTMLElement("form")}}-Element definiert ein Formular und Attribute, die das Verhalten des Formulars bestimmen, formell. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie dies mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Dies haben wir bereits im vorherigen Artikel getroffen.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular einzuschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar reagieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mithilfe seines [`form`](/de/docs/Web/HTML/Element/input#form)-Attributs mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verknüpfen, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns voranschreiten und die Strukturelemente abdecken, die Sie in einem Formular verschachtelt finden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl für Styling- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} kennzeichnen, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag platzieren. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des {{HTMLElement("fieldset")}}, in dem er enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als wäre es Teil der Bezeichnung jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Zum Beispiel sprechen einige Bildschirmleser wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie die Bezeichnung jedes Steuerelements sprechen.

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

Beim Lesen des obigen Formulars wird ein Bildschirmleser "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte ausgeben.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch dazu verwendet werden, ein Formular zu gliedern. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf eine einzige Seite muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in verschiedene Fieldsets die Benutzerfreundlichkeit.

Wegen seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, sollten Sie jedes Mal, wenn Sie ein Formular erstellen, [hören, wie ein Bildschirmleser es interpretiert](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers). Wenn es sich seltsam anhört, versuchen Sie, die Formularstruktur zu verbessern.

## Das `<label>`-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Möglichkeit, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – wenn es ordnungsgemäß implementiert wird, sprechen Bildschirmleser die Beschriftung eines Formularelements zusammen mit allen zugehörigen Anweisungen, was auch für sehende Benutzer nützlich ist. Nehmen Sie dieses Beispiel, welches wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem korrekt über sein `for`-Attribut (welches das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verbundenen `<label>`, wird ein Bildschirmleser etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen – das Formularelement innerhalb des `<label>` zu verschachteln, was es implizit verknüpft.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen gilt es jedoch als Best Practice, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmleser etwas wie "Text bearbeiten leer" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie das Label anklicken oder antippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie sowohl auf das Label als auch auf das Eingabefeld klicken können, um es zu fokussieren, aber es ist besonders nützlich für Optionsfelder und Kontrollkästchen — die Trefffläche eines solchen Steuerelements kann sehr klein sein, also ist es sinnvoll, die Aktivierung so einfach wie möglich zu gestalten.

Beispielsweise wird das Klicken auf den Labeltext "Ich mag Kirsche" im folgenden Beispiel den ausgewählten Zustand des _taste_cherry_ Kontrollkästchens umschalten:

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

Streng genommen können Sie mehrere Labels auf ein einziges Widget setzen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten bei der Handhabung haben können. Bei mehreren Labels sollten Sie ein Widget und dessen Labels in ein einzelnes {{htmlelement("label")}}-Element verschachteln.

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

Der Absatz oben stellt eine Regel für erforderliche Elemente auf. Die Regel muss _vor_ ihrer Anwendung enthalten sein, damit sehende Benutzer und Benutzer von unterstützenden Technologien wie Bildschirmlesern erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Bildschirmleser spricht ein Sternchen als "_Stern_" aus, wenn es auftritt. Wenn es von einem sehenden Mausbenutzer angesteuert wird, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Lesen von Titeln hängt von den Einstellungen des Bildschirmlesers ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut einzuschließen, das von Bildschirmlesern immer vorgelesen wird.

Die oben genannten Varianten nehmen an Wirksamkeit zu, wenn Sie sie durchgehen:

- Im ersten Beispiel wird das Label mit der Eingabe überhaupt nicht vorgelesen — Sie hören nur "Text bearbeiten leer", und die eigentlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Bildschirmleser.
- Im zweiten Beispiel sind die Dinge etwas klarer — das zusammen mit der Eingabe vorgelesene Label ist "name stern name text bearbeiten erforderlich", und die Labels werden immer noch separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil das `<input>` ein assoziiertes Label hat.
- Das dritte Beispiel ist am besten — das eigentliche Label wird zusammenhängend vorgelesen, und das zusammen mit der Eingabe vorgelesene Label ist "name erforderlich text bearbeiten".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, abhängig von Ihrem Bildschirmleser. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden uns über Ihre Erfahrungen freuen.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die auskommentiert sind — Bildschirmleser werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Über die speziell für Webformulare entwickelten Strukturen hinaus ist es gut zu bedenken, dass Formular-Markup nur HTML ist. Dies bedeutet, dass Sie die ganze Macht von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und dessen Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Gliederungen (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in ein separates {{htmlelement("section")}}-Element eingebunden werden, mit {{htmlelement("fieldset")}}-Elementen, um Optionsfelder zu enthalten.

### Aktives Lernen: Struktur eines Formulars erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber vorerst keine Sorgen; Sie erfahren, wie sie funktionieren, im nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)). Lesen Sie die Beschreibungen aufmerksam, während Sie den untenstehenden Anweisungen folgen, und beginnen Sie zu verstehen, welche Wrapper-Elemente wir zur Strukturierung des Formulars verwenden und warum.

1. Beginnen Sie damit, eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer zu erstellen.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Als nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb des vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements einrahmen. Zudem haben wir eine Gruppe von drei Optionsfeldern, von denen jedes in einem eigenen Listenelement ({{htmlelement("li")}}) platziert wird. Außerdem haben wir zwei Standard-Text-{{htmlelement("input")}}-Felder und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in eine {{htmlelement("p")}} eingebettet sind, sowie eine Passworteingabe zum Eingeben eines Passworts. Fügen Sie diesen Code in Ihr Formular ein:

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
       <input type="email" id="mail" name="usermail" required />
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
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labels, jeweils in ein `<p>` eingeschlossen.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ hätten verwenden können, wollen wir die Spinner-Benutzeroberfläche der Zahl nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dieses enthält ein _placeholder_-Attribut, das das richtige Format angibt, sowie ein _pattern_, das prüft, ob das eingegebene Datum das richtige Format aufweist.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types) erneut vorgestellt.

   Geben Sie den folgenden Code unterhalb des vorherigen Abschnitts ein:

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="usercard">
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
       <input type="tel" id="number" name="cardnumber" required />
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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies nun am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie das äußere {{htmlelement("form")}}-Schluss-Tag hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS-Stile hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Formularstruktur](/de/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel näher darauf eingeht, wie Sie die verschiedenen Formularelementtypen verwenden können, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung von benutzerdefinierten Formularelementen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript versenden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätsübersicht für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
