---
title: "MediaStreamTrack: ended Ereignis"
short-title: ended
slug: Web/API/MediaStreamTrack/ended_event
l10n:
  sourceCommit: 0dc22c2f8707610178e316f4211f3eb076fa0767
---

{{APIRef("Media Capture and Streams")}}

Das **`ended`** Ereignis der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Schnittstelle wird ausgelöst, wenn die Wiedergabe oder das Streaming gestoppt wird, weil das Ende der Medien erreicht wurde oder weil keine weiteren Daten verfügbar sind.

Dieses Ereignis ist nicht abbruchfähig und wird nicht hochgebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

`ended` Ereignisse werden ausgelöst, wenn die Quelle des Medienstream-Tracks dauerhaft aufhört, Daten zu senden. Es gibt verschiedene Möglichkeiten, wie dies geschehen kann, darunter:

- Es sind keine weiteren Daten mehr zum Senden vorhanden.
- Der Benutzer hat die für das Senden notwendigen Berechtigungen widerrufen.
- Die Hardware, die die Quelldaten erzeugt, wurde entfernt oder ausgeworfen.
- Ein Remote-Peer hat dauerhaft aufgehört, Daten zu senden.
- Der einzige Fall, in dem der Track endet, aber das `ended` Ereignis nicht ausgelöst wird, ist, wenn [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) aufgerufen wird.

Das Pausieren von Medien _erzeugt kein_ `ended` Ereignis.

## Beispiele

Dieses Beispiel richtet einen Ereignis-Handler für das `ended` Ereignis ein, der ein Symbol auf dem Bildschirm ändert, um anzuzeigen, dass der Track nicht mehr aktiv ist.

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

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event) Ereignis
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event) Ereignis
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event) Ereignis
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis
- Das AudioScheduledSourceNode [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
