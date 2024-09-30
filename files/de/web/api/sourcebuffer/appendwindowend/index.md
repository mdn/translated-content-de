---
title: "SourceBuffer: appendWindowEnd-Eigenschaft"
short-title: appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendWindowEnd`**-Eigenschaft der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle steuert den Zeitstempel für das Ende des [append window](https://w3c.github.io/media-source/#append-window), eines Zeitstempelbereichs, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Kodierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während solche außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowEnd` ist positive Unendlichkeit.

## Wert

Ein Double, der die Endzeit des append window in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert kleiner oder gleich [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart) oder `NaN` zu setzen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt gerade aktualisiert wird (d.h. die [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft ist derzeit `true`), oder dieses `SourceBuffer` wurde aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
