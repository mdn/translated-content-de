---
title: "RTCPeerConnection: icecandidateerror-Ereignis"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Das **`icecandidateerror`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein Fehler bei der Durchführung der ICE-Verhandlung über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("icecandidateerror", (event) => { })

onicecandidateerror = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Ereigniseigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle enthält die Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle zu finden sind, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wird, um die Verbindung auszuhandeln, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Nummer 701 gesetzt, die außerhalb des gültigen Bereichs von STUN-Fehlercodes liegt. Dieser Wert wird nur einmal pro Server-URL gemeldet und nur, während der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `gathering` ist.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Reason-Text enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, wird dieser String ein browserspezifischer String sein, der den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server erfolgt, unter Verwendung der in [`address`](#address) angegebenen IP-Adresse. Dies ist `null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, mit dem der Fehler aufgetreten ist.

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel richtet einen Handler für `icecandidateerror`-Ereignisse ein, die auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` auftreten. Dieser Handler sucht speziell nach Fehlern 701, die darauf hinweisen, dass Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

Wenn dies geschieht, werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um das Verbindungsproblem zu protokollieren oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass dieser Fehler möglicherweise mehr als einmal auftritt, wenn mehrere STUN- und/oder TURN-Server bei der Erstellung der Verbindung angegeben werden, falls mehr als einer dieser Server ausfällt. Jeder bereitgestellte Server wird ausprobiert, bis eine Verbindung hergestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
