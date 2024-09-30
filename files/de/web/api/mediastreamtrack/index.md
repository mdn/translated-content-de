---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaStreamTrack`**-Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert eine einzelne Medienspur innerhalb eines Streams; typischerweise sind dies Audio- oder Videospuren, aber auch andere Spurtypen können existieren.

Einige User Agents unterklassen dieses Interface, um genauere Informationen oder Funktionalitäten bereitzustellen, wie z. B. [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Zusätzlich zu den unten aufgeführten Eigenschaften hat `MediaStreamTrack` einschränkbare Eigenschaften, die mithilfe von [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzt und über [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen werden können. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um zu lernen, wie man korrekt mit einschränkbaren Eigenschaften arbeitet. Wenn Sie dies nicht korrekt tun, wird Ihr Code unzuverlässig.

- [`MediaStreamTrack.contentHint`](/de/docs/Web/API/MediaStreamTrack/contentHint)
  - : Ein String, den die Webanwendung verwenden kann, um einen Hinweis darauf zu geben, welche Art von Inhalt die Spur enthält, um zu leiten, wie sie von API-Konsumenten behandelt werden sollte. Zulässige Werte hängen vom Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.
- [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)

  - : Ein boolescher Wert, der `true` ist, wenn die Spur aktiviert ist, das heißt, dass der Medienstrom gerendert werden darf; oder `false`, wenn sie deaktiviert ist, das heißt, dass der Medienstrom nicht gerendert wird, sondern Stille und Schwarz zeigt. Wenn die Spur getrennt wurde, kann dieser Wert geändert werden, hat jedoch keine weitere Wirkung.

    > [!NOTE]
    > Sie können die standardmäßige "Stummschaltung" implementieren, indem Sie `enabled` auf `false` setzen. Die Eigenschaft `muted` bezieht sich auf eine Bedingung, in der es aus technischen Gründen keine Medien gibt.

- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung (GUID) für die Spur enthält; sie wird vom Browser generiert.
- [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der auf `"audio"` gesetzt ist, wenn die Spur eine Audiospur ist und auf `"video"`, wenn es sich um eine Videospur handelt. Es ändert sich nicht, wenn die Spur von ihrer Quelle getrennt wird.
- [`MediaStreamTrack.label`](/de/docs/Web/API/MediaStreamTrack/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein vom Benutzeragenten zugewiesenes Label enthält, das die Quellen der Spur identifiziert, wie z. B. `"interner Mikrofon"`. Der String kann leer bleiben und bleibt leer, solange keine Quelle verbunden ist. Wenn die Spur von ihrer Quelle getrennt ist, wird das Label nicht geändert.
- [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Spur aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Sie können die standardmäßige "Stummschaltung" implementieren, indem Sie `enabled` auf `false` setzen, und die Stummschaltung aufheben, indem Sie es wieder auf `true` setzen.

- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) {{ReadOnlyInline}}

  - : Gibt einen enumerierten String, der den Status der Spur angibt, zurück. Dies wird einer der folgenden Werte sein:

    - `"live"`, was darauf hinweist, dass ein Eingang verbunden ist und sein Bestes tut, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Ausgabe von Daten mit dem [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Attribut ein- oder ausgeschaltet werden.
    - `"ended"`, was darauf hinweist, dass der Eingang keine Daten mehr bereitstellt und niemals neue Daten liefern wird.

## Methoden der Instanz

- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
  - : Erlaubt der Anwendung, die idealen und/oder Bereiche der akzeptablen Werte für eine beliebige Anzahl der verfügbaren einschränkbaren Eigenschaften des `MediaStreamTrack` anzugeben.
- [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone)
  - : Gibt ein Duplikat des `MediaStreamTrack` zurück.
- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities)
  - : Gibt die Liste der einschränkbaren Eigenschaften zurück, die für den `MediaStreamTrack` verfügbar sind.
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
  - : Gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt zurück, das die derzeit für die Spur gesetzten Einschränkungen enthält; der zurückgegebene Wert entspricht den zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzten Einschränkungen.
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
  - : Gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekt zurück, das die aktuellen Werte der einschränkbaren Eigenschaften des `MediaStreamTrack` enthält.
- [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)
  - : Stoppt das Abspielen der mit der Spur verknüpften Quelle, sowohl die Quelle als auch die Spur werden getrennt. Der Status der Spur wird auf `ended` gesetzt.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen:

- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
  - : Wird gesendet, wenn die Wiedergabe der Spur endet (wenn der Wert [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) auf `ended` wechselt), außer wenn die Spur durch Aufrufen von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) beendet wird.
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
  - : Wird an die `MediaStreamTrack` gesendet, wenn der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft auf `true` geändert wird, was darauf hinweist, dass die Spur vorübergehend keine Daten liefern kann (z. B. wenn das Netzwerk eine Störung hat).
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Wird an die Spur gesendet, wenn wieder Daten verfügbar werden, wodurch der `muted`-Zustand beendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
