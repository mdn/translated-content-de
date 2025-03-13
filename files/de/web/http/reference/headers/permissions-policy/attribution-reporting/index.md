---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `attribution-reporting` steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Hintergrund-`attributionsrc`-Anfragen werden nicht ausgeführt.
- Die Methode [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting) löst eine Ausnahme aus, wenn sie aufgerufen wird.
- Die Option [`attributionReporting`](/de/docs/Web/API/RequestInit#attributionreporting), wenn sie bei einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf enthalten ist, führt dazu, dass eine Ausnahme ausgelöst wird.
- Registrierungs-Header ({{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}) in HTTP-Antworten auf zugehörigen Dokumenten werden ignoriert.

## Syntax

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `attribution-reporting` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
