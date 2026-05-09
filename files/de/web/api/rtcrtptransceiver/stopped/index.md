---
title: "RTCRtpTransceiver: stopped-Eigenschaft"
short-title: stopped
slug: Web/API/RTCRtpTransceiver/stopped
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Anstatt diese veraltete Eigenschaft zu verwenden, vergleichen Sie [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) mit `"stopped"`.

Die schreibgeschützte **`stopped`**-Eigenschaft des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interfaces zeigt an, ob der zugehörige Sender und Empfänger des Transceivers beide gestoppt wurden.

Der Transceiver ist gestoppt, wenn die Methode [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop) aufgerufen wurde oder wenn eine Änderung entweder der lokalen oder der entfernten Beschreibung dazu geführt hat, dass der Transceiver aus irgendeinem Grund gestoppt wurde.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) des Transceivers keine Daten mehr senden wird und sein
[`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) keine Daten mehr empfangen wird. Wenn einer oder beide noch aktiv sind, ist das Ergebnis `false`.

## Spezifikationen

Dieses Merkmal ist Teil keiner aktuellen Spezifikation. Es wird nicht mehr als Standard weiterverfolgt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
