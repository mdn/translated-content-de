---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
l10n:
  sourceCommit: 21da3683d67c91c9a75a1c3fe98d406c82d8bf8b
---

Der **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) stimmt mit [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements überein.
Dies kann verwendet werden, um [Untertitel und andere Cues zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.

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

Die Eigenschaften werden auf die gesamte Menge von Cues angewendet, als ob sie eine einzelne Einheit wären. Die einzige Ausnahme ist, dass `background` und seine Langschreibweisen auf jeden Cue einzeln angewendet werden, um zu vermeiden, dass Boxen entstehen und unerwartet große Bereiche des Mediums verdeckt werden.

Im obigen Beispiel wählt der `::cue(u)`-Selektor alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u) Elemente innerhalb [des Cue-Texts](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt) aus.

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

### Styling von WebVTT-Cues als Weiß-auf-Schwarz

Das folgende CSS setzt den Cue-Stil so, dass der Text weiß ist und der Hintergrund eine transparente schwarze Box ist.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von WebVTT internen Knotenobjekten

Cue-Text kann _interne Knotenobjekte_ als Tags (ähnlich wie HTML-Elemente) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` enthalten.
Der `::cue()`-Selektor kann verwendet werden, um Stile auf den Inhalt innerhalb dieser Tags anzuwenden, um anzupassen, wie der WebVTT-Track dargestellt wird.
Betrachten Sie den folgenden Cue-Text, der das `<u>`-Tag verwendet, um Text zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt den Text innerhalb des `<u>`-Tags mit einer Farbe und einer [text-decoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) an:

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
