---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebRTC")}}

Das WebRTC **`open`**-Ereignis wird an den `onopen`-Ereignis-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn das zugrunde liegende Transportprotokoll, das verwendet wird, um die Nachrichten des Datenkanals zu senden und zu empfangen, geöffnet oder wieder geöffnet wird.

Dieses Ereignis ist nicht abbruchsicher und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, das mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel fügt dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` einen Handler für das `open`-Ereignis hinzu, der die Benutzeroberfläche anpasst, um anzuzeigen, dass ein Chatfenster bereit zur Nutzung ist, nachdem eine Verbindung hergestellt wurde. Es aktiviert das Nachrichten-Eingabefeld und den Senden-Button und aktiviert den Trennen-Button, während der Verbinden-Button deaktiviert wird. Schließlich wird das Nachrichten-Eingabefeld fokussiert, damit der Benutzer sofort mit dem Tippen beginnen kann.

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

Dies kann auch erledigt werden, indem direkt der Wert der `onopen`-Ereignis-Handler-Eigenschaft des Kanals gesetzt wird.

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
- [Ein einfaches Beispiel für RTCDataChannel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/RTCDataChannel/message_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
