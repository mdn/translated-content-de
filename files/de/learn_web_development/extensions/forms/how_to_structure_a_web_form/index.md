---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 43d1415a869172848ded687e861432e1628ac6ee
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen geklärt haben, schauen wir uns nun die Elemente genauer an, die zur Strukturierung und Bedeutung der verschiedenen Teile eines Formulars verwendet werden.

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
        Zu verstehen, wie man HTML-Formulare strukturiert und ihnen Semantik verleiht, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit dedizierten Formularelementen und Attributen erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Wir haben dies bereits im vorherigen Artikel getroffen.

> [!WARNING]
> Es ist strikt verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass sich Formulare unvorhersehbar verhalten, daher ist dies eine schlechte Idee.

Es ist immer möglich, ein Steuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Steuerelement standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular, indem Sie sein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) Attribut verwenden. Dies wurde eingeführt, um ein Steuerelement explizit mit einem Formular zu verbinden, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns fortfahren und die Strukturelemente behandeln, die Sie in ein Formular verschachtelt finden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck erfüllen, sowohl aus stilistischen als auch aus semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}}-Element kennzeichnen, indem Sie direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag ein {{HTMLElement("legend")}}-Element einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des beinhalteten {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es ein Teil der Beschriftung jedes Steuerelements im entsprechenden {{HTMLElement("fieldset")}}-Element wäre. Zum Beispiel werden einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie die Beschriftung jedes Steuerelements aussprechen.

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
> Sie können dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Screenreader "Fruit juice size small" für das erste Widget sprechen, "Fruit juice size medium" für das zweite und "Fruit juice size large" für das dritte.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radiobuttons haben, sollten Sie sie in ein {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt auch andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Ideal wäre es, lange Formulare über mehrere Seiten zu verteilen, aber wenn ein Formular lang wird und auf einer einzigen Seite bleiben muss, erhöht das Platzieren der verschiedenen zugehörigen Abschnitte in unterschiedlichen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Aufbau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Methode, um eine Beschriftung für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es ordnungsgemäß implementiert ist, werden Screenreader sowohl die Beschriftung eines Formularelements als auch alle zugehörigen Anweisungen aussprechen, was auch für sehende Benutzer nützlich ist. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut (das die `id`-Eigenschaft des `<input>`-Elements enthält) mit dem `<input>` verbunden ist, wird ein Screenreader etwas wie "Name, edit text" lesen.

Es gibt eine weitere Möglichkeit, ein Formular-Steuerelement mit einer Beschriftung zu verknüpfen — indem man das Steuerelement innerhalb des `<label>` verschachtelt, wird es implizit zugeordnet.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen gilt es jedoch als beste Praxis, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Beschriftung und Widget verstehen.

Ohne eine Beschriftung oder wenn das Formular-Steuerelement weder implizit noch explizit mit einer Beschriftung verbunden ist, wird ein Screenreader so etwas wie "Edit text blank" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch klickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie das Label anklicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist besonders nützlich für Steuerelemente wie Texteingaben, bei denen Sie sowohl das Label als auch die Eingabe anklicken können, um den Fokus darauf zu setzen. Besonders nützlich ist es jedoch für Radiobuttons und Checkboxen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Beispielsweise wird durch Klicken auf den "I like cherry"-Beschriftungstext im untenstehenden Beispiel der ausgewählte Zustand der _taste_cherry_ Checkbox umgeschaltet:

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
> Sie können dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, doch dies ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten damit haben können. Im Falle mehrerer Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben beschreibt eine Regel für erforderliche Elemente. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehende Benutzer und Benutzer unterstützender Technologien wie Screenreader erfahren, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann es nicht vollständig darauf vertraut werden. Ein Screenreader wird ein Sternchen als "_Stern_" vorlesen, wenn es darauf stößt. Wenn es von einem sehenden Mausklick-Benutzer überfahren wird, sollte "_erforderlich_" erscheinen, was durch das Verwenden des `title`-Attributs erreicht wird. Das Vorlesen der Titel hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das von Screenreadern stets vorgelesen wird.

Die oben genannten Varianten erhöhen ihre Effektivität, je weiter man geht:

- Im ersten Beispiel wird die Beschriftung überhaupt nicht mit der Eingabe vorgelesen — man erhält nur "edit text blank", und die tatsächlichen Beschriftungen werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel ist es etwas klarer — die Beschriftung, die zusammen mit der Eingabe gelesen wird, ist "name star name edit text required", und die Beschriftungen werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber diesmal etwas besser, weil das `<input>` eine damit verbundene Beschriftung hat.
- Das dritte Beispiel ist am besten — die eigentliche Beschriftung wird im Ganzen vorgelesen, und die Beschriftung, die zusammen mit der Eingabe gelesen wird, ist "name required edit text".

> [!NOTE]
> Sie erhalten möglicherweise leicht abweichende Ergebnisse, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit zwei oder drei der Versionen, die nicht auskommentiert sind — Screenreader werden definitiv verwirrt, wenn Sie mehrere Beschriftungen UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Neben den speziell für Webformulare vorgesehenen Strukturen ist es gut zu bedenken, dass Formulare-Markup nur HTML ist. Dies bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, eine Beschriftung und ihr Widget mit einem {{HTMLElement("li")}}-Element in einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}} Liste zu umschließen. Auch {{HTMLElement("p")}} und {{HTMLElement("div")}}-Elemente werden häufig verwendet. Listen werden empfohlen, um mehrere Checkboxen oder Radiobuttons zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen angenehmen Codierungsstil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen für Radiobuttons.

### Aktives Lernen: Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht genau verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden herausfinden, wie sie im nächsten Artikel funktionieren ([Grundlegende native Formulareinträge](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie zunächst die Beschreibungen sorgfältig durch, während Sie die folgenden Anweisungen befolgen, und beginnen Sie, eine Wertschätzung dafür zu entwickeln, welche wrapper-Elemente wir verwenden, um das Formular zu strukturieren und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

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

4. Als nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unter unserem vorherigen Eintrag. Hier werden Sie sehen, dass wir die Kontaktinformationsfelder in ein deutliches {{htmlelement("section")}}-Element einfügen. Darüber hinaus haben wir ein Satz von drei Radiobuttons, von denen jeder in einem eigenen Listenelement ({{htmlelement("li")}}) eingefügt ist. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}-Elemente und ihre zugehörigen {{htmlelement("label")}}-Elemente, von denen jedes in einem {{htmlelement("p")}} enthalten ist, sowie ein Passwort-Eingabefeld zum Eingeben eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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

5. Der zweite `<section>` unseres Formulars behandelt die Zahlungsinformationen.
   Wir haben drei unterschiedliche Steuerelemente zusammen mit ihren Beschriftungen, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; während wir den `number`-Typ hätten verwenden können, möchten wir nicht das UI des Nummernspinners.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dieses enthält ein _placeholder_ Attribut, das das korrekte Format anzeigt, und ein _pattern_, das überprüft, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) wieder eingeführt.

   Geben Sie das folgende unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies nun unten in Ihr Formular ein:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich schließen Sie Ihr Formular ab, indem Sie das abschließende {{htmlelement("form")}}-Tag einfügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS-Stile hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling web forms](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure", "100%", 620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_structure).

## Zusammenfassung

Sie verfügen nun über alle Kenntnisse, die Sie benötigen, um Ihre Webformulare ordnungsgemäß zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei sich der nächste Artikel detaillierter mit der Verwendung all der verschiedenen Formularelementtypen befasst, die Sie zum Sammeln von Informationen von Ihren Benutzern verwenden möchten.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
