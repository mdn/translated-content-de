---
title: Wie man ein Webformular strukturiert
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem die Grundlagen geklärt sind, schauen wir uns nun genauer die Elemente an, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

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
        Zu verstehen, wie HTML-Formulare strukturiert werden und ihnen Semantik gegeben wird, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jedes beliebige grundlegende Formular mit dedizierten Formularelementen und Attributen erstellen. Wenn Sie beim Erstellen eines HTML-Formulars die richtige Struktur verwenden, stellen Sie sicher, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formell ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie es mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Hooks implementieren, die sie leichter benutzbar machen.

Dies haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Verschachtelungen können dazu führen, dass Formulare unvorhersehbar agieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Kontrollkästchen standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es über sein [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut mit einem Formular. Dies wurde eingeführt, um Ihnen die Möglichkeit zu geben, ein Kontrollelement explizit mit einem Formular zu verknüpfen, auch wenn es nicht darin verschachtelt ist.

Lasst uns fortfahren und die strukturellen Elemente behandeln, die Sie innerhalb eines Formulars verschachtelt finden.

## Die \<fieldset>- und \<legend>-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unterhalb des öffnenden {{HTMLElement("fieldset")}}-Tags einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des darin enthaltenen {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als wäre es ein Teil der Bezeichnung jedes Steuerungselements innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements. Zum Beispiel werden einige Bildschirmlesegeräte wie [Jaws](https://vispero.com/jaws-screen-reader-software/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende sprechen, bevor sie die Bezeichnung jedes Steuerungselements aussprechen.

Hier ist ein Beispiel:

```html live-sample___fieldset-legend
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

Dies wird wie folgt dargestellt:

{{embedlivesample("fieldset-legend", "100%", 200)}}

Wenn das obige Formular gelesen wird, wird ein Bildschirmlesegerät "Fruchtsaftgröße klein" für das erste Optionsfeld aussprechen, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte.

Jedes Mal, wenn Sie eine Gruppe von Optionsfeldern haben, sollten Sie diese innerhalb eines {{HTMLElement("fieldset")}}-Elements verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare über mehrere Seiten verteilt werden, aber wenn ein Formular lang wird und sich auf einer einzigen Seite befinden muss, verbessert das Platzieren der verschiedenen verwandten Abschnitte in verschiedenen Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologien ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Aufbau zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zuzuhören, wie ein Bildschirmlesegerät](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formelle Weg, einen Beschriftungstext für ein HTML-Formularelement zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, werden Bildschirmleser den Beschriftungstext eines Formularelements zusammen mit allen zugehörigen Anweisungen sprechen, und es ist auch für sehende Benutzer nützlich. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut (welches das `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verbunden ist, wird ein Bildschirmleser etwas wie "Name, Bearbeitungstext" ausgeben.

Es gibt einen anderen Weg, um ein Formularelement mit einem Beschriftungstext zu verknüpfen — das Formularelement innerhalb des `<label>`-Elements zu verschachteln und es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in solchen Fällen wird jedoch empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Beschriftung und Widget verstehen.

Wenn es keine Beschriftung gibt oder wenn das Formularelement weder implizit noch explizit mit einer Beschriftung verknüpft ist, wird ein Bildschirmleser etwas wie "Bearbeitungstext leer" ausgeben, was überhaupt nicht sehr hilfreich ist.

### Beschriftungen sind ebenfalls anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Beschriftungen ist, dass Sie die Beschriftung anklicken oder antippen können, um das entsprechende Widget zu aktivieren. Dies ist nützlich für Steuerungselemente wie Texteingaben, bei denen Sie sowohl die Beschriftung als auch die Eingabe anklicken können, um sie zu fokussieren. Besonders nützlich ist dies jedoch bei Optionsfeldern und Kontrollkästchen — der Bereich eines solchen Steuerungselements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Wenn Sie beispielsweise auf den Text der Beschriftung "Ich mag Kirsche" im folgenden Beispiel klicken, wird der ausgewählte Zustand des Kontrollkästchens _taste_cherry_ umgeschaltet:

```html live-sample___checkbox-label
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

Probieren Sie es aus:

{{embedlivesample("checkbox-label", "100%", 100)}}

### Mehrere Beschriftungen

Streng genommen können Sie einem einzigen Widget mehrere Beschriftungen zuweisen, aber das ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten damit haben können. Im Falle mehrerer Beschriftungen sollten Sie ein Widget und seine Beschriftungen innerhalb eines einzigen {{htmlelement("label")}}-Elements verschachteln.

Betrachten Sie dieses Beispiel:

```html
<p>Please complete all required (*) fields.</p>

<!-- So this: -->
<!--<div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required />
  <label for="username">*</label>
</div>-->

<!-- would be better done like this: -->
<!--<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required />
    <span>*</span>
  </label>
</div>-->

<!-- But this is probably best: -->
<div>
  <label for="username">Name *:</label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _bevor_ sie verwendet wird enthalten sein, sodass sehende Benutzer und Benutzer von unterstützenden Technologien (AT) wie Bildschirmlesegeräten erfahren können, was sie bedeutet, bevor sie ein erforderliches Element begegnen.

## Häufige HTML-Strukturen, die mit Formularen verwendet werden

Abgesehen von den für Webformulare spezifischen Strukturen ist es gut, sich daran zu erinnern, dass Formular-Markup nur HTML ist. Das bedeutet, dass Sie die gesamte Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, eine Beschriftung und ihr Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste zu umschließen. Auch {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Überschriften (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnitts-Elemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Kodierungsstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen zur Aufnahme von Optionsfeldern.

### Eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird einige Steuerungstypen enthalten, die Ihnen möglicherweise noch unbekannt sind. Machen Sie sich darüber keine Gedanken; Sie werden in dem nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) erfahren, wie sie funktionieren. Für jetzt lesen Sie die Beschreibungen sorgfältig durch, während Sie den unten stehenden Anweisungen folgen, und beginnen Sie, ein Verständnis dafür zu entwickeln, welche Umgebungs-Elemente wir zur Strukturierung des Formulars verwenden und warum.

1. Erstellen Sie zunächst eine lokale Kopie unserer [leeren Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als Nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie Pflichtfelder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>Please complete all required (*) fields.</p>
   ```

4. Nun fügen wir einen größeren Codeabschnitt in das Formular ein, unterhalb unseres vorherigen Eintrags. Hier sehen Sie, dass wir die Kontaktinformationen innerhalb eines eigenen {{htmlelement("section")}}-Elements umschließen. Außerdem haben wir eine Gruppe von drei Optionsfeldern, von denen jedes in einem eigenen Listen-({{htmlelement("li")}})-Element platziert ist. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie eine Passworteingabe für das Eingeben eines Passworts. Fügen Sie diesen Code Ihrem Formular hinzu:

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
       <label for="name">Name *:</label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">Email *:</label>
       <input type="email" id="mail" name="user-mail" required />
     </p>
     <p>
       <label for="pwd">Password *:</label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. Der zweite `<section>`-Teil unseres Formulars beinhaltet die Zahlungsinformationen.
   Wir haben drei separate Steuerelemente zusammen mit ihren Beschriftungen, die jeweils in einem `<p>` enthalten sind.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element des Typs `tel`, um eine Kreditkartennummer einzugeben; obwohl wir den Typ `number` verwenden könnten, wollen wir die Spinner-Oberfläche für Zahlen vermeiden.
   Das letzte ist ein `<input>`-Element des Typs `text`, um das Ablaufdatum der Karte einzugeben; es enthält ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das prüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden im Artikel [Die Input-Typen in HTML5](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut vorgestellt.

   Geben Sie das Folgende unterhalb des vorherigen Abschnitts ein:

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
       <label for="number">Card number *:</label>
       <input type="tel" id="number" name="card-number" required />
     </p>
     <p>
       <label for="expiration">Expiration date *:</label>
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

6. Der letzte Abschnitt, den wir hinzufügen, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie Ihr Formular schließlich ab, indem Sie das äußere {{htmlelement("form")}}-Schlusszeichen hinzufügen:

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

Wir haben einige zusätzliche CSS zu dem fertigen Formular unten hinzugefügt. Wenn Sie Änderungen am Aussehen Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie haben nun alles Wissen, das Sie benötigen, um Ihre Webformulare korrekt zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, und der nächste Artikel wird sich genauer mit der Verwendung all der verschiedenen Formular-Widgets befassen, die Sie für die Erfassung von Informationen von Ihren Benutzern verwenden möchten.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
