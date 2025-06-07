---
title: "ARIA: `status`-Rolle"
short-title: status
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `status`-Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen für den Benutzer enthält, die nicht wichtig genug sind, um als [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) zu gelten.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen bereitstellt, die nicht wichtig genug sind, um einen Alarm zu rechtfertigen, welcher die Ankündigung der aktuellen Aktivität eines Benutzers sofort unterbrechen würde. Es wird oft, aber nicht notwendigerweise, als Status-Leiste dargestellt.

Richten Sie keinen Fokus auf den Status, wenn dessen Inhalt aktualisiert wird. Live-Bereiche sollen Benutzer über dynamische Aktualisierungen informieren, die in anderen Bereichen der aktuellen Webseite erfolgt sind, aber nicht notwendig den Benutzer mit einem Kontextwechsel von seiner aktuellen Aktivität ablenken sollen. Wenn die Situation erfordert, dass der Fokus verschoben werden muss, ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht angemessen.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Wert von `true`.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

  - : Legt fest, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollen. Elemente mit der Rolle `status` haben einen impliziten `aria-atomic`-Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann die unterstützende Technologie den Benutzer über Aktualisierungen des Inhalts informieren soll. Elemente mit der Rolle `status` haben einen impliziten `aria-live`-Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Protokolls ankündigen, wenn der Benutzer untätig ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Status-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, verweisen Sie darauf mit `aria-labelledby`. Ein `aria-label` bietet eine Methode, um dem sichtbaren Inhalt eines Status-Elements Text voranzustellen, der beim Vorlesen des Inhalts durch einen Screenreader nicht angezeigt wird. Die Benennung eines Status ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts Angemessenes vorhanden ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
