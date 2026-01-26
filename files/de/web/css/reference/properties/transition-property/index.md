---
title: transition-property
slug: Web/CSS/Reference/Properties/transition-property
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`transition-property`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die CSS-Eigenschaften fest, auf die ein [Übergangseffekt](/de/docs/Web/CSS/Guides/Transitions/Using) angewendet werden soll.

{{InteractiveExample("CSS Demo: transition-property")}}

```css interactive-example-choice
transition-property: margin-right;
```

```css interactive-example-choice
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-property: all;
```

```css interactive-example-choice
transition-property: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Wenn Sie eine Kurznotationseigenschaft angeben (z.B. {{cssxref("background")}}), werden alle ihre ungekürzten Untereigenschaften, die animiert werden können, berücksichtigt.

## Syntax

```css
/* Keyword values */
transition-property: none;
transition-property: all;

/* <custom-ident> values */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Multiple values */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### Werte

- `none`
  - : Es werden keine Eigenschaften animiert.
- `all`
  - : Alle Eigenschaften, die animierbar sind, werden animiert.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein String, der die Eigenschaft identifiziert, auf die ein Übergangseffekt angewendet werden soll, wenn sich ihr Wert ändert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

Wenn der Button schwebend (hovered) oder fokussiert ist, durchläuft er einen einsekündigen Farbwechsel; die `transition-property` ist {{cssxref("background-color")}}.

#### HTML

```html
<button class="target">Focus me!</button>
```

#### CSS

```css hidden
html {
  height: 100vh;
}

button {
  font-size: 1.4rem;
  padding: 10px 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.target {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #cccccc;
}

.target:hover,
.target:focus {
  background-color: #eeeeee;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

Sehen Sie sich unseren [Leitfaden zur Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using) für weitere Beispiele zur `transition-property` an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
