---
title: "Content Security Policy: Die Einstellungen der Seite haben das Laden einer Ressource blockiert: xyz"
slug: Web/HTTP/Guides/CSP/Errors/CSPViolation
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die Warnung "Content Security Policy: Die Einstellungen der Seite haben das Laden einer Ressource blockiert: xyz" tritt auf, wenn die CSP-Konfiguration der Seite, angegeben durch `xyz`, das Laden der Ressource im Dokumentenkontext verhindert.

## Nachricht

### Firefox

`Content Security Policy: Die Einstellungen der Seite haben das Laden einer Ressource blockiert: xyz`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockiert hat. Dies kann entweder nur als Name der Direktive oder als der gesamte Direktivenstring ausgedrückt werden.
- `uvw`
  - : Text, der Informationen bereitstellt, die möglicherweise bei der Lösung des Problems helfen, möglicherweise einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

### Chrome

- `Refused to apply inline style because it violates the following Content Security Policy Directive: "xyz". uvw.`
- `Refused to execute inline script because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to execute inline event handler because it violates the following Content Security Policy directive: "xyz". uvw.`

mit:

- `xyz`
  - : Der Name der CSP-Direktive, die die Ressource blockiert hat. Dies kann entweder nur als Name der Direktive oder als der gesamte Direktivenstring ausgedrückt werden.
- `uvw`
  - : Text, der Informationen bereitstellt, die möglicherweise bei der Lösung des Problems helfen, möglicherweise einschließlich spezifischer Änderungen, die Sie an der CSP-Konfiguration vornehmen könnten.

## Was ist schiefgelaufen?

Diese Warnmeldung bedeutet, dass aufgrund des Vorhandenseins einer bestimmten CSP-Direktive eine Ressource nicht geladen wurde.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
