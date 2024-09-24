---
title: "Permissions-Policy: Attribution-Reporting"
slug: Web/HTTP/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `attribution-reporting` steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

Insbesondere, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- Hintergrund-`attributionsrc`-Anfragen werden nicht ausgeführt.
- Die Methode {{domxref("XMLHttpRequest.setAttributionReporting()")}} wird eine Ausnahme auslösen, wenn sie aufgerufen wird.
- Die [`attributionReporting`](/de/docs/Web/API/RequestInit#attributionreporting)-Option wird, wenn sie bei einem {{domxref("Window/fetch", "fetch()")}}-Aufruf enthalten ist, eine Ausnahme auslösen.
- Registrierungs-Header ({{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP-Antworten auf zugehörigen Dokumenten werden ignoriert.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `attribution-reporting` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
