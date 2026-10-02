---
title: Ihr erstes Formular
slug: Learn_web_development/Extensions/Forms/Your_first_form
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}

Der erste Artikel unserer Reihe führt Sie durch die Erstellung Ihres ersten Webformulars: vom Entwurf eines einfachen Formulars über die Umsetzung mit den passenden HTML-Formularsteuerelementen und weiteren HTML-Elementen bis hin zu einer einfachen Gestaltung mit CSS. Außerdem erfahren Sie, wie Daten an einen Server gesendet werden. Auf jedes dieser Themen gehen wir später im Modul ausführlicher ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >HTML-Kenntnisse</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Sie lernen, was Webformulare sind, wofür sie verwendet werden, worauf
        Sie bei ihrem Entwurf achten sollten und welche grundlegenden
        HTML-Elemente Sie für einfache Formulare benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** gehören zu den wichtigsten Möglichkeiten, mit denen Nutzer mit einer Website oder Anwendung interagieren. Über Formulare können sie Daten eingeben. Diese werden in der Regel zur Verarbeitung und Speicherung an einen Webserver gesendet (siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) weiter unten im Modul). Sie können aber auch clientseitig verwendet werden, um die Benutzeroberfläche unmittelbar zu aktualisieren – etwa indem ein weiterer Eintrag zu einer Liste hinzugefügt oder eine Funktion der Benutzeroberfläche ein- oder ausgeblendet wird.

Der HTML-Code eines Webformulars besteht aus einem oder mehreren **Formularsteuerelementen** (manchmal auch **Widgets** genannt) sowie zusätzlichen Elementen, die das Formular strukturieren. Solche Formulare werden häufig auch als **HTML-Formulare** bezeichnet. Zu den Steuerelementen gehören ein- oder mehrzeilige Textfelder, Dropdown-Listen, Schaltflächen, Kontrollkästchen und Optionsfelder. Sie werden größtenteils mit dem Element {{htmlelement("input")}} erstellt; daneben gibt es weitere Elemente, die Sie kennenlernen werden.

Formularsteuerelemente können so eingerichtet werden, dass nur bestimmte Eingabeformate oder Werte zulässig sind (**Formularvalidierung**). Außerdem können sie mit Textbeschriftungen verknüpft werden, die ihren Zweck sowohl sehenden als auch sehbehinderten Nutzern vermitteln.

## Ihr Formular entwerfen

Bevor Sie mit dem Programmieren beginnen, sollten Sie sich Zeit nehmen und Ihr Formular planen. Eine schnelle Skizze hilft Ihnen festzulegen, welche Daten Sie von den Nutzern benötigen. Aus Sicht der Benutzererfahrung (UX) gilt: Je umfangreicher Ihr Formular ist, desto größer ist das Risiko, dass Nutzer frustriert sind und den Vorgang abbrechen. Halten Sie das Formular einfach und konzentrieren Sie sich auf die Daten, die Sie unbedingt benötigen.

Der Entwurf von Formularen ist ein wichtiger Schritt bei der Entwicklung einer Website oder Anwendung. Eine ausführliche Behandlung der Benutzererfahrung bei Formularen würde den Rahmen dieses Artikels sprengen. Wenn Sie sich näher damit befassen möchten, lesen Sie die folgenden Artikel:

- Smashing Magazine bietet einige [gute Artikel zur Benutzererfahrung bei Formularen](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), darunter den älteren, aber weiterhin relevanten Artikel [Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters bietet ebenfalls fundierte Ratschläge – von [grundlegenden bewährten Vorgehensweisen](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis zu komplexeren Themen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel erstellen wir ein einfaches Kontaktformular. Beginnen wir mit einer groben Skizze.

![Grobe Skizze des Formulars, das wir erstellen werden](form-sketch-low.jpg)

Unser Formular enthält drei Textfelder und eine Schaltfläche. Wir fragen nach dem Namen, der E-Mail-Adresse und der Nachricht, die der Nutzer senden möchte. Ein Klick auf die Schaltfläche sendet die Daten an einen Webserver.

## Den HTML-Code für unser Formular erstellen

Sehen wir uns an, wie wir den HTML-Code für unser Formular erstellen. Dazu verwenden wir die folgenden HTML-Elemente: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} und {{HTMLelement("button")}}.

Erstellen Sie zunächst eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html). In diese Datei fügen Sie den HTML-Code für Ihr Formular ein.

### Das Element `<form>`

Jedes Formular beginnt mit einem Element {{HTMLelement("form")}}, beispielsweise so:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert das Formular. Es ist ein Containerelement wie {{HTMLelement("section")}} oder {{HTMLelement("footer")}}, dient jedoch speziell dazu, ein Formular aufzunehmen. Außerdem unterstützt es Attribute, mit denen sich das Verhalten des Formulars konfigurieren lässt. Alle Attribute sind optional; üblicherweise werden aber mindestens die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) gesetzt:

- Das Attribut `action` legt fest, an welche Adresse (URL) die erfassten Formulardaten beim Absenden gesendet werden.
- Das Attribut `method` legt fest, mit welcher HTTP-Methode die Daten gesendet werden (üblicherweise `get` oder `post`).

> [!NOTE]
> Wie diese Attribute funktionieren, behandeln wir später im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

Fügen Sie zunächst das oben gezeigte Element {{htmlelement("form")}} in den {{htmlelement("body")}} Ihres HTML-Dokuments ein.

### Die Elemente `<label>`, `<input>` und `<textarea>`

Unser Kontaktformular ist einfach aufgebaut: Der Eingabebereich enthält drei Textfelder mit jeweils einem zugehörigen {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail-Adresse ist ein {{HTMLelement("input/email", "Eingabefeld vom Typ email")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}, also ein mehrzeiliges Textfeld.

Für diese Formularsteuerelemente benötigen wir ungefähr den folgenden HTML-Code:

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

Passen Sie Ihren Formularcode entsprechend an.

Die Elemente {{HTMLelement("p")}} strukturieren den Code und erleichtern die Gestaltung (siehe weiter unten im Artikel). Für eine gute Bedienbarkeit und Barrierefreiheit versehen wir jedes Formularsteuerelement mit einer ausdrücklichen Beschriftung. Beachten Sie das Attribut [`for`](/de/docs/Web/HTML/Reference/Attributes/for) an allen {{HTMLelement("label")}}-Elementen. Sein Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugehörigen Formularsteuerelements. Auf diese Weise verknüpfen Sie ein Steuerelement mit seiner Beschriftung.

Das hat wichtige Vorteile: Nutzer mit Maus, Trackpad oder Touchgerät können auf die Beschriftung klicken oder tippen, um das zugehörige Steuerelement zu aktivieren. Außerdem erhält das Steuerelement dadurch einen zugänglichen Namen, den Screenreader vorlesen können. Weitere Einzelheiten zu Formularbeschriftungen finden Sie unter [Anleitung zur Strukturierung eines Webformulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

Bei einem {{HTMLelement("input")}}-Element ist das Attribut `type` besonders wichtig. Es bestimmt, wie das Element {{HTMLelement("input")}} dargestellt wird und sich verhält. Mehr darüber erfahren Sie später im Artikel [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls).

- Im ersten Eingabefeld unseres einfachen Beispiels verwenden wir den Wert {{HTMLelement("input/text", "text")}}. Das ist der Standardwert dieses Attributs. Er steht für ein einfaches einzeiliges Textfeld, das beliebige Texteingaben akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}. Er definiert ein einzeiliges Textfeld, das nur korrekt formatierte E-Mail-Adressen akzeptiert. Dadurch wird aus einem einfachen Textfeld ein gewissermaßen „intelligentes“ Feld, das die eingegebenen Daten überprüft. Auf Geräten mit dynamischer Tastatur, etwa Smartphones, erscheint außerdem eine für E-Mail-Adressen geeignete Tastaturbelegung, beispielsweise mit einem direkt verfügbaren @-Zeichen. Mehr über die Formularvalidierung erfahren Sie später im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

Beachten Sie schließlich die unterschiedliche Syntax von `<input>` und `<textarea></textarea>`. Das ist eine der Besonderheiten von HTML. Das `<input>`-Tag gehört zu einem {{Glossary("void_element", "leeren Element")}} und benötigt daher kein schließendes Tag. {{HTMLElement("textarea")}} ist dagegen kein leeres Element und muss mit einem passenden schließenden Tag abgeschlossen werden. Dieser Unterschied wirkt sich darauf aus, wie Sie einen Standardwert festlegen. Bei einem {{HTMLElement("input")}}-Element verwenden Sie dafür das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value):

```html
<input type="text" value="by default this element is filled with this text" />
```

Bei einem {{HTMLElement("textarea")}}-Element schreiben Sie den Standardwert dagegen zwischen das öffnende und das schließende Tag:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### Das Element `<button>`

Der HTML-Code für unser Formular ist fast fertig. Es fehlt nur noch eine Schaltfläche, mit der Nutzer ihre Daten nach dem Ausfüllen des Formulars senden können. Dafür verwenden wir das Element {{HTMLelement("button")}}. Fügen Sie Folgendes direkt vor dem schließenden Tag `</form>` ein:

```html
<p class="button">
  <button type="submit">Send your message</button>
</p>
```

Das Element {{htmlelement("button")}} unterstützt ebenfalls ein Attribut `type`. Es kann einen von drei Werten annehmen: `submit`, `reset` oder `button`.

- Ein Klick auf eine `submit`-Schaltfläche (der Standardwert) sendet die Formulardaten an die Webseite, die im Attribut `action` des {{HTMLelement("form")}}-Elements angegeben ist.
- Ein Klick auf eine `reset`-Schaltfläche setzt sofort alle Formularsteuerelemente auf ihre Standardwerte zurück. Aus UX-Sicht gilt das als schlechte Praxis. Vermeiden Sie solche Schaltflächen daher, sofern Sie keinen guten Grund dafür haben.
- Ein Klick auf eine `button`-Schaltfläche bewirkt zunächst _nichts_! Das klingt wenig hilfreich, ist aber für benutzerdefinierte Schaltflächen sehr nützlich: Deren Funktion können Sie mit JavaScript festlegen.

> [!NOTE]
> Sie können auch ein {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um eine Schaltfläche zu erzeugen, beispielsweise `<input type="submit">`. Der wichtigste Vorteil des {{HTMLelement("button")}}-Elements ist, dass sein Inhalt vollständiges HTML enthalten kann. Bei einem {{HTMLelement("input")}}-Element ist die Beschriftung dagegen auf einfachen Text beschränkt. Mit {{HTMLelement("button")}} lassen sich daher komplexere und kreativere Schaltflächen gestalten.

## Das Formular einfach gestalten

Nachdem Sie den HTML-Code für Ihr Formular geschrieben haben, speichern Sie die Datei und öffnen Sie sie in einem Browser. Im Moment sieht das Formular wahrscheinlich noch nicht besonders ansprechend aus.

> [!NOTE]
> Falls Sie unsicher sind, ob Ihr HTML-Code stimmt, vergleichen Sie ihn mit unserem fertigen Beispiel: [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([Live-Version ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare ansprechend zu gestalten, ist bekanntermaßen nicht ganz einfach. Eine ausführliche Einführung in die Formulargestaltung würde den Rahmen dieses Artikels sprengen. Vorerst fügen wir nur etwas CSS hinzu, damit das Formular ordentlich aussieht.

Fügen Sie zunächst innerhalb des HTML-`head` Ihrer Seite ein Element {{htmlelement("style")}} ein. Es sollte so aussehen:

```html
<style>
  /* CSS goes here */
</style>
```

Fügen Sie zwischen den `style`-Tags das folgende CSS ein:

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

Speichern Sie die Datei und laden Sie die Seite neu. Ihr Formular sollte jetzt deutlich ansprechender aussehen.

> [!NOTE]
> Unsere Version finden Sie auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([Live-Version ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Formulardaten an Ihren Webserver senden

Der letzte und vielleicht schwierigste Teil besteht darin, die Formulardaten auf dem Server zu verarbeiten. Die Attribute [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) und [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) des {{HTMLelement("form")}}-Elements legen fest, wohin und wie die Daten gesendet werden.

Jedes Formularsteuerelement erhält ein Attribut `name`. Diese Namen sind sowohl auf Client- als auch auf Serverseite wichtig: Sie geben dem Browser vor, unter welchem Namen er die jeweiligen Daten sendet, und ermöglichen dem Server, die Daten anhand dieser Namen zu verarbeiten. Formulardaten werden als Name-Wert-Paare an den Server gesendet.

Um die Daten eines Formulars zu benennen, verwenden Sie das Attribut `name` an jedem Formularsteuerelement, das Daten erfasst. Sehen wir uns einen Teil unseres Formularcodes noch einmal an:

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

In unserem Beispiel sendet das Formular drei Dateneinträge mit den Namen `user_name`, `user_email` und `user_message`. Die Daten werden mit der Methode [HTTP `POST`](/de/docs/Web/HTTP/Reference/Methods/POST) an die URL `/my-handling-form-page` gesendet.

Auf dem Server empfängt das Skript unter der URL `/my-handling-form-page` diese Daten als drei Schlüssel-Wert-Paare in der HTTP-Anfrage. Wie das Skript die Daten verarbeitet, hängt von Ihrer Implementierung ab. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C# usw.) hat dafür eigene Mechanismen. Eine ausführliche Behandlung würde den Rahmen dieses Tutorials sprengen. Wenn Sie mehr erfahren möchten, finden Sie später im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) einige Beispiele.

## Zusammenfassung

Herzlichen Glückwunsch – Sie haben Ihr erstes Webformular erstellt. So sieht es aus:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

Das ist allerdings erst der Anfang. Formulare bieten weit mehr Möglichkeiten, als wir hier kennengelernt haben. Die weiteren Artikel dieses Moduls helfen Ihnen, auch diese Möglichkeiten zu beherrschen.

{{NextMenu("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms")}}
