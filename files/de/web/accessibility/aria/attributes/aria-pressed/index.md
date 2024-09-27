---
title: aria-pressed
slug: Web/Accessibility/ARIA/Attributes/aria-pressed
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-pressed` Attribut gibt den aktuellen "gedrückten" Zustand eines Umschalters an.

## Beschreibung

Durch Hinzufügung von `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) wird der Button zu einem Umschaltknopf. Das `aria-pressed` Attribut ist nur für Umschaltknöpfe relevant. Es repräsentiert den aktuellen "gedrückten" Zustand des Buttons.

Der Wert ist "dreistufig", was bedeutet, dass der Wert auf `true`, `false`, `mixed` oder `undefined` gesetzt werden kann. Im Fall von `aria-pressed` ist der Standardwert, wie bei den meisten dreistufigen Werten, `undefined`.

Umschaltknöpfe erfordern einen kompletten Drücken-und-Loslassen-Zyklus, um ihren Wert zu ändern. Ein einmaliges Drücken und Loslassen ändert den Wert auf `true`. Wenn es erneut gedrückt und losgelassen wird, ändert sich der Wert zurück auf `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem durch den Knopf gesteuerten Element nicht alle denselben Wert teilen.

Ändern Sie den Inhalt des Labels bei einem Umschalter nicht, wenn sich der Zustand ändert. Wenn ein Button-Label "Pause" sagt, ändern Sie es nicht in "Play", wenn er gedrückt wird. In diesem Beispiel bleibt das Label "Pause", wenn der gedrückte Zustand wahr ist, sodass ein Screenreader etwas wie "Pause Umschaltknopf gedrückt" sagen würde.

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass das Label zwischen "Paused" und "Play" umschaltet, verwenden Sie nicht `aria-pressed`.

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit den benötigten Semantiken und dem gewünschten Verhalten bereits eingebaut nutzen können, anstatt ein Element umzufunktionieren und einer ARIA-Rolle, einem Zustand oder einer Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das." Wenn wir native HTML-Semantiken mit {{HTMLElement('button')}} nutzen, können wir das Label anstatt des gedrückten Zustands umschalten und benötigen das `aria-pressed` Attribut nicht.

## Werte

- `false`
  - : Der Button unterstützt das Gedrücktwirdsein, ist momentan jedoch nicht gedrückt.
- `mixed`
  - : Zeigt einen gemischten Moduswert für einen dreistufigen Umschaltknopf an.
- `true`
  - : Der Button ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt das Gedrücktwirdsein nicht.

## Zugehörige Schnittstellen

- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.

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
