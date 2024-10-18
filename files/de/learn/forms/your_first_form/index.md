---
title: Ihr erstes Formular
slug: Learn/Forms/Your_first_form
l10n:
  sourceCommit: f575c31108f934da524ffcfddd8420f13f88501f
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich des Designs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerungen und anderen HTML-Elementen, dem Hinzufügen von sehr einfachem Styling über CSS und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später im Modul auf jeden dieser Unterthemen ausführlicher eingehen.

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
        Vertrautheit mit dem, was Webformulare sind, wofür sie verwendet werden, wie man über ihr Design nachdenkt und welche grundlegenden HTML-Elemente Sie für einfache Fälle benötigen, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind eine der Hauptschnittstellen zwischen einem Nutzer und einer Website oder Anwendung. Formulare ermöglichen es Nutzern, Daten einzugeben, die im Allgemeinen an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Schnittstelle auf irgendeine Weise sofort zu aktualisieren (zum Beispiel ein weiteres Element zu einer Liste hinzuzufügen oder ein UI-Feature anzuzeigen oder auszublenden).

HTML von Webformularen besteht aus einem oder mehreren **Formularsteuerungen** (manchmal auch **Widgets** genannt), sowie einigen zusätzlichen Elementen zur Strukturierung des gesamten Formulars — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerungen können Einzel- oder Mehrzeilen-Textfelder, Dropdown-Felder, Schaltflächen, Kontrollkästchen oder Optionsschaltflächen sein und werden meist mit dem {{htmlelement("input")}} Element erstellt, obwohl es auch einige andere Elemente zu lernen gibt.

Formularsteuerungen können auch so programmiert werden, dass sie bestimmte Formate oder Werte zur Eingabe erzwingen (**Formularvalidierung**) und mit Textetiketten gepaart werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Nutzern beschreiben.

## Ihr Formular entwerfen

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich Zeit zu nehmen, um über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups hilft Ihnen, die richtigen Daten zu definieren, die Sie vom Nutzer erfragen möchten. Aus Benutzererfahrungssicht (UX) ist es wichtig, daran zu denken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Nutzer zu verlieren. Halten Sie es einfach und fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es liegt außerhalb des Rahmens dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie tiefer in dieses Thema einsteigen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten [Umfassender Leitfaden zur Benutzbarkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) Artikels.
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden bewährten Praktiken](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) zu komplexen Themen wie [mehrseitige Formulare](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grobe Skizze](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Nutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Durch Klicken auf die Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktiv lernen: Unser Formular-HTML implementieren

Ok, versuchen wir, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — dort fügen Sie Ihr Formular-HTML ein.

### Das `<form>` Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}} Element, wie diesem:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formell ein Formular. Es ist ein Containerelement wie ein {{HTMLelement("section")}} oder {{HTMLelement("footer")}} Element, jedoch speziell für das Enthalten von Formularen; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist Standardpraxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) zu setzen:

- Das `action` Attribut definiert die Stelle (URL), an die die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method` Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet werden soll (gewöhnlich `get` oder `post`).

> [!NOTE]
> Wir werden uns ansehen, wie diese Attribute in unserem Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später funktionieren.

Fügen Sie für jetzt das obige {{htmlelement("form")}} Element in Ihr HTML {{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>` Elemente

Unser Kontaktformular ist nicht kompliziert: Der Dateneingabebereich enthält drei Textfelder, von denen jedes ein entsprechendes {{HTMLelement("label")}} hat:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "Eingabefeld einzeiliger Text")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein einzeiliges Eingabefeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf den HTML-Code benötigen wir etwas wie das Folgende, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formularcode so, dass er wie der obige aussieht.

Die {{HTMLelement("p")}} Elemente sind dazu da, unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für die Benutzerfreundlichkeit und Zugänglichkeit fügen wir ein explizites Etikett für jedes Formularsteuerungsfeld ein. Beachten Sie die Verwendung des Attributs [`for`](/de/docs/Web/HTML/Attributes/for) auf allen {{HTMLelement("label")}} Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) der zugehörigen Formularsteuerung übernimmt — so verknüpfen Sie eine Formularsteuerung mit ihrem Etikett.

Es gibt großen Nutzen darin, dies zu tun — es verbindet das Etikett mit der Formularsteuerung, ermöglicht Nutzern von Maus, Touchpad und Touchgeräten, auf das Etikett zu klicken, um die entsprechende Steuerung zu aktivieren, und es gibt auch für Screenreader-Nutzer einen zugänglichen Namen, der vorgelesen werden kann. Weitere Details zu Formularetiketten finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}} Element ist das wichtigste Attribut das `type` Attribut. Dieses Attribut ist extrem wichtig, weil es das Erscheinungsbild und Verhalten des {{HTMLelement("input")}} Elements definiert. Sie werden mehr darüber im Artikel [Grundlegende native Formularsteuerungen](/de/docs/Learn/Forms/Basic_native_form_controls) später erfahren.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — den Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingaben akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, das ein einzeiliges Textfeld definiert, das nur gut formatierte E-Mail-Adressen akzeptiert.
  Dies verwandelt ein einfaches Textfeld in eine Art "intelligentes" Feld, das einige Validierungsüberprüfungen für die vom Nutzer eingegebenen Daten durchführt.
  Es sorgt auch dafür, dass eine für die Eingabe von E-Mail-Adressen geeignetere Tastaturlayout (z.B. mit einem @ Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen, wie Smartphones, erscheint.
  Sie erfahren mehr über Formularvalidierung im Artikel [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später.

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Das ist eine der Eigenheiten von HTML. Das `<input>` Tag ist ein {{Glossary("void_element", "Void-Element")}}, was bedeutet, dass es keinen schließenden Tag benötigt. {{HTMLElement("textarea")}} ist kein Void-Element, was bedeutet, dass es mit dem entsprechenden Endtag geschlossen werden muss. Das wirkt sich auf eine spezifische Funktion von Formularen aus: die Art, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}} Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut verwenden, wie hier:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie dagegen einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, platzieren Sie ihn zwischen den öffnenden und schließenden Tags des {{HTMLElement("textarea")}} Elements, wie hier:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>` Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Nutzer seine Daten senden oder "übermitteln" kann, nachdem er das Formular ausgefüllt hat. Dies wird mit dem {{HTMLelement("button")}} Element gemacht; fügen Sie das Folgende direkt über dem schließenden `</form>` Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}} Element akzeptiert auch ein `type` Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit` Schaltfläche (der Standardwert) sendet die Formulardaten auf die durch das `action` Attribut des {{HTMLelement("form")}} Elements definierte Webseite.
- Ein Klick auf eine `reset` Schaltfläche setzt alle Formularsteuerungen sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie vermeiden, diesen Schaltertyp zu verwenden, es sei denn, Sie haben wirklich einen guten Grund, ihn einzuschließen.
- Ein Klick auf eine `button` Schaltfläche macht _nichts_! Das klingt albern, aber es ist unglaublich nützlich für den Aufbau benutzerdefinierter Schaltflächen — Sie können deren gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}} Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}} Elements besteht darin, dass das {{HTMLelement("input")}} Element nur Klartext in seiner Beschriftung erlaubt, während das {{HTMLelement("button")}} Element vollständigen HTML-Inhalt ermöglicht, was komplexere, kreativere Schaltflächeninhalte erlaubt.

## Grundlegendes Formularstyling

Jetzt, da Sie mit dem Schreiben Ihres Formular-HTML-Codes fertig sind, versuchen Sie, es zu speichern und in einem Browser zu betrachten. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie denken, dass Sie den HTML-Code nicht richtig haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer, schön zu stylen. Es liegt außerhalb des Bereichs dieses Artikels, Ihnen im Detail zu lehren, Formulare zu stylen, daher werden wir Sie für den Moment nur dazu bringen, einige CSS hinzuzufügen, damit es einigermaßen aussieht.

Fügen Sie zuerst ein {{htmlelement("style")}} Element zu Ihrer Seite hinzu, innerhalb Ihres HTML-Kopfes. Es sollte so aussehen:

```html
<style>
  …
</style>
```

Fügen Sie im `style` Tag das folgende CSS hinzu:

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

Speichern und neu laden, und Sie werden sehen, dass Ihr Formular deutlich weniger hässlich aussehen sollte.

> [!NOTE]
> Unsere Version finden Sie auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte Teil, und vielleicht der kniffligste, ist die Verarbeitung von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}} Element definiert wo und wie die Daten gesendet werden dank der Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method).

Wir haben ein `name` Attribut für jede Formularsteuerung bereitgestellt. Die Namen sind wichtig auf sowohl der Client- als auch der Serverseite; sie sagen dem Browser, welchen Namen sie jedem Datenstück geben sollen, und auf der Serverseite lassen sie den Server jedes Datenstück nach Namen behandeln. Die Formulardaten werden als Namens-/Wertpaare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name` Attribut auf jedem Formular-Widget verwenden, das ein spezifisches Datenstück sammeln wird. Schauen wir uns etwas von unserem Formularcode noch einmal an:

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

In unserem Beispiel wird das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message` senden. Diese Daten werden an die URL `/my-handling-form-page` mit der [HTTP `POST`](/de/docs/Web/HTTP/Methods/POST) Methode gesendet.

Auf der Serverseite wird das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel-/Wert-Paaren, die in der HTTP-Anfrage enthalten sind, empfangen. Die Art und Weise, wie dieses Skript diese Daten behandelt, liegt bei Ihnen. Jede Serverseite-Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Behandlung von Formulardaten. Es liegt außerhalb des Rahmens dieses Leitfadens, dieses Thema eingehend zu behandeln, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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

Das ist jedoch erst der Anfang — jetzt ist es Zeit, einen tieferen Blick zu werfen. Formulare haben weit mehr Möglichkeiten, als wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschafts-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
