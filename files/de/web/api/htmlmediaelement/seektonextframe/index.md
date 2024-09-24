---
title: "HTMLMediaElement: seekToNextFrame() Methode"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`HTMLMediaElement.seekToNextFrame()`** Methode
verschiebt asynchron die aktuelle Wiedergabeposition auf den nächsten Frame im Medium.

> [!WARNING]
> Diese nicht standardisierte Methode ist Teil eines Experimentierprozesses, um die Unterstützung für
> den nicht in Echtzeit erfolgenden Zugriff auf Medien für Aufgaben wie Filterung, Bearbeitung usw. zu erproben.
> Sie sollten diese Methode _nicht_ in Produktionscode verwenden, da ihre Implementierung
> sich ohne Vorankündigung ändern kann oder vollständig entfernt werden könnte. Sie sind jedoch eingeladen,
> damit zu experimentieren.

Diese Methode ermöglicht Ihnen den Zugriff auf Einzelbilder von Videomedien, ohne dass das Medium in
Echtzeit abgespielt wird. Dadurch können Sie auf Medien zugreifen, indem Sie Frames als Suchkriterium anstelle von
Zeitcodes verwenden (allerdings nur durch das Suchen einzelner Frames, bis Sie zum gewünschten Frame gelangen). Mögliche Verwendungen dieser Methode umfassen die Filterung und Bearbeitung von Videoinhalten.

Diese Methode gibt sofort zurück und liefert ein {{jsxref("Promise")}}, dessen Fulfillment-Handler aufgerufen wird, wenn die Suchoperation abgeschlossen ist. Zusätzlich wird ein
{{domxref("HTMLMediaElement/seeked_event", "seeked")}}-Ereignis gesendet, um Interessenten darüber zu informieren, dass eine Suche stattgefunden hat. Wenn die Suche fehlschlägt, weil das Medium bereits am letzten Frame ist, tritt ein
{{domxref("HTMLMediaElement/seeked_event", "seeked")}}-Ereignis auf, gefolgt unmittelbar von einem {{domxref("HTMLMediaElement/ended_event", "ended")}}-Ereignis.

Wenn es kein Video auf dem Medien-Element gibt oder das Medium nicht durchsuchbar ist, passiert nichts.

## Syntax

```js-nolint
seekToNextFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Suchoperation abgeschlossen ist.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
