---
title: text-decoration-style
slug: Web/CSS/Reference/Properties/text-decoration-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-decoration-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der durch {{ cssxref("text-decoration-line") }} spezifizierten Linien fest. Der Stil wird auf alle Linien angewendet, die mit `text-decoration-line` gesetzt sind.

{{InteractiveExample("CSS Demo: text-decoration-style")}}

```css interactive-example-choice
text-decoration-style: solid;
```

```css interactive-example-choice
text-decoration-style: double;
```

```css interactive-example-choice
text-decoration-style: dotted;
```

```css interactive-example-choice
text-decoration-style: dashed;
```

```css interactive-example-choice
text-decoration-style: wavy;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-decoration-line: underline;
}
```

Wenn die angegebene Dekoration eine bestimmte semantische Bedeutung hat, wie zum Beispiel eine durchgestrichene Linie, die bedeutet, dass ein Text gelöscht wurde, wird empfohlen, diese Bedeutung mit einem HTML-Tag, wie {{ HTMLElement("del") }} oder {{ HTMLElement("s") }}, zu kennzeichnen. Da Browser das Styling in einigen Fällen deaktivieren können, würde die semantische Bedeutung in einer solchen Situation nicht verloren gehen.

Wenn Sie mehrere Line-Dekorationseigenschaften gleichzeitig festlegen, kann es praktischer sein, die Kurzschreibeigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

### Werte

- solid
  - : Zeichnet eine einzelne Linie.
- double
  - : Zeichnet eine doppelte Linie.
- dotted
  - : Zeichnet eine gepunktete Linie.
- dashed
  - : Zeichnet eine gestrichelte Linie.
- wavy
  - : Zeichnet eine wellenförmige Linie.
- \-moz-none
  - : Zeichnet keine Linie. Verwenden Sie stattdessen {{cssxref("text-decoration-line", "text-decoration-line: none")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine wellenförmige Unterstreichung setzen

Das folgende Beispiel erstellt eine rote wellenförmige Unterstreichung:

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

#### Ergebnisse

{{EmbedLiveSample('Setting_a_wavy_underline')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn Sie mehrere Line-Dekorationseigenschaften gleichzeitig festlegen, kann es praktischer sein, die Kurzschreibeigenschaft {{cssxref("text-decoration")}} zu verwenden.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
