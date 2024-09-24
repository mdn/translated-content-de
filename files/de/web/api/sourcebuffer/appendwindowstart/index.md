---
title: "SourceBuffer: appendWindowStart-Eigenschaft"
short-title: appendWindowStart
slug: Web/API/SourceBuffer/appendWindowStart
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`appendWindowStart`**-Eigenschaft der
{{domxref("SourceBuffer")}}-Schnittstelle steuert den Zeitstempel für den Beginn des [Anfügefensters](https://w3c.github.io/media-source/#append-window), einen
Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediadaten an den
`SourceBuffer` angefügt werden. Kodierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden angefügt, während solche außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowStart` ist die Präsentationsstartzeit,
was die Startzeit der abspielbaren Medien ist.

## Wert

Ein Double, das die Startzeit des Anfügefensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können auftreten, wenn ein neuer Wert für diese Eigenschaft gesetzt wird:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, den Wert auf weniger als 0 oder auf einen Wert größer oder gleich
    {{domxref("SourceBuffer.appendWindowEnd")}} zu setzen.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn dieses {{domxref("SourceBuffer")}}-Objekt gerade aktualisiert wird (d. h.
    seine {{domxref("SourceBuffer.updating")}}-Eigenschaft ist
    momentan `true`), oder dieser `SourceBuffer` wurde aus dem {{domxref("MediaSource")}} entfernt.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
