---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden normalerweise in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

In einer bestimmten Radiogruppe kann immer nur ein Optionsfeld ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise angezeigt, die ausgefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich aussehen und funktionieren wie die Drucktasten auf altmodischen Radios, wie das unten gezeigte.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> **Note:** [Checkboxes](/de/docs/Web/HTML/Reference/Elements/input/checkbox) sind ähnlich wie Optionsfelder, unterscheiden sich jedoch in einem wichtigen Punkt: Optionsfelder sind dafür ausgelegt, einen Wert aus einer Menge auszuwählen, während Checkboxes es ermöglichen, einzelne Werte ein- oder auszuschalten. Wo mehrere Steuerungen vorhanden sind, erlauben Optionsfelder die Auswahl eines Werts aus allen, während Checkboxes die Auswahl mehrerer Werte erlaubt.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Optionsfeldes enthält. Der Wert wird dem Benutzer niemals von seinem {{Glossary("user_agent", "User-Agent")}} angezeigt. Stattdessen wird er verwendet, um festzustellen, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe festgelegt ist, führt die Auswahl eines beliebigen Optionsfeldes in dieser Gruppe automatisch dazu, dass ein derzeit ausgewähltes Optionsfeld in derselben Gruppe abgewählt wird.

Auf einer Seite können Sie so viele Radiogruppen haben, wie Sie möchten, solange jede ihren eigenen eindeutigen `name` hat.

Wenn Ihr Formular beispielsweise den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Optionsfelder erstellen, die alle die `name`-Eigenschaft auf `contact` gesetzt haben, aber eines mit dem Wert `email`, eines mit dem Wert `phone` und eines mit dem Wert `mail`. Der Benutzer sieht nie den `value` oder den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem eindeutigen `value`, das dieses individuelle Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut verwendet wird, um die Beschriftungen mit den Optionsfeldern zu verbinden.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Optionsfeld abgeschickt wird, enthält die Formulardaten einen Eintrag im Formular `contact=value`. Zum Beispiel, wenn der Benutzer auf das "Phone"-Optionsfeld klickt und dann das Formular abschickt, werden die Formulardaten die Zeile `contact=phone` enthalten.

Wenn Sie das `value`-Attribut im HTML weglassen, weist der abgesendete Formularwert der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer die "Phone"-Option klickt und das Formular übermittelt, würden die resultierenden Formulardaten `contact=on` lauten, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Optionsfeld ausgewählt ist, wenn das Formular abgesendet wird, wird die Radiogruppe überhaupt nicht in die gesendeten Formulardaten aufgenommen, da kein Wert zu melden ist.

Es ist ziemlich untypisch, tatsächlich zu wünschen, dass das Formular abgeschickt werden darf, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt ist, daher ist es normalerweise klug, einen Standard im `checked`-Status zu haben. Siehe [Auswahl eines Standards für ein Optionsfeld](#auswahl_eines_standards_für_ein_optionsfeld) unten.

Lassen Sie uns etwas Code zu unserem Beispiel hinzufügen, damit wir die von diesem Formular generierten Daten untersuchen können. Der HTML-Code wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die Schaltfläche "Absenden" klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, wie es nie mehr als ein Ergebnis für die `contact`-Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein Boolean-Attribut, welches, falls vorhanden, angibt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Anders als andere Browser, [persistiert Firefox standardmäßig den dynamischen checked-Status](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; jedoch hat es einen speziellen Zweck für Eingaben vom Typ `radio`: Wenn ein Formular abgeschickt wird, werden nur Optionsfelder, die derzeit ausgewählt sind, an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anders angegeben ist, ist er standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben erläutert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn irgendein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe ausgewählt sein, obwohl es nicht das sein muss, das das Attribut angewendet hat.

## Verwendung von Radio-Inputs

Wir haben oben bereits die Grundlagen von Radio-Buttons behandelt. Schauen wir uns jetzt die anderen gängigen Features und Techniken im Zusammenhang mit Radio-Buttons an, die Sie kennen sollten.

### Auswahl eines Standards für ein Optionsfeld

Um ein Optionsfeld standardmäßig ausgewählt zu machen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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

In diesem Fall ist das erste Optionsfeld jetzt standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als ein Optionsfeld setzen, überschreiben spätere Instanzen frühere; das heißt, das letzte `checked`-Optionsfeld wird das sein, das ausgewählt ist. Dies liegt daran, dass nur ein Optionsfeld in einer Gruppe gleichzeitig ausgewählt sein kann und der User-Agent automatisch andere abwählt, jedes Mal, wenn ein neues als ausgewählt markiert wird.

### Bereitstellung eines größeren Klickbereichs für Ihre Optionsfelder

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, genauso wie auf das Optionsfeld selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularbeschriftungen, die es den Benutzern erleichtert, die gewünschte Option anzuklicken, insbesondere auf kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen richtig einzurichten.

## Validierung

Im Falle eines Optionsfeldes mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt sein, damit die Steuerung als gültig angesehen wird. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück, und der Browser wird den Benutzer auffordern, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir im Artikel gesehen haben, mit zusätzlichem Styling und mit besseren Semantiken durch die Verwendung spezialisierter Elemente. Der HTML-Code sieht folgendermaßen aus:

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

Hier fällt besonders die Verwendung der {{cssxref("appearance")}}-Eigenschaft auf (mit Präfixen, die zur Unterstützung einiger Browser erforderlich sind). Standardmäßig werden Optionsfelder (und [Checkboxes](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestaltet. Durch die Angabe von `appearance: none` können Sie das native Styling ganz entfernen und eigene Stile für sie erstellen. Hier haben wir eine {{cssxref("border")}} in Verbindung mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierende Optionsfeld-Auswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Erscheinungsbild des Optionsfeldes beim Auswählen zu bestimmen.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert deren Implementierung stark. In älteren Browsern hat sogar das Schlüsselwort `none` nicht in allen Browsern die gleiche Wirkung, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Fade-Out/Fade-In-Effekt auftritt, wenn sich die beiden Knöpfe im Zustand wechseln. Darüber hinaus sind der Stil und die Farbgebung der Legende und der Absenden-Schaltfläche angepasst, um einen starken Kontrast zu gewährleisten. Dies ist möglicherweise nicht das Aussehen, das Sie in einer realen Webanwendung wünschen würden, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des Optionsfeldes darstellt.
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt
