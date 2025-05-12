---
title: "ARIA: aria-atomic Attribut"
short-title: aria-atomic
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-atomic
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

In ARIA Live-Regionen gibt das globale `aria-atomic` Attribut an, ob unterstützende Technologien wie ein Screenreader den gesamten geänderten Bereich oder nur Teile davon präsentieren, basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut definiert sind.

## Beschreibung

Live-Regionen sind Abschnitte einer Webseite, die unabhängig davon aktualisiert werden, ob eine Benutzerinteraktion stattfindet oder nicht, während sich der Benutzerfokus woanders befindet. Da sie außerhalb des Benutzerfokus aktualisiert werden, können unterstützende Technologien wie Screenreader die Aktualisierung möglicherweise nicht "sehen", um sie dem Benutzer zu melden. WAI-ARIA hat vier Eigenschaften, die es dem Entwickler ermöglichen, diese Live-Regionen zu identifizieren und der unterstützenden Technologie mitzuteilen, wie sie verarbeitet werden sollen, einschließlich [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) und `aria-atomic`.

Wenn sich der Inhalt einer Live-Region ändert, wird das DOM vom geänderten Element bis zu seinen Vorfahren durchlaufen, um das erste Element mit gesetztem `aria-atomic` zu finden. Dies bestimmt den Inhalt, der dem Benutzer präsentiert werden soll.

Wenn kein Vorfahr explizit `aria-atomic` gesetzt hat, werden nur der oder die aktualisierten Knoten der Live-Region-Inhalte gelesen. Der Unterschied zwischen dem völligen Weglassen von `aria-atomic` und dem expliziten Setzen eines Vorfahrenknotens einer ARIA Live-Region mit `aria-atomic="false"` besteht darin, dass das explizite Setzen von `aria-atomic="false"` den Screenreader daran hindert, die Vorfahrenkette hochzugehen. Beides führt dazu, dass nur der aktualisierte Knoten gelesen wird. Wenn `aria-atomic="true"` gesetzt ist, wird der gesamte geänderte Bereich als Ganzes präsentiert, einschließlich des `labels` des aktualisierten Knotens, falls vorhanden.

## Werte

- `false` (Standard)
  - : Nur den oder die geänderten Knoten präsentieren.
- `true`
  - : Den gesamten geänderten Bereich als Ganzes präsentieren, einschließlich des benutzerdefinierten Labels, falls eines existiert.

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Event.ariaAtomic](/de/docs/Web/API/Element/ariaAtomic)
