---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) beschreibt einen Fehler, der bei der Verarbeitung einer {{Glossary("ICE", "ICE")}}-Aushandlung über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server aufgetreten ist.

Sie erbt von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle und fügt Details hinzu, die für Fehler bei ICE-Aushandlungen relevant sind.

Das bei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöste [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignis ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnectionIceErrorEvent()`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent)
  - : Erstellt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, dessen `type` und andere Eigenschaften wie in den Parametern angegeben initialisiert werden.
    Normalerweise werden Sie ein Objekt dieses Typs nicht selbst erstellen.

## Instanzeigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle umfasst die Eigenschaften der [`Event`](/de/docs/Web/API/Event)-Schnittstelle sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die für die Kommunikation mit dem STUN- oder TURN-Server verwendet wird, der zur Aushandlung der Verbindung eingesetzt wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein positiver Ganzzahlwert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde, oder 701, wenn kein Host-Kandidat den Server erreichen kann.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den vom STUN- oder TURN-Server zurückgegebenen STUN-Grundtext enthält, oder einen browserspezifischen String, der erklärt, warum keine Kommunikation mit dem Server hergestellt werden konnte.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein positiver Ganzzahlwert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server unter Verwendung der in [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) angegebenen IP-Adresse erfolgt.
    Dies ist `null`, wenn die Verbindung nicht hergestellt wurde (d.h. wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Instanzmethoden

_`RTCPeerConnectionIceErrorEvent` hat keine Methoden außer denen, die von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) bereitgestellt werden._

## Beispiele

Siehe [Beispiele](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event#examples) unter [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
