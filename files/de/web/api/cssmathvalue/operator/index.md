---
title: "CSSMathValue: operator-Eigenschaft"
short-title: operator
slug: Web/API/CSSMathValue/operator
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`operator`** Lese-only Eigenschaft der [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)-Schnittstelle gibt den Operator zurück, den der aktuelle Subtyp repräsentiert.
Zum Beispiel, wenn der aktuelle `CSSMathValue` Subtyp `CSSMathSum` ist, gibt diese Eigenschaft den String `"sum"` zurück.

## Wert

Ein {{jsxref('String')}}.

| Schnittstelle                                       | Wert        |
| --------------------------------------------------- | ----------- |
| [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)         | `"sum"`     |
| [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) | `"product"` |
| [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)         | `"min"`     |
| [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)         | `"max"`     |
| [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)     | `"clamp"`   |
| [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)   | `"negate"`  |
| [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)   | `"invert"`  |

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die `operator`-Eigenschaft die Operation identifiziert, die von einem {{cssxref("calc()")}}-Wert des `CSSMathValue`-Subtyps repräsentiert wird, einschließlich für einen geschachtelten Wert.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einer `calc()`-Subtraktion gesetzt, was als `CSSMathSum` dargestellt wird, dessen zweiter Term negiert ist.

```css
#demoBox {
  width: calc(50% - 0.5vw);
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

Wir lesen den `width`-Wert mit [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) und protokollieren dann seinen `operator` und den `operator` seines geschachtelten Wertes.

```js
const styleMap = document.querySelector("#demoBox").computedStyleMap();
const width = styleMap.get("width");

log(`operator: ${width.operator}`);
log(`nested value operator: ${width.values[1].operator}`);
```

#### Ergebnis

`width` wird durch ein `CSSMathSum`-Objekt dargestellt, dessen `operator` `"sum"` ist, weil `calc(50% - 0.5vw)` als Addition von `50%` und der Negation von `0.5vw` dargestellt wird.
Der `operator` des zweiten geschachtelten Wertes ist `"negate"`, was die Negation widerspiegelt.

{{EmbedLiveSample("Basic usage", 300, 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
