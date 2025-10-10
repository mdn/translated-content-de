---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft eines Elements kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen eingeteilt werden:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) des Elternelements gesetzt sind
- **Nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) der Eigenschaft gesetzt sind

Schlagen Sie in der Definition einer [beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) nach, um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) dieser Eigenschaft des Elternelements. Nur das Wurzelelement des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/color) Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

Die Wörter „hervorgehobener Text“ erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color) Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (dies ist die Farbe, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

Ein typisches Beispiel für eine nicht-vererbte Eigenschaft ist die {{ Cssxref("border") }} Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

Die Wörter „hervorgehobener Text“ haben keinen zusätzlichen Rahmen (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/inherit) Schlüsselwort erlaubt es Autoren, die Vererbung explizit festzulegen. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der [`all`](/de/docs/Web/CSS/all) Kurznotierung steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Absatz-`font` Eigenschaft auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in diesem Fall wird dieses verwendet. Dann wird die Schriftgröße verdoppelt und ein `font-weight` von „bold“ angewendet.

### Überschreiben der Vererbung, ein Beispiel

Verwenden Sie unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung explizit mit `inherit` festlegen:

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Overriding inheritance, an example","",40)}}

Wir sehen hier einen zusätzlichen Rahmen um das Wort „hervorgehobener Text“.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
