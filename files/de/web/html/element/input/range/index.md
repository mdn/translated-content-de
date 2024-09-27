---
title: <input type="range">
slug: Web/HTML/Element/input/range
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`range`** erlauben es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein vorgegebener Wert und nicht größer als ein anderer vorgegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird in der Regel durch ein Steuerelement wie einen Schieberegler oder Drehknopf dargestellt, anstatt eines Texteingabefeldes wie beim {{HTMLElement('input/number', 'number')}}-Eingabetyp.

Da es sich bei diesem Widget um ein ungenaues handelt, sollte es nur verwendet werden, wenn der genaue Wert der Kontrolle nicht wichtig ist.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er zurückgesetzt und als `{{HTMLElement('input/text', 'text')}}`-Eingabe behandelt.

### Validierung

Es gibt keine Musterüberprüfung; jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn der [`Wert`](/de/docs/Web/HTML/Element/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe aufgrund einer schlechten Eingabe leidet.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Element/input#min) sein. Der Standardwert ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Element/input#max) sein. Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Element/input#step) sein. Der Standardwert ist 1.

### Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenfolge, die eine Zeichenfolgen-Darstellung der ausgewählten Zahl ist. Der Wert ist niemals eine leere Zeichenfolge (`""`). Der Standardwert liegt in der Mitte zwischen dem angegebenen Minimum und Maximum – es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert über das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Elementen geteilten Attributen bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für die Eingaberange: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute wird ignoriert, wenn es vorhanden ist.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im gleichen Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte zur Vorschlagserstellung für den Benutzer für diese Eingabe. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das [Hinzufügen von Markierungen](#markierungen_hinzufügen) unten für ein Beispiel dafür, wie die Optionen eines Bereichs in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`Wert`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Attributes/max)-Attribut.

### min

Der niedrigste Wert im Bereich der erlaubten Werte. Wenn der [`Wert`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Attributes/max)-Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut.

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert kleiner als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) sonst, oder ein geeigneter Standardwert, wenn keiner dieser Werte bereitgestellt wird), sind gültig.

Das `step`-Attribut kann auch auf den Zeichenfolgenwert `any` gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert im angegebenen Bereich erlaubt ist (unter Berücksichtigung anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Schritt auf `any` setzen](#setting_step_to_any), wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht den Schrittvorgaben entspricht, kann der [Benutzeragent](/de/docs/Glossary/user_agent) den Wert auf den nächstgelegenen gültigen Wert runden, wobei er dazu neigt, Zahlen zu runden, wenn es zwei gleich nahe liegende Optionen gibt.

Der Standard-Schrittwert für `range`-Eingaben ist 1, wodurch nur Ganzzahlen eingegeben werden können, _es sei denn_, die Schrittbasis ist keine Ganzzahl; zum Beispiel, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, erlaubt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in der positiven Richtung und -0.5, -1.5, -2.5,… in der negativen Richtung. Siehe das [HTML `step`-Attribut](/de/docs/Web/HTML/Attributes/step).

## Nicht standardisierte Attribute

### orient

Ähnlich dem nicht standardisierten -moz-orient-CSS-Eigenschaft, das die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Orientierung des Bereichsschiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wobei der Bereich vertikal gerendert wird.

## Beispiele

Während der `number`-Typ es Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Minimum- und einem Maximumwert erzwingen, erfordert es, dass sie einen bestimmten Wert eingeben. Der `range`-Eingabetyp erlaubt es Ihnen, den Benutzer in Fällen um einen Wert zu bitten, in denen der Benutzer möglicherweise nicht einmal weiß oder es ihm egal ist, welchen spezifischen numerischen Wert er auswählt.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkodierungssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeitsgrad, Sichtbarkeitsdistanz, Weltgröße usw.
- Passwortlänge für vom Passwort-Manager generierte Passwörter.

In der Regel ist eine Bereichseingabe eine gute Wahl, wenn der Benutzer eher an dem Prozentsatz der Distanz zwischen Mindest- und Maximalwert als an der tatsächlichen Zahl selbst interessiert ist. Zum Beispiel denkt ein Benutzer bei der Lautstärkeregelung einer Heimstereoanlage typischerweise "Stelle die Lautstärke auf halbem Weg zum Maximum" statt "Stelle die Lautstärke auf 0,5".

### Festlegen von Minimum und Maximum

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn das nicht Ihren Wünschen entspricht, können Sie leicht unterschiedliche Grenzen angeben, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Element/input#min)- und/oder [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute ändern. Diese können jeden Gleitkommawert haben.

Zum Beispiel können Sie den Benutzer nach einem Wert zwischen -10 und 10 fragen:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Die Granularität des Wertes festlegen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine Ganzzahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut ändern. Zum Beispiel, wenn Sie einen Wert brauchen, der die Hälfte zwischen 5 und 10 beträgt, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Step-Attribut festlegen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

Wenn Sie jeden Wert akzeptieren möchten, unabhängig davon, wie viele Dezimalstellen er hat, können Sie den Wert `any` für das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, einen beliebigen Wert zwischen 0 und π auszuwählen, ohne Einschränkungen bezüglich des Bruchteils des ausgewählten Wertes. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Bereich interagiert.

### Markierungen hinzufügen

Um Markierungen zu einem Bereichssteuerelement hinzuzufügen, fügen Sie das `list`-Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Markierungen auf dem Steuerungselement definiert. Jeder Punkt wird unter Verwendung eines {{HTMLElement("option")}}-Elements dargestellt, dessen [`value`](/de/docs/Web/HTML/Element/option#value) auf den Wert des Bereichs gesetzt wird, an dem eine Markierung gezeichnet werden soll.

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

### Verwenden der gleichen Datalist für mehrere Bereichssteuerelemente

Um das Wiederholen von Code zu vermeiden, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Etiketten anzeigen](#etiketten_hinzufügen) möchten, wie im folgenden Beispiel, benötigen Sie eine `datalist` für jede Bereichseingabe.

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

### Etiketten hinzufügen

Sie können Markierungen beschriften, indem Sie den `<option>`-Elementen `label`-Attribute hinzufügen. Der Etiketteninhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Etiketten anzuzeigen und sie korrekt zu positionieren. So könnten Sie das machen.

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

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, bei dem der Daumen nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dadurch wird der Bereichsschieberegler vertikal dargestellt:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS-{{cssxref('appearance')}}-Eigenschaft auf den nicht standardmäßigen `slider-vertical`-Wert setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"`-Attribut einfügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Vertikale Formularsteuerungen erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die die Zeichenfolgen-Darstellung
        des ausgewählten numerischen Wertes enthält; verwenden
        Sie [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber),
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
      <td><strong>Methode</strong></td>
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
- [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Vertikale Formularsteuerungen erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Das Bereichselement stylen](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
