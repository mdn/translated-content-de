---
title: "RTCRtpTransceiver: stop() Methode"
short-title: stop()
slug: Web/API/RTCRtpTransceiver/stop
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`stop()`**-Methode im [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interface stoppt den Transceiver dauerhaft, indem sowohl der zugehörige [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch der
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gestoppt werden.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `RTCPeerConnection`, deren Mitglied der Transceiver ist, geschlossen ist.

## Beschreibung

Wenn Sie `stop()` auf einem Transceiver aufrufen, hört der Sender sofort auf, Medien zu senden, und jeder seiner RTP-Ströme wird mit der [RTCP](/de/docs/Glossary/RTCP) `"BYE"`-Nachricht geschlossen.
Der Empfänger stellt dann den Empfang von Medien ein; die [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers wird gestoppt, und die [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) des Transceivers wird auf `stopped` gesetzt.
Eine Neuverhandlung wird ausgelöst, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Transceivers gesendet wird, damit die Verbindung sich an die Änderung anpassen kann.

Die Methode tut nichts, wenn der Transceiver bereits gestoppt ist.
Sie können überprüfen, ob er gestoppt wurde, indem Sie [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) mit `"stopped"` vergleichen.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten die veraltete [`stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) {{deprecated_inline}}-Eigenschaft, um anzugeben, ob der Transceiver gestoppt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
