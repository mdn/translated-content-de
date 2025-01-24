---
title: Vererbung
slug: Web/CSS/Inheritance
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft auf einem Element kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen unterteilt werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) des übergeordneten Elements gesetzt sind
- **nicht vererbte Eigenschaften**, die standardmäßig auf den [Standardwert](/de/docs/Web/CSS/initial_value) der Eigenschaft gesetzt sind

Schauen Sie in die Definition [einer beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index), um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) dieser Eigenschaft auf seinem übergeordneten Element. Nur das Wurzelelement des Dokuments erhält den in der Zusammenfassung der Eigenschaft angegebenen [Standardwert](/de/docs/Web/CSS/initial_value).

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

Die Wörter "emphasized text" werden grün erscheinen, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Standardwert der Eigenschaft (die Farbe, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Standardwert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

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

Die Wörter "emphasized text" werden keine zusätzliche Umrandung haben (da der Standardwert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/all)-Kurzform steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies stellt den Stil der [`font`](/de/docs/Web/CSS/font)-Eigenschaft der Absätze auf den Standardwert des Nutzer-Agents zurück, es sei denn, ein Benutzer-Stylesheet ist vorhanden, in diesem Fall wird dieses verwendet. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Vererbung überschreiben, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung mit `inherit` explizit festlegen, erhalten wir Folgendes:

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

Hier sehen wir eine weitere Umrandung um das Wort "emphasized text".

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in den CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
