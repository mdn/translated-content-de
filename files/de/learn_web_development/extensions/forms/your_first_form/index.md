---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, dem Hinzufügen einfacher CSS-Styling-Elemente und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später im Modul auf jedes dieser Themen detaillierter eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">
          Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vertrautheit damit erlangen, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt, und die grundlegenden HTML-Elemente, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder clientseitig verwendet werden, um die Benutzeroberfläche in irgendeiner Weise sofort zu aktualisieren (zum Beispiel ein weiteres Element zu einer Liste hinzufügen oder ein UI-Feature anzeigen oder ausblenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch als **Widgets** bezeichnet) und einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können Einzeilen- oder Mehrzeilen-Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch andere Elemente gibt, die es zu lernen gilt.

Formularsteuerelemente können auch so programmiert werden, dass sie bestimmte Formate oder Werte erzwingen (**Formularvalidierung**) und mit Textlabels kombiniert werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Benutzern beschreiben.

## Ihr Formular gestalten

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups hilft Ihnen, den richtigen Datensatz zu definieren, den Sie von Ihrem Benutzer erfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, sich zu erinnern, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich mit diesem Thema befassen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten [Umfassender Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr nachdenkliche Ressource mit guten Ratschlägen, von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis zu komplexen Themen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Beim Drücken der Schaltfläche werden die Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTML

Ok, lassen Sie uns das HTML für unser Formular erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Bevor Sie fortfahren, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden Ihr Formular-HTML hier einfügen.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Containerelement wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle Attribute sind optional, aber es ist üblich, mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) festzulegen:

- Das Attribut `action` definiert den Ort (URL), an den die gesammelten Formulardaten gesendet werden sollen, wenn sie abgesendet werden.
- Das Attribut `method` definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie für jetzt das obenstehende {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, jeweils mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas wie das Folgende, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formularcode, damit er wie der oben aussieht.

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Zugänglichkeit fügen wir ein explizites Label für jedes Formularsteuerelement hinzu. Beachten Sie die Verwendung des Attributs [`for`](/de/docs/Web/HTML/Attributes/for) auf allen {{HTMLelement("label")}}-Elementen, dessen Wert das [`id`](/de/docs/Web/HTML/Global_attributes/id) des Formularsteuerelements ist, mit dem es verknüpft ist — so verbinden Sie ein Formularsteuerelement mit seinem Label.

Es hat große Vorteile, dies zu tun — es verbindet das Label mit dem Formularsteuerelement, sodass Maus-, Trackpad- und Touchgerätebenutzer das Label anklicken können, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen für Bildschirmlesegeräte zum Vorlesen an ihre Benutzer. Weitere Details zu Formularlabels finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Auf dem {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es definiert, wie das {{HTMLelement("input")}}-Element erscheint und sich verhält. Mehr dazu finden Sie im Artikel [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — der Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen für die vom Benutzer eingegebenen Daten durchführt. Es verursacht auch eine passendere Tastaturbelegung für die Eingabe von E-Mail-Adressen (z.B. mit einem @-Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen, wie Smartphones. Mehr über Formularvalidierung erfahren Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

Zuletzt, aber nicht zuletzt, beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Besonderheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass es keinen Schließtag benötigt. {{HTMLElement("textarea")}} ist kein leeres Element, das bedeutet, dass es mit dem richtigen Endtag geschlossen werden muss. Dies hat Auswirkungen auf ein spezifisches Merkmal von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie andererseits einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "absenden" kann, sobald er das Formular ausgefüllt hat. Dies wird durch die Verwendung des {{HTMLelement("button")}}-Elements erreicht; fügen Sie das folgende direkt über dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut — dieses akzeptiert einen der drei Werte: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diese Art von Schaltfläche vermeiden, es sei denn, Sie haben wirklich einen guten Grund, eine hinzuzufügen.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, aber es ist unglaublich nützlich für den Aufbau benutzerdefinierter Schaltflächen — Sie können ihre gewünschte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur reinen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt zulässt, wodurch komplexere, kreative Schaltflächeninhalte möglich sind.

## Grundlegendes Formularstyling

Da Sie nun mit dem Schreiben des HTML-Codes für Ihr Formular fertig sind, versuchen Sie, es zu speichern und in einem Browser anzuzeigen. Momentan werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie glauben, dass Sie den HTML-Code nicht richtig haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live sehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwierig, schön zu stylen. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen das Form-Design im Detail beizubringen, daher werden wir Sie im Moment nur dazu bringen, etwas CSS hinzuzufügen, damit es akzeptabel aussieht.

Fügen Sie zuerst ein {{htmlelement("style")}}-Element auf Ihrer Seite hinzu, innerhalb Ihres HTML-Kopfes. Es sollte so aussehen:

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

Speichern und laden Sie die Seite neu, dann sollte Ihr Formular viel weniger hässlich aussehen.

> [!NOTE]
> Sie können unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live sehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)) finden.

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil, und vielleicht der kniffligste, ist die Verarbeitung von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten gesendet werden sollen, dank der [`action`](/de/docs/Web/HTML/Element/form#action)- und [`method`](/de/docs/Web/HTML/Element/form#method)-Attribute.

Wir fügen jedem Formularsteuerelement ein `name`-Attribut hinzu. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie teilen dem Browser mit, welchen Namen jedes Datenstück erhalten soll, und auf der Serverseite lassen sie den Server jedes Datenstück nach Namen behandeln. Die Formulardaten werden als Namens-/Wertpaare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formular-Widget verwenden, das ein spezifisches Datenstück sammeln wird. Lassen Sie uns einige unserer Formularcodes nochmal betrachten:

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

In unserem Beispiel sendet das Formular 3 Datenelemente mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden an die URL `/my-handling-form-page` unter Verwendung der [HTTP-`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel-/Wert-Elementen im HTTP-Request erhalten. Die Art und Weise, wie dieses Skript diese Daten behandelt, liegt bei Ihnen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Handhabung von Formulardaten. Es liegt außerhalb des Umfangs dieses Tutorials, auf dieses Thema tief einzugehen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht in dieser Live-Version so aus:

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

Das ist jedoch nur der Anfang — jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben weit mehr Funktionen als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

### Erweitere Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
