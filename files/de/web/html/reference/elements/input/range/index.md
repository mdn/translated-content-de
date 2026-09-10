---
title: Attributwert von HTML `<input type="range">`
short-title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{HTMLElement("input")}}-Elemente des Typs **`range`** ermöglichen es Benutzern, einen numerischen Wert anzugeben, der nicht kleiner als ein bestimmter Wert und nicht größer als ein anderer bestimmter Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird typischerweise mithilfe eines Schiebereglers oder Drehreglers dargestellt, anstatt durch ein Texteingabefeld wie beim Eingabetyp {{HTMLElement('input/number', 'number')}}.

Da diese Art von Steuerelement ungenau ist, sollte sie nur verwendet werden, wenn der genaue Wert des Steuerelements nicht wichtig ist.

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, greift er darauf zurück und behandelt ihn als eine Eingabe vom Typ `{{HTMLElement('input/text', 'text')}}`.

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

## Wert

Der Wert eines `<input type="range">`-Elements wird mithilfe des Attributs [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) festgelegt, das einen String akzeptiert, der die ausgewählte Zahl darstellt. Der Wert ist niemals ein leerer String (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum – es sei denn, das Maximum ist tatsächlich kleiner als das Minimum; in diesem Fall wird der Standardwert auf den Wert des Attributs `min` gesetzt. Der Algorithmus zur Bestimmung des Standardwerts lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert niedriger als das Minimum festzulegen, wird er auf das Minimum gesetzt. Entsprechend führt der Versuch, den Wert höher als das Maximum festzulegen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es ist keine Mustervalidierung verfügbar; jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt wird, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, weil die Eingabe eine ungültige Eingabe enthält.
- Der Wert ist nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min). Der Standardwert ist 0.
- Der Wert ist nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max). Der Standardwert ist 100.
- Der Wert ist ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step). Der Standardwert ist 1.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen gemeinsam verwendet werden, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für die Bereichseingabe: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Alle diese Attribute werden, sofern sie enthalten sind, ignoriert.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Ein Beispiel dafür, wie die Optionen eines Bereichs in unterstützten Browsern gekennzeichnet werden, finden Sie unten unter [Hinzufügen von Teilstrichen](#hinzufügen_von_teilstrichen).

### max

Der größte Wert im Bereich der zulässigen Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des Attributs [`max`](/de/docs/Web/HTML/Reference/Attributes/max) keine Zahl ist, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des Attributs [`min`](/de/docs/Web/HTML/Reference/Attributes/min) sein. Siehe das HTML-Attribut [`max`](/de/docs/Web/HTML/Reference/Attributes/max).

### min

Der niedrigste Wert im Bereich der zulässigen Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser Wert ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn für `min` ein Wert angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des Attributs [`max`](/de/docs/Web/HTML/Reference/Attributes/max) sein. Siehe das HTML-Attribut [`min`](/de/docs/Web/HTML/Reference/Attributes/min).

> [!NOTE]
> Wenn die Werte `min` und `max` gleich sind oder der Wert `max` kleiner als der Wert `min` ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das Attribut `step` ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der weiter unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), sofern angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keines von beiden bereitgestellt wird.

Der Standard-Schrittwert für `step`-Eingaben ist `1`, wodurch nur ganze Zahlen eingegeben werden können – _es sei denn_, die Schrittbasis ist keine ganze Zahl.

Ein Stringwert von `any` bedeutet, dass keine Schrittweite impliziert wird und jeder Wert zulässig ist, vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max). Im Beispiel [Setzen von step auf den Wert `any`](#setting_step_to_any) erfahren Sie, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der von einem Benutzer eingegebene Wert nicht der Schritt-Konfiguration entspricht, kann der {{Glossary("user_agent", "User Agent")}} den Wert auf den nächstgelegenen gültigen Wert runden. Sind zwei Optionen gleich nahe, werden Zahlen bevorzugt aufgerundet.

## Nicht standardmäßige Attribute

### orient

Ähnlich wie die nicht standardmäßige CSS-Eigenschaft -moz-orient, die sich auf die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}} auswirkt, definiert das Attribut `orient` die Ausrichtung des Bereichsschiebereglers. Zu den Werten gehören `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, bei dem der Bereich vertikal gerendert wird.

## Beispiele

Während der Typ `number` es Benutzern ermöglicht, eine Zahl einzugeben, wobei optionale Einschränkungen erzwingen, dass ihr Wert zwischen einem Mindest- und Höchstwert liegt, müssen sie dabei einen bestimmten Wert eingeben. Der Eingabetyp `range` ermöglicht es Ihnen, den Benutzer in Fällen nach einem Wert zu fragen, in denen ihm der ausgewählte spezifische numerische Wert möglicherweise weder wichtig noch bekannt ist.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbkonfigurationssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spielkonfigurationssteuerungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße und Ähnliches.
- Passwortlänge für von einem Passwortmanager generierte Passwörter.

Als Faustregel gilt: Wenn der Benutzer wahrscheinlich eher am Prozentsatz der Distanz zwischen Mindest- und Höchstwert als an der tatsächlichen Zahl selbst interessiert ist, ist eine Bereichseingabe ein ausgezeichneter Kandidat. Bei einer Lautstärkesteuerung einer Stereoanlage zu Hause denken Benutzer beispielsweise typischerweise „Lautstärke auf die Hälfte des Maximums einstellen“ statt „Lautstärke auf 0,5 einstellen“.

### Angeben von Minimum und Maximum

Standardmäßig beträgt das Minimum 0 und das Maximum 100. Wenn das nicht Ihren Anforderungen entspricht, können Sie leicht andere Grenzen angeben, indem Sie die Werte der Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) ändern. Diese können beliebige Gleitkommawerte sein.

Um den Benutzer beispielsweise nach einem Wert zwischen -10 und 10 zu fragen, können Sie Folgendes verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Granularität des Werts

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine ganze Zahl ist. Um die Granularität zu steuern, können Sie das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) ändern. Wenn Sie beispielsweise einen Wert benötigen, der in Schritten von 0,5 zwischen 5 und 10 liegt, sollten Sie den Wert von `step` auf 0.5 setzen:

#### Festlegen des step-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Setzen von step auf `any`

Wenn Sie jeden Wert unabhängig davon akzeptieren möchten, wie viele Dezimalstellen er hat, können Sie für das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) den Wert `any` angeben:

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

Dieses Beispiel ermöglicht es dem Benutzer, einen beliebigen Wert zwischen 0 und π auszuwählen, ohne Einschränkung des Nachkommateils des ausgewählten Werts. JavaScript wird verwendet, um zu zeigen, wie sich der Wert ändert, während der Benutzer mit dem Bereich interagiert.

### Hinzufügen von Teilstrichen

Um einem Bereichssteuerelement Teilstriche hinzuzufügen, schließen Sie das Attribut `list` ein und geben ihm die `id` eines {{HTMLElement("datalist")}}-Elements, das eine Reihe von Teilstrichen auf dem Steuerelement definiert. Jeder Punkt wird mithilfe eines {{HTMLElement("option")}}-Elements dargestellt, dessen [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Bereichswert gesetzt ist, bei dem eine Markierung gezeichnet werden soll.

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

### Verwenden derselben datalist für mehrere Bereichssteuerelemente

Um zu vermeiden, dass Sie Code wiederholen, können Sie dasselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie die [Beschriftungen anzeigen](#hinzufügen_von_beschriftungen) möchten, wie im folgenden Beispiel, benötigen Sie für jede Bereichseingabe eine `datalist`.

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

Sie können Teilstriche beschriften, indem Sie den `<option>`-Elementen `label`-Attribute geben. Der Inhalt der Beschriftung wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Beschriftungen anzuzeigen und korrekt zu positionieren. Hier ist eine Möglichkeit dafür.

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

### Erstellen vertikaler Bereichssteuerelemente

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Reglerknopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, bei dem der Reglerknopf nach oben und unten gleitet, setzen Sie die Eigenschaft {{cssxref("writing-mode")}} auf einen der Werte `vertical-rl` oder `vertical-lr`:

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

Sie können außerdem die CSS-Eigenschaft {{cssxref('appearance')}} auf den nicht standardmäßigen Wert `slider-vertical` setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardmäßige Attribut `orient="vertical"` einfügen, um ältere Versionen von Firefox zu unterstützen.

Beispiele finden Sie unter [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der die Stringdarstellung
        des ausgewählten numerischen Werts enthält; verwenden Sie
        [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber),
        um den Wert als Zahl abzurufen.
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
- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Gestalten des range-Elements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
