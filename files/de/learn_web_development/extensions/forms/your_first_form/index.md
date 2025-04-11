---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel unserer Serie bietet Ihnen die erste Erfahrung bei der Erstellung eines Webformulars. Dazu gehört das Entwerfen eines einfachen Formulars, die Implementierung mit den richtigen HTML-Steuerelementen und anderen HTML-Elementen, das Hinzufügen einfacher Stile über CSS und die Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jeden dieser Unterthemen im Detail eingehen.

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
        Vertrautheit damit erlangen, was Webformulare sind, wofür sie verwendet werden, wie man sie gestaltet und welche grundlegenden HTML-Elemente man für einfache Fälle benötigt.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptkontaktpunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare erlauben es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Schnittstelle auf irgendeine Weise sofort zu aktualisieren (zum Beispiel ein weiteres Element zur Liste hinzufügen oder ein UI-Feature anzeigen oder verbergen).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt), plus einigen zusätzlichen Elementen zur Strukturierung des gesamten Formulars - sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerelemente können einzeilige oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden meist mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch andere Elemente zu erlernen gibt.

Formularsteuerelemente können auch so programmiert werden, dass sie bestimmte Formate oder Werte verlangen (**Formularvalidierung**), und mit Textbeschriftungen versehen werden, die ihren Zweck für sehende und sehbehinderte Benutzer beschreiben.

## Gestaltung Ihres Formulars

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, Ihr Formular zu durchdenken. Das Entwerfen eines schnellen Mockups hilft Ihnen dabei, den richtigen Satz von Daten zu definieren, den Sie Ihren Benutzer abfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Leute zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Die Gestaltung von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es ist nicht der Umfang dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich mit diesem Thema beschäftigen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Forms UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels [Umfassender Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Themen wie [mehrseitige Formulare](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel erstellen wir ein einfaches Kontaktformular. Lassen Sie uns eine grobe Skizze machen.

![Das Formular, das gebaut werden soll, grobe Skizze](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Durch Drücken der Schaltfläche werden die Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres HTML-Formulars

Lassen Sie uns das HTML für unser Formular erstellen. Wir verwenden die folgenden HTML-Elemente: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, machen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) - Sie werden dort Ihr Formular-HTML eingeben.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber spezifisch zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute zur Konfiguration der Funktionsweise des Formulars. Alle seine Attribute sind optional, aber es ist gängige Praxis, immer mindestens die [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)- und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribute zu setzen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Formulardaten gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet wird (in der Regel `get` oder `post`).

> [!NOTE]
> Wir werden später in unserem [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)-Artikel darauf eingehen, wie diese Attribute funktionieren.

Fügen Sie für jetzt das obige {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, jeweils mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabe vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas Ähnliches wie das Folgende, um diese Formular-Widgets zu implementieren:

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

Die {{HTMLelement("p")}}-Elemente sind dazu da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Barrierefreiheit schließen wir ein explizites Label für jedes Formular-Steuerelement ein. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugeordneten Formularsteuerelements nimmt - auf diese Weise verknüpfen Sie ein Formularsteuerelement mit seinem Label.

Das bringt große Vorteile: Es assoziiert das Label mit dem Formularsteuerelement und ermöglicht es Maus-, Trackpad- und Touch-Geräte-Benutzern, auf das Label zu klicken, um das entsprechende Steuerelement zu aktivieren, und es bietet auch einen zugänglichen Namen für Bildschirmleser, die ihren Benutzern vorgelesen werden. Weitere Einzelheiten zu Formular-Labels finden Sie in der [Anleitung zur Strukturierung eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, da es die Art und Weise definiert, wie das {{HTMLelement("input")}}-Element angezeigt und verwendet wird. Mehr darüber erfahren Sie im späteren Artikel [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls).

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für die erste Eingabe - den Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für die zweite Eingabe verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen der eingegebenen Daten durchführt. Außerdem wird auf Geräten mit dynamischen Tastaturen, wie Smartphones, eine passendere Tastatur angezeigt, um E-Mail-Adressen einzugeben (z. B. mit einem @-Symbol standardmäßig). Mehr über Formularvalidierung erfahren Sie im späteren Artikel zur [client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

Zuletzt, aber nicht weniger wichtig, beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Kuriositäten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "Leerelement")}}, was bedeutet, dass es kein schließendes Tag benötigt. {{HTMLelement("textarea")}} ist kein Leerelement, was bedeutet, dass es mit dem richtigen schließenden Tag geschlossen werden sollte. Dies hat eine Auswirkung auf eine spezifische Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, platzieren Sie ihn zwischen dem öffnenden und schließenden Tag des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "absenden" kann, nachdem er das Formular ausgefüllt hat. Dies wird mit dem {{HTMLelement("button")}}-Element gemacht; fügen Sie das Folgende direkt vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut - dieses akzeptiert einen der drei Werte: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus Sicht der Benutzererfahrung wird dies als schlechte Praxis angesehen, daher sollten Sie diesen Button-Typ vermeiden, es sei denn, Sie haben wirklich einen guten Grund, einen einzuschließen.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, ist aber erstaunlich nützlich für den Bau benutzerdefinierter Schaltflächen - Sie können deren gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können das {{HTMLElement("input")}}-Element auch mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur reinen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt erlaubt und damit komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Styling des Formulars

Da Sie nun das HTML für Ihr Formular fertiggestellt haben, versuchen Sie, es zu speichern und in einem Browser anzusehen. Im Moment werden Sie sehen, dass es ziemlich unansehnlich aussieht.

> [!NOTE]
> Wenn Sie denken, dass Ihr HTML-Code nicht richtig ist, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen - siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([siehe auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind bekanntermaßen schwer schön zu stylen. Es ist nicht der Umfang dieses Artikels, Ihnen das Styling von Formularen im Detail beizubringen, also werden wir Ihnen momentan nur etwas CSS geben, damit es okay aussieht.

Fügen Sie zuerst ein {{htmlelement("style")}}-Element in Ihre Seite ein, innerhalb Ihres HTML-Kopfes. Es sollte so aussehen:

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

Speichern und aktualisieren Sie, und Sie werden sehen, dass Ihr Formular viel weniger unansehnlich aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) finden ([siehe auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte Teil und möglicherweise der schwierigste ist das Handhaben von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten gesendet werden sollen, dank der [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)- und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribute.

Wir geben jedem Formularsteuerelement ein `name`-Attribut. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie sagen dem Browser, welchen Namen er jedem Datenelement geben soll, und auf der Serverseite ermöglichen sie es dem Server, jedes Datenelement nach Namen zu verarbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formular-Widget verwenden, das ein bestimmtes Datenelement sammeln wird. Lassen Sie uns noch einmal einige unserer Formularcodes betrachten:

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

In unserem Beispiel wird das Formular 3 Datenelemente senden, die `user_name`, `user_email` und `user_message` genannt werden. Diese Daten werden an die URL `/my-handling-form-page` mit der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Paaren enthalten im HTTP-Request empfangen. Wie dieses Skript diese Daten verarbeitet, liegt bei Ihnen. Jede Serverseitensprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zum Verarbeiten von Formulardaten. Es ist nicht der Umfang dieses Tutorials, tief in dieses Thema einzutauchen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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

Das ist jedoch erst der Anfang - nun ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben weitaus mehr Macht, als wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
