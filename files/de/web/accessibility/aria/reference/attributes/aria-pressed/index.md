---
title: aria-pressed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-pressed` Attribut gibt den aktuellen "gedrückten" Zustand eines Umschaltknopfes an.

## Beschreibung

Wenn Sie `aria-pressed` zu einem Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzufügen, wird der Knopf zu einem Umschaltknopf. Das `aria-pressed` Attribut ist nur bei Umschaltknöpfen relevant. Es repräsentiert den aktuellen "gedrückten" Zustand des Knopfes.

Der Wert ist "dreiwertig", was bedeutet, dass er auf `true`, `false`, `mixed` oder `undefined` gesetzt werden kann. Im Fall von `aria-pressed`, wie bei den meisten dreiwertigen Typen, ist der Standardwert `undefined`.

Umschaltknöpfe erfordern einen vollständigen Drück-und-Loslass-Zyklus, um ihren Wert zu ändern. Beim einmaligen Drücken und Loslassen ändert sich der Wert zu `true`. Wenn er erneut gedrückt und losgelassen wird, ändert sich der Wert zurück zu `false`.

Ein Wert von `mixed` bedeutet, dass die Werte von mehr als einem durch den Knopf gesteuerten Element nicht alle denselben Wert haben.

Verändern Sie den Inhalt des Labels auf einem Umschaltknopf nicht, wenn sich der Zustand ändert. Wenn ein Knopflabel "Pause" lautet, ändern Sie es nicht zu "Play", wenn es gedrückt wird. In diesem Beispiel bleibt das Label, wenn der gedrückte Zustand wahr ist, "Pause", sodass ein Screenreader etwas sagen würde wie "Pause Umschaltknopf gedrückt".

```html
<button aria-pressed="false">Pause</button>
```

Wenn Sie möchten, dass das Label zwischen "Pausiert" und "Spielen" umschaltet, verwenden Sie nicht `aria-pressed`.

Die erste Regel bei der Verwendung von ARIA ist: "Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das Verhalten bereits eingebaut hat, statt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Wenn wir die nativen HTML-Semantiken mit {{HTMLElement('button')}} verwenden, können wir das Label umschalten, anstatt den gedrückten Zustand umzuschalten, und somit die Notwendigkeit für das `aria-pressed` Attribut entfernen.

## Werte

- `false`
  - : Der Knopf unterstützt das Gedrücktwerden, ist derzeit jedoch nicht gedrückt.
- `mixed`
  - : Bedeutet einen gemischten Wert in einem dreiwertigen Umschaltknopf.
- `true`
  - : Der Knopf ist gedrückt.
- `undefined` (Standard)
  - : Das Element unterstützt das Gedrücktwerden nicht.

## Zugehörige Schnittstellen

- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/Element/ariaPressed) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.
- [`ElementInternals.ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed)
  - : Die [`ariaPressed`](/de/docs/Web/API/ElementInternals/ariaPressed) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-pressed` Attributs wider.

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
