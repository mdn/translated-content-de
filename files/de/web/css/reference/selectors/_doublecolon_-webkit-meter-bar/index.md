---
title: "`::-webkit-meter-bar` CSS pseudo-element"
short-title: ::-webkit-meter-bar
slug: Web/CSS/Reference/Selectors/::-webkit-meter-bar
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Das **`::-webkit-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudo-Element")}} ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), die den Hintergrund eines {{HTMLElement("meter")}}-Elements darstellt. Es wird verwendet, um Stile für den Container einer Anzeige in einem Meter zu definieren und anzuwenden.

## Syntax

```css
::-webkit-meter-bar {
  /* ... */
}
```

## Beispiele

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: &nbsp;&nbsp;<meter id="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css hidden
meter {
  height: 30px;
  width: 200px;
  vertical-align: -0.8rem;
}
```

```css
.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-bar {
  background: lime;
  box-shadow: 0 10px 20px grey inset;
  border-radius: 10px;
}
```

### JavaScript

```js
// Safari requires <meter> elements to have an `appearance` of `none` for custom styling
// using `::-webkit-meter-*` selectors, but `appearance: none` breaks rendering on Chrome.
// Therefore, we must check if the browser is Safari-based.

const isSafari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (isSafari) {
  document.body.classList.add("safari");
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("meter")}}-Elements zu stylen, sind wie folgt:
  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
