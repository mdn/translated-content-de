---
title: "Permissions-Policy: Lautsprecher-Auswahl"
slug: Web/HTTP/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `speaker-selection` steuert, ob das aktuelle Dokument berechtigt ist, Audioausgabegeräte (Lautsprecher, Kopfhörer usw.) aufzulisten und auszuwählen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- {{domxref("MediaDevices.enumerateDevices()")}} gibt keine Geräte des Typs _Audioausgabe_ zurück.
- {{domxref("MediaDevices.selectAudioOutput()")}} zeigt kein Popup zur Auswahl einer Audioausgabe an, und das zurückgegebene {{jsxref("Promise")}} wird mit einem {{domxref("DOMException")}} vom Typ `NotAllowedError` abgelehnt.
- {{domxref("HTMLMediaElement.setSinkId()")}} und {{domxref("AudioContext.setSinkId()")}} werfen einen `NotAllowedError`, wenn sie für eine Audioausgabe aufgerufen werden.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `speaker-selection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
