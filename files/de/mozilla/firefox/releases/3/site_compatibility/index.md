---
title: Kompatibilität der Website für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Diese Seite versucht, einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise das Verhalten oder die Darstellung von Webseiten beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3).

## Ereignisse

### Erfassen von Ladeereignis-Listenern

In Gecko 1.8 war es nicht möglich, erfassende Ladeereignis-Listener auf Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Ereignis-Listener fälschlicherweise so eingestellt haben, dass sie das Ladeereignis erfassen. Siehe die Diskussion in [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die problematische Seite den erfassenden Ladeereignis-Listener nicht setzen.

Zum Beispiel sollte dies:

```js
window.addEventListener("load", yourFunction, true);
```

in dies geändert werden:

```js
window.addEventListener("load", yourFunction, false);
```

Für eine Erklärung, wie Ereigniserfassung funktioniert, siehe [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` auf Ereignissen, um zu verhindern, dass Ereignisse nach oben weitergegeben werden. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 einwandfrei funktioniert. Der Patch im [Firefox-Bug 330494](https://bugzil.la/330494) führte zu dieser Änderung. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige weitere alte Ereignis-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und `window.routeEvent` gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es wurde zeitweise während der Entwicklung von Firefox 3 erzwungen, aber zu viele Seiten brechen, wenn diese Regel erzwungen wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine bessere zukünftige Kompatibilität zu befolgen.

## Bereiche

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schneidet. Da jedoch die Rückgabewerte dieser Funktion verwirrend und selten nützlich waren, wurde sie in Gecko 1.9 entfernt. Stattdessen sollten Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwenden. Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) entfernte diese Funktion.

Siehe die Dokumentation für [intersectsNode](/de/docs/Web/API/Range/intersectsNode), um zu erfahren, wie `compareBoundaryPoints` verwendet wird.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schnitt. Da jedoch die Rückgabewerte dieser Funktion verwirrend und selten nützlich waren, wurde sie in Gecko 1.9 entfernt. Stattdessen sollten Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwenden. Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) entfernte diese Funktion.

Siehe die Dokumentation für [compareNode](/de/docs/Web/API/Range/compareNode), um zu erfahren, wie `compareBoundaryPoints` verwendet wird.

## HTML

### Viele Fehler im `<object>` wurden behoben

Die `object`- und `embed`-Elemente benötigen kein `type`-Attribut mehr, um gerendert zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat nun Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies gilt nicht für `embed`).
