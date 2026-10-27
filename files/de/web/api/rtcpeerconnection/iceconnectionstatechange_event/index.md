---
title: "RTCPeerConnection: iceconnectionstatechange-Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`**-Ereignis wird während des Aushandlungsprozesses jedes Mal an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert.
Der neue ICE-Verbindungszustand ist über die Eigenschaft [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) des Objekts verfügbar.

Eine häufige Aufgabe eines Event-Listeners für `iceconnectionstatechange` besteht darin, einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) auszulösen, wenn der Zustand zu `failed` wechselt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("iceconnectionstatechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oniceconnectionstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Bei einem erfolgreichen Verbindungsversuch beginnt der Zustand normalerweise mit `new`, wechselt dann zu `checking`, anschließend zu `connected` und schließlich zu `completed`. Unter bestimmten Umständen kann der Zustand `connected` jedoch übersprungen werden, sodass die Verbindung direkt von `checking` zu `completed` wechselt. Dies kann passieren, wenn nur der zuletzt geprüfte Kandidat erfolgreich ist und sowohl das Signal für den Abschluss der Kandidatensammlung als auch das End-of-Candidates-Signal eintreffen, bevor die erfolgreiche Aushandlung abgeschlossen ist.

### ICE-Verbindungszustand während eines ICE-Neustarts

Bei einem ICE-Neustart beginnen die Kandidatensammlung und die Überprüfung der Konnektivität von vorn. Dadurch wechselt `iceConnectionState` zu `connected`, wenn der ICE-Neustart im Zustand `completed` ausgelöst wurde. Wird der ICE-Neustart im vorübergehenden Zustand `disconnected` eingeleitet, wechselt der Zustand stattdessen zu `checking`. Das bedeutet im Wesentlichen, dass bei der Aushandlung nicht berücksichtigt wird, dass die Verbindung vorübergehend unterbrochen war.

### Zustandsübergänge am Ende der Aushandlung

Wenn beim Aushandlungsprozess keine weiteren Kandidaten zur Prüfung vorliegen, wechselt die ICE-Verbindung in einen von zwei Zuständen. Wurden keine geeigneten Kandidaten gefunden, wechselt der Zustand zu `failed`. Wurde mindestens ein geeigneter Kandidat erfolgreich ermittelt, wechselt er zu `completed`. Die ICE-Schicht trifft diese Entscheidung, sobald sie das End-of-Candidates-Signal empfängt. Dieses Signal wird bereitgestellt, indem [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit einem Kandidaten aufgerufen wird, dessen Eigenschaft [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) eine leere Zeichenfolge ("") enthält, oder indem die Eigenschaft [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf `false` gesetzt wird.

## Beispiele

Ein Event-Handler für dieses Ereignis kann über die Eigenschaft `oniceconnectionstatechange` hinzugefügt werden. Beachten Sie dabei, dass dies gegebenenfalls andere über `oniceconnectionstatechange` hinzugefügte Event-Listener ersetzt. Alternativ können Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für `RTCPeerConnection` verwenden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, der eine Anzeige des Anrufstatus aktualisiert. Dazu wird aus dem Wert von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) eine Zeichenfolge erzeugt, die dem Namen einer CSS-Klasse entspricht. Diese Klasse kann der Statusanzeige zugewiesen werden, damit sie den aktuellen Verbindungszustand widerspiegelt.

```js
pc.addEventListener("iceconnectionstatechange", (ev) => {
  let stateElem = document.querySelector("#call-state");
  stateElem.className = `${pc.iceConnectionState}-state`;
});
```

Dies lässt sich auch mit der Event-Handler-Eigenschaft `oniceconnectionstatechange` schreiben. Beachten Sie dabei, dass dies gegebenenfalls andere über `oniceconnectionstatechange` hinzugefügte Event-Listener ersetzt:

```js
pc.oniceconnectionstatechange = (ev) => {
  let stateElem = document.querySelector("#call-state");
  stateElem.className = `${pc.iceConnectionState}-state`;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)
