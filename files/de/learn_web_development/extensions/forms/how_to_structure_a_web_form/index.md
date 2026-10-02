---
title: "Anleitung: Ein Webformular strukturieren"
slug: Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}

Nachdem wir die Grundlagen behandelt haben, sehen wir uns nun genauer an, mit welchen Elementen Sie die verschiedenen Teile eines Formulars strukturieren und ihnen eine Bedeutung geben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML-Kenntnisse</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie HTML-Formulare strukturieren und mit Semantik versehen, damit sie benutzbar und barrierefrei sind.
      </td>
    </tr>
  </tbody>
</table>

Formulare gehören aufgrund ihrer Flexibilität zu den komplexesten Strukturen in [HTML](/de/docs/Learn_web_development/Core/Structuring_content). Mit den dafür vorgesehenen Formularelementen und Attributen können Sie jede Art von einfachem Formular erstellen. Die richtige Struktur trägt dazu bei, dass ein HTML-Formular sowohl benutzbar als auch [barrierefrei](/de/docs/Learn_web_development/Core/Accessibility) ist.

## Das \<form>-Element

Das {{HTMLElement("form")}}-Element definiert ein Formular und stellt Attribute bereit, die sein Verhalten bestimmen. Wenn Sie ein HTML-Formular erstellen, beginnen Sie mit diesem Element und verschachteln den gesamten Inhalt darin. Viele assistive Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente erkennen und spezielle Funktionen bereitstellen, die ihre Verwendung erleichtern.

Dieses Element haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist nicht zulässig, ein Formular in einem anderen Formular zu verschachteln. Eine solche Verschachtelung kann dazu führen, dass sich Formulare unvorhersehbar verhalten.

Sie können ein Formularelement auch außerhalb eines {{HTMLElement("form")}}-Elements verwenden. In diesem Fall gehört es standardmäßig zu keinem Formular, sofern Sie es nicht über sein [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut einem Formular zuordnen. Dieses Attribut wurde eingeführt, damit Sie ein Formularelement ausdrücklich mit einem Formular verknüpfen können, auch wenn es nicht darin verschachtelt ist.

Sehen wir uns nun die Strukturelemente an, die innerhalb eines Formulars verwendet werden.

## Die Elemente \<fieldset> und \<legend>

Mit dem {{HTMLElement("fieldset")}}-Element können Sie Steuerelemente, die denselben Zweck erfüllen, für die Gestaltung und die Semantik gruppieren. Eine solche Gruppe können Sie beschriften, indem Sie unmittelbar nach dem öffnenden {{HTMLElement("fieldset")}}-Tag ein {{HTMLElement("legend")}}-Element einfügen. Dessen Text beschreibt den Zweck des umgebenden {{HTMLElement("fieldset")}}-Elements.

Viele assistive Technologien behandeln den Inhalt des {{HTMLElement("legend")}}-Elements als Teil der Beschriftung jedes Steuerelements im zugehörigen {{HTMLElement("fieldset")}}-Element. Einige Screenreader wie [Jaws](https://vispero.com/jaws-screen-reader-software/) und [NVDA](https://www.nvaccess.org/) lesen beispielsweise zuerst die Legende und danach die Beschriftung des jeweiligen Steuerelements vor.

Hier ist ein Beispiel:

```html live-sample___fieldset-legend
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
```

Es wird wie folgt dargestellt:

{{embedlivesample("fieldset-legend", "100%", 200)}}

Beim Vorlesen des obigen Formulars gibt ein Screenreader für den ersten Radiobutton etwa „Fruchtsaftgröße klein“ aus, für den zweiten „Fruchtsaftgröße mittel“ und für den dritten „Fruchtsaftgröße groß“.

Eine Gruppe von Radiobuttons sollten Sie stets in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt weitere Anwendungsfälle; allgemein können Sie mit {{HTMLElement("fieldset")}} ein Formular auch in Abschnitte gliedern. Lange Formulare sollten idealerweise auf mehrere Seiten verteilt werden. Wenn ein langes Formular auf einer einzigen Seite stehen muss, verbessert die Aufteilung zusammengehöriger Bereiche auf verschiedene `fieldset`-Elemente die Benutzbarkeit.

Wegen seiner Bedeutung für assistive Technologien ist {{HTMLElement("fieldset")}} eines der wichtigsten Elemente für barrierefreie Formulare. Sie sollten es jedoch nicht übermäßig einsetzen. Prüfen Sie beim Erstellen eines Formulars nach Möglichkeit, [wie ein Screenreader es vorliest](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Wenn die Ausgabe merkwürdig klingt, versuchen Sie, die Struktur des Formulars zu verbessern.

## Das \<label>-Element

Wie im vorherigen Artikel erläutert, ist das {{HTMLElement("label")}}-Element die vorgesehene Möglichkeit, ein HTML-Formularelement zu beschriften. Es ist besonders wichtig für barrierefreie Formulare: Bei korrekter Verwendung lesen Screenreader die Beschriftung eines Formularelements zusammen mit zugehörigen Anweisungen vor. Auch für sehende Nutzer ist eine Beschriftung hilfreich. Betrachten Sie dieses Beispiel aus dem vorherigen Artikel:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Wenn das `<label>` über sein `for`-Attribut korrekt mit dem `<input>` verknüpft ist – das Attribut enthält den Wert des `id`-Attributs des `<input>`-Elements –, gibt ein Screenreader beispielsweise „Name, Text bearbeiten“ aus.

Sie können ein Formularelement auch mit einer Beschriftung verknüpfen, indem Sie es in das `<label>` verschachteln. Dadurch entsteht eine implizite Zuordnung.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Auch in diesem Fall gilt es jedoch als bewährte Praxis, das `for`-Attribut zu setzen, damit alle assistiven Technologien die Beziehung zwischen Beschriftung und Steuerelement erkennen.

Fehlt eine Beschriftung oder ist das Formularelement weder implizit noch explizit mit ihr verknüpft, gibt ein Screenreader möglicherweise etwas wie „Text bearbeiten, leer“ aus. Das ist wenig hilfreich.

### Beschriftungen sind ebenfalls anklickbar!

Ein weiterer Vorteil korrekt eingerichteter Beschriftungen: Sie können die Beschriftung anklicken oder antippen, um das zugehörige Steuerelement zu aktivieren. Bei Textfeldern können Sie dadurch sowohl auf die Beschriftung als auch auf das Eingabefeld klicken, um das Feld zu fokussieren. Besonders nützlich ist dies bei Radiobuttons und Checkboxen, deren anklickbare Fläche sehr klein sein kann.

Wenn Sie im folgenden Beispiel auf den Beschriftungstext „I like cherry“ klicken, ändert sich der Auswahlzustand der Checkbox _taste_cherry_:

```html live-sample___checkbox-label
<p>
  <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
  <label for="taste_1">I like cherry</label>
</p>
<p>
  <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
  <label for="taste_2">I like banana</label>
</p>
```

Probieren Sie es aus:

{{embedlivesample("checkbox-label", "100%", 100)}}

### Mehrere Beschriftungen

Genau genommen können Sie einem einzelnen Steuerelement mehrere Beschriftungen zuweisen. Das ist jedoch keine gute Idee, da manche assistiven Technologien Schwierigkeiten damit haben. Wenn Sie mehrere Beschriftungen benötigen, verschachteln Sie das Steuerelement und seine Beschriftungen innerhalb eines einzigen {{htmlelement("label")}}-Elements.

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

Der Absatz am Anfang erklärt eine Regel für Pflichtfelder. Diese Regel muss erläutert werden, _bevor_ sie angewendet wird, damit sehende Nutzer und Nutzer assistiver Technologien (AT) wie Screenreadern ihre Bedeutung kennen, bevor sie auf ein Pflichtfeld stoßen.

## Häufig verwendete HTML-Strukturen in Formularen

Neben den formularspezifischen Strukturen sollten Sie daran denken, dass die Auszeichnung eines Formulars ganz normales HTML ist. Sie können also alle Möglichkeiten von HTML nutzen, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen, werden eine Beschriftung und ihr Steuerelement häufig gemeinsam in einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}}- oder {{HTMLElement("ol")}}-Liste platziert. Auch {{HTMLElement("p")}}- und {{HTMLElement("div")}}-Elemente werden oft verwendet. Listen empfehlen sich besonders zur Strukturierung mehrerer Checkboxen oder Radiobuttons.

Neben dem {{HTMLElement("fieldset")}}-Element werden häufig auch HTML-Überschriften, etwa {{htmlelement("Heading_Elements", "h1")}} und {{htmlelement("Heading_Elements", "h2")}}, sowie Abschnitte, etwa mit {{htmlelement("section")}}, zur Strukturierung komplexer Formulare verwendet.

Entscheidend ist, einen für Sie geeigneten Programmierstil zu finden, mit dem barrierefreie und benutzbare Formulare entstehen. Jeder eigenständige Funktionsbereich sollte in einem eigenen {{htmlelement("section")}}-Element stehen; Gruppen von Radiobuttons gehören in {{htmlelement("fieldset")}}-Elemente.

### Eine Formularstruktur erstellen

Setzen wir diese Ideen in die Praxis um und erstellen ein etwas umfangreicheres Formular: ein Zahlungsformular. Es enthält verschiedene Arten von Steuerelementen, die Sie möglicherweise noch nicht kennen. Das ist vorerst kein Problem; im nächsten Artikel ([Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)) erfahren Sie, wie sie funktionieren. Lesen Sie die Beschreibungen zu den folgenden Schritten aufmerksam durch und achten Sie darauf, welche umschließenden Elemente wir zur Strukturierung des Formulars verwenden und warum.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem Computer eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

2. Erstellen Sie dann Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz ein, die erklären, wie Pflichtfelder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>Please complete all required (*) fields.</p>
   ```

4. Fügen Sie unter dem bisherigen Inhalt einen größeren Codeabschnitt in das Formular ein. Die Felder für Kontaktinformationen sind darin in einem eigenen {{htmlelement("section")}}-Element zusammengefasst. Außerdem gibt es drei Radiobuttons, die jeweils in einem eigenen Listenelement ({{htmlelement("li")}}) stehen. Zwei gewöhnliche Text-{{htmlelement("input")}}-Elemente sind jeweils zusammen mit ihrem zugehörigen {{htmlelement("label")}}-Element in einem {{htmlelement("p")}}-Element enthalten. Hinzu kommt ein Eingabefeld für ein Passwort. Fügen Sie diesen Code zu Ihrem Formular hinzu:

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

5. Der zweite `<section>`-Abschnitt des Formulars enthält die Zahlungsinformationen.
   Er umfasst drei verschiedene Steuerelemente mit ihren Beschriftungen, die jeweils in einem `<p>`-Element stehen.
   Das erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Das zweite ist ein `<input>`-Element vom Typ `tel` zur Eingabe der Kreditkartennummer. Wir könnten zwar den Typ `number` verwenden, möchten aber dessen Steuerelemente zum schrittweisen Ändern des Zahlenwerts vermeiden.
   Das letzte ist ein `<input>`-Element vom Typ `text` zur Eingabe des Ablaufdatums der Karte. Es enthält ein _placeholder_-Attribut, das das richtige Format angibt, sowie ein _pattern_, das prüft, ob das eingegebene Datum dem Format entspricht.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) näher vorgestellt.

   Fügen Sie unter dem vorherigen Abschnitt Folgendes ein:

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

6. Der letzte Abschnitt ist deutlich einfacher: Er enthält nur ein {{htmlelement("button")}}-Element vom Typ `submit`, mit dem die Formulardaten gesendet werden. Fügen Sie es nun am Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie Ihr Formular schließlich mit dem schließenden Tag des äußeren {{htmlelement("form")}}-Elements ab:

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

Für das fertige Formular unten haben wir zusätzliches CSS verwendet. Wenn Sie das Aussehen Ihres Formulars ändern möchten, können Sie die Formatvorlagen aus [dem Beispiel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form/Example) übernehmen oder [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) lesen.

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

{{EmbedLiveSample("building_a_form_structure","100%",620)}}

## Zusammenfassung

Sie verfügen nun über das nötige Wissen, um Ihre Webformulare sinnvoll zu strukturieren. Viele der hier vorgestellten Funktionen behandeln wir in den nächsten Artikeln genauer. Im nächsten Artikel sehen wir uns die verschiedenen Arten von Formularelementen an, mit denen Sie Informationen von Ihren Nutzern erfassen können.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms")}}
