---
title: "SVGUseElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGUseElement/href
l10n:
  sourceCommit: 6fbc4d2771113be094b8dd7181891a62096626cb
---

{{APIRef("SVG")}}

Die schreibgeschützte **`href`**-Eigenschaft der [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}}-{{deprecated_inline}}-Attribut des angegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

Angenommen Sie haben das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use href="#circle1" x="50" y="50" />
  <use href="#circle2" x="100" y="50" />
</svg>
```

Wir können das `href`-Attribut der {{SVGElement("use")}}-Elemente abrufen:

```js
const uses = document.querySelectorAll("use");
console.log(uses[0].href.baseVal); // output: "#circle1"
console.log(uses[1].href.baseVal); // output: "#circle2"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
