---
title: CSS-Pseudoklasse `:future`
short-title: :future
slug: Web/CSS/Reference/Selectors/:future
l10n:
  sourceCommit: b4f42a2037bcb8f2daec61f6b3d92bfdd13e5386
---

Der **`:future`**-[CSS](/de/docs/Web/CSS)-[Pseudoklassenselektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine zeitbezogene Pseudoklasse, die auf jedes Element zutrifft, das zeitlich vollständig nach einem Element liegt, auf das {{cssxref(":current")}} zutrifft. Ein Beispiel sind Untertitel in einem Video, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden.

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

### CSS

```css
:future(p, span) {
  display: none;
}
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
