---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: ad2ee21660739777fc8874a93670cd518a6d3fff
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Reihe gibt Ihnen Ihr allererstes Erlebnis beim Erstellen eines Webformulars. Dazu gehört das Entwerfen eines einfachen Formulars, die Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, das Hinzufügen von einfachem CSS-Styling und die Beschreibung, wie Daten an einen Server gesendet werden.
Wir werden später in diesem Modul ausführlicher auf jedes dieser Themen eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Webformularen zu erlangen, wofür sie verwendet werden, wie man sie gestaltet und die grundlegenden HTML-Elemente, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Benutzeroberfläche sofort auf irgendeine Weise zu aktualisieren (zum Beispiel, um einen weiteren Eintrag zu einer Liste hinzuzufügen oder ein UI-Feature ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt) sowie einigen zusätzlichen Elementen, die helfen, das gesamte Formular zu strukturieren – sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können ein- oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, wobei es auch einige andere Elemente gibt, die es zu lernen gilt.

Formularsteuerelemente können auch so programmiert werden, dass sie bestimmte Formate oder Werte erzwingen, die eingegeben werden müssen (**Formularvalidierung**), und mit Textetiketten versehen werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Benutzern beschreiben.

## Entwerfen Ihres Formulars

Bevor Sie mit dem Codieren beginnen, ist es immer besser, zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups hilft Ihnen, die richtigen Datensätze zu definieren, die Sie von Ihrem Benutzer anfordern möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, sich daran zu erinnern, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und konzentriert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen abzudecken, aber wenn Sie tiefer in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), darunter einen älteren, aber immer noch relevanten [ausführlichen Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel erstellen wir ein einfaches Kontaktformular. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Das Drücken der Schaltfläche sendet seine Daten an einen Webserver.

## Aktives Lernen: Implementierung unseres Formular-HTML

Ok, lassen Sie uns das HTML für unser Formular erstellen. Wir werden folgende HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie fortfahren, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) – hier geben Sie Ihr Formular-HTML ein.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Containerelement wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell für Formulare; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist gängige Praxis, zumindest die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) immer zu setzen:

- Das `action`-Attribut definiert den Ort (URL), wohin die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem [Artikel über das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie vorerst das obige {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: der Dateneintragsteil enthält drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld des Typs E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir Folgendes, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formularcode, um wie oben auszusehen.

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe weiter im Artikel). Für Benutzerfreundlichkeit und Barrierefreiheit fügen wir für jedes Formularsteuerelement ein explizites Label hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, dessen Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Formularsteuerelements ist, mit dem es verbunden ist – so wird ein Formularsteuerelement mit seinem Label verbunden.

Dies hat große Vorteile – es verbindet das Label mit dem Formularsteuerelement und ermöglicht es Maus-, Trackpad- und Touch-Benutzern, auf das Label zu klicken, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen, den Bildschirmlesegeräte ihren Benutzern vorlesen. Weitere Details zu Formular-Labels finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Am {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, da es das Erscheinungsbild und das Verhalten des {{HTMLelement("input")}}-Elements definiert. Mehr darüber erfahren Sie im [Artikel über grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld – der Standardwert für dieses Attribut. Es stellt ein grundlegendes einzeiliges Textfeld dar, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine wohlgeformte E-Mail-Adresse akzeptiert. Dies verwandelt ein einfaches Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen auf den vom Benutzer eingegebenen Daten durchführt. Es erzeugt auch ein passenderes Tastaturlayout zum Eingeben von E-Mail-Adressen (z.B. mit einem @-Symbol als Standard) auf Geräten mit dynamischen Tastaturen wie Smartphones. Mehr über Formularvalidierung erfahren Sie im Artikel über [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Das ist eine der Besonderheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass es keinen Schließungstag benötigt. {{HTMLElement("textarea")}} ist kein leeres Element, sodass es mit dem richtigen Endtag geschlossen werden sollte. Dies hat Auswirkungen auf eine bestimmte Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, platzieren Sie ihn zwischen den öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Der Markup für unser Formular ist fast fertig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "abschicken" kann, sobald er das Formular ausgefüllt hat. Dies geschieht mit dem {{HTMLelement("button")}}-Element; fügen Sie Folgendes kurz vor dem Schließtagen `</form>` hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut – dieses nimmt einen der drei Werte an: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert wird.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formularsteuerelemente sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diesen Schaltflächentyp vermeiden, es sei denn, Sie haben wirklich einen guten Grund, einen hinzuzufügen.
- Ein Klick auf eine `button`-Schaltfläche bewirkt _nichts_! Das mag albern klingen, ist aber unglaublich nützlich für den Bau von benutzerdefinierten Schaltflächen – die gewünschte Funktionalität kann mit JavaScript definiert werden.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollen HTML-Inhalt gestattet, was komplexere und kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Styling von Formularen

Nachdem Sie den HTML-Code Ihres Formulars fertiggestellt haben, sollten Sie ihn speichern und in einem Browser anzeigen. Im Moment wird es ziemlich unschön aussehen.

> [!NOTE]
> Wenn Sie denken, dass Sie den HTML-Code nicht richtig hinbekommen haben, vergleichen Sie ihn mit unserem fertigen Beispiel – siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer schön zu stylen. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir Sie erst einmal dazu bringen, etwas CSS hinzuzufügen, damit es akzeptabel aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb des HTML-Kopfes. Es sollte so aussehen:

```html
<style>
  /* CSS goes here */
</style>
```

Innerhalb der `style`-Tags fügen Sie das folgende CSS hinzu:

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

Speichern und neu laden, und Sie werden sehen, dass Ihr Formular viel weniger unschön aussehen sollte.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil, und vielleicht der schwierigste, ist die Handhabung der Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten dank der Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) gesendet werden sollen.

Wir stellen jedem Formularsteuerelement ein `name`-Attribut zur Verfügung. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen jedes Datenstück tragen soll, und auf der Serverseite lassen sie den Server jedes Datenstück namentlich behandeln. Die Formulardaten werden als Namens-/Wertpaare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut bei jedem Formular-Widget verwenden, das ein bestimmtes Datenstück sammelt. Lassen Sie uns noch einmal einige unserer Formular-Codes ansehen:

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

In unserem Beispiel sendet das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden unter Verwendung der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Auf der Serverseite empfängt das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel-/Wert-Elementen im HTTP-Request. Wie dieses Script diese Daten behandelt, bleibt Ihnen überlassen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C# usw.) hat ihren eigenen Mechanismus zur Handhabung von Formulardaten. Es liegt außerhalb des Umfangs dieses Tutorials, sich intensiv mit diesem Thema zu befassen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem [Artikel über das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später zur Verfügung gestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht live so aus:

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

Das ist jedoch erst der Anfang – jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben weitaus mehr Möglichkeiten als das, was wir hier gesehen haben und die anderen Artikel in diesem Modul helfen Ihnen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
