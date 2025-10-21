---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 4f086eca1e8276f5f012e882e94fd1b255e771fc
---

{{ Non-standard_header }}

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
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-webkit-font-smoothing`**. Diese funktioniert nur auf macOS.
>
> - `auto` - Dem Browser die Entscheidung überlassen (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist die Standardeinstellung)
> - `none` - Schriftglättung ausschalten; Text mit gezackten scharfen Kanten anzeigen.
> - `antialiased` - Glätten der Schrift auf Pixelebene, im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn heller erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Diese funktioniert nur auf macOS.
>
> - `auto` - Dem Browser erlauben, eine Optimierung für Schriftglättung zu wählen, typischerweise `grayscale`.
> - `grayscale` - Text mit Graustufen-Anti-Aliasing rendern, im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn heller erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

Das folgende Beispiel zeigt die Safari/Chromium- und Firefox-Äquivalente, die die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas heller im Gewicht erscheinen.

Für diejenigen unter Ihnen, die kein macOS-System verwenden, hier ist ein Screenshot (die Live-Version erscheint später):

![Zwei Textbeispiele, eines mit der font-smooth Eigenschaft und ein weiteres ohne](smoothing.png)

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

- [Please Stop "Fixing" Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) von Dmitry Fadeyev (2012)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/) von Zach Leatherman (2017)
- [Improve text rendering (A Modern CSS Reset)](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-text-rendering-6) von Josh W. Comeau (2021)
- [What's the deal with WebKit Font Smoothing?](https://dbushell.com/2024/11/05/webkit-font-smoothing/) von David Bushell (2024)
