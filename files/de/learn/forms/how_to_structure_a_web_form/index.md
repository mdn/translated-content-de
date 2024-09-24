---
title: Wie Sie ein Webformular strukturieren
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 200866e39b81948187e35865fe0a82a4545d1a1e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Nachdem wir die Grundlagen behandelt haben, schauen wir uns nun die Elemente genauer an, die verwendet werden, um den unterschiedlichen Teilen eines Formulars Struktur und Bedeutung zu geben.

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

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn/HTML); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und -attributen erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars hilft sicherzustellen, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Wir haben dies bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist streng verboten, ein Formular in ein anderes Formular zu verschachteln. Eine Verschachtelung kann dazu führen, dass Formulare unberechenbar reagieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es mit einem Formular, indem Sie sein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut verwenden. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verknüpfen, auch wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und die Strukturelemente behandeln, die Sie in einem Formular verschachtelt vorfinden werden.

## Die \<fieldset>- und \<legend>-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine praktische Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl aus stilistischen als auch aus semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Beispielsweise lesen einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende vor dem Label jedes Steuerelements vor.

Hier ein kleines Beispiel:

```html
<form>
  <fieldset>
    <legend>Fruchtsaftgröße</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Klein</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Mittel</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Groß</label>
    </p>
  </fieldset>
</form>
```

> [!NOTE]
> Sie finden dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Screenreader "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte aussprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radio-Buttons haben, sollten Sie diese in ein {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch zur Unterteilung eines Formulars verwendet werden. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und auf einer einzelnen Seite bleiben muss, verbessert das Setzen der verschiedenen zusammengehörenden Abschnitte in verschiedene Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Bau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, sollten Sie jedes Mal, wenn Sie ein Formular erstellen, [mithören, wie ein Screenreader](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, ein Label für ein HTML-Formularelement zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten – wenn es richtig umgesetzt wird, wird ein Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen aussprechen, ebenso wie es für sehende Benutzer nützlich ist. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem korrekt zugeordneten `<label>`-Element zum `<input>`-Element über sein `for`-Attribut (das die `id`-Attribut des `<input>`-Elements enthält), wird ein Screenreader etwa "Name, Text bearbeiten" aussprechen.

Es gibt noch einen anderen Weg, ein Formularelement mit einem Label zu verknüpfen – das Formularelement innerhalb des `<label>`-Elements zu verschachteln, es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen gilt es jedoch als beste Praxis, das `for`-Attribut festzulegen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Screenreader etwas wie "Text bearbeiten leer" auslesen, was überhaupt nicht hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil von richtig eingerichteten Labels ist, dass Sie das Label anklicken oder antippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie das Label ebenso wie die Eingabe anklicken können, um es zu fokussieren, aber es ist besonders nützlich für Radio-Buttons und Kontrollkästchen – der Bereich solcher Steuerelemente kann sehr klein sein, also ist es hilfreich, es so einfach wie möglich zu aktivieren.

Z.B., beim Anklicken des "Ich mag Kirsche"-Labeltextes im folgenden Beispiel schaltet den ausgewählten Zustand des Kontrollkästchens für _taste_cherry_ um:

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">Ich mag Kirsche</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">Ich mag Banane</label>
  </p>
</form>
```

> [!NOTE]
> Sie finden dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf einem Widget anbringen, aber das ist keine gute Idee, da einige unterstützende Technologien damit Probleme haben können. Im Falle von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

Lassen Sie uns dieses Beispiel betrachten:

```html
<p>Pflichtfelder sind mit <span aria-label="required">*</span> gekennzeichnet.</p>

<!-- Also so: -->
<!--div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required>
  <label for="username"><span aria-label="required">*</label>
</div-->

<!-- wäre besser so: -->
<!--div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required>
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- Aber dies ist wahrscheinlich am besten: -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz am Anfang gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ ihrer Verwendung enthalten sein, damit sehende Benutzer und Benutzer unterstützender Technologien wie Bildschirmlesegeräte erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft, zu verstehen, was ein Sternchen bedeutet, kann nicht darauf vertraut werden. Ein Screenreader wird ein Sternchen als "_Stern_" aussprechen, wenn es ihm begegnet. Wenn es von einem sehenden Mausbenutzer darüber gefahren wird, sollte "_erforderlich_" erscheinen, was durch die Verwendung des `title`-Attributs erreicht wird. Das laute Vorlesen von Titeln hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) zu verwenden, das immer von Screenreadern gelesen wird.

Die obigen Varianten nehmen an Effektivität zu, wenn Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe vorgelesen – Sie erhalten nur "Text bearbeiten leer", und die tatsächlichen Labels werden separat vorgelesen. Die mehrfachen `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer – das mit der Eingabe vorgelesene Label ist "Name Stern Name Text bearbeiten erforderlich", und die Labels werden immer noch separat vorgelesen. Die Dinge sind immer noch etwas verwirrend, aber es ist diesmal ein bisschen besser, da die `<input>`-Eingabe ein Label hat, das ihr zugeordnet ist.
- Das dritte Beispiel ist am besten – das tatsächliche Label wird vollständig zusammen vorgelesen, und das mit der Eingabe vorgelesene Label ist "Name erforderlich Text bearbeiten".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie finden dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die nicht auskommentiert sind – Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels **und** mehrere Eingaben mit derselben ID haben!

## Allgemeine HTML-Strukturen, die mit Formularen verwendet werden

Jenseits der für Webformulare spezifischen Strukturen ist es gut, sich daran zu erinnern, dass Formular-Markup einfach nur HTML ist. Dies bedeutet, dass Sie die gesamte Kraft von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es üblich, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umgeben. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Radio-Buttons zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch üblich, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittselemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem ist es Ihnen überlassen, einen bequemen Kodierstil zu finden, der in zugänglichen und benutzerfreundlichen Formularen resultiert. Jeder separate Abschnitt der Funktionalität sollte in einem eigenen {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Radio-Buttons zu enthalten.

### Aktives Lernen: eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas umfangreicheres Formular erstellen – ein Zahlungsformular. Dieses Formular wird eine Reihe von Steuerelementtypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber keine Sorgen; im nächsten Artikel ([Grundlegende native Formularsteuerelemente](/de/docs/Learn/Forms/Basic_native_form_controls)) erfahren Sie, wie sie funktionieren. Lesen Sie vorerst die Beschreibungen sorgfältig, während Sie die untenstehenden Anweisungen befolgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Wrapper-Elemente wir zur Strukturierung des Formulars verwenden und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie Pflichtfelder gekennzeichnet sind:

   ```html-nolint
   <h1>Zahlungsformular</h1>
   <p>
     Pflichtfelder sind markiert mit
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes werden wir einen größeren Abschnitt von Code in das Formular einfügen, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationsfelder innerhalb eines eigenen {{htmlelement("section")}}-Elements einschließen. Zudem haben wir eine Gruppe von drei Radio-Buttons, die wir jeweils in ein eigenes Listenelement ({{htmlelement("li")}}) setzen. Wir haben auch zwei Standardtext-{{htmlelement("input")}}-Elemente und deren zugehörige {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie eine Passwort-Eingabe zur Passworteingabe. Fügen Sie diesen Code in Ihr Formular ein:

   ```html
   <section>
     <h2>Kontaktinformation</h2>
     <fieldset>
       <legend>Titel</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="A" />
             Ass
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="K" />
             König
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="Q" />
             Dame
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
         <span>Passwort: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. Der zweite `<section>` unseres Formulars beinhaltet die Zahlungsinformationen. Wir haben drei verschiedene Steuerelemente zusammen mit ihren Labels, die jeweils in einem `<p>` enthalten sind. Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}), um den Kreditkartentyp auszuwählen. Das zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; während wir den Typ `number` hätten verwenden können, möchten wir das Spinner-UI der Zahl nicht haben. Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies beinhaltet ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_-Attribut, das prüft, ob das eingegebene Datum das korrekte Format hat. Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types) wiedereingeführt.

   Geben Sie den folgenden Code unterhalb des vorherigen Abschnitts ein:

   ```html
   <section>
     <h2>Zahlungsinformationen</h2>
     <p>
       <label for="card">
         <span>Kartentyp:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Kartennummer:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" required />
     </p>
     <p>
       <label for="expiration">
         <span>Ablaufdatum:</span>
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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält lediglich einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu senden. Fügen Sie diesen jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Zahlung validieren</button>
     </p>
   </section>
   ```

7. Schließlich vervollständigen Sie Ihr Formular, indem Sie das äußere {{htmlelement("form")}}-Schließtag hinzufügen:

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

Wir haben dem fertigen Formular unten einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen am Erscheinungsbild Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen weiteren Test finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben nun alles Wissen, das Sie benötigen, um Ihre Webformulare ordnungsgemäß zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei sich der nächste Artikel detaillierter mit der Verwendung aller unterschiedlichen Arten von Formular-Widgets befasst, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Kompatibilitätstabelle der Eigenschaften für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
