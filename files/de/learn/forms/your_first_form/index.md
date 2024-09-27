---
title: Ihr erstes Formular
slug: Learn/Forms/Your_first_form
l10n:
  sourceCommit: 9d96a6170f88c8ebf3e865f9f6f3b89a0e766abe
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars. Dazu gehören das Entwerfen eines einfachen Formulars, die Implementierung mit den richtigen HTML-Formularsteuerungen und anderen HTML-Elementen, das Hinzufügen einer sehr einfachen Formatierung über CSS und die Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später im Modul auf jeden dieser Unterpunkte näher eingehen.

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
        Vertrautheit damit gewinnen, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt, und die grundlegenden HTML-Elemente, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Modul) oder clientseitig verwendet werden, um die Schnittstelle sofort in irgendeiner Weise zu aktualisieren (zum Beispiel, um ein weiteres Element zu einer Liste hinzuzufügen oder ein UI-Feature ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal **Widgets** genannt) sowie einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können ein- oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente gibt, die Sie kennenlernen werden.

Formularsteuerelemente können auch programmiert werden, um bestimmte Formate oder Werte zu erzwingen (**Formularvalidierung**) und in Verbindung mit Textlabels eingesetzt werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Benutzern beschreiben.

## Gestaltung Ihres Formulars

Bevor Sie anfangen zu programmieren, ist es immer besser, einen Schritt zurückzutreten und sich Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Entwurfs wird Ihnen helfen, das richtige Datenset zu definieren, das Sie den Benutzer eingeben lassen möchten. Aus der Sicht der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und konzentriert: fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Formulare zu gestalten ist ein wichtiger Schritt beim Aufbau einer Website oder Anwendung. Es geht über den Umfang dieses Artikels hinaus, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich mit diesem Thema befassen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über UX von Formularen](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), darunter einen älteren, aber immer noch relevanten [umfassenden Leitfaden für die Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexeren Themen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Machen wir einen groben Entwurf.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular enthält drei Textfelder und eine Schaltfläche. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Mit einem Klick auf die Schaltfläche werden die Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTMLs

Ok, lassen Sie uns das HTML für unser Formular erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — dort geben Sie Ihr Formular-HTML ein.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Containerelement wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Umfassen von Formularen; es unterstützt auch einige spezielle Attribute zur Konfiguration des Verhaltens des Formulars. Alle seine Attribute sind optional, aber es ist Standardpraxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) zu setzen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden in unserem Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später darauf eingehen, wie diese Attribute funktionieren.

Fügen Sie vorerst das obige {{htmlelement("form")}}-Element in Ihr HTML {{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: der Dateneingabeteil enthält drei Textfelder, von denen jedes ein entsprechendes {{HTMLelement("label")}} hat:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld des Typs E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf den HTML-Code benötigen wir etwas wie das folgende, um diese Formularelemente zu implementieren:

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

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Barrierefreiheit ist es wichtig, ein explizites Label für jedes Formularelement einzuschließen. Beachten Sie die Verwendung des `for`-Attributs an allen {{HTMLelement("label")}}-Elementen, das den Wert der [`id`](/de/docs/Web/HTML/Global_attributes/id) des Formularelements, mit dem es verknüpft ist, als Wert nimmt — dies ist, wie Sie ein Formularelement mit seinem Label verknüpfen.

Dies bringt großen Nutzen — es verbindet das Label mit dem Formularelement, sodass Maus-, Trackpad- und Touchgerätebenutzer auf das Label klicken können, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen für Screenreader, der ihren Benutzern vorgelesen wird. Weitere Details zu Formularlabels finden Sie in der [Anleitung zum Strukturieren eines Webformulars](/de/docs/Learn/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es das Aussehen und das Verhalten des {{HTMLelement("input")}}-Elementes definiert. Sie werden mehr darüber im Artikel [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls) später erfahren.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabeelement — den Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabeelement verwenden wir den Wert {{HTMLelement("input/email", "email")}}, das ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen der vom Benutzer eingegebenen Daten durchführt. Es sorgt auch dafür, dass eine angemessenere Tastaturanordnung für die Eingabe von E-Mail-Adressen erscheint (z.B. mit einem @-Symbol standardmäßig), auf Geräten mit dynamischen Tastaturen wie Smartphones. Sie erfahren mehr über Formularvalidierung im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später.

Nicht zuletzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenheiten von HTML. Das `<input>`-Tag ist ein [leeres Element](/de/docs/Glossary/void_element), was bedeutet, dass es kein schließendes Tag benötigt. {{HTMLelement("textarea")}} ist kein leeres Element, was bedeutet, dass es mit dem richtigen Endtag geschlossen werden sollte. Das hat Auswirkungen auf eine spezifische Funktion von Formularen: die Art, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLelement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut verwenden, wie hier:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie dagegen einen Standardwert für ein {{HTMLelement("textarea")}} definieren möchten, platzieren Sie ihn zwischen den öffnenden und schließenden Tags des {{HTMLelement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast fertig; wir müssen nur noch eine Schaltfläche hinzufügen, um dem Benutzer das Senden oder "Abschicken" seiner Daten zu ermöglichen, nachdem er das Formular ausgefüllt hat. Dies geschieht durch die Verwendung des {{HTMLelement("button")}}-Elements; fügen Sie das folgende direkt über dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{HTMLelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut — dies akzeptiert einen der drei Werte: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Daten des Formulars an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formularelemente sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, deshalb sollten Sie diesen Schaltflächentyp vermeiden, es sei denn, Sie haben wirklich einen guten Grund, ihn einzuschließen.
- Ein Klick auf eine `button`-Schaltfläche tut _nichts_! Das klingt albern, ist aber erstaunlich nützlich, um benutzerdefinierte Schaltflächen zu erstellen — Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLelement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z.B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements ist, dass das {{HTMLelement("input")}}-Element nur reinen Text in seinem Label erlaubt, während das {{HTMLelement("button")}}-Element vollen HTML-Inhalt ermöglicht und damit komplexere, kreativere Schaltflächeninhalte zulässt.

## Grundlegendes Styling des Formulars

Jetzt, da Sie mit dem Schreiben Ihres Formular-HTMLs fertig sind, versuchen Sie, es zu speichern und in einem Browser anzusehen. Im Moment wird es ziemlich hässlich aussehen.

> [!NOTE]
> Wenn Sie nicht denken, das HTML-Kodierung richtig gemacht zu haben, versuchen Sie, es mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwierig schön zu stylen. Es geht über den Umfang dieses Artikels hinaus, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir Sie im Moment nur dazu bringen, ein wenig CSS hinzuzufügen, damit es gut aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element in Ihre Seite ein, innerhalb Ihres HTML-Kopfes. Es sollte folgendermaßen aussehen:

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

Speichern und laden Sie die Seite neu, und Sie werden sehen, dass Ihr Formular viel weniger hässlich aussehen sollte.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil und vielleicht der kniffligste ist das Verarbeiten von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wohin und wie die Daten gesendet werden, dank der Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

Wir stellen ein `name`-Attribut für jedes Formularelement bereit. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen jedes einzelne Datenelement haben soll, und auf der Serverseite ermöglichen sie dem Server, jedes Datenelement anhand seines Namens zu verarbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formularelement verwenden, das ein bestimmtes Datenelement sammelt. Schauen wir uns nochmals ein wenig von unserem Formularcode an:

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

In unserem Beispiel sendet das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden an die URL `/my-handling-form-page` unter Verwendung der [HTTP-`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten als eine Liste von 3 Schlüssel/Wert-Elementen, die im HTTP-Anfragepaket enthalten sind, empfangen. Die Art und Weise, wie dieses Skript die Daten verarbeitet, liegt bei Ihnen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C# usw.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es geht über den Umfang dieses Leitfadens hinaus, um auf dieses Thema tief einzugehen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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

Das ist jedoch nur der Anfang — jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben weitaus mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu beherrschen.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerungen erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularsteuerelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
