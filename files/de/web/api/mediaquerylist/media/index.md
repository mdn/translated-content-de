---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`media`** der
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle ist ein String, der eine
serialisierte Media-Query darstellt.

## Wert

Ein String, der eine serialisierte Media-Query darstellt.

## Beispiele

Dieses Beispiel führt die Media-Query `(width <= 600px)` aus und zeigt den
Wert der resultierenden `media`-Eigenschaft der `MediaQueryList` in einem
{{HTMLElement("span")}} an.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die zu prüfende Media-Query an [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `media`-Eigenschaft des Ergebnisses.

### HTML

```html
<span class="mq-value"></span>
```

Ein `<span>`, um die Ausgabe zu empfangen.

```css hidden
.mq-value {
  font:
    18px arial,
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

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media-Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
