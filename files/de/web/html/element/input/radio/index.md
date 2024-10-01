---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{htmlelement("input")}} Elemente des Typs **`radio`** werden normalerweise in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Gruppe verwandter Optionen beschreiben.

Innerhalb einer bestimmten Gruppe kann nur ein Optionsfeld gleichzeitig ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich aussehen und funktionieren wie die Druckknöpfe an altmodischen Radios, wie dem unten gezeigten.

![Zeigt, wie Optionsfelder früher aussahen.](old-radio.jpg)

> **Hinweis:** [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox) sind den Optionsfeldern ähnlich, mit einem wichtigen Unterschied: Optionsfelder sind dafür konzipiert, einen Wert aus einer Gruppe auszuwählen, während mit Checkboxen einzelne Werte ein- und ausgeschaltet werden können. Wo mehrere Steuerungen existieren, ermöglicht eine Gruppe von Optionsfeldern die Auswahl eines einzigen Wertes, während mit Checkboxen mehrere Werte ausgewählt werden können.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Optionsfeldes enthält. Der Wert wird dem Nutzer von deren {{Glossary("user_agent", "User-Agent")}} niemals angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Eine Radiogruppe definieren

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe das gleiche [`name`](/de/docs/Web/HTML/Element/input#name) gegeben wird. Sobald eine Radiogruppe festgelegt ist, hebt das Auswählen eines beliebigen Optionsfeldes in dieser Gruppe automatisch die Auswahl eines aktuell ausgewählten Optionsfeldes in derselben Gruppe auf.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Nutzer nach der bevorzugten Kontaktmethode fragen muss, könnten Sie drei Optionsfelder erstellen, jedes mit der `name`-Eigenschaft auf `contact` gesetzt, aber eines mit dem Wert `email`, eines mit dem Wert `phone` und eines mit dem Wert `mail`. Der Nutzer sieht den `value` oder den `name` nie (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

Das resultierende HTML sieht wie folgt aus:

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem eindeutigen `value`, das dieses individuelle Optionsfeld innerhalb der Gruppe identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}} Element über das [`for`](/de/docs/Web/HTML/Element/label#for) Attribut verwendet wird, um die Labels mit den Optionsfeldern zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Optionsfeld übermittelt wird, enthält die Formulardaten ein Eintrag im Format `contact=value`. Beispielsweise, wenn der Nutzer auf das "Phone"-Optionsfeld klickt und das Formular übermittelt, würden die Formulardaten die Zeile `contact=phone` enthalten.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die übermittelten Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Nutzer die "Phone"-Option anklickt und das Formular übermittelt, würden die resultierenden Formulardaten `contact=on` lauten, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value` Attribute zu setzen!

> [!NOTE]
> Wenn beim Absenden des Formulars kein Optionsfeld ausgewählt ist, wird die Radiogruppe überhaupt nicht in die übermittelten Formulardaten aufgenommen, da es keinen zu meldenden Wert gibt.

Es ist ziemlich unüblich, tatsächlich zu wünschen, dass das Formular eingereicht wird, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt ist. Daher ist es normalerweise klug, eines standardmäßig auf den `checked` Zustand zu setzen. Siehe [Ein Optionsfeld standardmäßig auswählen](#ein_optionsfeld_standardmäßig_auswählen) unten.

Fügen wir ein wenig Code zu unserem Beispiel hinzu, damit wir die von diesem Formular generierten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}} Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener auf das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis zu registrieren, welches gesendet wird, wenn der Nutzer auf den "Submit"-Button klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, dass es nie mehr als ein Ergebnis für die `contact` Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Neben den allgemeinen Attributen, die alle {{HTMLElement("input")}} Elemente teilen, unterstützen `radio` Eingaben die folgenden Attribute.

- `checked`

  - : Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig [den dynamischen Checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladezyklen hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, welches alle {{HTMLElement("input")}}s teilen; jedoch dient es einem besonderen Zweck für Eingaben des Typs `radio`: Wenn ein Formular übermittelt wird, werden nur diejenigen Optionsfelder, die gerade aktiviert sind, an den Server gesendet, und der gemeldete Wert ist der des `value` Attributs. Wenn `value` nicht anderweitig spezifiziert ist, ist es standardmäßig der String `on`, wie in der Section [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required`-Attribut wird von den meisten {{HTMLElement("input")}}s geteilt. Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe aktiviert sein, obwohl es nicht das sein muss, auf das das Attribut angewendet wurde.

## Verwenden von Radioeingaben

Wir haben die Grundlagen der Optionsfelder bereits oben behandelt. Lassen Sie uns nun die anderen häufigen Funktionen und Techniken im Zusammenhang mit Optionsfeldern betrachten, die Sie möglicherweise kennen sollten.

### Ein Optionsfeld standardmäßig auswählen

Um ein Optionsfeld standardmäßig auszuwählen, fügen Sie das `checked` Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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
> Wenn Sie das `checked` Attribut auf mehr als ein Optionsfeld setzen, werden spätere Instanzen frühere überschreiben; das bedeutet, das letzte `gechecked`te Optionsfeld wird dasjenige sein, das ausgewählt ist. Dies liegt daran, dass nur ein Optionsfeld in einer Gruppe jemals gleichzeitig ausgewählt werden kann, und der User-Agent automatisch andere abwählt, sobald ein neues als ausgewählt markiert wird.

### Eine größere Klickfläche für Ihre Optionsfelder bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}} Element klicken, ebenso wie auf das Optionsfeld selbst. Dies ist eine sehr nützliche Funktion von HTML-Formular-Labels, die es Nutzern erleichtert, die gewünschte Option anzuklicken, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, um `<label>` Elemente in Ihren Formularen richtig einzurichten.

## Validierung

Bei einem Optionsfeld mit dem gesetzten [`required`](/de/docs/Web/HTML/Attributes/required) Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig betrachtet wird. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState) Objekts während der Validierung `true` zurück, und der Browser wird den Benutzer bitten, eine Option auszuwählen.

## Styling von Radioeingaben

Das folgende Beispiel zeigt eine etwas gründlichere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit zusätzlichem Styling und mit besseren Semantiken, die durch die Verwendung spezieller Elemente hergestellt wurden. Das HTML sieht so aus:

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

Am bemerkenswertesten hier ist der Einsatz der {{cssxref("appearance")}} Eigenschaft (mit Präfixen, die zur Unterstützung einiger Browser benötigt werden). Standardmäßig werden Optionsfelder (und [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Styles des Betriebssystems für diese Steuerungen versehen. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und Ihre eigenen Styles für sie erstellen. Hier haben wir einen {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einem {{cssxref("transition")}} verwendet, um eine schöne animierende Optionsauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}} Pseudo-Klasse verwendet wird, um die Styles für das Erscheinungsbild des Optionsfeldes festzulegen, wenn es ausgewählt ist.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}} Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert die Implementierung erheblich. In älteren Browsern hat sogar das Schlüsselwort `none` nicht denselben Effekt in verschiedenen Browsern und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Ein-/Ausblendeffekt auftritt, während die beiden Buttons den Zustand ändern. Darüber hinaus sind der Stil und die Färbung der Legende und des Absende-Buttons angepasst, um einen starken Kontrast zu haben. Dies ist möglicherweise nicht der Look, den Sie in einer echten Webanwendung wünschen, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert des
        Optionsfeldes repräsentiert.
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
      <td><strong>IDL Attribute</strong></td>
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
      <td><strong>Impliziertes ARIA Role</strong></td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
