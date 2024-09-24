---
title: "Berechtigungsrichtlinie: hid"
slug: Web/HTTP/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `hid` steuert, ob das aktuelle Dokument die {{domxref("WebHID API", "WebHID API", "", "nocode")}} verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen Mensch-Interface-Geräten wie alternativen Tastaturen oder Gamepads herzustellen.

Insbesondere wird die Eigenschaft {{domxref("Navigator.hid")}} nicht verfügbar sein, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Zulassungsliste für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
