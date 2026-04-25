---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: c8990ddd46c4605793660e16edf6dda79300ca90
---

Das **`revert-rule`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den kaskadierten Wert einer Eigenschaft auf den Wert zurück, den sie gehabt hätte, wenn die aktuelle [Stilregel](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) nicht vorhanden gewesen wäre. Die Kaskade bestimmt dann den Wert aus den verbleibenden Deklarationen — dies könnte eine andere Regel in derselben [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), eine Regel in einer anderen Schicht, ein anderer {{Glossary("Style_origin", "Stilursprung")}} oder ein [Standardwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (`inherited` oder `initial`) sein.

Wenn es innerhalb einer [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) (dem Animationsursprung) verwendet wird, verhält sich das Schlüsselwort `revert-rule` wie {{cssxref("revert-layer")}}.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-rule vs. revert-layer vs. revert

Die `revert-rule`, {{cssxref("revert-layer")}}, und {{cssxref("revert")}} Schlüsselwörter setzen die Kaskade zurück, jedoch auf unterschiedlichen Granularitätsstufen:

- {{cssxref("revert")}} entfernt alle Deklarationen vom aktuellen {{Glossary("Style_origin", "Stilursprung")}} und geht auf den vorherigen Ursprung zurück (zum Beispiel von Autorenstilen zu Benutzeragentenstilen).
- {{cssxref("revert-layer")}} entfernt alle Deklarationen von der aktuellen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) und geht auf die vorherige Schicht innerhalb desselben Ursprungs zurück.
- `revert-rule` entfernt nur die Deklarationen aus der aktuellen Stilregel. Andere Regeln in derselben Kaskadenschicht gelten weiterhin.

Dies macht `revert-rule` nützlich, um spezifische Deklarationen innerhalb einer Regel auszublenden, während Deklarationen aus anderen Regeln in derselben Schicht weiterhin respektiert werden.

## Beispiele

### Zurücksetzung auf die vorherige Regel

In diesem Beispiel zielen zwei Regeln auf dasselbe Element ab. Die zweite Regel verwendet `revert-rule` auf die `color`-Eigenschaft, was dazu führt, dass die Kaskade den Wert bestimmt, als ob die `p.special`-Regel nicht vorhanden wäre, und auf den durch die erste Regel festgelegten Wert zurückfällt.

#### HTML

```html
<p class="special">This paragraph has special styling.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: blue;
  font-weight: bold;
}

p.special {
  color: revert-rule;
  border: 1px solid currentcolor;
}
```

#### Ergebnis

{{EmbedLiveSample('Rolling back to the previous rule', '100%', 120)}}

Der Text des Absatzes ist blau durch die `p`-Regel, da `color: revert-rule` bewirkt, dass die `color`-Deklaration in `p.special` ignoriert wird. Die Deklarationen für `font-weight` und `border` bleiben unverändert.

### Zurücksetzen von einem Stil-Attribut

Wenn `revert-rule` in einem [style-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) verwendet wird, bewirkt es, dass die Kaskade so handelt, als ob das Stil-Attribut nicht vorhanden wäre. Dies funktioniert, weil das Stil-Attribut als eigene Stilregel behandelt wird.

#### HTML

```html
<p style="color: revert-rule">This text uses the stylesheet color.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: green;
}
```

#### Ergebnis

{{EmbedLiveSample('Reverting from a style attribute', '100%', 120)}}

Der Text des Absatzes ist grün, weil `revert-rule` die Kaskade dazu veranlasst, die Deklaration des Stil-Attributs zu ignorieren, und die `p`-Regel wirksam wird.

### Verkettung mehrerer `revert-rule` Werte

Wenn mehrere Regeln `revert-rule` für dieselbe Eigenschaft verwenden, ignoriert die Kaskade jede von ihnen nacheinander und setzt den Vorgang durch frühere Regeln fort, bis sie einen konkreten Wert findet.

#### HTML

```html
<p class="a b">This text is styled by a chain of revert-rule values.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: red;
}
p.a {
  color: revert-rule;
}
p.b {
  color: revert-rule;
}
```

#### Ergebnis

{{EmbedLiveSample('Chaining multiple revert-rule values', '100%', 120)}}

Sowohl die `p.b`- als auch die `p.a`-Regeln werden durch `revert-rule` ignoriert. Die Kaskade geht zur `p`-Regel über, sodass der Text rot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [Modul CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
