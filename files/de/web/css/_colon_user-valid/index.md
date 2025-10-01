---
title: :user-valid
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die **`:user-valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) korrekt validiert wird. Im Gegensatz zu {{cssxref(":valid")}} wird es jedoch nur angewendet, nachdem der Benutzer damit interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularsteuerungselement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formularsteuerungselement vorgenommen und die Änderung übernommen, indem er beispielsweise den Fokus woanders hin verlagert hat.
- Der Benutzer hat versucht, das Formular abzusenden, selbst wenn keine Änderung am Steuerungselement vorgenommen wurde.
- Der Wert war ungültig, als es den Fokus erhielt, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig gemacht hat, selbst wenn der Fokus weiterhin auf dem Steuerungselement liegt.

Sobald diese Pseudoklasse angewendet wurde, überprüft der Benutzeragent bei jedem Tastendruck, ob das Steuerungselement gültig ist, wenn es den Fokus hat.

- Wenn das Steuerungselement den Fokus hat und der Wert ungültig war, als es den Fokus erhielt, wird bei jedem Tastendruck neu validiert.

Das Ergebnis ist, dass, wenn das Steuerungselement gültig war, als der Benutzer begann, damit zu interagieren, das Gültigkeits-Styling nur geändert wird, wenn der Benutzer den Fokus auf ein anderes Steuerungselement verschiebt. Wenn der Benutzer jedoch versucht, einen zuvor als ungültig markierten Wert zu korrigieren, zeigt das Steuerungselement sofort an, wenn der Wert gültig wird. Erforderliche Elemente werden nur als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Farbe und Symbol auf :user-valid setzen

Im folgenden Beispiel werden der grüne Rand und ✅ erst angezeigt, wenn der Benutzer mit dem Feld interagiert hat.
Versuchen Sie, die E-Mail-Adresse in eine andere gültige E-Mail zu ändern, um dies in Aktion zu sehen.

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
