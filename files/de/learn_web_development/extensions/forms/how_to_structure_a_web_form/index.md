---
title: Anleitung zur Strukturierung eines Webformulars
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem die Grundlagen abgehandelt sind, schauen wir uns nun die Elemente genauer an, die Struktur und Bedeutung zu den verschiedenen Teilen eines Formulars verleihen.

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
        Zu verstehen, wie HTML-Formulare strukturiert und mit Semantik versehen werden, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content); Sie können jede Art von einfachem Formular mit speziellen Formularelementen und -attributen erstellen. Die richtige Strukturierung eines HTML-Formulars stellt sicher, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente erkennen und spezielle Hooks implementieren, um die Benutzung zu erleichtern.

Dies haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist strengstens verboten, ein Formular in ein anderes Formular zu verschachteln. Verschachtelung kann dazu führen, dass Formulare unvorhersehbar funktionieren, daher ist es eine schlechte Idee.

Es ist immer möglich, ein Formularelement außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat dieses Element standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie verknüpfen es über das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut mit einem Formular. Dies wurde eingeführt, um Ihnen zu ermöglichen, ein Element explizit mit einem Formular zu verknüpfen, selbst wenn es nicht darin verschachtelt ist.

Lassen Sie uns fortfahren und die Strukturelemente abdecken, die Sie in einem Formular finden werden.

## Die `<fieldset>` und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck haben, sowohl für Stil- als auch für semantische Zwecke. Sie können ein {{HTMLElement("fieldset")}} mit einem {{HTMLElement("legend")}}-Element beschriften, das direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag eingefügt wird. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formal den Zweck des {{HTMLElement("fieldset")}}, in das es eingefügt ist.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als wäre es ein Teil des Labels jedes Steuerelements im entsprechenden {{HTMLElement("fieldset")}}-Element. Zum Beispiel werden einige Screenreader wie [Jaws](https://vispero.com/jaws-screen-reader-software/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende vor dem Label jedes Steuerelements aussprechen.

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
> Sie können dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars wird ein Screenreader "Fruchtsaftgröße klein" für das erste Widget, "Fruchtsaftgröße mittel" für das zweite und "Fruchtsaftgröße groß" für das dritte aussprechen.

Der Anwendungsfall in diesem Beispiel ist einer der wichtigsten. Jedes Mal, wenn Sie eine Reihe von Optionsfeldern haben, sollten Sie diese in ein {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu gliedern. Idealerweise sollten lange Formulare auf mehrere Seiten verteilt werden, aber wenn ein Formular lang ist und auf einer einzigen Seite bleiben muss, verbessert das Einfügen der verschiedenen verwandten Abschnitte in unterschiedliche fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente für den Bau zugänglicher Formulare; es ist jedoch Ihre Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular bauen, [zu hören, wie ein Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das \<label>-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element die formale Methode, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — wenn es richtig implementiert ist, sprechen Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen, was auch für sehende Benutzer nützlich ist. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt mit dem `<input>` über sein `for`-Attribut (das die `id`-Attribut des `<input>`-Elements enthält) verbunden ist, wird ein Screenreader etwas wie "Name, Textfeld bearbeiten" aussprechen.

Es gibt eine andere Möglichkeit, ein Formularelement mit einem Label zu verbinden: Platzieren Sie das Formularelement innerhalb des `<label>`, um es implizit zu verknüpfen.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen wird es jedoch als beste Praxis angesehen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Beziehung zwischen Label und Widget verstehen.

Wenn es kein Label gibt oder wenn das Formularelement weder implizit noch explizit mit einem Label verbunden ist, wird ein Screenreader etwas wie "Text bearbeiten leer" aussprechen, was nicht sehr hilfreich ist.

### Labels sind ebenfalls anklickbar!

Ein weiterer Vorteil von korrekt eingerichteten Labels ist, dass Sie auf das Label klicken oder tippen können, um das dazugehörige Widget zu aktivieren. Dies ist nützlich für Steuerelemente wie Texteingabefelder, bei denen Sie sowohl auf das Label als auch auf das Eingabefeld klicken können, um es zu fokussieren. Es ist jedoch besonders nützlich für Optionsfelder und Kontrollkästchen — der Trefferbereich eines solchen Steuerelements kann sehr klein sein, daher ist es nützlich, es so einfach wie möglich zu aktivieren.

Beispielsweise schaltet das Klicken auf den "Ich mag Kirsche"-Labeltext im folgenden Beispiel den ausgewählten Zustand des _taste_cherry_-Kontrollkästchens um:

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
> Sie können dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Streng genommen können Sie mehrere Labels auf ein einzelnes Widget legen, aber dies ist keine gute Idee, da einige unterstützende Technologien Schwierigkeiten haben können, damit umzugehen. Im Fall von mehreren Labels sollten Sie ein Widget und seine Labels in einem einzigen {{htmlelement("label")}}-Element verschachteln.

Betrachten wir dieses Beispiel:

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

Der Absatz oben gibt eine Regel für erforderliche Elemente an. Die Regel muss _vor_ ihrer Verwendung eingefügt werden, damit sehende Benutzer und Benutzer von unterstützenden Technologien (AT) wie Screenreadern erfahren können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen.

## Häufig verwendete HTML-Strukturen mit Formularen

Abgesehen von den speziell für Webformulare entwickelten Strukturen ist es gut, sich daran zu erinnern, dass das Formular-Markup nur HTML ist. Das bedeutet, dass Sie die volle Leistungsfähigkeit von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}}-Liste zu umschließen. Auch {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Zusätzlich zum {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnitts-Elemente (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

In erster Linie liegt es an Ihnen, einen komfortablen Codierstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsbereich sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen zur Aufnahme von Optionsfeldern.

### Aufbau einer Formularstruktur

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas komplexeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Anzahl von Steuerungstypen enthalten, die Sie vielleicht noch nicht verstehen. Machen Sie sich darüber jetzt keine Sorgen; Sie erfahren in dem nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)), wie sie funktionieren. Den Anweisungen unten folgend, lesen Sie die Beschreibungen sorgfältig und entwickeln Sie ein Verständnis dafür, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Erstellen Sie zu Beginn eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer.

2. Erstellen Sie als nächstes Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie Pflichtfelder markiert sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>Please complete all required (*) fields.</p>
   ```

4. Als nächstes fügen wir einen größeren Abschnitt von Code in das Formular ein, unter unserem vorherigen Eintrag. Hier sehen Sie, dass wir die Kontaktinformationsfelder in einem eigenen {{htmlelement("section")}}-Element umschließen. Außerdem haben wir eine Gruppe von drei Optionsfeldern, von denen jedes in einem eigenen Listen- ({{htmlelement("li")}}) Element enthalten ist. Wir haben auch zwei Standard-Text- {{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, sowie ein Passwortfeld zur Eingabe eines Passworts. Fügen Sie diesen Code Ihrem Formular hinzu:

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

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformation.
   Wir haben drei separate Steuerungen zusammen mit ihren Labels, die jeweils in einem `<p>` enthalten sind.
   Die erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Die zweite ist ein `<input>`-Element vom Typ `tel` zur Eingabe einer Kreditkartennummer; obwohl wir den Typ `number` hätten verwenden können, wollen wir die Spinner-UI der Zahl nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text` zur Eingabe des Ablaufdatums der Karte; dies enthält ein _placeholder_-Attribut, das das richtige Format angibt, und ein _pattern_, das testet, ob das eingegebene Datum das richtige Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) erneut eingeführt.

   Geben Sie Folgendes unter dem vorherigen Abschnitt ein:

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

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu senden. Fügen Sie dies jetzt dem unteren Teil Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie schließlich Ihr Formular mit dem äußeren {{htmlelement("form")}}-Schlusstag ab:

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

Wir haben dem fertigen Formular unten ein zusätzliches CSS hinzugefügt. Wenn Sie Änderungen am Aussehen Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) kopieren oder [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare ordnungsgemäß zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei der nächste Artikel genauer darauf eingeht, wie alle verschiedenen Arten von Formular-Widgets verwendet werden, die Sie zur Informationssammlung von Ihren Benutzern verwenden möchten.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
