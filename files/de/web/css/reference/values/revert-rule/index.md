---
title: CSS-Schlüsselwort `revert-rule`
short-title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: da614d19956cb816e3289721e079ded286c34a43
---

Das **`revert-rule`**-[CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den durch die Kaskade bestimmten Wert einer Eigenschaft auf den Wert zurück, den sie ohne die aktuelle [Stilregel](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) hätte. Die Kaskade bestimmt den Wert dann anhand der verbleibenden Deklarationen. Er kann aus einer anderen Regel in derselben [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer), aus einer Regel in einer anderen Ebene, aus einem anderen {{Glossary("Style_origin", "Stilursprung")}} oder aus einem [Standardwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (`inherited` oder `initial`) stammen.

Innerhalb einer [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) (dem Animationsursprung) verhält sich das Schlüsselwort `revert-rule` wie {{cssxref("revert-layer")}}.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Revert-rule im Vergleich zu revert-layer und revert

Die Schlüsselwörter `revert-rule`, {{cssxref("revert-layer")}} und {{cssxref("revert")}} setzen die Kaskade jeweils zurück, unterscheiden sich aber darin, wie weit sie zurückgehen:

- {{cssxref("revert")}} entfernt alle Deklarationen aus dem aktuellen {{Glossary("Style_origin", "Stilursprung")}} und greift auf den vorherigen Ursprung zurück, beispielsweise von Autorenstilen auf User-Agent-Stile.
- {{cssxref("revert-layer")}} entfernt alle Deklarationen aus der aktuellen [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) und greift auf die vorherige Ebene innerhalb desselben Ursprungs zurück.
- `revert-rule` entfernt nur die Deklarationen aus der aktuellen Stilregel. Andere Regeln in derselben Kaskadenebene gelten weiterhin.

Dadurch eignet sich `revert-rule`, um bestimmte Deklarationen innerhalb einer Regel bedingt zu ignorieren, ohne Deklarationen aus anderen Regeln derselben Ebene außer Acht zu lassen.

## Beispiele

### Auf die vorherige Regel zurückgreifen

In diesem Beispiel beziehen sich zwei Regeln auf dasselbe Element. Die zweite Regel verwendet `revert-rule` für die Eigenschaft `color`. Dadurch bestimmt die Kaskade den Wert so, als wäre die Regel `p.special` nicht vorhanden, und greift auf den Wert aus der ersten Regel zurück.

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

{{EmbedLiveSample('Rolling back to the previous rule', '100%', 120)}}

Der Absatztext ist aufgrund der Regel `p` blau, da `color: revert-rule` bewirkt, dass die Deklaration für `color` in `p.special` ignoriert wird. Die Deklarationen für `font-weight` und `border` bleiben davon unberührt.

### Von einem style-Attribut zurückgreifen

Wenn `revert-rule` in einem [style-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) verwendet wird, verhält sich die Kaskade so, als wäre das style-Attribut nicht vorhanden. Das funktioniert, weil das style-Attribut als eigene Stilregel behandelt wird.

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

Der Absatztext ist grün, weil `revert-rule` bewirkt, dass die Kaskade die Deklaration des style-Attributs ignoriert und die Regel `p` wirksam wird.

### Mehrere `revert-rule`-Werte verketten

Wenn mehrere Regeln `revert-rule` für dieselbe Eigenschaft verwenden, ignoriert die Kaskade sie nacheinander und durchsucht frühere Regeln, bis sie einen konkreten Wert findet.

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

Sowohl die Regel `p.b` als auch die Regel `p.a` wird aufgrund von `revert-rule` ignoriert. Die Kaskade greift auf die Regel `p` zurück, sodass der Text rot ist.

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
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
