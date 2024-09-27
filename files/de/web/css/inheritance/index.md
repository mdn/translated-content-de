---
title: Vererbung
slug: Web/CSS/Inheritance
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft auf einem Element kein Wert festgelegt ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) des Elternelements gesetzt sind
- **Nicht-vererbte Eigenschaften**, die standardmäßig auf den [Initialwert](/de/docs/Web/CSS/initial_value) der Eigenschaft gesetzt sind

Lesen Sie die Definition jeder [CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index), um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert festgelegt wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) dieser Eigenschaft des Elternelements. Nur das Wurzelelement des Dokuments erhält den [Initialwert](/de/docs/Web/CSS/initial_value), der in der Eigenschaften-Zusammenfassung angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/color)-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

Die Worte "emphasized text" erscheinen grün, da das `em` Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p` Element geerbt hat. Es erhält _nicht_ den Initialwert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** auf einem Element kein Wert festgelegt wurde, erhält das Element den [Initialwert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft (wie in der Eigenschaften-Zusammenfassung angegeben).

Ein typisches Beispiel für eine nicht-vererbte Eigenschaft ist die {{ Cssxref("border") }}-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

Die Wörter "emphasized text" werden keinen zusätzlichen Rahmen haben (da der Initialwert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/all)-Kurzschreibweise steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Schriftart des Absatzes auf den Standard des Benutzer-Agents zurück, es sei denn, es existiert ein Benutzer-Stilblatt, in welchem Fall dieses verwendet wird. Dann wird die Schriftgröße verdoppelt und eine [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Vererbung überschreiben, ein Beispiel

Anhand unseres vorherigen Beispiels mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung explizit mit `inherit` setzen, erhalten wir Folgendes:

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

Hier sehen wir einen weiteren Rahmen um das Wort "emphasized text".

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [benutzt](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Einrückungsmodul](/de/docs/Web/CSS/CSS_nesting)
