---
title: "HTMLMediaElement: load()-Methode"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die Methode **`load()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) setzt das Media-Element in seinen Ausgangszustand zurück und beginnt den Prozess der Auswahl einer Medienquelle und des Ladens der Medien, um die Wiedergabe von Anfang an zu starten.

Die Menge der vorab geladenen Mediendaten wird durch den Wert des [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)-Attributs des Elements bestimmt.

Diese Methode ist im Allgemeinen nur nützlich, wenn Sie dynamische Änderungen an der Menge der für das Media-Element verfügbaren Quellen vorgenommen haben, entweder indem Sie das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut des Elements ändern oder indem Sie {{HTMLElement("source")}}-Elemente innerhalb des Media-Elements selbst hinzufügen oder entfernen. `load()` wird das Element zurücksetzen und die verfügbaren Quellen erneut durchsuchen, wodurch die Änderungen wirksam werden.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Anwendungshinweise

Das Aufrufen von `load()` bricht alle laufenden Operationen mit diesem Media-Element ab und beginnt dann den Prozess der Auswahl und des Ladens einer geeigneten Medienressource, basierend auf den im {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut oder untergeordneten {{HTMLElement("source")}}-Elementen angegebenen Optionen. Dies wird detaillierter auf der Seite [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#using_multiple_source_formats_to_improve_compatibility) beschrieben.

Der Abbruch von laufenden Aktivitäten führt dazu, dass alle noch ausstehenden {{jsxref("Promise")}}s, die von [`play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben werden, entsprechend ihrem Status erfüllt oder abgelehnt werden, bevor das Laden neuer Medien beginnen kann. Ausstehende Wiedergabe-Promises werden mit einem `"AbortError"` [`DOMException`](/de/docs/Web/API/DOMException) abgebrochen.

Den Mediendateien selbst werden während des Ladeprozesses entsprechende Events gesendet:

- Wenn das Element bereits dabei ist, Medien zu laden, wird dieser Ladevorgang abgebrochen und das **[`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)**-Ereignis wird gesendet.
- Wenn das Element bereits mit Medien initialisiert wurde, wird das **[`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)**-Ereignis gesendet.
- Wenn das Zurücksetzen der Wiedergabeposition auf den Anfang des Mediums die Wiedergabeposition tatsächlich ändert (das heißt, sie war nicht bereits am Anfang), wird ein **[`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)**-Ereignis gesendet.
- Sobald Medien ausgewählt sind und das Laden beginnen kann, wird das **[`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)**-Ereignis ausgelöst.
- Von diesem Punkt an werden Ereignisse wie bei jedem Medialadevorgang gesendet.

## Beispiele

Dieses Beispiel findet ein {{HTMLElement("video")}}-Element im Dokument und setzt es durch Aufrufen von `load()` zurück.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
