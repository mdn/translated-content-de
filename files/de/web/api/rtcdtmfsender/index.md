---
title: RTCDTMFSender
slug: Web/API/RTCDTMFSender
l10n:
  sourceCommit: 1b2695eecdb5af6acd76466a08b1f085c3bde479
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFSender`** Schnittstelle bietet einen Mechanismus zum Übertragen von {{Glossary("DTMF")}}-Codes auf eine [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}. Sie erhalten Zugriff auf den `RTCDTMFSender` der Verbindung über die {{domxref("RTCRtpSender.dtmf")}}-Eigenschaft der Audiospur, mit der Sie DTMF senden möchten.

Der Hauptzweck der DTMF-Unterstützung von WebRTC besteht darin, WebRTC-basierte Kommunikationsclients mit einem [öffentlichen Telefonnetz (PSTN)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) oder anderen herkömmlichen Telefondiensten, einschließlich vorhandener VoIP-Dienste, zu verbinden. Aus diesem Grund kann DTMF nicht zwischen zwei WebRTC-basierten Geräten verwendet werden, da WebRTC keinen Mechanismus zum Empfangen von DTMF-Codes bereitstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("RTCDTMFSender.canInsertDTMF")}} {{ReadOnlyInline}}

  - : Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn dies nicht der Fall ist.

- {{domxref("RTCDTMFSender.toneBuffer")}} {{ReadOnlyInline}}
  - : Ein String, der die Liste der DTMF-Töne enthält, die derzeit in der Warteschlange stehen, um übertragen zu werden (Töne, die bereits abgespielt wurden, sind nicht mehr im String enthalten). Siehe {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} für Details zum Format des Tonpuffers.

## Instanz-Methoden

- {{domxref("RTCDTMFSender.insertDTMF()")}}
  - : Angenommen, ein String beschreibt eine Reihe von DTMF-Codes und optional die Dauer und den Abstand zwischen den Tönen, beginnt `insertDTMF()` mit dem Senden der angegebenen Töne. Der Aufruf von `insertDTMF()` ersetzt alle bereits anstehenden Töne aus dem `toneBuffer`. Sie können das Senden in der Warteschlange befindlicher Töne abbrechen, indem Sie einen leeren String (`""`) als die zu spielende Tonauswahl angeben.

## Ereignisse

Diese Ereignisse können mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle gehört werden.

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : Das `tonechange`-Ereignis wird an den Ereignis-Handler der `RTCDTMFSender`-Instanz gesendet, um anzuzeigen, dass ein Ton entweder begonnen oder gestoppt hat zu spielen.

## Beispiel

Siehe den Artikel [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCRtpSender.dtmf")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCRtpSender")}}
