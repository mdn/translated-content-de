---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`MediaStreamTrack`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert einen einzelnen Medientrack innerhalb eines Streams; typischerweise handelt es sich dabei um Audio- oder Videotracks, aber auch andere Track-Typen können existieren.

Einige User Agents erweitern diese Schnittstelle, um genauere Informationen oder Funktionen bereitzustellen, wie beispielsweise [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Zusätzlich zu den unten aufgelisteten Eigenschaften verfügt `MediaStreamTrack` über einschränkbare Eigenschaften, die mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzt und mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen werden können. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um zu erfahren, wie man korrekt mit einschränkbaren Eigenschaften arbeitet. Ein falscher Umgang wird dazu führen, dass Ihr Code unzuverlässig ist.

- [`MediaStreamTrack.contentHint`](/de/docs/Web/API/MediaStreamTrack/contentHint)
  - : Ein String, der von der Webanwendung verwendet werden kann, um einen Hinweis darauf zu geben, welche Art von Inhalt der Track enthält, um zu steuern, wie er von API-Nutzern behandelt werden soll. Erlaubte Werte hängen von dem Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.
- [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)

  - : Ein Boolean, dessen Wert `true` ist, wenn der Track aktiviert ist, also erlaubt, den Medienstrom wiederzugeben; oder `false`, wenn er deaktiviert ist, also nicht den Medienstrom, sondern Stille und Schwarzbild wiedergibt. Wenn der Track getrennt wurde, kann dieser Wert geändert werden, hat aber keine weitere Wirkung.

    > [!NOTE]
    > Sie können die standardmäßige "Stummschaltung"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen. Die `muted`-Eigenschaft bezieht sich auf eine Bedingung, bei der Medien aufgrund eines technischen Problems nicht verfügbar sind.

- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung (GUID) für den Track enthält; er wird vom Browser generiert.
- [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der auf `"audio"` gesetzt ist, wenn der Track ein Audiotrack ist, und auf `"video"`, wenn es sich um einen Videotrack handelt. Er ändert sich nicht, wenn der Track von seiner Quelle getrennt ist.
- [`MediaStreamTrack.label`](/de/docs/Web/API/MediaStreamTrack/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein vom User Agent zugewiesenes Label enthält, das die Trackquelle identifiziert, wie etwa `"internal microphone"`. Der String kann leer bleiben und bleibt leer, solange keine Quelle verbunden ist. Wenn der Track von seiner Quelle getrennt wird, ändert sich das Label nicht.
- [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) {{ReadOnlyInline}}

  - : Gibt einen Boolean-Wert zurück, der angibt, ob der Track aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Sie können die standardmäßige "Stummschaltung"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen, und die Medien wieder aktivieren, indem Sie es wieder auf `true` setzen.

- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) {{ReadOnlyInline}}

  - : Gibt einen enumerierten String zurück, der den Status des Tracks angibt. Dieser wird einer der folgenden Werte sein:

    - `"live"`, was darauf hindeutet, dass eine Eingabe verbunden ist und ihr Bestes tut, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Datenwiedergabe mit dem [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Attribut ein- oder ausgeschaltet werden.
    - `"ended"`, was darauf hindeutet, dass die Eingabe keine Daten mehr bereitstellt und keine neuen Daten mehr liefern wird.

## Instanz-Methoden

- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
  - : Ermöglicht der Anwendung, die idealen und/oder akzeptablen Wertebereiche für eine beliebige Anzahl der verfügbaren einschränkbaren Eigenschaften des `MediaStreamTrack` zu spezifizieren.
- [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone)
  - : Gibt eine Duplikation des `MediaStreamTrack` zurück.
- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities)
  - : Gibt eine Liste der einschränkbaren Eigenschaften zurück, die für das `MediaStreamTrack` verfügbar sind.
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
  - : Gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt zurück, das die derzeit gesetzten Einschränkungen für den Track enthält; der zurückgegebene Wert entspricht den zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegten Einschränkungen.
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
  - : Gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt zurück, das die aktuellen Werte jeder einschränkbaren Eigenschaft des `MediaStreamTrack` enthält.
- [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)
  - : Stoppt das Abspielen der mit dem Track assoziierten Quelle, sowohl die Quelle als auch der Track werden disassoziiert. Der Track-Status wird auf `ended` gesetzt.

## Ereignisse

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle ab:

- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
  - : Wird gesendet, wenn die Wiedergabe des Tracks endet (wenn sich der Wert [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) auf `ended` ändert), außer wenn der Track durch Aufrufen von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) beendet wird.
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
  - : Wird an den `MediaStreamTrack` gesendet, wenn der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft auf `true` geändert wird, was anzeigt, dass der Track vorübergehend keine Daten bereitstellen kann (z. B. wenn das Netzwerk eine Dienststörung erfährt).
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Wird an den Track gesendet, wenn wieder Daten verfügbar werden, wodurch der `muted`-Status endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
