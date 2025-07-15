---
title: :current
slug: Web/CSS/:current
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Der **`:current`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) ist eine zeitdimensionale Pseudoklasse, die ein Element oder den Vorfahren eines Elements repräsentiert, das derzeit angezeigt wird. Zum Beispiel kann diese Pseudoklasse verwendet werden, um ein Video darzustellen, das mit Untertiteln von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt wird.

```css
:current(p, span) {
  background-color: yellow;
}
```

## Syntax

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## Beispiele

### CSS

```css
:current(p, span) {
  background-color: yellow;
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

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
