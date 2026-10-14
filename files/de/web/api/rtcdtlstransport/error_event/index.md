---
title: "RTCDtlsTransport: error-Ereignis"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 1463dd31170006c52fe0fd8c691652741d2b3e68
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) empfängt ein `error`-Ereignis, wenn bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ein Fehler auf Transportebene auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Beschreibung

Bei Fehlern auf Transportebene hat die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft des zugehörigen [`RTCError`](/de/docs/Web/API/RTCError) einen der folgenden Werte:

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde aufgrund eines schwerwiegenden Fehlers beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Einzelheiten zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wurde, wird die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert der empfangenen DTLS-Warnmeldung gesetzt. Wurde dagegen ein schwerwiegender Fehler _gesendet_, wird [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert der Warnmeldung gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmte mit keinem der im SDP aufgeführten Fingerabdrücke überein. Wenn die entfernte Gegenstelle das lokale Zertifikat keinem der angegebenen Fingerabdrücke zuordnen kann, tritt dieser Fehler nicht auf. Stattdessen kann es jedoch zu einem `dtls-failure`-Fehler kommen.

## Beispiele

### Grundlegende Verwendung

Der folgende Code verarbeitet einen DTLS-Transportfehler für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc`:

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("error", (ev) => {
  const err = ev.error;
  // …
});
```

Derselbe Code sieht bei Verwendung der Event-Handler-Eigenschaft `onerror` so aus:

```js
dtlsTransport.onerror = (ev) => {
  const err = ev.error;
  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den Legacy-Fehlern gehört, ist der Wert von [`code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
