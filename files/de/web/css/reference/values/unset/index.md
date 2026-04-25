---
title: "`unset` CSS-Schlüsselwort"
short-title: unset
slug: Web/CSS/Reference/Values/unset
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`unset`**-Schlüsselwort in [CSS](/de/docs/Web/CSS) setzt eine Eigenschaft auf ihren geerbten Wert zurück, wenn die Eigenschaft natürlicherweise vom übergeordneten Element erbt, und auf ihren [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), wenn dies nicht der Fall ist. Mit anderen Worten verhält es sich im ersten Fall wie das {{cssxref("inherit")}}-Schlüsselwort, wenn die Eigenschaft eine [geerbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist, und im zweiten Fall wie das {{cssxref("initial")}}-Schlüsselwort, wenn die Eigenschaft eine [nicht-geerbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) ist.

**`unset`** kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Beispiele

### Farbe

[`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist eine geerbte Eigenschaft.

#### HTML

```html
<p>This text is red.</p>
<div class="foo">
  <p>This text is also red.</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value).</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}

.bar {
  color: green;
}

p {
  color: red;
}

.bar p {
  color: unset;
}
```

#### Ergebnis

{{ EmbedLiveSample('Color') }}

### Rahmen

[`border`](/de/docs/Web/CSS/Reference/Properties/border#formal_definition) ist eine nicht-geerbte Eigenschaft.

#### HTML

```html
<p>This text has a red border.</p>
<div>
  <p>This text has a red border.</p>
</div>
<div class="bar">
  <p>This text has a black border (initial default, not inherited).</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### Ergebnis

{{ EmbedLiveSample('Border', 'auto', 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der vom User-Agent-Stylesheet (oder von Benutzerstilen, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorhergehenden Kaskadenebene festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-rule")}}-Schlüsselwort, um eine Eigenschaft auf den Wert einer früheren übereinstimmenden Stilregel zurückzusetzen.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren initialen, geerbten, rückgesetzten oder ungesetzten Zustand zurückzusetzen.
