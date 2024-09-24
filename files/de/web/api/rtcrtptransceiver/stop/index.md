---
title: "RTCRtpTransceiver: stop()-Methode"
short-title: stop()
slug: Web/API/RTCRtpTransceiver/stop
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`stop()`**-Methode in der {{domxref("RTCRtpTransceiver")}}-Schnittstelle stoppt dauerhaft den Transceiver, indem sowohl der zugehörige {{domxref("RTCRtpSender")}} als auch der {{domxref("RTCRtpReceiver")}} gestoppt werden.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `RTCPeerConnection`, zu der der Transceiver gehört, geschlossen ist.

## Beschreibung

Wenn Sie `stop()` auf einem Transceiver aufrufen, stoppt der Sender sofort das Senden von Medien und jeder seiner RTP-Ströme wird mit der {{Glossary("RTCP")}}-`"BYE"`-Nachricht geschlossen.
Der Empfänger hört dann auf, Medien zu empfangen; der {{domxref("RTCRtpReceiver.track", "track")}} des Empfängers wird gestoppt, und die {{domxref("RTCRtpTransceiver.direction", "Richtung")}} des Transceivers wird auf `stopped` geändert.
Eine neue Verhandlung wird ausgelöst, indem ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Event an die {{domxref("RTCPeerConnection")}} des Transceivers gesendet wird, damit sich die Verbindung an die Änderung anpassen kann.

Die Methode tut nichts, wenn der Transceiver bereits gestoppt ist.
Sie können überprüfen, ob er gestoppt wurde, indem Sie {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} mit `"stopped"` vergleichen.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten die veraltete Eigenschaft {{domxref("RTCRtpTransceiver.stopped", "stopped")}} {{deprecated_inline}}, um anzuzeigen, ob der Transceiver gestoppt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("MediaStreamTrack")}}
