---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das WebRTC-Ereignis **`open`** wird an den `onopen`-Event-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn die zugrunde liegende Transportverbindung zum Senden und Empfangen von Nachrichten über den Datenkanal geöffnet oder erneut geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht an übergeordnete Elemente weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("open", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onopen = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Beispiele

In diesem Beispiel wird dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` ein Handler für das `open`-Ereignis hinzugefügt. Sobald die Verbindung hergestellt ist, passt er die Benutzeroberfläche an, um anzuzeigen, dass das Chatfenster verwendet werden kann. Dazu aktiviert er das Nachrichteneingabefeld, die Sende-Schaltfläche und die Trennen-Schaltfläche und deaktiviert die Verbinden-Schaltfläche. Abschließend wird das Nachrichteneingabefeld fokussiert, damit der Benutzer sofort mit der Eingabe beginnen kann.

```js
dc.addEventListener("open", (ev) => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
});
```

Sie können dazu auch direkt die Event-Handler-Eigenschaft `onopen` des Kanals setzen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onopen` hinzugefügte Event-Listener ersetzt werden.

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/RTCDataChannel/message_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
