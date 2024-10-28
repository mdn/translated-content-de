---
title: Ihr erstes Formular
slug: Learn/Forms/Your_first_form
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung im Erstellen eines Webformulars. Dazu gehört das Entwerfen eines einfachen Formulars, die Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, das Hinzufügen einiger sehr einfacher CSS-Stile und die Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jedes dieser Themen ausführlicher eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Webformularen gewinnen: wofür sie verwendet werden, wie man über das Design nachdenkt und welche grundlegenden HTML-Elemente man für einfache Fälle benötigt.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Nutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Oberfläche sofort auf irgendeine Weise zu aktualisieren (zum Beispiel ein weiteres Element zu einer Liste hinzufügen oder ein UI-Feature ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt), plus einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können einzeilige oder mehrzeilige Textfelder, Dropdown-Felder, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente gibt, über die man lernen kann.

Formularsteuerelemente können auch so programmiert werden, dass bestimmte Formate oder Werte erzwungen werden (**Formularvalidierung**), und sie sind mit Textbeschriftungen gepaart, die ihren Zweck sowohl für sehende als auch für sehbehinderte Benutzer beschreiben.

## Entwurf Ihres Formulars

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Entwurfs hilft Ihnen dabei, den richtigen Satz von Daten zu definieren, den Sie Ihren Nutzern abfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, sich daran zu erinnern, je umfangreicher Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Nutzer zu verlieren. Halten Sie es einfach und konzentriert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Formulare zu entwerfen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es geht über den Rahmen dieses Artikels hinaus, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich mit diesem Thema befassen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels [Umfassender Leitfaden zur Webformular-Nutzerfreundlichkeit](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen zu [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) und komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel bauen wir ein einfaches Kontaktformular. Lassen Sie uns einen groben Entwurf machen.

![Das zu bauende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Das Drücken der Schaltfläche sendet ihre Daten an einen Webserver.

## Aktives Lernen: Implementierung unseres Formular-HTML

Ok, lassen Sie uns an die Erstellung des HTMLs für unser Formular gehen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) – hier fügen Sie Ihr Formular-HTML ein.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie diesem:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Containern von Formularen; es unterstützt auch einige spezielle Attribute, um zu konfigurieren, wie das Formular sich verhält. Alle seine Attribute sind optional, aber es ist gängige Praxis, zumindest die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) immer festzulegen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars beim Absenden gesendet werden sollten.
- Das `method`-Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet wird (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden in unserem späteren Artikel [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) darauf eingehen, wie diese Attribute funktionieren.

Fügen Sie für den Moment das obige {{htmlelement("form")}}-Element in Ihren HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: der Dateneingabeteil enthält drei Textfelder, jeweils mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabe vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas wie das Folgende, um diese Formularelemente zu implementieren:

```html
<form action="/my-handling-form-page" method="post">
  <p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </p>
  <p>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>
</form>
```

Aktualisieren Sie Ihren Formularcode, um wie das obige Beispiel auszusehen.

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Zugänglichkeit fügen wir jedem Formularsteuerelement ein explizites Label hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des zugehörigen Formularsteuerelements nimmt — so verknüpfen Sie ein Formularsteuerelement mit seinem Label.

Es hat großen Nutzen, dies zu tun — es verknüpft das Label mit dem Formularsteuerelement, sodass Benutzer von Maus, Trackpad und Touch-Geräten auf das Label klicken können, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen für Bildschirmauslesegeräte, die es ihren Nutzern vorlesen. Weitere Details zu Formularlabels finden Sie im Artikel [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

Bei dem {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es beeinflusst, wie das {{HTMLelement("input")}}-Element erscheint und sich verhält. Sie finden mehr darüber im Artikel [Grundlegende native Formularsteuerelemente](/de/docs/Learn/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir für das erste Eingabefeld den Wert {{HTMLelement("input/text", "text")}} — der Standardwert für dieses Attribut. Es stellt ein grundlegendes einzeiliges Textfeld dar, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur gut strukturierte E-Mail-Adressen akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art „intelligentes“ Feld, das einige Validierungsprüfungen auf die vom Benutzer eingegebenen Daten ausführt. Es sorgt auch dafür, dass auf Geräten mit dynamischen Tastaturen, wie Smartphones, ein angemesseneres Tastaturlayout für die Eingabe von E-Mail-Adressen (z.B. mit einem @-Symbol standardmäßig) erscheint. Weitere Informationen zur Formularvalidierung finden Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später.

Nicht zuletzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenarten von HTML. Der `<input>`-Tag ist ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass er keinen schließenden Tag benötigt. {{HTMLElement("textarea")}} ist kein leeres Element, was bedeutet, dass es mit dem richtigen End-Tag geschlossen werden sollte. Dies hat Auswirkungen auf eine spezielle Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, legen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Die Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder „einreichen“ kann, nachdem er das Formular ausgefüllt hat. Dies erfolgt über das {{HTMLelement("button")}}-Element; fügen Sie das folgende kurz vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut — dies akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diesen Schaltflächentyp vermeiden, es sei denn, Sie haben wirklich einen guten Grund, ihn einzuschließen.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, ist aber erstaunlich nützlich zum Erstellen benutzerdefinierter Schaltflächen — deren gewählte Funktionalität kann mit JavaScript definiert werden.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z.B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element in seinem Label nur reinen Text erlaubt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt erlaubt, was komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Styling von Formularen

Nachdem Sie den HTML-Code für Ihr Formular fertiggestellt haben, versuchen Sie, ihn zu speichern und im Browser anzusehen. Momentan werden Sie feststellen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie nicht denken, dass Sie den HTML-Code richtig haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen – siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer schön zu stylen. Es geht über den Rahmen dieses Artikels hinaus, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir Sie für den Moment nur dazu bringen, etwas CSS hinzuzufügen, damit es okay aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite innerhalb des HTML-Head hinzu. Es sollte so aussehen:

```html
<style>
  …
</style>
```

Fügen Sie innerhalb der `style`-Tags das folgende CSS hinzu:

```css
body {
  /* Center the form on the page */
  text-align: center;
}

form {
  display: inline-block;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

p + p {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  min-width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, text areas have a monospace font */
  font: 1em sans-serif;
  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;
  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Set the outline width and style */
  outline-style: solid;
  /* To give a little highlight on active elements */
  outline-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;
  /* Provide space to type some text */
  height: 5em;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: 0.5em;
}
```

Speichern Sie und laden Sie erneut, und Sie werden sehen, dass Ihr Formular viel weniger hässlich aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)) finden.

## Formulardaten an Ihren Webserver senden

Der letzte Teil, und vielleicht der kniffligste, ist das Handling von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten gesendet werden, dank der [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) Attribute.

Wir stellen ein `name`-Attribut für jedes Formularsteuerelement bereit. Die Namen sind auf sowohl der Client- als auch der Serverseite wichtig; sie sagen dem Browser, welchen Namen jedem Datenstück zu geben ist, und auf der Serverseite lassen sie den Server jedes Datenstück anhand ihres Namens bearbeiten. Die Formulardaten werden als Namen/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut an jedem Formular-Widget verwenden, das ein bestimmtes Datenstück sammeln wird. Schauen wir uns etwas von unserem Formularcode nochmal an:

```html
<form action="/my-handling-form-page" method="post">
  <p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </p>
  <p>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>

  …
</form>
```

In unserem Beispiel sendet das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden an die URL `/my-handling-form-page` mit der [HTTP `POST`](/de/docs/Web/HTTP/Methods/POST)-Methode gesendet.

Auf der Serverseite empfängt das Script an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen, die in der HTTP-Anfrage enthalten sind. Die Art und Weise, wie dieses Script diese Daten verarbeitet, liegt bei Ihnen. Jede Serverseitensprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es geht über den Rahmen dieses Leitfadens hinaus, auf dieses Thema tief einzugehen, aber wenn Sie mehr wissen möchten, haben wir in unserem [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) Artikel später einige Beispiele bereitgestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht so live aus:

```html hidden
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

```css hidden
form {
  /* Just to center the form on the page */
  margin: 0 auto;
  width: 400px;

  /* To see the limits of the form */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* To make sure that all label have the same size and are properly align */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text field have the same font settings
     By default, textarea are set with a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text field */
  width: 300px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* To give a little highlight on active elements */
  border-color: #000;
}

textarea {
  /* To properly align multiline text field with their label */
  vertical-align: top;

  /* To give enough room to type some text */
  height: 5em;

  /* To allow users to resize any textarea vertically
     It works only on Chrome, Firefox and Safari */
  resize: vertical;
}

.button {
  /* To position the buttons to the same position of the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent the same space as the space between
     the labels and their text fields */
  margin-left: 0.5em;
}
```

{{ EmbedLiveSample('Summary', '', '300') }}

Das ist jedoch nur der Anfang — jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben viel mehr Kraft als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Erweiterte Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
