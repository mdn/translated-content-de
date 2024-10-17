---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`**-Schnittstelle—basiert auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle—bietet Details zu einem {{Glossary("ICE", "ICE")}}-Fehler, der durch das Senden eines [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisses an das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt angekündigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnectionIceErrorEvent()`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent)
  - : Erstellt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, dessen `type` und andere Eigenschaften entsprechend den in den Parametern angegebenen Werten initialisiert sind. Normalerweise werden Sie ein Objekt dieses Typs nicht selbst erstellen.

## Instanz-Eigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle enthält die Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle zu finden sind, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}} oder {{Glossary("TURN", "TURN")}}-Server verwendet wird, um die Verbindung auszuhandeln, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der 701-Fehler wird nur einmal pro Server-URL ausgelöst und nur während der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)`-`gathering`.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, wird dieser String ein browserspezifischer String sein, der den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server über die in `address` angegebene IP-Adresse stattfindet. `null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, mit dem der Fehler aufgetreten ist.

## Instanz-Methoden

_`RTCPeerConnectionIceErrorEvent` hat keine anderen Methoden als die durch die Eltern-Schnittstelle [`Event`](/de/docs/Web/API/Event) bereitgestellten._

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
