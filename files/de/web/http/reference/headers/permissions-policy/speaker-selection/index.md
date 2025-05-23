---
title: "Permissions-Policy: speaker-selection-Direktive"
short-title: speaker-selection
slug: Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header, die `speaker-selection`-Direktive, steuert, ob das aktuelle Dokument berechtigt ist, Audioausgabegeräte (Lautsprecher, Kopfhörer usw.) aufzulisten und auszuwählen.

Insbesondere dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) wird keine Geräte vom Typ _audio output_ zurückgeben.
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) wird das Popup zur Auswahl einer Audioausgabe nicht anzeigen, und das zurückgegebene {{jsxref("Promise")}} wird mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) und [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) werden einen `NotAllowedError` auslösen, wenn sie für eine Audioausgabe aufgerufen werden.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `speaker-selection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
