---
title: <length-percentage>
slug: Web/CSS/length-percentage
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Der **`<length-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Wert, der entweder eine {{Cssxref("length")}} oder ein {{Cssxref("percentage")}} sein kann.

## Syntax

Verweisen Sie auf die Dokumentation für {{Cssxref("length")}} und {{Cssxref("percentage")}} für Details zu den individuellen Syntaxen, die von diesem Typ erlaubt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für length-percentage

Das folgende einfache Beispiel demonstriert mehrere Eigenschaften, die `<length-percentage>`-Werte verwenden.

#### HTML

```html
<p>You can use percentages and lengths in so many places.</p>
```

#### CSS

```css
p {
  /* length-percentage examples */
  width: 75%;
  height: 200px;
  margin: 3rem;
  padding: 1%;
  border-radius: 10px 10%;
  font-size: 250%;
  line-height: 1.5em;

  /* length examples */
  text-shadow: 1px 1px 1px red;
  border: 5px solid red;
  letter-spacing: 3px;

  /* percentage example */
  text-size-adjust: 20%;
}
```

#### Ergebnis

{{EmbedLiveSample('length-percentage_examples', '100%', 320)}}

### Verwendung in calc()

Wo ein `<length-percentage>` als zulässiger Typ angegeben ist, bedeutet dies, dass der Prozentsatz in eine Länge aufgelöst wird und daher in einem {{cssxref("calc", "calc()")}}-Ausdruck verwendet werden kann. Daher sind alle folgenden Werte für {{cssxref("width")}} zulässig:

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;length&gt;")}}
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
