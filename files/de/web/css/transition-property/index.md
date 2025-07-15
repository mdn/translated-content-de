---
title: transition-property
slug: Web/CSS/transition-property
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transition-property`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die CSS-Eigenschaften fest, auf die ein [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) angewendet werden soll.

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
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

Wenn Sie eine Kurzform-Eigenschaft angeben (z. B. {{cssxref("background")}}), werden alle Langform-Untereigenschaften, die animiert werden können, animiert.

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
  - : Es werden keine Eigenschaften übergegangen.
- `all`
  - : Alle Eigenschaften, die übergangsfähig sind, werden übergangen.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein String, der die Eigenschaft identifiziert, auf die ein Übergangseffekt angewendet werden soll, wenn sich ihr Wert ändert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Wenn der Button überfahren oder fokussiert wird, erfolgt ein einsekündiger Farbübergang; die `transition-property` ist [`background-color`](/de/docs/Web/CSS/background-color).

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
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.target {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #ccc;
}

.target:hover,
.target:focus {
  background-color: #eee;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

Sehen Sie sich unseren [Anleitung zur Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) für weitere `transition-property`-Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
