---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: d0d8c5609668e502f63f49508abb483cead0753b
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) beschreibt einen Fehler, der bei der Handhabung der {{Glossary("ICE", "ICE")}}-Verhandlung über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server aufgetreten ist.

Sie erbt von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle und fügt Details hinzu, die für Fehler in ICE-Verhandlungen relevant sind.

Das [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignis, das bei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird, ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnectionIceErrorEvent()`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent)
  - : Erzeugt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, wobei der `type` und andere Eigenschaften gemäß den in den Parametern spezifizierten Werten initialisiert werden.
    Normalerweise werden Sie ein Objekt dieses Typs nicht selbst erstellen.

## Instanz-Eigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle umfasst die Eigenschaften, die in der [`Event`](/de/docs/Web/API/Event)-Schnittstelle zu finden sind, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wird, der zur Aushandlung der Verbindung verwendet wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offenlegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird, oder 701, wenn kein Host-Kandidat den Server erreichen kann.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wird, oder ein browserspezifischer String, der erklärt, warum die Kommunikation mit dem Server nicht hergestellt werden konnte.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server stattfindet, unter Verwendung der in [`address`](#address) angegebenen IP-Adresse.
    Dies ist `null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Instanz-Methoden

_`RTCPeerConnectionIceErrorEvent` hat keine anderen Methoden als die, die von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) bereitgestellt werden._

## Beispiele

Siehe [Beispiele](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event#examples) in [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
