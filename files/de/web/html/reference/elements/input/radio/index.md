---
title: HTML-Attributwert `<input type="radio">`
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 29f7a9f90986462f6b3df9ee8e25cf4ecf3a12f7
---

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden üblicherweise in **Radiobutton-Gruppen** verwendet – Gruppen von Radiobuttons, die zusammengehörige Optionen darstellen.

In einer Gruppe kann jeweils nur ein Radiobutton ausgewählt sein. Radiobuttons werden in der Regel als kleine Kreise dargestellt, die bei Auswahl ausgefüllt oder hervorgehoben werden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;radio&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Select a maintenance drone:</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Huey</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Dewey</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">Louie</label>
  </div>
</fieldset>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

## Wert

Das Attribut `value` ist eine Zeichenfolge, die den Wert des Radiobuttons enthält. Dieser Wert wird den Benutzern vom {{Glossary("user_agent", "User Agent")}} nicht angezeigt. Stattdessen dient er dazu, den ausgewählten Radiobutton einer Gruppe zu identifizieren.

### Eine Radiobutton-Gruppe definieren

Eine Radiobutton-Gruppe wird definiert, indem alle Radiobuttons der Gruppe denselben Wert für [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) erhalten. Sobald eine Radiobutton-Gruppe festgelegt ist, wird bei Auswahl eines Radiobuttons ein zuvor ausgewählter Radiobutton derselben Gruppe automatisch abgewählt.

Sie können beliebig viele Radiobutton-Gruppen auf einer Seite verwenden, solange jede einen eindeutigen `name` hat.

Wenn Ihr Formular beispielsweise nach der bevorzugten Kontaktmethode fragt, könnten Sie drei Radiobuttons erstellen, deren `name`-Eigenschaft jeweils auf `contact` gesetzt ist. Die Werte wären `email`, `phone` beziehungsweise `mail`. Die Benutzer sehen weder `value` noch `name`, sofern Sie nicht ausdrücklich Code hinzufügen, der diese Werte anzeigt.

Das resultierende HTML sieht so aus:

```html
<fieldset>
  <legend>Please select your preferred contact method:</legend>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
</fieldset>
```

Hier sehen Sie drei Radiobuttons, bei denen `name` jeweils auf `contact` gesetzt ist. Jeder hat einen eigenen `value`, der ihn innerhalb der Gruppe eindeutig identifiziert. Außerdem hat jeder eine eindeutige [`id`](/de/docs/Web/API/Element/id). Über diese verknüpft das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) des {{HTMLElement("label")}}-Elements die Beschriftungen mit den Radiobuttons.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Darstellung der Daten einer Radiobutton-Gruppe

Wenn ein Formular mit den obigen Steuerelementen abgeschickt wird und ein Radiobutton ausgewählt ist, enthalten die Formulardaten einen Eintrag der Form `contact=value`. Wenn die Benutzer beispielsweise den Radiobutton „Phone“ auswählen und das Formular abschicken, enthalten die übermittelten Formulardaten `contact=phone`.

Wenn Sie das Attribut `value` im HTML weglassen, wird der Gruppe in den übermittelten Formulardaten der Wert `on` zugewiesen. Wenn die Benutzer in diesem Fall die Option „Phone“ auswählen und das Formular abschicken, lauten die resultierenden Formulardaten `contact=on`. Das ist wenig hilfreich. Vergessen Sie also nicht, die `value`-Attribute festzulegen!

> [!NOTE]
> Wenn beim Abschicken des Formulars kein Radiobutton ausgewählt ist, erscheint die Radiobutton-Gruppe nicht in den übermittelten Formulardaten, da kein Wert übermittelt werden kann.

Meist ist es nicht erwünscht, dass ein Formular abgeschickt werden kann, ohne dass ein Radiobutton einer Gruppe ausgewählt ist. Daher ist es in der Regel sinnvoll, einen Radiobutton standardmäßig mit `checked` auszuwählen. Siehe [Einen Radiobutton standardmäßig auswählen](#einen_radiobutton_standardmäßig_auswählen) weiter unten.

Ergänzen wir unser Beispiel um etwas Code, damit wir die von diesen Steuerelementen erzeugten Daten untersuchen können. Das HTML wird so angepasst, dass die Steuerelemente von einem {{HTMLElement("form")}} umschlossen sind. Außerdem werden ein Button zum Abschicken und ein {{HTMLElement("pre")}}-Block zur Ausgabe der Formulardaten hinzugefügt:

```html
<form>
  <fieldset>
    <legend>Please select your preferred contact method:</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Email</label>
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Phone</label>
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Mail</label>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </fieldset>
</form>
<pre id="log"></pre>
```

Anschließend fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener für das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) einzurichten, das ausgelöst wird, wenn die Benutzer auf den Button „Submit“ klicken:

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  }
  log.innerText = output;
  event.preventDefault();
});
```

Probieren Sie das Beispiel aus. Für die Gruppe `contact` gibt es nie mehr als ein Ergebnis.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente unterstützen `radio`-Inputs die folgenden Attribute.

- `checked`
  - : Ein boolesches Attribut, das bei Vorhandensein angibt, dass dieser Radiobutton in der Gruppe standardmäßig ausgewählt ist.

    Anders als andere Browser [speichert Firefox standardmäßig den dynamischen `checked`-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über das erneute Laden der Seite hinweg. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete), um dieses Verhalten zu steuern.

- `value`
  - : Das Attribut `value` ist allen {{HTMLElement("input")}}-Elementen gemeinsam. Bei Inputs vom Typ `radio` erfüllt es jedoch einen besonderen Zweck: Beim Abschicken eines Formulars werden nur die aktuell ausgewählten Radiobuttons an den Server übermittelt. Der übermittelte Wert entspricht dem Wert des Attributs `value`. Wenn `value` nicht anderweitig festgelegt ist, wird standardmäßig die Zeichenfolge `on` verwendet. Dies wird oben im Abschnitt [Wert](#wert) gezeigt.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das Attribut `required` wird von den meisten {{HTMLElement("input")}}-Elementen unterstützt. Wenn ein Radiobutton in einer Gruppe mit demselben `name` das Attribut `required` hat, muss ein Radiobutton dieser Gruppe ausgewählt sein. Das muss nicht der Radiobutton sein, der das Attribut trägt.

## `radio`-Inputs verwenden

Radiobuttons ähneln in Aussehen und Funktionsweise den Drucktasten älterer Radios, wie dem unten abgebildeten.

![Zeigt, wie Radiobuttons früher aussahen.](old-radio.jpg)

Radiobuttons ähneln [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox), unterscheiden sich aber in einem wichtigen Punkt: Mit Radiobuttons wählen Sie einen Wert aus einer Gruppe aus, während Sie mit Checkboxen einzelne Werte unabhängig voneinander aktivieren und deaktivieren können. Bei mehreren Steuerelementen erlauben Radiobuttons also nur eine Auswahl, Checkboxen dagegen mehrere.

Die Grundlagen von Radiobuttons wurden oben bereits behandelt. Sehen wir uns nun weitere häufig benötigte Funktionen und Techniken an.

### Einen Radiobutton standardmäßig auswählen

Damit ein Radiobutton standardmäßig ausgewählt ist, fügen Sie das Attribut `checked` hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels:

```html
<fieldset>
  <legend>Please select your preferred contact method:</legend>
  <div>
    <input
      type="radio"
      id="contactChoice1"
      name="contact"
      value="email"
      checked />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

In diesem Fall ist nun der erste Radiobutton standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das Attribut `checked` mehreren Radiobuttons zuweisen, überschreiben spätere Vorkommen die früheren. Der letzte Radiobutton mit `checked` ist dann ausgewählt. Der Grund dafür ist, dass in einer Gruppe jeweils nur ein Radiobutton ausgewählt sein kann. Der User Agent wählt die anderen automatisch ab, sobald ein neuer Radiobutton als ausgewählt markiert wird.

### Die anklickbare Fläche Ihrer Radiobuttons vergrößern

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie einen Radiobutton nicht nur durch Klicken auf ihn selbst auswählen können, sondern auch durch Klicken auf das zugehörige {{htmlelement("label")}}-Element. Diese nützliche Funktion von HTML-Formularbeschriftungen erleichtert es Benutzern, die gewünschte Option anzuklicken – besonders auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen richtig einzurichten.

## Validierung

Wenn ein Radiobutton das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) hat oder mindestens ein Radiobutton in einer Gruppe mit demselben `name` mit `required` versehen ist, muss ein Radiobutton ausgewählt sein, damit das Steuerelement als gültig gilt. Ist kein Radiobutton ausgewählt, gibt die Eigenschaft [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurück. Der Browser fordert die Benutzer dann auf, eine Option auszuwählen.

## `radio`-Inputs gestalten

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir im gesamten Artikel verwendet haben. Es enthält zusätzliche Formatierungen und verbessert durch spezielle Elemente die Semantik. Das HTML sieht so aus:

```html
<fieldset>
  <legend>Please select your preferred contact method:</legend>
  <div>
    <input
      type="radio"
      id="contactChoice1"
      name="contact"
      value="email"
      checked />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="phone" />
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label for="contactChoice3">Mail</label>
  </div>
</fieldset>
```

Das CSS dieses Beispiels ist etwas umfangreicher:

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}
```

Besonders erwähnenswert ist die Verwendung der Eigenschaft {{cssxref("appearance")}} (mit Präfixen zur Unterstützung einiger Browser). Standardmäßig werden Radiobuttons und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit den nativen Formatierungen des Betriebssystems für diese Steuerelemente dargestellt. Mit `appearance: none` können Sie die native Darstellung vollständig entfernen und eigene Formatierungen erstellen. Hier werden {{cssxref("border")}}, {{cssxref("border-radius")}} und {{cssxref("transition")}} verwendet, um eine ansprechende Animation beim Auswählen eines Radiobuttons zu erzeugen. Beachten Sie auch, wie die Pseudoklasse {{cssxref(":checked")}} verwendet wird, um die Darstellung des Radiobuttons im ausgewählten Zustand festzulegen.

> [!NOTE]
> Wenn Sie die Eigenschaft {{cssxref("appearance")}} verwenden möchten, sollten Sie sie sorgfältig testen. Obwohl sie von den meisten modernen Browsern unterstützt wird, unterscheidet sich ihre Implementierung erheblich. In älteren Browsern hat selbst das Schlüsselwort `none` nicht überall dieselbe Wirkung; einige unterstützen es überhaupt nicht. In neueren Browsern sind die Unterschiede geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Wenn Sie auf einen Radiobutton klicken, sehen Sie einen gleichmäßigen Überblendeffekt, während die beiden Buttons ihren Zustand ändern. Außerdem wurden Gestaltung und Farbe der Legende für einen starken Kontrast angepasst. Für eine echte Webanwendung würden Sie vielleicht eine andere Gestaltung wählen, aber das Beispiel zeigt die Möglichkeiten deutlich.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert des Radiobuttons darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code> und
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>checked</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radiobuttons beschreibt
