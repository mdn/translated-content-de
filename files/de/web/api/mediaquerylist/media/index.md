---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`media`**-Eigenschaft des
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces ist ein String, der eine
serialisierte Media-Query darstellt.

## Wert

Ein String, der eine serialisierte Media-Query darstellt.

## Beispiele

Dieses Beispiel führt die Media-Query `(width <= 600px)` aus und zeigt den
Wert der `media`-Eigenschaft der resultierenden `MediaQueryList` in einem
{{HTMLElement("span")}} an.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die Media-Query, die abgeglichen werden soll, an [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), um sie zu kompilieren. Dann wird die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `media`-Eigenschaft des Ergebnisses gesetzt.

### HTML

```html
<span class="mq-value"></span>
```

Ein `<span>`, um die Ausgabe zu erhalten.

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #88f;
  padding: 0.4em;
  border: 1px solid #dde;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media-Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
