---
title: "`font-smooth` CSS property"
short-title: font-smooth
slug: Web/CSS/Reference/Properties/font-smooth
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Anwendung von Anti-Aliasing bei der Schriftdarstellung.

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
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit anderen Werten: **`-webkit-font-smoothing`**. Diese funktioniert nur auf macOS.
>
> - `auto` - Dem Browser die Entscheidung überlassen (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standardwert).
> - `none` - Schriftdarstellungsglättung ausschalten; Text wird mit gezackten, scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf der Ebene des Pixels, im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklen Hintergründen lässt ihn heller erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit anderen Werten: **`-moz-osx-font-smoothing`**. Diese funktioniert nur auf macOS.
>
> - `auto` - Dem Browser erlaubt eine Optimierung für das Schriftglätten auszuwählen, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing, im Gegensatz zum Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklen Hintergründen lässt ihn heller erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Beispiele

### Grundlegendes Anwendungsbeispiel

Das folgende Beispiel zeigt die Äquivalente in Safari/Chromium und Firefox, die das Schriftglätten auf macOS einschalten. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht erscheinen.

Für diejenigen, die sich nicht auf einem macOS-System befinden, hier ist ein Screenshot (die Live-Version erscheint später):

![Zwei Textbeispiele, eins mit der font-smooth Eigenschaft und ein anderes ohne](smoothing.png)

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
