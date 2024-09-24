---
title: "HTMLImageElement: naturalHeight-Eigenschaft"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`naturalHeight`**-Eigenschaft des {{domxref("HTMLImageElement")}}-Interfaces ist ein schreibgeschützter Wert, der die intrinsische (natürliche), dichte-korrigierte Höhe des Bildes in {{Glossary("CSS pixel", "CSS-Pixel")}} zurückgibt.

Dies ist die Höhe, die das Bild hat, wenn nichts seine Höhe einschränkt; wenn Sie keine Höhe für das Bild angeben oder das Bild in einen Container setzen, der entweder die Bildhöhe einschränkt oder ausdrücklich festlegt, wird es so hoch gerendert.

> [!NOTE]
> Meistens ist die natürliche Höhe die tatsächliche Höhe des Bildes, das vom Server gesendet wird. Dennoch können Browser ein Bild ändern, bevor es an den Renderer übergeben wird. Zum Beispiel [reduziert Chrome die Auflösung von Bildern auf Geräten mit geringer Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalHeight` die Höhe des durch solche Browsereingriffe geänderten Bildes als die natürliche Höhe und gibt diesen Wert zurück.

## Wert

Ein Integer-Wert, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt. Dies ist die Höhe, in der das Bild natürlich gezeichnet wird, wenn keine Einschränkung oder spezifischer Wert für das Bild festgelegt ist. Diese natürliche Höhe ist für die Pixeldichte des Geräts korrigiert, auf dem sie präsentiert wird, im Gegensatz zu {{domxref("HTMLImageElement.height", "height")}}.

Wenn die intrinsische Höhe nicht verfügbar ist – entweder weil das Bild keine intrinsische Höhe angibt oder weil die Bilddaten nicht verfügbar sind, um diese Information zu erhalten – gibt `naturalHeight` den Wert 0 zurück.

## Beispiele

Dieses Beispiel zeigt sowohl die natürliche, dichte-korrigierte Größe eines Bildes als auch seine durch das CSS der Seite und andere Faktoren veränderte Rendergröße.

### HTML

```html
<div class="box">
  <img
    src="/de/docs/Web/HTML/Element/img/clock-demo-400px.png"
    class="image"
    alt="A round wall clock with a white dial and black numbers" />
</div>
<pre></pre>
```

Das HTML enthält ein 400x398-Pixel-Bild, das in einem {{HTMLElement("div")}} platziert ist.

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

Das Hauptmerkmal in dem obigen CSS ist, dass der Stil für den Container, in dem das Bild gezeichnet wird, 200px breit ist und das Bild so gezeichnet wird, dass es seine Breite (100%) ausfüllt.

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

Der JavaScript-Code gibt die natürliche und die angezeigte Größe in den {{HTMLElement("pre")}} aus. Dies wird als Reaktion auf den {{domxref("HTMLElement.load_event", "load")}}-Ereignis-Handler des Bildes durchgeführt, um sicherzustellen, dass das Bild verfügbar ist, bevor versucht wird, seine Breite und Höhe zu untersuchen.

### Ergebnis

{{EmbedLiveSample("Examples", 600, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
