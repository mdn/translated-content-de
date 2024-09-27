---
title: "SourceBuffer: appendWindowEnd Eigenschaft"
short-title: appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowEnd`** Eigenschaft der
[`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle steuert den Zeitstempel für das Ende des [Anhängefensters](https://w3c.github.io/media-source/#append-window), ein
Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten an den
`SourceBuffer` angehängt werden. Codierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden
angehängt, während diejenigen außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowEnd` ist positive Unendlichkeit.

## Wert

Ein Double, das die Endzeit des Anhängefensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert auf kleiner oder gleich
    [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart) oder `NaN` zu setzen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Objekt aktualisiert wird (d.h.
    seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) Eigenschaft ist
    derzeit `true`), oder dieses `SourceBuffer` von dem [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
