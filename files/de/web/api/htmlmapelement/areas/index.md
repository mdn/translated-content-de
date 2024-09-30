---
title: "HTMLMapElement: areas-Eigenschaft"
short-title: areas
slug: Web/API/HTMLMapElement/areas
l10n:
  sourceCommit: da6219d9480147488eda1f9120359384ee652b92
---

{{ApiRef("HTML DOM")}}

Die **`areas`**-Schreibschutz-Eigenschaft der Schnittstelle [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement) gibt eine Sammlung von {{HTMLElement("area")}}-Elementen zurück, die mit dem {{HTMLElement("map")}}-Element verbunden sind.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt von [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Elementen.

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

- [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
