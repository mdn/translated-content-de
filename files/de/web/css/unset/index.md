---
title: unset
short-title: unset
slug: Web/CSS/unset
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

Das **`unset`** CSS-Schlüsselwort setzt eine Eigenschaft auf ihren geerbten Wert zurück, wenn die Eigenschaft natürlicherweise von ihrem Elternteil erbt, und auf ihren [Anfangswert](/de/docs/Web/CSS/initial_value), wenn nicht. Mit anderen Worten, es verhält sich wie das {{cssxref("inherit")}}-Schlüsselwort im ersten Fall, wenn die Eigenschaft eine [geerbte Eigenschaft](/de/docs/Web/CSS/Inheritance#inherited_properties) ist, und wie das {{cssxref("initial")}}-Schlüsselwort im zweiten Fall, wenn die Eigenschaft eine [nicht-geerbte Eigenschaft](/de/docs/Web/CSS/Inheritance#non-inherited_properties) ist.

**`unset`** kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibungseigenschaft {{cssxref("all")}}.

## Beispiele

### Farbe

[`color`](/de/docs/Web/CSS/color#formal_definition) ist eine geerbte Eigenschaft.

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

[`border`](/de/docs/Web/CSS/border#formal_definition) ist eine nicht-geerbte Eigenschaft.

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
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements mit der seines Elternteils gleichzusetzen.
- Verwenden Sie das {{cssxref("revert")}}-Schlüsselwort, um eine Eigenschaft auf den im User-Agent-Stylesheet festgelegten Wert (oder, falls vorhanden, auf Benutzerstile) zurückzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, zurückgesetzten oder `unset` Zustand zurückzusetzen.
