---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}} {{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anwendung von Anti-Aliasing bei der Darstellung von Schriftarten.

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
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit anderen Werten: **`-webkit-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Der Browser entscheidet (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standard).
> - `none` - Schalten Sie das Schriftglättung aus; Text wird mit gezackten, scharfen Kanten angezeigt.
> - `antialiased` - Glättet die Schrift auf Pixelebene, im Gegensatz zur Subpixel-Ebene. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn heller erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit anderen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Ermöglicht dem Browser die Auswahl einer Optimierung für die Schriftglättung, typischerweise `grayscale`.
> - `grayscale` - Rendert Text mit Graustufen-Anti-Aliasing, im Gegensatz zur Subpixel-Ebene. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing für hellen Text auf dunklem Hintergrund lässt ihn heller erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
font-smooth =
  auto | never | always | <absolute-size> | <length>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

Das folgende Beispiel zeigt die Pendants für Safari/Chromium und Firefox, die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht erscheinen.

Für diejenigen von Ihnen, die kein macOS-System verwenden, hier ein Screenshot (die Live-Version erscheint später):

![Zwei Textexemplare, eines mit der font-smooth-Eigenschaft und ein weiteres ohne](smoothing.png)

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

- [Bitte hören Sie auf, die Schriftglättung zu "reparieren" – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire Schriftglättung und Anti-Aliasing](https://www.zachleat.com/web/font-smooth/)
