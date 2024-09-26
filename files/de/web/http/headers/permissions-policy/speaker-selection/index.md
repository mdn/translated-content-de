---
title: "Permissions-Policy: speaker-selection"
slug: Web/HTTP/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `speaker-selection` steuert, ob das aktuelle Dokument die Berechtigung hat, Audioausgabegeräte (Lautsprecher, Kopfhörer usw.) aufzulisten und auszuwählen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- {{domxref("MediaDevices.enumerateDevices()")}} gibt keine Geräte vom Typ _Audioausgabe_ zurück.
- {{domxref("MediaDevices.selectAudioOutput()")}} zeigt das Popup zur Auswahl einer Audioausgabe nicht an, und das zurückgegebene {{jsxref("Promise")}} wird mit einem {{domxref("DOMException")}} vom Typ `NotAllowedError` abgelehnt.
- {{domxref("HTMLMediaElement.setSinkId()")}} und {{domxref("AudioContext.setSinkId()")}} werfen einen `NotAllowedError`, wenn sie für eine Audioausgabe aufgerufen werden.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `speaker-selection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
