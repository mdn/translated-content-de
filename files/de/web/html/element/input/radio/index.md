---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden in der Regel in **Radiogruppen** verwendet – Sammlungen von Radiobuttons, die eine Reihe verwandter Optionen beschreiben.

Nur ein Radiobutton in einer bestimmten Gruppe kann gleichzeitig ausgewählt sein. Radiobuttons werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden Radiobuttons genannt, weil sie aussehen und funktionieren wie die Druckknöpfe an alten Radios, wie der unten gezeigte.

![Zeigt, wie Radiobuttons in der Vergangenheit aussahen.](old-radio.jpg)

> **Hinweis:** [Checkboxes](/de/docs/Web/HTML/Element/input/checkbox) ähneln Radiobuttons, haben jedoch einen wichtigen Unterschied: Radiobuttons sind dafür ausgelegt, einen Wert aus einer Menge auszuwählen, während Checkboxes es ermöglichen, einzelne Werte an- oder auszuschalten. Wo mehrere Steuerungen vorhanden sind, erlauben Radiobuttons die Auswahl von nur einem, während Checkboxes die Auswahl mehrerer Werte erlauben.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Radiobuttons enthält. Der Wert wird niemals dem Benutzer durch seinen {{Glossary("user_agent", "Benutzeragenten")}} angezeigt. Stattdessen wird es verwendet, um zu identifizieren, welcher Radiobutton in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Radiobutton in der Gruppe der gleiche [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Radiogruppe festgelegt ist, wird durch die Auswahl eines beliebigen Radiobuttons in dieser Gruppe automatisch jeder derzeit ausgewählte Radiobutton in derselben Gruppe deselektiert.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen eindeutigen `name` hat.

Wenn Ihr Formular beispielsweise den Benutzer nach seiner bevorzugten Kontaktmethode fragen soll, könnten Sie drei Radiobuttons erstellen, jeder mit der `name`-Eigenschaft auf `contact` gesetzt, aber mit einem `value` von `email`, einem mit `phone` und einem mit `mail`. Der Benutzer sieht niemals den `value` oder den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

Das resultierende HTML sieht folgendermaßen aus:

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

Hier sehen Sie die drei Radiobuttons, jeder mit dem `name` auf `contact` gesetzt und jedem mit einem eindeutigen `value`, der diesen individuellen Radiobutton innerhalb der Gruppe eindeutig identifiziert. Sie haben auch ein einzigartiges [`id`](/de/docs/Web/API/Element/id), das vom {{HTMLElement("label")}}-Element durch das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut verwendet wird, um die Labels mit den Radiobuttons zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Radiobutton gesendet wird, enthält die Formulardaten einen Eintrag in der Form `contact=value`. Wenn der Benutzer beispielsweise auf den "Phone"-Radiobutton klickt und das Formular absendet, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die eingereichte Formulardaten den Wert `on` der Gruppe zu. In diesem Szenario, wenn der Benutzer auf die "Phone"-Option klickt und das Formular absendet, wären die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Also vergessen Sie nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Radiobutton ausgewählt ist, wenn das Formular eingereicht wird, wird die Radiogruppe in den eingereichten Formulardaten überhaupt nicht aufgenommen, da kein Wert zu melden ist.

Es ist ziemlich ungewöhnlich, tatsächlich zu möchten, dass das Formular ohne einen ausgewählten Radiobutton in der Gruppe eingereicht wird, daher ist es normalerweise ratsam, einen Standardwert mit dem Status `checked` zu haben. Siehe [Auswahl eines Radiobuttons standardmäßig](#auswahl_eines_radiobuttons_standardmäßig) unten.

Lassen Sie uns unserem Beispiel etwas Code hinzufügen, damit wir die von diesem Formular generierten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die "Submit"-Schaltfläche klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, wie es niemals mehr als ein Ergebnis für die `contact`-Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio`-Inputs die folgenden Attribute.

- `checked`

  - : Ein boolesches Attribut, das, falls vorhanden, anzeigt, dass dieser Radiobutton der standardmäßig ausgewählte in der Gruppe ist.

    Anders als andere Browser, behält Firefox standardmäßig den dynamischen ausgewählten Zustand eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um dieses Feature zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es hat jedoch einen besonderen Zweck für Inputs vom Typ `radio`: Wenn ein Formular gesendet wird, werden nur die Radiobuttons, die derzeit ausgewählt sind, an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Falls das `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn irgendein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut hat, muss ein Radiobutton in dieser Gruppe ausgewählt sein, obwohl es nicht derjenige sein muss, auf den das Attribut angewandt wurde.

## Verwendung von Radio-Inputs

Wir haben bereits die Grundlagen von Radiobuttons oben behandelt. Lassen Sie uns nun die anderen allgemeinen Merkmale und Techniken im Zusammenhang mit Radiobuttons betrachten, die Sie kennen sollten.

### Auswahl eines Radiobuttons standardmäßig

Um einen Radiobutton standardmäßig auszuwählen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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

In diesem Fall ist der erste Radiobutton jetzt standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als einem Radiobutton anwenden, überschreiben spätere Instanzen frühere; das heißt, der letzte `checked`-Radiobutton wird derjenige sein, der ausgewählt ist. Dies liegt daran, dass in einer Gruppe immer nur ein Radiobutton gleichzeitig ausgewählt sein kann, und der Benutzeragent automatisch andere jedes Mal deselektiert, wenn einer neu als ausgewählt markiert wird.

### Bereitstellung eines größeren Klickbereichs für Ihre Radiobuttons

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie einen Radiobutton auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, sowie auf den Radiobutton selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es den Benutzern erleichtert, die gewünschte Option anzuklicken, insbesondere auf Kleingeräten wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Im Fall eines Radiobuttons mit dem [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Radiobuttons, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Radiobutton ausgewählt sein, damit das Steuerungsobjekt als gültig betrachtet wird. Wenn kein Radiobutton ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas gründlichere Version des Beispiels, das wir im Laufe des Artikels gesehen haben, mit zusätzlichem Styling und besseren Semantiken durch den Einsatz spezialisierter Elemente. Das HTML sieht folgendermaßen aus:

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

  border: 2px solid #999;
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
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Besonders bemerkenswert ist hier die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen zur Unterstützung einiger Browser). Standardmäßig werden Radiobuttons (und [Checkboxes](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestylt. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierende Radiowahlautomatik zu schaffen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Erscheinungsbild des Radiobuttons zu spezifizieren, wenn er ausgewählt ist.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Stichwort `none` nicht dieselbe Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf einen Radiobutton ein schöner, sanfter Ausblende-/Einblendeeffekt zu sehen ist, während die beiden Buttons den Zustand ändern. Darüber hinaus sind der Stil und die Farbgebung der Legende und der Sendeschaltfläche angepasst, um einen starken Kontrast zu schaffen. Dies ist möglicherweise nicht das Erscheinungsbild, das Sie in einer echten Webanwendung wünschen, es zeigt jedoch definitiv die Möglichkeiten auf.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des Radiobuttons darstellt.
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
          ><a href="/de/docs/Web/HTML/Attributes/required">required</a></code
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
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die sie implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radiobuttons beschreibt.
