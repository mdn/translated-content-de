---
title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Der **`:current`** [CSS](/de/docs/Web/CSS) [Pseudo-Class-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine zeitliche Pseudo-Klasse, die ein Element oder den Vorfahren eines Elements darstellt, das derzeit angezeigt wird. Zum Beispiel kann diese Pseudo-Klasse verwendet werden, um ein Video zu repräsentieren, das mit Untertiteln durch [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt wird.

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

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
