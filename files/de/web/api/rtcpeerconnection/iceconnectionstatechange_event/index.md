---
title: "RTCPeerConnection: iceconnectionstatechange-Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`**-Ereignis wird an ein {{domxref("RTCPeerConnection")}}-Objekt gesendet, jedes Mal, wenn sich der {{Glossary("ICE")}}-Verbindungsstatus während des Verhandlungsprozesses ändert.
Der neue ICE-Verbindungsstatus ist in der {{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}}-Eigenschaft des Objekts verfügbar.

Eine gängige Aufgabe, die der `iceconnectionstatechange`-Ereignis-Listener ausführt, ist das Auslösen eines [ICE-Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart), wenn der Status auf `failed` wechselt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("iceconnectionstatechange", (event) => {});

oniceconnectionstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Verwendungshinweise

Ein erfolgreicher Verbindungsversuch beinhaltet typischerweise, dass der Status bei `new` beginnt, dann über `checking` zu `connected` und schließlich zu `completed` wechselt. Unter bestimmten Umständen kann der `connected`-Status übersprungen werden, was dazu führt, dass eine Verbindung direkt vom `checking`-Status zu `completed` wechselt. Dies kann passieren, wenn nur der zuletzt überprüfte Kandidat erfolgreich ist und die Signale für das Sammeln und das Ende der Kandidaten beide auftreten, bevor die erfolgreiche Aushandlung abgeschlossen ist.

### ICE-Verbindungsstatus während ICE-Neustarts

Wenn ein ICE-Neustart verarbeitet wird, beginnt der Sammel- und Konnektivitätsprüfungsprozess von neuem, was dazu führt, dass der `iceConnectionState` zu `connected` wechselt, falls der ICE-Neustart ausgelöst wurde, während sich der Status in `completed` befand. Wenn der ICE-Neustart initiiert wird, während der Status im vorübergehenden `disconnected`-Zustand ist, wechselt der Status stattdessen zu `checking`, was im Wesentlichen darauf hinweist, dass die Verhandlung ignoriert, dass die Verbindung vorübergehend verloren war.

### Statuswechsel, wenn die Verhandlung endet

Wenn der Verhandlungsprozess keine weiteren Kandidaten zu überprüfen hat, wechselt der ICE-Verbindungsstatus zu einem von zwei Zuständen. Wenn keine geeigneten Kandidaten gefunden wurden, wechselt der Status zu `failed`. Wenn mindestens ein geeigneter Kandidat erfolgreich identifiziert wurde, wechselt der Status zu `completed`. Die ICE-Schicht trifft diese Entscheidung, wenn das End-of-Candidates-Signal empfangen wird, das durch Aufrufen von {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} mit einem Kandidaten bereitgestellt wird, dessen {{domxref("RTCIceCandidate.candidate", "candidate")}}-Eigenschaft eine leere Zeichenkette ("") ist, oder durch Setzen der {{domxref("RTCPeerConnection")}}-Eigenschaft {{domxref("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} auf `false`.

## Beispiele

Ein Ereignishandler für dieses Ereignis kann mithilfe der `oniceconnectionstatechange`-Eigenschaft oder durch Verwenden von {{domxref("EventTarget.addEventListener", "addEventListener()")}} auf der `RTCPeerConnection` hinzugefügt werden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, um einen Anrufstatusindikator zu aktualisieren, indem der Wert von {{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} verwendet wird, um eine Zeichenkette zu erstellen, die dem Namen einer CSS-Klasse entspricht, die wir dem Statusindikator zuweisen können, um ihn den aktuellen Verbindungsstatus widerspiegeln zu lassen.

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

Dies kann auch wie folgt geschrieben werden:

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
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.iceConnectionState")}}
