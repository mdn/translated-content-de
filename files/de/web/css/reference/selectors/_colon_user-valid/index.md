---
title: "`:user-valid` CSS-Pseudoklasse"
short-title: :user-valid
slug: Web/CSS/Reference/Selectors/:user-valid
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:user-valid`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) erfasst jedes überprüfte Formularelement, dessen Wert die [Validierungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllt. Anders als {{cssxref(":valid")}} greift sie jedoch erst, nachdem der Benutzer mit dem Element interagiert hat.

Diese Pseudoklasse wird auf ein gültiges Formularsteuerelement angewendet, wenn mindestens eine der folgenden Bedingungen erfüllt ist:

- Der Benutzer hat das Formularsteuerelement geändert und die Änderung bestätigt, beispielsweise indem er den Fokus auf ein anderes Element verschoben hat.
- Der Benutzer hat versucht, das Formular abzusenden, auch wenn er das Steuerelement nicht geändert hat.
- Der Wert war ungültig, als das Steuerelement den Fokus erhielt, und der Benutzer hat ihn durch eine Änderung gültig gemacht, während das Steuerelement noch den Fokus hat.

Sobald diese Pseudoklasse angewendet wurde, prüft der User-Agent bei jedem Tastendruck erneut, ob das Steuerelement gültig ist, solange es den Fokus hat.

- Wenn das Steuerelement den Fokus hat und sein Wert ungültig war, als es den Fokus erhielt, wird er bei jedem Tastendruck erneut überprüft.

Das bedeutet: War das Steuerelement gültig, als der Benutzer mit ihm zu interagieren begann, ändert sich die Darstellung seines Gültigkeitszustands erst, wenn der Benutzer den Fokus auf ein anderes Steuerelement verschiebt. Versucht der Benutzer hingegen, einen zuvor als ungültig gekennzeichneten Wert zu korrigieren, zeigt das Steuerelement sofort an, wenn der Wert gültig wird. Erforderliche Angaben werden nur dann als ungültig gekennzeichnet, wenn der Benutzer sie ändert oder versucht, das Formular mit einem unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Farbe und Symbol für :user-valid festlegen

Im folgenden Beispiel erscheinen der grüne Rahmen und das ✅ erst, nachdem der Benutzer mit dem Feld interagiert hat. Ändern Sie die E-Mail-Adresse in eine andere gültige E-Mail-Adresse, um dies zu sehen.

```html
<label for="email">Email *: </label>
<input id="email" name="email" type="email" value="test@example.com" required />
<span></span>
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
