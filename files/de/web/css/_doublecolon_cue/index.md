---
title: ::cue
slug: Web/CSS/::cue
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) nimmt [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweise innerhalb eines ausgewählten Elements ins Visier. Dies kann verwendet werden, um [Untertitel und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Spuren zu gestalten.

{{InteractiveExample("CSS Demo: ::cue", "tabbed-shorter")}}

```css interactive-example
video {
  width: 100%;
}

video::cue {
  font-size: 1rem;
  color: yellow;
}

::cue(u) {
  color: red;
}
```

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

Die Eigenschaften werden auf das gesamte Set von Hinweisen so angewendet, als ob sie eine einzige Einheit wären. Die einzige Ausnahme ist, dass `background` und dessen detaillierte Eigenschaften auf jeden einzelnen Hinweis angewendet werden, um zu vermeiden, dass Boxen entstehen und unerwartet große Bereiche des Mediums verdeckt werden.

Im obigen Beispiel wählt der `::cue(u)` Selektor alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u) Elemente innerhalb [des Hinweistextes](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt) aus.

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element einbeziehen, dürfen nur die folgenden CSS-Eigenschaften verwenden:

- [`background`](/de/docs/Web/CSS/background)
- [`background-attachment`](/de/docs/Web/CSS/background-attachment)
- [`background-clip`](/de/docs/Web/CSS/background-clip)
- [`background-color`](/de/docs/Web/CSS/background-color)
- [`background-image`](/de/docs/Web/CSS/background-image)
- [`background-origin`](/de/docs/Web/CSS/background-origin)
- [`background-position`](/de/docs/Web/CSS/background-position)
- [`background-repeat`](/de/docs/Web/CSS/background-repeat)
- [`background-size`](/de/docs/Web/CSS/background-size)
- [`color`](/de/docs/Web/CSS/color)
- [`font`](/de/docs/Web/CSS/font)
- [`font-family`](/de/docs/Web/CSS/font-family)
- [`font-size`](/de/docs/Web/CSS/font-size)
- [`font-stretch`](/de/docs/Web/CSS/font-stretch)
- [`font-style`](/de/docs/Web/CSS/font-style)
- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-weight`](/de/docs/Web/CSS/font-weight)
- [`line-height`](/de/docs/Web/CSS/line-height)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`outline`](/de/docs/Web/CSS/outline)
- [`outline-color`](/de/docs/Web/CSS/outline-color)
- [`outline-style`](/de/docs/Web/CSS/outline-style)
- [`outline-width`](/de/docs/Web/CSS/outline-width)
- [`ruby-position`](/de/docs/Web/CSS/ruby-position)
- [`text-combine-upright`](/de/docs/Web/CSS/text-combine-upright)
- [`text-decoration`](/de/docs/Web/CSS/text-decoration)
- [`text-decoration-color`](/de/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness)
- [`text-shadow`](/de/docs/Web/CSS/text-shadow)
- [`visibility`](/de/docs/Web/CSS/visibility)
- [`white-space`](/de/docs/Web/CSS/white-space)

## Beispiele

### WebVTT-Hinweise als Weiß-auf-Schwarz gestalten

Das folgende CSS setzt den Stil der Hinweise so, dass der Text weiß ist und der Hintergrund eine transparente schwarze Box ist.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von inneren Knotenelementen in WebVTT

Hinweistext kann _interne Knotenelemente_ enthalten, wie die Tags (ähnlich wie HTML-Elemente) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>` und `<lang>`. Der `::cue()`-Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um anzupassen, wie die WebVTT-Spur angezeigt wird. Betrachten Sie den folgenden Hinweistext, der das `<u>`-Tag verwendet, um Text zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel individualisiert den Text innerhalb des `<u>`-Tags mit einer Farbe und einer [text-decoration](/de/docs/Web/CSS/text-decoration):

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Video Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
