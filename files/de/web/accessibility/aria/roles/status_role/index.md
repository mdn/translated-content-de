---
title: "ARIA: Status-Rolle"
slug: Web/Accessibility/ARIA/Roles/status_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `status`-Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), der beratende Informationen für den Benutzer enthält, die nicht wichtig genug sind, um ein [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) zu sein.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), der beratende Informationen bereitstellt, die nicht wichtig genug sind, um einen Alarm zu rechtfertigen, der sofort die Ankündigung der aktuellen Aktivität eines Benutzers unterbrechen würde. Er wird oft, aber nicht unbedingt, als Statusleiste dargestellt.

Geben Sie dem Status nicht den Fokus, wenn sich sein Inhalt aktualisiert. Live-Bereiche sollen Benutzer über dynamische Aktualisierungen in anderen Bereichen der aktuellen Webseite informieren, die jedoch keine Unterbrechung der aktuellen Aktivität des Benutzers durch einen Kontextwechsel erfordern. Wenn die Situation erfordert, dass der Fokus verschoben werden muss, ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht angemessen.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Wert von `true`.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien die gesamte oder nur Teile der geänderten Region präsentieren sollen. Elemente mit der Rolle `status` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)-Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollen. Elemente mit der Rolle `status` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `polite`, was bedeutet, dass Screenreader Änderungen innerhalb des Protokolls ankündigen, wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Status-Elements an, bevor sie deren Inhalt ankündigen. Wenn ein Name sichtbar ist, beziehen Sie sich darauf mit `aria-labelledby`. Die Einbeziehung eines `aria-label` bietet eine Methode, um dem sichtbaren Inhalt eines Status-Elements einen nicht angezeigten Text voranzustellen, wenn ein Screenreader den Inhalt liest. Es ist nicht erforderlich, einem Status einen Namen zu geben, sodass, wenn nichts Passendes vorhanden ist, beide Attribute weggelassen werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
