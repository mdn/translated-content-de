---
title: "ARIA: status Rolle"
short-title: status
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `status` Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen für den Benutzer enthält, die nicht wichtig genug sind, um ein [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) zu sein.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen bereitstellt, die nicht wichtig genug sind, um einen Alarm zu rechtfertigen, der sofort die Ankündigung der aktuellen Aktivität eines Benutzers unterbrechen würde. Er wird oft, aber nicht notwendigerweise, als Statusleiste präsentiert.

Geben Sie dem Status nicht den Fokus, wenn sich sein Inhalt aktualisiert. Live-Bereiche sollen Benutzer über dynamische Änderungen informieren, die in anderen Bereichen der aktuellen Webseite aufgetreten sind, die jedoch keinen Kontextwechsel erfordern, um die aktuelle Aktivität des Benutzers zu unterbrechen. Wenn eine Situation erfordert, dass der Fokus verschoben werden muss, dann ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht geeignet.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Wert von `true`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollen. Elemente mit der Rolle `status` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollen. Elemente mit der Rolle `status` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Status-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, verweisen Sie darauf mit `aria-labelledby`. Ein `aria-label` bereitzustellen, ermöglicht es, den sichtbaren Inhalt eines Status-Elements mit Text zu versehen, der nicht angezeigt wird, wenn ein Screenreader den Inhalt vorliest. Das Benennen eines Status ist nicht erforderlich, daher können diese Attribute weggelassen werden, wenn nichts geeignet ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
