---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel in unserer Reihe bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich des Entwurfs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerungen und anderen HTML-Elementen, dem Hinzufügen einer sehr einfachen Stilgestaltung über CSS und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden später in diesem Modul auf jedes dieser Themen detaillierter eingehen.

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
        Vertrautheit mit Webformularen zu gewinnen, wofür sie verwendet werden, wie man über deren Gestaltung nachdenkt, und welche grundlegenden HTML-Elemente Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind eine der Hauptschnittstellen zwischen einem Benutzer und einer Webseite oder Anwendung. Formulare ermöglichen es den Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder clientseitig verwendet werden, um die Benutzeroberfläche auf irgendeine Weise sofort zu aktualisieren (z.B. um einen weiteren Eintrag zu einer Liste hinzuzufügen oder eine UI-Funktion ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einer oder mehreren **Formularsteuerungen** (manchmal auch **Widgets** genannt), sowie einigen zusätzlichen Elementen, um das gesamte Formular zu strukturieren – sie werden oft als **HTML-Formulare** bezeichnet. Die Steuerungen können Einzel- oder Mehrzeilen-Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden meist mit dem {{htmlelement("input")}}-Element erstellt, obwohl es auch einige andere Elemente gibt, die man kennenlernen sollte.

Formularsteuerungen können auch so programmiert werden, dass sie bestimmte Formate oder Werte erzwingen (**Formularvalidierung**) und mit Textbeschriftungen gekoppelt werden, die ihren Zweck sowohl für sehende als auch sehbehinderte Benutzer beschreiben.

## Ihr Formular gestalten

Bevor Sie mit dem Programmieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich Zeit zu nehmen, um über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Entwurfs hilft Ihnen, das richtige Set an Daten zu definieren, die Sie Ihren Benutzer eingeben lassen möchten. Aus einer Benutzererfahrungsperspektive (UX) ist es wichtig zu bedenken, dass Sie, je größer Ihr Formular ist, umso mehr riskieren, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und fokussieren Sie sich: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Gestalten von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es sprengt den Rahmen dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie sich in dieses Thema vertiefen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels [Umfassender Leitfaden zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist ebenfalls eine nachdenkliche Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis zu komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Machen wir einen groben Entwurf.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und eine Schaltfläche enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Durch Drücken der Schaltfläche werden seine Daten an einen Webserver gesendet.

## Aktives Lernen: Implementieren unseres Formular-HTML

Ok, lassen Sie uns versuchen, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) – Sie werden Ihr Formular-HTML hier einfügen.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert ein Formular formell. Es ist ein Containerelement wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell für die Aufnahme von Formularen; es unterstützt auch spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist üblich, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) festzulegen:

- Das `action`-Attribut definiert den Ort (URL), an dem die gesammelten Daten des Formulars beim Absenden gesendet werden sollen.
- Das `method`-Attribut definiert, welche HTTP-Methode zum Senden der Daten verwendet werden soll (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden später in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) untersuchen, wie diese Attribute funktionieren.

Fügen Sie für den Moment das obenstehende {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>`, und `<textarea>`-Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, von denen jedes ein entsprechendes {{HTMLelement("label")}} hat:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ E-Mail")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
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

Aktualisieren Sie Ihren Formularcode, damit er wie der obige aussieht.

Die {{HTMLelement("p")}}-Elemente sind dazu da, unseren Code praktisch zu strukturieren und die Stilgestaltung einfacher zu machen (siehe später im Artikel). Zur Benutzerfreundlichkeit und Barrierefreiheit fügen wir ein explizites Label für jede Formularsteuerung hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) der zugehörigen Formularsteuerung übernimmt – so ordnen Sie eine Formularsteuerung ihrem Label zu.

Dies bietet zahlreiche Vorteile – es ordnet das Label der Formularsteuerung zu, sodass Benutzer von Maus, Trackpad und Touch-Geräten auf das Label klicken können, um die entsprechende Steuerung zu aktivieren, und es bietet auch einen zugänglichen Namen für Screenreader, um ihn den Benutzern vorzulesen. Weitere Details zu Formularbeschriftungen finden Sie in [So strukturieren Sie ein Webformular](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Am {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist äußerst wichtig, da es das Erscheinungsbild und Verhalten des {{HTMLelement("input")}}-Elements definiert. Mehr dazu erfahren Sie im Artikel [Grundlegende native Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabefeld — der Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das alle Arten von Texteingaben akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, was ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein grundlegendes Textfeld in ein „intelligentes“ Feld, das einige Validierungsprüfungen der vom Benutzer eingegebenen Daten durchführt. Es sorgt auch dafür, dass eine geeignetere Tastaturanordnung zum Eingeben von E-Mail-Adressen (z.B. mit einem @-Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen wie Smartphones angezeigt wird. Sie erfahren mehr zur Formularvalidierung im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

Zu guter Letzt beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Eigenheiten von HTML. Das `<input>`-Tag ist ein {{Glossary("void_element", "void element")}}, d.h. es benötigt kein schließendes Tag. {{HTMLElement("textarea")}} ist kein void element, d.h. es sollte mit dem richtigen End-Tag geschlossen werden. Dies hat Auswirkungen auf eine spezifische Funktion von Formularen: die Art, wie der Standardwert definiert wird. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut verwenden, so:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} festlegen möchten, setzen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, so:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, mit der der Benutzer seine Daten senden oder „übermitteln“ kann, sobald er das Formular ausgefüllt hat. Dies geschieht mittels des {{HTMLelement("button")}}-Elements; fügen Sie Folgendes direkt vor dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut – dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus einer UX-Sicht wird dies als schlechte Praxis angesehen, daher sollten Sie diese Art von Schaltfläche nur nutzen, wenn Sie wirklich einen guten Grund haben, sie einzubeziehen.
- Ein Klick auf eine `button`-Schaltfläche tut _nichts_! Das klingt albern, ist aber erstaunlich nützlich zum Erstellen benutzerdefinierter Schaltflächen — Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, z.B. `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements ist, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label erlaubt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt erlaubt, was komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Styling von Formularen

Nun, da Sie den HTML-Code Ihres Formulars fertig geschrieben haben, versuchen Sie, es zu speichern und in einem Browser anzusehen. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie glauben, dass Sie den HTML-Code nicht richtig hingekriegt haben, versuchen Sie, ihn mit unserem fertigen Beispiel zu vergleichen – siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwierig, schön zu stylen. Es sprengt den Rahmen dieses Artikels, Ihnen das Styling von Formularen im Detail beizubringen, daher werden wir Sie im Moment nur dazu bringen, etwas CSS hinzuzufügen, damit es gut aussieht.

Fügen Sie zuerst ein {{htmlelement("style")}}-Element auf Ihrer Seite, innerhalb des HTML-Kopfs hinzu. Es sollte so aussehen:

```html
<style>
  /* CSS goes here */
</style>
```

Innerhalb der `style`-Tags fügen Sie das folgende CSS hinzu:

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
> Sie können unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte und vielleicht der schwierigste Teil besteht darin, Formulardaten auf der Serverseite zu verarbeiten. Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten durch die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) gesendet werden sollen.

Wir geben ein `name`-Attribut für jede Formularsteuerung an. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie geben dem Browser an, welchen Namen er jedem Datenstück zuweisen soll, und auf der Serverseite ermöglichen sie es dem Server, jedes Datenstück per Name zu verarbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut für jedes Formular-Widget verwenden, das ein spezifisches Datenstück sammeln wird. Werfen wir noch einmal einen Blick auf einige unserer Formularcodes:

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

In unserem Beispiel wird das Formular 3 Datenstücke mit den Namen `user_name`, `user_email` und `user_message` senden. Diese Daten werden mit der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Auf der Serverseite wird das Skript unter der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen enthalten im HTTP-Request empfangen. Die Art, wie dieses Skript diese Daten verarbeiten wird, liegt bei Ihnen. Jede Serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zur Verarbeitung von Formulardaten. Es sprengt den Rahmen dieses Tutorials, tief in dieses Thema einzutauchen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

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

Das ist jedoch erst der Anfang – jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben viel mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
