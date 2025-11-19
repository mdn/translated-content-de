---
title: "ARIA: status Rolle"
short-title: status
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `status` Rolle definiert einen [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der dem Benutzer beratende Informationen bereitstellt, die nicht wichtig genug sind, um ein [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) zu sein.

## Beschreibung

Ein `status` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der beratende Informationen liefert, die nicht wichtig genug sind, um ein Alert zu rechtfertigen, welches sofort die Ankündigung der aktuellen Aktivität eines Benutzers unterbrechen würde. Er wird häufig, aber nicht unbedingt, als Statusleiste präsentiert.

Setzen Sie den Fokus nicht auf den Status, wenn sich dessen Inhalt aktualisiert. Live-Bereiche sollen Benutzer über dynamische Updates informieren, die in anderen Bereichen der aktuellen Webseite aufgetreten sind, die jedoch nicht die Notwendigkeit erfordern, die aktuelle Aktivität des Benutzers durch einen Kontextwechsel zu unterbrechen. Wenn eine Situation erfordert, dass der Fokus verschoben werden muss, dann ist die Verwendung eines `status` oder eines anderen Live-Bereichs wahrscheinlich nicht angemessen.

Elemente mit der Rolle status haben einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Wert von `polite` und einen impliziten [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Wert von `true`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
  - : Definiert, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren sollen. Elemente mit der Rolle `status` haben einen impliziten `aria-atomic` Wert von `true`.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Definiert, wann unterstützende Technologien den Benutzer über Updates von Inhalten informieren sollen. Elemente mit der Rolle `status` haben einen impliziten `aria-live` Wert von `polite`, was bedeutet, dass Screenreader Änderungen im Log ankündigen, wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Einige Screenreader kündigen den Namen eines Status-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, verweisen Sie mit `aria-labelledby` darauf. Die Einbeziehung eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Status-Elements mit Text einzuleiten, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Die Benennung eines Status ist nicht erforderlich, daher können, wenn nichts Passendes vorhanden ist, beide Attribute weggelassen werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
