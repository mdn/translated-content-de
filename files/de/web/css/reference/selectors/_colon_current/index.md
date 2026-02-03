---
title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: 21d2342d16ed78d6c72c66a71599125eb2405a31
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

Dies kann "aktuell" im Sinne der Zeit bedeuten: `:current` kann verwendet werden, um die derzeit angezeigten Untertitel oder Bildunterschriften (dargestellt durch [WebVTT](/de/docs/Web/API/WebVTT_API)), die einem abspielenden Video zugeordnet sind, anzusprechen.

Es kann sich auch auf das derzeit hervorgehobene Element in einer Serie beziehen. Zum Beispiel kann `:current` mit dem `::search-text` [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kombiniert werden, um spezifische Stile auf das derzeit fokussierte Suchergebnis aus der "Seite durchsuchen"-Textsuchfunktion des Browsers anzuwenden.

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

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie Sie `::search-text` und `:current` verwenden können, um benutzerdefinierte Stile für die "Seite durchsuchen"-Suchergebnisse Ihres Browsers zu erstellen.

#### HTML

Das HTML besteht aus einem grundlegenden Absatz von Text. Wir zeigen den HTML-Quellcode nicht, sowohl der Kürze halber als auch damit es einfacher ist, die Suchergebnisse im gerenderten Beispiel zu navigieren.

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

In unserem CSS beginnen wir damit, das `::search-text` Pseudoelement zu gestalten. Wir versehen es mit benutzerdefinierten {{cssxref("background-color")}}, {{cssxref("color")}}, und {{cssxref("text-shadow")}} Stilen.

```css hidden live-sample___custom-search-results
html {
  font-family: Arial, Helvetica, sans-serif;
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

Schließlich gestalten wir das derzeit fokussierte Suchergebnis über `::search-text:current`, indem wir ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile geben, damit es sich von den restlichen Ergebnissen unterscheidet.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Versuchen Sie, die "Seite durchsuchen"-Schnittstelle Ihres Browsers zu verwenden, um ein Wort zu finden, das mehrmals im Beispieltext vorkommt, wie "aliquam", "amet", oder "tortor". Wechseln Sie zwischen den vorherigen und nächsten Ergebnissen, um das `:current` Styling zu überprüfen.

### Stile für derzeit angezeigte WebVTT-Untertitel

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
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
