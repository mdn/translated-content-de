---
title: "RTCPeerConnection: connectionstatechange-Ereignis"
short-title: connectionstatechange
slug: Web/API/RTCPeerConnection/connectionstatechange_event
l10n:
  sourceCommit: 62dbbbae755940f824ddb0a2f789a89750565d86
---

{{APIRef("WebRTC")}}

Das **`connectionstatechange`**-Ereignis wird an den `onconnectionstatechange`-Ereignishandler eines {{domxref("RTCPeerConnection")}}-Objekts gesendet, nachdem ein neuer Track zu einem {{domxref("RTCRtpReceiver")}} hinzugefügt wurde, der Teil der Verbindung ist.
Der neue Verbindungsstatus kann in {{domxref("RTCPeerConnection.connectionState", "connectionState")}} gefunden werden und ist einer der folgenden Zeichenkettenwerte: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connectionstatechange", (event) => {});

onconnectionstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Für ein {{domxref("RTCPeerConnection")}}, das `peerConnection` genannt wird, verwendet dieses Beispiel {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um Änderungen der Konnektivität der WebRTC-Sitzung zu behandeln.
Es ruft eine von der App definierte Funktion namens `setOnlineStatus()` auf, um eine Statusanzeige zu aktualisieren.

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
- {{domxref("RTCPeerConnection.connectionState")}}
