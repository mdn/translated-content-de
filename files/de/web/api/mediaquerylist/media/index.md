---
title: "MediaQueryList: media-Eigenschaft"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("CSSOM")}}

Die **`media`**-Eigenschaft des schreibgeschützten
{{DOMxRef("MediaQueryList")}}-Interfaces ist ein String, der eine
serialisierte Media Query darstellt.

## Wert

Ein String, der eine serialisierte Media Query darstellt.

## Beispiele

Dieses Beispiel führt die Media Query `(max-width: 600px)` aus und zeigt den
Wert der resultierenden `media`-Eigenschaft der `MediaQueryList` in einem
{{HTMLElement("span")}} an.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

Der JavaScript-Code übergibt die zu prüfende Media Query an {{DOMxRef("Window.matchMedia", "matchMedia()")}}, um sie zu kompilieren, und setzt dann den {{DOMxRef("HTMLElement.innerText", "innerText")}} des `<span>` auf den Wert der `media`-Eigenschaft des Ergebnisses.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>` zur Aufnahme der Ausgabe.

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
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
