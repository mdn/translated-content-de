---
title: "SVGAElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/SVGAElement/hostname
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`hostname`**-Eigenschaft der Schnittstelle [`SVGAElement`](/de/docs/Web/API/SVGAElement) repräsentiert den Hostnamen des Elements.
Dabei handelt es sich entweder um den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} des {{SVGElement("a")}}-Elements `href`-Attributs. Anders als [`host`](/de/docs/Web/API/SVGAElement/host) enthält sie niemals den Port. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IP-Adressen werden normalisiert, beispielsweise durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) umgewandelt.

Diese Eigenschaft kann festgelegt werden, um den Hostnamen der URL zu ändern. Durch das Festlegen wird auch das `href`-Attribut des Elements als vollständige, absolute URL neu geschrieben.

Weitere Informationen finden Sie unter [`URL.hostname`](/de/docs/Web/API/URL/hostname).

## Wert

Ein String.

## Beispiele

### Den Hostnamen aus einem SVG-Link abrufen

Bei folgendem SVG:

```html live-sample___svgaelement-hostname
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:4097/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-hostname
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-hostname
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

```js hidden live-sample___svgaelement-hostname
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

können wir den Hostnamen des Links ohne den Port auslesen:

```js live-sample___svgaelement-hostname
const link = document.getElementById("link");

log(`hostname: "${link.hostname}"`); // hostname: "example.com"
```

{{EmbedLiveSample("svgaelement-hostname", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname)
