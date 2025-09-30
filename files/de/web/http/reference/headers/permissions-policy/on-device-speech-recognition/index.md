---
title: "Permissions-Policy: on-device-speech-recognition Richtlinie"
short-title: on-device-speech-recognition
slug: Web/HTTP/Reference/Headers/Permissions-Policy/on-device-speech-recognition
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `on-device-speech-recognition` Direktive steuert den Zugriff auf die [On-Device Sprach­erkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

Insbesondere, wo eine definierte Policy die Nutzung blockiert, werden alle Versuche, die Methoden [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) oder [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) der API aufzurufen, fehlschlagen.

## Syntax

```http
Permissions-Policy: on-device-speech-recognition=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `on-device-speech-recognition` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
