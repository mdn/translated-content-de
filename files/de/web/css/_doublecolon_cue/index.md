---
title: "::cue"
slug: Web/CSS/::cue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{CSSRef}}

Das **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) stimmt mit [WebVTT](/de/docs/Web/API/WebVTT_API) Hinweisen innerhalb eines ausgewählten Elements überein.
Dies kann verwendet werden, um [Untertitel und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu stylen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-cue.html", "tabbed-shorter")}}

Die Eigenschaften werden auf das gesamte Set an Hinweisen angewendet, als ob sie eine einzelne Einheit wären. Die einzige Ausnahme ist, dass `background` und seine Langform-Eigenschaften auf jeden Hinweis einzeln angewendet werden, um zu vermeiden, dass unerwartet große Bereiche des Mediums verdeckt werden.

Im obigen Beispiel wählt der `::cue(u)` Selektor alle [`<u>`](/de/docs/Web/HTML/Element/u) Elemente innerhalb [des Hinweistextes](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt) aus.

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

### Styling von WebVTT-Hinweisen als Weiß-auf-Schwarz

Das folgende CSS setzt den Stil der Hinweise so, dass der Text weiß ist und der Hintergrund eine durchscheinende schwarze Box darstellt.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von internen WebVTT-Node-Objekten

Hinweistexte können _interne Node-Objekte_ enthalten, ähnlich wie HTML-Elemente `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>` und `<lang>`.
Der `::cue()` Selektor kann verwendet werden, um Stile auf den Inhalt innerhalb dieser Tags anzuwenden, um anzupassen, wie der WebVTT-Track angezeigt wird.
Betrachten Sie den folgenden Hinweiste xt, der das `<u>` Tag verwendet, um einige Texte zu unterstreichen:

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
