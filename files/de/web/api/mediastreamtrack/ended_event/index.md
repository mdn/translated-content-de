---
title: "MediaStreamTrack: ended Ereignis"
short-title: ended
slug: Web/API/MediaStreamTrack/ended_event
l10n:
  sourceCommit: 0dc22c2f8707610178e316f4211f3eb076fa0767
---

{{APIRef("Media Capture and Streams")}}

Das **`ended`** Ereignis der {{domxref("MediaStreamTrack")}} Schnittstelle wird ausgelöst, wenn die Wiedergabe oder das Streaming gestoppt wurde, weil das Ende der Medien erreicht wurde oder weil keine weiteren Daten verfügbar sind.

Dieses Ereignis ist nicht abbruchbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Verwendungsnotizen

`ended` Ereignisse werden ausgelöst, wenn die Quelle des Media-Stream-Tracks dauerhaft aufhört, Daten über den Stream zu senden. Es gibt verschiedene Möglichkeiten, wie dies geschehen kann, einschließlich:

- Es sind keine Daten mehr zu senden.
- Der Benutzer hat die dafür benötigten Berechtigungen widerrufen.
- Die Hardware, die die Quelldaten erzeugt, wurde entfernt oder ausgeworfen.
- Ein Remote-Peer hat dauerhaft aufgehört, Daten zu senden.
- Der einzige Fall, in dem der Track endet, aber das `ended` Ereignis nicht ausgelöst wird, ist beim Aufruf von {{domxref("MediaStreamTrack.stop")}}.

Das Pausieren von Medien _erzeugt kein_ `ended` Ereignis.

## Beispiele

Dieses Beispiel legt einen Ereignis-Handler für das `ended` Ereignis an, der ein Symbol auf dem Bildschirm ändert, um anzuzeigen, dass der Track nicht mehr aktiv ist.

```js
track.addEventListener("ended", () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
});
```

Sie können den Ereignis-Handler auch über die `onended` Eigenschaft einrichten:

```js
track.onended = () => {
  let statusElem = document.getElementById("status-icon");

  statusElem.src = "/images/stopped-icon.png";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} Ereignis
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} Ereignis
- Das AudioScheduledSourceNode {{domxref("AudioScheduledSourceNode.ended_event", 'ended')}} Ereignis
