---
title: "RTCPeerConnection: connectionstatechange-Ereignis"
short-title: connectionstatechange
slug: Web/API/RTCPeerConnection/connectionstatechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das Ereignis **`connectionstatechange`** wird an den Event-Handler `onconnectionstatechange` eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts gesendet, nachdem einem zur Verbindung gehörenden [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ein neuer Track hinzugefügt wurde.
Der neue Verbindungsstatus ist in [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) verfügbar und hat einen der folgenden String-Werte: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("connectionstatechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onconnectionstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Änderungen am Verbindungsstatus der WebRTC-Sitzung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` zu verarbeiten.
Es ruft die anwendungsspezifische Funktion `setOnlineStatus()` auf, um eine Statusanzeige zu aktualisieren.

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

Sie können auch über die Eigenschaft `RTCPeerConnection.onconnectionstatechange` einen Handler für das Ereignis `connectionstatechange` erstellen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onconnectionstatechange` hinzugefügte Event-Listener ersetzt werden:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [WebRTC-Verbindungen](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState)
