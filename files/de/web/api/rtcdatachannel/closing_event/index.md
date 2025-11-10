---
title: "RTCDataChannel: closing Ereignis"
short-title: closing
slug: Web/API/RTCDataChannel/closing_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das **`closing`**-Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, kurz bevor der Kanal mit dem Prozess der Beendigung seines zugrunde liegenden Datentransports beginnt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("closing", (event) => { })

onclosing = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Während das `closing`-Ereignis an den Kanal gesendet wird, kurz bevor der Datentransport des Kanals geschlossen wird, wird das [`close`](/de/docs/Web/API/RTCDataChannel/close_event)-Ereignis gesendet, sobald der Schließvorgang abgeschlossen ist.

## Beispiele

Dieses Beispiel aktualisiert eine Verbindungsstatus-Oberfläche, wenn das `closing`-Ereignis eintrifft.

Zuerst ein Beispiel mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
dataChannel.addEventListener("closing", (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

Sie können auch die `onclosing`-Ereignishandler-Eigenschaft direkt festlegen:

```js
pc.onclosing = (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalübertragung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
