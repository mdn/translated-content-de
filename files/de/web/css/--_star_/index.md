---
title: "Benutzerdefinierte Eigenschaften (--*): CSS-Variablen"
slug: Web/CSS/--*
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Eigenschaftsnamen, die mit `--` vorangestellt sind, wie `--example-name`, repräsentieren _benutzerdefinierte Eigenschaften_, die einen Wert enthalten, der in anderen Deklarationen mittels der {{cssxref("var", "var()")}} Funktion verwendet werden kann.

Benutzerdefinierte Eigenschaften sind auf das/die Element(e) beschränkt, auf denen sie deklariert werden und nehmen an der Kaskade teil: Der Wert einer solchen benutzerdefinierten Eigenschaft ist der der Deklaration, die durch den Kaskadenalgorithmus entschieden wird.

{{CSSInfo}}

## Syntax

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Dieser Wert entspricht jeder Sequenz von einem oder mehreren Token, solange die Sequenz kein nicht erlaubtes Token enthält. Er repräsentiert die Gesamtheit dessen, was eine gültige Deklaration als Wert haben kann.

> [!NOTE]
> Namen von benutzerdefinierten Eigenschaften sind groß-/kleinschreibungssensitiv — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

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

- Die {{cssxref("var", "var()")}} Funktion
- {{cssxref("@property")}} At-Regel
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
