---
title: "SourceBuffer: Eigenschaft appendWindowStart"
short-title: appendWindowStart
slug: Web/API/SourceBuffer/appendWindowStart
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowStart`**-Eigenschaft der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle steuert den Zeitstempel für den Anfang des [Anhangsfensters](https://w3c.github.io/media-source/#append-window), einem Zeitstempelbereich, der verwendet werden kann, um festzulegen, welche Mediendaten an den `SourceBuffer` angehängt werden. Codierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden angehängt, während diejenigen außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowStart` ist die Präsentationsstartzeit, die die Anfangszeit des abspielbaren Mediums ist.

## Wert

Ein Gleitkommawert, der die Startzeit des Anhangsfensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert kleiner als 0 oder zu einem Wert größer oder gleich [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd) festzulegen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt aktualisiert wird (d.h. seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft derzeit `true` ist), oder wenn dieses `SourceBuffer` vom [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
