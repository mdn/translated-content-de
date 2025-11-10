---
title: initial
slug: Web/CSS/Reference/Values/initial
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`initial`** [CSS](/de/docs/Web/CSS) Schlüsselwort wendet den [initialen (oder Standard-) Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Wenn `all` auf `initial` gesetzt ist, können alle CSS-Eigenschaften auf einmal auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [geerbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen in Betracht ziehen, die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} zu verwenden.

## Beispiele

### Benutzung von initial zum Zurücksetzen der Farbe für ein Element

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

Mit dem `initial` Schlüsselwort wird in diesem Beispiel der `color` Wert des `em` Elements auf den Anfangswert von [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) zurückgesetzt, wie in der Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("inherit")}} Schlüsselwort, um die Eigenschaft eines Elements wie die seines übergeordneten Elements erscheinen zu lassen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einem vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren initialen, geerbten, zurückgesetzten oder nicht gesetzten Zustand zurückzusetzen.
