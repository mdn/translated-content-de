---
title: "Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz"
slug: Web/HTTP/Guides/CSP/Errors/CSPViolation
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die Warnung "Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz" tritt auf, wenn die CSP-Konfiguration der Seite, angegeben durch `xyz`, das Laden der Ressource im Kontext des Dokuments verhindert.

## Nachricht

### Firefox

`Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockierte. Dies kann entweder als nur der Name der Direktive oder als der gesamte Richtliniendirektiv-String ausgedrückt werden.
- `uvw`
  - : Text, der Informationen enthält, die Ihnen möglicherweise helfen, das Problem zu lösen, einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

### Chrome

- `Refused to apply inline style because it violates the following Content Security Policy Directive: "xyz". uvw.`
- `Refused to execute inline script because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to execute inline event handler because it violates the following Content Security Policy directive: "xyz". uvw.`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockierte. Dies kann entweder als nur der Name der Direktive oder als der gesamte Richtliniendirektiv-String ausgedrückt werden.
- `uvw`
  - : Text, der Informationen enthält, die Ihnen möglicherweise helfen, das Problem zu lösen, einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

## Was ist schiefgelaufen?

Diese Warnmeldung bedeutet, dass aufgrund des Vorhandenseins einer bestimmten CSP-Direktive eine Ressource nicht geladen wurde.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
