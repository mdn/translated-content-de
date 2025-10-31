---
title: ::cue
slug: Web/CSS/::cue
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet sich an [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements.
Dies kann genutzt werden, um [Untertitel und andere Cues zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.

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

Die Eigenschaften werden auf die gesamte Menge an Cues angewendet, als ob sie eine einzige Einheit wären. Die einzige Ausnahme ist, dass `background` und dessen Langform-Eigenschaften auf jeden Cue individuell angewendet werden, um die Erstellung von Kästchen zu vermeiden, die unerwartet große Bereiche des Mediums verdecken.

Im obigen Beispiel wählt der `::cue(u)` Selektor alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u) Elemente innerhalb [des Cue-Textes](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt) aus.

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element einschließen, dürfen nur die folgenden CSS-Eigenschaften verwenden:

- [`background`](/de/docs/Web/CSS/Reference/Properties/background)
- [`background-attachment`](/de/docs/Web/CSS/Reference/Properties/background-attachment)
- [`background-clip`](/de/docs/Web/CSS/Reference/Properties/background-clip)
- [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color)
- [`background-image`](/de/docs/Web/CSS/Reference/Properties/background-image)
- [`background-origin`](/de/docs/Web/CSS/Reference/Properties/background-origin)
- [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)
- [`background-repeat`](/de/docs/Web/CSS/Reference/Properties/background-repeat)
- [`background-size`](/de/docs/Web/CSS/Reference/Properties/background-size)
- [`color`](/de/docs/Web/CSS/Reference/Properties/color)
- [`font`](/de/docs/Web/CSS/Reference/Properties/font)
- [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family)
- [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size)
- [`font-stretch`](/de/docs/Web/CSS/Reference/Properties/font-stretch)
- [`font-style`](/de/docs/Web/CSS/Reference/Properties/font-style)
- [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight)
- [`line-height`](/de/docs/Web/CSS/Reference/Properties/line-height)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`outline`](/de/docs/Web/CSS/Reference/Properties/outline)
- [`outline-color`](/de/docs/Web/CSS/Reference/Properties/outline-color)
- [`outline-style`](/de/docs/Web/CSS/Reference/Properties/outline-style)
- [`outline-width`](/de/docs/Web/CSS/Reference/Properties/outline-width)
- [`ruby-position`](/de/docs/Web/CSS/Reference/Properties/ruby-position)
- [`text-combine-upright`](/de/docs/Web/CSS/Reference/Properties/text-combine-upright)
- [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration)
- [`text-decoration-color`](/de/docs/Web/CSS/Reference/Properties/text-decoration-color)
- [`text-decoration-line`](/de/docs/Web/CSS/Reference/Properties/text-decoration-line)
- [`text-decoration-style`](/de/docs/Web/CSS/Reference/Properties/text-decoration-style)
- [`text-decoration-thickness`](/de/docs/Web/CSS/Reference/Properties/text-decoration-thickness)
- [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow)
- [`visibility`](/de/docs/Web/CSS/Reference/Properties/visibility)
- [`white-space`](/de/docs/Web/CSS/Reference/Properties/white-space)

## Beispiele

### Styling von WebVTT-Cues als weiß auf schwarz

Das folgende CSS legt den Cue-Stil so fest, dass der Text weiß ist und der Hintergrund eine durchscheinende schwarze Box bildet.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von internen WebVTT-Knotenobjekten

Cue-Text kann _interne Knotenobjekte_ wie die Tags (ähnlich wie HTML-Elemente) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` beinhalten.
Der `::cue()` Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um zu spezifizieren, wie der WebVTT-Track angezeigt wird.
Betrachten Sie den folgenden Cue-Text, der das `<u>` Tag verwendet, um einige Texte zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt die Farbe und [text-decoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) des Textes innerhalb des `<u>` Tags an:

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
