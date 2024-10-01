---
title: RTCDTMFSender
slug: Web/API/RTCDTMFSender
l10n:
  sourceCommit: 1b2695eecdb5af6acd76466a08b1f085c3bde479
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFSender`**-Schnittstelle bietet einen Mechanismus zur Übertragung von {{Glossary("DTMF", "DTMF")}}-Codes auf einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Sie erhalten Zugriff auf den `RTCDTMFSender` der Verbindung über die [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft der Audiospur, mit der Sie DTMF senden möchten.

Der Hauptzweck der DTMF-Unterstützung von WebRTC besteht darin, WebRTC-basierte Kommunikations-Clients mit einem [öffentlichen Telefonnetz (PSTN)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) oder anderen veralteten Telefondiensten, einschließlich bestehender Voice over IP (VoIP)-Dienste, zu verbinden. Aus diesem Grund kann DTMF nicht zwischen zwei WebRTC-basierten Geräten verwendet werden, da WebRTC keinen Mechanismus zum Empfangen von DTMF-Codes bereitstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) {{ReadOnlyInline}}

  - : Ein boolescher Wert, der `true` ist, wenn der `RTCDTMFSender` in der Lage ist, DTMF-Töne zu senden, oder `false`, wenn nicht.

- [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) {{ReadOnlyInline}}
  - : Ein String, der die Liste der DTMF-Töne enthält, die derzeit in der Warteschlange zur Übertragung stehen (Töne, die bereits abgespielt wurden, sind nicht mehr im String enthalten). Siehe [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) für Details zum Format des Tonpuffers.

## Instanz-Methoden

- [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF)
  - : Angesichts eines Strings, der eine Reihe von DTMF-Codes beschreibt, und optional der Dauer und der Zwischenraumzeit der Töne, beginnt `insertDTMF()` die angegebenen Töne zu senden. Ein Aufruf von `insertDTMF()` ersetzt alle bereits anstehenden Töne im `toneBuffer`. Sie können das Senden von geplanten Tönen abbrechen, indem Sie eine leere Zeichenkette (`""`) als die zu spielenden Töne angeben.

## Events

Hören Sie diese Events mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Event-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Das `tonechange`-Event wird an den Event-Handler der `RTCDTMFSender`-Instanz gesendet, um anzuzeigen, dass ein Ton entweder angefangen hat zu spielen oder aufgehört hat.

## Beispiel

Sehen Sie den Artikel [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
