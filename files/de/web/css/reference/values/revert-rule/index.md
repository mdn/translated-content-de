---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Das **`revert-rule`** [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den vererbten Wert einer Eigenschaft auf den Wert zurück, den sie gehabt hätte, wenn die aktuelle [Stilregel](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) nicht vorhanden gewesen wäre. Die Kaskade bestimmt dann den Wert aus den verbleibenden Deklarationen – dies könnte eine andere Regel in derselben [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer), eine Regel in einer anderen Schicht, ein anderer {{Glossary("Style_origin", "Stilursprung")}} oder ein [Standardwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (`inherited` oder `initial`) sein.

Wenn es in einer [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) (dem Animationsursprung) verwendet wird, verhält sich das `revert-rule` Schlüsselwort wie {{cssxref("revert-layer")}}.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Revert-rule vs. revert-layer vs. revert

Die `revert-rule`, {{cssxref("revert-layer")}}, und {{cssxref("revert")}} Schlüsselwörter setzen alle die Kaskade zurück, allerdings auf unterschiedlichen Ebenen der Granularität:

- {{cssxref("revert")}} entfernt alle Deklarationen aus dem aktuellen {{Glossary("Style_origin", "Stilursprung")}} und setzt auf den vorherigen Ursprung zurück (zum Beispiel von Autorenstilen zu Benutzer-Agent-Stilen).
- {{cssxref("revert-layer")}} entfernt alle Deklarationen aus der aktuellen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) und geht zur vorherigen Schicht innerhalb desselben Ursprungs zurück.
- `revert-rule` entfernt nur die Deklarationen aus der aktuellen Stilregel. Andere Regeln in derselben Kaskadenschicht gelten weiterhin.

Dies macht `revert-rule` nützlich, um spezifische Deklarationen innerhalb einer Regel bedingt zu ignorieren, während Deklarationen aus anderen Regeln in derselben Schicht weiterhin respektiert werden.

## Beispiele

### Zurück zur vorherigen Regel

In diesem Beispiel zielen zwei Regeln auf dasselbe Element. Die zweite Regel verwendet `revert-rule` für die `color`-Eigenschaft, was dazu führt, dass die Kaskade den Wert bestimmt, als ob die `p.special`-Regel nicht vorhanden wäre, und auf den Wert zurückfällt, der von der ersten Regel festgelegt wurde.

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
  border: 1px solid currentColor;
}
```

#### Ergebnis

{{EmbedLiveSample('Zurück zur vorherigen Regel', '100%', 120)}}

Der Text des Absatzes ist durch die `p`-Regel blau, weil `color: revert-rule` die `color`-Deklaration in `p.special` ignorieren lässt. Die Deklarationen `font-weight` und `border` bleiben unverändert.

### Zurücksetzen aus einem Stil-Attribut

Wenn `revert-rule` in einem [Stil-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) verwendet wird, bewirkt es, dass die Kaskade handelt, als ob das Stil-Attribut nicht vorhanden wäre. Dies funktioniert, weil das Stil-Attribut als eigene Stilregel behandelt wird.

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

{{EmbedLiveSample('Zurücksetzen aus einem Stil-Attribut', '100%', 120)}}

Der Text des Absatzes ist grün, weil `revert-rule` die Kaskade die Deklaration des Stil-Attributs ignorieren lässt und die `p`-Regel wirksam wird.

### Verkettung mehrerer `revert-rule` Werte

Wenn mehrere Regeln `revert-rule` für dieselbe Eigenschaft verwenden, ignoriert die Kaskade jede von ihnen nacheinander und geht durch frühere Regeln zurück, bis sie einen konkreten Wert findet.

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

{{EmbedLiveSample('Verkettung mehrerer revert-rule Werte', '100%', 120)}}

Sowohl die `p.b`- als auch die `p.a`-Regeln werden durch `revert-rule` ignoriert. Die Kaskade fällt auf die `p`-Regel zurück, sodass der Text rot ist.

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
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
