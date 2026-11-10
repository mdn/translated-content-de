---
title: CSS-Pseudoklasse `:current`
short-title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Der [CSS](/de/docs/Web/CSS)-[Pseudoklassenselektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:current`** repräsentiert ein Element oder ein übergeordnetes Element eines Elements, das gerade angezeigt oder hervorgehoben wird.

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

Die Pseudoklasse `:current` wird verwendet, um das „gerade angezeigte“ Element aus einer Reihe von Elementen auszuwählen.

„Aktuell“ kann sich dabei auf die Zeit beziehen: Mit `:current` lassen sich die gerade angezeigten Untertitel (dargestellt mit [WebVTT](/de/docs/Web/API/WebVTT_API)) eines abgespielten Videos auswählen.

Die Pseudoklasse kann sich auch auf das gerade hervorgehobene Element einer Reihe beziehen. Beispielsweise lässt sich `:current` mit dem [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::search-text` kombinieren, um das aktuell ausgewählte Suchergebnis der Browserfunktion „Auf Seite suchen“ gezielt zu gestalten.

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

Dieses Beispiel zeigt, wie Sie mit `::search-text` und `:current` benutzerdefinierte Stile für die Suchergebnisse der Browserfunktion „Auf Seite suchen“ erstellen.

#### HTML

Das HTML besteht aus einem einfachen Textabsatz. Der HTML-Quelltext wird hier nicht gezeigt, um das Beispiel kurz zu halten und die Navigation zwischen den Suchergebnissen im dargestellten Beispiel zu erleichtern.

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

In unserem CSS gestalten wir zunächst das Pseudoelement `::search-text`. Wir geben ihm benutzerdefinierte Stile für {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

Abschließend gestalten wir mit `::search-text:current` das aktuell ausgewählte Suchergebnis. Es erhält eine andere `background-color` und einige Stile für {{cssxref("text-decoration")}}, damit es sich von den übrigen Ergebnissen unterscheidet.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("custom-search-results", "100%", 300)}}

Verwenden Sie die Suchfunktion des Browsers, um ein Wort zu finden, das im Beispieltext mehrfach vorkommt, etwa „aliquam“, „amet“ oder „tortor“. Wechseln Sie zwischen den vorherigen und nächsten Ergebnissen, um die Gestaltung durch `:current` zu sehen.

### Gerade angezeigte WebVTT-Untertitel gestalten

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
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
