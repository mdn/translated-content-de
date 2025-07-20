---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{HTMLElement("input")}}-Elemente vom Typ **`range`** ermöglichen es dem Benutzer, einen numerischen Wert anzugeben, der nicht kleiner als ein bestimmter Wert und nicht größer als ein anderer bestimmter Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig erachtet. Dies wird normalerweise durch einen Schieberegler oder ein Drehregler dargestellt, anstatt eines Texteingabefeldes wie beim {{HTMLElement('input/number', 'number')}}-Eingabetyp.

Da diese Art von Steuerelement ungenau ist, sollte sie nur verwendet werden, wenn der genaue Wert der Steuerung nicht wichtig ist.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er zurückgesetzt und als `{{HTMLElement('input/text', 'text')}}`-Eingabe behandelt.

## Wert

Der Wert eines `<input type="range">`-Elements wird mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut gesetzt, das eine Zeichenkette akzeptiert, die die ausgewählte Zahl darstellt. Der Wert ist niemals ein leerer String (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts ist:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert höher als das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Mustervalidierung; jedoch werden folgende Formen der automatischen Validierung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe ein fehlerhafter Input ist.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Der Standard ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Der Standard ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Der Standard ist 1.

## Zusätzliche Attribute

Neben den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, bieten Range-Eingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Alle diese Attribute werden ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht eingeschlossen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Sehen Sie sich das unten stehende Beispiel [Hinzufügen von Abhebe-Punkten](#hinzufügen_von_abhebe-punkten) an, um ein Beispiel dafür zu sehen, wie die Optionen auf einem Bereich in unterstützten Browsern dargestellt werden.

### max

Der größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Konstraintvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Siehe HTML [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut.

### min

Der kleinste Wert im Bereich der erlaubten Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser ist, schlägt das Element bei der [Konstraintvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs sein. Siehe HTML [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut.

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert niedriger als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Feinheit angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Step-Basiswert entfernt sind, sind gültig. Die Step-Basis ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0`, wenn keines von beiden angegeben ist.

Der Standard-Schrittwert für `step`-Eingaben ist `1`, wodurch nur ganze Zahlen eingegeben werden können — _es sei denn_, die Basisschritte sind keine ganze Zahl.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Step impliziert ist und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Einstellung von Step auf den Wert `any`](#setting_step_to_any), um zu sehen, wie das in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Step-Konfiguration entspricht, kann der {{Glossary("user_agent", "Benutzer-Agent")}} den Wert auf den nächsten gültigen Wert runden, wobei er bevorzugt Zahlen aufrundet, wenn es zwei gleich nahe Optionen gibt.

## Nicht standardmäßige Attribute

### orient

Ähnlich dem nicht standardmäßigen CSS-Eigenschaft -moz-orient, das die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichs-Schiebereglers. Werte umfassen `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, wo der Bereich vertikal dargestellt wird.

## Beispiele

Während der Typ `number` es Benutzern erlaubt, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert auf ein Minimum und ein Maximum beschränken, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht es Ihnen, den Benutzer nach einem Wert zu fragen, in Fällen, in denen der Benutzer möglicherweise gar nicht interessiert ist — oder nicht weiß —, welcher spezifische Zahlenwert ausgewählt wurde.

Einige Beispiele für Situationen, in denen Range-Eingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationssteuerungen wie Schwierigkeitsgrad, Sichtbarkeitsdistanz, Weltgröße und so weiter.
- Passwortlänge für von einem Passwort-Manager generierte Passwörter.

Als Regel gilt: Wenn der Benutzer sich wahrscheinlich mehr für den Prozentsatz der Distanz zwischen Mindest- und Höchstwerten interessiert als für die tatsächliche Zahl selbst, ist eine Range-Eingabe eine gute Wahl. Zum Beispiel denkt man bei einer Heim-Stereoanlage-Lautstärkeregelung typischerweise an "Lautstärke auf halber Höhe des Maximums einstellen" statt "Lautstärke auf 0.5 einstellen".

### Spezifizieren von Mindest- und Höchstwerten

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn das nicht das ist, was Sie wollen, können Sie leicht andere Grenzen angeben, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute ändern. Diese können jeden Gleitkommawert annehmen.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Einstellung der Feinheit der Werte

Standardmäßig ist die Feinheit 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Feinheit zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut ändern. Zum Beispiel, wenn Sie einen Wert haben möchten, der auf halbem Wege zwischen 5 und 10 ist, sollten Sie den `step`-Wert auf 0.5 setzen:

#### Einstellung des Step-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Step auf `any` setzen

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π auszuwählen, ohne Einschränkung des Bruchteils des ausgewählten Werts. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Abhebe-Punkten

Um Abhebe-Punkte zu einem Bereichs-Steuerelement hinzuzufügen, fügen Sie das `list`-Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Abhebe-Punkten auf dem Steuerelement definiert. Jeder Punkt wird durch ein {{HTMLElement("option")}}-Element mit seinem [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) dargestellt, das auf den Bereichswert gesetzt ist, bei dem eine Markierung gezeichnet werden soll.

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

### Verwenden derselben Datalist für mehrere Bereichs-Steuerelemente

Um Code-Wiederholungen zu vermeiden, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Label anzeigen](#hinzufügen_von_beschriftungen) möchten, wie im Beispiel unten, benötigen Sie eine `datalist` für jede Range-Eingabe.

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

Sie können Abhebe-Punkte beschriften, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Label-Inhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Beschriftungen anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, dies zu tun.

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

### Erstellen von vertikalen Bereichs-Steuerelementen

Standardmäßig stellen Browser Range-Eingaben als Schieberegler dar, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, bei dem der Schieberegler nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies bewirkt, dass der Bereichs-Schieberegler vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die {{cssxref('appearance')}}-Eigenschaft auf den nicht standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"`-Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Sehen Sie sich [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls) für Beispiele an.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die die Zeichenfolgen-Darstellung
        des ausgewählten numerischen Werts enthält; verwenden
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
      <td><strong>Implizite ARIA Rolle</strong></td>
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
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- [Styling des Range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
