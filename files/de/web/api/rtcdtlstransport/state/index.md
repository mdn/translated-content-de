---
title: "RTCDtlsTransport: Zustandseigenschaft"
short-title: Zustand
slug: Web/API/RTCDtlsTransport/state
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`state`**-Eigenschaft der
{{DOMxRef("RTCDtlsTransport")}}-Schnittstelle liefert Informationen, die den Zustand eines Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) Transports beschreiben.

## Wert

Ein String. Sein Wert ist einer der folgenden:

- `new`
  - : Der Anfangszustand, wenn DTLS die Verhandlung noch nicht begonnen hat.
- `connecting`
  - : DTLS befindet sich im Prozess der Aushandlung einer sicheren Verbindung und der Überprüfung des entfernten Fingerabdrucks.
- `connected`
  - : DTLS hat die Aushandlung einer sicheren Verbindung abgeschlossen und den entfernten Fingerabdruck verifiziert.
- `closed`
  - : Der Transport wurde absichtlich geschlossen aufgrund des Empfangs einer
    `close_notify`-Warnung oder des Aufrufs von {{DOMxRef("RTCPeerConnection.close()")}}.
- `failed`
  - : Der Transport ist aufgrund eines Fehlers fehlgeschlagen (z. B. Empfang einer Fehlerwarnung oder Fehlschlag bei der Validierung des entfernten Fingerabdrucks).

## Beispiele

Sehen Sie sich [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCDtlsTransport")}}
