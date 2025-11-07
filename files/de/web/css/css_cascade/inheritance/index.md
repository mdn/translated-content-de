---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft auf einem Element kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des Elternelements gesetzt sind
- **nicht vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) der Eigenschaft gesetzt sind

Sie können sich die Definition [beliebiger CSS-Eigenschaften](/de/docs/Web/CSS/Reference#index) ansehen, um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) dieser Eigenschaft von seinem Elternelement. Nur das Wurzelelement des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

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

Die Worte „emphasized text“ werden grün erscheinen, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

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

Die Worte „emphasized text“ werden keinen weiteren Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/Reference/Properties/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/Reference/Properties/all)-Kurzschreibweise steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [`font`](/de/docs/Web/CSS/Reference/Properties/font)-Eigenschaft der Absätze auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in diesem Fall wird dieses stattdessen verwendet. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight) von „bold“ angewendet.

### Überschreiben der Vererbung, ein Beispiel

Wenn wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/Reference/Properties/border) verwenden und die Vererbung explizit mit `inherit` festlegen, erhalten wir folgendes:

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

Hier können wir einen weiteren Rahmen um das Wort „emphasized text“ sehen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer), und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)-Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [genutzt](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [aktuelle](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertdefinition-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/Guides/Nesting)
