---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, schauen wir uns nun detaillierter die Elemente an, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

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
        Zu verstehen, wie HTML-Formulare strukturiert werden und wie ihnen Semantik gegeben wird, damit sie nutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von grundlegenden Formularen mit speziellen Formularelementen und -attributen erstellen. Die Verwendung der richtigen Struktur beim Erstellen eines HTML-Formulars trägt dazu bei, dass das Formular sowohl nutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element starten und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, um sie benutzerfreundlicher zu machen.

Wir sind diesem bereits im vorherigen Artikel begegnet.

> [!WARNING]
> Es ist strengstens verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Eine Verschachtelung kann dazu führen, dass Formulare unvorhersehbar reagieren, weshalb dies keine gute Idee ist.

Es ist immer möglich, ein Formularsteuerelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, wird das Steuerelement standardmäßig mit keinem Formular in Verbindung gebracht, es sei denn, Sie verknüpfen es mit einem Formular durch sein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut. Dies wurde eingeführt, um Ihnen die Möglichkeit zu geben, ein Steuerelement explizit mit einem Formular zu verbinden, selbst wenn es nicht darin verschachtelt ist.

Lassen Sie uns weitergehen und die Strukturelemente behandeln, die Sie in einem Formular verschachtelt finden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, für stilistische und semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}}-Element beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in dem es enthalten ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es ein Teil des Labels jedes Steuerelements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Beispielsweise werden einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende aussprechen, bevor sie das Label jedes Steuerelements aussprechen.

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

Beim Lesen des obigen Formulars wird ein Screenreader "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte sprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Radiobuttons haben, sollten Sie diese innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt sein, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Platzieren der verschiedenen zugehörigen Abschnitte innerhalb verschiedener Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen von zugänglichen Formularen; jedoch liegt es in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es ordnungsgemäß implementiert ist, sprechen Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen aus, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` korrekt mit dem `<input>` über sein `for`-Attribut (das den `id`-Attribut des `<input>`-Elements enthält) verknüpft ist, wird ein Screenreader etwas wie "Name, Bearbeitungstext" vorlesen.

Es gibt eine andere Möglichkeit, ein Formularsteuerelement mit einem Label zu verknüpfen — das Formularsteuerelement innerhalb des `<label>` zu verschachteln und es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen gilt jedoch als Best Practice, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularsteuerelement weder implizit noch explizit mit einem Label verknüpft ist, wird ein Screenreader etwas wie "Bearbeitungstext leer" vorlesen, was nicht sehr hilfreich ist.

### Labels sind ebenfalls klickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingaben, bei denen Sie auf das Label sowie auf die Eingabe klicken können, um es zu fokussieren, aber es ist besonders nützlich für Radiobuttons und Kontrollkästchen — die Trefferfläche eines solchen Steuerelements kann sehr klein sein, daher ist es hilfreich, es so einfach wie möglich zu aktivieren.

Wenn Sie zum Beispiel auf den Text des Labels "I like cherry" im folgenden Beispiel klicken, wird der ausgewählte Zustand des _taste_cherry_ Kontrollkästchens umgeschaltet:

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

Streng genommen können Sie mehreren Labels für ein einzelnes Widget hinzufügen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten damit haben. Bei mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

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

Der Absatz oben legt eine Regel für erforderliche Elemente fest. Die Regel muss _vor_ ihrer Verwendung inkludiert werden, damit sehende Benutzer und Benutzer unterstützender Technologien wie Screenreader erfahren, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies den Benutzern hilft zu verstehen, was ein Sternchen bedeutet, kann darauf nicht vollständig vertraut werden. Ein Screenreader wird ein Sternchen als "_Stern_" aussprechen, wenn er darauf stößt. Wenn ein sehender Benutzer mit der Maus darüber fährt, sollte "_erforderlich_" angezeigt werden, was durch Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut zu verwenden, das immer von Screenreadern vorgelesen wird.

Die oben genannten Varianten nehmen in ihrer Effektivität zu, wenn Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht zusammen mit der Eingabe vorgelesen — Sie hören nur "Bearbeitungstext leer", wobei die tatsächlichen Labels separat vorgelesen werden. Die mehrere `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge etwas klarer — das Label, das zusammen mit der Eingabe vorgelesen wird, ist "Name Stern Name Bearbeitungstext erforderlich", und die Labels werden immer noch separat vorgelesen. Es ist immer noch etwas verwirrend, aber es ist diesmal etwas besser, weil das `<input>`-Element ein zugeordnetes Label hat.
- Das dritte Beispiel ist am besten — das tatsächliche Label wird vollständig zusammenhängend vorgelesen, und das Label, das zusammen mit der Eingabe vorgelesen wird, ist "Name erforderlich Bearbeitungstext".

> [!NOTE]
> Sie könnten leicht unterschiedliche Ergebnisse erhalten, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden gerne Ihre Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub als [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([auch live sehen](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen auskommentiert — Screenreader werden definitiv verwirrt sein, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Häufig verwendete HTML-Strukturen mit Formularen

Abgesehen von den speziell für Webformulare vorgesehenen Strukturen ist es gut zu bedenken, dass das Formular-Markup nur HTML ist. Das bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umgeben. {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Radiobuttons zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Unterteilung (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der in zugänglichen, benutzbaren Formularen resultiert. Jede separate Funktionssektion sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Radiobuttons zu enthalten.

### Aktives Lernen: eine Formularstruktur erstellen

Lasst uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Anzahl von Kontrolltypen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie werden in dem nächsten Artikel herausfinden, wie sie funktionieren ([Basiskontrollen für Formulare](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)). Lesen Sie vorerst die Beschreibungen sorgfältig, während Sie den folgenden Anweisungen folgen, und beginnen Sie, ein Gespür dafür zu entwickeln, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um Benutzer darauf hinzuweisen, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als Nächstes fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationen in einem eigenständigen {{htmlelement("section")}}-Element umschließen. Außerdem haben wir eine Gruppe von drei Radiobuttons, von denen jeder in einem eigenen Listenelement ({{htmlelement("li")}}) platziert ist. Wir haben auch zwei Standardtexteingaben {{htmlelement("input")}}s und deren zugehörige {{htmlelement("label")}}-Elemente, jeweils in einem {{htmlelement("p")}} enthalten, und eine Passwort-Eingabe zum Eingeben eines Passworts. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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

5. Der zweite `<section>`-Abschnitt unseres Formulars enthält die Zahlungsinformationen. Wir haben drei separate Steuerelemente zusammen mit ihren Labels, jeweils in einem `<p>` enthalten. Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps. Das zweite ist ein `<input>`-Element vom Typ `tel`, zum Eingeben einer Kreditkartennummer; obwohl wir den `number`-Typ verwenden könnten, möchten wir die Spinn-Benutzeroberfläche nicht. Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; es enthält ein _placeholder_-Attribut zur Anzeige des korrekten Formats und ein _pattern_, das prüft, ob das eingegebene Datum das korrekte Format hat. Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) wieder eingeführt.

Fügen Sie den folgenden Code unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher, er enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt unten an Ihrem Formular hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie Ihr Formular schließlich mit dem schließenden {{htmlelement("form")}}-Tag ab:

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

Wir haben dem untenstehenden fertigen Formular einige zusätzliche CSS hinzugefügt. Wenn Sie Änderungen am Aussehen Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie verfügen nun über das notwendige Wissen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier vorgestellten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel ausführlicher auf die Verwendung aller verschiedenen Arten von Formular-Widgets eingeht, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
