---
title: ::cue
slug: Web/CSS/::cue
l10n:
  sourceCommit: d8a046a6265c83d821e4923989e284479c10fd75
---

Das **`::cue`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) entspricht [WebVTT](/de/docs/Web/API/WebVTT_API) Hinweise innerhalb eines ausgewählten Elements.
Dies kann verwendet werden, um [Untertitel und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu gestalten.

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

Die Eigenschaften werden auf die gesamte Menge an Hinweisen angewendet, als ob sie eine einzige Einheit wären. Die einzige Ausnahme ist, dass `background` und seine Langform-Eigenschaften auf jeden Hinweis einzeln angewendet werden, um das Erstellen von Boxen und das unbeabsichtigte Verdecken großer Bereiche der Medien zu vermeiden.

Im obigen Beispiel selektiert der `::cue(u)` Selektor alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u) Elemente innerhalb [des Hinweistextes](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt).

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element enthalten, dürfen nur die folgenden CSS-Eigenschaften verwenden:

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
- [`font-family`](/de/docs/Web/CSS/font-family)
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

### WebVTT-Hinweise als Weiß-auf-Schwarz stylen

Das folgende CSS setzt den Hinweis-Stil so, dass der Text weiß ist und der Hintergrund eine durchscheinende schwarze Box ist.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von WebVTT-internen Knotenobjekten

Hinweistext kann _interne Knotenobjekte_ wie die Tags (ähnlich den HTML-Elementen) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` enthalten.
Der `::cue()` Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um anzupassen, wie der WebVTT-Track angezeigt wird.
Betrachten Sie den folgenden Hinweistext, der das `<u>` Tag verwendet, um einige Texte zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt den Text innerhalb des `<u>` Tags mit einer Farbe und einer [text-decoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) an:

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
