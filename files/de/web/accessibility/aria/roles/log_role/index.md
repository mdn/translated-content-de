---
title: "ARIA: log Rolle"
slug: Web/Accessibility/ARIA/Roles/log_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `log` Rolle wird verwendet, um ein Element zu identifizieren, das eine [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) erstellt, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden.

## Beschreibung

Ein Log ist eine Art von Live-Region, in der neue Informationen in einer sinnvollen Reihenfolge hinzugefügt werden und alte Informationen möglicherweise verschwinden. Beispiele beinhalten Chat-Protokolle, Nachrichtenverläufe, Spielprotokolle oder Fehlerprotokolle. Im Gegensatz zu anderen Live-Regionen gibt es bei dieser Rolle eine Beziehung zwischen dem Eintreffen neuer Einträge im Log und der Lesereihenfolge. Das Log enthält eine sinnvolle Sequenz, und neue Informationen werden nur ans Ende des Logs hinzugefügt, nicht an beliebigen Punkten.

Im Gegensatz zu anderen Arten von Live-Regionen ist ein Log sequenziell geordnet und neue Informationen werden nur ans Ende des Logs hinzugefügt. Wenn diese Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Log-Ereignis an Hilfstechnologieprodukte, die dann den Benutzer darüber informieren können.

Standardmäßig enthalten die Updates nur die Änderungen der Live-Region, und diese werden angekündigt, wenn der Benutzer untätig ist. Elemente mit der `log` Rolle haben einen impliziten `aria-live` Wert von `polite`. Wo der Benutzer bei einer Änderung die gesamte Live-Region hören muss, sollte `aria-atomic="true"` gesetzt werden. Um die Ankündigungen so schnell wie möglich und bei Bedarf auch unterbrechend zu machen, kann `aria-live="assertive"` für aggressivere Updates gesetzt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `aria-atomic`

  - : Definiert, ob Hilfstechnologien alle oder nur Teile des geänderten Bereichs präsentieren sollen. Elemente mit der `log` Rolle haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) Wert von `false`.

- `aria-live`

  - : Definiert, wann Hilfstechnologie den Benutzer über Updates an Inhalten informieren soll. Elemente mit der `log` Rolle haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) Wert von `polite`, was bedeutet, dass Screenreader Änderungen im Log ankündigen, wenn der Benutzer untätig ist.

- `aria-label` und `aria-labelledby`

  - : Das `log` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten verwenden Sie `aria-label`.

## Best Practices

Für einen Bereich mit scrollendem Text, wie ein Börsenticker, sollte stattdessen die [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role) Rolle verwendet werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
