---
title: "ARIA: log Rolle"
short-title: log
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `log` Rolle wird verwendet, um ein Element zu identifizieren, das einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erstellt, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können.

## Beschreibung

Ein Log ist eine Art von Live-Bereich, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können. Beispiele umfassen Chat-Logs, Nachrichtenhistorie, Spielprotokolle oder ein Fehlerprotokoll. Im Gegensatz zu anderen Live-Bereichen besteht in dieser Rolle eine Beziehung zwischen dem Eintreffen neuer Elemente im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz, und neue Informationen werden nur am Ende des Logs hinzugefügt, nicht an beliebigen Punkten.

Im Gegensatz zu anderen Arten von Live-Bereichen ist ein Log sequenziell geordnet, und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologieprodukte, die den Benutzer darüber informieren können.

Standardmäßig enthalten Updates nur die Änderungen im Live-Bereich und diese werden angekündigt, wenn der Benutzer inaktiv ist. Elemente mit der Rolle `log` haben einen impliziten `aria-live` Wert von `polite`. Wenn der Benutzer den gesamten Live-Bereich bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ankündigungen so schnell wie möglich zu machen und wenn der Benutzer möglicherweise unterbrochen werden kann, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren sollen. Elemente mit der Rolle `log` haben einen impliziten `aria-atomic` Wert von `false`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollen. Elemente mit der Rolle `log` haben einen impliziten `aria-live` Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- `aria-label` und `aria-labelledby`
  - : Das `log` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Best Practices

Bei einem Bereich mit scrollendem Text, wie z.B. einem Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
