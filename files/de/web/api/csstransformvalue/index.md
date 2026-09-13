---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSTransformValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) stellt `transform-list`-Werte dar, wie sie von der CSS-Eigenschaft {{cssxref("transform")}} verwendet werden.
Es ist ein iterierbares Objekt aus [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Objekten, wobei jedes eine einzelne {{cssxref("transform-function")}} darstellt.

Auf die Elemente kann per Index zugegriffen und sie können per Index gesetzt werden (`transformValue[0]`). Als iterierbares Objekt kann es zudem mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife oder der Spread-Syntax verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
  - : Erstellt ein neues `CSSTransformValue`-Objekt.

## Instanzeigenschaften

- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente im Objekt zurück.
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Transformation 2D oder 3D ist.

## Instanzmethoden

_Erbt außerdem Methoden von seinem übergeordneten Interface [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
  - : Gibt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
  - : Gibt einen neuen _Array-Iterator_ zurück, der für jedes Element im Objekt `[index, value]`-Paare liefert.
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Beschreibung

Jedes Element in einem `CSSTransformValue` ist ein von [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) abgeleitetes Objekt, beispielsweise ein [`CSSScale`](/de/docs/Web/API/CSSScale) oder [`CSSTranslate`](/de/docs/Web/API/CSSTranslate), das ein einzelnes {{cssxref("transform-function", "transform function")}}-Objekt darstellt.

Der Konstruktor [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue) löst einen {{jsxref("TypeError")}} aus, wenn er ein leeres Array erhält – ein `CSSTransformValue` enthält immer mindestens eine Komponente.

[`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D) ist nur dann `true`, wenn das eigene `is2D` jeder Komponente `true` ist; wenn eine Komponente eine 3D-Transformation ist, wird der gesamte `CSSTransformValue` als 3D behandelt.

## Beispiele

### Erstellen, Lesen und Aktualisieren eines `CSSTransformValue`

Dieses Beispiel erstellt ein `CSSTransformValue`, liest dann dessen Elemente über `length`, indexierten Zugriff und Iteration und ersetzt schließlich eines der Elemente durch Zuweisung an seinen Index.

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
console.log(transform[0].toString()); // "translate(10px, 20px)"

for (const component of transform) {
  console.log(component.toString());
}
// "translate(10px, 20px)"
// "scale(2, 3)"

transform[1] = new CSSScale(4, 5);
console.log(transform[1].toString()); // "scale(4, 5)"
```

### Eine Transformation aus einer berechneten Style-Map lesen

Eine `CSSTransformValue`-Instanz wird zurückgegeben, wenn Sie den Wert der Eigenschaft {{cssxref("transform")}} aus einem [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) lesen.
Dieses Beispiel liest das berechnete `transform` einer Schaltfläche, die mit `transform: scale(0.95)` formatiert ist.
Weitere Details zu diesem Beispiel finden Sie im Abschnitt [`CSSTransformValue` mit `CSSScale`](/de/docs/Web/API/CSS_Typed_OM_API/Guide#csstransformvalue_with_cssscale) des CSS Typed OM-Leitfadens.

```html
<button id="btn">Styled button</button>
```

```css
#btn {
  display: inline-block;
  transform: scale(0.95);
}
```

```js
const styleMap = document.getElementById("btn").computedStyleMap();
const transform = styleMap.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, length: 1, is2D: true}
console.log(transform.length); // 1
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform.is2D); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)
- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
