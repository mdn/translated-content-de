---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`radio`** werden im Allgemeinen in **Radiogruppen** verwendet – Sammlungen von Optionsfeldern, die eine Reihe verwandter Optionen beschreiben.

In einer gegebenen Gruppe kann nur ein Optionsfeld gleichzeitig ausgewählt werden. Optionsfelder werden typischerweise als kleine Kreise dargestellt, die gefüllt oder hervorgehoben werden, wenn sie ausgewählt sind.

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

Sie werden Radiobuttons genannt, weil sie ähnlich funktionieren wie die Drucktasten alter Radios, wie das unten gezeigte.

![Zeigt, wie Radioknöpfe früher aussahen.](old-radio.jpg)

> [!NOTE] > [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox) sind ähnlich wie Radioknöpfe, aber mit einem wichtigen Unterschied: Radioknöpfe sind dafür ausgelegt, einen Wert aus einer Menge auszuwählen, während Checkboxen es erlauben, einzelne Werte ein- und auszuschalten. Wo mehrere Steuerungen existieren, erlauben Radioknöpfe, einen aus allen auszuwählen, während Checkboxen mehrere Werte gleichzeitig erlauben.

## Wert

Das `value`-Attribut ist ein Zeichenfolgenwert, der den Wert eines Radioknopfes enthält. Der Wert wird dem Benutzer nie durch ihr {{Glossary("user_agent", "User-Agent")}} angezeigt. Stattdessen wird er verwendet, um zu identifizieren, welcher Radioknopf in einer Gruppe ausgewählt ist.

### Definieren einer Radiogruppe

Eine Radiogruppe wird definiert, indem jedem Radioknopf in der Gruppe derselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zugewiesen wird. Sobald eine Radiogruppe eingerichtet ist, wird durch das Auswählen eines Radioknopfes in dieser Gruppe automatisch jeder aktuell ausgewählte Radioknopf in derselben Gruppe deselektiert.

Sie können so viele Radiogruppen auf einer Seite haben, wie Sie möchten, solange jede ihren eigenen eindeutigen `name` hat.

Zum Beispiel, wenn Ihr Formular den Benutzer nach ihrer bevorzugten Kontaktmethode fragen muss, könnten Sie drei Radioknöpfe erstellen, jeder mit der `name`-Eigenschaft auf `contact` gesetzt, aber einer mit dem Wert `email`, einer mit dem Wert `phone` und einer mit dem Wert `mail`. Der Benutzer sieht weder den `value` noch den `name` (es sei denn, Sie fügen ausdrücklich Code hinzu, um ihn anzuzeigen).

Das resultierende HTML sieht folgendermaßen aus:

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

Hier sehen Sie die drei Radioknöpfe, jeder mit dem `name` auf `contact` gesetzt und jeder mit einem eindeutigen `value`, der diesen individuellen Radioknopf innerhalb der Gruppe eindeutig identifiziert. Sie haben auch alle ein eindeutiges [`id`](/de/docs/Web/API/Element/id), das vom {{HTMLElement("label")}}-Element verwendet wird, um die Labels mit den Radioknöpfen über das [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut zu verknüpfen.

Sie können dieses Beispiel hier ausprobieren:

{{EmbedLiveSample('Defining_a_radio_group', 600, 130)}}

### Datenrepräsentation einer Radiogruppe

Wenn das obige Formular mit einem ausgewählten Radioknopf abgesendet wird, enthält die Formulardaten einen Eintrag im Form `contact=value`. Beispielsweise, wenn der Benutzer auf den Radioknopf "Phone" klickt und das Formular absendet, enthalten die Formulardaten die Zeile `contact=phone`.

Wenn Sie das `value`-Attribut im HTML weglassen, weist die übermittelte Formulardaten der Gruppe den Wert `on` zu. In diesem Szenario, wenn der Benutzer die Option "Phone" anklickt und das Formular absendet, wären die resultierenden Formulardaten `contact=on`, was nicht hilfreich ist. Vergessen Sie also nicht, Ihre `value`-Attribute zu setzen!

> [!NOTE]
> Wenn kein Radioknopf ausgewählt ist, wenn das Formular gesendet wird, wird die Radiogruppe überhaupt nicht in die gesendeten Formulardaten aufgenommen, da es keinen zu berichtenden Wert gibt.

Es ist ziemlich ungewöhnlich, das Formular tatsächlich ohne ein ausgewähltes Radioknopf abzusenden, daher ist es im Allgemeinen ratsam, ein Standardauswahl auf den `checked`-Zustand zu setzen. Sehen Sie [Auswahl eines Radioknopfes als Standard](#auswahl_eines_radioknopfes_als_standard) weiter unten.

Lassen Sie uns ein wenig Code zu unserem Beispiel hinzufügen, damit wir die von diesem Formular generierten Daten untersuchen können. Das HTML wird überarbeitet, um einen {{HTMLElement("pre")}}-Block hinzuzufügen, um die Formulardaten auszugeben:

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

Dann fügen wir etwas [JavaScript](/de/docs/Web/JavaScript) hinzu, um einen Event-Listener für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis einzurichten, das gesendet wird, wenn der Benutzer auf den "Submit"-Button klickt:

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

Versuchen Sie dieses Beispiel aus und sehen Sie, wie es nie mehr als ein Ergebnis für die `contact`-Gruppe gibt.

{{EmbedLiveSample("Data_representation_of_a_radio_group", 600, 130)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam nutzen, unterstützen `radio`-Eingaben die folgenden Attribute.

- `checked`

  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass dieser Radioknopf der standardmäßig ausgewählte in der Gruppe ist.

    Im Gegensatz zu anderen Browsern speichert Firefox standardmäßig [den dynamischen Checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` über Seitenladevorgänge hinweg. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut, um diese Funktion zu steuern.

- `value`

  - : Das `value`-Attribut ist eines, das alle {{HTMLElement("input")}}s gemeinsam haben; es hat jedoch einen speziellen Zweck für Eingaben des Typs `radio`: Wenn ein Formular gesendet wird, werden nur Radioknöpfe, die derzeit ausgewählt sind, an den Server übermittelt, und der gemeldete Wert ist der Wert des `value`-Attributs. Wenn der `value` nicht anders angegeben ist, ist dies standardmäßig die Zeichenfolge `on`. Dies wird im Abschnitt [Wert](#wert) oben demonstriert.

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required)
  - : Das `required`-Attribut ist eines, das die meisten {{HTMLElement("input")}}s gemeinsam haben. Wenn ein Radioknopf in einer gleichnamigen Gruppe von Radioknöpfen das `required`-Attribut hat, muss ein Radioknopf in dieser Gruppe ausgewählt werden, obwohl es nicht der sein muss, auf den das Attribut angewendet wurde.

## Verwendung von Radio-Eingaben

Wir haben bereits die Grundlagen der Radioknöpfe oben behandelt. Lassen Sie uns nun die anderen gängigen Funktionen und Techniken im Zusammenhang mit Radioknöpfen betrachten, die Sie kennen müssen.

### Auswahl eines Radioknopfes als Standard

Um einen Radioknopf standardmäßig auszuwählen, fügen Sie das `checked`-Attribut hinzu, wie in dieser überarbeiteten Version des vorherigen Beispiels gezeigt:

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

In diesem Fall ist der erste Radioknopf nun standardmäßig ausgewählt.

> [!NOTE]
> Wenn Sie das `checked`-Attribut auf mehr als einen Radioknopf legen, überschreiben spätere Instanzen frühere; das bedeutet, dass der zuletzt mit `checked` markierte Radioknopf derjenige ist, der ausgewählt wird. Dies liegt daran, dass nur ein Radioknopf in einer Gruppe jemals gleichzeitig ausgewählt werden kann, und der User-Agent wählt automatisch andere ab, jedes Mal, wenn ein neuer als ausgewählt markiert wird.

### Bereitstellen eines größeren Auswahlbereichs für Ihre Radioknöpfe

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass Sie einen Radioknopf auswählen können, indem Sie auf sein zugehöriges {{htmlelement("label")}}-Element klicken, sowie auf den Radioknopf selbst. Dies ist eine wirklich nützliche Funktion von HTML-Formular-Labels, die es Benutzern erleichtert, die gewünschte Option auszuwählen, insbesondere auf Geräten mit kleinem Bildschirm wie Smartphones.

Neben der Barrierefreiheit ist dies ein weiterer guter Grund, auf Ihren Formularen ordnungsgemäße `<label>`-Elemente einzurichten.

## Validierung

Im Falle eines Radioknopfes mit dem [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut oder einer gleichnamigen Gruppe von Radioknöpfen, von denen mindestens einer `required` gesetzt hat, muss ein Radioknopf ausgewählt sein, damit die Steuerung als gültig angesehen wird. Wenn kein Radioknopf ausgewählt ist, gibt die [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts während der Validierung `true` zurück, und der Browser wird den Benutzer bitten, eine Option auszuwählen.

## Styling von Radio-Eingaben

Das folgende Beispiel zeigt eine etwas ausführlichere Version des Beispiels, das wir im gesamten Artikel gesehen haben, mit zusätzlichem Styling und mit besseren semantischen Elementen durch die Verwendung spezialisierter Elemente. Das HTML sieht folgendermaßen aus:

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

Besonders bemerkenswert ist hier die Verwendung der {{cssxref("appearance")}}-Eigenschaft (mit Präfixen, die für einige Browser benötigt werden). Standardmäßig sind Radioknöpfe (und [Checkboxen](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) mit den nativen Styles des Betriebssystems für diese Steuerungen gestylt. Durch die Angabe von `appearance: none` können Sie das native Styling vollständig entfernen und Ihre eigenen Stile für sie erstellen. Hier haben wir eine {{cssxref("border")}} zusammen mit {{cssxref("border-radius")}} und einer {{cssxref("transition")}} verwendet, um eine schöne animierte Radio-Auswahl zu erstellen. Beachten Sie auch, wie die {{cssxref(":checked")}} Pseudoklasse verwendet wird, um die Stile für das Erscheinungsbild des Radioknopfes im ausgewählten Zustand zu spezifizieren.

> [!NOTE]
> Wenn Sie die {{cssxref("appearance")}}-Eigenschaft verwenden möchten, sollten Sie sie sehr sorgfältig testen. Obwohl sie in den meisten modernen Browsern unterstützt wird, variiert ihre Implementierung stark. In älteren Browsern hat selbst das Schlüsselwort `none` nicht den gleichen Effekt in verschiedenen Browsern, und einige unterstützen es überhaupt nicht. Die Unterschiede sind in den neuesten Browsern kleiner.

{{EmbedLiveSample('Styling_radio_inputs', 600, 120)}}

Beachten Sie, dass beim Klicken auf einen Radioknopf ein schöner, glatter Ein-/Ausblendeffekt zu sehen ist, wenn die beiden Knöpfe den Zustand wechseln. Darüber hinaus sind der Stil und die Farbgebung der Legende und des Absende-Buttons so angepasst, dass sie einen starken Kontrast bieten. Dies ist möglicherweise nicht das Aussehen, das Sie in einer echten Webanwendung möchten, aber es zeigt sicherlich die Möglichkeiten auf.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert des
        Radioknopfes darstellt.
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList): die Schnittstelle, die eine Liste von Radioknöpfen beschreibt.
