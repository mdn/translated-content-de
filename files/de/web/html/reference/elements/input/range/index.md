---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht geringer als ein vorgegebener und nicht höher als ein anderer gegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird typischerweise mit einem Schieberegler oder einer Wählscheibe dargestellt, anstatt mit einem Texteingabefeld wie beim {{HTMLElement('input/number', 'number')}} Eingabetyp.

Weil dieses Widget ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert der Steuerung nicht wichtig ist.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;range&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Audio settings:</p>

<div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume">Volume</label>
</div>

<div>
  <input
    type="range"
    id="cowbell"
    name="cowbell"
    min="0"
    max="100"
    value="90"
    step="10" />
  <label for="cowbell">Cowbell</label>
</div>
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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er zurückgesetzt und als `{{HTMLElement('input/text', 'text')}}` Eingabe behandelt.

### Validierung

Es gibt keine Musterüberprüfung, jedoch werden die folgenden Formen der automatischen Überprüfung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl konvertiert werden kann, schlägt die Validierung fehl, da die Eingabe einen fehlerhaften Wert hat.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Der Standardwert ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Standard ist 1.

### Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut enthält eine Zeichenkette, die eine String-Darstellung der ausgewählten Zahl enthält. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt in der Mitte zwischen dem festgelegten Minimum und Maximum—es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min` Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum einzustellen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert höher als das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}} Elemente gemeinsam haben, bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabe-Bereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Alle diese Attribute werden ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe den Abschnitt zum [Hinzufügen von Markierungen](#hinzufügen_von_markierungen) unten für ein Beispiel, wie die Optionen auf einem Bereich in unterstützten Browsern angezeigt werden.

### max

Der höchste Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attributs keine Zahl ist, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribut.

### min

Der niedrigste Wert im Bereich der erlaubten Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements geringer als dieser Wert ist, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attribut.

> [!NOTE]
> Wenn die `min` und `max` Werte gleich sind oder der `max` Wert niedriger als der `min` Wert ist, wird der Benutzer nicht mit dem Bereich interagieren können.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss. Nur Werte, die mit dem angegebenen Schrittintervall ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, oder ein entsprechender Standardwert, falls diese nicht bereitgestellt werden) übereinstimmen, sind gültig.

Das `step` Attribut kann auch auf den `any`-Zeichenfolgenwert gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert im angegebenen Bereich (unter Ausschluss anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)) zulässig ist. Siehe das [Schritt-Attribut auf den `any`-Wert setzen](#setting_step_to_any) Beispiel, um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schrittkonfiguration entspricht, kann der {{Glossary("user_agent", "User-Agent")}} den Wert auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen bevorzugt nach oben gerundet wird.

Der standardmäßige Schrittwert für `range` Eingaben ist 1, sodass nur ganze Zahlen eingegeben werden können, _es sei denn_, die Schrittgrundlage ist keine ganze Zahl; Wenn Sie zum Beispiel `min` auf -10 und `value` auf 1,5 festlegen, ermöglicht ein `step` von 1 nur Werte wie 1,5, 2,5, 3,5,… in positiver Richtung und -0,5, -1,5, -2,5,… in negativer Richtung. Siehe das [HTML `step` Attribut](/de/docs/Web/HTML/Reference/Attributes/step).

## Nicht-standardisierte Attribute

### orient

Ähnlich wie die nicht-standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient` Attribut die Orientierung des Bereichsschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, wobei der Bereich vertikal dargestellt wird.

## Beispiele

Während der `number` Typ es den Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert auf einen Minimal- und Maximalwert fordern, erfordert es, dass der Benutzer einen spezifischen Wert eingibt. Der `range` Eingabetyp ermöglicht es Ihnen, den Benutzer nach einem Wert zu fragen, in Situationen, in denen der Benutzer möglicherweise nicht einmal weiß oder sich nicht darum kümmert, welchen spezifischen numerischen Wert er auswählt.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationssteuerungen wie Farbkanäle, Transparenz, Helligkeit, usw.
- Spielekonfigurationssteuerungen wie Schwierigkeit, Sichtweite, Weltgröße und so weiter.
- Passwortlänge für von einem Passwort-Manager generierte Passwörter.

Als Regel gilt: Wenn der Benutzer eher an dem Prozentsatz der Distanz zwischen Minimal- und Maximalwerten interessiert ist als an der tatsächlichen Zahl selbst, ist eine Bereichseingabe ein guter Kandidat. Zum Beispiel, im Fall einer Lautstärkesteuerung zu Hause, denken Benutzer typischerweise "Lautstärke auf die Hälfte des Maximums einstellen" anstatt "Lautstärke auf 0,5 einstellen".

### Spezifizierung von Minimum und Maximum

Standardmäßig liegt das Minimum bei 0 und das Maximum bei 100. Wenn das nicht das ist, was Sie wollen, können Sie leicht andere Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute ändern. Diese können jeden Gleitkommawert haben.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Wertgranularität

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der zwischen 5 und 10 liegt, sollten Sie den Wert des `step` auf 0,5 setzen:

#### Schritt-Attribut festlegen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert akzeptieren möchten, unabhängig davon, wie viele Dezimalstellen es hat, können Sie einen Wert von `any` für das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut angeben:

##### HTML

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>Value: <output id="value"></output></p>
```

##### JavaScript

```js
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
```

{{EmbedLiveSample("Setting_step_to_any", 600, 75)}}

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Einschränkungen hinsichtlich des Bruchteils des ausgewählten Werts. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Markierungen

Um Markierungen zu einem Bereichssteuerung hinzuzufügen, fügen Sie das `list` Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}} Elements, das eine Reihe von Markierungen auf dem Steuerelement definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}} Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Wert des Bereichs gesetzt ist, an dem eine Markierung gezeichnet werden soll.

#### HTML

```html
<label for="temp">Choose a comfortable temperature:</label><br />
<input type="range" id="temp" name="temp" list="markers" />

<datalist id="markers">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### Ergebnis

{{EmbedLiveSample("Adding tick marks", 600, 50)}}

### Verwenden desselben Datalists für mehrere Bereichssteuerungen

Um Ihnen zu helfen, Codewiederholung zu vermeiden, können Sie denselben {{HTMLElement("datalist")}} für mehrere `<input type="range">` Elemente und andere {{HTMLElement("input")}} Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Beschriftungen anzeigen](#hinzufügen_von_beschriftungen) möchten, wie im Beispiel unten, benötigen Sie einen `datalist` für jede Bereichseingabe.

#### HTML

```html
<p>
  <label for="temp1">Temperature for room 1:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">Temperature for room 2:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">Temperature for room 3:</label>
  <input type="range" id="temp3" name="temp3" list="values" />
</p>

<datalist id="values">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
```

#### Ergebnis

{{EmbedLiveSample("Using the same datalist for multiple range controls")}}

### Hinzufügen von Beschriftungen

Sie können Markierungen beschriften, indem Sie den `<option>` Elementen `label` Attribute geben. Allerdings wird der Beschriftungsinhalt standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Beschriftungen anzuzeigen und richtig zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

#### HTML

```html
<label for="tempB">Choose a comfortable temperature:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="very cold!"></option>
  <option value="25" label="cool"></option>
  <option value="50" label="medium"></option>
  <option value="75" label="getting warm!"></option>
  <option value="100" label="hot!"></option>
</datalist>
```

#### CSS

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Adding labels")}}

### Erstellen von vertikalen Bereichssteuerungen

Standardmäßig stellen Browser Bereichseingaben als Schieberegler dar, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, bei dem der Daumen nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}} Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies führt dazu, dass der Bereichsschieber vertikal dargestellt wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS {{cssxref('appearance')}} Eigenschaft auf den nicht standardisierten `slider-vertical` Wert festlegen, wenn Sie ältere Versionen von Chrome und Safari unterstützen wollen, und das nicht standardisierte `orient="vertical"` Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die die Zeichenfolge-Darstellung des
        ausgewählten numerischen Wertes enthält; verwenden Sie
        [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber),
        um den Wert als Zahl zu erhalten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#max"><code>max</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#min"><code>min</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
        und [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA Rolle</strong></td>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role">slider</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Controlling multiple parameters with ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
