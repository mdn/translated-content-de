---
title: "RTCPeerConnection: iceconnectionstatechange Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`** Ereignis wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet, jedes Mal, wenn sich der {{Glossary("ICE", "ICE")}}-Verbindungsstatus während des Verhandlungsprozesses ändert.
Der neue ICE-Verbindungsstatus ist in der [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft des Objekts verfügbar.

Eine häufige Aufgabe, die vom `iceconnectionstatechange`-Ereignis-Listener ausgeführt wird, ist das Auslösen eines [ICE-Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart), wenn sich der Status in `failed` ändert.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("iceconnectionstatechange", (event) => { })

oniceconnectionstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Ein erfolgreicher Verbindungsversuch beinhaltet typischerweise, dass der Status bei `new` beginnt, dann über `checking` nach `connected` und schließlich zu `completed` wechselt. Unter bestimmten Umständen kann der `connected`-Status jedoch übersprungen werden, sodass eine Verbindung direkt vom `checking`-Status zu `completed` übergeht. Dies kann passieren, wenn nur der zuletzt geprüfte Kandidat erfolgreich ist und das Sammeln und das End-of-Candidates-Signal beide eintreten, bevor die erfolgreiche Verhandlung abgeschlossen ist.

### ICE-Verbindungsstatus während ICE-Neustarts

Wenn ein ICE-Neustart verarbeitet wird, beginnt der Sammel- und Konnektivitätsprüfungsprozess von vorne, wodurch der `iceConnectionState` zu `connected` wechselt, wenn der ICE-Neustart im `completed`-Status ausgelöst wurde. Wenn der ICE-Neustart im vorübergehenden `disconnected`-Status initiiert wird, wechselt der Status stattdessen zu `checking`, was im Wesentlichen anzeigt, dass die Verhandlung ignoriert, dass die Verbindung vorübergehend verloren gegangen war.

### Statusübergänge beim Beenden der Verhandlung

Wenn der Verhandlungsprozess keine weiteren Kandidaten zum Prüfen hat, wechselt die ICE-Verbindung in einen von zwei Zuständen. Wenn keine geeigneten Kandidaten gefunden wurden, wechselt der Status zu `failed`. Wenn mindestens ein geeigneter Kandidat erfolgreich identifiziert wurde, wechselt der Status zu `completed`. Die ICE-Schicht trifft diese Entscheidung nach Erhalt des End-of-Candidates-Signals, das durch den Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit einem Kandidaten, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft eine leere Zeichenkette ("") ist, bereitgestellt wird, oder durch Setzen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaft [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) auf `false`.

## Beispiele

Ein Ereignishandler für dieses Ereignis kann mit der `oniceconnectionstatechange`-Eigenschaft oder mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) am `RTCPeerConnection` hinzugefügt werden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, um einen Anrufstatusanzeiger zu aktualisieren, indem der Wert von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) verwendet wird, um einen String zu erstellen, der dem Namen einer CSS-Klasse entspricht, die wir dem Statusanzeiger zuweisen können, um ihn den aktuellen Status der Verbindung anzeigen zu lassen.

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

Dies kann auch geschrieben werden als:

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
