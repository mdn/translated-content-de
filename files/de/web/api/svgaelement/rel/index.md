---
title: "SVGAElement: Eigenschaft rel"
short-title: rel
slug: Web/API/SVGAElement/rel
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("SVG")}}

Die Eigenschaft **`rel`** der Schnittstelle [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt einen String zurück, der den Wert des Attributs [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel) des SVG-Elements {{svgelement("a")}} widerspiegelt.

Das Attribut `rel` gibt eine durch Leerzeichen getrennte Liste von Linktypen an, die [`<list-of-Link-Types>`](/de/docs/Web/HTML/Reference/Attributes/rel). Sie beschreibt die Beziehung zwischen dem Ziel oder der Ressource, die durch das Element {{SVGElement("a")}} repräsentiert wird, und dem aktuellen Dokument. Über die Eigenschaft kann der Wert des Attributs `rel` gelesen oder gesetzt werden.

## Wert

Ein String, der den Wert des Attributs `rel` enthält.

## Beispiele

Gegeben sei das folgende SVG:

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

Das Attribut `rel` kann gelesen und gesetzt werden:

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

{{EmbedLiveSample("examples","100%","200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
- [`SVGAElement.relList`](/de/docs/Web/API/SVGAElement/relList)
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
