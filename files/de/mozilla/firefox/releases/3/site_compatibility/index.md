---
title: Seitenkompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Diese Seite versucht einen Überblick über die Änderungen zwischen Gecko 1.8 und Gecko 1.9 zu geben, die möglicherweise Websites in ihrem Verhalten oder Rendering beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3).

## Ereignisse

### Capturing Load-Event-Listener

In Gecko 1.8 war es nicht möglich, Capturing Load-Event-Listener auf Bildern zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die fälschlicherweise ihre Event-Listener so eingestellt haben, dass sie das Laden-Ereignis erfassen. Siehe die Diskussion in [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betreffende Seite keinen Capturing Load-Event-Listener setzen.

Zum Beispiel, dies:

```js
window.addEventListener("load", yourFunction, true);
```

sollte so geändert werden:

```js
window.addEventListener("load", yourFunction, false);
```

Eine Erklärung, wie die Ereigniserfassung funktioniert, finden Sie unter [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble`, um zu verhindern, dass Ereignisse nach oben bubbeln. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 funktioniert. Der Patch in [Firefox-Bug 330494](https://bugzil.la/330494) hat dies bewirkt. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Ereignis-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und `window.routeEvent` gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es wurde eine Zeit lang während der Entwicklung von Firefox 3 erzwungen, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## Ranges

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schneidet. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich, daher wurde sie in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Weitere Informationen zur Verwendung von `compareBoundaryPoints` finden Sie in der Dokumentation zu [intersectsNode](/de/docs/Web/API/Range/intersectsNode).

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schneidet. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich, daher wurde sie in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Weitere Informationen zur Verwendung von `compareBoundaryPoints` finden Sie in der Dokumentation zu [compareNode](/de/docs/Web/API/Range/compareNode).

## HTML

### Viele Fehler im `<object>` wurden behoben

`object`- und `embed`-Elemente benötigen jetzt kein `type`-Attribut mehr, um dargestellt zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert nun korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat nun Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (das gilt nicht für `embed`).
