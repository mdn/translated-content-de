---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein gegebener Wert und nicht größer als ein anderer gegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird typischerweise durch ein Schieberegler- oder Wählersymbol dargestellt, anstatt einer Texteingabebox wie bei dem {{HTMLElement('input/number', 'number')}}-Eingabetyp.

Da diese Art von Widget ungenau ist, sollte es nur verwendet werden, wenn der genaue Wert der Steuerung keine Rolle spielt.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er als `{{HTMLElement('input/text', 'text')}}`-Eingabe behandelt.

### Validierung

Es gibt keine Musterüberprüfung; jedoch werden die folgenden automatischen Überprüfungen durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) auf etwas gesetzt wird, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe eine schlechte Eingabe aufweist.
- Der Wert wird nicht kleiner sein als [`min`](/de/docs/Web/HTML/Element/input#min). Der Standardwert ist 0.
- Der Wert wird nicht größer sein als [`max`](/de/docs/Web/HTML/Element/input#max). Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standardwert ist 1.

### Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenkette, die eine Zeichenkettendarstellung der ausgewählten Zahl enthält. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso wird ein Versuch, den Wert über das Maximum zu setzen, dazu führen, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Bereichseingabentyp: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, und `src`. Alle diese Attribute werden ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) inkompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das Beispiel zur [Hinzufügung von Markierungen](#hinzufügen_von_markierungen) weiter unten, um zu sehen, wie die Optionen auf einem Bereich in unterstützten Browsern dargestellt werden.

### max

Der größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt die Elementvalidierung [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Weitere Informationen siehe das HTML [`max`](/de/docs/Web/HTML/Attributes/max)-Attribut.

### min

Der kleinste Wert im Bereich der erlaubten Werte. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt die Elementvalidierung [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs sein. Weitere Informationen siehe das HTML [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut.

> [!NOTE]
> Wenn die Werte für `min` und `max` gleich sind oder der `max`-Wert kleiner als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) oder ein entsprechender Standardwert, wenn keiner dieser Werte angegeben ist), sind zulässig.

Das `step`-Attribut kann auch auf den Zeichenkettenwert `any` gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert im angegebenen Bereich akzeptiert wird (unter Vorbehalt anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Setzen von Schritt auf den Wert `any`](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht den Schrittkonfigurationen entspricht, kann der {{Glossary("user_agent", "Benutzeragent")}} den Wert auf den nächsten gültigen Wert runden, wobei Zahlen bevorzugt nach oben gerundet werden, wenn es zwei gleich nahe Optionen gibt.

Der Standardschrittwert für Bereichseingaben ist 1, der nur ganze Zahlen zulässt, _es sei denn_, die Schrittbasis ist keine ganze Zahl; Wenn Sie z. B. `min` auf -10 und `value` auf 1.5 setzen, erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positiver Richtung und -0.5, -1.5, -2.5,… in negativer Richtung. Siehe das HTML [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut.

## Nicht standardmäßige Attribute

### orient

Ähnlich der nicht standardmäßigen CSS-Eigenschaft -moz-orient, die die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichsschiebereglers. Die Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, wo der Bereich vertikal dargestellt wird.

## Beispiele

Während der `number`-Typ es den Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Mindest- und einem Höchstwert erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht es Ihnen, den Benutzer nach einem Wert zu fragen, falls dem Benutzer der spezifische numerische Wert, der ausgewählt wurde, möglicherweise nicht einmal wichtig ist oder bekannt ist.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audio-Steuerelemente wie Lautstärke und Balance oder Filter-Steuerelemente.
- Farbkonfigurationssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationen wie Schwierigkeitsgrad, Sichtweite, Weltengröße usw.
- Passwortlänge für generierte Passwörter eines Passwortmanagers.

Im Allgemeinen, wenn der Benutzer eher am Prozentsatz der Entfernung zwischen Mindest- und Höchstwerten interessiert ist als an der tatsächlichen Zahl selbst, ist ein Bereichseingang eine gute Wahl. Beispielsweise denkt ein Benutzer einer Heim-Stereoanlage typischerweise "Lautstärke auf halbem Wege zum Maximum einstellen" anstatt "Lautstärke auf 0,5 einstellen".

### Festlegen von Minimum und Maximum

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn dies nicht das ist, was Sie wollen, können Sie leicht unterschiedliche Grenzen angeben, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Element/input#min)- und/oder [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute ändern. Diese können jeden Gleitkommawert enthalten.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Granularität des Wertes

Standardmäßig ist die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu kontrollieren, können Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der zwischen 5 und 10 liegt, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Festlegen des `step`-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Festlegen von Schritt auf `any`

Wenn Sie jeden Wert akzeptieren möchten, unabhängig davon, wie viele Dezimalstellen er hat, können Sie für das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut einen Wert von `any` angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Beschränkung auf den Bruchteil des gewählten Wertes. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Markierungen

Um Markierungen zu einem Bereichssteuerung hinzuzufügen, schließen Sie das `list`-Attribut ein, wobei es die `id` eines {{HTMLElement("datalist")}}-Elements erhält, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}}-Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Element/option#value) auf den Bereichswert eingestellt ist, bei dem eine Markierung gezeichnet werden soll.

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

### Verwendung derselben Datalist für mehrere Bereichssteuerungen

Um Ihnen zu helfen, nicht immer wieder denselben Code zu wiederholen, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Beschriftungen anzeigen](#hinzufügen_von_beschriftungen) möchten, wie im folgenden Beispiel, benötigen Sie eine `datalist` für jede Bereichseingabe.

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

Sie können Markierungen beschriften, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Inhalt der Beschriftung wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Beschriftungen anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, bei dem der Schieberegler nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dadurch wird der Bereichsschieberegler vertikal gerendert:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS-{{cssxref('appearance')}}-Eigenschaft auf den nicht standardisierten `slider-vertical`-Wert setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"`-Attribut einfügen, um ältere Versionen von Firefox zu unterstützen.

Weitere Informationen und Beispiele finden Sie unter [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die die Zeichenkettendarstellung
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle
- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des `range`-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
