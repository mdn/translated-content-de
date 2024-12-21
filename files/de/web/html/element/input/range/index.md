---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein gegebener Wert und nicht größer als ein anderer gegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird typischerweise durch einen Schieberegler oder eine Drehscheibe dargestellt, nicht durch ein Texteingabefeld wie der Eingabetyp {{HTMLElement('input/number', 'number')}}.

Da diese Art von Widget ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert der Steuerung nicht wichtig ist.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, fällt er zurück und behandelt ihn als `{{HTMLElement('input/text', 'text')}}` Eingabe.

### Validierung

Es gibt keine Mustervalidierung; jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, weil die Eingabe einen ungültigen Wert enthält.
- Der Wert wird nicht kleiner sein als [`min`](/de/docs/Web/HTML/Element/input#min). Der Standardwert ist 0.
- Der Wert wird nicht größer sein als [`max`](/de/docs/Web/HTML/Element/input#max). Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standardwert ist 1.

### Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) enthält einen String, der eine stringbasierte Darstellung der ausgewählten Zahl enthält. Der Wert ist niemals ein leerer String (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min` Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso wird ein Versuch, den Wert höher als das Maximum zu setzen, dazu führen, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für die Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Alle diese Attribute werden ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten zur Vorschlag an den Benutzer für diese Eingabe. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Sehen Sie sich das [Hinzufügen von Markierungen](#hinzufügen_von_markierungen) unten für ein Beispiel an, wie die Optionen auf einem Bereich in unterstützten Browsern gekennzeichnet werden.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer als oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min) Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Attributes/max) Attribut.

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner als oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Attributes/min) Attribut.

> [!NOTE]
> Wenn die `min` und `max` Werte gleich sind oder der `max` Wert niedriger als der `min` Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, oder ein entsprechender Standardwert, falls keiner dieser Werte angegeben ist), sind gültig.

Das `step` Attribut kann auch auf den Stringwert `any` gesetzt werden. Dieser `step` Wert bedeutet, dass kein Schrittintervall impliziert wird und jeder Wert im angegebenen Bereich erlaubt ist (abzüglich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Setting step to the `any` value](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Konfiguration folgt, kann der {{Glossary("user_agent", "Nutzeragent")}} den Wert auf den nächsten gültigen Wert runden, wobei Zahlen bevorzugt aufgerundet werden, wenn es zwei gleichnahe Optionen gibt.

Der Standard-Schrittwert für `range` Eingaben ist 1, der nur Ganzzahlen zulässt, _es sei denn_, die Basis ist keine Ganzzahl; zum Beispiel, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positiver Richtung und -0.5, -1.5, -2.5,… in der negativen Richtung. Siehe das [HTML `step` Attribut](/de/docs/Web/HTML/Attributes/step).

## Nicht standardisierte Attribute

### orient

Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient` Attribut die Ausrichtung des Bereichsschiebereglers. Die Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird.

## Beispiele

Während der `number` Typ es Benutzern erlaubt, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range` Eingabetyp erlaubt es Ihnen, den Benutzer um einen Wert zu bitten, in Fällen, in denen der Benutzer möglicherweise nicht einmal daran interessiert ist oder weiß, welcher spezifische numerische Wert ausgewählt wird.

Einige Beispiele für Situationen, in denen Range-Eingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationselemente wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationselemente wie Schwierigkeit, Sichtweite, Weltgröße und so weiter.
- Passwortlänge für ein von einem Passwortmanager generiertes Passwort.

Als Faustregel gilt: Wenn der Benutzer wahrscheinlich mehr an dem Prozentsatz der Distanz zwischen minimalen und maximalen Werten als an der eigentlichen Zahl selbst interessiert ist, ist eine Range-Eingabe ein hervorragender Kandidat. Zum Beispiel denken Benutzer bei einer Lautstärkeregelung eines Heimkinos für gewöhnlich "setze die Lautstärke auf die Hälfte des Maximums" anstatt "setze die Lautstärke auf 0,5".

### Festlegen des Minimums und Maximums

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht das ist, was Sie möchten, können Sie problemlos andere Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Element/input#min) und/oder [`max`](/de/docs/Web/HTML/Element/input#max) Attribute ändern. Diese können beliebige Fließkommawerte sein.

Zum Beispiel, um den Benutzer um einen Wert zwischen -10 und 10 zu bitten, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Granularität des Werts

Standardmäßig ist die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut ändern. Zum Beispiel, wenn Sie einen Wert genau zwischen 5 und 10 benötigen, sollten Sie den Wert von `step` auf 0.5 setzen:

#### Festlegen des step Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert unabhängig davon akzeptieren möchten, wie viele Dezimalstellen er hat, können Sie einen Wert von `any` für das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π ohne Einschränkung des Bruchteils zu wählen. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Markierungen

Um Markierungen zu einer Bereichssteuerung hinzuzufügen, fügen Sie das `list` Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}} Elements, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird durch ein {{HTMLElement("option")}} Element dargestellt, mit seinem [`value`](/de/docs/Web/HTML/Element/option#value) auf den Wert des Bereichs gesetzt, bei dem eine Markierung gezeichnet werden soll.

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

### Verwenden derselben datalist für mehrere Bereichssteuerungen

Um zu vermeiden, Code zu wiederholen, können Sie denselben {{HTMLElement("datalist")}} für mehrere `<input type="range">` Elemente und andere {{HTMLElement("input")}} Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Beschriftungen anzeigen](#hinzufügen_von_beschriftungen) möchten, wie im untenstehenden Beispiel, dann benötigen Sie eine `datalist` für jede Range-Eingabe.

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

Sie können Markierungen beschriften, indem Sie den `<option>` Elementen `label` Attribute geben. Allerdings wird der Beschriftungsinhalt standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Beschriftungen anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

Standardmäßig rendert der Browser Bereichseingaben als Schieberegler, bei denen der Schalter nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, in dem der Schalter nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}} Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies bewirkt, dass der Bereichsschieberegler vertikal dargestellt wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die nicht standardisierte CSS {{cssxref('appearance')}} Eigenschaft auf den Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten. Fügen Sie das nicht standardisierte `orient="vertical"` Attribut hinzu, um ältere Versionen von Firefox zu unterstützen.

Siehe [Creating vertical form controls](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der die String-Darstellung des ausgewählten numerischen Werts enthält; verwenden Sie
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role">slider</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
