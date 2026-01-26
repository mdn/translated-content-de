---
title: Verwenden des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte bereit, um deren effiziente Manipulation zu ermöglichen.

Die Umwandlung von [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)-Wertzeichenfolgen in bedeutungsvoll typisierte JavaScript-Darstellungen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann zu einem erheblichen Leistungsaufwand führen.

Das CSS Typed OM macht die CSS-Manipulation logischer und leistungsfähiger, indem es Objektfunktionen (anstatt die Manipulation von CSSOM-Zeichenfolgen) bereitstellt, und bietet Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte.

Dieser Artikel bietet eine Einführung in alle Hauptfunktionen.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte — einschließlich benutzerdefinierter Eigenschaften — zugreifen, die ein Element beeinflussen. Sehen wir uns an, wie dies funktioniert, indem wir unser erstes Beispiel erstellen, das [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) untersucht.

### Abrufen aller Eigenschaften und Werte

#### HTML

Wir beginnen mit etwas HTML: ein Absatz mit einem Link sowie einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wertepaare hinzufügen.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren nicht gestylten Link zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte, die den Link beeinflussen, mithilfe von `computedStyleMap()` zurückzugeben.

```js
// Get the element
const myElement = document.querySelector("a");

// Get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const defaultComputedStyles = myElement.computedStyleMap();

// Iterate through the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of defaultComputedStyles) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

Die `computedStyleMap()`-Methode gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück, das die [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)-Eigenschaft enthält, die angibt, wie viele Eigenschaften in der Karte vorhanden sind. Wir iterieren durch die Stilkarte und erstellen einen [`<dt>`](/de/docs/Web/HTML/Reference/Elements/dt) und [`<dd>`](/de/docs/Web/HTML/Reference/Elements/dd) für jede Eigenschaft und jeden Wert.

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Haben Sie realisiert, wie viele Standard-CSS-Eigenschaften ein Link besitzt? Aktualisieren Sie den ersten `document.querySelector`-Aufruf, um das {{htmlelement("p")}} anstelle des {{htmlelement("a")}} auszuwählen. Sie werden einen Unterschied in den {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} Standardberechnungswerten bemerken.

### .get() Methode / benutzerdefinierte Eigenschaften

Lassen Sie uns unser Beispiel aktualisieren, um nur einige wenige Eigenschaften und Werte abzurufen. Beginnen wir damit, etwas CSS zu unserem Beispiel hinzuzufügen, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array von interessanten Eigenschaften und verwenden die [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)-Methode, um jeden ihrer Werte zu erhalten:

```html hidden
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

```js
// Get the element
const myElement = document.querySelector("a");

// Get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// Array of properties we're interested in
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// iterate through our properties of interest
for (const value of ofInterest) {
  // Properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(value));
  stylesList.appendChild(cssProperty);

  // Values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(allComputedStyles.get(value)));
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample(".get_method_custom_properties", 120, 300)}}

Wir haben {{cssxref('border-left-color')}} aufgenommen, um zu zeigen, dass, hätten wir alle Eigenschaften aufgenommen, jeder Wert, der auf [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value) zurückgesetzt wird (einschließlich {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, usw.) `rgb(255 0 0)` zurückgeben würde. Der Link hat `font-weight: bold;` von den Absatzstilen geerbt und gibt ihn als `font-weight: 700` zurück. Benutzerdefinierte Eigenschaften, wie unser `--color: red`, sind Eigenschaften. Daher sind sie über `get()` zugänglich.

Sie werden feststellen, dass benutzerdefinierte Eigenschaften den Wert so beibehalten, wie er im Stylesheet geschrieben ist, während berechnete Stile als berechneter Wert angezeigt werden — {{cssxref('color')}} wurde als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert aufgeführt und der zurückgegebene {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) und das Schlüsselwort `bold` verwendet haben.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM ist, dass Werte von Einheiten getrennt sind; das Parsen und Verketten von Zeichenfolgenwerten könnte der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Stilkarte hat einen Wert. Ist der Wert ein Schlüsselwort, wird ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) zurückgegeben. Ist der Wert numerisch, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Schlüsselwörter wie `inherit`, `initial`, `unset` und andere Zeichenfolgen definiert, die Sie nicht zitieren, wie `auto` und `grid`. Diese Unterklasse bietet eine `value`-Eigenschaft über [`cssKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value).

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitstyp ist. Es ist eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Es wird mit zwei Eigenschaften zurückgegeben: einem `value` und einer `unit`. Mit diesem Typ können wir auf den numerischen Wert — [`cssUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value) — und seine Einheit — [`cssUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit) — zugreifen.

Lassen Sie uns einen einfachen Absatz schreiben, keine Stile anwenden und einige seiner CSS-Eigenschaften inspizieren, indem wir eine Tabelle mit der Einheit und dem Wert zurückgeben:

```html
<p>
  This is a paragraph with some content. Open up this example in CodePen or
  JSFiddle, and change some features. Try adding some CSS, such as a width for
  this paragraph, or adding a CSS property to the ofInterest array.
</p>
<table id="regurgitation">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Unit</th>
    </tr>
  </thead>
</table>
```

Für jede interessante Eigenschaft listen wir den Namen der Eigenschaft auf, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, listen wir die Einheit auf, die wir mit `.get(propertyName).unit` abrufen.

```js
// Get the element we're inspecting
const myElement = document.querySelector("p");

// Get the table we'll be populating
const stylesTable = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// Array of properties we're interested in
const ofInterest = [
  "padding-top",
  "margin-bottom",
  "font-size",
  "font-stretch",
  "animation-duration",
  "animation-iteration-count",
  "width",
  "height",
];

// Iterate through our properties of interest
for (const value of ofInterest) {
  // Create a row
  const row = document.createElement("tr");

  // Add the name of the property
  const cssProperty = document.createElement("td");
  cssProperty.appendChild(document.createTextNode(value));
  row.appendChild(cssProperty);

  // Add the unitless value
  const cssValue = document.createElement("td");

  // Shrink long floats to 1 decimal point
  let propVal = allComputedStyles.get(value).value;
  propVal = propVal % 1 ? propVal.toFixed(1) : propVal;
  cssValue.appendChild(document.createTextNode(propVal));
  row.appendChild(cssValue);

  // Add the type of unit
  const cssUnit = document.createElement("td");
  cssUnit.appendChild(
    document.createTextNode(allComputedStyles.get(value).unit),
  );
  row.appendChild(cssUnit);

  // Add the row to the table
  stylesTable.appendChild(row);
}
```

{{EmbedLiveSample("CSSUnitValue_and_CSSKeywordValue", 120, 300)}}

Für diejenigen unter Ihnen, die einen nicht unterstützenden Browser verwenden, sollte die obige Ausgabe so aussehen:

| Eigenschaft                              | Wert | Einheit     |
| ---------------------------------------- | ---- | ----------- |
| {{cssxref("padding-top")}}               | 0    | `px`        |
| {{cssxref("margin-bottom")}}             | 16   | `px`        |
| {{cssxref("font-size")}}                 | 16   | `px`        |
| {{cssxref("font-stretch")}}              | 100  | `%`         |
| {{cssxref("animation-duration")}}        | 0    | `px`        |
| {{cssxref("animation-iteration-count")}} | 1    | _number_    |
| {{cssxref("width")}}                     | auto | _undefined_ |
| {{cssxref("height")}}                    | auto | _undefined_ |

Sie werden feststellen, dass die Einheit {{cssxref('&lt;length&gt;')}} als `px` zurückgegeben wird, die Einheit {{cssxref('&lt;percentage&gt;')}} als `percent`, die Einheit {{cssxref('&lt;time&gt;')}} als `s` für 'Sekunden' und die einheitlose Einheit {{cssxref('&lt;number&gt;')}} als `number`.

Wir haben keine {{cssxref('width')}} oder {{cssxref('height')}} für den Absatz deklariert, die beide auf `auto` voreingestellt sind und daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) anstelle eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgeben. `CSSKeywordValue`s haben keine Einheitseigenschaft, sodass in diesen Fällen unser `get().unit` `undefined` zurückgibt.

Wären die `width` oder `height` in einem `<length>` oder `<percent>` definiert gewesen, wäre die Einheit des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) `px` bzw. `percent` gewesen.

Es gibt weitere verfügbare Typen:

- Ein {{cssxref("image")}} gibt ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein {{cssxref("&lt;color&gt;")}} würde ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurückgeben.
- Ein {{cssxref('transform')}} gibt einen `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) gibt ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können ein `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Das `CSSStyleValue`-Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind, einschließlich [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Es hat zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Wir können `CSSUnparsedValue`-Objektinstanzen mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Lassen Sie uns ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`s und anderen Features betrachten. Wir werden uns ansehen, welche Typen sie haben, indem wir kurze JavaScript-Schnipsel verwenden, die an [`console.log()`](/de/docs/Web/API/console/log_static) ausgegeben werden:

```css
:root {
  --main-color: hsl(198 43% 42%);
  --black: hsl(0 0% 16%);
  --white: hsl(0 0% 97%);
  --unit: 1.2rem;
}

button {
  --main-color: hsl(198 100% 66%);
  display: inline-block;
  padding: var(--unit) calc(var(--unit) * 2);
  width: calc(30% + 20px);
  background: no-repeat 5% center url("magic-wand.png") var(--main-color);
  border: 4px solid var(--main-color);
  border-radius: 2px;
  font-size: calc(var(--unit) * 2);
  color: var(--white);
  cursor: pointer;
  transform: scale(0.95);
}
```

Lassen Sie uns die Klasse zu einem Button hinzufügen (ein Button, der nichts tut).

```html
<button>Styled Button</button>
```

```html hidden
<p>
  There is nothing to see here. Please open your browser console to see the
  output!
</p>
```

Wir erhalten unsere `StylePropertyMapReadOnly` mit dem folgenden JavaScript:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

Das [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft des Typs `CSSUnparsedValue` zurückgegeben. Beachten Sie den Leerraum vor dem `1.2rem`. Um eine Einheit und einen Wert zu erhalten, benötigen wir ein `CSSUnitValue`, das wir mit der `CSSStyleValue.parse()`-Methode auf dem `CSSUnparsedValue` erhalten können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) hinzugefügt, um die Größenänderung zu ermöglichen. In unserem CSS haben wir `width: calc(30% + 20px);`, was eine {{cssxref("calc()")}} Funktion zur Definition der Breite ist.

Wenn wir die `width` bekommen, wird eine [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgegeben. [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit 2 `CSSUnitValues`.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

Das [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) ermöglicht auch Transformationen. In unserem CSS haben wir `transform: scale(0.95);` verwendet, was eine {{cssxref('transform')}} Funktion ist.

```js
const transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true
```

Wenn wir die `transform`-Eigenschaft abrufen, erhalten wir ein [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue). Wir können die Länge (oder Anzahl) der Transformationsfunktionen mit der `length`-Eigenschaft abfragen.

Da wir eine Länge von `1` haben, was eine einzelne Transformationsfunktion darstellt, protokollieren wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wir erhalten `CSSUnitValues`, wenn wir die `x`, `y` und `z` Skalierungen abfragen. Die schreibgeschützte `CSSScale.is2D` Eigenschaft ist in diesem Szenario `true`.

Hätten wir `translate()`, `skew()` und `rotate()` Transformationsfunktionen hinzugefügt, wäre die Länge `4` gewesen, jede mit ihren eigenen `x`, `y`, `z` Werten, und jede mit einer `.is2D` Eigenschaft. Hätten wir zum Beispiel `transform: translate3d(1px, 1px, 3px)` eingeschlossen, hätte `.get('transform')` ein `CSSTranslate` mit `CSSUnitValues` für `x`, `y`, und `z` zurückgegeben, und die schreibgeschützte `.is2D` Eigenschaft wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")
```

Wenn wir die `'background-image'` abrufen, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Während wir die CSS {{cssxref('background')}} Kurzform verwendet haben, zeigt die geerbte {{jsxref("Object/toString", "Object.prototype.toString()")}} Methode, dass wir nur das Bild zurückgegeben haben, `'url("magic-wand.png")'`.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist — dies wird zurückgegeben, selbst wenn der ursprüngliche `url()` Wert relativ war. Hätte das Hintergrundbild einen Verlauf oder mehrere Hintergrundbilder, hätte `.get('background-image')` ein `CSSStyleValue` zurückgegeben. Der `CSSImageValue` wird nur zurückgegeben, wenn es ein einzelnes Bild ist, und nur wenn diese einzelne Bilddeklaration eine URL ist.

Schließlich setzen wir alles in einem Live-Beispiel zusammen. Denken Sie daran, die Konsole Ihres Browsers zu verwenden, um die Ausgabe zu überprüfen.

{{EmbedLiveSample("CSSStyleValue", 120, 300)}}

## Zusammenfassung

Dies sollte Ihnen den Einstieg in das Verständnis des CSS Typed OM erleichtern. Schauen Sie sich alle [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API) Schnittstellen an, um mehr zu erfahren.

## Siehe auch

- [Verwenden der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
