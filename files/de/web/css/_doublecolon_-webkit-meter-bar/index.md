---
title: ::-webkit-meter-bar
slug: Web/CSS/::-webkit-meter-bar
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}{{deprecated_header}}

Der **`::-webkit-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudoelement")}} ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), die den Hintergrund eines {{HTMLElement("meter")}}-Elements darstellt. Es wird verwendet, um Stile auf den Container eines Meteranzeige anzuwenden und auszuwählen.

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

const is_safari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (is_safari) {
  document.body.classList.add("safari");
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{htmlelement("meter")}}-Elements zu stylen, sind wie folgt:

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
