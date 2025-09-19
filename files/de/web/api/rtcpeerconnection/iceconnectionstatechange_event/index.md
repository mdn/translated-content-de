---
title: "RTCPeerConnection: iceconnectionstatechange Ereignis"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`iceconnectionstatechange`** Ereignis wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekt gesendet, jedes Mal, wenn sich der {{Glossary("ICE", "ICE")}} Verbindungsstatus während des Aushandlungsprozesses ändert. Der neue ICE-Verbindungsstatus ist in der [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) Eigenschaft des Objekts verfügbar.

Eine häufige Aufgabe, die vom `iceconnectionstatechange` Ereignis-Listener ausgeführt wird, ist das Auslösen eines [ICE-Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart), wenn der Status auf `failed` wechselt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("iceconnectionstatechange", (event) => { })

oniceconnectionstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Ein erfolgreicher Verbindungsversuch beginnt typischerweise im Zustand `new`, wechselt dann über `checking` zu `connected` und schließlich zu `completed`. Unter bestimmten Umständen kann der `connected` Zustand übersprungen werden, was dazu führt, dass eine Verbindung direkt vom `checking` Zustand zu `completed` wechselt. Dies kann geschehen, wenn nur der zuletzt überprüfte Kandidat erfolgreich ist und die Signale für das Sammeln und das Ende der Kandidaten beide eintreffen, bevor die erfolgreiche Aushandlung abgeschlossen ist.

### ICE-Verbindungsstatus während ICE-Neustarts

Wenn ein ICE-Neustart verarbeitet wird, wird der Sammel- und Konnektivitätsprüfungsprozess von Anfang an neu gestartet, was dazu führt, dass das `iceConnectionState` auf `connected` wechselt, wenn der ICE-Neustart im `completed` Zustand ausgelöst wurde. Wenn der ICE-Neustart im transienten Zustand `disconnected` initiiert wird, wechselt der Zustand stattdessen auf `checking`, was im Wesentlichen anzeigt, dass die Verhandlung ignoriert, dass die Verbindung vorübergehend verloren war.

### Zustandsübergänge, wenn die Verhandlung endet

Wenn der Verhandlungsprozess keine Kandidaten mehr zu überprüfen hat, wechselt die ICE-Verbindung in einen von zwei Zuständen. Wenn keine geeigneten Kandidaten gefunden wurden, wechselt der Zustand auf `failed`. Wenn mindestens ein geeigneter Kandidat erfolgreich identifiziert wurde, wechselt der Zustand auf `completed`. Die ICE-Schicht trifft diese Entscheidung, nachdem sie das Ende-der-Kandidaten-Signal erhalten hat, das durch Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit einem Kandidaten, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft ein leerer String ("") ist, bereitgestellt wird, oder durch Setzen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaft [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) auf `false`.

## Beispiele

Ein Ereignishandler für dieses Ereignis kann mit der `oniceconnectionstatechange` Eigenschaft oder durch Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf der `RTCPeerConnection` hinzugefügt werden.

In diesem Beispiel wird ein Handler für `iceconnectionstatechange` eingerichtet, um einen Anrufstatusanzeiger zu aktualisieren, indem der Wert von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) verwendet wird, um eine Zeichenfolge zu erstellen, die dem Namen einer CSS-Klasse entspricht, die wir dem Statusanzeiger zuweisen können, damit er den aktuellen Zustand der Verbindung widerspiegelt.

```js
pc.addEventListener("iceconnectionstatechange", (ev) => {
  let stateElem = document.querySelector("#call-state");
  stateElem.className = `${pc.iceConnectionState}-state`;
});
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
