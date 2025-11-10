---
title: "SVGAElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/SVGAElement/rel
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

{{APIRef("SVG")}}

Die **`rel`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt einen String zurück, der den Wert des `rel`-Attributs des SVG-{{svgelement("a")}}-Elements widerspiegelt.

Das `rel`-Attribut gibt die durch Leerzeichen getrennte Liste von Linktypen, die [`<list-of-Link-Types>`](/de/docs/Web/HTML/Reference/Attributes/rel), an, die die Beziehung zwischen dem Ziel oder der Ressource, die durch das {{SVGElement("a")}}-Element dargestellt wird, und dem aktuellen Dokument beschreibt. Die Eigenschaft kann den Wert des `rel`-Attributs abrufen oder festlegen.

## Wert

Ein String; der Wert des `rel`-Attributs.

## Beispiele

Gegebenes SVG:

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="terms-of-service">
    <text x="30" y="10">Link text.</text>
  </a>
</svg>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
svg {
  height: 50px;
}
text {
  font-size: 1rem;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wir können das `rel`-Attribut abrufen und festlegen:

```js
// Select an SVG <a> element
const svgLink = document.querySelector("svg a");

// Access the rel property
log(`Rel: ${svgLink.rel}`);

// Set the rel property
svgLink.rel = "alternate bookmark";

// Access the rel property again
log(`New rel: "${svgLink.rel}"`); // New rel: "alternate bookmark"
```

{{EmbedLiveSample("Example","100%","200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
