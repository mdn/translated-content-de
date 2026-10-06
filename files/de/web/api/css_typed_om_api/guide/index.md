---
title: Verwendung des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: 875807e56bc01cc7cb65b1d2217de5b9dfa476d9
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte bereit, damit sie effizient verändert werden können.

Die Umwandlung von Werte-Strings des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) in aussagekräftig typisierte JavaScript-Repräsentationen und zurück (über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) kann einen erheblichen Leistungsaufwand verursachen.

Das CSS Typed OM macht die Bearbeitung von CSS logischer und effizienter: Statt CSSOM-Strings zu bearbeiten, können Sie Objektfunktionen nutzen und auf Typen, Methoden und ein Objektmodell für CSS-Werte zugreifen.

Dieser Artikel stellt die wichtigsten Funktionen vor.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte zugreifen, die sich auf ein Element auswirken – einschließlich benutzerdefinierter Eigenschaften. Sehen wir uns anhand eines ersten Beispiels an, wie das mit [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) funktioniert.

### Alle Eigenschaften und Werte abrufen

#### HTML

Wir beginnen mit HTML: einem Absatz mit einem Link sowie einer Definitionsliste, der wir alle CSS-Eigenschaft-Wert-Paare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, das unseren nicht formatierten Link auswählt und mithilfe von `computedStyleMap()` eine Definitionsliste aller CSS-Standardwerte erstellt, die sich auf den Link auswirken.

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

Die Methode `computedStyleMap()` gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Objekt zurück. Dessen Eigenschaft [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size) gibt an, wie viele Eigenschaften die Map enthält. Wir durchlaufen die Style-Map und erstellen für jede Eigenschaft ein [`<dt>`](/de/docs/Web/HTML/Reference/Elements/dt) und für den jeweiligen Wert ein [`<dd>`](/de/docs/Web/HTML/Reference/Elements/dd).

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie lediglich einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

War Ihnen bewusst, wie viele CSS-Standardeigenschaften ein Link hat? Ändern Sie den ersten Aufruf von `document.querySelector` so, dass er {{htmlelement("p")}} statt {{htmlelement("a")}} auswählt. Sie werden einen Unterschied bei den berechneten Standardwerten von {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} feststellen.

### Die Methode .get() und benutzerdefinierte Eigenschaften

Ändern wir unser Beispiel so, dass es nur einige Eigenschaften und Werte abruft. Zunächst fügen wir etwas CSS hinzu, darunter eine benutzerdefinierte und eine vererbbare Eigenschaft:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Statt _alle_ Eigenschaften abzurufen, erstellen wir ein Array mit den Eigenschaften, die uns interessieren, und rufen ihre Werte jeweils mit der Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) ab:

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

Wir haben {{cssxref('border-left-color')}} aufgenommen, um zu zeigen, dass alle Eigenschaften, deren Wert standardmäßig [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value) ist (darunter {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}} und {{cssxref('column-rule-color')}}), `rgb(255 0 0)` zurückgeben würden, wenn wir sie abfragen. Der Link hat `font-weight: bold;` von den Styles des Absatzes geerbt; der Wert wird als `font-weight: 700` aufgeführt. Benutzerdefinierte Eigenschaften wie unser `--color: red` sind ebenfalls Eigenschaften und können daher mit `get()` abgerufen werden.

Beachten Sie, dass benutzerdefinierte Eigenschaften ihren im Stylesheet angegebenen Wert behalten, während berechnete Styles mit ihrem berechneten Wert aufgeführt werden: {{cssxref('color')}} wurde als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert aufgeführt, und für {{cssxref('font-weight')}} wurde `700` zurückgegeben, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) und das Schlüsselwort `bold` verwenden.

### CSSUnitValue und CSSKeywordValue

Eine Stärke des CSS Typed OM besteht darin, dass Werte und Einheiten getrennt vorliegen. Das Parsen und Verketten von Strings könnte damit der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Style-Map hat einen Wert. Ist dieser Wert ein Schlüsselwort, wird ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) zurückgegeben. Bei einem numerischen Wert wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse für Schlüsselwörter wie `inherit`, `initial` und `unset` sowie andere Strings, die ohne Anführungszeichen geschrieben werden, etwa `auto` und `grid`. Über [`cssKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value) stellt diese Unterklasse eine `value`-Eigenschaft bereit.

`CSSUnitValue` wird zurückgegeben, wenn der Wert einen Einheitentyp hat. Die Klasse definiert Zahlen mit Maßeinheiten wie `20px`, `40%` und `200ms` sowie Zahlen wie `7`. Sie stellt zwei Eigenschaften bereit: `value` und `unit`. Damit können wir auf den numerischen Wert – [`cssUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value) – und seine Einheit – [`cssUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit) – zugreifen.

Schreiben wir einen einfachen Absatz ohne eigene Styles und untersuchen einige seiner CSS-Eigenschaften. Dazu geben wir eine Tabelle mit Einheit und Wert aus:

```html
<p>
  This is a paragraph with some content. Open up this example in the playground,
  and change some features. Try adding some CSS, such as a width for this
  paragraph, or adding a CSS property to the ofInterest array.
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

Für jede untersuchte Eigenschaft führen wir ihren Namen auf und rufen mit `.get(propertyName).value` ihren Wert ab. Wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, führen wir außerdem den mit `.get(propertyName).unit` abgerufenen Einheitentyp auf.

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
  "transition-duration",
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

Wenn Sie einen Browser ohne Unterstützung verwenden, sollte die obige Ausgabe ungefähr so aussehen:

| Eigenschaft                              | Wert | Einheit     |
| ---------------------------------------- | ---- | ----------- |
| {{cssxref("padding-top")}}               | 0    | `px`        |
| {{cssxref("margin-bottom")}}             | 16   | `px`        |
| {{cssxref("font-size")}}                 | 16   | `px`        |
| {{cssxref("font-stretch")}}              | 100  | `percent`   |
| {{cssxref("transition-duration")}}       | 0    | `s`         |
| {{cssxref("animation-iteration-count")}} | 1    | _number_    |
| {{cssxref("width")}}                     | auto | _undefined_ |
| {{cssxref("height")}}                    | auto | _undefined_ |

Beachten Sie, dass für {{cssxref('&lt;length&gt;')}} die Einheit `px` zurückgegeben wird, für {{cssxref('&lt;percentage&gt;')}} die Einheit `percent` und für {{cssxref('&lt;time&gt;')}} die Einheit `s` für Sekunden. Für das einheitenlose {{cssxref('&lt;number&gt;')}} wird `number` als Einheit zurückgegeben.

Wir haben für den Absatz weder {{cssxref('width')}} noch {{cssxref('height')}} festgelegt. Beide haben standardmäßig den Wert `auto` und geben daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) statt eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück. `CSSKeywordValue`-Objekte besitzen keine `unit`-Eigenschaft. Deshalb gibt `get().unit` in diesen Fällen `undefined` zurück.

Wären `width` oder `height` als `<length>` oder `<percent>` definiert, wäre die Einheit des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) entsprechend `px` oder `percent`.

Es gibt weitere Typen:

- Ein {{cssxref("image")}} gibt ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurück.
- Ein {{cssxref("&lt;color&gt;")}} würde ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) zurückgeben.
- Ein {{cssxref('transform')}} gibt ein `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) gibt ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück.

Sie können ein `CSSUnitValue` oder `CSSKeywordValue` verwenden, um weitere Objekte zu erstellen.

## CSSStyleValue

Das Interface `CSSStyleValue` der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, auf die über die Typed OM API zugegriffen werden kann. Dazu gehören [`CSSImageValue`](/de/docs/Web/API/CSSImageValue), [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue), [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue), [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) und [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue).

Es verfügt über zwei Methoden:

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

Wie oben erwähnt, gibt `StylePropertyMapReadOnly.get('--customProperty')` ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) zurück. Instanzen von `CSSUnparsedValue` können wir mit den geerbten Methoden [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) und [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static) parsen.

Sehen wir uns ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`-Ausdrücken und weiteren Funktionen an. Mit kurzen JavaScript-Snippets, die Ergebnisse über [`console.log()`](/de/docs/Web/API/console/log_static) ausgeben, untersuchen wir deren Typen:

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

Fügen wir die Klasse einem Button hinzu (der nichts tut).

```html
<button>Styled Button</button>
```

```html hidden
<p>
  There is nothing to see here. Please open your browser console to see the
  output!
</p>
```

Mit dem folgenden JavaScript rufen wir unser `StylePropertyMapReadOnly` ab:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

[`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

Wenn wir `get()` aufrufen, wird für eine benutzerdefinierte Eigenschaft ein Wert vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie das Leerzeichen vor `1.2rem`. Um Einheit und Wert zu erhalten, benötigen wir ein `CSSUnitValue`. Dieses können wir abrufen, indem wir die Methode `CSSStyleValue.parse()` auf das `CSSUnparsedValue` anwenden.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das Element [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) hinzugefügt, damit wir seine Größe festlegen können. In unserem CSS verwenden wir `width: calc(30% + 20px);` – die Funktion {{cssxref("calc()")}} legt hier die Breite fest.

Wenn wir `width` mit `get()` abrufen, erhalten wir ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum). [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) ist ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) mit zwei `CSSUnitValues`.

Der Wert von [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

[`display: inline-block;`](/de/docs/Web/CSS/Guides/Display) ermöglicht außerdem Transformationen. In unserem CSS verwenden wir `transform: scale(0.95);` – eine Funktion der Eigenschaft {{cssxref('transform')}}.

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

Wenn wir die Eigenschaft `transform` mit `get()` abrufen, erhalten wir ein [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue). Mit der Eigenschaft `length` können wir die Anzahl der Transformationsfunktionen abfragen.

Da `length` den Wert `1` hat und damit eine einzelne Transformationsfunktion repräsentiert, geben wir das erste Objekt aus und erhalten ein `CSSScale`-Objekt. Wenn wir die Skalierungswerte für `x`, `y` und `z` abfragen, erhalten wir `CSSUnitValues`. Die schreibgeschützte Eigenschaft `CSSScale.is2D` ist in diesem Fall `true`.

Hätten wir außerdem die Transformationsfunktionen `translate()`, `skew()` und `rotate()` hinzugefügt, wäre `length` gleich `4`. Jede Funktion hätte eigene `x`-, `y`- und `z`-Werte sowie eine `.is2D`-Eigenschaft. Hätten wir beispielsweise `transform: translate3d(1px, 1px, 3px)` verwendet, hätte `.get('transform')` ein `CSSTranslate` mit `CSSUnitValues` für `x`, `y` und `z` zurückgegeben; die schreibgeschützte Eigenschaft `.is2D` wäre `false`.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magic-wand.png")
```

Wenn wir `'background-image'` mit `get()` abrufen, wird ein [`CSSImageValue`](/de/docs/Web/API/CSSImageValue) zurückgegeben. Obwohl wir die CSS-Kurzschreibweise {{cssxref('background')}} verwendet haben, zeigt die geerbte Methode {{jsxref("Object/toString", "Object.prototype.toString()")}}, dass nur das Bild zurückgegeben wurde: `'url("magic-wand.png")'`.

Beachten Sie, dass der zurückgegebene Wert den absoluten Pfad zum Bild enthält – auch dann, wenn der ursprüngliche `url()`-Wert relativ war. Wäre das Hintergrundbild ein Farbverlauf oder wären mehrere Hintergrundbilder angegeben, würde `.get('background-image')` ein `CSSStyleValue` zurückgeben. Ein `CSSImageValue` wird nur zurückgegeben, wenn genau ein Bild vorhanden ist und dieses Bild als URL angegeben wurde.

Zum Schluss führen wir alles in einem interaktiven Beispiel zusammen. Sehen Sie sich die Ausgabe in der Konsole Ihres Browsers an.

{{EmbedLiveSample("CSSStyleValue", 120, 300)}}

## Zusammenfassung

Damit haben Sie eine Grundlage, um das CSS Typed OM zu verstehen. Sehen Sie sich alle Interfaces des [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API) an, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
