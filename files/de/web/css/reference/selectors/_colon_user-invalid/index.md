---
title: "`:user-invalid` CSS Pseudoklasse"
short-title: :user-invalid
slug: Web/CSS/Reference/Selectors/:user-invalid
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:user-invalid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf den [Validierungsanforderungen](/de/docs/Web/HTML/Guides/Constraint_validation) ungültig ist, nachdem der Benutzer damit interagiert hat.

Die `:user-invalid` Pseudoklasse muss mit einem {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, oder einem leeren, aber {{CSSxRef(":required")}} Element übereinstimmen, zwischen dem Zeitpunkt, an dem der Benutzer versucht hat, das Formular abzuschicken, und bevor der Benutzer erneut mit dem Formularelement interagiert hat.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol bei :user-invalid festlegen

Im folgenden Beispiel werden der rote Rand und ❌ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
Versuchen Sie, etwas anderes als eine E-Mail-Adresse einzugeben, um es in Aktion zu sehen.

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
