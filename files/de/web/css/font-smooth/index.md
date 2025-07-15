---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{ Non-standard_header }}

Die **`font-smooth`**-Eigenschaft in [CSS](/de/docs/Web/CSS) steuert die Anwendung von Anti-Aliasing, wenn Schriftarten gerendert werden.

## Syntax

```css
/* Keyword values */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> value */
font-smooth: 2em;

/* Global values */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: revert-layer;
font-smooth: unset;
```

> [!NOTE]
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-webkit-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Der Browser entscheidet (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standardwert)
> - `none` - Schaltet die Kantenglättung aus; Text wird mit gezackten, scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf der Ebene des Pixels im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für helle Texte auf dunklen Hintergründen lässt sie heller erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays sorgt dies für den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Erlaubt dem Browser, eine Optimierung für die Schriftglättung auszuwählen, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für helle Texte auf dunklen Hintergründen lässt sie heller erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <\length>`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

Das folgende Beispiel zeigt die Safari/Chromium- und Firefox-Äquivalente, die die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht erscheinen.

Für diejenigen unter Ihnen, die kein macOS-System verwenden, hier ein Screenshot (die Live-Version erscheint weiter unten):

![Zwei Textbeispiele, eines mit der Eigenschaft font-smooth und eines ohne](smoothing.png)

#### HTML

```html
<p>Without font smoothing</p>

<p class="smoothed">With font smoothing</p>
```

#### CSS

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_usage_example', '100%', 260)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitte hören Sie auf, die Schriftglättung zu "verbessern"](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) von Dmitry Fadeyev (2012)
- [Laissez-faire Schriftglättung und Anti-Aliasing](https://www.zachleat.com/web/font-smooth/) von Zach Leatherman (2017)
