---
title: "HTMLMediaElement: seekToNextFrame()-Methode"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`HTMLMediaElement.seekToNextFrame()`**-Methode
bewegt asynchron die aktuelle Wiedergabeposition zur nächsten Frame im Medium.

> [!WARNING]
> Diese nicht-standardisierte Methode ist Teil eines Experimentierprozesses zur Unterstützung des
> nicht-realzeitlichen Zugriffs auf Medien für Aufgaben wie Filtern, Bearbeiten usw.
> Sie sollten _nicht_ diese Methode in produktivem Code verwenden, da deren Implementierung
> sich ändern oder vollständig entfernt werden kann, ohne Vorankündigung. Sie sind jedoch
> eingeladen, damit zu experimentieren.

Diese Methode ermöglicht Ihnen den Zugriff auf Frames von Video-Medien, ohne dass das Medium in Echtzeit wiedergegeben wird. Dies ermöglicht es auch, auf Medien zuzugreifen, indem Frames als Suchkriterium anstelle von Zeitcodes verwendet werden (wenn auch nur, indem man einen Frame nach dem anderen sucht, bis man den gewünschten Frame erreicht). Mögliche Verwendungen für diese Methode umfassen das Filtern und Bearbeiten von Videoinhalten.

Diese Methode gibt sofort zurück und liefert ein {{jsxref("Promise")}}, dessen Fulfillment-Handler aufgerufen wird, wenn die Suchoperation abgeschlossen ist. Zusätzlich wird ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis gesendet, um interessierte Parteien darüber zu informieren, dass eine Suche stattgefunden hat. Wenn die Suche fehlschlägt, weil das Medium bereits am letzten Frame ist, tritt ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis auf, gefolgt unmittelbar von einem [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis.

Wenn kein Video auf dem Medienelement vorhanden ist oder das Medium nicht durchsuchbar ist, passiert nichts.

## Syntax

```js-nolint
seekToNextFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, welcher erfüllt wird, sobald die Suchoperation abgeschlossen ist.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
