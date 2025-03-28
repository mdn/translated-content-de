---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel unserer Reihe bietet Ihnen Ihre allererste Erfahrung mit der Erstellung eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerungen und anderen HTML-Elementen, der Hinzufügung einiger sehr einfacher Formatierungen über CSS und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jedes dieser Unterthemen genauer eingehen.

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
        Vertrautheit damit erlangen, was Webformulare sind, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt und welche grundlegenden HTML-Elemente Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptinteraktionspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die im Allgemeinen an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite verwendet werden, um die Benutzeroberfläche in irgendeiner Weise sofort zu aktualisieren (z. B. ein weiteres Element zu einer Liste hinzufügen oder ein UI-Feature anzeigen oder ausblenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerungen** (manchmal auch **Widgets** genannt), plus einigen zusätzlichen Elementen zur Unterstützung der Strukturierung des gesamten Formulars — sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerungen können ein- oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden meist mit dem {{htmlelement("input")}} Element erstellt, obwohl es auch einige andere Elemente gibt, die zu lernen sind.

Formularsteuerungen können auch programmiert werden, um bestimmte Formate oder Werte zu erzwingen, die eingegeben werden müssen (**Formularvalidierung**), und mit Textetiketten gekoppelt werden, die sowohl sehenden als auch sehbehinderten Benutzern ihren Zweck beschreiben.

## Ihr Formular gestalten

Bevor Sie mit dem Codieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups hilft Ihnen dabei, die richtige Menge an Daten zu definieren, die Sie von Ihrem Benutzer erfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, daran zu denken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, die Leute zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und konzentriert bleiben: Fragen Sie nur nach den Daten, die Sie absolut benötigen.

Das Gestalten von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es ist über den Umfang dieses Artikels hinaus, sich mit der Benutzererfahrung von Formularen zu befassen, aber wenn Sie in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formular-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels über [Umfassende Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr nachdenkliche Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Anliegen wie [mehrseitige Formulare](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Durch Drücken der Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTML

Ok, lassen Sie uns das HTML für unser Formular erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden Ihr Formular-HTML hier eingeben.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie diesem:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formell ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute zur Konfiguration der Funktionsweise des Formulars. Alle seine Attribute sind optional, aber es ist gängige Praxis, zumindest immer die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) festzulegen:

- Das `action`-Attribut definiert die Position (URL), an die die gesammelten Daten des Formulars gesendet werden sollen, wenn es abgeschickt wird.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie vorerst das obige {{htmlelement("form")}}-Element in Ihr HTML {{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: der Dateneingabeteil enthält drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "Eingabefeld für eine einzelne Textzeile")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein Eingabefeld für eine einzelne Textzeile, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas, das den folgenden Formular-Widgets entspricht:

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

Aktualisieren Sie Ihren Formularcode, damit er wie der obige aussieht.

Die {{HTMLelement("p")}}-Elemente sind vorhanden, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Für Benutzerfreundlichkeit und Barrierefreiheit fügen wir ein explizites Label für jedes Formularsteuerungselement hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for) Attributs auf allen {{HTMLelement("label")}}-Elementen, welches als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Formularsteuerungselements nimmt, mit dem es verbunden ist — so ordnen Sie ein Formularsteuerungselement mit seinem Label zu.

Dies ist mit großem Vorteil verbunden — es verknüpft das Label mit dem Formularsteuerungselement, sodass Benutzer von Maus, Trackpad und Touch-Geräten auf das Label klicken können, um die entsprechende Steuerung zu aktivieren. Es bietet auch einen zugänglichen Namen, den Bildschirmlesegeräte ihren Benutzern vorlesen können. Genauere Informationen zu Formularlabels finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Am {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, weil es die Art und Weise bestimmt, wie das {{HTMLelement("input")}}-Element erscheint und sich verhält. Sie werden mehr darüber im Artikel [Grundlegende native Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später im Modul erfahren.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — der Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, welches ein einzeiliges Textfeld definiert, das nur eine gut formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen für die vom Benutzer eingegebenen Daten durchführt. Es bietet auch ein passenderes Tastaturlayout für die Eingabe von E-Mail-Adressen (z. B. mit einem @-Symbol als Standard) auf Geräten mit dynamischen Tastaturen, wie Smartphones. Mehr über die Formularvalidierung erfahren Sie im Artikel über [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später im Modul.

Zu guter Letzt beachten Sie die Syntax von `<input>` gegenüber `<textarea></textarea>`. Das ist eine der Besonderheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "void element")}}, das bedeutet, dass es keinen Schlusstag benötigt. {{HTMLElement("textarea")}} ist kein void element, was bedeutet, dass es mit einem ordnungsgemäßen End-Tag geschlossen werden sollte. Dies hat Auswirkungen auf ein bestimmtes Feature von Formularen: die Art und Weise, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut so verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, platzieren Sie ihn zwischen den Öffnungs- und Schlusstag des {{HTMLElement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "einreichen" kann, sobald er das Formular ausgefüllt hat. Dies wird durch die Verwendung des {{HTMLelement("button")}}-Elements erreicht; fügen Sie das Folgende direkt vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert ebenfalls ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus UX-Sicht gilt dies als schlechte Praxis, daher sollten Sie diese Schaltfläche nur verwenden, wenn ein zwingender Grund vorliegt.
- Ein Klick auf eine `button`-Schaltfläche tut _nichts_! Das klingt albern, aber es ist erstaunlich nützlich, um benutzerdefinierte Schaltflächen zu erstellen — Sie können deren gewünschte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z. B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label erlaubt, während das {{HTMLelement("button")}}-Element vollen HTML-Inhalt ermöglicht, was komplexere, kreative Schaltflächeninhalte erlaubt.

## Grundlagen der Formular-Stilgestaltung

Nachdem Sie nun mit dem Schreiben des HTML-Codes für Ihr Formular fertig sind, speichern Sie ihn und sehen Sie ihn in einem Browser an. Im Moment wird es ziemlich hässlich aussehen.

> [!NOTE]
> Wenn Sie glauben, dass Sie den HTML-Code nicht richtig hinbekommen haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live sehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwierig, schön zu stylen. Es ist über den Umfang dieses Artikels hinaus, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir nur ein wenig CSS hinzufügen, damit es zumindest ordentlich aussieht.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb Ihres HTML-Kopfes. Es sollte so aussehen:

```html
<style>
  …
</style>
```

Fügen Sie innerhalb der `style`-Tags folgendes CSS hinzu:

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

Speichern und laden Sie erneut, und Sie werden sehen, dass Ihr Formular deutlich weniger hässlich aussehen sollte.

> [!NOTE]
> Sie können unsere Version bei GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live sehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)) finden.

## Formulardaten an Ihren Webserver senden

Der letzte Teil und vielleicht der kniffligste ist es, Formulardaten auf der Serverseite zu verarbeiten. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten dank der Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) gesendet werden sollen.

Wir geben jedem Formularsteuerungselement ein `name`-Attribut. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie geben dem Browser an, welchen Namen Sie jedem Datenstück geben sollen, und auf der Serverseite ermöglichen sie es dem Server, jedes Datenstück nach Namen zu bearbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formular-Widget verwenden, das ein bestimmtes Datenstück sammelt. Schauen wir uns noch einmal einige unserer Formular-Codes an:

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

In unserem Beispiel wird das Formular 3 Datenstücke senden, die `user_name`, `user_email` und `user_message` genannt werden. Diese Daten werden mit der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Auf der Serverseite erhält das Skript an der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen, die in der HTTP-Anfrage enthalten sind. Die Art und Weise, wie dieses Skript diese Daten verarbeitet, liegt in Ihrer Verantwortung. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C# usw.) hat eigene Mechanismen zur Verarbeitung von Formulardaten. Es ist außerhalb des Umfangs dieses Tutorials, tief in dieses Thema einzutauchen, aber wenn Sie mehr darüber wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später eingefügt.

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

Das ist allerdings erst der Anfang — jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben viel mehr Power, als wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
