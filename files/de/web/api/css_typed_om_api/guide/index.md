---
title: Verwendung des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte bereit, um eine performante Manipulation zu ermöglichen.

Das Konvertieren von [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)-Wertestrings in bedeutungsvoll typisierte JavaScript-Darstellungen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann einen erheblichen Performance-Overhead verursachen.

Das CSS Typed OM macht die CSS-Manipulation logischer und performanter, indem es Objektfunktionen bereitstellt (anstatt die Manipulation von CSSOM-Strings), sowie Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte erlaubt.

Dieser Artikel bietet eine Einführung in alle Hauptfunktionen.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte zugreifen – einschließlich benutzerdefinierter Eigenschaften –, die ein Element beeinflussen. Schauen wir uns an, wie dies funktioniert, indem wir unser erstes Beispiel erstellen, das [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) untersucht.

### Abrufen aller Eigenschaften und Werte

#### HTML

Wir beginnen mit ein wenig HTML: einem Absatz mit einem Link sowie einer Definitionsliste, zu der wir alle CSS-Eigenschafts-/Wert-Paare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren ungestylten Link zu erfassen und eine Definitionsliste aller standardmäßigen CSS-Eigenschaftswerte, die den Link beeinflussen, mit `computedStyleMap()` zurückzugeben.

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

Die `computedStyleMap()`-Methode gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück, das die [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)-Eigenschaft enthält, welche angibt, wie viele Eigenschaften sich in der Map befinden. Wir iterieren durch die Style-Map, erstellen ein [`<dt>`](/de/docs/Web/HTML/Element/dt) und ein [`<dd>`](/de/docs/Web/HTML/Element/dd) für jede Eigenschaft und jeden Wert.

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), wird eine Liste aller CSS-Eigenschaften und Werte angezeigt. In anderen Browsern sehen Sie lediglich einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hat? Ändern Sie den ersten `document.querySelector`-Aufruf, um das {{htmlelement("p")}} anstelle des {{htmlelement("a")}} auszuwählen. Sie werden einen Unterschied in den standardmäßig berechneten Werten für [`margin-top`](/de/docs/Web/CSS/margin-top) und [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) feststellen.

### .get() Methode / benutzerdefinierte Eigenschaften

Lassen Sie uns unser Beispiel so aktualisieren, dass nur einige wenige Eigenschaften und Werte abgerufen werden. Beginnen wir mit der Hinzufügung einiger CSS-Regeln zu unserem Beispiel, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array von interessierenden Eigenschaften und verwenden die [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)-Methode, um jede ihrer Werte abzurufen:

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

Wir haben {{cssxref('border-left-color')}} eingeschlossen, um zu demonstrieren, dass für alle Werte, die auf [`currentcolor`](/de/docs/Web/CSS/color_value) standardmäßig festgelegt sind (wie z. B. {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, usw.), `rgb(255 0 0)` zurückgegeben würde. Der Link hat `font-weight: bold;` von den Absatzstilen geerbt und listet dies als `font-weight: 700`. Benutzerdefinierte Eigenschaften, wie unsere `--color: red`, sind ebenfalls Eigenschaften und daher über `get()` zugänglich.

Sie werden feststellen, dass benutzerdefinierte Eigenschaften den Wert beibehalten, wie er im Stylesheet geschrieben wurde, während berechnete Stile als berechneter Wert angezeigt werden – {{cssxref('color')}} wird als [`rgb()`](/de/docs/Web/CSS/color_value)-Wert angezeigt und der zurückgegebene {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/named-color) und das Schlüsselwort `bold` verwendet haben.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM liegt darin, dass Werte getrennt von Einheiten sind; das Parsen und Konkatenieren von Stringwerten könnte der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Style-Map hat einen Wert. Ist der Wert ein Schlüsselwort, wird ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Objekt zurückgegeben. Ist der Wert numerisch, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Schlüsselwörter wie `inherit`, `initial`, `unset` und andere Nicht-quote-Zeichenfolgen wie `auto` und `grid` definiert. Diese Unterklasse gibt eine `value`-Eigenschaft über [`cssKeywordValue.value`](/de/docs/Web/API/CssKeywordValue/value) zurück.

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitentyp ist. Es handelt sich um eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Sie wird mit zwei Eigenschaften zurückgegeben: einem `value` und einer `unit`. Mit diesem Typ können wir auf den numerischen Wert zugreifen — [`cssUnitValue.value`](/de/docs/Web/API/CssUnitValue/value) — und auf seine Einheit — [`cssUnitValue.unit`](/de/docs/Web/API/CssUnitValue/unit).

Schreiben wir einen einfachen Absatz, wenden keine Stile an und untersuchen einige seiner CSS-Eigenschaften, indem wir eine Tabelle mit Einheit und Wert zurückgeben:

```html
<p>
   This is a paragraph with some content. Open up this example in CodePen or
   JSFiddle, and change some features. Try adding some CSS, such as a width
   for this paragraph, or adding a CSS property to the ofInterest array.
</p>
<table id="regurgitation">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Unit</th>
    </tr>
</table>
```

Für jede interessierende Eigenschaft listen wir den Namen der Eigenschaft auf, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und, wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, listen wir den Einheitstyp auf, den wir mit `.get(propertyName).unit` abrufen.

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

Für diejenigen von Ihnen, die einen Browser ohne Unterstützung verwenden, sollte die obige Ausgabe so aussehen:

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

Sie werden feststellen, dass die Einheit {{cssxref('&lt;length&gt;')}} als `px` zurückgegeben wird, {{cssxref('&lt;percentage&gt;')}} als `percent`, {{cssxref('&lt;time&gt;')}} als `s` für 'Sekunden' und die einheitslose Einheit {{cssxref('&lt;number&gt;')}} als `number`.

Wir haben keine {{cssxref('width')}} oder {{cssxref('height')}} für den Absatz deklariert, die beide standardmäßig `auto` sind und daher einen [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) anstelle eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgeben. `CSSKeywordValue`s haben keine Einheit-Eigenschaft, sodass in diesen Fällen unser `get().unit` `undefined` zurückgibt.

Wären `width` oder `height` in einem `<length>` oder `<percent>` definiert, wäre die Einheit des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) `px` bzw. `percent`.

Es gibt weitere verfügbare Typen:

- Ein [`<image>`](/de/docs/Web/CSS/image) gibt einen [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein [`<color>`](/de/docs/Web/CSS/color_value) gibt einen [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurück.
- Ein {{cssxref('transform')}} gibt einen `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) gibt einen [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können einen `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Die `CSSStyleValue`-Schnittstelle des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind, einschließlich [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Sie verfügt über zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` einen [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Wir können Instanzen von `CSSUnparsedValue`-Objekten mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Lassen Sie uns ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`-Funktionen und anderen Features untersuchen. Wir werfen einen Blick darauf, welche Typen sie haben, indem wir kurze JavaScript-Ausschnitte verwenden, die in [`console.log()`](/de/docs/Web/API/Console/log_static) ausgeben:

```css
:root {
  --mainColor: hsl(198 43% 42%);
  --black: hsl(0 0% 16%);
  --white: hsl(0 0% 97%);
  --unit: 1.2rem;
}

button {
  --mainColor: hsl(198 100% 66%);
  display: inline-block;
  padding: var(--unit) calc(var(--unit) * 2);
  width: calc(30% + 20px);
  background: no-repeat 5% center url(magic-wand.png) var(--mainColor);
  border: 4px solid var(--mainColor);
  border-radius: 2px;
  font-size: calc(var(--unit) * 2);
  color: var(--white);
  cursor: pointer;
  transform: scale(0.95);
}
```

Fügen wir die Klasse einem Button (einem Button, der nichts tut) hinzu.

```html
<button>Styled Button</button>
```

```js hidden
// get the element
const button = document.querySelector("button");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// CSSMathSum Example
let btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'

// CSSTransformValue
let transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true

// CSSImageValue
let bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")

// CSSUnparsedValue
let unit = allComputedStyles.get("--unit");

console.log(unit);

let parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit);
console.log(parsedUnit.unit);
console.log(parsedUnit.value);
```

Wir rufen unsere `StylePropertyMapReadOnly` mit folgendem JavaScript ab:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

Der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie das Leerzeichen vor dem `1.2rem`. Um Einheit und Wert zu erhalten, benötigen wir einen `CSSUnitValue`, den wir mit der Methode `CSSStyleValue.parse()` auf der `CSSUnparsedValue` abrufen können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das [`<button>`](/de/docs/Web/HTML/Element/button)-Element standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) hinzugefügt, um Größenänderungen zu ermöglichen. In unserem CSS haben wir `width: calc(30% + 20px);`, was eine [`calc()`](/de/docs/Web/CSS/calc)-Funktion zur Definition der Breite ist.

Wenn wir `get()` für die `width` aufrufen, erhalten wir einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurück. [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit 2 `CSSUnitValues`.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

Das [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) ermöglicht auch Transformationen. In unserem CSS haben wir `transform: scale(0.95);`, was eine {{cssxref('transform')}}-Funktion ist.

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

Wenn wir `get()` für die `transform`-Eigenschaft aufrufen, erhalten wir einen [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue). Wir können die Länge (oder Anzahl) der Transformationsfunktionen mit der `length`-Eigenschaft abfragen.

Da wir eine Länge von `1` haben, die für eine einzelne Transformationsfunktion steht, protokollieren wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wir erhalten `CSSUnitValues`, wenn wir die `x`-, `y`- und `z`-Skalierung abfragen. Die schreibgeschützte Eigenschaft `CSSScale.is2D` ist in diesem Szenario `true`.

Hätten wir `translate()`, `skew()` und `rotate()`-Transformationsfunktionen hinzugefügt, wäre die Länge `4`, jede mit ihren eigenen `x`-, `y`-, `z`-Werten und jeder mit einer `.is2D`-Eigenschaft. Beispielsweise hätte `transform: translate3d(1px, 1px, 3px)` in `.get('transform')` einen `CSSTranslate` mit `CSSUnitValues` für `x`, `y` und `z` zurückgegeben, und die schreibgeschützte `.is2D`-Eigenschaft wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")
```

Wenn wir `get()` für `'background-image'` aufrufen, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Während wir die CSS-{{cssxref('background')}}-Kurzschreibweise verwendet haben, zeigt die vererbte {{jsxref("Object/toString", "Object.prototype.toString()")}}-Methode, dass wir nur das Bild `'url("magic-wand.png")'` zurückgegeben haben.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist – dies wird auch zurückgegeben, wenn der ursprüngliche `url()`-Wert relativ war. Hätte das Hintergrundbild ein Gradient oder mehrere Hintergrundbilder gehabt, hätte `.get('background-image')` einen `CSSStyleValue` zurückgegeben. Der `CSSImageValue` wird nur dann zurückgegeben, wenn ein einziges Bild vorhanden ist und wenn diese einzelne Bilddeklaration eine URL ist.

### Zusammenfassung

Dies sollte Ihnen einen Start zur Verständnis des CSS Typed OM geben. Werfen Sie einen Blick auf alle [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Schnittstellen, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
