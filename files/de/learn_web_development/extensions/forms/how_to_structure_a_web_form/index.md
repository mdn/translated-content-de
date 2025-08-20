---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun die Elemente genauer betrachten, die verwendet werden, um Struktur und Bedeutung für die verschiedenen Teile eines Formulars bereitzustellen.

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

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von Grundformular mit speziellen Formularelementen und Attributen erstellen. Die richtige Strukturierung eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [barrierefrei](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen, indem Sie alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist streng verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Eine Verschachtelung kann dazu führen, dass Formulare unvorhersehbar reagieren, daher ist es keine gute Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular mittels seines [`form`]-Attributs (/de/docs/Web/HTML/Reference/Elements/input#form). Dies wurde eingeführt, damit Sie ein Element explizit mit einem Formular verknüpfen können, auch wenn es nicht in diesem verschachtelt ist.

Lassen Sie uns fortfahren und die strukturellen Elemente behandeln, die Sie in einem Formular verwenden werden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}}-Element beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unterhalb des öffnenden {{HTMLElement("fieldset")}}-Tags einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des enthaltenen {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Kontrollkästchens im entsprechenden {{HTMLElement("fieldset")}}-Element ist. Zum Beispiel sprechen einige Bildschirmlesegeräte wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie das Label jedes Kontrollkästchens sprechen.

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

Wenn ein Bildschirmlesegerät das obige Formular vorliest, wird es für das erste Widget "Fruchtsaftgröße klein" sagen, für das zweite "Fruchtsaftgröße mittel" und für das dritte "Fruchtsaftgröße groß".

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsschaltflächen haben, sollten Sie sie innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzelnen Seite bleiben muss, verbessert das Einlegen der verschiedenen zugehörigen Abschnitte in unterschiedliche Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Bau von zugänglichen Formularen; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Art, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – wenn es ordnungsgemäß implementiert ist, werden Bildschirmleser das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen vorlesen, und es ist auch für sehende Benutzer nützlich. Betrachten Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut (das das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verknüpft ist, wird ein Bildschirmleser etwas wie "Name, Edit Text" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verknüpfen – das Formularelement innerhalb des `<label>` verschachteln, es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen gilt es jedoch als Best Practice, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Bildschirmleser etwas wie "Bearbeite Text leer" vorlesen, was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich bei Steuerungselementen wie Texteingaben, bei denen Sie sowohl auf das Label als auch auf die Eingabe klicken können, um es zu fokussieren, doch es ist besonders nützlich bei Optionsfeldern und Kontrollkästchen – der Treiberbereich eines solchen Elements kann sehr klein sein, sodass es nützlich ist, ihn so einfach wie möglich zu aktivieren.

Wenn Sie beispielsweise auf den Text des Labels "Ich mag Kirschen" im folgenden Beispiel klicken, wird der ausgewählte Status der _taste_cherry_ Checkbox umgeschaltet:

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

### Mehrfachlabels

Streng genommen können Sie mehrere Labels auf einem einzigen Widget platzieren, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben können, sie zu handhaben. In Fällen von Mehrfachlabels sollten Sie ein Widget und seine Labels in einem einzigen {{htmlelement("label")}}-Element verschachteln.

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

Der Abschnitt am Anfang gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ ihrer Anwendung enthalten sein, damit sehende Benutzer und Benutzer unterstützender Technologien wie Bildschirmleser erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Obwohl es dem Benutzer hilft, zu verstehen, was ein Sternchen bedeutet, kann es nicht darauf verlassen werden. Ein Bildschirmleser wird ein Sternchen als "_Stern_" vorlesen, wenn es auftritt. Wenn sich ein sehender Mausbenutzer darüber bewegt, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Ob Titel vorgelesen werden, hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`]-Attribut (/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) zu verwenden, das immer von Screenreadern vorgelesen wird.

Die oben genannten Varianten nehmen in ihrer Effektivität zu, wenn Sie sie durchlaufen:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe vorgelesen – Sie erhalten nur "Edit Text leer", plus die eigentlichen Labels werden separat vorgelesen. Die mehreren `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer – das zusammen mit der Eingabe vorgelesene Label lautet "Name Stern Name Bearbeite Text erforderlich", und die Labels werden immer noch separat vorgelesen. Die Dinge sind immer noch ein wenig verwirrend, aber es ist diesmal etwas besser, weil das `<input>` ein mit ihm verknüpftes Label hat.
- Das dritte Beispiel ist das beste – das eigentliche Label wird insgesamt vorgelesen, und das zusammen mit der Eingabe vorgelesene Label lautet "Name erforderlich Bearbeite Text".

> [!NOTE]
> Sie erhalten möglicherweise leicht unterschiedliche Ergebnisse, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub unter [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 nicht auskommentierten Versionen – Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Allgemeine HTML-Strukturen, die mit Formularen verwendet werden

Abgesehen von den für Webformulare spezifischen Strukturen ist es gut zu beachten, dass die Markup von Formularen nur HTML ist. Das bedeutet, dass Sie die volle Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es üblicherweise Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsschaltflächen zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch üblich, HTML-Titel (z. B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittsbereiche (z. B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem ist es Ihre Aufgabe, einen komfortablen Codierstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Optionsschaltflächen zu enthalten.

### Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen – ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerungstypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden herausfinden, wie sie im nächsten Artikel ([Grundlegende native Formular-Steuerungselemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) funktionieren. Lesen Sie vorerst die Beschreibungen sorgfältig, während Sie die folgenden Anweisungen befolgen, und beginnen Sie zu verstehen, welche Umgeberelemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um den Benutzern zu informieren, wie erforderliche Felder markiert sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Abschnitt von Code in das Formular unter unserem vorherigen Eintrag. Hier sehen Sie, dass wir die Kontaktinformationsfelder in einem eigenen {{htmlelement("section")}}-Element umschließen. Außerdem haben wir eine Reihe von drei Optionsfeldern, von denen jedes in einem eigenen Listenelement ({{htmlelement("li")}}) platziert wird. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie eine Passwort-Eingabe für die Eingabe eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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
   Wir haben drei verschiedene Steuerungen zusammen mit ihren Labels, die jeweils in ein `<p>` eingeschlossen sind.
   Die erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Die zweite ist ein `<input>`-Element des Typs `tel` zur Eingabe einer Kreditkartennummer; während wir den `number`-Typ hätten verwenden können, möchten wir nicht die Spinner-Benutzeroberfläche der Nummer.
   Der letzte ist ein `<input>`-Element des Typs `text` zur Eingabe des Ablaufdatums der Karte; dies enthält ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das testet, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden erneut eingeführt in [Die HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

   Fügen Sie die folgenden Elemente unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit` zum Absenden der Formulardaten. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie das äußere schließende {{htmlelement("form")}}-Tag hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie haben jetzt alle Kenntnisse, die Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei sich der nächste Artikel detaillierter mit der Verwendung aller verschiedenen Arten von Steuerungselementen befasst, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
