---
title: "ARIA: Attribut aria-pressed"
short-title: aria-pressed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das Attribut `aria-pressed` gibt den aktuellen "gedrückten" Zustand eines Umschaltknopfs an.

## Beschreibung

Die Hinzufügung von `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) verwandelt den Button in einen Umschaltknopf. Das Attribut `aria-pressed` ist nur für Umschaltknöpfe relevant. Es stellt den aktuellen "gedrückten" Zustand des Knopfes dar.

Der Wert ist "dreiwertig", was bedeutet, dass der Wert auf `true`, `false`, `mixed` oder `undefined` gesetzt werden kann. Im Falle von `aria-pressed`, wie bei den meisten dreiwertigen Typen, ist der Standardwert `undefined`.

Umschaltknöpfe erfordern einen vollständigen Drücken-und-Loslassen-Zyklus, um ihren Wert zu ändern. Einmaliges Drücken und Loslassen ändert den Wert auf `true`. Wenn es erneut gedrückt und losgelassen wird, ändert sich der Wert zurück zu `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem durch den Knopf gesteuerten Element nicht alle denselben Wert haben.

Ändern Sie nicht den Inhalt der Beschriftung eines Umschalters, wenn sich der Zustand ändert. Wenn eine Tastenbeschriftung "Pause" sagt, ändern Sie sie nicht in "Wiedergabe", wenn sie gedrückt wird. In diesem Beispiel bleibt die Beschriftung "Pause", wenn der gedrückte Zustand wahr ist, so dass ein Screenreader etwas wie "Pause-Umschaltknopf gedrückt" sagen würde.

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass die Beschriftung zwischen "Paused" und "Play" umschaltet, verwenden Sie nicht `aria-pressed`.

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie ein nativeres Feature mit der benötigten Semantik und dem benötigten Verhalten verwenden können, anstatt ein Element zweckentfremdet und mit einer ARIA-Rolle, einem Zustand oder einer Eigenschaft für die Zugänglichkeit zu versehen, dann tun Sie dies." Wenn wir die nativen HTML-Semantiken mit {{HTMLElement('button')}} nutzen, können wir die Beschriftung umschalten, anstatt den gedrückten Zustand zu wechseln, und benötigen das Attribut `aria-pressed` nicht.

## Werte

- `false`
  - : Der Knopf unterstützt das Gedrücksein, ist aber momentan nicht gedrückt.
- `mixed`
  - : Zeigt einen gemischten Moduswert für einen dreiwertigen Umschaltknopf an.
- `true`
  - : Der Knopf ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt nicht das Gedrücktsein.

## Zugehörige Schnittstellen

- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-pressed` wider.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-pressed` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- {{HTMLElement('button')}}
- [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
