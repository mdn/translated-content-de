---
title: "ARIA: marquee-Rolle"
short-title: marquee
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Ein `marquee` ist eine Art von [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), der nicht wesentliche Informationen enthält, die häufig geändert werden.

## Beschreibung

Die `marquee`-Rolle definiert einen Bereich als eine Art von Live-Bereich, der nicht wesentliche Informationen präsentiert, die häufig geändert werden. Beispiele für Marquees sind Börsenticker und Werbebanner; Informationen, die vom Benutzer nicht unbedingt gesucht werden und in beliebiger Reihenfolge präsentiert werden können. Der Hauptunterschied zwischen einer `marquee` und einem [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) besteht darin, dass Log-Informationen in einer sinnvollen Reihenfolge, wie etwa nach Datum, präsentiert werden.

Elemente mit der Rolle `marquee` haben einen impliziten [aria-live](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Wert von `off`.

Das Marquee muss einen zugänglichen Namen haben. Verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Definiert, wann unterstützende Technologien den Benutzer über Updates des Inhalts informieren sollen. Elemente mit der Rolle `marquee` haben einen impliziten `aria-live`-Wert von `off`, was bedeutet, dass Screen-Reader Änderungen innerhalb des Marquees nicht ankündigen, selbst wenn der Benutzer inaktiv ist.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Das `marquee` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
