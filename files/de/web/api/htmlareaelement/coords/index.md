---
title: "HTMLAreaElement: coords-Eigenschaft"
short-title: coords
slug: Web/API/HTMLAreaElement/coords
l10n:
  sourceCommit: 03c277f7671929b70c8c634adc71ef871674f09b
---

{{APIRef("HTML DOM")}}

Die **`coords`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle gibt die Koordinaten der Form des Elements als eine Liste von Fließkommazahlen an. Sie spiegelt das [`coords`](/de/docs/Web/HTML/Element/area#coords)-Attribut des {{htmlelement("area")}}-Elements wider.

Wenn die `shape` `rect` ist, handelt es sich bei der Form um ein Rechteck, und der Zeichenkettenwert besteht aus vier Komma-getrennten Zahlen, die die Koordinaten der oberen linken und der unteren rechten Ecke des Rechtecks angeben. Zum Beispiel definiert `0,0,200,20` die Koordinaten als `0,0`, was die obere linke Ecke der Image-Map ist, und `200,20`, was 200px von links und 20px von oben von der oberen linken Ecke der Image-Map ist.

Wenn die `shape` `circle` ist, repräsentieren die drei Komma-getrennten Zahlen die x- und y-Koordinaten des Kreiszentrums und den Radius.

Wenn die Form `poly` ist, besteht die Zeichenkette aus mindestens 6 Komma-getrennten Zahlen, die mindestens 3 Koordinatenpaare darstellen, die die Eckpunkte des Polygons definieren.

Für alle Koordinaten ist der Ursprung die obere linke Ecke des Bildes des {{htmlelement("map")}}-Elements.

## Wert

Ein String; bestehend aus einer Komma-getrennten Reihe von Zahlen.

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
