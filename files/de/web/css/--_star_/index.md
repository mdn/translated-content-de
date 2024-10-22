---
title: "Benutzerdefinierte Eigenschaften (--*): CSS-Variablen"
slug: Web/CSS/--*
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Eigenschaftsnamen, die mit `--` beginnen, wie `--example-name`, repräsentieren _benutzerdefinierte Eigenschaften_, die einen Wert enthalten, der in anderen Deklarationen mit der {{cssxref("var", "var()")}}-Funktion verwendet werden kann.

Benutzerdefinierte Eigenschaften sind auf das Element/die Elemente beschränkt, auf denen sie deklariert werden, und nehmen an der Kaskade teil: Der Wert einer solchen benutzerdefinierten Eigenschaft ist derjenige aus der Deklaration, die durch den Kaskadenalgorithmus entschieden wird.

{{CSSInfo}}

## Syntax

```css
--some-keyword: left;
--some-color: #0000ff;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Dieser Wert entspricht einer beliebigen Sequenz von einem oder mehreren Token, solange die Sequenz kein nicht erlaubtes Token enthält. Es repräsentiert die Gesamtheit dessen, was eine gültige Deklaration als ihren Wert haben kann.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind case-sensitive — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

## Beispiel

### HTML

```html
<p id="firstParagraph">
  This paragraph should have a blue background and yellow text.
</p>
<p id="secondParagraph">
  This paragraph should have a yellow background and blue text.
</p>
<div id="container">
  <p id="thirdParagraph">
    This paragraph should have a green background and yellow text.
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Ergebnis

{{EmbedLiveSample('Example', 500, 130)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("var", "var()")}}-Funktion
- {{cssxref("@property")}} at-Regel
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
