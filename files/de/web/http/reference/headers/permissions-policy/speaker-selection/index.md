---
title: "Permissions-Policy: speaker-selection directive"
short-title: speaker-selection
slug: Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `speaker-selection` steuert, ob das aktuelle Dokument berechtigt ist, Audioausgabegeräte (Lautsprecher, Kopfhörer usw.) aufzulisten und auszuwählen.

Konkret, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) wird keine Geräte des Typs _audio output_ zurückgeben.
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) wird das Popup zur Auswahl eines Audioausgangs nicht anzeigen, und das zurückgegebene {{jsxref("Promise")}} wird mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) und [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) werfen einen `NotAllowedError`, wenn sie für eine Audioausgabe aufgerufen werden.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standarddurchlässigkeitsliste für `speaker-selection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
