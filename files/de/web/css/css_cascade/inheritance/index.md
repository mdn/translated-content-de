---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft auf einem Element kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) des Elternelements gesetzt sind
- **nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) der Eigenschaft gesetzt sind

Lesen Sie die Definition [beliebiger CSS-Eigenschaften](/de/docs/Web/CSS/Reference#index) nach, um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) dieser Eigenschaft vom Elternelement. Nur das Wurzelelement des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), der in der Eigenschaftszusammenfassung angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

Die Worte "emphasized text" erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft (wie in der Eigenschaftszusammenfassung angegeben).

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

Die Worte "emphasized text" haben keinen zusätzlichen Rand (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/Reference/Properties/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der [`all`](/de/docs/Web/CSS/Reference/Properties/all)-Kurzschreibweise steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Schriftart-Eigenschaft der Absätze auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzerstilblatt, in welchem Fall dieses verwendet wird. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight) von `"bold"` angewendet.

### Überschreiben der Vererbung, ein Beispiel

Anhand unseres vorherigen Beispiels mit [`border`](/de/docs/Web/CSS/Reference/Properties/border), wenn wir die Vererbung mit `inherit` explizit festlegen, erhalten wir folgendes:

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

Hier sehen wir einen weiteren Rand um das Wort "emphasized text".

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [computed](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [used](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [actual](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
