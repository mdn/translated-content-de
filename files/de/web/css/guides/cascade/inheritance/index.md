---
title: Vererbung
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

In CSS kontrolliert die **Vererbung**, was passiert, wenn für eine Eigenschaft eines Elements kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des Elternelements gesetzt sind
- **nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) der Eigenschaft gesetzt sind

Beziehen Sie sich auf die Definition jeder beliebigen [CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index), um zu sehen, ob eine spezifische Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn kein Wert für eine **vererbte Eigenschaft** auf einem Element angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) dieser Eigenschaft von seinem Elternelement. Nur das Wurzelelement des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/Reference/Properties/color) Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

Die Worte „emphasized text“ erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/Reference/Properties/color) Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (dies ist die Farbe, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** auf einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

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

Die Worte „emphasized text“ werden keinen weiteren Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/Reference/Properties/border-style) `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit) Schlüsselwort erlaubt es Autoren, die Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften gleichzeitig mit der [`all`](/de/docs/Web/CSS/Reference/Properties/all) Kurzschreibweise kontrollieren, die seinen Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der Absätze auf die Standardeinstellung des Benutzeragenten zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in diesem Fall wird dieses stattdessen verwendet. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight) von `"bold"` angewendet.

### Überschreiben der Vererbung, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/Reference/Properties/border), wenn wir die Vererbung mit `inherit` explizit festlegen, erhalten wir Folgendes:

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

Hier sehen wir einen weiteren Rahmen um das Wort „emphasized text“.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer), und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Einführung in die CSS-Syntax: Deklarationen, Regelmengen und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertesyntaxdefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
