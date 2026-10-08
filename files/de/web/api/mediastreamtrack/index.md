---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die **`MediaStreamTrack`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert einen einzelnen Medientrack innerhalb eines Streams. In der Regel handelt es sich dabei um Audio- oder Videotracks, es können jedoch auch andere Tracktypen existieren.

Einige User Agents erweitern diese Schnittstelle durch Unterklassen, um genauere Informationen oder zusätzliche Funktionen bereitzustellen, beispielsweise [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).

{{InheritanceDiagram}}

## Instanzeigenschaften

Zusätzlich zu den unten aufgeführten Eigenschaften verfügt `MediaStreamTrack` über einschränkbare Eigenschaften. Diese können mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt und mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen werden. Unter [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) erfahren Sie, wie Sie mit einschränkbaren Eigenschaften richtig arbeiten. Andernfalls funktioniert Ihr Code möglicherweise nicht zuverlässig.

- [`MediaStreamTrack.contentHint`](/de/docs/Web/API/MediaStreamTrack/contentHint)
  - : Ein String, mit dem die Webanwendung einen Hinweis auf die Art des Trackinhalts geben kann, damit APIs, die den Track verwenden, ihn entsprechend behandeln. Die zulässigen Werte hängen vom Wert der Eigenschaft [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) ab.
- [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)
  - : Ein boolescher Wert. Bei `true` ist der Track aktiviert und darf den Medienquellstream wiedergeben. Bei `false` ist er deaktiviert und gibt statt des Medienquellstreams Stille beziehungsweise ein schwarzes Bild aus. Wurde der Track von seiner Quelle getrennt, kann dieser Wert zwar noch geändert werden, die Änderung hat jedoch keine Wirkung mehr.

    > [!NOTE]
    > Eine übliche Stummschaltfunktion können Sie implementieren, indem Sie `enabled` auf `false` setzen. Die Eigenschaft `muted` bezeichnet dagegen einen Zustand, in dem aufgrund eines technischen Problems keine Mediendaten verfügbar sind.

- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) {{ReadOnlyInline}}
  - : Gibt einen String mit einer eindeutigen Kennung (GUID) für den Track zurück, die vom Browser erzeugt wird.
- [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der bei einem Audiotrack auf `"audio"` und bei einem Videotrack auf `"video"` gesetzt ist. Der Wert ändert sich nicht, wenn der Track von seiner Quelle getrennt wird.
- [`MediaStreamTrack.label`](/de/docs/Web/API/MediaStreamTrack/label) {{ReadOnlyInline}}
  - : Gibt einen String mit einer vom User Agent vergebenen Bezeichnung zurück, die die Quelle des Tracks identifiziert, beispielsweise `"internal microphone"`. Der String kann leer bleiben und ist leer, solange keine Quelle verbunden wurde. Wird der Track von seiner Quelle getrennt, bleibt die Bezeichnung unverändert.
- [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Track aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Eine übliche Stummschaltfunktion können Sie implementieren, indem Sie `enabled` auf `false` setzen. Um die Medienwiedergabe wieder zu aktivieren, setzen Sie den Wert zurück auf `true`.

- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) {{ReadOnlyInline}}
  - : Gibt einen String mit einem festgelegten Wert zurück, der den Status des Tracks angibt. Er hat einen der folgenden Werte:
    - `"live"` gibt an, dass eine Eingabe verbunden ist und versucht, Echtzeitdaten bestmöglich bereitzustellen. In diesem Fall kann die Datenausgabe über das Attribut [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) ein- oder ausgeschaltet werden.
    - `"ended"` gibt an, dass die Eingabe keine Daten mehr liefert und auch künftig keine neuen Daten bereitstellen wird.

## Instanzmethoden

- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
  - : Ermöglicht der Anwendung, für beliebig viele der verfügbaren einschränkbaren Eigenschaften des `MediaStreamTrack` ideale Werte und/oder Bereiche zulässiger Werte festzulegen.
- [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone)
  - : Gibt eine Kopie des `MediaStreamTrack` zurück.
- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities)
  - : Gibt ein Objekt zurück, das für jede einschränkbare Eigenschaft des zugehörigen `MediaStreamTrack` die zulässigen Werte oder Wertebereiche beschreibt.
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
  - : Gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt mit den aktuell festgelegten Einschränkungen für den Track zurück. Der zurückgegebene Wert entspricht den Einschränkungen, die zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden.
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
  - : Gibt ein Objekt mit den aktuellen Werten aller einschränkbaren Eigenschaften des `MediaStreamTrack` zurück.
- [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)
  - : Stoppt die Wiedergabe der mit dem Track verknüpften Quelle und trennt die Verknüpfung zwischen Quelle und Track. Der Status des Tracks wird auf `ended` gesetzt.

## Ereignisse

Sie können auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) reagieren oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen:

- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe des Tracks endet (wenn [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) zu `ended` wechselt). Dies gilt nicht, wenn der Track durch einen Aufruf von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) beendet wird.
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
  - : Wird für den `MediaStreamTrack` ausgelöst, wenn der Wert der Eigenschaft [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) zu `true` wechselt. Dies zeigt an, dass der Track vorübergehend keine Daten bereitstellen kann, etwa aufgrund einer Netzwerkstörung.
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Wird für den Track ausgelöst, wenn wieder Daten verfügbar sind und der Zustand `muted` endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
