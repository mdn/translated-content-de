---
title: "RTCDataChannel: close-Event"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`close`**-Event wird an den `onclose`-Ereignishandler einer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanz gesendet, wenn der Datentransport für den Datenkanal geschlossen wurde. Bevor weitere Daten mit `RTCDataChannel` übertragen werden können, muss eine neue 'RTCDataChannel'-Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für das `close`-Event für das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) namens `dc` ein. In diesem Beispiel besteht seine Aufgabe darin, die Benutzeroberflächenelemente so zu aktualisieren, dass sie widerspiegeln, dass kein laufender Anruf mehr vorhanden ist, und einen neuen Anruf zu ermöglichen.

```js
dc.addEventListener("close", (ev) => {
  messageInputBox.disabled = true;
  sendButton.disabled = true;
  connectButton.disabled = false;
  disconnectButton.disabled = true;
});
```

Der gesamte Code bewirkt als Reaktion auf das Empfangs des `close`-Ereignisses, dass ein Eingabefeld und dessen "Senden"-Schaltfläche deaktiviert werden und die Schaltfläche, die verwendet wird, um einen Anruf zu starten, aktiviert wird (während diejenige, die einen Anruf beendet, deaktiviert wird).

Sie können auch die `onclose`-Ereignishandler-Eigenschaft verwenden, um einen Handler für `close`-Ereignisse zu setzen:

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
