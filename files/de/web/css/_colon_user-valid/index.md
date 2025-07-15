---
title: :user-valid
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) korrekt validiert wird. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch erst angewendet, nachdem der Benutzer damit interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat eine Änderung am Formularelement vorgenommen und die Änderung bestätigt, beispielsweise indem der Fokus anderswohin verschoben wurde.
- Der Benutzer hat versucht, das Formular zu übermitteln, selbst wenn keine Änderung am Element vorgenommen wurde.
- Der Wert war ungültig, als er den Fokus bekam, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig macht, selbst wenn der Fokus noch auf dem Element liegt.

Sobald diese Pseudoklasse angewendet wurde, überprüft der User-Agent bei jedem Tastendruck, ob das Element gültig ist, solange es den Fokus hat.

- Wenn das Element den Fokus hat und der Wert beim Erhalten des Fokus ungültig war, erfolgt bei jedem Tastendruck eine erneute Validierung.

Das Ergebnis ist, dass, wenn das Element gültig war, als der Benutzer begann, damit zu interagieren, die Gültigkeitsstilisierung nur geändert wird, wenn der Benutzer den Fokus auf ein anderes Element verschiebt. Wenn der Benutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Element sofort an, wann der Wert gültig wird. Erforderliche Elemente werden nur als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert zu übermitteln.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol auf :user-valid festlegen

Im folgenden Beispiel werden der grüne Rand und ✅ erst angezeigt, wenn der Benutzer mit dem Feld interagiert hat.
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
