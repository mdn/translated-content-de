---
title: ":user-valid"
slug: Web/CSS/:user-valid
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`:user-valid`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert basierend auf seinen [Validierungskriterien](/de/docs/Web/HTML/Constraint_validation) korrekt validiert wird. Anders als {{cssxref(":valid")}} wird sie jedoch erst angewendet, nachdem der Benutzer damit interagiert hat.

Diese Pseudoklasse wird angewendet, wenn das Formularelement gültig ist und eines der folgenden Ereignisse eingetreten ist:

- Der Benutzer hat am Formularelement eine Änderung vorgenommen und diese durch das Verschieben des Fokus an eine andere Stelle übernommen.
- Der Benutzer hat versucht, das Formular abzusenden, auch wenn am Element keine Änderung vorgenommen wurde.
- Der Wert war ungültig, als der Fokus darauf kam, und der Benutzer hat eine Änderung vorgenommen, die ihn gültig machte, selbst wenn der Fokus immer noch auf dem Element ist.

Sobald diese Pseudoklasse angewendet wurde, überprüft der User-Agent bei jedem Tastendruck, ob das Element gültig ist, wenn es den Fokus hat.

- Falls das Element den Fokus hat und der Wert beim Fokuserhalt ungültig war, erfolgt eine erneute Validierung bei jedem Tastendruck.

Das Ergebnis ist, dass wenn das Element gültig war, als der Benutzer begann, damit zu interagieren, sich die Validierungsstile nur ändern, wenn der Benutzer den Fokus auf ein anderes Element verschiebt. Wenn der Benutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Element sofort an, sobald der Wert gültig wird. Erforderliche Elemente werden nur dann als ungültig markiert, wenn der Benutzer sie ändert oder versucht, einen unveränderten ungültigen Wert abzusenden.

## Syntax

```css
:user-valid {
  /* ... */
}
```

## Beispiele

### Eine Farbe und ein Symbol auf :user-valid einstellen

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
