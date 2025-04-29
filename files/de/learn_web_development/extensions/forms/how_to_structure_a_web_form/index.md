---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun mehr im Detail auf die Elemente eingehen, die dazu verwendet werden, Struktur und Bedeutung für die verschiedenen Teile eines Formulars bereitzustellen.

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
        Das Verständnis, wie HTML-Formulare strukturiert werden und ihnen Semantik verliehen wird, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Grundformular mit speziellen Formularelementen und Attributen erstellen. Die korrekte Strukturierung beim Erstellen eines HTML-Formulars trägt dazu bei, sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert förmlich ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen, indem Sie alle Inhalte darin verschachteln. Viele assistierende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um die Nutzung zu erleichtern.

Wir haben dies bereits im vorherigen Artikel getroffen.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Eine Verschachtelung kann dazu führen, dass Formulare sich unvorhersehbar verhalten, daher ist es keine gute Idee.

Man kann immer ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular durch sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verbinden, selbst wenn es nicht innerhalb desselben verschachtelt ist.

Lassen Sie uns fortfahren und die Strukturelemente behandeln, die Sie in einem Formular verschachtelt finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für Styling- als auch semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unterhalb des öffnenden {{HTMLElement("fieldset")}}-Tags einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt förmlich den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele assistierende Technologien verwenden das {{HTMLElement("legend")}}-Element so, als ob es ein Teil der Beschriftung jedes Steuerungselements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Zum Beispiel werden einige Bildschirmlesegeräte wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende aussprechen, bevor sie die Beschriftung jedes Formularsteuerelements aussprechen.

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

Beim Lesen des obigen Formulars wird ein Bildschirmlesegerät "Fruchtsaftgröße klein" für das erste Widget sprechen, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt weitere Anwendungsfälle, und generell kann das {{HTMLElement("fieldset")}}-Element auch zur Abschnittsunterteilung eines Formulars verwendet werden. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in unterschiedliche `fieldsets` die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmleser es interpretiert](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formelle Weg, um ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – bei korrekter Implementierung sprechen Bildschirmleser das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen, was auch für sehende Benutzer nützlich ist. Sehen Sie sich dieses Beispiel an, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` korrekt über sein `for`-Attribut (welches das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verbunden ist, wird ein Bildschirmlesegerät etwas wie "Name, Bearbeitungstext" vorlesen.

Es gibt einen weiteren Weg, um ein Formularelement mit einem Label zu verbinden – verschachteln Sie das Formularelement innerhalb des `<label>`, um es implizit zu verbinden.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Aber auch in solchen Fällen gilt es als Best Practice, das `for`-Attribut zu setzen, um sicherzustellen, dass alle assistierenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder das Formularelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Bildschirmlesegerät etwas wie "Bearbeitungstext leer" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerungselemente wie Texteingaben, bei denen Sie sowohl auf das Label als auch auf die Eingabe klicken können, um sie zu fokussieren; es ist jedoch besonders nützlich für Optionsfelder und Markierungsfelder – der Trefferbereich eines solchen Steuerungselements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird das Klicken auf den Labeltext "Ich mag Kirsche" im folgenden Beispiel den ausgewählten Zustand des _Geschmack_Kirsche_ Kontrollkästchens umschalten:

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

Genau genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige assistierende Technologien Schwierigkeiten haben können, damit umzugehen. Im Fall von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

Betrachten Sie dieses Beispiel:

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

Der Absatz oben stellt eine Regel für erforderliche Elemente dar. Die Regel muss _vor_ der Verwendung enthalten sein, damit sehende Benutzer und Benutzer von assistierenden Technologien wie Bildschirmlesegeräten wissen, was es bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft, zu verstehen, was ein Asterisk bedeutet, kann man sich darauf nicht verlassen. Ein Bildschirmlesegerät spricht einen Asterisk als "_Stern_" aus, wenn er entdeckt wird. Wenn man mit der Maus eines sehenden Benutzers darüber schwebt, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Bildschirmlesegeräts ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das von Bildschirmlesegeräten immer vorgelesen wird.

Die oben genannten Varianten nehmen an Effektivität zu, je weiter Sie damit gehen:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe vorgelesen - Sie erhalten nur "Bearbeitungstext leer", dazu werden die tatsächlichen Labels separat vorgelesen. Die mehreren `<label>`-Elemente verwirren das Bildschirmlesegerät.
- Im zweiten Beispiel sind die Dinge etwas klarer – das vorgelesene Label zusammen mit der Eingabe ist "name star name edit text required", und die Labels werden immer noch separat vorgelesen. Die Situation ist immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil das `<input>` ein damit verbundenes Label hat.
- Das dritte Beispiel ist am besten – das echte Label wird komplett vorgelesen, und das zusammen mit der Eingabe vorgelesene Label ist "name required edit text".

> [!NOTE]
> Möglicherweise erzielen Sie leicht unterschiedliche Ergebnisse, abhängig von Ihrem Bildschirmlesegerät. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden gerne von Ihren Erfahrungen erfahren.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen ohne Kommentierung - Bildschirmlesegeräte werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen in Formularen

Über die formularspezifischen Strukturen hinaus ist es gut zu wissen, dass Formular-Markup einfach HTML ist. Das bedeutet, dass Sie die volle Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}} und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Sektionierung (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jeder separate Funktionsbereich sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen zur Aufnahme von Optionsfeldern.

### Aktives Lernen: eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen – ein Zahlungsformular. Dieses Formular wird eine Anzahl von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden in dem nächsten Artikel herausfinden, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie für den Moment die Beschreibungen sorgfältig, während Sie den untenstehenden Anweisungen folgen, und beginnen Sie zu schätzen, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Als Nächstes erstellen Sie Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Nun fügen wir einen größeren Abschnitt von Code in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines separaten {{htmlelement("section")}}-Elements umschließen. Zudem haben wir eine Gruppe von drei Optionsfeldern, von denen jedes in einem eigenen Listen-({{htmlelement("li")}})-Element untergebracht ist. Wir haben auch zwei Standardtexteingaben({{htmlelement("input")}}s) und ihre zugehörigen {{htmlelement("label")}}-Elemente, jeweils in einem {{htmlelement("p")}} enthalten, und eine Passworteingabe zum Passwort eingeben. Fügen Sie diesen Code Ihrem Formular hinzu:

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
   Wir haben drei separate Steuerungselemente zusammen mit ihren Labels, jeweils in einem `<p>` enthalten.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zum Auswählen des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element des Typs `tel`, um eine Kreditkartennummer einzugeben; während wir den Typ `number` hätten verwenden können, möchten wir nicht die Spinner-Benutzeroberfläche für die Nummer.
   Das letzte ist ein `<input>`-Element des Typs `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) wieder eingeführt.

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist wesentlich einfacher, enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten abzusenden. Fügen Sie dies nun am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich schließen Sie Ihr Formular ab, indem Sie das äußere {{htmlelement("form")}}-Schluss-Tag hinzufügen:

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

Wir haben dem unten abgeschlossenen Formular ein bisschen extra CSS zugewiesen. Wenn Sie das Erscheinungsbild Ihres Formulars ändern möchten, können Sie die Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder besuchen Sie [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_structure).

## Zusammenfassung

Sie haben nun das gesamte Wissen, das Sie benötigen, um Ihre Webformulare ordnungsgemäß zu strukturieren. In den nächsten Artikeln werden wir viele der hier eingeführten Funktionen behandeln, wobei der nächste Artikel detaillierter auf die Verwendung aller verschiedenen Arten von Formular-Widgets eingeht, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
