---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des {{domxref("TextTrack")}}-Interfaces ist ein String, der den Modus des Texttracks angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert auslesen, um den aktuellen Modus zu bestimmen, und Sie können diesen Wert ändern, um die Modi zu wechseln.

Safari erfordert zusätzlich, dass das **`default`**-boolesche Attribut auf true gesetzt wird, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitel angezeigt werden.

### Wert

Ein String, der den aktuellen Modus des Tracks angibt. Einer von:

- `disabled`
  - : Der Texttrack ist derzeit deaktiviert. Obwohl die Anwesenheit des Tracks im
    DOM angezeigt wird, ignoriert der User-Agent ihn ansonsten. Keine Cues sind aktiv, es werden keine Ereignisse ausgelöst, und der User-Agent wird nicht versuchen, die Cues des Tracks abzurufen. Dies ist der Standardwert, es sei denn, das Texttrack-Element hat das [`default`](/de/docs/Web/HTML/Element/track#default)
    Boolean-Attribut, in diesem Fall ist der Standardwert `showing`.
- `hidden`
  - : Der Texttrack ist derzeit aktiv, aber die Cues werden nicht angezeigt. Wenn der User-Agent noch nicht versucht hat, die Cues des Tracks abzurufen, wird er dies bald tun (und damit die {{domxref("TextTrack.cues")}}-Eigenschaft des Tracks füllen). Der User-Agent führt eine Liste der aktiven Cues (in der {{domxref("TextTrack.activeCues", "activeCues")}}-Eigenschaft des Tracks), und Ereignisse werden zur entsprechenden Zeit ausgelöst, auch
    wenn der Text nicht angezeigt wird.
- `showing`
  - : Der Texttrack ist derzeit aktiviert und sichtbar. Wenn die Liste der Cues des Tracks noch nicht abgerufen wurde, wird dies bald geschehen. Die {{domxref("TextTrack.activeCues", "activeCues")}}-Liste wird geführt und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text des Tracks wird auch entsprechend basierend auf dem Styling und der {{domxref("TextTrack.kind", "kind")}} des Tracks gezeichnet. Dies ist der Standardwert, wenn das Texttrack-Element das [`default`](/de/docs/Web/HTML/Element/track#default) Boolean-Attribut hat.

## Nutzungshinweise

Der Standardwert für `mode` ist `disabled`, es sei denn, das
[`default`](/de/docs/Web/HTML/Element/track#default) Boolean-Attribut ist spezifiziert, in diesem Fall ist der
Standardwert `mode` `showing`. Wenn ein Texttrack im
`disabled`-Zustand geladen wird, wird die entsprechende WebVTT-Datei erst geladen, wenn der Zustand zu `showing` oder `hidden` geändert wird. Auf diese Weise wird das Laden der Ressource und die Speichernutzung vermieden, solange die Cues nicht tatsächlich benötigt werden.

Das bedeutet jedoch, dass wenn Sie Aktionen in Bezug auf die Cues des Tracks durchführen möchten, während Sie z.B. das {{domxref("Window/load_event", "load")}}-Ereignis behandeln, um einen Aspekt der Cues beim Laden der Seite zu verarbeiten, und der Track-Modus war ursprünglich `disabled`, müssen Sie den `mode` auf entweder `hidden` oder `showing` ändern, um das Laden der Cues auszulösen.

Wenn der Modus `showing` ist, werden Texttracks ausgeführt. Das genaue Aussehen und die Art dieser Ausführung variieren je nach
{{domxref("TextTrack.kind", "kind")}} des jeweiligen Tracks. Im Allgemeinen:

- Tracks, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den Cues über das Video überlagert dargestellt.
- Tracks, deren `kind` `"descriptions"` ist, werden in einer
  nicht-visuellen Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Handlung im
  Video zu beschreiben).
- Tracks, deren `kind` `"chapters"` ist, werden vom User-Agenten
  oder der Website oder Web-App verwendet, um eine Schnittstelle zum Navigieren durch die
  benannten Kapitel zu erstellen und zu präsentieren, wobei jede Cue in der Liste ein Kapitel in der Medienpräsentation darstellt. Der Nutzer kann dann zu dem gewünschten Kapitel navigieren, das an der Startposition des Cues beginnt und an der Endposition des Cues endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Cues des Texttracks so, dass jedes Mal, wenn ein Cue beendet wird, die Videowiedergabe automatisch pausiert. Dies wird erreicht, indem die
{{domxref("TextTrackCue.pauseonExit", "pauseOnExit")}}-Eigenschaft jedes Cues auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Cues des Tracks verfügbar sind, setzen wir zuerst `mode` auf `showing`.

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
- {{domxref("TextTrack")}}
- {{domxref("TextTrackList")}}
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
