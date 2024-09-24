---
title: "ARIA: marquee-Rolle"
slug: Web/Accessibility/ARIA/Roles/marquee_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `marquee` ist eine Art von [live region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), die nicht essenzielle Informationen enthält, die häufig wechseln.

## Beschreibung

Die `marquee`-Rolle definiert einen Bereich als eine Art von Live-Region, die nicht essenzielle Informationen präsentiert, die häufig wechseln. Beispiele für Marquees sind Börsenticker und Werbebanner; Informationen, die nicht unbedingt vom Benutzer gesucht werden und in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einem `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role) besteht darin, dass Log-Informationen in einer bedeutungsvollen Reihenfolge präsentiert werden, wie beispielsweise nach Datum.

Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Wert von `off`.

Das Marquee muss einen zugänglichen Namen haben. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Definiert, wann assistive Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollten. Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `off`, was bedeutet, dass Screenreader keine Änderungen im Marquee ankündigen, selbst wenn der Benutzer untätig ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Das `marquee` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
