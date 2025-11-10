---
title: "HTMLAreaElement: coords Eigenschaft"
short-title: coords
slug: Web/API/HTMLAreaElement/coords
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`coords`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle gibt die Koordinaten der Form des Elements als eine Liste von Gleitkommazahlen an. Sie spiegelt das [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)-Attribut des {{htmlelement("area")}}-Elements wider.

Wenn `shape` `rect` ist, handelt es sich um ein Rechteck, und der Zeichenfolgenwert mit vier durch Kommas getrennten Zahlen gibt die Koordinaten der oberen linken und unteren rechten Ecken des Rechtecks an. Zum Beispiel definiert `0,0,200,20` die Koordinaten als `0,0`, was die obere linke Ecke des Bildmaps ist, und `200,20`, was 200px von links und 20px von oben von der oberen linken Ecke des Bildmaps entfernt ist.

Wenn `shape` `circle` ist, repräsentieren die drei durch Kommas getrennten Zahlen die x- und y-Koordinaten des Kreismittelpunkts und den Radius.

Wenn die Form `poly` ist, besteht die Zeichenfolge aus mindestens 6 durch Kommas getrennten Zahlen, die mindestens 3 Koordinatenpaare darstellen, die die Ecken des Polygons definieren.

Für alle Koordinaten ist der Ursprung die obere linke Ecke des Bildes des {{htmlelement("map")}}-Elements.

## Wert

Ein String; bestehend aus einer durch Kommas getrennten Zahlenreihe.

## Beispiele

```js
const areaElement = document.getElementById("circleArea");
console.log(areaElement.coords);
areaElement.coords = "25,25,25";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAreaElement.shape`](/de/docs/Web/API/HTMLAreaElement/shape)
- [`HTMLAreaElement.alt`](/de/docs/Web/API/HTMLAreaElement/alt)
- [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement)
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
