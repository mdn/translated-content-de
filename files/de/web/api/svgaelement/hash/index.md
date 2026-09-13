---
title: "SVGAElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/SVGAElement/hash
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`hash`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle repräsentiert den Fragmentbezeichner des Elements.
Sie ist die Zeichenfolge `"#"`, gefolgt vom Fragmentbezeichner des {{SVGAttr("href")}}-Attributs des SVG-{{SVGElement("a")}}-Elements. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann gesetzt werden, um das Fragment der URL zu ändern. Beim Setzen wird dem bereitgestellten Wert ein einzelnes `"#"`-Präfix hinzugefügt, sofern es nicht bereits vorhanden ist, und das Setzen auf `""` entfernt das Fragment. Das Setzen schreibt außerdem das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu.

Weitere Informationen finden Sie unter [`URL.hash`](/de/docs/Web/API/URL/hash).

## Wert

Eine Zeichenfolge.

## Beispiele

### Den Hash aus einem SVG-Link abrufen

Bei folgendem SVG:

```html live-sample___svgaelement-hash
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-hash
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-hash
svg {
  width: 200px;
  height: 30px;
}
svg a text {
  fill: blue;
  text-decoration: underline;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgaelement-hash
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Können wir den Fragmentbezeichner des Links auslesen:

```js live-sample___svgaelement-hash
const link = document.getElementById("link");

log(`hash: "${link.hash}"`); // hash: "#example"
```

{{EmbedLiveSample("svgaelement-hash", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGElement("a")}}-Element
- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
