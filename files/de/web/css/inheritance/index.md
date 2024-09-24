---
title: Vererbung
slug: Web/CSS/Inheritance
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn kein Wert für eine Eigenschaft an einem Element angegeben wird.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) des Elternelements gesetzt sind
- **nicht vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/initial_value) der Eigenschaft gesetzt sind

Sie können in der Definition [einer beliebigen CSS-Eigenschaft](/de/docs/Web/CSS/Reference#index) nachsehen, ob eine spezifische Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** kein Wert an einem Element festgelegt wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) dieser Eigenschaft vom Elternelement. Nur das Wurzelelement des Dokuments erhält den [Anfangswert](/de/docs/Web/CSS/initial_value), der in der Zusammenfassung der Eigenschaft angegeben ist.

Ein typisches Beispiel für eine vererbte Eigenschaft ist die [`color`](/de/docs/Web/CSS/color) Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  color: green;
}
```

```html
<p>Dieser Absatz hat <em>betonten Text</em> darin.</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

Die Wörter "betonter Text" erscheinen grün, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color) Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn keine Farbe auf der Seite angegeben ist).

## Nicht vererbte Eigenschaften

Wenn für eine **nicht vererbte Eigenschaft** kein Wert an einem Element festgelegt wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

Ein typisches Beispiel für eine nicht vererbte Eigenschaft ist die {{ Cssxref("border") }} Eigenschaft. Betrachten Sie die folgenden Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>Dieser Absatz hat <em>betonten Text</em> darin.</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

Die Wörter "betonter Text" werden keinen weiteren Rand haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/inherit) Schlüsselwort ermöglicht es Autoren, die Vererbung explizit festzulegen. Es funktioniert sowohl bei vererbten als auch bei nicht vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der Kurzform-Eigenschaft [`all`](/de/docs/Web/CSS/all) steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [`font`](/de/docs/Web/CSS/font)-Eigenschaft der Absätze auf den Standard des Benutzeragenten zurück, es sei denn, es existiert ein Benutzerstylesheet, in welchem Fall dieses verwendet wird. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Die Vererbung überschreiben, ein Beispiel

Verwenden Sie unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), setzen wir die Vererbung explizit mit `inherit`, erhalten wir Folgendes:

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>Dieser Absatz hat <em>betonten Text</em> darin.</p>
```

{{EmbedLiveSample("Overriding inheritance, an example","",40)}}

Hier sehen wir einen weiteren Rand um das Wort "betonter Text".

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Initialwert](/de/docs/Web/CSS/initial_value), [berechneter Wert](/de/docs/Web/CSS/computed_value), [verwendeter Wert](/de/docs/Web/CSS/used_value), und [tatsächlicher Wert](/de/docs/Web/CSS/actual_value)
- [Wert-Definitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
