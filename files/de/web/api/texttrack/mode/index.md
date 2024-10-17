---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist ein String, der den Modus des Texttracks angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu bestimmen, und Sie können ihn ändern, um Modi zu wechseln.

Safari erfordert zusätzlich, dass das **`default`**-Boolesche Attribut auf true gesetzt wird, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitel-Anweisungen angezeigt werden.

### Wert

Ein String, der den aktuellen Modus des Tracks angibt. Einer von:

- `disabled`
  - : Der Texttrack ist derzeit deaktiviert. Während die Existenz des Tracks im DOM offengelegt wird, ignoriert der User Agent ihn ansonsten. Keine Anweisungen sind aktiv, keine Ereignisse werden ausgelöst und der User Agent versucht nicht, die Anweisungen des Tracks zu erhalten. Dies ist der Standardwert, es sei denn, der Texttrack hat das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche Attribut angegeben, in welchem Fall der Standardwert `showing` ist.
- `hidden`
  - : Der Texttrack ist derzeit aktiv, aber die Anweisungen werden nicht angezeigt. Falls der User Agent noch nicht versucht hat, die Anweisungen des Tracks zu erhalten, wird er dies bald tun (wodurch die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft des Tracks ausgefüllt wird). Der User Agent führt eine Liste der aktiven Anweisungen (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft des Tracks) und Ereignisse werden zu den entsprechenden Zeiten ausgelöst, auch wenn der Text nicht angezeigt wird.
- `showing`
  - : Der Texttrack ist derzeit aktiviert und sichtbar. Falls die Liste der Anweisungen des Tracks noch nicht erhalten wurde, wird dies bald passieren. Die [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Liste wird verwaltet und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text des Tracks wird basierend auf dem Styling und dem [`kind`](/de/docs/Web/API/TextTrack/kind) des Tracks entsprechend gezeichnet. Dies ist der Standardwert, wenn das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche Attribut des Texttracks angegeben ist.

## Nutzungshinweise

Der Standardwert für `mode` ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Element/track#default)-Boolesche Attribut ist angegeben, in welchem Fall der Standardwert `showing` ist. Wenn ein Texttrack im `disabled`-Zustand geladen wird, wird die entsprechende WebVTT-Datei nicht geladen, bis der Zustand auf `showing` oder `hidden` geändert wird. Auf diese Weise werden das Abrufen der Ressource und die Nutzung von Speicher vermieden, es sei denn, die Anweisungen werden tatsächlich benötigt.

Das bedeutet jedoch, dass, wenn Sie während der Bearbeitung, beispielsweise des [`load`](/de/docs/Web/API/Window/load_event)-Ereignisses—um einen Aspekt der Anweisungen beim Laden der Seite zu verarbeiten—Maßnahmen hinsichtlich der Anweisungen des Tracks ergreifen möchten und der Track-Modus ursprünglich `disabled` war, müssen Sie den `mode` auf entweder `hidden` oder `showing` ändern, um das Laden der Anweisungen auszulösen.

Wenn der Modus `showing` ist, werden Texttracks ausgeführt. Das genaue Erscheinungsbild und die Art dieser Ausführung variieren je nach dem [`kind`](/de/docs/Web/API/TextTrack/kind) jedes Texttracks. Im Allgemeinen:

- Tracks, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den Anweisungen über dem Video überlagert dargestellt.
- Tracks, deren `kind` `"descriptions"` ist, werden in nicht-visueller Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Handlung im Video zu beschreiben).
- Tracks, deren `kind` `"chapters"` ist, werden vom User Agent oder der Webseite oder Web-App verwendet, um eine Schnittstelle zum Navigieren durch die benannten Kapitel zu konstruieren und anzuzeigen, wobei jede Anweisung in der Liste ein Kapitel in den Medien repräsentiert. Der Benutzer kann dann das gewünschte Kapitel navigieren, das an der Startposition der Anweisung beginnt und an der Endposition der Anweisung endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Anweisungen des Texttracks so, dass jedes Mal, wenn eine Anweisung beendet wird, die Videowiedergabe automatisch pausiert. Dies geschieht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)-Eigenschaft jeder Anweisung auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Anweisungen des Tracks verfügbar sind, setzen wir zuerst `mode` auf `showing`.

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
