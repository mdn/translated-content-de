---
title: font-smooth
slug: Web/CSS/Reference/Properties/font-smooth
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anwendung von Anti-Aliasing beim Rendern von Schriftarten.

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
> WebKit implementiert eine ähnliche Eigenschaft, aber mit unterschiedlichen Werten: **`-webkit-font-smoothing`**. Es funktioniert nur auf macOS.
>
> - `auto` - Das Browserverhalten wird festgelegt (Verwendet subpixeliges Anti-Aliasing, wenn verfügbar; dies ist die Standardeinstellung)
> - `none` - Schaltet die Schriftglättung aus; Text wird mit gezackten scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf Pixel-Ebene im Gegensatz zur Sub-Pixel. Der Wechsel von Sub-Pixel-Rendering zu Anti-Aliasing für helle Schrift auf dunklem Hintergrund lässt diese leichter erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays liefert dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, aber mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Es funktioniert nur auf macOS.
>
> - `auto` - Ermöglicht dem Browser die Auswahl einer Optimierung zur Schriftglättung, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing, im Gegensatz zur Sub-Pixel. Der Wechsel von Sub-Pixel-Rendering zu Anti-Aliasing für helle Schrift auf dunklem Hintergrund lässt diese leichter erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

Das folgende Beispiel zeigt die Safari/Chromium- und Firefox-Entsprechungen, die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht erscheinen.

Für diejenigen unter Ihnen, die kein macOS-System verwenden, hier ein Screenshot (die Live-Version erscheint später):

![Zwei Textbeispiele, eines mit der font-smooth-Eigenschaft und eines ohne](smoothing.png)

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitte hören Sie auf, die Schriftglättung zu "reparieren"](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) von Dmitry Fadeyev (2012)
- [Laissez-faire Schriftglättung und Anti-Aliasing](https://www.zachleat.com/web/font-smooth/) von Zach Leatherman (2017)
- [Textdarstellung verbessern (Ein moderner CSS-Reset)](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-text-rendering-6) von Josh W. Comeau (2021)
- [Was hat es mit der WebKit-Schriftglättung auf sich?](https://dbushell.com/2024/11/05/webkit-font-smoothing/) von David Bushell (2024)
