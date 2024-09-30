---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `attribution-reporting`-Direktive steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

Genauer gesagt, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Hintergrund-`attributionsrc`-Anfragen werden nicht durchgeführt.
- Die Methode [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) wird eine Ausnahme auslösen, wenn sie aufgerufen wird.
- Die [`attributionReporting`](/de/docs/Web/API/RequestInit#attributionreporting)-Option, wenn sie in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf enthalten ist, wird eine Ausnahme auslösen.
- Registrierungs-Header ({{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP-Antworten auf zugehörigen Dokumenten werden ignoriert.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Erlaubnis zur Nutzung des Features gewährt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die standardmäßige Allowlist für `attribution-reporting` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
