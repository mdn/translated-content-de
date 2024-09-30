---
title: "RTCDataChannel: close Ereignis"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Das **`close`** Ereignis wird an den `onclose` Ereignishandler einer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanz gesendet, wenn der Datentransport für den Datenkanal geschlossen wurde. Bevor weitere Daten über `RTCDataChannel` übertragen werden können, muss eine neue 'RTCDataChannel' Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für das `close` Ereignis des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) namens `dc` ein. Seine Aufgabe in diesem Beispiel besteht darin, die Benutzeroberfläche so zu aktualisieren, dass angezeigt wird, dass kein Anruf mehr läuft, und es zu ermöglichen, einen neuen Anruf zu starten.

```js
dc.addEventListener(
  "close",
  (ev) => {
    messageInputBox.disabled = true;
    sendButton.disabled = true;
    connectButton.disabled = false;
    disconnectButton.disabled = true;
  },
  false,
);
```

Der gesamte Code bewirkt, dass in Antwort auf das `close` Ereignis ein Eingabefeld und dessen "Senden"-Button deaktiviert werden, während der Button, der zum Starten eines Anrufs verwendet wird, aktiviert wird (und der zum Beenden eines Anrufs deaktiviert wird).

Sie können auch die `onclose` Ereignishandler-Eigenschaft verwenden, um einen Handler für `close` Ereignisse einzurichten:

```js
dc.onclose = (ev) => {
  messageInputBox.disabled = true;
  sendButton.disabled = true;
  connectButton.disabled = false;
  disconnectButton.disabled = true;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`message`](/de/docs/Web/API/RTCDataChannel/message_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
