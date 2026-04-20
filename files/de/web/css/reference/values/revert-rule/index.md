---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`revert-rule`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den vererbten Wert einer Eigenschaft auf den Wert zurück, den sie gehabt hätte, wenn die aktuelle [Stilregel](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) nicht vorhanden gewesen wäre. Die Kaskade bestimmt dann den Wert aus den verbleibenden Deklarationen – dies könnte eine andere Regel in derselben [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), eine Regel in einer anderen Schicht, ein anderer {{Glossary("Style_origin", "Stilursprung")}} oder ein [Standardwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (`inherited` oder `initial`) sein.

Wenn es innerhalb einer [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) (der Animationsursprung) verwendet wird, verhält sich das `revert-rule`-Schlüsselwort wie {{cssxref("revert-layer")}}.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-rule vs. revert-layer vs. revert

Die Schlüsselwörter `revert-rule`, {{cssxref("revert-layer")}} und {{cssxref("revert")}} setzen die Kaskade zurück, jedoch auf unterschiedlichen Granularitätsebenen:

- {{cssxref("revert")}} entfernt alle Deklarationen vom aktuellen {{Glossary("Style_origin", "Stilursprung")}} und setzt auf den vorherigen Ursprung zurück (zum Beispiel von Autorenstilen auf Benutzeragenturstile).
- {{cssxref("revert-layer")}} entfernt alle Deklarationen von der aktuellen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) und setzt auf die vorherige Schicht innerhalb desselben Ursprungs zurück.
- `revert-rule` entfernt nur die Deklarationen von der aktuellen Stilregel. Andere Regeln in derselben Kaskadenschicht gelten weiterhin.

Dies macht `revert-rule` nützlich, um bestimmte Deklarationen innerhalb einer Regel bedingt zu ignorieren, während die Deklarationen aus anderen Regeln in derselben Schicht respektiert werden.

## Beispiele

### Zurücksetzen auf die vorherige Regel

In diesem Beispiel zielen zwei Regeln auf dasselbe Element. Die zweite Regel verwendet `revert-rule` auf der `color`-Eigenschaft, wodurch die Kaskade den Wert bestimmt, als wäre die Regel `p.special` nicht vorhanden, und auf den Wert zurückgreift, der durch die erste Regel festgelegt wurde.

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

Der Absatztext ist aufgrund der `p`-Regel blau, weil `color: revert-rule` dazu führt, dass die `color`-Deklaration in `p.special` ignoriert wird. Die Deklarationen `font-weight` und `border` sind unverändert.

### Zurücksetzen von einem Stil-Attribut

Wenn `revert-rule` in einem [Stil-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) verwendet wird, bewirkt es, dass die Kaskade so handelt, als ob das Stil-Attribut nicht vorhanden wäre. Dies funktioniert, weil das Stil-Attribut als eigene Stilregel behandelt wird.

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

Der Absatztext ist grün, weil `revert-rule` dazu führt, dass die Kaskade die Deklaration des Stil-Attributs ignoriert, und die `p`-Regel tritt in Kraft.

### Verkettung mehrerer `revert-rule`-Werte

Wenn mehrere Regeln `revert-rule` für dieselbe Eigenschaft verwenden, ignoriert die Kaskade jede von ihnen der Reihe nach, indem sie zu früheren Regeln zurückgeht, bis sie einen konkreten Wert findet.

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

Sowohl die Regeln `p.b` als auch `p.a` werden durch `revert-rule` ignoriert. Die Kaskade fällt auf die `p`-Regel zurück, sodass der Text rot ist.

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
- [Modul für CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
