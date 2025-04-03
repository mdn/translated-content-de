---
title: "SourceBuffer: appendWindowEnd-Eigenschaft"
short-title: appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowEnd`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces steuert den Zeitstempel für das Ende des [Append-Fensters](https://w3c.github.io/media-source/#append-window), ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Kodierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowEnd` ist positiv unendlich.

## Wert

Ein Doppelwert, der die Endzeit des Append-Fensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft gesetzt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf einen Wert kleiner oder gleich [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart) oder `NaN` zu setzen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt aktualisiert wird (d.h. seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft derzeit `true` ist) oder dieses `SourceBuffer` aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
