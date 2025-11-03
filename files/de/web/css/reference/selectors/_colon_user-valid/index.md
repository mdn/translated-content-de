---
title: :user-valid
slug: Web/CSS/Reference/Selectors/:user-valid
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:user-valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungseinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) korrekt validiert wird. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch erst aktiviert, nachdem der Benutzer mit dem Element interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formularelement vorgenommen und diese durch das Verlassen des Fokus bestätigt.
- Der Benutzer hat versucht, das Formular abzusenden, selbst wenn keine Änderung am Element vorgenommen wurde.
- Der Wert war ungültig, als er den Fokus erhielt, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig macht, selbst wenn der Fokus noch auf dem Element liegt.

Sobald diese Pseudoklasse angewendet wurde, überprüft der Benutzeragent bei jedem Tastendruck, ob das Element gültig ist, wenn es den Fokus hat.

- Wenn das Element den Fokus hat und der Wert ungültig war, als es den Fokus erhielt, wird bei jedem Tastendruck erneut validiert.

Das Ergebnis ist, dass, wenn das Element gültig war, als der Benutzer damit zu interagieren begann, die Gültigkeitsformatierung nur geändert wird, wenn der Benutzer den Fokus auf ein anderes Element verschiebt. Wenn der Benutzer jedoch versucht, einen zuvor als ungültig markierten Wert zu korrigieren, zeigt das Element sofort an, wenn der Wert gültig wird. Erforderliche Elemente werden nur als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Festlegen einer Farbe und eines Symbols auf :user-valid

Im folgenden Beispiel werden der grüne Rahmen und ✅ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat. Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um es in Aktion zu sehen.

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
