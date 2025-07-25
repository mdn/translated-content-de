---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten für eine Scrollbox fest, wenn das Scrollen durch die Navigation oder CSSOM-Scrolling-APIs ausgelöst wird.

{{InteractiveExample("CSS Demo: scroll-behavior")}}

```css interactive-example-choice
scroll-behavior: auto;
```

```css interactive-example-choice
scroll-behavior: smooth;
```

```html interactive-example
<section id="default-example">
  <div class="container">
    <p class="nav">
      Scroll to:
      <a href="#pageA">A</a>
      <a href="#pageB">B</a>
      <a href="#pageC">C</a>
    </p>
    <scroll-container id="example-element">
      <scroll-page id="pageA">A</scroll-page>
      <scroll-page id="pageB">B</scroll-page>
      <scroll-page id="pageC">C</scroll-page>
    </scroll-container>
  </div>
</section>
```

```css interactive-example
.container {
  flex-direction: column;
}

.nav a {
  color: #009e5f;
}

scroll-container {
  border: 1px solid black;
  display: block;
  height: 200px;
  overflow-y: scroll;
  width: 200px;
}

scroll-page {
  align-items: center;
  display: flex;
  font-size: 5em;
  height: 100%;
  justify-content: center;
}
```

Beachten Sie, dass alle anderen Scrolls, wie z.B. die vom Benutzer ausgeführten, von dieser Eigenschaft nicht betroffen sind. Wenn diese Eigenschaft auf dem Wurzelelement angegeben ist, gilt sie stattdessen für das Ansichtsfenster. Diese Eigenschaft, die auf das `body`-Element angewendet wird, wird _nicht_ auf das Ansichtsfenster übertragen.

Benutzeragenten dürfen diese Eigenschaft ignorieren.

## Syntax

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

Die `scroll-behavior`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `auto`
  - : Die Scrollbox scrollt sofort.
- `smooth`
  - : Die Scrollbox scrollt in einer sanften Art und Weise unter Verwendung einer vom Benutzeragenten definierten Easing-Funktion über einen vom Benutzeragenten definierten Zeitraum. Benutzeragenten sollten, falls vorhanden, den Plattformkonventionen folgen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des sanften Scrollverhaltens

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

## Browser-Kompatibilität

{{Compat}}
