---
title: "ARIA: Rolle `log`"
short-title: log
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `log`-Rolle wird verwendet, um ein Element zu identifizieren, das einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) erstellt, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können.

## Beschreibung

Ein Log ist eine Art von Live-Bereich, in dem neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen verschwinden können. Beispiele sind Chat-Protokolle, Nachrichtenverläufe, Spielprotokolle oder ein Fehlerprotokoll. Im Gegensatz zu anderen Live-Bereichen besteht bei dieser Rolle ein Zusammenhang zwischen dem Eintreffen neuer Elemente im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz und neue Informationen werden nur an das Ende des Logs hinzugefügt, nicht an beliebigen Stellen.

Im Gegensatz zu anderen Arten von Live-Bereichen ist ein Log sequentiell geordnet und neue Informationen werden nur am Ende des Logs hinzugefügt. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an unterstützende Technologieprodukte, die dann den Benutzer darüber informieren können.

Standardmäßig enthalten Aktualisierungen nur die Änderungen am Live-Bereich und diese werden angekündigt, wenn der Benutzer inaktiv ist. Elemente mit der Rolle `log` haben einen impliziten `aria-live`-Wert von `polite`. Falls der Nutzer den gesamten Live-Bereich bei einer Änderung hören muss, sollte `aria-atomic="true"` gesetzt werden. Um Ankündigungen so schnell wie möglich zu machen, wobei der Benutzer unterbrochen werden darf, kann `aria-live="assertive"` für aggressivere Aktualisierungen gesetzt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien alle oder nur Teile des geänderten Bereichs präsentieren sollten. Elemente mit der Rolle `log` haben einen impliziten `aria-atomic`-Wert von `false`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen von Inhalten informieren sollen. Elemente mit der Rolle `log` haben einen impliziten `aria-live`-Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- `aria-label` und `aria-labelledby`

  - : Das `log` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Bewährte Methoden

Bei einem Bereich mit scrollendem Text, wie beispielsweise einem Börsenticker, sollte die [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)-Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
