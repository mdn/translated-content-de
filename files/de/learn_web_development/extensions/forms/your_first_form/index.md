---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel unserer Serie bietet Ihnen Ihre erste Erfahrung in der Erstellung eines Webformulars, einschließlich des Designs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formular-Steuerelementen und anderen HTML-Elementen, der Hinzufügung von sehr einfachem Styling über CSS und der Beschreibung, wie Daten an einen Server gesendet werden. Auf jeden dieser Teilaspekte werden wir später im Modul genauer eingehen.

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
        Vertrautheit mit dem, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenken sollte, und den grundlegenden HTML-Elementen, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptanlaufpunkte für die Interaktion zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Benutzeroberfläche sofort in irgendeiner Weise zu aktualisieren (zum Beispiel, um ein weiteres Element zu einer Liste hinzuzufügen oder eine UI-Funktion ein- oder auszublenden).

HTML eines Webformulars besteht aus einem oder mehreren **Formular-Steuerelementen** (manchmal auch **Widgets** genannt) sowie einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können einzeilige oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Radio-Buttons sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Tag erstellt, obwohl es auch einige andere Elemente zu lernen gibt.

Formular-Steuerelemente können programmiert werden, um bestimmte Formate oder Werte zu erzwingen (**Formularvalidierung**) und sind mit Textetiketten gekoppelt, die ihren Zweck sowohl sehenden als auch sehbehinderten Benutzern beschreiben.

## Entwerfen Ihres Formulars

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Entwurfs hilft Ihnen, den richtigen Satz von Daten zu definieren, den Sie von Ihrem Benutzer anfordern möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Aufbau einer Website oder Anwendung. Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen abzudecken, aber wenn Sie sich in dieses Thema vertiefen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formular-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), darunter einen älteren, aber immer noch relevanten [Umfangreichen Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel erstellen wir ein einfaches Kontaktformular. Lassen Sie uns eine grobe Skizze anfertigen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Durch Anklicken der Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktives Lernen: Umsetzung unseres Formular-HTMLs

Ok, probieren wir die Erstellung des HTMLs für unser Formular aus. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden Ihr Formular-HTML hier eingeben.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie diesem:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist Standardpraxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) festzulegen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars bei der Übermittlung gesendet werden sollen.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (üblicherweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie nun das oben stehende {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "Einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabe vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
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

Aktualisieren Sie Ihren Formularcode, sodass er wie der obenstehende aussieht.

Die {{HTMLelement("p")}}-Elemente sind dazu da, unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Zugänglichkeit fügen wir ein explizites Label für jedes Formular-Steuerelement hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugehörigen Formular-Steuerelements nimmt — so ordnen Sie ein Formular-Steuerelement seinem Label zu.

Dies hat einen großen Vorteil — es verknüpft das Label mit dem Formular-Steuerelement, sodass Benutzer von Maus, Trackpad und Touch-Geräten auf das Label klicken können, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen für Bildschirmleseprogramme, um ihren Benutzern vorzulesen. Weitere Details zu Formularlabels finden Sie in der [Anleitung zur Strukturierung eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, da es das Erscheinungsbild und Verhalten des {{HTMLelement("input")}}-Elements definiert. Dazu erfahren Sie mehr im späteren Artikel [Grundlegende native Formular-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls).

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für die erste Eingabe — den Standardwert für dieses Attribut. Er stellt ein grundlegendes einzeiliges Textfeld dar, das jede Art von Texteingabe akzeptiert.
- Für die zweite Eingabe verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine gut formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein einfaches Textfeld in ein Art "intelligentes" Feld, das einige Validierungsprüfungen der vom Benutzer eingegebenen Daten durchführt. Auf Geräten mit dynamischen Tastaturen, wie Smartphones, erscheint auch eine passendere Tastaturanordnung zum Eingeben von E-Mail-Adressen (z. B. mit einem @-Zeichen standardmäßig). Mehr über Formularvalidierung erfahren Sie im späteren Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

Last but not least, beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "Void-Element")}}, was bedeutet, dass es keinen Schlusstag benötigt. {{HTMLElement("textarea")}} ist kein Void-Element, was bedeutet, dass es mit dem richtigen Endtag geschlossen werden sollte. Dies hat Auswirkungen auf eine spezifische Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie dagegen einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die Öffnungs- und Schlusstag des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast fertig; wir müssen nur noch eine Schaltfläche hinzufügen, mit der der Benutzer seine Daten senden oder "übermitteln" kann, sobald er das Formular ausgefüllt hat. Dies wird durch die Verwendung des {{HTMLelement("button")}}-Elements gemacht; fügen Sie das Folgende kurz vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht wird dies allgemein als schlechte Praxis angesehen, daher sollten Sie diese Art von Schaltfläche vermeiden, es sei denn, Sie haben wirklich einen guten Grund, eine hinzuzufügen.
- Ein Klick auf eine `button`-Schaltfläche tut _nichts_! Das klingt albern, aber es ist unglaublich nützlich, um benutzerdefinierte Schaltflächen zu erstellen — Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können das {{HTMLElement("input")}}-Element auch mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z. B. `<input type="submit">`. Der Hauptvorteil des {{htmlelement("button")}}-Elements ist, dass das {{HTMLelement("input")}}-Element nur reinen Text in seinem Label erlaubt, während das {{htmlelement("button")}}-Element vollständigen HTML-Inhalt zulässt, was komplexeres, kreativeres Schaltflächen-Content ermöglicht.

## Grundlegendes Formularstyling

Nachdem Sie den HTML-Code Ihres Formulars abgeschlossen haben, versuchen Sie, es zu speichern und in einem Browser zu betrachten. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie denken, dass Ihr HTML-Code nicht richtig ist, vergleichen Sie ihn mit unserem fertigen Beispiel — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer schön zu stylen. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen detailliertes Formularstyling beizubringen, daher werden wir Sie im Moment nur dazu bringen, etwas CSS hinzuzufügen, damit es besser aussieht.

Zunächst fügen Sie ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb des HTML-Kopfes. Es sollte so aussehen:

```html
<style>
  /* CSS goes here */
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
  border: 1px solid #cccccc;
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
  border: 1px solid #999999;
}

input:focus,
textarea:focus {
  /* Set the outline width and style */
  outline-style: solid;
  /* To give a little highlight on active elements */
  outline-color: black;
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

Speichern und neu laden, und Sie werden sehen, dass Ihr Formular viel weniger hässlich aussehen sollte.

> [!NOTE]
> Unsere Version finden Sie auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil und vielleicht der kniffligste ist die Handhabung von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wohin und wie die Daten gesendet werden, dank der [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)- und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribute.

Wir stellen ein `name`-Attribut für jedes Formular-Steuerelement bereit. Die Namen sind sowohl client- als auch serverseitig wichtig; sie teilen dem Browser mit, welchen Namen er jedem Datenstück geben soll, und serverseitig lassen sie den Server jedes Datenstück nach Namen behandeln. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut für jedes Formular-Widget verwenden, das ein bestimmtes Datenstück sammelt. Werfen wir erneut einen Blick auf einige unserer Formularcodes:

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

In unserem Beispiel sendet das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message`. Diese Daten werden mit der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Serverseitig empfängt das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Paaren, die in der HTTP-Anfrage enthalten sind. Wie dieses Skript die Daten verarbeitet, bleibt Ihnen überlassen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es liegt außerhalb des Umfangs dieses Tutorials, tief in dieses Thema einzutauchen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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
  border: 1px solid #cccccc;
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
  border: 1px solid #999999;
}

input:focus,
textarea:focus {
  /* To give a little highlight on active elements */
  border-color: black;
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

Das ist jedoch nur der Anfang — jetzt ist es an der Zeit, einen genaueren Blick darauf zu werfen. Formulare haben weit mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
