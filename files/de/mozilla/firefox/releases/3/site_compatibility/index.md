---
title: Seitenkompatibilität für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Diese Seite versucht, einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise Websites in ihrem Verhalten oder bei der Darstellung beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Events

### Capturing von Load-Event-Listenern

In Gecko 1.8 war es nicht möglich, Capturing-Load-Event-Listener auf Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Event-Listener fälschlicherweise auf das Capturing des Load-Events eingestellt haben. Siehe die Diskussion im [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betroffene Seite den Capturing-Load-Event-Listener nicht setzen.

Beispielsweise sollte dieses:

```js
window.addEventListener("load", yourFunction, true);
```

geändert werden in dieses:

```js
window.addEventListener("load", yourFunction, false);
```

Für eine Erklärung, wie Event-Capture funktioniert, siehe [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` auf Events, um zu verhindern, dass Events nach oben bubbeln. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie die Standardmethode [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, die auch in Gecko 1.8 einwandfrei funktioniert. Der Patch im [Firefox-Bug 330494](https://bugzil.la/330494) hat dies möglich gemacht. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Event-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents) und `window.routeEvent` gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mithilfe von [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Für mehr Informationen zu [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) siehe die [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde sie für eine Weile durchgesetzt, aber zu viele Websites funktionierten nicht mehr, wenn diese Regel erzwungen wurde). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## Ranges

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schnitt. Allerdings waren die Rückgabewerte dieser Funktion verwirrend und selten nützlich und wurden daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation für [intersectsNode](/de/docs/Web/API/Range/intersectsNode), um zu erfahren, wie `compareBoundaryPoints` verwendet wird.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schnitt. Allerdings waren die Rückgabewerte dieser Funktion verwirrend und selten nützlich und wurden daher in Gecko 1.9 entfernt. Stattdessen verwenden Sie die präzisere und standardisierte Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation für [compareNode](/de/docs/Web/API/Range/compareNode), um zu erfahren, wie `compareBoundaryPoints` verwendet wird.

## HTML

### Viele Fehler im `<object>` wurden behoben

`object`- und `embed`-Elemente benötigen kein `type`-Attribut mehr, um gerendert zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat jetzt Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies gilt nicht für `embed`).
