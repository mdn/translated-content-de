---
title: :current
slug: Web/CSS/:current
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Der **`:current`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) Selektor ist eine zeitdimensionale Pseudo-Klasse, die ein Element oder einen Vorfahren eines Elements repräsentiert, das derzeit angezeigt wird. Zum Beispiel kann diese Pseudo-Klasse verwendet werden, um ein Video zu repräsentieren, das mit Untertiteln durch [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt wird.

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
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
