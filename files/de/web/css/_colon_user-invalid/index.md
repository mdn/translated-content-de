---
title: :user-invalid
slug: Web/CSS/:user-invalid
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:user-invalid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) steht für jedes validierte Formularelement, dessen Wert basierend auf den [Validierungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) ungültig ist, nachdem der Benutzer damit interagiert hat.

Die `:user-invalid`-Pseudoklasse muss mit einem {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}} oder leerem, aber {{CSSxRef(":required")}}-Element übereinstimmen, und zwar zwischen dem Zeitpunkt, zu dem der Benutzer versucht hat, das Formular abzusenden, und bevor der Benutzer erneut mit dem Formularelement interagiert.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Festlegen einer Farbe und eines Symbols für :user-invalid

Im folgenden Beispiel werden der rote Rand und das ❌ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
Versuchen Sie, etwas anderes als eine E-Mail-Adresse einzugeben, um das Ergebnis zu sehen.

```html
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" required />
  <span></span>
</form>
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
