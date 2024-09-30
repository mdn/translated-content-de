---
title: "ARIA: status Rolle"
slug: Web/Accessibility/ARIA/Roles/status_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `status` Rolle definiert eine [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), die beratende Informationen für den Benutzer enthält, die nicht wichtig genug sind, um als [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) bezeichnet zu werden.

## Beschreibung

Ein `status` ist eine Art von [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), die beratende Informationen bereitstellt, die nicht wichtig genug sind, um einen Alert zu rechtfertigen, der die Ankündigung der aktuellen Aktivität des Benutzers sofort unterbrechen würde. Es wird oft, aber nicht unbedingt, als Statusleiste dargestellt.

Geben Sie dem Status nicht den Fokus, wenn sein Inhalt aktualisiert wird. Live-Regionen sollen Benutzer über dynamische Updates informieren, die in anderen Bereichen der aktuellen Webseite erfolgt sind, die jedoch nicht erfordern, die aktuelle Aktivität des Benutzers mit einer Kontextänderung zu unterbrechen. Wenn eine Situation erfordert, dass der Fokus verschoben wird, dann ist die Verwendung von `status` oder einer anderen Live-Region wahrscheinlich nicht geeignet.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Wert von `true`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollten. Elemente mit der Rolle `status` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollten. Elemente mit der Rolle `status` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Logs ankündigen, wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Status-Elements an, bevor sie dessen Inhalte ankündigen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Das Hinzufügen eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Status-Elements mit Text voranzustellen, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Ein Status muss nicht benannt werden, sodass, wenn nichts geeignet ist, beide Attribute weggelassen werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
