---
title: "HTMLMediaElement: Methode seekToNextFrame()"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

Die Methode **`HTMLMediaElement.seekToNextFrame()`** verschiebt asynchron die aktuelle Wiedergabeposition auf den nächsten Frame im Medium.

> [!WARNING]
> Diese nicht standardisierte Methode ist Teil eines Experimentierprozesses zur Unterstützung von nicht-echtzeitfähigem Zugriff auf Medien für Aufgaben wie Filterung, Bearbeitung usw. Sie sollten diese Methode _nicht_ in Produktionscode verwenden, da ihre Implementierung sich ändern oder ohne Vorankündigung entfernt werden kann. Sie sind jedoch eingeladen, damit zu experimentieren.

Diese Methode ermöglicht den Zugriff auf Frames von Videomedien, ohne dass die Medien in Echtzeit ausgeführt werden. Sie ermöglicht auch den Zugriff auf Medien unter Verwendung von Frames als Suchkriterium anstelle von Zeitcodes (wenn auch nur, indem Sie einen Frame nach dem anderen suchen, bis Sie den gewünschten Frame erreichen). Mögliche Einsatzgebiete für diese Methode umfassen die Filterung und Bearbeitung von Videoinhalten.

Diese Methode gibt sofort eine {{jsxref("Promise")}} zurück, dessen Erfüllungshandler aufgerufen wird, wenn der Suchvorgang abgeschlossen ist. Zusätzlich wird ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis gesendet, um interessierte Parteien darüber zu informieren, dass eine Suche stattgefunden hat. Wenn die Suche fehlschlägt, weil das Medium bereits am letzten Frame ist, tritt ein [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis auf, gefolgt von einem [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis.

Wenn kein Video auf dem Medien-Element vorhanden ist oder das Medium nicht durchsuchbar ist, passiert nichts.

## Syntax

```js-nolint
seekToNextFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der erfüllt wird, sobald der Suchvorgang abgeschlossen ist.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
