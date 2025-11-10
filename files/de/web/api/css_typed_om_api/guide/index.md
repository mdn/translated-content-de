---
title: Verwenden des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** präsentiert CSS-Werte als typisierte JavaScript-Objekte, um deren effiziente Manipulation zu ermöglichen.

Das Umwandeln von [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)-Wertzeichenfolgen in sinnvoll typisierte JavaScript-Darstellungen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann einen erheblichen Performance-Overhead verursachen.

Das CSS Typed OM macht die Manipulation von CSS logischer und effizienter, indem es Objektfunktionen (anstatt CSSOM-Stringmanipulation), den Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte bereitstellt.

Dieser Artikel bietet eine Einführung in alle seine Hauptfunktionen.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte zugreifen – einschließlich benutzerdefinierter Eigenschaften –, die ein Element beeinflussen. Lassen Sie uns sehen, wie das funktioniert, indem wir unser erstes Beispiel erstellen, das [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) erkundet.

### Alle Eigenschaften und Werte abrufen

#### HTML

Wir beginnen mit etwas HTML: einem Absatz mit einem Link sowie einer Definitionsliste, zu der wir alle CSS-Eigenschafts/Wert-Paare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren ungestylten Link zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte zurückzugeben, die den Link mithilfe von `computedStyleMap()` beeinflussen.

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

Die `computedStyleMap()`-Methode gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück, das die [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)-Eigenschaft enthält, welche anzeigt, wie viele Eigenschaften sich in der Map befinden. Wir iterieren durch die Style-Map und erstellen ein [`<dt>`](/de/docs/Web/HTML/Reference/Elements/dt) und ein [`<dd>`](/de/docs/Web/HTML/Reference/Elements/dd) für jede Eigenschaft und jeden Wert.

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Haben Sie bemerkt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Aktualisieren Sie den ersten `document.querySelector`-Aufruf, um statt der {{htmlelement("a")}} das {{htmlelement("p")}} auszuwählen. Sie werden einen Unterschied in den standardmäßig berechneten Werten von [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top) und [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom) feststellen.

### .get() Methode / benutzerdefinierte Eigenschaften

Aktualisieren wir unser Beispiel, um nur ein paar Eigenschaften und Werte abzurufen. Beginnen wir mit dem Hinzufügen einiger CSS-Stile zu unserem Beispiel, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array von interessanten Eigenschaften und verwenden die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get), um jeden ihrer Werte zu erhalten:

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

Wir haben {{cssxref('border-left-color')}} aufgenommen, um zu zeigen, dass, wenn wir alle Eigenschaften aufgenommen hätten, jeder Wert, der auf [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value) standardmäßig festgelegt ist (einschließlich {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, usw.), `rgb(255 0 0)` zurückgeben würde. Der Link hat `font-weight: bold;` von den Absatzstilen geerbt und zeigt es als `font-weight: 700`. Benutzerdefinierte Eigenschaften, wie unser `--color: red`, sind Eigenschaften. Daher sind sie über `get()` zugänglich.

Sie werden feststellen, dass benutzerdefinierte Eigenschaften den Wert so beibehalten, wie er im Stylesheet geschrieben wurde, während berechnete Stile als der berechnete Wert angezeigt werden – {{cssxref('color')}} wurde als ein [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value) Wert aufgelistet und der zurückgegebene Wert von {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) und das `bold` Schlüsselwort verwenden.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM besteht darin, dass Werte von Einheiten getrennt sind; das Parsen und Verketteten von String-Werten könnte der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Style-Map hat einen Wert. Wenn der Wert ein Schlüsselwort ist, ist das zurückgegebene Objekt ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue). Wenn der Wert numerisch ist, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Schlüsselwörter wie `inherit`, `initial`, `unset` und andere Zeichenfolgen definiert, die Sie nicht in Anführungszeichen setzen, wie `auto` und `grid`. Diese Unterklasse gibt Ihnen eine `value`-Eigenschaft über [`cssKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value).

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitentyp ist. Es ist eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Sie wird mit zwei Eigenschaften zurückgegeben: einem `value` und einer `unit`. Mit diesem Typ können wir auf den numerischen Wert — [`cssUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value) — und seine Einheit — [`cssUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit) zugreifen.

Lassen Sie uns einen einfachen Absatz schreiben, keine Stile anwenden und einige seiner CSS-Eigenschaften inspizieren, indem wir eine Tabelle mit Einheit und Wert zurückgeben:

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

Für jede interessante Eigenschaft listen wir den Namen der Eigenschaft auf, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, listen wir den Einheitstyp auf, den wir mit `.get(propertyName).unit` abrufen.

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

Für diejenigen, die einen nicht unterstützenden Browser verwenden, sollte die obige Ausgabe ungefähr so aussehen:

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

Sie werden feststellen, dass die Einheit {{cssxref('&lt;length&gt;')}} als `px` zurückgegeben wird, die Einheit {{cssxref('&lt;percentage&gt;')}} als `percent`, die Einheit {{cssxref('&lt;time&gt;')}} als `s` für 'Sekunden' und die einheitenlose Einheit {{cssxref('&lt;number&gt;')}} als `number`.

Wir haben keine {{cssxref('width')}} oder {{cssxref('height')}} für den Absatz deklariert, die beide auf `auto` standardmäßig festgelegt sind und daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) anstelle eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben. `CSSKeywordValue`-Werte haben keine Einheitseigenschaft, daher gibt unser `get().unit` in diesen Fällen `undefined` zurück.

Wären `width` oder `height` als \<length> oder \<percent> definiert, wäre die [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Einheit entsprechend `px` oder `percent` gewesen.

Es gibt andere verfügbare Typen:

- Ein [`<image>`](/de/docs/Web/CSS/Reference/Values/image) gibt ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) würde ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurückgeben.
- Ein {{cssxref('transform')}} gibt ein `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) gibt ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können ein `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Das `CSSStyleValue`-Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller durch die Typed OM API zugänglichen CSS-Werte, einschließlich [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Es hat zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Wir können `CSSUnparsedValue`-Objektinstanzen mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Untersuchen wir ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`-Funktionen und anderen Features. Wir betrachten, welche Typen sie haben, indem wir kurze JavaScript-Snippets verwenden, die an [`console.log()`](/de/docs/Web/API/console/log_static) ausgeben:

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

Fügen wir die Klasse zu einem Button hinzu (einem Button, der nichts tut).

```html
<button>Styled Button</button>
```

```html hidden
<p>
  There is nothing to see here. Please open your browser console to see the
  output!
</p>
```

Wir erfassen unsere `StylePropertyMapReadOnly` mit dem folgenden JavaScript:

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

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie den Leerraum vor `1.2rem`. Um eine Einheit und einen Wert zu erhalten, benötigen wir ein `CSSUnitValue`, das wir mittels der Methode `CSSStyleValue.parse()` auf dem `CSSUnparsedValue` abrufen können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) hinzugefügt, um Größenänderungen zu ermöglichen. In unserem CSS haben wir `width: calc(30% + 20px);`, welches eine [`calc()`](/de/docs/Web/CSS/Reference/Values/calc)-Funktion ist, um die Breite zu definieren.

Wenn wir die `width` abrufen, wird ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgegeben. [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit 2 `CSSUnitValues`.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

Das [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) ermöglicht auch die Transformation. In unserem CSS haben wir `transform: scale(0.95);`, welches eine {{cssxref('transform')}}-Funktion ist.

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

Wenn wir die `transform`-Eigenschaft abrufen, erhalten wir einen [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue). Wir können die Länge (oder Anzahl) der Transformationsfunktionen mit der `length`-Eigenschaft abfragen.

Da wir eine Länge von `1` haben, die eine einzelne Transformationsfunktion repräsentiert, loggen wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wir erhalten `CSSUnitValues`, wenn wir die `x`, `y` und `z` Skalierung abfragen. Die schreibgeschützte `CSSScale.is2D`-Eigenschaft ist in diesem Szenario `true`.

Hätten wir `translate()`, `skew()` und `rotate()` Transformationsfunktionen hinzugefügt, wäre die Länge `4` gewesen, jede mit ihren eigenen `x`, `y`, `z` Werten und jeweils mit einer `.is2D`-Eigenschaft. Hätten wir zum Beispiel `transform: translate3d(1px, 1px, 3px)` inkludiert, hätte `.get('transform')` ein `CSSTranslate` mit `CSSUnitValues` für `x`, `y` und `z` zurückgegeben, und die schreibgeschützte `.is2D`-Eigenschaft wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")
```

Wenn wir die `'background-image'` abrufen, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Obwohl wir die CSS {{cssxref('background')}}-Kurzform-Eigenschaft verwendet haben, zeigt die geerbte Methode {{jsxref("Object/toString", "Object.prototype.toString()")}}, dass wir nur das Bild zurückgegeben haben, `'url("magic-wand.png")'`.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist – dies wird auch dann zurückgegeben, wenn der ursprüngliche `url()`-Wert relativ war. Wäre das Hintergrundbild ein Verlauf oder mehrere Hintergrundbilder gewesen, hätte `.get('background-image')` ein `CSSStyleValue` zurückgegeben. Das `CSSImageValue` wird nur dann zurückgegeben, wenn es ein einzelnes Bild gibt und nur wenn diese einzelne Bilddeklaration eine URL ist.

Zum Schluss fügen wir alles in einem Live-Beispiel zusammen. Denken Sie daran, die Konsole Ihres Browsers zu verwenden, um die Ausgabe zu inspizieren.

{{EmbedLiveSample("CSSStyleValue", 120, 300)}}

## Zusammenfassung

Das sollte Ihnen den Einstieg in das CSS Typed OM erleichtern. Schauen Sie sich alle [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Schnittstellen an, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
