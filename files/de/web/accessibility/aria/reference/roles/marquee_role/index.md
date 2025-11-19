---
title: "ARIA: marquee-Rolle"
short-title: marquee
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ein `marquee` ist eine Art von [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), die nicht wesentliche Informationen enthält, die häufig wechseln.

## Beschreibung

Die `marquee`-Rolle definiert einen Bereich als eine Art von Live-Region, die nicht wesentliche Informationen präsentiert, die sich häufig ändern. Beispiele für Marquees sind Aktien-Ticker und Werbebanner; Informationen, die der Benutzer nicht unbedingt sucht und die in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einem `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) besteht darin, dass Log-Informationen in einer sinnvollen Reihenfolge präsentiert werden, wie zum Beispiel nach Datum.

Elemente mit der marquee-Rolle haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Wert von `off`.

Das marquee muss einen zugänglichen Namen haben. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollten. Elemente mit der Rolle `marquee` haben einen impliziten `aria-live`-Wert von `off`, was bedeutet, dass Screenreader Änderungen innerhalb des Marquees nicht ankündigen werden, auch wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `marquee` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
