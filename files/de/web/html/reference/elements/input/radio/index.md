---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{htmlelement("input")}} Elemente mit dem Typ **`radio`** werden allgemein in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Gruppe verwandter Optionen beschreiben.

Nur ein Optionsfeld in einer gegebenen Gruppe kann gleichzeitig ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden als Optionsfelder bezeichnet, weil sie aussehen und funktionieren wie die Druckknöpfe auf altmodischen Radios, wie das unten gezeigte.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> [!NOTE]
> [Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) sind ähnlich wie Optionsfelder, weisen jedoch einen wichtigen Unterschied auf: Optionsfelder dienen der Auswahl eines Werts aus einer Menge, während Kontrollkästchen es ermöglichen, einzelne Werte ein- und auszuschalten. Wo mehrere Bedienelemente existieren, kann bei Optionsfeldern eines ausgewählt werden, während bei Kontrollkästchen mehrere Werte ausgewählt werden können.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Optionsfeldes enthält. Der Wert wird vom {{Glossary("user_agent", "User Agent")}} den Benutzern niemals angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe der gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe eingerichtet ist, hebt die Auswahl eines beliebigen Optionsfeldes in dieser Gruppe automatisch die Auswahl eines aktuell ausgewählten Optionsfeldes in derselben Gruppe auf.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen eigenen, eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragen soll, können Sie drei Optionsfelder erstellen, die alle das `name`-Attribut auf `contact` gesetzt haben, aber jeweils einen unterschiedlichen `value`, wie `email`, `phone` und `mail`. Der Benutzer sieht niemals den `value` oder `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

Der resultierende HTML-Code sieht folgendermaßen aus:

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

Hier sehen Sie die drei Optionsfelder, die alle den `name` auf `contact` gesetzt haben und alle einen eindeutigen `value`, der das einzelne Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element mittels des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attributs verwendet wird, um die Labels mit den Optionsfeldern zu verbinden.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das oben dargestellte Formular mit einem ausgewählten Optionsfeld übermittelt wird, enthält die Formulardaten einen Eintrag in der Form `contact=value`. Wenn der Benutzer beispielsweise das Optionsfeld "Telefon" auswählt und das Formular einreicht, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, weist das übermittelte Formulardatenformular der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer die Option "Telefon" auswählt und das Formular einreicht, würden die resultierenden Formulardaten `contact=on` lauten, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute festzulegen!

> [!NOTE]
> Wenn bei der Formularübermittlung kein Optionsfeld ausgewählt ist, wird die Radiogruppe überhaupt nicht in die gesendeten Formulardaten eingeschlossen, da es keinen Wert zu berichten gibt.

Es ist ziemlich ungewöhnlich, tatsächlich zu wollen, dass das Formular eingereicht werden kann, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt wurde, daher ist es in der Regel klug, eines standardmäßig auf den `checked`-Status zu setzen. Siehe [Auswahl eines Optionsfeldes standardmäßig](#auswahl_eines_optionsfelds_standardmäßig) unten.

Lassen Sie uns ein wenig Code zu unserem Beispiel hinzufügen, damit wir die von diesem Formular generierten Daten untersuchen können. Der HTML-Code wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten anzuzeigen:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das ausgelöst wird, wenn der Benutzer auf die Schaltfläche "Submit" klickt:

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

Probieren Sie dieses Beispiel aus und sehen Sie, dass es nie mehr als ein Ergebnis für die `contact`-Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `radio` Eingaben die folgenden Attribute.

- `checked`
  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Anders als andere Browser behält Firefox standardmäßig den [dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es hat jedoch einen speziellen Zweck für Eingaben vom Typ `radio`: Wenn ein Formular übermittelt wird, werden nur die derzeit überprüften Optionsfelder an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe ausgewählt werden, obwohl es nicht das sein muss, bei dem das Attribut angewendet wird.

## Verwendung von Radio-Eingaben

Wir haben die Grundlagen von Optionsfeldern bereits oben behandelt. Schauen wir uns jetzt die anderen gängigen, optionsfeldbezogenen Funktionen und Techniken an, die Sie kennen sollten.

### Auswahl eines Optionsfelds standardmäßig

Um ein Optionsfeld standardmäßig ausgewählt zu machen, fügen Sie `checked`-Attribut ein, wie in dieser überarbeiteten Version des vorherigen Beispiels:

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

In diesem Fall ist das erste Optionsfeld nun standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als ein Optionsfeld setzen, überschreiben spätere Instanzen frühere; das heißt, das letzte `checked` Optionsfeld wird dasjenige sein, das ausgewählt ist. Dies liegt daran, dass in einer Gruppe immer nur ein Optionsfeld ausgewählt werden kann und der Benutzeragent automatisch andere deselektiert, jedes Mal, wenn ein neues als ausgewählt markiert wird.

### Bereitstellen eines größeren Trefferbereichs für Ihre Optionsfelder

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf sein zugehöriges {{htmlelement("label")}}-Element sowie auf das Optionsfeld selbst klicken. Dies ist eine wirklich nützliche Eigenschaft von HTML-Formularbeschriftungen, die es Benutzern erleichtert, die gewünschte Option anzuklicken, besonders auf Geräten mit kleinem Bildschirm, wie Smartphones.

Abgesehen von der Zugänglichkeit ist dies ein weiterer guter Grund, korrekt `<label>`-Elemente in Ihren Formularen einzurichten.

## Validierung

Im Fall eines Optionsfeldes mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig angesehen wird. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## Styling von Radio-Eingaben

Das folgende Beispiel zeigt eine etwas umfassendere Version des Beispiels, das wir im Artikel gesehen haben, mit zusätzlichem Styling und besserer Semantik durch die Verwendung spezialisierter Elemente. Der HTML-Code sieht so aus:

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

Das CSS, das in diesem Beispiel verwendet wird, ist etwas umfangreicher:

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

Besonders bemerkenswert ist hier die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit erforderlichen Präfixen zur Unterstützung einiger Browser). Standardmäßig werden Optionsfelder (und [Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerelemente gestaltet. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und eigene Stile dafür erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierte Optionsfeldauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudo-Klasse verwendet wird, um die Stile für das Erscheinungsbild des Optionsfeldes bei seiner Auswahl festzulegen.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Auch wenn sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht in allen Browsern die gleiche Wirkung, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Fade-Out/Ein-Effekt auftritt, wenn die beiden Schaltflächen ihren Zustand ändern. Darüber hinaus sind der Stil und die Farbgebung der Legende und der Senden-Schaltfläche angepasst, um einen starken Kontrast zu haben. Dies ist vielleicht nicht das Aussehen, das Sie in einer echten Webanwendung wünschen würden, aber es zeigt auf jeden Fall die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des Optionsfeldes repräsentiert.
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt.
