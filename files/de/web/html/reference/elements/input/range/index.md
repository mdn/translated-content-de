---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein gegebener Wert und nicht größer als ein anderer gegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird typischerweise durch einen Schieberegler oder eine Drehsteuerung und nicht durch ein Texteingabefeld wie bei der Eingabe vom Typ {{HTMLElement('input/number', 'number')}} dargestellt.

Da diese Art von Widget ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert der Steuerung nicht wichtig ist.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er als Eingabe vom Typ `{{HTMLElement('input/text', 'text')}}` behandelt.

## Wert

Der Wert eines `<input type="range">`-Elements wird über das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festgelegt, welches einen String akzeptiert, der die gewählte Nummer repräsentiert. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum—es sei denn, das Maximum tatsächlich kleiner ist als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min`-Attributs eingestellt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso resultiert ein Versuch, den Wert über das Maximum zu setzen, darin, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Muster-Validierung; jedoch werden folgende Formen der automatischen Validierung durchgeführt:

- Wenn das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt wird, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe eine schlechte Eingabe aufweist.
- Der Wert wird nicht kleiner sein als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min). Der Standard ist 0.
- Der Wert wird nicht größer sein als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max). Der Standard ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Der Standard ist 1.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Bereichseingaben die folgenden Attribute:

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für die Eingabe `range`: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute, falls enthalten, wird ignoriert.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, um dem Benutzer für diese Eingabe Vorschläge zu machen. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das Beispiel für das [Hinzufügen von Markierungen](#markierungen_hinzufügen) unten, um zu sehen, wie die Optionen für einen Bereich in unterstützten Browsern gekennzeichnet sind.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element in der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Siehe das HTML-Attribut [`max`](/de/docs/Web/HTML/Reference/Attributes/max).

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element in der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs sein. Siehe das HTML-Attribut [`min`](/de/docs/Web/HTML/Reference/Attributes/min).

> [!NOTE]
> Wenn `min` und `max` Werte gleich sind oder der `max` Wert niedriger ist als der `min` Wert, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min) falls angegeben, oder [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten, oder ein angemessener Standardwert, falls keiner dieser Werte bereitgestellt wird) sind gültig.

Das `step`-Attribut kann auch auf den Stringwert `any` gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert im angegebenen Bereich erlaubt ist (außer anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Schritteinstellung auf den `any` Wert](#setting_step_to_any) um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schrittkonfiguration entspricht, kann der {{Glossary("user_agent", "Benutzeragent")}} den Wert auf den nächstgelegenen gültigen Wert abrunden, wobei normalerweise aufgerundet wird, wenn es zwei gleich nahe Optionen gibt.

Der Standard-Schrittwert für `range`-Eingaben ist 1, wodurch nur ganze Zahlen eingegeben werden können, _es sei denn_, die Schrittbasis ist keine Ganze Zahl; zum Beispiel, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positiver Richtung und -0.5, -1.5, -2.5,… in negativer Richtung. Siehe das [HTML `step` Attribut](/de/docs/Web/HTML/Reference/Attributes/step).

## Nicht-standardmäßige Attribute

### orient

Ähnlich dem nicht standardmäßigen CSS-Attribut -moz-orient, welches die {{htmlelement('progress')}} und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsreglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird.

## Beispiele

Während der `number`-Typ es den Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Minimum- und einem Maximumwert erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht es Ihnen, den Benutzer nach einem Wert zu fragen, in Fällen, in denen der Benutzer sich vielleicht nicht einmal darum kümmert oder weiß, welcher spezifische numerische Wert ausgewählt ist.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationssteuerungen wie Schwierigkeitsgrad, Sichtreichweite, Weltgröße usw.
- Passwortlänge für ein von einem Passwort-Manager generiertes Passwort.

In der Regel, wenn der Benutzer eher an dem Prozentsatz der Entfernung zwischen dem Minimum und dem Maximum interessiert ist als an der tatsächlichen Zahl selbst, ist eine Bereichseingabe ein guter Kandidat. Beispielsweise denken Benutzer im Fall einer Heimstereo-Lautstärkeregelung typischerweise "Lautstärke auf halbem Weg zum Maximum einstellen" anstatt "Lautstärke auf 0.5 einstellen".

### Spezifizieren von Minimum und Maximum

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht das ist, was Sie wollen, können Sie leicht andere Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute ändern. Diese können jeden Gleitkommawert annehmen.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie folgendes verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Wertgranularität

Die Granularität ist standardmäßig 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut ändern. Wenn Sie beispielsweise einen Wert in der Mitte zwischen 5 und 10 benötigen, sollten Sie den `step`-Wert auf 0.5 setzen:

#### Setzen des `step`-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Setze `step` auf `any`

Wenn Sie jeden Wert unabhängig von der Anzahl der Dezimalstellen akzeptieren möchten, können Sie für das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut den Wert `any` angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π ohne Einschränkungen bezüglich des Bruchteils des ausgewählten Wertes auszuwählen. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Markierungen hinzufügen

Um Markierungen zu einer Bereichssteuerung hinzuzufügen, fügen Sie das `list`-Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}}-Element repräsentiert, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Wert des Bereichs gesetzt ist, an dem eine Markierung gezeichnet werden soll.

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

### Verwenden derselben Datalist für mehrere Bereichssteuerungen

Um Code-Duplikationen zu vermeiden, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Labels anzeigen](#labels_hinzufügen) möchten, wie im Beispiel unten, dann benötigen Sie eine `datalist` für jede Bereichseingabe.

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

### Labels hinzufügen

Sie können Markierungen labeln, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Labelinhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

### Erstellen vertikaler Bereichssteuerungen

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Regler links und rechts gleitet.

Um eine vertikale Bereichssteuerung zu erstellen, bei der der Regler auf und ab gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies führt dazu, dass der Bereichsregler vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS {{cssxref('appearance')}}-Eigenschaft auf den nicht standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"`-Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen vertikaler Steuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die die Zeichenkettenrepräsentation
        des ausgewählten numerischen Werts enthält; verwenden Sie
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
      <td><strong>IDL-Attribute</strong></td>
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Kontrolle mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Steuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
