---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung mit der Erstellung eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularsteuerelementen und anderen HTML-Elementen, dem Hinzufügen von sehr einfachem Styling über CSS und der Beschreibung, wie Daten an einen Server gesendet werden.
Wir werden später in diesem Modul auf jeden dieser Unterpunkte näher eingehen.

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
        Vertrautheit mit Webformularen zu erlangen, wofür sie verwendet werden, wie man über das Design nachdenkt und welche grundlegenden HTML-Elemente für einfache Fälle benötigt werden.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der wichtigsten Interaktionspunkte zwischen einem Benutzer und einer Website oder Anwendung.
Formulare ermöglichen es Benutzern, Daten einzugeben, die in der Regel an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Client-Seite genutzt werden können, um die Oberfläche sofort in gewisser Weise zu aktualisieren (zum Beispiel, um einen weiteren Eintrag zu einer Liste hinzuzufügen oder ein UI-Feature ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt) sowie einigen zusätzlichen Elementen, die beim Strukturieren des gesamten Formulars helfen — oft werden sie als **HTML-Formulare** bezeichnet.
Die Steuerelemente können ein- oder mehrzeilige Textfelder, Dropdown-Boxen, Schaltflächen, Kontrollkästchen oder Optionsfelder sein und werden hauptsächlich mit dem {{htmlelement("input")}} Element erstellt, obwohl es auch einige andere Elemente gibt, die es zu lernen gilt.

Formularsteuerelemente können auch so programmiert werden, dass sie bestimmte Formate oder Werte erfordern (**Formularvalidierung**) und mit Textbeschriftungen gepaart werden, die ihren Zweck sowohl für sehende als auch sehbehinderte Benutzer beschreiben.

## Ihr Formular entwerfen

Bevor Sie mit dem Programmieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich Zeit zu nehmen, um über Ihr Formular nachzudenken. Ein schnelles Mockup zu entwerfen, hilft Ihnen, den richtigen Satz an Daten zu definieren, den Sie von Ihren Benutzern anfordern möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig, daran zu denken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und bleiben Sie fokussiert: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Das Entwerfen von Formularen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung.
Es liegt außerhalb des Umfangs dieses Artikels, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie tiefer in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formulare UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren aber immer noch relevanten Artikels [Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine sehr durchdachte Ressource mit guten Ratschlägen von [grundlegenden Best Practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das Formular, das erstellt werden soll, grobe Skizze](form-sketch-low.jpg)

Unser Formular wird drei Textfelder und einen Button enthalten. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail und der Nachricht, die er senden möchte. Durch Klicken auf die Schaltfläche werden ihre Daten an einen Webserver gesendet.

## Implementierung unseres Formular-HTML

Ok, lassen Sie uns versuchen, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie weitermachen, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — Sie werden dort Ihr Formular-HTML eingeben.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie diesem:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, aber speziell für die Aufnahme von Formularen; es unterstützt auch einige spezifische Attribute, um das Verhalten des Formulars zu konfigurieren. Alle seine Attribute sind optional, aber es ist üblich, zumindest die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) einzustellen:

- Das `action`-Attribut definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn sie abgeschickt werden.
- Das `method`-Attribut definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (normalerweise `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie nun das obige {{htmlelement("form")}}-Element in Ihr HTML {{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>` Elemente

Unser Kontaktformular ist nicht komplex: Der Dateneingabeteil enthält drei Textfelder, jedes mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ Email")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas in der Art des Folgenden, um diese Formular-Widgets zu implementieren:

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

Aktualisieren Sie Ihren Formularcode, damit er wie das obige Beispiel aussieht.

Die {{HTMLelement("p")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling einfacher zu gestalten (siehe später im Artikel).
Für die Benutzerfreundlichkeit und Zugänglichkeit fügen wir jedem Formularsteuerelement ein explizites Label hinzu.
Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs auf allen {{HTMLelement("label")}}-Elementen, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugehörigen Formularsteuerelements nimmt — so wird ein Formularsteuerelement mit seinem Label verknüpft.

Es gibt großen Nutzen daraus — es verbindet das Label mit dem Formularsteuerelement, ermöglicht es Benutzern von Maus, Trackpad und Touch-Geräten, auf das Label zu klicken, um das entsprechende Steuerelement zu aktivieren, und bietet auch einen zugänglichen Namen, den Bildschirmlesegeräte für ihre Benutzer vorlesen können.
Weitere Details zu Formularetiketten finden Sie in [How to structure a web form](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Beim {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut.
Dieses Attribut ist äußerst wichtig, da es das Erscheinungsbild und das Verhalten des {{HTMLelement("input")}}-Elements definiert.
Sie finden mehr darüber im Artikel [Basic native form controls](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für die erste Eingabe — den Standardwert für dieses Attribut.
  Es stellt ein grundlegendes einzeiliges Textfeld dar, das jede Art von Texteingabe akzeptiert.
- Für die zweite Eingabe verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert.
  Dies verwandelt ein grundlegendes Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen an den vom Benutzer eingegebenen Daten durchführt.
  Es bewirkt auch, dass ein passenderes Tastaturlayout für die Eingabe von E-Mail-Adressen (z.B. mit einem @-Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen wie Smartphones erscheint.
  Sie erfahren im Artikel [client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später mehr über Formularvalidierung.

Zu guter Letzt beachten Sie die Syntax von `<input>` im Vergleich zu `<textarea></textarea>`.
Dies ist eine der Eigenheiten von HTML.
Das `<input>`-Tag ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen Schließtag benötigt.
{{HTMLElement("textarea")}} ist kein void-Element, was bedeutet, dass es mit dem entsprechenden Schlusstag geschlossen werden muss.
Dies hat Auswirkungen auf eine spezifische Funktion von Formularen: die Art und Weise, wie Sie den Standardwert definieren.
Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut wie folgt verwenden:

```html
<input type="text" value="by default this element is filled with this text" />
```

Wenn Sie andererseits einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, setzen Sie ihn zwischen die öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch eine Schaltfläche hinzufügen, damit der Benutzer seine Daten senden oder "einreichen" kann, nachdem er das Formular ausgefüllt hat.
Dies wird durch die Verwendung des {{HTMLelement("button")}}-Elements erledigt; fügen Sie das Folgende knapp über dem schließenden `</form>`-Tag hinzu:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Daten des Formulars an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt alle Formular-Widgets sofort auf ihren Standardwert zurück. Aus Sicht der UX wird dies als schlechte Praxis angesehen, daher sollten Sie diese Art von Schaltfläche nur verwenden, wenn Sie wirklich einen guten Grund dafür haben.
- Ein Klick auf eine `button`-Schaltfläche macht _nichts_! Das klingt albern, aber es ist erstaunlich nützlich zum Erstellen benutzerdefinierter Schaltflächen — Sie können ihre gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können das {{HTMLElement("input")}}-Element auch mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur reinen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollwertigen HTML-Inhalt akzeptiert und damit komplexere, kreativere Schaltflächeninhalte ermöglicht.

## Grundlegendes Formulardesign

Jetzt, da Sie das HTML-Code Ihres Formulars geschrieben haben, versuchen Sie, es zu speichern und in einem Browser anzusehen. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie glauben, dass Ihr HTML-Code nicht richtig ist, vergleichen Sie ihn mit unserem fertigen Beispiel — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind notorisch schwer schön zu gestalten. Es ist außerhalb des Umfangs dieses Artikels, Ihnen das Formulardesign im Detail beizubringen, daher werden wir momentan nur einige CSS hinzufügen, damit es akzeptabel aussieht.

Fügen Sie zuerst ein {{htmlelement("style")}}-Element zu Ihrer Seite hinzu, innerhalb des HTML-Kopfes. Es sollte so aussehen:

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

Speichern und laden Sie die Seite neu, und Sie werden sehen, dass Ihr Formular deutlich weniger hässlich aussieht.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte Teil, und vielleicht der schwierigste, besteht darin, Formulardaten auf der Serverseite zu verarbeiten.
Das {{HTMLelement("form")}}-Element definiert, wo und wie die Daten dank der Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) gesendet werden sollen.

Wir stellen jedem Formularsteuerelement ein `name`-Attribut zur Verfügung.
Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie teilen dem Browser mit, welchen Namen jedes Datenstück erhält, und auf der Serverseite lassen sie den Server jedes Datenstück mit seinem Namen handhaben.
Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formular-Widget verwenden, das ein bestimmtes Datenstück sammelt.
Schauen wir uns einige unserer Formularcodes noch einmal an:

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

In unserem Beispiel sendet das Formular 3 Datenstücke namens `user_name`, `user_email` und `user_message`.
Diese Daten werden mithilfe der [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an die URL `/my-handling-form-page` gesendet.

Auf der Serverseite empfängt das Skript unter der URL `/my-handling-form-page` die Daten als Liste von 3 Schlüssel/Wert-Elementen, die in der HTTP-Anfrage enthalten sind.
Die Art und Weise, wie dieses Skript die Daten verarbeiten wird, liegt bei Ihnen.
Jede Serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus, um Formulardaten zu verarbeiten.
Es liegt außerhalb des Umfangs dieses Tutorials, tief in dieses Thema einzusteigen, aber wenn Sie mehr wissen möchten, haben wir einige Beispiele in unserem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) später bereitgestellt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. So sieht es live aus:

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

Das ist jedoch erst der Anfang — jetzt ist es an der Zeit, einen tieferen Blick zu werfen. Formulare haben weitaus mehr Möglichkeiten, als wir hier gesehen haben, und die anderen Artikel in diesem Modul helfen Ihnen, den Rest zu meistern.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
