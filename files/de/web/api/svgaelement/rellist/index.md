---
title: "SVGAElement: relList Eigenschaft"
short-title: relList
slug: Web/API/SVGAElement/relList
l10n:
  sourceCommit: 068bb0449377f73e358a92b1b26265aa30c02db1
---

{{APIRef("SVG")}}

Die **`relList`** schreibgeschützte Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die durch Leerzeichen getrennten [`<list-of-Link-Types>`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte des [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)-Attributs des SVG {{svgelement("a")}} Elements widerspiegelt.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die
[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).

## Beispiele

Gegeben folgendes SVG:

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="alternate bookmark">
    <text x="30" y="10">Link text</text>
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

Wir können jeden Link-Typ abrufen, der durch das `rel`-Attribut des `<a>` Elements definiert ist:

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");
const relations = svgLink.relList;

relations.forEach((relValue) => {
  log(relValue);
});
```

{{EmbedLiveSample("Example","100%","200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
- [`SVGAnchorElement.relList`](/de/docs/Web/API/SVGAnchorElement/relList)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
