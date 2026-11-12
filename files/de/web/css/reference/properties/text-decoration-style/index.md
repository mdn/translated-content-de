---
title: "`text-decoration-style` CSS property"
short-title: text-decoration-style
slug: Web/CSS/Reference/Properties/text-decoration-style
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-style`** legt den Stil der durch {{ cssxref("text-decoration-line") }} festgelegten Linien fest. Der Stil gilt für alle Linien, die mit `text-decoration-line` festgelegt wurden.

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

Wenn die festgelegte Textdekoration eine bestimmte semantische Bedeutung hat – etwa wenn eine durchgestrichene Linie anzeigt, dass Text gelöscht wurde –, sollten Sie diese Bedeutung durch ein HTML-Tag wie {{ HTMLElement("del") }} oder {{ HTMLElement("s") }} kennzeichnen. Da Browser die Darstellung in manchen Fällen deaktivieren können, bleibt die semantische Bedeutung so erhalten.

Wenn Sie mehrere Eigenschaften für die Liniendekoration gleichzeitig festlegen, kann es praktischer sein, stattdessen die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden.

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
  - : Zeichnet eine Wellenlinie.
- \-moz-none
  - : Zeichnet keine Linie. Verwenden Sie stattdessen {{cssxref("text-decoration-line", "text-decoration-line: none")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine wellenförmige Unterstreichung festlegen

Das folgende Beispiel erzeugt eine rote, wellenförmige Unterstreichung:

#### HTML

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_wavy_underline')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn Sie mehrere Eigenschaften für die Liniendekoration gleichzeitig festlegen, kann es praktischer sein, stattdessen die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
