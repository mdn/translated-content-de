---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

In ARIA-Live-Bereichen gibt das globale `aria-atomic`-Attribut an, ob Unterstützte Technologien wie ein Screenreader den gesamten geänderten Bereich oder nur Teile davon präsentieren werden, basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attribut definiert sind.

## Beschreibung

Live-Bereiche sind Abschnitte einer Webseite, die aktualisiert werden, sei es durch Benutzerinteraktion oder nicht, wenn der Benutzerfokus woanders liegt. Da sie außerhalb des Fokus des Benutzers aktualisiert werden, können Unterstützte Technologien wie Screenreader die Aktualisierung möglicherweise nicht "sehen", um sie dem Benutzer zu melden. WAI-ARIA hat 4 Eigenschaften, die es dem Entwickler ermöglichen, diese Live-Bereiche zu identifizieren und der unterstützenden Technologie zu sagen, wie sie diese verarbeiten soll, einschließlich [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live), [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) und `aria-atomic`.

Wenn sich der Inhalt eines Live-Bereichs ändert, wird der DOM vom geänderten Element über seine Vorfahren hinweg durchsucht, um das erste Element mit gesetztem `aria-atomic` zu finden. Dies bestimmt den Inhalt, der dem Benutzer präsentiert werden sollte.

Wenn kein Vorfahr `aria-atomic` explizit gesetzt hat, wird nur der oder die aktualisierten Knoten des Live-Bereichs gelesen. Der Unterschied zwischen dem vollständigen Auslassen von `aria-atomic` und dem expliziten Setzen eines Vorfahrknotens eines ARIA-Live-Bereichs mit `aria-atomic="false"` besteht darin, dass das explizite Setzen von `aria-atomic="false"` den Screenreader daran hindert, die Vorfahrenkette nach oben zu gehen. Beide führen dazu, dass nur der aktualisierte Knoten gelesen wird. Wenn `aria-atomic="true"` gesetzt ist, wird der gesamte geänderte Bereich als Ganzes präsentiert, einschließlich des `label` des aktualisierten Knotens, falls vorhanden.

## Werte

- `false` (Standard)
  - : präsentiert nur den oder die geänderten Knoten.
- `true`
  - : präsentiert den gesamten geänderten Bereich als Ganzes, einschließlich des vom Autor definierten Labels, falls vorhanden.

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Event.ariaAtomic](/de/docs/Web/API/Element/ariaAtomic)
