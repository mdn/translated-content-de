---
title: RTCDTMFSender
slug: Web/API/RTCDTMFSender
l10n:
  sourceCommit: 1b2695eecdb5af6acd76466a08b1f085c3bde479
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFSender`**-Schnittstelle bietet einen Mechanismus zum Übertragen von [DTMF](/de/docs/Glossary/DTMF)-Codes auf einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Sie erhalten Zugriff auf den `RTCDTMFSender` der Verbindung über die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft auf dem Audiotrack, mit dem Sie DTMF senden möchten.

Der Hauptzweck der DTMF-Unterstützung von WebRTC besteht darin, dass WebRTC-basierte Kommunikationsclients mit einem [Public-Switched Telephone Network (PSTN)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) oder anderen herkömmlichen Telefoniediensten, einschließlich bestehender Voice over IP (VoIP)-Dienste, verbunden werden können. Aus diesem Grund kann DTMF nicht zwischen zwei WebRTC-basierten Geräten verwendet werden, da WebRTC keinen Mechanismus zum Empfangen von DTMF-Codes bereitstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) {{ReadOnlyInline}}

  - : Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn nicht.

- [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) {{ReadOnlyInline}}
  - : Ein String, der die Liste der DTMF-Töne enthält, die sich derzeit in der Warteschlange für die Übertragung befinden (Töne, die bereits abgespielt wurden, sind nicht mehr im String enthalten). Siehe [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) für Details zum Format des Tonpuffers.

## Instanzmethoden

- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
  - : Angenommen, es wird ein String beschrieben, der eine Reihe von DTMF-Codes und optional die Dauer und den Abstand zwischen den Tönen darstellt, startet `insertDTMF()` das Senden der angegebenen Töne. Ein Aufruf von `insertDTMF()` ersetzt alle bereits ausstehenden Töne aus dem `toneBuffer`. Sie können das Senden von Warteschlangentönen abbrechen, indem Sie einen leeren String (`""`) als die zu spielenden Töne angeben.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört oder durch Zuweisen eines Ereignis-Listeners an die `oneventname`-Eigenschaft dieser Schnittstelle behandelt werden.

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Das `tonechange`-Ereignis wird an den Event-Handler der `RTCDTMFSender`-Instanz gesendet, um anzuzeigen, dass ein Ton entweder begonnen hat oder aufgehört hat zu spielen.

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
