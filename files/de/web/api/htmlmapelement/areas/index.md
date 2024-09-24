---
title: "HTMLMapElement: areas-Eigenschaft"
short-title: areas
slug: Web/API/HTMLMapElement/areas
l10n:
  sourceCommit: da6219d9480147488eda1f9120359384ee652b92
---

{{ApiRef("HTML DOM")}}

Die **`areas`**-Eigenschaft des {{domxref("HTMLMapElement")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Sammlung von {{HTMLElement("area")}}-Elementen zurückgibt, die mit dem {{HTMLElement("map")}}-Element verbunden sind.

## Wert

Ein {{domxref("HTMLCollection")}}-Objekt von {{domxref("HTMLAreaElement")}}-Elementen.

## Beispiel

```html
<map id="image-map">
  <area shape="circle" coords="50,50,35" alt="left arrow" />
  <area shape="circle" coords="150,50,35" alt="right arrow" />
</map>
<img
  usemap="#image-map"
  src="left-right-arrow.png"
  alt="left right arrow image" />
<output></output>
```

```css hidden
output {
  display: block;
}
```

```js
const mapElement = document.getElementById("image-map");
const outputElement = document.querySelector("output");

for (const area of mapElement.areas) {
  area.addEventListener("click", (event) => {
    outputElement.textContent = `You clicked on the ${area.alt} area.\n\n`;
  });
}
```

### Ergebnisse

{{EmbedLiveSample("Example",100,150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLAreaElement")}}
- {{domxref("HTMLImageElement.useMap")}}
