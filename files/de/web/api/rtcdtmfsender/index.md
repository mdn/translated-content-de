---
title: RTCDTMFSender
slug: Web/API/RTCDTMFSender
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Das **`RTCDTMFSender`**-Interface bietet einen Mechanismus zum Übertragen von {{Glossary("DTMF", "DTMF")}}-Codes auf einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Sie erhalten Zugriff auf den `RTCDTMFSender` der Verbindung über die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft auf dem Audiotrack, mit dem Sie DTMF senden möchten.

Der Hauptzweck der DTMF-Unterstützung in WebRTC besteht darin, dass WebRTC-basierte Kommunikationsclients mit einem [öffentlichen Telefonnetz (PSTN)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) oder anderen älteren Telefondiensten, einschließlich bestehender Voice-over-IP (VoIP)-Dienste, verbunden werden können. Aus diesem Grund kann DTMF nicht zwischen zwei WebRTC-basierten Geräten verwendet werden, da WebRTC keinen Mechanismus zum Empfangen von DTMF-Codes bietet.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn nicht.

- [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) {{ReadOnlyInline}}
  - : Ein String, der die Liste der DTMF-Töne enthält, die sich momentan in der Warteschlange zur Übertragung befinden (Töne, die bereits abgespielt wurden, sind nicht mehr im String enthalten). Siehe [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) für Details zum Format des Tone-Buffers.

## Instanzmethoden

- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
  - : Wenn ein String, der eine Reihe von DTMF-Codes beschreibt, und optional die Dauer und die Zwischentonlücke zwischen den Tönen angegeben werden, beginnt `insertDTMF()`, die angegebenen Töne zu senden. Ein Aufruf von `insertDTMF()` ersetzt alle bereits ausstehenden Töne aus dem `toneBuffer`. Sie können das Senden der in der Warteschlange befindlichen Töne abbrechen, indem Sie eine leere Zeichenkette (`""`) als die zu spielende Toneset angeben.

## Ereignisse

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces setzen.

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Das `tonechange`-Ereignis wird an den Ereignishandler der `RTCDTMFSender`-Instanz gesendet, um anzuzeigen, dass ein Ton entweder gestartet oder gestoppt wurde.

## Beispiel

Sehen Sie sich den Artikel [Using DTMF with WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF) für ein vollständiges Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
