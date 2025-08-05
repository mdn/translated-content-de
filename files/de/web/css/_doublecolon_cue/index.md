---
title: ::cue
slug: Web/CSS/::cue
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Das **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet sich an [WebVTT](/de/docs/Web/API/WebVTT_API) Textspuren innerhalb eines ausgewählten Elements.
Dies kann verwendet werden, um [Untertitel und andere Hinweise zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Spuren.

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

Die Eigenschaften werden auf die gesamte Menge der Hinweise angewendet, als ob sie eine einzelne Einheit wären. Die einzige Ausnahme ist, dass `background` und dessen Langformeigenschaften auf jeden Hinweis individuell angewendet werden, um das Erstellen von Boxen und das unerwartete Verdecken von großen Bereichen des Mediums zu vermeiden.

Im obigen Beispiel wählt der Selektor `::cue(u)` alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u) Elemente innerhalb [des Hinweistextes](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt) aus.

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element einschließen, dürfen nur die folgenden CSS-Eigenschaften verwenden:

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

### WebVTT-Hinweise als weiß auf schwarz gestalten

Der folgende CSS-Stil setzt den Hinweis so, dass der Text weiß und der Hintergrund ein durchscheinendes schwarzes Kästchen ist.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### WebVTT interne Knotenobjekte gestalten

Hinweistext kann _interne Knotenobjekte_ wie die Tags (ähnlich den HTML-Elementen) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` enthalten. Der `::cue()` Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um anzupassen, wie die WebVTT-Spur angezeigt wird. Betrachten Sie den folgenden Hinweistext, der das `<u>` Tag benutzt, um Text zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt den Text innerhalb des `<u>` Tags mit einer Farbe und einer [text-decoration](/de/docs/Web/CSS/text-decoration) an:

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
