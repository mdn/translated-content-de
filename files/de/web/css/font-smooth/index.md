---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}} {{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anwendung von Anti-Aliasing, wenn Schriften gerendert werden.

## Syntax

```css
/* Schlüsselwortwerte */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> Wert */
font-smooth: 2em;

/* Globale Werte */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: revert-layer;
font-smooth: unset;
```

> [!NOTE]
> WebKit implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-webkit-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Überlassen Sie dem Browser die Entscheidung (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standard)
> - `none` - Schalten Sie die Schriftglättung aus; anzeigen des Textes mit gezackten scharfen Kanten.
> - `antialiased` - Glätten Sie die Schrift auf Pixelebene, im Gegensatz zur Subpixelebene. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing bei hellem Text auf dunklem Hintergrund lässt ihn leichter erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays ergibt dies den schärfsten Text.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit unterschiedlichen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Lassen Sie den Browser eine Optimierung für die Schriftglättung auswählen, typischerweise `grayscale`.
> - `grayscale` - Rendern Sie Text mit Graustufen-Anti-Aliasing, im Gegensatz zur Subpixelebene. Der Wechsel von Subpixel-Rendering zu Anti-Aliasing bei hellem Text auf dunklem Hintergrund lässt ihn leichter erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
font-smooth =
  auto | never | always | <absolute-size> | <length>
```

## Beispiele

### Grundlegendes Anwendungsbeispiel

Das folgende Beispiel zeigt die Safari/Chromium und Firefox-Äquivalente, die die Schriftglättung auf macOS aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter im Gewicht erscheinen.

Für diejenigen, die nicht auf einem macOS-System sind, hier ein Screenshot (die Live-Version erscheint später):

![Zwei Textbeispiele: eines mit der font-smooth Eigenschaft und eines ohne](smoothing.png)

#### HTML

```html
<p>Ohne Schriftglättung</p>

<p class="smoothed">Mit Schriftglättung</p>
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

- [Please Stop "Fixing" Font Smoothing – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/)
