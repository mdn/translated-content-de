---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}} {{ Non-standard_header }}

Die **`font-smooth`**-[CSS](/de/docs/Web/CSS)-Eigenschaft kontrolliert die Anwendung von Anti-Aliasing beim Rendern von Schriftarten.

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
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-webkit-font-smoothing`**. Sie funktioniert nur unter macOS.
>
> - `auto` - Der Browser entscheidet (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standard)
> - `none` - Schaltet die Schriftglättung aus; Text wird mit scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf Pixelebene, im Gegensatz zur Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklen Hintergründen lässt ihn leichter erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur unter macOS.
>
> - `auto` - Ermöglicht dem Browser, eine Optimierung für die Schriftglättung zu wählen, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing, im Gegensatz zur Subpixel. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklen Hintergründen lässt ihn leichter erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
font-smooth =
  auto | never | always | <absolute-size> | <length>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

Das folgende Beispiel zeigt die Äquivalente in Safari/Chromium und Firefox, die die Schriftglättung unter macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht aussehen.

Für diejenigen, die kein macOS-System nutzen, hier ein Screenshot (die Live-Version erscheint weiter unten):

![Zwei Textbeispiele, eins mit der font-smooth-Eigenschaft und ein anderes ohne](smoothing.png)

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

- [Please Stop "Fixing" Font Smoothing – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/)
