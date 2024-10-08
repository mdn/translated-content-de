---
title: OverconstrainedError
slug: Web/API/OverconstrainedError
l10n:
  sourceCommit: 3178e38ae397032bd9c44d5ec6f8192ee391b56a
---

{{APIRef("Media Capture and Streams")}}

Die **`OverconstrainedError`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zeigt an, dass der gewünschte Satz von Fähigkeiten für den aktuellen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit nicht erfüllt werden kann. Wenn dieses Ereignis auf einem MediaStreamTrack ausgelöst wird, wird dieser stummgeschaltet, bis entweder die aktuellen Einschränkungen hergestellt werden können oder bis erfüllbare Einschränkungen angewendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`OverconstrainedError()`](/de/docs/Web/API/OverconstrainedError/OverconstrainedError)
  - : Erstellt ein neues `OverconstrainedError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`OverconstrainedError.constraint`](/de/docs/Web/API/OverconstrainedError/constraint) {{ReadOnlyInline}}
  - : Gibt die Einschränkung zurück, die im Konstruktor angegeben wurde, also die Einschränkung, die nicht erfüllt wurde.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`DOMException`](/de/docs/Web/API/DOMException)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
