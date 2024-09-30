---
title: Seitenkompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Diese Seite versucht einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise das Verhalten oder die Darstellung von Websites beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Events

### Erfassen von Load-Event-Listenern

In Gecko 1.8 war es nicht möglich, erfassende Load-Event-Listener für Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Event-Listener fälschlicherweise so einstellen, dass sie das Load-Event erfassen. Siehe die Diskussion in [Webkit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betroffene Seite keinen erfassenden Load-Event-Listener setzen.

Zum Beispiel sollte dies:

```bash
window.addEventListener('load', yourFunction, true);
```

in dies geändert werden:

```bash
window.addEventListener('load', yourFunction, false);
```

Für eine Erklärung, wie Event-Capture funktioniert, siehe [DOM Level 2 Event capture](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` auf Events, um zu verhindern, dass Events nach oben gebubbelt werden. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 gut funktioniert. Der Patch in [Firefox-Bug 330494](https://bugzil.la/330494) hat dies ermöglicht. Siehe auch [Webkit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Event-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und [`window.routeEvent`](/de/docs/Web/API/Window/routeEvent) gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten geklont werden, indem [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder adaptiert, indem [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) verwendet wird, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es gab eine Zeit während der Entwicklung von Firefox 3, in der dies der Fall war, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um die Regel für eine verbesserte zukünftige Kompatibilität einzuhalten.

## Ranges

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten eine Schnittmenge mit einem Bereich aufweist. Allerdings waren die Rückgabewerte dieser Funktion verwirrend und selten nützlich und wurde daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die genauere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation zu [intersectsNode](/de/docs/Web/API/Range/intersectsNode) für die Verwendung von `compareBoundaryPoints`.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten eine Schnittmenge mit einem Bereich aufwies. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich und wurde daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die genauere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation zu [compareNode](/de/docs/Web/API/Range/compareNode) für die Verwendung von `compareBoundaryPoints`.

## HTML

### Viele Bugs in `<object>` wurden behoben

`object` und `embed` Elemente benötigen nicht mehr zwingend ein `type` Attribut, um dargestellt zu werden. Das Ändern des `src` Attributs (von `<embed>`) oder des `data` Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat jetzt Vorrang vor dem `type` Attribut eines `<object>` Elements gemäß der HTML-Spezifikation (dies ist bei `embed` nicht der Fall).
