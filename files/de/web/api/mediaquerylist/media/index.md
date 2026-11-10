---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`media`** der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) ist ein String, der eine serialisierte Medienabfrage darstellt.

## Wert

Ein String, der eine serialisierte Medienabfrage darstellt.

## Beispiele

Dieses Beispiel führt die Medienabfrage `(width <= 600px)` aus und zeigt den Wert der Eigenschaft `media` der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an.

### HTML

```html
<span class="mq-value"></span>
```

Ein `<span>` für die Ausgabe.

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

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die zu prüfende Medienabfrage an [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), um sie zu kompilieren. Anschließend setzt er [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der Eigenschaft `media` des Ergebnisses.

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Medienabfragen im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
