---
title: "SVGAElement: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/SVGAElement/protocol
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`protocol`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle stellt das Protokoll oder Schema des {{SVGElement("a")}}-Elements SVG und dessen {{SVGAttr("href")}} dar, einschließlich des abschließenden `":"`.

Diese Eigenschaft kann festgelegt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an die bereitgestellte Zeichenfolge angehängt, falls es nicht angegeben wurde. Das bereitgestellte Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten. Durch das Festlegen wird auch das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu geschrieben.

Weitere Informationen finden Sie unter [`URL.protocol`](/de/docs/Web/API/URL/protocol).

## Wert

Eine Zeichenfolge.

## Beispiele

### Abrufen des Protokolls eines SVG-Links

Bei folgendem SVG:

```html live-sample___svgaelement-protocol
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-protocol
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-protocol
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

```js hidden live-sample___svgaelement-protocol
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

können wir das Protokoll des Links einschließlich des abschließenden `":"` auslesen:

```js live-sample___svgaelement-protocol
const link = document.getElementById("link");

log(`protocol: "${link.protocol}"`); // protocol: "https:"
```

{{EmbedLiveSample("svgaelement-protocol", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGElement("a")}}-Element
- [`HTMLAnchorElement.protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol)
