---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP {{HTTPHeader("Permissions-Policy")}} Header `attribution-reporting` Direktive steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

Genauer gesagt, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Hintergrund-`attributionsrc`-Anfragen werden nicht ausgeführt.
- Die Methode {{domxref("XMLHttpRequest.setAttributionReporting()")}} wird eine Ausnahme auslösen, wenn sie aufgerufen wird.
- Die [`attributionReporting`](/de/docs/Web/API/RequestInit#attributionreporting) Option wird, wenn sie in einem {{domxref("Window/fetch", "fetch()")}} Aufruf enthalten ist, eine Ausnahme auslösen.
- Registrierungs-Header ({{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP-Antworten auf zugehörigen Dokumenten werden ignoriert.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `attribution-reporting` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
