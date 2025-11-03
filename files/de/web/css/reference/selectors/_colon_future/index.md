---
title: :future
slug: Web/CSS/Reference/Selectors/:future
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:future`** [CSS](/de/docs/Web/CSS) [pseudo-class](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor ist eine zeitdimensionale Pseudo-Klasse, die für jedes Element übereinstimmt, das vollständig nach einem Element erscheint, das mit {{cssxref(":current")}} übereinstimmt. Ein Beispiel dafür ist ein Video mit Untertiteln, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden.

```css
:future(p, span) {
  display: none;
}
```

## Syntax

```css
:future {
  /* ... */
}
```

## Beispiele

### CSS

```css
:future(p, span) {
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
- {{cssxref(":past")}}
