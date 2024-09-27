---
title: "HTMLMediaElement: load() Methode"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die Methode **`load()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) setzt das Media-Element auf seinen Anfangszustand zurück und beginnt die Auswahl einer Medienquelle und das Laden der Medien, um die Wiedergabe von Anfang an vorzubereiten.

Die Menge der Medieninhalte, die vorab geladen werden, wird durch den Wert des [`preload`](/de/docs/Web/HTML/Element/video#preload) Attributs des Elements bestimmt.

Diese Methode ist im Allgemeinen nur dann nützlich, wenn Sie dynamische Änderungen an der Menge der verfügbaren Quellen für das Media-Element vorgenommen haben, entweder durch Ändern des [`src`](/de/docs/Web/HTML/Element/video#src) Attributs des Elements oder durch Hinzufügen oder Entfernen von {{HTMLElement("source")}} Elementen, die innerhalb des Media-Elements selbst verschachtelt sind. `load()` setzt das Element zurück und durchsucht die verfügbaren Quellen erneut, sodass die Änderungen wirksam werden.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Das Aufrufen von `load()` bricht alle laufenden Operationen mit diesem Media-Element ab und beginnt dann mit der Auswahl und dem Laden einer geeigneten Medienressource auf Basis der im {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element und seinem [`src`](/de/docs/Web/HTML/Element/video#src) Attribut oder den untergeordneten {{HTMLElement("source")}} Elementen angegebenen Optionen. Dies wird genauer auf der Seite [Video- und Audiomaterial](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#using_multiple_source_formats_to_improve_compatibility) beschrieben.

Der Abbruch laufender Aktivitäten führt dazu, dass alle noch ausstehenden {{jsxref("Promise")}}s, die von [`play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wurden, entsprechend ihrem Status entweder erfüllt oder abgelehnt werden, bevor das Laden neuer Medien beginnen kann. Ausstehende Play-Promises werden mit einem `"AbortError"` [`DOMException`](/de/docs/Web/API/DOMException) abgebrochen.

Während des Ladeprozesses werden dem Media-Element selbst entsprechende Ereignisse gesendet:

- Wenn das Element bereits dabei ist, Medien zu laden, wird dieser Ladevorgang abgebrochen und das **[`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)** Ereignis wird gesendet.
- Wenn das Element bereits mit Medien initialisiert wurde, wird das **[`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)** Ereignis gesendet.
- Wenn das Zurücksetzen der Wiedergabeposition auf den Anfang der Medien tatsächlich die Wiedergabeposition ändert (das heißt, es war nicht bereits am Anfang), wird ein **[`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)** Ereignis gesendet.
- Sobald Medien ausgewählt wurden und das Laden beginnen kann, wird das **[`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)** Ereignis gesendet.
- Ab diesem Punkt werden Ereignisse wie bei jedem Medienladen gesendet.

## Beispiele

Dieses Beispiel findet ein {{HTMLElement("video")}} Element im Dokument und setzt es durch Aufrufen von `load()` zurück.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
