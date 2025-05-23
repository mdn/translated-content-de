---
title: "Permissions-Policy: hid-Direktive"
short-title: hid
slug: Web/HTTP/Reference/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `hid`-Direktive steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen Human Interface Devices herzustellen, wie beispielsweise alternative Tastaturen oder Gamepads.

Konkret wird, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, die Eigenschaft [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Das Standard-allowlist für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
