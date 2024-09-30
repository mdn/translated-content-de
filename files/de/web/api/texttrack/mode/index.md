---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist ein String, der den Modus des Text-Tracks angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu bestimmen, und Sie können diesen Wert ändern, um Modi zu wechseln.

Safari erfordert zusätzlich, dass das **`default`**-boolesche Attribut auf true gesetzt ist, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitelhinweise angezeigt werden.

### Wert

Ein String, der den aktuellen Modus des Tracks angibt. Einer von:

- `disabled`
  - : Der Text-Track ist derzeit deaktiviert. Während die Präsenz des Tracks im DOM sichtbar ist, ignoriert der Benutzeragent ihn ansonsten. Keine Hinweise sind aktiv, es werden keine Ereignisse ausgelöst, und der Benutzeragent wird nicht versuchen, die Hinweise des Tracks abzurufen. Dies ist der Standardwert, es sei denn, das Text-Track hat das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche-Attribut angegeben, in diesem Fall ist der Standardwert `showing`.
- `hidden`
  - : Der Text-Track ist derzeit aktiv, aber die Hinweise werden nicht angezeigt. Wenn der Benutzeragent noch nicht versucht hat, die Hinweise des Tracks abzurufen, wird er dies bald tun (und damit die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft des Tracks füllen). Der Benutzeragent führt eine Liste der aktiven Hinweise (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft des Tracks) und es werden zur entsprechenden Zeit Ereignisse ausgelöst, obwohl der Text nicht angezeigt wird.
- `showing`
  - : Der Text-Track ist derzeit aktiviert und sichtbar. Wenn die Liste der Hinweise des Tracks noch nicht abgerufen wurde, wird dies bald geschehen. Die [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Liste wird verwaltet und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text des Tracks wird auch entsprechend der Stilvorlage und der [`kind`](/de/docs/Web/API/TextTrack/kind)-Eigenschaft des Tracks dargestellt. Dies ist der Standardwert, wenn das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche-Attribut des Text-Tracks angegeben ist.

## Verwendungshinweise

Der Standard-`mode` ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche-Attribut ist angegeben, in diesem Fall ist der Standard-`mode` `showing`. Wenn ein Text-Track im `disabled`-Status geladen wird, wird die entsprechende WebVTT-Datei erst geladen, wenn der Status entweder in `showing` oder `hidden` geändert wird. Auf diese Weise wird der Ressourcenabruf und Speicherverbrauch vermieden, es sei denn, die Hinweise werden tatsächlich benötigt.

Das bedeutet jedoch, dass, wenn Sie Aktionen ausführen möchten, die die Hinweise des Tracks betreffen, während Sie beispielsweise das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis behandeln – um einen Aspekt der Hinweise beim Laden der Seite zu verarbeiten – und der Track-Modus ursprünglich `disabled` war, Sie den `mode` auf entweder `hidden` oder `showing` ändern müssen, um das Laden der Hinweise auszulösen.

Wenn der Modus `showing` ist, werden Text-Tracks ausgeführt. Das genaue Erscheinungsbild und die Art dieser Ausführung variieren je nach dem [`kind`](/de/docs/Web/API/TextTrack/kind) jedes Text-Tracks. Im Allgemeinen:

- Tracks, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit über dem Video überlagerten Hinweisen gerendert.
- Tracks, deren `kind` `"descriptions"` ist, werden in einer nicht-visuellen Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Aktion im Video zu beschreiben).
- Tracks, deren `kind` `"chapters"` ist, werden vom Benutzeragenten oder der Website bzw. der Web-App verwendet, um eine Oberfläche zur Navigation durch die benannten Kapitel zu konstruieren und zu präsentieren, wobei jeder Hinweis in der Liste ein Kapitel im Medium darstellt. Der Benutzer kann dann zu dem gewünschten Kapitel navigieren, das an der Startposition des Hinweises beginnt und an der Endposition des Hinweises endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Hinweise des Text-Tracks so, dass jedes Mal, wenn ein Hinweis beendet ist, die Videowiedergabe automatisch pausiert. Dies wird erreicht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseonExit)-Eigenschaft jedes Hinweises auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Hinweise des Tracks verfügbar sind, setzen wir zunächst `mode` auf `showing`.

```js
window.addEventListener("load", (event) => {
  let trackElem = document.querySelector("track");
  let track = trackElem.track;

  track.mode = "showing";

  for (const cue of track.cues) {
    cue.pauseOnExit = true;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT](/de/docs/Web/API/WebVTT_API)
- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
- [`VTTCue`](/de/docs/Web/API/VTTCue)
- {{HTMLElement("track")}}
- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
