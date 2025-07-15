---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-decoration-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil der Linien fest, die durch {{ cssxref("text-decoration-line") }} spezifiziert werden. Der Stil gilt für alle Linien, die mit `text-decoration-line` festgelegt sind.

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

Wenn die angegebene Dekoration eine spezifische semantische Bedeutung hat, wie z.B. eine durchgestrichene Linie, die bedeutet, dass ein Text gelöscht wurde, wird empfohlen, diese Bedeutung mit einem HTML-Tag wie {{ HTMLElement("del") }} oder {{ HTMLElement("s") }} zu kennzeichnen. Da Browser in manchen Fällen das Styling deaktivieren können, geht die semantische Bedeutung in einer solchen Situation nicht verloren.

Beim gleichzeitigen Setzen mehrerer Linienstil-Eigenschaften kann es praktischer sein, die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden.

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
  - : Zeichnet eine einfache Linie.
- double
  - : Zeichnet eine doppelte Linie.
- dotted
  - : Zeichnet eine gepunktete Linie.
- dashed
  - : Zeichnet eine gestrichelte Linie.
- wavy
  - : Zeichnet eine wellige Linie.
- \-moz-none
  - : Zeichnet keine Linie. Verwenden Sie stattdessen {{cssxref("text-decoration-line", "text-decoration-line: none")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer welligen Unterstreichung

Das folgende Beispiel erstellt eine rote wellige Unterstreichung:

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

- Beim gleichzeitigen Setzen mehrerer Linienstil-Eigenschaften kann es praktischer sein, die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
