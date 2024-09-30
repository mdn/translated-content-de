---
title: "SourceBuffer: appendWindowStart-Eigenschaft"
short-title: appendWindowStart
slug: Web/API/SourceBuffer/appendWindowStart
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowStart`**-Eigenschaft der
[`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle steuert den Zeitstempel für den Beginn des [Append-Fensters](https://w3c.github.io/media-source/#append-window), ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Kodierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während solche außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowStart` ist die Präsentationsstartzeit, welche die Anfangszeit der abspielbaren Medien ist.

## Wert

Ein Gleitkommawert, der den Startzeitpunkt des Append-Fensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert kleiner als 0 oder auf einen Wert zu setzen, der größer oder gleich
    [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt gerade aktualisiert wird (d.h. seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft derzeit `true` ist) oder dieser `SourceBuffer` aus dem [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
