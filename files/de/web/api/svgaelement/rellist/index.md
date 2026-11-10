---
title: "SVGAElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/SVGAElement/relList
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`relList`** von [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt eine aktuelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die durch Leerzeichen getrennten [`<list-of-Link-Types>`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte des [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)-Attributs des SVG-Elements {{svgelement("a")}} widerspiegelt.

## Wert

Eine aktuelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).

Die Eigenschaft `relList` ist insofern schreibgeschützt, als Sie das `DOMTokenList`-Objekt nicht ersetzen können. Sie können `relList` jedoch direkt einen Wert zuweisen; dies entspricht einer Zuweisung an die Eigenschaft [`value`](/de/docs/Web/API/DOMTokenList/value). Außerdem können Sie das `DOMTokenList`-Objekt mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

Gegeben sei das folgende SVG:

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

Sie können jeden Link-Typ abrufen, der durch das `rel`-Attribut des `<a>`-Elements definiert ist:

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");
const relations = svgLink.relList;

relations.forEach((relValue) => {
  log(relValue);
});
```

{{EmbedLiveSample("examples","100%","200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
- [`SVGAElement.rel`](/de/docs/Web/API/SVGAElement/rel)
- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
