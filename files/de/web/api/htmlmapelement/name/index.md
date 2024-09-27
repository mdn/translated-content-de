---
title: "HTMLMapElement: name Eigenschaft"
short-title: name
slug: Web/API/HTMLMapElement/name
l10n:
  sourceCommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement) stellt den eindeutigen Namen des `<map>`-Elements dar.
Ihr Wert kann mit dem `useMap`-Attribut des {{HTMLElement("img")}}-Elements verwendet werden, um ein `<map>`-Element zu referenzieren.

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
console.log(mapElement.name); // output: "image-map"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap) Eigenschaft
- [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Element
