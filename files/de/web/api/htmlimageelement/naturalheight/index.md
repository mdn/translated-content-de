---
title: "HTMLImageElement: naturalHeight Eigenschaft"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{APIRef("HTML DOM")}}

Die **`naturalHeight`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein schreibgeschützter Wert, der die intrinsische (natürliche), dichte-korrigierte Höhe des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} zurückgibt.

Dies ist die Höhe des Bildes, wenn es ohne Einschränkung seiner Höhe gezeichnet wird; wenn Sie keine Höhe für das Bild angeben oder das Bild in einen Container einfügen, der entweder die Bildhöhe begrenzt oder ausdrücklich festlegt, wird es in dieser Höhe gerendert.

> [!NOTE]
> Meistens ist die natürliche Höhe die tatsächliche Höhe des vom Server gesendeten Bildes. Dennoch können Browser ein Bild modifizieren, bevor sie es zum Renderer schicken. Zum Beispiel, Chrome [verringert die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalHeight` die von solchen Browser-Eingriffen modifizierte Höhe des Bildes als natürliche Höhe und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt. Dies ist die Höhe, in der das Bild natürlich gezeichnet wird, wenn kein Zwang oder spezifischer Wert für das Bild festgelegt ist. Diese natürliche Höhe wird für die Pixeldichte des Geräts, auf dem es präsentiert wird, korrigiert, im Gegensatz zu [`height`](/de/docs/Web/API/HTMLImageElement/height).

Ist die intrinsische Höhe nicht verfügbar – entweder weil das Bild keine intrinsische Höhe angibt oder weil die Bilddaten nicht verfügbar sind, um diese Informationen zu erhalten – gibt `naturalHeight` den Wert 0 zurück.

## Beispiele

Dieses Beispiel zeigt sowohl die natürliche, dichte-korrigierte Größe eines Bildes als auch seine durch das CSS der Seite und andere Faktoren veränderte Rendergröße.

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

Das HTML enthält ein 400x398 Pixel großes Bild, das in einem {{HTMLElement("div")}} platziert ist.

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

Das Hauptaugenmerk im obigen CSS liegt darauf, dass der Stil des Containers, in dem das Bild gezeichnet wird, 200px breit ist und das Bild so gezeichnet wird, dass es seine Breite (100%) ausfüllt.

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

Der JavaScript-Code gibt die natürliche und die angezeigte Größe in das {{HTMLElement("pre")}} aus. Dies geschieht als Reaktion auf den [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignishandler des Bildes, um sicherzustellen, dass das Bild verfügbar ist, bevor versucht wird, seine Breite und Höhe zu untersuchen.

### Ergebnis

{{EmbedLiveSample("Examples", 600, 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
