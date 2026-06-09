---
title: '`<input type="radio">` HTML-Attributwert'
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{htmlelement("input")}}-Elemente des Typs **`radio`** werden in der Regel in **Radio-Gruppen** verwendet – Sammlungen von Optionsfeldern, die eine Gruppe verwandter Optionen beschreiben.

In einer gegebenen Gruppe kann jeweils nur ein Optionsfeld ausgewählt sein. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die bei Auswahl gefüllt oder hervorgehoben werden.

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

Sie werden als Optionsfelder bezeichnet, da sie aussehen und funktionieren wie die Drucktasten auf altmodischen Radios, wie das unten gezeigte.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> [!NOTE]
> [Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) ähneln Optionsfeldern, unterscheiden sich jedoch in einem wichtigen Punkt: Optionsfelder sind darauf ausgelegt, einen Wert aus einem Satz auszuwählen, während Kontrollkästchen es ermöglichen, einzelne Werte ein- und auszuschalten. Wo mehrere Steuerungen existieren, erlauben es Optionsfelder, dass eines aus ihnen allen ausgewählt wird, während Kontrollkästchen erlauben, dass mehrere Werte ausgewählt werden.

## Wert

Das `value`-Attribut ist eine Zeichenkette, die den Wert des Optionsfelds enthält. Der Wert wird den Nutzern von ihrem {{Glossary("user_agent", "User-Agent")}} nie direkt angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem der Optionsfelder in der Gruppe dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe definiert ist, hebt die Auswahl eines beliebigen Optionsfelds in dieser Gruppe automatisch die Auswahl des aktuell in derselben Gruppe ausgewählten Optionsfelds auf.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede einen einzigartigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Nutzer nach seiner bevorzugten Kontaktmethode fragen muss, können Sie drei Optionsfelder erstellen, die alle die `name`-Eigenschaft `contact` haben, aber eines hat den Wert `email`, eines den Wert `phone` und eines den Wert `mail`. Der Benutzer sieht nie den `value` oder den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem eindeutigen `value`, das dieses einzelne Optionsfeld innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine eindeutige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element-Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) verwendet wird, um die Labels mit den Optionsfeldern zu verbinden.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Optionsfeld abgeschickt wird, umfasst die Formulardaten einen Eintrag im Formular `contact=value`. Zum Beispiel, wenn der Nutzer auf den "Phone"-Optionsfeld klickt und das Formular abschickt, werden die Formulardaten die Zeile `contact=phone` enthalten.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die abgeschickte Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer auf die "Phone"-Option klickt und das Formular abschickt, würden die resultierenden Formulardaten `contact=on` sein, was nicht hilfreich ist. Also vergessen Sie nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Optionsfeld ausgewählt ist, wenn das Formular abgeschickt wird, ist die Radiogruppe überhaupt nicht in den abgeschickten Formulardaten enthalten, da es keinen Wert zu berichten gibt.

Es ist ziemlich ungewöhnlich, tatsächlich zu erlauben, dass das Formular abgeschickt wird, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt wird. Daher ist es normalerweise ratsam, dass eines standardmäßig im `checked`-Zustand ist. Siehe [Ein Optionsfeld standardmäßig auswählen](#ein_optionsfeld_standardmäßig_auswählen) unten.

Lassen Sie uns ein wenig Code zu unserem Beispiel hinzufügen, damit wir die von diesem Formular erzeugten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignis-Listener auf das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die "Submit"-Taste klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, wie es nie mehr als ein Ergebnis für die `contact`-Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio`-Inputs die folgenden Attribute.

- `checked`
  - : Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Anders als andere Browser, behält Firefox standardmäßig [den dynamischen Checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu kontrollieren.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s teilen; es erfüllt jedoch einen speziellen Zweck für Inputs des Typs `radio`: Wenn ein Formular abgeschickt wird, werden nur die Optionsfelder, die aktuell ausgewählt sind, an den Server gesendet und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht spezifiziert ist, ist es standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s teilen. Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe ausgewählt werden, obwohl es nicht dasjenige sein muss, auf das das Attribut angewendet ist.

## Verwendung von Radio-Inputs

Wir haben bereits die Grundlagen der Optionsfelder oben behandelt. Lassen Sie uns nun die anderen häufig verwendeten, optionsfeldbezogenen Funktionen und Techniken betrachten, die Sie kennen sollten.

### Ein Optionsfeld standardmäßig auswählen

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
> Wenn Sie das `checked`-Attribut bei mehr als einem Optionsfeld setzen, überschreiben spätere Instanzen frühere; das heißt, das zuletzt `checked`-Optionsfeld wird das ausgewählte sein. Dies liegt daran, dass immer nur ein Optionsfeld in einer Gruppe gleichzeitig ausgewählt sein kann und der User-Agent die anderen automatisch abwählt, sobald ein neues als ausgewählt markiert ist.

### Bereitstellung einer größeren Trefferfläche für Ihre Optionsfelder

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Optionsfeld auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, ebenso wie auf das Optionsfeld selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es den Nutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Jenseits der Zugänglichkeit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen ordnungsgemäß einzurichten.

## Validierung

Im Fall eines Optionsfelds mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut, oder einer gleichnamigen Gruppe von Optionsfeldern, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt werden, damit die Steuerung als gültig gilt. Wenn kein Optionsfeld ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück und der Browser wird den Nutzer auffordern, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas gründlichere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit etwas zusätzlichem Styling und besseren Semantiken durch die Verwendung von spezialisierten Elementen. Das HTML sieht so aus:

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

Das CSS, das in diesem Beispiel verwendet wird, ist etwas bedeutsamer:

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

Besonders bemerkenswert ist hier die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen erforderlich, um einige Browser zu unterstützen). Standardmäßig sind Optionsfelder (und [Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestaltet. Durch die Angabe von `appearance: none` können Sie die native Gestaltung vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierende Optionsfeldauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudoklasse verwendet wird, um die Stile für das Aussehen des Optionsfelds bei Auswahl zu spezifizieren.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht die gleiche Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf ein Optionsfeld ein schöner, glatter Ausblend-/Einblendeffekt auftritt, wenn die beiden Schaltflächen den Zustand wechseln. Zusätzlich sind der Stil und die Farbgebung der Legende und der Abschickschaltfläche so angepasst, dass sie einen starken Kontrast haben. Dies könnte nicht der Stil sein, den Sie in einer echten Webanwendung möchten, aber es zeigt definitiv die Möglichkeiten.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert des
        Optionsfelds repräsentiert.
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt.
