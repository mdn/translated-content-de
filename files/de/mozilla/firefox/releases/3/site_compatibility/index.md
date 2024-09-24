---
title: Seitenkompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Diese Seite versucht einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise das Verhalten oder die Darstellung von Websites beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Ereignisse

### Erfassen von Load-Event-Listenern

In Gecko 1.8 war es nicht möglich, erfassende Load-Event-Listener auf Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Event-Listener fälschlicherweise so eingestellt haben, dass sie das Load-Ereignis erfassen. Siehe die Diskussion im [Webkit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betreffende Seite keinen erfassenden Load-Event-Listener setzen.

Zum Beispiel, dies:

```bash
window.addEventListener('load', yourFunction, true);
```

sollte in dies geändert werden:

```bash
window.addEventListener('load', yourFunction, false);
```

Für eine Erklärung, wie die Ereigniserfassung funktioniert, siehe [DOM Level 2 Event capture](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` bei Ereignissen, um das Aufwärtsbubblen von Ereignissen zu verhindern. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die standardmäßige [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 gut funktioniert. Der Patch im [Firefox-Bug 330494](https://bugzil.la/330494) hat dies ermöglicht. Siehe auch [Webkit-Bug 105280](https://bugzil.la/105280).

### Ein paar andere alte Event-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und [`window.routeEvent`](/de/docs/Web/API/Window/routeEvent) werden seit Gecko 1.9 nun als veraltet angesehen.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie im [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Derzeit erzwingt Firefox diese Regel nicht (es war während der Entwicklung von Firefox 3 eine Weile der Fall, aber zu viele Websites brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel zu befolgen, um die zukünftige Kompatibilität zu verbessern.

## Ranges

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu prüfen, ob ein Knoten einen Bereich kreuzte. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich und wurden daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Lesen Sie die Dokumentation zu [intersectsNode](/de/docs/Web/API/Range/intersectsNode) für die Verwendung von `compareBoundaryPoints`.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu prüfen, wie ein Knoten einen Bereich kreuzte. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich und wurden daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Lesen Sie die Dokumentation zu [compareNode](/de/docs/Web/API/Range/compareNode) für die Verwendung von `compareBoundaryPoints`.

## HTML

### Viele Fehler im `<object>` wurden behoben

`object`- und `embed`-Elemente benötigen kein `type`-Attribut mehr, um gerendert zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat nun Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies gilt nicht für `embed`).
