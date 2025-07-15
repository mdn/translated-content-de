---
title: :user-invalid
slug: Web/CSS/:user-invalid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:user-invalid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Prüfbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) ungültig ist, nachdem der Benutzer mit ihm interagiert hat.

Die `:user-invalid` Pseudoklasse muss mit einem {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}} oder leeren, aber {{CSSxRef(":required")}} Element zwischen der Zeit, in der der Benutzer versucht hat, das Formular abzusenden, und bevor der Benutzer erneut mit dem Formularelement interagiert hat, übereinstimmen.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol für :user-invalid festlegen

Im folgenden Beispiel werden der rote Rahmen und das ❌ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
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
