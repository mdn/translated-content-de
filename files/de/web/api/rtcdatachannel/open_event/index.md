---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das WebRTC **`open`**-Ereignis wird an den `onopen`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn der zugrunde liegende Transport, der zum Senden und Empfangen der Nachrichten des Datenkanals verwendet wird, geöffnet oder erneut geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt das mit dem Ereignis verbundene [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück.

## Beispiele

Dieses Beispiel fügt dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` einen Handler für das `open`-Ereignis hinzu, der die Benutzeroberfläche anpasst, um anzuzeigen, dass ein Chat-Fenster bereit zur Nutzung ist, nachdem eine Verbindung hergestellt wurde. Es aktiviert das Nachrichten-Eingabefeld und den Senden-Button sowie den Trennen-Button und deaktiviert den Verbinden-Button. Schließlich wird das Nachrichten-Eingabefeld fokussiert, damit der Benutzer sofort mit der Eingabe beginnen kann.

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

Dies kann auch durchgeführt werden, indem direkt der Wert der `onopen`-Ereignishandlereigenschaft des Kanals gesetzt wird.

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
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/RTCDataChannel/message_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event), und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
