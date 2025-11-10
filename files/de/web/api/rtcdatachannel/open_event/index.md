---
title: "RTCDataChannel: open-Ereignis"
short-title: open
slug: Web/API/RTCDataChannel/open_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das WebRTC **`open`**-Ereignis wird an den `onopen`-Ereignis-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn das zugrunde liegende Transportmittel zum Senden und Empfangen von Nachrichten des Datenkanals geöffnet oder erneut geöffnet wird.

Dieses Ereignis ist nicht abbruchfähig und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, der mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel fügt einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) `dc` einen Handler für das `open`-Ereignis hinzu, der die Benutzeroberfläche anpasst, um anzuzeigen, dass ein Chatfenster bereit zur Nutzung ist, nachdem eine Verbindung hergestellt wurde. Es aktiviert das Nachrichten-Eingabefeld und die Senden-Schaltfläche sowie die Trennungs-Schaltfläche und deaktiviert die Verbindungs-Schaltfläche. Schließlich wird das Nachrichten-Eingabefeld fokussiert, damit der Benutzer sofort mit dem Tippen beginnen kann.

```js
dc.addEventListener("open", (ev) => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
});
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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/RTCDataChannel/message_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
