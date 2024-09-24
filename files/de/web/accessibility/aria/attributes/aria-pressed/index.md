---
title: aria-pressed
slug: Web/Accessibility/ARIA/Attributes/aria-pressed
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-pressed` gibt den aktuellen "gedrückten" Zustand eines Toggle-Buttons an.

## Beschreibung

Das Hinzufügen von `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) verwandelt den Button in einen Toggle-Button. Das Attribut `aria-pressed` ist nur für Toggle-Buttons relevant. Es repräsentiert den aktuellen "gedrückten" Zustand des Buttons.

Der Wert ist "tri-state", was bedeutet, dass der Wert auf `true`, `false`, `mixed` oder `undefined` gesetzt werden kann. Im Falle von `aria-pressed`, wie bei den meisten Tri-State-Wertetypen, ist der Standardwert `undefined`.

Toggle-Buttons erfordern einen vollständigen Drücken-und-Loslassen-Zyklus, um ihren Wert zu ändern. Ein einmaliges Drücken und Loslassen ändert den Wert auf `true`. Wenn es erneut gedrückt und losgelassen wird, ändert sich der Wert zurück zu `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem Element, das durch den Button gesteuert wird, nicht alle denselben Wert teilen.

Ändern Sie nicht den Inhalt des Labels an einem Toggle, wenn sich der Zustand ändert. Wenn ein Button-Label "Pause" sagt, ändern Sie es nicht zu "Play", wenn es gedrückt wird. In diesem Beispiel bleibt, wenn der gedrückte Zustand wahr ist, das Label "Pause", sodass ein Screenreader etwas wie "Pause Toggle-Button gedrückt" sagen würde.

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass das Label zwischen "Pause" und "Play" umschaltet, verwenden Sie `aria-pressed` nicht.

Die erste Regel der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit den bereits integrierten Semantiken und dem Verhalten verwenden können, die Sie benötigen, statt ein Element neu zu interpretieren und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie es." Wenn wir native HTML-Semantiken mit {{HTMLElement('button')}} verwenden, können wir das Label umschalten, anstatt den gedrückten Zustand zu ändern, und somit die Notwendigkeit für das Attribut `aria-pressed` entfernen.

## Werte

- `false`
  - : Der Button unterstützt das Gedrücktsein, ist aber momentan nicht gedrückt.
- `mixed`
  - : Gibt einen gemischten Moduswert für einen Tri-State-Toggle-Button an.
- `true`
  - : Der Button ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt das Gedrücktsein nicht.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaPressed")}}
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed), Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.
- {{domxref("ElementInternals.ariaPressed")}}
  - : Die Eigenschaft [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed), Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.

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
