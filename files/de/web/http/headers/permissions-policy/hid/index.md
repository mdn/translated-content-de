---
title: "Permissions-Policy: hid"
slug: Web/HTTP/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerrichtlinie `hid` steuert, ob es dem aktuellen Dokument erlaubt ist, die [WebHID API](/de/docs/Web/API/WebHID_API) zu verwenden, um sich mit ungewöhnlichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

Insbesondere wird die [`Navigator.hid`](/de/docs/Web/API/Navigator/hid)-Eigenschaft nicht verfügbar sein, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen (Origins), für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
