---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht weniger als ein bestimmter Wert und nicht mehr als ein weiterer bestimmter Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird typischerweise durch ein Slider- oder Drehregler-Steuerelement dargestellt, anstatt durch ein Texteingabefeld wie der {{HTMLElement('input/number', 'number')}} Eingabetyp.

Da diese Art von Steuerelement ungenau ist, sollte sie nur verwendet werden, wenn der genaue Wert der Steuerung nicht bedeutend ist.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er zurückgesetzt und als `{{HTMLElement('input/text', 'text')}}` Eingabe behandelt.

### Validierung

Es gibt keine Muster-Validierung; jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) auf etwas eingestellt ist, das nicht in eine gültige Fließkommazahl umgewandelt werden kann, schlägt die Validierung fehl, weil die Eingabe einen fehlerhaften Eingang aufweist.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Element/input#min) sein. Der Standard ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Element/input#max) sein. Der Standard ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standard ist 1.

### Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut enthält eine Zeichenkette, die eine Zeichenkettenrepräsentation der ausgewählten Zahl enthält. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min` Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwertes lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt der Versuch, den Wert über das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}} Elemente gemeinsam haben, bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute, falls enthalten, wird ignoriert.

### list

Der Wert des `list` Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer als Vorschlag für diese Eingabe angeboten werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das [Hinzufügen von Markierungen](#markierungen_hinzufügen) unten für ein Beispiel, wie die Optionen auf einem Bereich in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs keine Zahl ist, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min) Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Attributes/max) Attribut.

### min

Der niedrigste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Attributes/min) Attribut.

> [!NOTE]
> Wenn die `min` und `max` Werte gleich sind oder der `max` Wert niedriger als der `min` Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) ansonsten, oder ein geeigneter Standardwert, wenn keiner dieser Werte angegeben wird), sind gültig.

Das `step` Attribut kann auch auf den Wert `any` gesetzt werden. Dieser `step` Wert bedeutet, dass kein Schrittintervall impliziert wird und jeder Wert im angegebenen Bereich zulässig ist (sofern keine anderen Einschränkungen, wie z.B. [`min`](#min) und [`max`](#max) bestehen). Siehe das Beispiel [Schritt auf 'any' setzen](#setting_step_to_any), um zu erfahren, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht mit der Schrittkonfiguration übereinstimmt, kann der {{Glossary("user agent")}} den Wert auf den nächsten gültigen Wert runden, wobei bevorzugt wird, die Zahlen aufzurunden, wenn zwei gleich nahe Möglichkeiten bestehen.

Der Standard-Schrittwert für `range` Eingaben ist 1, was nur ganze Zahlen zugelassen lässt, _es sei denn_, die Schrittbasis ist keine ganze Zahl; zum Beispiel, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positive Richtung und -0.5, -1.5, -2.5,… in negative Richtung. Siehe das [HTML `step` Attribut](/de/docs/Web/HTML/Attributes/step).

## Nicht standardmäßige Attribute

### orient

Ähnlich wie die nicht standardmäßige -moz-orient CSS-Eigenschaft, die sich auf die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente auswirkt, definiert das `orient` Attribut die Ausrichtung des Bereichs-Sliders. Werte umfassen `horizontal`, was bedeutet, dass der Slider horizontal dargestellt wird, und `vertical`, wo der Slider vertikal dargestellt wird.

## Beispiele

Während der `number` Typ den Benutzern erlaubt, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Mindest- und einem Höchstwert erzwingen, erfordert er, dass sie einen bestimmten Wert eingeben. Der `range` Eingabetyp ermöglicht es Ihnen, den Benutzer um einen Wert zu bitten, in Fällen, in denen der Benutzer möglicherweise nicht einmal interessiert ist - oder weiß - was der spezifisch ausgewählte numerische Wert ist.

Einige Beispiele für Situationen, in denen Bereichs-Eingaben häufig verwendet werden:

- Audio-Steuerelemente wie Lautstärke und Balance oder Filter-Steuerelemente.
- Farbkonfigurations-Steuerelemente wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurations-Steuerelemente wie Schwierigkeitsgrad, Sichtweite, Weltgröße und so weiter.
- Passwortlänge für vom Passwortmanager generierte Passwörter.

Als Faustregel gilt: Wenn der Benutzer eher an dem Prozentsatz der Distanz zwischen Mindest- und Höchstwert interessiert ist als an der tatsächlichen Zahl selbst, ist eine Bereichseingabe eine hervorragende Wahl. Zum Beispiel, im Fall einer Heimstereo-Lautstärkeregelung, denken die Benutzer typischerweise "Lautstärke auf halbe maximale Lautstärke setzen" statt "Lautstärke auf 0,5 setzen".

### Mindest- und Höchstwert angeben

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht das ist, was Sie möchten, können Sie ganz einfach andere Grenzen angeben, indem Sie die Werte der Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und/oder [`max`](/de/docs/Web/HTML/Element/input#max) ändern. Diese können jeden Fließkommawert haben.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Die Granularität des Wertes einstellen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der genau zwischen 5 und 10 liegt, sollten Sie den Wert von `step` auf 0.5 setzen:

#### Das Step-Attribut festlegen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert akzeptieren möchten, unabhängig davon, wie viele Dezimalstellen er hat, können Sie einen Wert von `any` für das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) angeben:

##### HTML

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>Wert: <output id="value"></output></p>
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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Einschränkungen des ausgewählten Wertanteils. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Bereich interagiert.

### Markierungen hinzufügen

Um Markierungen zu einem Bereichskontrollfeld hinzuzufügen, fügen Sie das `list` Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}} Elements, das eine Serie von Markierungen auf dem Kontrollfeld definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}} Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Element/option#value) auf den Bereichswert gesetzt ist, bei dem eine Markierung gezeichnet werden soll.

#### HTML

```html
<label for="temp">Wählen Sie eine angenehme Temperatur:</label><br />
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

### Denselben Datalist für mehrere Bereichskontrollen verwenden

Um Ihnen zu helfen Code zu sparen, können Sie denselben {{HTMLElement("datalist")}} für mehrere `<input type="range">` Elemente und andere {{HTMLElement("input")}} Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Bezeichnungen anzeigen möchten](#bezeichnungen_hinzufügen) wie im folgenden Beispiel, dann würden Sie einen `datalist` für jedes Range-Eingabeelement benötigen.

#### HTML

```html
<p>
  <label for="temp1">Temperatur für Raum 1:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">Temperatur für Raum 2:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">Temperatur für Raum 3:</label>
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

### Bezeichnungen hinzufügen

Sie können Tick-Markierungen mit `<option>` Elementen beschriften, die `label` Attribute haben. Der Labelinhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

#### HTML

```html
<label for="tempB">Wählen Sie eine angenehme Temperatur:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="sehr kalt!"></option>
  <option value="25" label="kühl"></option>
  <option value="50" label="mittel"></option>
  <option value="75" label="warm werden!"></option>
  <option value="100" label="heiß!"></option>
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

### Vertikale Bereichskontrollen erstellen

Standardmäßig rendert der Browser Range-Eingaben als Slider, bei denen der Knopf nach links und rechts bewegt wird.

Um einen vertikalen Bereich zu erstellen, bei dem die Steuerung sich nach oben und unten verschiebt, setzen Sie die {{cssxref("writing-mode")}} Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies führt dazu, dass der Range-Slider vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS {{cssxref('appearance')}} Eigenschaft auf den nicht standardmäßigen `slider-vertical` Wert setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"` Attribut einfügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die die Zeichenkettenrepräsentation des ausgewählten numerischen Wertes enthält; verwenden Sie
        {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}, um den Wert als Zahl zu erhalten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        und {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
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

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}} Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- {{domxref('validityState.rangeOverflow')}} und {{domxref('validityState.rangeUnderflow')}}
- [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
