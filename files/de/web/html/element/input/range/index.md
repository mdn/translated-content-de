---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein bestimmter Wert und nicht größer als ein anderer bestimmter Wert sein darf. Der genaue Wert gilt jedoch als nicht wichtig. Dies wird typischerweise durch einen Schieberegler oder Drehregler dargestellt, anstatt wie der Eingabetyp {{HTMLElement('input/number', 'number')}} ein Textfeld zu verwenden.

Da diese Art von Steuerelement ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert des Steuerelements nicht wichtig ist.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er als `{{HTMLElement('input/text', 'text')}}`-Eingabe behandelt.

### Validierung

Es steht keine Musterüberprüfung zur Verfügung; jedoch werden die folgenden automatischen Validierungen durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl konvertiert werden kann, schlägt die Validierung fehl, da die Eingabe einen fehlerhaften Wert hat.
- Der Wert wird nicht kleiner sein als [`min`](/de/docs/Web/HTML/Element/input#min). Der Standardwert ist 0.
- Der Wert wird nicht größer sein als [`max`](/de/docs/Web/HTML/Element/input#max). Der Standardwert ist 100.
- Der Wert wird ein Vielfaches des [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standardwert ist 1.

### Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) enthält eine Zeichenkette, die eine Zeichenfolgenrepräsentation der ausgewählten Zahl enthält. Der Wert ist niemals eine leere Zeichenfolge (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum – es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum zu setzen, wird er auf das Minimum gesetzt. Ähnlich wird er, wenn versucht wird, den Wert höher als das Maximum zu setzen, auf das Maximum gesetzt.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Range-Eingabe: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Wenn eines dieser Attribute enthalten ist, wird es ignoriert.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

Siehe unten das Beispiel für das [Hinzufügen von Markierungen](#hinzufügen_von_markierungen), um zu sehen, wie die Optionen auf einem Range in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Siehe das HTML-Attribut [`max`](/de/docs/Web/HTML/Attributes/max).

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen minimalen Wert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs sein. Siehe das HTML-Attribut [`min`](/de/docs/Web/HTML/Attributes/min).

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert niedriger als der `min`-Wert ist, kann der Benutzer nicht mit dem Range interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls oder einem geeigneten Standardwert, falls keiner davon angegeben ist) sind gültig.

Das `step`-Attribut kann auch auf den `any`-Stringwert gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert innerhalb des angegebenen Bereichs erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Setzen von step auf den `any`-Wert](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schrittkonfiguration entspricht, kann der {{Glossary("user_agent", "User-Agent")}} den Wert auf den nächsten gültigen Wert abrunden, wobei Zahlen nach oben abgerundet werden, wenn es zwei gleich nahe liegende Optionen gibt.

Der Standard-Schrittwert für `range`-Eingaben ist 1, wodurch nur ganze Zahlen eingegeben werden können, _es sei denn_, die Schrittgrundlage ist keine ganze Zahl; beispielsweise, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positive Richtung und -0.5, -1.5, -2.5,… in negative Richtung. Siehe das HTML-Attribut [`step`](/de/docs/Web/HTML/Attributes/step).

## Nicht standardisierte Attribute

### orient

Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Range-Schiebereglers. Die Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird.

## Beispiele

Während der `number`-Typ es den Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die den Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht es Ihnen, den Benutzer um einen Wert zu bitten, wenn der Benutzer möglicherweise nicht einmal weiß oder sich darum kümmert, welchen spezifischen numerischen Wert er auswählt.

Einige Beispiele, in denen Range-Eingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbeinstellungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße usw.
- Passwortlänge für die von einem Passwort-Manager generierten Passwörter.

Als Regel gilt: Wenn der Benutzer eher am Prozentsatz der Entfernung zwischen Mindest- und Höchstwerten interessiert ist als am tatsächlichen Wert selbst, ist eine Range-Eingabe eine gute Wahl. Zum Beispiel denken Benutzer im Fall eines Heimlautstärkereglers typischerweise "Stellen Sie die Lautstärke auf die Hälfte des Maximums" anstatt "Stellen Sie die Lautstärke auf 0,5".

### Festlegen von Minimum und Maximum

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn das nicht gewünscht ist, können Sie leicht andere Grenzen festlegen, indem Sie die Werte der Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und/oder [`max`](/de/docs/Web/HTML/Element/input#max) ändern. Diese können beliebige Gleitkommawerte sein.

Um beispielsweise den Benutzer um einen Wert zwischen -10 und 10 zu bitten, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Einstellung der Wertgranularität

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) ändern. Wenn Sie beispielsweise einen Wert benötigen, der auf halbem Weg zwischen 5 und 10 liegt, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Festlegen des step-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Setzen von step auf `any`

Wenn Sie jeden Wert unabhängig von der Anzahl der Dezimalstellen, auf die er erweitert wird, akzeptieren möchten, können Sie für das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) den Wert `any` angeben:

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

Dieses Beispiel lässt den Benutzer jeden Wert zwischen 0 und π ohne Einschränkung bezüglich des Bruchteils des ausgewählten Werts auswählen. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Range interagiert.

### Hinzufügen von Markierungen

Um einem Range-Steuerelement Markierungen hinzuzufügen, schließen Sie das `list`-Attribut ein und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Markierungen auf dem Steuerelement definiert. Jeder Punkt wird durch ein {{HTMLElement("option")}}-Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Element/option#value) auf den Wert des Bereichs gesetzt wird, an dem eine Markierung gezeichnet werden soll.

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

### Wiederverwendung desselben Datalist für mehrere Range-Steuerelemente

Um sich das Wiederholen von Code zu ersparen, können Sie denselben {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Labels anzeigen](#hinzufügen_von_labels) möchten, wie im folgenden Beispiel, benötigen Sie ein `datalist` für jede Range-Eingabe.

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

### Hinzufügen von Labels

Sie können Markierungen durch Hinzufügen von `label`-Attributen zu den `<option>`-Elementen beschriften. Der Labelinhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

### Erstellen von vertikalen Range-Steuerelementen

Standardmäßig rendern Browser die Range-Eingaben als Slider, bei denen der Knopf von links nach rechts verschoben wird.

Um einen vertikalen Range zu erstellen, bei dem der Knopf nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies bewirkt, dass der Range-Slider vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS-Eigenschaft {{cssxref('appearance')}} auf den nicht standardisierten Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardisierte Attribut `orient="vertical"` einschließen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Steuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die die Zeichenfolgenrepräsentation
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#max"><code>max</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#min"><code>min</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>,
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
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des Range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
