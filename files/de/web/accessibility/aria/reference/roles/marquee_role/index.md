---
title: "ARIA: Rolle marquee"
short-title: marquee
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `marquee` ist eine Art von [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), die nicht wesentliche Informationen enthält, die häufig wechseln.

## Beschreibung

Die Rolle `marquee` definiert einen Bereich als eine Art von Live-Region, die nicht wesentliche Informationen präsentiert, die sich häufig ändern. Beispiele für Marquees sind Börsenticker und Werbebanner; Informationen, die der Benutzer nicht unbedingt sucht und die in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einem `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) besteht darin, dass Log-Informationen in einer sinnvollen Reihenfolge dargestellt werden, wie z. B. nach Datum.

Elemente mit der Rolle marquee haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Wert von `off`.

Das Marquee muss einen zugänglichen Namen haben. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen des Inhalts informieren sollten. Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `off`, was bedeutet, dass Bildschirmleseprogramme Änderungen innerhalb des Marquee nicht ankündigen, auch wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Das `marquee` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: Rolle `alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: Rolle `log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: Rolle `status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: Rolle `timer`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
