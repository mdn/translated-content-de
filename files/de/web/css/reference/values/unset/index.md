---
title: "`unset` CSS-Schlüsselwort"
short-title: unset
slug: Web/CSS/Reference/Values/unset
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Das **`unset`**-[CSS](/de/docs/Web/CSS)-Schlüsselwort setzt eine Eigenschaft auf ihren geerbten Wert zurück, wenn die Eigenschaft natürlich von ihrem Elternteil erbt, und auf ihren [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), wenn nicht. Mit anderen Worten, es verhält sich wie das {{cssxref("inherit")}}-Schlüsselwort im ersten Fall, wenn die Eigenschaft eine [vererbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist, und wie das {{cssxref("initial")}}-Schlüsselwort im zweiten Fall, wenn die Eigenschaft eine [nicht vererbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) ist.

**`unset`** kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Beispiele

### Farbe

[`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) ist eine vererbte Eigenschaft.

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

[`border`](/de/docs/Web/CSS/Reference/Properties/border#formal_definition) ist eine nicht vererbte Eigenschaft.

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
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements gleich der seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert")}}-Schlüsselwort, um eine Eigenschaft auf den vom User-Agent-Stil festgelegten Wert (oder den von Benutzerstilen, falls vorhanden) zurückzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf einmal auf ihren Anfangs-, geerbten, zurückgesetzten oder ungeänderten Zustand zurückzusetzen.
