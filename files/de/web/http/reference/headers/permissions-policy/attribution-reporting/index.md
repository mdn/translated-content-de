---
title: "Permissions-Policy: attribution-reporting Direktive"
short-title: attribution-reporting
slug: Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `attribution-reporting` steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

Konkret bedeutet dies, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- Im Hintergrund werden keine `attributionsrc`-Anfragen durchgeführt.
- Die Methode [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) wird eine Ausnahme werfen, wenn sie aufgerufen wird.
- Die Option [`attributionReporting`](/de/docs/Web/API/RequestInit#attributionreporting), wenn sie in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf enthalten ist, wird eine Ausnahme auslösen.
- Registrierungs-Header ({{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP-Antworten auf damit verbundene Dokumente werden ignoriert.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `attribution-reporting` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
