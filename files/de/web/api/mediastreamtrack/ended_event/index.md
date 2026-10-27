---
title: "MediaStreamTrack: ended-Ereignis"
short-title: ended
slug: Web/API/MediaStreamTrack/ended_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("Media Capture and Streams")}}

Das **`ended`**-Ereignis der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle wird ausgelöst, wenn die Wiedergabe oder das Streaming beendet wurde, weil das Ende des Mediums erreicht wurde oder keine weiteren Daten verfügbar sind.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("ended", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

`ended`-Ereignisse werden ausgelöst, wenn die Quelle des Media-Stream-Tracks dauerhaft aufhört, Daten über den Stream zu senden. Dafür gibt es verschiedene mögliche Ursachen:

- Es sind keine weiteren Daten zum Senden vorhanden.
- Der Benutzer hat die zum Senden der Daten erforderlichen Berechtigungen widerrufen.
- Die Hardware, die die Quelldaten erzeugt, wurde entfernt oder ausgeworfen.
- Ein entfernter Peer hat dauerhaft aufgehört, Daten zu senden.
- Der einzige Fall, in dem der Track endet, ohne dass das `ended`-Ereignis ausgelöst wird, ist ein Aufruf von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop).

Das Pausieren von Medien löst _kein_ `ended`-Ereignis aus.

## Beispiele

In diesem Beispiel wird ein Event-Handler für das `ended`-Ereignis eingerichtet, der ein Symbol auf dem Bildschirm ändert, um anzuzeigen, dass der Track nicht mehr aktiv ist.

```js
track.addEventListener("ended", () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
});
```

Sie können den Event-Handler auch über die `onended`-Eigenschaft einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onended` hinzugefügte Event-Listener ersetzt werden:

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

- Das HTMLMediaElement-Ereignis [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- Das HTMLMediaElement-Ereignis [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- Das HTMLMediaElement-Ereignis [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- Das HTMLMediaElement-Ereignis [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- Das AudioScheduledSourceNode-Ereignis [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
