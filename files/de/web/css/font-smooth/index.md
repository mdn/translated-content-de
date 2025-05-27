---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 393222bea68999075b079d23d2eac356d3ddcbb9
---

{{CSSRef}} {{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anwendung von Anti-Aliasing, wenn Schriftarten gerendert werden.

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
> - `auto` - Der Browser entscheidet (verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standard)
> - `none` - Schaltet die Schriftglättung aus; Text wird mit gezackten scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf Pixel-Ebene statt auf Subpixel-Ebene. Das Wechseln von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn leichter aussehen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Ermöglicht es dem Browser, eine Optimierung für die Schriftglättung auszuwählen, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing anstelle von Subpixel. Das Wechseln von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn leichter aussehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

Das folgende Beispiel zeigt die Safari/Chromium- und Firefox-Äquivalente, die die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift leicht heller im Gewicht aussehen.

Für diejenigen unter Ihnen, die nicht auf einem macOS-System arbeiten, hier ein Screenshot (die Live-Version erscheint später):

![Zwei Textbeispiele, eines mit der font-smooth-Eigenschaft und ein weiteres ohne](smoothing.png)

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

- [Please Stop "Fixing" Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) von Dmitry Fadeyev (2012)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/) von Zach Leatherman (2017)
