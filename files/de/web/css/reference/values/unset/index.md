---
title: unset
slug: Web/CSS/Reference/Values/unset
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`unset`**-Schlüsselwort in [CSS](/de/docs/Web/CSS) setzt eine Eigenschaft auf ihren geerbten Wert zurück, wenn die Eigenschaft natürlicherweise vom Elternteil erbt, und auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), wenn nicht. Mit anderen Worten, es verhält sich wie das {{cssxref("inherit")}}-Schlüsselwort im ersten Fall, wenn die Eigenschaft eine [geerbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist, und wie das {{cssxref("initial")}}-Schlüsselwort im zweiten Fall, wenn die Eigenschaft eine [nicht-geerbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) ist.

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
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um eine Eigenschaft eines Elements mit der seines Elternteils gleichzusetzen.
- Verwenden Sie das {{cssxref("revert")}}-Schlüsselwort, um eine Eigenschaft auf den vom Benutzer-Agent-Stylesheet festgelegten Wert zurückzusetzen (oder auf benutzerdefinierte Stile, falls vorhanden).
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es, alle Eigenschaften gleichzeitig auf ihren Anfangswert, Erbewert, Rückfallwert oder Unset-Zustand zurückzusetzen.
