---
title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{SeeCompatTable}}

Der **`:current`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element oder den Vorfahren eines Elements, das derzeit angezeigt oder hervorgehoben wird.

## Syntax

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## Beschreibung

Die `:current` Pseudoklasse wird verwendet, um das "derzeit angezeigte" Element aus einer Reihe von Elementen zu repräsentieren.

Dies kann "aktuell" im zeitlichen Sinne bedeuten: `:current` kann verwendet werden, um die derzeit angezeigten Untertitel oder Bildunterschriften (dargestellt mittels [WebVTT](/de/docs/Web/API/WebVTT_API)), die mit einem abspielenden Video verbunden sind, zu definieren.

Es kann sich auch auf das gerade hervorgehobene Element in einer Reihe beziehen. Zum Beispiel kann `:current` mit dem `::search-text` [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kombiniert werden, um den derzeit fokussierten Suchergebnistext aus der "In Seite suchen"-Funktion des Browsers speziell zu gestalten.

Zum Beispiel:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

## Beispiele

### Benutzerdefinierte Stile für Suchergebnisse im Text

Dieses Beispiel zeigt, wie `::search-text` und `:current` verwendet werden, um benutzerdefinierte Stile für die "In Seite suchen"-Suchergebnisse Ihres Browsers zu erstellen.

#### HTML

Das HTML besteht aus einem einfachen Absatz von Text. Wir werden den HTML-Quellcode nicht zeigen, sowohl der Kürze halber, als auch damit es leichter ist, durch die Suchergebnisse im gerenderten Beispiel zu navigieren.

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

In unserem CSS beginnen wir mit der Gestaltung des `::search-text` Pseudo-Elements. Wir geben ihm benutzerdefinierte {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}} Stile.

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}

@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(::search-text) {
    body::before {
      content: "Your browser doesn't support the ::search-text pseudo-element.";
    }
  }
  @supports not selector(:current) {
    body::before {
      content: "Your browser doesn't support the :current pseudo-class.";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

Schließlich gestalten wir das derzeit fokussierte Suchergebnis über `::search-text:current`, indem wir ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile geben, sodass es sich von den restlichen Ergebnissen unterscheidet.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Ergebnis

Das Beispiel rendert wie folgt:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Versuchen Sie, die "In Seite suchen"-Schnittstelle des Browsers zu verwenden, um ein Wort zu finden, das im Beispieltext mehrfach vorkommt, z. B. "aliquam", "amet" oder "tortor". Wechseln Sie zwischen vorherigen und nächsten Ergebnissen, um die `:current` Stilistik zu überprüfen.

### Gestaltung von derzeit angezeigten WebVTT Untertiteln

#### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

#### HTML

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

#### WebVTT

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

{{Compat}}

## Siehe auch

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
