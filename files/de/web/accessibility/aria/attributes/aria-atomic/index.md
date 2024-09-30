---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

In ARIA-Live-Bereichen gibt das globale `aria-atomic`-Attribut an, ob unterstützende Technologien wie ein Screenreader die gesamte oder nur Teile der geänderten Region basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut definierten Änderungsbenachrichtigungen präsentieren.

## Beschreibung

Live-Bereiche sind Abschnitte einer Webseite, die aktualisiert werden, sei es durch Benutzerinteraktion oder nicht, wenn der Fokus des Benutzers woanders liegt. Da sie außerhalb des Benutzerfokus aktualisiert werden, können unterstützende Technologien wie Screenreader das Update möglicherweise nicht "sehen", um es dem Benutzer zu melden. WAI-ARIA verfügt über 4 Eigenschaften, mit denen der Entwickler diese Live-Bereiche identifizieren und der unterstützenden Technologie mitteilen kann, wie sie verarbeitet werden sollen, einschließlich [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live), [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) und `aria-atomic`.

Wenn sich der Inhalt eines Live-Bereichs ändert, wird der DOM von dem geänderten Element durch seine Vorfahren durchsucht, um das erste Element mit gesetztem `aria-atomic` zu finden. Dies bestimmt den Inhalt, der dem Benutzer präsentiert werden soll.

Wenn kein Vorfahre `aria-atomic` explizit gesetzt hat, werden nur die aktualisierten Nodes des Live-Bereichsinhalts vorgelesen. Der Unterschied zwischen dem vollständigen Weglassen von `aria-atomic` und dem expliziten Setzen eines ARIA-Live-Bereich-Vorfahren-Nodes mit `aria-atomic="false"` besteht darin, dass durch das explizite Setzen von `aria-atomic="false"` der Screenreader daran gehindert wird, die Vorfahren-Kette nach oben zu durchlaufen. Beide führen dazu, dass nur der aktualisierte Node gelesen wird. Wenn auf `aria-atomic="true"` gesetzt, wird die gesamte geänderte Region als Ganzes präsentiert, einschließlich des aktualisierten Nodes `label`, falls vorhanden.

## Werte

- `false` (Standard)
  - : präsentiert nur den oder die geänderten Nodes.
- `true`
  - : präsentiert die gesamte geänderte Region als Ganzes, einschließlich des vom Autor definierten Labels, falls vorhanden.

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Event.ariaAtomic](/de/docs/Web/API/Element/ariaAtomic)
