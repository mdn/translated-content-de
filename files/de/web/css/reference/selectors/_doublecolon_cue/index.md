---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das **`::cue`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) stimmt mit [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweisen innerhalb eines ausgewählten Elements überein. Dies kann verwendet werden, um [Beschriftungen und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu gestalten.

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

Die Eigenschaften werden auf das gesamte Set von Hinweisen angewendet, als ob sie eine einzige Einheit wären. Die einzige Ausnahme ist, dass `background` und seine Einzel-Eigenschaften auf jeden Hinweis einzeln angewendet werden, um das Erstellen von Kästen und das unerwartet große Bereiche der Medien verdecken zu vermeiden.

Im obigen Beispiel wählt der `::cue(u)`-Selektor alle [`<u>`](/de/docs/Web/HTML/Reference/Elements/u)-Elemente innerhalb [des Hinweistextes](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt) aus.

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Erlaubte Eigenschaften

Regeln, deren Selektoren dieses Element einschließen, dürfen nur die folgenden CSS-Eigenschaften verwenden:

- {{cssxref("background")}}
- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("color")}}
- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}
- {{cssxref("opacity")}}
- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- {{cssxref("ruby-position")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-shadow")}}
- {{cssxref("visibility")}}
- {{cssxref("white-space")}}

## Beispiele

### Gestaltung von WebVTT-Hinweisen als Weiß-auf-Schwarz

Der folgende CSS-Code setzt den Stil der Hinweise so, dass der Text weiß ist und der Hintergrund ein durchsichtiges schwarzes Feld ist.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling von internen WebVTT-Knotenobjekten

Hinweistext kann _interne Knotenobjekte_ wie die Tags (ähnlich zu HTML-Elementen) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, und `<lang>` enthalten. Der `::cue()`-Selektor kann verwendet werden, um Stile auf Inhalte innerhalb dieser Tags anzuwenden, um anzupassen, wie der WebVTT-Track angezeigt wird. Betrachten Sie den folgenden Hinweistext, der das `<u>`-Tag verwendet, um einigen Text zu unterstreichen:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

Die folgende CSS-Regel passt den Text innerhalb des `<u>`-Tags mit einer Farbe und einer [Textdekoration](/de/docs/Web/CSS/Reference/Properties/text-decoration) an:

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
