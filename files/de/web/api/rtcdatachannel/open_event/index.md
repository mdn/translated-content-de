---
title: "RTCDataChannel: open Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}

Das WebRTC **`open`** Ereignis wird an den `onopen` Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn das zugrunde liegende Transportmittel, das zum Senden und Empfangen der Nachrichten des Datenkanals verwendet wird, geöffnet oder wieder geöffnet wird.

Dieses Ereignis ist nicht abbruchfähig und löst keine Ereigniskettenreaktion aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Beispiele

Dieses Beispiel fügt dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` einen Handler für das `open` Ereignis hinzu, der die Benutzeroberfläche anpasst, um anzuzeigen, dass ein Chatfenster bereit ist, verwendet zu werden, nachdem eine Verbindung hergestellt wurde. Es aktiviert das Nachrichten-Eingabefeld und die Sende-Schaltfläche sowie die Trennungs-Schaltfläche und deaktiviert die Verbindungs-Schaltfläche. Schließlich wird das Nachrichten-Eingabefeld fokussiert, sodass der Benutzer sofort beginnen kann zu tippen.

```js
dc.addEventListener("open", (ev) => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
});
```

Dies kann auch erreicht werden, indem der Wert der `onopen` Ereignishandler-Eigenschaft des Kanals direkt gesetzt wird.

```js
dc.onopen = (ev) => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/RTCDataChannel/message_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
