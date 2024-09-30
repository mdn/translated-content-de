---
title: "Permissions-Policy: hid"
slug: Web/HTTP/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `hid` steuert, ob das aktuelle Dokument die [WebHID-API](/de/docs/Web/API/WebHID_API) verwenden darf, um sich mit ungewöhnlichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

Insbesondere, wo eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Permissions-Policy")}}
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
