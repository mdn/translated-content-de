---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein gegebener Wert und nicht größer als ein anderer gegebener Wert sein muss. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird typischerweise in Form eines Schiebereglers oder einer Skalensteuerung dargestellt und nicht als Texteingabefeld wie beim {{HTMLElement('input/number', 'number')}} Eingabetyp.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird eine Rückfallebene eingesetzt, die ihn wie eine `{{HTMLElement('input/text', 'text')}}` Eingabe behandelt.

### Validierung

Es gibt keine Muster-Validierung; jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) auf etwas gesetzt wird, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe fehlerhaft ist.
- Der Wert wird nicht kleiner sein als [`min`](/de/docs/Web/HTML/Element/input#min). Der Standardwert ist 0.
- Der Wert wird nicht größer sein als [`max`](/de/docs/Web/HTML/Element/input#max). Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standardwert ist 1.

### Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut enthält eine Zeichenkette, die eine Zeichenkettendarstellung der ausgewählten Zahl darstellt. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum – es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in dem Fall wird der Standardwert auf den Wert des `min` Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum einzustellen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert höher als das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}} Elementen geteilten Attributen bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabetyp Range: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, und `src`. Jedes dieser Attribute wird, falls vorhanden, ignoriert.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} liefert eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Wertvorgaben, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das untenstehende Beispiel zum [Hinzufügen von Markierungen](#markierungen_hinzufügen), um zu sehen, wie Optionen bei einer Range in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, scheitert das Element an der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation). Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min) Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Attributes/max) Attribut.

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements weniger als dies beträgt, scheitert das Element an der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation). Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max) Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Attributes/min) Attribut.

> [!NOTE]
> Wenn die `min` und `max` Werte gleich sind oder der `max` Wert niedriger ist als der `min` Wert, kann der Benutzer nicht mit der Range interagieren.

### step

Das `step` Attribut ist eine Zahl, die die Feinheit festlegt, der der Wert entsprechen muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, oder ein entsprechender Standardwert, wenn keiner von diesen angegeben ist), sind gültig.

Das `step` Attribut kann auch auf den `any` Zeichenkettenwert gesetzt werden. Dieser `step` Wert bedeutet, dass kein Schrittintervall impliziert wird und jeder Wert im angegebenen Bereich zulässig ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Setzen von step auf den `any` Wert](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schritteinstellung entspricht, kann der {{Glossary("user_agent", "Benutzeragent")}} den Wert auf den nächsten gültigen Wert runden, wobei bevorzugt wird, auf höhere Zahlen zu runden, wenn es zwei gleich nahe Optionen gibt.

Der Standardwert für Schritte bei `range` Eingaben ist 1, sodass nur ganze Zahlen eingegeben werden können, _es sei denn_, die Basisschritte sind keine ganze Zahl; beispielsweise, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positiver Richtung und -0.5, -1.5, -2.5,… in negativer Richtung. Siehe das HTML `step` Attribut.

## Nicht-standardisierte Attribute

### orient

Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient` Attribut die Ausrichtung des Range-Schiebereglers. Zu den Werten gehören `horizontal`, was bedeutet, dass die Range horizontal gerendert wird, und `vertical`, wo die Range vertikal gerendert wird.

## Beispiele

Während der `number` Typ es den Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range` Eingabetyp erlaubt es Ihnen, den Benutzer nach einem Wert zu fragen, in Fällen, in denen es dem Benutzer möglicherweise egal ist – oder er nicht weiß – welcher spezifische numerische Wert ausgewählt ist.

Einige Beispiele für Situationen, in denen Range-Eingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbeinstellungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeit, Sichtbarkeitsabstand, Weltengröße usw.
- Passwortlänge für die von einem Passwortmanager generierten Passwörter.

Generell gilt: Wenn der Benutzer eher am prozentualen Abstand zwischen den Minimal- und Maximalwerten interessiert ist als an der tatsächlichen Zahl, ist eine Range-Eingabe ausgezeichnet geeignet. Zum Beispiel denkt man bei der Lautstärkeregelung eines Heim-Stereosystems typischerweise an "Lautstärke auf halbem Weg zum Maximum einstellen" anstatt "Lautstärke auf 0,5 einstellen".

### Das Minimum und Maximum angeben

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht dem entspricht, was Sie möchten, können Sie leicht andere Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Element/input#min) und/oder [`max`](/de/docs/Web/HTML/Element/input#max) Attribute ändern. Diese können jeden Gleitkommawert annehmen.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Die Granularität des Wertes festlegen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der sich auf halbem Weg zwischen 5 und 10 befindet, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Das step Attribut festlegen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert unabhängig von der Anzahl der Dezimalstellen akzeptieren möchten, können Sie für das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut einen Wert von `any` angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Einschränkungen bei dem Bruchteil des ausgewählten Wertes. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Range interagiert.

### Markierungen hinzufügen

Um Markierungen zu einer Range-Steuerung hinzuzufügen, fügen Sie das `list` Attribut hinzu und geben Sie ihm die `id` eines {{HTMLElement("datalist")}} Elements, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}} Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Element/option#value) auf den Wert der Range gesetzt ist, an dem eine Markierung gezeichnet werden soll.

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

### Dieselbe Datalist für mehrere Range-Steuerungen verwenden

Um Ihnen das Wiederholen von Code zu ersparen, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">` Elemente und andere {{HTMLElement("input")}} Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Labels anzeigen](#labels_hinzufügen) möchten, wie im untenstehenden Beispiel, dann benötigen Sie eine eigene `datalist` für jedes Range-Eingabefeld.

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

Sie können Markierungen beschriften, indem Sie den `<option>` Elementen `label` Attribute hinzufügen. Der Inhalt des Labels wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

### Vertikale Range-Steuerungen erstellen

Standardmäßig rendern Browser Range-Eingaben als Schieberegler, bei denen der Knopf nach links und rechts gleitet.

Um eine vertikale Range zu erstellen, bei der der Knopf nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}} Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dadurch wird der Range-Schieberegler vertikal dargestellt:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS {{cssxref('appearance')}} Eigenschaft auf den nicht standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"` Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die die Zeichenkettenrepräsentation
        des ausgewählten numerischen Wertes enthält; verwenden Sie
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Stylen des Range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
