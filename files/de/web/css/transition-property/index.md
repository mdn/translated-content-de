---
title: transition-property
slug: Web/CSS/transition-property
l10n:
  sourceCommit: bed59f268d5e299beb538e435f08c4f4ce685980
---

{{CSSRef}}

Die **`transition-property`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die CSS-Eigenschaften fest, auf die ein [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) angewendet werden soll.

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

Wenn Sie eine Kurznotationseigenschaft angeben (z. B. {{cssxref("background")}}), werden alle ihre Langformuntereigenschaften, die animiert werden können, berücksichtigt.

## Syntax

```css
/* Schlüsselwortwerte */
transition-property: none;
transition-property: all;

/* <custom-ident> Werte */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Mehrere Werte */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Globale Werte */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### Werte

- `none`
  - : Keine Eigenschaften werden überblendet.
- `all`
  - : Alle Eigenschaften, die überblendet werden können, werden überblendet.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein String, der die Eigenschaft identifiziert, auf die ein Übergangseffekt angewendet werden soll, wenn sich ihr Wert ändert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Wenn der Button fokussiert oder darauf gezeigt wird, durchläuft er eine einsekündige Farbüberblendung; die `transition-property` ist [`background-color`](/de/docs/Web/CSS/background-color).

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

Sehen Sie unseren Leitfaden [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) für weitere Beispiele zur `transition-property`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
