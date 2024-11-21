---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("CSSOM")}}

Die **`media`**-Eigenschaft der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle ist eine schreibgeschützte Zeichenkette, die eine serialisierte Media Query darstellt.

## Wert

Eine Zeichenkette, die eine serialisierte Media Query darstellt.

## Beispiele

Dieses Beispiel führt die Media Query `(max-width: 600px)` aus und zeigt den Wert der resultierenden `media`-Eigenschaft der `MediaQueryList` in einem {{HTMLElement("span")}} an.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die zu passende Media Query an [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), um sie zu kompilieren, und setzt dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `media`-Eigenschaft des Ergebnisses.

### HTML

```html
<span class="mq-value"></span>
```

Ein `<span>` zur Aufnahme der Ausgabe.

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

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
