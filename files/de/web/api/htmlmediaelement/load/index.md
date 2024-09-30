---
title: "HTMLMediaElement: load() Methode"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die Methode **`load()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) setzt das Media-Element in seinen Anfangszustand zurück und beginnt den Prozess der Auswahl einer Medienquelle und des Ladens der Medien, um die Wiedergabe von Anfang an vorzubereiten.

Die Menge an vorab geladenen Mediendaten wird durch den Wert des [`preload`](/de/docs/Web/HTML/Element/video#preload)-Attributs des Elements bestimmt.

Diese Methode ist im Allgemeinen nur nützlich, wenn Sie dynamische Änderungen an der Menge der für das Media-Element verfügbaren Quellen vorgenommen haben, entweder durch Ändern des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs des Elements oder durch Hinzufügen oder Entfernen von verschachtelten {{HTMLElement("source")}}-Elementen innerhalb des Media-Elements selbst. `load()` wird das Element zurücksetzen und die verfügbaren Quellen erneut scannen und so die Änderungen wirksam werden lassen.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

Der Aufruf von `load()` bricht alle laufenden Operationen, die dieses Media-Element betreffen, ab und beginnt dann den Prozess der Auswahl und des Ladens einer geeigneten Medienressource unter Berücksichtigung der im {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element und seinem [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut oder untergeordneten {{HTMLElement("source")}}-Element(en) angegebenen Optionen. Dies wird ausführlicher auf der Seite [Video und Audio-Inhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#using_multiple_source_formats_to_improve_compatibility) beschrieben.

Der Prozess des Abbruchs von laufenden Aktivitäten führt dazu, dass alle ausstehenden {{jsxref("Promise")}}s, die von [`play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wurden, erfüllt oder abgelehnt werden, je nach ihrem Status, bevor das Laden der neuen Medien beginnen kann. Ausstehende Wiedergabeversprechen werden mit einem `"AbortError"` [`DOMException`](/de/docs/Web/API/DOMException) abgebrochen.

Entsprechende Ereignisse werden an das Media-Element selbst gesendet, während der Ladeprozess fortschreitet:

- Wenn das Element bereits im Prozess des Ladens von Medien ist, wird dieser Ladeprozess abgebrochen und das **[`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)**-Ereignis wird gesendet.
- Wenn das Element bereits mit Medien initialisiert wurde, wird das **[`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)**-Ereignis gesendet.
- Wenn das Zurücksetzen der Wiedergabeposition auf den Anfang des Mediums tatsächlich die Wiedergabeposition verändert (d. h. es war nicht bereits am Anfang), wird ein **[`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)**-Ereignis gesendet.
- Sobald Medien ausgewählt wurden und das Laden bereit ist zu beginnen, wird das **[`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)**-Ereignis ausgeliefert.
- Von diesem Punkt an werden Ereignisse wie bei jedem Medienladen gesendet.

## Beispiele

Dieses Beispiel findet ein {{HTMLElement("video")}}-Element im Dokument und setzt es durch den Aufruf von `load()` zurück.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
