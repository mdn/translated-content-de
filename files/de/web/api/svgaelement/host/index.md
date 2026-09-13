---
title: "SVGAElement: host-Eigenschaft"
short-title: host
slug: Web/API/SVGAElement/host
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`host`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle repräsentiert den Host des Elements.
Sie ist der [`hostname`](/de/docs/Web/API/SVGAElement/hostname) des {{SVGAttr("href")}}-Attributs des SVG-Elements {{SVGElement("a")}}, gefolgt von einem `":"` und dem [`port`](/de/docs/Web/API/SVGAElement/port), falls die URL einen solchen hat. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Host der URL zu ändern. Das Festlegen der Eigenschaft schreibt auch das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu.

Weitere Informationen finden Sie unter [`URL.host`](/de/docs/Web/API/URL/host).

## Wert

Ein String.

## Beispiele

### Den Host aus einem SVG-Link abrufen

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-host
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-host
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-host
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

```js hidden live-sample___svgaelement-host
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Host des Links auslesen und sehen, dass der Port nur enthalten ist, wenn er nicht der Standardport für das Schema ist:

```js live-sample___svgaelement-host
const link = document.getElementById("link");

log(`host: "${link.host}"`); // host: "example.com"

link.setAttribute("href", "https://example.com:443/");
log(`host: "${link.host}"`); // host: "example.com"

link.setAttribute("href", "https://example.com:4097/");
log(`host: "${link.host}"`); // host: "example.com:4097"
```

{{EmbedLiveSample("svgaelement-host", "100%", "160")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.host`](/de/docs/Web/API/HTMLAnchorElement/host)
