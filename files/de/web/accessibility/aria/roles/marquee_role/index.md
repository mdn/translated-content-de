---
title: "ARIA: marquee Rolle"
slug: Web/Accessibility/ARIA/Roles/marquee_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `marquee` ist eine Art von [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), die nicht wesentliche Informationen enthält, die sich häufig ändern.

## Beschreibung

Die `marquee`-Rolle definiert einen Bereich als eine Art von Live-Region, die nicht wesentliche Informationen präsentiert, die sich häufig ändern. Beispiele für Marquees sind Börsenticker und Werbebanner; Informationen, die vom Benutzer nicht unbedingt gesucht werden und in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einem `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role) besteht darin, dass Log-Informationen in einer sinnvollen Reihenfolge präsentiert werden, wie z. B. nach Datum.

Elemente mit der Rolle marquee haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Wert von `off`.

Das marquee erfordert einen zugänglichen Namen. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Etikett vorhanden ist, ansonsten verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen im Inhalt informieren sollen. Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `off`, was bedeutet, dass Bildschirmleser Änderungen innerhalb des Marquee nicht ankündigen, auch wenn der Benutzer untätig ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Das `marquee` erfordert einen zugänglichen Namen. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Etikett vorhanden ist, ansonsten verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
