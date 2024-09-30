---
title: "::cue"
slug: Web/CSS/::cue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{CSSRef}}

Das **`::cue`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wird verwendet, um [WebVTT](/de/docs/Web/API/WebVTT_API)-Cues innerhalb eines ausgewählten Elements zu erfassen.
Dies kann genutzt werden, um [Untertitel und andere Cues zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), die in Medien mit VTT-Tracks vorkommen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-cue.html", "tabbed-shorter")}}

Die Eigenschaften werden auf die gesamte Menge an Cues angewandt, als ob sie eine einzige Einheit wären. Die einzige Ausnahme bildet die Eigenschaft `background` und deren Einzelwerte, die auf jedes Cue einzeln angewandt werden, um zu vermeiden, dass Boxen erstellt werden, die unerwartet große Bereiche des Mediums verdecken.

Im obigen Beispiel selektiert der `::cue(u)`-Selektor alle [`<u>`](/de/docs/Web/HTML/Element/u)-Elemente im [Cue-Text](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt).

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

### WebVTT-Cues als Weiß-auf-Schwarz stylen

Das folgende CSS setzt den Cue-Stil so, dass der Text weiß ist und der Hintergrund eine halbtransparente schwarze Box ist.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Stylen von WebVTT-internen Node-Objekten

Cue-Text kann _interne Node-Objekte_ wie die Tags (ähnlich zu HTML-Elementen) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` enthalten.
Der `::cue()`-Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um zu bestimmen, wie der WebVTT-Track angezeigt wird.
Betrachten Sie den folgenden Cue-Text, der das `<u>`-Tag benutzt, um Text zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt den Text innerhalb des `<u>`-Tags mit einer Farbe und einer [text-decoration](/de/docs/Web/CSS/text-decoration) an:

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
