---
title: "RTCPeerConnection: iceconnectionstatechange Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`** Ereignis wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet, jedes Mal, wenn sich der {{Glossary("ICE", "ICE")}}-Verbindungszustand während des Verhandlungsprozesses ändert.
Der neue ICE-Verbindungszustand ist in der [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft des Objekts verfügbar.

Eine häufig durchgeführte Aufgabe des `iceconnectionstatechange` Event-Listeners ist das Auslösen eines [ICE-Restarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart), wenn sich der Zustand auf `failed` ändert.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("iceconnectionstatechange", (event) => {});

oniceconnectionstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Ein erfolgreicher Verbindungsversuch beginnt typischerweise im Zustand `new`, wechselt dann zu `checking`, dann `connected` und schließlich zu `completed`. Unter bestimmten Umständen kann der Zustand `connected` übersprungen werden, wodurch die Verbindung direkt vom Zustand `checking` zu `completed` wechselt. Dies kann geschehen, wenn nur der zuletzt geprüfte Kandidat erfolgreich ist und sowohl die Signalsammlung als auch das Ende der Kandidaten stattfinden, bevor die erfolgreiche Verhandlung abgeschlossen ist.

### ICE-Verbindungszustand während ICE-Restarts

Wenn ein ICE-Restart verarbeitet wird, wird der Sammlung- und Konnektivitätsprüfprozess von vorne begonnen, was dazu führt, dass der `iceConnectionState` zu `connected` wechselt, wenn der ICE-Restart im `completed`-Zustand ausgelöst wurde. Wenn der ICE-Restart im temporären `disconnected`-Zustand eingeleitet wird, wechselt der Zustand stattdessen zu `checking`, was im Wesentlichen anzeigt, dass die Verhandlung ignoriert, dass die Verbindung vorübergehend verloren gegangen war.

### Zustandsübergänge, wenn die Verhandlung endet

Wenn im Verhandlungsprozess keine weiteren Kandidaten mehr zu prüfen sind, wechselt die ICE-Verbindung in einen von zwei Zuständen. Wenn keine geeigneten Kandidaten gefunden wurden, wechselt der Zustand zu `failed`. Wenn mindestens ein geeigneter Kandidat erfolgreich identifiziert wurde, wechselt der Zustand zu `completed`. Die ICE-Schicht trifft diese Entscheidung beim Empfang des Endes der Kandidaten-Signals, das durch Aufrufen von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit einem Kandidaten bereitgestellt wird, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft ein leerer String ("") ist, oder durch Setzen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaft [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) auf `false`.

## Beispiele

Ein Event-Handler für dieses Ereignis kann durch die `oniceconnectionstatechange`-Eigenschaft oder durch Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf der `RTCPeerConnection` hinzugefügt werden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, um einen Anrufstatus-Anzeiger zu aktualisieren, indem der Wert von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) verwendet wird, um eine Zeichenfolge zu erstellen, die dem Namen einer CSS-Klasse entspricht, die wir dem Statusanzeiger zuweisen können, um ihn den aktuellen Zustand der Verbindung widerspiegeln zu lassen.

```js
pc.addEventListener(
  "iceconnectionstatechange",
  (ev) => {
    let stateElem = document.querySelector("#call-state");
    stateElem.className = `${pc.iceConnectionState}-state`;
  },
  false,
);
```

Dies kann auch so geschrieben werden:

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)
