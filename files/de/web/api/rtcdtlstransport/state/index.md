---
title: "RTCDtlsTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCDtlsTransport/state
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`state`**-Eigenschaft des [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Interfaces gibt Informationen, die den Zustand eines Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**) Transports beschreiben.

## Wert

Ein String. Sein Wert ist einer der folgenden:

- `new`
  - : Der anfängliche Zustand, wenn DTLS noch nicht mit der Aushandlung begonnen hat.
- `connecting`
  - : DTLS befindet sich im Prozess der Aushandlung einer sicheren Verbindung und der Überprüfung des Remote-Fingerabdrucks.
- `connected`
  - : DTLS hat die Aushandlung einer sicheren Verbindung abgeschlossen und den Remote-Fingerabdruck überprüft.
- `closed`
  - : Der Transport wurde absichtlich geschlossen, entweder durch den Empfang eines `close_notify`-Alarms oder durch den Aufruf von [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close).
- `failed`
  - : Der Transport ist aufgrund eines Fehlers fehlgeschlagen (wie z.B. Empfang eines Fehlalarms oder Versagen bei der Validierung des Remote-Fingerabdrucks).

## Beispiele

Siehe [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)
