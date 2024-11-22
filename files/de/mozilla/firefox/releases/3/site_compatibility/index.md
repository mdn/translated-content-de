---
title: Website-Kompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Diese Seite versucht, einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise das Verhalten oder die Darstellung von Websites beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Ereignisse

### Capturing-Load-Event-Listener

In Gecko 1.8 war es nicht möglich, Capturing-Load-Event-Listener auf Bildern zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch auf Websites, die ihre Capture-Load-Event-Listener fälschlicherweise gesetzt haben, zu Problemen führen. Siehe die Diskussion in [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu lösen, sollte die betreffende Seite den Capturing-Load-Event-Listener nicht setzen.

Zum Beispiel sollte dies:

```bash
window.addEventListener('load', yourFunction, true);
```

geändert werden in:

```bash
window.addEventListener('load', yourFunction, false);
```

Für eine Erklärung, wie Ereignis-Capture funktioniert, siehe [DOM Level 2 Event capture](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` bei Ereignissen, um zu verhindern, dass Ereignisse nach oben weitergegeben werden. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 einwandfrei funktioniert. Der Patch in [Firefox-Bug 330494](https://bugzil.la/330494) machte dies möglich. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Ereignis-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und [`window.routeEvent`](/de/docs/Web/API/Window/routeEvent) gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie ins aktuelle Dokument eingefügt werden können. Für mehr Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) Themen, siehe die [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt derzeit diese Regel nicht (sie wurde während der Entwicklung von Firefox 3 eine Zeitlang durchgesetzt, aber zu viele Seiten brachen, wenn diese Regel angewendet wurde). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte künftige Kompatibilität zu beachten.

## Bereiche

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schnitt. Da die Rückgabewerte dieser Funktion jedoch verwirrend und selten nützlich waren, wurde sie in Gecko 1.9 entfernt. Stattdessen sollten Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwenden. Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation zu [intersectsNode](/de/docs/Web/API/Range/intersectsNode), um zu erfahren, wie Sie `compareBoundaryPoints` stattdessen verwenden.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schnitt. Da die Rückgabewerte dieser Funktion jedoch verwirrend und selten nützlich waren, wurde sie in Gecko 1.9 entfernt. Stattdessen sollten Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwenden. Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation zu [compareNode](/de/docs/Web/API/Range/compareNode), um zu erfahren, wie Sie `compareBoundaryPoints` stattdessen verwenden.

## HTML

### Viele Fehler im `<object>` wurden behoben

`object`- und `embed`-Elemente benötigen kein `type`-Attribut mehr, um dargestellt zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat jetzt Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies gilt nicht für `embed`).
