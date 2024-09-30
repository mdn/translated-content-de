---
title: ":past"
slug: Web/CSS/:past
l10n:
  sourceCommit: 8ca85cdbaa756d178f785dcd0b0ac1d6c2e8d896
---

{{CSSRef}}

Der **`:past`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor ist eine zeitdimensionale Pseudoklasse, die für jedes Element übereinstimmt, das vollständig vor einem Element erscheint, das mit {{cssxref(":current")}} übereinstimmt. Zum Beispiel in einem Video mit Untertiteln, die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden.

```css
:past(p, span) {
  display: none;
}
```

## Syntax

```css
:past {
  /* ... */
}
```

## Beispiele

### CSS

```css
:past(p, span) {
  display: none;
}
```

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="subtitles.vtt"
    default />
</video>
```

### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
This is the first caption

2
00:00:06.000 --> 00:00:09.000
This is the second caption

3
00:00:11.000 --> 00:00:19.000
This is the third caption
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- {{cssxref(":current")}}
- {{cssxref(":future")}}
