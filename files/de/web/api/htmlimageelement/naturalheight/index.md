---
title: "HTMLImageElement: Eigenschaft naturalHeight"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`naturalHeight`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein schreibgeschützter Wert, der die intrinsische (natürliche), dichte-korrigierte Höhe des Bildes in [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) zurückgibt.

Dies ist die Höhe, die das Bild hätte, wenn dessen Höhe nicht eingeschränkt würde; wenn Sie keine Höhe für das Bild spezifizieren oder das Bild in einen Container einfügen, der entweder die Bildhöhe begrenzt oder ausdrücklich festlegt, wird es in dieser Höhe dargestellt.

> [!NOTE]
> Meistens ist die natürliche Höhe die tatsächliche Höhe des vom Server gesendeten Bildes. Dennoch können Browser ein Bild modifizieren, bevor sie es an den Renderer weitergeben. Zum Beispiel
> [verschlechtert Chrome die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalHeight` die von solchen Browsereingriffen modifizierte Höhe des Bildes als natürliche Höhe und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt. Dies ist die Höhe, in der das Bild natürlich gezeichnet wird, wenn kein Zwang oder spezifischer Wert für das Bild festgelegt ist. Diese natürliche Höhe ist korrigiert für die Pixeldichte des Geräts, auf dem sie angezeigt wird, im Gegensatz zu [`height`](/de/docs/Web/API/HTMLImageElement/height).

Wenn die intrinsische Höhe nicht verfügbar ist - entweder weil das Bild keine intrinsische Höhe angibt oder weil die Bilddaten nicht verfügbar sind, um diese Information zu erhalten - gibt `naturalHeight` den Wert 0 zurück.

## Beispiele

Dieses Beispiel zeigt sowohl die natürliche, dichte-korrigierte Größe eines Bildes als auch seine durch das CSS der Seite und andere Faktoren veränderten Darstellungsgröße an.

### HTML

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
    class="image"
    alt="A round wall clock with a white dial and black numbers" />
</div>
<pre></pre>
```

Das HTML enthält ein 400x398 Pixel großes Bild, das in ein {{HTMLElement("div")}} eingefügt wird.

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

Das Hauptmerkmal der obigen CSS ist, dass der Stil des Containers, in dem das Bild gezeichnet wird, 200px breit ist und das Bild so gezeichnet wird, dass es seine Breite (100 %) ausfüllt.

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

Der JavaScript-Code gibt die natürliche und die angezeigte Größe in ein {{HTMLElement("pre")}} aus. Dies geschieht in Reaktion auf den [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignishandler des Bildes, um sicherzustellen, dass das Bild verfügbar ist, bevor versucht wird, seine Breite und Höhe zu untersuchen.

### Ergebnis

{{EmbedLiveSample("Examples", 600, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
