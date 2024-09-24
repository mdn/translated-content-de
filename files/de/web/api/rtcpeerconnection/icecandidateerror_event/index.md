---
title: "RTCPeerConnection: icecandidateerror-Ereignis"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Das [WebRTC API](/de/docs/Web/API/WebRTC_API)-Ereignis **`icecandidateerror`** wird an eine {{domxref("RTCPeerConnection")}} gesendet, wenn ein Fehler bei der Durchführung von ICE-Verhandlungen über einen {{Glossary("STUN")}}- oder {{Glossary("TURN")}}-Server auftritt. Das Ereignisobjekt ist vom Typ {{domxref("RTCPeerConnectionIceErrorEvent")}} und enthält Informationen, die den Fehler in gewissem Detail beschreiben.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("icecandidateerror", (event) => {});

onicecandidateerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCPeerConnectionIceErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Ereigniseigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle enthält die Eigenschaften der {{domxref("Event")}}-Schnittstelle sowie die folgenden Eigenschaften:_

- {{domxref("RTCPeerConnectionIceErrorEvent.address", "address")}} {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse bereitstellt, die zur Kommunikation mit dem verwendeten {{Glossary("STUN")}}- oder {{Glossary("TURN")}}-Server eingesetzt wird, um die Verbindung auszuhandeln, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} {{ReadOnlyInline}}
  - : Ein vorzeichenloser Ganzzahlwert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Hostkandidat den Server erreichen kann, wird diese Eigenschaft auf die Zahl 701 gesetzt, die außerhalb des Bereichs der gültigen STUN-Fehlercodes liegt. Der 701-Fehler wird nur einmal pro Server-URL und nur während der {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}}-Phase `gathering` ausgelöst.
- {{domxref("RTCPeerConnectionIceErrorEvent.errorText", "errorText")}} {{ReadOnlyInline}}
  - : Ein String, der den STUN-Grundtext enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn keine Kommunikation mit dem STUN- oder TURN-Server hergestellt werden kann, wird dieser String ein browserspezifischer Erklärungstext des Fehlers sein.
- {{domxref("RTCPeerConnectionIceErrorEvent.port", "port")}} {{ReadOnlyInline}}
  - : Ein vorzeichenloser Ganzzahlwert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server stattfindet, und zwar unter Verwendung der in `address` angegebenen IP-Adresse. `null`, wenn die Verbindung nicht hergestellt wurde (das heißt, wenn `address` `null` ist).
- {{domxref("RTCPeerConnectionIceErrorEvent.url", "url")}} {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Beschreibung

Die Eigenschaft {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} des Fehlerobjekts ist einer der numerischen STUN-Fehlercodes. Es gibt einen zusätzlichen, WebRTC-spezifischen Fehler, der außerhalb des Bereichs der gültigen STUN-Fehlercodes liegt: 701. Fehler 701 zeigt an, dass keiner der ICE-Kandidaten erfolgreich Kontakt mit dem STUN- oder TURN-Server herstellen konnte.

Der 701-Fehler wird nur einmal pro Server-URL aus der Liste der verfügbaren STUN- oder TURN-Server ausgelöst, die beim Erstellen der {{domxref("RTCPeerConnection")}} bereitgestellt wird. Diese Fehler treten nur auf, wenn der [ICE-Gathering-Zustand](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der Verbindung `gathering` ist.

## Beispiel

Das folgende Beispiel richtet einen Handler für `icecandidateerror`s ein, die auf der {{domxref("RTCPeerConnection")}} `pc` auftreten. Dieser Handler sucht speziell nach 701-Fehlern, die darauf hinweisen, dass die Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

Wenn dies geschieht, werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um den Verbindungsfehler zu protokollieren oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass, wenn mehrere STUN- und/oder TURN-Server beim Erstellen der Verbindung bereitgestellt werden, dieser Fehler mehr als einmal auftreten kann, falls mehr als einer dieser Server fehlschlägt. Jeder bereitgestellte Server wird versucht, bis eine Verbindung hergestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
