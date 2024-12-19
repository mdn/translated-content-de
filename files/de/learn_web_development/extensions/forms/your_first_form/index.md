---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allerersten Erfahrungen beim Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, dem Hinzufügen einer sehr einfachen Gestaltung über CSS und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später im Modul ausführlicher auf jedes dieser Teilthemen eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Webformulare sind, wofür sie verwendet werden, wie man ihre Gestaltung angeht, und den grundlegenden HTML-Elementen zu erlangen, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptpunkte der Interaktion zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die im Allgemeinen an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Benutzeroberfläche sofort auf irgendeine Weise zu aktualisieren (zum Beispiel, um ein weiteres Element zu einer Liste hinzuzufügen oder eine UI-Funktion ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt) sowie einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können einzeilige oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden meist mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente zu lernen gibt.

Formularsteuerelemente können auch programmiert werden, um spezifische Formate oder Werte zu erzwingen, die eingegeben werden sollen (**Formularvalidierung**), und sie können mit Textetiketten kombiniert werden, die ihren Zweck sowohl für sehende als auch für sehbehinderte Benutzer beschreiben.

## Gestaltung Ihres Formulars

Bevor Sie anfangen zu programmieren, ist es immer besser, einen Schritt zurückzutreten und sich Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups hilft Ihnen, den richtigen Datensatz zu definieren, den Sie Ihren Benutzer eingeben lassen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Formulare zu gestalten ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Dieser Artikel übersteigt den Rahmen, um die Benutzerfreundlichkeit von Formularen abzudecken, aber wenn Sie tiefer in dieses Thema einsteigen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formen-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels [Umfassender Leitfaden zur Webformular-Benutzerfreundlichkeit](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis zu komplexen Anliegen wie [Mehrseitige Formulare](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Durch Drücken der Schaltfläche werden die Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTML

Okay, lassen Sie uns das HTML für unser Formular erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — hier fügen Sie Ihr Formular-HTML ein.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so wie dieses:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Behalten von Formularen; es unterstützt auch einige spezifische Attribute, um die Art und Weise zu konfigurieren, wie sich das Formular verhält. Alle Attribute sind optional, aber es ist gängige Praxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) zu setzen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (gewöhnlich `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie nun das oben erwähnte {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabebereich beinhaltet drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail-Adresse ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
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

Aktualisieren Sie Ihren Formularcode, damit er wie oben aussieht.

Die {{HTMLelement("p")}}-Elemente sind dazu da, unseren Code bequem zu strukturieren und das Stylen zu erleichtern (siehe später im Artikel). Zwecks Benutzerfreundlichkeit und Barrierefreiheit fügen wir für jedes Formularsteuerelement ein explizites Label hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for)-Attributs bei allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Formularsteuerelements hat, mit dem es verknüpft ist — so verknüpfen Sie ein Formularsteuerelement mit seinem Label.

Daraus ergeben sich große Vorteile — es verbindet das Label mit dem Formularsteuerelement, sodass Maus-, Trackpad- und Touch-Gerätebenutzer auf das Label klicken können, um das entsprechende Steuerelement zu aktivieren, und es stellt auch einen zugänglichen Namen für Bildschirmleseprogramme bereit, die ihren Benutzern vorgelesen werden. Weitere Einzelheiten zu Formularetiketten finden Sie in unserer [Anleitung zum Strukturieren eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es bestimmt, wie das {{HTMLelement("input")}}-Element aussieht und sich verhält. Sie finden mehr darüber im Artikel [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — der Standardwert für dieses Attribut. Er repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, das ein einzeiliges Textfeld definiert, das nur eine gut formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein einfaches Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen der eingegebenen Daten durchführt. Es führt auch zu einem passenderen Tastaturlayout für die Eingabe von E-Mail-Adressen (z.B. mit einem @-Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen, wie Smartphones. Mehr über Formularvalidierung erfahren Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenheiten von HTML. Der `<input>`-Tag ist ein {{Glossary("void_element", "Leerelement")}}, was bedeutet, dass es keinen schließenden Tag benötigt. {{HTMLElement("textarea")}} ist kein Leerelement, das heißt, es sollte mit dem richtigen End-Tag geschlossen werden. Dies hat Auswirkungen auf ein bestimmtes Feature von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, wie hier:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast fertig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "übermitteln" kann, nachdem er das Formular ausgefüllt hat. Dies wird durch das {{HTMLelement("button")}}-Element erreicht; fügen Sie das folgende direkt über dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset`, oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diesen Schaltflächentyp nicht verwenden, es sei denn, Sie haben wirklich einen guten Grund dafür.
- Ein Klick auf eine `button`-Schaltfläche tut _nichts_! Das klingt albern, ist jedoch äußerst nützlich für den Bau von benutzerdefinierten Schaltflächen — Sie können deren gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label erlaubt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt erlaubt, was komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegende Formulargestaltung

Nachdem Sie den HTML-Code Ihres Formulars fertig geschrieben haben, versuchen Sie, ihn zu speichern und ihn in einem Browser anzusehen. Im Moment werden Sie feststellen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie glauben, den HTML-Code nicht richtig zu haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer, schön zu gestalten. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen die Gestaltung von Formularen im Detail beizubringen, also werden wir Sie im Moment nur dazu bringen, etwas CSS hinzuzufügen, damit es okay aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite innerhalb Ihres HTML-Headers hinzu. Es sollte so aussehen:

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

Speichern und laden Sie neu, und Sie werden sehen, dass Ihr Formular viel weniger hässlich aussehen sollte.

> [!NOTE]
> Sie können unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil, und vielleicht der kniffligste, ist die Verarbeitung der Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wohin und wie die Daten dank der Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) gesendet werden.

Wir stellen ein `name`-Attribut für jedes Formularsteuerelement bereit. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen er jedem Datenelement geben soll, und auf der Serverseite lassen sie den Server jedes Datenelement nach Name behandeln. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut bei jedem Formularwidget verwenden, das ein bestimmtes Datenelement sammeln wird. Lassen Sie uns noch einmal einige unserer Formularcodes anschauen:

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

In unserem Beispiel sendet das Formular 3 Datenelemente mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden an die URL `/my-handling-form-page` unter Verwendung der [HTTP `POST`](/de/docs/Web/HTTP/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen enthalten in der HTTP-Anfrage erhalten. Wie dieses Skript diese Daten behandelt, bleibt Ihnen überlassen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Handhabung von Formulardaten. Es liegt außerhalb des Rahmens dieses Tutorials, tief in dieses Thema einzutauchen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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

Das ist jedoch erst der Anfang — jetzt ist es an der Zeit, sich eingehender damit zu beschäftigen. Formulare haben viel mehr Kraft, als wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

### Erweiterte Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
