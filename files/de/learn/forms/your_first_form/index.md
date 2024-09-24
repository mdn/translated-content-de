---
title: Ihr erstes Formular
slug: Learn/Forms/Your_first_form
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

Der erste Artikel in unserer Serie vermittelt Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich dem Entwerfen eines einfachen Formulars, der Implementierung mit den richtigen HTML-Formularelementen und anderen HTML-Elementen, dem Hinzufügen einer sehr einfachen CSS-Stilgebung und der Beschreibung, wie Daten an einen Server gesendet werden. Wir werden auf jedes dieser Teilthemen später im Modul ausführlicher eingehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Sich mit dem Konzept von Webformularen vertraut zu machen, wofür sie verwendet werden, wie man sie entwirft und die grundlegenden HTML-Elemente kennenzulernen, die Sie für einfache Fälle benötigen.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Webformulare?

**Webformulare** sind einer der Hauptberührungspunkte zwischen einem Benutzer und einer Website oder Anwendung. Formulare ermöglichen es Benutzern, Daten einzugeben, die im Allgemeinen an einen Webserver zur Verarbeitung und Speicherung gesendet werden (siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später im Modul) oder auf der Clientseite verwendet werden, um die Benutzeroberfläche sofort in irgendeiner Weise zu aktualisieren (zum Beispiel, um einen weiteren Eintrag zu einer Liste hinzuzufügen oder eine UI-Funktion ein- oder auszublenden).

Das HTML eines Webformulars besteht aus einem oder mehreren **Formularelementen** (manchmal auch als **Widgets** bezeichnet), sowie einigen zusätzlichen Elementen, die helfen, das gesamte Formular zu strukturieren – sie werden oft als **HTML-Formulare** bezeichnet. Die Elemente können einzeilige oder mehrzeilige Textfelder, Dropdown-Boxen, Buttons, Checkboxen oder Radio-Buttons sein und werden hauptsächlich mit dem {{htmlelement("input")}}-Element erstellt, obwohl es noch einige andere Elemente gibt, die zu lernen sind.

Formularelemente können auch so programmiert werden, dass sie spezifische Formate oder Werte erzwingen, die eingegeben werden müssen (**Formularvalidierung**), und mit Textbeschriftungen kombiniert werden, die ihren Zweck sowohl für sehende als auch für sehbehinderte Benutzer beschreiben.

## Entwerfen Ihres Formulars

Bevor Sie mit dem Programmieren beginnen, ist es immer besser, einen Schritt zurückzutreten und sich die Zeit zu nehmen, über Ihr Formular nachzudenken. Das Entwerfen eines schnellen Mockups wird Ihnen helfen, die richtige Menge an Daten zu definieren, die Sie von Ihrem Benutzer abfragen möchten. Aus Sicht der Benutzererfahrung (UX) ist es wichtig zu bedenken, dass je größer Ihr Formular ist, desto mehr riskieren Sie, Menschen zu frustrieren und Benutzer zu verlieren. Halten Sie es einfach und fokussieren Sie sich: Fragen Sie nur nach den Daten, die Sie unbedingt benötigen.

Formulare zu entwerfen ist ein wichtiger Schritt beim Erstellen einer Website oder Anwendung. Es geht über den Rahmen dieses Artikels hinaus, die Benutzererfahrung von Formularen zu behandeln, aber wenn Sie tiefer in dieses Thema eintauchen möchten, sollten Sie die folgenden Artikel lesen:

- Smashing Magazine hat einige [gute Artikel über Formular-UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), einschließlich eines älteren, aber immer noch relevanten Artikels über eine [umfassende Anleitung zur Benutzerfreundlichkeit von Webformularen](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).
- UXMatters ist auch eine durchdachte Ressource mit guten Ratschlägen von [grundlegenden bewährten Praktiken](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) bis hin zu komplexen Anliegen wie [mehrseitigen Formularen](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In diesem Artikel werden wir ein einfaches Kontaktformular erstellen. Lassen Sie uns eine grobe Skizze machen.

![Das zu erstellende Formular, grob skizziert](form-sketch-low.jpg)

Unser Formular wird aus drei Textfeldern und einem Button bestehen. Wir fragen den Benutzer nach seinem Namen, seiner E-Mail-Adresse und der Nachricht, die er senden möchte. Wenn der Button gedrückt wird, werden seine Daten an einen Webserver gesendet.

## Aktives Lernen: Implementierung unseres Formular-HTMLs

Okay, lassen Sie uns versuchen, das HTML für unser Formular zu erstellen. Wir werden die folgenden HTML-Elemente verwenden: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}}, und {{HTMLelement("button")}}.

Bevor Sie fortfahren, erstellen Sie eine lokale Kopie unserer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) — dort werden Sie Ihr Formular-HTML einfügen.

### Das `<form>`-Element

Alle Formulare beginnen mit einem {{HTMLelement("form")}}-Element, wie dieses:

```html
<form action="/my-handling-form-page" method="post">…</form>
```

Dieses Element definiert formal ein Formular. Es ist ein Container-Element wie ein {{HTMLelement("section")}}- oder {{HTMLelement("footer")}}-Element, jedoch speziell zum Enthalten von Formularen; es unterstützt auch einige spezifische Attribute zur Konfiguration des Verhaltens des Formulars. Alle seine Attribute sind optional, aber es ist gängige Praxis, immer mindestens die Attribute [`action`](/de/docs/Web/HTML/Element/form#action) und [`method`](/de/docs/Web/HTML/Element/form#method) festzulegen:

- Das Attribut `action` definiert den Ort (URL), an den die gesammelten Daten des Formulars gesendet werden sollen, wenn es übermittelt wird.
- Das Attribut `method` definiert, mit welcher HTTP-Methode die Daten gesendet werden sollen (gewöhnlich `get` oder `post`).

> [!NOTE]
> Wir werden uns später in unserem Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) ansehen, wie diese Attribute funktionieren.

Fügen Sie für den Moment das obige {{htmlelement("form")}}-Element in Ihr HTML-{{htmlelement("body")}} ein.

### Die `<label>`, `<input>` und `<textarea>` Elemente

Unser Kontaktformular ist nicht komplex: der Dateneingabeteil enthält drei Textfelder, jeweils mit einem entsprechenden {{HTMLelement("label")}}:

- Das Eingabefeld für den Namen ist ein {{HTMLelement("input/text", "einzeiliges Textfeld")}}.
- Das Eingabefeld für die E-Mail ist ein {{HTMLelement("input/email", "Eingabe vom Typ Email")}}: ein einzeiliges Textfeld, das nur E-Mail-Adressen akzeptiert.
- Das Eingabefeld für die Nachricht ist ein {{HTMLelement("textarea")}}; ein mehrzeiliges Textfeld.

In Bezug auf HTML-Code benötigen wir etwas wie das Folgende, um diese Formularelemente zu implementieren:

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

Aktualisieren Sie Ihren Formularcode, sodass er wie oben aussieht.

Die {{HTMLelement("li")}}-Elemente sind da, um unseren Code bequem zu strukturieren und das Styling zu erleichtern (siehe später im Artikel). Aus Nutzbarkeits- und Zugänglichkeitsgründen fügen wir jedem Formularelement eine explizite Beschriftung hinzu. Beachten Sie die Verwendung des [`for`](/de/docs/Web/HTML/Attributes/for)-Attributs bei allen {{HTMLelement("label")}}-Elementen, welches als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des zugehörigen Formularelements hat – so verknüpfen Sie ein Formularelement mit seiner Beschriftung.

Es hat große Vorteile, dies zu tun – es verbindet die Beschriftung mit dem Formularelement, sodass Maus-, Trackpad- und Touchgerätebenutzer auf die Beschriftung klicken können, um das entsprechende Element zu aktivieren, und es stellt auch einen zugänglichen Namen für Bildschirmleser bereit, der ihren Benutzern vorgelesen wird. Weitere Details zu Formularbeschriftungen finden Sie in [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

Am {{HTMLelement("input")}}-Element ist das wichtigste Attribut das `type`-Attribut. Dieses Attribut ist extrem wichtig, da es die Darstellung und das Verhalten des {{HTMLelement("input")}}-Elements definiert. Mehr darüber finden Sie im Artikel zu [Grundlegenden nativen Formularelementen](/de/docs/Learn/Forms/Basic_native_form_controls) später.

- In unserem einfachen Beispiel verwenden wir den Wert {{HTMLelement("input/text", "text")}} für das erste Eingabeelement — der Standardwert für dieses Attribut. Es repräsentiert ein grundlegendes einzeiliges Textfeld, das jede Art von Texteingabe akzeptiert.
- Für das zweite Eingabefeld verwenden wir den Wert {{HTMLelement("input/email", "email")}}, der ein einzeiliges Textfeld definiert, das nur eine korrekt formatierte E-Mail-Adresse akzeptiert. Dies verwandelt ein einfaches Textfeld in eine Art "intelligentes" Feld, das einige Validierungsprüfungen der vom Benutzer eingegebenen Daten durchführt. Es bringt auch eine passendere Tastatur zur Eingabe von E-Mail-Adressen (z. B. mit einem @-Symbol standardmäßig) auf Geräten mit dynamischen Tastaturen, wie Smartphones, hervor. Mehr über Formularvalidierung erfahren Sie im Artikel zu [Client-seitiger Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später.

Last but not least, beachten Sie die Syntax von `<input>` vs. `<textarea></textarea>`. Dies ist eine der Besonderheiten von HTML. Der `<input>`-Tag ist ein {{glossary("void element")}}, was bedeutet, dass er kein Schlusstag benötigt. {{HTMLElement("textarea")}} ist kein leeres Element, was bedeutet, dass es mit dem entsprechenden End-Tag geschlossen werden sollte. Dies hat eine Auswirkung auf eine spezifische Funktion von Formularen: die Art, wie Sie den Standardwert definieren. Um den Standardwert eines {{HTMLElement("input")}}-Elements zu definieren, müssen Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut verwenden, wie folgt:

```html
<input type="text" value="dieses Element wird standardmäßig mit diesem Text gefüllt" />
```

Andererseits, wenn Sie einen Standardwert für ein {{HTMLElement("textarea")}} definieren möchten, platzieren Sie ihn zwischen den öffnenden und schließenden Tags des {{HTMLElement("textarea")}}-Elements, wie folgt:

```html
<textarea>
dieses Element wird standardmäßig mit diesem Text gefüllt
</textarea>
```

### Das `<button>`-Element

Das Markup für unser Formular ist fast vollständig; wir müssen nur noch einen Knopf hinzufügen, um dem Benutzer zu ermöglichen, seine Daten zu senden oder zu "übermitteln", nachdem er das Formular ausgefüllt hat. Dies wird durch die Verwendung des {{HTMLelement("button")}}-Elements erreicht; fügen Sie das Folgende direkt oberhalb des schließenden `</ul>`-Tags ein:

```html
<li class="button">
  <button type="submit">Send your message</button>
</li>
```

Das {{htmlelement("button")}}-Element akzeptiert auch ein `type`-Attribut — dieses akzeptiert einen von drei Werten: `submit`, `reset` oder `button`.

- Ein Klick auf einen `submit`-Button (der Standardwert) sendet die Daten des Formulars an die Webseite, die durch das `action`-Attribut des {{HTMLelement("form")}}-Elements definiert ist.
- Ein Klick auf einen `reset`-Button setzt alle Formularelemente sofort auf ihren Standardwert zurück. Aus UX-Sicht gilt dies als schlechte Praxis, daher sollten Sie diesen Typ von Button vermeiden, es sei denn, Sie haben wirklich einen guten Grund, einen einzuschließen.
- Ein Klick auf einen `button`-Button bewirkt _nichts_! Das klingt albern, aber es ist erstaunlich nützlich für den Aufbau benutzerdefinierter Buttons — Sie können deren gewählte Funktionalität mit JavaScript definieren.

> [!NOTE]
> Sie können auch das {{HTMLElement("input")}}-Element mit dem entsprechenden `type` verwenden, um einen Button zu erzeugen, zum Beispiel `<input type="submit">`. Der Hauptvorteil des {{HTMLelement("button")}}-Elements besteht darin, dass das {{HTMLelement("input")}}-Element nur einfachen Text in seinem Label zulässt, während das {{HTMLelement("button")}}-Element vollständigen HTML-Inhalt zulässt, was komplexere, kreative Button-Inhalte ermöglicht.

## Grundlegendes Formulareinfärben

Nachdem Sie nun das HTML Ihres Formulars fertig geschrieben haben, versuchen Sie, es zu speichern und in einem Browser anzusehen. Im Moment werden Sie sehen, dass es ziemlich hässlich aussieht.

> [!NOTE]
> Wenn Sie denken, dass Sie den HTML-Code nicht richtig haben, versuchen Sie ihn mit unserem fertigen Beispiel zu vergleichen — siehe [first-form.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Formulare sind bekanntlich schwierig, schön zu gestalten. Es geht über den Rahmen dieses Artikels hinaus, Ihnen das Styling von Formularen im Detail beizubringen, deshalb werden wir Ihnen im Moment nur ein wenig CSS hinzufügen lassen, um es einigermaßen ansprechend aussehen zu lassen.

Fügen Sie zunächst ein {{htmlelement("style")}}-Element zu Ihrer Seite innen im HTML-Head hinzu. Es sollte in etwa so aussehen:

```html
<style>
  …
</style>
```

Fügen Sie dann in die `style`-Tags das folgende CSS ein:

```css
body {
  /* Formular zentrieren auf der Seite */
  text-align: center;
}

form {
  display: inline-block;
  /* Formularrahmen */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Einheitliche Größe & Ausrichtung */
  display: inline-block;
  min-width: 90px;
  text-align: right;
}

input,
textarea {
  /* Um sicherzustellen, dass alle Textfelder die gleiche Schriftart haben
     Standardmäßig haben Textareas eine Monospace-Schrift */
  font: 1em sans-serif;
  /* Einheitliche Textfeldgröße */
  width: 300px;
  box-sizing: border-box;
  /* Formfeld-Ränder angleichen */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Zusätzliche Hervorhebung für fokussierte Elemente */
  border-color: #000;
}

textarea {
  /* Mehrzeilige Textfelder mit ihren Labels ausrichten */
  vertical-align: top;
  /* Platz schaffen, um etwas Text zu schreiben */
  height: 5em;
}

.button {
  /* Buttons mit den Textfeldern ausrichten */
  padding-left: 90px; /* gleiche Größe wie die Label-Elemente */
}

button {
  /* Dieser zusätzliche Rand repräsentiert ungefähr den gleichen Abstand wie der Raum
     zwischen den Labels und ihren Textfeldern */
  margin-left: 0.5em;
}
```

Speichern und neu laden, und Sie werden sehen, dass Ihr Formular jetzt viel weniger hässlich aussieht.

> [!NOTE]
> Sie finden unsere Version auf GitHub unter [first-form-styled.html](https://github.com/mdn/learning-area/blob/main/html/forms/your-first-HTML-form/first-form-styled.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Senden von Formulardaten an Ihren Webserver

Der letzte Teil, und vielleicht der kniffligste, ist das Handhaben von Formulardaten auf der Serverseite. Das {{HTMLelement("form")}}-Element definiert wo und wie die Daten gesendet werden dank der [`action`](/de/docs/Web/HTML/Element/form#action)- und [`method`](/de/docs/Web/HTML/Element/form#method)-Attribute.

Wir versehen jedes Formularelement mit einem `name`-Attribut. Die Namen sind sowohl auf der Client- als auch auf der Serverseite wichtig; sie geben dem Browser an, welchen Namen jedes Datenstück erhalten soll, und auf der Serverseite lassen sie den Server jedes Datenstück nach Namen bearbeiten. Die Formulardaten werden als Name/Wert-Paare an den Server gesendet.

Um die Daten in einem Formular zu benennen, müssen Sie das `name`-Attribut auf jedem Formularelement verwenden, das ein bestimmtes Datenstück sammelt. Schauen wir uns noch einmal einen Teil unseres Formularkodes an:

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    …
  </ul>
</form>
```

In unserem Beispiel wird das Formular 3 Datenstücke senden, genannt "`user_name`", "`user_email`", und "`user_message`". Diese Daten werden an die URL "`/my-handling-form-page`" mithilfe der [HTTP `POST`](/de/docs/Web/HTTP/Methods/POST)-Methode gesendet.

Auf der Serverseite wird das Skript an der URL "`/my-handling-form-page`" die Daten als Liste von 3 Schlüssel/Wert-Elementen empfangen, die in der HTTP-Anfrage enthalten sind. Die Art und Weise, wie dieses Skript diese Daten behandelt, liegt bei Ihnen. Jede serverseitige Sprache (PHP, Python, Ruby, Java, C#, etc.) hat ihren eigenen Mechanismus zum Umgang mit Formulardaten. Es geht über den Rahmen dieses Leitfadens hinaus, das Thema umfassend zu behandeln, aber wenn Sie mehr darüber wissen möchten, haben wir einige Beispiele in unserem Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) später gegeben.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben Ihr erstes Webformular erstellt. Es sieht so aus:

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
  /* Einfach um das Formular auf der Seite zu zentrieren */
  margin: 0 auto;
  width: 400px;

  /* Um die Grenzen des Formulars zu sehen */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* Um sicherzustellen, dass alle Label die gleiche Größe haben und korrekt ausgerichtet sind */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* Um sicherzustellen, dass alle Textfelder die gleichen Schriftarteinstellungen haben
     Standardmäßig sind Textareas mit einer Monospace-Schrift gesetzt */
  font: 1em sans-serif;

  /* Um allen Textfeldern die gleiche Größe zu geben */
  width: 300px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* Um das Aussehen und Gefühl der Textfeldränder zu harmonisieren */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Um einen kleinen Fokus auf aktive Elemente zu geben */
  border-color: #000;
}

textarea {
  /* Um mehrzeilige Textfelder korrekt mit ihren Labels auszurichten */
  vertical-align: top;

  /* Um genügend Platz für Texteingaben zu geben */
  height: 5em;

  /* Um Benutzern zu erlauben, jede Textarea vertikal zu vergrößern
     Es funktioniert nur in Chrome, Firefox und Safari */
  resize: vertical;
}

.button {
  /* Um die Buttons an der gleichen Position wie die Textfelder auszurichten */
  padding-left: 90px; /* gleiche Größe wie die Label-Elemente */
}

button {
  /* Dieser zusätzliche Rand stellt denselben Raum dar wie der Raum zwischen
     den Labels und ihren Textfeldern */
  margin-left: 0.5em;
}
```

{{ EmbedLiveSample('Summary', '', '300') }}

Das ist jedoch erst der Anfang – jetzt ist es an der Zeit, einen tieferen Blick darauf zu werfen. Formulare haben wesentlich mehr Möglichkeiten als das, was wir hier gesehen haben, und die anderen Artikel in diesem Modul werden Ihnen helfen, den Rest zu beherrschen.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare durch JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabellen für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
