---
title: "RTCDataChannel: closing Ereignis"
short-title: closing
slug: Web/API/RTCDataChannel/closing_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Das **`closing`** Ereignis wird an einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gesendet, kurz bevor der Kanal beginnt, seinen zugrunde liegenden Datentransport herunterzufahren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("closing", (event) => {});

onclosing = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Während das `closing` Ereignis an den Kanal gesendet wird, kurz bevor der Datentransport des Kanals geschlossen wird, wird das [`close`](/de/docs/Web/API/RTCDataChannel/close_event) Ereignis gesendet, sobald der Schließvorgang abgeschlossen ist.

## Beispiele

Dieses Beispiel aktualisiert eine Verbindungsstatus-Oberfläche, wenn das `closing` Ereignis eintrifft.

Zuerst ein Beispiel mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
dataChannel.addEventListener("closing", (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

Sie können auch direkt die `onclosing` Ereignishandler-Eigenschaft setzen:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
