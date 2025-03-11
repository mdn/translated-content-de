---
title: "RTCRtpTransceiver: stopped-Eigenschaft"
short-title: stopped
slug: Web/API/RTCRtpTransceiver/stopped
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebRTC")}}{{deprecated_header}}

> [!NOTE]
> Anstelle der Verwendung dieser veralteten Eigenschaft vergleichen Sie [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) mit `"stopped"`.

Die schreibgeschützte **`stopped`**-Eigenschaft des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interfaces gibt an, ob sowohl der zugehörige Sender als auch der Empfänger des Transceivers gestoppt wurden.

Der Transceiver ist gestoppt, wenn die [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)-Methode aufgerufen wurde oder wenn eine Änderung an der lokalen oder der entfernten Beschreibung aus irgendeinem Grund dazu geführt hat, dass der Transceiver gestoppt wurde.

## Wert

Ein boolescher Wert, der `true` ist, wenn der [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) des Transceivers keine Daten mehr senden wird und sein [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) keine Daten mehr empfangen wird. Wenn einer oder beide noch in Betrieb sind, ist das Ergebnis `false`.

## Spezifikationen

Dieses Feature ist kein Teil einer aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
