---
title: "HTMLMediaElement: load() Methode"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die Methode **`load()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) setzt das Medienelement in seinen Anfangszustand zurück und beginnt mit der Auswahl einer Medienquelle und dem Laden des Mediums, um die Wiedergabe von Anfang an vorzubereiten.

Die Menge der vorab geladenen Mediendaten wird durch den Wert des [`preload`](/de/docs/Web/HTML/Element/video#preload)-Attributs des Elements bestimmt.

Diese Methode ist im Allgemeinen nur dann nützlich, wenn Sie dynamische Änderungen an der Menge der für das Medienelement verfügbaren Quellen vorgenommen haben, sei es durch Ändern des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs des Elements oder durch Hinzufügen oder Entfernen von innerhalb des Medienelements eingebetteten {{HTMLElement("source")}}-Elementen. `load()` setzt das Element zurück und durchsucht die verfügbaren Quellen erneut, wodurch die Änderungen wirksam werden.

## Syntax

```js-nolint
load()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Anwendungshinweise

Das Aufrufen von `load()` bricht alle laufenden Vorgänge im Zusammenhang mit diesem Medienelement ab und beginnt dann mit der Auswahl und dem Laden einer geeigneten Medienressource basierend auf den im {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element und dessen [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut oder untergeordneten {{HTMLElement("source")}}-Element(en) angegebenen Optionen. Dies wird ausführlicher auf der Seite [HTML-Video und -Audio verwenden](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#using_multiple_source_formats_to_improve_compatibility) beschrieben.

Das Abbrechen von laufenden Aktivitäten führt dazu, dass alle ausstehenden {{jsxref("Promise")}}s, die von [`play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wurden, je nach Status erfüllt oder abgelehnt werden, bevor das Laden neuer Medien beginnen kann. Ausstehende Wiedergabeversprechen werden mit einem `"AbortError"` [`DOMException`](/de/docs/Web/API/DOMException) abgebrochen.

Entsprechende Ereignisse werden an das Medienelement selbst gesendet, während der Ladeprozess fortschreitet:

- Wenn das Element bereits dabei ist, Medien zu laden, wird dieser Ladeprozess abgebrochen und das **[`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)**-Ereignis gesendet.
- Wenn das Element bereits mit Medien initialisiert wurde, wird das **[`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)**-Ereignis gesendet.
- Wenn das Zurücksetzen der Wiedergabeposition auf den Anfang des Mediums tatsächlich die Wiedergabeposition ändert (d. h., die Position war nicht bereits am Anfang), wird ein **[`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)**-Ereignis gesendet.
- Sobald Medien ausgewählt wurden und das Laden bereit ist zu beginnen, wird das **[`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)**-Ereignis ausgeliefert.
- Von diesem Punkt an werden Ereignisse wie bei jedem Medienladen gesendet.

## Beispiele

Dieses Beispiel findet ein {{HTMLElement("video")}}-Element im Dokument und setzt es zurück, indem `load()` aufgerufen wird.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
