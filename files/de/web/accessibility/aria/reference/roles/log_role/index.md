---
title: "ARIA: log-Rolle"
short-title: log
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `log`-Rolle wird verwendet, um ein Element zu identifizieren, das eine [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erstellt, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können.

## Beschreibung

Ein Log ist eine Art von Live-Region, in der neue Informationen in sinnvoller Reihenfolge hinzugefügt werden und alte Informationen verschwinden können. Beispiele hierfür sind Chat-Protokolle, Nachrichtenverlauf, Spiele-Protokoll oder ein Fehlerprotokoll. Im Gegensatz zu anderen Live-Regionen besteht in dieser Rolle eine Beziehung zwischen dem Eintreffen neuer Einträge im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz und neue Informationen werden nur am Ende des Logs hinzugefügt, nicht an beliebigen Punkten.

Im Gegensatz zu anderen Arten von Live-Regionen ist ein Log sequenziell geordnet und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologieprodukte, die dann den Benutzer darüber informieren können.

Standardmäßig enthalten Updates nur die Änderungen an der Live-Region und diese werden angekündigt, wenn der Benutzer inaktiv ist. Elemente mit der Rolle `log` haben einen impliziten `aria-live`-Wert von `polite`. Wenn der Benutzer die gesamte Live-Region bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ankündigungen so schnell wie möglich zu machen und wo der Benutzer möglicherweise unterbrochen werden kann, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `aria-atomic`

  - : Definiert, ob unterstützende Technologien die gesamte geänderte Region oder nur Teile davon präsentieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)-Wert von `false`.

- `aria-live`

  - : Definiert, wann unterstützende Technologien den Benutzer über Updates des Inhalts informieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `polite`, was bedeutet, dass Bildschirmleser Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- `aria-label` und `aria-labelledby`

  - : Das Log muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten verwenden Sie `aria-label`.

## Best Practices

Bei einem Bereich mit scrollendem Text, wie einem Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)-Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
