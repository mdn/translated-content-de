---
title: '`<input type="range">` HTML-Attributwert'
short-title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente vom Typ **`range`** lassen den Benutzer einen numerischen Wert angeben, der nicht kleiner als ein bestimmter Wert und nicht größer als ein anderer festgelegter Wert sein darf. Der genaue Wert ist jedoch nicht von Bedeutung. Dies wird typischerweise mit einem Schieberegler oder Drehknopf dargestellt, anstatt mit einem Texteingabefeld wie dem {{HTMLElement('input/number', 'number')}}-Eingabetyp.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er auf `{{HTMLElement('input/text', 'text')}}` zurückgesetzt und als solcher behandelt.

## Wert

Der Wert eines `<input type="range">`-Elements wird über das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festgelegt, das eine Zeichenfolge akzeptiert, die die ausgewählte Zahl repräsentiert. Der Wert ist niemals eine leere Zeichenfolge (`""`). Der Standardwert befindet sich genau in der Mitte zwischen dem festgelegten Minimum und Maximum - es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum einzustellen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert höher als das Maximum einzustellen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Musterüberprüfung; die folgenden Formen der automatischen Validierung werden jedoch durchgeführt:

- Wenn der [`value`](#wert)-Wert auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe fehlerhaft ist.
- Der Wert wird nicht kleiner als [`min`](#min) sein. Der Standardwert ist 0.
- Der Wert wird nicht größer als [`max`](#max) sein. Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](#step) sein. Der Standardwert ist 1.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute wird ignoriert, wenn es enthalten ist.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Die {{HTMLElement("datalist")}} liefert eine Liste vorgegebener Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das Beispiel zum [Hinzufügen von Markierungen](#hinzufügen_von_markierungen) unten, wie die Optionen auf einem Bereich in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der [`value`](#wert)-Wert, der in das Element eingegeben wird, diesen überschreitet, schlägt das Element bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](#max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](#min)-Attributs sein. Siehe das HTML-Attribut [`max`](#max).

### min

Der niedrigste Wert im Bereich der zulässigen Werte. Wenn der [`value`](#wert)-Wert des Elements niedriger als dieser ist, schlägt das Element bei der [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](#max)-Attributs sein. Siehe das HTML-Attribut [`min`](#min).

> [!NOTE]
> Wenn die `min`- und `max`-Werte gleich sind oder der `max`-Wert niedriger als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die ein ganzzahliges Vielfaches der Schrittbasis sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, sonst [`value`](#wert) oder `0`, wenn keines angegeben ist.

Der standardmäßige Schrittwert für `step`-Eingaben ist `1`, sodass nur ganze Zahlen eingegeben werden können – _es sei denn_, die Schrittbasis ist keine ganze Zahl.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schrittweises Eingeben impliziert wird und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Schritt auf den `any`-Wert setzen](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht mit der Schrittkonfiguration übereinstimmt, kann die {{Glossary("user_agent", "Benutzeragentur")}} den Wert auf den nächsten gültigen Wert abrunden, wobei sie es bevorzugt, Zahlen nach oben zu runden, wenn zwei gleichermaßen nahe Werte vorhanden sind.

## Nicht-standardisierte Attribute

### orient

Ähnlich wie bei der nicht standardisierten -moz-orient CSS-Eigenschaft, die sich auf die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente auswirkt, definiert das `orient`-Attribut die Ausrichtung des Bereichsreglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal dargestellt wird, und `vertical`, wo der Bereich vertikal dargestellt wird.

## Beispiele

Während der `number`-Typ den Benutzern erlaubt, eine Zahl mit optionalen Einschränkungen einzugeben, die ihren Wert auf ein Minimum und Maximum begrenzen müssen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp erlaubt Ihnen, den Benutzer nach einem Wert zu fragen, in Fällen, wo der Benutzer vielleicht nicht einmal interessiert – oder sich dessen bewusst – ist, welchen spezifischen Zahlenwert er ausgewählt hat.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationseinstellungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße usw.
- Passwortlänge für generierte Passwörter eines Passwortmanagers.

Grundsätzlich, wenn der Benutzer eher an dem Prozentsatz der Entfernung zwischen Mindest- und Maximalwerten interessiert ist als an der tatsächlichen Zahl selbst, ist eine Bereichseingabe eine großartige Wahl. Beispielsweise denkt ein Benutzer bei der Lautstärkeregler eines Heimstereos typischerweise "stellt die Lautstärke auf die Hälfte des Maximums" ein, anstatt "stellt die Lautstärke auf 0,5" ein.

### Festlegen des Minimums und Maximums

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn das nicht Ihren Vorstellungen entspricht, können Sie einfach andere Grenzen festlegen, indem Sie die Werte der Attribute [`min`](#min) und/oder [`max`](#max) ändern. Diese können beliebige Gleitkommawerte sein.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie Folgendes verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Festlegen des Minimums und Maximums", 600, 40)}}

### Einstellen der Wertgranularität

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das Attribut [`step`](#step) ändern. Zum Beispiel, wenn Sie einen Wert benötigen, der sich in der Mitte zwischen 5 und 10 befindet, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Festlegen des step-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Step-Attribut festlegen", 600, 40)}}

#### Einstellen von step auf `any`

Wenn Sie jeden Wert unabhängig davon akzeptieren möchten, wie viele Dezimalstellen er umfasst, können Sie für das [`step`](#step)-Attribut den Wert `any` angeben:

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

{{EmbedLiveSample("Step auf 'any' setzen", 600, 75)}}

Dieses Beispiel lässt den Benutzer jeden Wert zwischen 0 und π ohne Einschränkung im Bruchteil des ausgewählten Wertes auswählen. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Markierungen

Um Markierungen zu einer Bereichssteuerung hinzuzufügen, schließen Sie das `list`-Attribut ein und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Markierungen auf der Steuerung definiert. Jeder Punkt wird durch ein {{HTMLElement("option")}}-Element dargestellt, dessen [`value`](#wert) auf den Wert des Bereichs gesetzt ist, an dem eine Markierung gezeichnet werden soll.

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

{{EmbedLiveSample("Hinzufügen von Markierungen", 600, 50)}}

### Verwenden derselben Datalist für mehrere Bereichssteuerungen

Um den Code nicht zu wiederholen, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch die [Etiketten anzeigen](#hinzufügen_von_etiketten) möchten, wie im Beispiel unten gezeigt, benötigen Sie für jeden Bereichseingang eine eigene `datalist`.

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

{{EmbedLiveSample("Verwenden derselben Datalist für mehrere Bereichssteuerungen")}}

### Hinzufügen von Etiketten

Sie können Markierungen etikettieren, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Inhalt des Labels wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie dies tun könnten.

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

{{EmbedLiveSample("Hinzufügen von Etiketten")}}

### Erstellen von vertikalen Bereichssteuerungen

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, in dem der Schieberegler nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft auf einen Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies bewirkt, dass der Bereichsschieberegler vertikal dargestellt wird:

{{EmbedLiveSample("Erstellen von vertikalen Bereichssteuerungen", 200, 200)}}

Sie können auch die CSS-{{cssxref('appearance')}}-Eigenschaft auf den nicht standardisierten Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardisierte `orient="vertical"`-Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die die Zeichenfolgenrepräsentation
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
      <td><strong>DOM-Interface</strong></td>
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
- {{HTMLElement("input")}} und das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interface, auf dem es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Styling des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
