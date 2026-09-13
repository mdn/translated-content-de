---
title: "SVGAElement: port-Eigenschaft"
short-title: port
slug: Web/API/SVGAElement/port
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`port`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle stellt die Portnummer des {{SVGElement("a")}}-Elements SVG für dessen {{SVGAttr("href")}} dar.
Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:` sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/SVGAElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung. Ungültige Portnummern werden stillschweigend ignoriert. Das Festlegen schreibt außerdem das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu.

Weitere Informationen finden Sie unter [`URL.port`](/de/docs/Web/API/URL/port).

## Wert

Ein String.

## Beispiele

### Den Port eines SVG-Links abrufen

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-port
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:443/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-port
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-port
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

```js hidden live-sample___svgaelement-port
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Port des Links auslesen, der beim Standardport des Schemas leer ist:

```js live-sample___svgaelement-port
const link = document.getElementById("link");

log(`port: "${link.port}"`); // port: ""

link.setAttribute("href", "https://example.com:8888/");
log(`port: "${link.port}"`); // port: "8888"
```

{{EmbedLiveSample("svgaelement-port", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGElement("a")}}-Element
- [`HTMLAnchorElement.port`](/de/docs/Web/API/HTMLAnchorElement/port)
