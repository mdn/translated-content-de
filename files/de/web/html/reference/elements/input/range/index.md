---
title: '`<input type="range">` HTML Attributwert'
short-title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`range`** lassen den Benutzer einen numerischen Wert angeben, der nicht kleiner als ein gegebener Wert und nicht größer als ein anderer gegebener Wert sein darf. Der genaue Wert wird jedoch nicht als wichtig angesehen. Dies wird typischerweise mit einem Schieberegler oder einem Drehregler dargestellt, anstatt eines Texteingabefeldes wie beim {{HTMLElement('input/number', 'number')}}-Eingabetyp.

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

Wenn der Browser des Benutzers den Typ `range` nicht unterstützt, wird er darauf zurückgreifen und ihn als `{{HTMLElement('input/text', 'text')}}`-Eingabe behandeln.

## Wert

Der Wert eines `<input type="range">`-Elements wird mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festgelegt, das eine Zeichenfolge akzeptiert, die die ausgewählte Zahl darstellt. Der Wert ist niemals eine leere Zeichenfolge (`""`). Der Standardwert liegt auf halbem Weg zwischen dem angegebenen Minimum und Maximum, es sei denn, das Maximum ist tatsächlich kleiner als das Minimum, in diesem Fall wird der Standardwert auf den Wert des `min`-Attributs gesetzt. Der Algorithmus zur Bestimmung des Standardwerts lautet:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Wenn versucht wird, den Wert unter das Minimum zu setzen, wird er auf das Minimum gesetzt. Ebenso führt ein Versuch, den Wert über das Maximum zu setzen, dazu, dass er auf das Maximum gesetzt wird.

### Validierung

Es gibt keine Musterüberprüfung, jedoch werden die folgenden Formen der automatischen Validierung durchgeführt:

- Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) auf etwas gesetzt ist, das nicht in eine gültige Gleitkommazahl umgewandelt werden kann, schlägt die Validierung fehl, weil die Eingabe fehlerhaft ist.
- Der Wert wird nicht kleiner als [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) sein. Der Standardwert ist 0.
- Der Wert wird nicht größer als [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) sein. Der Standardwert ist 100.
- Der Wert wird ein Vielfaches von [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sein. Der Standardwert ist 1.

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Bereichseingaben die folgenden Attribute.

> [!NOTE]
> Die folgenden Eingabeattribute gelten nicht für den Bereichs-Eingabetyp: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` und `src`. Jedes dieser Attribute, wenn sie eingeschlossen sind, werden ignoriert.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

Siehe das untenstehende Beispiel zum [Hinzufügen von Tick-Marken](#hinzufügen_von_tick-marken) für ein Beispiel, wie die Optionen auf einer Skala in unterstützten Browsern angezeigt werden.

### max

Der größte Wert im Bereich der erlaubten Werte. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Siehe das HTML-Attribut [`max`](/de/docs/Web/HTML/Reference/Attributes/max).

### min

Der kleinste Wert im Bereich der erlaubten Werte. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser Wert, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat das Eingabefeld keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributs sein. Siehe das HTML-Attribut [`min`](/de/docs/Web/HTML/Reference/Attributes/min).

> [!NOTE]
> Wenn die Werte `min` und `max` gleich sind oder der `max`-Wert niedriger als der `min`-Wert ist, kann der Benutzer nicht mit dem Bereich interagieren.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die ein ganzzahliges Vielfaches der Schrittbasis sind, sind gültig. Die Schrittbasis ist [`min`](#min), wenn angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0`, wenn keiner bereitgestellt wird.

Der Standardschrittwert für `step`-Eingaben ist `1`, wodurch nur Ganzzahlen eingegeben werden können—_es sei denn_, die Schrittbasis ist keine Ganzzahl.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt impliziert ist, und jeder Wert ist zulässig (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). Siehe das Beispiel [Festlegen des Schritts auf den Wert `any`](#setting_step_to_any), um zu sehen, wie dies in unterstützten Browsern funktioniert.

> [!NOTE]
> Wenn der vom Benutzer eingegebene Wert nicht der Schritt-Konfiguration entspricht, kann der {{Glossary("user_agent", "Benutzeragent")}} den Wert auf den nächstgelegenen gültigen Wert runden, wobei bevorzugt wird, Zahlen nach oben zu runden, wenn es zwei gleich nahe Optionen gibt.

## Nicht standardisierte Attribute

### orient

Ähnlich der nicht standardisierten CSS-Eigenschaft -moz-orient, die die {{htmlelement('progress')}}- und {{htmlelement('meter')}}-Elemente betrifft, definiert das `orient`-Attribut die Ausrichtung des Bereichsreglers. Werte sind `horizontal`, was bedeutet, dass der Bereich horizontal gerendert wird, und `vertical`, wo der Bereich vertikal gerendert wird.

## Beispiele

Während der `number`-Typ es Benutzern ermöglicht, eine Zahl mit optionalen Einschränkungen einzutragen, die ihren Wert zwischen einem Minimum und einem Maximum erzwingen, erfordert er dennoch, dass sie einen spezifischen Wert eingeben. Der `range`-Eingabetyp ermöglicht es Ihnen, den Benutzer nach einem Wert zu fragen, in Fällen, in denen der Benutzer sich möglicherweise nicht einmal darum kümmert—oder weiß—welcher spezifische numerische Wert ausgewählt ist.

Einige Beispiele für Situationen, in denen Bereichseingaben häufig verwendet werden:

- Audiosteuerungen wie Lautstärke und Balance oder Filtersteuerungen.
- Farbanpassungssteuerungen wie Farbkanäle, Transparenz, Helligkeit usw.
- Spieleinstellungen wie Schwierigkeitsgrad, Sichtweite, Weltgröße usw.
- Passwortlänge für vom Passwortmanager generierte Passwörter.

In der Regel ist ein Bereichseingabefeld dann eine gute Wahl, wenn der Benutzer eher am Prozentsatz der Entfernung zwischen Mindest- und Höchstwert als an der tatsächlichen Zahl selbst interessiert ist. Zum Beispiel denken Benutzer bei einem Lautstärkeregler eines Heimstereos typischerweise "Lautstärke auf halbem Weg bis zum Maximum einstellen", anstatt "Lautstärke auf 0.5 einstellen".

### Festlegen des Minimums und Maximums

Standardmäßig ist das Minimum 0 und das Maximum 100. Wenn das nicht Ihren Wünschen entspricht, können Sie leicht andere Grenzen festlegen, indem Sie die Werte der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und/oder [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute ändern. Diese können beliebige Gleitkommawerte sein.

Zum Beispiel, um den Benutzer nach einem Wert zwischen -10 und 10 zu fragen, können Sie Folgendes verwenden:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Festlegen der Granularität des Wertes

Standardmäßig beträgt die Granularität 1, was bedeutet, dass der Wert immer eine Ganzzahl ist. Um die Granularität zu steuern, können Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut ändern. Zum Beispiel, wenn Sie einen Wert auf halbem Weg zwischen 5 und 10 benötigen, sollten Sie den Wert von `step` auf 0,5 setzen:

#### Festlegen des Step-Attributs

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Setting_the_step_attribute", 600, 40)}}

#### Schritt auf `any` setzen

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

### Hinzufügen von Tick-Marken

Um Tick-Marken zu einem Bereichssteuerung hinzuzufügen, fügen Sie das `list`-Attribut hinzu, indem Sie ihm die `id` eines {{HTMLElement("datalist")}}-Elements geben, das eine Reihe von Tick-Marken auf der Steuerung definiert. Jeder Punkt wird mit einem {{HTMLElement("option")}}-Element dargestellt, wobei sein [`value`](/de/docs/Web/HTML/Reference/Elements/option#value) auf den Wert des Bereichs eingestellt ist, bei dem eine Markierung gezeichnet werden soll.

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

### Verwenden derselben Datalist für mehrere Bereichssteuerungen

Um das Wiederholen von Code zu vermeiden, können Sie dieselbe {{HTMLElement("datalist")}} für mehrere `<input type="range">`-Elemente und andere {{HTMLElement("input")}}-Typen wiederverwenden.

> [!NOTE]
> Wenn Sie auch [die Labels anzeigen](#hinzufügen_von_labels) möchten, wie im folgenden Beispiel, benötigen Sie eine `datalist` für jede Bereichseingabe.

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

### Hinzufügen von Labels

Sie können Tick-Marken durch das Hinzufügen von `label`-Attributen zu den `<option>`-Elementen kennzeichnen. Der Label-Inhalt wird jedoch standardmäßig nicht angezeigt. Sie können CSS verwenden, um die Labels anzuzeigen und sie korrekt zu positionieren. Hier ist eine Möglichkeit, wie Sie das tun könnten.

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

### Erstellung vertikaler Bereichssteuerungen

Standardmäßig rendern Browser Bereichseingaben als Schieberegler, bei denen der Knopf nach links und rechts gleitet.

Um einen vertikalen Bereich zu erstellen, in dem der Regler nach oben und unten gleitet, setzen Sie die {{cssxref("writing-mode")}}-Eigenschaft mit einem Wert von entweder `vertical-rl` oder `vertical-lr`:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Dies bewirkt, dass der Bereichsregler vertikal gerendert wird:

{{EmbedLiveSample("Creating vertical range controls", 200, 200)}}

Sie können auch die CSS-{{cssxref('appearance')}}-Eigenschaft auf den nicht standardisierten `slider-vertical`-Wert setzen, wenn Sie ältere Versionen von Chrome und Safari unterstützen möchten, und das nicht standardisierte `orient="vertical"`-Attribut hinzufügen, um ältere Versionen von Firefox zu unterstützen.

Siehe [Erstellung vertikaler Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) für Beispiele.

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
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) und [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Styling des Bereichselements](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
