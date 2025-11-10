---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{HTMLElement("input")}} Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein bestimmter Wert und nicht größer als ein anderer bestimmter Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird typischerweise durch ein Schieberegler- oder Wählsteuerung dargestellt, anstatt durch ein Texteingabefeld wie der {{HTMLElement('input/number', 'number')}}-Eingabetyp.

Da dieses Widget ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert der Steuerung nicht wichtig ist.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er als `{{HTMLElement('input/text', 'text')}}` Eingabe behandelt.

## Wert

Der Wert eines `<input type="range">` Elements wird mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festgelegt, das einen String akzeptiert, der die ausgewählte Zahl darstellt. Der Wert ist niemals ein leerer String (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwertes lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert über das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Musterüberprüfung; jedoch werden folgende automatische Überprüfungen durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe fehlerhaft ist.
- Der Wert darf nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Der Standard ist 0.
- Der Wert darf nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Der Standard ist 100.
- Der Wert muss ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Der Standard ist 1.

## Zusätzliche Attribute

Neben den Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Alle diese Attribute werden ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das [Hinzufügen von Markierungen](#markierungen_hinzufügen) unten für ein Beispiel, wie die Optionen auf einem Bereich in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut.

### min

Der niedrigste Wert im Bereich der erlaubten Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser Wert ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut.

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert niedriger ist als der `min`-Wert, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0`, wenn keiner der beiden angegeben ist.

Der Standard-Schrittabstand für `step`-Eingaben ist `1`, was nur die Eingabe von ganzen Zahlen zulässt — _es sei denn_, der Schritt-Basiswert ist keine ganze Zahl.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird, und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Step auf den `any`-Wert setzen](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schritt-Konfiguration entspricht, kann der {{Glossary("user_agent", "user agent")}} den Wert auf den nächst gültigen Wert auf- oder abrunden, wobei bei zwei gleich nahen Optionen bevorzugt aufgerundet wird.

## Nicht-standardmäßige Attribute

### orient

Ähnlich der nicht-standardmäßigen CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente betrifft, definiert das `orient` Attribut die Ausrichtung des Bereichsreglers. Werte sind unter anderem `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird.

## Beispiele

Wohingegen der `number`-Typ es Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert auf ein Minimum und Maximum begrenzen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht Ihnen, den Benutzer nach einem Wert zu fragen, wenn dieser möglicherweise gar nicht weiß oder sich nicht darum kümmert, welchen spezifischen numerischen Wert er auswählt.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filterkontrollen.
- Farbeinstellungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße usw.
- Passwortlängen für generierte Passwörter eines Passwort-Managers.

In der Regel ist ein Bereichseingabefeld eine gute Wahl, wenn der Benutzer eher am Prozentsatz der Distanz zwischen Minimal- und Maximalwert interessiert ist als an der tatsächlichen Zahl selbst. Zum Beispiel denken Benutzer im Fall eines Lautstärkereglers eines Heimstereos typischerweise "Stelle die Lautstärke auf halbwegs maximal" anstatt "Stelle die Lautstärke auf 0,5".

### Minimum und Maximum angeben

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht dem gewünschten entspricht, können Sie problemlos andere Grenzen angeben, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute ändern. Diese können beliebige Fließkommawerte sein.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie folgendes verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Die Granularität des Wertes festlegen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der sich auf halbem Weg zwischen 5 und 10 befindet, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Das Attribut Schritt festlegen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert akzeptieren möchten, unabhängig davon, wie viele Dezimalstellen er hat, können Sie einen Wert von `any` für das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut angeben:

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

Dieses Beispiel erlaubt dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Einschränkung des Bruchteils des ausgewählten Wertes. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Markierungen hinzufügen

Um einem Bereichs-Steuerelement Markierungen hinzuzufügen, fügen Sie das `list`-Attribut hinzu und geben Sie ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird durch ein {{HTMLElement("option")}} Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Bereichswert gesetzt ist, bei dem eine Markierung gezeichnet werden soll.

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

Um Ihnen zu helfen, Codewiederholungen zu vermeiden, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Beschriftungen anzeigen](#beschriftungen_hinzufügen) möchten, wie im Beispiel unten, benötigen Sie jeweils eine `datalist` für jede Bereichseingabe.

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

### Beschriftungen hinzufügen

Sie können Markierungen beschriften, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Label-Inhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, dies zu tun.

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

### Vertikale Bereichssteuerungen erstellen

Standardmäßig rendern Browser Bereichseingaben als Schieberegler mit dem Schieber, der sich links und rechts bewegt.

Um einen vertikalen Bereich zu erstellen, bei dem der Regler nach oben und unten bewegt wird, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

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

Sie können auch die CSS-Eigenschaft {{cssxref('appearance')}} auf den nicht-standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht-standardmäßige Attribut `orient="vertical"` verwenden, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der die Stringdarstellung
        des ausgewählten numerischen Wertes enthält; verwenden Sie
        [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
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
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Stylen des Bereichs-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
