---
title: Ihr erstes Formular
slug: Learn/Forms/Your_first_form
l10n:
  sourceCommit: 9d96a6170f88c8ebf3e865f9f6f3b89a0e766abe
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung im Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, dem Hinzufügen einer sehr einfachen CSS-Stylings und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später im Modul auf jedes dieser Unterthemen detaillierter eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt, und die grundlegenden HTML-Elemente, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Modul) oder clientseitig verwendet werden, um die Oberfläche unmittelbar irgendwie zu aktualisieren (zum Beispiel, um ein weiteres Element zu einer Liste hinzuzufügen oder ein UI-Feature anzuzeigen oder auszublenden).

Der HTML-Code eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch als **Widgets** bezeichnet) sowie einigen zusätzlichen Elementen, die dabei helfen, das gesamte Formular zu strukturieren – sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können ein- oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsschaltflächen sein und werden hauptsächlich mithilfe des {{htmlelement("input")}}-Elements erstellt, obwohl es auch einige andere Elemente zu erlernen gibt.

Formularsteuerelemente können auch so programmiert werden, dass sie spezielle Formate oder Werte zur Eingabe erzwingen (**Formularvalidierung**) und mit Textbeschriftungen gepaart werden, die ihren Zweck sowohl für sehende als auch für sehbehinderte Benutzer beschreiben.

## Gestalten Ihres Formulars

Bevor Sie mit dem Programmieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Entwurfs hilft Ihnen dabei, den richtigen Satz von Daten zu definieren, den Sie Ihren Benutzer bitten möchten, einzugeben. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, daran zu erinnern, dass je größer Ihr Formular ist, desto größer ist das Risiko, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Bitten Sie nur um die Daten, die Sie unbedingt benötigen.

Die Gestaltung von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es fällt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen abzudecken, aber wenn Sie tiefer in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formular-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels [Umfassender Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Themen wie [mehrseitige Formulare](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel erstellen wir ein einfaches Kontaktformular. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir bitten den Benutzer um seinen Namen, seine E-Mail-Adresse und die Nachricht, die er senden möchte. Durch das Drücken der Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktiv lernen: Implementierung unseres Formular-HTML

Gut, lassen Sie uns versuchen, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie fortfahren, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — dort fügen Sie Ihr Formular-HTML ein.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so wie dieses:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert ein Formular formal. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute zur Konfiguration des Verhaltens des Formulars. Alle seine Attribute sind optional, aber es ist gängige Praxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) festzulegen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Formulardaten gesendet werden sollen, wenn das Formular übermittelt wird.
- Das `method`-Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet wird (in der Regel `get` oder `post`).

> [!NOTE]
> Wir werden uns ansehen, wie diese Attribute in unserem Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Verlauf funktionieren.

Fügen Sie vorerst das obige {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: der Datenabschnitt enthält drei Textfelder, von denen jedes ein entsprechendes {{HTMLelement("label")}} hat:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabe vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

Im Hinblick auf HTML-Code benötigen wir etwas wie das Folgende, um diese Formular-Widgets zu implementieren:

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

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code praktisch zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für die Benutzerfreundlichkeit und Zugänglichkeit fügen wir ein explizites Label für jedes Formularsteuerelement hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Formularsteuerelements annimmt, mit dem es verbunden ist — so verknüpfen Sie ein Formularsteuerelement mit seinem Label.

Dies bietet einen großen Vorteil — es verbindet das Label mit dem Formularsteuerelement, damit Benutzer von Maus, Trackpad und Touchgerät auf das Label klicken können, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen, den Bildschirmleser ihren Benutzern vorlesen können. Weitere Details zu Formularbeschriftungen finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

Auf dem {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, weil es das Erscheinungsbild und Verhalten des {{HTMLelement("input")}}-Elements definiert. Sie finden mehr darüber im Artikel [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für die erste Eingabe — den Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingaben akzeptiert.
- Für die zweite Eingabe verwenden wir den Wert {{HTMLelement("input/email", "email")}}, das ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dadurch wird ein einfaches Textfeld in eine Art „intelligentes“ Feld verwandelt, das einige Validierungschecks für die von Benutzer eingegebenen Daten durchführen wird. Es sorgt auch dafür, dass ein geeigneteres Tastaturlayout für die Eingabe von E-Mail-Adressen (z.B. standardmäßig mit einem @-Symbol) auf Geräten mit dynamischen Tastaturen, wie Smartphones, erscheint. Sie erfahren mehr über Formularvalidierung im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später.

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine Besonderheit von HTML. Das `<input>`-Tag ist ein [leeres Element](/de/docs/Glossary/void_element), was bedeutet, dass es kein schließendes Tag benötigt. {{HTMLElement("textarea")}} ist kein leeres Element, das bedeutet, es sollte mit dem korrekten End-Tag geschlossen werden. Dies hat einen Einfluss auf ein spezielles Feature von Formularen: die Art und Weise, wie Sie den Standardwert festlegen. Um den Standardwert eines {{HTMLElement("input")}}-Elements festzulegen, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut verwenden, so:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} festlegen möchten, setzen Sie diesen zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast komplett; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder „einreichen“ kann, sobald er das Formular ausgefüllt hat. Dies wird durch das {{HTMLelement("button")}}-Element erreicht; fügen Sie das Folgende direkt vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dies akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf einen `submit`-Button (der Standardwert) sendet die Daten des Formulars an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert wird.
- Ein Klick auf einen `reset`-Button setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diese Art von Taste vermeiden, es sei denn, Sie haben wirklich einen guten Grund, diese einzuschließen.
- Ein Klick auf einen `button`-Knopf führt _nichts_ aus! Das klingt albern, aber es ist erstaunlich nützlich für den Aufbau benutzerdefinierter Schaltflächen — Sie können deren gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um einen Button zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt ermöglicht, was komplexere, kreativere Button-Inhalte erlaubt.

## Grundlegendes Styling des Formulars

Nachdem Sie nun das HTML-Code Ihres Formulars fertiggeschrieben haben, speichern Sie es und schauen Sie es sich in einem Browser an. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie denken, dass Sie den HTML-Code nicht richtig haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen – siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind bekannt dafür, dass sie schwer schön zu stylen sind. Es fällt außerhalb des Umfangs dieses Artikels, Ihnen das detaillierte Styling von Formularen beizubringen, daher lassen wir Sie im Moment einfach etwas CSS hinzufügen, damit es einigermaßen gut aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb des HTML-Head. Es sollte so aussehen:

```html
<style>
  …
</style>
```

Innerhalb der `style`-Tags, fügen Sie folgendes CSS hinzu:

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
     By default, textareas have a monospace font */
  font: 1em sans-serif;
  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;
  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
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

Speichern und aktualisieren Sie, und Sie werden sehen, dass Ihr Formular nun viel weniger hässlich aussehen sollte.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte und vielleicht heikelste Teil besteht darin, Formulardaten auf Serverseite zu verwalten. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten dank der [`action`](/de/docs/Web/HTML/Element/form#action)- und [`method`](/de/docs/Web/HTML/Element/form#method)-Attribute gesendet werden.

Wir stellen ein `name`-Attribut für jedes Formularsteuerelement bereit. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen er jedem Datenstück geben soll, und auf der Serverseite lassen sie den Server jedes Datenstück nach Namen verarbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut bei jedem Formular-Widget verwenden, das ein bestimmtes Datenstück sammeln wird. Sehen wir uns noch einmal etwas von unserem Formularcode an:

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

In unserem Beispiel sendet das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden unter Verwendung der [HTTP `POST`](/de/docs/Web/HTTP/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Einträgen im HTTP-Request empfangen. Die Art und Weise, wie dieses Skript diese Daten verarbeitet, bleibt Ihnen überlassen. Jede Serverseitensprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zum Umgang mit Formulardaten. Es fällt außerhalb des Umfangs dieses Leitfadens, tief in dieses Thema einzutauchen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später zur Verfügung gestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht in etwa so aus:

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

Das ist erst der Anfang, jedoch — jetzt ist es an der Zeit, sich das genauer anzusehen. Formulare haben weitaus mehr Kraft als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaft-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
