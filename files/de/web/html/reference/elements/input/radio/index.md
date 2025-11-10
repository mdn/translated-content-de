---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{htmlelement("input")}}-Elemente vom Typ **`radio`** werden in der Regel in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Gruppe verwandter Optionen beschreiben.

In einer gegebenen Gruppe kann immer nur ein Optionsfeld ausgewählt werden. Optionsfelder werden normalerweise als kleine Kreise angezeigt, die ausgefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden Radiobuttons genannt, weil sie wie die Druckknöpfe auf altmodischen Radios aussehen und funktionieren, wie das unten gezeigte Beispiel.

![Zeigt, wie Radiobuttons in früheren Zeiten aussahen.](old-radio.jpg)

> [!NOTE]
> [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) sind ähnlich wie Radiobuttons, jedoch mit einem wesentlichen Unterschied: Radiobuttons sind für die Auswahl eines Wertes aus einer Menge konzipiert, während Checkboxen es ermöglichen, einzelne Werte ein- und auszuschalten. Wo mehrere Steuerelemente existieren, erlaubt es Radiobuttons, dass eines aus allen ausgewählt wird, während es bei Checkboxen möglich ist, mehrere Werte auszuwählen.

## Wert

Das `value`-Attribut ist ein String, der den Wert des Radiobuttons enthält. Der Wert wird dem Benutzer von ihrem {{Glossary("user_agent", "User-Agent")}} nie angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welcher Radiobutton in einer Gruppe ausgewählt ist.

### Eine Radiogruppe definieren

Eine Radiogruppe wird definiert, indem jedem Radiobutton in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe eingerichtet ist, wird bei der Auswahl eines Radiobuttons in dieser Gruppe jedes aktuell ausgewählte Radiobutton in derselben Gruppe automatisch abgewählt.

Sie können auf einer Seite so viele Radiogruppen haben, wie Sie möchten, solange jede einen eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Benutzer nach seiner bevorzugten Kontaktmethode fragen muss, könnten Sie drei Radiobuttons erstellen, von denen jeder die `name`-Eigenschaft auf `contact` gesetzt hat, aber einer mit dem Wert `email`, einer mit dem Wert `phone` und einer mit dem Wert `mail`. Der Benutzer sieht weder den `value` noch den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

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

Hier sehen Sie die drei Radiobuttons, von denen jeder den `name` auf `contact` gesetzt hat und jeder einen eindeutigen `value` hat, der diesen individuellen Radiobutton innerhalb der Gruppe eindeutig identifiziert. Sie haben auch jeweils eine einzigartige [`id`](/de/docs/Web/API/Element/id), die vom {{HTMLElement("label")}}-Element verleihen [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut verwendet wird, um die Labels mit den Radiobuttons zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Radiobutton abgeschickt wird, enthält die Formulardaten ein Eintrag im Formular `contact=value`. Zum Beispiel, wenn der Benutzer auf den "Phone"-Radiobutton klickt und dann das Formular abschickt, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die eingereichte Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer die Option "Phone" ausgewählt und das Formular eingereicht hat, wären die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Vergessen Sie daher nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Radiobutton ausgewählt ist, wenn das Formular abgeschickt wird, wird die Radiogruppe überhaupt nicht in die abgeschickten Formulardaten aufgenommen, da es keinen Wert zum Melden gibt.

Es ist ziemlich ungewöhnlich, tatsächlich zu wollen, dass das Formular eingereicht wird, ohne dass einer der Radiobuttons in einer Gruppe ausgewählt ist, daher ist es normalerweise ratsam, einen auf den Zustand `checked` voreinzustellen. Siehe [Einen Radiobutton standardmäßig auswählen](#einen_radiobutton_standardmäßig_auswählen) unten.

Lassen Sie uns ein wenig Code zu unserem Beispiel hinzufügen, damit wir die von diesem Formular erzeugten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten darin auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Ereignislistener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis festzulegen, das gesendet wird, wenn der Benutzer die Schaltfläche "Submit" klickt:

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

Probieren Sie dieses Beispiel aus und sehen Sie, dass niemals mehr als ein Ergebnis für die `contact`-Gruppe vorhanden ist.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den gemeinschaftlichen Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `radio`-Inputs die folgenden Attribute.

- `checked`
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass dieser Radiobutton der standardmäßig ausgewählte in der Gruppe ist.

    Im Gegensatz zu anderen Browsern behält Firefox standardmäßig den [dynamischen checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements über Seitenladevorgänge hinweg bei. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`
  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}-Elemente teilen; es hat jedoch eine besondere Bedeutung für Inputs vom Typ `radio`: Wenn ein Formular abgeschickt wird, werden nur Radiobuttons, die derzeit ausgewählt sind, an den Server gesendet und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anderweitig angegeben ist, ist es standardmäßig der String `on`. Dies wird im Abschnitt [Wert](#wert) oben veranschaulicht.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}-Elemente teilen. Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut hat, muss ein Radiobutton in dieser Gruppe ausgewählt sein, obwohl es nicht derjenige mit dem angewandten Attribut sein muss.

## Verwendung von Radio-Inputs

Wir haben die Grundlagen von Radiobuttons oben bereits behandelt. Schauen wir uns nun die anderen üblichen, mit Radiobuttons verbundenen Funktionen und Techniken an, die Sie kennen sollten.

### Einen Radiobutton standardmäßig auswählen

Um einen Radiobutton standardmäßig ausgewählt zu machen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels dargestellt:

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

In diesem Fall ist der erste Radiobutton nun standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als einen Radiobutton setzen, überschreiben spätere Instanzen frühere; das heißt, der zuletzt `checked` Radiobutton wird ausgewählt. Dies liegt daran, dass in einer Gruppe immer nur ein Radiobutton ausgewählt werden kann, und der User-Agent automatisch andere deselektiert, jedes Mal wenn ein neuer auf `checked` gesetzt wird.

### Eine größere Trefferfläche für Ihre Radiobuttons bereitstellen

In den obigen Beispielen haben Sie vielleicht bemerkt, dass Sie einen Radiobutton auswählen können, indem Sie auf das zugehörige {{htmlelement("label")}}-Element klicken, sowie auf den Radiobutton selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es den Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinen Bildschirmen wie Smartphones.

Abgesehen von der Zugänglichkeit ist dies ein weiterer guter Grund, `<label>`-Elemente in Ihren Formularen korrekt einzurichten.

## Validierung

Im Fall eines Radiobuttons mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Radiobuttons, in der mindestens ein Mitglied `required` gesetzt hat, muss ein Radiobutton ausgewählt sein, damit die Kontrolle als gültig angesehen wird. Wenn kein Radiobutton ausgewählt ist, wird die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurückgeben, und der Browser wird den Benutzer auffordern, eine Option auszuwählen.

## Styling von Radio-Inputs

Das folgende Beispiel zeigt eine etwas umfassendere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit zusätzlichem Styling und besseren Semantiken, die durch die Verwendung spezialisierter Elemente etabliert wurden. Das HTML sieht so aus:

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

Der CSS-Teil in diesem Beispiel ist etwas umfangreicher:

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

Am bemerkenswertesten hierbei ist die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen, die benötigt werden, um einige Browser zu unterstützen). Standardmäßig sind Radiobuttons (und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Stilen des Betriebssystems für diese Steuerelemente gestylt. Indem Sie `appearance: none` angeben, können Sie das native Styling vollständig entfernen und eigene Stile dafür erstellen. Hier haben wir einen {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und eine {{cssxref("transition")}} verwendet, um eine schöne animierende Radio-Auswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}}-Pseudo-Klasse verwendet wird, um die Stile für das Erscheinungsbild des Radiobuttons bei Auswahl anzugeben.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht dieselbe Wirkung in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf einen Radiobutton ein schönes, sanftes Ein-/Ausblendeffekt zu sehen ist, während die beiden Buttons den Zustand wechseln. Darüber hinaus sind Stil und Farbgebung der Legende und der Abschick-Schaltfläche angepasst, um einen starken Kontrast zu haben. Dies ist vielleicht nicht unbedingt der Look, den Sie in einer echten Webanwendung wünschen, aber es zeigt definitiv die Möglichkeiten auf.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <code><a href="#checked">checked</a></code>, <code><a href="#value">value</a></code> und <code><a href="/de/docs/Web/HTML/Reference/Attributes/required">required</a></code>
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
