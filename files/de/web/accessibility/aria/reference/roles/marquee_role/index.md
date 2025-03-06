---
title: "ARIA: marquee Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `marquee` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der nicht wesentliche Informationen enthält, die häufig wechseln.

## Beschreibung

Die `marquee`-Rolle definiert einen Bereich als eine Art Live-Bereich, der nicht wesentliche Informationen präsentiert, die häufig wechseln. Beispiele für Marquees sind Börsenticker und Werbebanner; Informationen, die vom Benutzer nicht unbedingt gesucht werden und die in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einem `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) besteht darin, dass Log-Informationen in einer sinnvollen Reihenfolge, wie z.B. nach Datum, präsentiert werden.

Elemente mit der Rolle marquee haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Wert von `off`.

Das Marquee muss einen zugänglichen Namen haben. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Aktualisierungen von Inhalten informieren sollten. Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)-Wert von `off`, was bedeutet, dass Screenreader Änderungen innerhalb des Marquee nicht ankündigen, selbst wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Das Marquee muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
