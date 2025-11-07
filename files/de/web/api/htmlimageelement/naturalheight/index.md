---
title: "HTMLImageElement: naturalHeight-Eigenschaft"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`naturalHeight`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die intrinsische (natürliche), dichte-korrigierte Höhe des Bildes in {{Glossary("CSS_pixel", "CSS-Pixel")}} zurück.

Dies ist die Höhe, die das Bild hat, wenn nichts seine Höhe einschränkt; wenn Sie weder eine Höhe für das Bild angeben noch das Bild in einen Container platzieren, der die Bildhöhe begrenzt oder ausdrücklich festlegt, wird es in dieser Größe gerendert.

> [!NOTE]
> Die natürliche Höhe ist meist die tatsächliche Höhe des vom Server gesendeten Bildes. Dennoch können Browser ein Bild ändern, bevor es an den Renderer übermittelt wird. Zum Beispiel [reduziert Chrome die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen wird die `naturalHeight`-Eigenschaft die durch solche Browsereingriffe modifizierte Höhe des Bildes als natürliche Höhe betrachten und diesen Wert zurückgeben.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Bildes in CSS-Pixel angibt. Dies ist die Höhe, in der das Bild auf natürliche Weise gezeichnet wird, wenn keine Einschränkung oder spezifischer Wert für das Bild festgelegt ist. Diese natürliche Höhe wird für die Pixeldichte des Geräts, auf dem es dargestellt wird, korrigiert, im Gegensatz zur [`height`](/de/docs/Web/API/HTMLImageElement/height).

Wenn die intrinsische Höhe nicht verfügbar ist – entweder weil das Bild keine intrinsische Höhe angibt oder weil die Bilddaten nicht verfügbar sind, um diese Information zu erhalten, gibt `naturalHeight` den Wert 0 zurück.

## Beispiele

Dieses Beispiel zeigt sowohl die natürliche, dichte-korrigierte Größe eines Bildes als auch seine durch CSS und andere Faktoren der Seite veränderte Rendergröße.

### HTML

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png"
    class="image"
    alt="A round wall clock with a white dial and black numbers" />
</div>
<pre></pre>
```

Das HTML enthält ein Bild mit 400x398 Pixel, das in einem {{HTMLElement("div")}} platziert ist.

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}
```

Das Hauptmerkmal im obigen CSS ist, dass der Stil des Containers, in dem das Bild gezeichnet wird, 200px breit ist und das Bild so gezeichnet wird, dass es seine Breite (100%) ausfüllt.

### JavaScript

```js
const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});
```

Der JavaScript-Code gibt die natürliche und die angezeigte Größe in das {{HTMLElement("pre")}} aus. Dies geschieht in Reaktion auf den [`load`](/de/docs/Web/API/HTMLElement/load_event)-Event-Handler des Bildes, um sicherzustellen, dass das Bild verfügbar ist, bevor versucht wird, seine Breite und Höhe zu prüfen.

### Ergebnis

{{EmbedLiveSample("Examples", 600, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth)
