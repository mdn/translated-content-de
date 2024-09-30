---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`**-Schnittstelle—basierend auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle—liefert Details zu einem [ICE](/de/docs/Glossary/ICE)-Fehler, der durch das Senden eines [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignisses an das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt angekündigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnectionIceErrorEvent()`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent)
  - : Erstellt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, wobei sein `type` und andere Eigenschaften gemäß den im Parameter angegebenen Werten initialisiert werden. Normalerweise werden Sie kein Objekt dieses Typs selbst erstellen.

## Eigenschaften der Instanz

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle beinhaltet die Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gefunden werden, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die lokale IP-Adresse angibt, die zur Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server verwendet wird, der zur Aushandlung der Verbindung eingesetzt wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein ungleiches Ganzzahlwert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde. Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der 701-Fehler wird nur einmal pro Server-URL ausgelöst und nur während der [`icegatheringstate`](/de/docs/Web/API/RTCPeerConnection/icegatheringstate) `gathering`.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wurde. Wenn keine Kommunikation mit dem STUN- oder TURN-Server hergestellt werden konnte, wird diese Zeichenkette einen browserspezifischen Text enthalten, der den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein ungleiches Ganzzahlwert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server über die in `address` gegebene IP-Adresse stattfindet. `null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Methoden der Instanz

_`RTCPeerConnectionIceErrorEvent` hat keine anderen Methoden als diejenigen, die von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) bereitgestellt werden._

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
