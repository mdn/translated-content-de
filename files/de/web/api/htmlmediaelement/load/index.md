---
title: "HTMLMediaElement: load()-Methode"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die Methode **`load()`** des {{domxref("HTMLMediaElement")}} setzt das Media-Element in seinen ursprünglichen Zustand zurück und beginnt mit der Auswahl einer Medienquelle und dem Laden der Medien, um die Wiedergabe von Anfang an zu starten.

Die Menge der vorab geladenen Mediendaten wird durch den Wert des [`preload`](/de/docs/Web/HTML/Element/video#preload)-Attributs des Elements bestimmt.

Diese Methode ist im Allgemeinen nur nützlich, wenn Sie dynamische Änderungen an der Menge der verfügbaren Quellen für das Media-Element vorgenommen haben, entweder durch Ändern des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs des Elements oder durch Hinzufügen oder Entfernen von {{HTMLElement("source")}}-Elementen, die innerhalb des Media-Elements selbst verschachtelt sind. `load()` wird das Element zurücksetzen und die verfügbaren Quellen erneut scannen, wodurch die Änderungen wirksam werden.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Verwendungshinweise

Das Aufrufen von `load()` bricht alle laufenden Vorgänge, die dieses Media-Element betreffen, ab und beginnt dann den Prozess der Auswahl und des Lades einer geeigneten Medienressource gemäß den im {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element und dessen [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut oder Kind{{HTMLElement("source")}}-Element(e) angegebenen Optionen. Dies wird im Abschnitt [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#using_multiple_source_formats_to_improve_compatibility) ausführlicher beschrieben.

Das Abbrechen laufender Aktivitäten führt dazu, dass alle ausstehenden {{jsxref("Promise")}}s, die von {{domxref("HTMLMediaElement.play", "play()")}} zurückgegeben werden, je nach ihrem Status erfüllt oder abgelehnt werden, bevor das Laden neuer Medien beginnen kann. Ausstehende Wiedergabe-Promises werden mit einem `"AbortError"` {{domxref("DOMException")}} abgebrochen.

Während des Ladeprozesses werden geeignete Ereignisse an das Media-Element selbst gesendet:

- Wenn sich das Element bereits im Prozess des Ladens von Medien befindet, wird dieser Ladeprozess abgebrochen und das **{{domxref("HTMLMediaElement/abort_event", "abort")}}**-Ereignis gesendet.
- Wenn das Element bereits mit Medien initialisiert wurde, wird das **{{domxref("HTMLMediaElement/emptied_event", "emptied")}}**-Ereignis gesendet.
- Wenn das Zurücksetzen der Wiedergabeposition auf den Anfang der Medien tatsächlich die Wiedergabeposition verändert (d.h. sie war nicht bereits am Anfang), wird ein **{{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}**-Ereignis gesendet.
- Sobald Medien ausgewählt wurden und das Laden bereit ist zu beginnen, wird das **{{domxref("HTMLMediaElement/loadstart_event", "loadstart")}}**-Ereignis ausgelöst.
- Ab diesem Punkt werden Ereignisse wie bei jedem Medienladevorgang gesendet.

## Beispiele

Dieses Beispiel findet ein {{HTMLElement("video")}}-Element im Dokument und setzt es durch Aufruf von `load()` zurück.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
