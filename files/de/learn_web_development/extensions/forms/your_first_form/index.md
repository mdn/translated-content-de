---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung bei der Erstellung eines Webformulars. Dazu gehören das Entwerfen eines einfachen Formulars, die Implementierung unter Verwendung der richtigen HTML-Formularsteuerungen und anderer HTML-Elemente, das Hinzufügen einer sehr einfachen Stilgebung über CSS und die Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jedes dieser Unterthemen ausführlicher eingehen.

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
        Vertrautheit mit dem, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt und welche grundlegenden HTML-Elemente Sie für einfache Fälle benötigen, zu gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die im Allgemeinen an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)) oder clientseitig verwendet werden, um die Benutzeroberfläche auf irgendeine Weise sofort zu aktualisieren (zum Beispiel, um ein weiteres Element zu einer Liste hinzuzufügen oder eine UI-Funktion anzuzeigen oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerungen** (manchmal auch als **Widgets** bezeichnet) sowie einigen zusätzlichen Elementen, die helfen, das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerungen können einzeilige oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden meistens mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente gibt, die Sie kennenlernen sollten.

Formularsteuerungen können auch so programmiert werden, dass sie die Eingabe spezifischer Formate oder Werte erzwingen (**Formularvalidierung**) und mit Textbeschriftungen kombiniert werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Benutzern beschreiben.

## Ihr Formular entwerfen

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Ein schnelles Entwurf des Formulars hilft Ihnen dabei, die richtige Datenmenge zu definieren, die Sie Ihren Benutzer abfragen möchten. Vom Standpunkt der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je umfangreicher Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und fokussiert: fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich in dieses Thema vertiefen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine bietet einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten [Umfassenden Leitfadens zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Aspekten wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns ein grobes Skizze anfertigen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Durch Drücken der Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTML

Okay, versuchen wir, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden dort Ihr Formular-HTML einfügen.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie dieses:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Containerelement wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell für das enthalten von Formularen; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist üblich, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) festzulegen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn es übermittelt wird.
- Das `method`-Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet werden soll (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie vorerst das oben angegebene {{htmlelement("form")}}-Element in Ihr HTML {{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht kompliziert: Der Dateneingabenteil enthält drei Textfelder, von denen jedes eine entsprechende {{HTMLelement("label")}} besitzt:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas wie das folgende, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formulscode, um wie oben auszusehen.

Die {{HTMLelement("p")}}-Elemente sind dort, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (später im Artikel). Für höhere Benutzerfreundlichkeit und Zugänglichkeit fügen wir jedem Formularsteuerungselement eine explizite Beschriftung hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, welches als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) der Formularsteuerung enthält, mit der es verknüpft ist — so verbinden Sie ein Formularsteuerungselement mit seiner Beschriftung.

Dies hat einen großen Vorteil — es verknüpft die Beschriftung mit dem Formularsteuerungselement, wodurch Maus-, Trackpad- und Touchgerätebenutzer auf die Beschriftung klicken können, um das entsprechende Steuerungselement zu aktivieren, und es bietet auch einen zugänglichen Namen, den Bildschirmlesegeräte ihren Benutzern vorlesen können. Weitere Details zu Formularbeschriftungen finden Sie in [Anleitung zur Strukturierung eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Bei dem {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es definiert, wie das {{HTMLelement("input")}}-Element erscheint und sich verhält. Sie finden mehr darüber im Artikel [Grundlegende native Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — den Standardwert für dieses Attribut. Es stellt ein einfaches, einzeiliges Textfeld dar, das jede Art von Texteintrag akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine gut geformte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen für die vom Benutzer eingegebenen Daten durchführt. Es verursacht auch ein passenderes Tastaturlayout für die Eingabe von E-Mail-Adressen (z. B. mit einem @-Symbol) auf Geräten mit dynamischen Tastaturen, wie Smartphones. Sie erfahren mehr über Formularvalidierungen im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es kein Schlusstag benötigt. {{HTMLElement("textarea")}} ist kein void element, was bedeutet, dass es mit dem richtigen Endtag geschlossen werden sollte. Dies hat Auswirkungen auf eine spezifische Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, mit der der Benutzer seine Daten senden oder "übermitteln" kann, sobald er das Formular ausgefüllt hat. Dies wird durch das {{HTMLelement("button")}}-Element erledigt; fügen Sie das Folgende direkt über dem schließenden `</form>`-Tag ein:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definierte Webseite.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus Sicht der Benutzererfahrung gilt dies als schlechte Praxis, daher sollten Sie diesen Schaltflächentyp nur verwenden, wenn Sie einen wirklich guten Grund dafür haben.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, ist aber unglaublich nützlich für den Aufbau benutzerdefinierter Schaltflächen – Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erstellen, z. B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements ist, dass das {{HTMLelement("input")}}-Element im Gegensatz zu {{HTMLelement("button")}}-Element nur einfachen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt erlaubt, was komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Formularstyling

Jetzt, da Sie den HTML-Code Ihres Formulars fertiggestellt haben, versuchen Sie, ihn zu speichern und in einem Browser anzusehen. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie denken, Sie haben den HTML-Code nicht richtig hinbekommen, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwierig, schön zu stylen. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir Sie vorerst nur dazu bringen, einige CSS hinzuzufügen, damit es einigermaßen gut aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element auf Ihrer Seite hinzu, innerhalb Ihres HTML-Kopfes. Es sollte so aussehen:

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

Speichern und aktualisieren Sie, und Sie werden sehen, dass Ihr Formular weniger hässlich aussehen sollte.

> [!NOTE]
> Sie können unsere Version auf GitHub bei [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte Teil ist vielleicht der schwierigste: das Behandeln von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten gesendet werden sollen, dank der Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

Wir stellen jedem Formularsteuerungselement ein `name`-Attribut zur Verfügung. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen jedem Datenstück zugeordnet werden soll, und auf der Serverseite ermöglichen sie es dem Server, jedes Datenstück entsprechend seinem Namen zu verarbeiten. Die Formulardaten werden als Namenswert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formular-Widget verwenden, das ein spezielles Datenstück sammelt. Schauen wir uns einige unserer Formularkomponenten noch einmal an:

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

In unserem Beispiel sendet das Formular 3 Dateneinträge namens `user_name`, `user_email` und `user_message`. Diese Daten werden an die URL `/my-handling-form-page` unter Verwendung der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten in Form einer Liste von 3 Schlüssel/Wert-Paaren empfangen, die in der HTTP-Anfrage enthalten sind. Die Art und Weise, wie dieses Skript diese Daten verarbeitet, bleibt Ihnen überlassen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C# usw.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es liegt außerhalb des Umfangs dieses Tutorials, auf dieses Thema umfassend einzugehen, aber wenn Sie mehr darüber wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht so aus, wenn es live ist:

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

Das ist jedoch nur der Anfang — jetzt ist es an der Zeit, einen tieferen Blick darauf zu werfen. Formulare haben weit mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
