---
title: "RTCRtpTransceiver: stopped-Eigenschaft"
short-title: stopped
slug: Web/API/RTCRtpTransceiver/stopped
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{deprecated_header}}

> [!NOTE]
> Anstatt diese veraltete Eigenschaft zu verwenden, vergleichen Sie {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} mit `"stopped"`.

Die schreibgeschützte **`stopped`**-Eigenschaft auf der Schnittstelle {{domxref("RTCRtpTransceiver")}} gibt an, ob sowohl der zugehörige Sender als auch der Empfänger des Transceivers gestoppt wurden.

Der Transceiver wird gestoppt, wenn die Methode {{domxref("RTCRtpTransceiver.stop", "stop()")}} aufgerufen wurde oder wenn eine Änderung der lokalen oder der entfernten Beschreibung dazu geführt hat, dass der Transceiver aus irgendeinem Grund gestoppt wurde.

## Wert

Ein boolescher Wert, der `true` ist, wenn der
{{domxref("RTCRtpTransceiver.sender", "Sender")}} des Transceivers keine Daten mehr senden wird und sein
{{domxref("RTCRtpTransceiver.receiver", "Empfänger")}} keine Daten mehr empfangen wird. Wenn entweder der Sender oder der Empfänger oder beide noch aktiv sind, ist das Ergebnis `false`.

## Nutzungshinweise

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
