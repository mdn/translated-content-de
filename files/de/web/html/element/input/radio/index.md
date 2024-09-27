---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`radio`** werden normalerweise in **Radiogruppen** verwendet – Zusammenstellungen von Optionsfeldern, die eine Gruppe verwandter Optionen beschreiben.

Es kann zur gleichen Zeit nur ein Optionsfeld in einer bestimmten Gruppe ausgewählt sein. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die ausgefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich wie Drucktasten auf altmodischen Radios aussehen und funktionieren, wie das unten gezeigte.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> **Hinweis:** [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox) sind ähnlich wie Optionsfelder, haben jedoch einen wichtigen Unterschied: Optionsfelder sind dafür ausgelegt, einen Wert aus einer Menge auszuwählen, während Checkboxen es erlauben, einzelne Werte an- und auszuschalten. Wo mehrere Steuerungen existieren, erlauben Optionsfelder die Auswahl eines Wertes aus allen, während Checkboxen die Auswahl mehrerer Werte ermöglichen.

## Value

Das `value`-Attribut ist ein String, der den Wert des Optionsfeldes enthält. Dieser Wert wird dem Benutzer durch seinen [User-Agent](/de/docs/Glossary/user_agent) nie angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definieren einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe dasselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Radiogruppe erstellt ist, wird beim Auswählen eines beliebigen Optionsfelds in dieser Gruppe jedes aktuell ausgewählte Optionsfeld in derselben Gruppe automatisch abgewählt.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede eine einzigartige `name`-Eigenschaft hat.

Wenn Ihr Formular beispielsweise den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Optionsfelder erstellen, die jeweils die `name`-Eigenschaft auf `contact` setzen, jedoch einen mit dem Wert `email`, einen mit dem Wert `phone` und einen mit dem Wert `mail`. Der Benutzer sieht weder den `value`- noch den `name`-Wert (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem einzigartigen `value`, das dieses einzelne Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element-Attribut [`for`](/de/docs/Web/HTML/Element/label#for) verwendet wird, um die Labels mit den Optionsfeldern zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das oben gezeigte Formular mit einem ausgewählten Optionsfeld abgeschickt wird, enthält die Formular-Datenübermittlung einen Eintrag in der Form `contact=value`. Wenn der Benutzer beispielsweise auf das Optionsfeld "Phone" klickt und dann das Formular übermittelt, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn das `value`-Attribut im HTML weggelassen wird, weist das übermittelte Formulardaten den Wert `on` der Gruppe zu. In diesem Fall, wenn der Benutzer die Option "Phone" anklickt und das Formular übermittelt, wären die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Optionsfeld ausgewählt ist, wenn das Formular übermittelt wird, wird die Radiogruppe überhaupt nicht in den übermittelten Formulardaten enthalten, da kein Wert zu melden ist.

Es ist ziemlich unüblich, tatsächlich zu erlauben, dass das Formular ohne ausgewähltes Optionsfeld in einer Gruppe übermittelt wird. Daher ist es normalerweise sinnvoll, eines im `checked`-Zustand als Standard festzulegen. Siehe unten [Auswählen eines Optionsfeldes als Standard](#auswählen_eines_optionsfeldes_als_standard).

Lassen Sie uns ein wenig Code zu unserem Beispiel hinzufügen, damit wir die Daten, die von diesem Formular generiert werden, untersuchen können. Der HTML-Code wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis zu setzen, das gesendet wird, wenn der Benutzer auf die Schaltfläche "Submit" klickt:

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

  - : Ein boolesches Attribut, das, falls vorhanden, anzeigt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Im Gegensatz zu anderen Browsern bewahrt Firefox standardmäßig den dynamischen `checked`-Zustand eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu kontrollieren.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es erfüllt jedoch einen besonderen Zweck für Eingaben des Typs `radio`: Wenn ein Formular abgesendet wird, werden nur aktuell ausgewählte Optionsfelder an den Server gesendet, und der gemeldete Wert ist der Wert des `value`-Attributs. Ist das `value`-Attribut nicht anders festgelegt, lautet es standardmäßig `on`. Dies wird im Abschnitt [Value](#value) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn ein beliebiges Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe ausgewählt werden, obwohl es nicht das sein muss, dem das Attribut zugewiesen wurde.

## Verwendung von radio-Eingaben

Wir haben oben bereits die Grundlagen von Optionsfeldern behandelt. Schauen wir uns nun die anderen häufigen Funktionen und Techniken im Zusammenhang mit Optionsfeldern an, die Sie kennen sollten.

### Auswählen eines Optionsfeldes als Standard

Um ein Optionsfeld standardmäßig auszuwählen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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
> Wenn Sie das `checked`-Attribut für mehr als ein Optionsfeld setzen, überschreiben spätere Instanzen die früheren; das heißt, das letzte `checked`-Optionsfeld wird das sein, das ausgewählt ist. Dies liegt daran, dass immer nur ein Optionsfeld in einer Gruppe auf einmal ausgewählt werden kann, und der Benutzer-Agent automatisch andere abwählt, jedes Mal, wenn ein neues als geprüft markiert wird.

### Bereitstellung eines größeren Trefferbereichs für Ihre Optionsfelder

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, sowie auf das Optionsfeld selbst. Dies ist ein wirklich nützliches Merkmal von HTML-Formular-Labels, das es Benutzern erleichtert, die gewünschte Option auszuwählen, besonders auf Geräten mit kleinen Bildschirmen wie Smartphones.

Über die Barrierefreiheit hinaus ist dies ein weiterer guter Grund, Eingabeelemente in Ihren Formularen ordnungsgemäß einzurichten.

## Validierung

Im Fall eines Optionsfeldes mit gesetztem [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Optionsfeldern, bei der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig betrachtet wird. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück, und der Browser fordert den Benutzer auf, eine Option auszuwählen.

## Styling von radio-Eingaben

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir den ganzen Artikel hinweg gesehen haben, mit zusätzlichem Styling und besserer Semantik durch die Verwendung spezialisierter HTML-Elemente. Der HTML-Code sieht wie folgt aus:

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

Besonders bemerkenswert hier ist die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen, die erforderlich sind, um einige Browser zu unterstützen). Standardmäßig sind Optionsfelder (und [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestaltet. Indem Sie `appearance: none` angeben, können Sie die native Gestaltung vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier verwenden wir einen {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}}, um eine schöne animierende Optionsfeldauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Erscheinungsbild des Optionsfeldes beim Auswählen zu spezifizieren.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie diese sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht den gleichen Effekt in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, sanfter Ausblende-/Einblendeffekt auftritt, während sich die beiden Schaltflächen ändern. Zusätzlich sind der Stil und die Färbung der Legende und der Absenden-Schaltfläche so angepasst, dass sie starken Kontrast haben. Dies ist möglicherweise nicht ein Look, den Sie in einer echten Webanwendung wünschen würden, aber es zeigt definitiv die Möglichkeiten auf.

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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
