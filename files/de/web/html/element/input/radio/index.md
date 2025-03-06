---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden in der Regel in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

In einer bestimmten Gruppe kann immer nur ein Optionsfeld ausgewählt werden. Radiobuttons werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden als Radiobuttons bezeichnet, weil sie aussehen und funktionieren wie die Drucktasten an altmodischen Radios, wie das unten gezeigte.

![So sahen Radiobuttons früher aus.](old-radio.jpg)

> **Hinweis:** [Checkboxes](/de/docs/Web/HTML/Element/input/checkbox) ähneln Radiobuttons, haben jedoch einen wichtigen Unterschied: Radiobuttons sind dafür ausgelegt, einen Wert aus einem Set auszuwählen, während Checkboxes es ermöglichen, einzelne Werte an- und auszuschalten. Wenn mehrere Steuerungen vorhanden sind, kann bei Radiobuttons eine ausgewählt werden, während bei Checkboxes mehrere Werte ausgewählt werden können.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Radiobuttons enthält. Der Wert wird dem Benutzer nie von seinem {{Glossary("user_agent", "User-Agent")}} angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welcher Radiobutton in einer Gruppe ausgewählt ist.

### Definieren einer Radiogruppe

Eine Radiogruppe wird dadurch definiert, dass jedem Radiobutton in der Gruppe dasselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Radiogruppe erstellt ist, wird durch die Auswahl eines Radiobuttons in dieser Gruppe automatisch jeder andere derzeit ausgewählte Radiobutton in derselben Gruppe abgewählt.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen eindeutigen `name` hat.

Beispielsweise, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragt, könnten Sie drei Radiobuttons erstellen, jeder mit der `name`-Eigenschaft auf `contact` gesetzt, aber einer mit dem Wert `email`, einer mit dem Wert `phone` und einer mit dem Wert `mail`. Der Benutzer sieht den `value` oder den `name` nie (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Radiobuttons, jeder mit `name` auf `contact` gesetzt und jeder mit einem eindeutigen `value`, der diesen einzelnen Radiobutton innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine einzigartige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element vom [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut verwendet wird, um die Labels mit den Radiobuttons zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Radiobutton übermittelt wird, enthält die Formular-Daten einen Eintrag im Format `contact=value`. Zum Beispiel, wenn der Benutzer auf den "Phone"-Radiobutton klickt und dann das Formular absendet, würde die Formulardaten den Eintrag `contact=phone` beinhalten.

Wenn Sie das `value`-Attribut im HTML weglassen, wird im übermittelten Formulardaten der Wert `on` der Gruppe zugewiesen. In diesem Fall, wenn der Benutzer die Option "Phone" klickt und das Formular absendet, würden die resultierenden Formulardaten `contact=on` sein, was nicht hilfreich ist. Vergessen Sie daher nicht, Ihre `value`-Attribute einzustellen!

> [!NOTE]
> Wenn kein Radiobutton ausgewählt ist, wenn das Formular abgesendet wird, wird die Radiogruppe überhaupt nicht in den übermittelten Formulardaten enthalten, da es keinen Wert gibt, der gemeldet werden könnte.

Es ist ziemlich ungewöhnlich, dass tatsächlich gewünscht wird, dass das Formular ohne eines der Radiobuttons in einer Gruppe absenden wird, daher ist es normalerweise klug, einen als Standard auf den `checked`-Zustand zu setzen. Siehe [Auswählen eines Radiobuttons standardmäßig](#auswählen_eines_radiobuttons_standardmäßig) unten.

Fügen wir ein wenig Code zu unserem Beispiel hinzu, damit wir die vom Formular generierten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event Listener auf das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das ausgelöst wird, wenn der Benutzer auf die "Submit"-Taste klickt:

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

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein boolesches Attribut, das, wenn vorhanden, anzeigt, dass dieser Radiobutton standardmäßig in der Gruppe ausgewählt ist.

    Im Gegensatz zu anderen Browsern behält Firefox standardmäßig [den dynamischen überprüften Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es dient jedoch einem speziellen Zweck für Eingaben vom Typ `radio`: wenn ein Formular übermittelt wird, werden nur die derzeit ausgewählten Radiobuttons an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anders angegeben ist, ist er standardmäßig die Zeichenfolge `on`. Dies wird im Abschnitt [Wert](#wert) oben erläutert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn irgendein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut hat, muss ein Radiobutton in dieser Gruppe ausgewählt werden, obwohl es nicht derjenige mit dem angewendeten Attribut sein muss.

## Verwendung von Radio-Inputs

Wir haben die Grundlagen von Radiobuttons bereits oben behandelt. Lassen Sie uns nun die anderen häufigen Funktionen und Techniken im Zusammenhang mit Radiobuttons untersuchen, die Sie möglicherweise kennen müssen.

### Auswählen eines Radiobuttons standardmäßig

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
> Wenn Sie das `checked`-Attribut auf mehr als einem Radiobutton setzen, überschreiben spätere Instanzen frühere; das heißt, der zuletzt als `checked` markierte Radiobutton wird ausgewählt. Dies liegt daran, dass in einer Gruppe immer nur ein Radiobutton gleichzeitig ausgewählt werden kann, und der User-Agent automatisch andere abwählt, sobald ein neuer als `checked` markiert wird.

### Bereitstellen eines größeren Klickbereichs für Ihre Radiobuttons

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie einen Radiobutton durch Klicken auf das zugehörige {{htmlelement("label")}}-Element auswählen können, ebenso wie auf den Radiobutton selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es Benutzern erleichtert, die gewünschte Option anzuklicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

## Validierung

Im Fall eines Radiobuttons mit gesetztem [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut, oder einer gleichnamigen Gruppe von Radiobuttons, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Radiobutton ausgewählt werden, damit die Steuerung als gültig betrachtet werden kann. Wenn kein Radiobutton ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` während der Validierung zurück, und der Browser wird den Benutzer auffordern, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas umfassendere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit etwas zusätzlichem Styling und besseren Semantiken durch die Verwendung spezialisierter Elemente. Das HTML sieht folgendermaßen aus:

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

Das damit verbundene CSS in diesem Beispiel ist etwas umfangreicher:

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

Am bemerkenswertesten hier ist die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen zur Unterstützung einiger Browser). Standardmäßig werden Radiobuttons (und [Checkboxes](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Betriebssystem-Stilen für diese Steuerungen gestylt. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und eigene Styles dafür erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierte Auswahl von Radiobuttons zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudo-Klasse verwendet wird, um die Styles für das Aussehen des Radiobuttons im ausgewählten Zustand anzugeben.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl es in den meisten modernen Browsern unterstützt wird, variiert die Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht die gleiche Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf einen Radiobutton ein schöner, sanfter Überblenden-Effekt sichtbar ist, wenn sich die beiden Button-Zustände ändern. Darüber hinaus sind der Stil und die Farbgestaltung der Legende und der "Absenden"-Schaltfläche individuell angepasst, um einen starken Kontrast zu erreichen. Dies ist möglicherweise nicht der Look, den Sie in einer echten Web-Anwendung wünschen, aber es zeigt definitiv die Möglichkeiten auf.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des Radiobuttons repräsentiert.
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radiobuttons beschreibt.
