---
title: Verwendung des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte bereit, um ihre performante Bearbeitung zu ermöglichen.

Das Umwandeln von Wert-Strings des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) in sinnvoll typisierte JavaScript-Darstellungen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann einen erheblichen Performance-Overhead verursachen.

Das CSS Typed OM macht die Bearbeitung von CSS logischer und performanter, indem es Objektfunktionen (anstatt der CSSOM-Stringmanipulation) bereitstellt und Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte ermöglicht.

Dieser Artikel bietet eine Einführung in alle wichtigen Funktionen.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte zugreifen — einschließlich benutzerdefinierter Eigenschaften — die sich auf ein Element auswirken. Sehen wir uns an, wie dies funktioniert, indem wir unser erstes Beispiel erstellen, das [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) untersucht.

### Alle Eigenschaften und Werte abrufen

#### HTML

Wir beginnen mit etwas HTML: einem Absatz mit einem Link sowie einer Definitionsliste, der wir alle CSS-Eigenschafts-/Wert-Paare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren ungestylten Link abzurufen und mithilfe von `computedStyleMap()` eine Definitionsliste aller Standard-CSS-Eigenschaftswerte zurückzugeben, die den Link beeinflussen.

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

Die Methode `computedStyleMap()` gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück, das die Eigenschaft [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size) enthält. Diese gibt an, wie viele Eigenschaften sich in der Map befinden. Wir durchlaufen die Style-Map und erstellen für jede Eigenschaft bzw. jeden Wert ein [`<dt>`](/de/docs/Web/HTML/Reference/Elements/dt) und ein [`<dd>`](/de/docs/Web/HTML/Reference/Elements/dd).

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie lediglich einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

War Ihnen bewusst, wie viele Standard-CSS-Eigenschaften ein Link hat? Aktualisieren Sie den ersten Aufruf von `document.querySelector`, sodass er statt des {{htmlelement("a")}} das {{htmlelement("p")}} auswählt. Sie werden einen Unterschied bei den standardmäßig berechneten Werten von {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} feststellen.

### Methode `.get()` / benutzerdefinierte Eigenschaften

Aktualisieren wir unser Beispiel, um nur einige Eigenschaften und Werte abzurufen. Beginnen wir damit, unserem Beispiel etwas CSS hinzuzufügen, einschließlich einer benutzerdefinierten Eigenschaft und einer vererbbaren Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array mit den interessierenden Eigenschaften und verwenden die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get), um jeden ihrer Werte abzurufen:

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

Wir haben {{cssxref('border-left-color')}} aufgenommen, um zu zeigen, dass jeder Wert, der standardmäßig [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value) verwendet (einschließlich {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, usw.), `rgb(255 0 0)` zurückgeben würde, wenn wir alle Eigenschaften einbezogen hätten. Der Link hat `font-weight: bold;` von den Styles des Absatzes geerbt und führt ihn als `font-weight: 700` auf. Benutzerdefinierte Eigenschaften wie unser `--color: red` sind Eigenschaften. Daher sind sie über `get()` zugänglich.

Beachten Sie, dass benutzerdefinierte Eigenschaften den im Stylesheet geschriebenen Wert beibehalten, während berechnete Styles als berechneter Wert aufgeführt werden — {{cssxref('color')}} wurde als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert aufgeführt und das zurückgegebene {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) und das Schlüsselwort `bold` verwenden.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM besteht darin, dass Werte von Einheiten getrennt sind; das Parsen und Verketten von String-Werten könnte der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Style-Map hat einen Wert. Ist der Wert ein Schlüsselwort, ist das zurückgegebene Objekt ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue). Ist der Wert numerisch, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Schlüsselwörter wie `inherit`, `initial`, `unset` und andere nicht zitierte Strings wie `auto` und `grid` definiert. Diese Unterklasse stellt Ihnen über [`cssKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value) eine `value`-Eigenschaft bereit.

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitentyp ist. Es ist eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Sie wird mit zwei Eigenschaften zurückgegeben: `value` und `unit`. Mit diesem Typ können wir auf den numerischen Wert — [`cssUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value) — und seine Einheit — [`cssUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit) — zugreifen.

Schreiben wir einen einfachen Absatz, wenden keine Styles an und untersuchen einige seiner CSS-Eigenschaften, indem wir eine Tabelle mit Einheit und Wert zurückgeben:

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

Für jede relevante Eigenschaft führen wir den Namen der Eigenschaft auf, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und führen, wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, den Einheitentyp auf, den wir mit `.get(propertyName).unit` abrufen.

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

Für diejenigen unter Ihnen, die einen nicht unterstützenden Browser verwenden, sollte die obige Ausgabe ungefähr so aussehen:

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

Beachten Sie, dass die zurückgegebene {{cssxref('&lt;length&gt;')}}-Einheit `px` ist, die zurückgegebene {{cssxref('&lt;percentage&gt;')}}-Einheit `percent` ist, die {{cssxref('&lt;time&gt;')}}-Einheit `s` für „Sekunden“ ist und die einheitenlose {{cssxref('&lt;number&gt;')}}-Einheit `number` ist.

Wir haben für den Absatz weder {{cssxref('width')}} noch {{cssxref('height')}} deklariert. Beide haben standardmäßig den Wert `auto` und geben daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) anstelle eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück. `CSSKeywordValue`s haben keine Einheiteneigenschaft, daher gibt unser `get().unit` in diesen Fällen `undefined` zurück.

Wären `width` oder `height` als `<length>` oder `<percent>` definiert, wäre die Einheit des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) jeweils `px` oder `percent` gewesen.

Es sind weitere Typen verfügbar:

- Ein {{cssxref("image")}} gibt einen [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein {{cssxref("&lt;color&gt;")}} würde einen [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurückgeben.
- Ein {{cssxref('transform')}} gibt einen `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) gibt einen [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können einen `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Die Schnittstelle `CSSStyleValue` der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, auf die über die Typed OM API zugegriffen werden kann, einschließlich [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Sie hat zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` einen [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Wir können `CSSUnparsedValue`-Objektinstanzen mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Untersuchen wir ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`s und anderen Funktionen. Mithilfe kurzer JavaScript-Snippets, die in [`console.log()`](/de/docs/Web/API/console/log_static) ausgeben, sehen wir uns an, welche Typen sie haben:

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

Fügen wir die Klasse einem Button hinzu (einem Button, der nichts tut).

```html
<button>Styled Button</button>
```

```html hidden
<p>
  There is nothing to see here. Please open your browser console to see the
  output!
</p>
```

Wir rufen unser `StylePropertyMapReadOnly` mit folgendem JavaScript ab:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

Der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie das Leerzeichen vor `1.2rem`. Um eine Einheit und einen Wert zu erhalten, benötigen wir einen `CSSUnitValue`, den wir mithilfe der Methode `CSSStyleValue.parse()` auf dem `CSSUnparsedValue` abrufen können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das Element [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) hinzugefügt, um die Größenanpassung zu ermöglichen. In unserem CSS haben wir `width: calc(30% + 20px);`, eine {{cssxref("calc()")}}-Funktion zur Definition der Breite.

Wenn wir `get()` für `width` aufrufen, erhalten wir einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum). [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit zwei `CSSUnitValue`s.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

[`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) ermöglicht auch die Transformation. In unserem CSS haben wir `transform: scale(0.95);`, eine {{cssxref('transform')}}-Funktion.

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

Wenn wir `get()` für die Eigenschaft `transform` aufrufen, erhalten wir einen [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue). Mit der Eigenschaft `length` können wir die Länge (oder Anzahl) der Transformationsfunktionen abfragen.

Da wir eine Länge von `1` haben, die eine einzelne Transformationsfunktion repräsentiert, protokollieren wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wenn wir die Skalierung von `x`, `y` und `z` abfragen, erhalten wir `CSSUnitValue`s. Die schreibgeschützte Eigenschaft `CSSScale.is2D` ist in diesem Szenario `true`.

Hätten wir die Transformationsfunktionen `translate()`, `skew()` und `rotate()` hinzugefügt, wäre die Länge `4` gewesen, jeweils mit eigenen `x`-, `y`-, `z`-Werten und jeweils mit einer `.is2D`-Eigenschaft. Hätten wir beispielsweise `transform: translate3d(1px, 1px, 3px)` verwendet, hätte `.get('transform')` einen `CSSTranslate` mit `CSSUnitValue`s für `x`, `y` und `z` zurückgegeben, und die schreibgeschützte Eigenschaft `.is2D` wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")
```

Wenn wir `get()` für `'background-image'` aufrufen, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Obwohl wir die CSS-Kurzform-Eigenschaft {{cssxref('background')}} verwendet haben, zeigt die geerbte Methode {{jsxref("Object/toString", "Object.prototype.toString()")}}, dass wir nur das Bild `'url("magic-wand.png")'` zurückgegeben haben.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist — dieser wird auch dann zurückgegeben, wenn der ursprüngliche `url()`-Wert relativ war. Wäre das Hintergrundbild ein Farbverlauf oder wären es mehrere Hintergrundbilder gewesen, hätte `.get('background-image')` einen `CSSStyleValue` zurückgegeben. Der `CSSImageValue` wird nur zurückgegeben, wenn es ein einzelnes Bild gibt und diese einzelne Bilddeklaration eine URL ist.

Abschließend führen wir all dies in einem Live-Beispiel zusammen. Denken Sie daran, die Konsole Ihres Browsers zu verwenden, um die Ausgabe zu untersuchen.

{{EmbedLiveSample("CSSStyleValue", 120, 300)}}

## Zusammenfassung

Dies sollte Ihnen den Einstieg in das Verständnis des CSS Typed OM erleichtern. Sehen Sie sich alle Schnittstellen des [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API) an, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
