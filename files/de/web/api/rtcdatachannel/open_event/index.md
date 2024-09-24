---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("WebRTC")}}

Das WebRTC **`open`**-Ereignis wird an den `onopen`-Ereignis-Handler eines {{domxref("RTCDataChannel")}}-Objekts gesendet, wenn der zugrunde liegende Transport geöffnet oder wieder geöffnet wird, der zum Senden und Empfangen von Nachrichten des Datenkanals verwendet wird.

Dieses Ereignis ist nicht stornierbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCDataChannelEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{DOMxRef("Event")}}._

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verknüpften {{domxref("RTCDataChannel")}} zurück.

## Beispiele

Dieses Beispiel fügt dem {{domxref("RTCDataChannel")}} `dc` einen Handler für das `open`-Ereignis hinzu, der die Benutzeroberfläche anpasst, um anzuzeigen, dass ein Chat-Fenster bereit ist, verwendet zu werden, nachdem eine Verbindung hergestellt wurde. Es aktiviert das Nachrichten-Eingabefeld und die Senden-Schaltfläche sowie die Trennen-Schaltfläche und deaktiviert die Verbinden-Schaltfläche. Schließlich wird das Nachrichten-Eingabefeld fokussiert, sodass der Benutzer sofort mit dem Tippen beginnen kann.

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

Dies kann auch durch direktes Setzen des Werts der `onopen`-Ereignis-Handler-Eigenschaft des Kanals erfolgen.

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
- Verwandte Ereignisse: {{domxref("RTCDataChannel.message_event", "message")}}, {{domxref("RTCDataChannel.close_event", "close")}}, und {{domxref("RTCDataChannel.error_event", "error")}}
