---
title: "RTCPeerConnection: icecandidateerror-Ereignis"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("WebRTC")}}

Das Ereignis **`icecandidateerror`** wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn bei der ICE-Aushandlung über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server ein Fehler auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("icecandidateerror", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onicecandidateerror = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel richtet einen Handler für `icecandidateerror`-Ereignisse ein, die bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` auftreten. Dieser Handler prüft gezielt auf Fehler mit dem Code 701, die darauf hinweisen, dass Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

In diesem Fall werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um den Verbindungsfehler zu protokollieren oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass dieser Fehler mehrfach auftreten kann, wenn beim Erstellen der Verbindung mehrere STUN- und/oder TURN-Server angegeben wurden und mehr als einer dieser Server nicht erreichbar ist. Jeder angegebene Server wird ausprobiert, bis eine Verbindung hergestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
