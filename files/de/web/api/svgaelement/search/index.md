---
title: "SVGAElement: search-Eigenschaft"
short-title: search
slug: Web/API/SVGAElement/search
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`search`**-Eigenschaft der Schnittstelle [`SVGAElement`](/de/docs/Web/API/SVGAElement) repräsentiert den Abfragestring des Elements.
Sie besteht aus einem `"?"`, gefolgt von den Parametern des Attributs {{SVGAttr("href")}} des SVG-Elements {{SVGElement("a")}}. Wenn die URL keine Parameter hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Abfragestring der URL zu ändern. Beim Festlegen wird dem bereitgestellten Wert ein einzelnes Präfix `"?"` hinzugefügt, falls es noch nicht vorhanden ist. Durch Festlegen auf `""` wird der Abfragestring entfernt. Das Festlegen schreibt außerdem das Attribut {{SVGAttr("href")}} des Elements als vollständige, absolute URL neu.

Die Abfrage wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Ein String.

## Beispiele

### Abrufen des Suchstrings aus einem SVG-Link

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-search
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/search?q=svg">
    <text x="0" y="20">Search for SVG</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-search
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-search
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

```js hidden live-sample___svgaelement-search
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Abfragestring des Links auslesen:

```js live-sample___svgaelement-search
const link = document.getElementById("link");

log(`search: "${link.search}"`); // search: "?q=svg"
```

{{EmbedLiveSample("svgaelement-search", "100%", "120")}}

### Erweiterte Analyse mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwendet werden, um einzelne Parameter aus dem Abfragestring auszulesen:

```html live-sample___svgaelement-search-params
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/search?q=svg">
    <text x="0" y="20">Search for SVG</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-search-params
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-search-params
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

```js hidden live-sample___svgaelement-search-params
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

```js live-sample___svgaelement-search-params
const link = document.getElementById("link");
const params = new URLSearchParams(link.search);

log(`q: "${params.get("q")}"`); // q: "svg"
```

{{EmbedLiveSample("svgaelement-search-params", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search)
