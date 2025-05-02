---
title: "MediaStreamTrack: ended Ereignis"
short-title: ended
slug: Web/API/MediaStreamTrack/ended_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}

Das **`ended`** Ereignis der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Schnittstelle wird ausgelöst, wenn die Wiedergabe oder das Streaming gestoppt wurde, da das Ende der Medien erreicht wurde oder keine weiteren Daten verfügbar sind.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

`ended`-Ereignisse werden ausgelöst, wenn die Quelle der Mediastream-Spur dauerhaft aufhört, Daten im Stream zu senden. Es gibt verschiedene Möglichkeiten, wie dies geschehen kann, darunter:

- Es sind keine Daten mehr zum Senden vorhanden.
- Der Benutzer hat die erforderlichen Berechtigungen für das Senden der Daten widerrufen.
- Die Hardware, die die Quelldaten generiert, wurde entfernt oder ausgeworfen.
- Ein entfernter Teilnehmer hat dauerhaft aufgehört, Daten zu senden.
- Der einzige Fall, in dem die Spur endet, das `ended`-Ereignis jedoch nicht ausgelöst wird, ist beim Aufruf von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop).

Das Pausieren von Medien _erzeugt kein_ `ended`-Ereignis.

## Beispiele

Dieses Beispiel richtet einen Ereignishandler für das `ended`-Ereignis ein, der ein Symbol auf dem Bildschirm ändert, um anzuzeigen, dass die Spur nicht mehr aktiv ist.

```js
track.addEventListener("ended", () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
});
```

Sie können den Ereignishandler auch mit der `onended`-Eigenschaft einrichten:

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

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event) Ereignis
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event) Ereignis
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event) Ereignis
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis
- Das AudioScheduledSourceNode [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
