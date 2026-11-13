---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Schnittstelle **`CSSNumericValue`** der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist die Basisschnittstelle für Objekte, die numerische CSS-Werte wie `10px`, `50%` oder `calc(1px + 2em)` darstellen.
Sie stellt gemeinsame Methoden für grundlegende arithmetische Operationen, den Vergleich von Werten und die Umrechnung zwischen Einheiten bereit.

> [!NOTE]
> `CSSNumericValue` kann nicht direkt instanziiert werden.
> Instanzen werden durch die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) wie `CSS.px()`, durch [`parse()`](/de/docs/Web/API/CSSNumericValue/parse_static) oder durch das Auslesen eines Stils erstellt. Sie gehören immer zu einem der unten aufgeführten Subtypen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Keine.

## Statische Methoden

- [`CSSNumericValue.parse()`](/de/docs/Web/API/CSSNumericValue/parse_static)
  - : Erstellt einen `CSSNumericValue` aus einer CSS-Zeichenfolge wie `"42px"`.

## Instanzmethoden

- [`CSSNumericValue.add()`](/de/docs/Web/API/CSSNumericValue/add)
  - : Gibt einen neuen Wert zurück, der die Summe des `CSSNumericValue` und der übergebenen Werte ist.
- [`CSSNumericValue.sub()`](/de/docs/Web/API/CSSNumericValue/sub)
  - : Gibt einen neuen Wert zurück, der dem `CSSNumericValue` abzüglich der übergebenen Werte entspricht.
- [`CSSNumericValue.mul()`](/de/docs/Web/API/CSSNumericValue/mul)
  - : Gibt einen neuen Wert zurück, der dem `CSSNumericValue` multipliziert mit den übergebenen Werten entspricht.
- [`CSSNumericValue.div()`](/de/docs/Web/API/CSSNumericValue/div)
  - : Gibt einen neuen Wert zurück, der dem `CSSNumericValue` dividiert durch die übergebenen Werte entspricht.
- [`CSSNumericValue.min()`](/de/docs/Web/API/CSSNumericValue/min)
  - : Gibt den kleinsten Wert aus dem `CSSNumericValue` und den übergebenen Werten zurück oder ein [`CSSMathMin`](/de/docs/Web/API/CSSMathMin), wenn nicht alle dieselbe Einheit haben.
- [`CSSNumericValue.max()`](/de/docs/Web/API/CSSNumericValue/max)
  - : Gibt den größten Wert aus dem `CSSNumericValue` und den übergebenen Werten zurück oder ein [`CSSMathMax`](/de/docs/Web/API/CSSMathMax), wenn nicht alle dieselbe Einheit haben.
- [`CSSNumericValue.equals()`](/de/docs/Web/API/CSSNumericValue/equals)
  - : Gibt `true` zurück, wenn jeder übergebene Wert mit dem `CSSNumericValue` übereinstimmt und mit denselben Werten und Einheiten geschrieben ist, andernfalls `false`.
- [`CSSNumericValue.to()`](/de/docs/Web/API/CSSNumericValue/to)
  - : Konvertiert den `CSSNumericValue` in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der angegebenen Einheit.
- [`CSSNumericValue.toSum()`](/de/docs/Web/API/CSSNumericValue/toSum)
  - : Konvertiert den `CSSNumericValue` in eine [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), deren Terme nur die angegebenen Einheiten verwenden, oder in die einfachste entsprechende Summe, wenn keine Einheiten angegeben sind.
- [`CSSNumericValue.type()`](/de/docs/Web/API/CSSNumericValue/type)
  - : Gibt ein `CSSNumericType`-Dictionary zurück, das den Typ des `CSSNumericValue` beschreibt, beispielsweise eine Länge oder einen Winkel.

## Auf CSSNumericValue basierende Schnittstellen

Die folgenden Schnittstellen erben von `CSSNumericValue`:

- [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)

## Beispiele

### Arithmetische Operationen mit numerischen Werten

Der folgende Code addiert und multipliziert numerische Werte, die mit den [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) erstellt wurden.
Wenn sich das Ergebnis als einzelner Wert mit einer Einheit darstellen lässt, gibt die Methode einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück.
Andernfalls gibt sie einen der Subtypen von [`CSSMathValue`](/de/docs/Web/API/CSSMathValue) zurück, bei denen die Terme getrennt bleiben.

```js
const sameUnits = CSS.px(10).add(CSS.px(5));
console.log(sameUnits.constructor.name); // "CSSUnitValue"
console.log(sameUnits.toString()); // "15px"

const mixedUnits = CSS.px(10).add(CSS.percent(5));
console.log(mixedUnits.constructor.name); // "CSSMathSum"
console.log(mixedUnits.toString()); // "calc(10px + 5%)"

const doubled = CSS.px(10).mul(2);
console.log(doubled.toString()); // "20px"
```

### Eine Box durch arithmetische Operationen verbreitern

In diesem Beispiel werden die arithmetischen Methoden verwendet, um eine Box bei jedem Klick auf eine Schaltfläche bis zu einer maximalen Breite zu verbreitern.
Beachten Sie, dass es ausgeblendeten Code für die Protokollierung gibt, der für das Beispiel nicht relevant ist.

#### HTML

Zunächst definieren wir die Box, die verbreitert werden soll, und die Schaltfläche, die wir dafür verwenden.

```html
<div id="grow-box"></div>
<button id="grow-button">Grow by 20px</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Die Box ist anfangs 100 Pixel breit.

```css
#grow-box {
  width: 100px;
  height: 50px;
  margin-bottom: 1rem;
  background-color: #6666dd;
}
```

```css hidden
#log {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der Code ruft zunächst die Box und die Schaltfläche ab und legt die maximale Breite als `CSSUnitValue` fest.
Anschließend ruft er mit [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) die anfängliche Breite der Box ab und protokolliert sie zusammen mit ihrem [`type()`](/de/docs/Web/API/CSSNumericValue/type).

```js
const growBox = document.getElementById("grow-box");
const growButton = document.getElementById("grow-button");
const maxWidth = CSS.px(300);

const startWidth = growBox.computedStyleMap().get("width");
log(`start: ${startWidth}, type: ${JSON.stringify(startWidth.type())}`);
```

Bei jedem Klick auf die Schaltfläche liest der Handler die aktuelle Breite der Box aus und addiert mit [`add()`](/de/docs/Web/API/CSSNumericValue/add) 20 Pixel dazu.
Anschließend stellt er mit [`min()`](/de/docs/Web/API/CSSNumericValue/min) sicher, dass die neue Breite nie größer als `maxWidth` ist.
Da alle Werte in `px` angegeben sind, gibt jede Methode einen einzelnen `CSSUnitValue` zurück, den der Handler als neue Breite der Box festlegt.

```js
growButton.addEventListener("click", () => {
  const width = growBox.computedStyleMap().get("width");
  const newWidth = width.add(CSS.px(20)).min(maxWidth);
  growBox.attributeStyleMap.set("width", newWidth);
  log(`width: ${newWidth}`);
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche, um die Box zu verbreitern.
Das Protokoll beginnt mit der Breite der Box und ihrem Typ, `{"length":1}`. Das bedeutet, dass die Breite eine Länge ist.
Danach zeigt es die neue Breite nach jedem Klick an. Bei `300px` wird die Box nicht mehr breiter.

{{EmbedLiveSample("Growing a box with arithmetic", 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
