---
title: Die Verwendung des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte bereit, um deren performante Manipulation zu ermöglichen.

Das Umwandeln von [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)-Wertzeichenketten in sinnvoll typisierte JavaScript-Darstellungen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann zu einem erheblichen Leistungsaufwand führen.

Das CSS Typed OM macht die Manipulation von CSS logischer und performanter, indem es Objekteigenschaften (anstatt der Manipulation von CSSOM-Zeichenketten) bereitstellt und Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte ermöglicht.

Dieser Artikel bietet eine Einführung in alle seine Hauptmerkmale.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte — einschließlich benutzerdefinierter Eigenschaften — zugreifen, die ein Element beeinflussen. Sehen wir uns an, wie dies funktioniert, indem wir unser erstes Beispiel erstellen, das [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) erkundet.

### Abrufen aller Eigenschaften und Werte

#### HTML

Wir beginnen mit etwas HTML: einem Absatz mit einem Link sowie einer Definitionsliste, der wir alle CSS-Eigenschafts-/Wertepaare hinzufügen.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren ungestylten Link zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte zurückzugeben, die den Link mit `computedStyleMap()` beeinflussen.

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

Die Methode `computedStyleMap()` gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück, das die Eigenschaft [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size) enthält, die angibt, wie viele Eigenschaften sich in dem Map befinden. Wir iterieren durch die Stil-Map und erstellen für jede Eigenschaft und jeden Wert jeweils ein [`<dt>`](/de/docs/Web/HTML/Element/dt) und [`<dd>`](/de/docs/Web/HTML/Element/dd).

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Haben Sie erkannt, wie viele Standard-CSS-Eigenschaften ein Link hatte? Aktualisieren Sie den ersten `document.querySelector`-Aufruf, um das {{htmlelement("p")}} anstelle des {{htmlelement("a")}} auszuwählen. Sie werden einen Unterschied in den voreingestellten berechneten Werten für [`margin-top`](/de/docs/Web/CSS/margin-top) und [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) bemerken.

### .get() Methode / benutzerdefinierte Eigenschaften

Lassen Sie uns unser Beispiel so aktualisieren, dass nur einige wenige Eigenschaften und Werte abgerufen werden. Beginnen wir damit, einige CSS zu unserem Beispiel hinzuzufügen, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array von interessierenden Eigenschaften und verwenden die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get), um jeweils deren Werte zu erhalten:

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

Wir haben {{cssxref('border-left-color')}} hinzugefügt, um zu zeigen, dass, hätten wir alle Eigenschaften einbezogen, jeder Wert, der auf [`currentcolor`](/de/docs/Web/CSS/color_value) zurückfällt (einschließlich {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, etc.), `rgb(255 0 0)` zurückgegeben hätte. Der Link hat `font-weight: bold;` von den Stilvorgaben des Absatzes geerbt und listet es als `font-weight: 700`. Benutzerdefinierte Eigenschaften, wie unser `--color: red`, sind Eigenschaften. Daher sind sie über `get()` zugänglich.

Sie werden feststellen, dass benutzerdefinierte Eigenschaften den im Stylesheet geschriebenen Wert beibehalten, während berechnete Stile als berechneter Wert aufgelistet werden — {{cssxref('color')}} wurde als [`rgb()`](/de/docs/Web/CSS/color_value)-Wert gelistet und der zurückgegebene {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/named-color) und das Stichwort `bold` verwenden.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM liegt darin, dass Werte von Einheiten getrennt sind; das Parsen und Verketten von Zeichenketten kann der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Stil-Map hat einen Wert. Wenn der Wert ein Stichwort ist, ist das zurückgegebene Objekt ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue). Wenn der Wert numerisch ist, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Stichwörter wie `inherit`, `initial`, `unset` und andere nicht von Ihnen in Anführungszeichen gesetzte Zeichenfolgen wie `auto` und `grid` definiert. Diese Unterklasse gibt Ihnen eine `value`-Eigenschaft über [`cssKeywordValue.value`](/de/docs/Web/API/CssKeywordValue/value).

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitentyp ist. Es ist eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Sie wird mit zwei Eigenschaften zurückgegeben: einem `value` und einer `unit`. Mit diesem Typ können wir auf den numerischen Wert zugreifen — [`cssUnitValue.value`](/de/docs/Web/API/CssUnitValue/value) — und auf seine Einheit — [`cssUnitValue.unit`](/de/docs/Web/API/CssUnitValue/unit).

Lassen Sie uns einen einfachen Absatz schreiben, keine Stile anwenden und einige seiner CSS-Eigenschaften inspizieren, indem wir eine Tabelle mit der Einheit und dem Wert zurückgeben:

```html
<p>
   This is a paragraph with some content. Open up this example in Codepen or
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

Für jede Eigenschaft von Interesse listen wir den Namen der Eigenschaft, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und, wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, listen wir den Einheitstyp auf, den wir mit `.get(propertyName).unit` abrufen.

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

Für diejenigen unter Ihnen, die einen nicht unterstützenden Browser verwenden, sollte die obige Ausgabe etwa so aussehen:

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

Sie werden feststellen, dass die zurückgegebene {{cssxref('&lt;length&gt;')}}-Einheit `px` ist, die zurückgegebene {{cssxref('&lt;percentage&gt;')}}-Einheit `percent` ist, die {{cssxref('&lt;time&gt;')}}-Einheit `s` für 'seconds' ist und die einheitslose {{cssxref('&lt;number&gt;')}}-Einheit `number` ist.

Wir haben für den Absatz weder eine {{cssxref('width')}} noch eine {{cssxref('height')}} deklariert, beide Standardwerte `auto` und geben daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) anstelle eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück. `CSSKeywordValue`s haben keine Einheitseigenschaft, daher gibt unser `get().unit` in diesen Fällen `undefined` zurück.

Wären die `width` oder `height` in einem `<length>` oder `<percent>` definiert gewesen, wäre die [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Einheit `px` bzw. `percent` gewesen.

Es stehen weitere Typen zur Verfügung:

- Ein [`<image>`](/de/docs/Web/CSS/image) gibt ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein [`<color>`](/de/docs/Web/CSS/color_value) würde ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurückgeben.
- Ein {{cssxref('transform')}} gibt ein `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) gibt ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können ein `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Das `CSSStyleValue`-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind, einschließlich [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Es hat zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Wir können Instanzen von `CSSUnparsedValue`-Objekten mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Lassen Sie uns ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`s und anderen Merkmalen untersuchen. Wir werden uns ansehen, was ihre Typen sind, indem wir kurze JavaScript-Snippets verwenden, die an [`console.log()`](/de/docs/Web/API/Console/log_static) ausgeben:

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
  background: no-repeat 5% center url(magicwand.png) var(--mainColor);
  border: 4px solid var(--mainColor);
  border-radius: 2px;
  font-size: calc(var(--unit) * 2);
  color: var(--white);
  cursor: pointer;
  transform: scale(0.95);
}
```

Fügen wir die Klasse einem Button hinzu (ein Button, der nichts tut).

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
console.log(bgImage.toString()); // url("magicwand.png")

// CSSUnparsedValue
let unit = allComputedStyles.get("--unit");

console.log(unit);

let parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit);
console.log(parsedUnit.unit);
console.log(parsedUnit.value);
```

Wir holen unser `StylePropertyMapReadOnly` mit dem folgenden JavaScript:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

Das [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie den Leerraum vor dem `1.2rem`. Um eine Einheit und einen Wert zu erhalten, benötigen wir ein `CSSUnitValue`, das wir mit der Methode `CSSStyleValue.parse()` auf dem `CSSUnparsedValue` abrufen können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das [`<button>`](/de/docs/Web/HTML/Element/button)-Element standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) hinzugefügt, um eine Größenanpassung zu ermöglichen. In unserem CSS haben wir `width: calc(30% + 20px);`, was eine [`calc()`](/de/docs/Web/CSS/calc)-Funktion zur Definition der Breite ist.

Wenn wir `get()` auf die `width` anwenden, wird ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgegeben. [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit 2 `CSSUnitValues`.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

Das [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) ermöglicht auch das Transformieren. In unserem CSS haben wir `transform: scale(0.95);`, was eine {{cssxref('transform')}}-Funktion ist.

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

Wenn wir die `transform`-Eigenschaft `get()`, wird ein [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) zurückgegeben. Wir können die Länge (oder die Anzahl) der Transformationsfunktionen mit der Länge-Eigenschaft abfragen.

Da wir eine Länge von `1` haben, was eine einzelne Transformationsfunktion darstellt, loggen wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wir bekommen `CSSUnitValues`, wenn wir die `x`-, `y`- und `z`-Skalierung abfragen. Die schreibgeschützte `CSSScale.is2D`-Eigenschaft ist in diesem Szenario `true`.

Hätten wir `translate()`, `skew()` und `rotate()`-Transformationsfunktionen hinzugefügt, wäre die Länge `4` gewesen, jede mit ihren eigenen `x`-, `y`-, `z`-Werten und jede mit einer `.is2D`-Eigenschaft. Zum Beispiel, hätten wir `transform: translate3d(1px, 1px, 3px)` eingeschlossen, hätte `.get('transform')` ein `CSSTranslate` mit `CSSUnitValues` für `x`, `y` und `z` zurückgegeben, und die schreibgeschützte `.is2D`-Eigenschaft wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")
```

Wenn wir die `'background-image'` `get()`, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Während wir die CSS {{cssxref('background')}}-Kurzform-Eigenschaft verwendet haben, zeigt die geerbte {{jsxref("Object/toString", "Object.prototype.toString()")}}-Methode, dass wir nur das Bild zurückgegeben haben, `'url("magicwand.png")'`.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist — dieser wird selbst dann zurückgegeben, wenn der ursprüngliche `url()`-Wert relativ war. Wäre das Hintergrundbild ein Gradient oder mehrere Hintergrundbilder gewesen, hätte `.get('background-image')` ein `CSSStyleValue` zurückgegeben. Der `CSSImageValue` wird nur zurückgegeben, wenn es sich um ein einzelnes Bild handelt und nur, wenn diese einzelne Bilddeklaration eine URL ist.

### Zusammenfassung

Das sollte Ihnen den Einstieg in das Verständnis des CSS Typed OM ermöglichen. Schauen Sie sich alle [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API)-Schnittstellen an, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
