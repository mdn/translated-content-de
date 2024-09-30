---
title: ":user-invalid"
slug: Web/CSS/:user-invalid
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`:user-invalid`** CSS-[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungsbedingungen](/de/docs/Web/HTML/Constraint_validation) ungültig ist, nachdem der Benutzer damit interagiert hat.

Die `:user-invalid` Pseudo-Klasse muss ein {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}} oder leeres, aber {{CSSxRef(":required")}} Element zwischen dem Zeitpunkt, an dem der Benutzer versucht hat, das Formular abzuschicken, und bevor der Benutzer erneut mit dem Formularelement interagiert hat, entsprechen.

## Syntax

```css
:user-invalid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol auf :user-invalid setzen

Im folgenden Beispiel werden die rote Umrandung und das ❌ nur angezeigt, nachdem der Benutzer mit dem Feld interagiert hat. Versuchen Sie, etwas anderes als eine E-Mail-Adresse einzugeben, um es in Aktion zu sehen.

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
