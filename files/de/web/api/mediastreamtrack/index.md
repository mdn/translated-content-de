---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaStreamTrack`** Interface der {{domxref("Media Capture and Streams API", "", "", "nocode")}} repräsentiert einen einzelnen Medientrack innerhalb eines Streams; typischerweise sind das Audio- oder Videotracks, aber auch andere Track-Typen können existieren.

Einige User Agents erweitern dieses Interface, um präzisere Informationen oder Funktionalitäten bereitzustellen, wie z.B. {{domxref("CanvasCaptureMediaStreamTrack")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Zusätzlich zu den unten aufgeführten Eigenschaften hat `MediaStreamTrack` einschränkbare Eigenschaften, die mit {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} gesetzt werden können und mit {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} und {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} zugänglich sind. Sehen Sie sich [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an, um zu lernen, wie man korrekt mit einschränkbaren Eigenschaften arbeitet. Wird dies nicht korrekt gemacht, wird Ihr Code unzuverlässig.

- {{domxref("MediaStreamTrack.contentHint")}}
  - : Ein String, der von der Webanwendung genutzt werden kann, um einen Hinweis auf den Inhaltstyp des Tracks zu geben, um zu leiten, wie er von API-Verbrauchern behandelt werden soll. Erlaubte Werte hängen vom Wert der {{domxref("MediaStreamTrack.kind")}} Eigenschaft ab.
- {{domxref("MediaStreamTrack.enabled")}}

  - : Ein Boolean, dessen Wert `true` ist, wenn der Track aktiviert ist, also das Medienquelle-Stream rendern darf; oder `false`, wenn er deaktiviert ist, also nicht das Medienquelle-Stream rendern darf, sondern Stille und Dunkelheit. Wenn der Track getrennt wurde, kann dieser Wert geändert werden, hat jedoch keine Wirkung mehr.

    > [!NOTE]
    > Sie können eine Standard-"Stummschalt"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen. Die `muted` Eigenschaft bezieht sich auf einen Zustand, in dem aufgrund eines technischen Problems keine Medien vorhanden sind.

- {{domxref("MediaStreamTrack.id")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung (GUID) für den Track enthält; sie wird vom Browser generiert.
- {{domxref("MediaStreamTrack.kind")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der auf `"audio"` gesetzt ist, wenn der Track ein Audiotrack ist, und auf `"video"`, wenn es ein Videotrack ist. Er ändert sich nicht, wenn der Track von seiner Quelle getrennt wird.
- {{domxref("MediaStreamTrack.label")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der ein vom User Agent zugewiesenes Label enthält, das die Trackquelle identifiziert, wie zum Beispiel `"internal microphone"`. Der String kann leer bleiben und ist leer, solange keine Quelle verbunden wurde. Wenn der Track von seiner Quelle getrennt wird, ändert sich das Label nicht.
- {{domxref("MediaStreamTrack.muted")}} {{ReadOnlyInline}}

  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob der Track aufgrund eines technischen Problems keine Mediendaten bereitstellen kann.

    > [!NOTE]
    > Sie können eine Standard-"Stummschalt"-Funktionalität implementieren, indem Sie `enabled` auf `false` setzen und die Medien wieder entstummen, indem Sie es wieder auf `true` setzen.

- {{domxref("MediaStreamTrack.readyState")}} {{ReadOnlyInline}}

  - : Gibt einen aufgezählten String zurück, der den Status des Tracks angibt. Dies ist einer der folgenden Werte:

    - `"live"`, was anzeigt, dass ein Eingang verbunden ist und sein Bestes gibt, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Datenwiedergabe mit dem {{domxref("MediaStreamTrack.enabled", "enabled")}} Attribut ein- oder ausgeschaltet werden.
    - `"ended"`, was anzeigt, dass der Eingang keine Daten mehr liefert und nie neue Daten bereitstellen wird.

## Instanz-Methoden

- {{domxref("MediaStreamTrack.applyConstraints()")}}
  - : Ermöglicht der Anwendung, die idealen und/oder akzeptablen Wertebereiche für eine beliebige Anzahl der verfügbaren einschränkbaren Eigenschaften des `MediaStreamTrack` anzugeben.
- {{domxref("MediaStreamTrack.clone()")}}
  - : Gibt eine Kopie des `MediaStreamTrack` zurück.
- {{domxref("MediaStreamTrack.getCapabilities()")}}
  - : Gibt die Liste der für den `MediaStreamTrack` verfügbaren einschränkbaren Eigenschaften zurück.
- {{domxref("MediaStreamTrack.getConstraints()")}}
  - : Gibt ein {{domxref('MediaTrackConstraints')}} Objekt zurück, das die aktuell gesetzten Einschränkungen für den Track enthält; der zurückgegebene Wert entspricht den Einschränkungen, die zuletzt mit {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} festgelegt wurden.
- {{domxref("MediaStreamTrack.getSettings()")}}
  - : Gibt ein {{domxref("MediaTrackSettings")}} Objekt zurück, das die aktuellen Werte jeder der einschränkbaren Eigenschaften des `MediaStreamTrack` enthält.
- {{domxref("MediaStreamTrack.stop()")}}
  - : Beendet das Abspielen der Quelle, die mit dem Track verbunden ist, sowohl die Quelle als auch der Track werden getrennt. Der Track-Status wird auf `ended` gesetzt.

## Ereignisse

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder indem Sie einen Event-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen:

- {{domxref("MediaStreamTrack/ended_event", "ended")}}
  - : Wird gesendet, wenn die Wiedergabe des Tracks endet (wenn sich der Wert von {{domxref("MediaStreamTrack.readyState", "readyState")}} zu `ended` ändert), außer wenn der Track durch Aufruf von {{domxref("MediaStreamTrack.stop")}} beendet wird.
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
  - : Wird an den `MediaStreamTrack` gesendet, wenn sich der Wert der {{domxref("MediaStreamTrack.muted", "muted")}} Eigenschaft zu `true` ändert, was darauf hinweist, dass der Track vorübergehend keine Daten bereitstellen kann (zum Beispiel, wenn das Netzwerk einen Dienstfehler erlebt).
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}
  - : Wird gesendet, wenn Daten wieder verfügbar werden und den `muted` Zustand beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStream")}}
