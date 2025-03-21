---
title: Vererbung
slug: Web/CSS/CSS_cascade/Inheritance
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

In CSS steuert die **Vererbung**, was passiert, wenn für eine Eigenschaft an einem Element kein Wert angegeben ist.

CSS-Eigenschaften können in zwei Typen kategorisiert werden:

- **Vererbte Eigenschaften**, die standardmäßig auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) des Elternelements gesetzt sind
- **Nicht-vererbte Eigenschaften**, die standardmäßig auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) der Eigenschaft gesetzt sind

Verweisen Sie auf die Definition von [beliebigen CSS-Eigenschaften](/de/docs/Web/CSS/Reference#index), um zu sehen, ob eine bestimmte Eigenschaft standardmäßig vererbt wird ("Inherited: yes") oder nicht ("Inherited: no").

## Vererbte Eigenschaften

Wenn für eine **vererbte Eigenschaft** an einem Element kein Wert spezifiziert wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) dieser Eigenschaft von seinem Elternelement. Nur das Wurzelelement des Dokuments erhält den in der Zusammenfassung der Eigenschaft gegebenen [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value).

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

Die Worte "emphasized text" werden grün angezeigt, da das `em`-Element den Wert der [`color`](/de/docs/Web/CSS/color)-Eigenschaft vom `p`-Element geerbt hat. Es erhält _nicht_ den Anfangswert der Eigenschaft (was die Farbe ist, die für das Wurzelelement verwendet wird, wenn die Seite keine Farbe angibt).

## Nicht-vererbte Eigenschaften

Wenn für eine **nicht-vererbte Eigenschaft** an einem Element kein Wert spezifiziert wurde, erhält das Element den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) dieser Eigenschaft (wie in der Zusammenfassung der Eigenschaft angegeben).

Ein typisches Beispiel für eine nicht-vererbte Eigenschaft ist die {{ Cssxref("border") }}-Eigenschaft. Betrachten Sie folgende Stilregeln und das Markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

Die Worte "emphasized text" werden keinen weiteren Rahmen haben (da der Anfangswert von [`border-style`](/de/docs/Web/CSS/border-style) `none` ist).

## Anmerkungen

Das [`inherit`](/de/docs/Web/CSS/inherit)-Schlüsselwort ermöglicht es Autoren, die Vererbung explizit zu spezifizieren. Es funktioniert sowohl bei vererbten als auch bei nicht-vererbten Eigenschaften.

Sie können die Vererbung für alle Eigenschaften auf einmal mit der [`all`](/de/docs/Web/CSS/all)-Kurzschreibweise steuern, die ihren Wert auf alle Eigenschaften anwendet. Zum Beispiel:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Dies setzt den Stil der [Absatz-`font`-Eigenschaft](/de/docs/Web/CSS/font) zurück auf den Standard des Benutzeragenten, es sei denn, es existiert ein Benutzer-Stylesheet, in diesem Fall wird dieses stattdessen verwendet. Dann wird die Schriftgröße verdoppelt und ein [`font-weight`](/de/docs/Web/CSS/font-weight) von `"bold"` angewendet.

### Vererbung überschreiben, ein Beispiel

Verwenden wir unser vorheriges Beispiel mit [`border`](/de/docs/Web/CSS/border), wenn wir die Vererbung explizit mit `inherit` festlegen, erhalten wir folgendes:

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

Wir sehen hier einen weiteren Rahmen um das Wort "emphasized text".

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer) und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
