---
title: Vererbung
slug: Web/CSS/Inheritance
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft auf einem Element kein Wert angegeben ist.

CSS-Eigenschaften lassen sich in zwei Typen kategorisieren:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) des übergeordneten Elements eingestellt sind
- **nicht vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/initial_value) der Eigenschaft eingestellt sind

Schauen Sie sich die Definition [jeder CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) an, um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) dieser Eigenschaft vom übergeordneten Element. Nur das Wurzelelement des Dokuments erhält den in der Eigenschaftszusammenfassung angegebenen [Anfangswert](/de/docs/Web/CSS/initial_value).

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

Die Wörter "emphasized text" erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (welcher die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe festlegt).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft (wie in der Eigenschaftszusammenfassung angegeben).

Ein typisches Beispiel für eine nicht vererbte Eigenschaft ist die {{ Cssxref("border") }}-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

Die Wörter "emphasized text" werden keinen zusätzlichen Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, Vererbung ausdrücklich zu spezifizieren. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der [`all`](/de/docs/Web/CSS/all)-Kurzform-Eigenschaft steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [`font`](/de/docs/Web/CSS/font)-Eigenschaft der Absätze auf den Standard des Benutzer-Agents zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in welchem Fall dieses verwendet wird. Anschließend verdoppelt es die Schriftgröße und wendet ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` an.

### Überschreiben der Vererbung, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung ausdrücklich auf `inherit` setzen, erhalten wir Folgendes:

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

Hier sehen wir einen zusätzlichen Rahmen um das Wort "emphasized text".

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/Cascade)
- [Bausteine: der CSS-Cascade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Cascade-Layer](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)-Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [At-Rules](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [computed](/de/docs/Web/CSS/computed_value), [used](/de/docs/Web/CSS/used_value), und [actual](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
