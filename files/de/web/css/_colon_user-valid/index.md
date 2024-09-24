---
title: ":user-valid"
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungsbedingungen](/de/docs/Web/HTML/Constraint_validation) korrekt validiert wird. Im Gegensatz zu {{cssxref(":valid")}} passt sie jedoch nur, nachdem der Benutzer mit dem Element interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formularelement vorgenommen und die Änderung bestätigt, z.B. durch Verschiebung des Fokus auf ein anderes Element.
- Der Benutzer hat versucht, das Formular zu übermitteln, auch wenn keine Änderung am Element vorgenommen wurde.
- Der Wert war ungültig, als das Element den Fokus erhielt, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig macht, selbst wenn der Fokus weiterhin im Element ist.

Sobald diese Pseudoklasse angewendet wurde, überprüft der User-Agent bei jedem Tastendruck im Fokus, ob das Element gültig ist.

- Wenn das Element den Fokus hat und der Wert ungültig war, als es den Fokus erhielt, erfolgt bei jedem Tastendruck eine erneute Validierung.

Das Ergebnis ist, dass, wenn das Element gültig war, als der Benutzer anfing, damit zu interagieren, das Gültigkeitsstyling nur geändert wird, wenn der Benutzer den Fokus auf ein anderes Element verschiebt. Wenn jedoch der Benutzer versucht, einen zuvor markierten Wert zu korrigieren, wird das Element sofort angezeigt, sobald der Wert gültig wird. Erforderliche Elemente werden nur als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert einzureichen.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Farbe und Symbol für :user-valid einstellen

Im folgenden Beispiel werden der grüne Rand und das ✅ erst angezeigt, nachdem der Benutzer mit dem Feld interagiert hat.
Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um es in Aktion zu sehen.

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
