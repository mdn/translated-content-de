---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`** Schnittstelle, basierend auf der {{domxref("Event")}} Schnittstelle, liefert Details zu einem {{Glossary("ICE")}}-Fehler, der durch das Senden eines {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}-Ereignisses an das {{domxref("RTCPeerConnection")}}-Objekt angekündigt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("RTCPeerConnectionIceErrorEvent.RTCPeerConnectionIceErrorEvent", "RTCPeerConnectionIceErrorEvent()")}}
  - : Erstellt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, mit seinem `type` und anderen Eigenschaften, die wie in den Parametern angegeben initialisiert sind. Normalerweise werden Sie ein Objekt dieses Typs nicht selbst erstellen.

## Instanzeigenschaften

_Die `RTCPeerConnectionIceErrorEvent` Schnittstelle umfasst die Eigenschaften, die in der {{domxref("Event")}} Schnittstelle gefunden werden, sowie die folgenden Eigenschaften:_

- {{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse bereitstellt, die verwendet wird, um mit dem {{Glossary("STUN")}}- oder {{Glossary("TURN")}}-Server zu kommunizieren, der zur Aushandlung der Verbindung verwendet wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offenbart wurde.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Host-Kandidat den Server erreichen kann, ist diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der Fehler 701 wird nur einmal pro Server-URL ausgelöst und nur während der {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}}-Phase `gathering`.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}
  - : Ein String, der den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn keine Kommunikation mit dem STUN- oder TURN-Server hergestellt werden konnte, wird dieser String ein browserspezifischer Text sein, der den Fehler erklärt.
- {{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server mithilfe der in `address` angegebenen IP-Adresse erfolgt. `null`, wenn die Verbindung nicht hergestellt wurde (wenn `address` `null` ist).
- {{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Instanzmethoden

_`RTCPeerConnectionIceErrorEvent` hat keine anderen Methoden als die, die von der übergeordneten Schnittstelle, {{domxref("Event")}}, bereitgestellt werden._

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
