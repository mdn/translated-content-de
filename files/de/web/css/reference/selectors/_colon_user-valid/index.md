---
title: "`:user-valid` CSS-Pseudoklasse"
short-title: :user-valid
slug: Web/CSS/Reference/Selectors/:user-valid
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:user-valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes validierte Formularelement dessen Wert basierend auf seinen [Validierungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) korrekt validiert. Im Gegensatz zu {{cssxref(":valid")}} wird sie jedoch erst dann übereinstimmend, wenn der Nutzer damit interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularfeld gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Nutzer hat eine Änderung am Formularfeld vorgenommen und die Änderung durch Verschieben des Fokus an eine andere Stelle bestätigt.
- Der Nutzer hat versucht, das Formular abzusenden, auch wenn keine Änderung am Feld vorgenommen wurde.
- Der Wert war ungültig, als der Fokus erhalten wurde, und der Nutzer hat eine Änderung vorgenommen, die ihn gültig macht, selbst wenn der Fokus noch auf dem Feld liegt.

Sobald diese Pseudoklasse angewendet wurde, überprüft der User-Agent bei jedem Tastenanschlag, ob das Feld bei Fokus gültig ist.

- Wenn das Feld den Fokus hat und der Wert beim Erlangen des Fokus ungültig war, erfolgt bei jedem Tastenanschlag eine erneute Validierung.

Das Ergebnis ist, dass, wenn das Feld gültig war, als der Nutzer zu interagieren begann, die Gültigkeitsstile nur dann geändert werden, wenn der Nutzer den Fokus auf ein anderes Feld verschiebt. Wenn der Nutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Feld sofort, wenn der Wert gültig wird. Erforderliche Elemente werden nur dann als ungültig gekennzeichnet, wenn der Nutzer sie ändert oder versucht, einen unveränderten, ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Festlegen einer Farbe und eines Symbols auf :user-valid

Im folgenden Beispiel werden der grüne Rahmen und ✅ erst angezeigt, wenn der Nutzer mit dem Feld interagiert hat.
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
