---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`x`** der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt die x-Koordinate der linken Rahmenkante des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln zwischen der linken Kante des nächstgelegenen Wurzelelements und der linken Kante der Rahmenbox des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist sein `x`-Wert relativ zu diesem Frame.

Im folgenden Diagramm ist die linke Rahmenkante die linke Kante des blauen Innenabstandsbereichs. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt zur linken Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen eines Elements zeigt](boxmodel-3.png)

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

```html
<img id="avatar" src="/shared-assets/images/examples/grapefruit-slice.jpg" />
<pre id="log"></pre>
```

### CSS

Das CSS legt die Größe und Position des Bildes fest:

```css
img {
  margin-left: 30px;
  margin-top: 20px;
  max-width: 4em;
}
```

### JavaScript

Der folgende JavaScript-Code ruft das Bild ab und ermittelt seine `x`- und `y`-Werte.

```js
const logBox = document.querySelector("pre");

const log = (msg) => {
  logBox.innerText += `${msg}\n`;
};

const image = document.getElementById("avatar");

log(`Image's global X: ${image.x}`);
log(`Image's global Y: ${image.y}`);
```

Abschließend können wir die Werte der `x`- und `y`-Eigenschaften des `HTMLImageElement` ermitteln und anzeigen.

### Ergebnis

Das Ergebnis sieht so aus:

{{EmbedLiveSample("examples", 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y)
