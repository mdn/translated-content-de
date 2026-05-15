---
title: RTCPeerConnectionIceErrorEvent
slug: Web/API/RTCPeerConnectionIceErrorEvent
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnectionIceErrorEvent`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) beschreibt einen Fehler, der bei der Behandlung der {{Glossary("ICE", "ICE")}}-Aushandlung über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server aufgetreten ist.

Sie erbt von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle und fügt Details hinzu, die für Fehler in ICE-Aushandlungen relevant sind.

Das [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignis, das bei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird, ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnectionIceErrorEvent()`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent)
  - : Erstellt und gibt ein neues `RTCPeerConnectionIceErrorEvent`-Objekt zurück, dessen `type` und andere Eigenschaften gemäß den angegebenen Parametern initialisiert sind. Normalerweise erstellen Sie kein Objekt dieses Typs selbst.

## Instanz-Eigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle umfasst die Eigenschaften, die in der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gefunden werden, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zum Kommunizieren mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wird, der zur Aushandlung der Verbindung eingesetzt wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde, oder 701, wenn kein Host-Kandidat den Server erreichen kann.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Reason-Text enthält, der vom STUN- oder TURN-Server zurückgegeben wurde, oder ein browserspezifischer String, der erklärt, warum keine Kommunikation mit dem Server hergestellt werden konnte.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein positiver ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server erfolgt, unter Verwendung der in [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) angegebenen IP-Adresse. Dies ist `null`, wenn keine Verbindung hergestellt wurde (das heißt, wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, mit dem der Fehler aufgetreten ist.

## Instanz-Methoden

_`RTCPeerConnectionIceErrorEvent` hat keine Methoden außer denen, die von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) bereitgestellt werden._

## Beispiele

Siehe [Beispiele](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event#examples) in [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
