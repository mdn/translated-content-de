---
title: "HTMLMapElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLMapElement/name
l10n:
  sourceCommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des {{domxref("HTMLMapElement")}} repräsentiert den eindeutigen Namen des `<map>`-Elements. Ihr Wert kann mit dem `useMap`-Attribut des {{HTMLElement("img")}}-Elements verwendet werden, um ein `<map>`-Element zu referenzieren.

Wenn ein `id`-Attribut auf dem {{HTMLElement("map")}}-Element gesetzt ist, sollte diese `name`-Eigenschaft mit dieser `id` identisch sein.

## Wert

Ein nicht-leerer String ohne Leerzeichen.

## Beispiel

```html
<map name="image-map">
  <area shape="circle" coords="15,15,5" />
</map>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
console.log(mapElement.name); // Ausgabe: "image-map"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.useMap")}}-Eigenschaft
- {{domxref("HTMLAreaElement")}}-Element
