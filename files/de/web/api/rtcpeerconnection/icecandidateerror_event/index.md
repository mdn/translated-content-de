---
title: "RTCPeerConnection: icecandidateerror-Ereignis"
short-title: icecandidateerror
slug: Web/API/RTCPeerConnection/icecandidateerror_event
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Das [WebRTC API](/de/docs/Web/API/WebRTC_API)-Ereignis **`icecandidateerror`** wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein Fehler bei der Durchführung von ICE-Verhandlungen über einen {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server auftritt. Das Ereignisobjekt ist vom Typ [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und enthält Informationen, die den Fehler in gewissem Umfang beschreiben.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach außen gereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Eigenschaftenfunktion für das Ereignis.

```js
addEventListener("icecandidateerror", (event) => {});

onicecandidateerror = (event) => {};
```

## Ereignistyp

Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceErrorEvent")}}

## Ereigniseigenschaften

_Die `RTCPeerConnectionIceErrorEvent`-Schnittstelle enthält die Eigenschaften, die in der [`Event`](/de/docs/Web/API/Event)-Schnittstelle zu finden sind, sowie die folgenden Eigenschaften:_

- [`address`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/address) {{ReadOnlyInline}}
  - : Ein String, der die lokale IP-Adresse angibt, die verwendet wird, um mit dem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server zur Aushandlung der Verbindung zu kommunizieren, oder `null`, wenn die lokale IP-Adresse noch nicht als Teil eines lokalen ICE-Kandidaten offengelegt wurde.
- [`errorCode`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorCode) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der den numerischen [STUN-Fehlercode](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) angibt, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn kein Hostkandidat den Server erreichen kann, wird diese Eigenschaft auf die Nummer 701 gesetzt, die außerhalb des Bereichs gültiger STUN-Fehlercodes liegt. Der 701-Fehler wird nur einmal pro Server-URL ausgelöst und nur, solange der [`icegatheringstate`](/de/docs/Web/API/RTCPeerConnection/icegatheringstate) `gathering` ist.
- [`errorText`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/errorText) {{ReadOnlyInline}}
  - : Ein String, der den STUN-Reason-Text enthält, der vom STUN- oder TURN-Server zurückgegeben wird. Wenn die Kommunikation mit dem STUN- oder TURN-Server überhaupt nicht hergestellt werden konnte, wird dieser String ein browser-spezifischer String sein, der den Fehler erklärt.
- [`port`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/port) {{ReadOnlyInline}}
  - : Ein nicht signierter ganzzahliger Wert, der die Portnummer angibt, über die die Kommunikation mit dem STUN- oder TURN-Server über die in `address` angegebene IP-Adresse stattfindet. `null`, wenn die Verbindung nicht hergestellt wurde (d. h., wenn `address` `null` ist).
- [`url`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent/url) {{ReadOnlyInline}}
  - : Ein String, der die URL des STUN- oder TURN-Servers angibt, bei dem der Fehler aufgetreten ist.

## Beschreibung

Die `errorCode`-Eigenschaft des Fehlerobjekts enthält einen der numerischen STUN-Fehlercodes. Es gibt einen zusätzlichen, WebRTC-spezifischen Fehler, der außerhalb des gültigen STUN-Fehlercodebereichs liegt: 701. Fehler 701 zeigt an, dass keine der ICE-Kandidaten erfolgreich Kontakt mit dem STUN- oder TURN-Server aufnehmen konnte.

Der 701-Fehler wird nur einmal pro Server-URL aus der Liste der verfügbaren STUN- oder TURN-Server ausgelöst, die beim Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angegeben wurde. Diese Fehler treten nur auf, wenn der [ICE-Sammlungszustand](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der Verbindung `gathering` ist.

## Beispiel

Das folgende Beispiel richtet einen Handler für `icecandidateerror`s ein, die in der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `pc` auftreten. Dieser Handler sucht speziell nach 701-Fehlern, die darauf hinweisen, dass Kandidaten den STUN- oder TURN-Server nicht erreichen konnten.

Wenn dies geschieht, werden die Server-URL und die Fehlermeldung an eine Funktion namens `reportConnectFail()` übergeben, um das Verbindungsfehlen zu protokollieren oder auszugeben.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Beachten Sie, dass, wenn mehrere STUN- und/oder TURN-Server beim Erstellen der Verbindung angegeben werden, dieser Fehler mehr als einmal auftreten kann, wenn mehr als einer dieser Server fehlschlägt. Jeder angegebene Server wird versucht, bis eine Verbindung hergestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
