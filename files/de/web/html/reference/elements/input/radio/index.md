---
title: '`<input type="radio">` HTML-Attributwert'
short-title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden üblicherweise in **Radio-Gruppen** verwendet – Gruppen von Radio-Buttons, die zusammengehörige Optionen darstellen.

In einer Gruppe kann jeweils nur ein Radio-Button ausgewählt sein. Radio-Buttons werden normalerweise als kleine Kreise dargestellt, die bei Auswahl ausgefüllt oder hervorgehoben werden.

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

## Wert

Das Attribut `value` ist eine Zeichenfolge, die den Wert des Radio-Buttons enthält. Der {{Glossary("user_agent", "User Agent")}} zeigt diesen Wert den Nutzern nicht an. Stattdessen wird er verwendet, um festzustellen, welcher Radio-Button einer Gruppe ausgewählt ist.

### Eine Radio-Gruppe definieren

Eine Radio-Gruppe wird definiert, indem jeder Radio-Button der Gruppe denselben Wert für [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) erhält. Sobald eine Radio-Gruppe festgelegt ist, wird durch die Auswahl eines Radio-Buttons automatisch jeder zuvor ausgewählte Radio-Button derselben Gruppe abgewählt.

Sie können auf einer Seite beliebig viele Radio-Gruppen verwenden, solange jede einen eigenen, eindeutigen Wert für `name` hat.

Wenn Sie beispielsweise in einem Formular nach der bevorzugten Kontaktmethode fragen möchten, könnten Sie drei Radio-Buttons erstellen. Bei allen ist die Eigenschaft `name` auf `contact` gesetzt; die Werte lauten `email`, `phone` und `mail`. Die Nutzer sehen weder `value` noch `name`, sofern Sie keinen Code hinzufügen, der diese Werte ausdrücklich anzeigt.

Das resultierende HTML sieht so aus:

```html
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
</fieldset>
```

Hier sehen Sie drei Radio-Buttons, bei denen `name` jeweils auf `contact` gesetzt ist. Jeder hat einen eigenen `value`-Wert, der ihn innerhalb der Gruppe eindeutig identifiziert. Außerdem hat jeder eine eindeutige [`id`](/de/docs/Web/API/Element/id). Diese wird vom Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) des {{HTMLElement("label")}}-Elements verwendet, um die Beschriftung mit dem jeweiligen Radio-Button zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datendarstellung einer Radio-Gruppe

Wenn ein Formular mit den oben gezeigten Steuerelementen übermittelt wird und ein Radio-Button ausgewählt ist, enthalten die Formulardaten einen Eintrag in der Form `contact=value`. Wenn die Nutzer beispielsweise den Radio-Button „Phone“ auswählen und das Formular absenden, ist `contact=phone` in den übermittelten Formulardaten enthalten.

Wenn Sie das Attribut `value` im HTML weglassen, wird der Gruppe in den übermittelten Formulardaten der Wert `on` zugewiesen. Wenn die Nutzer in diesem Fall „Phone“ auswählen und das Formular absenden, lauten die resultierenden Formulardaten `contact=on` – das ist wenig hilfreich. Vergessen Sie daher nicht, Ihre `value`-Attribute festzulegen!

> [!NOTE]
> Wenn beim Absenden des Formulars kein Radio-Button ausgewählt ist, wird die Radio-Gruppe überhaupt nicht in die übermittelten Formulardaten aufgenommen, da kein Wert übermittelt werden kann.

In der Regel soll ein Formular nicht abgesendet werden können, ohne dass in einer Gruppe ein Radio-Button ausgewählt ist. Daher ist es meist sinnvoll, einen Radio-Button standardmäßig auf `checked` zu setzen. Weitere Informationen finden Sie unten unter [Einen Radio-Button standardmäßig auswählen](#einen_radio-button_standardmäßig_auswählen).

Ergänzen wir unser Beispiel um etwas Code, damit wir die von diesen Steuerelementen erzeugten Daten untersuchen können. Das HTML wird so angepasst, dass die Steuerelemente in ein {{HTMLElement("form")}} eingeschlossen werden. Außerdem fügen wir einen Absende-Button und einen {{HTMLElement("pre")}}-Block zur Ausgabe der Formulardaten hinzu:

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

Anschließend fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener für das Ereignis [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) einzurichten. Dieses Ereignis wird ausgelöst, wenn die Nutzer auf den Button „Submit“ klicken:

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

Probieren Sie das Beispiel aus: Für die Gruppe `contact` gibt es nie mehr als ein Ergebnis.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Neben den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente unterstützen Eingabefelder vom Typ `radio` die folgenden Attribute.

- `checked`
  - : Ein boolesches Attribut, das angibt, dass dieser Radio-Button standardmäßig innerhalb der Gruppe ausgewählt ist, wenn es vorhanden ist.

    Anders als andere Browser [speichert Firefox standardmäßig den dynamischen Auswahlzustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über das erneute Laden der Seite hinweg. Verwenden Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete), um dieses Verhalten zu steuern.

- `value`
  - : Das Attribut `value` ist allen {{HTMLElement("input")}}-Elementen gemeinsam. Für Eingabefelder vom Typ `radio` erfüllt es jedoch einen besonderen Zweck: Beim Absenden eines Formulars werden nur die derzeit ausgewählten Radio-Buttons an den Server übermittelt. Als Wert wird dabei der Wert des Attributs `value` übermittelt. Wenn `value` nicht angegeben ist, lautet der Standardwert `on`. Dies wird oben im Abschnitt [Wert](#wert) gezeigt.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das Attribut `required` wird von den meisten {{HTMLElement("input")}}-Elementen unterstützt. Wenn ein Radio-Button in einer Gruppe mit demselben `name`-Wert das Attribut `required` besitzt, muss ein Radio-Button dieser Gruppe ausgewählt sein. Es muss nicht derjenige sein, der das Attribut trägt.

## Radio-Buttons verwenden

Radio-Buttons sehen den Drucktasten älterer Radios ähnlich und funktionieren auf vergleichbare Weise, wie das folgende Bild zeigt.

![Zeigt, wie Radio-Buttons früher aussahen.](old-radio.jpg)

Radio-Buttons ähneln [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox), unterscheiden sich aber in einem wichtigen Punkt: Mit Radio-Buttons wird ein Wert aus einer Gruppe ausgewählt, während sich mit Checkboxen einzelne Werte unabhängig voneinander ein- und ausschalten lassen. Bei mehreren Steuerelementen erlauben Radio-Buttons nur eine Auswahl, Checkboxen dagegen mehrere.

Die Grundlagen von Radio-Buttons haben wir bereits behandelt. Sehen wir uns nun weitere häufig verwendete Funktionen und Techniken an, die für Sie nützlich sein könnten.

### Einen Radio-Button standardmäßig auswählen

Damit ein Radio-Button standardmäßig ausgewählt ist, fügen Sie das Attribut `checked` hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels:

```html
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
</fieldset>
```

{{EmbedLiveSample('Selecting_a_radio_button_by_default', 600, 130)}}

In diesem Fall ist der erste Radio-Button nun standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das Attribut `checked` mehreren Radio-Buttons zuweisen, überschreiben spätere Vorkommen die früheren. Der letzte Radio-Button mit `checked` ist also ausgewählt. Der Grund dafür ist, dass in einer Gruppe immer nur ein Radio-Button ausgewählt sein kann. Der User Agent wählt daher jedes Mal die anderen ab, wenn ein neuer als ausgewählt markiert wird.

### Die anklickbare Fläche Ihrer Radio-Buttons vergrößern

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie einen Radio-Button nicht nur durch Klicken auf den Button selbst auswählen können, sondern auch durch Klicken auf das zugehörige {{htmlelement("label")}}-Element. Diese nützliche Funktion von HTML-Formularbeschriftungen erleichtert es Nutzern, die gewünschte Option anzuklicken – insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Wenn ein Radio-Button das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) besitzt oder wenn mindestens ein Radio-Button einer Gruppe mit demselben `name`-Wert dieses Attribut besitzt, muss ein Radio-Button ausgewählt sein, damit das Steuerelement als gültig gilt. Ist kein Radio-Button ausgewählt, gibt die Eigenschaft [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts bei der Validierung `true` zurück, und der Browser fordert die Nutzer auf, eine Option auszuwählen.

## Radio-Buttons gestalten

Das folgende Beispiel ist eine etwas ausführlichere Version des Beispiels, das wir im Artikel verwendet haben. Es enthält zusätzliche Gestaltung und verwendet spezialisierte Elemente für eine bessere Semantik. Das HTML sieht so aus:

```html
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
</fieldset>
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

  border: 2px solid #999999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}
```

Besonders hervorzuheben ist die Verwendung der Eigenschaft {{cssxref("appearance")}} (mit Präfixen, die für die Unterstützung einiger Browser erforderlich sind). Standardmäßig werden Radio-Buttons (und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Darstellungsstilen des Betriebssystems gestaltet. Mit `appearance: none` können Sie diese native Darstellung vollständig entfernen und eigene Stile festlegen. Hier verwenden wir {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und {{cssxref("transition")}}, um eine ansprechend animierte Radio-Button-Auswahl zu gestalten. Beachten Sie auch, wie die Pseudoklasse {{cssxref(":checked")}} verwendet wird, um das Erscheinungsbild eines ausgewählten Radio-Buttons festzulegen.

> [!NOTE]
> Wenn Sie die Eigenschaft {{cssxref("appearance")}} verwenden möchten, sollten Sie sie sorgfältig testen. Zwar wird sie von den meisten modernen Browsern unterstützt, ihre Implementierung unterscheidet sich jedoch erheblich. In älteren Browsern hat selbst das Schlüsselwort `none` nicht überall dieselbe Wirkung; manche unterstützen es überhaupt nicht. In neueren Browsern sind die Unterschiede geringer.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Wenn Sie auf einen Radio-Button klicken, werden die beiden Auswahlzustände sanft überblendet. Auch Stil und Farbe der Legende sind angepasst, um einen starken Kontrast zu erzielen. Für eine echte Webanwendung würden Sie möglicherweise eine andere Gestaltung wählen, doch das Beispiel zeigt die Möglichkeiten deutlich.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert des Radio-Buttons
        darstellt.
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
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radio-Buttons beschreibt
