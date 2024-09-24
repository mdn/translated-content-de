---
title: "RTCDataChannel: closing Ereignis"
short-title: closing
slug: Web/API/RTCDataChannel/closing_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Das **`closing`** Ereignis wird an ein {{domxref("RTCDataChannel")}} gesendet, kurz bevor der Kanal mit dem Prozess des Herunterfahrens seines zugrunde liegenden Datentransports beginnt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("closing", (event) => {});

onclosing = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beschreibung

Während das `closing` Ereignis kurz vor Beginn des Schließens des Datentransports an den Kanal gesendet wird, wird das {{domxref("RTCDataChannel.close_event", "close")}} Ereignis gesendet, sobald der Schließprozess abgeschlossen ist.

## Beispiele

Dieses Beispiel aktualisiert eine Verbindungsstatus-Oberfläche, wenn das `closing` Ereignis eintrifft.

Zuerst ein Beispiel mit Verwendung von {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
dataChannel.addEventListener("closing", (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

Sie können auch die `onclosing` Ereignis-Handler-Eigenschaft direkt setzen:

```js
pc.onclosing = (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
