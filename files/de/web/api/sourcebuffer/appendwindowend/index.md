---
title: "SourceBuffer: appendWindowEnd-Eigenschaft"
short-title: appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`appendWindowEnd`**-Eigenschaft des {{domxref("SourceBuffer")}}-Interfaces steuert den Zeitstempel für das Ende des [Anfügungsfensters](https://w3c.github.io/media-source/#append-window), ein Zeitstempelbereich, der genutzt werden kann, um zu filtern, welche Mediendaten zum `SourceBuffer` hinzugefügt werden. Codierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.

Der Standardwert von `appendWindowEnd` ist positiv unendlich.

## Wert

Ein Double, das die Endzeit des Anfügungsfensters in Sekunden angibt.

### Ausnahmen

Die folgenden Ausnahmen können auftreten, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf weniger als oder gleich {{domxref("SourceBuffer.appendWindowStart")}} oder `NaN` zu setzen.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn dieses {{domxref("SourceBuffer")}}-Objekt aktualisiert wird (d.h. seine {{domxref("SourceBuffer.updating")}}-Eigenschaft ist aktuell `true`), oder wenn dieser `SourceBuffer` aus dem {{domxref("MediaSource")}} entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
