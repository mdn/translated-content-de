---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`media`**-Eigenschaft der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle ist ein String, der eine serialisierte Medienabfrage darstellt.

## Wert

Ein String, der eine serialisierte Medienabfrage darstellt.

## Beispiele

Dieses Beispiel führt die Medienabfrage `(width <= 600px)` aus und zeigt den Wert der resultierenden `MediaQueryList`-`media`-Eigenschaft in einem {{HTMLElement("span")}} an.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die Medienabfrage, die abgeglichen werden soll, an [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), um sie zu kompilieren, und setzt dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `media`-Eigenschaft des Ergebnisses.

### HTML

```html
<span class="mq-value"></span>
```

Ein `<span>`, um die Ausgabe zu erhalten.

```css hidden
.mq-value {
  font:
    18px "Arial",
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Medienabfragen im Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
