---
title: CSSMathValue
slug: Web/API/CSSMathValue
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSMathValue`** Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist das Basisinterface für Objekte, die komplexe numerische Werte darstellen, die von den CSS-Funktionen {{cssxref("calc()")}}, {{cssxref("min()")}}, {{cssxref("max()")}} und {{cssxref("clamp()")}} produziert werden.

> [!NOTE]
> `CSSMathValue` kann nicht direkt erstellt werden.
> Instanzen werden von der Plattform zurückgegeben (z.B. über [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get)) als eine ihrer unten aufgeführten Untertypen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator) {{ReadOnlyInline}}
  - : Gibt den Operator zurück, den der aktuelle Untertyp darstellt.

## Statische Methoden

_Erbt auch Methoden von seinem Elterninterface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)._

## Instanz-Methoden

_Erbt auch Methoden von seinem Elterninterface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)._

## Schnittstellen basierend auf CSSMathValue

- [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

## Beispiele

### `calc()` Darstellungen

Dieses Beispiel zeigt, wie die [`operator`](/de/docs/Web/API/CSSMathValue/operator) Eigenschaft die Operation identifiziert, die von einem {{cssxref("calc()")}} Wert des `CSSMathValue` Untertyps dargestellt wird, einschließlich eines verschachtelten Wertes.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einer `calc()` Subtraktion gesetzt, die als `CSSMathSum` dargestellt wird, dessen zweiter Term negiert ist.

```css
#demoBox {
  width: calc(30% - 20px);
}
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Wir lesen den `width` Wert mit [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) und protokollieren dann seinen `operator` und den `operator` seines verschachtelten Wertes.

```js
const styleMap = document.querySelector("#demoBox").computedStyleMap();
const width = styleMap.get("width");

log(`type: ${width.constructor.name}`);
log(`operator: ${width.operator}`);
log(`nested value type: ${width.values[1].constructor.name}`);
log(`nested value operator: ${width.values[1].operator}`);
```

#### Ergebnis

`width` wird durch ein `CSSMathSum` Objekt dargestellt, dessen `operator` `"sum"` ist, weil `calc(30% - 20px)` als Addition von `30%` und der Negation von `20px` dargestellt wird.
Der zweite verschachtelte Werttyp ist `CSSMathNegate` und sein `operator` ist `"negate"` (was die Negation widerspiegelt).

{{EmbedLiveSample("`calc()` representations", 300, 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
