---
title: "Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz"
slug: Web/HTTP/CSP/Errors/CSPViolation
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{HTTPSidebar}}

Die Warnung "Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz" tritt auf, wenn die CSP-Konfiguration der Seite, die durch `xyz` angegeben ist, das Laden der Ressource in den Kontext des Dokuments verhindert.

## Meldung

### Firefox

`Content Security Policy: Die Einstellungen der Seite blockierten das Laden einer Ressource: xyz`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockiert hat. Dies kann entweder einfach als der Name der Direktive oder als der gesamte policy directive String ausgedrückt werden.
- `uvw`
  - : Text, der Informationen enthält, die Ihnen helfen können, das Problem zu lösen, möglicherweise einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

### Chrome

- `Refused to apply inline style because it violates the following Content Security Policy Directive: "xyz". uvw.`
- `Refused to execute inline script because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to execute inline event handler because it violates the following Content Security Policy directive: "xyz". uvw.`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockiert hat. Dies kann entweder einfach als der Name der Direktive oder als der gesamte policy directive String ausgedrückt werden.
- `uvw`
  - : Text, der Informationen enthält, die Ihnen helfen können, das Problem zu lösen, möglicherweise einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

## Was schiefgelaufen ist

Diese Warnmeldung bedeutet, dass aufgrund des Vorhandenseins einer bestimmten CSP-Direktive eine Ressource nicht geladen wurde.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/CSP/Errors)
- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
