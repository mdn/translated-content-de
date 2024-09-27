---
title: "ARIA: status-Rolle"
slug: Web/Accessibility/ARIA/Roles/status_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `status`-Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), der beratende Informationen für den Benutzer enthält, die nicht wichtig genug sind, um ein [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) zu sein.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), der beratende Informationen bietet, die nicht wichtig genug sind, um eine Warnung zu rechtfertigen, die die Ankündigung der aktuellen Aktivität des Benutzers sofort unterbrechen würde. Es wird oft, aber nicht unbedingt, als Statusleiste präsentiert.

Fokussieren Sie nicht den Status, wenn dessen Inhalt aktualisiert wird. Live-Bereiche sollen Benutzer über dynamische Aktualisierungen informieren, die in anderen Bereichen der aktuellen Webseite erfolgt sind, aber nicht erfordern, dass die aktuelle Aktivität des Benutzers durch einen Kontextwechsel unterbrochen wird. Wenn eine Situation es erfordert, dass der Fokus verschoben werden muss, ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht angemessen.

Elemente mit der Rolle `status` haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Wert von `true`.

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

  - : Definiert, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren sollen. Elemente mit der Rolle `status` haben einen impliziten [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über inhaltliche Aktualisierungen informieren sollten. Elemente mit der Rolle `status` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) Wert von `polite`, was bedeutet, dass Bildschirmleser Änderungen innerhalb des Protokolls ankündigen, wenn der Benutzer im Leerlauf ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Bildschirmleser kündigen den Namen eines Status-Elements an, bevor dessen Inhalte angesagt werden. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Das Hinzufügen eines `aria-label` bietet eine Methode, den sichtbaren Inhalt eines Status-Elements mit einem Text voranzustellen, der nicht angezeigt wird, wenn ein Bildschirmleser den Inhalt liest. Eine Benennung eines Status ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts Passendes vorhanden ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
