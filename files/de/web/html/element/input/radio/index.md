---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{htmlelement("input")}} Elemente vom Typ **`radio`** werden im Allgemeinen in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

Nur ein Optionsfeld in einer bestimmten Gruppe kann gleichzeitig ausgewählt werden. Optionsfelder werden normalerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben sind, wenn sie ausgewählt werden.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich wie die Druckknöpfe bei altmodischen Radios aussehen und funktionieren, wie das unten dargestellte Beispiel zeigt.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> **Note:** [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox) sind ähnlich wie Optionsfelder, haben jedoch einen wichtigen Unterschied: Optionsfelder sind für die Auswahl eines Wertes aus einer Reihe konzipiert, während Checkboxen es ermöglichen, einzelne Werte ein- oder auszuschalten. Wenn mehrere Steuerungen vorhanden sind, ermöglichen Optionsfelder die Auswahl eines Elements, während Checkboxen die Auswahl mehrerer Werte ermöglichen.

## Wert

Das `value` Attribut ist eine Zeichenkette, die den Wert des Optionsfelds enthält. Der Wert wird dem Benutzer durch seinen {{Glossary("user agent")}} niemals angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definieren einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Radiogruppe festgelegt ist, deaktiviert die Auswahl eines beliebigen Optionsfelds in dieser Gruppe automatisch jedes derzeit ausgewählte Optionsfeld in derselben Gruppe.

Sie können beliebig viele Radiogruppen auf einer Seite haben, solange jede einen eindeutigen `name` hat.

Wenn Ihr Formular beispielsweise den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Optionsfelder erstellen, jeweils mit der `name` Eigenschaft auf `contact` gesetzt, aber einem mit dem Wert `email`, einem mit dem Wert `phone` und einem mit dem Wert `mail`. Der Benutzer sieht den `value` oder den `name` niemals (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem eindeutigen `value`, das dieses einzelne Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben jeweils auch eine eindeutige {{domxref("Element.id", "id")}}, die von der {{HTMLElement("label")}} Elements [`for`](/de/docs/Web/HTML/Element/label#for) Attribut verwendet wird, um die Labels mit den Optionsfeldern zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das oben stehende Formular mit einem ausgewählten Optionsfeld gesendet wird, enthält die Formulardaten einen Eintrag in der Form `contact=value`. Wenn der Benutzer beispielsweise das Optionsfeld "Phone" anklickt und dann das Formular abschickt, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value` Attribut im HTML weglassen, weist die gesendeten Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario würde beim Klick auf die Option "Phone" und Absenden des Formulars die resultierenden Formulardaten `contact=on` lauten, was nicht hilfreich ist. Vergessen Sie daher nicht, Ihre `value` Attribute festzulegen!

> [!NOTE]
> Wenn beim Absenden des Formulars kein Optionsfeld ausgewählt ist, wird die Radiogruppe überhaupt nicht in die gesendeten Formulardaten aufgenommen, da kein Wert zum Berichtigen vorhanden ist.

Es ist ziemlich ungewöhnlich, das Formular ohne Auswahl eines Optionsfelds in einer Gruppe absenden zu lassen, daher ist es normalerweise ratsam, eines dem `checked` Zustand als Standard zu geben. Siehe [Auswahl eines Optionsfelds als Standard](#auswahl_eines_optionsfelds_als_standard) unten.

Fügen wir unserem Beispiel ein wenig Code hinzu, damit wir die Daten, die durch dieses Formular generiert werden, untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}} Block hinzuzufügen, in den die Formulardaten ausgegeben werden:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener für das {{domxref("HTMLFormElement/submit_event", "submit")}} Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf den "Submit" Button klickt:

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

Testen Sie dieses Beispiel und sehen Sie, dass nie mehr als ein Ergebnis für die `contact` Gruppe vorhanden ist.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}} Elemente gemeinsam haben, unterstützen `radio` Eingaben die folgenden Attribute.

- `checked`

  - : Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Anders als andere Browser speichert Firefox standardmäßig [den dynamischen checked Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value` Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; jedoch hat es eine besondere Funktion für Eingaben des Typs `radio`: Wenn ein Formular eingereicht wird, werden nur Optionsfelder, die derzeit aktiviert sind, an den Server gesendet, und der gemeldete Wert ist der Wert des `value` Attributs. Wenn der `value` nicht anders festgelegt ist, ist er standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required` Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn ein beliebiges Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required` Attribut hat, muss ein Optionsfeld in dieser Gruppe aktiviert sein, obwohl es nicht das sein muss, das das Attribut angewendet hat.

## Verwendung von Radio-Eingaben

Die Grundlagen der Optionsfelder haben wir bereits oben behandelt. Lassen Sie uns nun die anderen gängigen Funktionen und Techniken im Zusammenhang mit Optionsfeldern betrachten, die Sie möglicherweise kennen müssen.

### Auswahl eines Optionsfelds als Standard

Um eine Optionsfeld als Standard auszuwählen, fügen Sie das `checked` Attribut ein, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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
> Wenn Sie das `checked` Attribut auf mehr als einem Optionsfeld platzieren, überschreiben spätere Instanzen frühere; das heißt, das zuletzt als `checked` markierte Optionsfeld ist dasjenige, das ausgewählt wird. Dies liegt daran, dass in einer Gruppe immer nur ein Optionsfeld ausgewählt sein kann, und der Benutzeragent automatisch andere deaktiviert, jedes Mal, wenn ein neues als aktiviert markiert wird.

### Bereitstellung eines größeren Trefferbereichs für Ihre Optionsfelder

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}} Element klicken, ebenso wie auf das Optionsfeld selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Abgesehen von der Zugänglichkeit ist dies ein weiterer guter Grund, `<label>` Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Im Fall eines Optionsfelds mit dem [`required`](/de/docs/Web/HTML/Attributes/required) Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, in denen mindestens ein Element `required` gesetzt hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig betrachtet wird. Wenn kein Optionsfeld aktiviert ist, wird die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) Eigenschaft eines {{domxref("ValidityState")}} Objekts während der Validierung `true` zurückgeben, und der Browser wird den Benutzer auffordern, eine Option auszuwählen.

## Styling von Radio-Eingaben

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit einigen zusätzlichen Stilen und mit besserer Semantik durch die Verwendung spezialisierter Elemente. Das HTML sieht so aus:

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

Das CSS in diesem Beispiel ist etwas bedeutender:

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

Hier ist vor allem die Verwendung der {{cssxref("appearance")}} Eigenschaft bemerkenswert (mit Präfixen, die für die Unterstützung einiger Browser benötigt werden). Standardmäßig werden Optionsfelder (und [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestylt. Durch Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier haben wir ein {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einem {{cssxref("transition")}} verwendet, um eine schöne animierte Optionsauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}} Pseudo-Klasse verwendet wird, um die Stile für das Erscheinungsbild des Optionsfelds zu spezifizieren, wenn es ausgewählt ist.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}} Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Umsetzung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht die gleiche Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Aus-/Umschalt-Effekt erfolgt, während sich die beiden Schaltflächen ändern. Darüber hinaus sind der Stil und die Farbgebung der Legende und der Senden-Schaltfläche angepasst, um einen starken Kontrast zu haben. Dies ist möglicherweise kein Look, den Sie in einer realen Webanwendung wünschen, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert des
        Optionsfelds darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} und {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA Rolle</strong></td>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}} Schnittstelle, die es implementiert.
- {{domxref("RadioNodeList")}}: die Schnittstelle, die eine Liste von Optionsfeldern beschreibt.
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
