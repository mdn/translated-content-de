---
title: "HTMLImageElement: x Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: 384b4f1e0490f2f91f154a9ca977da78e0cc63a9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`x`** Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle zeigt die x-Koordinate der linken Rahmenkante des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

## Wert

Ein Ganzzahlwert, der den Abstand in Pixel vom linken Rand des nächstgelegenen Wurzelelements zur linken Kante des Rahmenkastens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist dessen `x` relativ zu diesem Rahmen.

Im nachstehenden Diagramm ist die linke Rahmenkante der linke Rand des blauen Polsterbereichs. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt bis zum linken Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen zeigt, die mit einem Element verbunden sind](boxmodel-3.png)

## Beispiele

Das folgende Beispiel demonstriert die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

```html
<img id="avatar" src="/shared-assets/images/examples/grapefruit-slice.jpg" />
<pre id="log"></pre>
```

### JavaScript

Der JavaScript-Code, der das Bild abruft und seine `x`- und `y`-Werte ermittelt, ist unten dargestellt.

```js
const logBox = document.querySelector("pre");

const log = (msg) => {
  logBox.innerText += `${msg}\n`;
};

const image = document.getElementById("avatar");

log(`Image's global X: ${image.x}`);
log(`Image's global Y: ${image.y}`);
```

Schließlich können wir die Werte der `HTMLImageElement`-Eigenschaften `x` und `y` ermitteln und anzeigen.

### CSS

Das CSS, das die Bildgröße und seine Position definiert:

```css
img {
  margin-left: 30px;
  margin-top: 20px;
  max-width: 4em;
}
```

### Ergebnis

Das resultierende Bild sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y)
