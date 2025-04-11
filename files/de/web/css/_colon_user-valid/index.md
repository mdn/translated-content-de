---
title: :user-valid
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungseinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) korrekt validiert wurde. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch erst angewendet, nachdem der Benutzer damit interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularsteuerelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formularsteuerelement vorgenommen und diese Änderung durch z. B. das Verlassen des Fokus bestätigt.
- Der Benutzer hat versucht, das Formular abzuschicken, auch wenn keine Änderungen am Steuerelement vorgenommen wurden.
- Der Wert war ungültig, als er den Fokus erhielt, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig gemacht hat, selbst wenn der Fokus noch im Steuerelement ist.

Sobald diese Pseudoklasse angewendet wurde, überprüft der Benutzer-Agent bei jeder Tasteneingabe neu, ob das Steuerelement gültig ist, wenn das Steuerelement im Fokus ist.

- Wenn das Steuerelement den Fokus hat und der Wert beim Erhalt des Fokus ungültig war, erfolgt bei jeder Tasteneingabe eine erneute Validierung.

Das Ergebnis ist, dass, wenn das Steuerelement gültig war, als der Benutzer damit zu interagieren begann, sich das Gültigkeits-Styling erst ändert, wenn der Benutzer den Fokus auf ein anderes Steuerelement verlagert. Wenn der Benutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Steuerelement sofort an, wenn der Wert gültig wird. Erforderliche Elemente werden nur dann als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol auf :user-valid setzen

Im folgenden Beispiel werden der grüne Rand und ✅ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat. Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um es in Aktion zu sehen.

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
