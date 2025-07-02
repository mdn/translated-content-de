---
title: Website-Kompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Diese Seite versucht, einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise das Verhalten oder die Darstellung von Websites beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Ereignisse

### Load-Event-Listener im Capture-Modus

In Gecko 1.8 war es nicht möglich, Load-Event-Listener im Capture-Modus für Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Event-Listener fälschlicherweise so gesetzt haben, dass sie das Load-Event im Capture-Modus erfassen. Siehe die Diskussion in [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betroffene Seite keinen Load-Event-Listener im Capture-Modus setzen.

Zum Beispiel sollte dies:

```js
window.addEventListener("load", yourFunction, true);
```

in dies geändert werden:

```js
window.addEventListener("load", yourFunction, false);
```

Eine Erklärung, wie Event-Capturing funktioniert, finden Sie unter [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` auf Events, um das Aufwärtsblubbern von Events zu verhindern. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 einwandfrei funktioniert. Der Patch in [Firefox-Bug 330494](https://bugzil.la/330494) hat dies umgesetzt. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Event-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und [`window.routeEvent`](/de/docs/Web/API/Window/routeEvent) werden seit Gecko 1.9 als veraltet angesehen.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten geklont werden, indem [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder übernommen durch [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) verwendet wird, bevor sie in das aktuelle Dokument eingefügt werden. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt derzeit diese Regel nicht (es wurde eine Zeit lang während der Entwicklung von Firefox 3 erzwungen, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um dieser Regel für eine verbesserte zukünftige Kompatibilität zu folgen.

## Bereiche

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schnitt. Allerdings waren die Rückgabewerte dieser Funktion verwirrend und selten nützlich, weshalb sie in Gecko 1.9 entfernt wurde. Stattdessen sollte die genauere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwendet werden. Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Sehen Sie sich die Dokumentation für [intersectsNode](/de/docs/Web/API/Range/intersectsNode) an, um zu erfahren, wie `compareBoundaryPoints` stattdessen verwendet wird.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schnitt. Allerdings waren die Rückgabewerte dieser Funktion verwirrend und selten nützlich, weshalb sie in Gecko 1.9 entfernt wurde. Stattdessen sollte die genauere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints) verwendet werden. Der Patch in [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Sehen Sie sich die Dokumentation für [compareNode](/de/docs/Web/API/Range/compareNode) an, um zu erfahren, wie `compareBoundaryPoints` stattdessen verwendet wird.

## HTML

### Viele Fehler im `<object>` wurden behoben

`object` und `embed` Elemente benötigen keinen `type`-Attribut mehr, um gerendert zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat nun Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies gilt nicht für `embed`).
