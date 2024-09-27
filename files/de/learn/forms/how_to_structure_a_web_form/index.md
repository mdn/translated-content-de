---
title: Wie man ein Webformular strukturiert
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 200866e39b81948187e35865fe0a82a4545d1a1e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Nachdem wir nun die Grundlagen behandelt haben, werden wir uns nun genauer mit den Elementen befassen, die zur Bereitstellung von Struktur und Bedeutung für die verschiedenen Teile eines Formulars verwendet werden.

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
        Um zu verstehen, wie HTML-Formulare strukturiert werden und ihnen Semantik zu verleihen, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn/HTML); Sie können jede Art von grundlegenden Formularen mit speziellen Formularelementen und Attributen erstellen. Die korrekte Strukturierung eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn/Accessibility) ist.

## Das `<form>`-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Dies haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Die Verschachtelung kann dazu führen, dass sich Formulare unvorhersehbar verhalten, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularsteuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mithilfe seines [`form`](/de/docs/Web/HTML/Element/input#form)-Attributs mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Steuerelement explizit mit einem Formular zu verknüpfen, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns fortfahren und die Strukturelemente behandeln, die Sie in einem Formular verschachtelt finden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl aus stilistischen als auch aus semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} durch Einschließen eines {{HTMLElement("legend")}}-Elements direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag beschriften. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als wäre es Teil der Beschriftung jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Zum Beispiel werden einige Bildschirmleseprogramme wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie die Beschriftung jedes Steuerelements sprechen.

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

Beim Lesen des obigen Formulars wird ein Bildschirmleseprogramm für das erste Widget "Fruchtsaftgröße klein", für das zweite "Fruchtsaftgröße mittel" und für das dritte "Fruchtsaftgröße groß" sprechen.

Das Anwendungsbeispiel in diesem Beispiel ist eines der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie sie in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in verschiedene Fieldsets die Benutzerfreundlichkeit.

Wegen seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmlesegerät](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das `<label>`-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, um eine Beschriftung für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — bei ordnungsgemäßer Implementierung werden Bildschirmleseprogramme zusammen mit allen zugehörigen Anweisungen sowie für sehende Benutzer die Beschriftung eines Formularelements sprechen. Nehmen Sie zum Beispiel dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit der `<label>`, die korrekt mit der `<input>` über ihr `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) verknüpft ist, wird ein Bildschirmleser etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularsteuerelement mit einer Beschriftung zu verknüpfen — das Steuerelement innerhalb des `<label>`-Elementes zu verschachteln, um es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird jedoch empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Beschriftung und Widget verstehen.

Wenn keine Beschriftung vorhanden ist oder wenn das Formularsteuerelement weder implizit noch explizit mit einer Beschriftung verknüpft ist, wird ein Bildschirmleseprogramm etwas wie "Edit text blank" lesen, was überhaupt nicht sehr hilfreich ist.

### Beschriftungen sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Beschriftungen ist, dass Sie auf die Beschriftung klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie sowohl auf die Beschriftung als auch auf die Eingabe klicken können, um den Fokus darauf zu setzen, es ist jedoch besonders nützlich für Optionsfelder und Kontrollkästchen — der Zielbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, ihn so einfach wie möglich zu aktivieren.

Beispielsweise wird durch Klicken auf den Text der Beschriftung "Ich mag Kirschen" im folgenden Beispiel der ausgewählte Zustand des _taste_cherry_ Kontrollkästchens umgeschaltet:

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

Streng genommen können Sie mehrere Beschriftungen auf einem einzigen Widget platzieren, aber dies ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten bei deren Handhabung haben können. Im Fall von mehreren Beschriftungen sollten Sie ein Widget und seine Beschriftungen in einem einzigen {{htmlelement("label")}}-Element verschachteln.

Lassen Sie uns dieses Beispiel betrachten:

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

Der Absatz am Anfang beschreibt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sowohl sehende Benutzer als auch Benutzer von Hilfstechnologien wie Bildschirmleseprogrammen verstehen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann es nicht immer darauf verlassen werden. Ein Bildschirmleseprogramm wird ein Sternchen als "_Stern_" vorlesen, wenn es darauf trifft. Beim Überfahren mit einer sehenden Mausbenutzerin sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Bildschirmleseprogramms ab, daher ist es sinnvoller, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut einzuschließen, das von Bildschirmleseprogrammen immer vorgelesen wird.

Die obigen Varianten steigen in ihrer Effektivität wie folgt:

- Im ersten Beispiel wird die Beschriftung überhaupt nicht mit der Eingabe vorgelesen — Sie erhalten lediglich "edit text blank", und die tatsächlichen Beschriftungen werden separat vorgelesen. Die Mehrfachbeschriftungen verwirren das Bildschirmlesegerät.
- Im zweiten Beispiel wird es etwas klarer — die Beschriftung, die zusammen mit der Eingabe vorgelesen wird, ist "name star name edit text required", und die Beschriftungen werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil die `<input>` eine damit verknüpfte Beschriftung hat.
- Das dritte Beispiel ist am besten — die tatsächliche Beschriftung wird zusammenhängend vorgelesen und die Beschriftung, die zusammen mit der Eingabe vorgelesen wird, ist "name required edit text".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, abhängig von Ihrem Bildschirmleser. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne über Ihre Erfahrungen hören.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie nicht das Beispiel mit 2 oder 3 der Versionen, die nicht auskommentiert sind — Bildschirmleseprogramme werden definitiv verwirrt, wenn Sie mehrere Beschriftungen UND mehrere Eingaben mit derselben ID haben!

## Gemeinsame HTML-Strukturen, die mit Formularen verwendet werden

Jenseits der spezifisch für Webformulare verwendeten Strukturen ist es gut zu bedenken, dass Formularkennzeichnung einfach HTML ist. Dies bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, eine Beschriftung und ihr Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}}-Liste zu umwickeln. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden für die Strukturierung mehrerer Kontrollkästchen oder Optionsfelder empfohlen.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und die Abschnittsunterteilung (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Insgesamt liegt es an Ihnen, einen komfortablen Codierstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Optionsfelder zu enthalten.

### Aktives Lernen: Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular enthält eine Reihe von Steuerelementtypen, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber vorerst keine Sorgen; Sie werden in dem nächsten Artikel erfahren, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)). Lesen Sie vorerst die Beschreibungen sorgfältig durch, während Sie die folgenden Anweisungen befolgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie anschließend Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Als nächstes fügen wir einen größeren Abschnitt von Code in das Formular ein, unter unserer vorherigen Einfügung. Hier sehen Sie, dass wir die Kontaktinformationsfelder in ein getrenntes {{htmlelement("section")}}-Element einschließen. Außerdem haben wir eine Gruppe von drei Optionsfeldern, von denen wir jedes in ein eigenes Listen-({{htmlelement("li")}})-Element einsetzen. Wir haben auch zwei Standardtext-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in ein {{htmlelement("p")}} eingeschlossen sind, und eine Passwort-Eingabe für die Passworteingabe. Fügen Sie diesen Code in Ihr Formular ein:

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

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformationen.
   Wir haben drei verschiedene Steuerelemente zusammen mit ihren Beschriftungen, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>` mit dem Typ `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den `number`-Typ verwenden könnten, wollen wir die Spinner-UI der Nummer nicht.
   Der letzte ist ein `<input>` mit dem Typ `text`, um das Ablaufdatum der Karte einzugeben; dies enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [The HTML5 input types](/de/docs/Learn/Forms/HTML5_input_types) wieder eingeführt.

   Geben Sie das Folgende unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu senden. Fügen Sie dies nun an das Ende Ihres Formulars ein:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie den äußeren schließenden Tag {{htmlelement("form")}} hinzufügen:

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

Wir haben dem untenstehenden fertigen Formular einige zusätzliche CSS-Stile hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare korrekt zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln abdecken, wobei der nächste Artikel detaillierter darauf eingehen wird, wie Sie all die verschiedenen Arten von Formular-Widgets verwenden können, die Sie benötigen, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Steuerelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
