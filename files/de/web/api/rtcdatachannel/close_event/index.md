---
title: "RTCDataChannel: close-Ereignis"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Das **`close`**-Ereignis wird an den `onclose`-Ereignishandler einer {{domxref("RTCDataChannel")}}-Instanz gesendet, wenn der Datentransport für den Datenkanal geschlossen wurde. Bevor weitere Daten über `RTCDataChannel` übertragen werden können, muss eine neue 'RTCDataChannel'-Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel richtet einen Handler für das `close`-Ereignis für das {{domxref("RTCDataChannel")}} namens `dc` ein; seine Aufgabe in diesem Beispiel ist es, die Benutzeroberflächenelemente zu aktualisieren, um anzuzeigen, dass kein laufendes Gespräch mehr besteht, und es zu ermöglichen, ein neues Gespräch zu beginnen.

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

Alles, was dieser Code als Reaktion auf das `close`-Ereignis tut, ist, ein Eingabefeld und dessen "Senden"-Schaltfläche zu deaktivieren und die Schaltfläche zu aktivieren, die zum Starten eines Gesprächs verwendet wird (während die Schaltfläche, die das Gespräch beendet, deaktiviert wird).

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
- Verwandte Ereignisse: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.message_event", "message")}}, und {{domxref("RTCDataChannel.error_event", "error")}}
