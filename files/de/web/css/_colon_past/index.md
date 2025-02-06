---
title: :past
slug: Web/CSS/:past
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:past`** [CSS](/de/docs/Web/CSS)-[Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) ist eine zeitliche Pseudo-Klasse, die für jedes Element übereinstimmt, das vollständig vor einem Element erscheint, das {{cssxref(":current")}} entspricht. Zum Beispiel in einem Video mit Untertiteln, die durch [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden.

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
