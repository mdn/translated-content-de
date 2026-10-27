---
title: "RTCDataChannel: close-Ereignis"
short-title: close
slug: Web/API/RTCDataChannel/close_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das **`close`**-Ereignis wird an den `onclose`-Ereignishandler einer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanz gesendet, wenn der Datentransport für den Datenkanal geschlossen wurde. Bevor weitere Daten über `RTCDataChannel` übertragen werden können, muss eine neue `RTCDataChannel`-Instanz erstellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("close", (event) => { })
```

Alternativ können Sie der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Handler zuweisen:

```js-nolint
onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel richtet einen Handler für das `close`-Ereignis des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) namens `dc` ein. Der Handler aktualisiert Elemente der Benutzeroberfläche, um anzuzeigen, dass kein Anruf mehr läuft und ein neuer Anruf gestartet werden kann.

```js
dc.addEventListener("close", (ev) => {
  messageInputBox.disabled = true;
  sendButton.disabled = true;
  connectButton.disabled = false;
  disconnectButton.disabled = true;
});
```

Als Reaktion auf das `close`-Ereignis deaktiviert dieser Code ein Eingabefeld und die zugehörige Schaltfläche „Senden“. Außerdem aktiviert er die Schaltfläche zum Starten eines Anrufs und deaktiviert die Schaltfläche zum Beenden eines Anrufs.

Sie können auch die `onclose`-Ereignishandler-Eigenschaft verwenden, um einen Handler für `close`-Ereignisse festzulegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onclose` hinzugefügte Ereignis-Listener ersetzt werden:

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
