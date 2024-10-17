---
title: "RTCPeerConnection: icecandidateerror-Event"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Das [WebRTC API](/de/docs/Web/API/WebRTC_API)-Event **`icecandidateerror`** wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein Fehler bei der Durchführung von ICE-Verhandlungen über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server auftritt. Das Ereignisobjekt ist vom Typ [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und enthält Informationen, die den Fehler in gewissem Detail beschreiben.

Dieses Ereignis ist nicht abbruchbar und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("icecandidateerror", (event) => {});

onicecandidateerror = (event) => {};
```

## Ereignistyp

Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Ereigniseigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle umfasst die Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle zu finden sind, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zur Kommunikation mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server verwendet wird, der zur Aushandlung der Verbindung verwendet wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein nicht vorzeichenbehafteter Ganzzahlwert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der 701-Fehler wird nur einmal pro Server-URL ausgelöst und nur während der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `gathering`.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, enthält dieser String eine browserspezifische Zeichenfolge, die den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein nicht vorzeichenbehafteter Ganzzahlwert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server erfolgt, unter Verwendung der in `address` angegebenen IP-Adresse. `null`, wenn die Verbindung nicht hergestellt wurde (d. h. wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, mit dem der Fehler aufgetreten ist.

## Beschreibung

Die Eigenschaft [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) des Fehlerobjekts ist einer der numerischen STUN-Fehlercodes. Es gibt einen zusätzlichen, WebRTC-spezifischen Fehler, der außerhalb des gültigen STUN-Fehlercodes-Bereichs liegt: 701. Fehler 701 zeigt an, dass keiner der ICE-Kandidaten erfolgreich Kontakt mit dem STUN- oder TURN-Server aufnehmen konnte.

Der 701-Fehler wird nur einmal pro Server-URL aus der Liste der verfügbaren STUN- oder TURN-Server ausgelöst, die beim Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitgestellt wurden. Diese Fehler treten nur auf, wenn sich der [ICE-Gathering-State](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der Verbindung im Zustand `gathering` befindet.

## Beispiel

Das folgende Beispiel legt einen Handler für `icecandidateerror`s fest, die bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` auftreten. Dieser Handler sucht speziell nach 701-Fehlern, die darauf hinweisen, dass Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

Wenn dies passiert, werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um das Verbindungsfehlerprotokoll zu führen oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass dieser Fehler, wenn mehrere STUN- und/oder TURN-Server beim Erstellen der Verbindung bereitgestellt werden, mehrmals auftreten kann, wenn mehr als einer dieser Server ausfällt. Jeder bereitgestellte Server wird ausprobiert, bis eine Verbindung hergestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
