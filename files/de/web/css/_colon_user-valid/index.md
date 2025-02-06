---
title: :user-valid
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) korrekt validiert wurde. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch nur angewendet, nachdem der Benutzer mit dem Element interagiert hat.

Diese Pseudoklasse wird angewendet, wenn die Steuerung des Formulars gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung an der Formularsteuerung vorgenommen und diese Änderung durch das Verlegen des Fokus bestätigt.
- Der Benutzer hat versucht, das Formular abzusenden, selbst wenn keine Änderung an der Steuerung vorgenommen wurde.
- Der Wert war ungültig, als der Fokus darauf gelegt wurde, und der Benutzer hat eine Änderung vorgenommen, die den Wert gültig macht, auch wenn der Fokus immer noch auf der Steuerung liegt.

Sobald diese Pseudoklasse angewandt wurde, überprüft der Benutzeragent bei jedem Tastenanschlag während des Fokus auf das Steuerelement erneut, ob die Steuerung gültig ist.

- Wenn die Steuerung den Fokus hat und der Wert beim Erhalten des Fokus ungültig war, wird bei jedem Tastenanschlag erneut validiert.

Das Ergebnis ist, dass, wenn die Steuerung gültig war, als der Benutzer die Interaktion begann, die Validierungsstilierung nur geändert wird, wenn der Benutzer den Fokus auf eine andere Steuerung verschiebt. Wenn der Benutzer jedoch versucht, einen zuvor als ungültig markierten Wert zu korrigieren, wird die Steuerung sofort als gültig angezeigt, sobald der Wert gültig wird. Erforderliche Elemente werden nur dann als ungültig gekennzeichnet, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol mit :user-valid setzen

Im folgenden Beispiel werden der grüne Rahmen und ✅ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um die Wirkung zu sehen.

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
