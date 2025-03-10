---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft eines Elements kein Wert angegeben ist.

CSS-Eigenschaften lassen sich in zwei Typen kategorisieren:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) des Elternelements gesetzt sind.
- **Nicht vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value) der Eigenschaft gesetzt sind.

Schauen Sie in der [Definition jeder CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) nach, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** kein Wert auf einem Element festgelegt wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) dieser Eigenschaft von seinem Elternelement. Nur das Wurzelelement des Dokuments erhält den im Eigenschaftsüberblick angegebenen [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value).

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

Die Worte "emphasized text" erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (welcher die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** kein Wert auf einem Element festgelegt wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value) dieser Eigenschaft (wie im Eigenschaftsüberblick angegeben).

Ein typisches Beispiel für eine nicht vererbte Eigenschaft ist die {{ Cssxref("border") }}-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Nicht vererbte Eigenschaften","",40)}}

Die Worte "emphasized text" werden keinen zusätzlichen Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, Vererbung ausdrücklich festzulegen. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/all)-Kurzschreibweise steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Absätze für die [`font`](/de/docs/Web/CSS/font)-Eigenschaft auf den Standard des Benutzer-Agents zurück, es sei denn, ein Benutzer-Stylesheet existiert, in welchem Fall dieses verwendet wird. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Überschreiben der Vererbung, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung ausdrücklich mit `inherit` setzen, erhalten wir Folgendes:

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

Hier sehen wir einen weiteren Rahmen um das Wort "emphasized text".

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
