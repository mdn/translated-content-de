---
title: "RTCDataChannel: close-Event"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das **`close`**-Ereignis wird an den `onclose` Ereignishandler einer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanz gesendet, wenn der Datentransport für den Datenkanal geschlossen wurde. Bevor weitere Daten mit `RTCDataChannel` übertragen werden können, muss eine neue 'RTCDataChannel'-Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für das `close`-Ereignis des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) namens `dc` ein; seine Aufgabe in diesem Beispiel besteht darin, die Benutzerschnittstellenelemente so zu aktualisieren, dass angezeigt wird, dass kein Anruf mehr im Gange ist, und dass ein neuer Anruf gestartet werden kann.

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

Alles, was dieser Code als Reaktion auf das `close`-Ereignis tut, ist, ein Eingabefeld und dessen "Senden"-Schaltfläche zu deaktivieren und die Schaltfläche zu aktivieren, die zum Starten eines Anrufs verwendet wird (während die Schaltfläche zum Beenden eines Anrufs deaktiviert wird).

Sie können auch die `onclose` Ereignishandlereigenschaft verwenden, um einen Handler für `close`-Ereignisse festzulegen:

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
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`message`](/de/docs/Web/API/RTCDataChannel/message_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
