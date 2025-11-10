---
title: "RTCPeerConnection: connectionstatechange-Ereignis"
short-title: connectionstatechange
slug: Web/API/RTCPeerConnection/connectionstatechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`connectionstatechange`**-Ereignis wird an den `onconnectionstatechange` Ereignis-Handler eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), das Teil der Verbindung ist, hinzugefügt wurde.
Der neue Verbindungsstatus kann in [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) gefunden werden und ist einer der folgenden String-Werte: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieses Ereignis ist nicht abbruchfähig und wird nicht hochgebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("connectionstatechange", (event) => { })

onconnectionstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die `peerConnection` genannt wird, verwendet dieses Beispiel [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Änderungen der Konnektivität der WebRTC-Sitzung zu handhaben.
Es ruft eine von der App definierte Funktion namens `setOnlineStatus()` auf, um eine Statusanzeige zu aktualisieren.

```js
peerConnection.addEventListener("connectionstatechange", (event) => {
  switch (peerConnection.connectionState) {
    case "new":
    case "connecting":
      setOnlineStatus("Connecting…");
      break;
    case "connected":
      setOnlineStatus("Online");
      break;
    case "disconnected":
      setOnlineStatus("Disconnecting…");
      break;
    case "closed":
      setOnlineStatus("Offline");
      break;
    case "failed":
      setOnlineStatus("Error");
      break;
    default:
      setOnlineStatus("Unknown");
      break;
  }
});
```

Sie können auch einen Handler für das `connectionstatechange`-Ereignis mit der Eigenschaft `RTCPeerConnection.onconnectionstatechange` erstellen:

```js
peerConnection.onconnectionstatechange = (ev) => {
  switch (peerConnection.connectionState) {
    case "new":
    case "connecting":
      setOnlineStatus("Connecting…");
      break;
    // …
    default:
      setOnlineStatus("Unknown");
      break;
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState)
