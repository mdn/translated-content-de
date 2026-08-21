---
title: "RTCRtpTransceiver: stopped-Eigenschaft"
short-title: stopped
slug: Web/API/RTCRtpTransceiver/stopped
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{non-standard_header}}

> [!NOTE]
> Anstatt diese veraltete Eigenschaft zu verwenden, vergleichen Sie [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) mit `"stopped"`.

Die schreibgeschützte **`stopped`**-Eigenschaft des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interfaces zeigt an, ob sowohl der zugehörige Sender als auch der Empfänger des Transceivers gestoppt wurden.

Der Transceiver ist gestoppt, wenn die [`stop()`](/de/docs/Web/API/RTCRtpTransceiver/stop)-Methode aufgerufen wurde oder wenn eine Änderung an der lokalen oder der entfernten Beschreibung den Transceiver aus irgendeinem Grund gestoppt hat.

## Wert

Ein boolescher Wert, der `true` ist, wenn der
[`sender`](/de/docs/Web/API/RTCRtpTransceiver/sender) des Transceivers keine Daten mehr sendet und sein
[`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) keine Daten mehr empfängt. Wenn einer oder beide noch arbeiten, ist das Ergebnis `false`.

## Spezifikationen

Dieses Merkmal ist nicht Teil einer aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
