---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In CSS kontrolliert **Vererbung**, was passiert, wenn kein Wert für eine Eigenschaft auf einem Element angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) des Elternelements gesetzt werden
- **Nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) der Eigenschaft gesetzt werden

Sehen Sie sich die Definition [einer beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) an, um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** kein Wert auf einem Element angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) dieser Eigenschaft von seinem Elternelement. Nur das Root-Element des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/color)-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Vererbte Eigenschaften","",40)}}

Die Wörter "emphasized text" erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (welcher die Farbe ist, die für das Root-Element verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** kein Wert auf einem Element angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

Ein typisches Beispiel für eine nicht-vererbte Eigenschaft ist die {{ Cssxref("border") }}-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Nicht-vererbte Eigenschaften","",40)}}

Die Wörter "emphasized text" werden keinen weiteren Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der [`all`](/de/docs/Web/CSS/all)-Kurznotation steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Absätze' [`font`](/de/docs/Web/CSS/font)-Eigenschaft auf den Standard des User-Agents zurück, es sei denn, es existiert ein Benutzerstylesheet, in diesem Fall wird dies stattdessen verwendet. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Überschreiben der Vererbung, ein Beispiel

Wenn wir das vorherige Beispiel mit [`border`](/de/docs/Web/CSS/border) verwenden und die Vererbung mit `inherit` explizit festlegen, erhalten wir folgendes:

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

{{EmbedLiveSample("Überschreiben der Vererbung, ein Beispiel","",40)}}

Wir können hier einen weiteren Rahmen um das Wort "emphasized text" sehen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Behebung von Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- Modul [CSS-Cascading und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- Modul [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [benutzte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
