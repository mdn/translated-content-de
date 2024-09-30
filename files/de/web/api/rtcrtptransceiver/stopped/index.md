---
title: "RTCRtpTransceiver: stopped Eigenschaft"
short-title: stopped
slug: Web/API/RTCRtpTransceiver/stopped
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{deprecated_header}}

> [!NOTE]
> Anstatt diese veraltete Eigenschaft zu verwenden, vergleichen Sie [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) mit `"stopped"`.

Die schreibgeschützte **`stopped`**-Eigenschaft des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interfaces zeigt an, ob sowohl der zugehörige Sender als auch der Empfänger des Transceivers gestoppt wurden.

Der Transceiver wird gestoppt, wenn die Methode [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop) aufgerufen wurde oder wenn eine Änderung der lokalen oder der entfernten Beschreibung aus irgendeinem Grund dazu geführt hat, dass der Transceiver gestoppt wurde.

## Wert

Ein booleaner Wert, der `true` ist, wenn der [`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) des Transceivers keine Daten mehr sendet und sein [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) keine Daten mehr empfängt. Wenn einer oder beide noch arbeiten, ist das Ergebnis `false`.

## Verwendungshinweise

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht länger auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
