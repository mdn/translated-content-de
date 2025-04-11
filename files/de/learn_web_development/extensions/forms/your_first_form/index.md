---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung im Erstellen eines Webformulars. Dazu gehört das Design eines einfachen Formulars, die Implementierung mit den richtigen HTML-Formularsteuerungen und anderen HTML-Elementen, das Hinzufügen einer sehr einfachen Gestaltung über CSS und die Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jedes dieser Unterthemen ausführlicher eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit damit zu erlangen, was Webformulare sind, wofür sie verwendet werden, wie man ihren Entwurf plant und die grundlegenden HTML-Elemente, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptpunkte der Interaktion zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul), oder sie werden clientseitig verwendet, um die Benutzeroberfläche sofort in irgendeiner Weise zu aktualisieren (zum Beispiel ein weiteres Element zu einer Liste hinzufügen oder ein UI-Feature anzeigen oder verbergen).

Das HTML eines Webformulars besteht aus einer oder mehreren **Formularsteuerungen** (manchmal auch als **Widgets** bezeichnet) sowie einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren – sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerungen können einzeilige oder mehrzeilige Textfelder, Dropdown-Felder, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente zu lernen gibt.

Formularsteuerungen können auch programmiert werden, um bestimmte Formate oder Werte zu erzwingen, die eingegeben werden müssen (**Formularvalidierung**), und sie sind mit Textbeschriftungen gepaart, die ihren Zweck sowohl sehenden als auch sehbehinderten Nutzern beschreiben.

## Entwurf Ihres Formulars

Bevor Sie mit dem Coden beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Ein schnelles Mockup-Design wird Ihnen helfen, den richtigen Satz von Daten zu definieren, den Sie Ihren Nutzern abfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, sich daran zu erinnern, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und konzentrieren Sie sich auf das Wesentliche: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen abzudecken. Wenn Sie jedoch tiefer in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), darunter einen älteren, aber immer noch relevanten [umfassenden Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine sehr nachdenkliche Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Themen wie [seitenübergreifenden Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das Formular zum Erstellen, grobe Skizze](form-sketch-low.jpg)

Unser Formular enthält drei Textfelder und eine Schaltfläche. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Durch Klicken auf die Schaltfläche werden deren Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTML

Ok, lassen Sie uns das HTML für unser Formular erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Bevor Sie fortfahren, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden hier Ihr Formular-HTML eingeben.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie folgt:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Enthalten von Formularen konzipiert; es unterstützt auch einige spezifische Attribute zur Konfiguration des Verhaltens des Formulars. Alle seine Attribute sind optional, aber es ist üblich, mindestens die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) einzustellen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden später in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data schauen, wie diese Attribute funktionieren.

Fügen Sie vorerst das obige {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld des Typs E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas in der folgenden Art, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formular-Code, damit er wie oben aussieht.

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Barrierefreiheit fügen wir jedem Formular-Steuerelement ein explizites Label hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs bei allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugehörigen Formular-Steuerelements annimmt – so verknüpfen Sie ein Formular-Steuerelement mit seinem Label.

Es gibt großen Nutzen, dies zu tun – es verknüpft das Label mit dem Formular-Steuerelement, sodass Benutzer von Maus, Touchpad und Touch-Geräten durch Klicken auf das Label das entsprechende Formular-Steuerelement aktivieren können. Es bietet auch einen zugänglichen Namen, den Bildschirmlesegeräte ihren Benutzern vorlesen können. Weitere Informationen zu Formular-Labels finden Sie in der [Anleitung zum Strukturieren eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, da es die Erscheinung und das Verhalten des {{HTMLelement("input")}}-Elements definiert. Sie erfahren mehr darüber im Artikel [Grundlegende native Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld – den Standardwert für dieses Attribut. Es stellt ein einfaches einzeiliges Textfeld dar, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine wohlgeformte E-Mail-Adresse akzeptiert. Dies verwandelt ein einfaches Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen der vom Benutzer eingegebenen Daten durchführt. Es sorgt außerdem dafür, dass auf Geräten mit dynamischen Tastaturen, wie z. B. Smartphones, ein passenderes Tastaturlayout zum Eingeben von E-Mail-Adressen (z. B. mit einem @-Symbol standardmäßig) erscheint. Mehr über Formularvalidierung erfahren Sie im Artikel zur [clientseitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

Nicht zuletzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Besonderheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen schließenden Tag benötigt. {{HTMLElement("textarea")}} ist kein void element, was bedeutet, dass es mit dem entsprechenden Endtag geschlossen werden sollte. Dies hat Auswirkungen auf ein spezifisches Merkmal von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andernfalls, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die Öffnungs- und Schließ-Tags des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen lediglich eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "absenden" kann, sobald er das Formular ausgefüllt hat. Dies erfolgt durch Verwendung des {{HTMLelement("button")}}-Elements; fügen Sie das Folgende direkt über dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut – dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Daten des Formulars an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht gilt dies als schlechte Praxis, daher sollten Sie diese Art von Schaltfläche nur hinzufügen, wenn Sie wirklich einen guten Grund dafür haben.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, ist aber erstaunlich nützlich für den Aufbau benutzerdefinierter Schaltflächen – Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z. B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements ist, dass das {{HTMLelement("input")}}-Element in seinem Label nur einfachen Text zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt ermöglicht, was komplexere, kreativere Schaltflächeninhalte erlaubt.

## Grundlegende Formular-Gestaltung

Nachdem Sie den HTML-Code für Ihr Formular fertiggestellt haben, versuchen Sie, es zu speichern und in einem Browser anzusehen. Momentan sehen Sie, dass es ziemlich unschön aussieht.

> [!NOTE]
> Wenn Sie nicht glauben, dass Sie den HTML-Code richtig haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen – siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind bekannt dafür, dass sie schwer schön zu gestalten sind. Es liegt außerhalb des Umfangs dieses Artikels, Ihnen die Formulargestaltung im Detail beizubringen, daher werden wir Sie an dieser Stelle lediglich dazu bringen, etwas CSS hinzuzufügen, um es zumindest in Ordnung aussehen zu lassen.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb Ihres HTML-Kopfes. Es sollte folgendermaßen aussehen:

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

Speichern und neu laden, und Sie werden sehen, dass Ihr Formular deutlich weniger unschön aussehen sollte.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte Teil, und vielleicht der kniffligste, besteht darin, Formulardaten auf der Serverseite zu verarbeiten. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten dank der Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) gesendet werden sollen.

Wir verwenden ein `name`-Attribut für jedes Formular-Steuerelement. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen er jedem Datenelement geben soll, und auf der Serverseite können sie dem Server helfen, jedes Datenelement nach Namen zu verarbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut für jedes Formular-Widget verwenden, das ein bestimmtes Datum sammeln wird. Schauen wir uns einige unseres Formularcodes erneut an:

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

In unserem Beispiel wird das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message` senden. Diese Daten werden an die URL `/my-handling-form-page` mit der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen, die in der HTTP-Anfrage enthalten sind, empfangen. Wie dieses Skript mit den Daten umgeht, liegt bei Ihnen. Jede Serverseitensprache (PHP, Python, Ruby, Java, C#, usw.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es liegt außerhalb des Umfangs dieses Tutorials, dieses Thema ausführlich zu behandeln, aber wenn Sie mehr darüber erfahren möchten, haben wir in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später Beispiele bereitgestellt.

## Zusammenfassung

Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht live so aus:

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

Das ist jedoch erst der Anfang – jetzt ist es Zeit, sich genauer anzusehen. Formulare haben weit mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
