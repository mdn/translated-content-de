---
title: "RTCDataChannel: closing-Ereignis"
short-title: closing
slug: Web/API/RTCDataChannel/closing_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das **`closing`**-Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, unmittelbar bevor der Kanal beginnt, seinen zugrunde liegenden Datentransport zu beenden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("closing", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclosing = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `closing`-Ereignis wird an den Kanal gesendet, unmittelbar bevor dieser beginnt, seinen Datentransport zu beenden. Das [`close`](/de/docs/Web/API/RTCDataChannel/close_event)-Ereignis wird dagegen gesendet, sobald der Schließvorgang abgeschlossen ist.

## Beispiele

Dieses Beispiel aktualisiert eine Anzeige des Verbindungsstatus, wenn das `closing`-Ereignis eintrifft.

Zunächst ein Beispiel mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
dataChannel.addEventListener("closing", (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

Sie können auch die Event-Handler-Eigenschaft `onclosing` direkt festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onclosing` hinzugefügte Event-Listener ersetzt werden:

```js
dataChannel.onclosing = (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
