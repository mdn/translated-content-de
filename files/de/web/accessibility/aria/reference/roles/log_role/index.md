---
title: "ARIA: log Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `log`-Rolle wird verwendet, um ein Element zu identifizieren, das eine [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erstellt, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können.

## Beschreibung

Ein Log ist eine Art von Live-Region, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können. Beispiele hierfür sind Chat-Logs, Nachrichtenverläufe, Spielprotokolle oder Fehlerprotokolle. Im Gegensatz zu anderen Live-Regionen gibt es bei dieser Rolle eine Beziehung zwischen dem Eintreffen neuer Elemente im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz und neue Informationen werden nur am Ende des Logs hinzugefügt, nicht an beliebigen Stellen.

Im Gegensatz zu anderen Typen von Live-Regionen ist ein Log sequentiell geordnet und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologien, die den Nutzer darüber informieren können.

Standardmäßig enthalten Updates nur die Änderungen der Live-Region, und diese werden angekündigt, wenn der Nutzer inaktiv ist. Elemente mit der Rolle `log` haben einen impliziten `aria-live`-Wert von `polite`. Wenn der Nutzer die gesamte Live-Region bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ansagen schneller zu machen und bei Bedarf den Nutzer zu unterbrechen, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `aria-atomic`

  - : Definiert, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)-Wert von `false`.

- `aria-live`

  - : Definiert, wann unterstützende Technologien den Nutzer über Updates des Inhalts informieren sollen. Elemente mit der Rolle `log` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Nutzer inaktiv ist.

- `aria-label` und `aria-labelledby`

  - : Das `log` ist erforderlich, einen zugänglichen Namen zu haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Beste Praktiken

Bei einem Bereich mit scrollendem Text, wie einem Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)-Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
