---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{CSSRef}}

Die **`scroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Verhalten für ein scrollbares Feld fest, wenn das Scrollen durch die Navigation oder die CSSOM-Scrolling-APIs ausgelöst wird.

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

Beachten Sie, dass alle anderen Scrollaktionen, wie die, die vom Benutzer durchgeführt werden, von dieser Eigenschaft nicht beeinflusst werden. Wenn diese Eigenschaft auf dem Wurzelelement angegeben wird, gilt sie stattdessen für das Ansichtsfenster. Diese Eigenschaft, die auf dem `body`-Element angegeben ist, wird sich _nicht_ auf das Ansichtsfenster auswirken.

Benutzeragenten dürfen diese Eigenschaft ignorieren.

## Syntax

```css
/* Schlüsselwortwerte */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Globale Werte */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

Die `scroll-behavior`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben.

### Werte

- `auto`
  - : Das scrollbare Feld scrollt sofort.
- `smooth`
  - : Das scrollbare Feld scrollt auf sanfte Weise mit einer vom Benutzeragenten definierten Ease-Funktion über einen vom Benutzeragenten definierten Zeitraum. Benutzeragenten sollten, falls vorhanden, Plattformkonventionen folgen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Scrollverhalten mit sanfter Animation festlegen

#### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
  <div class="scroll-page" id="page-1">1</div>
  <div class="scroll-page" id="page-2">2</div>
  <div class="scroll-page" id="page-3">3</div>
</div>
```

#### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
.scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

#### Ergebnis

{{ EmbedLiveSample("Setting_smooth_scroll_behavior", "100%", 250) }}

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}