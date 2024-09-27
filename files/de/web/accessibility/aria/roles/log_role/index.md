---
title: "ARIA: log-Rolle"
slug: Web/Accessibility/ARIA/Roles/log_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `log`-Rolle wird verwendet, um ein Element zu identifizieren, das einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erstellt, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden können.

## Beschreibung

Ein Log ist eine Art von Live-Bereich, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden. Beispiele hierfür sind Chat-Protokolle, Nachrichtenverlauf, Spielprotokoll oder ein Fehlerprotokoll. Im Gegensatz zu anderen Live-Bereichen besteht bei dieser Rolle ein Zusammenhang zwischen dem Eintreffen neuer Elemente im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz, und neue Informationen werden nur am Ende des Logs hinzugefügt, nicht an beliebigen Punkten.

Im Gegensatz zu anderen Arten von Live-Bereichen ist ein Log sequentiell geordnet und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologien, die dann den Benutzer darüber informieren können.

Standardmäßig enthalten Updates nur die Änderungen am Live-Bereich und diese werden angekündigt, wenn der Benutzer inaktiv ist. Elemente mit der Rolle `log` haben implizit einen `aria-live`-Wert von `polite`. Wenn der Benutzer den gesamten Live-Bereich bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ankündigungen so schnell wie möglich vorzunehmen und um den Benutzer möglicherweise zu unterbrechen, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `aria-atomic`

  - : Definiert, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren sollen. Elemente mit der Rolle `log` haben implizit einen [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) Wert von `false`.

- `aria-live`

  - : Definiert, wann unterstützende Technologien den Benutzer über Updates zum Inhalt informieren sollen. Elemente mit der Rolle `log` haben implizit einen [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- `aria-label` und `aria-labelledby`

  - : Das `log` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Beste Praktiken

Bei einem Bereich mit scrollendem Text, wie einem Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)-Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
