---
title: "SVGAElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/SVGAElement/pathname
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`pathname`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle repräsentiert den Pfad des Elements.
Sie besteht aus einem anfänglichen `"/"`, gefolgt vom Pfad des {{SVGElement("a")}}-Elements SVG {{SVGAttr("href")}}, ohne die Abfragezeichenfolge oder das Fragment. Wenn das Element kein {{SVGAttr("href")}}-Attribut hat, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann festgelegt werden, um den Pfad der URL zu ändern. Das Festlegen der Eigenschaft schreibt auch das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu.

Weitere Informationen finden Sie unter [`URL.pathname`](/de/docs/Web/API/URL/pathname).

## Wert

Eine Zeichenfolge.

## Beispiele

### Den pathname eines SVG-Links abrufen

Bei folgendem SVG:

```html live-sample___svgaelement-pathname
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/docs/svg?q=path#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-pathname
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-pathname
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

```js hidden live-sample___svgaelement-pathname
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Pfad des Links ohne die Abfragezeichenfolge und das Fragment lesen:

```js live-sample___svgaelement-pathname
const link = document.getElementById("link");

log(`pathname: "${link.pathname}"`); // pathname: "/docs/svg"
```

{{EmbedLiveSample("svgaelement-pathname", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname)
