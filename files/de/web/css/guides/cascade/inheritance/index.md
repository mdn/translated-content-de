---
title: Vererbung
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft an einem Element kein Wert angegeben wird.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des Elternelements gesetzt sind
- **Nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) der Eigenschaft gesetzt sind

Sie können in der Definition [irgendeiner CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) nachsehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** an einem Element kein Wert angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) dieser Eigenschaft von seinem Elternelement. Nur das Wurzelelement des Dokuments erhält den im Eigenschaftszusammenfassung angegebenen [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value).

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

Die Worte "emphasized text" erscheinen grün, da das `em` Element den Wert der [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft vom `p` Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn keine Farbe für die Seite angegeben ist).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** an einem Element kein Wert angegeben wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft (wie in der Eigenschaftszusammenfassung angegeben).

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

Die Worte "emphasized text" werden keinen zusätzlichen Rand haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/Reference/Properties/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit)-Schlüsselwort erlaubt es Autoren, Vererbung explizit anzugeben. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der Kurzschrift-Eigenschaft [`all`](/de/docs/Web/CSS/Reference/Properties/all) steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [`font`](/de/docs/Web/CSS/Reference/Properties/font)-Eigenschaft der Absätze auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzerstilblatt, in welchem Fall dieses stattdessen verwendet wird. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight) von `"bold"` angewendet.

### Vererbung überschreiben, ein Beispiel

Wenn wir in unserem vorherigen Beispiel mit [`border`](/de/docs/Web/CSS/Reference/Properties/border) die Vererbung explizit mit `inherit` setzen, erhalten wir Folgendes:

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

Wir sehen hier einen weiteren Rand um das Wort "emphasized text".

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte für die Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer) und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [At-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Anfangs], [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
