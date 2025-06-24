---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaStreamTrack`**-Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert eine einzelne Medienspur innerhalb eines Streams. Typischerweise handelt es sich um Audio- oder Videospuren, aber es können auch andere Spurtypen existieren.

Einige User Agents unterklassifizieren dieses Interface, um genauere Informationen oder Funktionalitäten bereitzustellen, wie z.B. [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Zusätzlich zu den unten aufgelisteten Eigenschaften verfügt `MediaStreamTrack` über einschränkbare Eigenschaften, die mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzt und mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen werden können. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um zu erfahren, wie man korrekt mit einschränkbaren Eigenschaften arbeitet. Bei falscher Anwendung wird Ihr Code unzuverlässig.

- [`MediaStreamTrack.contentHint`](/de/docs/Web/API/MediaStreamTrack/contentHint)
  - : Ein String, der von der Webanwendung verwendet werden kann, um einen Hinweis auf die Art des Inhalts der Spur zu geben, um zu steuern, wie diese von API-Verbrauchern behandelt werden sollte. Zulässige Werte hängen vom Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.
- [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)

  - : Ein Boolean, dessen Wert `true` ist, wenn die Spur aktiviert ist, d.h. sie darf den Media-Quellenstrom wiedergeben; oder `false`, wenn sie deaktiviert ist und den Media-Quellenstrom, sondern Stille und Schwärze nicht wiedergibt. Wenn die Spur getrennt wurde, kann dieser Wert geändert werden, hat aber keine Wirkung mehr.

    > [!NOTE]
    > Sie können die Standard-"Stummschalten"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen. Die `muted`-Eigenschaft bezieht sich auf einen Zustand, in dem aufgrund eines technischen Problems keine Medien vorhanden sind.

- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung (GUID) für die Spur enthält; sie wird vom Browser generiert.
- [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der auf `"audio"` gesetzt ist, wenn die Spur eine Audiospur ist, und auf `"video"`, wenn es eine Videospur ist. Dies ändert sich nicht, wenn die Spur von ihrer Quelle getrennt wird.
- [`MediaStreamTrack.label`](/de/docs/Web/API/MediaStreamTrack/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein vom User Agent zugewiesenes Label enthält, das die Spurquelle identifiziert, etwa `"internal microphone"`. Der String kann leer bleiben und ist leer, solange keine Quelle verbunden wurde. Wenn die Spur von ihrer Quelle getrennt wird, ändert sich das Label nicht.
- [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) {{ReadOnlyInline}}

  - : Gibt einen Boolean-Wert zurück, der angibt, ob die Spur aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Sie können die Standard-"Stummschalten"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen, und die Medien wieder aktivieren, indem Sie es zurück auf `true` setzen.

- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten String zurück, der den Status der Spur angibt. Dies wird einer der folgenden Werte sein:
    - `"live"` weist darauf hin, dass ein Eingabegerät angeschlossen ist und sein Bestes gibt, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Ausgabe von Daten mit dem Attribut [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) ein- oder ausgeschaltet werden.
    - `"ended"` zeigt an, dass die Eingabe keine Daten mehr liefert und niemals neue Daten bereitstellen wird.

## Instanz-Methoden

- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
  - : Ermöglicht der Anwendung, die idealen und/oder akzeptablen Wertebereiche für beliebige Anzahl verfügbarer einschränkbarer Eigenschaften des `MediaStreamTrack` festzulegen.
- [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone)
  - : Gibt ein Duplikat des `MediaStreamTrack` zurück.
- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities)
  - : Gibt ein Objekt zurück, das die akzeptierten Werte oder Wertebereiche für jede einschränkbare Eigenschaft des zugehörigen `MediaStreamTrack` detailliert beschreibt.
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
  - : Gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt zurück, das die aktuell gesetzten Einschränkungen für die Spur enthält; der zurückgegebene Wert entspricht den zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzten Einschränkungen.
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
  - : Gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt zurück, das die aktuellen Werte jeder einschränkbaren Eigenschaft des `MediaStreamTrack` enthält.
- [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)
  - : Stoppt die Wiedergabe der mit der Spur verknüpften Quelle, wobei sowohl die Quelle als auch die Spur getrennt werden. Der Spurstatus wird auf `ended` gesetzt.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
  - : Wird gesendet, wenn die Wiedergabe der Spur endet (wenn sich der Wert [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) in `ended` ändert), außer wenn die Spur durch Aufrufen von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) beendet wird.
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
  - : Wird an `MediaStreamTrack` gesendet, wenn der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft auf `true` geändert wird, was darauf hinweist, dass die Spur vorübergehend keine Daten bereitstellen kann (etwa wenn das Netzwerk eine Dienststörung erfährt).
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Wird an die Spur gesendet, wenn Daten wieder verfügbar werden und der `muted`-Zustand beendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
