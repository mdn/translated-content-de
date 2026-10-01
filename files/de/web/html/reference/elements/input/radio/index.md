---
title: '`<input type="radio">` – HTML-Attributwert'
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden üblicherweise in **Radio-Button-Gruppen** verwendet – Gruppen von Radio-Buttons, die zusammengehörige Optionen beschreiben.

In einer Gruppe kann jeweils nur ein Radio-Button ausgewählt sein. Radio-Buttons werden normalerweise als kleine Kreise dargestellt, die bei Auswahl ausgefüllt oder hervorgehoben werden.

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

Das Attribut `value` ist eine Zeichenfolge, die den Wert des Radio-Buttons enthält. Der {{Glossary("user_agent", "User Agent")}} zeigt diesen Wert den Benutzern nicht an. Stattdessen wird er verwendet, um zu erkennen, welcher Radio-Button einer Gruppe ausgewählt ist.

### Eine Radio-Button-Gruppe definieren

Eine Radio-Button-Gruppe wird definiert, indem alle Radio-Buttons der Gruppe denselben Wert für [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) erhalten. Sobald eine Gruppe festgelegt ist, wird durch die Auswahl eines Radio-Buttons automatisch ein zuvor ausgewählter Radio-Button derselben Gruppe abgewählt.

Sie können beliebig viele Radio-Button-Gruppen auf einer Seite verwenden, solange jede einen eigenen, eindeutigen `name` hat.

Wenn Ihr Formular beispielsweise nach der bevorzugten Kontaktmethode fragen soll, könnten Sie drei Radio-Buttons erstellen. Bei allen setzen Sie die Eigenschaft `name` auf `contact`, während Sie für `value` jeweils `email`, `phone` beziehungsweise `mail` festlegen. Die Werte von `value` und `name` sind für Benutzer nicht sichtbar, sofern Sie nicht ausdrücklich Code hinzufügen, um sie anzuzeigen.

Das resultierende HTML sieht so aus:

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
```

Hier sehen Sie die drei Radio-Buttons. Bei jedem ist `name` auf `contact` gesetzt, und jeder hat einen eigenen `value`, der ihn innerhalb der Gruppe eindeutig identifiziert. Außerdem hat jeder eine eindeutige [`id`](/de/docs/Web/API/Element/id). Über das Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) des {{HTMLElement("label")}}-Elements werden die Beschriftungen mit den Radio-Buttons verknüpft.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Darstellung der Daten einer Radio-Button-Gruppe

Wenn das obige Formular mit einem ausgewählten Radio-Button gesendet wird, enthalten die Formulardaten einen Eintrag der Form `contact=value`. Wenn der Benutzer beispielsweise den Radio-Button „Phone“ auswählt und anschließend das Formular sendet, enthalten die Formulardaten den Eintrag `contact=phone`.

Wenn Sie das Attribut `value` im HTML weglassen, wird der Gruppe in den gesendeten Formulardaten der Wert `on` zugewiesen. Wenn der Benutzer in diesem Fall die Option „Phone“ auswählt und das Formular sendet, lauten die resultierenden Formulardaten `contact=on` – das ist wenig hilfreich. Vergessen Sie daher nicht, die `value`-Attribute festzulegen!

> [!NOTE]
> Wenn beim Senden des Formulars kein Radio-Button ausgewählt ist, wird die Radio-Button-Gruppe gar nicht in die gesendeten Formulardaten aufgenommen, da kein Wert übermittelt werden kann.

In der Regel soll ein Formular nicht gesendet werden können, ohne dass in einer Gruppe ein Radio-Button ausgewählt ist. Daher ist es meist sinnvoll, einen Radio-Button standardmäßig mit `checked` auszuwählen. Weitere Informationen finden Sie unten unter [Einen Radio-Button standardmäßig auswählen](#einen_radio-button_standardmäßig_auswählen).

Ergänzen wir unser Beispiel um etwas Code, damit wir die von diesem Formular erzeugten Daten untersuchen können. Das HTML wird um einen {{HTMLElement("pre")}}-Block zur Ausgabe der Formulardaten erweitert:

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

Anschließend fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener für das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) einzurichten. Dieses Ereignis wird ausgelöst, wenn der Benutzer auf die Schaltfläche „Submit“ klickt:

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

Probieren Sie das Beispiel aus und beobachten Sie, dass es für die Gruppe `contact` nie mehr als ein Ergebnis gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente unterstützen `radio`-Eingabeelemente die folgenden Attribute.

- `checked`
  - : Ein boolesches Attribut, das angibt, dass dieser Radio-Button in der Gruppe standardmäßig ausgewählt ist, wenn es vorhanden ist.

    Anders als andere Browser [speichert Firefox standardmäßig den dynamischen Auswahlzustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über das erneute Laden der Seite hinweg. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete), um dieses Verhalten zu steuern.

- `value`
  - : Das Attribut `value` haben alle {{HTMLElement("input")}}-Elemente gemeinsam. Bei Eingabeelementen vom Typ `radio` erfüllt es jedoch einen besonderen Zweck: Wenn ein Formular gesendet wird, werden nur die aktuell ausgewählten Radio-Buttons an den Server übermittelt. Der übermittelte Wert entspricht ihrem Attribut `value`. Wenn `value` nicht anderweitig festgelegt ist, lautet der Wert standardmäßig `on`. Dies wird oben im Abschnitt [Wert](#wert) gezeigt.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das Attribut `required` wird von den meisten {{HTMLElement("input")}}-Elementen unterstützt. Wenn ein Radio-Button in einer Gruppe mit demselben `name` dieses Attribut hat, muss ein Radio-Button der Gruppe ausgewählt sein. Es muss jedoch nicht der Radio-Button sein, der das Attribut trägt.

## `radio`-Eingabeelemente verwenden

Radio-Buttons ähneln in Aussehen und Funktionsweise den Drucktasten älterer Radiogeräte, wie dem unten abgebildeten.

![Zeigt, wie Radiotasten früher aussahen.](old-radio.jpg)

Radio-Buttons ähneln [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox), haben aber einen wichtigen Unterschied: Mit Radio-Buttons wird ein Wert aus einer Gruppe ausgewählt, während sich mit Checkboxen einzelne Werte unabhängig voneinander aktivieren und deaktivieren lassen. Bei mehreren Steuerelementen kann mit Radio-Buttons nur eines davon ausgewählt werden, mit Checkboxen dagegen mehrere.

Die Grundlagen von Radio-Buttons haben wir oben bereits behandelt. Sehen wir uns nun weitere häufig benötigte Funktionen und Techniken an.

### Einen Radio-Button standardmäßig auswählen

Um einen Radio-Button standardmäßig auszuwählen, fügen Sie das Attribut `checked` hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

```html
<form>
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
    <div>
      <button type="submit">Submit</button>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

In diesem Fall ist nun der erste Radio-Button standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das Attribut `checked` bei mehreren Radio-Buttons angeben, überschreiben spätere Angaben die früheren. Der letzte Radio-Button mit `checked` ist also ausgewählt. Der Grund dafür ist, dass in einer Gruppe immer nur ein Radio-Button ausgewählt sein kann. Der User Agent wählt die anderen automatisch ab, sobald ein neuer als ausgewählt markiert wird.

### Die anklickbare Fläche von Radio-Buttons vergrößern

In den obigen Beispielen ist Ihnen vielleicht aufgefallen, dass Sie einen Radio-Button nicht nur durch einen Klick auf ihn selbst, sondern auch durch einen Klick auf sein zugehöriges {{htmlelement("label")}}-Element auswählen können. Diese nützliche Funktion von HTML-Formularbeschriftungen erleichtert es Benutzern, die gewünschte Option anzuklicken – insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Wenn ein Radio-Button das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) hat oder mindestens ein Radio-Button in einer Gruppe mit demselben `name` dieses Attribut hat, muss ein Radio-Button ausgewählt sein, damit das Steuerelement als gültig gilt. Ist kein Radio-Button ausgewählt, gibt die Eigenschaft [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## `radio`-Eingabeelemente gestalten

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir im Laufe des Artikels verwendet haben. Es enthält zusätzliche Formatierungen und verbessert die Semantik durch den Einsatz spezieller Elemente. Das HTML sieht so aus:

```html
<form>
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
    <div>
      <button type="submit">Submit</button>
    </div>
  </fieldset>
</form>
```

Das CSS in diesem Beispiel ist etwas umfangreicher:

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

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Besonders bemerkenswert ist hier die Verwendung der Eigenschaft {{cssxref("appearance")}} (mit Präfixen, die zur Unterstützung einiger Browser erforderlich sind). Standardmäßig werden Radio-Buttons (und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerelemente dargestellt. Mit `appearance: none` können Sie diese nativen Stile vollständig entfernen und eigene Stile erstellen. Hier verwenden wir {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und {{cssxref("transition")}}, um beim Auswählen eines Radio-Buttons eine ansprechende Animation zu erzeugen. Beachten Sie auch, wie die Pseudoklasse {{cssxref(":checked")}} verwendet wird, um das Aussehen eines ausgewählten Radio-Buttons festzulegen.

> [!NOTE]
> Wenn Sie die Eigenschaft {{cssxref("appearance")}} verwenden möchten, sollten Sie sie sorgfältig testen. Obwohl die meisten modernen Browser sie unterstützen, unterscheidet sich ihre Implementierung erheblich. In älteren Browsern hat selbst das Schlüsselwort `none` nicht überall dieselbe Wirkung; einige unterstützen es überhaupt nicht. In den neuesten Browsern sind die Unterschiede geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie beim Anklicken eines Radio-Buttons den gleichmäßigen Überblendeffekt, während die beiden Schaltflächen ihren Zustand wechseln. Außerdem sind Stil und Farbe der Legende und der Schaltfläche zum Senden so angepasst, dass ein starker Kontrast entsteht. Für eine echte Webanwendung würden Sie sich vielleicht für ein anderes Aussehen entscheiden, aber das Beispiel zeigt die Möglichkeiten deutlich.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert des Radio-Buttons darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radio-Buttons beschreibt
