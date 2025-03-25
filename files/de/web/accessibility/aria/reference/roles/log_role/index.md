---
title: "ARIA: log-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `log`-Rolle wird verwendet, um ein Element zu identifizieren, das eine [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erstellt, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden.

## Beschreibung

Ein Log ist eine Art von Live-Region, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden. Beispiele hierfür sind Chat-Protokolle, Nachrichtenverlauf, Spielprotokolle oder ein Fehlerprotokoll. Im Gegensatz zu anderen Live-Regionen besteht bei dieser Rolle eine Beziehung zwischen dem Eintreffen neuer Einträge im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz, und neue Informationen werden nur am Ende des Logs hinzugefügt, nicht an beliebigen Stellen.

Im Gegensatz zu anderen Arten von Live-Regionen ist ein Log sequentiell geordnet, und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig enthalten Updates nur die Änderungen an der Live-Region, und diese werden angekündigt, wenn der Benutzer inaktiv ist. Elemente mit der Rolle `log` haben einen impliziten `aria-live`-Wert von `polite`. Wenn der Benutzer den gesamten Live-Bereich bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ankündigungen so schnell wie möglich zu machen und wenn der Benutzer möglicherweise unterbrochen werden darf, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `aria-atomic`

  - : Definiert, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)-Wert von `false`.

- `aria-live`

  - : Definiert, wann unterstützende Technologien den Benutzer über Updates zu Inhalten informieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `polite`, was bedeutet, dass Bildschirmleser Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- `aria-label` und `aria-labelledby`

  - : Das `log` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Beste Praktiken

Für einen Bereich mit scrollendem Text, wie einem Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
