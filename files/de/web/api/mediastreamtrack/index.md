---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: 11135cdbc0715d066b3aa43c98cef25f91285445
---

{{APIRef("Media Capture and Streams")}}

Die **`MediaStreamTrack`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert eine einzelne Medienspur innerhalb eines Streams; in der Regel handelt es sich dabei um Audio- oder Videospuren, aber auch andere Spurtypen können existieren.

Einige Benutzeragenten unterklassen diese Schnittstelle, um genauere Informationen oder Funktionen bereitzustellen, wie zum Beispiel [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Zusätzlich zu den unten aufgeführten Eigenschaften hat `MediaStreamTrack` einschränkbare Eigenschaften, die mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzt und mit [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abgerufen werden können. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um zu erfahren, wie man korrekt mit einschränkbaren Eigenschaften arbeitet. Ein inkorrektes Vorgehen führt dazu, dass Ihr Code unzuverlässig wird.

- [`MediaStreamTrack.contentHint`](/de/docs/Web/API/MediaStreamTrack/contentHint)
  - : Ein String, der von der Webanwendung verwendet werden kann, um einen Hinweis darauf zu geben, welche Art von Inhalt die Spur enthält, um zu steuern, wie sie von API-Verbrauchern behandelt werden soll. Erlaubte Werte hängen vom Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.
- [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)

  - : Ein Boolean mit dem Wert `true`, wenn die Spur aktiviert ist, das heißt, der Medienquellenstream abgespielt werden darf; oder `false`, wenn sie deaktiviert ist, das heißt, sie stellt den Medienquellenstream nicht dar, sondern liefert Stille und Schwärze. Wenn die Spur getrennt wurde, kann dieser Wert geändert werden, hat jedoch keine weitere Wirkung.

    > [!NOTE]
    > Sie können eine standardmäßige Stummschaltfunktionalität implementieren, indem Sie `enabled` auf `false` setzen. Die `muted`-Eigenschaft bezieht sich auf eine Bedingung, bei der aufgrund eines technischen Problems kein Medium vorhanden ist.

- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung (GUID) für die Spur enthält; sie wird vom Browser generiert.
- [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der auf `"audio"` gesetzt ist, wenn die Spur eine Audiospur ist, und auf `"video"`, wenn sie eine Videospur ist. Es ändert sich nicht, wenn die Spur von ihrer Quelle getrennt wird.
- [`MediaStreamTrack.label`](/de/docs/Web/API/MediaStreamTrack/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine vom Benutzeragenten zugewiesene Kennzeichnung enthält, die die Spurquelle identifiziert, wie in `"internal microphone"`. Der String kann leer bleiben und ist leer, solange keine Quelle verbunden ist. Wenn die Spur von ihrer Quelle getrennt wird, ändert sich die Kennzeichnung nicht.
- [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) {{ReadOnlyInline}}

  - : Gibt einen Boolean-Wert zurück, der angibt, ob die Spur aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Sie können eine standardmäßige Stummschaltfunktionalität implementieren, indem Sie `enabled` auf `false` setzen und das Medium durch Zurücksetzen auf `true` wieder aktivieren.

- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) {{ReadOnlyInline}}

  - : Gibt einen enumerierten String zurück, der den Status der Spur angibt. Dies ist einer der folgenden Werte:

    - `"live"`, was bedeutet, dass ein Eingang verbunden ist und sein Bestes tut, um in Echtzeit Daten bereitzustellen. In diesem Fall kann die Ausgabe der Daten über das Attribut [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) ein- oder ausgeschaltet werden.
    - `"ended"`, was bedeutet, dass der Eingang keine Daten mehr liefert und auch keine neuen Daten mehr bereitstellen wird.

## Instanz-Methoden

- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
  - : Ermöglicht der Anwendung, die idealen und/oder akzeptablen Wertebereiche für eine beliebige Anzahl der verfügbaren einschränkbaren Eigenschaften der `MediaStreamTrack` vorzugeben.
- [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone)
  - : Gibt eine Kopie der `MediaStreamTrack` zurück.
- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities)
  - : Gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft der zugehörigen `MediaStreamTrack` detailliert beschreibt.
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
  - : Gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt zurück, das die derzeit gesetzten Einschränkungen für die Spur enthält; der zurückgegebene Wert entspricht den zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzten Einschränkungen.
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
  - : Gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt zurück, das die aktuellen Werte jeder der einschränkbaren Eigenschaften der `MediaStreamTrack` enthält.
- [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)
  - : Stoppt das Abspielen der mit der Spur verbundenen Quelle, sowohl die Quelle als auch die Spur werden getrennt. Der Zustand der Spur wird auf `ended` gesetzt.

## Ereignisse

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle:

- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
  - : Wird gesendet, wenn die Wiedergabe der Spur endet (wenn sich der Wert von [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) zu `ended` ändert), außer wenn die Spur durch Aufruf von [`MediaStreamTrack.stop`](/de/docs/Web/API/MediaStreamTrack/stop) beendet wird.
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
  - : Wird an die `MediaStreamTrack` gesendet, wenn der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft auf `true` geändert wird, was anzeigt, dass die Spur vorübergehend keine Daten liefern kann (z.B. wenn das Netzwerk eine Dienststörung hat).
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)
  - : Wird an die Spur gesendet, wenn wieder Daten verfügbar sind und der `muted`-Zustand endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
