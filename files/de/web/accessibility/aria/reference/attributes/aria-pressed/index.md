---
title: aria-pressed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-pressed` gibt den aktuellen "gedrückten" Zustand eines Umschaltknopfes an.

## Beschreibung

Das Hinzufügen von `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) macht den Knopf zu einem Umschaltknopf. Das Attribut `aria-pressed` ist nur für Umschaltknöpfe relevant. Es repräsentiert den aktuellen "gedrückten" Zustand des Knopfes.

Der Wert ist "three-state", was bedeutet, dass der Wert auf `true`, `false`, `mixed` oder `undefined` gesetzt werden kann. Im Falle von `aria-pressed` ist der Standardwert, wie bei den meisten dreiwertigen Typen, `undefined`.

Umschaltknöpfe erfordern einen vollständigen Drücken-und-Loslassen-Zyklus, um ihren Wert zu ändern. Einmaliges Drücken und Loslassen ändert den Wert auf `true`. Wenn er erneut gedrückt und losgelassen wird, ändert sich der Wert zurück zu `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem durch den Knopf gesteuerten Element nicht alle denselben Wert teilen.

Ändern Sie den Inhalt der Beschriftung eines Schalters nicht, wenn sich der Zustand ändert. Wenn die Beschriftung eines Knopfes "Pause" lautet, ändern Sie sie nicht zu "Abspielen", wenn er gedrückt wird. In diesem Beispiel, wenn der gedrückte Zustand wahr ist, bleibt die Beschriftung "Pause", sodass ein Screenreader etwas wie "Pause-Umschaltknopf gedrückt" sagen würde.

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass die Beschriftung zwischen "Pausiert" und "Abspielen" wechselt, verwenden Sie nicht `aria-pressed`.

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft zuzuweisen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir native HTML-Semantiken mit {{HTMLElement('button')}} verwenden, können wir die Beschriftung umschalten, anstatt den gedrückten Zustand zu ändern, und somit das `aria-pressed`-Attribut überflüssig machen.

## Werte

- `false`
  - : Der Knopf unterstützt das Gedrücktwird, ist jedoch momentan nicht gedrückt.
- `mixed`
  - : Gibt einen gemischten Moduswert für einen dreiwertigen Umschaltknopf an.
- `true`
  - : Der Knopf ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt kein Gedrücktwird.

## Zugehörige Schnittstellen

- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed), Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-pressed` wider.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed), Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-pressed` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="button">`](/de/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- {{HTMLElement('button')}}
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
