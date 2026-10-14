---
title: "`:user-invalid` CSS-Pseudoklasse"
short-title: :user-invalid
slug: Web/CSS/Reference/Selectors/:user-invalid
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:user-invalid`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) bezeichnet jedes Formularelement mit Validierung, dessen Wert gemäß den [Validierungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) ungültig ist, nachdem der Benutzer damit interagiert hat.

Die Pseudoklasse `:user-invalid` muss auf ein Element zutreffen, das {{CSSxRef(":invalid")}} oder {{CSSxRef(":out-of-range")}} ist oder leer ist, obwohl es {{CSSxRef(":required")}} ist. Dies gilt vom Versuch des Benutzers, das Formular abzusenden, bis zur nächsten Interaktion mit dem Formularelement.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Farbe und Symbol für :user-invalid festlegen

Im folgenden Beispiel werden der rote Rahmen und das ❌ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
Geben Sie etwas anderes als eine E-Mail-Adresse ein, um dies auszuprobieren.

```html
<label for="email">Email *: </label>
<input id="email" name="email" type="email" required />
<span></span>
```

```css
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: "✖";
  color: red;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-invalid", 140, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-valid")}}
