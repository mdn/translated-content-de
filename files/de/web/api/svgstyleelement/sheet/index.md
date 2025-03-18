---
title: "SVGStyleElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/SVGStyleElement/sheet
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`SVGStyleElement.sheet`** gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zurück, das dem angegebenen SVG-Style-Element entspricht, oder `null`, wenn keines vorhanden ist.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet), oder `null`, wenn das Element kein zugeordnetes Stylesheet hat.

## Beispiele

Dieses Beispiel zeigt, wie man das mit einem Element verknüpfte CSS-Stylesheet erhält.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle).

```html
<textarea id="log" rows="3" cols="50"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

### JavaScript

Der unten stehende Code erstellt ein `style`-Element (ein `SVGStyleElement`) und fügt es dem SVG hinzu.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Der Code unten protokolliert dann das Stylesheet und die mit diesem neuen Element verknüpfte CSS-Regel, indem er `style.sheet` verwendet.

```js
// Log the sheet associated with this new element.
const log = document.getElementById("log");
log.value = `${style.sheet} with rules[0].cssText:\n ${style.sheet.rules[0].cssText}`;
```

### Ergebnis

Das Ergebnis wird unten angezeigt.
Bei Erfolg zeigt das Protokoll das `CSSStyleSheet`-Objekt, das auf den SVG-Kreis angewendet wird.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet)
