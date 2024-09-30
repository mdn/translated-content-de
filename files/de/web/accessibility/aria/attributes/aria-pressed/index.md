---
title: aria-pressed
slug: Web/Accessibility/ARIA/Attributes/aria-pressed
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-pressed` gibt den aktuellen "gedrückten" Zustand eines Umschaltknopfes an.

## Beschreibung

Durch das Hinzufügen von `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) wird der Knopf in einen Umschaltknopf verwandelt. Das Attribut `aria-pressed` ist nur für Umschaltknöpfe relevant. Es stellt den aktuellen "gedrückten" Zustand des Knopfes dar.

Der Wert ist "dreiwertig", das bedeutet, der Wert kann auf `true`, `false`, `mixed` oder `undefined` gesetzt werden. Im Fall von `aria-pressed` ist, wie bei den meisten dreiwertigen Typen, der Standardwert `undefined`.

Umschaltknöpfe erfordern einen vollständigen Drück-und-Loslass-Zyklus, um ihren Wert zu ändern. Ein einmaliges Drücken und Loslassen ändert den Wert zu `true`. Wenn er erneut gedrückt und losgelassen wird, ändert sich der Wert zurück zu `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem vom Knopf gesteuerten Element nicht alle denselben Wert haben.

Ändern Sie nicht den Inhalt der Beschriftung eines Umschalters, wenn sich der Zustand ändert. Wenn eine Knopfbeschriftung "Pause" sagt, ändern Sie sie nicht zu "Abspielen", wenn sie gedrückt wird. In diesem Beispiel bleibt, wenn der gedrückte Zustand wahr ist, die Beschriftung "Pause", sodass ein Screenreader etwas wie "Pause-Umschaltknopf gedrückt" sagen würde.

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass die Beschriftung zwischen "Pause" und "Abspielen" umschaltet, verwenden Sie nicht `aria-pressed`.

Die erste Regel für die Verwendung von ARIA lautet: "Wenn Sie ein nativen Feature mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das." Wenn wir die nativen HTML-Semantiken mit {{HTMLElement('button')}} verwenden, können wir die Beschriftung umschalten, anstatt den gedrückten Zustand umzuändern, und beseitigen somit die Notwendigkeit des `aria-pressed` Attributs.

## Werte

- `false`
  - : Der Knopf unterstützt das Gedrücktwerden, ist aber derzeit nicht gedrückt.
- `mixed`
  - : Gibt einen gemischten Moduswert für einen dreiwertigen Umschaltknopf an.
- `true`
  - : Der Knopf ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt das Gedrücktwerden nicht.

## Zugehörige Schnittstellen

- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed), Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed), Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="button">`](/de/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- {{HTMLElement('button')}}
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
