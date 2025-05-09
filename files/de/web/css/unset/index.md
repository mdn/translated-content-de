---
title: unset
slug: Web/CSS/unset
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Das **`unset`** CSS-Schlüsselwort setzt eine Eigenschaft auf ihren geerbten Wert zurück, wenn die Eigenschaft normalerweise vom Elternteil erbt, und auf ihren [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), wenn nicht. Mit anderen Worten, es verhält sich wie das Schlüsselwort {{cssxref("inherit")}} im ersten Fall, wenn die Eigenschaft eine [geerbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist, und wie das Schlüsselwort {{cssxref("initial")}} im zweiten Fall, wenn die Eigenschaft eine [nicht-geerbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) ist.

**`unset`** kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

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

- Verwenden Sie das Schlüsselwort {{cssxref("initial")}}, um eine Eigenschaft auf ihren Initialwert zu setzen.
- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements wie die seines Elternteils zu machen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den vom Benutzeragenten-Stylesheet festgelegten Wert zurückzusetzen (oder auf Benutzereinstellungen, falls vorhanden).
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Die Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren initialen, geerbten, zurückgesetzten oder ungesetzten Zustand zurückzusetzen.
