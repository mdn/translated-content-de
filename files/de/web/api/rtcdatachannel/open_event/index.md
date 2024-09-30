---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebRTC")}}

Das WebRTC-**`open`**-Ereignis wird an den `onopen`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn der zugrunde liegende Transport geöffnet oder erneut geöffnet wird, der zum Senden und Empfangen der Nachrichten des Datenkanals verwendet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, das mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel fügt dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` einen Handler für das `open`-Ereignis hinzu, der die Benutzeroberfläche so anpasst, dass angezeigt wird, dass ein Chatfenster nach dem Herstellen einer Verbindung bereit zur Verwendung ist. Es aktiviert das Nachrichten-Eingabefeld und die Sende-Schaltfläche sowie die Trennen-Schaltfläche und deaktiviert die Verbindungs-Schaltfläche. Schließlich wird das Nachrichten-Eingabefeld fokussiert, damit der Benutzer sofort mit der Eingabe beginnen kann.

```js
dc.addEventListener(
  "open",
  (ev) => {
    messageInputBox.disabled = false;
    sendMessageButton.disabled = false;
    disconnectButton.disabled = false;
    connectButton.disabled = true;

    messageInputBox.focus();
  },
  false,
);
```

Dies kann auch durch direktes Setzen des Werts der `onopen`-Ereignishandler-Eigenschaft des Kanals erfolgen.

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
