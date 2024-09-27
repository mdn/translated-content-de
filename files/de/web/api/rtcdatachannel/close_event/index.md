---
title: "RTCDataChannel: close-Event"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Das **`close`**-Ereignis wird an den `onclose`-Ereignishandler einer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanz gesendet, wenn der Datentransport für den Datenkanal beendet wurde. Bevor weitere Daten mit `RTCDataChannel` übertragen werden können, muss eine neue 'RTCDataChannel'-Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und tritt nicht in einer Ereignisblase auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für das `close`-Ereignis des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) namens `dc` ein; seine Aufgabe in diesem Beispiel besteht darin, Benutzeroberflächenelemente zu aktualisieren, um anzuzeigen, dass kein laufendes Gespräch mehr existiert, und um den Start eines neuen Gesprächs zu ermöglichen.

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

Alles, was dieser Code als Reaktion auf das `close`-Ereignis tut, ist es, ein Eingabefeld und die "Senden"-Schaltfläche zu deaktivieren und die Schaltfläche zum Starten eines Anrufs zu aktivieren (während die zum Beenden eines Anrufs deaktiviert wird).

Sie können auch die `onclose`-Ereignishandler-Eigenschaft verwenden, um einen Handler für `close`-Ereignisse einzurichten:

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
