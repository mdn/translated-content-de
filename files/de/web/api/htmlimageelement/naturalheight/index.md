---
title: "HTMLImageElement: naturalHeight-Eigenschaft"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`naturalHeight`** des Interfaces [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt die intrinsische (natürliche), dichtekorrigierte Höhe des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} zurück.

Dies ist die Höhe, die das Bild hätte, wenn es ohne Einschränkung seiner Höhe gezeichnet würde; wenn Sie dem Bild weder eine Höhe angeben noch das Bild in einem Container platzieren, der die Bildhöhe begrenzt oder ausdrücklich festlegt, wird es in dieser Höhe gerendert.

> [!NOTE]
> Meistens entspricht die natürliche Höhe der tatsächlichen Höhe des vom Server gesendeten Bildes. Browser können jedoch ein Bild ändern, bevor sie es an den Renderer weitergeben. Beispielsweise [reduziert Chrome die Auflösung von Bildern auf Geräten mit geringer Leistung](https://crbug.com/1187043#c7). In solchen Fällen betrachtet `naturalHeight` die Höhe des durch solche Browser-Eingriffe veränderten Bildes als natürliche Höhe und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt. Dies ist die Höhe, in der das Bild natürlich gezeichnet wird, wenn für das Bild keine Einschränkung oder kein spezifischer Wert festgelegt ist. Anders als [`height`](/de/docs/Web/API/HTMLImageElement/height) wird diese natürliche Höhe für die Pixeldichte des Geräts korrigiert, auf dem sie dargestellt wird.

Wenn die intrinsische Höhe nicht verfügbar ist – entweder weil das Bild keine intrinsische Höhe angibt oder weil die Bilddaten nicht verfügbar sind, um diese Information zu erhalten –, gibt `naturalHeight` 0 zurück.

## Beispiele

Dieses Beispiel zeigt sowohl die natürliche, dichteangepasste Größe eines Bildes als auch seine gerenderte Größe, wie sie durch das CSS der Seite und andere Faktoren verändert wird.

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

Das HTML enthält ein Bild mit 400 × 398 Pixeln, das innerhalb eines {{HTMLElement("div")}} platziert ist.

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

Das Wesentliche am obigen CSS ist, dass der für den Container verwendete Stil, in dem das Bild gezeichnet wird, 200px breit ist und das Bild so gezeichnet wird, dass es seine Breite (100 %) ausfüllt.

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

Der JavaScript-Code gibt die natürliche und die dargestellte Größe in das {{HTMLElement("pre")}} aus. Dies erfolgt als Reaktion auf den [`load`](/de/docs/Web/API/HTMLElement/load_event)-Event-Handler des Bildes, um sicherzustellen, dass das Bild verfügbar ist, bevor versucht wird, seine Breite und Höhe zu untersuchen.

### Ergebnis

{{EmbedLiveSample("Examples", 600, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth)
