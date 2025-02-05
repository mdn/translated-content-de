---
title: "::cue"
slug: Web/CSS/::cue
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::cue`**- [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet sich auf [WebVTT](/de/docs/Web/API/WebVTT_API)-Cues innerhalb eines ausgewählten Elements an.
Dies kann verwendet werden, um [Untertitel und andere Cues zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-cue.html", "tabbed-shorter")}}

Die Eigenschaften werden auf die gesamte Menge der Cues angewendet, als ob sie eine einzige Einheit wären. Die einzige Ausnahme bilden `background` und seine Langform-Eigenschaften, die auf jeden Cue einzeln angewendet werden, um zu vermeiden, dass Boxen erstellt und unerwartet große Bereiche des Mediums überdeckt werden.

Im obigen Beispiel wählt der Selektor `::cue(u)` alle [`<u>`](/de/docs/Web/HTML/Element/u)-Elemente innerhalb [des Cue-Texts](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt) aus.

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element enthalten, dürfen nur die folgenden CSS-Eigenschaften verwenden:

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

### WebVTT-Cues als Weiß-auf-Schwarz gestalten

Das folgende CSS setzt die Cue-Stilrichtung so, dass der Text weiß und der Hintergrund eine durchscheinende schwarze Box ist.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Gestaltung von WebVTT-internen Node-Objekten

Cue-Text kann _interne Node-Objekte_ enthalten, d. h. Tags (ähnlich wie HTML-Elemente) wie `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>` und `<lang>`.
Der Selektor `::cue()` kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden und so anzupassen, wie der WebVTT-Track dargestellt wird. Betrachten Sie den folgenden Cue-Text, der das `<u>`-Tag verwendet, um Text zu unterstreichen:

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
