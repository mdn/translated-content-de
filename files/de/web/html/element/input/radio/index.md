---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`radio`** werden im Allgemeinen in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

In einer bestimmten Gruppe kann jeweils nur ein Optionsfeld ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben sind, wenn sie ausgewählt werden.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

Sie werden als Optionsfelder bezeichnet, weil sie ähnlich aussehen und funktionieren wie die Drucktasten auf altmodischen Radios, wie das unten gezeigte.

![Zeigt, wie Optionsfelder in früheren Zeiten aussahen.](old-radio.jpg)

> **Hinweis:** [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox) ähneln Optionsfeldern, es gibt jedoch einen wichtigen Unterschied: Optionsfelder sind für die Auswahl eines Wertes aus einer Menge konzipiert, während Checkboxen es ermöglichen, einzelne Werte ein- und auszuschalten. Wo mehrere Steuerungen existieren, erlaubt das Optionsfeld, dass eines davon ausgewählt wird, während Checkboxen die Auswahl mehrerer Werte ermöglichen.

## Wert

Das `value`-Attribut ist eine Zeichenkette, die den Wert des Optionsfeldes enthält. Der Wert wird dem Benutzer durch deren {{Glossary("user_agent", "User-Agent")}} nie angezeigt. Stattdessen wird es verwendet, um zu kennzeichnen, welches Optionsfeld in einer Gruppe ausgewählt ist.

### Definition einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Optionsfeld in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Element/input#name) zugewiesen wird. Sobald eine Radiogruppe festgelegt ist, hebt die Auswahl eines beliebigen Optionsfeldes in dieser Gruppe automatisch die Auswahl jedes derzeit ausgewählten Optionsfeldes in derselben Gruppe auf.

Sie können auf einer Seite beliebig viele Radiogruppen haben, solange jede einen eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragt, könnten Sie drei Optionsfelder erstellen, jedes mit der Eigenschaft `name` auf `contact` gesetzt, aber eines mit dem Wert `email`, eines mit dem Wert `phone` und eines mit dem Wert `mail`. Der Benutzer sieht weder den `value` noch den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um dies anzuzeigen).

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

Hier sehen Sie die drei Optionsfelder, jedes mit dem `name` auf `contact` gesetzt und jedes mit einem einzigartigen `value`, der dieses einzelne Optionsfeld innerhalb der Gruppe eindeutig kennzeichnet. Sie haben auch alle eine einzigartige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element über das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut verwendet wird, um die Labels mit den Optionsfeldern zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Optionsfeld übermittelt wird, enthält die Formular-Daten einen Eintrag im Formular `contact=value`. Zum Beispiel, wenn der Benutzer das Optionsfeld "Phone" auswählt und dann das Formular absendet, enthalten die Formular-Daten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die übermittelten Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer auf die Option "Phone" klickt und das Formular übermittelt, lauten die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute festzulegen!

> [!NOTE]
> Wenn kein Optionsfeld ausgewählt ist, wenn das Formular abgesendet wird, wird die Radiogruppe überhaupt nicht in die übermittelten Formulardaten aufgenommen, da kein Wert gemeldet werden kann.

Es ist ziemlich unüblich, tatsächlich zuzulassen, dass das Formular abgesendet wird, ohne dass eines der Optionsfelder in einer Gruppe ausgewählt ist, daher ist es gewöhnlich sinnvoll, eines standardmäßig im `checked`-Status zu haben. Siehe [Automatische Auswahl eines Optionsfeldes](#automatische_auswahl_eines_optionsfeldes) unten.

Lassen Sie uns unserem Beispiel etwas Code hinzufügen, damit wir die von diesem Formular generierten Daten genauer untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block zur Ausgabe der Formulardaten hinzuzufügen:

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

Anschließend fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener auf das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf die Schaltfläche "Submit" klickt:

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

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `radio`-Eingabefelder die folgenden Attribute.

- `checked`

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass dieses Optionsfeld das standardmäßig ausgewählte in der Gruppe ist.

    Anders als in anderen Browsern behält Firefox standardmäßig den [dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut wird von allen {{HTMLElement("input")}}s geteilt; es erfüllt jedoch einen speziellen Zweck für Eingabefelder des Typs `radio`: Wenn ein Formular gesendet wird, werden nur die derzeit markierten Optionsfelder an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn das `value` nicht anders angegeben ist, ist es standardmäßig die Zeichenkette `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Attributes/required)
  - : Das `required`-Attribut wird von den meisten {{HTMLElement("input")}}s geteilt. Wenn ein Optionsfeld in einer Gruppe von Optionsfeldern mit demselben Namen das `required`-Attribut hat, muss ein Optionsfeld in dieser Gruppe markiert sein, obwohl es nicht dasjenige mit dem angewendeten Attribut sein muss.

## Verwendung von Radio-Eingaben

Wir haben bereits die Grundlagen von Optionsfeldern oben behandelt. Schauen wir uns nun die anderen gängigen Funktionen und Techniken an, die Sie über Optionsfelder wissen müssen.

### Automatische Auswahl eines Optionsfeldes

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

In diesem Fall ist das erste Optionsfeld jetzt standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als ein Optionsfeld setzen, werden spätere Instanzen frühere überschreiben; das heißt, das letzte `checked`-Optionsfeld wird das ausgewählte sein. Dies liegt daran, dass in einer Gruppe immer nur ein Optionsfeld ausgewählt werden kann, und der User-Agent andere automatisch abwählt, sobald ein neues als ausgewählt markiert wird.

### Bereitstellen eines größeren Trefferbereichs für Ihre Optionsfelder

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie ein Optionsfeld durch Klicken auf das zugehörige {{htmlelement("label")}}-Element auswählen können, ebenso wie auf das Optionsfeld selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formularlabels, die es Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente ordnungsgemäß in Ihren Formularen einzurichten.

## Validierung

Im Fall eines Optionsfeldes mit dem gesetzten [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut oder einer Gruppe von Optionsfeldern mit demselben Namen, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Optionsfeld ausgewählt sein, damit die Steuerung als gültig angesehen wird. Wenn kein Optionsfeld markiert ist, wird die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurückgeben und der Browser wird den Benutzer bitten, eine Option auszuwählen.

## Styling von Radio-Eingaben

Das folgende Beispiel zeigt eine etwas umfassendere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit zusätzlichem Styling und besserer Semantik, die durch die Verwendung spezialisierter Elemente hergestellt wird. Das HTML sieht so aus:

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

Am bemerkenswertesten ist hier die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen, die zur Unterstützung einiger Browser erforderlich sind). Standardmäßig werden Optionsfelder (und [Checkboxen](/de/docs/Web/HTML/Element/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerungen gestylt. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und Ihre eigenen Stile dafür erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und eine {{cssxref("transition")}} verwendet, um eine schöne animierte Optionsfeldauswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudo-Klasse verwendet wird, um die Stile für das Erscheinungsbild des Optionsfeldes bei Auswahl zu spezifizieren.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht in allen Browsern die gleiche Wirkung, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass es beim Klicken auf ein Optionsfeld einen schönen, sanften Aus- und Einblendeffekt gibt, wenn die beiden Schaltflächen den Zustand wechseln. Darüber hinaus sind der Stil und die Färbung der Legende und der Absendeschaltfläche so angepasst, dass sie einen starken Kontrast aufweisen. Dies ist möglicherweise nicht das Erscheinungsbild, das Sie in einer echten Webanwendung haben möchten, aber es zeigt definitiv die Möglichkeiten auf.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert des
        Optionsfeldes darstellt.
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Optionsfeldern beschreibt.
