---
title: "Permissions-Policy: speaker-selection"
slug: Web/HTTP/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `speaker-selection` steuert, ob das aktuelle Dokument berechtigt ist, Audioausgabegeräte (Lautsprecher, Kopfhörer usw.) aufzulisten und auszuwählen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) wird keine Geräte vom Typ _Audioausgabe_ zurückgeben.
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) wird das Popup zur Auswahl einer Audioausgabe nicht anzeigen, und der zurückgegebene {{jsxref("Promise")}} wird mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) und [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) werfen einen `NotAllowedError`, wenn sie für eine Audioausgabe aufgerufen werden.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, das Feature zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `speaker-selection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
