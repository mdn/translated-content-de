---
title: '`<input type="radio">` HTML-Attributwert'
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{htmlelement("input")}} Elemente vom Typ **`radio`** werden allgemein in **Radiogruppen** verwendet – Sammlungen von Radio-Buttons, die eine Reihe verwandter Optionen beschreiben.

Es kann nur ein Radio-Button innerhalb einer gegebenen Gruppe gleichzeitig ausgewählt werden. Radio-Buttons werden typischerweise als kleine Kreise dargestellt, die ausgefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden Radio-Buttons genannt, weil sie aussehen und funktionieren wie die Druckknöpfe auf altmodischen Radios, wie das unten gezeigte Beispiel.

![Zeigt, wie Radio-Buttons in der Vergangenheit aussahen.](old-radio.jpg)

> [!NOTE]
> [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) sind ähnlich wie Radio-Buttons, jedoch mit einem wichtigen Unterschied: Radio-Buttons sind dafür gedacht, einen Wert aus einer Menge auszuwählen, während Checkboxen es Ihnen ermöglichen, einzelne Werte ein- oder auszuschalten. Wo mehrere Steuerelemente vorhanden sind, erlauben Radio-Buttons, einen davon auszuwählen, während Checkboxen mehrere Werte auswählen lassen.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Radio-Buttons enthält. Der Wert wird dem Benutzer niemals von dessen {{Glossary("user_agent", "User Agent")}} angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welcher Radio-Button innerhalb einer Gruppe ausgewählt ist.

### Eine Radiogruppe definieren

Eine Radiogruppe wird definiert, indem jedem Radio-Button in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe festgelegt ist, wird beim Auswählen eines Radio-Buttons in dieser Gruppe automatisch jeder aktuell ausgewählte Radio-Button in derselben Gruppe abgewählt.

Sie können beliebig viele Radiogruppen auf einer Seite haben, solange jede einen eigenen, eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Radio-Buttons erstellen, jeder mit der `name`-Eigenschaft `contact` gesetzt, aber einer mit dem Wert `email`, einer mit dem Wert `phone` und einer mit dem Wert `mail`. Der Benutzer sieht weder den `value` noch den `name` (es sei denn, Sie fügen explizit Code hinzu, um ihn anzuzeigen).

Der resultierende HTML-Code sieht so aus:

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

Hier sehen Sie die drei Radio-Buttons, jeder mit `name` auf `contact` gesetzt und jedem mit einem eindeutigen `value`, der diesen individuellen Radio-Button innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element-Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) verwendet wird, um die Labels mit den Radio-Buttons zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das oben gezeigte Formular mit einem ausgewählten Radio-Button abgesendet wird, enthält die Formulardaten einen Eintrag im Format `contact=value`. Zum Beispiel, wenn der Benutzer auf den "Telefon"-Radio-Button klickt und das Formular sendet, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, ordnen die gesendeten Formulardaten den Wert `on` der Gruppe zu. In diesem Fall, wenn der Benutzer die Option "Telefon" auswählt und das Formular sendet, wären die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute festzulegen!

> [!NOTE]
> Wenn kein Radio-Button ausgewählt ist, wenn das Formular gesendet wird, wird die Radiogruppe überhaupt nicht in die gesendeten Formulardaten aufgenommen, da kein Wert zum Berichten vorhanden ist.

Es ist ziemlich ungewöhnlich, tatsächlich zu wollen, dass das Formular gesendet werden kann, ohne dass einer der Radio-Buttons in einer Gruppe ausgewählt ist. Es ist normalerweise ratsam, einen standardmäßig auf `checked` zu setzen. Siehe [Standardmäßige Auswahl eines Radio-Buttons](#standardmäßige_auswahl_eines_radio-buttons) unten.

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener auf das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die Schaltfläche "Absenden" klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, wie niemals mehr als ein Ergebnis für die `contact`-Gruppe vorhanden ist.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio` Eingaben die folgenden Attribute.

- `checked`
  - : Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass dieser Radio-Button als standardmäßig ausgewählt gilt.

    Anders als bei anderen Browsern bewahrt Firefox standardmäßig den dynamischen `checked`-Status von einem `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um dieses Feature zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; jedoch dient es für Eingaben vom Typ `radio` einem besonderen Zweck: Wenn ein Formular gesendet wird, werden nur Radio-Buttons, die aktuell ausgewählt sind, an den Server gesendet und der gemeldete Wert ist der des `value`-Attributs. Wenn das `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn ein Radio-Button in einer Gruppe von gleichnamigen Radio-Buttons das `required`-Attribut hat, muss ein Radio-Button in dieser Gruppe ausgewählt werden, obwohl es nicht derjenige mit dem angewendeten Attribut sein muss.

## Radio-Inputs verwenden

Wir haben die Grundlagen der Radio-Buttons oben bereits behandelt. Lassen Sie uns nun die anderen häufig verwendeten Funktionen und Techniken im Zusammenhang mit Radio-Buttons ansehen, die Sie wissen sollten.

### Standardmäßige Auswahl eines Radio-Buttons

Um einen Radio-Button standardmäßig ausgewählt zu machen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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

In diesem Fall ist jetzt der erste Radio-Button standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als einen Radio-Button setzen, überschreiben spätere Instanzen frühere; das heißt, der letzte `checked` Radio-Button wird derjenige sein, der ausgewählt ist. Dies liegt daran, dass nur ein Radio-Button in einer Gruppe jemals ausgewählt sein kann und der User Agent automatisch andere deselektiert, wenn ein neuer als `checked` markiert wird.

### Bereitstellung eines größeren Klickbereichs für Ihre Radio-Buttons

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie einen Radio-Button auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, ebenso wie auf den Radio-Button selbst. Dies ist eine wirklich nützliche Funktion von HTML-Form-Labels, die es Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente ordnungsgemäß in Ihren Formularen einzurichten.

## Validierung

Im Fall eines Radio-Buttons, bei dem das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut eingestellt ist, oder bei einer Gruppe gleichnamiger Radio-Buttons, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Radio-Button ausgewählt sein, damit die Steuerung als gültig betrachtet wird. Wenn kein Radio-Button markiert ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas umfassendere Version des Beispiels, das wir im Artikel durchgehend verwendet haben, mit etwas zusätzlichem Styling und besser etablierter Semantik durch die Verwendung spezialisierter Elemente. Der HTML-Code sieht so aus:

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

Das in diesem Beispiel verwendete CSS ist etwas umfangreicher:

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

Besonders bemerkenswert ist hier die Verwendung der {{cssxref("appearance")}} Eigenschaft (mit Präfixen erforderlich, um einige Browser zu unterstützen). Standardmäßig werden Radio-Buttons (und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerelemente gestylt. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und eigene Stile dafür erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierende Radionauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Aussehen des Radio-Buttons bei Auswahl anzugeben.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}} Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat sogar das Schlüsselwort `none` nicht den gleichen Effekt in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf einen Radio-Button ein schöner, glatter Aus- und Einblendeffekt auftritt, wenn die beiden Buttons den Zustand ändern. Darüber hinaus sind der Stil und die Farbgebung der Legende und des Absenden-Buttons so gestaltet, dass sie einen starken Kontrast bieten. Dies ist möglicherweise nicht der Look, den Sie in einer echten Webanwendung wünschen würden, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des Radio-Buttons repräsentiert.
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radio-Buttons beschreibt.
