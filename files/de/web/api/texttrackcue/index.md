---
title: TextTrackCue
slug: Web/API/TextTrackCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Das **`TextTrackCue`**-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) ist die abstrakte Basisklasse für die verschiedenen abgeleiteten Cues, wie zum Beispiel {{domxref("VTTCue")}}; Sie arbeiten mit diesen abgeleiteten Typen anstelle der Basisklasse.

Diese Cues repräsentieren Textzeilen, die für eine bestimmte Dauer während der Wiedergabe eines {{domxref("TextTrack")}} angezeigt werden. Der Cue umfasst die Startzeit (die Zeit, zu der der Text angezeigt wird) und die Endzeit (die Zeit, zu der er von der Anzeige entfernt wird) sowie weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von {{domxref("EventTarget")}}._

- {{domxref("TextTrackCue.track")}} {{ReadOnlyInline}}
  - : Das {{domxref("TextTrack")}}, zu dem dieser Cue gehört, oder `null`, wenn er zu keinem gehört.
- {{domxref("TextTrackCue.id")}}
  - : Ein String, der den Cue identifiziert.
- {{domxref("TextTrackCue.startTime")}}
  - : Ein `double`, der die Videowiedergabezeit angibt, zu der der Cue angezeigt wird, in Sekunden.
- {{domxref("TextTrackCue.endTime")}}
  - : Ein `double`, der die Videowiedergabezeit angibt, zu der der Cue nicht mehr angezeigt wird, in Sekunden.
- {{domxref("TextTrackCue.pauseOnExit")}}
  - : Ein `boolean`, der angibt, ob das Video pausiert wird, wenn dieser Cue nicht mehr angezeigt wird.

## Ereignisse

- {{domxref("TextTrackCue.enter_event", "enter")}}
  - : Wird ausgelöst, wenn ein Cue aktiv wird.
- {{domxref("TextTrackCue.exit_event", "exit")}}
  - : Wird ausgelöst, wenn der Cue nicht mehr aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
