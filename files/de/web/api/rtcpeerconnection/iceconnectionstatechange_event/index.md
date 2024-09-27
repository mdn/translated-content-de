---
title: "RTCPeerConnection: iceconnectionstatechange-Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`**-Ereignis wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet, jedes Mal wenn sich der [ICE](/de/docs/Glossary/ICE)-Verbindungszustand während des Aushandlungsprozesses ändert. Der neue ICE-Verbindungszustand ist in der [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft des Objekts verfügbar.

Eine häufig durch den `iceconnectionstatechange`-Ereignislistener durchgeführte Aufgabe besteht darin, einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) auszulösen, wenn der Zustand auf `failed` wechselt.

Dieses Ereignis kann nicht abgebrochen werden und es tritt keine Bubbling auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("iceconnectionstatechange", (event) => {});

oniceconnectionstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Ein erfolgreicher Verbindungsversuch umfasst in der Regel den Zustand, der bei `new` beginnt, dann über `checking`, dann `connected` und schließlich `completed` geht. Unter bestimmten Umständen kann der `connected`-Zustand übersprungen werden, wodurch eine Verbindung direkt vom `checking`-Zustand zu `completed` wechselt. Dies kann geschehen, wenn nur der zuletzt überprüfte Kandidat erfolgreich ist und sowohl das Sammeln als auch das End-of-Candidates-Signal auftreten, bevor die erfolgreiche Aushandlung abgeschlossen ist.

### ICE-Verbindungszustand während ICE-Neustarts

Wenn ein ICE-Neustart verarbeitet wird, wird der Sammel- und Konnektivitätsprüfungsprozess von Beginn an neu gestartet, was dazu führt, dass der `iceConnectionState` in `connected` wechselt, wenn der ICE-Neustart im `completed`-Zustand ausgelöst wurde. Wenn der ICE-Neustart im vorübergehenden `disconnected`-Zustand initiiert wird, wechselt der Zustand stattdessen zu `checking`, was im Wesentlichen anzeigt, dass die Aushandlung ignoriert, dass die Verbindung vorübergehend verloren war.

### Zustandsübergänge beim Abschluss der Aushandlung

Wenn der Aushandlungsprozess keine weiteren Kandidaten zu überprüfen hat, wechselt die ICE-Verbindung in einen von zwei Zuständen. Wenn keine geeigneten Kandidaten gefunden wurden, wechselt der Zustand zu `failed`. Wenn mindestens ein geeigneter Kandidat erfolgreich identifiziert wurde, wechselt der Zustand zu `completed`. Die ICE-Schicht trifft diese Entscheidung bei Empfang des End-of-Candidates-Signals, das durch Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit einem Kandidaten bereitgestellt wird, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft eine leere Zeichenfolge ("") ist, oder durch Setzen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaft [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) auf `false`.

## Beispiele

Ein Ereignishandler für dieses Ereignis kann mithilfe der `oniceconnectionstatechange`-Eigenschaft oder durch Verwenden von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an der `RTCPeerConnection` hinzugefügt werden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, um einen Anrufstatus-Indikator zu aktualisieren, indem der Wert von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) verwendet wird, um einen String zu erstellen, der dem Namen einer CSS-Klasse entspricht, die wir dem Statusindikator zuweisen können, damit er den aktuellen Zustand der Verbindung widerspiegelt.

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)
