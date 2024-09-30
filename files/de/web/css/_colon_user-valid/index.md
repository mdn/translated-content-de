---
title: ":user-valid"
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein validiertes Formularelement, dessen Wert basierend auf seinen [Validierungsbedingungen](/de/docs/Web/HTML/Constraint_validation) korrekt validiert wurde. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch nur angewendet, nachdem der Benutzer mit dem Element interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formular-Steuerelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formular-Steuerelement vorgenommen und die Änderung bestätigt, z.B. indem der Fokus woandershin verschoben wurde.
- Der Benutzer hat versucht, das Formular abzuschicken, selbst wenn keine Änderung am Steuerelement vorgenommen wurde.
- Der Wert war ungültig, als er den Fokus erhielt, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig machte, auch wenn der Fokus weiterhin auf dem Steuerelement liegt.

Sobald diese Pseudoklasse angewendet wurde, validiert der Benutzeragent die Gültigkeit des Steuerelements bei jedem Tastendruck neu, wenn das Steuerelement den Fokus hat.

- Wenn das Steuerelement den Fokus hat und der Wert ungültig war, als es den Fokus erhielt, wird bei jedem Tastenanschlag neu validiert.

Das Ergebnis ist, dass, wenn das Steuerelement gültig war, als der Benutzer begann, damit zu interagieren, sich das Gültigkeitsstyling nur ändert, wenn der Benutzer den Fokus auf ein anderes Steuerelement verlagert. Wenn der Benutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Steuerelement sofort, wenn der Wert gültig wird. Erforderliche Elemente werden nur als ungültig gekennzeichnet, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Farbe und Symbol für :user-valid festlegen

Im folgenden Beispiel werden der grüne Rand und das ✅ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat. Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um es in Aktion zu sehen.

```html
<form>
  <label for="email">Email *: </label>
  <input
    id="email"
    name="email"
    type="email"
    value="test@example.com"
    required />
  <span></span>
</form>
```

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: "✓";
  color: green;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-valid", 140, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-invalid")}}
