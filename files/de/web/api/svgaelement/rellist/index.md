---
title: "SVGAElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/SVGAElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("SVG")}}

Die schreibgeschützte **`relList`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt eine Live-Instanz von [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die durch Leerzeichen getrennte Zeichenkettenwerte [`<list-of-Link-Types>`](/de/docs/Web/HTML/Reference/Attributes/rel) des `rel`-Attributs des SVG-{{svgelement("a")}}-Elements widerspiegelt.

## Wert

Eine Live-Instanz von [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).

Obwohl die `relList`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt auf die `relList`-Eigenschaft zuweisen, was gleichbedeutend mit einer Zuweisung zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

Gegeben sei folgendes SVG:

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

Wir können jeden Linktyp abrufen, der durch das `rel`-Attribut des `<a>`-Elements definiert ist:

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
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
