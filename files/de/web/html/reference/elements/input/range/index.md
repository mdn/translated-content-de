---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{HTMLElement("input")}} Elemente des Typs **`range`** ermöglichen es dem Benutzer, einen numerischen Wert festzulegen, der nicht kleiner als ein vorgegebener Wert und nicht größer als ein anderer vorgegebener Wert sein darf. Der genaue Wert wird jedoch als nicht wichtig erachtet. Dies wird typischerweise durch ein Schieberegler- oder Drehsteuerungsmodul dargestellt, anstatt einer Texteingabebox wie bei dem {{HTMLElement('input/number', 'number')}} Eingabetyp.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er zurückfallen und als `{{HTMLElement('input/text', 'text')}}` Eingabe behandelt.

## Wert

Der Wert eines `<input type="range">` Elements wird mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut festgelegt, das eine Zeichenkette akzeptiert, die die ausgewählte Zahl darstellt. Der Wert ist niemals eine leere Zeichenkette (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum—es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standard auf den Wert des `min` Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. In ähnlicher Weise führt ein Versuch, den Wert über das Maximum festzulegen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Musterüberprüfung; jedoch werden die folgenden Formen der automatischen Überprüfung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt wird, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, da die Eingabe unter einem schlechten Input leidet.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Standard ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Standard ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Standard ist 1.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}} Elementen geteilt werden, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Eingabebereich: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute wird ignoriert, wenn sie enthalten sind.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) unvereinbar sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Ein Beispiel dafür, wie die Optionen bei einem Bereich in unterstützten Browsern gekennzeichnet werden, finden Sie unten unter [Tick-Markierungen hinzufügen](#tick-markierungen_hinzufügen).

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen übersteigt, schlägt das Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attributs sein. Siehe das HTML [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribut.

### min

Der kleinste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attributs sein. Siehe das HTML [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attribut.

> [!NOTE]
> Wenn die `min` und `max` Werte gleich sind oder der `max` Wert niedriger ist als der `min` Wert, wird der Benutzer nicht in der Lage sein, mit dem Bereich zu interagieren.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten ab der Basis sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn weder noch angegeben ist.

Der Standardschrittwert für `step` Eingaben ist `1`, wodurch nur ganze Zahlen eingegeben werden können—_es sei denn_, die Schrittbasis ist keine ganze Zahl.

Ein Zeichenkettenwert von `any` bedeutet, dass kein Schritt impliziert wird, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Step auf den `any` Wert einstellen](#setting_step_to_any) für die Funktionsweise in unterstützten Browsern.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schrittkonfiguration entspricht, kann der {{Glossary("user_agent", "Benutzeragent")}} den Wert zum nächstgelegenen gültigen Wert runden, wobei er es vorzieht, Zahlen nach oben zu runden, wenn es zwei gleich nahe Optionen gibt.

## Nicht-Standard-Attribute

### orient

Ähnlich der nicht standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente beeinflusst, definiert das `orient` Attribut die Ausrichtung des Bereichsschiebers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird.

## Beispiele

Während der `number` Typ es Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzugeben, die den Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er, dass sie einen spezifischen Wert eingeben. Der `range` Eingabetyp ermöglicht es, den Benutzer nach einem Wert zu fragen, in Fällen, in denen es dem Benutzer möglicherweise egal ist—oder er nicht weiß—welchen spezifischen numerischen Wert er ausgewählt hat.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbeinstellungskontrollen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungssteuerungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße und so fort.
- Passwortlänge für von einem Passwortmanager generierte Passwörter.

In der Regel ist ein Bereichseingabeelement ein guter Kandidat, wenn der Benutzer eher am Prozentsatz der Distanz zwischen Minimal- und Maximalwerten interessiert ist als am eigentlichen Wert. Zum Beispiel im Fall einer Lautstärkeregelung einer Heimstereoanlage denken Benutzer normalerweise „Lautstärke auf halbem Weg zum Maximum einstellen“ statt „Lautstärke auf 0,5 einstellen“.

### Das Minimum und Maximum angeben

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn dies nicht das ist, was Sie möchten, können Sie leicht unterschiedliche Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute ändern. Diese können jeden Gleitkommawert haben.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Die Granularität des Wertes einstellen

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut ändern. Zum Beispiel, wenn Sie einen Wert zwischen 5 und 10 zur Hälfte brauchen, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Das step Attribut setzen

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Step auf `any` setzen

Wenn Sie jeden Wert akzeptieren wollen, unabhängig davon, wie viele Dezimalstellen er hat, können Sie einen Wert von `any` für das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, jeden Wert zwischen 0 und π zu wählen, ohne Einschränkungen hinsichtlich des Bruchteils des ausgewählten Wertes. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, wenn der Benutzer mit dem Bereich interagiert.

### Tick-Markierungen hinzufügen

Um Tick-Markierungen zu einem Bereichselement hinzuzufügen, fügen Sie das `list` Attribut hinzu und geben ihm die `id` eines {{HTMLElement("datalist")}} Elements, das eine Reihe von Tick-Markierungen auf dem Steuerelement definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}} Element dargestellt, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Wert des Bereichs gesetzt ist, an dem eine Markierung gezeichnet werden soll.

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

### Dieselbe Datalist für mehrere Bereichssteuerungen verwenden

Um zu vermeiden, dass Sie Code wiederholen müssen, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">` Elemente und andere {{HTMLElement("input")}} Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Labels zeigen](#labels_hinzufügen) möchten, wie im untenstehenden Beispiel, benötigen Sie eine `datalist` für jede Bereichseingabe.

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

Sie können Tick-Markierungen beschriften, indem Sie den `<option>` Elementen `label` Attribute geben. Der Inhalt der Label wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie das tun können.

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

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Knopf links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, in dem der Schieberegler nach oben und unten gleitet, setzen Sie die Eigenschaft {{cssxref("writing-mode")}} mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies führt dazu, dass der Bereichsschieber vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS {{cssxref('appearance')}} Eigenschaft auf den nicht standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige `orient="vertical"` Attribut einschließen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für Beispiele.

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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#max"><code>max</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#min"><code>min</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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

- [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Gestaltung des Range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
