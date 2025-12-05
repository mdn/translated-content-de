---
title: Vererbung
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

In CSS steuert die **Vererbung**, was passiert, wenn kein Wert für eine Eigenschaft eines Elements angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des übergeordneten Elements gesetzt sind
- **nicht-vererbte Eigenschaften**, die standardmäßig auf den [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) der Eigenschaft gesetzt sind

Schauen Sie sich die Definition [einer beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) an, um zu sehen, ob eine spezifische Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn kein Wert für eine **vererbte Eigenschaft** bei einem Element angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) dieser Eigenschaft des übergeordneten Elements. Nur das Wurzelelement des Dokuments erhält den [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die {{cssxref("color")}}-Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Vererbte Eigenschaften","",40)}}

Die Worte "hervorgehobener Text" erscheinen grün, da das `em`-Element den Wert der {{cssxref("color")}}-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Initialwert der Eigenschaft (welche die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn kein Wert für eine **nicht-vererbte Eigenschaft** bei einem Element angegeben wurde, erhält das Element den [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

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

Die Worte "hervorgehobener Text" haben keinen weiteren Rahmen (da der Initialwert von {{cssxref("border-style")}} `none` ist).

## Hinweise

Das [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit)-Schlüsselwort ermöglicht es Autoren, Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der {{cssxref("all")}}-Kurzform-Eigenschaft steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der {{cssxref("font")}}-Eigenschaft der Absätze auf den Standard des User Agents zurück, es sei denn, es existiert ein Benutzer-Stylesheet, in welchem Fall dieses stattdessen verwendet wird. Dann wird die Schriftgröße verdoppelt und ein {{cssxref("font-weight")}} von `"bold"` angewendet.

### Vererbung überschreiben, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit {{cssxref("border")}}, wenn wir die Vererbung explizit mit `inherit` setzen, erhalten wir Folgendes:

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

{{EmbedLiveSample("Vererbung überschreiben, ein Beispiel","",40)}}

Hier sehen wir einen weiteren Rahmen um das Wort "hervorgehobener Text".

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer), und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächlich](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)-Modul
