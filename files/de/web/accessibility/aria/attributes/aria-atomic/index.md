---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

In ARIA-Live-Regionen gibt das globale `aria-atomic`-Attribut an, ob unterstützende Technologien wie ein Screenreader alle oder nur Teile der geänderten Region basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definierten Änderungsbenachrichtigungen präsentieren werden.

## Beschreibung

Live-Regionen sind Abschnitte einer Webseite, die aktualisiert werden, sei es durch Benutzerinteraktionen oder nicht, während der Benutzerfokus woanders liegt. Da sie außerhalb des Benutzerfokus aktualisiert werden, können unterstützende Technologien wie Screenreader die Aktualisierung möglicherweise nicht "sehen", um sie dem Benutzer zu melden. WAI-ARIA hat vier Eigenschaften, die es dem Entwickler ermöglichen, diese Live-Regionen zu identifizieren und der unterstützenden Technologie anzuzeigen, wie sie zu verarbeiten sind, einschließlich [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live), [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) und `aria-atomic`.

Wenn sich der Inhalt einer Live-Region ändert, wird das DOM vom geänderten Element durch seine Vorfahren durchsucht, um das erste Element mit gesetztem `aria-atomic` zu finden. Dies bestimmt den Inhalt, der dem Benutzer präsentiert werden sollte.

Wenn kein Vorfahre explizit `aria-atomic` gesetzt hat, werden nur die Knoten oder Knoten der aktualisierten Live-Region-Inhalte gelesen. Der Unterschied zwischen dem vollständigen Weglassen von `aria-atomic` und dem expliziten Setzen eines ARIA-Live-Region-Vorfahrenknotens mit `aria-atomic="false"` besteht darin, dass das explizite Setzen von `aria-atomic="false"` den Screenreader davon abhält, die Vorfahrenkette nach oben zu durchlaufen. Beide führen jedoch dazu, dass nur der aktualisierte Knoten gelesen wird. Wenn `aria-atomic="true"` gesetzt ist, wird die gesamte geänderte Region als Ganzes präsentiert, einschließlich des Etiketts des aktualisierten Knotens, sofern eines vorhanden ist.

## Werte

- `false` (Standard)
  - : Nur die geänderten Knoten präsentieren.
- `true`
  - : Die gesamte geänderte Region als Ganzes präsentieren, einschließlich des durch den Autor definierten Etiketts, falls vorhanden.

## Zugeordnete Rollen

Verwendet in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Event.ariaAtomic](/de/docs/Web/API/Element/ariaAtomic)
