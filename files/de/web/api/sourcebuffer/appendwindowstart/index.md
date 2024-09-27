---
title: "SourceBuffer: appendWindowStart-Eigenschaft"
short-title: appendWindowStart
slug: Web/API/SourceBuffer/appendWindowStart
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowStart`**-Eigenschaft des
[`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces kontrolliert den Zeitstempel für den Beginn des [Append-Fensters](https://w3c.github.io/media-source/#append-window), ein
Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten zum
`SourceBuffer` hinzugefügt werden. Kodierte Medienbilder mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowStart` entspricht der Wiedergabestartzeit,
welche die Anfangszeit der abspielbaren Medien darstellt.

## Wert

Ein Double, das die Startzeit des Append-Fensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können beim Festlegen eines neuen Wertes für diese Eigenschaft ausgelöst werden:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert auf weniger als 0 oder auf einen Wert größer
    oder gleich
    [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd) zu setzen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt gerade aktualisiert wird (d.h.
    seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft ist
    derzeit `true`), oder dieses `SourceBuffer` wurde
    vom [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
