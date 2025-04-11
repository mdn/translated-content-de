---
title: :user-invalid
slug: Web/CSS/:user-invalid
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:user-invalid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) ungültig ist, nachdem der Benutzer damit interagiert hat.

Die `:user-invalid` Pseudoklasse muss mit einem {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}} oder leerem, aber {{CSSxRef(":required")}} Element übereinstimmen, in der Zeit, in der der Benutzer versucht hat, das Formular abzusenden, und bevor der Benutzer erneut mit dem Formularelement interagiert hat.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol auf :user-invalid setzen

Im folgenden Beispiel werden der rote Rahmen und ❌ nur angezeigt, sobald der Benutzer mit dem Feld interagiert hat. Versuchen Sie, etwas anderes als eine E-Mail-Adresse einzugeben, um es in Aktion zu sehen.

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
