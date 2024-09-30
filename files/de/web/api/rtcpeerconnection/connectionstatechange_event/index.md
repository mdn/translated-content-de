---
title: "RTCPeerConnection: connectionstatechange Ereignis"
short-title: connectionstatechange
slug: Web/API/RTCPeerConnection/connectionstatechange_event
l10n:
  sourceCommit: 62dbbbae755940f824ddb0a2f789a89750565d86
---

{{APIRef("WebRTC")}}

Das **`connectionstatechange`**-Ereignis wird an den `onconnectionstatechange`-Ereignis-Handler eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts gesendet, nachdem ein neuer Track zu einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt wurde, der Teil der Verbindung ist.
Der neue Verbindungszustand kann in [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) gefunden werden und ist einer der folgenden Zeichenkettenwerte: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieses Ereignis ist nicht abbruchsicher und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("connectionstatechange", (event) => {});

onconnectionstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` verwendet dieses Beispiel [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Änderungen an der Konnektivität der WebRTC-Sitzung zu behandeln.
Es ruft eine app-definierte Funktion namens `setOnlineStatus()` auf, um eine Statusanzeige zu aktualisieren.

```js
peerConnection.addEventListener(
  "connectionstatechange",
  (event) => {
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
  },
  false,
);
```

Sie können auch einen Handler für das `connectionstatechange`-Ereignis mit der `RTCPeerConnection.onconnectionstatechange`-Eigenschaft erstellen:

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
