---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft eines Elements kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) des Elternelements gesetzt sind
- **nicht vererbte Eigenschaften**, die standardmäßig auf den [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) der Eigenschaft gesetzt sind

Schauen Sie in die Definition [einer beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index), um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird („Inherited: yes“) oder nicht („Inherited: no“).

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, übernimmt das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) dieser Eigenschaft vom Elternelement. Nur das Wurzelelement des Dokuments erhält den [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

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

Die Wörter „emphasized text“ werden grün dargestellt, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es bekommt _nicht_ den Initialwert der Eigenschaft (dies ist die Farbe, die für das Wurzelelement verwendet wird, wenn keine Farbe für die Seite angegeben ist).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

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

Die Wörter „emphasized text“ haben keine zusätzliche Umrandung (da der Initialwert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort erlaubt es Autor:innen, Vererbung explizit festzulegen. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/all)-Kurzschrift steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [`font`](/de/docs/Web/CSS/font)-Eigenschaft der Absätze auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in welchem Fall dieses verwendet wird. Anschließend wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von „bold“ angewendet.

### Vererbung überschreiben, ein Beispiel

Wenn in unserem vorherigen Beispiel mit [`border`](/de/docs/Web/CSS/border) die Vererbung explizit mit `inherit` festgelegt wird, ergibt sich Folgendes:

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

Hier sehen wir eine zusätzliche Umrandung um das Wort „emphasized text“.

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Leitfaden: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Leitfaden: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächlicher](/de/docs/Web/CSS/CSS_cascade/actual_value) Wert
- [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
