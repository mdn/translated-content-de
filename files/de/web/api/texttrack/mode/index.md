---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist ein String, der den Modus des Texttracks angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu bestimmen, und Sie können diesen Wert ändern, um den Modus zu wechseln.

Safari erfordert zusätzlich, dass das **`default`**-Boolean-Attribut auf true gesetzt wird, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitelhinweise angezeigt werden.

### Wert

Ein String, der den aktuellen Modus des Tracks angibt. Einer von:

- `disabled`
  - : Der Texttrack ist derzeit deaktiviert. Obwohl die Anwesenheit des Tracks im DOM offenbart wird, ignoriert der User-Agent diesen ansonsten. Keine Hinweise sind aktiv, keine Ereignisse werden ausgelöst, und der User-Agent wird nicht versuchen, die Hinweise des Tracks zu erhalten. Dies ist der Standardwert, es sei denn, das Texttrack hat das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolean-Attribut spezifiziert, in welchem Fall der Standard `showing` ist.
- `hidden`
  - : Der Texttrack ist derzeit aktiv, aber die Hinweise werden nicht angezeigt. Wenn der User-Agent noch nicht versucht hat, die Hinweise des Tracks zu erhalten, wird er dies bald tun (wodurch die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft des Tracks gefüllt wird). Der User-Agent führt eine Liste der aktiven Hinweise (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft des Tracks) und Ereignisse werden zu den entsprechenden Zeiten ausgelöst, auch wenn der Text nicht angezeigt wird.
- `showing`
  - : Der Texttrack ist derzeit aktiviert und sichtbar. Wenn die Hinweise des Tracks noch nicht erhalten wurden, wird dies bald geschehen. Die [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Liste wird gepflegt und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text des Tracks wird auch entsprechend der Gestaltung und dem [`kind`](/de/docs/Web/API/TextTrack/kind) des Tracks angezeigt. Dies ist der Standardwert, wenn das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolean-Attribut des Texttracks spezifiziert ist.

## Verwendungshinweise

Der Standardwert für `mode` ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolean-Attribut ist spezifiziert, in welchem Fall der Standardwert `showing` ist. Wenn ein Texttrack im Zustand `disabled` geladen wird, wird die entsprechende WebVTT-Datei nicht geladen, bis der Zustand entweder in `showing` oder `hidden` geändert wird. Auf diese Weise werden Ressourcenabrufe und Speicherverbrauch vermieden, wenn die Hinweise nicht tatsächlich benötigt werden.

Das bedeutet jedoch, dass Sie den `mode` auf `hidden` oder `showing` ändern müssen, um das Laden der Hinweise auszulösen, wenn Sie Aktionen durchführen möchten, die die Hinweise des Tracks beinhalten, beispielsweise während des [`load`](/de/docs/Web/API/Window/load_event)-Ereignisses, um irgendeinen Aspekt der Hinweise beim Laden der Seite zu verarbeiten und der Track-Modus war anfangs `disabled`.

Wenn der Modus `showing` ist, werden Texttracks ausgeführt. Das genaue Erscheinungsbild und die Art der Ausführung variieren je nach [`kind`](/de/docs/Web/API/TextTrack/kind) jedes Texttracks. Allgemein:

- Tracks, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den über dem Video angezeigten Hinweisen gerendert.
- Tracks, deren `kind` `"descriptions"` ist, werden in einer nicht visuellen Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Handlung im Video zu beschreiben).
- Tracks, deren `kind` `"chapters"` ist, werden vom User-Agent oder der Website oder Web-App verwendet, um eine Oberfläche zum Navigieren durch die benannten Kapitel zu erstellen und zu präsentieren, wobei jeder Hinweis in der Liste ein Kapitel im Medium darstellt. Der Benutzer kann dann zum gewünschten Kapitel navigieren, das am Startpunkt des Hinweises beginnt und am Endpunkt des Hinweises endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Hinweise des Texttracks so, dass jedes Mal, wenn ein Hinweis beendet ist, die Videowiedergabe automatisch pausiert. Dies geschieht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)-Eigenschaft jedes Hinweises auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Hinweise des Tracks verfügbar sind, setzen wir zunächst `mode` auf `showing`.

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
