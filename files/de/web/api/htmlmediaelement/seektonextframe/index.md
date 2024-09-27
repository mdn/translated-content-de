---
title: "HTMLMediaElement: seekToNextFrame() Methode"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`HTMLMediaElement.seekToNextFrame()`** Methode
verschiebt asynchron die aktuelle Abspielposition zum nächsten Frame im Medium.

> [!WARNING]
> Diese nicht-standardisierte Methode ist Teil eines Experimentierprozesses zur Unterstützung von
> nicht-echtzeitlichem Zugang zu Medien für Aufgaben wie Filterung, Bearbeitung und Ähnliches.
> Sie sollten diese Methode _nicht_ im Produktionscode verwenden, da ihre Implementierung
> sich ändern kann—oder sogar ganz entfernt werden kann—ohne Ankündigung. Sie sind jedoch eingeladen,
> damit zu experimentieren.

Diese Methode ermöglicht es Ihnen, auf Frames von Videomedien zuzugreifen, ohne dass das Medium in
Echtzeit abgespielt wird. Dies ermöglicht es auch, Medien mit Frames als Suchgröße statt
Zeitcodes zu verwenden (wenn auch nur durch das Suchen eines Frames nach dem anderen, bis Sie den gewünschten Frame erreichen). Mögliche Verwendungen dieser Methode umfassen die Filterung und Bearbeitung von Videoinhalten.

Diese Methode gibt sofort ein {{jsxref("Promise")}} zurück, dessen Erfüllungs-Handler aufgerufen wird, wenn der Suchvorgang abgeschlossen ist. Zusätzlich wird ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis gesendet, um interessierte Parteien darüber zu informieren, dass eine Suche stattgefunden hat. Wenn die Suche fehlschlägt, weil das Medium bereits im letzten Frame ist, tritt ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis auf, gefolgt direkt von einem [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis.

Wenn kein Video auf dem Medienelement vorhanden ist oder das Medium nicht suchbar ist, passiert nichts.

## Syntax

```js-nolint
seekToNextFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Suchvorgang abgeschlossen ist.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
