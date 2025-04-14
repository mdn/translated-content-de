---
title: font-smooth
slug: Web/CSS/font-smooth
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}} {{ Non-standard_header }}

Die **`font-smooth`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Anwendung von Anti-Aliasing, wenn Schriftarten gerendert werden.

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
> - `auto` - Dem Browser die Entscheidung überlassen (Verwendet Subpixel-Anti-Aliasing, wenn verfügbar; dies ist der Standard)
> - `none` - Schriften-Glättung ausschalten; Text mit scharfen, kantigen Kanten anzeigen.
> - `antialiased` - Die Schrift auf Pixelebene glätten, im Gegensatz zu Subpixel. Der Wechsel vom Subpixel-Rendering zu Anti-Aliasing bei hellem Text auf dunklem Hintergrund lässt ihn heller erscheinen.
> - `subpixel-antialiased` - Auf den meisten Nicht-Retina-Displays wird dies den schärfsten Text ergeben.

> [!NOTE]
> Firefox implementiert eine ähnliche Eigenschaft, jedoch mit anderen Werten: **`-moz-osx-font-smoothing`**. Sie funktioniert nur auf macOS.
>
> - `auto` - Dem Browser gestatten, eine Optimierung für die Schriften-Glättung auszuwählen, typischerweise `grayscale`.
> - `grayscale` - Text mit Graustufen-Anti-Aliasing rendern, im Gegensatz zu Subpixel. Der Wechsel vom Subpixel-Rendering zu Anti-Aliasing bei hellem Text auf dunklem Hintergrund lässt ihn heller erscheinen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Beispiele

### Einfaches Anwendungsbeispiel

Das folgende Beispiel zeigt die Äquivalente für Safari/Chromium und Firefox, die auf macOS die Schriften-Glättung aktivieren. In beiden Fällen sollte die geglättete Schrift etwas leichter in der Gewichtung erscheinen.

Für diejenigen unter Ihnen, die kein macOS-System verwenden, hier ein Screenshot (die Live-Version erscheint weiter unten):

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitte hören Sie auf, die Schriftglättung zu "reparieren" – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire Schriftglättung und Anti-Aliasing](https://www.zachleat.com/web/font-smooth/)
