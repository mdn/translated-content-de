---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein vorgegebener Wert und nicht größer als ein anderer vorgegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird normalerweise mithilfe eines Schiebereglers oder eines Drehreglers angezeigt, anstatt mit einem Texteingabefeld wie dem Eingabetyp {{HTMLElement('input/number', 'number')}}.

Da diese Art von Widgets ungenau ist, sollte sie nur verwendet werden, wenn der genaue Wert der Kontrolle nicht wichtig ist.

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

Wenn der Browser des Nutzers den Typ `range` nicht unterstützt, wird er auf das `{{HTMLElement('input/text', 'text')}}`-Eingabefeld zurückgreifen.

## Wert

Der Wert eines `<input type="range">`-Elements wird über das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festgelegt, das einen String akzeptiert, der die ausgewählte Zahl darstellt. Der Wert ist niemals ein leerer String (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert höher als das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Mustervalidierung; es werden jedoch die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe unter einem schlechten Eingang leidet.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Der Standardwert ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Der Standardwert ist 1.

## Zusätzliche Attribute

Neben den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Wenn eines dieser Attribute enthalten ist, wird es ignoriert.

### list

Der Wert des `list`-Attributs ist der [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument vorhanden ist. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Für ein Beispiel, wie die Optionen in einem Bereich in unterstützten Browsern angezeigt werden, siehe [Hinzufügen von Markierungen](#tick-markierungen_hinzufügen) unten.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Siehe das HTML-[`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut.

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser ist, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs sein. Siehe das HTML-[`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut.

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert niedriger als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss. Nur Werte, die dem angegebenen Schrittintervall entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls oder einer geeigneten Standardeinstellung, wenn keines davon angegeben wurde), sind gültig.

Das `step`-Attribut kann auch auf den Stringwert `any` gesetzt werden. Dieser `step`-Wert bedeutet, dass kein Schrittintervall impliziert wird und jeder Wert im angegebenen Bereich erlaubt ist (abzüglich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Schritt auf den `any`-Wert setzen](#setting_step_to_any) dafür, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht dem Schrittintervall entspricht, kann die {{Glossary("user_agent", "Benutzeragent")}} den Wert auf den nächstgelegenen gültigen Wert runden, wobei bevorzugt wird, Zahlen nach oben zu runden, wenn es zwei gleich nahe Optionen gibt.

Der Standard-Schrittwert für `range`-Eingaben beträgt 1, was nur ganze Zahlen zulässt, _es sei denn_, die Schrittbasis ist keine ganze Zahl; zum Beispiel, wenn Sie `min` auf -10 und `value` auf 1.5 setzen, dann lässt ein `step` von 1 nur Werte wie 1.5, 2.5, 3.5,… in positiver Richtung und -0.5, -1.5, -2.5,… in negativer Richtung zu. Siehe das HTML-`step`-Attribut.

## Nicht standardisierte Attribute

### orient

Ähnlich wie die nicht standardisierte CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente beeinflusst, definiert das `orient`-Attribut die Ausrichtung des Bereichsreglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird.

## Beispiele

Während der `number`-Eingabetyp es Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp lässt Sie den Benutzer nach einem Wert fragen, in Fällen, in denen es dem Benutzer egal sein könnte – oder er nicht wissen könnte – was der tatsächlich ausgewählte numerische Wert ist.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audio-Steuerelemente wie Lautstärke und Balance oder Filter-Steuerelemente.
- Farbdimensionierungskontrollen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationen wie Schwierigkeitsgrad, Sichtweite, Weltgröße und so weiter.
- Passwortlänge für generierte Passwörter in Passwortmanager.

Als Regel gilt: Wenn für den Benutzer der prozentuale Abstand zwischen Minimum und Maximum wichtiger ist als die tatsächliche Zahl selbst, ist ein Bereichseingabefeld eine gute Wahl. Zum Beispiel bei einer Lautstärkeregelung für ein Heim-Stereo-System denken Benutzer typischerweise "Stelle die Lautstärke auf die Hälfte der maximalen Lautstärke ein" anstatt "Stelle die Lautstärke auf 0,5".

### Minimale und maximale Vorgabe spezifizieren

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn dies nicht das ist, was Sie möchten, können Sie leicht unterschiedliche Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute ändern. Diese können jeden Gleitkommawert annehmen.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Granularität des Werts festlegen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut ändern. Zum Beispiel, wenn Sie benötigen, dass ein Wert zwischen 5 und 10 in der Mitte liegt, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Das step-Attribut einstellen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Den Schritt auf `any` setzen

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π ohne Einschränkung des Bruchteils des ausgewählten Wertes auszuwählen. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Tick-Markierungen hinzufügen

Um Tick-Markierungen zu einer Bereichskontrolle hinzuzufügen, fügen Sie das `list`-Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Tick-Markierungen auf der Steuerung definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}}-Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Wert des Bereichs gesetzt ist, an dem eine Markierung gezeichnet werden soll.

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

### Die gleiche Datalist für mehrere Bereichselemente verwenden

Um Ihnen zu helfen, Code zu wiederholen, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Labels anzeigen](#labels_hinzufügen) möchten, wie im untenstehenden Beispiel, benötigen Sie eine `datalist` für jedes Bereichselement.

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

Sie können Tick-Markierungen mit `label`-Attributen für die `<option>`-Elemente versehen. Der Labelinhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

### Vertikale Bereichselemente erstellen

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Schieberegler links und rechts bewegt wird.

Um einen vertikalen Bereich zu erstellen, in dem der Schieberegler nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies führt dazu, dass der Bereichsregler vertikal dargestellt wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS-{{cssxref('appearance')}}-Eigenschaft auf den nicht standardisierten `slider-vertical`-Wert setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardisierte `orient="vertical"`-Attribut einschließen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der die String-Darstellung
        des ausgewählten numerischen Werts enthält; Verwenden Sie
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
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Stylen des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
