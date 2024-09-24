---
title: Verwendung des CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die **[CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)** stellt CSS-Werte als typisierte JavaScript-Objekte zur Verfügung, um deren performante Manipulation zu ermöglichen.

Das Umwandeln von [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)-Wertestrings in sinnvoll typisierte JavaScript-Repräsentationen und zurück (über {{domxref("HTMLElement.style")}}) kann einen erheblichen Performance-Overhead verursachen.

Das CSS Typed OM macht die Manipulation von CSS logischer und performanter, indem es Objektfunktionen (anstatt CSSOM-Stringmanipulation) bereitstellt und den Zugriff auf Typen, Methoden und ein Objektmodell für CSS-Werte ermöglicht.

Dieser Artikel bietet eine Einführung in alle Hauptfunktionen.

## computedStyleMap()

Mit der CSS Typed OM API können wir auf alle CSS-Eigenschaften und -Werte, einschließlich benutzerdefinierter Eigenschaften, zugreifen, die ein Element beeinflussen. Sehen wir uns an, wie das funktioniert, indem wir unser erstes Beispiel erstellen, das {{domxref('Element.computedStyleMap()', 'computedStyleMap()')}} untersucht.

### Abrufen aller Eigenschaften und Werte

#### HTML

Wir beginnen mit etwas HTML: ein Absatz mit einem Link sowie eine Definitionsliste, der wir alle CSS-Eigenschafts/Werte-Paare hinzufügen werden.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

Wir fügen JavaScript hinzu, um unseren unformatierten Link zu erfassen und eine Definitionsliste aller Standard-CSS-Eigenschaftswerte, die den Link beeinflussen, mit `computedStyleMap()` zurückzugeben.

```js
// Element abrufen
const myElement = document.querySelector("a");

// <dl> abrufen, das wir füllen werden
const stylesList = document.querySelector("#regurgitation");

// Alle berechneten Stile mit computedStyleMap() abrufen
const defaultComputedStyles = myElement.computedStyleMap();

// Durch die Map aller Eigenschaften und Werte iterieren und für jede ein <dt> und <dd> hinzufügen
for (const [prop, val] of defaultComputedStyles) {
  // Eigenschaften
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // Werte
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

Die Methode `computedStyleMap()` gibt ein {{domxref('StylePropertyMapReadOnly')}}-Objekt zurück, das die [`size`](/de/docs/Web/API/StylePropertyMapReadOnly/size)-Eigenschaft enthält, die angibt, wie viele Eigenschaften sich in der Map befinden. Wir iterieren durch die Style Map und erstellen für jede Eigenschaft und jeden Wert ein [`<dt>`](/de/docs/Web/HTML/Element/dt) und ein [`<dd>`](/de/docs/Web/HTML/Element/dd).

#### Ergebnis

In [Browsern, die `computedStyleMap()` unterstützen](/de/docs/Web/API/Element/computedStyleMap#browser_compatibility), sehen Sie eine Liste aller CSS-Eigenschaften und -Werte. In anderen Browsern sehen Sie nur einen Link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Haben Sie realisiert, wie viele Standard-CSS-Eigenschaften ein Link hatte? Aktualisieren Sie die erste `document.querySelector`-Anweisung, um das {{htmlelement("p")}} anstelle des {{htmlelement("a")}} auszuwählen. Sie werden einen Unterschied in den Standardwerten von [`margin-top`](/de/docs/Web/CSS/margin-top) und [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) feststellen.

### .get() Methode / benutzerdefinierte Eigenschaften

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

Anstatt _alle_ Eigenschaften abzurufen, erstellen wir ein Array der interessierenden Eigenschaften und verwenden die {{domxref('StylePropertyMapReadOnly.get()')}}-Methode, um jeden ihrer Werte zu erhalten:

```html hidden
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

```js
// Element abrufen
const myElement = document.querySelector("a");

// <dl> abrufen, das wir füllen werden
const stylesList = document.querySelector("#regurgitation");

// Alle berechneten Stile mit computedStyleMap() abrufen
const allComputedStyles = myElement.computedStyleMap();

// Array der interessierenden Eigenschaften
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// Durch unsere interessierenden Eigenschaften iterieren
for (const value of ofInterest) {
  // Eigenschaften
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(value));
  stylesList.appendChild(cssProperty);

  // Werte
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(allComputedStyles.get(value)));
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample(".get_method_custom_properties", 120, 300)}}

Wir schlossen {{cssxref('border-left-color')}} ein, um zu demonstrieren, dass, wenn wir alle Eigenschaften eingeschlossen hätten, jeder Wert, der auf [`currentcolor`](/de/docs/Web/CSS/color_value) standardmäßig eingestellt ist (einschließlich {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, etc.) `rgb(255 0 0)` zurückgeben würde. Der Link hat `font-weight: bold;` von den Stilen des Absatzes geerbt, was als `font-weight: 700` aufgelistet ist. Benutzerdefinierte Eigenschaften, wie unser `--color: red`, sind Eigenschaften. Daher sind sie über `get()` zugänglich.

Sie werden feststellen, dass benutzerdefinierte Eigenschaften den Wert wie im Stylesheet geschrieben beibehalten, während berechnete Stile als der berechnete Wert aufgelistet werden — {{cssxref('color')}} wurde als [`rgb()`](/de/docs/Web/CSS/color_value)-Wert aufgelistet und das zurückgegebene {{cssxref('font-weight')}} war `700`, obwohl wir eine [benannte Farbe](/de/docs/Web/CSS/named-color) und das `bold`-Schlüsselwort verwenden.

### CSSUnitValue und CSSKeywordValue

Die Stärke des CSS Typed OM liegt darin, dass Werte von Einheiten getrennt sind; das Parsen und Zusammenfügen von String-Werten könnte der Vergangenheit angehören. Jede CSS-Eigenschaft in einer Style-Map hat einen Wert. Wenn der Wert ein Schlüsselwort ist, ist das zurückgegebene Objekt ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue). Wenn der Wert numerisch ist, wird ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgegeben.

`CSSKeywordValue` ist eine Klasse, die Schlüsselwörter wie `inherit`, `initial`, `unset` und andere nicht in Anführungszeichen gesetzte Strings wie `auto` und `grid` definiert. Diese Unterklasse gibt Ihnen eine `value`-Eigenschaft über {{domxref("cssKeywordValue.value")}}.

`CSSUnitValue` wird zurückgegeben, wenn der Wert ein Einheitstyp ist. Es ist eine Klasse, die Zahlen mit Maßeinheiten wie `20px`, `40%`, `200ms` oder `7` definiert. Es wird mit zwei Eigenschaften zurückgegeben: einem `value` und einer `unit`. Mit diesem Typ können wir auf den numerischen Wert — {{domxref('cssUnitValue.value')}} — und seine Einheit — {{domxref('cssUnitValue.unit')}} — zugreifen.

Lassen Sie uns einen einfachen Absatz ohne Stile schreiben und einige seiner CSS-Eigenschaften untersuchen, indem wir eine Tabelle mit der Einheit und dem Wert zurückgeben:

```html
<p>
   Dies ist ein Absatz mit etwas Inhalt. Öffnen Sie dieses Beispiel in Codepen
   oder JSFiddle und ändern Sie einige Funktionen. Versuchen Sie, etwas CSS
   hinzuzufügen, wie eine Breite für diesen Absatz oder eine CSS-Eigenschaft
   zum ofInterest-Array hinzuzufügen.
</p>
<table id="regurgitation">
  <thead>
    <tr>
      <th>Eigenschaft</th>
      <th>Wert</th>
      <th>Einheit</th>
    </tr>
</table>
```

Für jede interessierende Eigenschaft listen wir den Namen der Eigenschaft auf, verwenden `.get(propertyName).value`, um den Wert zurückzugeben, und, wenn das von `get()` zurückgegebene Objekt ein `CSSUnitValue` ist, listen wir den Einheitstyp auf, den wir mit `.get(propertyName).unit` abrufen.

```js
// Element abrufen, das wir inspizieren
const myElement = document.querySelector("p");

// Tabelle abrufen, die wir füllen werden
const stylesTable = document.querySelector("#regurgitation");

// Alle berechneten Stile mit computedStyleMap() abrufen
const allComputedStyles = myElement.computedStyleMap();

// Array der interessierenden Eigenschaften
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

// Durch unsere interessierenden Eigenschaften iterieren
for (const value of ofInterest) {
  // Eine Zeile erstellen
  const row = document.createElement("tr");

  // Den Namen der Eigenschaft hinzufügen
  const cssProperty = document.createElement("td");
  cssProperty.appendChild(document.createTextNode(value));
  row.appendChild(cssProperty);

  // Den wertelosen Wert hinzufügen
  const cssValue = document.createElement("td");

  // Lange Kommazahlen auf 1 Dezimalstelle verkleinern
  let propVal = allComputedStyles.get(value).value;
  propVal = propVal % 1 ? propVal.toFixed(1) : propVal;
  cssValue.appendChild(document.createTextNode(propVal));
  row.appendChild(cssValue);

  // Den Einheitstyp hinzufügen
  const cssUnit = document.createElement("td");
  cssUnit.appendChild(
    document.createTextNode(allComputedStyles.get(value).unit),
  );
  row.appendChild(cssUnit);

  // Die Zeile zur Tabelle hinzufügen
  stylesTable.appendChild(row);
}
```

{{EmbedLiveSample("CSSUnitValue_and_CSSKeywordValue", 120, 300)}}

Für diejenigen von Ihnen, die einen nicht unterstützten Browser verwenden, sollte die obige Ausgabe in etwa so aussehen:

| Eigenschaft                               | Wert  | Einheit      |
| ----------------------------------------- | ----- | ------------ |
| {{cssxref("padding-top")}}                | 0     | `px`         |
| {{cssxref("margin-bottom")}}              | 16    | `px`         |
| {{cssxref("font-size")}}                  | 16    | `px`         |
| {{cssxref("font-stretch")}}               | 100   | `%`          |
| {{cssxref("animation-duration")}}         | 0     | `px`         |
| {{cssxref("animation-iteration-count")}}  | 1     | _number_     |
| {{cssxref("width")}}                      | auto  | _undefined_  |
| {{cssxref("height")}}                     | auto  | _undefined_  |

Sie werden feststellen, dass die zurückgegebene {{cssxref('&lt;length&gt;')}}-Einheit `px` ist, die zurückgegebene {{cssxref('&lt;percentage&gt;')}}-Einheit ist `percent`, die {{cssxref('&lt;time&gt;')}}-Einheit `s` für 'seconds', und die einheitslose {{cssxref('&lt;number&gt;')}}-Einheit ist `number`.

Wir haben keine {{cssxref('width')}} oder {{cssxref('height')}} für den Absatz deklariert, beide standardmäßig auf `auto` gesetzt und geben daher ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) statt eines [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück. `CSSKeywordValue`s haben keine Einheitseigenschaft, daher gibt in diesen Fällen unser `get().unit` `undefined` zurück.

Wenn die `width` oder `height` in einem `<length>` oder `<percent>` definiert worden wären, wäre die Einheit des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) `px` oder `percent` gewesen.

Es gibt weitere verfügbare Typen:

- Ein [`<image>`](/de/docs/Web/CSS/image) gibt ein {{domxref('CSSImageValue')}} zurück.
- Ein [`<color>`](/de/docs/Web/CSS/color_value) würde ein {{domxref('CSSStyleValue')}} zurückgeben.
- Ein {{cssxref('transform')}} gibt ein `CSSTransformValue` zurück.
- Eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--) gibt ein {{domxref('CSSUnparsedValue')}} zurück.

Sie können ein `CSSUnitValue` oder `CSSKeywordValue` verwenden, um andere Objekte zu erstellen.

## CSSStyleValue

Das `CSSStyleValue`-Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind, einschließlich {{domxref('CSSImageValue')}}, {{domxref('CSSKeywordValue')}}, {{domxref('CSSNumericValue')}}, {{domxref('CSSPositionValue')}}, {{domxref('CSSTransformValue')}} und {{domxref('CSSUnparsedValue')}}.

Es hat zwei Methoden:

- {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}}
- {{domxref("CSSStyleValue/parseAll_static", "CSSStyleValue.parseAll()")}}

Wie oben erwähnt gibt `StylePropertyMapReadOnly.get('--customProperty')` ein {{domxref('CSSUnparsedValue')}} zurück. Wir können Instanzen von `CSSUnparsedValue`-Objekten mit den vererbten Methoden {{domxref('CSSStyleValue/parse_static', 'CSSStyleValue.parse()')}} und {{domxref('CSSStyleValue/parseAll_static', 'CSSStyleValue.parseAll()')}} parsen.

Sehen wir uns ein CSS-Beispiel mit mehreren benutzerdefinierten Eigenschaften, Transformationen, `calc()`s und anderen Funktionen an. Wir untersuchen, welche Typen sie haben, indem wir kurze JavaScript-Skripte verwenden, die bei {{domxref("console/log_static", "console.log()")}} ausgeben:

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

Fügen wir die Klasse zu einem Button hinzu (ein Button, der nichts tut).

```html
<button>JSFiddle, und Eigenschaften hinzufügen.</button>
```

```js hidden
// Element abrufen
const button = document.querySelector("button");

// Alle berechneten Stile mit computedStyleMap() abrufen
const allComputedStyles = button.computedStyleMap();

// CSSMathSum Beispiel
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

Wir erhalten unsere `StylePropertyMapReadOnly` mit dem folgenden JavaScript:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

Die folgenden Beispiele beziehen sich auf `allComputedStyles`:

### CSSUnparsedValue

Das {{domxref('CSSUnparsedValue')}} repräsentiert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: "1.2rem", length: 1}
console.log(unit[0]); // "1.2rem"
```

Wenn wir `get()` aufrufen, wird eine benutzerdefinierte Eigenschaft vom Typ `CSSUnparsedValue` zurückgegeben. Beachten Sie den Abstand vor `1.2rem`. Um eine Einheit und einen Wert zu erhalten, benötigen wir ein `CSSUnitValue`, das wir mit der Methode `CSSStyleValue.parse()` auf dem `CSSUnparsedValue` erhalten können.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Obwohl das [`<button>`](/de/docs/Web/HTML/Element/button)-Element standardmäßig ein Inline-Element ist, haben wir [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) hinzugefügt, um es skalierbar zu machen. In unserem CSS haben wir `width: calc(30% + 20px);`, was eine [`calc()`](/de/docs/Web/CSS/calc)-Funktion zur Definition der Breite ist.

Wenn wir `get()` auf `width` anwenden, wird ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgegeben. {{domxref('CSSMathSum.values')}} ist ein {{domxref('CSSNumericArray')}} mit 2 `CSSUnitValues`.

Der Wert von {{domxref('CSSMathValue.operator')}} ist `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue mit CSSScale

Das [`display: inline-block;`](/de/docs/Web/CSS/CSS_display) ermöglicht ebenfalls das Transformieren. In unserem CSS haben wir `transform: scale(0.95);`, was eine {{cssxref('transform')}}-Funktion ist.

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

Wenn wir `get()` für die Eigenschaft `transform` anwenden, erhalten wir einen {{domxref('CSSTransformValue')}}. Wir können die Länge (oder Anzahl) der Transformationsfunktionen mit der `length`-Eigenschaft abfragen.

Da wir eine Länge von `1` haben, was eine einzelne Transformationsfunktion darstellt, protokollieren wir das erste Objekt und erhalten ein `CSSScale`-Objekt. Wir erhalten `CSSUnitValues`, wenn wir die `x`, `y` und `z` Skalierungen abfragen. Die schreibgeschützte Eigenschaft `CSSScale.is2D` ist in diesem Szenario `true`.

Wenn wir `translate()`, `skew()` und `rotate()` Transformationsfunktionen hinzugefügt hätten, wäre die Länge `4` gewesen, jede mit ihren eigenen `x`, `y`, `z` Werten und jeder mit einer `.is2D`-Eigenschaft. Wenn wir zum Beispiel `transform: translate3d(1px, 1px, 3px)` hinzugefügt hätten, hätte `.get('transform')` einen `CSSTranslate` mit `CSSUnitValues` für `x`, `y` und `z` zurückgegeben und die schreibgeschützte `.is2D`-Eigenschaft wäre `false` gewesen.

### CSSImageValue

Unser Button hat ein Hintergrundbild: einen Zauberstab.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")
```

Wenn wir `get()` auf `'background-image'` anwenden, wird ein {{domxref('CSSImageValue')}} zurückgegeben. Obwohl wir die CSS {{cssxref('background')}}-Kurznotierung verwendet haben, zeigt die vererbte {{jsxref("Object/toString", "Object.prototype.toString()")}}-Methode, dass wir nur das Bild zurückgegeben haben, `'url("magicwand.png")'`.

Beachten Sie, dass der zurückgegebene Wert der absolute Pfad zum Bild ist — dies wird auch dann zurückgegeben, wenn der ursprüngliche `url()`-Wert relativ war. Wäre das Hintergrundbild ein Verlauf oder mehrere Hintergrundbilder gewesen, hätten `.get('background-image')` ein `CSSStyleValue` zurückgegeben. Der `CSSImageValue` wird nur zurückgegeben, wenn es ein einziges Bild gibt und nur dann, wenn diese einzelne Bilddeklaration eine URL ist.

### Zusammenfassung

Dies sollte Ihnen den Einstieg in das Verständnis des CSS Typed OM erleichtern. Schauen Sie sich alle [CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API) Schnittstellen an, um mehr zu erfahren.

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
