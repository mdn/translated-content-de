---
title: "ARIA: status Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `status`-Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der dem Benutzer beratende Informationen enthält, die nicht wichtig genug sind, um als [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) betrachtet zu werden.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen bietet, die nicht wichtig genug sind, um einen Alarm zu rechtfertigen, der die aktuelle Aktivität des Benutzers sofort unterbrechen würde. Er wird oft, aber nicht zwingend, als Statusleiste angezeigt.

Der `status` sollte bei einer Aktualisierung seiner Inhalte nicht in den Fokus gerückt werden. Live-Bereiche sollen Benutzer über dynamische Aktualisierungen informieren, die in anderen Bereichen der aktuellen Webseite aufgetreten sind, ohne jedoch die aktuelle Aktivität des Benutzers durch einen Kontextwechsel zu unterbrechen. Wenn es notwendig ist, den Fokus zu verschieben, ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht angebracht.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Wert von `true`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

  - : Definiert, ob assistive Technologien die komplette oder nur Teile der geänderten Region präsentieren sollten. Elemente mit der Rolle `status` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)-Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann die assistive Technologie den Benutzer über Updates des Inhalts informieren sollte. Elemente mit der Rolle `status` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `polite`, was bedeutet, dass Bildschirmlesegeräte Änderungen im Logbuch ankündigen, wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Bildschirmlesegeräte kündigen den Namen eines Status-Elements an, bevor sie deren Inhalte ankündigen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Ein `aria-label` einzuschließen, bietet eine Methode, die sichtbaren Inhalte eines Status-Elements mit Text einzuleiten, der bei einem Bildschirmreader nicht angezeigt wird. Es ist nicht erforderlich, einen Status zu benennen. Wenn nichts geeignet ist, können beide Attribute weggelassen werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
