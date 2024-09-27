---
title: "RTCPeerConnection: icecandidateerror-Ereignis"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Das [WebRTC API](/de/docs/Web/API/WebRTC_API)-Ereignis **`icecandidateerror`** wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein Fehler bei der Durchführung von ICE-Verhandlungen über einen [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server auftritt. Das Ereignisobjekt ist vom Typ [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und enthält Informationen, die den Fehler in gewissem Detail beschreiben.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("icecandidateerror", (event) => {});

onicecandidateerror = (event) => {};
```

## Ereignistyp

Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Ereigniseigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle enthält die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle vorhandenen Eigenschaften sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die zur Kommunikation mit dem beim Verbindungsaufbau verwendeten [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server verwendet wird, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wurde. Wenn kein Host-Kandidat den Server erreichen kann, wird diese Eigenschaft auf die Nummer 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der Fehler 701 wird nur einmal pro Server-URL ausgelöst und nur während der [`icegatheringstate`](/de/docs/Web/API/RTCPeerConnection/icegatheringstate), die `gathering` ist.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den Grundtext des STUN-Servers zurückgibt. Wenn die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, ist dieser String ein browserspezifischer String, der den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server über die in `address` angegebene IP-Adresse erfolgt. `null`, wenn die Verbindung nicht hergestellt wurde (d.h. wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Beschreibung

Die [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode)-Eigenschaft des Fehlerobjekts ist einer der numerischen STUN-Fehlercodes. Es gibt einen zusätzlichen, spezifischen WebRTC-Fehler, der außerhalb des gültigen STUN-Fehlercodebereichs liegt: 701. Fehler 701 weist darauf hin, dass keiner der ICE-Kandidaten in der Lage war, erfolgreich Kontakt mit dem STUN- oder TURN-Server herzustellen.

Der Fehler 701 wird nur einmal pro Server-URL aus der Liste der verfügbaren STUN- oder TURN-Server ausgelöst, die bei der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitgestellt wurden. Diese Fehler treten nur auf, wenn der [ICE-Sammlungszustand](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der Verbindung `gathering` ist.

## Beispiel

Das folgende Beispiel richtet einen Handler für `icecandidateerror`s ein, die auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` auftreten. Dieser Handler sucht speziell nach 701-Fehlern, die darauf hinweisen, dass Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

Wenn dies geschieht, werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um das Verbindungsfehlerprotokoll zu führen oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass, wenn mehrere STUN- und/oder TURN-Server bei der Herstellung der Verbindung bereitgestellt werden, dieser Fehler mehrmals auftreten kann, wenn mehr als einer dieser Server fehlschlägt. Jeder bereitgestellte Server wird versucht, bis eine Verbindung hergestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
