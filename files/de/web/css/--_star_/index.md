---
title: "Custom properties (--*): CSS variables"
slug: Web/CSS/--*
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Eigenschaftsnamen, die mit `--` beginnen, wie `--example-name`, stehen für _benutzerdefinierte Eigenschaften_, die einen Wert enthalten, der in anderen Deklarationen unter Verwendung der {{cssxref("var", "var()")}}-Funktion verwendet werden kann.

Benutzerdefinierte Eigenschaften sind auf das/die Element(e) beschränkt, auf dem/denen sie deklariert sind, und nehmen an der Kaskade teil: Der Wert einer solchen benutzerdefinierten Eigenschaft ergibt sich aus der Deklaration, die durch den kaskadierenden Algorithmus bestimmt wird.

{{CSSInfo}}

## Syntax

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Dieser Wert entspricht jeder Sequenz von einem oder mehreren Tokens, solange die Sequenz kein unzulässiges Token enthält. Er repräsentiert die Gesamtheit dessen, was eine gültige Deklaration als Wert haben kann.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind case-sensitive — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

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
  --first-color: #1166ff;
  --second-color: #ffff77;
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
  --first-color: #229900;
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
- {{cssxref("@property")}}-Regel
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
