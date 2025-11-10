---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist ein String, der den Modus der Textspur angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu ermitteln, und Sie können diesen Wert ändern, um zwischen den Modi zu wechseln.

Safari erfordert außerdem, dass das **`default`**-Boolesche Attribut auf `true` gesetzt wird, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit Untertitel angezeigt werden.

### Wert

Ein String, der den aktuellen Modus der Spur angibt. Einer der folgenden:

- `disabled`
  - : Die Textspur ist derzeit deaktiviert. Während die Anwesenheit der Spur im DOM erkennbar ist, ignoriert der User-Agent sie ansonsten. Es sind keine Cues aktiv, es werden keine Ereignisse ausgelöst, und der User-Agent wird nicht versuchen, die Cues der Spur zu erhalten. Dies ist der Standardwert, es sei denn, die Textspur hat das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolesche Attribut angegeben, in diesem Fall ist der Standardwert `showing`.
- `hidden`
  - : Die Textspur ist derzeit aktiv, aber die Cues werden nicht angezeigt. Wenn der User-Agent noch nicht versucht hat, die Cues der Spur zu erhalten, wird er dies bald tun (und somit die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft der Spur befüllen). Der User-Agent führt eine Liste der aktiven Cues (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft der Spur) und es werden Ereignisse zu den entsprechenden Zeiten ausgelöst, obwohl der Text nicht angezeigt wird.
- `showing`
  - : Die Textspur ist derzeit aktiviert und sichtbar. Wenn die Liste der Cues der Spur noch nicht erhalten wurde, wird dies bald geschehen. Die Liste der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues) wird gepflegt und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text der Spur wird je nach Styling und [`kind`](/de/docs/Web/API/TextTrack/kind) der Spur entsprechend gezeichnet. Dies ist der Standardwert, wenn das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolesche Attribut der Textspur angegeben ist.

## Nutzungshinweise

Der Standard-`mode` ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolesche Attribut ist angegeben, in diesem Fall ist der Standard-`mode` `showing`. Wenn eine Textspur im Zustand `disabled` geladen ist, wird die entsprechende WebVTT-Datei nicht geladen, bis der Zustand entweder in `showing` oder `hidden` geändert wird. Auf diese Weise werden Ressourcenabruf und Speicherverbrauch vermieden, es sei denn, die Cues sind tatsächlich erforderlich.

Das bedeutet jedoch, dass Sie, wenn Sie Aktionen, die die Cues der Spur betreffen, während beispielsweise der [`load`](/de/docs/Web/API/Window/load_event)-Ereignisverarbeitung durchführen möchten—um einen Aspekt der Cues bei Seitenlade auszuführen—und der Spur-`mode` zunächst `disabled` war, den `mode` zu entweder `hidden` oder `showing` ändern müssen, um das Laden der Cues auszulösen.

Wenn der Modus `showing` ist, werden Textspuren ausgeführt. Das genaue Erscheinungsbild und die Art dieser Ausführung variieren je nach [`kind`](/de/docs/Web/API/TextTrack/kind) der jeweiligen Textspur. Allgemein:

- Spuren, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den Cues über dem Video angezeigt.
- Spuren, deren `kind` `"descriptions"` ist, werden in einer nicht-visuellen Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Handlung im Video zu beschreiben).
- Spuren, deren `kind` `"chapters"` ist, werden vom User-Agent oder von der Website oder Web-App verwendet, um eine Benutzeroberfläche zur Navigation durch die benannten Kapitel zu konstruieren und zu präsentieren, wobei jeder Cue in der Liste ein Kapitel im Medium darstellt. Der Benutzer kann dann zu dem gewünschten Kapitel navigieren, das an der Startposition des Cues beginnt und an der Endposition des Cues endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Cues der Textspur so, dass jedes Mal, wenn ein Cue abgeschlossen ist, das Video die Wiedergabe automatisch pausiert. Dies wird erreicht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)-Eigenschaft jedes Cues auf `true` gesetzt wird. Um sicherzustellen, dass die Cues der Spur verfügbar sind, setzen wir zuerst den `mode` auf `showing`.

```js
let trackElem = document.querySelector("track");
let track = trackElem.track;

track.mode = "showing";

for (const cue of track.cues) {
  cue.pauseOnExit = true;
}
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
