---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{htmlelement("input")}}-Elemente des Typs **`radio`** werden in der Regel in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

Es kann immer nur ein Optionsfeld in einer gegebenen Gruppe ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich aussehen und funktionieren wie die Druckknöpfe alter Radios, wie im folgenden Bild gezeigt.

![Zeigt, wie Optionsfelder früher aussahen.](old-radio.jpg)

> [!NOTE]
> [Kästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) ähneln Optionsfeldern, unterscheiden sich jedoch in einem wichtigen Punkt: Optionsfelder sind darauf ausgelegt, einen Wert aus einer Menge auszuwählen, während Kästchen es Ihnen ermöglichen, individuelle Werte ein- oder auszuschalten. Wo mehrere Steuerungen vorhanden sind, ermöglicht das Optionsfeld, dass nur eines ausgewählt werden kann, während Kästchen mehrere Werte ausgewählt lassen.

## Wert

Das Attribut `value` ist eine Zeichenfolge, die den Wert des Optionsfeldes enthält. Der Wert wird dem Benutzer von dessen {{Glossary("user_agent", "Benutzeragent")}} niemals angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jeder Radioknopf in der Gruppe den gleichen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) erhält. Sobald eine Radiogruppe festgelegt ist, wird durch das Auswählen eines beliebigen Radioknopfs in dieser Gruppe automatisch jeder bereits ausgewählte Radioknopf derselben Gruppe deselektiert.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen einzigartigen `name` besitzt.

Zum Beispiel, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Radioknöpfe erstellen, jeder mit der `name`-Eigenschaft auf `contact` gesetzt, aber einem mit dem Wert `email`, einem mit dem Wert `phone` und einem mit dem Wert `mail`. Der Benutzer sieht weder den `value` noch den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Radioknöpfe, jeder mit dem `name` auf `contact` gesetzt und jeder mit einem einzigartigen `value`, der dieses individuelle Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben auch alle eine einzigartige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element mit dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut verwendet wird, um die Labels mit den Optionsfeldern zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Optionsfeld abgeschickt wird, enthält die Formulardaten ein Eintrag im Formular `contact=value`. Beispielsweise, wenn der Benutzer auf das Optionsfeld "Phone" klickt und dann das Formular absendet, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das Attribut `value` im HTML weglassen, weist die übermittelte Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario würde das endgültige Formulardaten `contact=on` sein, wenn der Benutzer auf die Option "Phone" geklickt und das Formular abgesendet hat, was nicht hilfreich ist. Vergessen Sie daher nicht, Ihre `value`-Attribute festzulegen!

> [!NOTE]
> Wenn kein Optionsfeld ausgewählt ist, wenn das Formular abgesendet wird, ist die Radiogruppe überhaupt nicht in den übermittelten Formulardaten enthalten, da kein Wert zum Berichten vorhanden ist.

Es ist eher unüblich, tatsächlich zuzulassen, dass das Formular abgeschickt wird, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt ist. Es ist daher in der Regel sinnvoll, eines von ihnen standardmäßig als `checked` festzulegen. Siehe [Ein Optionsfeld standardmäßig auswählen](#ein_optionsfeld_standardmäßig_auswählen) unten.

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die Schaltfläche "Submit" klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, wie niemals mehr als ein Ergebnis für die `contact`-Gruppe vorhanden ist.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `radio`-Inputs die folgenden Attribute.

- `checked`
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass dieses Optionsfeld das standardmäßig ausgewählte innerhalb der Gruppe ist.

    Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig [den dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladungen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um dieses Feature zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s gemeinsam haben; es dient jedoch einem besonderen Zweck für Eingaben des Typs `radio`: Wenn ein Formular abgesendet wird, werden nur die aktuell ausgewählten Optionsfelder an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht explizit angegeben wird, ist es standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s gemeinsam haben. Wenn ein Optionsfeld in einer Gruppe von Optionsfeldern mit demselben Namen das `required`-Attribut besitzt, muss ein Optionsfeld in dieser Gruppe ausgewählt werden, obwohl es nicht dasjenige sein muss, auf das das Attribut angewendet wurde.

## Verwendung von radio inputs

Wir haben die Grundlagen der Optionsfelder bereits oben behandelt. Lassen Sie uns nun auf die anderen häufigen, optionsfeldbezogenen Funktionen und Techniken eingehen, die Sie möglicherweise kennen müssen.

### Ein Optionsfeld standardmäßig auswählen

Um ein Optionsfeld standardmäßig ausgewählt zu haben, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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
> Wenn Sie das `checked`-Attribut auf mehr als einem Optionsfeld setzen, überschreiben spätere Instanzen frühere; das heißt, das letzte `checked`-Optionsfeld wird dasjenige sein, das ausgewählt ist. Dies liegt daran, dass in einer Gruppe immer nur ein Optionsfeld ausgewählt werden kann, und der Benutzeragent die anderen automatisch deselektiert, jedes Mal, wenn ein neues als überprüft markiert wird.

### Einen größeren Bereich für Ihre Optionsfelder bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Optionsfeld durch Klicken auf sein zugehöriges {{htmlelement("label")}}-Element sowie auf das Optionsfeld selbst auswählen können. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere bei Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, um `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Im Falle eines Optionsfeldes mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, in der mindestens ein Mitglied `required` hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig betrachtet wird. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## Styling von radio inputs

Das folgende Beispiel zeigt eine etwas ausgereiftere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit zusätzlichem Styling und einer besseren Semantik, die durch die Verwendung spezialisierter Elemente etabliert wird. Der HTML-Code sieht folgendermaßen aus:

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

Besonders bemerkenswert hier ist die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen, die zur Unterstützung einiger Browser benötigt werden). Standardmäßig werden Optionsfelder (und [Checkboxes](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestylt. Indem Sie `appearance: none` angeben, können Sie die native Stilgebung vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier haben wir einen {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einen {{cssxref("transition")}} verwendet, um eine schöne animierte Auswahl des Radios zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Aussehen des Optionsfelds, wenn es ausgewählt ist, zu spezifizieren.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat sogar das Schlüsselwort `none` nicht die gleiche Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Ausblend-/Einblendeffekt auftritt, während sich die beiden Schaltflächenstatus ändern. Außerdem sind der Stil und die Farbgebung der Legende und der Absende-Schaltfläche so angepasst, dass sie einen starken Kontrast aufweisen. Dies ist möglicherweise kein Look, den Sie in einer echten Webanwendung wünschen, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert des
        Optionsfeldes darstellt.
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
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): Die Schnittstelle beschreibt eine Liste von Optionsfeldern.
