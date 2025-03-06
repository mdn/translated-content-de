---
title: aria-atomic
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-atomic
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

In ARIA-Live-Regionen gibt das globale `aria-atomic`-Attribut an, ob unterstützende Technologien wie ein Screenreader den gesamten oder nur Teile des geänderten Bereichs basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut definierten Änderungsbenachrichtigungen präsentieren.

## Beschreibung

Live-Regionen sind Abschnitte einer Webseite, die aktualisiert werden, sei es durch Benutzerinteraktion oder nicht, während der Benutzerfokus woanders ist. Da sie außerhalb des Benutzerfokus aktualisiert werden, können unterstützende Technologien wie Screenreader das Update möglicherweise nicht "sehen", um es dem Benutzer zu melden. WAI-ARIA hat vier Eigenschaften, die es dem Entwickler ermöglichen, diese Live-Regionen zu identifizieren und der unterstützenden Technologie mitzuteilen, wie sie zu verarbeiten sind, einschließlich [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) und `aria-atomic`.

Wenn sich der Inhalt einer Live-Region ändert, wird der DOM vom geänderten Element durch seine Vorfahren durchsucht, um das erste Element mit gesetztem `aria-atomic` zu finden. Dies bestimmt den Inhalt, der dem Benutzer präsentiert werden soll.

Wenn kein Vorfahre explizit `aria-atomic` gesetzt hat, werden nur der oder die geänderten Knoten von Live-Region-Inhalten gelesen. Der Unterschied zwischen dem vollständigen Weglassen von `aria-atomic` und dem expliziten Setzen eines ARIA-Live-Region-Vorfahrenknotens mit `aria-atomic="false"` besteht darin, dass durch das explizite Setzen von `aria-atomic="false"` der Screenreader daran gehindert wird, die Vorfahrenkette nach oben zu gehen. Beide führen dazu, dass nur der aktualisierte Knoten gelesen wird. Wenn `aria-atomic="true"` gesetzt ist, wird der gesamte geänderte Bereich als Ganzes präsentiert, einschließlich des aktualisierten Knotens `label`, falls vorhanden.

## Werte

- `false` (Standard)
  - : präsentiert nur den oder die geänderten Knoten.
- `true`
  - : präsentiert den gesamten geänderten Bereich als Ganzes, einschließlich des vom Autor definierten Labels, falls eins existiert.

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Event.ariaAtomic](/de/docs/Web/API/Element/ariaAtomic)
